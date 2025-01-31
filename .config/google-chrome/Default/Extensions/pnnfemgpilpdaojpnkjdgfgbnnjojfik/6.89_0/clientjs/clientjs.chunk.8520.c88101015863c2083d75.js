"use strict";
export const id = 8520;
export const ids = [8520];
export const modules = {

/***/ 28520:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ThreadRowBoxLabels)
/* harmony export */ });
/* harmony import */ var _streakyc_common_core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77294);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17013);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var kefir__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98137);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65887);
/* harmony import */ var _boxCache_BoxCache__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18123);
/* harmony import */ var _lib_dependencyManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(54612);
/* harmony import */ var _widgets_react_material_icon_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(84347);
/* harmony import */ var _services_threads_threadStorer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(98162);
/* harmony import */ var kefir_stopper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(94322);
/* harmony import */ var kefir_stopper__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(kefir_stopper__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _lib_utils_isNotNil__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(72086);
/* harmony import */ var _services_data_commonData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(90885);
/* harmony import */ var _services_data_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(38672);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(35091);
/* harmony import */ var _threadRowBoxLabels_module_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(56178);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_boxCache_BoxCache__WEBPACK_IMPORTED_MODULE_4__, _services_data_commonData__WEBPACK_IMPORTED_MODULE_8__, _services_data_data__WEBPACK_IMPORTED_MODULE_9__]);
([_boxCache_BoxCache__WEBPACK_IMPORTED_MODULE_4__, _services_data_commonData__WEBPACK_IMPORTED_MODULE_8__, _services_data_data__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















const Divider = '\u2022';
const counterFormatter = Intl.NumberFormat(_services_locale_locale__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z.getIntlGmailLocale(), {
  notation: 'compact'
});
class ThreadRowBoxLabels {
  constructor() {
    _streakyc_common_core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_0__.inboxSDK.Lists.registerThreadRowViewHandler(this.#handleThreadRowView.bind(this));
  }
  #handleThreadRowView(threadRowView) {
    threadRowView.getThreadIDAsync().then(threadID => {
      if (threadRowView.destroyed) return;
      const boxLabelStoppers = Object.create(null);
      function cleanUpExistingLabels() {
        if (boxLabelStoppers[threadID]) {
          boxLabelStoppers[threadID]?.forEach(stopper => stopper.destroy());
          delete boxLabelStoppers[threadID];
        }
      }
      function getLabelStopper() {
        const stopper = kefir_stopper__WEBPACK_IMPORTED_MODULE_12___default()();
        boxLabelStoppers[threadID] ??= [];
        boxLabelStoppers[threadID]?.push(stopper);
        return stopper;
      }
      const labelStream = _services_threads_threadStorer__WEBPACK_IMPORTED_MODULE_7__["default"].getBoxKeysStream(threadID).toProperty(() => ({
        boxKeys: null,
        isAddedByUser: false
      })).takeUntilBy(kefir__WEBPACK_IMPORTED_MODULE_2__.fromEvents(threadRowView, 'destroy')).flatMapLatest(_ref => {
        let {
          boxKeys
        } = _ref;
        return kefir__WEBPACK_IMPORTED_MODULE_2__.fromPromise(Promise.all((boxKeys || []).map(boxKey => _boxCache_BoxCache__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getBox(boxKey))));
      }).map(possiblyNilBoxes => possiblyNilBoxes.filter(_lib_utils_isNotNil__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)).onValue(() => {
        cleanUpExistingLabels();
      })
      // transform boxes into labels: group by pipeline, sort by the most recently updated box and limit to 1 box per pipeline
      .map(boxes => {
        const pipelinesKeysIndex = _services_data_data__WEBPACK_IMPORTED_MODULE_9__["default"].getAllPipelines().reduce((acc, pipeline, index) => {
          const pipelineKey = pipeline.key();
          if (!acc[pipelineKey]) {
            acc[pipelineKey] = index;
          }
          return acc;
        }, {});
        return this.#getLabelsFromBoxes(boxes, pipelinesKeysIndex);
      })
      // if number of labels exceeds 2 per thread add 1 box label and the copy one (collapsing)
      .map(labels => {
        if (labels.length > 2) {
          // add a "remaining" label first so it's the last one in row
          const remaining = labels.length - 1;
          const boxLabelDescriptorStream = kefir__WEBPACK_IMPORTED_MODULE_2__.stream(emitter => {
            emitter.value({
              title: _services_locale_locale__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z.getString('thread_remaining_pipelines_label', {
                remaining
              })
            });
          }).ignoreEnd().takeUntilBy(getLabelStopper()).concat(kefir__WEBPACK_IMPORTED_MODULE_2__.constant(null));
          threadRowView.addLabel(boxLabelDescriptorStream);
          // return one box only
          return [labels[0]];
        }
        // InboxSDK inserts labels in prepending order so we reverse list to preserve the correct sorting
        return labels.reverse();
      }).flatten();
      labelStream.onValue(label => {
        const {
          box,
          count: counter
        } = label;
        const boxLabelDescriptorStream = box.getPipeline().getEventStream().filter(notification => notification.eventName === 'uiSettingChanged' || notification.eventName === 'set' && notification.property === 'name' || notification.eventName === 'set' && notification.property === 'uiSettings').toProperty(() => null).map(() => {
          const isSettingValueDefault = this.#isSettingValuePresent('default');
          const isSettingValuePipeline = this.#isSettingValuePresent('pipeline');
          const isSettingValueStage = this.#isSettingValuePresent('stage');
          const isSettingValueBox = this.#isSettingValuePresent('box');
          const shouldAddLabel = isSettingValuePipeline || isSettingValueStage || isSettingValueBox;
          if (!shouldAddLabel) {
            return null;
          }
          const color = box.getStage().getColor();
          const icon = box.getPipeline().getIcon();
          const iconHtml = react_dom_server__WEBPACK_IMPORTED_MODULE_3__.renderToStaticMarkup(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_widgets_react_material_icon_icon__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            style: {
              color: color.foregroundColor,
              display: 'block',
              fontSize: '14px',
              height: '14px',
              width: '14px',
              marginTop: '-1px',
              marginLeft: '-1px'
            },
            materialIconName: icon,
            isOutline: true,
            nano: true
          }));
          const labelDescriptor = {
            iconHtml,
            backgroundColor: color.backgroundColor,
            foregroundColor: color.foregroundColor
          };
          if (counter > 1) {
            const title = box.getPipeline().displayNameText();
            labelDescriptor.titleHtml = react_dom_server__WEBPACK_IMPORTED_MODULE_3__.renderToStaticMarkup(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
              className: _threadRowBoxLabels_module_css__WEBPACK_IMPORTED_MODULE_14__/* .labelContent */ .Wn,
              "data-tooltip": title,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("span", {
                className: _threadRowBoxLabels_module_css__WEBPACK_IMPORTED_MODULE_14__/* .title */ .TN,
                children: title
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
                className: _threadRowBoxLabels_module_css__WEBPACK_IMPORTED_MODULE_14__/* .counter */ .cL,
                style: {
                  borderColor: color.backgroundColor
                },
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("span", {
                  children: counterFormatter.format(counter)
                })
              })]
            }));
          } else {
            const showPipelineName = isSettingValueDefault || isSettingValuePipeline;
            const showStageName = isSettingValueDefault || isSettingValueStage;
            const boxName = isSettingValueBox ? box.displayNameText() : '';
            const stageName = showStageName ? box.getStage().displayNameText() : '';
            const pipelineName = showPipelineName ? box.getPipeline().displayNameText() : '';
            const firstDivider = showPipelineName && showStageName ? ` ${Divider} ` : '';
            const secondDivider = (showPipelineName || showStageName) && isSettingValueBox ? ` ${Divider} ` : '';
            const title = pipelineName + firstDivider + stageName + secondDivider + boxName;
            labelDescriptor.title = title;
            labelDescriptor.maxWidth = '204px';
          }
          return labelDescriptor;
        }).ignoreEnd().takeUntilBy(getLabelStopper()).concat(kefir__WEBPACK_IMPORTED_MODULE_2__.constant(null));
        if (this.#isSettingValuePresent('pipeline') || this.#isSettingValuePresent('stage') || this.#isSettingValuePresent('box')) {
          threadRowView.addLabel(boxLabelDescriptorStream);
        }
      });
    });
  }
  #isSettingValuePresent(value) {
    const setting = _services_data_commonData__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z.getStreakSettings().getSetting('list_indicator_setting_name');
    if (!setting) {
      return false;
    }
    const selectedValues = new Set((() => {
      const {
        selectedValues,
        defaultValues
      } = setting;
      if (lodash__WEBPACK_IMPORTED_MODULE_1___default().isEqual(selectedValues, ['default'])) {
        return defaultValues;
      }
      return selectedValues;
    })() ?? []);
    return selectedValues.has(value);
  }
  #getLabelsFromBoxes(boxes, pipelinesKeysIndex) {
    // group boxes by pipeline key
    const groupedBoxes = lodash__WEBPACK_IMPORTED_MODULE_1___default().groupBy(boxes, box => {
      const pipelineKey = box.getPipelineKey();
      return pipelineKey;
    });

    // sort boxes according to pipeline relative order
    const sortedBoxes = lodash__WEBPACK_IMPORTED_MODULE_1___default().sortBy(Object.entries(groupedBoxes), _ref2 => {
      let [pipelineKey] = _ref2;
      return pipelinesKeysIndex[pipelineKey] ?? 1;
    });

    // get the most recently updated box per pipeline along with the number of boxes per pipeline
    const labels = sortedBoxes.map(_ref3 => {
      let [, boxes] = _ref3;
      return {
        box: lodash__WEBPACK_IMPORTED_MODULE_1___default().orderBy(boxes, box => box.get('lastUpdatedTimestamp'), 'desc')[0],
        count: boxes.length
      };
    });
    return labels;
  }
}
_lib_dependencyManager__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP.addFunction({
  functionKey: 'ThreadRowBoxLabelsInitialized',
  functionReference() {
    new ThreadRowBoxLabels();
  },
  dependentFunctionKeys: ['gmailLoaded', 'data.pipelines.initialized', 'data.streakSettings.initialized']
});
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 56178:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TN: () => (/* binding */ _3),
/* harmony export */   Wn: () => (/* binding */ _2),
/* harmony export */   cL: () => (/* binding */ _1)
/* harmony export */ });
// extracted by mini-css-extract-plugin
var _1 = "streak-mod__gEF_oc2V5bREOuYVMmCh";
var _2 = "streak-mod__yODZv4nBLHb5vgFvo24i";
var _3 = "streak-mod__UTSbzRpqx0GtzMHIYLGd";



/***/ })

};
;
//# sourceMappingURL=https://storage.googleapis.com/streak-extension-sourcemaps/clientjs/clientjs.chunk.8520.c88101015863c2083d75.js.map