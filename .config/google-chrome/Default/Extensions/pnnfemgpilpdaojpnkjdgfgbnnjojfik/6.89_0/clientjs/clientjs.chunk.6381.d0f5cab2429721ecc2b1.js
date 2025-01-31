"use strict";
export const id = 6381;
export const ids = [6381];
export const modules = {

/***/ 54813:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports originalTemplates, originalTemplateTypes */
/* harmony import */ var _core_models_pipeline_columns_columnTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13776);

const originalTemplates = {
  SALES: 'sales',
  LEAD_GENERATION: 'leadGeneration',
  PARTNERSHIPS: 'partnerships',
  HIRING: 'hiring',
  DEAL_FLOW: 'dealFlow',
  GENERAL_OUTREACH: 'generalOutreach',
  FUNDRAISING: 'fundraising',
  ORDERS: 'orders'
};
const originalTemplateTypes = {
  [originalTemplates.SALES]: 'SalesCRM',
  [originalTemplates.LEAD_GENERATION]: 'Lead Generation',
  [originalTemplates.PARTNERSHIPS]: 'Partnerships',
  [originalTemplates.HIRING]: 'Hiring',
  [originalTemplates.DEAL_FLOW]: 'Deal Flow',
  [originalTemplates.GENERAL_OUTREACH]: 'General Outreach',
  [originalTemplates.FUNDRAISING]: 'Fundraising',
  [originalTemplates.ORDERS]: 'Orders'
};
const savedViewsForTemplates = [{
  nameLocaleKey: 'saved_view_template_by_emails_sent_name',
  groupBy: {
    magicColumn: 'totalNumberOfSentEmails'
  }
}, {
  nameLocaleKey: 'saved_view_template_replied_name',
  filter: {
    groups: [{
      statements: [{
        filterValue: {
          specificValue: '0'
        },
        magicColumn: 'totalNumberOfReceivedEmails',
        operation: 'gt'
      }]
    }]
  }
}, {
  nameLocaleKey: 'saved_view_template_no_reply_name',
  filter: {
    groups: [{
      statements: [{
        filterValue: {
          specificValue: '0'
        },
        magicColumn: 'totalNumberOfReceivedEmails',
        operation: 'eq'
      }]
    }]
  }
}, {
  nameLocaleKey: 'saved_view_template_viewed_emails',
  filter: {
    groups: [{
      statements: [{
        filterValue: {},
        magicColumn: 'mostRecentLastSentEmailViewsTimestamp',
        operation: 'isSet'
      }]
    }]
  },
  sort: [{
    direction: 'DESC',
    magicColumn: 'mostRecentLastSentEmailViewsTimestamp'
  }]
}];
const originalTemplateData = {
  [originalTemplates.SALES]: {
    theme: 'STREAK',
    templateType: originalTemplateTypes[originalTemplates.SALES],
    nameLocaleKey: 'pipeline_template_sales_name',
    savedViews: savedViewsForTemplates,
    stages: [{
      nameLocaleKey: 'pipeline_template_stage_new'
    }, {
      nameLocaleKey: 'pipeline_template_stage_contacted'
    }, {
      nameLocaleKey: 'pipeline_template_stage_followed_up'
    }, {
      nameLocaleKey: 'pipeline_template_stage_replied'
    }, {
      nameLocaleKey: 'pipeline_template_stage_qualified'
    }, {
      nameLocaleKey: 'pipeline_template_stage_closed_won'
    }, {
      nameLocaleKey: 'pipeline_template_stage_closed_lost'
    }],
    fields: [{
      systemColumnDefinitionId: 'mostRecentLastSentEmailViewsTimestamp'
    }, {
      systemColumnDefinitionId: 'totalNumberOfLastSentEmailViews'
    }, {
      systemColumnDefinitionId: 'lastEmailSentTimestamp'
    }, {
      systemColumnDefinitionId: 'totalNumberOfSentEmails'
    }, {
      systemColumnDefinitionId: 'totalNumberOfReceivedEmails'
    }, {
      customColumnType: _core_models_pipeline_columns_columnTypes__WEBPACK_IMPORTED_MODULE_0__/* .DROPDOWN */ .yb,
      customColumnNameLocaleKey: 'pipeline_template_field_lead_source'
    }],
    materialIconName: 'local_offer'
  },
  [originalTemplates.LEAD_GENERATION]: {
    theme: 'STREAK',
    templateType: originalTemplateTypes[originalTemplates.LEAD_GENERATION],
    nameLocaleKey: 'pipeline_template_lead_generation_name',
    savedViews: savedViewsForTemplates,
    stages: [{
      nameLocaleKey: 'pipeline_template_stage_new'
    }, {
      nameLocaleKey: 'pipeline_template_stage_contacted'
    }, {
      nameLocaleKey: 'pipeline_template_stage_follow_up_1'
    }, {
      nameLocaleKey: 'pipeline_template_stage_follow_up_2'
    }, {
      nameLocaleKey: 'pipeline_template_stage_replied'
    }, {
      nameLocaleKey: 'pipeline_template_stage_qualified'
    }, {
      nameLocaleKey: 'pipeline_template_stage_not_qualified'
    }],
    fields: [{
      systemColumnDefinitionId: 'mostRecentLastSentEmailViewsTimestamp'
    }, {
      systemColumnDefinitionId: 'totalNumberOfLastSentEmailViews'
    }, {
      systemColumnDefinitionId: 'lastEmailSentTimestamp'
    }, {
      systemColumnDefinitionId: 'totalNumberOfSentEmails'
    }, {
      systemColumnDefinitionId: 'totalNumberOfReceivedEmails'
    }, {
      customColumnType: _core_models_pipeline_columns_columnTypes__WEBPACK_IMPORTED_MODULE_0__/* .DROPDOWN */ .yb,
      customColumnNameLocaleKey: 'pipeline_template_field_lead_source'
    }],
    materialIconName: 'local_offer'
  },
  [originalTemplates.PARTNERSHIPS]: {
    theme: 'STREAK',
    templateType: originalTemplateTypes[originalTemplates.PARTNERSHIPS],
    nameLocaleKey: 'pipeline_template_partnerships_name',
    savedViews: savedViewsForTemplates,
    stages: [{
      nameLocaleKey: 'pipeline_template_stage_new'
    }, {
      nameLocaleKey: 'pipeline_template_stage_contacted'
    }, {
      nameLocaleKey: 'pipeline_template_stage_followed_up'
    }, {
      nameLocaleKey: 'pipeline_template_stage_replied'
    }, {
      nameLocaleKey: 'pipeline_template_stage_negotiation'
    }, {
      nameLocaleKey: 'pipeline_template_stage_closed_won'
    }, {
      nameLocaleKey: 'pipeline_template_stage_closed_lost'
    }],
    fields: [{
      systemColumnDefinitionId: 'mostRecentLastSentEmailViewsTimestamp'
    }, {
      systemColumnDefinitionId: 'totalNumberOfLastSentEmailViews'
    }, {
      systemColumnDefinitionId: 'lastEmailSentTimestamp'
    }, {
      systemColumnDefinitionId: 'totalNumberOfSentEmails'
    }, {
      systemColumnDefinitionId: 'totalNumberOfReceivedEmails'
    }, {
      customColumnType: _core_models_pipeline_columns_columnTypes__WEBPACK_IMPORTED_MODULE_0__/* .DROPDOWN */ .yb,
      customColumnNameLocaleKey: 'pipeline_template_field_lead_source'
    }],
    materialIconName: 'work_outline'
  },
  [originalTemplates.HIRING]: {
    theme: 'STREAK',
    templateType: originalTemplateTypes[originalTemplates.HIRING],
    nameLocaleKey: 'pipeline_template_hiring_name',
    savedViews: savedViewsForTemplates,
    stages: [{
      nameLocaleKey: 'pipeline_template_stage_new'
    }, {
      nameLocaleKey: 'pipeline_template_stage_contacted'
    }, {
      nameLocaleKey: 'pipeline_template_stage_followed_up'
    }, {
      nameLocaleKey: 'pipeline_template_stage_replied'
    }, {
      nameLocaleKey: 'pipeline_template_stage_interview'
    }, {
      nameLocaleKey: 'pipeline_template_stage_hired'
    }, {
      nameLocaleKey: 'pipeline_template_stage_passed'
    }],
    fields: [{
      systemColumnDefinitionId: 'mostRecentLastSentEmailViewsTimestamp'
    }, {
      systemColumnDefinitionId: 'totalNumberOfLastSentEmailViews'
    }, {
      systemColumnDefinitionId: 'lastEmailSentTimestamp'
    }, {
      systemColumnDefinitionId: 'totalNumberOfSentEmails'
    }, {
      systemColumnDefinitionId: 'totalNumberOfReceivedEmails'
    }, {
      customColumnType: _core_models_pipeline_columns_columnTypes__WEBPACK_IMPORTED_MODULE_0__/* .DROPDOWN */ .yb,
      customColumnNameLocaleKey: 'pipeline_template_field_source'
    }],
    materialIconName: 'work_outline'
  },
  [originalTemplates.DEAL_FLOW]: {
    theme: 'STREAK',
    templateType: originalTemplateTypes[originalTemplates.DEAL_FLOW],
    nameLocaleKey: 'pipeline_template_deal_flow_name',
    savedViews: savedViewsForTemplates,
    stages: [{
      nameLocaleKey: 'pipeline_template_stage_new'
    }, {
      nameLocaleKey: 'pipeline_template_stage_contacted'
    }, {
      nameLocaleKey: 'pipeline_template_stage_followed_up'
    }, {
      nameLocaleKey: 'pipeline_template_stage_replied'
    }, {
      nameLocaleKey: 'pipeline_template_stage_negotiation'
    }, {
      nameLocaleKey: 'pipeline_template_stage_completed'
    }, {
      nameLocaleKey: 'pipeline_template_stage_passed'
    }],
    fields: [{
      systemColumnDefinitionId: 'mostRecentLastSentEmailViewsTimestamp'
    }, {
      systemColumnDefinitionId: 'totalNumberOfLastSentEmailViews'
    }, {
      systemColumnDefinitionId: 'lastEmailSentTimestamp'
    }, {
      systemColumnDefinitionId: 'totalNumberOfSentEmails'
    }, {
      systemColumnDefinitionId: 'totalNumberOfReceivedEmails'
    }, {
      customColumnType: _core_models_pipeline_columns_columnTypes__WEBPACK_IMPORTED_MODULE_0__/* .DROPDOWN */ .yb,
      customColumnNameLocaleKey: 'pipeline_template_field_source'
    }],
    materialIconName: 'headset_mic'
  },
  [originalTemplates.ORDERS]: {
    theme: 'STREAK',
    templateType: originalTemplateTypes[originalTemplates.ORDERS],
    nameLocaleKey: 'pipeline_template_orders_name',
    savedViews: savedViewsForTemplates,
    stages: [{
      nameLocaleKey: 'pipeline_template_stage_new'
    }, {
      nameLocaleKey: 'pipeline_template_stage_contacted'
    }, {
      nameLocaleKey: 'pipeline_template_stage_followed_up'
    }, {
      nameLocaleKey: 'pipeline_template_stage_working'
    }, {
      nameLocaleKey: 'pipeline_template_stage_completed'
    }],
    fields: [{
      systemColumnDefinitionId: 'mostRecentLastSentEmailViewsTimestamp'
    }, {
      systemColumnDefinitionId: 'totalNumberOfLastSentEmailViews'
    }, {
      systemColumnDefinitionId: 'lastEmailSentTimestamp'
    }, {
      systemColumnDefinitionId: 'totalNumberOfSentEmails'
    }, {
      systemColumnDefinitionId: 'totalNumberOfReceivedEmails'
    }, {
      customColumnType: _core_models_pipeline_columns_columnTypes__WEBPACK_IMPORTED_MODULE_0__/* .DROPDOWN */ .yb,
      customColumnNameLocaleKey: 'pipeline_template_field_priority'
    }],
    materialIconName: 'shopping_cart'
  },
  [originalTemplates.FUNDRAISING]: {
    theme: 'STREAK',
    templateType: originalTemplateTypes[originalTemplates.FUNDRAISING],
    nameLocaleKey: 'pipeline_template_fundraising_name',
    savedViews: savedViewsForTemplates,
    stages: [{
      nameLocaleKey: 'pipeline_template_stage_new'
    }, {
      nameLocaleKey: 'pipeline_template_stage_contacted'
    }, {
      nameLocaleKey: 'pipeline_template_stage_followed_up'
    }, {
      nameLocaleKey: 'pipeline_template_stage_replied'
    }, {
      nameLocaleKey: 'pipeline_template_stage_pitched'
    }, {
      nameLocaleKey: 'pipeline_template_stage_signed'
    }, {
      nameLocaleKey: 'pipeline_template_stage_passed'
    }],
    fields: [{
      systemColumnDefinitionId: 'mostRecentLastSentEmailViewsTimestamp'
    }, {
      systemColumnDefinitionId: 'totalNumberOfLastSentEmailViews'
    }, {
      systemColumnDefinitionId: 'lastEmailSentTimestamp'
    }, {
      systemColumnDefinitionId: 'totalNumberOfSentEmails'
    }, {
      systemColumnDefinitionId: 'totalNumberOfReceivedEmails'
    }, {
      customColumnType: _core_models_pipeline_columns_columnTypes__WEBPACK_IMPORTED_MODULE_0__/* .DROPDOWN */ .yb,
      customColumnNameLocaleKey: 'pipeline_template_field_source'
    }],
    materialIconName: 'local_atm'
  },
  [originalTemplates.GENERAL_OUTREACH]: {
    theme: 'STREAK',
    templateType: originalTemplateTypes[originalTemplates.GENERAL_OUTREACH],
    nameLocaleKey: 'pipeline_template_general_outreach_name',
    savedViews: savedViewsForTemplates,
    stages: [{
      nameLocaleKey: 'pipeline_template_stage_new'
    }, {
      nameLocaleKey: 'pipeline_template_stage_contacted'
    }, {
      nameLocaleKey: 'pipeline_template_stage_followed_up'
    }, {
      nameLocaleKey: 'pipeline_template_stage_replied'
    }],
    fields: [{
      systemColumnDefinitionId: 'mostRecentLastSentEmailViewsTimestamp'
    }, {
      systemColumnDefinitionId: 'totalNumberOfLastSentEmailViews'
    }, {
      systemColumnDefinitionId: 'lastEmailSentTimestamp'
    }, {
      systemColumnDefinitionId: 'totalNumberOfSentEmails'
    }, {
      systemColumnDefinitionId: 'totalNumberOfReceivedEmails'
    }, {
      customColumnType: _core_models_pipeline_columns_columnTypes__WEBPACK_IMPORTED_MODULE_0__/* .DROPDOWN */ .yb,
      customColumnNameLocaleKey: 'pipeline_template_field_priority'
    }],
    materialIconName: 'label_important'
  }
};
const selectedTemplateId = 'sales';
const templateOrder = [originalTemplates.SALES, originalTemplates.LEAD_GENERATION, originalTemplates.PARTNERSHIPS, originalTemplates.HIRING, originalTemplates.DEAL_FLOW, originalTemplates.FUNDRAISING, originalTemplates.ORDERS, originalTemplates.GENERAL_OUTREACH];
const templatesData = {
  originalTemplateData,
  selectedTemplateId,
  templateOrder
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (templatesData);

/***/ }),

