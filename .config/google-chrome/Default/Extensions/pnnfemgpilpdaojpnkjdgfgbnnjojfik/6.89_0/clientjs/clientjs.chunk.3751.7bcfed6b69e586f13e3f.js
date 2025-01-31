"use strict";
export const id = 3751;
export const ids = [3751];
export const modules = {

/***/ 37558:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N4: () => (/* binding */ addBottomStreakShareButton),
/* harmony export */   q: () => (/* binding */ addStreakShareButton)
/* harmony export */ });
/* unused harmony export getStreakShareButtonRef */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44345);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69980);
/* harmony import */ var _streakShareDropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72334);
/* harmony import */ var _core_appShell__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81022);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(35091);
/* harmony import */ var _addStreakShareButton_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9897);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_streakShareDropdown__WEBPACK_IMPORTED_MODULE_2__]);
_streakShareDropdown__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const streakShareButtonRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createRef();
const streakShareBottomButtonRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createRef();
function getStreakShareButtonRef() {
  return streakShareButtonRef.current;
}
async function addStreakShareButton(_ref) {
  let {
    threadView
  } = _ref;
  const buttonView = threadView.addSubjectButton({
    iconClass: _addStreakShareButton_module_css__WEBPACK_IMPORTED_MODULE_6__/* .icon */ .q,
    iconLiga: 'link',
    onClick() {
      streakShareButtonRef.current?.simulateClick();
    },
    tooltip: _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__.Locale.getString('share_this_email')
  });
  function onSharingTokenSet(to) {
    if (to) {
      buttonView.getView().addClass(_addStreakShareButton_module_css__WEBPACK_IMPORTED_MODULE_6__/* .active */ .b);
    } else {
      buttonView.getView().removeClass(_addStreakShareButton_module_css__WEBPACK_IMPORTED_MODULE_6__/* .active */ .b);
    }
  }
  const btnContainerEl = document.createElement('span');
  (0,_core_appShell__WEBPACK_IMPORTED_MODULE_3__/* .renderWithAppShell */ .oC)(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_streakShareDropdown__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    threadView: threadView,
    ref: streakShareButtonRef,
    onSharingTokenSet: onSharingTokenSet
  }), btnContainerEl);
  buttonView.getView().getElement().appendChild(btnContainerEl);
  return () => {
    react_dom__WEBPACK_IMPORTED_MODULE_1__.unmountComponentAtNode(btnContainerEl);
    buttonView.destroy();
  };
}
async function addBottomStreakShareButton(_ref2) {
  let {
    threadView
  } = _ref2;
  const bottomButtonView = threadView.addFooterButton({
    iconClass: _addStreakShareButton_module_css__WEBPACK_IMPORTED_MODULE_6__/* .icon */ .q,
    title: _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__.Locale.getString('get_link'),
    iconLiga: 'link',
    buttonColor: 'outline',
    onClick: function () {
      streakShareBottomButtonRef.current?.simulateClick();
    }
  });
  function onSharingTokenSet(to) {
    if (to) {
      bottomButtonView.getView().addClass(_addStreakShareButton_module_css__WEBPACK_IMPORTED_MODULE_6__/* .active */ .b);
    } else {
      bottomButtonView.getView().removeClass(_addStreakShareButton_module_css__WEBPACK_IMPORTED_MODULE_6__/* .active */ .b);
    }
  }
  const bottomBtnContainerEl = document.createElement('span');
  (0,_core_appShell__WEBPACK_IMPORTED_MODULE_3__/* .renderWithAppShell */ .oC)(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_streakShareDropdown__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    threadView: threadView,
    ref: streakShareBottomButtonRef,
    onSharingTokenSet: onSharingTokenSet,
    position: 'left'
  }), bottomBtnContainerEl);
  bottomButtonView.getView().getElement().prepend(bottomBtnContainerEl);
  return () => {
    react_dom__WEBPACK_IMPORTED_MODULE_1__.unmountComponentAtNode(bottomBtnContainerEl);
    bottomButtonView.destroy();
  };
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 72334:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ StreakShareDropdown)
/* harmony export */ });
/* harmony import */ var _streakyc_common_services_data_user__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5575);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44345);
/* harmony import */ var kefir_stopper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(94322);
/* harmony import */ var kefir_stopper__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(kefir_stopper__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var userflow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32746);
/* harmony import */ var _streakShareDropdownMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34327);
/* harmony import */ var _services_butterBarManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99329);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(35091);
/* harmony import */ var _services_tracker_tracker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13778);
/* harmony import */ var _services_data_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(38672);
/* harmony import */ var _widgets_react_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(82792);
/* harmony import */ var _core_models_sharingToken__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7303);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([userflow_js__WEBPACK_IMPORTED_MODULE_1__, _services_data_data__WEBPACK_IMPORTED_MODULE_6__, _core_models_sharingToken__WEBPACK_IMPORTED_MODULE_8__]);
([userflow_js__WEBPACK_IMPORTED_MODULE_1__, _services_data_data__WEBPACK_IMPORTED_MODULE_6__, _core_models_sharingToken__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












class StreakShareDropdown extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  #menuRef = (() => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createRef())();
  #menuRefContainer = (() => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createRef())();
  #stopper = (() => kefir_stopper__WEBPACK_IMPORTED_MODULE_10___default()())();
  state = {
    isLoading: true,
    showingMenu: false,
    threadId: null,
    sharingToken: null,
    shareUrl: null
  };
  async componentDidMount() {
    const threadId = await this.props.threadView.getThreadIDAsync();
    if (!threadId) {
      return;
    }
    this.setState({
      threadId
    });
    const sharingTokens = _services_data_data__WEBPACK_IMPORTED_MODULE_6__["default"].getSharingTokens();
    sharingTokens.getEventStream().filter(event => {
      return (event.eventName === 'add' || event.eventName === 'remove') && event.model.get('threads').some(_ref => {
        let {
          threadId: targetThreadId
        } = _ref;
        return targetThreadId === threadId;
      });
    }).toProperty(() => ({})).takeUntilBy(this.#stopper).onValue(() => {
      this.#setSharingTokens(threadId);
    });
  }
  componentWillUnmount() {
    this.#stopper.destroy();
  }
  async open() {
    await this.#menuRef.current?.open();
  }
  scrollIntoView(options) {
    if (this.#menuRefContainer.current) {
      this.#menuRefContainer.current.scrollIntoView(options);
    }
  }
  simulateClick = () => {
    const shareUrl = this.state?.shareUrl;
    if (shareUrl) {
      this.open();
    } else {
      this.#onToggle(true);
    }
  };
  render() {
    const {
      button
    } = this.props;
    const {
      isLoading,
      shareUrl
    } = this.state;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
      style: {
        position: 'relative'
      },
      children: [button?.({
        onClick: this.simulateClick,
        shareUrl
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
        ref: this.#menuRefContainer,
        style: {
          visibility: 'hidden',
          position: 'absolute',
          left: 0,
          top: 0
        },
        className: `streak__streakShare_hidden_trigger ${this.props.position == 'left' ? 'streak__streakShare_hidden_trigger_left' : ''}`,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_widgets_react_material_menu__WEBPACK_IMPORTED_MODULE_7__/* .MenuButton */ .j2, {
          ref: this.#menuRef,
          menu: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_streakShareDropdownMenu__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            isLoading: isLoading,
            close: () => this.#close(),
            onCopy: () => {
              this.#close();
              this.#onCopied();
            },
            onLaunch: () => {
              this.#close();
              this.#onLaunch();
            },
            onToggle: value => this.#onToggle(value),
            shareUrl: shareUrl,
            track: (eventName, extraProps) => this.#track(eventName, extraProps)
          }),
          onWillOpen: () => {
            this.#track('menuOpened');
            this.setState({
              showingMenu: true
            });
          },
          onWillClose: () => this.setState({
            showingMenu: false
          }),
          positionOptions: {
            position: 'bottom',
            hAlign: this.props.position || 'right'
          }
        })
      })]
    });
  }
  #close() {
    this.#menuRef.current?.close();
  }
  #onCreateAndCopied() {
    const {
      shareUrl
    } = this.state;
    if (!shareUrl) {
      return;
    }
    this.#track('link created and copied');
    navigator.clipboard.writeText(shareUrl);
    const messageKey = 'STREAK_SHARE_COPIED';
    _services_butterBarManager__WEBPACK_IMPORTED_MODULE_3__["default"].showMessage({
      text: _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('email_link_copied'),
      time: 10000,
      messageKey,
      hideOnViewChanged: true,
      buttons: [{
        title: _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('open'),
        onClick: () => {
          window.open(shareUrl);
        }
      }, {
        title: _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('settings'),
        onClick: () => {
          _services_butterBarManager__WEBPACK_IMPORTED_MODULE_3__["default"].hideMessage(messageKey);
          this.open();
        }
      }]
    });
  }
  #onLaunch() {
    const {
      shareUrl
    } = this.state;
    if (shareUrl) {
      this.#track('goToLink');
      window.open(shareUrl, '_blank');
    }
  }
  #onCopied() {
    const {
      shareUrl
    } = this.state;
    if (!shareUrl) {
      return;
    }
    this.#track('copiedLink');
    navigator.clipboard.writeText(shareUrl).then(() => {
      _services_butterBarManager__WEBPACK_IMPORTED_MODULE_3__["default"].showMessage({
        text: _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('copied'),
        time: 3000
      });
    });
  }
  #onToggle(value) {
    this.#track('toggleClick', {
      newValue: value
    });
    const {
      threadId,
      sharingToken
    } = this.state;
    if (value) {
      if (!threadId) {
        return;
      }
      this.setState({
        isLoading: true
      });
      const sharingToken = new _core_models_sharingToken__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z({
        threads: [{
          threadId
        }],
        messages: []
      });
      sharingToken.saveWithPromise().then(() => {
        _services_data_data__WEBPACK_IMPORTED_MODULE_6__["default"].addSharingToken(sharingToken);
        this.setState({
          isLoading: false,
          sharingToken,
          shareUrl: sharingToken.getShareUrl()
        });
        this.props.onSharingTokenSet?.(true);
        this.#onCreateAndCopied();
      }).catch(() => {
        _services_butterBarManager__WEBPACK_IMPORTED_MODULE_3__["default"].showError(_services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('streak_share_create_error'));
        this.setState({
          isLoading: false
        });
      });
    } else {
      this.props.onSharingTokenSet?.(false);
      if (!sharingToken) {
        return;
      }
      _services_data_data__WEBPACK_IMPORTED_MODULE_6__["default"].getSharingTokens().remove(sharingToken);
      this.setState({
        sharingToken: null,
        shareUrl: null
      });
      sharingToken.del();
    }
  }
  #setSharingTokens(threadId) {
    // Only grabbing the very first token
    const threadShare = _services_data_data__WEBPACK_IMPORTED_MODULE_6__["default"].getSharingTokensForThread(threadId)?.[0];
    if (threadShare) {
      this.props.onSharingTokenSet?.(true);
      this.setState({
        sharingToken: threadShare,
        shareUrl: threadShare.getShareUrl()
      });
      if (userflow_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.isIdentified()) {
        const user = (0,_streakyc_common_services_data_user__WEBPACK_IMPORTED_MODULE_11__/* .getUser */ .P)();
        const userKey = user.key();
        if (user && userKey) {
          userflow_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.identify(userKey, {
            streakShareUrl: threadShare.getShareUrl()
          });
        }
      }
    } else {
      this.props.onSharingTokenSet?.(false);
      this.setState({
        sharingToken: null,
        shareUrl: null
      });
    }
    this.setState({
      isLoading: false
    });
  }
  #track = (eventName, extraProps) => {
    _services_tracker_tracker__WEBPACK_IMPORTED_MODULE_5__["default"].track('StreakShare.' + eventName, {
      threadId: this.state.threadId,
      ...extraProps
    });
  };
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 34327:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ StreakShareDropdownMenu)
/* harmony export */ });
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35091);
/* harmony import */ var _widgets_react_material_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82792);
/* harmony import */ var _widgets_react_material_button_iconButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93675);
/* harmony import */ var _widgets_react_material_toggle_switchToggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3342);
/* harmony import */ var _widgets_react_loadingSpinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(72905);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(59718);






