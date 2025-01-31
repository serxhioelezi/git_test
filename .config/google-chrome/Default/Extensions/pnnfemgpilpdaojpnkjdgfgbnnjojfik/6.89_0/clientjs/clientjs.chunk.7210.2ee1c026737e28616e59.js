"use strict";
export const id = 7210;
export const ids = [7210];
export const modules = {

/***/ 35358:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ useQueryQuotaData)
/* harmony export */ });
/* harmony import */ var _react_query_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27758);
/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72729);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_queries__WEBPACK_IMPORTED_MODULE_1__]);
_queries__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function useQueryQuotaData() {
  return (0,_react_query_utils__WEBPACK_IMPORTED_MODULE_0__/* .useQueryDef */ .PS)(_queries__WEBPACK_IMPORTED_MODULE_1__/* .QUOTA_DATA_QUERY_DEF */ .i, {}, {
    refetchOnWindowFocus: false
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 72729:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ QUOTA_DATA_QUERY_DEF)
/* harmony export */ });
/* harmony import */ var _streakyc_common_services_data_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5575);
/* harmony import */ var _core_ajax_apiRequester__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23392);
/* harmony import */ var _react_query_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27758);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_core_ajax_apiRequester__WEBPACK_IMPORTED_MODULE_0__]);
_core_ajax_apiRequester__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const QUOTA_DATA_QUERY_DEF = (0,_react_query_utils__WEBPACK_IMPORTED_MODULE_1__/* .createQueryDef */ ._f)({
  keyFn: () => ['quota'],
  fetchFn: () => (0,_react_query_utils__WEBPACK_IMPORTED_MODULE_1__/* .createFetchFn */ .eA)(async () => {
    return _core_ajax_apiRequester__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.get('users/me/quota', {
      email: (0,_streakyc_common_services_data_user__WEBPACK_IMPORTED_MODULE_2__/* .getUser */ .P)().getEmail()
    }, {
      prefix: '/api/v2/',
      templateUrl: 'users/me/quota'
    }).getPromise();
  })
});
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 64533:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ QuotaStep)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59718);

const PAST_QUOTA_LINE_COLOR = '#3646b1';
const FUTURE_QUOTA_LINE_COLOR = '#97afff';
const QUOTA_DASH_ARRAY = '12 9';
function QuotaStep(_ref) {
  let {
    rangeCenterTimestamp,
    quotaStep,
    precedingStepTimestamp,
    timestampToXPercent,
    quotaValueToYPercent
  } = _ref;
  const {
    date,
    quota,
    delta
  } = quotaStep;
  const shapesToAdd = [];
  const stepTimestamp = date;
  let stepStartX = timestampToXPercent(precedingStepTimestamp);
  const stepEndX = timestampToXPercent(stepTimestamp);
  const stepStartY = quotaValueToYPercent(quota - delta);
  const stepEndY = quotaValueToYPercent(quota);
  let strokeColor = precedingStepTimestamp < rangeCenterTimestamp ? PAST_QUOTA_LINE_COLOR : FUTURE_QUOTA_LINE_COLOR;
  let strokeDasharray = precedingStepTimestamp < rangeCenterTimestamp ? '0' : QUOTA_DASH_ARRAY;

  // If there is any horizontal movement between this and the previous step, render a
  // horizontal line between them and a fill rectangle beneath the line.
  if (stepEndX - stepStartX > 0) {
    // If the horizontal line would cross over the centerpoint of the graph, break it
    // into two lines so the color changes aftet the centerpoint.
    if (precedingStepTimestamp < rangeCenterTimestamp && stepTimestamp > rangeCenterTimestamp) {
      const centerPointX = timestampToXPercent(rangeCenterTimestamp);
      shapesToAdd.push(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(QuotaStepHorizontalSegment, {
        stepStartX: stepStartX,
        stepEndX: centerPointX,
        stepStartY: stepStartY,
        strokeColor: strokeColor,
        strokeDasharray: strokeDasharray
      }, `segment-${String(rangeCenterTimestamp)}`));
      stepStartX = centerPointX;
      strokeColor = FUTURE_QUOTA_LINE_COLOR;
      strokeDasharray = QUOTA_DASH_ARRAY;
    }
    shapesToAdd.push(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(QuotaStepHorizontalSegment, {
      stepStartX: stepStartX,
      stepEndX: stepEndX,
      stepStartY: stepStartY,
      strokeColor: strokeColor,
      strokeDasharray: strokeDasharray
    }, `segment-${String(stepTimestamp)}`));
  }
  shapesToAdd.push(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(QuotaStepVerticalSegment, {
    stepEndX: stepEndX,
    stepStartY: stepStartY,
    stepEndY: stepEndY,
    strokeColor: strokeColor,
    strokeDasharray: strokeDasharray
  }, `v-${stepTimestamp}`));
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: shapesToAdd
  });
}
function QuotaStepHorizontalSegment(props) {
  const {
    stepStartX,
    stepEndX,
    stepStartY,
    strokeColor,
    strokeDasharray
  } = props;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
      x: `${stepStartX}%`,
      y: `${stepStartY}%`,
      width: `${stepEndX - stepStartX}%`,
      height: `${100 - stepStartY}%`,
      stroke: "transparent",
      fill: strokeColor,
      fillOpacity: "30%"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("line", {
      x1: `${stepStartX}%`,
      y1: `${stepStartY}%`,
      x2: `${stepEndX}%`,
      y2: `${stepStartY}%`,
      stroke: strokeColor,
      strokeDasharray: strokeDasharray,
      strokeWidth: "4px"
    })]
  });
}
function QuotaStepVerticalSegment(props) {
  const {
    stepEndX,
    stepStartY,
    stepEndY,
    strokeColor,
    strokeDasharray
  } = props;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("line", {
    x1: `${stepEndX}%`,
    y1: `${stepStartY}%`,
    x2: `${stepEndX}%`,
    y2: `${stepEndY}%`,
    stroke: strokeColor,
    strokeDasharray: strokeDasharray,
    strokeWidth: "4px"
  });
}