/***/ 54889:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ PipelineButton)
});

// EXTERNAL MODULE: ./.yarn/cache/classnames-npm-2.5.1-c7273f3423-58eb394e88.zip/node_modules/classnames/index.js
var classnames = __webpack_require__(47587);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./extensions/common/js/widgets/react/material/button/streakButton.tsx
var streakButton = __webpack_require__(22682);
;// CONCATENATED MODULE: ./extensions/common/js/modules/streakSidebar/presentation/pipelineButton.module.css
// extracted by mini-css-extract-plugin
var _1 = "streak-mod__FIUoRQSraFTUaafsFXCz";
var _2 = "streak-mod__JDQOTfntcBjrFvSulili";
var _3 = "streak-mod__UI0JSAuFimhsbUSJVKPF";


// EXTERNAL MODULE: ./.yarn/cache/react-npm-18.3.1-af38f3c1ae-261137d3f3.zip/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(59718);
;// CONCATENATED MODULE: ./extensions/common/js/modules/streakSidebar/presentation/pipelineButton.tsx




function PipelineButton(_ref) {
  let {
    materialIconName,
    name,
    onClick,
    isHighlighted = false
  } = _ref;
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: classnames_default()('streak__sidebar_pipeline_button', _2, {
      [_1]: isHighlighted
    }),
    title: name,
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(streakButton/* default */.ZP, {
      onClick: () => onClick(),
      variant: "outline",
      children: [materialIconName && /*#__PURE__*/(0,jsx_runtime.jsx)(streakButton/* StreakButtonIcon */.A2, {
        isOutline: true,
        materialIconName: materialIconName,
        style: {
          margin: '0 auto',
          paddingTop: '10px'
        }
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: _3,
        children: name
      })]
    })
  });
}

