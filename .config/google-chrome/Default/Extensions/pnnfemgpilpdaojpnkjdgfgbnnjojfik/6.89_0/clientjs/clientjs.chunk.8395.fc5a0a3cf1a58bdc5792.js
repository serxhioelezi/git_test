"use strict";
export const id = 8395;
export const ids = [8395];
export const modules = {

/***/ 38395:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ContactAndOrgBoxesContainer)
/* harmony export */ });
/* harmony import */ var _presentation_boxCardList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17740);
/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3572);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_presentation_boxCardList__WEBPACK_IMPORTED_MODULE_0__]);
_presentation_boxCardList__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function ContactAndOrgBoxesContainer(_ref) {
  let {
    track
  } = _ref;
  const cards = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__/* .useSelector */ .v9)(state => state.sidebarState.activeCardOverrides);
  const card = cards[cards.length - 1];
  const boxIds = card.boxIds;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: boxIds.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_presentation_boxCardList__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
      boxIds: boxIds,
      track: track
    })
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
//# sourceMappingURL=https://storage.googleapis.com/streak-extension-sourcemaps/clientjs/clientjs.chunk.8395.fc5a0a3cf1a58bdc5792.js.map