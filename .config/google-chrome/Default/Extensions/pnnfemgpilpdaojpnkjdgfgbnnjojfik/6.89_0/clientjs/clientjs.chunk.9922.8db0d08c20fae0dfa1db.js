"use strict";
export const id = 9922;
export const ids = [9922,7341];
export const modules = {

/***/ 82513:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Nu: () => (/* binding */ UseSessionStorageValue),
/* harmony export */   co: () => (/* binding */ LEGACY_HOOK_getSessionStorageValue),
/* harmony export */   uU: () => (/* binding */ LEGACY_HOOK_setSessionStorageValue)
/* harmony export */ });
/* unused harmony export useSessionStorageValue */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44345);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17013);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _react_toolkit_hooks_useForceUpdate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10102);
/* harmony import */ var _react_toolkit_hooks_useEvent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(46547);
/* harmony import */ var _lib_utils_use_memo_compare__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(75051);
/* harmony import */ var _services_data_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5575);
/* harmony import */ var _sessionStorageContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(50781);
/* harmony import */ var _useLocalStorageValue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(81883);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(59718);









function getFinalKey(key, email) {
  return `useSessionStorageValue_${key}_${email}}`;
}
function useSessionStorageValue(key, defaultValue, options) {
  const [localValue, setLocalValue] = (0,_useLocalStorageValue__WEBPACK_IMPORTED_MODULE_6__/* .useLocalStorageValue */ .ZN)(key, defaultValue);
  const user = (0,_services_data_user__WEBPACK_IMPORTED_MODULE_8__/* .getUser */ .P)();
  const finalKey = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => getFinalKey(key, user.email), [key, user.email]);
  const sessionCtx = (0,_sessionStorageContext__WEBPACK_IMPORTED_MODULE_5__/* .useSessionStorageContext */ .Xp)();
  const forceUpdate = (0,_react_toolkit_hooks_useForceUpdate__WEBPACK_IMPORTED_MODULE_2__/* .useForceUpdate */ .N)();
  let sessionValue = sessionCtx.getValue(finalKey);
  if (sessionValue === null && options?.localStorageFallback && localValue !== null) {
    // copy localStorage value to sessionStorage if it's empty
    sessionCtx.setValue(finalKey, localValue);
    sessionValue = sessionCtx.getValue(finalKey);
  }
  const value = (0,_lib_utils_use_memo_compare__WEBPACK_IMPORTED_MODULE_4__/* .useMemoCompare */ .q)(sessionValue ?? (options?.localStorageFallback ? localValue : null) ?? defaultValue, lodash__WEBPACK_IMPORTED_MODULE_1__.isEqual);
  const setValue = (0,_react_toolkit_hooks_useEvent__WEBPACK_IMPORTED_MODULE_3__/* .useEvent */ .z)(newValue => {
    if (options?.localStorageFallback) {
      setLocalValue(newValue);
    }
    sessionCtx.setValue(finalKey, newValue instanceof Function ? newValue(value) : newValue);
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const sub = sessionCtx.stream.filter(e => e.key === finalKey).observe(() => forceUpdate());
    return () => sub.unsubscribe();
  }, [sessionCtx.stream, forceUpdate, finalKey]);
  return [value, setValue];
}

/**
 * @deprecated Use useSessionStorageValue instead
 */
function LEGACY_HOOK_getSessionStorageValue(key, defaultValue, options) {
  const user = (0,_services_data_user__WEBPACK_IMPORTED_MODULE_8__/* .getUser */ .P)();
  const finalKey = getFinalKey(key, user.email);
  return (0,_sessionStorageContext__WEBPACK_IMPORTED_MODULE_5__/* .LEGACY_CONTEXT_getSessionStorageValue */ .UX)(finalKey) ?? (options?.localStorageFallback ? (0,_useLocalStorageValue__WEBPACK_IMPORTED_MODULE_6__/* .LEGACY_HOOK_getLocalStorageValue */ .Wd)(key, defaultValue) : null) ?? defaultValue;
}

/**
 * @deprecated Use useSessionStorageValue instead
 */
function LEGACY_HOOK_setSessionStorageValue(key, value, options) {
  const user = (0,_services_data_user__WEBPACK_IMPORTED_MODULE_8__/* .getUser */ .P)();
  const finalKey = getFinalKey(key, user.email);
  (0,_sessionStorageContext__WEBPACK_IMPORTED_MODULE_5__/* .LEGACY_CONTEXT_setSessionStorageValue */ .g2)(finalKey, value);
  if (options?.localStorageFallback) {
    (0,_useLocalStorageValue__WEBPACK_IMPORTED_MODULE_6__/* .LEGACY_HOOK_setLocalStorageValue */ .iT)(key, value);
  }
}
function UseSessionStorageValue(props) {
  const [value, setValue] = useSessionStorageValue(props.cacheKey, props.defaultValue, props.options);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: props.children(value, setValue)
  });
}

/***/ }),

/***/ 80241:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ copyFieldOptions)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17013);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

function copyFieldOptions(fromPipeline, newPipeline) {
  const fromFields = fromPipeline.getFields();
  const newFields = newPipeline.getFields();
  for (let ii = 0; ii < fromFields.length; ii++) {
    const fromField = fromFields[ii];
    const newField = newFields[ii];
    switch (fromField.get('type')) {
      case 'DROPDOWN':
        {
          const fromDropdownSettings = fromField.get('dropdownSettings');
          const newDropdownSettings = {
            items: lodash__WEBPACK_IMPORTED_MODULE_0___default().flow(() => fromDropdownSettings.items.map(x => x?.name), x => lodash__WEBPACK_IMPORTED_MODULE_0___default().uniq(x))().map(function (name) {
              return {
                name: name
              };
            })
          };
          newField.set('dropdownSettings', newDropdownSettings);
          newField.save();
          break;
        }
      case 'TAG':
        {
          const fromTagSettings = fromField.get('tagSettings');
          const newTagSettings = {
            tags: lodash__WEBPACK_IMPORTED_MODULE_0___default().flow(() => fromTagSettings.tags ?? [], x => x.map(y => y?.tag), x => lodash__WEBPACK_IMPORTED_MODULE_0___default().uniq(x))().map(function (tagName) {
              return {
                tag: tagName
              };
            })
          };
          newField.set('tagSettings', newTagSettings);
          newField.save();
          break;
        }
      case 'FORMULA':
        {
          let formulaString = fromField.getFormula();
          if (formulaString.length != 0) {
            // Check and update for shifting STAGES
            const fromStageKeys = fromPipeline.get('stageOrder');
            const newStageKeys = newPipeline.get('stageOrder');
            if (areArrayItemsDifferent(fromStageKeys, newStageKeys) && isStageSpecificFormula(formulaString)) {
              const stageKeyMap = buildKeyMap(fromStageKeys, newStageKeys, formulaString);
              const formulaStringUpdated = doReplaceKeys(stageKeyMap, formulaString);
              formulaString = formulaStringUpdated;
            }
            // Check and update for shifting FIELDS
            const fromFieldKeys = fromPipeline.get('fields').map(fieldObject => fieldObject.key);
            const newFieldKeys = newPipeline.get('fields').map(fieldObject => fieldObject.key);
            if (areArrayItemsDifferent(fromFieldKeys, newFieldKeys)) {
              const fieldKeyMap = buildKeyMap(fromFieldKeys, newFieldKeys, formulaString);
              const formulaStringUpdated = doReplaceKeys(fieldKeyMap, formulaString);
              formulaString = formulaStringUpdated;
            }
            newField.set('defaultValue', formulaString);
            newField.save();
          }
          break;
        }
    }
  }
}
function areArrayItemsDifferent(fromArray, newArray) {
  return !fromArray.every((element, index) => element === newArray[index]);
}
function isStageSpecificFormula(formulaString) {
  return formulaString.includes('switch(col("stageKey")){ //STREAK_START_SWITCH\ncase "');
}
function getIndicesOfKeyInFormulaString(formulaStringValue, keyString) {
  const indices = [];
  let idx = 0;
  while (idx >= 0) {
    idx = formulaStringValue.indexOf(keyString, idx + 1);
    if (idx > 0) {
      indices.push(idx);
    }
  }
  return indices;
}
function replaceByIndex(formulaStringValue, replacementKey, replacementIndex) {
  return formulaStringValue.substring(0, replacementIndex) + replacementKey + formulaStringValue.substring(replacementIndex + replacementKey.length);
}
function passesValueMatchAndHardCodedStringTest(oldKeyValue, formulaStringValue, index) {
  const valueMatch = oldKeyValue === formulaStringValue.substring(index, index + oldKeyValue.length);
  // Streak puts consistent flags to indicate the beginning of a new "stage only" formula or column value.
  // These text flags are being used to ensure no one has a stage-or-field-key-similar number
  // in a formula that would be replaced undesirably.
  const isNotHardCoded = formulaStringValue.substring(index - 6, index) === 'case "' || formulaStringValue.substring(index - 6, index) === 'CTION ' || formulaStringValue.substring(index - 6, index) === "(col('";
  return valueMatch && isNotHardCoded;
}
function doReplaceKeys(keyMap, formulaStringValue) {
  let formulaStringManipulated = formulaStringValue;
  for (let j = 0; j < keyMap.length; j++) {
    const currKeyReplaceValue = keyMap[j].newKey;
    const replaceIndices = keyMap[j].indices;
    const oldKeyValue = keyMap[j].fromKey;
    for (let jj = 0; jj < replaceIndices.length; jj++) {
      if (passesValueMatchAndHardCodedStringTest(oldKeyValue, formulaStringValue, replaceIndices[jj])) {
        formulaStringManipulated = replaceByIndex(formulaStringValue, currKeyReplaceValue, replaceIndices[jj]);
        formulaStringValue = formulaStringManipulated;
      }
    }
  }
  return formulaStringManipulated;
}
function buildKeyMap(fromKeys, newKeys, formulaString) {
  const keyMap = [];
  for (let i = 0; i < fromKeys.length; i++) {
    if (fromKeys[i] != newKeys[i]) {
      const indices = getIndicesOfKeyInFormulaString(formulaString, fromKeys[i]);
      if (indices.length > 0) {
        const legitReplacementInfo = {
          fromKey: fromKeys[i],
          newKey: newKeys[i],
          indices: indices
        };
        keyMap.push(legitReplacementInfo);
      }
    }
  }
  return keyMap;
}

/***/ }),

/***/ 92831:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_data_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38672);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35091);
/* harmony import */ var _widgets_modal_confirmModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27337);
/* harmony import */ var _services_butterBarManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99329);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_data_data__WEBPACK_IMPORTED_MODULE_0__]);
_services_data_data__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





async function attemptToDeletePipeline(pipeline) {
  return _showDeletePipelineConfirmModal(pipeline);
}
async function _showCantDeletePipelineModal(pipeline) {
  const message = _services_locale_locale__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.getString('boxes_cannot_delete_pipeline_body', {
    pipeline: pipeline.displayNameText()
  });
  if (pipeline.isHidden()) {
    await (0,_widgets_modal_confirmModal__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({
      title: _services_locale_locale__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.getString('cannot_delete_pipeline'),
      confirmButtonText: _services_locale_locale__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.getString('ok'),
      hideCancel: true,
      bodyComponent: () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        children: message
      })
    });
    return false;
  }
  const {
    confirmClicked
  } = await (0,_widgets_modal_confirmModal__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({
    title: _services_locale_locale__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.getString('cannot_delete_pipeline'),
    confirmButtonText: _services_locale_locale__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.getString('hide_pipeline_instead'),
    bodyComponent: () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      children: [_services_locale_locale__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.getString('boxes_cannot_delete_pipeline_body', {
        pipeline: pipeline.displayNameText()
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("br", {}), _services_locale_locale__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.getString('considered_hiding_pipeline')]
    })
  });
  if (confirmClicked) {
    pipeline.setHidden(true);
    _services_butterBarManager__WEBPACK_IMPORTED_MODULE_3__["default"].showMessage(_services_locale_locale__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.getString('pipeline_hidden'));
  }
  return false;
}
async function _showDeletePipelineConfirmModal(pipeline) {
  const collaboratorsCount = pipeline.getAllPossibleAssignedToValues().length - 1;
  const savedViewsCount = pipeline.getSavedViewsManager().getOrderedSavedViews().length;
  const snippetsCount = _services_data_data__WEBPACK_IMPORTED_MODULE_0__["default"].getAllSnippets().filter(snippet => snippet.get('pipelineKey') === pipeline.key()).length;
  const {
    confirmClicked
  } = await (0,_widgets_modal_confirmModal__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({
    title: _services_locale_locale__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.getString('confirm_delete_title', {
      item: pipeline.displayNameText()
    }),
    confirmButtonText: _services_locale_locale__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.getString('ok'),
    bodyComponent: () => {
      return collaboratorsCount === 0 && snippetsCount === 0 && savedViewsCount === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.getString('delete_pipeline_warning_noSnippetsOrTeammates')
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        children: [_services_locale_locale__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.getString('delete_pipeline_warning') + ':', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("ul", {
          children: [collaboratorsCount > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("li", {
            children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.getString('delete_pipeline_warning_collaborators', {
              collaboratorsCount
            })
          }), savedViewsCount > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("li", {
            children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.getString('delete_pipeline_warning_savedViews', {
              savedViewsCount
            })
          }), snippetsCount > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("li", {
            children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.getString('delete_pipeline_warning_snippets', {
              snippetsCount
            })
          })]
        }), _services_locale_locale__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.getString('delete_pipeline_warning_prompt')]
      });
    }
  });
  if (confirmClicked) {
    try {
      await pipeline.delWithPromise();
    } catch {
      _services_data_data__WEBPACK_IMPORTED_MODULE_0__["default"].getAllPipelines().add(pipeline);
      _showCantDeletePipelineModal(pipeline);
    }
  }
  return confirmClicked;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (attemptToDeletePipeline);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 95578:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Od: () => (/* binding */ remove),
/* harmony export */   U2: () => (/* binding */ get),
/* harmony export */   t8: () => (/* binding */ set)
/* harmony export */ });
const navItemsCache = new Map();
const get = cacheKey => {
  const key = JSON.stringify(cacheKey);
  return navItemsCache.get(key);
};
const set = (cacheKey, navItem) => {
  const key = JSON.stringify(cacheKey);
  navItemsCache.set(key, navItem);
};
const remove = cacheKey => {
  const key = JSON.stringify(cacheKey);
  navItemsCache.delete(key);
};

/***/ }),