/***/ }),

/***/ 33484:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ PipelineList)
/* harmony export */ });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81518);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44345);
/* harmony import */ var _redux_helpers_sortPipelineStates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12672);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35091);
/* harmony import */ var _widgets_react_material_button_streakButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22682);
/* harmony import */ var _pipelineButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(54889);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_redux_helpers_sortPipelineStates__WEBPACK_IMPORTED_MODULE_2__]);
_redux_helpers_sortPipelineStates__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







function PipelineList(_ref) {
  let {
    onClick,
    onShowHiddenPipelinesClick,
    pipelines
  } = _ref;
  const [isShowingHiddenPipelines, setIsShowingHiddenPipelines] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const sortedPipelines = (0,_redux_helpers_sortPipelineStates__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(Object.values(pipelines));
  const hasHiddenPipelines = sortedPipelines.some(pipeline => pipeline.isHidden);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    className: "jsx-710180622" + " " + "streak__sidebar_pipeline_list",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: "jsx-710180622" + " " + "streak__sidebar_pipeline_list_buttons",
      children: sortedPipelines.filter(pipeline => isShowingHiddenPipelines ? true : !pipeline.isHidden).map(_ref2 => {
        let {
          icon: materialIconName,
          id,
          name
        } = _ref2;
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_pipelineButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
          materialIconName: materialIconName,
          name: name,
          onClick: () => onClick(id)
        }, id);
      })
    }), hasHiddenPipelines && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_widgets_react_material_button_streakButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP, {
      onClick: () => {
        setIsShowingHiddenPipelines(!isShowingHiddenPipelines);
        onShowHiddenPipelinesClick && onShowHiddenPipelinesClick();
      },
      variant: "text",
      children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.getString(isShowingHiddenPipelines ? 'show_less' : 'show_hidden_pipelines')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "710180622",
      children: [".streak__sidebar_pipeline_list.jsx-710180622{text-align:center;}", ".streak__sidebar_pipeline_list_buttons.jsx-710180622{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}", ".streak__sidebar_pipeline_list.jsx-710180622 .streak__sidebar_pipeline_button{margin-bottom:8px;margin-right:8px;}", ".streak__sidebar_pipeline_list.jsx-710180622 .streak__sidebar_pipeline_button:nth-child(3n){margin-right:0;}"]
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9381:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ FooterButton)
/* harmony export */ });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81518);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3572);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35091);
/* harmony import */ var _widgets_react_material_button_streakButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22682);
/* harmony import */ var _services_tracker_useTracker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(70989);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(59718);






