"use strict";
export const id = 559;
export const ids = [559];
export const modules = {

/***/ 52354:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ LAST_NAV_ITEM_TRACKED_EMAIL_ROUTE)
/* harmony export */ });
const LAST_NAV_ITEM_TRACKED_EMAIL_ROUTE = 'last_nav_item_active_tracked_emails_route';

/***/ }),

/***/ 87986:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  s: () => (/* binding */ ToggleButtons)
});

// EXTERNAL MODULE: ./extensions/common/js/ui/components/index.ts + 13 modules
var components = __webpack_require__(87084);
;// CONCATENATED MODULE: ./extensions/common/js/modules/pixelTracker/emailTrackingToggle/internal/toggleButtons.module.css
// extracted by mini-css-extract-plugin
var _1 = "streak-mod__R_4t2mLQUpzdHeiUR_zn";
var _2 = "streak-mod__Ho4TxDXTpeBaFMQLIZ4C";
var _3 = "streak-mod__KHTlRL4BDWHALW2vWKA7";


// EXTERNAL MODULE: ./.yarn/cache/classnames-npm-2.5.1-c7273f3423-58eb394e88.zip/node_modules/classnames/index.js
var classnames = __webpack_require__(47587);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./.yarn/cache/react-npm-18.3.1-af38f3c1ae-261137d3f3.zip/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(59718);
;// CONCATENATED MODULE: ./extensions/common/js/modules/pixelTracker/emailTrackingToggle/internal/toggleButtons.tsx




function ToggleButtons(_ref) {
  let {
    buttons
  } = _ref;
  if (buttons.length < 2) {
    throw new Error('ToggleButtons must have at least 2 buttons');
  }
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: _3,
    children: buttons.map((button, index) => {
      return /*#__PURE__*/(0,jsx_runtime.jsxs)(components/* Tooltip */.u, {
        placement: "bottom",
        delay: "300ms",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(components/* TooltipTrigger */.aJ, {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: classnames_default()(_2, {
              [_1]: button.isActive
            }),
            onClick: () => {
              if (button.isActive) {
                return;
              }
              button.onClick();
            },
            "aria-disabled": button.isActive,
            tabIndex: 0,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(components/* Typo */.Jd, {
              variant: "button/bold",
              children: button.text
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(components/* TooltipContent */._v, {
          children: button.tooltip
        })]
      }, index);
    })
  });
}

/***/ }),

/***/ 68383:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69980);
/* harmony import */ var _core_appShell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81022);
/* harmony import */ var _core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77294);
/* harmony import */ var _core_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(58556);
/* harmony import */ var _lib_dependencyManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54612);
/* harmony import */ var _core_enabledFeaturesController__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(50452);
/* harmony import */ var _internal_toggleButtons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(87986);
/* harmony import */ var _services_tracker_tracker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(13778);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(35091);
/* harmony import */ var _services_localSettings_localSettings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(55868);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(52354);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_core_enabledFeaturesController__WEBPACK_IMPORTED_MODULE_5__]);
_core_enabledFeaturesController__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];












