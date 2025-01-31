"use strict";
export const id = 2440;
export const ids = [2440];
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

/***/ 42440:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SequencePipelineImport)
/* harmony export */ });
/* harmony import */ var _core_enabledFeaturesController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50452);
/* harmony import */ var _redux_models_useImportJob__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2524);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35091);
/* harmony import */ var _streakSidebar_SimpleErrorWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(75539);
/* harmony import */ var _SequencePipelineImportProgress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(87169);
/* harmony import */ var _SequenceToCrmPromo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(59367);
/* harmony import */ var _SequencePipelineImport_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(74894);
/* harmony import */ var _services_tracker_useTracker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(70989);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_core_enabledFeaturesController__WEBPACK_IMPORTED_MODULE_0__, _redux_models_useImportJob__WEBPACK_IMPORTED_MODULE_1__, _SequencePipelineImportProgress__WEBPACK_IMPORTED_MODULE_4__, _SequenceToCrmPromo__WEBPACK_IMPORTED_MODULE_5__]);
([_core_enabledFeaturesController__WEBPACK_IMPORTED_MODULE_0__, _redux_models_useImportJob__WEBPACK_IMPORTED_MODULE_1__, _SequencePipelineImportProgress__WEBPACK_IMPORTED_MODULE_4__, _SequenceToCrmPromo__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









function SequencePipelineImport(_ref) {
  let {
    sequenceKey
  } = _ref;
  const {
    status,
    data
  } = (0,_redux_models_useImportJob__WEBPACK_IMPORTED_MODULE_1__/* .useImportJobForSequence */ .Gv)(sequenceKey);
  const isAlt = _core_enabledFeaturesController__WEBPACK_IMPORTED_MODULE_0__.EnabledFeatures.isExperimentEnabled(_core_enabledFeaturesController__WEBPACK_IMPORTED_MODULE_0__.Experiments.DRIP_TO_CRM_PROMO_ALT_TEXT);
  const maybeAlt = isAlt ? '_alt' : '';
  const bodyCopy = _services_locale_locale__WEBPACK_IMPORTED_MODULE_2__.Locale.getString(`sequence_to_crm_promo_body${maybeAlt}`);
  const titleCopy = _services_locale_locale__WEBPACK_IMPORTED_MODULE_2__.Locale.getString(`sequence_to_crm_promo_title${maybeAlt}`);
  const track = (0,_services_tracker_useTracker__WEBPACK_IMPORTED_MODULE_6__/* .useTrackerWithoutPrefix */ .io)({
    sequenceKey,
    title: titleCopy,
    bodyCopy
  });
  if (status === 'loading') {
    return null;
  }
  if (status === 'error') {
    // TODO: error ui?
    return null;
  }
  let body;
  if (status === 'success' && data) {
    body = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_SequencePipelineImportProgress__WEBPACK_IMPORTED_MODULE_4__/* .SequencePipelineImportProgress */ .U, {
      importJob: data,
      track: track
    });
  } else {
    body = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_SequenceToCrmPromo__WEBPACK_IMPORTED_MODULE_5__/* .SequenceToCrmPromo */ .h, {
      bodyCopy: bodyCopy,
      sequenceKey: sequenceKey,
      title: titleCopy,
      track: track
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_streakSidebar_SimpleErrorWrapper__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      className: _SequencePipelineImport_module_css__WEBPACK_IMPORTED_MODULE_8__/* .main */ .D,
      children: body
    })
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 28826:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  q: () => (/* binding */ SequencePipelineImportFinished)
});