/***/ 47341:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   navMenuController: () => (/* binding */ navMenuController)
/* harmony export */ });
/* harmony import */ var _streakyc_common_core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77294);
/* harmony import */ var kefir__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98137);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69980);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65887);
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(42383);
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_dependencyManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(54612);
/* harmony import */ var _lib_utils_debounceKefirStreamInEventLoop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(34305);
/* harmony import */ var _services_localSettings_localSettings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(55868);
/* harmony import */ var _services_tracker_tracker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(13778);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(35091);
/* harmony import */ var _services_data_data__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(38672);
/* harmony import */ var _pipelineMenu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(50931);
/* harmony import */ var _savedViewsMenu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(65110);
/* harmony import */ var _widgets_react_material_icon_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(84347);
/* harmony import */ var _services_accessManager_accessManager__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(24067);
/* harmony import */ var _widgets_newPipeline_createNewPipeline__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(24113);
/* harmony import */ var _services_userSettings_userSettings__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(22876);
/* harmony import */ var _core_appShell__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(81022);
/* harmony import */ var _streakyc_images_logo_dark_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(76415);
/* harmony import */ var _streakyc_images_logo_vivid_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(96697);
/* harmony import */ var _streakyc_images_logo_light_default_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(74020);
/* harmony import */ var _widgets_react_loadingSpinner__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(72905);
/* harmony import */ var _navItemsCache__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(95578);
/* harmony import */ var _core_enabledFeaturesController__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(50452);
/* harmony import */ var _navMenuController_module_css__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(74875);
/* harmony import */ var _core_routing__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(58556);
/* harmony import */ var _pixelTracker_constants__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(52354);
/* harmony import */ var _pipeline__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(24568);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_data_data__WEBPACK_IMPORTED_MODULE_10__, _pipelineMenu__WEBPACK_IMPORTED_MODULE_11__, _savedViewsMenu__WEBPACK_IMPORTED_MODULE_12__, _services_accessManager_accessManager__WEBPACK_IMPORTED_MODULE_14__, _widgets_newPipeline_createNewPipeline__WEBPACK_IMPORTED_MODULE_15__, _services_userSettings_userSettings__WEBPACK_IMPORTED_MODULE_16__, _core_enabledFeaturesController__WEBPACK_IMPORTED_MODULE_23__, _pipeline__WEBPACK_IMPORTED_MODULE_25__]);
([_services_data_data__WEBPACK_IMPORTED_MODULE_10__, _pipelineMenu__WEBPACK_IMPORTED_MODULE_11__, _savedViewsMenu__WEBPACK_IMPORTED_MODULE_12__, _services_accessManager_accessManager__WEBPACK_IMPORTED_MODULE_14__, _widgets_newPipeline_createNewPipeline__WEBPACK_IMPORTED_MODULE_15__, _services_userSettings_userSettings__WEBPACK_IMPORTED_MODULE_16__, _core_enabledFeaturesController__WEBPACK_IMPORTED_MODULE_23__, _pipeline__WEBPACK_IMPORTED_MODULE_25__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





























const debugLog = debug__WEBPACK_IMPORTED_MODULE_4___default()('streak:nav-menu-controller');
const NUM_SAVED_VIEWS = 4;
const trackingPrefix = 'appMenu.';
const themedMaterialIconUrl = function (icon, color) {
  let scaling = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;
  return `https://www.gstatic.com/images/icons/material/system_gm/${scaling}x/${icon}_${color}_24dp.png`;
};
class NavMenuController {
  #streakPanelView;
  #pipelineToNavItemMap;
  #pipelinesNavItem;
  #hiddenPipelinesNavItem;
  constructor() {
    this.#streakPanelView = null;
    this.#pipelineToNavItemMap = {};
    this.#pipelinesNavItem = null;
    this.#hiddenPipelinesNavItem = null;
  }
  get streakPanelView() {
    return this.#streakPanelView;
  }
  async init() {
    await this.#listenForDependencies();
  }
  async #listenForDependencies() {
    const leftNavEnabled = _core_enabledFeaturesController__WEBPACK_IMPORTED_MODULE_23__.EnabledFeatures.isExperimentEnabled('leftNavRevampExp') || _core_enabledFeaturesController__WEBPACK_IMPORTED_MODULE_23__.EnabledFeatures.isExperimentEnabled('contactsViewExp') || _core_enabledFeaturesController__WEBPACK_IMPORTED_MODULE_23__.EnabledFeatures.isExperimentEnabled('orgsViewExp');
    if (leftNavEnabled) {
      this.#streakPanelView = (await this.#setupNavMenuView()) ?? null;
      _lib_dependencyManager__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP.addFunction({
        functionKey: 'navMenu.menuNavItemsInitialized',
        functionReference: async () => {
          if (!this.#streakPanelView) {
            debugLog('"collapsible panel view/nav item view" not found');
            return;
          }
          this.#setupNavMenuItems(this.#streakPanelView);
          this.#pipelinesNavItem = await this.#setupPipelinesNavMenuItem(this.#streakPanelView);
        },
        functionContext: this,
        dependentFunctionKeys: ['userLoggedIn']
      });
      // TODO: REMOVE when leftNavRevampExp is enabled for all users
      // swap the --gmail-icon-color to this value
      // Use the current native Gmail non-active nav item icon color
      document.documentElement.style.setProperty('--gmail-icon-color', 'rgb(68 71 70)');
    } else {
      // TODO: REMOVE when leftNavRevampExp is enabled for all users
      _lib_dependencyManager__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP.addFunction({
        functionKey: 'navMenu.menuNavItemsInitialized',
        functionReference: this.#createPipelinesNavItem,
        functionContext: this,
        dependentFunctionKeys: ['userLoggedIn']
      });
    }
    _lib_dependencyManager__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP.addFunction({
      functionKey: 'navMenu.pipelinesLoaded',
      functionReference: this.#setupPipelines,
      functionContext: this,
      dependentFunctionKeys: ['data.pipelines.initialized', 'navMenu.menuNavItemsInitialized', 'pipelineAccessManagerControllerInitialized']
    });
    this.#bindToDataEvents();
  }

  // REMOVE START
  async #setUpPipelinesAppMenuItem() {
    // TODO: figure out location and get proper icons
    const pipelineAppMenu = _streakyc_common_core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_0__.inboxSDK.AppMenu.addMenuItem({
      name: _services_locale_locale__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z.getString('pipelines'),
      onClick: () => {
        _services_tracker_tracker__WEBPACK_IMPORTED_MODULE_8__["default"].track(trackingPrefix + "pipeline.appMenuItemClick");
        if (!location.hash.startsWith('#pipeline')) {
          _streakyc_common_core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_0__.inboxSDK.Router.goto(_core_routing__WEBPACK_IMPORTED_MODULE_24__/* .StreakCustomRoute */ .ld.PIPELINES_LATEST_VIEWED);
        }
      },
      insertIndex: 1,
      isRouteActive: routeView => {
        const routeViewID = routeView.getRouteID();
        if (/^pipelines?\//.test(routeViewID ?? '')) return true;
        return routeViewID === _core_routing__WEBPACK_IMPORTED_MODULE_24__/* .StreakCustomRoute */ .ld.LOADING_ID;
      },
      iconUrl: {
        lightTheme: {
          active: _streakyc_images_logo_vivid_png__WEBPACK_IMPORTED_MODULE_19__,
          default: _streakyc_images_logo_light_default_png__WEBPACK_IMPORTED_MODULE_20__
        },
        darkTheme: {
          active: _streakyc_images_logo_vivid_png__WEBPACK_IMPORTED_MODULE_19__,
          default: _streakyc_images_logo_dark_png__WEBPACK_IMPORTED_MODULE_18__
        }
      }
    });
    const themedMaterialIconUrl = function (icon, color) {
      let scaling = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;
      return `https://www.gstatic.com/images/icons/material/system_gm/${scaling}x/${icon}_${color}_24dp.png`;
    };
    const markup = react_dom_server__WEBPACK_IMPORTED_MODULE_3__.renderToStaticMarkup(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx)(_widgets_react_loadingSpinner__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {}));
    const panel = await pipelineAppMenu.addCollapsiblePanel({
      loadingIcon: markup,
      primaryButton: {
        name: _services_locale_locale__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z.getString('new_pipeline'),
        onClick: async () => {
          _services_tracker_tracker__WEBPACK_IMPORTED_MODULE_8__["default"].track(trackingPrefix + "pipeline.primaryButtonClick");
          const ret = await (0,_widgets_newPipeline_createNewPipeline__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .ZP)('appMenuContainer');
          const pipeline = await ret?.savePromise;
          if (pipeline) {
            _streakyc_common_core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_0__.inboxSDK.Router.goto(pipeline.link());
          }
        },
        iconUrl: {
          lightTheme: themedMaterialIconUrl('add', 'black'),
          darkTheme: {
            panelDefault: themedMaterialIconUrl('add', 'black'),
            panelHovered: themedMaterialIconUrl('add', 'white')
          }
        }
      }
    });
    return panel;
  }
  async #createPipelinesNavItem() {
    const pipelines = _services_data_data__WEBPACK_IMPORTED_MODULE_10__["default"].getAllPipelines();
    const isAppMenuShown = await _streakyc_common_core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_0__.inboxSDK.AppMenu.isShown();
    if (isAppMenuShown) {
      _services_tracker_tracker__WEBPACK_IMPORTED_MODULE_8__["default"].track(trackingPrefix + "shown");
      const panel = await this.#setUpPipelinesAppMenuItem();
      this.#pipelinesNavItem = panel ?? null;
      await _lib_dependencyManager__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP.whenAllFunctionsFinished(['userSettingsInitialized']);
      pipelines.afterLoad().then(() => {
        if (this.#pipelinesNavItem && 'setLoading' in this.#pipelinesNavItem) {
          this.#pipelinesNavItem.setLoading(false);
        }
      });
      return;
    }
    _services_tracker_tracker__WEBPACK_IMPORTED_MODULE_8__["default"].track(trackingPrefix + "notShown");
    await _lib_dependencyManager__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP.whenAllFunctionsFinished(['userSettingsInitialized']);
    debugLog('_createPipelinesNavItem');
    const descriptor = kefir__WEBPACK_IMPORTED_MODULE_1__.fromPromise(pipelines.afterLoad()).toProperty(() => null).map(() => pipelines.getHasLoaded()).skipDuplicates().map(hasLoaded => {
      if (hasLoaded) {
        debugLog('pipeline loaded, button ready');
        return {
          name: _services_locale_locale__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z.getString('streak_pipelines'),
          iconClass: 'bentoBoxIndicator',
          orderHint: 3,
          onClick: () => _services_tracker_tracker__WEBPACK_IMPORTED_MODULE_8__["default"].track('pipelineDropdown.click'),
          accessory: {
            type: 'CREATE',
            onClick: function () {
              _services_tracker_tracker__WEBPACK_IMPORTED_MODULE_8__["default"].track('createNewPipeline.click');
              (0,_widgets_newPipeline_createNewPipeline__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .ZP)('leftNav').then(ret => ret ? ret.savePromise : null).then(pipeline => {
                if (pipeline) {
                  _streakyc_common_core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_0__.inboxSDK.Router.goto(pipeline.link());
                }
              });
            }
          }
        };
      } else {
        debugLog('pipeline not loaded, button in loading state');
        return {
          name: _services_locale_locale__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z.getString('streak_pipelines'),
          iconClass: 'streak__navMenu_loading',
          orderHint: 3
        };
      }
    });
    this.#pipelinesNavItem = _streakyc_common_core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_0__.inboxSDK.NavMenu.addNavItem(descriptor);
    this.#pipelinesNavItem?.on('expanded', function () {
      _services_data_data__WEBPACK_IMPORTED_MODULE_10__["default"].getAllPipelines().refresh();
    });
  }
  // REMOVE END

  async #setupNavMenuView() {
    const isAppMenuShown = await _streakyc_common_core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_0__.inboxSDK.AppMenu.isShown();
    const isRouteViewAMatch = routeView => {
      const routeViewID = routeView.getRouteID();
      if (!routeViewID) {
        return false;
      }
      const routeViewParams = routeView.getParams();
      if (['sequence', 'pipeline', _core_routing__WEBPACK_IMPORTED_MODULE_24__/* .StreakCustomRoute */ .ld.CONTACTS, _core_routing__WEBPACK_IMPORTED_MODULE_24__/* .StreakCustomRoute */ .ld.ORGS, _core_routing__WEBPACK_IMPORTED_MODULE_24__/* .StreakCustomRoute */ .ld.RECENTLY_VIEWED].some(route => routeViewID.startsWith(route))) {
        return true;
      }
      if (routeViewID.startsWith(_streakyc_common_core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_0__.inboxSDK.Router.NativeRouteIDs.SEARCH)) {
        return routeViewParams?.query === _core_routing__WEBPACK_IMPORTED_MODULE_24__/* .StreakSearchQuery */ .ZY.ALL_TRACKED_EMAILS_SEARCH_TERM;
      }
      return false;
    };
    if (!isAppMenuShown) {
      const menuItem = _streakyc_common_core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_0__.inboxSDK.NavMenu.addNavItem({
        name: _services_locale_locale__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z.getString('streak'),
        iconUrl: _streakyc_images_logo_vivid_png__WEBPACK_IMPORTED_MODULE_19__ // todo: when route doesn't match, use logoLightDefault
      });
      return menuItem;
    }
    const LAST_ROUTE_CACHE_KEY = 'last_nav_menu_active_route';
    const streakAppMenu = _streakyc_common_core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_0__.inboxSDK.AppMenu.addMenuItem({
      name: _services_locale_locale__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z.getString('streak'),
      insertIndex: 1,
      isRouteActive: routeView => {
        if (isRouteViewAMatch(routeView)) {
          return true;
        }
        const routeViewID = routeView.getRouteID();
        return routeViewID === _core_routing__WEBPACK_IMPORTED_MODULE_24__/* .StreakCustomRoute */ .ld.LOADING_ID;
      },
      onClick: () => {
        const lastMatchedRoute = _services_localSettings_localSettings__WEBPACK_IMPORTED_MODULE_7__.InMemorySettings.get(LAST_ROUTE_CACHE_KEY);
        if (lastMatchedRoute?.routeId) {
          _streakyc_common_core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_0__.inboxSDK.Router.goto(lastMatchedRoute.routeId, lastMatchedRoute.params);
        }
      },
      iconUrl: {
        lightTheme: {
          active: _streakyc_images_logo_vivid_png__WEBPACK_IMPORTED_MODULE_19__,
          default: _streakyc_images_logo_light_default_png__WEBPACK_IMPORTED_MODULE_20__
        },
        darkTheme: {
          active: _streakyc_images_logo_vivid_png__WEBPACK_IMPORTED_MODULE_19__,
          default: _streakyc_images_logo_dark_png__WEBPACK_IMPORTED_MODULE_18__
        }
      }
    });
    _streakyc_common_core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_0__.inboxSDK.Router.handleAllRoutes(routeView => {
      const routeViewID = routeView.getRouteID();
      if (isRouteViewAMatch(routeView) && routeViewID) {
        _services_localSettings_localSettings__WEBPACK_IMPORTED_MODULE_7__.InMemorySettings.set(LAST_ROUTE_CACHE_KEY, {
          routeId: routeViewID,
          params: routeView.getParams()
        });
      }
    });
    const panel = await streakAppMenu.addCollapsiblePanel({
      primaryButton: {
        name: _services_locale_locale__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z.getString('new_pipeline'),
        onClick: async () => {
          _services_tracker_tracker__WEBPACK_IMPORTED_MODULE_8__["default"].track(trackingPrefix + "pipeline.primaryButtonClick");
          const ret = await (0,_widgets_newPipeline_createNewPipeline__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .ZP)('appMenuContainer');
          const pipeline = await ret?.savePromise;
          if (pipeline) {
            _streakyc_common_core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_0__.inboxSDK.Router.goto(pipeline.link());
          }
        },
        iconUrl: {
          lightTheme: themedMaterialIconUrl('add', 'black'),
          darkTheme: {
            panelDefault: themedMaterialIconUrl('add', 'black'),
            panelHovered: themedMaterialIconUrl('add', 'white')
          }
        }
      }
    });
    return panel;
  }
  #setupNavMenuItems(view) {
    // this.#streakAppMenuPanel?.addNavItem({
    //   name: Locale.getString('home'),
    //   iconClass: 'navItemIcon',
    //   iconLiga: NavMenuIcons.homeNavIndicator,
    //   routeID: 'streak/home',
    //   onClick: () => {
    //     console.log('home clicked');
    //   },
    // });

    view.addNavItem({
      name: _services_locale_locale__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z.getString('tracked_emails'),
      iconClass: _navMenuController_module_css__WEBPACK_IMPORTED_MODULE_27__/* .navItemIcon */ .U,
      iconLiga: "track_changes",
      routeID: _streakyc_common_core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_0__.inboxSDK.Router.NativeRouteIDs.SEARCH,
      secondaryRoutes: [{
        routeID: _core_routing__WEBPACK_IMPORTED_MODULE_24__/* .StreakCustomRoute */ .ld.RECENTLY_VIEWED
      }],
      routeParams: {
        query: _core_routing__WEBPACK_IMPORTED_MODULE_24__/* .StreakSearchQuery */ .ZY.ALL_TRACKED_EMAILS_SEARCH_TERM,
        page: 1
      },
      spacingAfter: true,
      orderHint: 4,
      onClick: () => {
        const lastMatchedRoute = _services_localSettings_localSettings__WEBPACK_IMPORTED_MODULE_7__.InMemorySettings.get(_pixelTracker_constants__WEBPACK_IMPORTED_MODULE_28__/* .LAST_NAV_ITEM_TRACKED_EMAIL_ROUTE */ .w);
        if (lastMatchedRoute?.routeId) {
          _streakyc_common_core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_0__.inboxSDK.Router.goto(lastMatchedRoute.routeId, lastMatchedRoute.params);
        }
      }
    });
  }
  async #setupPipelinesNavMenuItem(view) {
    const pipelines = _services_data_data__WEBPACK_IMPORTED_MODULE_10__["default"].getAllPipelines();
    _services_tracker_tracker__WEBPACK_IMPORTED_MODULE_8__["default"].track(trackingPrefix + "shown");
    await _lib_dependencyManager__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP.whenAllFunctionsFinished(['userSettingsInitialized']);
    debugLog('_createPipelinesNavItem');
    await pipelines.afterLoad();
    const pipelinesNavItem = view.addNavItem({
      type: 'SECTION',
      name: _services_locale_locale__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z.getString('pipelines'),
      sectionTooltip: _services_locale_locale__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z.getString('new_pipeline'),
      onClick: async () => {
        _services_tracker_tracker__WEBPACK_IMPORTED_MODULE_8__["default"].track(trackingPrefix + "pipeline.categoryButtonClick");
        const ret = await (0,_widgets_newPipeline_createNewPipeline__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .ZP)('appMenuContainer');
        const pipeline = await ret?.savePromise;
        if (pipeline) {
          _streakyc_common_core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_0__.inboxSDK.Router.goto(pipeline.link());
        }
      }
    });
    return pipelinesNavItem;
  }
  #setupPipelines() {
    _services_data_data__WEBPACK_IMPORTED_MODULE_10__["default"].getAllPipelines().forEach(this.#setupPipeline.bind(this));
  }
  #bindToDataEvents() {
    const pipelinesAddedStream = _services_data_data__WEBPACK_IMPORTED_MODULE_10__["default"].getAllPipelines().getEventStream().filter(function (notification) {
      return notification.eventName === 'add';
    }).map(_ref => {
      let {
        model
      } = _ref;
      return model;
    });
    pipelinesAddedStream.filter(function (pipeline) {
      return !!pipeline.key();
    }).onValue(pipeline => this.#setupPipeline(pipeline));
    pipelinesAddedStream.filter(function (pipeline) {
      return !pipeline.key();
    }).flatMap(function (pipeline) {
      return pipeline.getEventStream().filter(function (notification) {
        return notification.eventName === 'keyChanged';
      }).take(1).map(() => pipeline);
    }).onValue(pipeline => {
      _services_userSettings_userSettings__WEBPACK_IMPORTED_MODULE_16__.UserSettings.set('leftLink/pipelineSort', [pipeline.key(), ...(_services_userSettings_userSettings__WEBPACK_IMPORTED_MODULE_16__.UserSettings.get('leftLink/pipelineSort') || [])]);
      _services_userSettings_userSettings__WEBPACK_IMPORTED_MODULE_16__.UserSettings.save(true);
      this.#setupPipeline(pipeline);
      _services_userSettings_userSettings__WEBPACK_IMPORTED_MODULE_16__.UserSettings.get('leftLink/pipelineSort').slice(1).forEach(pipelineKey => {
        const orderedPipeline = _services_data_data__WEBPACK_IMPORTED_MODULE_10__["default"].getPipeline(pipelineKey);
        orderedPipeline && orderedPipeline.postNotification('navMenuOrderChanged');
      });
    });
    _services_data_data__WEBPACK_IMPORTED_MODULE_10__["default"].getAllPipelines().getEventStream().filter(function (notification) {
      return notification.eventName === 'remove';
    }).onValue(_ref2 => {
      let {
        model
      } = _ref2;
      return this.#pipelineRemoved(model);
    });

    // Scroll to active nav menu item route when navigating to a pipeline via URL or browser back/forward or commands palette
    _streakyc_common_core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_0__.inboxSDK.Router.handleAllRoutes(routeView => {
      const routeId = routeView.getRouteID();
      switch (routeId) {
        case _core_routing__WEBPACK_IMPORTED_MODULE_24__/* .StreakCustomRoute */ .ld.PIPELINE:
          {
            const pipelineKey = routeView.getParams().key;
            const pipeline = _services_data_data__WEBPACK_IMPORTED_MODULE_10__["default"].getPipeline(pipelineKey);
            if (!pipeline) return;
            const navItemView = _navItemsCache__WEBPACK_IMPORTED_MODULE_22__/* .get */ .U2([pipelineKey]);
            navItemView?.getElement().then(element => {
              element?.scrollIntoViewIfNeeded();
            });
            break;
          }
        case _core_routing__WEBPACK_IMPORTED_MODULE_24__/* .StreakCustomRoute */ .ld.PIPELINE_SAVEDVIEW:
          {
            const {
              key: pipelineKey,
              viewKey
            } = routeView.getParams();
            const pipeline = _services_data_data__WEBPACK_IMPORTED_MODULE_10__["default"].getPipeline(pipelineKey);
            const savedView = pipeline?.getSavedViewsManager().getSavedView(viewKey);
            if (!savedView) {
              return;
            }
            const navItemView = _navItemsCache__WEBPACK_IMPORTED_MODULE_22__/* .get */ .U2([pipelineKey]);
            if (!navItemView) return;
            if (navItemView.isCollapsed()) {
              // The parent nav item is collapsed so we scroll to it instead of the saved view nav item
              navItemView.getElement().then(element => {
                element?.scrollIntoViewIfNeeded();
              });
            } else {
              // Scroll to saved view nav item
              const savedViewNavItemView = _navItemsCache__WEBPACK_IMPORTED_MODULE_22__/* .get */ .U2([pipelineKey, viewKey]);
              savedViewNavItemView?.getElement().then(element => {
                element?.scrollIntoViewIfNeeded();
              });
            }
            break;
          }
      }
    });
  }
  #setupPipeline(pipeline) {
    if (this.#pipelineToNavItemMap[pipeline.key()]) {
      const navItem = this.#pipelineToNavItemMap[pipeline.key()];
      if (navItem != null) {
        navItem.remove();
      }
    }
    const destroyPool = kefir__WEBPACK_IMPORTED_MODULE_1__.pool();
    const navDescriptorGenerator = _getPipelineNavDescriptorGenerator(pipeline, destroyPool);
    const pipelineHolder = this.#getPipelineHolder(pipeline);
    if (!pipelineHolder) {
      return;
    }
    const navItemView = pipelineHolder.addNavItem(pipeline.getEventStream().filter(function (notification) {
      return notification.eventName === 'set' && notification.property === 'name' || notification.eventName === 'navMenuOrderChanged';
    }).toProperty(() => null).map(navDescriptorGenerator));
    _navItemsCache__WEBPACK_IMPORTED_MODULE_22__/* .set */ .t8([pipeline.key()], navItemView);
    destroyPool.plug(kefir__WEBPACK_IMPORTED_MODULE_1__.fromEvents(navItemView, 'destroy'));
    navItemView.setCollapsed(_services_localSettings_localSettings__WEBPACK_IMPORTED_MODULE_7__["default"].get('leftLink/savedViewCollapseState/' + pipeline.key()) === false);
    navItemView.on('collapsed', function () {
      _services_localSettings_localSettings__WEBPACK_IMPORTED_MODULE_7__["default"].set('leftLink/savedViewCollapseState/' + pipeline.key(), false);
    });
    navItemView.on('expanded', function () {
      _services_localSettings_localSettings__WEBPACK_IMPORTED_MODULE_7__["default"].set('leftLink/savedViewCollapseState/' + pipeline.key(), true);
    });
    const pipelineBoxes = _services_data_data__WEBPACK_IMPORTED_MODULE_10__["default"].getPipelineBoxes(pipeline.key());
    if (pipelineBoxes.getHasLoaded()) this.#setupSavedViews(pipeline, navItemView);
    this.#pipelineToNavItemMap[pipeline.key()] = navItemView;

    //when hidden settings changed, or saved views added/removed then remove and readd pipeline

    (0,_lib_utils_debounceKefirStreamInEventLoop__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(pipeline.getEventStream().filter(notification => ['uiSettingChanged', 'hiddenSettingChanged', 'savedViewAdded', 'savedViewRemoved', 'savedViewsReorder', 'savedViewsSort', 'savedViewStarStateChanged'].includes(notification.eventName) || notification.eventName === 'set' && notification.property === 'uiSettings')).merge(pipelineBoxes.getHasLoaded() ? kefir__WEBPACK_IMPORTED_MODULE_1__.never() : kefir__WEBPACK_IMPORTED_MODULE_1__.fromPromise(pipelineBoxes.afterLoad())).map(() => pipeline).take(1).map(pipeline => {
      this.#pipelineRemoved(pipeline);
      return pipeline;
    }).onValue(pipeline => this.#setupPipeline(pipeline));
  }
  #pipelineRemoved(pipeline) {
    const navItem = this.#pipelineToNavItemMap[pipeline.key()];
    if (navItem) {
      navItem.remove();
    }
    this.#pipelineToNavItemMap[pipeline.key()] = null;
    _navItemsCache__WEBPACK_IMPORTED_MODULE_22__/* .remove */ .Od([pipeline.key()]);
    if (this.#hiddenPipelinesNavItem && !(_services_data_data__WEBPACK_IMPORTED_MODULE_10__["default"].getAllPipelines() ?? []).some(pipeline => pipeline.isHidden())) {
      this.#hiddenPipelinesNavItem.remove();
      this.#hiddenPipelinesNavItem = null;
    }
  }
  #setupSavedViews(pipeline, navItemView) {
    if (_services_accessManager_accessManager__WEBPACK_IMPORTED_MODULE_14__["default"].isAccessAllowed(pipeline, 'SavedView', 'GET')) {
      const savedViews = pipeline.getSavedViewsManager().getOrderedSavedViews() ?? [];
      const starredSavedViews = savedViews.filter(savedView => savedView.isStarred());
      const numToDisplay = Math.max(NUM_SAVED_VIEWS, starredSavedViews.length);
      const numSavedViews = savedViews.length;
      savedViews.slice(0, numToDisplay).forEach(savedView => this.#setupSavedView(pipeline, navItemView, savedView));
      if (numToDisplay < numSavedViews) {
        if (numSavedViews === numToDisplay + 1) {
          this.#setupSavedView(pipeline, navItemView, savedViews.at(-1));
        } else {
          this.#addManageItem(pipeline, navItemView, savedViews.length);
        }
      }
    }
    const unsavedView = pipeline.getSavedViewsManager().getUnsavedView();
    if (unsavedView != null) {
      this.#setupSavedView(pipeline, navItemView, unsavedView);
    }
  }
  #setupSavedView(pipeline, pipelineNavItemView, savedView) {
    const savedViewKey = savedView.getViewKey();
    const navDescriptorGenerator = _getSavedViewNavDescriptorGenerator(pipeline, savedViewKey);
    const savedViewNavItem = pipelineNavItemView.addNavItem(pipeline.getEventStream().filter(notification => notification.eventName === 'savedViewChanged' && notification.viewKey === savedViewKey).map(navDescriptorGenerator).merge(kefir__WEBPACK_IMPORTED_MODULE_1__.constant(navDescriptorGenerator())));
    _navItemsCache__WEBPACK_IMPORTED_MODULE_22__/* .set */ .t8([pipeline.key(), savedViewKey], savedViewNavItem);
    savedViewNavItem.on('destroy', () => {
      _navItemsCache__WEBPACK_IMPORTED_MODULE_22__/* .remove */ .Od([pipeline.key(), savedViewKey]);
    });
  }
  #addManageItem(pipeline, pipelineNavItemView, numberOfSavedViews) {
    pipelineNavItemView.addNavItem({
      iconClass: 'streak__navMenu_icon manageSavedViews',
      name: _services_locale_locale__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z.getString('see_all', {
        number: numberOfSavedViews
      }),
      routeID: 'savedviews/:key',
      routeParams: {
        key: pipeline.key()
      },
      type: _streakyc_common_core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_0__.inboxSDK.NavMenu.NavItemTypes.LINK
    });
  }
  #getPipelineHolder(pipeline) {
    if (pipeline.isHidden()) {
      return this.#getHiddenPipelinesHolder();
    } else {
      return this.#pipelinesNavItem;
    }
  }
  #getHiddenPipelinesHolder() {
    if (!this.#hiddenPipelinesNavItem) {
      const pipelineNavItem = this.#pipelinesNavItem;
      if (pipelineNavItem != null) {
        const hiddenPipelinesNavItem = this.#hiddenPipelinesNavItem = pipelineNavItem.addNavItem({
          name: _services_locale_locale__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z.getString('left_link_hidden_pipelines'),
          type: _streakyc_common_core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_0__.inboxSDK.NavMenu.NavItemTypes.GROUPER
        }) ?? null;
        hiddenPipelinesNavItem.setCollapsed(true);
      }
    }
    return this.#hiddenPipelinesNavItem;
  }
}
function _getPipelineNavDescriptorGenerator(pipeline, destroyStream) {
  const pipelineIconElement = document.createElement('div');
  const leftNavEnabled = _core_enabledFeaturesController__WEBPACK_IMPORTED_MODULE_23__.EnabledFeatures.isExperimentEnabled('leftNavRevampExp') || _core_enabledFeaturesController__WEBPACK_IMPORTED_MODULE_23__.EnabledFeatures.isExperimentEnabled('contactsViewExp') || _core_enabledFeaturesController__WEBPACK_IMPORTED_MODULE_23__.EnabledFeatures.isExperimentEnabled('orgsViewExp');
  if (!leftNavEnabled) {
    // TODO: REMOVE when leftNavRevampExp is enabled for all users
    pipelineIconElement.className = 'streak__navMenu_pipelineIconWrapper';
  }
  destroyStream.onValue(() => {
    if (!leftNavEnabled) {
      // TODO: REMOVE when leftNavRevampExp is enabled for all users
      react_dom__WEBPACK_IMPORTED_MODULE_2__.unmountComponentAtNode(pipelineIconElement);
    }
  });
  return function () {
    const sortPosition = (0,_pipeline__WEBPACK_IMPORTED_MODULE_25__/* .getSortedPipelinesMap */ .cj)().get(pipeline.key())?.index ?? -1;
    const pipelineColor = pipeline.isDefaultColor() ? {} : pipeline.getColor();
    const pipelineIconName = pipeline.getIcon();
    const leftNavEnabled = _core_enabledFeaturesController__WEBPACK_IMPORTED_MODULE_23__.EnabledFeatures.isExperimentEnabled('leftNavRevampExp') || _core_enabledFeaturesController__WEBPACK_IMPORTED_MODULE_23__.EnabledFeatures.isExperimentEnabled('contactsViewExp') || _core_enabledFeaturesController__WEBPACK_IMPORTED_MODULE_23__.EnabledFeatures.isExperimentEnabled('orgsViewExp');
    if (leftNavEnabled) {
      pipelineIconElement.innerHTML = `<div style="color: ${pipelineColor.backgroundColor}" class="${_navMenuController_module_css__WEBPACK_IMPORTED_MODULE_27__/* .pipelineNavItemIcon */ .j}">${pipelineIconName}</div>`;
    } else {
      // TODO: REMOVE when leftNavRevampExp is enabled for all users
      (0,_core_appShell__WEBPACK_IMPORTED_MODULE_17__/* .renderWithAppShell */ .oC)(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx)(_widgets_react_material_icon_icon__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
        style: {
          color: pipelineColor.backgroundColor
        },
        materialIconName: pipelineIconName,
        isOutline: true,
        mini: true,
        className: "streak__navMenu_pipelineIcon"
      }), pipelineIconElement);
    }
    if (_services_data_data__WEBPACK_IMPORTED_MODULE_10__["default"].getPipelineBoxes(pipeline.key()).getHasLoaded()) {
      return {
        name: pipeline.displayNameText(),
        orderHint: sortPosition,
        routeID: _core_routing__WEBPACK_IMPORTED_MODULE_24__/* .StreakCustomRoute */ .ld.PIPELINE,
        iconElement: pipelineIconElement,
        routeParams: {
          key: pipeline.key()
        },
        expanderForegroundColor: pipelineColor.foregroundColor,
        backgroundColor: pipelineColor.backgroundColor,
        onClick: function () {
          pipeline.getSavedViewsManager().setActiveSavedViewKey(null);
          _services_tracker_tracker__WEBPACK_IMPORTED_MODULE_8__["default"].track('pipeline.click');
        },
        accessory: {
          type: 'DROPDOWN_BUTTON',
          buttonBackgroundColor: pipelineColor.backgroundColor,
          buttonForegroundColor: pipelineColor.foregroundColor,
          //
          onClick: event => {
            (0,_core_appShell__WEBPACK_IMPORTED_MODULE_17__/* .renderWithAppShell */ .oC)(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx)(_pipelineMenu__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
              pipeline: pipeline,
              closeDropdown: () => event.dropdown.close()
            }), event.dropdown.el);
            event.dropdown.on('destroy', () => react_dom__WEBPACK_IMPORTED_MODULE_2__.unmountComponentAtNode(event.dropdown.el));
          }
        }
      };
    } else {
      return {
        name: pipeline.displayNameText(),
        orderHint: sortPosition,
        routeID: _core_routing__WEBPACK_IMPORTED_MODULE_24__/* .StreakCustomRoute */ .ld.PIPELINE,
        routeParams: {
          key: pipeline.key()
        },
        onClick: function () {
          pipeline.getSavedViewsManager().setActiveSavedViewKey(null);
        },
        iconClass: 'streak__navMenu_loading'
      };
    }
  };
}
function _getSavedViewNavDescriptorGenerator(pipeline, viewKey) {
  return function () {
    const savedView = pipeline.getSavedViewsManager().getSavedView(viewKey);
    if (savedView == null) {
      return null;
    }
    const accessory = savedView.isUnsaved() ? null : {
      type: 'DROPDOWN_BUTTON',
      onClick: function (event) {
        if (savedView == null) {
          return;
        }
        (0,_core_appShell__WEBPACK_IMPORTED_MODULE_17__/* .renderWithAppShell */ .oC)(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx)(_savedViewsMenu__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
          pipeline: pipeline,
          savedView: savedView
        }), event.dropdown.el);
        event.dropdown.on('destroy', () => react_dom__WEBPACK_IMPORTED_MODULE_2__.unmountComponentAtNode(event.dropdown.el));
      }
    };
    return {
      name: savedView.displayNameText(),
      routeID: 'pipeline/:key/:viewKey',
      routeParams: {
        key: pipeline.key(),
        viewKey: savedView.getViewKey()
      },
      orderHint: savedView.isUnsaved() ? -2 : 0,
      accessory: accessory,
      iconClass: _getSavedViewIconClass(savedView),
      iconPosition: 'BEFORE_NAME',
      onClick: function () {
        _services_tracker_tracker__WEBPACK_IMPORTED_MODULE_8__["default"].track('savedViewClicked');
      }
    };
  };
}
function _getSavedViewIconClass(savedView) {
  if (savedView.isStarred()) {
    return 'streak__navMenu_icon star';
  } else {
    return 'streak__navMenu_icon savedView';
  }
}
const navMenuController = new NavMenuController();
_lib_dependencyManager__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP.addFunction({
  functionKey: 'navMenuInitialized',
  functionReference: async () => {
    await navMenuController.init();
  },
  dependentFunctionKeys: ['sdkLoaded', 'htmlLoaded', 'localeLoaded', 'userLoggedIn', 'enabledFeaturesControllerInitialized']
});
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 50931:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ PipelineMenu)
/* harmony export */ });
/* harmony import */ var _streakyc_common_core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77294);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44345);
/* harmony import */ var _services_ui_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56781);
/* harmony import */ var _services_data_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38672);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(35091);
/* harmony import */ var _services_tracker_tracker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13778);
/* harmony import */ var _services_accessManager_accessManager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24067);
/* harmony import */ var _attemptToDeletePipeline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(92831);
/* harmony import */ var _streakyc_models_pipeline_isSharedWithAnyoneElse__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(14711);
/* harmony import */ var _widgets_colorPicker_colorPicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(68577);
/* harmony import */ var _widgets_react_material_iconPicker_iconPicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(76079);
/* harmony import */ var _widgets_newPipeline_createSimilarPipeline__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(87527);
/* harmony import */ var _widgets_react_material_menu_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(82792);
/* harmony import */ var _services_userSettings_userSettings__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(22876);
/* harmony import */ var _pipelineView_sharing__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(24377);
/* harmony import */ var _pipeline__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(24568);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_ui_ui__WEBPACK_IMPORTED_MODULE_2__, _services_data_data__WEBPACK_IMPORTED_MODULE_3__, _services_accessManager_accessManager__WEBPACK_IMPORTED_MODULE_6__, _attemptToDeletePipeline__WEBPACK_IMPORTED_MODULE_7__, _streakyc_models_pipeline_isSharedWithAnyoneElse__WEBPACK_IMPORTED_MODULE_8__, _widgets_newPipeline_createSimilarPipeline__WEBPACK_IMPORTED_MODULE_11__, _services_userSettings_userSettings__WEBPACK_IMPORTED_MODULE_13__, _pipelineView_sharing__WEBPACK_IMPORTED_MODULE_14__, _pipeline__WEBPACK_IMPORTED_MODULE_15__]);
([_services_ui_ui__WEBPACK_IMPORTED_MODULE_2__, _services_data_data__WEBPACK_IMPORTED_MODULE_3__, _services_accessManager_accessManager__WEBPACK_IMPORTED_MODULE_6__, _attemptToDeletePipeline__WEBPACK_IMPORTED_MODULE_7__, _streakyc_models_pipeline_isSharedWithAnyoneElse__WEBPACK_IMPORTED_MODULE_8__, _widgets_newPipeline_createSimilarPipeline__WEBPACK_IMPORTED_MODULE_11__, _services_userSettings_userSettings__WEBPACK_IMPORTED_MODULE_13__, _pipelineView_sharing__WEBPACK_IMPORTED_MODULE_14__, _pipeline__WEBPACK_IMPORTED_MODULE_15__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

















class PipelineMenu extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  render() {
    const {
      pipeline,
      closeDropdown
    } = this.props;
    const orderedPipelineKeys = _services_ui_ui__WEBPACK_IMPORTED_MODULE_2__["default"].getSortedPipelineKeys().filter(key => {
      const pipeline = _services_data_data__WEBPACK_IMPORTED_MODULE_3__["default"].getPipeline(key);
      return pipeline && !pipeline.isHidden();
    });
    const currentIndex = orderedPipelineKeys.indexOf(pipeline.key());
    const pipelineKey = pipeline.key();
    const isHidden = pipeline.isHidden();
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_widgets_react_material_menu_index__WEBPACK_IMPORTED_MODULE_12__/* .Dropdown */ .Lt, {
      className: "streak__pipelineMenu",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_widgets_react_material_menu_index__WEBPACK_IMPORTED_MODULE_12__/* .MenuList */ .qy, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_widgets_react_material_menu_index__WEBPACK_IMPORTED_MODULE_12__/* .MenuItem */ .sN, {
          ...this._getSharingIconNameProp(pipeline),
          disabled: !_services_accessManager_accessManager__WEBPACK_IMPORTED_MODULE_6__["default"].arePermissionsAllowed(pipeline, [{
            entityType: 'Pipeline',
            actions: ['UPDATE', 'CHANGE_PERMISSIONS']
          }]),
          onItemChosen: () => {
            this._track('sharePipeline');
            (0,_pipelineView_sharing__WEBPACK_IMPORTED_MODULE_14__/* .showPipelineShareDialog */ .AR)({
              pipeline
            });
            closeDropdown();
          },
          children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('share')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("hr", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_widgets_react_material_menu_index__WEBPACK_IMPORTED_MODULE_12__/* .SubMenuItem */ .vE, {
          className: "mdl-menu__item_icon",
          materialIconName: "color_lens",
          menu: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_widgets_colorPicker_colorPicker__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
            previewText: pipeline.displayNameText(),
            previewType: "pipeline",
            previewIcon: pipeline.getIcon(),
            currentColor: pipeline.getColor(),
            onColorChosen: colors => {
              this._track('pipelineColorChanged', colors);
              pipeline.setColor(colors);
              closeDropdown();
            },
            onCustomColorClick: () => closeDropdown(),
            onRemoveClick: () => {
              this._track('pipelineColorRemoved');
              pipeline.setColor(null);
              closeDropdown();
            }
          }),
          children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('color_set')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_widgets_react_material_menu_index__WEBPACK_IMPORTED_MODULE_12__/* .SubMenuItem */ .vE, {
          className: "mdl-menu__item_icon",
          materialIconName: pipeline.getIcon(),
          menu: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_widgets_react_material_menu_index__WEBPACK_IMPORTED_MODULE_12__/* .Dropdown */ .Lt, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
              className: "mdl-menu__header",
              children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('icon_pipeline').toLocaleUpperCase()
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_widgets_react_material_iconPicker_iconPicker__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
              columns: 6,
              onSelect: icon => {
                this._track('pipelineIconChanged', {
                  icon
                });
                pipeline.setIcon(icon);
                closeDropdown();
              }
            })]
          }),
          children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('icon_set')
        }), orderedPipelineKeys.length > 1 && !isHidden && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
          children: [currentIndex > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_widgets_react_material_menu_index__WEBPACK_IMPORTED_MODULE_12__/* .MenuItem */ .sN, {
            materialIconName: "arrow_upward",
            onItemChosen: () => {
              const swappedPipelineKey = orderedPipelineKeys[currentIndex - 1];
              const swappedPipeline = _services_data_data__WEBPACK_IMPORTED_MODULE_3__["default"].getPipeline(swappedPipelineKey);
              const updatedOrderedPipelineKeys = orderedPipelineKeys.filter(key => key !== pipelineKey);
              updatedOrderedPipelineKeys.splice(currentIndex - 1, 0, pipelineKey);
              _services_userSettings_userSettings__WEBPACK_IMPORTED_MODULE_13__.UserSettings.set('leftLink/pipelineSort', updatedOrderedPipelineKeys);
              _services_userSettings_userSettings__WEBPACK_IMPORTED_MODULE_13__.UserSettings.save(true);
              pipeline.postNotification('navMenuOrderChanged');
              swappedPipeline && swappedPipeline.postNotification('navMenuOrderChanged');
            },
            children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('move_up')
          }), currentIndex < orderedPipelineKeys.length - 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_widgets_react_material_menu_index__WEBPACK_IMPORTED_MODULE_12__/* .MenuItem */ .sN, {
            materialIconName: "arrow_downward",
            onItemChosen: () => {
              const swappedPipelineKey = orderedPipelineKeys[currentIndex + 1];
              const swappedPipeline = _services_data_data__WEBPACK_IMPORTED_MODULE_3__["default"].getPipeline(swappedPipelineKey);
              const updatedOrderedPipelineKeys = orderedPipelineKeys.filter(key => key !== pipelineKey);
              updatedOrderedPipelineKeys.splice(currentIndex + 1, 0, pipelineKey);
              _services_userSettings_userSettings__WEBPACK_IMPORTED_MODULE_13__.UserSettings.set('leftLink/pipelineSort', updatedOrderedPipelineKeys);
              _services_userSettings_userSettings__WEBPACK_IMPORTED_MODULE_13__.UserSettings.save(true);
              pipeline.postNotification('navMenuOrderChanged');
              swappedPipeline && swappedPipeline.postNotification('navMenuOrderChanged');
            },
            children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('move_down')
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_widgets_react_material_menu_index__WEBPACK_IMPORTED_MODULE_12__/* .MenuItem */ .sN, {
          className: "streak__pipelineMenu_hidePipeline",
          materialIconName: isHidden ? 'visibility' : 'visibility_off',
          onItemChosen: () => {
            this._track(isHidden ? 'showPipeline' : 'hidePipeline');
            pipeline.setHidden(!isHidden);
          },
          children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString(isHidden ? 'unhide_pipeline' : 'hide_pipeline')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("hr", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_widgets_react_material_menu_index__WEBPACK_IMPORTED_MODULE_12__/* .MenuItem */ .sN, {
          materialIconName: "folder_open",
          onItemChosen: () => {
            this._track('manageSavedViews');
            _streakyc_common_core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_0__.inboxSDK.Router.goto('savedviews/:key', {
              key: pipeline.key()
            });
            closeDropdown();
          },
          children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('saved_view_manage')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_widgets_react_material_menu_index__WEBPACK_IMPORTED_MODULE_12__/* .MenuItem */ .sN, {
          materialIconName: "content_copy",
          onItemChosen: () => {
            this._track('createSimilarPipeline');
            (0,_widgets_newPipeline_createSimilarPipeline__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)(pipeline);
            closeDropdown();
          },
          children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('create_similar_pipeline')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_widgets_react_material_menu_index__WEBPACK_IMPORTED_MODULE_12__/* .MenuItem */ .sN, {
          materialIconName: "delete",
          disabled: !_services_accessManager_accessManager__WEBPACK_IMPORTED_MODULE_6__["default"].isAccessAllowed(pipeline, 'Pipeline', 'DELETE'),
          onItemChosen: () => {
            this._track('deletePipeline');
            (0,_attemptToDeletePipeline__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(pipeline);
            closeDropdown();
          },
          children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('delete_pipeline')
        })]
      })
    });
  }
  _track(eventName) {
    let extraProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    _services_tracker_tracker__WEBPACK_IMPORTED_MODULE_5__["default"].track('pipelineMenu.' + eventName, {
      ...extraProps,
      pipelineKey: this.props.pipeline.key()
    });
  }
  _getSharingIconNameProp(pipeline) {
    const shared = (0,_streakyc_models_pipeline_isSharedWithAnyoneElse__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(pipeline);
    if (!shared) {
      return {
        materialIconName: 'lock'
      };
    } else if (pipeline.get('defaultPermissionSetName') === _pipeline__WEBPACK_IMPORTED_MODULE_15__/* .PERMISSION_SET_NO_ACCESS */ .UY) {
      // not shared with team, but acl entries exist
      return {
        materialIconName: 'business'
      };
    } else {
      return {
        streakIconName: 'team'
      };
    }
  }
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 65110:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ SavedViewsMenu)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44345);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35091);
/* harmony import */ var _services_tracker_tracker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13778);
/* harmony import */ var _services_accessManager_accessManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24067);
/* harmony import */ var _headsUp_headsUpMasterController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38462);
/* harmony import */ var _widgets_react_material_menu_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(82792);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_accessManager_accessManager__WEBPACK_IMPORTED_MODULE_3__, _headsUp_headsUpMasterController__WEBPACK_IMPORTED_MODULE_4__]);
([_services_accessManager_accessManager__WEBPACK_IMPORTED_MODULE_3__, _headsUp_headsUpMasterController__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







// We keep changes to whether the SavedView is starred in the component's state and only apply the
// changes to the SavedView model when the component is unmounted. We do this because setting the
// the star state on the SavedView causes the SavedView left-nav listing to be rerendered, which
// hides the context menu, which feels very janky.

class SavedViewsMenu extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  state = {
    isSavedViewStarred: this.props.savedView.isStarred()
  };
  render() {
    const {
      savedView,
      pipeline
    } = this.props;
    const isPipelineEditable = pipeline.getIsEditable();
    const isInHeadsUp = _headsUp_headsUpMasterController__WEBPACK_IMPORTED_MODULE_4__["default"].isInHeadsUp(savedView.getViewKey());
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_widgets_react_material_menu_index__WEBPACK_IMPORTED_MODULE_5__/* .Dropdown */ .Lt, {
      className: "streak__savedViewsMenu",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_widgets_react_material_menu_index__WEBPACK_IMPORTED_MODULE_5__/* .MenuList */ .qy, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_widgets_react_material_menu_index__WEBPACK_IMPORTED_MODULE_5__/* .ToggleItem */ .HP, {
          materialIconName: isInHeadsUp ? 'move_to_inbox' : 'inbox',
          checked: isInHeadsUp,
          onItemChosen: checked => {
            if (checked) {
              this._track('addSavedViewToInbox');
              _headsUp_headsUpMasterController__WEBPACK_IMPORTED_MODULE_4__["default"].addSection(savedView.getViewKey(), pipeline.key());
            } else {
              this._track('removeSavedViewFromInbox');
              _headsUp_headsUpMasterController__WEBPACK_IMPORTED_MODULE_4__["default"].removeSection(savedView.getViewKey());
            }
            this.forceUpdate();
          },
          children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.getString('saved_view_add_to_inbox')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_widgets_react_material_menu_index__WEBPACK_IMPORTED_MODULE_5__/* .ToggleItem */ .HP, {
          materialIconName: this.state.isSavedViewStarred ? 'star' : 'star_border',
          checked: this.state.isSavedViewStarred,
          onItemChosen: checked => {
            this._track(checked ? 'savedViewUnstarred' : 'savedViewUnstarred');
            this.setState({
              isSavedViewStarred: checked
            });
          },
          children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.getString('starred_saved_view')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("hr", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_widgets_react_material_menu_index__WEBPACK_IMPORTED_MODULE_5__/* .MenuItem */ .sN, {
          materialIconName: "mode_edit",
          disabled: !isPipelineEditable || !_services_accessManager_accessManager__WEBPACK_IMPORTED_MODULE_3__["default"].isAccessAllowed(pipeline, 'SavedView', 'UPDATE'),
          onItemChosen: () => {
            this._track('renameSavedView');
            savedView.rename();
          },
          children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.getString('saved_view_rename')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_widgets_react_material_menu_index__WEBPACK_IMPORTED_MODULE_5__/* .MenuItem */ .sN, {
          materialIconName: "content_copy",
          disabled: !isPipelineEditable || !_services_accessManager_accessManager__WEBPACK_IMPORTED_MODULE_3__["default"].isAccessAllowed(pipeline, 'SavedView', 'CREATE'),
          onItemChosen: () => {
            this._track('duplicateSavedView');
            savedView.duplicate();
          },
          children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.getString('saved_view_duplicate')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_widgets_react_material_menu_index__WEBPACK_IMPORTED_MODULE_5__/* .MenuItem */ .sN, {
          materialIconName: "delete",
          disabled: !isPipelineEditable || !_services_accessManager_accessManager__WEBPACK_IMPORTED_MODULE_3__["default"].isAccessAllowed(pipeline, 'SavedView', 'DELETE'),
          onItemChosen: async () => {
            this._track('deleteSavedViewAttempt');
            const isViewDeleted = await savedView.attemptToDelete({
              context: 'savedViewMenu',
              // context and namespace can be different or the same
              namespace: 'savedViewMenu'
            });
            if (isViewDeleted) {
              this._track('deleteSavedView2ndSuccess');
            } else {
              this._track('deleteSavedViewCanceled');
            }
          },
          children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.getString('saved_view_delete')
        })]
      })
    });
  }
  componentWillUnmount() {
    const {
      isSavedViewStarred
    } = this.state;
    const {
      savedView
    } = this.props;
    if (isSavedViewStarred !== savedView.isStarred()) {
      savedView.setStarState(isSavedViewStarred);
    }
  }
  _track(eventName) {
    let extraProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    _services_tracker_tracker__WEBPACK_IMPORTED_MODULE_2__["default"].track('savedViewMenu.' + eventName, {
      ...extraProps,
      pipelineKey: this.props.pipeline.key(),
      savedViewName: this.props.savedView.displayNameText()
    });
  }
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 78445:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C3: () => (/* binding */ ORGS_CACHE_KEY_PATTERN),
/* harmony export */   CZ: () => (/* binding */ ORGS_DEFAULT_PINNED_COLUMNS),
/* harmony export */   GJ: () => (/* binding */ ORGS_PERMISSION_NO_ACCESS_KEY),
/* harmony export */   Qg: () => (/* binding */ ORGS_TEAM_PERMISSION_KEY),
/* harmony export */   dm: () => (/* binding */ ORGS_SELECTED_TEAM_CACHE_KEY),
/* harmony export */   gX: () => (/* binding */ ORGS_PERMISSION_ADMIN_KEY),
/* harmony export */   jj: () => (/* binding */ ORGS_AS_PAID_FEATURE_KEY),
/* harmony export */   v8: () => (/* binding */ ORGS_PERMISSION_FULL_ACCESS_KEY),
/* harmony export */   wV: () => (/* binding */ ORGS_SYSTEM_COLUMNS_MAP)
/* harmony export */ });
/* harmony import */ var _streakyc_ui_components_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16768);

