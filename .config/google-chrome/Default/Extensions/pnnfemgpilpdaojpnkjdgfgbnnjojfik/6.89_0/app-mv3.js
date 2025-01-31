/*!
	* Streak (www.streak.com) is a venture backed company which adds CRM (customer relationship management) to
	* Gmail. Streak also provides a useful set of power tools for email that make using Gmail more effective
	* for power users. These tools including sending mail merges, providing email tracking, snoozing emails
	* and powerful text snippets.

	* Streak is a venture backed company based in San Francisco, CA. Founded in 2011 by former Googler
	* Aleem Mawani and Omar Ismail, Streak is beloved by hundreds of thousands of users worldwide.
	*
	* Please consult these resources for more information:
	*
	* PRESS ABOUT STREAK
	* - TechCrunch: http://techcrunch.com/2012/10/15/streak-raises-1-9-million-for-gmail-based-crm-app/
	* - TechCrunch: http://techcrunch.com/2012/03/21/gmail-streak/
	* - TechCrunch: http://techcrunch.com/2013/08/07/streaks-new-iphone-app-is-a-crm-service-with-gmail-baked-in/
	* -
	* - Gigaom: http://research.gigaom.com/2014/02/218523/
	* - Wired: http://www.wired.com/2012/10/crm-for-your-life/
	* - Lifehacker: http://lifehacker.com/streak-for-gmail-adds-an-email-snooze-button-to-keep-1603538870
	* - Lifehacker: http://lifehacker.com/5895475/streak-supercharges-gmail-with-text-expansion-scheduled-emails-event-planning-and-more
	* - New York Post: http://nypost.com/2012/04/22/streaking-through-your-e-mail/
	*
	* INVESTORS IN STREAK
	* - YCombinator
	* - Battery Ventures
	* - Redpoint Ventures
	* - Chris Sacca
	* - For a full list see: https://angel.co/streak and https://www.crunchbase.com/organization/streak
	*
	* ADVISORS TO STREAK
	* - Paul Buchheit, Founder of Gmail @ Google
	*
	* USERS LOVE STREAK, REVIEWS:
	* - Chrome Webstore: https://chromewebstore.google.com/detail/streak-crm-for-gmail/pnnfemgpilpdaojpnkjdgfgbnnjojfik/reviews
	* - Twitter: https://twitter.com/search?q=%40streak&f=tweets
	*
	* ABOUT THE STREAK TEAM:
	* - https://www.streak.com/about
	*/

'use strict';
/* global chrome, safari */

(function () {
  function findClientJsStylesheet(fullhref) {
    return Array.from(document.querySelectorAll(`link[rel=stylesheet][href]`)).find(
      stylesheet => stylesheet.getAttribute('href') === fullhref,
    );
  }

  function createClientJsStylesheet(fullhref) {
    return new Promise((resolve, reject) => {
      const linkTag = document.createElement('link');
      linkTag.rel = 'stylesheet';
      linkTag.type = 'text/css';
      linkTag.onerror = linkTag.onload = function onLinkComplete(event) {
        // avoid mem leaks.
        linkTag.onerror = linkTag.onload = null;
        if (event.type === 'load') {
          resolve();
        } else {
          const errorType = event && event.type;
          const realHref = (event && event.target && event.target.href) || fullhref;
          const err = new Error('Loading CSS chunk failed.\n(' + errorType + ': ' + realHref + ')');
          err.name = 'ChunkLoadError';
          err.code = 'CSS_CHUNK_LOAD_FAILED';
          err.type = errorType;
          err.request = realHref;
          if (linkTag.parentNode) linkTag.parentNode.removeChild(linkTag);
          reject(err);
        }
      };
      linkTag.href = fullhref;
      document.head.appendChild(linkTag);
    });
  }

  async function loadClientJsStylesheet(href) {
    const fullhref = chrome.runtime.getURL(`clientjs/${href}`);
    if (findClientJsStylesheet(fullhref)) return;
    await createClientJsStylesheet(fullhref);
  }

  async function loadClientJsEntryPoint(entryPoint) {
    const entryManifestReq = await fetch(chrome.runtime.getURL('clientjs/entryManifest.json'));
    if (!entryManifestReq.ok) {
      throw new Error(`Failed to load entryManifest.json: ${entryManifestReq.status}`);
    }
    const entryManifest = await entryManifestReq.json();
    const entryPointFiles = entryManifest[entryPoint];
    if (!Array.isArray(entryPointFiles)) {
      throw new Error(`Invalid entry point: ${entryPoint}`);
    }
    for (const file of entryPointFiles) {
      if (file.endsWith('.css')) {
        await loadClientJsStylesheet(file);
      } else {
        await import(`./clientjs/${file}`);
      }
    }
  }

  // Prevent double-loading the extension if the user has multiple versions of
  // it installed (or is in Safari and has re-enabled the extension while
  // there's a Gmail tab that already had Streak loaded in it).
  if (document.documentElement.getAttribute('data-streak-extension') === 'true') {
    return;
  }

  if (
    document.location.origin === 'https://mail.google.com' &&
    !document.location.href.startsWith('https://mail.google.com/chat/')
  ) {
    loadStreakInGmailOrInbox();
  } else if (
    document.location.origin === 'https://docs.google.com' &&
    document.location.href.includes('/spreadsheets/')
  ) {
    loadStreakInSheets();
  } else if (
    /^https:\/\/[^/:]+\.google\.com(?:\/u\/\d+)?\/marketplace\/appfinder\/category\/works-with-spreadsheet/.test(
      document.location.href,
    )
  ) {
    loadStreakInSheetsStore();
  } else if (
    /^https:\/\/dev.streak.com:8888\/browsertests\/mockGmail/.test(document.location.href)
  ) {
    loadStreakInGmailOrInbox();
  }

  function loadStreakInGmailOrInbox() {
    // Only run this script in the top-most frame (there are multiple frames in Gmail)
    if (window.top !== window) return;

    window.originalLocationHash = window.location.hash;

    // Mark extension as active so compatible extensions can recognize the presence of this.
    document.documentElement.setAttribute('data-streak-extension', 'true');

    loadClientJsEntryPoint('app.js');
  }

  function loadStreakInSheets() {
    // Only run this script in the top-most frame (there are multiple frames in Sheets)
    if (window.top !== window) return;
    document.documentElement.setAttribute('data-streak-extension', 'true');
    loadClientJsEntryPoint('sheetsApp.js');
  }

  function loadStreakInSheetsStore() {
    document.documentElement.setAttribute('data-streak-extension', 'true');
    loadClientJsEntryPoint('sheetsStoreApp.js');
  }
})();
