"use strict";
export const id = 5400;
export const ids = [5400];
export const modules = {

/***/ 77634:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ startAutoApproveFromEmailFlow)
/* harmony export */ });
/* harmony import */ var _streakyc_common_services_data_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5575);
/* harmony import */ var _lib_log_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7961);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56919);
/* harmony import */ var _setupUserflow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32965);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_config__WEBPACK_IMPORTED_MODULE_1__, _setupUserflow__WEBPACK_IMPORTED_MODULE_2__]);
([_config__WEBPACK_IMPORTED_MODULE_1__, _setupUserflow__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




async function startAutoApproveFromEmailFlow(link) {
  const user = (0,_streakyc_common_services_data_user__WEBPACK_IMPORTED_MODULE_3__/* .getUser */ .P)();
  let startFlowSuccess = true;
  if (!link) {
    (0,_lib_log_error__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)({
      err: new Error("Couldn't find needed link yet tried to start userflow"),
      tags: {
        flowId: _config__WEBPACK_IMPORTED_MODULE_1__/* .AUTO_APPROVE_FROM_EMAIL_FLOW_ID */ .ct
      },
      level: 'warning'
    });
    return false;
  }
  try {
    startFlowSuccess = await (0,_setupUserflow__WEBPACK_IMPORTED_MODULE_2__/* .startUserflowContent */ .Z)(_config__WEBPACK_IMPORTED_MODULE_1__/* .AUTO_APPROVE_FROM_EMAIL_FLOW_ID */ .ct, {
      once: false
    }, {
      userDomain: user.getDomain(),
      autoApproveLink: link
    });
  } catch (error) {
    startFlowSuccess = false;
    (0,_lib_log_error__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)({
      err: new Error('Error starting auto approve from email userflow', {
        cause: error
      }),
      tags: {
        flowId: _config__WEBPACK_IMPORTED_MODULE_1__/* .AUTO_APPROVE_FROM_EMAIL_FLOW_ID */ .ct
      },
      level: 'warning'
    });
  }
  return startFlowSuccess;
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 75400:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_dependencyManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54612);
/* harmony import */ var _customOnboarding_startAutoApproveFromEmailFlow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77634);
/* harmony import */ var _services_tracker_tracker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13778);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_customOnboarding_startAutoApproveFromEmailFlow__WEBPACK_IMPORTED_MODULE_1__]);
_customOnboarding_startAutoApproveFromEmailFlow__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




//URL for team joining approvals
const LINK_PATTERN = /.*streak.com\/approvals\/jointeam(?:.*)/i;
function captureLinkClick(hrefRegex, clickHandler) {
  if (!document.body) throw new Error();
  document.body.addEventListener('click', async event => {
    const {
      target
    } = event;
    const match = target.href && target.href.match(hrefRegex);
    if (target.nodeName !== 'A' || !match) return;
    clickHandler(match, target);
  }, true);
}
_lib_dependencyManager__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.addFunction({
  functionKey: 'autoApproveModalLinkListenerInitialized',
  functionReference: () => {
    captureLinkClick(LINK_PATTERN, (_ref, linkElement) => {
      let [_href] = _ref;
      // if the link was the approve only button
      const showModal = linkElement.getAttribute('hspace') == 'mainAction';

      // navigate to the approve and turn on auto-approve button
      const buttonContainer = linkElement.closest('[hspace=buttonGroup]');
      const autoApproveLink = buttonContainer?.querySelector('[hspace=secondaryAction]');
      if (showModal && autoApproveLink && autoApproveLink.getAttribute('href')) {
        (0,_customOnboarding_startAutoApproveFromEmailFlow__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(autoApproveLink.getAttribute('href'));
        _services_tracker_tracker__WEBPACK_IMPORTED_MODULE_2__["default"].track(`teamJoinApprovalLink.approveOnlyClick`);
      } else {
        _services_tracker_tracker__WEBPACK_IMPORTED_MODULE_2__["default"].track(`teamJoinApprovalLink.approveAndAutoApproveClick`);
      }
    });
  },
  dependentFunctionKeys: ['userSettingsInitialized', 'enabledFeaturesControllerInitialized', 'gmailLoaded']
});
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
//# sourceMappingURL=https://storage.googleapis.com/streak-extension-sourcemaps/clientjs/clientjs.chunk.5400.9ab3c64a376990dd3e12.js.map