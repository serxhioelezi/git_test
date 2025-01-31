"use strict";
export const id = 8649;
export const ids = [8649];
export const modules = {

/***/ 68649:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ApiKeys)
/* harmony export */ });
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35091);
/* harmony import */ var _basics_drawer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(642);
/* harmony import */ var _streakyc_ui_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87084);
/* harmony import */ var _ApiKeys_module_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(10134);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44345);
/* harmony import */ var kefir_stopper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(94322);
/* harmony import */ var kefir_stopper__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(kefir_stopper__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _services_data_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38672);
/* harmony import */ var _react_toolkit_hooks_useForceUpdate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10102);
/* harmony import */ var _core_models_apiKey__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(45709);
/* harmony import */ var _core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(77294);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(47587);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var use_immer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(57210);
/* harmony import */ var _lib_log_error__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7961);
/* harmony import */ var _services_tracker_useTracker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(70989);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_data_data__WEBPACK_IMPORTED_MODULE_4__, _core_models_apiKey__WEBPACK_IMPORTED_MODULE_6__]);
([_services_data_data__WEBPACK_IMPORTED_MODULE_4__, _core_models_apiKey__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















const prefix = 'integrations.api.';
function ApiKeys() {
  const track = (0,_services_tracker_useTracker__WEBPACK_IMPORTED_MODULE_10__/* .useTrackerWithoutPrefix */ .io)();
  const apiKeys = _services_data_data__WEBPACK_IMPORTED_MODULE_4__/* .Data */ .V.getAPIKeys();
  const stopper = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(kefir_stopper__WEBPACK_IMPORTED_MODULE_12___default()());
  const forceUpdate = (0,_react_toolkit_hooks_useForceUpdate__WEBPACK_IMPORTED_MODULE_5__/* .useForceUpdate */ .N)();
  const candidateDeletion = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
  const [{
    createDisabled,
    deletingKeys,
    deleteModal
  }, updateState] = (0,use_immer__WEBPACK_IMPORTED_MODULE_13__/* .useImmer */ .x)({
    createDisabled: false,
    deletingKeys: new Set(),
    deleteModal: 0
  });
  const drawerCtx = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_basics_drawer__WEBPACK_IMPORTED_MODULE_1__/* .DrawerContext */ .rf);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    const _stopper = stopper.current;
    _services_data_data__WEBPACK_IMPORTED_MODULE_4__/* .Data */ .V.getAPIKeys().refresh();
    _services_data_data__WEBPACK_IMPORTED_MODULE_4__/* .Data */ .V.getAPIKeys().getChangeEventStream().debounce(1).takeUntilBy(_stopper).onValue(() => forceUpdate());
    return () => {
      _stopper.destroy();
    };
  }, [forceUpdate]);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    /** Close the delete modal on escape without closing drawer */
    const escHandler = e => {
      if (e.key !== 'Escape' || 0 === deleteModal) {
        return;
      }
      updateState(draft => {
        draft.deleteModal = 0;
      });
      e.preventDefault();
      e.stopPropagation();
    };
    document.addEventListener('keydown', escHandler, {
      capture: true
    });
    return () => document.removeEventListener('keydown', escHandler, {
      capture: true
    });
  }, [deleteModal, updateState]);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    if (deleteModal === 1 || deleteModal === 0) {
      return;
    }
    const f = async () => {
      if (deleteModal === 2) {
        track("integrations.api.deleteAPIKey.confirm");
        const apiKey = candidateDeletion.current;
        try {
          updateState(draft => {
            draft.deletingKeys.add(apiKey?.apiKey);
          });
          await apiKey?.delWithPromise();
          track("integrations.api.deleteAPIKey.success");
        } catch (e) {
          (0,_lib_log_error__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP)({
            err: new Error(`Failed to delete APIKey`, {
              cause: e
            }),
            details: {
              apiKey: apiKey?.key()
            }
          });
          track("integrations.api.deleteAPIKey.failed");
        } finally {
          updateState(draft => {
            draft.deletingKeys.delete(apiKey?.apiKey);
          });
        }
      } else if (deleteModal === 3) {
        track("integrations.api.deleteAPIKey.cancel");
      }
      updateState(draft => {
        draft.deleteModal = 0;
      });
    };
    f();
  }, [deleteModal, track, updateState]);
  const createNewKey = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(async () => {
    updateState(draft => {
      draft.createDisabled = true;
    });
    try {
      const newKey = new _core_models_apiKey__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z();
      _services_data_data__WEBPACK_IMPORTED_MODULE_4__/* .Data */ .V.getAPIKeys().add(newKey);
      await newKey.saveWithPromise();
    } catch (e) {
      (0,_lib_log_error__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP)({
        err: e
      });
    } finally {
      updateState(draft => {
        draft.createDisabled = false;
      });
    }
  }, [updateState]);
  const deleteKey = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(apiKey => {
    candidateDeletion.current = apiKey;
    updateState(draft => {
      draft.deleteModal = 1;
    });
    track("integrations.api.deleteAPIKey.ask");
  }, [track, updateState]);
  const listGrid = apiKeys.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
    className: _ApiKeys_module_css__WEBPACK_IMPORTED_MODULE_14__/* .listGrid */ .Wt,
    children: apiKeys.flatMap(apiKey => {
      const apiKeyKey = apiKey.apiKey;
      return [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(_ApiKeys_module_css__WEBPACK_IMPORTED_MODULE_14__/* .fakeInput */ .dG, _ApiKeys_module_css__WEBPACK_IMPORTED_MODULE_14__/* .left */ .t$),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
          children: apiKeyKey ?? _services_locale_locale__WEBPACK_IMPORTED_MODULE_0__.Locale.getString('generating_loading')
        })
      }, apiKeyKey), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(_ApiKeys_module_css__WEBPACK_IMPORTED_MODULE_14__/* .fakeInput */ .dG, _ApiKeys_module_css__WEBPACK_IMPORTED_MODULE_14__/* .right */ .F2),
        children: apiKeyKey && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_streakyc_ui_components__WEBPACK_IMPORTED_MODULE_2__/* .ButtonWithText */ .WY, {
          color: "muted",
          tooltip: _services_locale_locale__WEBPACK_IMPORTED_MODULE_0__.Locale.getString('copy_to_clipboard'),
          icon: "content_copy",
          onClick: async () => {
            if (!apiKeyKey) {
              return;
            }
            track("integrations.api.copyAPIKey.attempt");
            try {
              await navigator.clipboard.writeText(apiKeyKey);
              track("integrations.api.copyAPIKey.success");
              _core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_7__.inboxSDK.ButterBar.showMessage({
                text: _services_locale_locale__WEBPACK_IMPORTED_MODULE_0__.Locale.getString('copied_to_clipboard'),
                time: 5_000
              });
            } catch (e) {
              track("integrations.api.copyAPIKey.failed");
            }
          },
          variant: "text"
        })
      }, `${apiKeyKey}-copy`), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
        className: _ApiKeys_module_css__WEBPACK_IMPORTED_MODULE_14__/* .remove */ .Od,
        children: apiKeyKey && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_streakyc_ui_components__WEBPACK_IMPORTED_MODULE_2__/* .ButtonWithText */ .WY, {
          color: "muted",
          icon: "delete",
          loading: deletingKeys.has(apiKeyKey),
          onClick: () => {
            deleteKey(apiKey);
          },
          variant: "text"
        })
      }, `${apiKeyKey}-delete`)];
    })
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_basics_drawer__WEBPACK_IMPORTED_MODULE_1__/* .DrawerHeaderWithTitle */ .pD, {
      bottomBorder: true,
      left: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_basics_drawer__WEBPACK_IMPORTED_MODULE_1__/* .DrawerHeaderButton */ .Do, {
        materialIconName: "arrow_back",
        onClick: drawerCtx.back
      }),
      right: null,
      title: _services_locale_locale__WEBPACK_IMPORTED_MODULE_0__.Locale.getString('integrations_custom_title')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_basics_drawer__WEBPACK_IMPORTED_MODULE_1__/* .DrawerBodyContent */ .M2, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
        className: _ApiKeys_module_css__WEBPACK_IMPORTED_MODULE_14__/* .body */ .d1,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
          className: _ApiKeys_module_css__WEBPACK_IMPORTED_MODULE_14__/* .desc */ .C8,
          children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_0__.Locale.getArray('integrations_custom_desc', {
            apiLink: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("a", {
              href: "https://streak.readme.io",
              rel: "noopener noreferrer",
              target: "_blank",
              children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_0__.Locale.getString('integrations_custom_link_text')
            })
          })
        }), listGrid, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
          className: _ApiKeys_module_css__WEBPACK_IMPORTED_MODULE_14__/* .actions */ .Nw,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_streakyc_ui_components__WEBPACK_IMPORTED_MODULE_2__/* .ButtonWithText */ .WY, {
            icon: "add",
            loading: createDisabled,
            loadingPlacement: "left",
            onClick: () => {
              track("integrations.api.getAPIKey.click");
              createNewKey();
            },
            variant: "outlined/slim",
            children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_0__.Locale.getString('get_api_key')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_streakyc_ui_components__WEBPACK_IMPORTED_MODULE_2__/* .ButtonWithText */ .WY, {
            icon: "open_in_new",
            onClick: () => {
              track("integrations.api.viewAPIDocs.click");
              window.open('https://streak.readme.io/');
            },
            variant: "outlined/slim",
            children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_0__.Locale.getString('view_api_docs')
          })]
        }), deleteModal !== 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_basics_drawer__WEBPACK_IMPORTED_MODULE_1__/* .DrawerModal */ ._J, {
          onClose: () => {
            updateState(draft => {
              draft.deleteModal = 0;
            });
          },
          title: _services_locale_locale__WEBPACK_IMPORTED_MODULE_0__.Locale.getString('integrations_custom_delete_title'),
          body: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
            className: _ApiKeys_module_css__WEBPACK_IMPORTED_MODULE_14__/* .confirmBody */ .f4,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
              children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_0__.Locale.getString('integrations_custom_delete_warning')
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
              className: _ApiKeys_module_css__WEBPACK_IMPORTED_MODULE_14__/* .candidateDeletion */ .hr,
              children: candidateDeletion.current?.apiKey
            })]
          }),
          buttons: [{
            text: _services_locale_locale__WEBPACK_IMPORTED_MODULE_0__.Locale.getString('cancel'),
            props: {
              color: 'muted',
              onClick: () => {
                updateState(draft => {
                  draft.deleteModal = 3;
                });
              },
              variant: 'text'
            }
          }, {
            text: _services_locale_locale__WEBPACK_IMPORTED_MODULE_0__.Locale.getString('delete'),
            props: {
              onClick: () => {
                updateState(draft => {
                  draft.deleteModal = 2;
                });
              }
            }
          }]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_basics_drawer__WEBPACK_IMPORTED_MODULE_1__/* .DrawerFooter */ .ze, {
      actions: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_streakyc_ui_components__WEBPACK_IMPORTED_MODULE_2__/* .ButtonWithText */ .WY, {
          onClick: drawerCtx.close,
          children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_0__.Locale.getString('close')
        })
      })
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 10134:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C8: () => (/* binding */ _5),
/* harmony export */   F2: () => (/* binding */ _b),
/* harmony export */   Nw: () => (/* binding */ _1),
/* harmony export */   Od: () => (/* binding */ _a),
/* harmony export */   Wt: () => (/* binding */ _9),
/* harmony export */   d1: () => (/* binding */ _2),
/* harmony export */   dG: () => (/* binding */ _6),
/* harmony export */   f4: () => (/* binding */ _4),
/* harmony export */   hr: () => (/* binding */ _3),
/* harmony export */   t$: () => (/* binding */ _8)
/* harmony export */ });
/* unused harmony export gridStub */
// extracted by mini-css-extract-plugin
var _1 = "streak-mod__Z6_2OH8dUjqxAgkCIgSs";
var _2 = "streak-mod__aj28aREXsyYtyV6q_cQv";
var _3 = "streak-mod__CMUjIZ9yeGdq5Fgheh1H";
var _4 = "streak-mod__nsESBoQ7g2RTnTpZ7MtJ";
var _5 = "streak-mod__p3dOIdreey2zvjJpJgGo";
var _6 = "streak-mod__Di7KiZywfhf4yslMVGaM";
var _7 = "streak-mod__gZ_G_KkK4bHtJ1fq0oe9";
var _8 = "streak-mod__qKiY6EsoMQSDnF8HuWS2";
var _9 = "streak-mod__R8ulOiv2Jd_c2e1tgTuZ";
var _a = "streak-mod__tBn6GnKvt4Au3mPcbliH";
var _b = "streak-mod__SS4zdldrhacN2I_J7qzD";



/***/ })

};
;
//# sourceMappingURL=https://storage.googleapis.com/streak-extension-sourcemaps/clientjs/clientjs.chunk.8649.00add39fe2416e386aae.js.map