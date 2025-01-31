/**
 * This file acts as a bridge so that content scripts call the chrome extension APIs
 *
 * It's also used to implement blocking of certain image requests so that users can use
 * Streak's email tracking features.
 * For more info about this feature, see: https://www.streak.com/email-tracking-in-gmail
 */

'use strict';

// TODO build this file with webpack and import this code from "@inboxsdk/core/background"
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'inboxsdk__injectPageWorld' && sender.tab) {
    let documentIds;
    let frameIds;
    if (sender.documentId) {
      // Protect against https://github.com/w3c/webextensions/issues/8 in
      // browsers (Chrome 106+) that support the documentId property.
      // Protections for other browsers happen inside the injected script.
      documentIds = [sender.documentId];
    } else {
      frameIds = [sender.frameId];
    }
    chrome.scripting.executeScript({
      target: {tabId: sender.tab.id, documentIds, frameIds},
      world: 'MAIN',
      files: ['pageWorld.js'],
    });
    sendResponse(true);
  }
});

// It's important to remember that this service worker is restarted often, so
// don't get too attached to any state you put in here. Remember it's ephemeral.
const connectionsByTabId = new Map();
const resultPromises = new Map();

const EMPTY_IMAGE_URL =
  'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';

var EMPTY_IMAGE = {
  redirectUrl: EMPTY_IMAGE_URL,
};

function setupTabInterceptor() {
  chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.url != null) {
      handleDeepLink(tabId, tab);
    }
  });

  chrome.tabs.query({currentWindow: true}).then(tabs => {
    for (const tab of tabs) {
      handleDeepLink(tab.id, tab);
    }
  });
}

