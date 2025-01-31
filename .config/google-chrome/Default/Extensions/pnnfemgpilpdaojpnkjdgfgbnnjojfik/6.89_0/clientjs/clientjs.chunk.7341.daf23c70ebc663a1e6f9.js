"use strict";
export const id = 7341;
export const ids = [7341];
export const modules = {

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

/***/ 52354:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ LAST_NAV_ITEM_TRACKED_EMAIL_ROUTE)
/* harmony export */ });
const LAST_NAV_ITEM_TRACKED_EMAIL_ROUTE = 'last_nav_item_active_tracked_emails_route';

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
//# sourceMappingURL=https://storage.googleapis.com/streak-extension-sourcemaps/clientjs/clientjs.chunk.7341.daf23c70ebc663a1e6f9.js.map