const ORGS_SYSTEM_COLUMNS_MAP = {
  name: {
    titleLocaleKey: 'orgs_column_name',
    icon: undefined,
    loadingRenderer: _streakyc_ui_components_table__WEBPACK_IMPORTED_MODULE_0__/* .SQUARE_PROFILE_LOADING_RENDERER */ .wr.name
  },
  domains: {
    titleLocaleKey: 'orgs_column_domain',
    icon: 'language',
    loadingRenderer: _streakyc_ui_components_table__WEBPACK_IMPORTED_MODULE_0__/* .LOADING_RENDERER */ .qS.name
  },
  pipelines: {
    titleLocaleKey: 'orgs_column_pipelines',
    icon: 'label_important',
    loadingRenderer: _streakyc_ui_components_table__WEBPACK_IMPORTED_MODULE_0__/* .LOADING_RENDERER */ .qS.name
  },
  industry: {
    titleLocaleKey: 'orgs_column_industry',
    icon: 'badge',
    loadingRenderer: _streakyc_ui_components_table__WEBPACK_IMPORTED_MODULE_0__/* .LOADING_RENDERER */ .qS.name
  },
  employeeCount: {
    titleLocaleKey: 'orgs_column_size',
    icon: 'notes',
    loadingRenderer: _streakyc_ui_components_table__WEBPACK_IMPORTED_MODULE_0__/* .LOADING_RENDERER */ .qS.name
  },
  phoneNumbers: {
    titleLocaleKey: 'orgs_column_phone',
    icon: 'phone',
    loadingRenderer: _streakyc_ui_components_table__WEBPACK_IMPORTED_MODULE_0__/* .LOADING_RENDERER */ .qS.name
  },
  addresses: {
    titleLocaleKey: 'orgs_column_location',
    icon: 'map',
    loadingRenderer: _streakyc_ui_components_table__WEBPACK_IMPORTED_MODULE_0__/* .LOADING_RENDERER */ .qS.name
  },
  twitter: {
    titleLocaleKey: 'orgs_column_twitter',
    icon: 'twitter',
    loadingRenderer: _streakyc_ui_components_table__WEBPACK_IMPORTED_MODULE_0__/* .LOADING_RENDERER */ .qS.name
  },
  linkedin: {
    titleLocaleKey: 'orgs_column_linkedin',
    icon: 'linkedIn',
    loadingRenderer: _streakyc_ui_components_table__WEBPACK_IMPORTED_MODULE_0__/* .LOADING_RENDERER */ .qS.name
  },
  facebook: {
    titleLocaleKey: 'orgs_column_facebook',
    icon: 'facebook',
    loadingRenderer: _streakyc_ui_components_table__WEBPACK_IMPORTED_MODULE_0__/* .LOADING_RENDERER */ .qS.name
  },
  instagram: {
    titleLocaleKey: 'orgs_column_instagram',
    icon: 'instagram',
    loadingRenderer: _streakyc_ui_components_table__WEBPACK_IMPORTED_MODULE_0__/* .LOADING_RENDERER */ .qS.name
  }
};
const ORGS_DEFAULT_PINNED_COLUMNS = ['name'];
const ORGS_CACHE_KEY_PATTERN = teamKey => `orgs_${teamKey}`;
const ORGS_SELECTED_TEAM_CACHE_KEY = 'streak_nav_team_key';
const ORGS_TEAM_PERMISSION_KEY = 'ALL_ORGS';
const ORGS_PERMISSION_ADMIN_KEY = '__adminPermissionSet__';
const ORGS_PERMISSION_FULL_ACCESS_KEY = '__editAllPermissionSet__';
const ORGS_PERMISSION_NO_ACCESS_KEY = '__emptyPermissionSet__';
const ORGS_AS_PAID_FEATURE_KEY = 'contactsOrgs';

/***/ }),

/***/ 7732:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ goToOrgsView)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44345);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69980);
/* harmony import */ var _streakyc_ui_components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2225);
/* harmony import */ var _core_appShell__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81022);
/* harmony import */ var _core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(77294);
/* harmony import */ var _services_data_commonData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(90885);
/* harmony import */ var _widgets_react_material_icon_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(84347);
/* harmony import */ var _lib_dependencyManager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(54612);
/* harmony import */ var _billing_helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(87872);
/* harmony import */ var _core_enabledFeaturesController__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(50452);
/* harmony import */ var _widgets_spreadsheetV2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(13222);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(78445);
/* harmony import */ var _core_hooks_useSessionStorageValue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(82513);
/* harmony import */ var _leftLink_navMenuController__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(47341);
/* harmony import */ var _leftLink_navMenuController_module_css__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(74875);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(35091);
/* harmony import */ var _core_routing__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(58556);
/* harmony import */ var _team__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(64936);
/* harmony import */ var _services_data_user__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(5575);
/* harmony import */ var _widgets_paywallGateway_paywallGateway__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(64167);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_data_commonData__WEBPACK_IMPORTED_MODULE_5__, _billing_helpers__WEBPACK_IMPORTED_MODULE_8__, _core_enabledFeaturesController__WEBPACK_IMPORTED_MODULE_9__, _leftLink_navMenuController__WEBPACK_IMPORTED_MODULE_13__, _team__WEBPACK_IMPORTED_MODULE_16__, _widgets_paywallGateway_paywallGateway__WEBPACK_IMPORTED_MODULE_17__]);
([_services_data_commonData__WEBPACK_IMPORTED_MODULE_5__, _billing_helpers__WEBPACK_IMPORTED_MODULE_8__, _core_enabledFeaturesController__WEBPACK_IMPORTED_MODULE_9__, _leftLink_navMenuController__WEBPACK_IMPORTED_MODULE_13__, _team__WEBPACK_IMPORTED_MODULE_16__, _widgets_paywallGateway_paywallGateway__WEBPACK_IMPORTED_MODULE_17__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





















const OrgsView = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(async () => {
  const {
    OrgsView
  } = await __webpack_require__.e(/* import() */ 5354).then(__webpack_require__.bind(__webpack_require__, 65354));
  return {
    default: OrgsView
  };
});
_lib_dependencyManager__WEBPACK_IMPORTED_MODULE_7__/* .DependencyManager */ .Lm.addFunction({
  dependentFunctionKeys: ['userPreServerExperiment', 'userLoggedIn', 'userSettingsInitialized', 'enabledFeaturesControllerInitialized', 'navMenuInitialized'],
  functionKey: 'orgsRoutingInitialized',
  functionReference: async () => {
    const enabled = _core_enabledFeaturesController__WEBPACK_IMPORTED_MODULE_9__.EnabledFeatures.isFeatureEnabled('orgsViewExp') || _core_enabledFeaturesController__WEBPACK_IMPORTED_MODULE_9__.EnabledFeatures.isExperimentEnabled('contactsOrgsViewExp');
    if (!enabled) {
      return;
    }
    const teamsWithAccess = _services_data_commonData__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.getTeams().filter(t => (0,_team__WEBPACK_IMPORTED_MODULE_16__/* .isTeamBasedAccessAllowed */ .lf)(_constants__WEBPACK_IMPORTED_MODULE_11__/* .ORGS_TEAM_PERMISSION_KEY */ .Qg, t, (0,_services_data_user__WEBPACK_IMPORTED_MODULE_19__/* .getUser */ .P)()));
    if (teamsWithAccess.length === 0) {
      return;
    }
    handleCustomRoute();
    if (_leftLink_navMenuController__WEBPACK_IMPORTED_MODULE_13__.navMenuController.streakPanelView) {
      _leftLink_navMenuController__WEBPACK_IMPORTED_MODULE_13__.navMenuController.streakPanelView.addNavItem({
        name: _services_locale_locale__WEBPACK_IMPORTED_MODULE_14__.Locale.getString('organizations'),
        iconClass: _leftLink_navMenuController_module_css__WEBPACK_IMPORTED_MODULE_20__/* .navItemIcon */ .U,
        iconLiga: 'business',
        routeID: _core_routing__WEBPACK_IMPORTED_MODULE_15__/* .StreakCustomRoute */ .ld.ORGS,
        onClick: e => {
          resetOrgsViewScrollPosition();
          const contactsOrgsFeature = _core_enabledFeaturesController__WEBPACK_IMPORTED_MODULE_9__.EnabledFeatures.isFeatureEnabled(_constants__WEBPACK_IMPORTED_MODULE_11__/* .ORGS_AS_PAID_FEATURE_KEY */ .jj);
          if (contactsOrgsFeature) {
            _core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_4__.inboxSDK?.Router.goto(_core_routing__WEBPACK_IMPORTED_MODULE_15__/* .StreakCustomRoute */ .ld.ORGS);
          } else {
            e?.preventDefault();
            (0,_widgets_paywallGateway_paywallGateway__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z)({
              feature: _constants__WEBPACK_IMPORTED_MODULE_11__/* .ORGS_AS_PAID_FEATURE_KEY */ .jj
            });
          }
        },
        // InboxSDK types do not reflect the parameter
        orderHint: 1
      });
    } else {
      await createNavItems();
    }
  }
});
async function setUpOrgsNavItem() {
  const isAppMenuShown = await _core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_4__.inboxSDK.AppMenu.isShown();
  if (isAppMenuShown) {
    const panel = await setUpAppMenuItem();
    return panel;
  }
  const navItemDescriptor = {
    name: 'Orgs',
    iconClass: 'orgsIndicator',
    accessory: {
      type: 'CREATE',
      onClick: () => {}
    }
  };
  return _core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_4__.inboxSDK.NavMenu.addNavItem(navItemDescriptor);
}
async function createNavItems() {
  const navItem = await setUpOrgsNavItem();
  const teams = _services_data_commonData__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.getTeams().map(t => ({
    iconName: 'people_alt',
    name: t.displayNameText(),
    teamKey: t.key()
  }));
  teams.forEach(_ref => {
    let {
      iconName,
      name,
      teamKey
    } = _ref;
    const iconElement = document.createElement('div');
    iconElement.className = 'streak__navMenu_pipelineIconWrapper';
    (0,_core_appShell__WEBPACK_IMPORTED_MODULE_3__/* .renderWithAppShell */ .oC)(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_widgets_react_material_icon_icon__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      className: "streak__navMenu_pipelineIcon",
      isOutline: true,
      materialIconName: iconName,
      mini: true
    }), iconElement);
    const childNavItem = navItem?.addNavItem({
      iconElement,
      name,
      routeID: _core_routing__WEBPACK_IMPORTED_MODULE_15__/* .StreakCustomRoute */ .ld.ORGS_TEAM,
      routeParams: {
        key: teamKey
      },
      onClick() {
        (0,_widgets_spreadsheetV2__WEBPACK_IMPORTED_MODULE_10__/* .removeSpreadsheetCacheEntry */ .mH)((0,_constants__WEBPACK_IMPORTED_MODULE_11__/* .ORGS_CACHE_KEY_PATTERN */ .C3)(teamKey));
      }
    });
    childNavItem?.on('destroy', () => {
      react_dom__WEBPACK_IMPORTED_MODULE_1__.unmountComponentAtNode(iconElement);
    });
  });
}
async function setUpAppMenuItem() {
  const mmAppMenu = _core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_4__.inboxSDK.AppMenu.addMenuItem({
    name: 'Orgs',
    onClick: () => {
      if (!location.hash.startsWith('#streak_orgs')) {
        const teamKey = (0,_billing_helpers__WEBPACK_IMPORTED_MODULE_8__/* .getLargestTeam */ .n4)().key();
        (0,_widgets_spreadsheetV2__WEBPACK_IMPORTED_MODULE_10__/* .removeSpreadsheetCacheEntry */ .mH)((0,_constants__WEBPACK_IMPORTED_MODULE_11__/* .ORGS_CACHE_KEY_PATTERN */ .C3)(teamKey));
        _core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_4__.inboxSDK?.Router.goto(_core_routing__WEBPACK_IMPORTED_MODULE_15__/* .StreakCustomRoute */ .ld.ORGS_TEAM, {
          key: teamKey
        });
      }
    },
    iconUrl: {
      lightTheme: {
        default: 'https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/gmail_groups_baseline_nv700_20dp.png',
        active: 'https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/gmail_groups_fill_baseline_n900_20dp.png'
      },
      darkTheme: {
        default: 'https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/gmail_groups_white_20dp.png',
        active: 'https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/gmail_groups_fill_white_20dp.png'
      }
    },
    insertIndex: 3,
    isRouteActive: routeView => {
      const routeViewID = routeView.getRouteID();
      return routeViewID?.startsWith('streak_orgs') ?? false;
    }
  });
  const panel = await mmAppMenu.addCollapsiblePanel({
    primaryButton: {
      name: 'Orgs',
      onClick: () => {},
      iconUrl: {
        lightTheme: themedMaterialIconUrl({
          icon: 'add',
          color: 'black'
        }),
        darkTheme: {
          panelDefault: themedMaterialIconUrl({
            icon: 'add',
            color: 'black'
          }),
          panelHovered: themedMaterialIconUrl({
            icon: 'add',
            color: 'white'
          })
        }
      }
    }
  });
  return panel;
}

/** Frustratingly, all permutations of options AREN'T available for various icons/colors. */
const themedMaterialIconUrl = _ref2 => {
  let {
    icon,
    color,
    scaling = 2,
    variant = 'outline'
  } = _ref2;
  return `https://www.gstatic.com/images/icons/material/system${variant === 'outline' ? '_gm' : ''}/${scaling}x/${icon}_${color}_24dp.png`;
};
function handleCustomRoute() {
  // TODO: remove once moved to new routing
  _core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_4__.inboxSDK.Router.handleCustomRoute(_core_routing__WEBPACK_IMPORTED_MODULE_15__/* .StreakCustomRoute */ .ld.ORGS_TEAM, customRouteView => {
    const teamKey = customRouteView.getParams().key;
    (0,_core_appShell__WEBPACK_IMPORTED_MODULE_3__/* .renderWithAppShell */ .oC)(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
      fallback: null,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_streakyc_ui_components_layout__WEBPACK_IMPORTED_MODULE_2__/* .LayoutBox */ .kZ, {
        flex: true,
        overflow: "hidden",
        minHeight: "100%",
        maxHeight: "100%",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(OrgsView, {
          teamKey: teamKey,
          onTeamChange: teamKey => {
            (0,_widgets_spreadsheetV2__WEBPACK_IMPORTED_MODULE_10__/* .removeSpreadsheetCacheEntry */ .mH)((0,_constants__WEBPACK_IMPORTED_MODULE_11__/* .ORGS_CACHE_KEY_PATTERN */ .C3)(teamKey));
            _core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_4__.inboxSDK?.Router.goto(_core_routing__WEBPACK_IMPORTED_MODULE_15__/* .StreakCustomRoute */ .ld.ORGS_TEAM, {
              key: teamKey
            });
          }
        })
      })
    }), customRouteView.getElement());
    customRouteView.on('destroy', () => {
      react_dom__WEBPACK_IMPORTED_MODULE_1__.unmountComponentAtNode(customRouteView.getElement());
    });
  });
  _core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_4__.inboxSDK.Router.handleCustomRoute(_core_routing__WEBPACK_IMPORTED_MODULE_15__/* .StreakCustomRoute */ .ld.ORGS, customRouteView => {
    const teamsWithAccess = _services_data_commonData__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.getTeams().filter(t => (0,_team__WEBPACK_IMPORTED_MODULE_16__/* .isTeamBasedAccessAllowed */ .lf)(_constants__WEBPACK_IMPORTED_MODULE_11__/* .ORGS_TEAM_PERMISSION_KEY */ .Qg, t, (0,_services_data_user__WEBPACK_IMPORTED_MODULE_19__/* .getUser */ .P)()));
    (0,_core_appShell__WEBPACK_IMPORTED_MODULE_3__/* .renderWithAppShell */ .oC)(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
      fallback: null,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_streakyc_ui_components_layout__WEBPACK_IMPORTED_MODULE_2__/* .LayoutBox */ .kZ, {
        flex: true,
        overflow: "hidden",
        minHeight: "100%",
        maxHeight: "100%",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_core_hooks_useSessionStorageValue__WEBPACK_IMPORTED_MODULE_12__/* .UseSessionStorageValue */ .Nu, {
          cacheKey: _constants__WEBPACK_IMPORTED_MODULE_11__/* .ORGS_SELECTED_TEAM_CACHE_KEY */ .dm,
          defaultValue: (0,_billing_helpers__WEBPACK_IMPORTED_MODULE_8__/* .getLargestTeam */ .n4)(teamsWithAccess)?.key(),
          options: {
            localStorageFallback: true
          },
          children: (teamKey, setTeamKey) => teamKey && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(OrgsView, {
            teamKey: teamKey,
            onTeamChange: teamKey => {
              resetOrgsViewScrollPosition(teamKey);
              setTeamKey(teamKey);
            }
          }, teamKey)
        })
      })
    }), customRouteView.getElement());
    customRouteView.on('destroy', () => {
      react_dom__WEBPACK_IMPORTED_MODULE_1__.unmountComponentAtNode(customRouteView.getElement());
    });
  });
}
function goToOrgsView(teamKey) {
  _core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_4__.inboxSDK.Router.goto(_core_routing__WEBPACK_IMPORTED_MODULE_15__/* .StreakCustomRoute */ .ld.ORGS_TEAM, {
    key: teamKey
  });
}
function resetOrgsViewScrollPosition(teamKey) {
  if (!teamKey) {
    teamKey = (0,_core_hooks_useSessionStorageValue__WEBPACK_IMPORTED_MODULE_12__/* .LEGACY_HOOK_getSessionStorageValue */ .co)(_constants__WEBPACK_IMPORTED_MODULE_11__/* .ORGS_SELECTED_TEAM_CACHE_KEY */ .dm, undefined, {
      localStorageFallback: true
    });
  }
  if (teamKey) {
    (0,_widgets_spreadsheetV2__WEBPACK_IMPORTED_MODULE_10__/* .removeSpreadsheetCacheEntry */ .mH)((0,_constants__WEBPACK_IMPORTED_MODULE_11__/* .ORGS_CACHE_KEY_PATTERN */ .C3)(teamKey));
  }
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 99023:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   goToOrgsView: () => (/* reexport safe */ _internal_routing__WEBPACK_IMPORTED_MODULE_0__.D)
/* harmony export */ });
/* harmony import */ var _internal_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7732);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_internal_routing__WEBPACK_IMPORTED_MODULE_0__]);
_internal_routing__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 52354:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ LAST_NAV_ITEM_TRACKED_EMAIL_ROUTE)
/* harmony export */ });
const LAST_NAV_ITEM_TRACKED_EMAIL_ROUTE = 'last_nav_item_active_tracked_emails_route';

/***/ }),

/***/ 82966:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  vF: () => (/* reexport */ CollectionTable),
  O8: () => (/* reexport */ RealtimeEventType),
  eR: () => (/* reexport */ defineCollection),
  Kx: () => (/* reexport */ useCollection)
});

// UNUSED EXPORTS: CURSOR_LAST, CollectionMinimap, decodeCursor, encodeCursor, isReverseCursor

