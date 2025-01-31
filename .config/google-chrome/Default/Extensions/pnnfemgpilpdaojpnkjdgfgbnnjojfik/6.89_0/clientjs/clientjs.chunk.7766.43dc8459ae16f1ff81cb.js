"use strict";
export const id = 7766;
export const ids = [7766];
export const modules = {

/***/ 35792:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ QuickAddDefault)
/* harmony export */ });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81518);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35091);
/* harmony import */ var _components_Heading_Heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67565);
/* harmony import */ var _images_lofiPipeline_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85697);
/* harmony import */ var _widgets_react_material_button_streakButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22682);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(59718);






function QuickAddDefault(_ref) {
  let {
    isImportEnabled,
    onImportClick,
    onIntroClick,
    onQuickAddContactClick
  } = _ref;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default().dynamic([["3718300646", [_images_lofiPipeline_png__WEBPACK_IMPORTED_MODULE_3__]]]) + " " + "quick_add_default_view",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default().dynamic([["3718300646", [_images_lofiPipeline_png__WEBPACK_IMPORTED_MODULE_3__]]]) + " " + "quick_add_default_view_img_container"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default().dynamic([["3718300646", [_images_lofiPipeline_png__WEBPACK_IMPORTED_MODULE_3__]]]) + " " + "title",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_Heading_Heading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        size: "h2",
        children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.getString('as_easy_as_a_spreadsheet')
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default().dynamic([["3718300646", [_images_lofiPipeline_png__WEBPACK_IMPORTED_MODULE_3__]]]) + " " + "subtitle",
      children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.getString('start_adding_rows_in_your_pipeline')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default().dynamic([["3718300646", [_images_lofiPipeline_png__WEBPACK_IMPORTED_MODULE_3__]]]) + " " + "call_to_actions_wrapper",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_widgets_react_material_button_streakButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP, {
        className: "call_to_action",
        accent: "default",
        disabled: false,
        isRound: false,
        onClick: onQuickAddContactClick,
        size: "default",
        variant: "text",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_widgets_react_material_button_streakButton__WEBPACK_IMPORTED_MODULE_4__/* .StreakButtonIcon */ .A2, {
          className: "call_to_action_icon",
          isOutline: true,
          materialIconName: "people"
        }), _services_locale_locale__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.getString('quick_adds')]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_widgets_react_material_button_streakButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP, {
        className: "call_to_action",
        accent: "default",
        disabled: !isImportEnabled,
        isRound: false,
        onClick: onImportClick,
        size: "default",
        variant: "text",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_widgets_react_material_button_streakButton__WEBPACK_IMPORTED_MODULE_4__/* .StreakButtonIcon */ .A2, {
          className: "call_to_action_icon",
          isOutline: true,
          materialIconName: "upload"
        }), _services_locale_locale__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.getString('import_data')]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_widgets_react_material_button_streakButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP, {
        className: "call_to_action",
        accent: "default",
        disabled: false,
        isRound: false,
        onClick: onIntroClick,
        size: "default",
        variant: "text",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_widgets_react_material_button_streakButton__WEBPACK_IMPORTED_MODULE_4__/* .StreakButtonIcon */ .A2, {
          className: "call_to_action_icon",
          isOutline: true,
          materialIconName: "help_outline"
        }), _services_locale_locale__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.getString('learn_more')]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "3718300646",
      dynamic: [_images_lofiPipeline_png__WEBPACK_IMPORTED_MODULE_3__],
      children: [".quick_add_default_view.__jsx-style-dynamic-selector{text-align:center;}", `.quick_add_default_view_img_container.__jsx-style-dynamic-selector{background-image:url('${_images_lofiPipeline_png__WEBPACK_IMPORTED_MODULE_3__}');background-size:cover;background-size:contain;background-repeat:no-repeat;background-position:center;width:100%;height:107px;margin:24px auto;}`, ".title.__jsx-style-dynamic-selector{color:var(--streak-black-primary);}", ".subtitle.__jsx-style-dynamic-selector{color:var(--streak-black-secondary);font-family:Roboto;font-style:normal;font-weight:normal;font-size:var(--streak-text-size-14);line-height:20px;-webkit-letter-spacing:0.25px;-moz-letter-spacing:0.25px;-ms-letter-spacing:0.25px;letter-spacing:0.25px;padding:0 12px;}", ".call_to_actions_wrapper.__jsx-style-dynamic-selector{padding:24px;}", ".call_to_actions_wrapper.__jsx-style-dynamic-selector .call_to_action{width:100%;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}", ".call_to_actions_wrapper.__jsx-style-dynamic-selector .call_to_action_icon{margin-right:8px;margin-left:28px;}"]
    })]
  });
}