// EXTERNAL MODULE: ./extensions/common/js/components/Icon/Icon.tsx + 1 modules
var Icon = __webpack_require__(71174);
// EXTERNAL MODULE: ./extensions/common/js/widgets/react/material/button/streakButton.tsx
var streakButton = __webpack_require__(22682);
// EXTERNAL MODULE: ./extensions/common/js/services/locale/locale.ts + 37 modules
var locale = __webpack_require__(35091);
// EXTERNAL MODULE: ./extensions/common/js/core/gmail/inboxSdkSingleton.ts
var inboxSdkSingleton = __webpack_require__(77294);
;// CONCATENATED MODULE: ./extensions/common/js/modules/sequenceView/components/SequencePipelineImportFinished.module.css
// extracted by mini-css-extract-plugin
var _1 = "streak-mod__z1wjcQqY7Ljd6rk7mS5h";
var _2 = "streak-mod__NIP6egAJ6f1hpe1rAMZ5";
var _3 = "streak-mod__p6d1XMq73rFor_iLN5hy";
var _4 = "streak-mod__VKatA_QjjC2JLPFnSgYy";
var _5 = "streak-mod__gcSQVDGFtBXTDSJfIrVb";


// EXTERNAL MODULE: ./extensions/common/js/core/createModelLink.ts
var createModelLink = __webpack_require__(699);
// EXTERNAL MODULE: ./extensions/common/js/modules/sequenceView/components/constants.ts
var constants = __webpack_require__(68498);
// EXTERNAL MODULE: ./.yarn/cache/react-npm-18.3.1-af38f3c1ae-261137d3f3.zip/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(59718);
;// CONCATENATED MODULE: ./extensions/common/js/modules/sequenceView/components/SequencePipelineImportFinished.tsx








function SequencePipelineImportFinished(_ref) {
  let {
    importJob,
    track
  } = _ref;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: _4,
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: _3,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Icon/* default */.Z, {
        isOutline: true,
        className: "mdl-green-text",
        name: "check_circle",
        variant: "text"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
        className: _5,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("b", {
          children: locale.Locale.getString('pipeline_created')
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: _1,
      children: locale.Locale.getString('pipeline_import_finished')
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: _2,
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(streakButton/* default */.ZP, {
        onClick: () => {
          track(constants/* PipelineImportEvents */.L.FINISHED_VIEW_PIPELINE);
          inboxSdkSingleton.inboxSDK.Router.goto((0,createModelLink/* default */.Z)('pipeline', importJob.pipelineKey));
        },
        children: [locale.Locale.getString('view_pipeline'), /*#__PURE__*/(0,jsx_runtime.jsx)(streakButton/* StreakButtonIcon */.A2, {
          materialIconName: "arrow_forward"
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(streakButton/* default */.ZP, {
        variant: "text",
        onClick: () => {
          window.open('https://support.streak.com/en/articles/2761926-pipelines');
          track(constants/* PipelineImportEvents */.L.FINISHED_LEARN_MORE);
        },
        children: locale.Locale.getString('pipeline_import_learn_more')
      })]
    })]
  });
}

/***/ }),

/***/ 87169:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ SequencePipelineImportProgress)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44345);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35091);
/* harmony import */ var _components_ProgressBar_ProgressBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(30481);
/* harmony import */ var _redux_models_useImportJob__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2524);
/* harmony import */ var _SequencePipelineImportFinished__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(28826);
/* harmony import */ var _SequencePipelineImportProgress_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(44388);
/* harmony import */ var _streakyc_ui_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(87084);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(68498);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_redux_models_useImportJob__WEBPACK_IMPORTED_MODULE_3__]);
_redux_models_useImportJob__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









/** We want to show the progress bar with some initial amount. */