/***/ }),

/***/ 45890:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ QuotaStepButton)
/* harmony export */ });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81518);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44345);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35091);
/* harmony import */ var _widgets_react_material_button_iconButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93675);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(59718);





function QuotaStepButton(_ref) {
  let {
    children,
    onClick,
    xVal,
    yVal
  } = _ref;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("g", {
    className: "jsx-807833010" + " " + "quota-delta-button-container",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("foreignObject", {
      x: xVal,
      y: yVal,
      width: "36px",
      height: "36px",
      className: "jsx-807833010",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        onClick: onClick,
        className: "jsx-807833010" + " " + "button-wrapper",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_widgets_react_material_button_iconButton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
          onClick: onClick,
          materialIconName: "send",
          tooltip: _services_locale_locale__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.getString('show_details')
          // Bump the icon a pixel to the right so it is visually centered
          ,
          iconStyle: {
            marginLeft: '1px'
          }
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("text", {
      textAnchor: "middle",
      x: xVal,
      y: yVal,
      dx: "18px",
      dy: "-8px",
      style: {
        fontFamily: 'roboto',
        fontSize: '12px',
        // I to use the svg stroke and fill style properties to get the white halo around the
        // letters, but couldn't get it to look quite right. Fell back on text-shadow.
        // https://stackoverflow.com/questions/4919076/outline-effect-to-text
        textShadow: '-2px -2px 0 white, 2px -2px 0 white, -2px 2px 0 white, 2px 2px 0 white'
      },
      className: "jsx-807833010",
      children: children
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "807833010",
      children: [".quota-delta-button-container.jsx-807833010:hover>text.jsx-807833010{fill:var(--streak-highlight-text);}", ".button-wrapper.jsx-807833010{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;min-width:0;height:100%;width:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;cursor:pointer;border-radius:50%;border:2px solid rgba(32,33,36);box-sizing:border-box;background:white;position:fixed;}", ".button-wrapper.jsx-807833010:not(:hover){border-color:rgba(32,33,36,0.6);}"]
    })]
  });
}

/***/ }),

/***/ 66972:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  g: () => (/* binding */ QuotaTimeline)
});

// EXTERNAL MODULE: ./extensions/common/js/core/gmail/inboxSdkSingleton.ts
var inboxSdkSingleton = __webpack_require__(77294);
// EXTERNAL MODULE: ./.yarn/cache/react-npm-18.3.1-af38f3c1ae-261137d3f3.zip/node_modules/react/index.js
var react = __webpack_require__(44345);
// EXTERNAL MODULE: ./.yarn/cache/classnames-npm-2.5.1-c7273f3423-58eb394e88.zip/node_modules/classnames/index.js
var classnames = __webpack_require__(47587);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./.yarn/cache/lodash-npm-4.17.21-6382451519-c08619c038.zip/node_modules/lodash/lodash.js
var lodash = __webpack_require__(17013);
// EXTERNAL MODULE: ./extensions/common/js/modules/timeline/entries/templates/itemTemplate.tsx
var itemTemplate = __webpack_require__(31143);
// EXTERNAL MODULE: ./extensions/common/js/modules/timeline/entries/templates/basicMiniEntryTemplate.tsx
var basicMiniEntryTemplate = __webpack_require__(23571);
;// CONCATENATED MODULE: ./extensions/common/js/modules/quotaView/api/dtos.ts
// /MailFoo/ServerCommon/src/main/java/com/rewardly/mailfoo/plan/quota/QuotaModels.kt