const HEIGHT = 64;
function FooterButton() {
  const track = (0,_services_tracker_useTracker__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP)('addThreadToSingleBox');
  const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_5__/* .useDispatch */ .I0)();
  const pipelines = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_5__/* .useSelector */ .v9)(state => state.models.pipelines);
  const hasPipelines = Object.keys(pipelines).length > 0;
  const {
    selectedThreadListMetaData
  } = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_5__/* .useSelector */ .v9)(state => state.listViewState);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: "jsx-1132763500" + " " + "footer_button_container",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "jsx-1132763500" + " " + "footer_button",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_widgets_react_material_button_streakButton__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP, {
        onClick: () => {
          track('click');
          if (hasPipelines) {
            dispatch({
              type: 'SIDEBAR/CARDS/PUSH',
              cards: [{
                type: 'ADD_BOX',
                isAutoboxed: true,
                threadListMetaData: selectedThreadListMetaData
              }]
            });
          } else {
            dispatch({
              type: 'SIDEBAR/CARDS/PUSH',
              cards: [{
                type: 'CREATE_PIPELINE'
              }]
            });
          }
        },
        variant: "text",
        children: [_services_locale_locale__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.getString('add_all_threads_to_single_box'), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_widgets_react_material_button_streakButton__WEBPACK_IMPORTED_MODULE_2__/* .StreakButtonIcon */ .A2, {
          materialIconName: "arrow_forward"
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "1132763500",
      children: [`.footer_button_container.jsx-1132763500{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;min-height:${HEIGHT}px;}`, `.footer_button.jsx-1132763500{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:var(--streak-solid-white);bottom:0;box-shadow: 0px 2px 4px var(--streak-black-shadow), 0px 1px 10px var(--streak-black-divider), 0px 4px 5px var(--streak-black-divider);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:${HEIGHT}px;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;left:0;position:absolute;width:100%;}`]
    })]
  });
}

/***/ }),