function handleDeepLink(tabId, tab) {
  var newUrl = tab.url;
  var deepLinkOptions;

  if (!newUrl) return;

  var urlToGoTo;
  var parts;
  var clientType;

  if (newUrl.match(/^https:\/\/www\.streak\.com\/a\//)) {
    var appPath = newUrl.split('/a/')[1];
    parts = appPath.split('/');
    deepLinkOptions = {
      appPath: appPath,
      version: 2,
    };

    switch (parts[0]) {
      case 'boxes':
      case 'box':
        clientType = 'box';
        break;
      case 'pipeline':
      case 'pipelines':
        clientType = 'pipeline';
        break;
    }

    if (clientType) {
      urlToGoTo =
        'https://mail.google.com/#' +
        clientType +
        '/' +
        parts[1] +
        (parts[2] ? '/' + parts[2] : '');
    }
  }

  if (!deepLinkOptions) return;

  trackEvent('deepLink.click', {
    fullHref: newUrl,
  });

  const tabIds = Array.from(connectionsByTabId.keys());

  tryToDeepLink(deepLinkOptions, tabIds).then(function (response) {
    if (response) {
      var tabIdWithData = response.tabId;

      if (tabIdWithData != null) {
        chrome.tabs.remove(tabId);
        chrome.tabs.update(tabIdWithData, {
          active: true,
        });
      } else {
        chrome.tabs.update(tabId, {
          url: response.setNewTabUrl,
        });
      }
    } else {
      if (urlToGoTo) {
        chrome.tabs.update(tabId, {
          url: urlToGoTo,
        });
      }
    }
  });
}

function tryToDeepLink(linkDetails, tabIds) {
  if (tabIds.length === 0) return Promise.resolve(null);

  var tabId = tabIds.shift();

  return callIntoContentScript(tabId, linkDetails, 'goTo')
    .catch(function () {
      return null;
    })
    .then(function (response) {
      if (response) {
        if (response.found) return {tabId: tabId};
        else if (tabIds.length === 0) return {setNewTabUrl: response.setNewTabUrl};
      }
      return tryToDeepLink(linkDetails, tabIds);
    });
}

function callIntoContentScript(tabId, data, op) {
  return new Promise((resolve, reject) => {
    const connection = connectionsByTabId.get(tabId);
    if (connection) {
      const exchangeId = Math.random() + '.' + Date.now();
      resultPromises.set(exchangeId, {resolve, reject});

      connection.port.postMessage({
        data,
        op,
        exchangeId,
        isFromBackgroundPage: true,
      });
    } else {
      reject(new Error('No connection for tab'));
    }
  });
}

function responseToBackgroundPageInitiatedEvent(data, connection, exchangeId, error) {
  const promiseCallbacks = resultPromises.get(exchangeId);
  if (promiseCallbacks) {
    resultPromises.delete(exchangeId);
    const {resolve, reject} = promiseCallbacks;

    if (error) {
      reject(error);
    } else {
      resolve(data);
    }
  }
}

function deserializeRegExpList(serialized) {
  return serialized.map(function (item) {
    return new RegExp(item.source, item.flags);
  });
}

const upsertGlobalImageRules = (rules, callback) => {
  chrome.declarativeNetRequest.getDynamicRules(dynamicRules => {
    // first clear existing rules with same urlFilters,
    // because the rule condition could have been updated and should override currently stored ones
    chrome.declarativeNetRequest.updateDynamicRules(
      {
        removeRuleIds: dynamicRules
          .filter(
            r =>
              imageRulePredicate(r) &&
              rules.some(r1 => r1.condition.urlFilter === r.condition.urlFilter),
          )
          .map(r => r.id),
      },
      () => {
        chrome.declarativeNetRequest.getDynamicRules(dynamicRules => {
          const imageRules = dynamicRules.filter(imageRulePredicate);

          const rulesToAdd = rules.filter(
            r => !imageRules.some(r1 => r1.condition.urlFilter === r.condition.urlFilter),
          );

          let maxDynamicRuleId = Math.max(0, ...dynamicRules.map(r => r.id));

          chrome.declarativeNetRequest.updateDynamicRules(
            {
              addRules: rulesToAdd.map(r => ({
                ...r,
                id: ++maxDynamicRuleId,
              })),
            },
            () => {
              chrome.declarativeNetRequest.getDynamicRules(dynamicRules => {
                callback({
                  dynamicImageRules: dynamicRules.filter(imageRulePredicate),
                });
              });
            },
          );
        });
      },
    );
  });
};

const replaceTabImageRules = (tabId, rules, callback) => {
  chrome.declarativeNetRequest.getSessionRules(sessionRules => {
    chrome.declarativeNetRequest.updateSessionRules(
      {
        removeRuleIds: sessionRules
          .filter(r => imageRulePredicate(r) && r.condition.tabIds.includes(tabId))
          .map(r => r.id),
      },
      () => {
        chrome.declarativeNetRequest.getSessionRules(sessionRules => {
          let maxSessionRuleId = Math.max(0, ...sessionRules.map(r => r.id));

          chrome.declarativeNetRequest.updateSessionRules(
            {
              addRules: rules.map(r => ({
                ...r,
                id: ++maxSessionRuleId,
                condition: {
                  ...r.condition,
                  tabIds: [tabId],
                },
              })),
            },
            () => {
              callback();
            },
          );
        });
      },
    );
  });
};

const imageRulePredicate = r =>
  r.condition &&
  r.condition.urlFilter &&
  r.condition.resourceTypes &&
  r.condition.resourceTypes.includes('image');

const mapUrlFilterToRedirectRule = urlFilter => {
  return {
    priority: 1,
    action: {
      redirect: {url: EMPTY_IMAGE_URL},
      type: 'redirect',
    },
    condition: {
      requestDomains: ['googleusercontent.com', 'mailfoogae.appspot.com'],
      resourceTypes: ['image'],
      urlFilter: urlFilter,
      isUrlFilterCaseSensitive: false,
    },
  };
};

function setImageUrlFilters(tabId, urlFilters) {
  urlFilters = urlFilters || [];

  /**
   * on global level (dynamic rules) block all images for all gmail accounts that extension run on.
   * and for the specific tab allow image urls that are not related to the gmail account in the tab.
   * This will prevent tracking emails when tab is reloaded (because image will be blocked by dynamic rules) but
   * will allow tracking of all other images from other user's account in the same browser once `setImageUrlFilters` is called.
   */

  upsertGlobalImageRules(urlFilters.map(mapUrlFilterToRedirectRule), ({dynamicImageRules}) => {
    const rulesToAllow = dynamicImageRules.filter(r => !urlFilters.includes(r.condition.urlFilter));

    replaceTabImageRules(
      tabId,
      rulesToAllow.map(r => ({
        ...r,
        action: {type: 'allow'},
      })),
      () => {
        // done
      },
    );
  });
}

// Methods that can be called from the content script.
const portResponders = {
  // used to look for known incompatible extensions
  extensionListRequest: {
    legacyResponseName: 'extensionListResponse',
    handler() {
      if (chrome.management?.getAll) {
        return chrome.management.getAll();
      } else {
        // Safari doesn't support chrome.management currently
        return [];
      }
    },
  },
  setUninstallURL: {
    handler(data, connection) {
      return chrome.runtime.setUninstallURL(data.url);
    },
  },
  setImageURLblockers: {
    handler: function (data, connection) {
      if (data.whitelist) {
        connection.imageURLwhitelist = deserializeRegExpList(data.whitelist);
      }
      if (data.blockers) {
        connection.imageURLblockers = deserializeRegExpList(data.blockers);
      }
      if (data.globalWhitelist && data.globalBlockers) {
        // The global blockers are more picky in what they block than the
        // connection-specific blockers, because there's no guarantee that the
        // page will be able to undo the block.
        // TODO these aren't used in MV3, figure out if they should be used
      }
      setImageUrlFilters(connection.port.sender.tab.id, data.urlFilters);
    },
  },
  openUrlInExistingTabIfPossible: {
    async handler(data, connection) {
      const url = new URL(data);

      let tabs = await chrome.tabs.query({
        url: '*://' + url.host + '/*',
      });

      // Safari doesn't always respect url query
      tabs = tabs.filter(tab => tab.url.includes(`://${url.host}/`));

      if (tabs && tabs.length > 0) {
        chrome.tabs.update(tabs[0].id, {
          active: true,
          url: data,
        });
      } else {
        chrome.tabs.create({
          url: data,
          active: true,
        });
      }
    },
  },
  default: {
    handler: function () {
      throw new Error('Unknown op');
    },
  },
};

function setupPort(port) {
  if (port.name && port.name !== 'main') {
    return;
  }

  let connection = {
    port: port,
    imageURLwhitelist: [],
    imageURLblockers: [],
  };
  const existingConnection = connectionsByTabId.get(port.sender.tab.id);
  if (existingConnection) {
    existingConnection.port.disconnect();
  }
  connectionsByTabId.set(port.sender.tab.id, connection);

  port.onMessage.addListener(function (request) {
    if (request.op === 'responseToBackgroundPageInitiatedEvent') {
      responseToBackgroundPageInitiatedEvent(
        request.data,
        connection,
        request.exchangeId,
        request.error,
      );
      return;
    }

    var responder = Object.prototype.hasOwnProperty.call(portResponders, request.op)
      ? request.op
      : 'default';

    Promise.resolve()
      .then(function () {
        return portResponders[responder].handler(request.data, connection);
      })
      .then(
        function (response) {
          var message = {id: request.id, data: response};
          if (portResponders[responder].legacyResponseName) {
            // Eventually the combined.js code should just find the response by id,
            // instead of relying on this.
            message.op = portResponders[responder].legacyResponseName;
          }
          port.postMessage(message);
        },
        function (error) {
          // eslint-disable-next-line no-console
          console.error('Error in portResponder:', error);
          port.postMessage({
            id: request.id,
            error: true,
            message: error && error.message,
            stack: error && error.stack,
          });
        },
      );
  });

  port.onDisconnect.addListener(function () {
    if (connectionsByTabId.get(port.sender.tab.id) === connection) {
      connectionsByTabId.delete(port.sender.tab.id);
    }
    connection = null;
  });

  queuedEvents.slice().forEach(event => {
    callIntoContentScript(port.sender.tab.id, event, 'trackEvent').then(response => {
      if (response) {
        // remove event from queuedEvents if the tab accepted the trackEvent message
        var idx = queuedEvents.indexOf(event);
        if (idx >= 0) {
          queuedEvents.splice(idx, 1);
        }
      }
    });
  });
}

function setupOneTimeMessageHandling() {
  chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    var responder = Object.prototype.hasOwnProperty.call(portResponders, request.op)
      ? request.op
      : null;

    if (!responder) {
      return;
    }

    Promise.resolve()
      .then(function () {
        return portResponders[responder].handler(request.data);
      })
      .then(function (response) {
        var message = {id: request.id, data: response};
        sendResponse(message);
      })
      .catch(function (err) {
        // eslint-disable-next-line no-console
        console.error('Error in setupOneTimeMessageHandling', err);
        sendResponse({
          id: request.id,
          error: true,
          message: err && err.message,
          stack: err && err.stack,
        });
      });

    if (sendResponse) {
      return true;
    }
  });
}

