"use strict";
export const id = 4781;
export const ids = [4781];
export const modules = {

/***/ 44781:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sentry_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21680);
/* harmony import */ var _modules_billing_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87872);
/* harmony import */ var _services_data_commonData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90885);
/* harmony import */ var _dependencyManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54612);
/* harmony import */ var _log_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7961);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_modules_billing_helpers__WEBPACK_IMPORTED_MODULE_0__, _services_data_commonData__WEBPACK_IMPORTED_MODULE_1__]);
([_modules_billing_helpers__WEBPACK_IMPORTED_MODULE_0__, _services_data_commonData__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





_sentry_browser__WEBPACK_IMPORTED_MODULE_4__/* .setTag */ .YA('plan', 'not-logged-in');
function switchTags() {
  if ((0,_modules_billing_helpers__WEBPACK_IMPORTED_MODULE_0__/* .isAnyTeamOnPremiumPlan */ .z9)()) {
    (0,_log_error__WEBPACK_IMPORTED_MODULE_3__/* .setSentrySampleRate */ .r7)(_log_error__WEBPACK_IMPORTED_MODULE_3__/* .SAMPLE_RATES */ .l_.PAID_USER);
    _sentry_browser__WEBPACK_IMPORTED_MODULE_4__/* .setTag */ .YA('plan', 'paid');
  } else {
    (0,_log_error__WEBPACK_IMPORTED_MODULE_3__/* .setSentrySampleRate */ .r7)(_log_error__WEBPACK_IMPORTED_MODULE_3__/* .SAMPLE_RATES */ .l_.FREE_USER);
    _sentry_browser__WEBPACK_IMPORTED_MODULE_4__/* .setTag */ .YA('plan', 'free');
  }
}
async function configureSentrySampleRate() {
  await _dependencyManager__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP.whenAllFunctionsFinished(['userLoggedIn', 'data.teams.initialized']);
  switchTags();
  _services_data_commonData__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.getTeams().getChangeEventStream().onValue(() => {
    switchTags();
  });
}
configureSentrySampleRate();
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
//# sourceMappingURL=https://storage.googleapis.com/streak-extension-sourcemaps/clientjs/clientjs.chunk.4781.683e4d1633241d488b66.js.map