/***/ 26381:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ThreadListView)
/* harmony export */ });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81518);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44345);
/* harmony import */ var _FooterButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9381);
/* harmony import */ var _ThreadListViewNewPipeline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10893);
/* harmony import */ var _ThreadListViewExistingPipeline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(37448);
/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3572);
/* harmony import */ var _redux_selectors_isNewCRMUser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(19542);
/* harmony import */ var _services_tracker_useTracker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(70989);
/* harmony import */ var _selectedThreadsSelectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(79567);
/* harmony import */ var _hooks_useThreadsWithFullParticipants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(11939);
/* harmony import */ var _ThreadListViewLoadingSkeleton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(77825);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ThreadListViewNewPipeline__WEBPACK_IMPORTED_MODULE_3__, _ThreadListViewExistingPipeline__WEBPACK_IMPORTED_MODULE_4__, _selectedThreadsSelectors__WEBPACK_IMPORTED_MODULE_6__, _hooks_useThreadsWithFullParticipants__WEBPACK_IMPORTED_MODULE_7__]);
([_ThreadListViewNewPipeline__WEBPACK_IMPORTED_MODULE_3__, _ThreadListViewExistingPipeline__WEBPACK_IMPORTED_MODULE_4__, _selectedThreadsSelectors__WEBPACK_IMPORTED_MODULE_6__, _hooks_useThreadsWithFullParticipants__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












function ThreadListView(_ref) {
  let {
    track
  } = _ref;
  const selectedThreadWillFullParticipants = (0,_hooks_useThreadsWithFullParticipants__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
  const isNewCRMUserBool = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_10__/* .useSelector */ .v9)(state => (0,_redux_selectors_isNewCRMUser__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)(state));
  const trackEventName = isNewCRMUserBool ? 'newCRMUser' : 'existingCRMUser';
  const contactsEmails = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_10__/* .useSelector */ .v9)(state => (0,_selectedThreadsSelectors__WEBPACK_IMPORTED_MODULE_6__/* .getSelectedThreadsWithFullParticipantsEmailsExcludeStreakOrTeammates */ .F)(state));
  const numOfContacts = contactsEmails.length;
  const numOfSelectedThreads = selectedThreadWillFullParticipants.length;
  const isInitialLoading = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_10__/* .useSelector */ .v9)(state => Boolean(state.listViewState.isEmailThreadsLoading) && Object.keys(state.listViewState.emailThreads).length === 0);
  const _track = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (eventName) {
    let extraProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    track(`${trackEventName}.${eventName}`, {
      ...extraProps,
      numOfContacts,
      numOfSelectedThreads
    });
  }, [track, trackEventName, numOfContacts, numOfSelectedThreads]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    _track('render');
  }, [_track]);
  if (isInitialLoading) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ThreadListViewLoadingSkeleton__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {});
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_services_tracker_useTracker__WEBPACK_IMPORTED_MODULE_5__/* .TrackerContext */ .fy.Provider, {
    value: _track,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
      className: "jsx-1724273360" + " " + "streak__thread_list_view",
      children: [isNewCRMUserBool ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ThreadListViewNewPipeline__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
          selectedThreads: selectedThreadWillFullParticipants,
          contactsEmails: contactsEmails
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ThreadListViewExistingPipeline__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
          selectedThreads: selectedThreadWillFullParticipants,
          contactsEmails: contactsEmails
        })]
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ThreadListViewExistingPipeline__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
          selectedThreads: selectedThreadWillFullParticipants,
          contactsEmails: contactsEmails
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ThreadListViewNewPipeline__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
          selectedThreads: selectedThreadWillFullParticipants,
          contactsEmails: contactsEmails
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_FooterButton__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
        id: "1724273360",
        children: [".streak__thread_list_view.jsx-1724273360{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:100%;}"]
      })]
    })
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 37448:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ ThreadListViewExistingPipeline)
/* harmony export */ });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81518);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44345);
/* harmony import */ var _streakyc_common_services_data_user__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(5575);
/* harmony import */ var _components_Icon_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71174);
/* harmony import */ var _components_Heading_Heading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67565);
/* harmony import */ var _components_Transitions_VerticalCollapse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8098);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(35091);
/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3572);
/* harmony import */ var _presentation_pipelineList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(33484);
/* harmony import */ var _redux_selectors_isNewCRMUser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(19542);
/* harmony import */ var _redux_selectors_teamSelectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(71973);
/* harmony import */ var _services_boxLimitChecker_doesUserHaveMoreBoxesThanOverallLimit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(93237);
/* harmony import */ var _widgets_paywallGateway_paywallGateway__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(64167);
/* harmony import */ var _services_tracker_useTracker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(70989);
/* harmony import */ var _billing_helpers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(87872);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_presentation_pipelineList__WEBPACK_IMPORTED_MODULE_6__, _redux_selectors_teamSelectors__WEBPACK_IMPORTED_MODULE_7__, _services_boxLimitChecker_doesUserHaveMoreBoxesThanOverallLimit__WEBPACK_IMPORTED_MODULE_8__, _widgets_paywallGateway_paywallGateway__WEBPACK_IMPORTED_MODULE_9__, _billing_helpers__WEBPACK_IMPORTED_MODULE_11__]);
([_presentation_pipelineList__WEBPACK_IMPORTED_MODULE_6__, _redux_selectors_teamSelectors__WEBPACK_IMPORTED_MODULE_7__, _services_boxLimitChecker_doesUserHaveMoreBoxesThanOverallLimit__WEBPACK_IMPORTED_MODULE_8__, _widgets_paywallGateway_paywallGateway__WEBPACK_IMPORTED_MODULE_9__, _billing_helpers__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















function ThreadListViewExistingPipeline(_ref) {
  let {
    selectedThreads,
    contactsEmails
  } = _ref;
  const track = (0,_services_tracker_useTracker__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .ZP)('threadListViewExistingPipeline');
  const existingPipelineSectionRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const isNewCRMUserBool = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_13__/* .useSelector */ .v9)(state => (0,_redux_selectors_isNewCRMUser__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(state));
  const [isCollapsed, setIsCollapsed] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(isNewCRMUserBool);
  const numOfContacts = contactsEmails.length;
  const pipelines = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_13__/* .useSelector */ .v9)(state => state.models.pipelines);
  const enabledTeamKeys = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_13__/* .useSelector */ .v9)(state => (0,_redux_selectors_teamSelectors__WEBPACK_IMPORTED_MODULE_7__/* .getTeamKeysWithSharingEnabled */ .jG)(state));

  // Don't include pipelines on teams which has disabled email sharing
  const sharingPipelines = Object.keys(pipelines).reduce((acc, curr) => {
    const pipeline = pipelines[curr];
    if (pipeline.teamKey && enabledTeamKeys && enabledTeamKeys.includes(pipeline.teamKey)) {
      acc[curr] = pipeline;
    }
    return acc;
  }, {});
  const numOfSharingPiplines = Object.keys(sharingPipelines).length;
  const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_13__/* .useDispatch */ .I0)();
  if (numOfSharingPiplines === 0) {
    return null;
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
    className: "jsx-4066201100" + " " + "streak__thread_list_view_existing_pipeline",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
      onClick: () => setIsCollapsed(!isCollapsed),
      className: "jsx-4066201100" + " " + "header_section",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_Heading_Heading__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        size: "h3",
        margin: "0",
        children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.getString('add_people_to_existing_pipeline', {
          count: numOfContacts
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
        className: "jsx-4066201100" + " " + "expand_button",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
          accent: "muted",
          name: isCollapsed ? 'expand_more' : 'expand_less',
          variant: "text"
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_Transitions_VerticalCollapse__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
      collapsedHeight: 0,
      isCollapsed: isCollapsed,
      ref: existingPipelineSectionRef,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
        className: "jsx-4066201100" + " " + "pipeline_template_group_container",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_presentation_pipelineList__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
          onShowHiddenPipelinesClick: () => {
            // putting PipelineList in VerticleCollapse basically two expands
            // clicks so we setTimeout here so VerticleCollapse can correctly
            // get the new scrollHeight.
            // I am sorry, Macil.
            setTimeout(() => existingPipelineSectionRef.current?.forceUpdate(), 0);
          },
          onClick: async pipelineId => {
            const limitObj = await (0,_services_boxLimitChecker_doesUserHaveMoreBoxesThanOverallLimit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP)();
            track('existingPipeline.click', {
              pipelineId,
              ...limitObj
            });
            if (!(0,_billing_helpers__WEBPACK_IMPORTED_MODULE_11__/* .canUseCRMFeatures */ .m$)((0,_streakyc_common_services_data_user__WEBPACK_IMPORTED_MODULE_15__/* .getUser */ .P)())) {
              (0,_widgets_paywallGateway_paywallGateway__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)({
                feature: 'createTeams'
              });
            } else if (limitObj.isOverLimit) {
              (0,_widgets_paywallGateway_paywallGateway__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)({
                feature: 'unlimitedBoxes'
              });
            } else {
              dispatch({
                type: 'THREAD_LIST/EXISTING_PIPELINE/CREATE',
                selectedThreads,
                emails: contactsEmails,
                pipelineId
              });
            }
          },
          pipelines: sharingPipelines
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "4066201100",
      children: [".streak__thread_list_view_existing_pipeline.jsx-4066201100{margin-bottom:24px;}", ".header_section.jsx-4066201100{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;justify-items:center;}", ".expand_button.jsx-4066201100{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-left:8px;}", ".pipeline_template_group_container.jsx-4066201100{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin:8px 0;}", ".streak__pipeline_button_wrapper.jsx-4066201100{margin-right:8px;margin-bottom:8px;}", ".pipeline_template_group_container.jsx-4066201100 .streak__pipeline_button_wrapper.jsx-4066201100:nth-child(3n){margin-right:0;}"]
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 77825:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ ThreadListViewLoadingSkeleton)
/* harmony export */ });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81518);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_LoadingBar_LoadingBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94246);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59718);