let QuotaDataActivityType = /*#__PURE__*/function (QuotaDataActivityType) {
  QuotaDataActivityType["None"] = "NONE";
  QuotaDataActivityType["Email"] = "EMAIL";
  QuotaDataActivityType["EmailSchedule"] = "EMAIL_SCHEDULE";
  QuotaDataActivityType["Drip"] = "DRIP";
  QuotaDataActivityType["DripSchedule"] = "DRIP_SCHEDULE";
  return QuotaDataActivityType;
}({});
// EXTERNAL MODULE: ./extensions/common/js/services/locale/locale.ts + 37 modules
var locale = __webpack_require__(35091);
// EXTERNAL MODULE: ./extensions/common/js/services/copy/fallbackTitle.ts
var fallbackTitle = __webpack_require__(62200);
// EXTERNAL MODULE: ./extensions/common/js/services/tracker/useTracker.tsx
var useTracker = __webpack_require__(70989);
;// CONCATENATED MODULE: ./extensions/common/js/lib/utils/ordinalize.ts
function getOrdinalizedSuffix(num) {
  if (num >= 11 && num <= 13) {
    return 'th';
  } else {
    switch (num % 10) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  }
}

/**
 * Returns an ordinalized (English) string, i.e. "1st", "2nd", etc.
 * @example
 *
 *   ordinalize(1) -> '1st';
 *   ordinalize(2) -> '2nd';
 *   ordinalize(8) -> '8th';
 *
 **/
function ordinalize(num) {
  const last = parseInt(Math.abs(num).toString().slice(-2));
  return num + getOrdinalizedSuffix(last);
}
// EXTERNAL MODULE: ./extensions/common/js/core/routing/index.ts + 4 modules
var routing = __webpack_require__(58556);
// EXTERNAL MODULE: ./.yarn/cache/react-npm-18.3.1-af38f3c1ae-261137d3f3.zip/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(59718);
;// CONCATENATED MODULE: ./extensions/common/js/modules/quotaView/components/QuotaTimeline.tsx














const QuotaTimeline = /*#__PURE__*/react.forwardRef((_ref, ref) => {
  let {
    quotaData
  } = _ref;
  const sortedActivities = (0,react.useMemo)(() => {
    let result = [];
    quotaData.steps.forEach(s => s.activities.forEach(a => {
      if (a.delta < 0) {
        // only display activities that have negative delta (when quota decreased due to sent emails)
        result.push(a);
      }
    }));
    result = (0,lodash.orderBy)(result, [a => a.date], ['desc']);
    return result;
  }, [quotaData.steps]);
  const refs = (0,react.useMemo)(() => sortedActivities.map(() => /*#__PURE__*/react.createRef()), [sortedActivities]);
  (0,react.useImperativeHandle)(ref, () => ({
    highlight: activity => {
      const index = sortedActivities.indexOf(activity);
      if (index !== -1) {
        refs[index]?.current?.highlight();
      }
    }
  }), [refs, sortedActivities]);
  const now = Date.now().valueOf();
  let nowWasPlaced = false;
  const activities = [];
  sortedActivities.forEach((a, i) => {
    if (a.date < now && !nowWasPlaced) {
      nowWasPlaced = true;
      if (i !== 0) {
        // do not draw "now" splitter if no future activities
        activities.push(/*#__PURE__*/(0,jsx_runtime.jsx)(basicMiniEntryTemplate/* default */.Z, {}, "now"));
      }
    }
    activities.push(/*#__PURE__*/(0,jsx_runtime.jsx)(QuotaTimelineActivity, {
      ref: refs[i],
      activity: a
    }, `${i}`));
  });
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: "streak__boxview_timeline_list",
    children: activities
  });
});
const QuotaTimelineActivity = /*#__PURE__*/react.forwardRef((_ref2, ref) => {
  let {
    activity: a
  } = _ref2;
  const track = (0,useTracker/* default */.ZP)('quotaTimelineActivity');
  const innerRef = react.useRef(null);
  const now = Date.now().valueOf();
  const past = a.date < now;
  (0,react.useImperativeHandle)(ref, () => ({
    highlight: () => {
      innerRef.current?.scrollIntoView();
      innerRef.current?.flash();
    }
  }));
  const isSeqItem = a.type === QuotaDataActivityType.Drip || a.type === QuotaDataActivityType.DripSchedule;
  const onClick = () => {
    if (isSeqItem && a.entityKey) {
      track('click', {
        type: a.type,
        sequenceKey: a.entityKey
      });
      inboxSdkSingleton.inboxSDK.Router.goto(routing/* StreakCustomRoute */.ld.SEQUENCE, {
        key: a.entityKey
      });
    }
  };
  return /*#__PURE__*/(0,jsx_runtime.jsx)(itemTemplate/* default */.Z, {
    ref: innerRef,
    className: classnames_default()('streak__timeline_item_email'),
    materialIconName: "mail",
    title: (0,fallbackTitle/* default */.Z)(a.title),
    subtitle: isSeqItem ? locale/* default */.Z.getArray(past ? 'quota_nth_msg_sent_to' : 'quota_nth_msg_scheduled_to', {
      nth: a.messageNumber ? ordinalize(a.messageNumber) : '',
      recipients: /*#__PURE__*/(0,jsx_runtime.jsx)("b", {
        children: Math.abs(a.delta)
      })
    }) : a.hint,
    timestamp: a.date,
    track: track,
    onClick: onClick
  });
});