let queuedEvents = [];
function trackEvent(eventName, extra) {
  // go through open tabs and try to find one to send the event to.
  // otherwise queue it up for a future tab.

  const event = {eventName, extra};

  const tabIds = Array.from(connectionsByTabId.keys());

  function attemptTrackInNextTab() {
    // returns Promise<boolean>
    if (tabIds.length === 0) return Promise.resolve(false);

    var tabId = tabIds.shift();

    return callIntoContentScript(tabId, event, 'trackEvent')
      .catch(function () {
        return null;
      })
      .then(function (response) {
        if (response) {
          return true;
        } else {
          return attemptTrackInNextTab();
        }
      });
  }

  attemptTrackInNextTab().then(success => {
    if (!success) {
      queuedEvents.push(event);
    }
  });
}

chrome.runtime.onInstalled.addListener(details => {
  if (details.reason === 'install') {
    // Our website has a page instructing the user on how to install the
    // extension, and it listens for this event to know when the extension has
    // been installed.
    chrome.tabs.query({url: 'https://www.streak.com/*'}).then(tabs => {
      // Safari doesn't always respect url query
      tabs = tabs.filter(tab => tab.url.startsWith('https://www.streak.com/'));

      for (const tab of tabs) {
        chrome.scripting.executeScript({
          target: {tabId: tab.id},
          func: () => window.dispatchEvent(new CustomEvent('onStreakInstall')),
        });
      }

      const lastStreakTab = tabs.at(-1);
      if (lastStreakTab) {
        chrome.tabs.update(lastStreakTab.id, {active: true});
      }
    });
  } else if (details.reason === 'update') {
    // Find tabs that might have Streak running in Gmail and notify them that
    // the extension has been updated.
    chrome.tabs.query({url: 'https://mail.google.com/*'}).then(tabs => {
      // Safari doesn't always respect url query
      tabs = tabs.filter(tab => tab.url.startsWith('https://mail.google.com/'));

      const {version} = chrome.runtime.getManifest();
      for (const tab of tabs) {
        chrome.scripting.executeScript({
          target: {tabId: tab.id},
          args: [version],
          func: version =>
            window.dispatchEvent(
              new CustomEvent('onStreakUpdate', {
                detail: {version},
              }),
            ),
        });
      }
    });
  }
});

chrome.runtime.onConnect.addListener(setupPort);
setupTabInterceptor();
setupOneTimeMessageHandling();

// When an extension update is available, by default Chrome seems to wait until
// the Gmail tab with Streak is closed for a while before applying the update.
// This is bad for us because users tend to keep Gmail open all the time, so
// they might only get Streak updates once they restart their browser. It might
// be doing this to avoid risking interrupting the user, however Streak in Gmail
// isn't very affected by the extension reloading, so we can trigger that
// ourselves immediately because we know it's safe for us.
chrome.runtime.onUpdateAvailable.addListener(() => {
  chrome.runtime.reload();
});
