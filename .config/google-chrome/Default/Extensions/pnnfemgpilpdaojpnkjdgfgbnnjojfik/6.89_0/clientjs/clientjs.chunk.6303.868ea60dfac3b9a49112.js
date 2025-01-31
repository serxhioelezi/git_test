"use strict";
export const id = 6303;
export const ids = [6303];
export const modules = {

/***/ 57759:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17013);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

const ruleRefCounts = new Map();
const CSSStyleManipulator = {
  addRule(rule) {
    const head = document.head || document.getElementsByTagName('head')[0];
    let ref = ruleRefCounts.get(rule);
    if (!ref) {
      ref = {
        count: 0,
        style: document.createElement('style')
      };
      ref.style.type = 'text/css';
      head.appendChild(ref.style);
      ruleRefCounts.set(rule, ref);
      const stylesheet = ref.style.sheet;
      if (stylesheet && stylesheet instanceof CSSStyleSheet) {
        stylesheet.insertRule(rule, 0);
      } else {
        // Is this a case that actually happens? Remove it if not.
        // eslint-disable-next-line no-console
        console.error('sheet property missing from style element', ref.style);
        for (let ii = document.styleSheets.length - 1; ii >= 0; ii--) {
          try {
            document.styleSheets[ii].insertRule(rule, 0);
            break;
          } catch (err) {
            // eslint-disable-next-line no-console
            console.error('css addRule error', err);
          }
        }
      }
    }
    ref.count += 1;
    const cref = ref;
    return {
      destroy: lodash__WEBPACK_IMPORTED_MODULE_0___default().once(() => {
        cref.count -= 1;
        if (cref.count === 0) {
          head.removeChild(cref.style);
          ruleRefCounts.delete(rule);
        }
      })
    };
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CSSStyleManipulator);

/***/ }),

