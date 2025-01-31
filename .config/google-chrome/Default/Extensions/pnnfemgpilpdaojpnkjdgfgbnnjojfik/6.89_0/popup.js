document.querySelector('#cta-close').addEventListener('click', e => {
  window.close();
});

document.querySelector('#cta-main').addEventListener('click', e => {
  chrome.tabs.query({url: 'https://mail.google.com/*'}).then(tabs => {
    // Safari doesn't always respect url query
    tabs = tabs.filter(tab => tab.url.startsWith('https://mail.google.com/'));

    if (tabs.length > 0) {
      chrome.tabs.update(tabs[0].id, {
        active: true,
      });
    } else {
      chrome.tabs.create({
        active: true,
        url: 'https://mail.google.com/',
      });
    }
  });
});