/***/ }),

/***/ 71597:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ QuotaUsageGraph)
/* harmony export */ });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81518);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(16490);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(20436);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(38009);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(93733);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17013);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44345);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35091);
/* harmony import */ var _QuotaStep__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(64533);
/* harmony import */ var _QuotaStepButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45890);
/* harmony import */ var _QuotaUsageGraphContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24107);
/* harmony import */ var _QuotaValueLine__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(72621);
/* harmony import */ var _helpers_useQuotaPlanName__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(19818);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_helpers_useQuotaPlanName__WEBPACK_IMPORTED_MODULE_8__]);
_helpers_useQuotaPlanName__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];












const GRAPH_HEIGHT = 300;
const GRAPH_LEFT_INTERNAL_PADDING = 90;
const GRAPH_RIGHT_INTERNAL_PADDING = 20;
const GRAPH_VERT_INTERNAL_PADDING = 20;
const TIME_AXIS_LABELS_HEIGHT = 20;
const QUOTA_Y_AXIS_INCREMENTS = [[800, 250], [400, 90], [200, 60], [100, 40], [50, 15], [0, 2]];
const TIME_AXIS_DELIM_COUNT = 12;
function QuotaUsageGraph(_ref) {
  let {
    quotaData,
    onStepClick
  } = _ref;
  const quotaPlanName = (0,_helpers_useQuotaPlanName__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(quotaData);
  const {
    availableQuota,
    bonusQuota,
    planQuota,
    googleQuota
  } = quotaData;
  const functionalPlanQuota = planQuota + (bonusQuota || 0);
  let maxQuotaOfYAxis = functionalPlanQuota + functionalPlanQuota * 0.3;
  const yAxisIncrement = QUOTA_Y_AXIS_INCREMENTS.find(_ref2 => {
    let [q] = _ref2;
    return maxQuotaOfYAxis > q;
  })?.[1] || QUOTA_Y_AXIS_INCREMENTS[QUOTA_Y_AXIS_INCREMENTS.length - 1][1];
  maxQuotaOfYAxis = maxQuotaOfYAxis - maxQuotaOfYAxis % yAxisIncrement;
  const rangeStartTimestamp = quotaData.from;
  const rangeCenterTimestamp = quotaData.at;
  const rangeEndTimestamp = quotaData.until;
  let precedingStepTimestamp = rangeStartTimestamp;
  let precedingQuotaValue = availableQuota;
  const timestampToXPercent = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(timestamp => {
    const xVal = (timestamp - rangeStartTimestamp) / (rangeEndTimestamp - rangeStartTimestamp) * 100;
    return xVal;
  }, [rangeStartTimestamp, rangeEndTimestamp]);
  const quotaValueToYPercent = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(quota => {
    const yVal = 100 - quota / maxQuotaOfYAxis * 100;
    return Math.min(yVal, 100);
  }, [maxQuotaOfYAxis]);
  const quotaAxisDeliminations = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.times)(Math.floor(maxQuotaOfYAxis / yAxisIncrement) + 1, i => {
    const quotaDelimValue = i * yAxisIncrement;
    const quotaDelimY = quotaValueToYPercent(quotaDelimValue);
    return [quotaDelimValue, quotaDelimY];
  });
  const timeAxisIncrement = (rangeEndTimestamp - rangeStartTimestamp) / TIME_AXIS_DELIM_COUNT;
  const timeAxisDeliminations = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.times)(TIME_AXIS_DELIM_COUNT + 1, i => {
    const timeDelimValue = rangeStartTimestamp + i * timeAxisIncrement;
    const timeDelimX = timestampToXPercent(timeDelimValue);
    return [timeDelimValue, timeDelimX];
  });
  const dayBorderTimestamps = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.times)(date_fns__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z(rangeEndTimestamp, rangeStartTimestamp)).map(i => {
    const timestamp = date_fns__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z(date_fns__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z(rangeStartTimestamp, {
      days: i
    })).valueOf();
    return timestamp;
  });
  const ctx = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    return {
      quotaValueToYPercent
    };
  }, [quotaValueToYPercent]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_QuotaUsageGraphContext__WEBPACK_IMPORTED_MODULE_6__/* .QuotaUsageGraphContext */ .V.Provider, {
    value: ctx,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("svg", {
      height: GRAPH_HEIGHT + TIME_AXIS_LABELS_HEIGHT,
      width: "100%",
      className: "jsx-791029754",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("svg", {
        x: GRAPH_LEFT_INTERNAL_PADDING,
        y: GRAPH_HEIGHT,
        width: `calc(100% - ${GRAPH_LEFT_INTERNAL_PADDING + GRAPH_RIGHT_INTERNAL_PADDING}px)`,
        className: "jsx-791029754",
        children: timeAxisDeliminations.map(_ref3 => {
          let [timeDelimValue, timeDelimX] = _ref3;
          const timeDelimLabel = date_fns__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z(new Date(timeDelimValue), 'haaa');
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("text", {
            x: `${timeDelimX}%`,
            className: "jsx-791029754" + " " + "time-axis-label",
            children: timeDelimLabel
          }, `x-label-${timeDelimValue}`);
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("svg", {
        y: GRAPH_VERT_INTERNAL_PADDING,
        height: `calc(100% - ${2 * GRAPH_VERT_INTERNAL_PADDING + TIME_AXIS_LABELS_HEIGHT}px)`,
        className: "jsx-791029754",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("text", {
          textAnchor: "center",
          y: GRAPH_LEFT_INTERNAL_PADDING - 60,
          x: -GRAPH_HEIGHT / 2,
          style: {
            transform: 'rotate(-90deg)'
          },
          fontSize: 14,
          fill: "var(--streak-black-primary)",
          className: "jsx-791029754",
          children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.getString('messages')
        }), quotaAxisDeliminations.map(_ref4 => {
          let [quotaDelimValue, quotaDelimY] = _ref4;
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("text", {
            textAnchor: "end",
            alignmentBaseline: "middle",
            y: `${quotaDelimY}%`,
            x: GRAPH_LEFT_INTERNAL_PADDING - 7,
            fontSize: 14,
            fill: "var(--streak-black-primary)",
            className: "jsx-791029754",
            children: quotaDelimValue
          }, `y-label-${quotaDelimValue}`);
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("svg", {
          x: GRAPH_LEFT_INTERNAL_PADDING,
          width: `calc(100% - ${GRAPH_LEFT_INTERNAL_PADDING + GRAPH_RIGHT_INTERNAL_PADDING}px)`,
          className: "jsx-791029754",
          children: [quotaAxisDeliminations.map(_ref5 => {
            let [, quotaDelimY] = _ref5;
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("line", {
              x1: "0",
              y1: `${quotaDelimY}%`,
              x2: "100%",
              y2: `${quotaDelimY}%`,
              stroke: "#ccc",
              strokeWidth: "0.5px",
              className: "jsx-791029754"
            }, `y-axis-${quotaDelimY}`);
          }), dayBorderTimestamps.map(endOfDayTimestamp => {
            const xPositionVal = `${timestampToXPercent(endOfDayTimestamp)}%`;
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("line", {
              x1: xPositionVal,
              y1: "0%",
              x2: xPositionVal,
              y2: "100%",
              stroke: "#ccc",
              strokeWidth: "1",
              className: "jsx-791029754"
            }, `day-border-${endOfDayTimestamp}`);
          }), quotaData?.steps.map(quotaStep => {
            const quotaUsageSegment = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_QuotaStep__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
              rangeCenterTimestamp: rangeCenterTimestamp,
              precedingStepTimestamp: precedingStepTimestamp,
              quotaStep: quotaStep,
              quotaValueToYPercent: quotaValueToYPercent,
              timestampToXPercent: timestampToXPercent
            }, `step-${quotaStep.date}`);
            precedingStepTimestamp = quotaStep.date;
            precedingQuotaValue = quotaStep.quota;
            return quotaUsageSegment;
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_QuotaStep__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            rangeCenterTimestamp: rangeCenterTimestamp,
            precedingStepTimestamp: precedingStepTimestamp,
            quotaStep: {
              date: rangeEndTimestamp,
              delta: 0,
              quota: precedingQuotaValue,
              activities: []
            },
            quotaValueToYPercent: quotaValueToYPercent,
            timestampToXPercent: timestampToXPercent
          }, `step-${rangeEndTimestamp}`), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("line", {
            x1: "0",
            y1: "100%",
            x2: "100%",
            y2: "100%",
            stroke: "black",
            strokeWidth: "1",
            className: "jsx-791029754"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("svg", {
            x: "-18px",
            y: "-18px",
            className: "jsx-791029754",
            children: quotaData?.steps.filter(_ref6 => {
              let {
                delta
              } = _ref6;
              return delta < 0;
            }).map(quotaStep => {
              const {
                date,
                delta
              } = quotaStep;
              const stepEndX = timestampToXPercent(date);
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_QuotaStepButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                xVal: `${stepEndX}%`,
                yVal: `${GRAPH_HEIGHT - 2 * GRAPH_VERT_INTERNAL_PADDING}px`,
                onClick: () => {
                  onStepClick(quotaStep);
                },
                children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.getString('mm_stats_sent', {
                  number: -delta
                })
              }, `button-${date}`);
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_QuotaValueLine__WEBPACK_IMPORTED_MODULE_7__/* .QuotaPlanLine */ .$, {
            planName: quotaPlanName,
            value: googleQuota < planQuota ? googleQuota : functionalPlanQuota
          })]
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "791029754",
      children: ["svg.jsx-791029754{shape-rendering:crispEdges;}", "svg.jsx-791029754>svg.jsx-791029754{overflow:visible;}", ".time-axis-label.jsx-791029754{font-size:12px;-webkit-transform:translateX(-25px) translateY(10px) rotate(-30deg);-ms-transform:translateX(-25px) translateY(10px) rotate(-30deg);transform:translateX(-25px) translateY(10px) rotate(-30deg);-webkit-transform-box:fill-box;-ms-transform-box:fill-box;transform-box:fill-box;fill:var(--streak-black-disabled);}"]
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 24107:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ QuotaUsageGraphContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44345);

const QuotaUsageGraphContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);

/***/ }),

/***/ 72621:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ QuotaPlanLine)
/* harmony export */ });
/* unused harmony export QuotaValueLine */
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81518);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44345);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35091);
/* harmony import */ var _QuotaUsageGraphContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24107);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(59718);






const QUOTA_DASH_ARRAY = '12 9';
const QuotaValueLine = _ref => {
  let {
    value,
    lineColor,
    label
  } = _ref;
  const {
    quotaValueToYPercent
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_QuotaUsageGraphContext__WEBPACK_IMPORTED_MODULE_3__/* .QuotaUsageGraphContext */ .V);
  const y = quotaValueToYPercent(value);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [label && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("foreignObject", {
      overflow: "visible",
      x: "100%",
      y: `${y}%`,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default().dynamic([["404586293", [label.bgColor, label.fgColor]]]) + " " + "quota_value_line_label_wrapper",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default().dynamic([["404586293", [label.bgColor, label.fgColor]]]) + " " + "quota_value_line_label",
          children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.getArray('quota_graph_plan_label', {
            planName: label.text,
            quota: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("b", {
              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default().dynamic([["404586293", [label.bgColor, label.fgColor]]]),
              children: value
            }, "quota")
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
          id: "404586293",
          dynamic: [label.bgColor, label.fgColor],
          children: [".quota_value_line_label_wrapper.__jsx-style-dynamic-selector{position:absolute;right:0;bottom:10px;word-break:keep-all;white-space:nowrap;}", `.quota_value_line_label.__jsx-style-dynamic-selector{font-size:14px;padding:4px 6px;border-radius:1em;background-color:${label.bgColor};color:${label.fgColor};}`]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("line", {
      x1: "0",
      y1: `${y}%`,
      x2: "100%",
      y2: `${y}%`,
      stroke: lineColor,
      strokeWidth: "4px",
      strokeDasharray: QUOTA_DASH_ARRAY
    })]
  });
};
const QuotaPlanLine = _ref2 => {
  let {
    planName,
    value
  } = _ref2;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(QuotaValueLine, {
    value: value,
    lineColor: "#FFB700",
    label: {
      text: planName,
      bgColor: '#FFF7E6',
      fgColor: '#FBC02E'
    }
  });
};

/***/ }),

/***/ 66392:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ QuotaView)
/* harmony export */ });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81518);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44345);
/* harmony import */ var _components_Heading_Heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67565);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35091);
/* harmony import */ var _services_tracker_tracker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13778);
/* harmony import */ var _services_tracker_useTracker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(70989);
/* harmony import */ var _QuotaUsageGraph__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(71597);
/* harmony import */ var _QuotaTimeline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(66972);
/* harmony import */ var _api_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(35358);
/* harmony import */ var _permissionBanner_PermissionBanner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(10080);
/* harmony import */ var _widgets_react_material_button_streakButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(22682);
/* harmony import */ var _sequenceView_components_SequencesViewEmpty__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(48365);
/* harmony import */ var _helpers_useQuotaPlanName__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(19818);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_QuotaUsageGraph__WEBPACK_IMPORTED_MODULE_6__, _api_hooks__WEBPACK_IMPORTED_MODULE_8__, _sequenceView_components_SequencesViewEmpty__WEBPACK_IMPORTED_MODULE_11__, _helpers_useQuotaPlanName__WEBPACK_IMPORTED_MODULE_12__]);
([_QuotaUsageGraph__WEBPACK_IMPORTED_MODULE_6__, _api_hooks__WEBPACK_IMPORTED_MODULE_8__, _sequenceView_components_SequencesViewEmpty__WEBPACK_IMPORTED_MODULE_11__, _helpers_useQuotaPlanName__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















function QuotaView() {
  const quotaTimelineRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const _track = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((eventName, extraProps) => {
    _services_tracker_tracker__WEBPACK_IMPORTED_MODULE_4__["default"].track('quotaView.' + eventName, extraProps);
  }, []);
  const {
    isFetching: isQuotaFetching,
    data: quotaData
  } = (0,_api_hooks__WEBPACK_IMPORTED_MODULE_8__/* .useQueryQuotaData */ .I)();
  const quotaPlanName = (0,_helpers_useQuotaPlanName__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(quotaData);
  const onQuotaStepClick = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(step => {
    step.activities.forEach(a => {
      quotaTimelineRef.current?.highlight(a);
    });
  }, [quotaTimelineRef]);
  let infoMsg = null;
  if (quotaData) {
    if (quotaData.googleQuota < quotaData.planQuota) {
      infoMsg = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_permissionBanner_PermissionBanner__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        iconName: "error_outline",
        iconIsOutline: true,
        mainText: _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.getArray('quota_server_maxed_out', {
          planName: quotaPlanName,
          planQuota: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("b", {
            children: quotaData.planQuota + quotaData.bonusQuota
          }),
          googleQuota: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("b", {
            children: quotaData.googleQuota
          })
        }),
        actionRenderer: () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Fragment, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_widgets_react_material_button_streakButton__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .ZP, {
            variant: "text",
            onClick: () => {
              window.open('https://support.streak.com/en/articles/2546069-how-many-emails-can-i-send-in-a-mail-merge-each-day');
              _services_tracker_tracker__WEBPACK_IMPORTED_MODULE_4__["default"].track('mailMerge.limit.learnMore.click');
            },
            children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.getString('learn_more')
          })
        })
      });
    }
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_services_tracker_useTracker__WEBPACK_IMPORTED_MODULE_5__/* .TrackerContext */ .fy.Provider, {
    value: _track,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
      className: "jsx-1751790728" + " " + "streak__quota_view",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
        className: "jsx-1751790728" + " " + "streak__quota_view_available_header",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_Heading_Heading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
          size: "h2",
          margin: "0",
          children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.getString('currently_available_quota')
        }), quotaData && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("span", {
          className: "jsx-1751790728" + " " + "streak__quota_availble_label",
          children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.getArray('quota_available_now', {
            availableQuota: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("b", {
              className: "jsx-1751790728",
              children: quotaData.availableQuota
            }, "available_quota")
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
        className: "jsx-1751790728" + " " + "streak__quota_view_banner",
        children: infoMsg
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
        className: "jsx-1751790728" + " " + "streak__quota_view_available_body",
        children: [isQuotaFetching && !quotaData && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("span", {
          className: "jsx-1751790728",
          children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.getString('loading')
        }), quotaData && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_QuotaUsageGraph__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
          quotaData: quotaData,
          onStepClick: onQuotaStepClick
        })]
      }), quotaData && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
          className: "jsx-1751790728" + " " + "streak__quota_view_activity_header",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_Heading_Heading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            size: "h2",
            margin: "0",
            children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.getString('activity_affecting_quota')
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
          className: "jsx-1751790728" + " " + "streak__quota_view_activity_body",
          children: [quotaData.steps.length !== 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
            className: "jsx-1751790728" + " " + "timeline",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_QuotaTimeline__WEBPACK_IMPORTED_MODULE_7__/* .QuotaTimeline */ .g, {
              ref: quotaTimelineRef,
              quotaData: quotaData
            })
          }), quotaData.steps.length === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
            className: "jsx-1751790728" + " " + "empty",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_sequenceView_components_SequencesViewEmpty__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
              track: _track
            })
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
        id: "1751790728",
        children: [".streak__quota_view.jsx-1751790728{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;background-color:white;font-family:Roboto;font-size:14px;-webkit-letter-spacing:0.25px;-moz-letter-spacing:0.25px;-ms-letter-spacing:0.25px;letter-spacing:0.25px;color:var(--streak-black-primary);box-sizing:border-box;padding-right:16px;overflow:scroll;}", ".streak__quota_view_available_header.jsx-1751790728{margin:25px 0 12px 62px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".streak__quota_view_banner.jsx-1751790728{margin:0 0 12px 62px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;}", ".streak__quota_availble_label.jsx-1751790728{margin:2px 0 0 12px;background-color:var(--streak-success-hover);color:var(--streak-success-text);border:1px solid transparent;border-radius:1em;outline:none;padding:0 5px 2px 5px;font-size:14px;}", ".streak__quota_view_available_body.jsx-1751790728{padding-left:85px;padding-right:85px;}", ".streak__quota_view_activity_header.jsx-1751790728{margin:25px 0 12px 62px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".streak__quota_view_activity_body.jsx-1751790728{padding-left:85px;padding-right:85px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}", ".streak__quota_view_activity_body.jsx-1751790728 .timeline.jsx-1751790728{-webkit-flex-basis:calc(50% + 35px);-ms-flex-preferred-size:calc(50% + 35px);flex-basis:calc(50% + 35px);}", ".streak__quota_view_activity_body.jsx-1751790728 .empty.jsx-1751790728{-webkit-flex:1;-ms-flex:1;flex:1;}"]
      })]
    })
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 70937:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ getQuotaDisplayPlanName)
/* harmony export */ });
/* harmony import */ var _billing_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13145);
/* harmony import */ var _billing_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57937);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_billing_utils__WEBPACK_IMPORTED_MODULE_1__]);
_billing_utils__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function getQuotaDisplayPlanName(quotaData) {
  const {
    planId,
    planNameLocaleKey,
    planName
  } = quotaData || {};
  if (!planId) {
    return (0,_billing_utils__WEBPACK_IMPORTED_MODULE_1__/* .enrichPlanLabelWithPlan */ .Z_)((0,_billing_utils__WEBPACK_IMPORTED_MODULE_1__/* .getPlanLocalizedName */ .kb)(_billing_constants__WEBPACK_IMPORTED_MODULE_0__/* .freePlanSingleton */ .kT));
  } else {
    return (0,_billing_utils__WEBPACK_IMPORTED_MODULE_1__/* .enrichPlanLabelWithPlan */ .Z_)((0,_billing_utils__WEBPACK_IMPORTED_MODULE_1__/* .getPlanLabelById */ .uY)(planNameLocaleKey || planId, planName));
  }
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 19818:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ useQuotaPlanName)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44345);
/* harmony import */ var _quotaDataUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70937);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_quotaDataUtils__WEBPACK_IMPORTED_MODULE_1__]);
_quotaDataUtils__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function useQuotaPlanName(quotaData) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => (0,_quotaDataUtils__WEBPACK_IMPORTED_MODULE_1__/* .getQuotaDisplayPlanName */ .d)(quotaData), [quotaData]);
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 77210:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _streakyc_common_core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77294);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69980);
/* harmony import */ var _components_QuotaView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(66392);
/* harmony import */ var _core_appShell__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81022);
/* harmony import */ var _core_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(58556);
/* harmony import */ var _lib_dependencyManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(54612);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_QuotaView__WEBPACK_IMPORTED_MODULE_2__]);
_components_QuotaView__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







