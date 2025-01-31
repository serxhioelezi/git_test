"use strict";
export const id = 9696;
export const ids = [9696];
export const modules = {

/***/ 9696:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ThreadView)
/* harmony export */ });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81518);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44345);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(63086);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17013);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _presentation_boxCardList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17740);
/* harmony import */ var _components_AddToPipeline_AddToPipeline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(30177);
/* harmony import */ var _components_AutoboxMenu_AutoboxMenuContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(93242);
/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3572);
/* harmony import */ var _redux_selectors_getBoxIdsForCurrentThread__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(42504);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(35091);
/* harmony import */ var _widgets_react_loadingSpinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(72905);
/* harmony import */ var _widgets_react_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(82792);
/* harmony import */ var _boxCache_BoxCache__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(18123);
/* harmony import */ var _lib_utils_isNotNil__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(72086);
/* harmony import */ var _lib_log_error__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7961);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_presentation_boxCardList__WEBPACK_IMPORTED_MODULE_3__, _components_AutoboxMenu_AutoboxMenuContainer__WEBPACK_IMPORTED_MODULE_5__, _boxCache_BoxCache__WEBPACK_IMPORTED_MODULE_9__]);
([_presentation_boxCardList__WEBPACK_IMPORTED_MODULE_3__, _components_AutoboxMenu_AutoboxMenuContainer__WEBPACK_IMPORTED_MODULE_5__, _boxCache_BoxCache__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















function ThreadView(_ref) {
  let {
    card,
    track
  } = _ref;
  (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_12__/* .useDispatch */ .I0)();
  const menuButtonRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const [boxes, setBoxes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const boxIds = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_12__/* .useSelector */ .v9)(state => card.boxIds || (0,_redux_selectors_getBoxIdsForCurrentThread__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)(state), react_redux__WEBPACK_IMPORTED_MODULE_14__/* .shallowEqual */ .wU);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    Promise.all(boxIds.map(boxKey => _boxCache_BoxCache__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z.getBoxById(boxKey))).then(boxesResults => {
      const existingBoxes = boxesResults.filter(_lib_utils_isNotNil__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z);
      const sortedBoxes = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.orderBy)(existingBoxes, box => box.get('lastUpdatedTimestamp'), 'desc');
      setBoxes(sortedBoxes);
    }).catch(err => {
      setBoxes([]);
      (0,_lib_log_error__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .ZP)({
        err,
        details: {
          boxIds
        },
        level: 'error'
      });
    });
  }, [boxIds]);
  const threadMetaData = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_12__/* .useSelector */ .v9)(state => card.threadMetaData || state.threadViewState.metaData);
  const threadViewType = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_12__/* .useSelector */ .v9)(state => state.threadViewState.type);
  const addToPipelineButton = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(props => {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_AddToPipeline_AddToPipeline__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
      ...props,
      style: {
        width: '100%'
      },
      callToAction: _services_locale_locale__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.getString('add_to_pipeline_card')
    });
  }, []);
  if (!threadMetaData) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_widgets_react_loadingSpinner__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {});
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
    className: "jsx-3800408961",
    children: [threadViewType != 'NON_NATIVE_UNIFIED_THREAD' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
      className: "jsx-3800408961" + " " + "streak__add_to_pipeline_card",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_widgets_react_material_menu__WEBPACK_IMPORTED_MODULE_8__/* .MenuButton */ .j2, {
        ButtonComponent: addToPipelineButton,
        positionOptions: {
          position: 'cover',
          vAlign: 'top'
        },
        menu: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_AutoboxMenu_AutoboxMenuContainer__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
          composeWindowId: card.composeWindowId,
          maxWidth: 268,
          threadMetaData: threadMetaData
        }),
        ref: menuButtonRef
      })
    }), boxes.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_presentation_boxCardList__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
      boxIds: boxes.map(b => b.getId()),
      track: track
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "3800408961",
      children: [".streak__add_to_pipeline_card.jsx-3800408961{margin-bottom:16px;}"]
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 17740:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ BoxCardList)
/* harmony export */ });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81518);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _streakyc_common_services_data_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5575);
/* harmony import */ var _components_BoxCard_BoxCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59462);
/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3572);
/* harmony import */ var _widgets_paywallGateway_paywallGateway__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64167);
/* harmony import */ var _billing_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87872);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_widgets_paywallGateway_paywallGateway__WEBPACK_IMPORTED_MODULE_2__, _billing_helpers__WEBPACK_IMPORTED_MODULE_3__]);
([_widgets_paywallGateway_paywallGateway__WEBPACK_IMPORTED_MODULE_2__, _billing_helpers__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







function BoxCardList(_ref) {
  let {
    boxIds,
    track
  } = _ref;
  const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_5__/* .useDispatch */ .I0)();
  const showPaywallOrTakeAction = originalAction => {
    if (!(0,_billing_helpers__WEBPACK_IMPORTED_MODULE_3__/* .canUseCRMFeatures */ .m$)((0,_streakyc_common_services_data_user__WEBPACK_IMPORTED_MODULE_6__/* .getUser */ .P)())) {
      (0,_widgets_paywallGateway_paywallGateway__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({
        feature: 'createTeams'
      });
    } else {
      originalAction();
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: "jsx-1332987659" + " " + "streak__box_cards_wrapper",
    children: [boxIds.map(boxId => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "jsx-1332987659" + " " + "streak__box_cards",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_BoxCard_BoxCard__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        boxId: boxId,
        onClickBoxCard: () => {
          showPaywallOrTakeAction(() => {
            dispatch({
              type: 'SIDEBAR/CARDS/PUSH',
              cards: [{
                type: 'BOX_DETAILS',
                id: boxId
              }]
            });
            track('boxCard.click', {
              boxId
            });
          });
        }
      })
    }, boxId)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "1332987659",
      children: [".streak__box_cards.jsx-1332987659{margin-bottom:16px;}"]
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
//# sourceMappingURL=https://storage.googleapis.com/streak-extension-sourcemaps/clientjs/clientjs.chunk.9696.2b1e0736f0665f2b8483.js.map