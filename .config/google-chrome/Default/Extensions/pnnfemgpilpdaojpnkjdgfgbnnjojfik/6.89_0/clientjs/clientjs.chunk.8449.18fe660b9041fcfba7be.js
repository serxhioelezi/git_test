"use strict";
export const id = 8449;
export const ids = [8449];
export const modules = {

/***/ 30293:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ StageLabelContainer)
});

// EXTERNAL MODULE: ./.yarn/__virtual__/styled-jsx-virtual-9c4bfc1357/0/cache/styled-jsx-npm-5.0.2-aff4f13ebf-96b4507d41.zip/node_modules/styled-jsx/style.js
var style = __webpack_require__(81518);
var style_default = /*#__PURE__*/__webpack_require__.n(style);
// EXTERNAL MODULE: ./extensions/common/js/components/Icon/Icon.tsx + 1 modules
var Icon = __webpack_require__(71174);
// EXTERNAL MODULE: ./extensions/common/js/components/Label/Label.tsx + 1 modules
var Label = __webpack_require__(32029);
// EXTERNAL MODULE: ./extensions/common/js/redux/hooks.ts
var hooks = __webpack_require__(3572);
// EXTERNAL MODULE: ./extensions/common/js/redux/models/modelHooks.ts + 1 modules
var modelHooks = __webpack_require__(64076);
;// CONCATENATED MODULE: ./extensions/common/js/redux/selectors/getSetting.ts
function getSetting(state, settingName) {
  return state.settings[settingName];
}
// EXTERNAL MODULE: ./extensions/common/js/redux/selectors/getBoxPipeline.ts
var getBoxPipeline = __webpack_require__(47501);
// EXTERNAL MODULE: ./extensions/common/js/services/locale/locale.ts + 37 modules
var locale = __webpack_require__(35091);
// EXTERNAL MODULE: ./.yarn/cache/react-npm-18.3.1-af38f3c1ae-261137d3f3.zip/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(59718);
;// CONCATENATED MODULE: ./extensions/common/js/modules/boxLabel/StageLabelContainer.tsx









const Divider = '\u2022';
const counterFormatter = Intl.NumberFormat(locale.Locale.getIntlGmailLocale(), {
  notation: 'compact'
});
function StageLabelContainer(_ref) {
  let {
    boxKey,
    counter,
    track
  } = _ref;
  const box = (0,modelHooks/* useBox */.EJ)({
    key: boxKey
  }).result;
  const pipeline = (0,hooks/* useSelector */.v9)(state => (0,getBoxPipeline/* default */.Z)(state, {
    key: boxKey
  }));
  const threadMetaData = (0,hooks/* useSelector */.v9)(state => state.threadViewState.type !== 'NO_THREAD' && state.threadViewState.metaData);
  const dispatch = (0,hooks/* useDispatch */.I0)();
  const boxIndicatorSetting = (0,hooks/* useSelector */.v9)(state => getSetting(state, 'list_indicator_setting_name'));
  if (!pipeline || !box || !threadMetaData || !boxIndicatorSetting) {
    return null;
  }
  const _track = eventName => track('threadTag.' + eventName);
  const props = {};
  let labelName = '';
  if (counter && counter > 1) {
    labelName = pipeline.name;
    props.counter = counterFormatter.format(counter);
    props.onClickLabel = () => {
      dispatch({
        type: 'THREAD_BOX_LABEL_DISPLAY_ALL',
        displayAll: true
      });
    };
  } else {
    labelName = getLabelName(box, boxIndicatorSetting, pipeline);
    props.onClickLabel = () => {
      dispatch({
        type: 'SIDEBAR/CARDS/REPLACE',
        cards: [{
          type: 'BOX_DETAILS',
          id: box.id
        }]
      });
      _track('click');
    };
    props.onClickSuffix = () => {
      dispatch({
        type: 'THREAD_BOX_LABEL_DELETE_CLICK',
        threadMetaData,
        boxId: box.id
      });
      _track('remove');
    };
  }
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: "jsx-3933136091" + " " + "streak__threadBoxLabel_container",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)((style_default()), {
      id: "3933136091",
      children: [".streak__threadBoxLabel_container.jsx-3933136091{margin-right:6px;padding:5px 0;line-height:12px;}"]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Label/* default */.Z, {
      backgroundColor: pipeline.stages[box.stageKey].color.backgroundColor,
      foregroundColor: pipeline.stages[box.stageKey].color.foregroundColor,
      isWide: true
      // todo: permissions in state, show lock icon in suffix
      ,
      prefix: () => /*#__PURE__*/(0,jsx_runtime.jsx)(Icon/* default */.Z, {
        accent: "inherit",
        isOutline: true,
        name: pipeline.icon,
        size: "s"
      }),
      ...props,
      children: labelName
    })]
  });
}
function getLabelName(box, setting, pipeline) {
  let labelName = `${pipeline.name} ${Divider} ${pipeline.stages[box.stageKey].name} ${Divider} ${box.name}`;
  if (!box || !setting) {
    return labelName;
  }
  const selectedValues = setting.selectedValues;
  const isSettingValueDefault = isSettingValuePresent(selectedValues, 'default');
  const isSettingValuePipeline = isSettingValuePresent(selectedValues, 'pipeline');
  const isSettingValueStage = isSettingValuePresent(selectedValues, 'stage');
  const isSettingValueBox = isSettingValuePresent(selectedValues, 'box');
  const showPipelineName = isSettingValueDefault || isSettingValuePipeline;
  const showStageName = isSettingValueDefault || isSettingValueStage;
  const boxName = isSettingValueBox ? box.name : '';
  const stageName = showStageName ? pipeline.stages[box.stageKey].name : '';
  const pipelineName = showPipelineName ? pipeline.name : '';
  const firstDivider = showPipelineName && showStageName ? ` ${Divider} ` : '';
  const secondDivider = (showPipelineName || showStageName) && isSettingValueBox ? ` ${Divider} ` : '';
  labelName = pipelineName + firstDivider + stageName + secondDivider + boxName;
  return labelName;
}
function isSettingValuePresent(selectedValues, value) {
  if (!selectedValues) {
    return false;
  }
  return selectedValues.indexOf(value) > -1;
}

