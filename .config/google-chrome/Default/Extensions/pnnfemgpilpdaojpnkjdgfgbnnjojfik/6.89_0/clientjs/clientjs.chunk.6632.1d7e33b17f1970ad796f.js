"use strict";
export const id = 6632;
export const ids = [6632];
export const modules = {

/***/ 96632:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _streakyc_common_core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77294);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47587);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var kefir__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98137);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(69980);
/* harmony import */ var _components_AutoboxMenu_AutoboxMenuContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(93242);
/* harmony import */ var _lib_dependencyManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(54612);
/* harmony import */ var _lib_utils_isNotNil__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(72086);
/* harmony import */ var _core_appShell__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(81022);
/* harmony import */ var _redux_storeSingleton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5568);
/* harmony import */ var _services_threads_threadStorer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(98162);
/* harmony import */ var _services_tracker_tracker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(13778);
/* harmony import */ var _boxCache_BoxCache__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(18123);
/* harmony import */ var _services_data_commonData__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(90885);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_AutoboxMenu_AutoboxMenuContainer__WEBPACK_IMPORTED_MODULE_4__, _boxCache_BoxCache__WEBPACK_IMPORTED_MODULE_10__, _services_data_commonData__WEBPACK_IMPORTED_MODULE_11__]);
([_components_AutoboxMenu_AutoboxMenuContainer__WEBPACK_IMPORTED_MODULE_4__, _boxCache_BoxCache__WEBPACK_IMPORTED_MODULE_10__, _services_data_commonData__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














class ThreadRowBoxesButton {
  setup() {
    _streakyc_common_core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_0__.inboxSDK.Lists.registerThreadRowViewHandler(this._handleThreadRowView.bind(this));
  }
  _handleThreadRowView(threadRowView) {
    if (!_services_data_commonData__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z.getStreakSettings().settingIsEnabled('streak_it_title')) {
      return;
    }
    threadRowView.getThreadIDIfStableAsync().then(threadID => {
      if (!threadID) {
        return;
      }
      threadRowView.addButton(_services_threads_threadStorer__WEBPACK_IMPORTED_MODULE_8__["default"].getEventStream().filter(_ref => {
        let {
          hexGmailThreadId,
          valueType
        } = _ref;
        return hexGmailThreadId === threadID && valueType === 'boxKey';
      }).map(_ref2 => {
        let {
          hexGmailThreadId
        } = _ref2;
        return hexGmailThreadId;
      }).merge(kefir__WEBPACK_IMPORTED_MODULE_2__["default"].constant(threadID)).map(getButtonDescriptor));
    });
  }
}
function getButtonDescriptor(threadID) {
  const boxKeys = _services_threads_threadStorer__WEBPACK_IMPORTED_MODULE_8__["default"].getBoxKeys(threadID) || [];
  return {
    hasDropdown: true,
    iconClass: classnames__WEBPACK_IMPORTED_MODULE_1___default()('__streak_It_Indicator', {
      __streak_selected_streakit: boxKeys.length > 0,
      streak__addBoxFontIcon: true,
      streak__logoFontIcon: false
    }),
    onClick: async event => {
      track('open');
      const threadMetaData = getThreadMetaData(event.threadRowView, threadID);
      const {
        selectedThreadListMetaData
      } = _redux_storeSingleton__WEBPACK_IMPORTED_MODULE_7__.store.getState().listViewState;
      const isThreadRowSelected = selectedThreadListMetaData.some(metadata => {
        return metadata.hexGmailThreadId && metadata.hexGmailThreadId === threadMetaData.hexGmailThreadId;
      });
      let card;
      if (boxKeys.length === 0 && threadMetaData && (!isThreadRowSelected || selectedThreadListMetaData.length < 2)) {
        event.dropdown.on('destroy', () => {
          react_dom__WEBPACK_IMPORTED_MODULE_3__.unmountComponentAtNode(event.dropdown.el);
        });
        (0,_core_appShell__WEBPACK_IMPORTED_MODULE_6__/* .renderWithAppShell */ .oC)(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_AutoboxMenu_AutoboxMenuContainer__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
          onWillChooseItem: () => {
            event.dropdown.close();
            react_dom__WEBPACK_IMPORTED_MODULE_3__.unmountComponentAtNode(event.dropdown.el);
          },
          threadMetaData: threadMetaData
        }), event.dropdown.el);
        return;
      } else if (boxKeys.length === 0) {
        card = {
          type: 'ADD_BOX',
          isAutoboxed: true,
          threadListMetaData: [threadMetaData]
        };
      } else if (boxKeys.length === 1) {
        const box = await _boxCache_BoxCache__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z.getBox(boxKeys[0]);
        const id = box?.getId();
        if (!id) {
          throw new Error('Failed to get box ID from box key in thread row boxes button.');
        }
        card = {
          type: 'BOX_DETAILS',
          id
        };
      } else {
        const boxes = await Promise.all(boxKeys.map(key => _boxCache_BoxCache__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z.getBox(key))).then(boxes => boxes.filter(_lib_utils_isNotNil__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z));
        card = {
          type: 'THREAD_DETAILS',
          boxIds: boxes.map(box => box.getId()),
          threadMetaData: threadMetaData
        };
      }
      _redux_storeSingleton__WEBPACK_IMPORTED_MODULE_7__.store.dispatch({
        type: 'SIDEBAR/CARDS/REPLACE',
        cards: [card]
      });
    }
  };
}
function getThreadMetaData(threadRowView, threadID) {
  const contacts = threadRowView.getContacts();
  return {
    emailAddresses: contacts.map(_ref3 => {
      let {
        emailAddress
      } = _ref3;
      return emailAddress;
    }),
    hexGmailThreadId: threadID,
    names: contacts.map(_ref4 => {
      let {
        name
      } = _ref4;
      return name;
    }),
    subject: threadRowView.getSubject()
  };
}
function track(eventName) {
  let extraProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  _services_tracker_tracker__WEBPACK_IMPORTED_MODULE_9__["default"].track(`boxesButton.${eventName}`, {
    ...extraProps,
    context: 'listRowBoxesButton',
    view: 'listRowBoxesButton'
  });
}
const threadRowBoxesButton = new ThreadRowBoxesButton();
_lib_dependencyManager__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP.addFunction({
  functionKey: 'ThreadRowBoxesButtonInitialized',
  functionReference: function () {
    threadRowBoxesButton.setup();
  },
  dependentFunctionKeys: ['gmailLoaded', 'data.pipelines.initialized', 'data.boxes.initialized', 'data.streakSettings.initialized']
});
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
//# sourceMappingURL=https://storage.googleapis.com/streak-extension-sourcemaps/clientjs/clientjs.chunk.6632.1d7e33b17f1970ad796f.js.map