_lib_dependencyManager__WEBPACK_IMPORTED_MODULE_4__/* .DependencyManager */ .Lm.addFunction({
  functionKey: 'emailTrackingToggleInitialized',
  functionReference: init,
  dependentFunctionKeys: ['gmailLoaded', 'localeLoaded', 'userLoggedIn', 'enabledFeaturesControllerInitialized', 'pixelTrackerRecentViewsSearchInitialized']
});
function init() {
  const leftNavEnabled = _core_enabledFeaturesController__WEBPACK_IMPORTED_MODULE_5__.EnabledFeatures.isExperimentEnabled('leftNavRevampExp') || _core_enabledFeaturesController__WEBPACK_IMPORTED_MODULE_5__.EnabledFeatures.isExperimentEnabled('contactsViewExp') || _core_enabledFeaturesController__WEBPACK_IMPORTED_MODULE_5__.EnabledFeatures.isExperimentEnabled('orgsViewExp');
  if (!leftNavEnabled) {
    return;
  }
  _core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_2__.inboxSDK.Router.handleListRoute(_core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_2__.inboxSDK.Router.NativeRouteIDs.ANY_LIST, listRouteView => {
    const routeId = listRouteView.getRouteID();
    const {
      query
    } = listRouteView.getParams();
    const isAllTrackedEmailsRoute = routeId === _core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_2__.inboxSDK.Router.NativeRouteIDs.SEARCH && query === _core_routing__WEBPACK_IMPORTED_MODULE_3__/* .StreakSearchQuery */ .ZY.ALL_TRACKED_EMAILS_SEARCH_TERM;
    const isRecentView = routeId === _core_routing__WEBPACK_IMPORTED_MODULE_3__/* .StreakCustomRoute */ .ld.RECENTLY_VIEWED;
    const isEmailTrackingRoute = isAllTrackedEmailsRoute || isRecentView;
    if (!isEmailTrackingRoute) {
      return;
    }
    const element = document.createElement('div');
    listRouteView.addSection({
      contentElement: element,
      orderHint: 1 // this should be after other email tracking banner if it presents so it shows up closer to thread lists
    });
    listRouteView.hideSearchPageFilterToolbar();
    listRouteView.on('destroy', () => {
      react_dom__WEBPACK_IMPORTED_MODULE_0__.unmountComponentAtNode(element);
    });
    (0,_core_appShell__WEBPACK_IMPORTED_MODULE_1__/* .renderWithAppShell */ .oC)(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
      style: {
        display: 'flex',
        margin: '16px'
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_internal_toggleButtons__WEBPACK_IMPORTED_MODULE_6__/* .ToggleButtons */ .s, {
        buttons: [{
          text: _services_locale_locale__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z.getString('all'),
          tooltip: _services_locale_locale__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z.getString('show_all_tracked_emails'),
          onClick: () => {
            _services_tracker_tracker__WEBPACK_IMPORTED_MODULE_7__["default"].track('allTrackedEmails.click');
            const routeId = _core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_2__.inboxSDK.Router.NativeRouteIDs.SEARCH;
            const params = {
              query: _core_routing__WEBPACK_IMPORTED_MODULE_3__/* .StreakSearchQuery */ .ZY.ALL_TRACKED_EMAILS_SEARCH_TERM,
              page: 1
            };
            _services_localSettings_localSettings__WEBPACK_IMPORTED_MODULE_9__.InMemorySettings.set(_constants__WEBPACK_IMPORTED_MODULE_11__/* .LAST_NAV_ITEM_TRACKED_EMAIL_ROUTE */ .w, {
              routeId,
              params
            });
            _core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_2__.inboxSDK.Router.goto(routeId, params);
          },
          isActive: isAllTrackedEmailsRoute
        }, {
          text: _services_locale_locale__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z.getString('recently_viewed'),
          tooltip: _services_locale_locale__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z.getString('show_recently_viewed_emails'),
          onClick: () => {
            _services_tracker_tracker__WEBPACK_IMPORTED_MODULE_7__["default"].track('recentlyViewed.click');
            const routeId = _core_routing__WEBPACK_IMPORTED_MODULE_3__/* .StreakCustomRoute */ .ld.RECENTLY_VIEWED;
            _services_localSettings_localSettings__WEBPACK_IMPORTED_MODULE_9__.InMemorySettings.set(_constants__WEBPACK_IMPORTED_MODULE_11__/* .LAST_NAV_ITEM_TRACKED_EMAIL_ROUTE */ .w, {
              routeId,
              params: {}
            });
            _core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_2__.inboxSDK.Router.goto(routeId);
          },
          isActive: isRecentView
        }]
      })
    }), element);
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
//# sourceMappingURL=https://storage.googleapis.com/streak-extension-sourcemaps/clientjs/clientjs.chunk.559.c1cee53bebeca870b9c9.js.map