function ThreadListViewLoadingSkeleton() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "jsx-3162040218" + " " + "streak__thread_list_view_loading",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "jsx-3162040218" + " " + "streak__thread_list_view_pipeline_section",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_LoadingBar_LoadingBar__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        height: 16,
        margin: "4px 0",
        width: 268
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "jsx-3162040218" + " " + "pipeline_template_group_container",
        children: Array(5).fill(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "jsx-3162040218" + " " + "streak__pipeline_button_wrapper",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_LoadingBar_LoadingBar__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
            width: 84,
            height: 84,
            style: {
              borderRadius: '4px'
            }
          })
        }))
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "jsx-3162040218" + " " + "streak__thread_list_view_pipeline_section",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_LoadingBar_LoadingBar__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        height: 16,
        margin: "4px 0",
        width: 268
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "jsx-3162040218" + " " + "pipeline_template_group_container",
        children: Array(5).fill(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "jsx-3162040218" + " " + "streak__pipeline_button_wrapper",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_LoadingBar_LoadingBar__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
            width: 84,
            height: 84,
            style: {
              borderRadius: '4px'
            }
          })
        }))
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "3162040218",
      children: [".streak__thread_list_view_pipeline_section.jsx-3162040218{margin-bottom:24px;}", ".pipeline_template_group_container.jsx-3162040218{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin:8px 0;}", ".streak__pipeline_button_wrapper.jsx-3162040218{margin-right:8px;margin-bottom:8px;}", ".pipeline_template_group_container.jsx-3162040218 .streak__pipeline_button_wrapper.jsx-3162040218:nth-child(3n){margin-right:0;}"]
    })]
  });
}

/***/ }),