/***/ }),

/***/ 73150:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _streakyc_common_core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77294);
/* harmony import */ var kefir__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98137);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17013);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(69980);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(63086);
/* harmony import */ var _redux_storeSingleton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5568);
/* harmony import */ var _services_tracker_tracker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13778);
/* harmony import */ var _lib_dependencyManager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(54612);
/* harmony import */ var _StageLabelContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(30293);
/* harmony import */ var _core_appShell__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(81022);
/* harmony import */ var _boxCache_BoxCache__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(18123);
/* harmony import */ var _lib_utils_isNotNil__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(72086);
/* harmony import */ var _services_data_data__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(38672);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_boxCache_BoxCache__WEBPACK_IMPORTED_MODULE_9__, _services_data_data__WEBPACK_IMPORTED_MODULE_10__]);
([_boxCache_BoxCache__WEBPACK_IMPORTED_MODULE_9__, _services_data_data__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














async function handleIfSidebarEnabled() {
  await (0,_lib_dependencyManager__WEBPACK_IMPORTED_MODULE_6__/* .waitForDependencies */ .y)(['sdkLoaded']);
  const labelsMap = {};
  const showAllLabelsStream = kefir__WEBPACK_IMPORTED_MODULE_1__["default"].stream(emitter => {
    return _redux_storeSingleton__WEBPACK_IMPORTED_MODULE_4__.store.subscribe(() => {
      emitter.value(_redux_storeSingleton__WEBPACK_IMPORTED_MODULE_4__.store.getState().ui.threadView.displayAllLabels);
    });
  }).skipDuplicates(lodash__WEBPACK_IMPORTED_MODULE_2__.isEqual);
  const threadViewStream = kefir__WEBPACK_IMPORTED_MODULE_1__["default"].stream(emitter => {
    return _streakyc_common_core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_0__.inboxSDK.Conversations.registerThreadViewHandler(threadView => {
      // clean up from previous threads
      _redux_storeSingleton__WEBPACK_IMPORTED_MODULE_4__.store.dispatch({
        type: 'THREAD_BOX_LABEL_DISPLAY_ALL',
        displayAll: false
      });
      emitter.emit(threadView);
    });
  });
  const boxesStream = kefir__WEBPACK_IMPORTED_MODULE_1__["default"].stream(emitter => {
    return _redux_storeSingleton__WEBPACK_IMPORTED_MODULE_4__.store.subscribe(() => {
      emitter.value(getCurrentBoxIds(_redux_storeSingleton__WEBPACK_IMPORTED_MODULE_4__.store.getState()));
    });
  }).skipDuplicates(react_redux__WEBPACK_IMPORTED_MODULE_12__/* .shallowEqual */ .wU).flatMapLatest(currentBoxIds => {
    return kefir__WEBPACK_IMPORTED_MODULE_1__["default"].fromPromise(Promise.all((currentBoxIds || []).map(boxId => _boxCache_BoxCache__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z.getBoxById(boxId))));
  }).map(possiblyNilBoxes => possiblyNilBoxes.filter(_lib_utils_isNotNil__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z));
  const updatesStream = kefir__WEBPACK_IMPORTED_MODULE_1__["default"].combine({
    currentBoxes: boxesStream,
    showAllLabels: showAllLabelsStream
  });
  const sampledStream = threadViewStream.sampledBy(updatesStream, (threadView, data) => ({
    threadView,
    ...data
  })).skipDuplicates(lodash__WEBPACK_IMPORTED_MODULE_2__.isEqual);
  sampledStream.onValue(_ref => {
    let {
      threadView,
      currentBoxes,
      showAllLabels
    } = _ref;
    // used for sorting below
    const pipelinesKeysIndex = _services_data_data__WEBPACK_IMPORTED_MODULE_10__/* .Data */ .V.getAllPipelines().reduce((acc, pipeline, index) => {
      const pipelineKey = pipeline.key();
      if (!acc[pipelineKey]) {
        acc[pipelineKey] = index;
      }
      return acc;
    }, {});

    // remove any old labels
    Object.values(labelsMap).forEach(label => {
      label.destroy();
    });

    // add any new labels
    const labels = getLabelsFromBoxes(currentBoxes, pipelinesKeysIndex, showAllLabels);
    labels.forEach(label => {
      const boxKey = label.box.key();
      const newLabel = threadView.addLabel();
      labelsMap[boxKey] = newLabel;
      (0,_core_appShell__WEBPACK_IMPORTED_MODULE_8__/* .renderWithAppShell */ .oC)(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_StageLabelContainer__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        boxKey: boxKey,
        counter: label.count,
        track: (eventName, extraProps) => _services_tracker_tracker__WEBPACK_IMPORTED_MODULE_5__["default"].track(eventName, extraProps)
      }), newLabel.el);
      newLabel.on('destroy', () => {
        react_dom__WEBPACK_IMPORTED_MODULE_3__.unmountComponentAtNode(newLabel.el);
        delete labelsMap[boxKey];
      });
    });
  });
}
handleIfSidebarEnabled();

