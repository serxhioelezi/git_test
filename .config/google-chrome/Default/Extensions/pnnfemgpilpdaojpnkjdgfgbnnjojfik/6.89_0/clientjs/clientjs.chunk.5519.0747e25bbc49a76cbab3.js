"use strict";
export const id = 5519;
export const ids = [5519];
export const modules = {

/***/ 15519:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _streakyc_common_core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77294);
/* harmony import */ var _streakyc_common_services_data_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5575);
/* harmony import */ var _lib_dependencyManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54612);
/* harmony import */ var _lib_log_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7961);




const allowedDomains = ['https://streaklinks.com', 'https://streak-link.com'];

/**
 *  The actual self blocking is handled by server, which requires client to pass clicker's email as query params.
 */
function appendEmailToStreakLinks(mv) {
  const streakLinks = mv.getLinksInBody().filter(link => allowedDomains.some(domain => link.href.startsWith(domain)));
  for (const link of streakLinks) {
    const {
      href
    } = link;
    let parsed = null;
    try {
      parsed = new URL(href);
    } catch (e) {
      (0,_lib_log_error__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)({
        err: e,
        level: 'debug'
      });
    }
    if (!parsed) {
      continue;
    }

    // Don't re-append email to links that already have the user email as a query param.
    const emailParams = parsed.searchParams.get('email');
    const userEmail = (0,_streakyc_common_services_data_user__WEBPACK_IMPORTED_MODULE_3__/* .getUser */ .P)().getEmail();
    if (!emailParams || !emailParams?.includes(userEmail)) {
      parsed.searchParams.append('email', userEmail);
    }
    const linkTo = parsed.toString();
    link.element.href = linkTo;
    // Gmail's `data-saferedirecturl` is used by Gmail's click handler.
    link.element.removeAttribute('data-saferedirecturl');
  }
}
_lib_dependencyManager__WEBPACK_IMPORTED_MODULE_1__/* .DependencyManager */ .Lm.addFunction({
  functionKey: 'linkTracking.emailsAppended',
  functionReference: function () {
    _streakyc_common_core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_0__.inboxSDK.Conversations.registerMessageViewHandler(messageView => {
      appendEmailToStreakLinks(messageView);
    });
  },
  dependentFunctionKeys: ['gmailLoaded', 'userLoggedIn']
});

/***/ })

};
;
//# sourceMappingURL=https://storage.googleapis.com/streak-extension-sourcemaps/clientjs/clientjs.chunk.5519.0747e25bbc49a76cbab3.js.map