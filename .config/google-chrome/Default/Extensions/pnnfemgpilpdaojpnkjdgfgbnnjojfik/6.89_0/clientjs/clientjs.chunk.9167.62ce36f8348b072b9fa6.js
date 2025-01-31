"use strict";
export const id = 9167;
export const ids = [9167];
export const modules = {

/***/ 19167:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DISMISSED_PIXEL_TRACKER_BANNER: () => (/* binding */ DISMISSED_PIXEL_TRACKER_BANNER)
/* harmony export */ });
/* harmony import */ var _streakyc_common_core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77294);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69980);
/* harmony import */ var _bumpLater_awaitingReply_awaitingReplyThreadList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92911);
/* harmony import */ var _permissionBanner_PermissionBanner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10080);
/* harmony import */ var _pixelTracker_recentViews_pixelTrackerRecentViewsThreadList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(51049);
/* harmony import */ var _lib_dependencyManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(54612);
/* harmony import */ var _core_appShell__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(81022);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(35091);
/* harmony import */ var _services_tracker_tracker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(13778);
/* harmony import */ var _widgets_react_material_button_streakButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(22682);
/* harmony import */ var _services_data_data__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(38672);
/* harmony import */ var _core_routing__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(58556);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_bumpLater_awaitingReply_awaitingReplyThreadList__WEBPACK_IMPORTED_MODULE_2__, _pixelTracker_recentViews_pixelTrackerRecentViewsThreadList__WEBPACK_IMPORTED_MODULE_4__, _services_data_data__WEBPACK_IMPORTED_MODULE_10__]);
([_bumpLater_awaitingReply_awaitingReplyThreadList__WEBPACK_IMPORTED_MODULE_2__, _pixelTracker_recentViews_pixelTrackerRecentViewsThreadList__WEBPACK_IMPORTED_MODULE_4__, _services_data_data__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const DISMISSED_PIXEL_TRACKER_BANNER = 'dismissed_pixel_tracker_banner';
let shownOnce = false;
// jasen ran the stats and got this number, if we decide to change, check in with him
const TOTAL_BOXES_THRESHOLD_TO_HIDE_BANNER = 400;
function init() {
  _streakyc_common_core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_0__.inboxSDK.Router.handleListRoute(_streakyc_common_core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_0__.inboxSDK.Router.NativeRouteIDs.ANY_LIST, listRouteView => {
    const routeId = listRouteView.getRouteID();
    const {
      query
    } = listRouteView.getParams();
    if (!routeId || localStorage.getItem(DISMISSED_PIXEL_TRACKER_BANNER)) {
      return;
    }
    const onTrackingRoute = routeId === _core_routing__WEBPACK_IMPORTED_MODULE_11__/* .StreakCustomRoute */ .ld.RECENTLY_VIEWED && (0,_pixelTracker_recentViews_pixelTrackerRecentViewsThreadList__WEBPACK_IMPORTED_MODULE_4__.getRecentViewsThreadCount)() > 0 || routeId === _core_routing__WEBPACK_IMPORTED_MODULE_11__/* .StreakCustomRoute */ .ld.AWAITING_REPLY && (0,_bumpLater_awaitingReply_awaitingReplyThreadList__WEBPACK_IMPORTED_MODULE_2__.getAwaitingReplyThreadCount)() > 0 || routeId === _streakyc_common_core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_0__.inboxSDK.Router.NativeRouteIDs.SEARCH && query === _core_routing__WEBPACK_IMPORTED_MODULE_11__/* .StreakSearchQuery */ .ZY.ALL_TRACKED_EMAILS_SEARCH_TERM;
    if (!onTrackingRoute) {
      return;
    }
    const totalBoxesCount = _services_data_data__WEBPACK_IMPORTED_MODULE_10__/* .Data */ .V.getAllPipelines().reduce((c, pc) => c + (pc.getNoDefault('boxCountHint') ?? 0), 0);
    const isCrmUser = totalBoxesCount >= TOTAL_BOXES_THRESHOLD_TO_HIDE_BANNER;
    if (isCrmUser) {
      return;
    }
    const el = document.createElement('div');
    if (!shownOnce) {
      shownOnce = true;
      _services_tracker_tracker__WEBPACK_IMPORTED_MODULE_8__["default"].track("pixelTrackerBanner.bannerShown");
    }
    (0,_core_appShell__WEBPACK_IMPORTED_MODULE_6__/* .renderWithAppShell */ .oC)(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(PixelTrackerBanner, {}), el);
    const sectionView = listRouteView.addSection({
      contentElement: el,
      orderHint: 0 // this should be the smallest so it shows up at the top
    });
    sectionView.on('destroy', () => {
      react_dom__WEBPACK_IMPORTED_MODULE_1__.unmountComponentAtNode(el);
    });
  });
}
function PixelTrackerBanner() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_permissionBanner_PermissionBanner__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    actionRenderer: () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_widgets_react_material_button_streakButton__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP, {
      accent: "default",
      onClick: () => {
        // we have moved the in-app tour to userflow
        // https://userflow.com/app/streak/flows/21f219a6-5ec2-4452-9126-e9dd8c226948/builder
        _services_tracker_tracker__WEBPACK_IMPORTED_MODULE_8__["default"].track("pixelTrackerBanner.tour.start");
      },
      variant: "text",
      children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.getString('show_me_how')
    }),
    backgroundColor: "rgba(95, 120, 218, 0.12)",
    iconAccent: "success",
    iconName: "remove_red_eye",
    mainText: _services_locale_locale__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.getArray('email_tracking_banner', {
      features: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("b", {
        children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.getString('email_tracking_banner_features')
      }, "features")
    })
  });
}
_lib_dependencyManager__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP.addFunction({
  functionKey: 'pixelTrackerBannerInitialized',
  functionReference: init,
  dependentFunctionKeys: ['awaitingReplyThreadListSearchInitialized', 'pixelTrackerRecentViewsSearchInitialized', 'data.pipelines.initialized']
});
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
//# sourceMappingURL=https://storage.googleapis.com/streak-extension-sourcemaps/clientjs/clientjs.chunk.9167.62ce36f8348b072b9fa6.js.map