const DEFAULT_PROGRESS_AMOUNT = 10;
function SequencePipelineImportProgress(_ref) {
  let {
    importJob,
    track
  } = _ref;
  const [options, setOptions] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    refetchInterval: 1000
  });
  const {
    data,
    error
  } = (0,_redux_models_useImportJob__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP)(importJob.key, options);
  const errorMessage = error ? _services_locale_locale__WEBPACK_IMPORTED_MODULE_1__.Locale.getString('sequence_to_crm_promo_request_error') : data?.errorMessage;
  const progress = data ? data.percentageComplete * 100 : DEFAULT_PROGRESS_AMOUNT;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (data?.errorMessage && options) {
      // Stop refetching. Something went wrong.
      setOptions(undefined);
    }
  }, [data, options]);
  if (progress >= 100) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_SequencePipelineImportFinished__WEBPACK_IMPORTED_MODULE_4__/* .SequencePipelineImportFinished */ .q, {
      importJob: importJob,
      track: track
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
    className: _SequencePipelineImportProgress_module_css__WEBPACK_IMPORTED_MODULE_8__/* .main */ .DH,
    children: [errorMessage && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("b", {
          children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_1__.Locale.getString('try_again_later')
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("code", {
        children: errorMessage
      })]
    }), !errorMessage && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("b", {
          children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_1__.Locale.getString('creating_pipeline_as_well')
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
        className: _SequencePipelineImportProgress_module_css__WEBPACK_IMPORTED_MODULE_8__/* .progressBarWrapper */ .uY,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_ProgressBar_ProgressBar__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
          progress: progress || DEFAULT_PROGRESS_AMOUNT
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
        className: _SequencePipelineImportProgress_module_css__WEBPACK_IMPORTED_MODULE_8__/* .body */ .d1,
        children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_1__.Locale.getString('pipeline_import_you_can_close')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
        className: _SequencePipelineImportProgress_module_css__WEBPACK_IMPORTED_MODULE_8__/* .learnMoreOffset */ .t3,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_streakyc_ui_components__WEBPACK_IMPORTED_MODULE_5__/* .ButtonEmpty */ .qL, {
          onClick: () => {
            window.open('https://support.streak.com/en/articles/2761926-pipelines');
            track(_constants__WEBPACK_IMPORTED_MODULE_6__/* .PipelineImportEvents */ .L.IN_PROGRESS_LEARN_MORE);
          },
          size: "s",
          variant: "link",
          children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_1__.Locale.getString('pipeline_import_learn_more')
        })
      })]
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 90024:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ showSequenceToCrmPromoModal)
/* harmony export */ });
/* unused harmony export SequenceToCrm */
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35091);
/* harmony import */ var _widgets_modal_showModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64673);
/* harmony import */ var _streakyc_ui_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87084);
/* harmony import */ var _components_Heading_Heading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67565);
/* harmony import */ var _SequenceToCrm_module_css__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(29172);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44345);
/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(3572);
/* harmony import */ var _streakSidebar_presentation_pipelineButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(54889);
/* harmony import */ var _setupModal_loadTemplates__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3284);
/* harmony import */ var _mailMerge_importJob_templates__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(54813);
/* harmony import */ var _lib_utils_use_memo_compare__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(75051);
/* harmony import */ var fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(59844);
/* harmony import */ var fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _widgets_newPipeline_createNewPipeline__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(24113);
/* harmony import */ var _lib_log_error__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7961);
/* harmony import */ var _setupModal_templates__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(67234);
/* harmony import */ var _widgets_newPipeline_prepareSavedViews__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(15076);
/* harmony import */ var use_immer__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(57210);
/* harmony import */ var _lib_utils_isNotNil__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(72086);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(68498);
/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(95051);
/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(dompurify__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_widgets_newPipeline_createNewPipeline__WEBPACK_IMPORTED_MODULE_10__, _widgets_newPipeline_prepareSavedViews__WEBPACK_IMPORTED_MODULE_13__]);
([_widgets_newPipeline_createNewPipeline__WEBPACK_IMPORTED_MODULE_10__, _widgets_newPipeline_prepareSavedViews__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





















const PIPELINE_OVERFLOW_LIMIT = 8;
function SequenceToCrm(_ref) {
  let {
    onClose,
    ...props
  } = _ref;
  const [{
    isPipelineSectionExpanded,
    isSubmitting,
    selected
  }, updateState] = (0,use_immer__WEBPACK_IMPORTED_MODULE_17__/* .useImmer */ .x)({
    isSubmitting: false,
    selected: null,
    isPipelineSectionExpanded: false
  });
  const pipelines = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_18__/* .useSelector */ .v9)(state => Object.values(state.models.pipelines).filter(_lib_utils_isNotNil__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z), (fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_9___default()));
  const shouldShowExpandButton = pipelines.length > PIPELINE_OVERFLOW_LIMIT;
  const shouldShowPipelinesFirst = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(() => pipelines.some(pipeline => pipeline.boxCount > 1), [pipelines]);
  async function onSubmit(selectedPipeline) {
    updateState(draft => {
      draft.isSubmitting = true;
    });
    try {
      const result = await props.onSubmit(selectedPipeline);
      return result;
    } catch (e) {
      (0,_lib_log_error__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .ZP)({
        err: e
      });
    } finally {
      updateState(draft => {
        draft.isSubmitting = false;
      });
    }
  }
  const templateData = (0,_lib_utils_use_memo_compare__WEBPACK_IMPORTED_MODULE_8__/* .useMemoCompare */ .q)((0,_setupModal_loadTemplates__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(_mailMerge_importJob_templates__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP), (fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_9___default()));
  const notSure = _services_locale_locale__WEBPACK_IMPORTED_MODULE_0__.Locale.getString('im_not_sure');
  const importNow = _services_locale_locale__WEBPACK_IMPORTED_MODULE_0__.Locale.getString('import_now');
  const pipelineSection = pipelines.length === 0 ? null : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_components_Heading_Heading__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
      color: "var(--streak-black-secondary)",
      size: "h3",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("span", {
        dangerouslySetInnerHTML: {
          __html: (0,dompurify__WEBPACK_IMPORTED_MODULE_15__.sanitize)(_services_locale_locale__WEBPACK_IMPORTED_MODULE_0__.Locale.getString('import_into_existing_pipeline'))
        }
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
      className: _SequenceToCrm_module_css__WEBPACK_IMPORTED_MODULE_20__/* .pipelineGrid */ .zY,
      children: [pipelines.slice(0, shouldShowExpandButton && !isPipelineSectionExpanded ? PIPELINE_OVERFLOW_LIMIT - 1 : undefined).map(_ref2 => {
        let {
          key,
          icon,
          name
        } = _ref2;
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_streakSidebar_presentation_pipelineButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
          name: name,
          isHighlighted: selected != null && 'pipelineKey' in selected && key === selected.pipelineKey,
          materialIconName: icon,
          onClick: () => {
            updateState(draft => {
              draft.selected = {
                type: "existing",
                pipelineKey: key
              };
            });
          }
        }, key);
      }), shouldShowExpandButton && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
        className: "streak__pipeline_button_wrapper",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_streakSidebar_presentation_pipelineButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
          name: _services_locale_locale__WEBPACK_IMPORTED_MODULE_0__.Locale.getString(isPipelineSectionExpanded ? 'show_less' : 'show_more'),
          materialIconName: isPipelineSectionExpanded ? 'expand_less' : 'expand_more',
          onClick: () => {
            updateState(draft => {
              draft.isPipelineSectionExpanded = !draft.isPipelineSectionExpanded;
            });
          }
        })
      })]
    })]
  });
  const templateSection = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_components_Heading_Heading__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
      color: "var(--streak-black-secondary)",
      size: "h3",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("span", {
        dangerouslySetInnerHTML: {
          __html: (0,dompurify__WEBPACK_IMPORTED_MODULE_15__.sanitize)(_services_locale_locale__WEBPACK_IMPORTED_MODULE_0__.Locale.getString('import_into_new_pipeline'))
        }
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
      className: _SequenceToCrm_module_css__WEBPACK_IMPORTED_MODULE_20__/* .pipelineGrid */ .zY,
      children: templateData.templateOrder.map(templateKey => {
        const template = templateData.originalTemplateData[templateKey];
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_streakSidebar_presentation_pipelineButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
          name: template.originalName,
          isHighlighted: selected != null && 'template' in selected && template.originalName === selected.template.originalName,
          materialIconName: template.materialIconName,
          onClick: () => {
            updateState(draft => {
              draft.selected = {
                type: "template",
                // Without the cast, we get this error:
                // Type 'StoredTemplateData' is not assignable to type 'WritableDraft<StoredTemplateData>'.
                // Types of property 'fields' are incompatible.
                // The type 'readonly Field[]' is 'readonly' and cannot be assigned to the mutable type 'WritableDraft<Field>[]'.ts(2322)
                // Related https://stackoverflow.com/a/53416703/1924257
                template: template
              };
            });
          }
        }, templateKey);
      })
    })]
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
    className: _SequenceToCrm_module_css__WEBPACK_IMPORTED_MODULE_20__/* .main */ .DH,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
      className: _SequenceToCrm_module_css__WEBPACK_IMPORTED_MODULE_20__/* .header */ .Fs,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_components_Heading_Heading__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        size: "h2",
        children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_0__.Locale.getString('mail_merge_choose_pipeline_title')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_streakyc_ui_components__WEBPACK_IMPORTED_MODULE_2__/* .ButtonWithText */ .WY, {
        color: "white",
        shape: "pill/circle",
        onClick: onClose,
        icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_streakyc_ui_components__WEBPACK_IMPORTED_MODULE_2__/* .Icon */ .JO, {
          name: "close",
          size: "m"
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
      className: _SequenceToCrm_module_css__WEBPACK_IMPORTED_MODULE_20__/* .body */ .d1,
      children: [shouldShowPipelinesFirst ? pipelineSection : templateSection, shouldShowPipelinesFirst ? templateSection : pipelineSection]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
      className: _SequenceToCrm_module_css__WEBPACK_IMPORTED_MODULE_20__/* .footer */ .Mv,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_streakyc_ui_components__WEBPACK_IMPORTED_MODULE_2__/* .ButtonWithText */ .WY, {
        disabled: isSubmitting,
        fullWidth: false,
        onClick: () => onSubmit({
          type: "template",
          template: templateData.originalTemplateData[_setupModal_templates__WEBPACK_IMPORTED_MODULE_12__/* .originalTemplates */ .kB.SALES]
        }),
        variant: "text",
        children: notSure
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_streakyc_ui_components__WEBPACK_IMPORTED_MODULE_2__/* .ButtonWithText */ .WY, {
        color: "primary",
        disabled: selected == null || isSubmitting,
        fullWidth: false,
        onClick: () => {
          if (selected == null) {
            (0,_lib_log_error__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .ZP)({
              err: new Error('selected is null')
            });
            return;
          }
          onSubmit(selected);
        },
        children: importNow
      })]
    })]
  });
}
async function showSequenceToCrmPromoModal(track) {
  let choice;
  const modal = (0,_widgets_modal_showModal__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({
    viewOptions: {
      chrome: false
    },
    bodyComponent: _ref3 => {
      let {
        modalView
      } = _ref3;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(SequenceToCrm, {
        onClose: () => modalView.close(),
        onSubmit: async selected => {
          const result = (async () => {
            // Borrowed liberally from https://github.com/StreakYC/MailFoo/commit/47a7523839d98c31a00efafa791049824537a509#diff-8d32b30c9d441ddd9b52528d42da99e099a156fc989086a25c97da4d2f24ed10L31
            if (selected.type === "template") {
              const template = selected.template;
              track(_constants__WEBPACK_IMPORTED_MODULE_14__/* .PipelineImportEvents */ .L.CRM_PROMO_TEMPLATE_CLICK, {
                template: template.localeKey
              });
              const result = await (0,_widgets_newPipeline_createNewPipeline__WEBPACK_IMPORTED_MODULE_10__/* .createPipelineFromDescriptor */ .Rh)({
                name: template.originalName,
                icon: template.materialIconName,
                pipelineTemplate: template
              }, 'sequence.import', {
                shouldShowSavingModal: false,
                shouldShowTeamModal: false
              });
              if (result == null) {
                return;
              }
              const pipeline = await result.savePromise;
              (0,_widgets_newPipeline_prepareSavedViews__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)([...template.savedViews], pipeline);
              return pipeline.key();
            } else if (selected.type === "existing") {
              track(_constants__WEBPACK_IMPORTED_MODULE_14__/* .PipelineImportEvents */ .L.CRM_PROMO_EXISTING_PIPELINE_CLICK, {
                pipelineKey: selected.pipelineKey
              });
              return selected.pipelineKey;
            }
          })();
          try {
            choice = await result;
          } catch (e) {
            (0,_lib_log_error__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .ZP)({
              err: new Error('failed to pull pipeline', {
                cause: e
              })
            });
          }
          modalView.close();
        }
      });
    }
  });
  return new Promise(resolve => {
    modal.on('destroy', () => {
      resolve(choice);
    });
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 59367:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ SequenceToCrmPromo)
/* harmony export */ });
/* harmony import */ var _streakyc_common_services_data_user__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5575);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35091);
/* harmony import */ var _SequenceToCrmPromo_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(34891);
/* harmony import */ var _SequenceToCrm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90024);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44345);
/* harmony import */ var _redux_models_useImportJob__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2524);
/* harmony import */ var react_use_esm_useMount__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(82621);
/* harmony import */ var _streakyc_ui_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(87084);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(68498);
/* harmony import */ var _billing_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(87872);
/* harmony import */ var _widgets_paywallGateway_paywallGateway__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(64167);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_SequenceToCrm__WEBPACK_IMPORTED_MODULE_1__, _redux_models_useImportJob__WEBPACK_IMPORTED_MODULE_3__, _billing_helpers__WEBPACK_IMPORTED_MODULE_6__, _widgets_paywallGateway_paywallGateway__WEBPACK_IMPORTED_MODULE_7__]);
([_SequenceToCrm__WEBPACK_IMPORTED_MODULE_1__, _redux_models_useImportJob__WEBPACK_IMPORTED_MODULE_3__, _billing_helpers__WEBPACK_IMPORTED_MODULE_6__, _widgets_paywallGateway_paywallGateway__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












function SequenceToCrmPromo(_ref) {
  let {
    bodyCopy,
    sequenceKey,
    title,
    track
  } = _ref;
  const [isEnabled, setIsEnabled] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
  const {
    mutate
  } = (0,_redux_models_useImportJob__WEBPACK_IMPORTED_MODULE_3__/* .useCreateImportForSequence */ .$u)();
  (0,react_use_esm_useMount__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(() => {
    track(_constants__WEBPACK_IMPORTED_MODULE_5__/* .PipelineImportEvents */ .L.CRM_PROMO);
  });
  const onClick = async () => {
    track(_constants__WEBPACK_IMPORTED_MODULE_5__/* .PipelineImportEvents */ .L.CRM_PROMO_ADD_TO_PIPELINE);
    if (!(0,_billing_helpers__WEBPACK_IMPORTED_MODULE_6__/* .canUseCRMFeatures */ .m$)((0,_streakyc_common_services_data_user__WEBPACK_IMPORTED_MODULE_10__/* .getUser */ .P)())) {
      (0,_widgets_paywallGateway_paywallGateway__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)({
        feature: 'createTeams'
      });
      return;
    }
    const pipelineKey = await (0,_SequenceToCrm__WEBPACK_IMPORTED_MODULE_1__/* .showSequenceToCrmPromoModal */ .G)(track);
    if (!pipelineKey) {
      track(_constants__WEBPACK_IMPORTED_MODULE_5__/* .PipelineImportEvents */ .L.CRM_PROMO_ADD_TO_PIPELINE_CANCELED);
      setIsEnabled(true);
      return;
    }
    mutate({
      sequenceKey,
      pipelineKey
    });
    track(_constants__WEBPACK_IMPORTED_MODULE_5__/* .PipelineImportEvents */ .L.CRM_PROMO_ADD_TO_PIPELINE_FINISHED);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
    className: _SequenceToCrmPromo_module_css__WEBPACK_IMPORTED_MODULE_11__/* .main */ .DH,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
      className: _SequenceToCrmPromo_module_css__WEBPACK_IMPORTED_MODULE_11__/* .title */ .TN,
      children: title
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
      className: _SequenceToCrmPromo_module_css__WEBPACK_IMPORTED_MODULE_11__/* .text */ .fL,
      children: bodyCopy
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
      className: _SequenceToCrmPromo_module_css__WEBPACK_IMPORTED_MODULE_11__/* .footer */ .Mv,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_streakyc_ui_components__WEBPACK_IMPORTED_MODULE_4__/* .ButtonWithText */ .WY, {
        disabled: !isEnabled,
        fullWidth: false,
        icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_streakyc_ui_components__WEBPACK_IMPORTED_MODULE_4__/* .Icon */ .JO, {
          name: "label_important",
          variant: "outlined"
        }),
        onClick: onClick,
        children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_0__.Locale.getString('sequence_to_crm_promo_button')
      })
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 68498:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ PipelineImportEvents)
/* harmony export */ });
const crmPromo = 'sequencePipelineImport.crmPromo.';
const finished = 'sequencePipelineImport.finished.';
var PipelineImportEvents = {
  CRM_PROMO: "sequencePipelineImport.crmPromo.shown",
  CRM_PROMO_ADD_TO_PIPELINE: "sequencePipelineImport.crmPromo.addToPipeline",
  CRM_PROMO_ADD_TO_PIPELINE_CANCELED: "sequencePipelineImport.crmPromo.addToPipeline.canceled",
  CRM_PROMO_ADD_TO_PIPELINE_FINISHED: "sequencePipelineImport.crmPromo.addToPipeline.finished",
  CRM_PROMO_EXISTING_PIPELINE_CLICK: "sequencePipelineImport.crmPromo.existingPipeline.click",
  CRM_PROMO_TEMPLATE_CLICK: "sequencePipelineImport.crmPromo.template.click",
  IN_PROGRESS_LEARN_MORE: "sequencePipelineImport.inProgress.learnMore.click",
  FINISHED_VIEW_PIPELINE: "sequencePipelineImport.finished.viewPipeline.click",
  FINISHED_LEARN_MORE: "sequencePipelineImport.finished.learnMore.click"
};

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