// We push card stack to show the created box as soon as box is created
// at https://github.com/StreakYC/MailFoo/blob/master/extensions/common/js/redux/saga/sagas/handleSidebarBoxCreate.ts#L132-L135
// but the thread view box label doesn't really immediately show the label until box is added to thread.
// getCurrentBoxIds ensures whenever you see a box is created in sidebar you see the label shows up and not duplicating box labels for this thread
function getCurrentBoxIds(state) {
  if (state.threadViewState.type == 'NO_THREAD') {
    return [];
  }
  const {
    id: threadId = null
  } = state.threadViewState;
  if (threadId == null) {
    return [];
  }
  const threadCache = state.threadsModelCache[threadId];
  if (threadCache == null) {
    return [];
  }
  const currentBoxIds = new Set();
  const cards = state.sidebarState.activeCardOverrides;
  const topCard = cards[cards.length - 1];
  threadCache.boxes?.forEach(id => {
    currentBoxIds.add(id);
  });
  if (topCard?.type === 'BOX_DETAILS') {
    currentBoxIds.add(topCard.id);
  }
  if (topCard?.type === 'THREAD_DETAILS') {
    topCard.boxIds?.forEach(id => currentBoxIds.add(id));
  }
  return Array.from(currentBoxIds);
}
function getLabelsFromBoxes(boxes, pipelinesKeysIndex) {
  let noBoxTrimming = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  // group boxes by pipeline key
  const groupedBoxes = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.groupBy)(boxes, box => {
    const pipelineKey = box.getPipelineKey();
    return pipelineKey;
  });

  // sort boxes according to pipeline relative order
  const sortedBoxes = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.sortBy)(Object.entries(groupedBoxes), _ref2 => {
    let [pipelineKey] = _ref2;
    return pipelinesKeysIndex[pipelineKey] ?? 1;
  });

  // create label per box
  if (noBoxTrimming) return sortedBoxes.flatMap(_ref3 => {
    let [, boxes] = _ref3;
    return boxes.map(box => ({
      box
    }));
  });

  // get the most recently updated box along with the number of boxes per pipeline
  const labels = sortedBoxes.map(_ref4 => {
    let [, boxes] = _ref4;
    return {
      box: (0,lodash__WEBPACK_IMPORTED_MODULE_2__.orderBy)(boxes, box => box.get('lastUpdatedTimestamp'), 'desc')[0],
      count: boxes.length
    };
  });
  return labels;
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
//# sourceMappingURL=https://storage.googleapis.com/streak-extension-sourcemaps/clientjs/clientjs.chunk.8449.18fe660b9041fcfba7be.js.map