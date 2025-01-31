"use strict";
export const id = 2775;
export const ids = [2775];
export const modules = {

/***/ 32775:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_backgroundPageCommunicator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39876);
/* harmony import */ var _widgets_modal_showModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64673);
/* harmony import */ var _widgets_react_material_button_streakButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22682);
/* harmony import */ var _widgets_react_material_button_buttonLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(63726);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(35091);
/* harmony import */ var _services_tracker_tracker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13778);
/* harmony import */ var _lib_dependencyManager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(54612);
/* harmony import */ var _lib_log_error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7961);
/* harmony import */ var _localSettings_localSettings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(55868);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(59718);










const BAD_EXTENSIONS = ['demimoohidhmolhbphaklnmokjhjgjlf',
// Signal
'fmdomiplhgolgpibfdjjhgbcbkdcfkmk',
// Cirrus Insight
'gakklmehjhhdfjjgnmpkjoemjmeomnli',
// Smartr Inbox for Gmail
'dheionainndbbpoacpnopgmnihkcmnkl',
// Gmelius
'kdadialhpiikehpdeejjeiikopddkjem',
// Any.do Extension
'mlomiejdfkolichcflejclcbmpeaniij',
// Ghostery
'bmihblnpomgpjkfddepdpdafhhepdbek',
// Minimalist
'hpioniioecjjbhbnnbhcifmgmoiibalo',
// WAV player for Gmail
'annoaihhfdegphdkkkbahheignkgigpd',
// FollowUp.cc
'oiiaigjnkhngdbnoookogelabohpglmd',
// Sidekick
'gkjnkapjmjfpipfcccnjbjcbgdnahpjp',
// Yesware
'fcinnggknmdfkilogcndkgpojpfojeem',
// Hiver
'hpfmedbkgaakgagknibnonpkimkibkla',
// CRM for Gmail (ProsperWorks)
'gieohaicffldbmiilohhggbidhephnjj',
// Vanilla Cookie Manager
'fdicmnidmcjbnbeokngbgcbnognoilnn',
// Contactually
'aohlfneeliakfcefeffppfplagbccbni',
// Sortd
'hihakjfhbmlmjdnnhegiciffjplmdhin',
// rapportive / LI sales navigator
'eekjikilggkdpjklgpnceahcioemadje',
// LI sales navigator
'loihaajhlligfhcgnjglopfeglolkbai' // Insightly Sidebar for Gmail
];
class BadExtensionNotifierGlobalController {
  constructor() {
    if (this.#checkDisabled()) {
      return;
    }
    try {
      _core_backgroundPageCommunicator__WEBPACK_IMPORTED_MODULE_0__["default"].getAllExtensions().then(response => this.#checkExtensions(response));
    } catch (error) {
      (0,_lib_log_error__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP)({
        err: new Error('failure to send getExtensions messaage'),
        level: 'warning'
      });
    }
  }
  #checkDisabled() {
    return _localSettings_localSettings__WEBPACK_IMPORTED_MODULE_8__["default"].get('warnings/extensionConflictNoticeDisabled');
  }
  #disableCheck() {
    _localSettings_localSettings__WEBPACK_IMPORTED_MODULE_8__["default"].set('warnings/extensionConflictNoticeDisabled', true);
  }
  #checkExtensions(extensions) {
    const enabledExtensions = extensions.filter(appOrExtension => appOrExtension.type === 'extension' && appOrExtension.mayDisable && appOrExtension.enabled);
    const extensionNames = enabledExtensions.map(extension => extension.name);
    _services_tracker_tracker__WEBPACK_IMPORTED_MODULE_5__["default"].track('enabled extensions', {
      extensions: extensionNames
    });
    const conflictingExtensions = enabledExtensions.filter(extension => BAD_EXTENSIONS.includes(extension.id)).map(x => x.name);
    if (conflictingExtensions.length === 0) {
      return;
    }
    this.#showWarning(conflictingExtensions);
  }
  #showWarning(extensions) {
    (0,_widgets_modal_showModal__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({
      viewOptions: {
        title: _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('extension_conflicts_found')
      },
      bodyComponent: _ref => {
        let {
          modalView
        } = _ref;
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
            className: "streak__modal_standard",
            children: [_services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('bad_extension_message'), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("ul", {
              children: extensions.map(extension => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("li", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("b", {
                  children: extension
                })
              }, extension))
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_widgets_react_material_button_buttonLayout__WEBPACK_IMPORTED_MODULE_3__/* .ButtonRow */ .V, {
            className: "streak__mt-5",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_widgets_react_material_button_buttonLayout__WEBPACK_IMPORTED_MODULE_3__/* .ButtonGroup */ .h, {
              right: true,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_widgets_react_material_button_streakButton__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP, {
                onClick: () => {
                  this.#disableCheck();
                  modalView.close();
                },
                variant: "text",
                children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('dont_show_again')
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_widgets_react_material_button_streakButton__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP, {
                onClick: () => modalView.close(),
                children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('modal_done')
              })]
            })
          })]
        });
      }
    });
  }
}
_lib_dependencyManager__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP.addFunction({
  functionKey: 'badExtensionNotifierGlobalControllerInitialized',
  functionReference: () => {
    new BadExtensionNotifierGlobalController();
  },
  dependentFunctionKeys: ['htmlLoaded', 'localSettingsInitialized']
});

/***/ })

};
;
//# sourceMappingURL=https://storage.googleapis.com/streak-extension-sourcemaps/clientjs/clientjs.chunk.2775.f2f4391db734cea5345b.js.map