;// CONCATENATED MODULE: ./extensions/common/js/storeV3/internal/collection/types.ts
var RealtimeEventType = {
  CREATE: "CREATE",
  UPDATE: "UPDATED",
  DELETE: "DELETE"
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars

let MutationTransactionType = /*#__PURE__*/function (MutationTransactionType) {
  MutationTransactionType["UPDATE_PER_KEY"] = "UPDATE_PER_KEY";
  MutationTransactionType["DELETE_PER_KEY"] = "DELETE_PER_KEY";
  return MutationTransactionType;
}({});
// EXTERNAL MODULE: ./.yarn/cache/uuid-npm-9.0.0-46c41e3e43-23857699a6.zip/node_modules/uuid/dist/esm-browser/v4.js
var v4 = __webpack_require__(38527);
// EXTERNAL MODULE: ./.yarn/cache/kefir-npm-3.8.8-0d392dece2-6a40a9065f.zip/node_modules/kefir/dist/kefir.esm.js
var kefir_esm = __webpack_require__(98137);
// EXTERNAL MODULE: ./.yarn/__virtual__/kefir-bus-virtual-3dd4e0d63d/0/cache/kefir-bus-npm-2.3.1-7bffc4b426-b3389d503d.zip/node_modules/kefir-bus/index.js
var kefir_bus = __webpack_require__(67459);
var kefir_bus_default = /*#__PURE__*/__webpack_require__.n(kefir_bus);
// EXTERNAL MODULE: ./.yarn/__virtual__/kefir-stopper-virtual-baa6e7e589/0/cache/kefir-stopper-npm-2.2.0-b5c84722d6-082d7b5cef.zip/node_modules/kefir-stopper/js/index.js
var js = __webpack_require__(94322);
var js_default = /*#__PURE__*/__webpack_require__.n(js);
// EXTERNAL MODULE: ./.yarn/cache/lodash-npm-4.17.21-6382451519-c08619c038.zip/node_modules/lodash/lodash.js
var lodash = __webpack_require__(17013);
// EXTERNAL MODULE: ./extensions/common/js/lib/utils/kefir/index.ts + 7 modules
var kefir = __webpack_require__(43962);
// EXTERNAL MODULE: ./extensions/common/js/ui/components/table.ts
var table = __webpack_require__(16768);
// EXTERNAL MODULE: ./.yarn/cache/immer-npm-9.0.15-6c734225db-6067a0a405.zip/node_modules/immer/dist/immer.esm.mjs
var immer_esm = __webpack_require__(92802);
;// CONCATENATED MODULE: ./extensions/common/js/storeV3/internal/collection/constants.ts
const CURSOR_LAST = 'last';
;// CONCATENATED MODULE: ./extensions/common/js/storeV3/internal/collection/utils/dataUtils.ts




function createBlockFromResponse(data, blockParams, response) {
  if (response.records.length === 0) {
    return null;
  }
  const responseGroup = response.metadata.groups.find(g => g.groupKey === blockParams.groupKey);
  if (!responseGroup) {
    // requested group no longer exist
    return null;
  }
  const stateGroup = data.groups.find(g => g.groupKey === blockParams.groupKey);
  if (!stateGroup) {
    // group no longer exists, ignore loaded block
    return null;
  }
  if (blockParams.cursor === CURSOR_LAST) {
    blockParams.groupEnd = responseGroup.total - blockParams.offset;
    blockParams.groupStart = blockParams.groupEnd - response.records.length;
  }
  return {
    blockId: (0,v4/* default */.Z)(),
    groupStart: blockParams.groupStart,
    groupEnd: blockParams.groupStart + response.records.length,
    prev: response.prev,
    records: response.records,
    recordsMap: new Map(response.records.map((record, index) => [record.key, index])),
    recordsKeys: new Set(response.records.map(record => record.key)),
    next: response.next,
    loadedAt: Date.now(),
    invalidated: false
  };
}
function produceData(data, changes) {
  let changed = false;
  const newData = (0,immer_esm/* default */.ZP)(data, draft => {
    if (changes.metadata) {
      changed = applyMetadataChanges(draft, changes.metadata) || changed;
    }
    if (changes.blocks) {
      changes.blocks.filter(b => !!draft.groups.find(g => g.groupKey === b.groupKey)).forEach(_ref => {
        let {
          groupKey,
          block
        } = _ref;
        changed = applyBlockChanges(draft, groupKey, block) || changed;
      });
    }
  });
  return changed ? newData : data;
}
function applyMetadataChanges(data, metadata) {
  let changed = false;
  let collectionOffset = 0;
  data.groups = metadata.groups.map(metadataGroup => {
    let group = data.groups.find(dataGroup => dataGroup.groupKey === metadataGroup.groupKey);
    if (group) {
      if (group.total !== metadataGroup.total) {
        if (metadataGroup.total > group.total) {
          // total increased
          const lastBlock = group.blocks.at(-1);
          if (lastBlock && lastBlock.groupEnd === group.total) {
            // last block was the last block in the group
            lastBlock.invalidated = true;
          }
        } else {
          // total decreased
          (0,lodash.remove)(group.blocks, b => b.groupStart >= metadataGroup.total);
          const lastBlock = group.blocks.at(-1);
          if (lastBlock && lastBlock.groupEnd >= metadataGroup.total) {
            lastBlock.groupEnd = metadataGroup.total;
            lastBlock.records.splice(metadataGroup.total - lastBlock.groupStart);
            lastBlock.recordsMap = new Map(lastBlock.records.map((record, index) => [record.key, index]));
            lastBlock.recordsKeys = new Set(lastBlock.records.map(record => record.key));
            lastBlock.next = null;
            lastBlock.invalidated = true;
          }
        }
        group.total = metadataGroup.total;
        changed = true;
      }
      if (group.collectionStart !== collectionOffset || group.collectionEnd !== collectionOffset + metadataGroup.total) {
        group.collectionStart = collectionOffset;
        group.collectionEnd = collectionOffset + metadataGroup.total;
        changed = true;
      }
    } else {
      changed = true;
      group = {
        collectionStart: collectionOffset,
        collectionEnd: collectionOffset + metadataGroup.total,
        groupKey: metadataGroup.groupKey,
        groupData: metadataGroup.groupData,
        total: metadataGroup.total,
        blocks: []
      };
    }
    collectionOffset = group.collectionEnd;
    return group;
  });
  data.total = collectionOffset;
  return changed;
}
function applyBlockChanges(data, groupKey, block) {
  const group = data.groups.find(g => g.groupKey === groupKey);
  if (!group) {
    return false;
  }
  let changed = mutateGroup(group, block);
  for (let i = 0; i < data.groups.length; i++) {
    const group = data.groups[i];
    for (let j = 0; j < group.blocks.length; j++) {
      const oldBlock = group.blocks[j];
      if (oldBlock.blockId !== block.blockId) {
        const intersecting = getSetIntersection(block.recordsKeys, oldBlock.recordsKeys);
        if (intersecting.length > 0) {
          for (let i = 0; i < intersecting.length; i++) {
            const rIndex = oldBlock.recordsMap.get(intersecting[i]);
            const r = oldBlock.records[rIndex];
            r.invalidated = true;
          }
          oldBlock.invalidated = true;
          changed = true;
        }
      }
    }
  }
  return changed;
}
function mutateGroup(group, newBlock) {
  let changed = false;
  if (group.blocks.length === 0) {
    changed = true;
    group.blocks.push(newBlock);
  } else {
    const fullyIntersecting = group.blocks.filter(b => b.groupStart >= newBlock.groupStart && b.groupEnd <= newBlock.groupEnd);
    const removed = (0,lodash.remove)(group.blocks, b => fullyIntersecting.includes(b));
    if (removed.length > 0) {
      changed = true;
    }
    const intersecting = group.blocks.filter(b => b.groupStart < newBlock.groupEnd && b.groupEnd > newBlock.groupStart);
    if (intersecting.length === 1 && intersecting[0].groupStart < newBlock.groupStart && intersecting[0].groupEnd > newBlock.groupEnd) {
      // block is fully inside intersecting block, split it
      const intersectingBlock = intersecting[0];
      const prevBlockRecords = intersectingBlock.records.slice(0, newBlock.groupStart - intersectingBlock.groupStart);
      const prevBlock = {
        ...intersectingBlock,
        groupEnd: newBlock.groupStart,
        records: prevBlockRecords,
        recordsMap: new Map(prevBlockRecords.map((record, index) => [record.key, index])),
        recordsKeys: new Set(prevBlockRecords.map(record => record.key)),
        next: null,
        invalidated: true
      };
      const nextBlockRecords = intersectingBlock.records.slice(newBlock.groupEnd - intersectingBlock.groupStart);
      const nextBlock = {
        ...intersectingBlock,
        groupStart: newBlock.groupEnd,
        prev: null,
        records: nextBlockRecords,
        recordsMap: new Map(nextBlockRecords.map((record, index) => [record.key, index])),
        recordsKeys: new Set(nextBlockRecords.map(record => record.key)),
        invalidated: true
      };
      group.blocks.splice(group.blocks.indexOf(intersectingBlock), 1, prevBlock, nextBlock);
    } else {
      intersecting.forEach(prevBlock => {
        if (prevBlock.groupEnd > newBlock.groupEnd && prevBlock.groupStart < newBlock.groupEnd) {
          // removing start of the block
          const diff = newBlock.groupEnd - prevBlock.groupStart;
          prevBlock.prev = null;
          prevBlock.records.splice(0, diff);
          prevBlock.recordsMap = new Map(prevBlock.records.map((record, index) => [record.key, index]));
          prevBlock.recordsKeys = new Set(prevBlock.records.map(record => record.key));
          prevBlock.groupStart = newBlock.groupEnd;
          prevBlock.invalidated = true;
        }
        if (prevBlock.groupEnd > newBlock.groupStart && prevBlock.groupEnd <= newBlock.groupEnd) {
          // removing end of the block
          prevBlock.groupEnd = newBlock.groupStart;
          prevBlock.records.splice(prevBlock.groupEnd - prevBlock.groupStart);
          prevBlock.recordsMap = new Map(prevBlock.records.map((record, index) => [record.key, index]));
          prevBlock.recordsKeys = new Set(prevBlock.records.map(record => record.key));
          prevBlock.next = null;
          prevBlock.invalidated = true;
        }
      });
    }
    const newBlockIndex = group.blocks.findIndex(prevBlock => newBlock.groupStart < prevBlock.groupStart);
    if (newBlockIndex < 0) {
      group.blocks.push(newBlock);
    } else {
      group.blocks.splice(newBlockIndex, 0, newBlock);
    }
    changed = true;
  }
  return changed;
}
function findDataRecordByKey(data, recordKey) {
  let record = undefined;
  for (const group of data.groups) {
    for (const block of group.blocks) {
      const index = block.recordsMap.get(recordKey);
      record = index !== undefined ? block.records[index] : undefined;
      if (record) {
        break;
      }
    }
    if (record) {
      break;
    }
  }
  return record || null;
}
function findDataRecordByIndex(data, collectionIndex) {
  const group = data.groups.findLast(g => collectionIndex >= g.collectionStart);
  if (!group) {
    return null;
  }
  const groupIndex = collectionIndex - group.collectionStart;
  const block = group.blocks.findLast(b => groupIndex >= b.groupStart);
  if (!block) {
    return null;
  }
  const blockIndex = groupIndex - block.groupStart;
  return block.records[blockIndex] || null;
}

/**
 * Finds record's collection index in the provided data structure.
 * Used to determine how records position changed and make updates to selection indexes etc if necessary.
 */
function findDataRecordIndex(data, recordKey) {
  for (const group of data.groups) {
    for (const block of group.blocks) {
      const blockIndex = block.recordsMap.get(recordKey);
      if (blockIndex !== undefined) {
        const record = block.records[blockIndex];
        const collectionIndex = group.collectionStart + block.groupStart + blockIndex;
        if (record) {
          return collectionIndex;
        }
      }
    }
  }
  return null;
}
function getNotLoadedBlocks(data) {
  const result = [];
  for (let i = 0; i < data.groups.length; i++) {
    const group = data.groups[i];
    for (let j = 0; j < group.blocks.length; j++) {
      const block = group.blocks[j];
      const nextBlock = group.blocks[j + 1];
      if (j === 0 && block.groupStart !== 0) {
        result.push({
          collectionStart: group.collectionStart,
          collectionEnd: group.collectionStart + block.groupStart,
          groupKey: group.groupKey,
          groupStart: 0,
          groupEnd: block.groupStart
        });
      } else if (block.groupEnd !== group.total && !nextBlock) {
        result.push({
          collectionStart: group.collectionStart + block.groupEnd,
          collectionEnd: group.collectionEnd,
          groupKey: group.groupKey,
          groupStart: block.groupEnd,
          groupEnd: group.collectionEnd - group.collectionStart
        });
      } else if (nextBlock && block.groupEnd !== nextBlock.groupStart) {
        result.push({
          collectionStart: group.collectionStart + block.groupEnd,
          collectionEnd: group.collectionStart + nextBlock.groupStart,
          groupKey: group.groupKey,
          groupStart: block.groupEnd,
          groupEnd: nextBlock.groupStart
        });
      } else if (block.groupEnd === nextBlock?.groupStart || block.groupEnd === group.total) {
        // blocks are continuous or at the end
      } else {
        throw new Error('Should not happen');
      }
    }
  }
  return result;
}
function getSetIntersection(a, b) {
  if (a.intersection) {
    // using native intersection method if available
    return Array.from(a.intersection(b));
  }
  const result = [];
  for (const value of a) {
    if (b.has(value)) {
      result.push(value);
    }
  }
  return result;
}

/**
 * Simplifies working with record indexes relative to to a group.
 */
function createGroupIndexManager(data) {
  const groupsMap = data.groups.reduce((acc, group) => {
    acc[group.groupKey] = group;
    return acc;
  }, {});
  return {
    getGroup(groupKey) {
      return groupsMap[groupKey];
    },
    toGroupIndex(collectionIndex) {
      const group = data.groups.findLast(g => collectionIndex >= g.collectionStart);
      if (group) {
        return {
          group,
          groupIndex: collectionIndex - group.collectionStart
        };
      }
      return null;
    },
    toCollectionIndex(groupKey, groupIndex) {
      const group = groupsMap[groupKey];
      if (!group) {
        return null;
      }
      return group.collectionStart + groupIndex;
    }
  };
}
;// CONCATENATED MODULE: ./.yarn/cache/@frsource-base64-npm-1.0.42-acd7e3f45c-33b693862b.zip/node_modules/@frsource/base64/dist/index.mjs
/**
 *
 *  Base64 encode / decode
 *  http://www.webtoolkit.info/
 *
 **/
const _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
/**
 * Encodes given string.
 *
 * @param {string} input - Text to encode
 */
const encode = input => {
  let output = "";
  let i = 0;
  input = _utf8_encode(input);
  while (i < input.length) {
    const chr1 = input.charCodeAt(i++);
    const chr2 = input.charCodeAt(i++);
    const chr3 = input.charCodeAt(i++);
    const enc1 = chr1 >> 2;
    const enc2 = (chr1 & 3) << 4 | chr2 >> 4;
    let enc3 = (chr2 & 15) << 2 | chr3 >> 6;
    let enc4 = chr3 & 63;
    if (isNaN(chr2)) {
      enc3 = enc4 = 64;
    } else if (isNaN(chr3)) {
      enc4 = 64;
    }
    output = output + _keyStr.charAt(enc1) + _keyStr.charAt(enc2) + _keyStr.charAt(enc3) + _keyStr.charAt(enc4);
  }
  return output;
};
/**
 * Decodes given string.
 *
 * @param {string} input - Text to decode
 */
const decode = input => {
  let output = "";
  let i = 0;
  input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
  while (i < input.length) {
    const enc1 = _keyStr.indexOf(input.charAt(i++));
    const enc2 = _keyStr.indexOf(input.charAt(i++));
    const enc3 = _keyStr.indexOf(input.charAt(i++));
    const enc4 = _keyStr.indexOf(input.charAt(i++));
    const chr1 = enc1 << 2 | enc2 >> 4;
    const chr2 = (enc2 & 15) << 4 | enc3 >> 2;
    const chr3 = (enc3 & 3) << 6 | enc4;
    output = output + String.fromCharCode(chr1);
    if (enc3 != 64) {
      output = output + String.fromCharCode(chr2);
    }
    if (enc4 != 64) {
      output = output + String.fromCharCode(chr3);
    }
  }
  return output = _utf8_decode(output);
};
/**
 * (private method) does a UTF-8 encoding
 *
 * @private
 * @param {string} string - Text to encode
 */
function _utf8_encode(string) {
  string = string.replace(/\r\n/g, "\n");
  let utftext = "";
  for (let n = 0; n < string.length; n++) {
    const c = string.charCodeAt(n);
    if (c < 128) {
      utftext += String.fromCharCode(c);
    } else if (c > 127 && c < 2048) {
      utftext += String.fromCharCode(c >> 6 | 192) + String.fromCharCode(c & 63 | 128);
    } else {
      utftext += String.fromCharCode(c >> 12 | 224) + String.fromCharCode(c >> 6 & 63 | 128) + String.fromCharCode(c & 63 | 128);
    }
  }
  return utftext;
}
/**
 * (private method - do not use) does a UTF-8 decoding
 *
 * @private
 * @param {string} utftext - UTF-8 text to dencode
 */
function _utf8_decode(utftext) {
  let string = "";
  let i = 0;
  while (i < utftext.length) {
    const c = utftext.charCodeAt(i);
    if (c < 128) {
      string += String.fromCharCode(c);
      i++;
    } else if (c > 191 && c < 224) {
      const c2 = utftext.charCodeAt(i + 1);
      string += String.fromCharCode((c & 31) << 6 | c2 & 63);
      i += 2;
    } else {
      const c2 = utftext.charCodeAt(i + 1);
      const c3 = utftext.charCodeAt(i + 2);
      string += String.fromCharCode((c & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
      i += 3;
    }
  }
  return string;
}



;// CONCATENATED MODULE: ./extensions/common/js/lib/utils/string/base64.ts

function encodeToBase64Url(inputStr) {
  const base64Str = encode(inputStr);
  return base64Str.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}
function decodeBase64Url(base64UrlStr) {
  let base64Str = base64UrlStr.replace(/-/g, '+').replace(/_/g, '/');
  const padding = 4 - base64Str.length % 4;
  if (padding !== 4) {
    base64Str += '='.repeat(padding);
  }
  return decode(base64Str);
}
;// CONCATENATED MODULE: ./extensions/common/js/storeV3/internal/collection/utils/cursorUtils.ts


function encodeCursor(cursor) {
  return encodeToBase64Url(JSON.stringify(cursor));
}
function decodeCursor(cursorStr) {
  return JSON.parse(decodeBase64Url(cursorStr));
}
function isReverseCursor(cursorStr) {
  return cursorStr === CURSOR_LAST || decodeCursor(cursorStr).isReverse;
}
;// CONCATENATED MODULE: ./extensions/common/js/storeV3/internal/collection/utils/selectionUtils.ts



function applyDataToSelection(selectionCfg, data) {
  const result = {
    groups: {}
  };
  const addRecord = (group, groupIndex, recordKey) => {
    if (!result.groups[group.groupKey]) {
      result.groups[group.groupKey] = {
        collectionStart: group.collectionStart,
        collectionEnd: group.collectionEnd,
        records: new table/* OffsetMap */.aI(),
        total: group.total
      };
    }
    if (result.groups[group.groupKey].records !== 'all') {
      const records = result.groups[group.groupKey].records;
      records.fill(groupIndex, recordKey);
    }
  };
  const groupIndexManager = createGroupIndexManager(data);
  const allDataLoaded = data.groups.every(group => {
    return group.total === group.blocks.reduce((acc, block) => acc + block.records.length, 0);
  });
  Object.keys(selectionCfg.groups).forEach(groupKey => {
    const selectionGroup = selectionCfg.groups[groupKey];
    if (selectionGroup.records === 'all') {
      const dataGroup = groupIndexManager.getGroup(groupKey);
      if (dataGroup) {
        result.groups[groupKey] = {
          collectionStart: dataGroup.collectionStart,
          collectionEnd: dataGroup.collectionEnd,
          records: 'all',
          total: dataGroup.total
        };
      }
    } else {
      Array.from(selectionGroup.records.toMap().entries()).forEach(_ref => {
        let [groupIndex, recordKey] = _ref;
        const originalIndex = selectionGroup.collectionStart + groupIndex;
        const recordKeyAtOriginal = findDataRecordByIndex(data, originalIndex);
        const currentIndex = recordKeyAtOriginal?.key === recordKey ? originalIndex : findDataRecordIndex(data, recordKey);
        if (currentIndex !== null) {
          const gi = groupIndexManager.toGroupIndex(currentIndex);
          if (gi) {
            addRecord(gi.group, gi.groupIndex, recordKey);
          }
        } else {
          if (allDataLoaded) {
            // record was removed
            return;
          } else {
            // since the record wasn't found in loaded chunks, and not all chunks are loaded
            // let's assume that there is a bigger chance of this record to stay in the same group at the same location
            // unless there is another record in that position already

            if (recordKeyAtOriginal === null) {
              // there is no loaded record at the original index, so lets keep the original index
              const ogi = groupIndexManager.toGroupIndex(originalIndex);
              if (ogi) {
                addRecord(ogi.group, ogi.groupIndex, recordKey);
                return;
              }
            }

            // record might be missing due to block invalidation etc
            // find next not loaded block starting from the original index down
            const notLoadedBlocks = getNotLoadedBlocks(data);
            const nextNotLoadedBlocks = notLoadedBlocks.filter(block => originalIndex < block.collectionEnd);
            const prevNotLoadedBlocks = notLoadedBlocks.filter(block => originalIndex >= block.collectionStart);
            const sortedNotLoadedBlocks = [...nextNotLoadedBlocks, ...prevNotLoadedBlocks];
            for (const nextNotLoadedBlock of sortedNotLoadedBlocks) {
              for (let i = nextNotLoadedBlock.collectionStart; i < nextNotLoadedBlock.collectionEnd; i++) {
                const gi = groupIndexManager.toGroupIndex(i);
                if (gi) {
                  const records = result.groups[gi.group.groupKey]?.records;
                  if (records === 'all') {
                    continue;
                  }
                  if (records && records.toMap().has(gi.groupIndex)) {
                    continue;
                  }
                  addRecord(gi.group, gi.groupIndex, recordKey);
                  return;
                }
              }
            }
          }
        }
      });
    }
  });
  return {
    groups: result.groups,
    selected: countSelection(result)
  };
}
function buildViewportSelection(selection, data, viewportConfig) {
  const result = {
    groups: {}
  };
  let collectionOffset = 0;
  for (let i = 0; i < data.groups.length; i++) {
    const group = data.groups[i];
    if (selection.groups[group.groupKey]) {
      const records = selection.groups[group.groupKey].records;
      const collapsed = viewportConfig.collapsedGroups.includes(group.groupKey);
      if (collapsed) {
        result.groups[group.groupKey] = {
          expanded: false,
          collectionIndex: collectionOffset,
          records: records === 'all' ? 'all' : new Set(records.toMap().values()),
          total: group.total
        };
      } else {
        result.groups[group.groupKey] = {
          expanded: true,
          collectionStart: collectionOffset,
          collectionEnd: collectionOffset + group.total,
          records: records === 'all' ? 'all' : records,
          total: group.total
        };
        collectionOffset += group.total;
      }
    }
  }
  return {
    groups: result.groups,
    selected: selection.selected
  };
}
function applyMutationToSelection(selection, data, mutation) {
  // making a copy of the selection, to apply mutation changes
  selection = {
    groups: Object.keys(selection.groups).reduce((acc, key) => {
      acc[key] = {
        ...selection.groups[key],
        records: selection.groups[key].records === 'all' ? 'all' : selection.groups[key].records.clone()
      };
      return acc;
    }, {}),
    selected: selection.selected
  };
  const groupsMap = (0,lodash.keyBy)(data.groups, g => g.groupKey);
  mutation.added.forEach(record => {
    const groupKey = record.groupKey;
    if (!selection.groups[groupKey]) {
      selection.groups[groupKey] = {
        collectionStart: groupsMap[groupKey].collectionStart,
        collectionEnd: groupsMap[groupKey].collectionEnd,
        records: new table/* OffsetMap */.aI(),
        total: groupsMap[groupKey].total
      };
    }
    const group = selection.groups[groupKey];
    if (group.records === 'all') {
      return;
    }
    group.records.fill(record.groupIndex, record.recordKey);
  });
  mutation.removed.forEach(record => {
    const groupKey = record.groupKey;
    if (!selection.groups[groupKey]) {
      return;
    }
    const group = selection.groups[groupKey];
    if (group.records === 'all') {
      throw new Error('Not implemented');
    }
    if (group.records.get(record.groupIndex) === record.recordKey) {
      group.records.clear(record.groupIndex);
    } else {
      const entry = group.records.findByKey(record.recordKey, r => r);
      if (entry) {
        group.records.clear(entry[0]);
      }
    }
  });
  return {
    groups: selection.groups,
    selected: countSelection(selection)
  };
}
function countSelection(selection) {
  return Object.keys(selection.groups).reduce((acc, key) => {
    return acc + (selection.groups[key].records === 'all' ? selection.groups[key].total : selection.groups[key].records.size());
  }, 0);
}
;// CONCATENATED MODULE: ./extensions/common/js/storeV3/internal/collection/utils/buildViewport.ts




async function buildViewport(def, viewportCfg, data, recordsCache) {
  const viewport = await buildViewportForRegion(def, viewportCfg, data);
  if (viewportCfg.pinnedRecords.length === 0) {
    return viewport;
  }
  if (viewportCfg.pinnedRecords.length > 1) {
    throw new Error('Multiple pinned records are not supported');
  }
  return applyRecordPin(def, viewport, viewportCfg.pinnedRecords[0], viewportCfg.collapsedGroups, viewportCfg.selection, data, recordsCache);
}
async function applyRecordPin(def, originalViewport, pinnedRecord, collapsedGroups, selection, data, recordsCache) {
  const firstCursorData = originalViewport.cursors.first ? decodeCursor(originalViewport.cursors.first) : null;
  const lastCursorData = originalViewport.cursors.last ? decodeCursor(originalViewport.cursors.last) : null;
  const newGroup = data.groups.find(g => g.groupKey === pinnedRecord.groupKey);
  if (!newGroup) {
    return originalViewport;
  }
  const record = recordsCache.get(pinnedRecord.recordKey) || findDataRecordByKey(data, pinnedRecord.recordKey);
  if (!record) {
    return originalViewport;
  }
  let currPosition = null;
  if (originalViewport.records.findByKey(record.key, r => r.key)) {
    currPosition = 'within';
  } else {
    if (record && firstCursorData && lastCursorData) {
      const recordCursor = def.utils.cursor.toCursorData(record);
      if (def.utils.cursor.compare(recordCursor, firstCursorData) === -1) {
        currPosition = 'before';
      } else if (def.utils.cursor.compare(recordCursor, lastCursorData) === 1) {
        currPosition = 'after';
      } else {
        currPosition = 'within';
      }
    }
  }
  if (currPosition === null) {
    return originalViewport;
  }
  const newIndex = newGroup.collectionStart + Math.min(pinnedRecord.groupIndex, newGroup.total);
  let updatedViewport = originalViewport;
  if (currPosition === 'after') {
    if (newIndex < updatedViewport.start) {
      // before viewport
      updatedViewport = await buildViewportForRegion(def, {
        offset: updatedViewport.start - 1,
        limit: updatedViewport.end - updatedViewport.start,
        collapsedGroups: collapsedGroups,
        selection
      }, data);
      updatedViewport.records.shiftBy(1);
    } else if (newIndex >= updatedViewport.start && newIndex < updatedViewport.end) {
      // within viewport
      updatedViewport = await buildViewportForRegion(def, {
        offset: updatedViewport.start,
        limit: updatedViewport.end - updatedViewport.start - 1,
        collapsedGroups: collapsedGroups,
        selection
      }, data);
      updatedViewport.records.insert(newIndex, record);
    } else if (newIndex >= updatedViewport.end) {
      // after viewport
      // do nothing because indexes didn't change
    }
  } else if (currPosition === 'within') {
    if (newIndex < updatedViewport.start) {
      // before viewport
      updatedViewport = await buildViewportForRegion(def, {
        offset: updatedViewport.start - 1,
        limit: updatedViewport.end - updatedViewport.start + 1,
        collapsedGroups: collapsedGroups,
        selection
      }, data);
      const currIndex = updatedViewport.records.findByKey(record.key, r => r.key)?.[0];
      if (currIndex) {
        updatedViewport.records.remove(currIndex);
        updatedViewport.records.shiftBy(1);
      } else {
        // couldn't find the request to remove, rollback to original viewport
        updatedViewport = originalViewport;
      }
    } else if (newIndex >= updatedViewport.start && newIndex < updatedViewport.end) {
      // within viewport
      const currRecord = updatedViewport.records.findByKey(record.key, r => r.key);
      if (currRecord) {
        updatedViewport.records.remove(currRecord[0]);
        updatedViewport.records.insert(newIndex, currRecord[1]);
      } else {
        // couldn't find the request to remove, rollback to original viewport
        updatedViewport = originalViewport;
      }
    } else if (newIndex >= updatedViewport.end) {
      // after viewport
      updatedViewport = await buildViewportForRegion(def, {
        offset: updatedViewport.start,
        limit: updatedViewport.end - updatedViewport.start + 1,
        collapsedGroups: collapsedGroups,
        selection
      }, data);
      const currIndex = updatedViewport.records.findByKey(record.key, r => r.key)?.[0];
      if (currIndex) {
        updatedViewport.records.remove(currIndex);
      } else {
        // couldn't find the request to remove, rollback to original viewport
        updatedViewport = originalViewport;
      }
    }
  } else if (currPosition === 'before') {
    if (newIndex < updatedViewport.start) {
      // before viewport
      // do nothing because the indexes didn't change
    } else if (newIndex >= updatedViewport.start && newIndex < updatedViewport.end) {
      // within viewport
      updatedViewport = await buildViewportForRegion(def, {
        offset: updatedViewport.start + 1,
        limit: updatedViewport.end - updatedViewport.start - 1,
        collapsedGroups: collapsedGroups,
        selection
      }, data);
      updatedViewport.records.shiftBy(-1);
      updatedViewport.records.insert(newIndex, record);
    } else if (newIndex >= updatedViewport.end) {
      // after viewport
      updatedViewport = await buildViewportForRegion(def, {
        offset: updatedViewport.start + 1,
        limit: updatedViewport.end - updatedViewport.start,
        collapsedGroups: collapsedGroups,
        selection
      }, data);
      updatedViewport.records.shiftBy(-1);
    }
  }
  updatedViewport.start = originalViewport.start;
  updatedViewport.end = originalViewport.end;
  const firstRecord = updatedViewport.records.first();
  if (firstRecord) {
    const cursorData = def.utils.cursor.toCursorData(firstRecord[1]);
    updatedViewport.cursors.first = encodeCursor({
      isReverse: true,
      ...cursorData
    });
  }
  const lastRecord = updatedViewport.records.last();
  if (lastRecord) {
    const cursorData = def.utils.cursor.toCursorData(lastRecord[1]);
    updatedViewport.cursors.last = encodeCursor({
      isReverse: false,
      ...cursorData
    });
  }
  return updatedViewport;
}
async function buildViewportForRegion(def, viewportCfg, data) {
  const viewport = {
    start: viewportCfg.offset,
    end: viewportCfg.offset + viewportCfg.limit,
    groups: [],
    records: new table/* OffsetMap */.aI(),
    selection: null,
    cursors: {
      first: null,
      last: null
    },
    total: data.total
  };
  for (let groupIndex = 0; groupIndex < data.groups.length; groupIndex++) {
    const group = data.groups[groupIndex];
    const viewportGroupStart = data.groups.slice(0, groupIndex).reduce((a, b) => {
      if (viewportCfg.collapsedGroups.includes(b.groupKey)) {
        return a;
      }
      return a + b.total;
    }, 0);
    const viewportGroupEnd = viewportGroupStart + group.total;
    const viewportGroup = {
      groupKey: group.groupKey,
      collectionStart: viewportGroupStart,
      collectionEnd: viewportGroupEnd,
      rendered: 'none'
    };
    viewport.groups.push(viewportGroup);
    if (viewportCfg.collapsedGroups.includes(viewportGroup.groupKey)) {
      viewportGroup.collectionEnd = viewportGroup.collectionStart;
      viewportGroup.rendered = 'collapsed';
      continue;
    }
    if (viewport.start === viewport.end) {
      // viewport is empty
      continue;
    }
    if (viewportGroupStart >= viewport.end || viewportGroupEnd <= viewport.start) {
      // group is not within viewport start/end range
      continue;
    }
    viewportGroup.rendered = {
      groupStart: Math.max(0, viewport.start - viewportGroupStart),
      groupEnd: Math.max(0, Math.min(viewport.end, viewportGroupEnd) - Math.max(viewport.start, viewportGroupStart) + Math.max(0, viewport.start - viewportGroupStart)),
      data: []
    };
    for (let i = 0; i < group.blocks.length; i++) {
      const block = group.blocks[i];
      const blockOffset = viewportGroupStart + block.groupStart;
      const blockEnd = Math.min(blockOffset + block.records.length, viewportGroupEnd);
      if (blockOffset >= viewport.end || blockEnd <= viewport.start) {
        // block is not within viewport
      } else {
        const recordsStart = Math.max(0, viewport.start - blockOffset);
        const recordsEnd = Math.max(0, Math.min(viewport.end, blockEnd) - blockOffset);
        const records = block.records.slice(recordsStart, recordsEnd);

        // records offset relative to viewport
        const recordsViewportOffset = blockOffset + recordsStart;
        const recordsViewportEnd = blockOffset + recordsEnd;
        viewport.records.fill(recordsViewportOffset, records);
        if (!block.invalidated) {
          const recordsGroupStart = recordsViewportOffset - viewportGroupStart;
          const recordsGroupEnd = recordsViewportEnd - viewportGroupStart;
          if (viewportGroup.rendered.data.length === 0) {
            if (recordsGroupStart > viewportGroup.rendered.groupStart) {
              viewportGroup.rendered.data.push({
                groupStart: viewportGroup.rendered.groupStart,
                groupEnd: recordsGroupStart,
                blocks: 'none'
              });
            }
            viewportGroup.rendered.data.push({
              groupStart: recordsGroupStart,
              groupEnd: recordsGroupEnd,
              blocks: [block.blockId]
            });
          } else if (viewportGroup.rendered.data.length > 0) {
            const last = viewportGroup.rendered.data.at(-1);
            if (last.groupEnd === recordsGroupStart) {
              last.groupEnd = recordsGroupEnd;
              if (last.blocks === 'none') {
                last.blocks = [];
              }
              last.blocks.push(block.blockId);
            } else {
              viewportGroup.rendered.data.push({
                groupStart: last.groupEnd,
                groupEnd: recordsGroupStart,
                blocks: 'none'
              });
              viewportGroup.rendered.data.push({
                groupStart: recordsGroupStart,
                groupEnd: recordsGroupEnd,
                blocks: [block.blockId]
              });
            }
          }
        }
      }
    }
    if (viewportGroup.rendered.data.length > 0) {
      const last = viewportGroup.rendered.data.at(-1);
      if (last.groupEnd < viewportGroup.rendered.groupEnd) {
        viewportGroup.rendered.data.push({
          groupStart: last.groupEnd,
          groupEnd: viewportGroup.rendered.groupEnd,
          blocks: 'none'
        });
      }
    }
  }
  if (viewportCfg.selection) {
    viewport.selection = buildViewportSelection(viewportCfg.selection, data, viewportCfg);
  }
  const firstRecord = viewport.records.first();
  if (firstRecord) {
    const cursorData = def.utils.cursor.toCursorData(firstRecord[1]);
    viewport.cursors.first = encodeCursor({
      isReverse: true,
      ...cursorData
    });
  }
  const lastRecord = viewport.records.last();
  if (lastRecord) {
    const cursorData = def.utils.cursor.toCursorData(lastRecord[1]);
    viewport.cursors.last = encodeCursor({
      isReverse: false,
      ...cursorData
    });
  }
  viewport.total = viewport.groups.filter(g => g.rendered !== 'collapsed').reduce((a, b) => {
    return a + b.collectionEnd - b.collectionStart;
  }, 0);
  return viewport;
}
;// CONCATENATED MODULE: ./extensions/common/js/storeV3/internal/collection/utils/commonUtils.ts
function shallowCompare(a, b) {
  if (a === b) {
    return true;
  }
  if (typeof a !== typeof b) {
    return false;
  }
  if (Array.isArray(a)) {
    if (a.length !== b.length) {
      return false;
    }
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        return false;
      }
    }
    return true;
  }
  for (const key in a) {
    if (a[key] !== b[key]) {
      return false;
    }
  }
  return true;
}
function isNotNull(value) {
  return value !== null;
}
;// CONCATENATED MODULE: ./extensions/common/js/storeV3/internal/collection/operations/types.ts
let OperationResultKind = /*#__PURE__*/function (OperationResultKind) {
  OperationResultKind["STATE"] = "STATE";
  OperationResultKind["OPERATION"] = "OPERATION";
  return OperationResultKind;
}({});
;// CONCATENATED MODULE: ./extensions/common/js/storeV3/internal/collection/operations/utils.ts





function defineOperation(name, _payload, _lifecycle) {
  return {
    name,
    create(payload) {
      const $lifecycle = kefir_bus_default()();
      const lifecycleEvents = [];
      $lifecycle.onValue(event => lifecycleEvents.push(event));
      let completedAt = null;
      return {
        id: (0,v4/* default */.Z)(),
        name,
        payload,
        createdAt: Date.now(),
        get completedAt() {
          return completedAt;
        },
        $lifecycle,
        get lifecycleEvents() {
          return lifecycleEvents;
        },
        emit(eventDef, payload) {
          if (completedAt) {
            throw new Error('emit() called after complete()');
          }
          if (eventDef === OPERATION_EVENT_COMPLETE) {
            throw new Error('call complete() instead of emit(OPERATION_EVENT_COMPLETE, {})');
          }
          const event = eventDef.create(payload);
          $lifecycle.emit(event);
        },
        complete() {
          completedAt = Date.now();
          $lifecycle.emit(OPERATION_EVENT_COMPLETE.create({}));
          $lifecycle.end();
        },
        toPromise() {
          if (completedAt) {
            return new Promise(resolve => setTimeout(resolve, 0));
          }
          return new Promise(resolve => {
            const onEnd = () => {
              $lifecycle.offEnd(onEnd);
              resolve();
            };
            $lifecycle.onEnd(onEnd);
          });
        }
      };
    },
    isDefOf(op) {
      return op.name === name;
    }
  };
}
const withPayload = () => null;
const withLifecycle = events => events;
function defineOperationEvent(eventName, _payload) {
  return {
    eventName,
    create(payload) {
      return {
        id: (0,v4/* default */.Z)(),
        eventName,
        payload
      };
    },
    isDefOf(event) {
      return event.eventName === eventName;
    }
  };
}
function buildEmitOperation(handler) {
  return (opDef, payload) => {
    const op = opDef.create(payload);
    handler(op);
    return op;
  };
}
function buildOperationFlow(opDef, handler) {
  return (def, params, $operations, $state, $viewport, $mutation) => {
    return kefir_esm["default"].stream($emitter => {
      const onValue = ops => {
        if (Array.isArray(ops)) {
          const [op, skipped] = ops;
          skipped.forEach(op => op.complete());
          ops = op;
        }
        ops.complete();
      };
      const $stream = $operations.filter(opDef.isDefOf).delay(0).thru($ops => handler({
        def,
        params,
        $ops: $ops,
        $state,
        emitState: newState => $emitter.emit({
          kind: OperationResultKind.STATE,
          state: newState
        }),
        emitOperation: buildEmitOperation(op => $emitter.emit({
          kind: OperationResultKind.OPERATION,
          operation: op
        })),
        $viewport,
        $mutation
      }));
      $stream.onValue(onValue);
      return () => {
        $stream.offValue(onValue);
      };
    });
  };
}
;// CONCATENATED MODULE: ./extensions/common/js/storeV3/internal/collection/operations/constants.ts

const OPERATION_EVENT_COMPLETE = defineOperationEvent('complete', withPayload());
;// CONCATENATED MODULE: ./extensions/common/js/storeV3/internal/collection/utils/viewportUtils.ts
function getViewportBufferRange(viewport, viewportCfg) {
  const buff = viewportCfg.buffer;
  const start = buff ? Math.max(0, Math.floor((viewport.start - buff) / buff) * buff) : viewport.start;
  const end = buff ? Math.min(Math.ceil((viewport.end + buff) / buff) * buff, viewport.total) : viewportCfg.limit;
  return {
    start,
    end
  };
}
;// CONCATENATED MODULE: ./extensions/common/js/storeV3/internal/collection/operations/operationCleanup.ts






const CLEANUP_THROTTLE_MS = 10000;
const OPERATION_CLEANUP = defineOperation('cleanup', withPayload(), withLifecycle([]));
const processCleanup = buildOperationFlow(OPERATION_CLEANUP, _ref => {
  let {
    $ops,
    $state,
    emitState,
    $viewport
  } = _ref;
  return $ops.thru((0,kefir/* flatMapThrottle */.aT)(CLEANUP_THROTTLE_MS, {
    keepSkipped: true
  }, () => {
    return kefir_esm["default"].combine([$state, $viewport]).map(_ref2 => {
      let [state, viewport] = _ref2;
      if (state.data && viewport && state.viewports.length > 0) {
        const viewportCfg = state.viewports[0];
        const {
          start: safeStart,
          end: safeEnd
        } = getViewportBufferRange(viewport, viewportCfg);
        let dataChanged = false;
        const newData = (0,immer_esm/* default */.ZP)(state.data, draft => {
          let groupOffset = 0;
          for (const group of draft.groups) {
            if (viewportCfg.collapsedGroups.includes(group.groupKey)) {
              // skip collapsed groups
              continue;
            }
            group.blocks = group.blocks.map(block => {
              const blockStart = groupOffset + block.groupStart;
              const blockEnd = blockStart + block.records.length;
              if (blockEnd < safeStart || blockStart > safeEnd) {
                // invalidate block
                block.invalidated = true;
                dataChanged = true;
                return null;
              } else {
                return block;
              }
            }).filter(isNotNull);
            groupOffset += group.total;
          }
        });
        let cacheChanged = false;
        const newRecordsCache = (0,immer_esm/* default */.ZP)(state.recordsCache, draft => {
          Array.from(draft.keys()).forEach(recordKey => {
            if (!state.viewports.some(v => v.pinnedRecords.some(p => p.recordKey === recordKey))) {
              cacheChanged = true;
              draft.delete(recordKey);
            }
          });
        });
        if (dataChanged || cacheChanged) {
          emitState({
            ...state,
            data: dataChanged ? newData : state.data,
            recordsCache: cacheChanged ? newRecordsCache : state.recordsCache
          });
          return true;
        }
      }
      return false;
    });
  })).map(_ref3 => {
    let [, op, skipped] = _ref3;
    return [op, skipped];
  });
});
;// CONCATENATED MODULE: ./extensions/common/js/storeV3/internal/collection/utils/evaluateViewport.ts


async function evaluateViewport(data, viewport, config) {
  const result = {
    blocksToLoad: []
  };
  if (viewport.start < viewport.end) {
    viewport.groups.forEach(viewportGroup => {
      if (viewportGroup.rendered !== 'none' && viewportGroup.rendered !== 'collapsed') {
        const group = data.groups.find(g => g.groupKey === viewportGroup.groupKey);
        if (!group) {
          // data doesn't exist anymore, ignore
          return;
        }
        if (viewportGroup.rendered.data.length === 0) {
          if (viewportGroup.rendered.groupStart === 0) {
            result.blocksToLoad.push({
              groupKey: viewportGroup.groupKey,
              groupStart: viewportGroup.rendered.groupStart,
              groupEnd: viewportGroup.rendered.groupEnd,
              cursor: null,
              offset: 0,
              limit: viewportGroup.rendered.groupEnd
            });
          } else if (viewportGroup.rendered.groupEnd === group.total) {
            // load from end
            result.blocksToLoad.push({
              groupKey: viewportGroup.groupKey,
              groupStart: viewportGroup.rendered.groupStart,
              groupEnd: viewportGroup.rendered.groupEnd,
              cursor: CURSOR_LAST,
              offset: 0,
              limit: viewportGroup.rendered.groupEnd - viewportGroup.rendered.groupStart
            });
          } else {
            // load based on offset
            result.blocksToLoad.push({
              groupKey: viewportGroup.groupKey,
              groupStart: viewportGroup.rendered.groupStart,
              groupEnd: viewportGroup.rendered.groupEnd,
              cursor: null,
              offset: viewportGroup.rendered.groupStart,
              limit: viewportGroup.rendered.groupEnd - viewportGroup.rendered.groupStart
            });
          }
        } else {
          viewportGroup.rendered.data.forEach((part, partIndex, parts) => {
            if (part.blocks === 'none') {
              if (partIndex === 0) {
                if (part.groupStart === 0) {
                  // missing block starts at the top of the group
                  result.blocksToLoad.push({
                    groupKey: viewportGroup.groupKey,
                    groupStart: part.groupStart,
                    groupEnd: part.groupEnd,
                    cursor: null,
                    offset: 0,
                    limit: part.groupEnd - part.groupStart
                  });
                } else {
                  const nextPartWithBlocks = parts[partIndex + 1];
                  if (!nextPartWithBlocks || nextPartWithBlocks.blocks === 'none') {
                    // TODO: add explanation, and ignore in production build
                    throw new Error('should not happen');
                  }
                  const nextBlock = group.blocks.find(b => b.blockId === nextPartWithBlocks.blocks[0]);

                  // load data from prev_cursor of the block
                  result.blocksToLoad.push({
                    groupKey: viewportGroup.groupKey,
                    groupStart: part.groupStart,
                    groupEnd: part.groupEnd,
                    cursor: nextBlock.prev,
                    offset: 0,
                    limit: part.groupEnd - part.groupStart
                  });
                }
              } else {
                const prevPartWithBlocks = parts[partIndex - 1];
                if (!prevPartWithBlocks || prevPartWithBlocks.blocks === 'none') {
                  // TODO: add explanation, and ignore in production build
                  throw new Error('should not happen');
                }
                const prevBlock = group.blocks.find(b => b.blockId === prevPartWithBlocks.blocks.at(-1));

                // load data from next_cursor of the block
                result.blocksToLoad.push({
                  groupKey: viewportGroup.groupKey,
                  groupStart: part.groupStart,
                  groupEnd: part.groupEnd,
                  cursor: prevBlock.next,
                  offset: 0,
                  limit: part.groupEnd - part.groupStart
                });
              }
            }
          });
        }
      }
    });
  }

  // split blocks that are too big
  result.blocksToLoad = result.blocksToLoad.flatMap(block => {
    if (block.limit > config.maxBlockSize) {
      const blocks = [];
      const blockCount = Math.ceil(block.limit / config.maxBlockSize);

      // When in reverse loading order, we need to work to the top off the end of the chunk
      if (block.cursor && isReverseCursor(block.cursor)) {
        for (let i = blockCount; i >= 0; i--) {
          const newGroupStart = Math.max(block.groupStart, block.groupEnd - (i + 1) * config.maxBlockSize);
          const newLimit = Math.min(block.limit - i * config.maxBlockSize, config.maxBlockSize);
          const newGroupEnd = newGroupStart + newLimit;
          blocks.push({
            ...block,
            groupStart: newGroupStart,
            groupEnd: newGroupEnd,
            offset: block.groupEnd - newGroupEnd,
            limit: newLimit
          });
        }
      } else {
        for (let i = 0; i < blockCount; i++) {
          const newGroupStart = block.groupStart + i * config.maxBlockSize;
          const newLimit = Math.min(block.limit - i * config.maxBlockSize, config.maxBlockSize);
          blocks.push({
            ...block,
            groupStart: newGroupStart,
            groupEnd: newGroupStart + newLimit,
            offset: block.offset + (newGroupStart - block.groupStart),
            limit: newLimit
          });
        }
      }
      return blocks;
    }
    return [block];
  }).filter(block => block.limit > 0); // TODO: add tests for this usecase

  return result;
}
// EXTERNAL MODULE: ./.yarn/cache/fast-deep-equal-npm-3.1.3-790edcfcf5-e21a9d8d84.zip/node_modules/fast-deep-equal/es6/index.js
var es6 = __webpack_require__(59844);
var es6_default = /*#__PURE__*/__webpack_require__.n(es6);
// EXTERNAL MODULE: ./extensions/common/js/lib/utils/isNotNil.ts
var isNotNil = __webpack_require__(72086);
;// CONCATENATED MODULE: ./extensions/common/js/storeV3/internal/collection/operations/operationFetchBlock.ts










const OPERATION_FETCH_BLOCK_DONE = defineOperationEvent('fetchBlockDone', withPayload());
const OPERATION_FETCH_BLOCK = defineOperation('fetchBlock', withPayload(), withLifecycle([OPERATION_FETCH_BLOCK_DONE]));
const processFetchBlock = buildOperationFlow(OPERATION_FETCH_BLOCK, _ref => {
  let {
    def,
    params,
    $ops,
    $state,
    emitState,
    $viewport
  } = _ref;
  // TODO: this calculation is needed for operationCleanup and operationEvaluateViewport
  // add additional bufferStart and bufferEnd properties to the viewport object
  // bufferStart, start, end, bufferEnd props would cover both visible (with overscan) and buffered areas
  // end will reduce number of recalculations per each operation
  const $viewportMetadata = $viewport.thru($obs => kefir_esm["default"].combine([$obs], [$state], (viewport, state) => [viewport, state])).map(_ref2 => {
    let [viewport, state] = _ref2;
    if (viewport && state.viewports.length > 0) {
      return getViewportMetadata(viewport, state.viewports[0]);
    }
    return null;
  }).filter(isNotNil/* default */.Z).skipDuplicates((es6_default()));
  return $ops.thru((0,kefir/* flatMapDedupe */.o0)({
    canRun(runningOps, op) {
      if (def.api.fetchBlockLimit && runningOps.length >= def.api.fetchBlockLimit) {
        return false;
      }
      return !doesOpOverlap(op, runningOps);
    },
    skip(op) {
      return kefir_esm["default"].constant([op, 'overlap', 0]);
    },
    run(op) {
      return (0,kefir/* fromPromiseUntilBy */.je)($viewportMetadata
      /**
       * abort fetch if block is outside of viewport buffer
       */.filter(viewportMetadata => isBlockOutsideViewportBuffer(op.payload.block, viewportMetadata)).map(() => 'abort'), signal => def.api.fetchBlock({
        ...params,
        groupKey: op.payload.block.groupKey,
        cursor: op.payload.block.cursor,
        offset: op.payload.block.offset,
        limit: op.payload.block.limit
      }, signal)).map(response => [op, response]);
    }
  })).thru($obs => kefir_esm["default"].combine([$obs], [$state], (_ref3, state) => {
    let [op, response] = _ref3;
    return [op, response, state];
  })).map(_ref4 => {
    let [op, response, state] = _ref4;
    if (response === 'overlap' || response === 'abort') {
      return op;
    }
    const newBlock = createBlockFromResponse(state.data, op.payload.block, response);
    const newData = produceData(state.data, {
      metadata: {
        groups: response.metadata.groups
      },
      blocks: newBlock ? [{
        groupKey: op.payload.block.groupKey,
        block: newBlock
      }] : undefined
    });
    const newState = {};
    if (!es6_default()(newData, state.data)) {
      newState.data = newData;
    }
    if (newState.data) {
      const newViewports = state.viewports.map(viewport => {
        return {
          ...viewport,
          selection: viewport.selection ? applyDataToSelection(viewport.selection, newState.data) : null
        };
      });
      if (!es6_default()(newViewports, state.viewports)) {
        newState.viewports = newViewports;
      }
    }
    if (newState.data && state.recordsCache.size > 0) {
      const cachedKeys = Array.from(state.recordsCache.keys());
      const newRecords = cachedKeys.map(key => findDataRecordByKey(newState.data, key)).filter(isNotNull);
      let changed = false;
      const newRecordsCache = (0,immer_esm/* default */.ZP)(state.recordsCache, draft => {
        for (const newRecord of newRecords) {
          const cachedRecord = draft.get(newRecord.key);
          if (!cachedRecord || newRecord.lastSavedTimestamp > cachedRecord.lastSavedTimestamp) {
            draft.set(newRecord.key, newRecord);
            changed = true;
          }
        }
      });
      if (changed) {
        newState.recordsCache = newRecordsCache;
      }
    }
    if (newState.data) {
      // TODO: if realtime update happens during data fetching, potentially the data could be outdated,
      // figure out a better way to handle this than comparing dataUpdatedAt with time when request started (previous code version)
      // not critical atm
      emitState({
        ...state,
        ...newState,
        dataUpdatedAt: state.dataUpdatedAt
      });
    }
    op.emit(OPERATION_FETCH_BLOCK_DONE, {});
    return op;
  });
});
function doesOpOverlap(op, otherOps) {
  const curr = op.payload.block;
  return otherOps.some(_ref5 => {
    let {
      payload: {
        block: r
      }
    } = _ref5;
    return curr.groupKey === r.groupKey && (curr.groupEnd > r.groupStart && curr.groupEnd <= r.groupEnd || curr.groupStart >= r.groupStart && curr.groupStart < r.groupEnd);
  });
}
function getViewportMetadata(viewport, viewportCfg) {
  const {
    start: bufferStart,
    end: bufferEnd
  } = getViewportBufferRange(viewport, viewportCfg);
  return {
    bufferStart,
    bufferEnd,
    groupsOffsets: viewport.groups.reduce((acc, group) => {
      acc[group.groupKey] = group.collectionStart;
      return acc;
    }, {})
  };
}
function isBlockOutsideViewportBuffer(block, viewportMetadata) {
  const groupOffset = viewportMetadata.groupsOffsets[block.groupKey] ?? 0;
  return groupOffset + block.groupEnd < viewportMetadata.bufferStart || groupOffset + block.groupStart > viewportMetadata.bufferEnd;
}
;// CONCATENATED MODULE: ./extensions/common/js/storeV3/internal/collection/utils/blockUtils.ts
function sortByProximityToViewport(blocks, viewport) {
  // Calculate the distance between each block and the viewport
  const distances = blocks.map(block => {
    const group = viewport.groups.find(g => g.groupKey === block.groupKey);
    if (!group) {
      return Infinity;
    }
    const distanceToStart = Math.abs(group.collectionStart + block.groupStart - viewport.start);
    const distanceToEnd = Math.abs(group.collectionStart + block.groupStart + block.groupEnd - block.groupStart - viewport.end);
    return distanceToStart + distanceToEnd;
  });

  // Sort the blocks by their distance to the viewport
  const sortedBlocks = blocks.slice().sort((a, b) => {
    const distanceA = distances[blocks.indexOf(a)];
    const distanceB = distances[blocks.indexOf(b)];
    return distanceA - distanceB;
  });
  return sortedBlocks;
}

/**
 * Whether block intersects with viewport
 */
function isBlockInViewport(block, viewport) {
  const group = viewport.groups.find(g => g.groupKey === block.groupKey);
  if (!group) {
    return false;
  }
  const groupStart = group.collectionStart + block.groupStart;
  const groupEnd = group.collectionStart + block.groupEnd;
  return groupStart < viewport.end && groupEnd > viewport.start;
}
;// CONCATENATED MODULE: ./extensions/common/js/storeV3/internal/collection/utils/mutationUtils.ts


(0,immer_esm/* enableMapSet */.MD)();
function produceDataWithMutation(data, mutation) {
  let changed = false;
  const newData = (0,immer_esm/* default */.ZP)(data, draft => {
    for (let i = 0; i < mutation.transactions.length; i++) {
      const mt = mutation.transactions[i];
      if (mt.type === MutationTransactionType.DELETE_PER_KEY) {
        /**
         * DELETE operation most likely emitted for a record that loaded / in viewport.
         */

        for (let groupIndex = 0; groupIndex < draft.groups.length; groupIndex++) {
          const group = draft.groups[groupIndex];
          for (let blockIndex = 0; blockIndex < group.blocks.length; blockIndex++) {
            const block = group.blocks[blockIndex];
            const recordIndex = block.records.findIndex(r => r.key === mt.key);
            if (recordIndex >= 0) {
              changed = true;
              group.total -= 1;
              block.groupEnd -= 1;
              if (block.groupStart === block.groupEnd) {
                // block is now empty, remove it
                group.blocks.splice(blockIndex, 1);
                blockIndex -= 1;
              } else {
                block.records.splice(recordIndex, 1);

                // shift all proceeding blocks
                for (let blockIndex2 = blockIndex + 1; blockIndex2 < group.blocks.length; blockIndex2++) {
                  const block2 = group.blocks[blockIndex2];
                  block2.groupStart -= 1;
                  block2.groupEnd -= 1;
                }
              }
            }
          }
        }
      }
    }
  });
  return changed ? newData : data;
}
function produceCacheWithMutation(cache, mutation) {
  if (mutation.transactions.length === 0 || cache.size === 0) {
    return cache;
  }
  let changed = false;
  const newCache = (0,immer_esm/* default */.ZP)(cache, draft => {
    for (let i = 0; i < mutation.transactions.length; i++) {
      const mt = mutation.transactions[i];
      if (mt.type === MutationTransactionType.UPDATE_PER_KEY) {
        const record = draft.get(mt.key);
        if (record) {
          if (mt.completedAt === null || mt.completedAt > record.lastSavedTimestamp) {
            draft.set(mt.key, {
              ...record,
              ...mt.changes
            });
            changed = true;
          }
        }
      }
    }
  });
  return changed ? newCache : cache;
}
function produceViewportWithMutation(viewport, mutation) {
  let changed = false;
  const newData = (0,immer_esm/* default */.ZP)(viewport, draft => {
    for (let i = 0; i < mutation.transactions.length; i++) {
      const mt = mutation.transactions[i];
      if (mt.type === MutationTransactionType.UPDATE_PER_KEY) {
        const entry = draft.records.findByKey(mt.key, e => e.key);
        if (entry) {
          const [position, record] = entry;
          if (mt.completedAt === null || mt.completedAt > record.lastSavedTimestamp) {
            draft.records.fill(position, {
              ...record,
              ...mt.changes
            });
            changed = true;
          }
        }
      }
    }
  });
  return changed ? newData : viewport;
}
;// CONCATENATED MODULE: ./extensions/common/js/storeV3/internal/collection/operations/operationEvaluateViewport.ts









const OPERATION_EVALUATE_VIEWPORT = defineOperation('evaluateViewport', withPayload(), withLifecycle([]));
const processEvaluateViewport = buildOperationFlow(OPERATION_EVALUATE_VIEWPORT, _ref => {
  let {
    def,
    $ops,
    $state,
    emitOperation,
    $viewport,
    $mutation
  } = _ref;
  return $ops
  /**
   * preserve all debounced ops (skipped) to return them for completion
   */.bufferBy($ops.debounce(200)).thru((0,kefir/* flatMapThrottle */.aT)(100, {
    keepSkipped: true
  }, () => {
    /**
     * after debounce, still need to use flatMapThrottle
     * incase async `buildViewport` takes a long time (depends on number of groups and blocks)
     */
    return $state.thru($obs => kefir_esm["default"].combine([$obs], [$mutation], (state, mutation) => [state, mutation])).take(1).flatMap(_ref2 => {
      let [state, mutation] = _ref2;
      return kefir_esm["default"].fromPromise((async () => {
        const results = [];
        for (const viewportCfg of state.viewports) {
          const buff = viewportCfg.buffer;
          const offset = buff ? Math.max(0, Math.floor((viewportCfg.offset - buff) / buff) * buff) : viewportCfg.offset;
          const limit = buff ? Math.min(Math.ceil((viewportCfg.offset + viewportCfg.limit + buff) / buff) * buff - offset, state.data.total - offset) : viewportCfg.limit;
          const recordsCache = produceCacheWithMutation(state.recordsCache, mutation);
          const viewport = await buildViewport(def, {
            offset,
            limit,
            pinnedRecords: viewportCfg.pinnedRecords,
            collapsedGroups: viewportCfg.collapsedGroups,
            selection: viewportCfg.selection
          }, state.data, recordsCache);
          const evalResult = await evaluateViewport(state.data, viewport, {
            maxBlockSize: def.api.maxBlockSize
          });
          results.push(evalResult);
        }
        return results;
      })());
    }).map(evalResults => evalResults[0] || null);
  })).thru($obs => kefir_esm["default"].combine([$obs], [$viewport], (_ref3, viewport) => {
    let [evalResult, opBuffered, skippedBuffered] = _ref3;
    const op = opBuffered[opBuffered.length - 1];
    const skipped = skippedBuffered.flat().concat(opBuffered.slice(0, -1));
    return [evalResult, op, skipped, viewport];
  })).map(_ref4 => {
    let [evalResult, op, skipped, viewport] = _ref4;
    if (evalResult) {
      emitOperation(OPERATION_CLEANUP, {});
      const blocks = viewport ? sortByProximityToViewport(evalResult.blocksToLoad, viewport) : evalResult.blocksToLoad;
      if (viewport) {
        /**
         * block could be within viewport visible range or within buffer range
         * prioritize visible range to be loaded first
         */

        const visibleBlocks = blocks.filter(block => isBlockInViewport(block, viewport));
        if (visibleBlocks.length > 0) {
          blocks.splice(0, blocks.length, ...visibleBlocks);
        }
      }
      blocks.forEach(block => emitOperation(OPERATION_FETCH_BLOCK, {
        block
      }));
    }
    return [op, skipped];
  });
});
;// CONCATENATED MODULE: ./extensions/common/js/storeV3/internal/collection/operations/operationUnpinRecord.ts




const OPERATION_UNPIN_RECORD = defineOperation('unpinRecord', withPayload(), withLifecycle([]));
const processUnpinRecord = buildOperationFlow(OPERATION_UNPIN_RECORD, _ref => {
  let {
    $ops,
    $state,
    emitState
  } = _ref;
  return $ops.thru($obs => kefir_esm["default"].combine([$obs], [$state], (op, state) => [op, state])).map(_ref2 => {
    let [op, state] = _ref2;
    if (!op.payload.viewportId) {
      const newState = (0,immer_esm/* default */.ZP)(state, draft => {
        draft.viewports.forEach(viewport => {
          if (op.payload.recordKey) {
            viewport.pinnedRecords = viewport.pinnedRecords.filter(r => r.recordKey !== op.payload.recordKey);
          } else {
            viewport.pinnedRecords = [];
          }
        });
      });
      if (!es6_default()(newState.viewports, state.viewports)) {
        emitState(newState);
      }
    } else {
      const newState = (0,immer_esm/* default */.ZP)(state, draft => {
        const viewport = draft.viewports.find(v => v.viewportId === op.payload.viewportId);
        if (viewport) {
          if (op.payload.recordKey) {
            viewport.pinnedRecords = viewport.pinnedRecords.filter(r => r.recordKey !== op.payload.recordKey);
          } else {
            viewport.pinnedRecords = [];
          }
        }
      });
      if (!es6_default()(newState.viewports, state.viewports)) {
        emitState(newState);
      }
    }
    return op;
  });
});
;// CONCATENATED MODULE: ./extensions/common/js/storeV3/internal/collection/operations/operationHandleRealtimeEvent.ts






const OPERATION_HANDLE_REALTIME_EVENT = defineOperation('handleRealtimeEvent', withPayload(), withLifecycle([]));
const processHandleRealtimeEvent = buildOperationFlow(OPERATION_HANDLE_REALTIME_EVENT, _ref => {
  let {
    $ops,
    $state,
    emitState,
    emitOperation
  } = _ref;
  return $ops.thru($obs => kefir_esm["default"].combine([$obs], [$state], (op, state) => [op, state])).map(_ref2 => {
    let [op, state] = _ref2;
    const newData = (0,immer_esm/* default */.ZP)(state.data, draft => {
      if (op.payload.event.type === RealtimeEventType.CREATE) {
        // invalidate all
        for (let i = 0; i < draft.groups.length; i++) {
          const g = draft.groups[i];
          for (let j = 0; j < g.blocks.length; j++) {
            const b = g.blocks[j];
            b.invalidated = true;
          }
        }
      } else if (op.payload.event.type === RealtimeEventType.UPDATE) {
        // invalidate all
        for (let i = 0; i < draft.groups.length; i++) {
          const g = draft.groups[i];
          for (let j = 0; j < g.blocks.length; j++) {
            const b = g.blocks[j];
            b.invalidated = true;
          }
        }
      } else if (op.payload.event.type === RealtimeEventType.DELETE) {
        // invalidate all
        for (let i = 0; i < draft.groups.length; i++) {
          const g = draft.groups[i];
          for (let j = 0; j < g.blocks.length; j++) {
            const b = g.blocks[j];
            b.invalidated = true;
          }
        }
      }
    });
    if (op.payload.event.type === RealtimeEventType.DELETE) {
      emitOperation(OPERATION_UNPIN_RECORD, {
        recordKey: op.payload.event.key
      });
    }
    if (!es6_default()(newData, state.data)) {
      emitState({
        ...state,
        data: newData,
        dataUpdatedAt: Date.now()
      });
    }
    return op;
  });
});
;// CONCATENATED MODULE: ./extensions/common/js/storeV3/internal/collection/operations/operationInitCollection.ts


const OPERATION_INIT_COLLECTION_DONE = defineOperationEvent('initCollection_done', withPayload());
const OPERATION_INIT_COLLECTION = defineOperation('initCollection', withPayload(), withLifecycle([OPERATION_INIT_COLLECTION_DONE]));
const processInitCollection = buildOperationFlow(OPERATION_INIT_COLLECTION, _ref => {
  let {
    def,
    params,
    $ops,
    $state,
    emitState
  } = _ref;
  return $ops.flatMapFirst(op => kefir_esm["default"].fromPromise(def.api.fetchMetadata(params)).map(response => [op, response])).thru($obs => kefir_esm["default"].combine([$obs], [$state], (_ref2, state) => {
    let [op, response] = _ref2;
    return [op, response, state];
  })).map(_ref3 => {
    let [op, response, state] = _ref3;
    let collectionOffset = 0;
    const groups = response.groups.map(g => {
      const group = {
        collectionStart: collectionOffset,
        collectionEnd: collectionOffset + g.total,
        groupKey: g.groupKey,
        groupData: g.groupData,
        total: g.total,
        blocks: []
      };
      collectionOffset = group.collectionEnd;
      return group;
    });
    emitState({
      ...state,
      data: {
        groups: groups,
        total: collectionOffset
      },
      dataLoadedAt: Date.now(),
      dataUpdatedAt: Date.now()
    });
    op.emit(OPERATION_INIT_COLLECTION_DONE, {
      groups: response.groups
    });
    return op;
  });
});
;// CONCATENATED MODULE: ./extensions/common/js/storeV3/internal/collection/operations/operationInitViewport.ts


const OPERATION_INIT_VIEWPORT = defineOperation('initViewport', withPayload(), withLifecycle([]));
const processInitViewport = buildOperationFlow(OPERATION_INIT_VIEWPORT, _ref => {
  let {
    $ops,
    $state,
    emitState
  } = _ref;
  return $ops.thru($obs => kefir_esm["default"].combine([$obs], [$state], (op, state) => [op, state])).map(_ref2 => {
    let [op, state] = _ref2;
    if (state.viewports.find(v => v.viewportId === op.payload.viewportConfig.viewportId)) {
      throw new Error('Viewport with that id already exists');
    }
    if (state.viewports.length > 0) {
      throw new Error('Multiple viewports are not supported');
    }
    emitState({
      ...state,
      viewports: [...state.viewports, op.payload.viewportConfig]
    });
    return op;
  });
});
;// CONCATENATED MODULE: ./extensions/common/js/storeV3/internal/collection/operations/operationScroll.ts


const OPERATION_SCROLL = defineOperation('scroll', withPayload(), withLifecycle([]));
const processScroll = buildOperationFlow(OPERATION_SCROLL, _ref => {
  let {
    $ops,
    $state,
    emitState
  } = _ref;
  return $ops.thru($obs => kefir_esm["default"].combine([$obs], [$state], (op, state) => [op, state])).map(_ref2 => {
    let [op, state] = _ref2;
    const viewport = state.viewports.find(viewport => viewport.viewportId === op.payload.viewportId);
    if (!viewport) {
      return op;
    }
    const newOffset = Math.max(0, op.payload.offset);
    const newLimit = op.payload.limit;
    if (viewport.offset === newOffset && viewport.limit === newLimit) {
      return op;
    }
    const viewportIndex = state.viewports.indexOf(viewport);
    const newViewports = [...state.viewports];
    newViewports[viewportIndex] = {
      ...viewport,
      offset: newOffset,
      limit: newLimit
    };
    emitState({
      ...state,
      viewports: newViewports
    });
    return op;
  });
});
;// CONCATENATED MODULE: ./extensions/common/js/storeV3/internal/collection/operations/operationUpdateRecord.ts



const OPERATION_UPDATE_RECORD_DONE = defineOperationEvent('updateRecordDone', withPayload());
const OPERATION_UPDATE_RECORD_FAILED = defineOperationEvent('updateRecordFailed', withPayload());
const OPERATION_UPDATE_RECORD = defineOperation('updateRecord', withPayload(), withLifecycle([OPERATION_UPDATE_RECORD_DONE, OPERATION_UPDATE_RECORD_FAILED]));
const processUpdateRecord = buildOperationFlow(OPERATION_UPDATE_RECORD, _ref => {
  let {
    def,
    params,
    $ops,
    $state,
    emitState
  } = _ref;
  return $ops.flatMapConcat(op => {
    if (!def.api.updateRecord) {
      throw new Error('updateRecord is not supported by this collection');
    }
    return kefir_esm["default"].fromPromise(def.api.updateRecord({
      ...params,
      key: op.payload.key,
      partial: op.payload.partial
    }).then(response => [op, response], err => [op, null, new Error('failed to mutate record by key', {
      cause: err
    })]));
  }).thru($obs => kefir_esm["default"].combine([$obs], [$state], (_ref2, state) => {
    let [op, response, error] = _ref2;
    return [op, response, error, state];
  })).map(_ref3 => {
    let [op, response, error, state] = _ref3;
    if (!error && response) {
      const updatedRecord = response.record;
      let changed = false;
      const newState = (0,immer_esm/* default */.ZP)(state, draft => {
        const cachedRecord = draft.recordsCache.get(updatedRecord.key);
        if (!cachedRecord || updatedRecord.lastSavedTimestamp > cachedRecord.lastSavedTimestamp) {
          draft.recordsCache.set(updatedRecord.key, updatedRecord);
          changed = true;
        }
      });
      if (changed) {
        emitState(newState);
      }
      op.emit(OPERATION_UPDATE_RECORD_DONE, {
        key: op.payload.key,
        dto: updatedRecord
      });
    } else {
      op.emit(OPERATION_UPDATE_RECORD_FAILED, {
        key: op.payload.key,
        error: error ?? new Error('failed to mutated record by key (unknown error)')
      });
    }
    return op;
  });
});
;// CONCATENATED MODULE: ./extensions/common/js/storeV3/internal/collection/operations/operationDeleteRecord.ts



const OPERATION_DELETE_RECORD_DONE = defineOperationEvent('deleteRecordDone', withPayload());
const OPERATION_DELETE_RECORD_FAILED = defineOperationEvent('deleteRecordFailed', withPayload());
const OPERATION_DELETE_RECORD = defineOperation('deleteRecord', withPayload(), withLifecycle([OPERATION_DELETE_RECORD_DONE, OPERATION_DELETE_RECORD_FAILED]));
const processDeleteRecord = buildOperationFlow(OPERATION_DELETE_RECORD, _ref => {
  let {
    def,
    params,
    $ops,
    $state,
    emitOperation
  } = _ref;
  return $ops.flatMapConcat(op => {
    if (!def.api.deleteRecord) {
      throw new Error('deleteRecord is not supported by this collection');
    }
    return kefir_esm["default"].fromPromise(def.api.deleteRecord({
      ...params,
      key: op.payload.key
    }).then(response => [op, response], err => [op, null, new Error('failed to delete record by key', {
      cause: err
    })]));
  }).thru($obs => kefir_esm["default"].combine([$obs], [$state], (_ref2, state) => {
    let [op, response, error] = _ref2;
    return [op, response, error, state];
  })).map(_ref3 => {
    let [op, response, error] = _ref3;
    if (!error && response) {
      emitOperation(OPERATION_UNPIN_RECORD, {
        recordKey: op.payload.key
      });
      op.emit(OPERATION_DELETE_RECORD_DONE, {
        key: op.payload.key,
        deletedAt: Date.now()
      });
    } else {
      op.emit(OPERATION_DELETE_RECORD_FAILED, {
        key: op.payload.key,
        error: error ?? new Error('failed to delete record by key (unknown error)')
      });
    }
    return op;
  });
});
;// CONCATENATED MODULE: ./extensions/common/js/storeV3/internal/collection/operations/operationPinRecord.ts



const OPERATION_PIN_RECORD = defineOperation('pinRecord', withPayload(), withLifecycle([]));
const processPinRecord = buildOperationFlow(OPERATION_PIN_RECORD, _ref => {
  let {
    $ops,
    $state,
    emitState
  } = _ref;
  return $ops.thru($obs => kefir_esm["default"].combine([$obs], [$state], (op, state) => [op, state])).map(_ref2 => {
    let [op, state] = _ref2;
    if (!state.viewports.find(v => v.viewportId === op.payload.viewportId)) {
      throw new Error('Viewport with that id does not exist');
    }
    let changed = false;
    const newState = {
      ...state
    };
    const record = findRecord(newState, op.payload.recordKey);
    if (record) {
      newState.recordsCache = new Map(newState.recordsCache);
      updateRecordCache(newState.recordsCache, record);
      const viewport = newState.viewports.find(v => v.viewportId === op.payload.viewportId);

      // only one pin is supported
      viewport.pinnedRecords = [{
        recordKey: op.payload.recordKey,
        groupKey: op.payload.groupKey,
        groupIndex: op.payload.groupIndex
      }];
      changed = true;
    }
    if (changed) {
      emitState(newState);
    }
    return op;
  });
});
function findRecord(state, recordKey) {
  return findDataRecordByKey(state.data, recordKey);
}
function updateRecordCache(cache, record) {
  if (cache.has(record.key)) {
    const cacheRecord = cache.get(record.key);
    if (cacheRecord.lastSavedTimestamp < record.lastSavedTimestamp) {
      cache.set(record.key, record);
    }
  } else {
    cache.set(record.key, record);
  }
}
;// CONCATENATED MODULE: ./extensions/common/js/storeV3/internal/collection/operations/operationToggleGroup.ts




const OPERATION_TOGGLE_GROUP = defineOperation('toggleGroup', withPayload(), withLifecycle([]));
const processToggleGroup = buildOperationFlow(OPERATION_TOGGLE_GROUP, _ref => {
  let {
    $ops,
    $state,
    emitState
  } = _ref;
  return $ops.thru($obs => kefir_esm["default"].combine([$obs], [$state], (op, state) => [op, state])).map(_ref2 => {
    let [op, state] = _ref2;
    if (!state.viewports.find(v => v.viewportId === op.payload.viewportId)) {
      throw new Error('Viewport with that id does not exist');
    }
    let changed = false;
    const newState = (0,immer_esm/* default */.ZP)(state, draft => {
      const viewport = draft.viewports.find(v => v.viewportId === op.payload.viewportId);
      const previous = viewport.collapsedGroups;
      if (op.payload.expanded) {
        viewport.collapsedGroups = viewport.collapsedGroups.filter(g => g !== op.payload.groupKey);
      } else {
        viewport.collapsedGroups = Array.from(new Set([...viewport.collapsedGroups, op.payload.groupKey]));
      }
      changed = !es6_default()(previous, viewport.collapsedGroups);
    });
    if (changed) {
      emitState(newState);
    }
    return op;
  });
});
;// CONCATENATED MODULE: ./extensions/common/js/storeV3/internal/collection/operations/operationDisposeViewport.ts


const OPERATION_DISPOSE_VIEWPORT = defineOperation('disposeViewport', withPayload(), withLifecycle([]));
const processDisposeViewport = buildOperationFlow(OPERATION_DISPOSE_VIEWPORT, _ref => {
  let {
    $ops,
    $state,
    emitState
  } = _ref;
  return $ops.thru($obs => kefir_esm["default"].combine([$obs], [$state], (op, state) => [op, state])).map(_ref2 => {
    let [op, state] = _ref2;
    if (state.viewports.find(v => v.viewportId === op.payload.viewportId)) {
      emitState({
        ...state,
        viewports: state.viewports.filter(v => v.viewportId !== op.payload.viewportId)
      });
    }
    return op;
  });
});
;// CONCATENATED MODULE: ./extensions/common/js/storeV3/internal/collection/operations/operationSelect.ts




const OPERATION_SELECT = defineOperation('select', withPayload(), withLifecycle([]));
const processSelect = buildOperationFlow(OPERATION_SELECT, _ref => {
  let {
    $ops,
    $state,
    emitState
  } = _ref;
  return $ops.thru($obs => kefir_esm["default"].combine([$obs], [$state], (op, state) => [op, state])).map(_ref2 => {
    let [op, state] = _ref2;
    const viewportCfg = state.viewports.find(viewport => viewport.viewportId === op.payload.viewportId);
    if (!viewportCfg) {
      return op;
    }
    const viewportIndex = state.viewports.indexOf(viewportCfg);
    const newViewports = [...state.viewports];
    newViewports[viewportIndex] = {
      ...viewportCfg,
      selection: !op.payload.mutation ? null : applyMutationToSelection(viewportCfg.selection ?? {
        groups: {},
        selected: 0
      }, state.data, op.payload.mutation)
    };
    if ((0,lodash.isEqual)(viewportCfg.selection, newViewports[viewportIndex].selection)) {
      return op;
    }
    emitState({
      ...state,
      viewports: newViewports
    });
    return op;
  });
});
;// CONCATENATED MODULE: ./extensions/common/js/storeV3/internal/collection/operations/operationAny.ts



















function processAnyOperation(def, params, $operations, $state, $viewport, $mutation) {
  const $stream = kefir_esm["default"].merge([processCleanup(def, params, $operations, $state, $viewport, $mutation), processDeleteRecord(def, params, $operations, $state, $viewport, $mutation), processEvaluateViewport(def, params, $operations, $state, $viewport, $mutation), processFetchBlock(def, params, $operations, $state, $viewport, $mutation), processHandleRealtimeEvent(def, params, $operations, $state, $viewport, $mutation), processInitCollection(def, params, $operations, $state, $viewport, $mutation), processInitViewport(def, params, $operations, $state, $viewport, $mutation), processDisposeViewport(def, params, $operations, $state, $viewport, $mutation), processScroll(def, params, $operations, $state, $viewport, $mutation), processSelect(def, params, $operations, $state, $viewport, $mutation), processUpdateRecord(def, params, $operations, $state, $viewport, $mutation), processToggleGroup(def, params, $operations, $state, $viewport, $mutation), processPinRecord(def, params, $operations, $state, $viewport, $mutation), processUnpinRecord(def, params, $operations, $state, $viewport, $mutation)]).filter(isNotNull);
  const $mutationStream = processMutations($operations);
  return [$stream.filter(r => r.kind === OperationResultKind.STATE).map(r => r.state), $stream.filter(r => r.kind === OperationResultKind.OPERATION).map(r => r.operation), $mutationStream];
}
function processMutations($operations) {
  return kefir_esm["default"].stream($emitter => {
    let transactions = [];
    const $stream = $operations.thru($ops => kefir_esm["default"].merge([$ops.filter(OPERATION_UPDATE_RECORD.isDefOf).map(op => {
      const mutation = {
        type: MutationTransactionType.UPDATE_PER_KEY,
        createdAt: op.createdAt,
        completedAt: null,
        key: op.payload.key,
        changes: op.payload.partial
      };
      transactions = [...transactions, mutation];
      $emitter.emit({
        transactions
      });
      return [op, mutation];
    }).flatMap(_ref => {
      let [op, mutation] = _ref;
      return op.$lifecycle.filter(OPERATION_EVENT_COMPLETE.isDefOf).take(1).map(() => {
        const completedAt = op.lifecycleEvents.find(OPERATION_UPDATE_RECORD_DONE.isDefOf)?.payload.dto.lastSavedTimestamp || null;
        return [op, mutation, completedAt];
      });
    }), $ops.filter(OPERATION_DELETE_RECORD.isDefOf).map(op => {
      const mutation = {
        type: MutationTransactionType.DELETE_PER_KEY,
        createdAt: op.createdAt,
        completedAt: null,
        key: op.payload.key
      };
      transactions = [...transactions, mutation];
      $emitter.emit({
        transactions
      });
      return [op, mutation];
    }).flatMap(_ref2 => {
      let [op, mutation] = _ref2;
      return op.$lifecycle.filter(OPERATION_EVENT_COMPLETE.isDefOf).take(1).map(() => {
        const completedAt = op.lifecycleEvents.find(OPERATION_DELETE_RECORD_DONE.isDefOf)?.payload.deletedAt || null;
        return [op, mutation, completedAt];
      });
    })])).map(_ref3 => {
      let [op, mutation, completedAt] = _ref3;
      transactions = [...transactions];
      const index = transactions.indexOf(mutation);
      if (completedAt) {
        transactions.splice(index, 1, {
          ...mutation,
          completedAt
        });
      } else {
        transactions.splice(index, 1);
      }
      $emitter.emit({
        transactions
      });
      return op;
    });
    const noop = () => {};
    $stream.onValue(noop);
    return () => {
      $stream.offValue(noop);
    };
  });
}
;// CONCATENATED MODULE: ./extensions/common/js/storeV3/internal/collection/operations/index.ts

















;// CONCATENATED MODULE: ./extensions/common/js/storeV3/internal/collection/collection.ts
// main collection has access to all the data
// collection can be filtered by text or by specific filters
// each collection has its own logic on how it will do the filtering
// when switching from main collection to filtered one (lets call it a collection view) if there was a data loaded from the beginning use it as initial data
// user can go into a specific record view, so need to copy the data from the collection into the model cache
// mutating or fetching model should also update collection data
// if model mutated or re-fetched the collection or collection view need to be recomputed
// there also should be a fallback, if cannot recompute, the collection should be re-fetched, starting view the latest accessed viewport
// collection view could be grouped, there should be a way to query data not only by cursor or offset but also by the group













/**
 * Selection within collection scope.
 *
 * The group start/end and selected record indexes are relative to the whole collection
 * without accounting to collapsed groups, pinned records etc.
 */

function defineCollection(options) {
  return {
    api: options.api,
    utils: options.utils
  };
}
function observeCollection(def, params) {
  const stopper = js_default()();
  const $statePool = kefir_esm["default"].pool();
  const $operationsPool = kefir_esm["default"].pool();
  const $mutationPool = kefir_esm["default"].pool();
  $statePool.takeUntilBy(stopper).onValue(() => {});
  $operationsPool.takeUntilBy(stopper).onValue(() => {});
  $mutationPool.takeUntilBy(stopper).onValue(() => {});
  const collectionOpBus = kefir_bus_default()();
  const emitCollectionOp = buildEmitOperation(op => collectionOpBus.emit(op));
  $operationsPool.plug(collectionOpBus.delay(0));
  if (def.api.realtime) {
    $operationsPool.plug(def.api.realtime(params).map(event => OPERATION_HANDLE_REALTIME_EVENT.create({
      event
    })));
  }
  const $stateProp = $statePool.skipDuplicates(shallowCompare).toProperty(() => ({
    data: {
      groups: [],
      total: 0
    },
    dataLoadedAt: 0,
    dataUpdatedAt: 0,
    recordsCache: new Map(),
    viewports: []
  }));
  const $mutationProp = $mutationPool.toProperty(() => ({
    transactions: []
  }));
  const $viewport = kefir_esm["default"].combine({
    state: $stateProp,
    mutation: $mutationProp
  }).takeUntilBy(stopper).thru((0,kefir/* flatMapThrottle */.aT)(0, {
    keepSkipped: false
  }, _ref => {
    let {
      state,
      mutation
    } = _ref;
    return kefir_esm["default"].fromPromise((async () => {
      if (state.viewports.length === 0) {
        return [];
      }
      const results = [];
      const dataWithMutation = produceDataWithMutation(state.data, mutation);
      for (const viewportCfg of state.viewports) {
        const recordsCache = produceCacheWithMutation(state.recordsCache, mutation);
        const viewport = await buildViewport(def, viewportCfg, dataWithMutation, recordsCache);
        const viewportWithMutation = produceViewportWithMutation(viewport, mutation);
        results.push(viewportWithMutation);
      }
      return results;
    })());
  })).map(_ref2 => {
    let [viewports] = _ref2;
    return viewports[0] || null;
  }).ignoreErrors().toProperty(() => null);
  const [$newState, $newOperations, $newMutation] = processAnyOperation(def, params, $operationsPool, $stateProp, $viewport, $mutationProp);
  $statePool.plug($newState.takeUntilBy(stopper));
  $operationsPool.plug($newOperations.takeUntilBy(stopper));
  $mutationPool.plug($newMutation.takeUntilBy(stopper));

  // IMPORTANT: emitting into operationsPool should happen after processAnyOperation
  emitCollectionOp(OPERATION_INIT_COLLECTION, {});

  // stream EVALUATE_VIEWPORT on viewport changes
  $operationsPool.plug($viewport.filter(isNotNull).map(() => OPERATION_EVALUATE_VIEWPORT.create({})));
  return {
    $operations: $operationsPool,
    $state: $stateProp,
    $mutation: $mutationProp,
    mutate: {
      updateRecord(key, partial) {
        emitCollectionOp(OPERATION_UPDATE_RECORD, {
          key,
          partial
        });
      },
      deleteRecord(key) {
        emitCollectionOp(OPERATION_DELETE_RECORD, {
          key
        });
      }
    },
    selection: {
      resolveKeys(selection) {
        // TODO: this is not a final implementation, would require more thinking

        const result = [];
        Object.keys(selection.groups).forEach(groupKey => {
          const group = selection.groups[groupKey];
          if (group?.records === 'all') {
            throw new Error('Not implemented');
          } else if (group?.expanded && group?.records) {
            result.push(...group.records.toMap().values());
          } else if (!group?.expanded && group?.records) {
            result.push(...group.records);
          }
        });
        return Promise.resolve(result);
      }
    },
    observeViewport(config) {
      const viewportCfg = {
        viewportId: (0,v4/* default */.Z)(),
        buffer: config.viewportBuffer,
        offset: config?.initialOffset?.offset || 0,
        limit: config?.initialOffset?.limit || 0,
        pinnedRecords: [],
        collapsedGroups: [],
        selection: null
      };
      const $viewportOps = kefir_bus_default()();
      const emitViewportOp = buildEmitOperation(op => $viewportOps.emit(op));
      $operationsPool.plug($viewportOps.delay(0));
      emitViewportOp(OPERATION_INIT_VIEWPORT, {
        viewportConfig: viewportCfg
      });
      const $viewportConfig = $stateProp.map(state => state.viewports.find(v => v.viewportId === viewportCfg.viewportId)).skipDuplicates().toProperty();
      return {
        viewportId: viewportCfg.viewportId,
        $config: $viewportConfig,
        $viewport,
        setViewportOffset: (0,lodash.throttle)(_ref3 => {
          let {
            offset,
            limit
          } = _ref3;
          return emitViewportOp(OPERATION_SCROLL, {
            viewportId: viewportCfg.viewportId,
            offset,
            limit
          });
        }, 100, {
          leading: true,
          trailing: true
        }),
        mutateSelection(mutation) {
          if (mutation && mutation.added.length === 0 && mutation.removed.length === 0) {
            return;
          }
          emitCollectionOp(OPERATION_SELECT, {
            viewportId: viewportCfg.viewportId,
            mutation
          });
        },
        pinRecord(props) {
          emitCollectionOp(OPERATION_PIN_RECORD, {
            viewportId: viewportCfg.viewportId,
            recordKey: props.recordKey,
            groupKey: props.groupKey,
            groupIndex: props.groupIndex
          });
        },
        unpinRecord(recordKey) {
          emitCollectionOp(OPERATION_UNPIN_RECORD, {
            recordKey: recordKey,
            viewportId: viewportCfg.viewportId
          });
        },
        toggleGroup(groupKey, expanded) {
          emitCollectionOp(OPERATION_TOGGLE_GROUP, {
            viewportId: viewportCfg.viewportId,
            groupKey,
            expanded
          });
        },
        dispose() {
          emitViewportOp(OPERATION_DISPOSE_VIEWPORT, {
            viewportId: viewportCfg.viewportId
          });
          $operationsPool.unplug($viewportOps);
          $viewportOps.end();
        }
      };
    },
    dispose() {
      stopper.destroy();
    }
  };
}
// EXTERNAL MODULE: ./.yarn/cache/react-npm-18.3.1-af38f3c1ae-261137d3f3.zip/node_modules/react/index.js
var react = __webpack_require__(44345);
// EXTERNAL MODULE: ./extensions/common/js/ui/components/hooks.ts
var hooks = __webpack_require__(14693);
;// CONCATENATED MODULE: ./extensions/common/js/storeV3/internal/hooks/useCollection.ts




function useCollection(def, params, options) {
  const paramsJSON = JSON.stringify(params);
  const obs = (0,react.useMemo)(() => {
    if (options?.collection) {
      return options.collection;
    }
    const params = JSON.parse(paramsJSON);
    const obs = observeCollection(def, params);
    return obs;
  }, [options?.collection, def, paramsJSON]);
  const {
    $state,
    $mutation,
    observeViewport,
    mutate: {
      updateRecord,
      deleteRecord
    },
    selection: {
      resolveKeys: resolveSelection
    },
    dispose
  } = obs;
  const data = (0,kefir/* useKefirProperty */.T7)($state.map(state => state.data));
  const mutation = (0,kefir/* useKefirProperty */.T7)($mutation);
  const useViewport = createUseViewport(observeViewport);
  const canDispose = options?.collection === undefined && options?.disposeOnUnmount !== false;
  (0,react.useEffect)(() => {
    if (canDispose) {
      return () => {
        dispose();
      };
    }
  }, [canDispose, dispose]);
  return {
    collection: obs,
    data,
    mutation,
    useViewport,
    updateRecord,
    deleteRecord,
    resolveSelection
  };
}
function createUseViewport(observeViewport) {
  return params => {
    const initialParamsRef = (0,react.useRef)(params);
    const observedViewport = (0,react.useMemo)(() => observeViewport({
      initialOffset: initialParamsRef.current?.initialOffset,
      viewportBuffer: 500
    }), []);
    const {
      $viewport,
      setViewportOffset,
      pinRecord,
      unpinRecord,
      toggleGroup,
      dispose,
      mutateSelection
    } = observedViewport;
    const viewport = (0,kefir/* useKefirProperty */.T7)($viewport);
    (0,react.useEffect)(() => () => dispose(), [dispose]);
    const selectionEnabled = params?.selectionEnabled ?? true;
    (0,hooks/* useUpdateEffect */.rf)(() => {
      if (!selectionEnabled) {
        mutateSelection(null);
      }
    }, [selectionEnabled]);
    return {
      viewport,
      setViewportOffset,
      pinRecord,
      unpinRecord,
      toggleGroup,
      mutateSelection
    };
  };
}
// EXTERNAL MODULE: ./.yarn/__virtual__/react-use-virtual-79f76fc2ba/0/cache/react-use-npm-17.4.0-0ef4521544-98566c4817.zip/node_modules/react-use/esm/useMeasure.js + 2 modules
var useMeasure = __webpack_require__(24121);
;// CONCATENATED MODULE: ./extensions/common/js/storeV3/internal/components/collectionMinimap.module.css
// extracted by mini-css-extract-plugin
var _1 = "streak-mod__UTv5qj7LA98hUzEiSFar";


// EXTERNAL MODULE: ./.yarn/cache/react-npm-18.3.1-af38f3c1ae-261137d3f3.zip/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(59718);
;// CONCATENATED MODULE: ./extensions/common/js/storeV3/internal/components/collectionMinimap.tsx




function CollectionMinimap(_ref) {
  let {
    data,
    mutation,
    viewport
  } = _ref;
  const [ref, {
    height
  }] = (0,useMeasure/* default */.Z)();
  const total = data.total;
  const pxPerRow = height / total;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: _1,
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      ref: ref,
      style: {
        flex: 1
      },
      children: [data?.groups.map((group, groupIndex, groups) => {
        const groupOffset = groups.slice(0, groupIndex).reduce((a, b) => a + b.total, 0);
        return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          style: {
            position: 'absolute',
            left: 0,
            right: 0,
            top: groupOffset * pxPerRow,
            height: Math.max(group.total * pxPerRow, 1),
            borderTop: `1px solid blue`
          },
          children: group.blocks.map((block, blockIndex) => {
            const height = (block.groupEnd - block.groupStart) * pxPerRow;
            return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              style: {
                position: 'absolute',
                width: '100%',
                left: 0,
                right: 0,
                top: block.groupStart * pxPerRow,
                height: Math.max(height, 1),
                backgroundColor: block.invalidated ? 'pink' : blockIndex % 2 ? 'red' : 'red'
              },
              "data-block": `block ${block.groupStart} - ${block.groupEnd}`
            }, `${group.groupKey}-${block.groupStart}-${block.groupEnd}`);
          })
        }, group.groupKey);
      }), viewport && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        style: {
          position: 'absolute',
          left: -2,
          right: -2,
          top: viewport.start * pxPerRow - 2,
          height: Math.max((viewport.end - viewport.start) * pxPerRow, 1) + 2,
          border: '1px solid black'
        }
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 2
      },
      children: mutation?.transactions.map((mt, index) => /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        style: {
          width: 5,
          height: 5,
          backgroundColor: mt.type === MutationTransactionType.DELETE_PER_KEY ? 'red' : mt.type === MutationTransactionType.UPDATE_PER_KEY ? 'orange' : 'black'
        }
      }, mt.type + mt.key + index))
    })]
  });
}
;// CONCATENATED MODULE: ./.yarn/__virtual__/@tanstack-react-virtual-virtual-579551e7df/0/cache/@tanstack-react-virtual-npm-3.0.0-beta.65-3cc0f226fe-facc7c9136.zip/node_modules/@tanstack/react-virtual/build/lib/_virtual/_rollupPluginBabelHelpers.mjs
/**
 * react-virtual
 *
 * Copyright (c) TanStack
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function _rollupPluginBabelHelpers_extends() {
  _rollupPluginBabelHelpers_extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _rollupPluginBabelHelpers_extends.apply(this, arguments);
}



;// CONCATENATED MODULE: ./.yarn/cache/@tanstack-virtual-core-npm-3.0.0-beta.65-50209968a5-7838c6a286.zip/node_modules/@tanstack/virtual-core/build/lib/_virtual/_rollupPluginBabelHelpers.mjs
/**
 * virtual-core
 *
 * Copyright (c) TanStack
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function _virtual_rollupPluginBabelHelpers_extends() {
  _virtual_rollupPluginBabelHelpers_extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _virtual_rollupPluginBabelHelpers_extends.apply(this, arguments);
}



;// CONCATENATED MODULE: ./.yarn/cache/@tanstack-virtual-core-npm-3.0.0-beta.65-50209968a5-7838c6a286.zip/node_modules/@tanstack/virtual-core/build/lib/utils.mjs
/**
 * virtual-core
 *
 * Copyright (c) TanStack
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function memo(getDeps, fn, opts) {
  var _opts$initialDeps;
  var deps = (_opts$initialDeps = opts.initialDeps) != null ? _opts$initialDeps : [];
  var result;
  return function () {
    var depTime;
    if (opts.key && opts.debug != null && opts.debug()) depTime = Date.now();
    var newDeps = getDeps();
    var depsChanged = newDeps.length !== deps.length || newDeps.some(function (dep, index) {
      return deps[index] !== dep;
    });
    if (!depsChanged) {
      return result;
    }
    deps = newDeps;
    var resultTime;
    if (opts.key && opts.debug != null && opts.debug()) resultTime = Date.now();
    result = fn.apply(void 0, newDeps);
    if (opts.key && opts.debug != null && opts.debug()) {
      var depEndTime = Math.round((Date.now() - depTime) * 100) / 100;
      var resultEndTime = Math.round((Date.now() - resultTime) * 100) / 100;
      var resultFpsPercentage = resultEndTime / 16;
      var pad = function pad(str, num) {
        str = String(str);
        while (str.length < num) {
          str = ' ' + str;
        }
        return str;
      };
      console.info("%c\u23F1 " + pad(resultEndTime, 5) + " /" + pad(depEndTime, 5) + " ms", "\n            font-size: .6rem;\n            font-weight: bold;\n            color: hsl(" + Math.max(0, Math.min(120 - 120 * resultFpsPercentage, 120)) + "deg 100% 31%);", opts == null ? void 0 : opts.key);
    }
    opts == null ? void 0 : opts.onChange == null ? void 0 : opts.onChange(result);
    return result;
  };
}
function notUndefined(value, msg) {
  if (value === undefined) {
    throw new Error("Unexpected undefined" + (msg ? ": " + msg : ''));
  } else {
    return value;
  }
}
var approxEqual = function approxEqual(a, b) {
  return Math.abs(a - b) < 1;
};



;// CONCATENATED MODULE: ./.yarn/cache/@tanstack-virtual-core-npm-3.0.0-beta.65-50209968a5-7838c6a286.zip/node_modules/@tanstack/virtual-core/build/lib/index.mjs
/**
 * virtual-core
 *
 * Copyright (c) TanStack
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */




