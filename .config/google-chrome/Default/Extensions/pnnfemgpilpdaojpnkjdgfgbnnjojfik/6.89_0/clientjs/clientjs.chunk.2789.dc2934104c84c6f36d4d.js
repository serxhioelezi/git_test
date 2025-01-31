"use strict";
export const id = 2789;
export const ids = [2789];
export const modules = {

/***/ 62789:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _streakyc_common_core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77294);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47587);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69980);
/* harmony import */ var _conversationViewOffModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23955);
/* harmony import */ var _components_AutoboxMenu_AutoboxMenuContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(93242);
/* harmony import */ var _lib_dependencyManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(54612);
/* harmony import */ var _core_appShell__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(81022);
/* harmony import */ var _redux_storeSingleton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5568);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(35091);
/* harmony import */ var _services_tracker_tracker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(13778);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_AutoboxMenu_AutoboxMenuContainer__WEBPACK_IMPORTED_MODULE_4__]);
_components_AutoboxMenu_AutoboxMenuContainer__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











const isThreadView = () => _streakyc_common_core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_0__.inboxSDK.Router.getCurrentRouteView().getRouteType() === 'THREAD';
class BoxesButton {
  constructor() {
    const keyboardShortcutHandle = _streakyc_common_core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_0__.inboxSDK.Keyboard.createShortcutHandle({
      chord: 'w a',
      description: _services_locale_locale__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z.getString('keyboard_boxes_button_description')
    });
    _streakyc_common_core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_0__.inboxSDK.Toolbars.registerThreadButton({
      hasDropdown: true,
      iconClass: classnames__WEBPACK_IMPORTED_MODULE_1___default()('boxIcon', {
        streak__addBoxFontIcon: true,
        streak__logoFontIcon: false
      }),
      keyboardShortcutHandle: keyboardShortcutHandle,
      listSection: _streakyc_common_core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_0__.inboxSDK.Toolbars.SectionNames.METADATA_STATE,
      onClick: event => {
        const {
          dropdown
        } = event;
        const state = _redux_storeSingleton__WEBPACK_IMPORTED_MODULE_7__.store.getState();
        if (isThreadView() || state.listViewState.selectedThreadListMetaData.length === 1) {
          const threadMetaData = state.threadViewState.metaData || state.listViewState.selectedThreadListMetaData[0];
          if (!threadMetaData) {
            return;
          }
          (0,_core_appShell__WEBPACK_IMPORTED_MODULE_6__/* .renderWithAppShell */ .oC)(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_AutoboxMenu_AutoboxMenuContainer__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            onWillChooseItem: () => {
              dropdown.close();
            },
            threadMetaData: threadMetaData
          }), dropdown.el);
          _services_tracker_tracker__WEBPACK_IMPORTED_MODULE_9__["default"].track(`autoboxBoxesButton.open`);
          dropdown.on('destroy', () => react_dom__WEBPACK_IMPORTED_MODULE_2__.unmountComponentAtNode(dropdown.el));
        } else {
          if ((0,_conversationViewOffModal__WEBPACK_IMPORTED_MODULE_3__/* .shouldShowConversationViewOffModal */ .F)()) {
            (0,_conversationViewOffModal__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)('ThreadView');
            dropdown.close();
            return;
          }
          if (state.sidebarState.isOpen) {
            _redux_storeSingleton__WEBPACK_IMPORTED_MODULE_7__.store.dispatch({
              type: 'SIDEBAR/CLOSE'
            });
          } else {
            _redux_storeSingleton__WEBPACK_IMPORTED_MODULE_7__.store.dispatch({
              type: 'SIDEBAR/OPEN',
              didUserTrigger: true
            });
          }
        }
      },
      positions: ['THREAD', 'LIST'],
      threadSection: _streakyc_common_core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_0__.inboxSDK.Toolbars.SectionNames.METADATA_STATE,
      title: _services_locale_locale__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z.getString('add_to_pipeline_button_tooltip')
    });
  }
}
_lib_dependencyManager__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP.addFunction({
  functionKey: 'boxesButtonInitialized',
  functionReference: async function () {
    new BoxesButton();
  },
  dependentFunctionKeys: ['data.boxes.initialized', 'data.pipelines.initialized', 'data.teams.initialized', 'threadsInitialized', 'localeLoaded', 'gmailLoaded', 'userLoggedIn', 'accessManagerInitialized', 'sdkLoaded']
});
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
//# sourceMappingURL=https://storage.googleapis.com/streak-extension-sourcemaps/clientjs/clientjs.chunk.2789.dc2934104c84c6f36d4d.js.map