/***/ }),

/***/ 87766:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ QuickAddDefaultContainer)
/* harmony export */ });
/* harmony import */ var _components_QuickAddDefault__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35792);
/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3572);
/* harmony import */ var _customOnboarding_pipelineImportFlow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36903);
/* harmony import */ var _services_data_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38672);
/* harmony import */ var _services_accessManager_accessManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24067);
/* harmony import */ var _pipelineImport_usePipelineImport__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(58624);
/* harmony import */ var _core_hooks_useEnabledFeatures__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(27882);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_customOnboarding_pipelineImportFlow__WEBPACK_IMPORTED_MODULE_1__, _services_data_data__WEBPACK_IMPORTED_MODULE_2__, _services_accessManager_accessManager__WEBPACK_IMPORTED_MODULE_3__, _pipelineImport_usePipelineImport__WEBPACK_IMPORTED_MODULE_4__, _core_hooks_useEnabledFeatures__WEBPACK_IMPORTED_MODULE_5__]);
([_customOnboarding_pipelineImportFlow__WEBPACK_IMPORTED_MODULE_1__, _services_data_data__WEBPACK_IMPORTED_MODULE_2__, _services_accessManager_accessManager__WEBPACK_IMPORTED_MODULE_3__, _pipelineImport_usePipelineImport__WEBPACK_IMPORTED_MODULE_4__, _core_hooks_useEnabledFeatures__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








function QuickAddDefaultContainer(_ref) {
  let {
    track
  } = _ref;
  const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_7__/* .useDispatch */ .I0)();
  const pipelineKey = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_7__/* .useSelector */ .v9)(state => state.routeState ? state.routeState.params.key : 'defaultKey');
  const pipeline = _services_data_data__WEBPACK_IMPORTED_MODULE_2__/* .Data */ .V.getPipeline(pipelineKey);
  const {
    openImporter
  } = (0,_pipelineImport_usePipelineImport__WEBPACK_IMPORTED_MODULE_4__/* .usePipelineImport */ ._)();
  const {
    importNewSplashScreenExp
  } = (0,_core_hooks_useEnabledFeatures__WEBPACK_IMPORTED_MODULE_5__/* .useEnabledFeatures */ .o)(['importNewSplashScreenExp']);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_QuickAddDefault__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
    isImportEnabled: _services_accessManager_accessManager__WEBPACK_IMPORTED_MODULE_3__.AccessManager.isAccessAllowed(pipeline, 'ImportJob', 'CREATE'),
    onImportClick: async () => {
      if (!pipeline) return;
      if (importNewSplashScreenExp) {
        openImporter(pipeline, track);
        return;
      }
      (0,_customOnboarding_pipelineImportFlow__WEBPACK_IMPORTED_MODULE_1__/* .startPipelineImportFlow */ .c)(track, pipeline);
    },
    onIntroClick: () => {
      track('introToPipelines.click');
      window.open('https://support.streak.com/en/articles/3317255-adding-boxes-to-your-pipeline');
    },
    onQuickAddContactClick: () => {
      track('quickAdd.click');
      dispatch({
        type: 'SIDEBAR/CARDS/PUSH',
        cards: [{
          type: 'QUICK_ADD'
        }]
      });
    }
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
//# sourceMappingURL=https://storage.googleapis.com/streak-extension-sourcemaps/clientjs/clientjs.chunk.7766.43dc8459ae16f1ff81cb.js.map