//

//

var defaultKeyExtractor = function defaultKeyExtractor(index) {
  return index;
};
var defaultRangeExtractor = function defaultRangeExtractor(range) {
  var start = Math.max(range.startIndex - range.overscan, 0);
  var end = Math.min(range.endIndex + range.overscan, range.count - 1);
  var arr = [];
  for (var _i = start; _i <= end; _i++) {
    arr.push(_i);
  }
  return arr;
};
var observeElementRect = function observeElementRect(instance, cb) {
  var element = instance.scrollElement;
  if (!element) {
    return;
  }
  var handler = function handler(rect) {
    var width = rect.width,
      height = rect.height;
    cb({
      width: Math.round(width),
      height: Math.round(height)
    });
  };
  handler(element.getBoundingClientRect());
  var observer = new ResizeObserver(function (entries) {
    var entry = entries[0];
    if (entry != null && entry.borderBoxSize) {
      var box = entry.borderBoxSize[0];
      if (box) {
        handler({
          width: box.inlineSize,
          height: box.blockSize
        });
        return;
      }
    }
    handler(element.getBoundingClientRect());
  });
  observer.observe(element, {
    box: 'border-box'
  });
  return function () {
    observer.unobserve(element);
  };
};
var lib_observeWindowRect = function observeWindowRect(instance, cb) {
  var element = instance.scrollElement;
  if (!element) {
    return;
  }
  var handler = function handler() {
    cb({
      width: element.innerWidth,
      height: element.innerHeight
    });
  };
  handler();
  element.addEventListener('resize', handler, {
    passive: true
  });
  return function () {
    element.removeEventListener('resize', handler);
  };
};
var observeElementOffset = function observeElementOffset(instance, cb) {
  var element = instance.scrollElement;
  if (!element) {
    return;
  }
  var handler = function handler() {
    cb(element[instance.options.horizontal ? 'scrollLeft' : 'scrollTop']);
  };
  handler();
  element.addEventListener('scroll', handler, {
    passive: true
  });
  return function () {
    element.removeEventListener('scroll', handler);
  };
};
var lib_observeWindowOffset = function observeWindowOffset(instance, cb) {
  var element = instance.scrollElement;
  if (!element) {
    return;
  }
  var handler = function handler() {
    cb(element[instance.options.horizontal ? 'scrollX' : 'scrollY']);
  };
  handler();
  element.addEventListener('scroll', handler, {
    passive: true
  });
  return function () {
    element.removeEventListener('scroll', handler);
  };
};
var measureElement = function measureElement(element, entry, instance) {
  if (entry != null && entry.borderBoxSize) {
    var box = entry.borderBoxSize[0];
    if (box) {
      var size = Math.round(box[instance.options.horizontal ? 'inlineSize' : 'blockSize']);
      return size;
    }
  }
  return Math.round(element.getBoundingClientRect()[instance.options.horizontal ? 'width' : 'height']);
};
var lib_windowScroll = function windowScroll(offset, _ref, instance) {
  var _instance$scrollEleme, _instance$scrollEleme2;
  var _ref$adjustments = _ref.adjustments,
    adjustments = _ref$adjustments === void 0 ? 0 : _ref$adjustments,
    behavior = _ref.behavior;
  var toOffset = offset + adjustments;
  (_instance$scrollEleme = instance.scrollElement) == null ? void 0 : _instance$scrollEleme.scrollTo == null ? void 0 : _instance$scrollEleme.scrollTo((_instance$scrollEleme2 = {}, _instance$scrollEleme2[instance.options.horizontal ? 'left' : 'top'] = toOffset, _instance$scrollEleme2.behavior = behavior, _instance$scrollEleme2));
};
var elementScroll = function elementScroll(offset, _ref2, instance) {
  var _instance$scrollEleme3, _instance$scrollEleme4;
  var _ref2$adjustments = _ref2.adjustments,
    adjustments = _ref2$adjustments === void 0 ? 0 : _ref2$adjustments,
    behavior = _ref2.behavior;
  var toOffset = offset + adjustments;
  (_instance$scrollEleme3 = instance.scrollElement) == null ? void 0 : _instance$scrollEleme3.scrollTo == null ? void 0 : _instance$scrollEleme3.scrollTo((_instance$scrollEleme4 = {}, _instance$scrollEleme4[instance.options.horizontal ? 'left' : 'top'] = toOffset, _instance$scrollEleme4.behavior = behavior, _instance$scrollEleme4));
};
var Virtualizer = function Virtualizer(_opts) {
  var _this = this;
  this.unsubs = [];
  this.scrollElement = null;
  this.isScrolling = false;
  this.isScrollingTimeoutId = null;
  this.scrollToIndexTimeoutId = null;
  this.measurementsCache = [];
  this.itemSizeCache = new Map();
  this.pendingMeasuredCacheIndexes = [];
  this.scrollDirection = null;
  this.scrollAdjustments = 0;
  this.measureElementCache = new Map();
  this.observer = function () {
    var _ro = null;
    var get = function get() {
      if (_ro) {
        return _ro;
      } else if (typeof ResizeObserver !== 'undefined') {
        return _ro = new ResizeObserver(function (entries) {
          entries.forEach(function (entry) {
            _this._measureElement(entry.target, entry);
          });
        });
      } else {
        return null;
      }
    };
    return {
      disconnect: function disconnect() {
        var _get;
        return (_get = get()) == null ? void 0 : _get.disconnect();
      },
      observe: function observe(target) {
        var _get2;
        return (_get2 = get()) == null ? void 0 : _get2.observe(target, {
          box: 'border-box'
        });
      },
      unobserve: function unobserve(target) {
        var _get3;
        return (_get3 = get()) == null ? void 0 : _get3.unobserve(target);
      }
    };
  }();
  this.range = null;
  this.setOptions = function (opts) {
    Object.entries(opts).forEach(function (_ref3) {
      var key = _ref3[0],
        value = _ref3[1];
      if (typeof value === 'undefined') delete opts[key];
    });
    _this.options = _virtual_rollupPluginBabelHelpers_extends({
      debug: false,
      initialOffset: 0,
      overscan: 1,
      paddingStart: 0,
      paddingEnd: 0,
      scrollPaddingStart: 0,
      scrollPaddingEnd: 0,
      horizontal: false,
      getItemKey: defaultKeyExtractor,
      rangeExtractor: defaultRangeExtractor,
      onChange: function onChange() {},
      measureElement: measureElement,
      initialRect: {
        width: 0,
        height: 0
      },
      scrollMargin: 0,
      scrollingDelay: 150,
      indexAttribute: 'data-index',
      initialMeasurementsCache: [],
      lanes: 1
    }, opts);
  };
  this.notify = function () {
    _this.options.onChange == null ? void 0 : _this.options.onChange(_this);
  };
  this.cleanup = function () {
    _this.unsubs.filter(Boolean).forEach(function (d) {
      return d();
    });
    _this.unsubs = [];
    _this.scrollElement = null;
  };
  this._didMount = function () {
    _this.measureElementCache.forEach(_this.observer.observe);
    return function () {
      _this.observer.disconnect();
      _this.cleanup();
    };
  };
  this._willUpdate = function () {
    var scrollElement = _this.options.getScrollElement();
    if (_this.scrollElement !== scrollElement) {
      _this.cleanup();
      _this.scrollElement = scrollElement;
      _this._scrollToOffset(_this.scrollOffset, {
        adjustments: undefined,
        behavior: undefined
      });
      _this.unsubs.push(_this.options.observeElementRect(_this, function (rect) {
        _this.scrollRect = rect;
        _this.maybeNotify();
      }));
      _this.unsubs.push(_this.options.observeElementOffset(_this, function (offset) {
        _this.scrollAdjustments = 0;
        if (_this.scrollOffset === offset) {
          return;
        }
        if (_this.isScrollingTimeoutId !== null) {
          clearTimeout(_this.isScrollingTimeoutId);
          _this.isScrollingTimeoutId = null;
        }
        _this.isScrolling = true;
        _this.scrollDirection = _this.scrollOffset < offset ? 'forward' : 'backward';
        _this.scrollOffset = offset;
        _this.maybeNotify();
        _this.isScrollingTimeoutId = setTimeout(function () {
          _this.isScrollingTimeoutId = null;
          _this.isScrolling = false;
          _this.scrollDirection = null;
          _this.maybeNotify();
        }, _this.options.scrollingDelay);
      }));
    }
  };
  this.getSize = function () {
    return _this.scrollRect[_this.options.horizontal ? 'width' : 'height'];
  };
  this.memoOptions = memo(function () {
    return [_this.options.count, _this.options.paddingStart, _this.options.scrollMargin, _this.options.getItemKey];
  }, function (count, paddingStart, scrollMargin, getItemKey) {
    _this.pendingMeasuredCacheIndexes = [];
    return {
      count: count,
      paddingStart: paddingStart,
      scrollMargin: scrollMargin,
      getItemKey: getItemKey
    };
  }, {
    key: false
  });
  this.getFurthestMeasurement = function (measurements, index) {
    var furthestMeasurementsFound = new Map();
    var furthestMeasurements = new Map();
    for (var m = index - 1; m >= 0; m--) {
      var measurement = measurements[m];
      if (furthestMeasurementsFound.has(measurement.lane)) {
        continue;
      }
      var previousFurthestMeasurement = furthestMeasurements.get(measurement.lane);
      if (previousFurthestMeasurement == null || measurement.end > previousFurthestMeasurement.end) {
        furthestMeasurements.set(measurement.lane, measurement);
      } else if (measurement.end < previousFurthestMeasurement.end) {
        furthestMeasurementsFound.set(measurement.lane, true);
      }
      if (furthestMeasurementsFound.size === _this.options.lanes) {
        break;
      }
    }
    return furthestMeasurements.size === _this.options.lanes ? Array.from(furthestMeasurements.values()).sort(function (a, b) {
      return a.end - b.end;
    })[0] : undefined;
  };
  this.getMeasurements = memo(function () {
    return [_this.memoOptions(), _this.itemSizeCache];
  }, function (_ref4, itemSizeCache) {
    var count = _ref4.count,
      paddingStart = _ref4.paddingStart,
      scrollMargin = _ref4.scrollMargin,
      getItemKey = _ref4.getItemKey;
    var min = _this.pendingMeasuredCacheIndexes.length > 0 ? Math.min.apply(Math, _this.pendingMeasuredCacheIndexes) : 0;
    _this.pendingMeasuredCacheIndexes = [];
    var measurements = _this.measurementsCache.slice(0, min);
    for (var _i2 = min; _i2 < count; _i2++) {
      var key = getItemKey(_i2);
      var furthestMeasurement = _this.options.lanes === 1 ? measurements[_i2 - 1] : _this.getFurthestMeasurement(measurements, _i2);
      var start = furthestMeasurement ? furthestMeasurement.end : paddingStart + scrollMargin;
      var measuredSize = itemSizeCache.get(key);
      var size = typeof measuredSize === 'number' ? measuredSize : _this.options.estimateSize(_i2);
      var end = start + size;
      var lane = furthestMeasurement ? furthestMeasurement.lane : _i2 % _this.options.lanes;
      measurements[_i2] = {
        index: _i2,
        start: start,
        size: size,
        end: end,
        key: key,
        lane: lane
      };
    }
    _this.measurementsCache = measurements;
    return measurements;
  }, {
    key:  false && 0,
    debug: function debug() {
      return _this.options.debug;
    }
  });
  this.calculateRange = memo(function () {
    return [_this.getMeasurements(), _this.getSize(), _this.scrollOffset];
  }, function (measurements, outerSize, scrollOffset) {
    return _this.range = measurements.length > 0 && outerSize > 0 ? calculateRange({
      measurements: measurements,
      outerSize: outerSize,
      scrollOffset: scrollOffset
    }) : null;
  }, {
    key:  false && 0,
    debug: function debug() {
      return _this.options.debug;
    }
  });
  this.maybeNotify = memo(function () {
    _this.calculateRange();
    return [_this.range ? _this.range.startIndex : null, _this.range ? _this.range.endIndex : null, _this.isScrolling];
  }, function () {
    _this.notify();
  }, {
    key:  false && 0,
    debug: function debug() {
      return _this.options.debug;
    },
    initialDeps: [this.range ? this.range.startIndex : null, this.range ? this.range.endIndex : null, this.isScrolling]
  });
  this.getIndexes = memo(function () {
    return [_this.options.rangeExtractor, _this.calculateRange(), _this.options.overscan, _this.options.count];
  }, function (rangeExtractor, range, overscan, count) {
    return range === null ? [] : rangeExtractor(_virtual_rollupPluginBabelHelpers_extends({}, range, {
      overscan: overscan,
      count: count
    }));
  }, {
    key:  false && 0,
    debug: function debug() {
      return _this.options.debug;
    }
  });
  this.indexFromElement = function (node) {
    var attributeName = _this.options.indexAttribute;
    var indexStr = node.getAttribute(attributeName);
    if (!indexStr) {
      console.warn("Missing attribute name '" + attributeName + "={index}' on measured element.");
      return -1;
    }
    return parseInt(indexStr, 10);
  };
  this._measureElement = function (node, entry) {
    var item = _this.measurementsCache[_this.indexFromElement(node)];
    if (!item || !node.isConnected) {
      _this.measureElementCache.forEach(function (cached, key) {
        if (cached === node) {
          _this.observer.unobserve(node);
          _this.measureElementCache["delete"](key);
        }
      });
      return;
    }
    var prevNode = _this.measureElementCache.get(item.key);
    if (prevNode !== node) {
      if (prevNode) {
        _this.observer.unobserve(prevNode);
      }
      _this.observer.observe(node);
      _this.measureElementCache.set(item.key, node);
    }
    var measuredItemSize = _this.options.measureElement(node, entry, _this);
    _this.resizeItem(item, measuredItemSize);
  };
  this.resizeItem = function (item, size) {
    var _this$itemSizeCache$g;
    var itemSize = (_this$itemSizeCache$g = _this.itemSizeCache.get(item.key)) != null ? _this$itemSizeCache$g : item.size;
    var delta = size - itemSize;
    if (delta !== 0) {
      if (item.start < _this.scrollOffset) {
        if (false) {}
        _this._scrollToOffset(_this.scrollOffset, {
          adjustments: _this.scrollAdjustments += delta,
          behavior: undefined
        });
      }
      _this.pendingMeasuredCacheIndexes.push(item.index);
      _this.itemSizeCache = new Map(_this.itemSizeCache.set(item.key, size));
      _this.notify();
    }
  };
  this.measureElement = function (node) {
    if (!node) {
      return;
    }
    _this._measureElement(node, undefined);
  };
  this.getVirtualItems = memo(function () {
    return [_this.getIndexes(), _this.getMeasurements()];
  }, function (indexes, measurements) {
    var virtualItems = [];
    for (var k = 0, len = indexes.length; k < len; k++) {
      var _i3 = indexes[k];
      var measurement = measurements[_i3];
      virtualItems.push(measurement);
    }
    return virtualItems;
  }, {
    key:  false && 0,
    debug: function debug() {
      return _this.options.debug;
    }
  });
  this.getVirtualItemForOffset = function (offset) {
    var measurements = _this.getMeasurements();
    return notUndefined(measurements[findNearestBinarySearch(0, measurements.length - 1, function (index) {
      return notUndefined(measurements[index]).start;
    }, offset)]);
  };
  this.getOffsetForAlignment = function (toOffset, align) {
    var size = _this.getSize();
    if (align === 'auto') {
      if (toOffset <= _this.scrollOffset) {
        align = 'start';
      } else if (toOffset >= _this.scrollOffset + size) {
        align = 'end';
      } else {
        align = 'start';
      }
    }
    if (align === 'start') {
      toOffset = toOffset;
    } else if (align === 'end') {
      toOffset = toOffset - size;
    } else if (align === 'center') {
      toOffset = toOffset - size / 2;
    }
    var scrollSizeProp = _this.options.horizontal ? 'scrollWidth' : 'scrollHeight';
    var scrollSize = _this.scrollElement ? 'document' in _this.scrollElement ? _this.scrollElement.document.documentElement[scrollSizeProp] : _this.scrollElement[scrollSizeProp] : 0;
    var maxOffset = scrollSize - _this.getSize();
    return Math.max(Math.min(maxOffset, toOffset), 0);
  };
  this.getOffsetForIndex = function (index, align) {
    if (align === void 0) {
      align = 'auto';
    }
    index = Math.max(0, Math.min(index, _this.options.count - 1));
    var measurement = notUndefined(_this.getMeasurements()[index]);
    if (align === 'auto') {
      if (measurement.end >= _this.scrollOffset + _this.getSize() - _this.options.scrollPaddingEnd) {
        align = 'end';
      } else if (measurement.start <= _this.scrollOffset + _this.options.scrollPaddingStart) {
        align = 'start';
      } else {
        return [_this.scrollOffset, align];
      }
    }
    var toOffset = align === 'end' ? measurement.end + _this.options.scrollPaddingEnd : measurement.start - _this.options.scrollPaddingStart;
    return [_this.getOffsetForAlignment(toOffset, align), align];
  };
  this.isDynamicMode = function () {
    return _this.measureElementCache.size > 0;
  };
  this.cancelScrollToIndex = function () {
    if (_this.scrollToIndexTimeoutId !== null) {
      clearTimeout(_this.scrollToIndexTimeoutId);
      _this.scrollToIndexTimeoutId = null;
    }
  };
  this.scrollToOffset = function (toOffset, _temp) {
    var _ref5 = _temp === void 0 ? {} : _temp,
      _ref5$align = _ref5.align,
      align = _ref5$align === void 0 ? 'start' : _ref5$align,
      behavior = _ref5.behavior;
    _this.cancelScrollToIndex();
    if (behavior === 'smooth' && _this.isDynamicMode()) {
      console.warn('The `smooth` scroll behavior is not fully supported with dynamic size.');
    }
    _this._scrollToOffset(_this.getOffsetForAlignment(toOffset, align), {
      adjustments: undefined,
      behavior: behavior
    });
  };
  this.scrollToIndex = function (index, _temp2) {
    var _ref6 = _temp2 === void 0 ? {} : _temp2,
      _ref6$align = _ref6.align,
      initialAlign = _ref6$align === void 0 ? 'auto' : _ref6$align,
      behavior = _ref6.behavior;
    index = Math.max(0, Math.min(index, _this.options.count - 1));
    _this.cancelScrollToIndex();
    if (behavior === 'smooth' && _this.isDynamicMode()) {
      console.warn('The `smooth` scroll behavior is not fully supported with dynamic size.');
    }
    var _this$getOffsetForInd = _this.getOffsetForIndex(index, initialAlign),
      toOffset = _this$getOffsetForInd[0],
      align = _this$getOffsetForInd[1];
    _this._scrollToOffset(toOffset, {
      adjustments: undefined,
      behavior: behavior
    });
    if (behavior !== 'smooth' && _this.isDynamicMode()) {
      _this.scrollToIndexTimeoutId = setTimeout(function () {
        _this.scrollToIndexTimeoutId = null;
        var elementInDOM = _this.measureElementCache.has(_this.options.getItemKey(index));
        if (elementInDOM) {
          var _this$getOffsetForInd2 = _this.getOffsetForIndex(index, align),
            _toOffset = _this$getOffsetForInd2[0];
          if (!approxEqual(_toOffset, _this.scrollOffset)) {
            _this.scrollToIndex(index, {
              align: align,
              behavior: behavior
            });
          }
        } else {
          _this.scrollToIndex(index, {
            align: align,
            behavior: behavior
          });
        }
      });
    }
  };
  this.scrollBy = function (delta, _temp3) {
    var _ref7 = _temp3 === void 0 ? {} : _temp3,
      behavior = _ref7.behavior;
    _this.cancelScrollToIndex();
    if (behavior === 'smooth' && _this.isDynamicMode()) {
      console.warn('The `smooth` scroll behavior is not fully supported with dynamic size.');
    }
    _this._scrollToOffset(_this.scrollOffset + delta, {
      adjustments: undefined,
      behavior: behavior
    });
  };
  this.getTotalSize = function () {
    var _this$getMeasurements;
    return (((_this$getMeasurements = _this.getMeasurements()[_this.options.count - 1]) == null ? void 0 : _this$getMeasurements.end) || _this.options.paddingStart) - _this.options.scrollMargin + _this.options.paddingEnd;
  };
  this._scrollToOffset = function (offset, _ref8) {
    var adjustments = _ref8.adjustments,
      behavior = _ref8.behavior;
    _this.options.scrollToFn(offset, {
      behavior: behavior,
      adjustments: adjustments
    }, _this);
  };
  this.measure = function () {
    _this.itemSizeCache = new Map();
    _this.notify();
  };
  this.setOptions(_opts);
  this.scrollRect = this.options.initialRect;
  this.scrollOffset = this.options.initialOffset;
  this.measurementsCache = this.options.initialMeasurementsCache;
  this.measurementsCache.forEach(function (item) {
    _this.itemSizeCache.set(item.key, item.size);
  });
  this.maybeNotify();
};
var findNearestBinarySearch = function findNearestBinarySearch(low, high, getCurrentValue, value) {
  while (low <= high) {
    var middle = (low + high) / 2 | 0;
    var currentValue = getCurrentValue(middle);
    if (currentValue < value) {
      low = middle + 1;
    } else if (currentValue > value) {
      high = middle - 1;
    } else {
      return middle;
    }
  }
  if (low > 0) {
    return low - 1;
  } else {
    return 0;
  }
};
function calculateRange(_ref9) {
  var measurements = _ref9.measurements,
    outerSize = _ref9.outerSize,
    scrollOffset = _ref9.scrollOffset;
  var count = measurements.length - 1;
  var getOffset = function getOffset(index) {
    return measurements[index].start;
  };
  var startIndex = findNearestBinarySearch(0, count, getOffset, scrollOffset);
  var endIndex = startIndex;
  while (endIndex < count && measurements[endIndex].end < scrollOffset + outerSize) {
    endIndex++;
  }
  return {
    startIndex: startIndex,
    endIndex: endIndex
  };
}