/***/ 53453:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _streakyc_common_core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77294);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17013);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var kefir__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98137);
/* harmony import */ var _boxCache_BoxCache__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18123);
/* harmony import */ var _services_threads_threadStorer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(98162);
/* harmony import */ var _lib_dependencyManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(54612);
/* harmony import */ var _services_data_commonData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(90885);
/* harmony import */ var kefir_bus__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(67459);
/* harmony import */ var kefir_bus__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(kefir_bus__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _threadRowAssignedTo_module_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(16964);
/* harmony import */ var _lib_cssStyleManipulator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(57759);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(35091);
/* harmony import */ var fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(59844);
/* harmony import */ var fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _services_tracker_tracker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(13778);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_boxCache_BoxCache__WEBPACK_IMPORTED_MODULE_3__, _services_data_commonData__WEBPACK_IMPORTED_MODULE_6__]);
([_boxCache_BoxCache__WEBPACK_IMPORTED_MODULE_3__, _services_data_commonData__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













class ThreadBoxAssignedTo {
  #listFormat;
  constructor() {
    _streakyc_common_core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_0__.inboxSDK.Lists.registerThreadRowViewHandler(this.#handleThreadRowView);
  }
  #handleThreadRowView = threadRowView => {
    if (!this.#isSettingValuePresent('default') && !this.#isSettingValuePresent('assignedTo')) {
      return;
    }
    threadRowView.getThreadIDAsync().then(threadID => {
      // TODO support multiple boxes
      const boxKeyStream = _services_threads_threadStorer__WEBPACK_IMPORTED_MODULE_4__["default"].getBoxKeysStream(threadID).toProperty(() => ({
        boxKeys: null
      })).flatMap(_ref => {
        let {
          boxKeys
        } = _ref;
        return boxKeys == null ? kefir__WEBPACK_IMPORTED_MODULE_2__.never() : kefir__WEBPACK_IMPORTED_MODULE_2__.constant(boxKeys);
      });
      this.#addAssignedToAvatarStack(threadRowView, boxKeyStream);
    });
  };
  #addAssignedToAvatarStack(threadRowView, boxKeyStream) {
    const boxesStream = boxKeyStream.flatMap(boxKeys => kefir__WEBPACK_IMPORTED_MODULE_2__.fromPromise(_boxCache_BoxCache__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.getBoxes(boxKeys))).flatMapLatest(boxes => {
      const nonNullBoxes = boxes.flatMap(box => box ?? []);
      return kefir__WEBPACK_IMPORTED_MODULE_2__.constant(nonNullBoxes);
    });
    const assignedToUpdateStream = boxesStream.combine(boxesStream.flatMapLatest(boxes => {
      return kefir__WEBPACK_IMPORTED_MODULE_2__.merge(boxes.map(x => x.getEventStream().flatMap(event => {
        if (event.eventName === 'set' && event.property === 'assignedToSharingEntries') {
          return kefir__WEBPACK_IMPORTED_MODULE_2__.constant(event);
        }
        return kefir__WEBPACK_IMPORTED_MODULE_2__.never();
      })));
    }).toProperty(() => null));
    let currentBusses = [];
    assignedToUpdateStream.flatMapLatest(_ref2 => {
      let [nonNullBoxes] = _ref2;
      if (nonNullBoxes.length === 0) {
        return kefir__WEBPACK_IMPORTED_MODULE_2__.constant({
          sortedAssignedToEntries: [],
          boxNameByAssignedTo: new Map(),
          boxCount: nonNullBoxes.length
        });
      }
      const emailFrequencyByEmail = new Map();
      const latestTimestampByEmail = new Map();
      const boxNameByEmailAssignedTo = new Map();
      for (const box of nonNullBoxes) {
        const emails = box.getEmailAddresses();
        for (const email of emails) {
          const currFreq = emailFrequencyByEmail.get(email) ?? 0;
          emailFrequencyByEmail.set(email, currFreq + 1);
          const latestTimeStamp = latestTimestampByEmail.get(email) ?? 0;
          latestTimestampByEmail.set(email, Math.max(latestTimeStamp, box.getNoDefault('lastUpdatedTimestamp') ?? 0));
        }

        // Only populate this map if there's more than 1 box associated with the thread
        if (nonNullBoxes.length >= 2) {
          for (const sharingEntry of box.getAssignedToSharingEntries()) {
            if (!sharingEntry.email) {
              continue;
            }
            const currBoxNames = boxNameByEmailAssignedTo.get(sharingEntry.email) ?? [];
            currBoxNames.push(box.displayNameText());
            boxNameByEmailAssignedTo.set(sharingEntry.email, currBoxNames);
          }
        }
      }
      const assignedToEntries = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.uniqBy)(nonNullBoxes.flatMap(box => box.getAssignedToSharingEntries()), sharingEntry => sharingEntry.email);
      const sortedAssignedToEntries = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.orderBy)(assignedToEntries, [sharingEntry => emailFrequencyByEmail.get(sharingEntry.email) ?? 0, sharingEntry => latestTimestampByEmail.get(sharingEntry.email) ?? 0], ['desc', 'desc']);
      return kefir__WEBPACK_IMPORTED_MODULE_2__.constant({
        sortedAssignedToEntries,
        boxNameByAssignedTo: boxNameByEmailAssignedTo,
        boxCount: nonNullBoxes.length
      });
    }).takeUntilBy(kefir__WEBPACK_IMPORTED_MODULE_2__.fromEvents(threadRowView, 'destroy')).skipDuplicates((fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_9___default())).onValue(_ref3 => {
      let {
        sortedAssignedToEntries,
        boxNameByAssignedTo,
        boxCount
      } = _ref3;
      const sliced = sortedAssignedToEntries.length >= 4 ? sortedAssignedToEntries.slice(0, 2) : sortedAssignedToEntries;
      const hasPlusMore = sliced.length < sortedAssignedToEntries.length;
      for (const bus of currentBusses ?? []) {
        bus.emit(null);
        bus.end();
      }
      const newBusses = [];
      let i = 0;
      for (const sharingEntry of sliced) {
        const bus = kefir_bus__WEBPACK_IMPORTED_MODULE_11___default()();
        newBusses.push(bus);
        threadRowView.addImage(bus);
        const imageClass = `${_threadRowAssignedTo_module_css__WEBPACK_IMPORTED_MODULE_12__/* .fakeStack */ .zH}${!hasPlusMore && i === sliced.length - 1 ? ' ' + _threadRowAssignedTo_module_css__WEBPACK_IMPORTED_MODULE_12__/* .noOverflow */ .Pi : ''} `;
        const tooltip = this.#formatSharingEntry(sharingEntry, boxNameByAssignedTo);
        bus.emit({
          imageClass,
          imageUrl: sharingEntry.image,
          tooltip,
          onHover: this.#trackHover('hoveredAvatar', boxCount)
        });
        i++;
      }
      if (hasPlusMore) {
        const moreNumber = sortedAssignedToEntries.length - sliced.length;
        const bus = kefir_bus__WEBPACK_IMPORTED_MODULE_11___default()();
        newBusses.push(bus);
        threadRowView.addImage(bus);
        bus.emit({
          imageClass: this.#getPlusMoreImageClass(moreNumber) + ' ' + _threadRowAssignedTo_module_css__WEBPACK_IMPORTED_MODULE_12__/* .overflow */ .tx,
          tooltip: this.#getPlusMoreTooltip(sortedAssignedToEntries.slice(2), boxNameByAssignedTo),
          onHover: this.#trackHover('hoveredPlusMore', boxCount)
        });
      }
      currentBusses = newBusses;
    });
  }
  #trackHover = (event, boxCount) => async _ref4 => {
    let {
      hoverEnd
    } = _ref4;
    const start = new Date();
    await hoverEnd;
    const end = new Date();
    const duration = end.getTime() - start.getTime();
    if (duration < 1_000) {
      return;
    }
    _services_tracker_tracker__WEBPACK_IMPORTED_MODULE_10__["default"].track('threadRowAssignedTo.' + event, {
      forMs: duration,
      numOfBoxesAssociatedWithRow: boxCount
    });
  };
  #isSettingValuePresent(value) {
    const setting = _services_data_commonData__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.getStreakSettings().getSetting('list_indicator_setting_name');
    if (!setting) {
      return false;
    }
    const selectedValues = setting.selectedValues;
    if (!selectedValues) {
      return false;
    }
    return selectedValues.includes(value);
  }
  #addedNumbers = (() => new Set())();

  /**
   * @todo drop ASAP. The SDK could handle this with data attrs instead of a new ruleset per number.
   */
  #getPlusMoreImageClass(moreNumber) {
    const className = 'streak__threadRow_more_' + moreNumber;
    if (!this.#addedNumbers.has(moreNumber)) {
      const rule = `.${className}::after { content: "+${moreNumber}";}`;
      _lib_cssStyleManipulator__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.addRule(rule);
      this.#addedNumbers.add(moreNumber);
    }
    return className;
  }
  #getPlusMoreTooltip(contacts, boxNameByAssignedTo) {
    return contacts.flatMap(contact => this.#formatSharingEntry(contact, boxNameByAssignedTo) || []).join(boxNameByAssignedTo.size >= 1 ? '\n\n' : '\n');
  }
  #formatSharingEntry(sharingEntry, boxNameByAssignedTo) {
    let tooltip = `${sharingEntry.displayName || sharingEntry.fullName}${sharingEntry.email ? ` (${sharingEntry.email})` : ''}`;
    if (boxNameByAssignedTo.size >= 1) {
      this.#listFormat ??= new Intl.ListFormat([_services_locale_locale__WEBPACK_IMPORTED_MODULE_8__.Locale.getIntlGmailLocale(), ...navigator.languages], {
        style: 'long',
        type: 'conjunction'
      });
      const boxNames = boxNameByAssignedTo.get(sharingEntry.email);
      if (boxNames?.length) {
        tooltip += `\n${this.#listFormat.format(boxNames)}`;
      }
    }
    return tooltip;
  }
}
_lib_dependencyManager__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP.addFunction({
  functionKey: 'ThreadRowAssignedToInitialized',
  functionReference: function () {
    new ThreadBoxAssignedTo();
  },
  dependentFunctionKeys: ['gmailLoaded', 'data.pipelines.initialized', 'data.streakSettings.initialized']
});
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 16964:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Pi: () => (/* binding */ _2),
/* harmony export */   tx: () => (/* binding */ _3),
/* harmony export */   zH: () => (/* binding */ _1)
/* harmony export */ });
// extracted by mini-css-extract-plugin
var _1 = "streak-mod__fDZ4OeTfyTXrkUEwIP1r";
var _2 = "streak-mod__hax9wj_gY4qNwja_84hQ";
var _3 = "streak-mod__phFo5MCWnTzVJWKl5WD1";



/***/ })

};
;
//# sourceMappingURL=https://storage.googleapis.com/streak-extension-sourcemaps/clientjs/clientjs.chunk.6303.868ea60dfac3b9a49112.js.map