_lib_dependencyManager__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP.addFunction({
  dependentFunctionKeys: ['userLoggedIn', 'userSettingsInitialized'],
  functionKey: 'quotaViewMasterControllerInitialized',
  functionReference: () => {
    _handleCustomRoute();
  }
});
function _handleCustomRoute() {
  _streakyc_common_core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_0__.inboxSDK.Router.handleCustomRoute(_core_routing__WEBPACK_IMPORTED_MODULE_4__/* .StreakCustomRoute */ .ld.QUOTA, customRouteView => {
    (0,_core_appShell__WEBPACK_IMPORTED_MODULE_3__/* .renderWithAppShell */ .oC)(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_QuotaView__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}), customRouteView.getElement());
    customRouteView.on('destroy', () => {
      react_dom__WEBPACK_IMPORTED_MODULE_1__.unmountComponentAtNode(customRouteView.getElement());
    });
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 48365:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ SequencesViewEmpty)
/* harmony export */ });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81518);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _streakyc_common_core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77294);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35091);
/* harmony import */ var _widgets_react_material_button_streakButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22682);
/* harmony import */ var _sequenceManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(28778);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_sequenceManager__WEBPACK_IMPORTED_MODULE_4__]);
_sequenceManager__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






function SequencesViewEmpty(_ref) {
  let {
    track
  } = _ref;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: "jsx-140504678" + " " + "streak__sequences_view_body_empty",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
      className: "jsx-140504678",
      children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.getString('sequences_view_empty')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "jsx-140504678" + " " + "cta",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_widgets_react_material_button_streakButton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP, {
        onClick: async () => {
          track('createNewSequence.click');
          _sequenceManager__WEBPACK_IMPORTED_MODULE_4__["default"].showChooseDataSourceInNextCompose();
          await _streakyc_common_core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_1__.inboxSDK.Compose.openNewComposeView();
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_widgets_react_material_button_streakButton__WEBPACK_IMPORTED_MODULE_3__/* .StreakButtonIcon */ .A2, {
          materialIconName: "add",
          style: {
            marginLeft: '-8px'
          }
        }), _services_locale_locale__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.getString('sequences_view_empty_cta')]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "140504678",
      children: [".streak__sequences_view_body_empty.jsx-140504678{margin:70px auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;}", ".streak__sequences_view_body_empty.jsx-140504678 p.jsx-140504678{font-family:Roboto;font-style:normal;font-weight:normal;font-size:13px;line-height:16px;color:var(--streak-black-secondary);}", ".streak__sequences_view_body_empty.jsx-140504678 .cta.jsx-140504678{margin:auto;}"]
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
//# sourceMappingURL=https://storage.googleapis.com/streak-extension-sourcemaps/clientjs/clientjs.chunk.7210.2ee1c026737e28616e59.js.map