;// CONCATENATED MODULE: ./.yarn/__virtual__/@tanstack-react-virtual-virtual-579551e7df/0/cache/@tanstack-react-virtual-npm-3.0.0-beta.65-3cc0f226fe-facc7c9136.zip/node_modules/@tanstack/react-virtual/build/lib/index.mjs
/**
 * react-virtual
 *
 * Copyright (c) TanStack
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */





//

var useIsomorphicLayoutEffect = typeof document !== 'undefined' ? react.useLayoutEffect : react.useEffect;
function useVirtualizerBase(options) {
  var rerender = react.useReducer(function () {
    return {};
  }, {})[1];
  var resolvedOptions = _rollupPluginBabelHelpers_extends({}, options, {
    onChange: function onChange(instance) {
      rerender();
      options.onChange == null ? void 0 : options.onChange(instance);
    }
  });
  var _React$useState = react.useState(function () {
      return new Virtualizer(resolvedOptions);
    }),
    instance = _React$useState[0];
  instance.setOptions(resolvedOptions);
  react.useEffect(function () {
    return instance._didMount();
  }, []);
  useIsomorphicLayoutEffect(function () {
    return instance._willUpdate();
  });
  return instance;
}
function useVirtualizer(options) {
  return useVirtualizerBase(_rollupPluginBabelHelpers_extends({
    observeElementRect: observeElementRect,
    observeElementOffset: observeElementOffset,
    scrollToFn: elementScroll
  }, options));
}
function useWindowVirtualizer(options) {
  return useVirtualizerBase(_extends({
    getScrollElement: function getScrollElement() {
      return typeof document !== 'undefined' ? window : null;
    },
    observeElementRect: observeWindowRect,
    observeElementOffset: observeWindowOffset,
    scrollToFn: windowScroll,
    initialOffset: typeof document !== 'undefined' ? window.scrollY : undefined
  }, options));
}