/***/ 10893:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ ThreadListViewNewPipeline)
/* harmony export */ });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81518);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47587);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44345);
/* harmony import */ var _streakyc_common_services_data_user__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(5575);
/* harmony import */ var _presentation_pipelineButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54889);
/* harmony import */ var _setupModal_loadTemplates__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3284);
/* harmony import */ var _setupModal_templates__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(67234);
/* harmony import */ var _components_Heading_Heading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(67565);
/* harmony import */ var _components_Icon_Icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(71174);
/* harmony import */ var _components_Transitions_VerticalCollapse__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8098);
/* harmony import */ var _modules_mailMerge_importJob_templates__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(54813);
/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(3572);
/* harmony import */ var _redux_selectors_isNewCRMUser__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(19542);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(35091);
/* harmony import */ var _services_tracker_useTracker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(70989);
/* harmony import */ var _widgets_paywallGateway_paywallGateway__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(64167);
/* harmony import */ var _billing_helpers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(87872);
/* harmony import */ var _core_routing__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(58556);
/* harmony import */ var _core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(77294);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_widgets_paywallGateway_paywallGateway__WEBPACK_IMPORTED_MODULE_12__, _billing_helpers__WEBPACK_IMPORTED_MODULE_13__]);
([_widgets_paywallGateway_paywallGateway__WEBPACK_IMPORTED_MODULE_12__, _billing_helpers__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




















const INIT_COLLAPSE_HEIGHT = 384;
function ThreadListViewNewPipeline(_ref) {
  let {
    selectedThreads,
    contactsEmails
  } = _ref;
  const track = (0,_services_tracker_useTracker__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .ZP)('threadListViewNewPipeline');
  const newPipelineSectionRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  const isNewCRMUserBool = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_17__/* .useSelector */ .v9)(state => (0,_redux_selectors_isNewCRMUser__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z)(state));
  const [isCollapsed, setIsCollapsed] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(!isNewCRMUserBool);
  const [selectedTemplate, setSelectedTemplate] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined);
  const isSentRoute = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_17__/* .useSelector */ .v9)(state => {
    const routeId = state.routeState?.id;
    const possibleRoutes = [_core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_15__.inboxSDK.Router.NativeRouteIDs.SENT, _core_routing__WEBPACK_IMPORTED_MODULE_14__/* .StreakCustomRoute */ .ld.RECENTLY_VIEWED, _core_routing__WEBPACK_IMPORTED_MODULE_14__/* .StreakCustomRoute */ .ld.AWAITING_REPLY, _core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_15__.inboxSDK.Router.NativeRouteIDs.SEARCH];
    return routeId && possibleRoutes.includes(routeId);
  });
  const templatesData = isSentRoute ? _modules_mailMerge_importJob_templates__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP : _setupModal_templates__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP;
  const loadedTemplatesData = (0,_setupModal_loadTemplates__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(templatesData);
  const templates = Object.values(loadedTemplatesData.originalTemplateData);
  const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_17__/* .useDispatch */ .I0)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
    className: "jsx-3882639774" + " " + (classnames__WEBPACK_IMPORTED_MODULE_1___default()({
      streak__thread_list_view_new_pipeline: !isNewCRMUserBool
    }) || ""),
    children: [!isNewCRMUserBool && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
      onClick: () => setIsCollapsed(!isCollapsed),
      className: "jsx-3882639774" + " " + "header_section",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_components_Heading_Heading__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        size: "h3",
        margin: "0",
        children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z.getString('add_people_to_new_pipeline', {
          count: contactsEmails.length
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
        className: "jsx-3882639774" + " " + "expand_button",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
          accent: "muted",
          name: isCollapsed ? 'expand_more' : 'expand_less',
          variant: "text"
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_components_Transitions_VerticalCollapse__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
      collapsedHeight: isCollapsed ? 0 : INIT_COLLAPSE_HEIGHT,
      isCollapsed: isCollapsed,
      ref: newPipelineSectionRef,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
        className: "jsx-3882639774" + " " + "pipeline_template_group_container",
        children: templates.map(template => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
          className: "jsx-3882639774" + " " + "streak__pipeline_button_wrapper",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_presentation_pipelineButton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            name: _services_locale_locale__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z.UNSAFE_getString(template.localeKey),
            materialIconName: template.materialIconName,
            onClick: () => {
              if (!(0,_billing_helpers__WEBPACK_IMPORTED_MODULE_13__/* .canUseCRMFeatures */ .m$)((0,_streakyc_common_services_data_user__WEBPACK_IMPORTED_MODULE_19__/* .getUser */ .P)())) {
                (0,_widgets_paywallGateway_paywallGateway__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)({
                  feature: 'createTeams'
                });
              } else {
                track('newPipeline.click', template);
                setSelectedTemplate(template);
                dispatch({
                  type: 'THREAD_LIST/PIPELINE/CREATE',
                  selectedTemplate: template,
                  selectedThreads,
                  emails: contactsEmails
                });
              }
            },
            isHighlighted: selectedTemplate === template
          })
        }, template.localeKey))
      })
    }), isNewCRMUserBool && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
      className: "jsx-3882639774" + " " + "new_crm_user",
      children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z.getString('sidebar_new_crm_user')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "3882639774",
      children: [".streak__thread_list_view_new_pipeline.jsx-3882639774{margin-bottom:24px;}", ".header_section.jsx-3882639774{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;justify-items:center;}", ".expand_button.jsx-3882639774{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-left:8px;}", ".pipeline_template_group_container.jsx-3882639774{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin:8px 0;}", ".streak__pipeline_button_wrapper.jsx-3882639774{margin-right:8px;margin-bottom:8px;}", ".pipeline_template_group_container.jsx-3882639774 .streak__pipeline_button_wrapper.jsx-3882639774:nth-child(3n){margin-right:0;}", ".new_crm_user.jsx-3882639774{color:var(--streak-black-secondary);font-family:var(--streak-font-sans-serif);font-size:var(--streak-text-size-14);margin-bottom:24px;}"]
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 11939:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ useThreadsWithFullParticipants)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44345);
/* harmony import */ var _lib_utils_isNotNil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(72086);
/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3572);
/* harmony import */ var _selectedThreadsSelectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79567);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_selectedThreadsSelectors__WEBPACK_IMPORTED_MODULE_1__]);
_selectedThreadsSelectors__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