/***/ 74894:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ _1)
/* harmony export */ });
// extracted by mini-css-extract-plugin
var _1 = "streak-mod__tzs7pxYpY8i0VxJAra1g";



/***/ }),

/***/ 44388:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DH: () => (/* binding */ _3),
/* harmony export */   d1: () => (/* binding */ _1),
/* harmony export */   t3: () => (/* binding */ _2),
/* harmony export */   uY: () => (/* binding */ _4)
/* harmony export */ });
// extracted by mini-css-extract-plugin
var _1 = "streak-mod__XNjKerrWBEUmFBNAQfLA";
var _2 = "streak-mod__fNpX45G5SHpRBdNsl4Jw";
var _3 = "streak-mod__z121od7_523emGdji5Xg";
var _4 = "streak-mod__ahcBKZqmUZhwv7Gg5eYe";



/***/ }),

/***/ 29172:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DH: () => (/* binding */ _4),
/* harmony export */   Fs: () => (/* binding */ _3),
/* harmony export */   Mv: () => (/* binding */ _2),
/* harmony export */   d1: () => (/* binding */ _1),
/* harmony export */   zY: () => (/* binding */ _5)
/* harmony export */ });
// extracted by mini-css-extract-plugin
var _1 = "streak-mod__EyVnFpSrS12852GNAy7D";
var _2 = "streak-mod__V3HjOkQAM_0tU_mkvhmG";
var _3 = "streak-mod__qu4MF8_VKkwLC3eTx3bX";
var _4 = "streak-mod__ALqWB3GEvrCUI3jU8E2c";
var _5 = "streak-mod__Cf1uKxpd774S3eTlDrsW";



/***/ }),

/***/ 34891:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DH: () => (/* binding */ _2),
/* harmony export */   Mv: () => (/* binding */ _1),
/* harmony export */   TN: () => (/* binding */ _4),
/* harmony export */   fL: () => (/* binding */ _3)
/* harmony export */ });
// extracted by mini-css-extract-plugin
var _1 = "streak-mod__DDngvNaScIk9iXD8ISdJ";
var _2 = "streak-mod__TSbYIU7XNHr6LURSGDsU";
var _3 = "streak-mod__kdFoXbrNBpydzB6OhjAr";
var _4 = "streak-mod__CLnEMmHcVQ3LGCeDFxRo";



/***/ })

};
;
//# sourceMappingURL=https://storage.googleapis.com/streak-extension-sourcemaps/clientjs/clientjs.chunk.2440.4c26d0bfa0bfd4999e92.js.map