// EXTERNAL MODULE: ./extensions/common/js/ui/components/index.ts + 13 modules
var components = __webpack_require__(87084);
// EXTERNAL MODULE: ./extensions/common/js/ui/components/layout.ts
var layout = __webpack_require__(2225);
;// CONCATENATED MODULE: ./extensions/common/js/storeV3/internal/components/collectionTable.module.css
// extracted by mini-css-extract-plugin
var collectionTable_module_1 = "streak-mod__w_S314Q15gcVgNr0Lr6c";
var _2 = "streak-mod__j7oy4xfLnK6yHwveIwFq";
var _3 = "streak-mod__lMU9Pu8EblrAn9xulHJ0";
var _4 = "streak-mod__Odp5cNqHu0jD2EwV6RqC";
var _5 = "streak-mod__yPmzfCovOMvLXoQKm5sg";
var _6 = "streak-mod__l3TozNOjGIzrFqe6VB2G";
var _7 = "streak-mod__gdycQha_HYkhXF3AHlMI";


;// CONCATENATED MODULE: ./extensions/common/js/storeV3/internal/components/collectionTable.tsx







/**
 * This component is just for prototyping purposes.
 */
function CollectionTable(_ref) {
  let {
    overscan,
    data,
    mutation,
    viewport,
    onViewportRangeChanged,
    columns,
    onChange,
    onDelete
  } = _ref;
  const parentRef = (0,react.useRef)(null);
  const rowVirtualizer = useVirtualizer({
    count: viewport?.total ?? 0,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 35,
    overscan: overscan
  });
  const {
    startIndex,
    endIndex
  } = rowVirtualizer.range ? rowVirtualizer.range : {
    startIndex: 0,
    endIndex: 0
  };
  (0,react.useEffect)(() => {
    const start = Math.floor((startIndex - overscan) / overscan) * overscan;
    const end = Math.ceil((endIndex + overscan) / overscan) * overscan;
    onViewportRangeChanged({
      startIndex: start,
      endIndex: end
    });
  }, [startIndex, endIndex, onViewportRangeChanged, overscan]);
  if (!data || !viewport) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(layout/* LayoutBox */.kZ, {
      alignItemH: "center",
      alignItemV: "center",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(components/* Spinner */.$j, {})
    });
  }
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: collectionTable_module_1,
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: _2,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: _5,
        style: {
          width: 60
        }
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: _5,
        style: {
          width: 100
        },
        children: "index"
      }), columns.map((c, index) => {
        return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: _5,
          style: {
            width: 250
          },
          children: c.title
        }, index);
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      ref: parentRef,
      className: _7,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: _6,
        style: {
          height: rowVirtualizer.getTotalSize()
        },
        children: rowVirtualizer.getVirtualItems().map(virtualRow => {
          const record = viewport?.records.get(virtualRow.index);
          return /*#__PURE__*/(0,jsx_runtime.jsx)(Record, {
            index: virtualRow.index,
            record: record,
            columns: columns,
            start: virtualRow.start,
            onChange: onChange,
            onDelete: onDelete
          }, virtualRow.index);
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: _3,
      children: viewport.total > 0 ? /*#__PURE__*/(0,jsx_runtime.jsx)(CollectionMinimap, {
        data: data,
        mutation: mutation,
        viewport: viewport
      }) : null
    })]
  });
}
const Record = /*#__PURE__*/(0,react.memo)(_ref2 => {
  let {
    index,
    record,
    start,
    columns,
    onChange,
    onDelete
  } = _ref2;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: _4,
    style: {
      transform: `translateY(${start}px)`
    },
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: _5,
      style: {
        width: 60
      },
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("button", {
        onClick: () => onDelete(record),
        disabled: !record,
        children: "delete"
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: _5,
      style: {
        width: 100
      },
      children: ["Row ", index]
    }), columns.map((c, index) => {
      return record ? /*#__PURE__*/(0,jsx_runtime.jsx)(Cell, {
        record: record,
        column: c,
        onChange: newValue => onChange(record, c, newValue)
      }, `${record.key}-${c.accessor}`) : /*#__PURE__*/(0,jsx_runtime.jsx)(CellLoading, {}, `${c.title}-${index}`);
    })]
  });
});
const CellLoading = /*#__PURE__*/(0,react.memo)(() => {
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: _5,
    style: {
      width: 250
    },
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(layout/* LayoutBox */.kZ, {
      background: 'black/surface',
      rounding: "xs",
      minHeight: 8,
      maxHeight: 8,
      maxWidth: "80%",
      flex: true,
      alignSelf: "center"
    })
  });
});
const Cell = /*#__PURE__*/(0,react.memo)(_ref3 => {
  let {
    record,
    column,
    onChange
  } = _ref3;
  const [editing, setEditing] = (0,react.useState)(false);
  let value = '';
  if (column.type === 'array') {
    if (!Array.isArray(record[column.accessor])) {
      throw new Error('Expected array');
    }
    value = record[column.accessor].join(', ');
  } else {
    value = record[column.accessor];
  }
  const [finalValue, setFinalValue] = (0,react.useState)(value);
  const initRef = (0,react.useRef)(false);
  (0,react.useEffect)(() => {
    if (!initRef.current) {
      initRef.current = true;
      return;
    }
    setFinalValue(value);
  }, [value]);
  if (editing) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: _5,
      style: {
        width: 250
      },
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(components/* Input */.II, {
        autoFocus: true,
        value: finalValue,
        onChange: value => setFinalValue(value),
        onEsc: () => {
          setFinalValue(value);
          setEditing(false);
        },
        onBlur: () => {
          if (finalValue === value) {
            setEditing(false);
            return;
          }
          if (column.type === 'array') {
            onChange(finalValue.split(',').map(s => s.trim()));
          } else {
            onChange(finalValue);
          }
          setEditing(false);
        },
        onReturn: () => {
          if (finalValue === value) {
            setEditing(false);
            return;
          }
          if (column.type === 'array') {
            onChange(finalValue.split(',').map(s => s.trim()));
          } else {
            onChange(finalValue);
          }
          setEditing(false);
        }
      })
    });
  }
  let content = null;
  if (finalValue) {
    if (column.type === 'text') {
      content = /*#__PURE__*/(0,jsx_runtime.jsx)(components/* Span */.Dr, {
        overflow: "ellipsis",
        children: finalValue
      });
    } else if (column.type === 'array') {
      const values = finalValue.split(',').map(v => v.trim()).filter(v => !!v).map((v, index) => /*#__PURE__*/(0,jsx_runtime.jsx)(layout/* LayoutBox */.kZ, {
        background: "black/shadow",
        rounding: "s",
        padding: "xxs|xs",
        overflow: "hidden",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(components/* Span */.Dr, {
          overflow: "ellipsis",
          children: v
        })
      }, index));
      if (values.length > 0) {
        content = /*#__PURE__*/(0,jsx_runtime.jsx)(layout/* LayoutRow */.WM, {
          gapH: "xs",
          overflow: "hidden",
          children: values
        });
      }
    }
  }
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: _5,
    style: {
      width: 250
    },
    onDoubleClick: () => {
      setEditing(true);
    },
    children: content
  });
});
;// CONCATENATED MODULE: ./extensions/common/js/storeV3/index.ts








/***/ }),

/***/ 16768:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DA: () => (/* reexport safe */ _internal_table_cells__WEBPACK_IMPORTED_MODULE_1__.DA),
/* harmony export */   Dw: () => (/* reexport safe */ _internal_table_cells__WEBPACK_IMPORTED_MODULE_1__.Dw),
/* harmony export */   EV: () => (/* reexport safe */ _internal_table__WEBPACK_IMPORTED_MODULE_0__.EV),
/* harmony export */   H3: () => (/* reexport safe */ _internal_table__WEBPACK_IMPORTED_MODULE_0__.H3),
/* harmony export */   KG: () => (/* reexport safe */ _internal_table_cells__WEBPACK_IMPORTED_MODULE_1__.KG),
/* harmony export */   Pl: () => (/* reexport safe */ _internal_table_cells__WEBPACK_IMPORTED_MODULE_1__.Pl),
/* harmony export */   Z8: () => (/* reexport safe */ _internal_table__WEBPACK_IMPORTED_MODULE_0__.Z8),
/* harmony export */   aI: () => (/* reexport safe */ _internal_table__WEBPACK_IMPORTED_MODULE_0__.aI),
/* harmony export */   aV: () => (/* reexport safe */ _internal_table__WEBPACK_IMPORTED_MODULE_0__.aV),
/* harmony export */   aY: () => (/* reexport safe */ _internal_table_cells__WEBPACK_IMPORTED_MODULE_1__.aY),
/* harmony export */   hG: () => (/* reexport safe */ _internal_table__WEBPACK_IMPORTED_MODULE_0__.L9),
/* harmony export */   iA: () => (/* reexport safe */ _internal_table__WEBPACK_IMPORTED_MODULE_0__.iA),
/* harmony export */   lk: () => (/* reexport safe */ _internal_table_cells__WEBPACK_IMPORTED_MODULE_1__.lk),
/* harmony export */   or: () => (/* reexport safe */ _internal_table_cells__WEBPACK_IMPORTED_MODULE_1__.or),
/* harmony export */   qS: () => (/* reexport safe */ _internal_table_cells__WEBPACK_IMPORTED_MODULE_1__.qS),
/* harmony export */   rq: () => (/* reexport safe */ _internal_table__WEBPACK_IMPORTED_MODULE_0__.rq),
/* harmony export */   sy: () => (/* reexport safe */ _internal_table_cells__WEBPACK_IMPORTED_MODULE_1__.sy),
/* harmony export */   v8: () => (/* reexport safe */ _internal_table_cells__WEBPACK_IMPORTED_MODULE_1__.v8),
/* harmony export */   wr: () => (/* reexport safe */ _internal_table_cells__WEBPACK_IMPORTED_MODULE_1__.wr),
/* harmony export */   x6: () => (/* reexport safe */ _internal_table__WEBPACK_IMPORTED_MODULE_0__.x6),
/* harmony export */   yj: () => (/* reexport safe */ _internal_table_cells__WEBPACK_IMPORTED_MODULE_1__.yj)
/* harmony export */ });
/* harmony import */ var _internal_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22938);
/* harmony import */ var _internal_table_cells__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68602);



/***/ }),

/***/ 46013:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  V: () => (/* reexport */ CallMenu),
  w: () => (/* reexport */ CallMenuItems)
});

// EXTERNAL MODULE: ./extensions/common/js/ui/components/layout.ts
var layout = __webpack_require__(2225);
// EXTERNAL MODULE: ./extensions/common/js/ui/components/menu.ts
var menu = __webpack_require__(85440);
// EXTERNAL MODULE: ./.yarn/cache/react-npm-18.3.1-af38f3c1ae-261137d3f3.zip/node_modules/react/index.js
var react = __webpack_require__(44345);
// EXTERNAL MODULE: ./extensions/common/js/services/locale/locale.ts + 37 modules
var locale = __webpack_require__(35091);
// EXTERNAL MODULE: ./.yarn/cache/react-npm-18.3.1-af38f3c1ae-261137d3f3.zip/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(59718);
;// CONCATENATED MODULE: ./extensions/common/js/widgets/communication/internal/callMenuItems.tsx





function CallMenuItems(props) {
  const {
    phones,
    defaultCallMethod,
    googleVoiceAvail,
    devices,
    onClick
  } = props;
  const callMethodMenuItem = function (phone, icon, text, method, device) {
    let setMethodDefault = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
    return /*#__PURE__*/(0,jsx_runtime.jsx)(menu/* MenuItem */.sN, {
      icon: icon,
      text: text,
      textOverflow: "ellipsis",
      onClick: () => {
        onClick(phone, {
          defaultCallMethod: setMethodDefault ? method : undefined,
          selectedCallMethod: method,
          selectedDeviceKey: device && device.key
        });
      }
    });
  };
  const googleVoiceItem = phone => {
    return callMethodMenuItem(phone, 'phone', locale.Locale.getString('call_log_menu_send_to_gvoice'), 'googleVoice');
  };
  const sendToPhoneItem = (phone, devices) => {
    if (devices.length === 0) {
      return null;
    }
    if (devices.length === 1) {
      return callMethodMenuItem(phone, 'phonelink_ring', locale.Locale.getString('call_log_menu_send_to_my_phone'), 'sendToPhone', devices[0]);
    }
    return /*#__PURE__*/(0,jsx_runtime.jsx)(menu/* SubMenuItem */.vE, {
      text: locale.Locale.getString('call_log_menu_send_to_my_phone'),
      icon: "phonelink_ring",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(menu/* MenuPanel */.Gk, {
        size: "s|content",
        children: devices.map(device => /*#__PURE__*/(0,jsx_runtime.jsx)(react.Fragment, {
          children: callMethodMenuItem(phone, 'phonelink_ring', `${device.deviceName} (${device.deviceModel})`, 'sendToPhone', device)
        }, device.key))
      })
    });
  };
  const nativeDialerItem = phone => {
    return callMethodMenuItem(phone, 'phone', locale.Locale.getString('call_log_menu_send_to_native_dialer'), 'nativeDialer');
  };
  const options = [];
  if (defaultCallMethod) {
    options.push(defaultCallMethod);
  } else {
    if (googleVoiceAvail) {
      options.push('googleVoice', 'nativeDialer');
    } else {
      options.push('nativeDialer');
    }
    if (devices.length > 0) {
      options.push('sendToPhone');
    }
  }
  const menuOptionsMap = {
    googleVoice: googleVoiceItem,
    nativeDialer: nativeDialerItem,
    sendToPhone: sendToPhoneItem
  };
  return /*#__PURE__*/(0,jsx_runtime.jsx)(layout/* LayoutColumn */.rO, {
    children: phones.map((phone, index, phones) => {
      const menuItems = options.map((item, i) => /*#__PURE__*/(0,jsx_runtime.jsx)(react.Fragment, {
        children: menuOptionsMap[item](phone, devices)
      }, i));
      return /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
        children: [phones.length > 1 && /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
          children: options.length === 1 ? callMethodMenuItem(phone, undefined, phone, options[0], devices?.[0], defaultCallMethod != null ? true : false) : /*#__PURE__*/(0,jsx_runtime.jsx)(menu/* SubMenuItem */.vE, {
            text: phone,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(menu/* MenuPanel */.Gk, {
              children: menuItems
            })
          })
        }), phones.length === 1 && /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
          children: options.length === 1 ? callMethodMenuItem(phone, undefined, phone, options[0], devices?.[0], defaultCallMethod != null ? true : false) : menuItems
        })]
      }, index);
    })
  });
}
// EXTERNAL MODULE: ./extensions/common/js/ui/components/index.ts + 13 modules
var components = __webpack_require__(87084);
;// CONCATENATED MODULE: ./extensions/common/js/widgets/communication/internal/callMenu.tsx





function CallMenu(props) {
  const {
    phones,
    onClickItem,
    trigger
  } = props;
  const {
    devices,
    googleVoiceAvail,
    defaultCallMethod
  } = props.context;
  const shouldDisableTrigger = phones.length <= 0;
  let triggerElement = trigger;
  if ((0,components/* isButtonElement */.Re)(trigger)) {
    triggerElement = /*#__PURE__*/(0,react.cloneElement)(trigger, {
      disabled: shouldDisableTrigger
    });
  }
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(menu/* Menu */.v2, {
    placement: "bottom-start",
    overlay: "none",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(menu/* MenuTrigger */.bF, {
      children: triggerElement ?? /*#__PURE__*/(0,jsx_runtime.jsx)(components/* ButtonWithText */.WY, {
        icon: "phone",
        color: "primary",
        variant: "lowkey",
        size: "m",
        disabled: shouldDisableTrigger
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(menu/* MenuPanel */.Gk, {
      size: "m",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(CallMenuItems, {
        devices: devices,
        phones: phones,
        onClick: onClickItem,
        googleVoiceAvail: googleVoiceAvail,
        defaultCallMethod: defaultCallMethod
      })
    })]
  });
}
;// CONCATENATED MODULE: ./extensions/common/js/widgets/communication/index.tsx




/***/ }),

/***/ 87527:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ createSimilarPipeline)
/* harmony export */ });
/* harmony import */ var _streakyc_common_core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77294);
/* harmony import */ var _streakyc_common_services_data_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5575);
/* harmony import */ var _services_data_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38672);
/* harmony import */ var _core_models_pipeline_pipeline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10187);
/* harmony import */ var _core_models_pipeline_savedViews_columnSettings_columnOrderSettingsManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(51959);
/* harmony import */ var _core_models_pipeline_copyFieldOptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80241);
/* harmony import */ var _services_pipelineSharingSettings_chooseTeamAndSharingSettingsForPipelineModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39081);
/* harmony import */ var _modules_pipeline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24568);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_data_data__WEBPACK_IMPORTED_MODULE_1__, _core_models_pipeline_pipeline__WEBPACK_IMPORTED_MODULE_2__, _core_models_pipeline_savedViews_columnSettings_columnOrderSettingsManager__WEBPACK_IMPORTED_MODULE_3__, _services_pipelineSharingSettings_chooseTeamAndSharingSettingsForPipelineModal__WEBPACK_IMPORTED_MODULE_5__, _modules_pipeline__WEBPACK_IMPORTED_MODULE_6__]);
([_services_data_data__WEBPACK_IMPORTED_MODULE_1__, _core_models_pipeline_pipeline__WEBPACK_IMPORTED_MODULE_2__, _core_models_pipeline_savedViews_columnSettings_columnOrderSettingsManager__WEBPACK_IMPORTED_MODULE_3__, _services_pipelineSharingSettings_chooseTeamAndSharingSettingsForPipelineModal__WEBPACK_IMPORTED_MODULE_5__, _modules_pipeline__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








async function createSimilarPipeline(fromPipeline) {
  const fieldNames = [];
  const fieldTypes = [];
  const stageNames = fromPipeline.getStageNamesText();
  for (let i = 0; i < fromPipeline.getFields().length; i++) {
    fieldNames.push(fromPipeline.getFields()[i].displayNameText());
    fieldTypes.push(fromPipeline.getFields()[i].get('type'));
  }
  const newPipeline = _core_models_pipeline_pipeline__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.create({
    name: fromPipeline.displayNameText() + '*',
    stageNames,
    fieldNames,
    fieldTypes,
    aclEntries: [{
      userKey: (0,_streakyc_common_services_data_user__WEBPACK_IMPORTED_MODULE_7__/* .getUser */ .P)().key(),
      email: (0,_streakyc_common_services_data_user__WEBPACK_IMPORTED_MODULE_7__/* .getUser */ .P)().getEmail(),
      permissionSetName: _modules_pipeline__WEBPACK_IMPORTED_MODULE_6__/* .PERMISSION_SET_ADMIN */ .br
    }],
    sharingRestrictedToTeam: true
  });
  const team = fromPipeline.getTeam();
  if (team) {
    newPipeline.set('teamKey', team.key());
  }
  const {
    didCancel
  } = await (0,_services_pipelineSharingSettings_chooseTeamAndSharingSettingsForPipelineModal__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(newPipeline);
  if (didCancel) {
    newPipeline.destroy();
    return;
  }
  await newPipeline.saveWithPromise();
  _services_data_data__WEBPACK_IMPORTED_MODULE_1__["default"].getAllPipelines().add(newPipeline);
  const systemColumnDefinitions = fromPipeline.getColumnManager().getSystemColumnDefinitions();
  let i;
  for (i = 0; i < systemColumnDefinitions.length; i++) {
    newPipeline.getColumnManager().addSystemColumn(systemColumnDefinitions[i]);
  }
  (0,_core_models_pipeline_copyFieldOptions__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(fromPipeline, newPipeline);
  _core_models_pipeline_savedViews_columnSettings_columnOrderSettingsManager__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.copyColumnOrder(fromPipeline, newPipeline);

  // set stage colors from model pipeline to new pipeline
  for (i = 0; i < fromPipeline.getStages().length; i++) {
    newPipeline.getStages()[i].setColor(fromPipeline.getStages()[i].getColor());
    newPipeline.getStages()[i].saveWithPromise({
      hasSavingMessage: false
    });
  }
  await newPipeline.saveWithPromise();
  _streakyc_common_core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_0__.inboxSDK.Router.goto(newPipeline.link());
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 13222:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  YF: () => (/* reexport */ Spreadsheet),
  bu: () => (/* reexport */ SpreadsheetLayout),
  lK: () => (/* reexport */ SpreadsheetToolbarButton),
  P4: () => (/* reexport */ boxesHoverCard),
  Yc: () => (/* reexport */ mapPipelinesToLabelRendererData),
  eM: () => (/* reexport */ phonesHoverCard),
  mH: () => (/* reexport */ removeCacheEntry),
  MW: () => (/* reexport */ useSpreadsheet)
});

// EXTERNAL MODULE: ./.yarn/cache/react-npm-18.3.1-af38f3c1ae-261137d3f3.zip/node_modules/react/index.js
var react = __webpack_require__(44345);
// EXTERNAL MODULE: ./extensions/common/js/ui/components/table.ts
var table = __webpack_require__(16768);
// EXTERNAL MODULE: ./extensions/common/js/ui/components/hooks.ts
var hooks = __webpack_require__(14693);
// EXTERNAL MODULE: ./extensions/common/js/services/locale/locale.ts + 37 modules
var locale = __webpack_require__(35091);
// EXTERNAL MODULE: ./extensions/common/js/lib/log-error.ts
var log_error = __webpack_require__(7961);
// EXTERNAL MODULE: ./.yarn/cache/react-npm-18.3.1-af38f3c1ae-261137d3f3.zip/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(59718);
;// CONCATENATED MODULE: ./extensions/common/js/widgets/spreadsheetV2/internal/components/spreadsheet.tsx






function Spreadsheet(_ref) {
  let {
    context
  } = _ref;
  const logger = (0,hooks/* useUiLogger */.PS)((0,react.useMemo)(() => {
    return {
      error(props) {
        (0,log_error/* default */.ZP)({
          err: props.err,
          details: props.details,
          level: 'error'
        });
      },
      warning(props) {
        (0,log_error/* default */.ZP)({
          err: props.err,
          details: props.details,
          level: 'warning'
        });
      }
    };
  }, []));
  if (!context.dataCtx.ready) {
    return null;
  }
  return /*#__PURE__*/(0,jsx_runtime.jsx)(table/* Table */.iA, {
    ref: context.tableRef,
    ...context.tableProps,
    i18n: {
      pinLabel: locale.Locale.getString('freeze'),
      unpinLabel: locale.Locale.getString('unfreeze'),
      hideLabel: locale.Locale.getString('hide')
    },
    logger: logger
  });
}
// EXTERNAL MODULE: ./extensions/common/js/ui/components/layout.ts
var layout = __webpack_require__(2225);
;// CONCATENATED MODULE: ./extensions/common/js/widgets/spreadsheetV2/internal/components/spreadsheetLayout.tsx



function SpreadsheetLayout(_ref) {
  let {
    header,
    table
  } = _ref;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(layout/* LayoutColumn */.rO, {
    flex: true,
    overflow: "hidden",
    children: [header, /*#__PURE__*/(0,jsx_runtime.jsx)(layout/* LayoutBox */.kZ, {
      flex: true,
      overflow: "hidden",
      children: table
    })]
  });
}
// EXTERNAL MODULE: ./extensions/common/js/ui/components/index.ts + 13 modules
var components = __webpack_require__(87084);
;// CONCATENATED MODULE: ./extensions/common/js/widgets/spreadsheetV2/internal/components/spreadsheetToolbarButton.tsx


function SpreadsheetToolbarButton(props) {
  return /*#__PURE__*/(0,jsx_runtime.jsx)(components/* ButtonWithText */.WY, {
    icon: props.icon,
    onClick: props.onClick,
    color: props.color ?? 'primary',
    tooltip: props.tooltip,
    variant: "text",
    shape: "rect/square",
    size: "s"
  });
}
// EXTERNAL MODULE: ./.yarn/cache/lodash-npm-4.17.21-6382451519-c08619c038.zip/node_modules/lodash/lodash.js
var lodash = __webpack_require__(17013);
// EXTERNAL MODULE: ./extensions/common/js/core/models/pipeline/pipelineUtils.ts
var pipelineUtils = __webpack_require__(68993);
// EXTERNAL MODULE: ./extensions/common/js/ui/components/menu.ts
var menu = __webpack_require__(85440);
// EXTERNAL MODULE: ./extensions/common/js/components/Label/Label.tsx + 1 modules
var Label = __webpack_require__(32029);
// EXTERNAL MODULE: ./extensions/common/js/lib/utils/isNotNil.ts
var isNotNil = __webpack_require__(72086);
// EXTERNAL MODULE: ./extensions/common/js/lib/streakTimelineMoment.ts
var streakTimelineMoment = __webpack_require__(48726);
;// CONCATENATED MODULE: ./extensions/common/js/widgets/boxMenu/internal/boxMenuItems.tsx









function BoxMenuItems(props) {
  const {
    boxes,
    onClick,
    boxLookupData
  } = props;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(layout/* LayoutColumn */.rO, {
    children: boxes.map((box, index, boxes) => {
      const pipeline = boxLookupData.pipelines.find(r => r.key === box.pipelineKey);
      if (!pipeline) {
        return null;
      }
      const stage = pipeline.stages[box.stageKey];
      const assigned = box.assignedToSharingEntries?.map(e => boxLookupData.team.members.find(c => c.userKey === e.userKey)).filter(isNotNil/* default */.Z) || [];
      const timestamp = box.lastUpdatedTimestamp;
      const pipelineCustomColor = (0,pipelineUtils/* getPipelineColor */.g)(boxLookupData.userSettings, pipeline);
      return /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(menu/* MenuItemBase */.ZB, {
          onClick: () => {
            onClick(box);
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)(layout/* LayoutColumn */.rO, {
            padding: "s|m",
            gapV: "xxxs",
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(layout/* LayoutRow */.WM, {
              alignItemsH: "space-between",
              alignItemsV: "center",
              children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(layout/* LayoutRow */.WM, {
                gapH: "xs",
                alignItemsV: "center",
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(components/* Icon */.JO, {
                  name: {
                    value: (0,pipelineUtils/* getPipelineIcon */.K)(boxLookupData.userSettings, pipeline)
                  },
                  color: pipelineCustomColor ? {
                    value: pipelineCustomColor.backgroundColor
                  } : undefined,
                  size: "xs"
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(components/* Typo */.Jd, {
                  variant: "H6 - Tags",
                  color: "black/secondary",
                  children: pipeline?.name
                })]
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)(layout/* LayoutRow */.WM, {
                gapH: "s",
                alignItemsV: "center",
                children: [stage && /*#__PURE__*/(0,jsx_runtime.jsx)(Label/* default */.Z, {
                  backgroundColor: stage.color.backgroundColor,
                  foregroundColor: stage.color.foregroundColor,
                  children: stage.name
                }), assigned.length > 0 && /*#__PURE__*/(0,jsx_runtime.jsx)(components/* AvatarStack */.Jh, {
                  maxVisibleAvatars: 3,
                  contacts: assigned.map(tm => ({
                    name: tm.displayName || tm.email || '',
                    imageUrl: tm.imageUrl || tm.image
                  })),
                  getTooltip: contact => contact.name,
                  size: "xs"
                })]
              })]
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)(layout/* LayoutRow */.WM, {
              alignItemsH: "space-between",
              alignItemsV: "center",
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(components/* Typo */.Jd, {
                variant: "base/basic",
                display: "contents",
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(components/* Span */.Dr, {
                  children: box.name
                })
              }), timestamp && /*#__PURE__*/(0,jsx_runtime.jsx)(components/* Typo */.Jd, {
                variant: "H6 - Tags / Regular",
                color: "black/disabled",
                wrap: "nowrap",
                children: (0,streakTimelineMoment/* streakTimelineMoment */.iw)(timestamp, false)
              })]
            })]
          })
        }, box.pipelineKey), index === boxes.length - 1 ? null : /*#__PURE__*/(0,jsx_runtime.jsx)(menu/* MenuDivider */.R, {})]
      }, box.key);
    })
  });
}
;// CONCATENATED MODULE: ./extensions/common/js/widgets/boxMenu/index.tsx