// Use this at the top level where you need the email threads info (GET email/threads/threadId)
// to avoid sending unnecessary request to server
function useThreadsWithFullParticipants() {
  const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__/* .useDispatch */ .I0)();
  const threadIdsToBeFetched = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__/* .useSelector */ .v9)(state => {
    const selectedThreadsIds = state.listViewState.selectedThreadListMetaData.map(thread => thread.hexGmailThreadId).filter(_lib_utils_isNotNil__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z);
    const fetchedThreadIds = Object.keys(state.listViewState.emailThreads);
    return selectedThreadsIds.filter(selectedThreadId => !fetchedThreadIds.includes(selectedThreadId));
  });
  const threadIdsToBeFetchedJson = JSON.stringify(threadIdsToBeFetched);
  const selectedThreadWillFullParticipants = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__/* .useSelector */ .v9)(_selectedThreadsSelectors__WEBPACK_IMPORTED_MODULE_1__/* .getSelectedThreadsWithFullParticipants */ .i);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    dispatch({
      type: 'EMAIL_THREADS/LOAD/REQUEST',
      threadIds: JSON.parse(threadIdsToBeFetchedJson)
    });
  }, [dispatch, threadIdsToBeFetchedJson]);
  return selectedThreadWillFullParticipants;
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 79567:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ getSelectedThreadsWithFullParticipantsEmailsExcludeStreakOrTeammates),
/* harmony export */   i: () => (/* binding */ getSelectedThreadsWithFullParticipants)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17013);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redux_selectors_teamSelectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71973);
/* harmony import */ var _team__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64936);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_redux_selectors_teamSelectors__WEBPACK_IMPORTED_MODULE_1__, _team__WEBPACK_IMPORTED_MODULE_2__]);
([_redux_selectors_teamSelectors__WEBPACK_IMPORTED_MODULE_1__, _team__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



function getSelectedThreadsWithFullParticipantsEmailsExcludeStreakOrTeammates(state) {
  const currentUser = state.userLoggedInState.type === 'LOGGED_IN' ? state.userLoggedInState.streakUser : null;
  const currentUserEmail = currentUser?.email ?? '';
  const selectedThreadsWithFullParticipants = getSelectedThreadsWithFullParticipants(state);
  const teams = (0,_redux_selectors_teamSelectors__WEBPACK_IMPORTED_MODULE_1__/* .getTeamsCurrentUserIsOn */ .gR)(state);
  const {
    isInternalEmail
  } = (0,_team__WEBPACK_IMPORTED_MODULE_2__/* .getInternalEmailPredicate */ .WD)(teams);
  return lodash__WEBPACK_IMPORTED_MODULE_0___default().flow(() => selectedThreadsWithFullParticipants.map(threadMetatdata => threadMetatdata.emailAddresses).flat(), (lodash__WEBPACK_IMPORTED_MODULE_0___default().union))().filter(email => email != currentUserEmail && !email.includes('@streak.com') && !isInternalEmail(email));
}
function getSelectedThreadsWithFullParticipants(state) {
  const selectedThreadListMetaData = state.listViewState.selectedThreadListMetaData;
  const emailThreadsWithFullParticipants = Object.values(state.listViewState.emailThreads);
  const fullThreadContacts = extractFullParticipantsListFromGmailThreads(emailThreadsWithFullParticipants);
  return selectedThreadListMetaData.map(threadMetaData => {
    return threadMetaData.hexGmailThreadId && fullThreadContacts[threadMetaData.hexGmailThreadId] ? {
      ...threadMetaData,
      names: threadMetaData.hexGmailThreadId ? fullThreadContacts[threadMetaData.hexGmailThreadId].names : threadMetaData.names,
      emailAddresses: threadMetaData.hexGmailThreadId ? fullThreadContacts[threadMetaData.hexGmailThreadId].emailAddresses : threadMetaData.emailAddresses
    } : threadMetaData;
  });
}
const headerNames = ['From', 'To', 'Cc', 'Bcc'];
function extractFullParticipantsListFromGmailThreads(threads) {
  const result = {};
  threads.forEach(thread => {
    const contactValues = new Set();
    thread.messages.forEach(message => {
      const headers = message.payload.headers.filter(header => headerNames.includes(header.name));
      headers.forEach(header => {
        contactValues.add(header.value);
      });
    });
    const names = [];
    const emailAddresses = [];
    Array.from(contactValues).map(value => {
      const nameAndEmail = value.split(', ').map(str => str.split(' <'));
      nameAndEmail.forEach(value => {
        if (value.length > 1) {
          let email = value[1];
          if (email.indexOf('>') === email.length - 1 && email.includes('@')) {
            email = value[1].slice(0, value[1].length - 1);
          }
          emailAddresses.push(email);
          names.push(value[0]);
        } else {
          if (value[0].includes('@')) {
            emailAddresses.push(value[0]);
            names.push(undefined);
          }
        }
      });
      return value;
    });
    result[thread.id] = {
      names: names,
      emailAddresses: emailAddresses
    };
  });
  return result;
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 12672:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ sortPipelineStates)
/* harmony export */ });
/* harmony import */ var _services_ui_sortPipelines__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33488);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_ui_sortPipelines__WEBPACK_IMPORTED_MODULE_0__]);
_services_ui_sortPipelines__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

function sortPipelineStates(pipelines) {
  return (0,_services_ui_sortPipelines__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(pipelines, {
    getIsHidden: pipeline => pipeline.isHidden,
    getKey: pipeline => pipeline.key,
    getName: pipeline => pipeline.name
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
//# sourceMappingURL=https://storage.googleapis.com/streak-extension-sourcemaps/clientjs/clientjs.chunk.6381.d0f5cab2429721ecc2b1.js.map