function StreakShareDropdownMenu(props) {
  const {
    shareUrl,
    isLoading,
    onCopy,
    onLaunch,
    onToggle,
    track
  } = props;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_widgets_react_material_menu__WEBPACK_IMPORTED_MODULE_1__/* .Dropdown */ .Lt, {
    className: "streak__streakShare",
    maxWidth: "none",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "streak__streakShare_header",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "streak__streakShare_header_logo"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a", {
        className: "mdl-link",
        target: "_blank",
        onClick: () => {
          track('whatIsThisLinkClick');
          window.open('https://support.streak.com/email-sharing/streak-share', '_blank');
        },
        children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.getString('share_this_email_anywhere')
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "streak__streakShare_body",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.getString(shareUrl ? 'streak_share_body_on' : 'streak_share_body_off')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
        children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.getString(shareUrl ? 'streak_share_details_on' : 'streak_share_details_off')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_widgets_react_material_toggle_switchToggle__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        value: !!shareUrl,
        onValueChange: value => {
          onToggle(value);
        }
      }), shareUrl && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "streak__streakShare_link_container streak__basicFlex",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("textarea", {
          readOnly: true,
          value: shareUrl
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_widgets_react_material_button_iconButton__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
          mini: true,
          materialIconName: "content_copy",
          onClick: () => {
            onCopy();
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_widgets_react_material_button_iconButton__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
          mini: true,
          materialIconName: "launch",
          onClick: () => {
            onLaunch();
          }
        })]
      }), isLoading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_widgets_react_loadingSpinner__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        style: {
          height: 'auto',
          margin: '4px 0 4px 0'
        }
      })]
    })]
  });
}