;// CONCATENATED MODULE: ./extensions/common/js/widgets/spreadsheetV2/internal/hoverCards/boxesHoverCard.tsx




const boxesHoverCard = (0,table/* createHoverCardMenu */.aV)(data => {
  return {
    render: _ref => {
      let {
        dismiss
      } = _ref;
      const pipelineByKey = (0,lodash.groupBy)(data.lookupData.pipelines, p => p.key);
      const boxes = data.boxes.filter(b => !!pipelineByKey[b.pipelineKey]);
      return /*#__PURE__*/(0,jsx_runtime.jsx)(BoxMenuItems, {
        boxes: boxes,
        onClick: box => {
          dismiss();
          data.onClick(box);
        },
        boxLookupData: data.lookupData
      });
    }
  };
});
// EXTERNAL MODULE: ./extensions/common/js/widgets/communication/index.tsx + 2 modules
var communication = __webpack_require__(46013);
;// CONCATENATED MODULE: ./extensions/common/js/widgets/spreadsheetV2/internal/hoverCards/phonesHoverCard.tsx



const phonesHoverCard = (0,table/* createHoverCardMenu */.aV)(data => {
  const {
    devices,
    googleVoiceAvail,
    defaultCallMethod
  } = data.callContext;
  const {
    phones
  } = data;
  return {
    render: _ref => {
      let {
        dismiss
      } = _ref;
      return /*#__PURE__*/(0,jsx_runtime.jsx)(communication/* CallMenuItems */.w, {
        devices: devices,
        phones: phones,
        onClick: (phone, options) => {
          dismiss();
          data.onClick(phone, options);
        },
        googleVoiceAvail: googleVoiceAvail,
        defaultCallMethod: defaultCallMethod
      });
    }
  };
});
// EXTERNAL MODULE: ./extensions/common/js/storeV3/index.ts + 43 modules
var storeV3 = __webpack_require__(82966);
;// CONCATENATED MODULE: ./extensions/common/js/widgets/spreadsheetV2/internal/hooks/useTableCache.ts



/**
 * Ideally we should store cacheKey in the history api state,
 * but unless InboxSDK changes `location.hash = newHash` to `history.pushState` for navigation, the history state cannot be used.
 *
 * So we are preserving a cache for a provided cacheKey (e.g. teamKey) and resetting it when user explicitly navigates to the page again (for example, contacts page via nav menu item). See `removeCacheEntry` usage.
 *
 * But if navigation happens due to browser back/forward button, the cache will not be cleared and so the table will be scrolled to its previous offset.
 */

const cache = new Map();
function useTableCache(tableRef, _collDef, cacheKey) {
  const initRef = (0,react.useRef)('');
  const cacheEntryRef = (0,react.useRef)(null);
  const latestDataRef = (0,react.useRef)(null);
  const emit = (0,hooks/* useKefirBus */.Bj)((0,react.useMemo)(() => ({
    dedupe: false,
    throttle: {
      wait: 500,
      leading: false,
      trailing: true
    },
    transform: _ref => {
      let {
        collection,
        viewportOffset
      } = _ref;
      const scrollOffset = tableRef.current?.getScrollOffset();
      if (!scrollOffset) {
        return null;
      }
      return {
        collection,
        viewportOffset,
        scrollOffset
      };
    },
    onValue: value => {
      if (!value) {
        cache.delete(cacheKey);
      } else {
        cache.set(cacheKey, value);
      }
    }
  }), [cacheKey, tableRef]));
  if (initRef.current !== cacheKey) {
    initRef.current = cacheKey;
    cacheEntryRef.current = cache.get(cacheKey);
    latestDataRef.current = cacheEntryRef.current ? {
      collection: cacheEntryRef.current.collection,
      viewportOffset: cacheEntryRef.current.viewportOffset
    } : null;
  }
  const onDataChanged = (0,react.useCallback)((collection, viewportOffset) => {
    latestDataRef.current = {
      collection,
      viewportOffset
    };
    emit({
      collection,
      viewportOffset
    });
  }, [emit]);
  const onScroll = (0,react.useCallback)(() => {
    if (latestDataRef.current) {
      emit({
        collection: latestDataRef.current.collection,
        viewportOffset: latestDataRef.current.viewportOffset
      });
    }
  }, [emit]);
  return {
    cacheEntry: cacheEntryRef.current,
    onDataChanged,
    onScroll
  };
}
function removeCacheEntry(cacheKey) {
  cache.delete(cacheKey);
}
;// CONCATENATED MODULE: ./extensions/common/js/widgets/spreadsheetV2/internal/hooks/useLocalRecord.ts

// eslint-disable-next-line no-restricted-imports -- these imports slipped in before the ban.

function useLocalRecord(_ref) {
  let {
    viewport,
    createRecord
  } = _ref;
  const [localRecords, setLocalRecords] = (0,react.useState)([]);
  const localRecordsFinal = (0,react.useMemo)(() => {
    if (!viewport || viewport.groups.length === 0) {
      return [];
    }
    const result = [];
    localRecords.forEach((lr, lri) => {
      const prevRecords = localRecords.slice(0, lri);

      // offset collection index by the number of previous records
      const collectionOffset = prevRecords.length;
      const group = viewport.groups.find(g => g.groupKey === lr.groupKey);
      if (group) {
        // offset the group index by the number of previous records in the same group
        const groupOffset = prevRecords.filter(r => r.groupKey === group.groupKey).length;
        result.push({
          dto: lr.dto,
          groupKey: lr.groupKey,
          groupIndex: lr.groupIndex + groupOffset,
          collectionIndex: group.collectionStart + lr.groupIndex + collectionOffset
        });
      } else {
        const fallbackGroup = (0,lodash.findLast)(viewport.groups, g => lr.collectionIndex >= g.collectionStart);
        if (fallbackGroup) {
          const groupIndex = Math.min(lr.collectionIndex - fallbackGroup.collectionStart, fallbackGroup.collectionEnd);

          // offset the group index by the number of previous records in the same group
          const groupOffset = prevRecords.filter(r => r.groupKey === fallbackGroup.groupKey).length;
          result.push({
            dto: lr.dto,
            groupKey: fallbackGroup.groupKey,
            groupIndex: groupIndex + groupOffset,
            collectionIndex: fallbackGroup.collectionStart + groupIndex + collectionOffset
          });
        }
      }
    });
    return result;
  }, [localRecords, viewport]);
  const addLocalRecord = (0,react.useCallback)(params => {
    if (!viewport) {
      return;
    }
    setLocalRecords(prev => {
      let newRecord;
      let insertAt;
      if ('groupKey' in params) {
        const group = viewport.groups.find(g => g.groupKey === params.groupKey);
        if (!group) {
          return prev;
        }
        const beforeWithinGroup = prev.filter(r => r.groupKey === group.groupKey && r.groupIndex < params.groupIndex);
        const groupIndex = Math.min(params.groupIndex - beforeWithinGroup.length, group.collectionEnd);
        newRecord = {
          dto: createRecord(params.dto),
          groupKey: params.groupKey,
          groupIndex: groupIndex,
          collectionIndex: group.collectionStart + groupIndex
        };
        insertAt = (0,lodash.findLastIndex)(prev, r => r.groupKey === group.groupKey && r.groupIndex < params.groupIndex);
        if (insertAt === -1) {
          const previousGroups = viewport.groups.slice(0, viewport.groups.indexOf(group)).map(g => g.groupKey);
          insertAt = (0,lodash.findLastIndex)(prev, r => previousGroups.includes(r.groupKey));
        }
      } else {
        const lastBeforeIndex = (0,lodash.findLastIndex)(prev, (r, ri) => r.collectionIndex + ri < params.tableRowIndex);
        const recordsBefore = lastBeforeIndex + 1;
        const collectionIndex = Math.min(params.tableRowIndex - recordsBefore, viewport.total);
        const group = (0,lodash.findLast)(viewport.groups, g => g.collectionStart <= collectionIndex) ?? viewport.groups[0];
        const groupIndex = group ? collectionIndex - group.collectionStart : 0;
        newRecord = {
          dto: createRecord(params.dto),
          groupKey: group?.groupKey ?? '',
          groupIndex: groupIndex,
          collectionIndex: collectionIndex
        };
        insertAt = lastBeforeIndex;
      }
      if (insertAt === -1) {
        return [newRecord, ...prev];
      } else {
        return [...prev.slice(0, insertAt + 1), newRecord, ...prev.slice(insertAt + 1)];
      }
    });
  }, [createRecord, viewport]);
  const updateLocalRecord = (0,react.useCallback)((key, partial) => {
    setLocalRecords(prev => prev.map(record => {
      if (record.dto.key === key) {
        return {
          ...record,
          dto: {
            ...record.dto,
            ...partial
          }
        };
      }
      return record;
    }));
  }, []);
  const removeLocalRecord = (0,react.useCallback)(key => {
    setLocalRecords(prev => prev.filter(record => record.dto.key !== key));
  }, []);
  return {
    localRecords: localRecordsFinal,
    addLocalRecord,
    updateLocalRecord,
    removeLocalRecord
  };
}
;// CONCATENATED MODULE: ./extensions/common/js/widgets/spreadsheetV2/internal/hooks/useTableData.ts


/**
 * Transforms a collection's viewport into a data structure that can be used by the table component.
 *
 * Also provides ways to convert between table row indices and collection viewport row indices.
 */
function useTableData(_ref) {
  let {
    viewport,
    recordType,
    local,
    grouping
  } = _ref;
  const {
    records: localRecords
  } = local;
  const {
    records: groupRecords,
    type: groupType
  } = grouping || {
    records: [],
    type: undefined
  };
  const groupRecordsMap = (0,react.useMemo)(() => {
    const result = new Map();
    groupRecords.forEach(r => result.set(r.tableRowIndex, r.dto));
    return result;
  }, [groupRecords]);
  const tableData = (0,react.useMemo)(() => {
    if (viewport) {
      const records = viewport.records.clone();
      localRecords.forEach(r => records.insert(r.collectionIndex, r.dto));
      groupRecords.forEach(r => records.insert(r.tableRowIndex, r.dto));
      const total = viewport.total + groupRecords.length + localRecords.length;
      return {
        total,
        rows: (0,table/* createTableRowMap */.rq)(records, (index, entity) => {
          if (groupRecordsMap.has(index)) {
            return {
              type: groupType,
              value: entity
            };
          }
          return {
            type: recordType,
            value: entity
          };
        })
      };
    }
    return {
      total: 0,
      rows: (0,table/* createTableRowMap */.rq)(new table/* OffsetMap */.aI(), () => null)
    };
  }, [groupRecords, groupRecordsMap, groupType, localRecords, recordType, viewport]);
  const fromTableRowIndex = (0,react.useCallback)(tableRowIndex => {
    // TODO: add support for local records

    if (groupRecords.length === 0) {
      // grouping not enabled
      const group = viewport?.groups.find(g => tableRowIndex >= g.collectionStart && tableRowIndex < g.collectionEnd);
      if (group) {
        return {
          groupKey: group.groupKey,
          groupIndex: tableRowIndex - group.collectionStart
        };
      }
      return null;
    } else {
      // grouping enabled
      const group = groupRecords.findLast(r => tableRowIndex >= r.tableRowIndex);
      if (group) {
        const groupIndex = tableRowIndex - group.tableRowIndex - 1; /* to account for the first group row that is rendered at index 0 */

        return {
          groupKey: group.groupKey,
          groupIndex: groupIndex
        };
      }
      return null;
    }
  }, [groupRecords, viewport?.groups]);
  const toTableRowIndex = (0,react.useCallback)(viewportRow => {
    // TODO: add support for local records

    if (groupRecords.length === 0) {
      // grouping not enabled
      const group = viewport?.groups.find(g => g.groupKey === viewportRow.groupKey);
      if (group) {
        return group.collectionStart + viewportRow.groupIndex;
      }
      return null;
    } else {
      // grouping enabled
      const group = groupRecords.find(r => r.groupKey === viewportRow.groupKey);
      if (group) {
        return group.tableRowIndex + viewportRow.groupIndex;
      }
      return null;
    }
  }, [groupRecords, viewport?.groups]);
  return {
    tableData,
    fromTableRowIndex,
    toTableRowIndex
  };
}
;// CONCATENATED MODULE: ./extensions/common/js/widgets/spreadsheetV2/internal/hooks/useTableSelection.ts


/**
 * Refer to the Notion page for more information.
 * https://www.notion.so/streak/Client-Overview-153f29cb2cd280079d89f0ff2ae81a51?pvs=4#e98e4d00b14c41388ecc8cbd24f8d618
 */
function useTableSelection(params) {
  const [tableSelection, setTableSelection] = (0,hooks/* useProxyState */.Dy)((0,hooks/* useAsReactState */.h5)(params.selection, params.mutateSelection), {
    mapFromSource: source => {
      if (!source) {
        return undefined;
      }
      return createGridSelection(source, params.tableDataCtx.toTableRowIndex);
    },
    mapFromTarget(target, prev) {
      if (!target) {
        return null;
      }
      const result = {
        added: [],
        removed: []
      };

      // TODO: requires a smarter implementation for when user selects/deselects whole group etc
      const diff = (0,table/* calcRowSelectionDiff */.Z8)(prev.target, target);
      for (const rowIndex of diff.added) {
        const row = params.tableDataCtx.tableData.rows.get(rowIndex);
        if (row && row.type === params.recordType) {
          const value = row.value;
          result.added.push({
            recordKey: value.key,
            ...params.tableDataCtx.fromTableRowIndex(rowIndex)
          });
        }
      }
      for (const rowIndex of diff.removed) {
        const row = params.tableDataCtx.tableData.rows.get(rowIndex);
        if (row && row.type === params.recordType) {
          const value = row.value;
          result.removed.push({
            recordKey: value.key,
            ...params.tableDataCtx.fromTableRowIndex(rowIndex)
          });
        }
      }
      return result;
    }
  });
  return {
    tableSelection,
    setTableSelection
  };
}
function createGridSelection(selection, toTableRowIndex) {
  let rows = table/* CompactSelection */.EV.empty();
  Object.keys(selection.groups).forEach(groupKey => {
    const group = selection.groups[groupKey];

    // GridSelection is the selection of rendered rows only in the Table component.
    // If the group is collapsed, the rows of that group are not rendered so they cannot have an index in the resulted GridSelection.
    if (!group.expanded) {
      return;
    }
    if (group.records === 'all') {
      // TODO: @borys verify that slice uses end as exclusive
      const start = toTableRowIndex({
        groupKey,
        groupIndex: 0
      });
      const end = toTableRowIndex({
        groupKey,
        groupIndex: group.total - 1
      });
      if (start !== null && end !== null) {
        rows = rows.add([start, end]);
      }
    } else {
      Array.from(group.records.toMap().entries()).forEach(_ref => {
        let [groupIndex] = _ref;
        const rowIndex = toTableRowIndex({
          groupKey,
          groupIndex
        });
        if (rowIndex !== null) {
          rows = rows.add(rowIndex);
        }
      });
    }
  });
  return {
    current: undefined,
    columns: table/* CompactSelection */.EV.empty(),
    rows: rows
  };
}
;// CONCATENATED MODULE: ./extensions/common/js/widgets/spreadsheetV2/internal/hooks/useTableCollection.ts

// eslint-disable-next-line no-restricted-imports -- this import slipped in before the ban.





/**
 * Transforms a collection's viewport into a data structure that can be used by the table component.
 *
 * This hook also provides a way to display group rows and add new records (e.g. local records).
 */
function useTableCollection(params) {
  const paramsViewport = params.viewport;
  const paramsRecord = params.record;
  const paramsGrouping = params.grouping;
  const {
    localRecords,
    addLocalRecord,
    updateLocalRecord,
    removeLocalRecord
  } = useLocalRecord({
    viewport: paramsViewport,
    createRecord: paramsRecord.createNewRecord
  });
  const paramsViewportGroupsOptimized = (0,hooks/* useMemoCompare */.qy)((0,react.useMemo)(() => {
    if (!paramsViewport || !paramsGrouping?.enabled) {
      return [];
    }
    return paramsViewport.groups.map(g => ({
      groupKey: g.groupKey,
      collectionStart: g.collectionStart,
      collectionEnd: g.collectionEnd,
      expanded: g.rendered !== 'collapsed'
    }));
  }, [paramsViewport, paramsGrouping]));
  const groupRecords = (0,hooks/* useMemoCompare */.qy)((0,react.useMemo)(() => {
    const result = [];
    let groupOffset = 0;
    paramsViewportGroupsOptimized.forEach((group, index) => {
      const localRecordsCount = localRecords.filter(r => r.groupKey === group.groupKey).length;
      result.push({
        tableRowIndex: group.collectionStart + index + groupOffset,
        groupKey: group.groupKey,
        expanded: group.expanded,
        dto: paramsGrouping.resolveGroupDto({
          groupKey: group.groupKey,
          collectionStart: group.collectionStart + groupOffset,
          collectionEnd: group.collectionEnd + groupOffset + localRecordsCount,
          expanded: group.expanded
        })
      });
      groupOffset += localRecordsCount;
    });
    return result;
  }, [paramsGrouping, paramsViewportGroupsOptimized, localRecords]));
  const tableDataCtx = useTableData({
    viewport: paramsViewport,
    recordType: paramsRecord.rowType,
    local: {
      type: paramsRecord.rowType,
      records: localRecords
    },
    grouping: paramsGrouping ? {
      type: paramsGrouping?.rowType,
      records: groupRecords
    } : undefined
  });
  const addLocalRecordFinal = (0,react.useCallback)(_ref => {
    let {
      tableRowIndex,
      dto
    } = _ref;
    // depending if there are groups or not, collectionIndex passed from the outside should be translated into a correct position

    if (groupRecords.length === 0) {
      // if there are no groups just pass the given index to the local record hook that can place a local record into a correct position within viewport.
      addLocalRecord({
        tableRowIndex,
        dto
      });
    } else {
      // if there are groups, we need to find the correct group and group index for the given collection index

      // shift index by 1 because of displayed group row which is not present in the collection's viewport record indexes.
      tableRowIndex = Math.max(0, tableRowIndex - 1);
      const group = (0,lodash.findLast)(groupRecords, r => tableRowIndex >= r.tableRowIndex);
      if (group) {
        const groupIndex = tableRowIndex - group.tableRowIndex;
        addLocalRecord({
          groupKey: group.groupKey,
          groupIndex,
          dto
        });
      } else {
        addLocalRecord({
          tableRowIndex,
          dto
        });
      }
    }
  }, [addLocalRecord, groupRecords]);
  const grouping = (0,hooks/* useMemoCompare */.qy)((0,react.useMemo)(() => {
    if (groupRecords.length === 0) {
      return undefined;
    }
    return {
      groups: groupRecords.map(_ref2 => {
        let {
          groupKey,
          tableRowIndex,
          expanded
        } = _ref2;
        return {
          groupKey,
          index: tableRowIndex,
          expanded: expanded
        };
      }),
      onGroupToggle: paramsGrouping?.toggleGroup
    };
  }, [groupRecords, paramsGrouping?.toggleGroup]));
  const {
    tableSelection,
    setTableSelection
  } = useTableSelection({
    selection: paramsViewport?.selection,
    mutateSelection: params.mutateSelection,
    recordType: paramsRecord.rowType,
    tableDataCtx
  });
  return {
    tableData: tableDataCtx.tableData,
    grouping,
    localRecords,
    addLocalRecord: addLocalRecordFinal,
    updateLocalRecord,
    removeLocalRecord,
    tableSelection,
    setTableSelection
  };
}
;// CONCATENATED MODULE: ./extensions/common/js/widgets/spreadsheetV2/internal/hooks/useSpreadsheet.ts







function useSpreadsheet(params) {
  const tableRef = (0,react.useRef)(null);
  const {
    cacheEntry,
    onDataChanged,
    onScroll
  } = useTableCache(tableRef, params.data.collectionDef, params.cacheKey);
  const {
    collection,
    data,
    useViewport,
    updateRecord,
    resolveSelection
  } = (0,storeV3/* useCollection */.Kx)(params.data.collectionDef, params.data.collectionParams, {
    collection: cacheEntry?.collection,
    disposeOnUnmount: false
  });
  const {
    viewport,
    setViewportOffset,
    pinRecord,
    unpinRecord,
    toggleGroup,
    mutateSelection
  } = useViewport({
    initialOffset: cacheEntry?.viewportOffset,
    selectionEnabled: params.selectionEnabled
  });
  const onOptionsViewportChange = onDataChanged;
  const onViewportChanged = (0,react.useCallback)(region => {
    const offset = {
      offset: region.start,
      limit: region.end - region.start
    };
    if (onOptionsViewportChange) {
      onOptionsViewportChange(collection, offset);
    }
    setViewportOffset(offset);
  }, [collection, onOptionsViewportChange, setViewportOffset]);
  const rawGroupData = (0,hooks/* useMemoCompare */.qy)((0,react.useMemo)(() => (0,lodash.keyBy)(data.groups, g => g.groupKey), [data.groups]));
  const propResolveGroupDto = params.table.grouping?.resolveGroupData;
  const resolveGroupDto = (0,react.useCallback)(g => {
    return propResolveGroupDto?.(g, rawGroupData[g.groupKey]);
  }, [propResolveGroupDto, rawGroupData]);
  const {
    tableData,
    localRecords,
    grouping,
    addLocalRecord,
    updateLocalRecord,
    tableSelection,
    setTableSelection
  } = useTableCollection({
    viewport,
    mutateSelection,
    record: (0,hooks/* useMemoCompare */.qy)({
      rowType: params.table.record.rowType,
      createNewRecord: params.table.record.createNewRecord
    }),
    grouping: (0,hooks/* useMemoCompare */.qy)(params.table.grouping ? {
      enabled: params.table.grouping.enabled,
      rowType: params.table.grouping.rowType,
      resolveGroupDto,
      toggleGroup
    } : undefined)
  });
  const lastLocalRecordsRef = (0,hooks/* useLatestRef */.II)(localRecords);
  const lastViewportRef = (0,hooks/* useLatestRef */.II)(viewport);
  const finalUpdateRecord = (0,react.useCallback)((key, partial) => {
    if (lastLocalRecordsRef.current) {
      const record = lastLocalRecordsRef.current.find(r => r.dto.key === key);
      if (record) {
        updateLocalRecord(record.dto.key, partial);
        return;
      }
    }
    if (params.table.record.pinningEnabled && lastViewportRef.current) {
      const record = lastViewportRef.current.records.findByKey(key, r => r.key);
      if (record) {
        const currIndex = record[0];
        const group = lastViewportRef.current.groups.findLast(group => currIndex >= group.collectionStart);
        if (group) {
          pinRecord({
            recordKey: key,
            groupKey: group.groupKey,
            groupIndex: currIndex - group.collectionStart
          });
        }
      }
    }
    updateRecord(key, partial);
  }, [lastLocalRecordsRef, lastViewportRef, params.table.record.pinningEnabled, pinRecord, updateLocalRecord, updateRecord]);
  (0,hooks/* useUpdateEffect */.rf)(() => {
    if (!params.table.record.pinningEnabled) {
      unpinRecord();
    }
  }, [params.table.record.pinningEnabled, unpinRecord]);
  const buildTableDef = params.table.buildTableDef;
  const tableDef = (0,react.useMemo)(() => buildTableDef({
    updateRecord: finalUpdateRecord
  }), [finalUpdateRecord, buildTableDef]);
  const tableProps = (0,table/* useTable */.x6)({
    tableDef,
    columnsSettingsState: params.table.columnsSettingsState,
    estimateRowSize: 35,
    overscan: 100,
    data: tableData,
    lookupData: params.data.lookupData,
    grouping,
    onViewportChanged,
    initialScrollOffset: cacheEntry?.scrollOffset,
    selection: params.selectionEnabled ? {
      config: {
        mode: 'multi',
        marker: 'checkbox'
      },
      state: [tableSelection, setTableSelection]
    } : undefined
  });
  const addNewRecord = (0,react.useCallback)(() => {
    let createAfterIndex = 0;
    if (tableProps.selection?.current) {
      createAfterIndex = tableProps.selection.current.cell[1] + 1;
    }
    addLocalRecord({
      tableRowIndex: createAfterIndex
    });
    tableProps.setSelection((0,table/* createCellSelection */.H3)({
      colIndex: tableProps.selection?.current?.cell[0] ?? 0,
      rowIndex: createAfterIndex
    }));
  }, [addLocalRecord, tableProps]);
  let dataReady = true;
  const initialOffsetAppliedRef = (0,react.useRef)(false);
  if (!initialOffsetAppliedRef.current && cacheEntry) {
    if (tableData.rows.size() === 0) {
      dataReady = false;
    } else {
      initialOffsetAppliedRef.current = true;
      dataReady = true;
    }
  }
  return {
    tableRef,
    tableProps: (0,react.useMemo)(() => ({
      ...tableProps,
      onScroll
    }), [tableProps, onScroll]),
    dataCtx: (0,react.useMemo)(() => ({
      ready: dataReady,
      total: data.total,
      addNewRecord
    }), [addNewRecord, data.total, dataReady]),
    selectionCtx: (0,react.useMemo)(() => ({
      selected: viewport?.selection?.selected ?? 0,
      resolveKeys: async () => {
        if (!viewport?.selection) {
          return [];
        }
        return resolveSelection(viewport.selection);
      },
      clear: () => mutateSelection(null)
    }), [viewport?.selection, resolveSelection, mutateSelection])
  };
}
;// CONCATENATED MODULE: ./extensions/common/js/widgets/spreadsheetV2/internal/utils/rendererUtils/mapPipelinesToLabelRendererData.ts


function mapPipelinesToLabelRendererData(data) {
  const labels = data.map(d => {
    const stages = Object.values(d.pipeline.stages).filter(s => d.boxes.find(b => b.stageKey === s.key));
    const lastUpdatedBox = (0,lodash.orderBy)(d.boxes, 'lastUpdatedTimestamp', 'desc')[0];
    const stage = stages.find(s => s.key === lastUpdatedBox?.stageKey);
    return stage ? {
      text: `${d.pipeline.name}`,
      count: d.boxes.length,
      foregroundColor: stage.color.foregroundColor,
      backgroundColor: stage.color.backgroundColor
    } : null;
  }).filter(isNotNil/* default */.Z);
  return {
    labels
  };
}
;// CONCATENATED MODULE: ./extensions/common/js/widgets/spreadsheetV2/index.tsx









/***/ }),

/***/ 74875:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ _1),
/* harmony export */   j: () => (/* binding */ _2)
/* harmony export */ });
// extracted by mini-css-extract-plugin
var _1 = "streak-mod__uYo7Q7DSvWz8bmpbAFug";
var _2 = "streak-mod__HSYQ4BSoOZcGYzZx6Tx3 streak-mod__uYo7Q7DSvWz8bmpbAFug";



/***/ }),

/***/ 76415:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "logo-dark.329e400158d4b747b1e0.png";

/***/ }),

/***/ 74020:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "logo-light-default.ca8454ddc8ba6c140249.png";

/***/ }),

/***/ 96697:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "logo-vivid.643393b161019b4ef36a.png";

/***/ })

};
;
//# sourceMappingURL=https://storage.googleapis.com/streak-extension-sourcemaps/clientjs/clientjs.chunk.9922.8db0d08c20fae0dfa1db.js.map