/***/ }),

/***/ 43751:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _streakyc_common_core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77294);
/* harmony import */ var kefir__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98137);
/* harmony import */ var _addStreakShareButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37558);
/* harmony import */ var _lib_dependencyManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54612);
/* harmony import */ var _services_data_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38672);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_addStreakShareButton__WEBPACK_IMPORTED_MODULE_2__, _services_data_data__WEBPACK_IMPORTED_MODULE_4__]);
([_addStreakShareButton__WEBPACK_IMPORTED_MODULE_2__, _services_data_data__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





async function handleThreadView(threadView) {
  const buttonAdds = [_addStreakShareButton__WEBPACK_IMPORTED_MODULE_2__/* .addStreakShareButton */ .q, _addStreakShareButton__WEBPACK_IMPORTED_MODULE_2__/* .addBottomStreakShareButton */ .N4].map(add => {
    const remove = add({
      threadView
    });
    kefir__WEBPACK_IMPORTED_MODULE_1__["default"].fromEvents(threadView, 'destroy').take(1).onValue(async () => {
      (await remove)();
    });
    return remove;
  });
  return Promise.all(buttonAdds);
}
_lib_dependencyManager__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP.addFunction({
  functionKey: 'streakShareMasterControllerInitialized',
  functionReference: function () {
    _services_data_data__WEBPACK_IMPORTED_MODULE_4__["default"].getSharingTokens().refresh();
    _streakyc_common_core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_0__.inboxSDK.Conversations.registerThreadViewHandler(handleThreadView);
  },
  dependentFunctionKeys: ['userPreServerExperiment', 'gmailLoaded', 'localeLoaded', 'userLoggedIn', 'sdkLoaded']
});
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9897:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ _1),
/* harmony export */   q: () => (/* binding */ _2)
/* harmony export */ });
// extracted by mini-css-extract-plugin
var _1 = "streak-mod__N14SwVzlSaAdZjNxSGSl";
var _2 = "streak-mod__epr93u6f_m1y_pt_sJ79";



/***/ })

};
;
//# sourceMappingURL=https://storage.googleapis.com/streak-extension-sourcemaps/clientjs/clientjs.chunk.3751.7bcfed6b69e586f13e3f.js.map