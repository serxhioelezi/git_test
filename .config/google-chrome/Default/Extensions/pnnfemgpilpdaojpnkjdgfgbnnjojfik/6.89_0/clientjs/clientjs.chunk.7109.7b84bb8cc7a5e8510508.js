"use strict";
export const id = 7109;
export const ids = [7109];
export const modules = {

/***/ 31753:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ runInBatch)
/* harmony export */ });
/* harmony import */ var kefir__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98137);
/* harmony import */ var kefir_bus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67459);
/* harmony import */ var kefir_bus__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(kefir_bus__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Run tasks in parallel with a limit on the number of concurrent tasks.
 *
 * @param tasks - The tasks to run in the batch.
 * @param fn - The function to run for each task.
 * @param options - The options for the batch run.
 * @returns A promise that resolves to the result with the following properties: `total`, `running`, `completed`, `failed`.
 * The promise also has a `cancel` method that stops batch run and a `$progress` stream with latest execution state.
 *
 *
 * @example
 * ```ts
 * const tasks = [1, 2, 3, 4, 5];
 * const fn = async (task: number) => {
 *  await new Promise(resolve => setTimeout(resolve, 1000));
 *  return task + 10;
 * };
 *
 * const batch = runInBatch(tasks, fn, {concurrency: 2});
 *
 * batch.$progress.onValue(progress => {
 *  console.log(progress);
 *  // example output: { total: 5, running: Set { [1, 2] }, completed: Map {}, failed: Map {} }
 * });
 *
 * const result = await batch;
 *
 * console.log(result);
 * // example output: { total: 5, running: Set {}, completed: Map { 1 => 11, 2 => 12, 3 => 13, 4 => 14, 5 => 15 }, failed: Map {} }
 */
function runInBatch(tasks, fn, options) {
  const $workerBus = kefir__WEBPACK_IMPORTED_MODULE_0__["default"].sequentially(1, tasks);
  const $progressBus = kefir_bus__WEBPACK_IMPORTED_MODULE_1___default()();
  const $cancelBus = kefir_bus__WEBPACK_IMPORTED_MODULE_1___default()();
  const running = new Set();
  const completed = new Map();
  const failed = new Map();
  const $worker = $workerBus.takeUntilBy($cancelBus).flatMapConcurLimit(task => {
    const execute = async () => {
      $progressBus.emit({
        total: tasks.length,
        running: new Set(running.add(task)),
        completed,
        failed
      });
      const result = await fn(task);
      return [task, result];
    };
    return kefir__WEBPACK_IMPORTED_MODULE_0__["default"].fromPromise(execute().catch(error => Promise.reject([task, error])));
  }, options?.concurrency ?? 1).mapErrors(_ref => {
    let [task, error] = _ref;
    running.delete(task);
    $progressBus.emit({
      total: tasks.length,
      running: new Set(running),
      completed,
      failed: new Map(failed.set(task, error))
    });
    return [task, null];
  }).map(_ref2 => {
    let [task, result] = _ref2;
    running.delete(task);
    $progressBus.emit({
      total: tasks.length,
      running: new Set(running),
      completed: new Map(completed.set(task, result)),
      failed
    });
    return [task, result];
  }).onEnd(() => {
    running.clear();
    $progressBus.emit({
      total: tasks.length,
      running: new Set(running),
      completed: completed,
      failed: failed
    });
    $progressBus.end();
  });
  const $progress = $progressBus.toProperty(() => ({
    total: tasks.length,
    running,
    completed,
    failed
  }));
  const promise = $worker.toPromise().then(() => ({
    total: tasks.length,
    running,
    completed,
    failed
  }));
  promise.cancel = () => $cancelBus.emit();
  promise.$progress = $progress;
  return promise;
}

/***/ }),

/***/ 88304:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: () => (/* reexport safe */ _internal_hooks_useBoxService__WEBPACK_IMPORTED_MODULE_1__.u)
/* harmony export */ });
/* harmony import */ var _internal_helpers_boxHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7724);
/* harmony import */ var _internal_hooks_useBoxService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24961);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_internal_helpers_boxHelpers__WEBPACK_IMPORTED_MODULE_0__, _internal_hooks_useBoxService__WEBPACK_IMPORTED_MODULE_1__]);
([_internal_helpers_boxHelpers__WEBPACK_IMPORTED_MODULE_0__, _internal_hooks_useBoxService__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 96705:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ addContactToBox)
/* harmony export */ });
/* harmony import */ var _streakyc_models_teamContactAndOrg_teamContactAndOrgCache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41675);
/* harmony import */ var _streakyc_models_teamContactAndOrg_teamContactAndOrgOperationManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57234);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_streakyc_models_teamContactAndOrg_teamContactAndOrgCache__WEBPACK_IMPORTED_MODULE_0__, _streakyc_models_teamContactAndOrg_teamContactAndOrgOperationManager__WEBPACK_IMPORTED_MODULE_1__]);
([_streakyc_models_teamContactAndOrg_teamContactAndOrgCache__WEBPACK_IMPORTED_MODULE_0__, _streakyc_models_teamContactAndOrg_teamContactAndOrgOperationManager__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


async function addContactToBox(box, contactKey, options) {
  const contacts = await box.getTeamContacts();
  const existingContact = contacts.find(contact => contact.key() === contactKey);
  if (existingContact) {
    if (options.isAutoboxed === true && !box.isTeamContactAutoboxed(existingContact)) {
      box.setTeamContactAutoboxState(existingContact, true);
    } else if (options.isAutoboxed === false && box.isTeamContactAutoboxed(existingContact)) {
      box.setTeamContactAutoboxState(existingContact, false);
    }
    return;
  }
  const contactToAdd = await _streakyc_models_teamContactAndOrg_teamContactAndOrgCache__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.getTeamContact(contactKey);
  if (!contactToAdd) {
    // not found
    return;
  }
  await _streakyc_models_teamContactAndOrg_teamContactAndOrgOperationManager__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.addContactToBox(box, contactToAdd, {
    isAutoboxed: options.isAutoboxed === true,
    isStarred: options.isStarred === true,
    isQuickAdded: options.isQuickAdded === true
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7724:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ createBox),
/* harmony export */   o: () => (/* binding */ batchCreateBoxPerContact)
/* harmony export */ });
/* harmony import */ var _services_data_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38672);
/* harmony import */ var _streakyc_models_box_box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94545);
/* harmony import */ var _boxContactHelpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96705);
/* harmony import */ var _streakyc_models_teamContactAndOrg_teamContactAndOrgCache__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41675);
/* harmony import */ var _lib_utils_runInBatch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(31753);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_data_data__WEBPACK_IMPORTED_MODULE_0__, _streakyc_models_box_box__WEBPACK_IMPORTED_MODULE_1__, _boxContactHelpers__WEBPACK_IMPORTED_MODULE_2__, _streakyc_models_teamContactAndOrg_teamContactAndOrgCache__WEBPACK_IMPORTED_MODULE_3__]);
([_services_data_data__WEBPACK_IMPORTED_MODULE_0__, _streakyc_models_box_box__WEBPACK_IMPORTED_MODULE_1__, _boxContactHelpers__WEBPACK_IMPORTED_MODULE_2__, _streakyc_models_teamContactAndOrg_teamContactAndOrgCache__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





async function createBox(pipeline, init) {
  const stage = pipeline.stageOrder.length > 0 ? pipeline.stages[pipeline.stageOrder[0]] : null;
  if (!stage) {
    throw new Error('No stage found');
  }
  const box = _streakyc_models_box_box__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.createFromJSON({
    name: init.name,
    pipelineKey: pipeline.key,
    stageKey: stage.key
  });
  _services_data_data__WEBPACK_IMPORTED_MODULE_0__/* .Data */ .V.getPipelineBoxes(pipeline.key).add(box);
  await box.saveWithPromise({
    hasSavingMessage: false
  });
  if (init.contacts) {
    for (const contactKey of init.contacts.keys) {
      await (0,_boxContactHelpers__WEBPACK_IMPORTED_MODULE_2__/* .addContactToBox */ .a)(box, contactKey, {
        isAutoboxed: init.contacts.params.isAutoboxed,
        isStarred: init.contacts.params.isStarred,
        isQuickAdded: init.contacts.params.isQuickAdded
      });
    }
  }
  return box;
}

/**
 * Creates a box for each contact.
 *
 * @param pipeline - pipeline to create the boxes in.
 * @param contactKeys - a new box will be created for each contact in this list.
 * @param init - options for the box and contacts
 * @param init.name - name of the box. Could be either email or full name of the contact for which the box is created.
 * @param init.contacts - options for the contact when added to the box.
 */
function batchCreateBoxPerContact(pipeline, contactKeys, init) {
  return (0,_lib_utils_runInBatch__WEBPACK_IMPORTED_MODULE_4__/* .runInBatch */ .G)(contactKeys, async contactKey => {
    const contact = await _streakyc_models_teamContactAndOrg_teamContactAndOrgCache__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.getTeamContact(contactKey);
    if (!contact) {
      throw new Error('Contact not found');
    }
    const boxName = init.name === 'contact.email' && contact.hasEmailAddress() ? contact.getPrimaryEmailOrDomain() : contact.displayNameText();
    const box = await createBox(pipeline, {
      name: boxName,
      contacts: {
        keys: [contactKey],
        params: init.contacts?.params || {}
      }
    });
    return box;
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 24961:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: () => (/* binding */ useBoxService)
/* harmony export */ });
/* harmony import */ var _helpers_boxHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7724);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_helpers_boxHelpers__WEBPACK_IMPORTED_MODULE_0__]);
_helpers_boxHelpers__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

function useBoxService() {
  return {
    createBox: _helpers_boxHelpers__WEBPACK_IMPORTED_MODULE_0__/* .createBox */ .d,
    batchCreateBoxPerContact: _helpers_boxHelpers__WEBPACK_IMPORTED_MODULE_0__/* .batchCreateBoxPerContact */ .o
  };
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 74399:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* reexport safe */ _internal_useCallMenuContext__WEBPACK_IMPORTED_MODULE_0__.R)
/* harmony export */ });
/* harmony import */ var _internal_useCallMenuContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47687);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_internal_useCallMenuContext__WEBPACK_IMPORTED_MODULE_0__]);
_internal_useCallMenuContext__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 47687:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ useCallMenuContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44345);
/* harmony import */ var _services_data_useData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60202);
/* harmony import */ var _lib_google__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(58928);
/* harmony import */ var _services_localSettings_localSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55868);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_data_useData__WEBPACK_IMPORTED_MODULE_1__]);
_services_data_useData__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function useCallMenuContext() {
  const {
    useDevices
  } = (0,_services_data_useData__WEBPACK_IMPORTED_MODULE_1__/* .useData */ .e)();
  const devices = useDevices();
  const googleVoiceAvail = (0,_lib_google__WEBPACK_IMPORTED_MODULE_3__/* .isGoogleVoiceAvailable */ .X)();
  const defaultCallMethod = _services_localSettings_localSettings__WEBPACK_IMPORTED_MODULE_2__.LocalSettings.get('defaultCallMethod');
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => ({
    devices,
    googleVoiceAvail,
    defaultCallMethod
  }), [devices, googleVoiceAvail, defaultCallMethod]);
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4216:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GK: () => (/* binding */ deleteContact),
/* harmony export */   Tk: () => (/* binding */ updateContact),
/* harmony export */   as: () => (/* binding */ fetchContactsBlock),
/* harmony export */   m1: () => (/* binding */ fetchContactsMetadata)
/* harmony export */ });
/* harmony import */ var _core_ajax_apiRequester__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23392);
/* harmony import */ var _core_ajax_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98636);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_core_ajax_apiRequester__WEBPACK_IMPORTED_MODULE_0__, _core_ajax_request__WEBPACK_IMPORTED_MODULE_1__]);
([_core_ajax_apiRequester__WEBPACK_IMPORTED_MODULE_0__, _core_ajax_request__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


async function fetchContactsMetadata(_ref) {
  let {
    teamKey
  } = _ref;
  const res = await _core_ajax_apiRequester__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.get(`teams/${teamKey}/contacts/views/__default__/groups`, undefined, {
    prefix: '/api/v2/',
    templateUrl: `/teams/{KEY}/contacts/views/{KEY}/groups`,
    retry: false
  }).getPromise();
  return {
    groups: res.results
  };
}
async function fetchContactsBlock(params, abortSignal) {
  const req = await _core_ajax_apiRequester__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.get(`teams/${params.teamKey}/contacts/views/__default__/groups/${params.groupKey}`, {
    cursor: params.cursor ?? '',
    offset: params.offset ?? 0,
    limit: params.limit
  }, {
    prefix: '/api/v2/',
    templateUrl: `/teams/{KEY}/contacts/views/{KEY}`,
    retry: false
  });
  return abortSignal ? (0,_core_ajax_request__WEBPACK_IMPORTED_MODULE_1__/* .toPromiseWithAbort */ .j7)(req, abortSignal) : req.getPromise();
}
async function updateContact(params) {
  const res = await _core_ajax_apiRequester__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post(`contacts/${params.key}`, {
    json: params.partial
  }, {}, {
    prefix: '/api/v2/',
    templateUrl: `/contacts/{KEY}`
  }).getPromise();
  return res;
}
async function deleteContact(params) {
  const res = await _core_ajax_apiRequester__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.delete(`contacts/${params.key}`, {}, {
    prefix: '/api/v2/',
    templateUrl: `/contacts/{KEY}`
  }).getPromise();
  return res;
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 56245:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ AddToPipelineMenuPanel)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44345);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35091);
/* harmony import */ var _box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88304);
/* harmony import */ var _pipeline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24568);
/* harmony import */ var _widgets_notification__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55741);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_box__WEBPACK_IMPORTED_MODULE_2__, _pipeline__WEBPACK_IMPORTED_MODULE_3__]);
([_box__WEBPACK_IMPORTED_MODULE_2__, _pipeline__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






function AddToPipelineMenuPanel(_ref) {
  let {
    teamKey,
    spreadsheetCtx
  } = _ref;
  const {
    batchCreateBoxPerContact
  } = (0,_box__WEBPACK_IMPORTED_MODULE_2__/* .useBoxService */ .u)();
  const statusBar = (0,_widgets_notification__WEBPACK_IMPORTED_MODULE_4__/* .useButterBar */ .e)();
  const onPick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async pipeline => {
    const total = spreadsheetCtx.selectionCtx.selected;
    statusBar.showMessage({
      message: _services_locale_locale__WEBPACK_IMPORTED_MODULE_1__.Locale.getString('batch_adding_to', {
        count: total,
        what: total > 1 ? _services_locale_locale__WEBPACK_IMPORTED_MODULE_1__.Locale.getString('contacts') : _services_locale_locale__WEBPACK_IMPORTED_MODULE_1__.Locale.getString('contact'),
        where: pipeline.name
      }),
      time: Infinity
    });
    const keys = await spreadsheetCtx.selectionCtx.resolveKeys();
    const batch = batchCreateBoxPerContact(pipeline, keys, {
      name: 'contact.fullname',
      contacts: {
        params: {
          isAutoboxed: true,
          isStarred: false,
          isQuickAdded: false
        }
      }
    });
    batch.$progress.onValue(progress => {
      statusBar.showMessage({
        message: _services_locale_locale__WEBPACK_IMPORTED_MODULE_1__.Locale.getString('batch_adding_to', {
          count: `${progress.completed.size}/${progress.total}`,
          what: total > 1 ? _services_locale_locale__WEBPACK_IMPORTED_MODULE_1__.Locale.getString('contacts') : _services_locale_locale__WEBPACK_IMPORTED_MODULE_1__.Locale.getString('contact'),
          where: pipeline.name
        }),
        buttons: [{
          title: _services_locale_locale__WEBPACK_IMPORTED_MODULE_1__.Locale.getString('cancel'),
          onClick: () => {
            batch.cancel();
            statusBar.showMessage({
              message: _services_locale_locale__WEBPACK_IMPORTED_MODULE_1__.Locale.getString('batch_cancelled', {
                count: `${progress.completed.size}/${progress.total}`,
                what: total > 1 ? _services_locale_locale__WEBPACK_IMPORTED_MODULE_1__.Locale.getString('contacts') : _services_locale_locale__WEBPACK_IMPORTED_MODULE_1__.Locale.getString('contact'),
                where: pipeline.name
              })
            });
          }
        }],
        time: Infinity
      });
    });
    const result = await batch;
    statusBar.showMessage({
      message: _services_locale_locale__WEBPACK_IMPORTED_MODULE_1__.Locale.getString('batch_completed', {
        count: `${result.completed.size}/${result.total}`,
        what: total > 1 ? _services_locale_locale__WEBPACK_IMPORTED_MODULE_1__.Locale.getString('contacts') : _services_locale_locale__WEBPACK_IMPORTED_MODULE_1__.Locale.getString('contact'),
        where: pipeline.name
      })
    });
  }, [batchCreateBoxPerContact, spreadsheetCtx.selectionCtx, statusBar]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_pipeline__WEBPACK_IMPORTED_MODULE_3__/* .TeamPipelinesAutocompleteMenuPanel */ .Mz, {
    teamKey: teamKey,
    onPick: onPick
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5119:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ ContactsSharingMenu)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44345);
/* harmony import */ var _streakyc_ui_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87084);
/* harmony import */ var _core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77294);
/* harmony import */ var _core_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(58556);
/* harmony import */ var _widgets_sharing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57845);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(35091);
/* harmony import */ var _hooks_useContactsSharing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(23957);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_widgets_sharing__WEBPACK_IMPORTED_MODULE_4__, _hooks_useContactsSharing__WEBPACK_IMPORTED_MODULE_6__]);
([_widgets_sharing__WEBPACK_IMPORTED_MODULE_4__, _hooks_useContactsSharing__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








function ContactsSharingMenu(_ref) {
  let {
    initialOpen,
    teamKey
  } = _ref;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_widgets_sharing__WEBPACK_IMPORTED_MODULE_4__/* .SharingPopover */ .G4, {
    initialOpen: initialOpen,
    trigger: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_streakyc_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .ButtonWithText */ .WY, {
      shape: "pill",
      color: "gmail/primary",
      variant: "filled",
      size: "s",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_streakyc_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Typo */ .Jd, {
        variant: "button/base",
        color: "inherit",
        fontSize: "inherit",
        display: "contents",
        children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_5__.Locale.getString('share')
      })
    }),
    panel: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(Panel, {
      teamKey: teamKey
    })
  });
}
const Panel = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(_ref2 => {
  let {
    teamKey
  } = _ref2;
  const {
    sharingConfig,
    sharingI18nConfig
  } = (0,_hooks_useContactsSharing__WEBPACK_IMPORTED_MODULE_6__/* .useContactsSharing */ .x)({
    teamKey
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_widgets_sharing__WEBPACK_IMPORTED_MODULE_4__/* .SharingPopoverPanel */ .Yf, {
    config: sharingConfig,
    i18nConfig: sharingI18nConfig,
    goToTeamPage: (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => _core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_2__.inboxSDK?.Router.goto(_core_routing__WEBPACK_IMPORTED_MODULE_3__/* .StreakCustomRoute */ .ld.ACCOUNT), [])
  });
});
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 13467:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  K: () => (/* binding */ MailMergeProgressIndicator)
});

// EXTERNAL MODULE: ./.yarn/cache/react-npm-18.3.1-af38f3c1ae-261137d3f3.zip/node_modules/react/index.js
var react = __webpack_require__(44345);
// EXTERNAL MODULE: ./.yarn/cache/react-npm-18.3.1-af38f3c1ae-261137d3f3.zip/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(59718);
;// CONCATENATED MODULE: ./extensions/common/js/ui/components/internal/canvas/internal/canvas.tsx


function Canvas(_ref) {
  let {
    draw,
    ...canvasProps
  } = _ref;
  const canvasRef = (0,react.useRef)(null);
  (0,react.useEffect)(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (context == null || canvas == null) {
      return;
    }
    context.reset();
    const dpr = window.devicePixelRatio;
    const rect = canvas.getBoundingClientRect();

    // Set the "actual" size of the canvas
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;

    // Scale the context to ensure correct drawing operations
    context.scale(dpr, dpr);

    // Set the "drawn" size of the canvas
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;
    context.save();
    draw(context);
    context.restore();
  }, [draw]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)("canvas", {
    ...canvasProps,
    ref: canvasRef
  });
}
;// CONCATENATED MODULE: ./extensions/common/js/ui/components/internal/canvas/index.ts

;// CONCATENATED MODULE: ./extensions/common/js/ui/components/canvas.ts

// EXTERNAL MODULE: ./extensions/common/js/ui/components/table.ts
var table = __webpack_require__(16768);
;// CONCATENATED MODULE: ./extensions/common/js/modules/contacts/internal/components/mailMergeProgressIndicator.tsx




function MailMergeProgressIndicator(props) {
  const draw = (0,react.useCallback)(context => {
    const rect = context.canvas.getBoundingClientRect();
    (0,table/* drawProgressIndicator */.Dw)(context, {
      progress: props.progress,
      centerX: rect.width / 2,
      centerY: rect.height / 2,
      radius: 8,
      style: 'rgba(0, 0, 0, 0.87)',
      lineWidth: 2
    });
  }, [props.progress]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Canvas, {
    width: 20,
    height: 20,
    draw: draw
  });
}

/***/ }),

/***/ 7109:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactsView: () => (/* binding */ ContactsView)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17013);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44345);
/* harmony import */ var _core_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58556);
/* harmony import */ var _core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(77294);
/* harmony import */ var _streakyc_ui_components_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2225);
/* harmony import */ var _streakyc_ui_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(87084);
/* harmony import */ var _streakyc_ui_components_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85440);
/* harmony import */ var _widgets_spreadsheetV2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(13222);
/* harmony import */ var _storeV3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(82966);
/* harmony import */ var _core_hooks_useEnabledFeatures__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(27882);
/* harmony import */ var _widgets_view__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(67003);
/* harmony import */ var _userflow__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(82370);
/* harmony import */ var _hooks_useContactsTableLookupData__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(89705);
/* harmony import */ var _hooks_useContactColumns__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(77681);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(33036);
/* harmony import */ var _utils_tableUtils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(83711);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(59386);
/* harmony import */ var _team__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(64936);
/* harmony import */ var _services_data_useData__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(60202);
/* harmony import */ var _components_contactsSharingMenu__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(5119);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(35091);
/* harmony import */ var _widgets_paywallGateway_paywallGateway__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(64167);
/* harmony import */ var _sequenceView__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(1433);
/* harmony import */ var _sequenceView_sequenceManager__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(28778);
/* harmony import */ var _components_addToPipelineMenuPanel__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(56245);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_core_hooks_useEnabledFeatures__WEBPACK_IMPORTED_MODULE_9__, _userflow__WEBPACK_IMPORTED_MODULE_11__, _hooks_useContactsTableLookupData__WEBPACK_IMPORTED_MODULE_12__, _hooks_useContactColumns__WEBPACK_IMPORTED_MODULE_13__, _data__WEBPACK_IMPORTED_MODULE_14__, _utils_tableUtils__WEBPACK_IMPORTED_MODULE_15__, _team__WEBPACK_IMPORTED_MODULE_17__, _services_data_useData__WEBPACK_IMPORTED_MODULE_18__, _components_contactsSharingMenu__WEBPACK_IMPORTED_MODULE_19__, _widgets_paywallGateway_paywallGateway__WEBPACK_IMPORTED_MODULE_21__, _sequenceView__WEBPACK_IMPORTED_MODULE_22__, _sequenceView_sequenceManager__WEBPACK_IMPORTED_MODULE_23__, _components_addToPipelineMenuPanel__WEBPACK_IMPORTED_MODULE_24__]);
([_core_hooks_useEnabledFeatures__WEBPACK_IMPORTED_MODULE_9__, _userflow__WEBPACK_IMPORTED_MODULE_11__, _hooks_useContactsTableLookupData__WEBPACK_IMPORTED_MODULE_12__, _hooks_useContactColumns__WEBPACK_IMPORTED_MODULE_13__, _data__WEBPACK_IMPORTED_MODULE_14__, _utils_tableUtils__WEBPACK_IMPORTED_MODULE_15__, _team__WEBPACK_IMPORTED_MODULE_17__, _services_data_useData__WEBPACK_IMPORTED_MODULE_18__, _components_contactsSharingMenu__WEBPACK_IMPORTED_MODULE_19__, _widgets_paywallGateway_paywallGateway__WEBPACK_IMPORTED_MODULE_21__, _sequenceView__WEBPACK_IMPORTED_MODULE_22__, _sequenceView_sequenceManager__WEBPACK_IMPORTED_MODULE_23__, _components_addToPipelineMenuPanel__WEBPACK_IMPORTED_MODULE_24__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


























function ContactsView(_ref) {
  let {
    teamKey,
    onTeamChange,
    initialPinRecordEnabled,
    initialGroupingEnabled,
    initialSelectionEnabled
  } = _ref;
  const [v2, setV2] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  return v2 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(ContactsViewV2, {
    teamKey: teamKey,
    onTeamChange: onTeamChange,
    onSwitch: () => setV2(false),
    initialPinRecordEnabled: initialPinRecordEnabled,
    initialGroupingEnabled: initialGroupingEnabled,
    initialSelectionEnabled: initialSelectionEnabled
  }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(ContactsViewV1, {
    teamKey: teamKey,
    onSwitch: () => setV2(true)
  });
}
function ContactsViewV2(_ref2) {
  let {
    teamKey,
    onTeamChange,
    onSwitch,
    initialPinRecordEnabled,
    initialGroupingEnabled,
    initialSelectionEnabled
  } = _ref2;
  const {
    contactsViewDevExp
  } = (0,_core_hooks_useEnabledFeatures__WEBPACK_IMPORTED_MODULE_9__/* .useEnabledFeatures */ .o)(['contactsViewDevExp']);
  const {
    columns,
    columnsSettings,
    setColumnsSettings
  } = (0,_hooks_useContactColumns__WEBPACK_IMPORTED_MODULE_13__/* .useContactColumns */ .E)();
  const lookupData = (0,_hooks_useContactsTableLookupData__WEBPACK_IMPORTED_MODULE_12__/* .useContactTableLookupData */ .z)(teamKey);
  const {
    contactsViewMmExp
  } = (0,_core_hooks_useEnabledFeatures__WEBPACK_IMPORTED_MODULE_9__/* .useEnabledFeatures */ .o)(['contactsViewMmExp']);
  const [pinRecordEnabled, setPinRecordEnabled] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialPinRecordEnabled ?? false);
  const [groupingEnabled, setGroupingEnabled] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialGroupingEnabled ?? false);
  const [selectionEnabled, setSelectionEnabled] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialSelectionEnabled || contactsViewMmExp);
  const {
    useTeams,
    useTeamByKey,
    useCurrentUser
  } = (0,_services_data_useData__WEBPACK_IMPORTED_MODULE_18__/* .useData */ .e)();
  const currentUser = useCurrentUser();
  const {
    getDefaultPermissionSetKey,
    isAccessAllowed
  } = (0,_team__WEBPACK_IMPORTED_MODULE_17__/* .useTeamBasedAccessManager */ .qb)(_constants__WEBPACK_IMPORTED_MODULE_16__/* .CONTACTS_TEAM_PERMISSION_KEY */ .O2);
  const teams = useTeams().filter(t => isAccessAllowed(t, currentUser));
  const selectedTeam = useTeamByKey(teamKey);
  const context = (0,_widgets_spreadsheetV2__WEBPACK_IMPORTED_MODULE_7__/* .useSpreadsheet */ .MW)({
    cacheKey: (0,_constants__WEBPACK_IMPORTED_MODULE_16__/* .CONTACTS_CACHE_KEY_PATTERN */ .QR)(teamKey),
    data: {
      collectionDef: _data__WEBPACK_IMPORTED_MODULE_14__/* .CONTACTS_COLLECTION_DEF */ .C,
      collectionParams: (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => ({
        teamKey
      }), [teamKey]),
      lookupData
    },
    table: {
      buildTableDef: (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(_ref3 => {
        let {
          updateRecord
        } = _ref3;
        return (0,_utils_tableUtils__WEBPACK_IMPORTED_MODULE_15__/* .defineContactTable */ .P)({
          columns,
          updateContact: updateRecord
        });
      }, [columns]),
      columnsSettingsState: [columnsSettings, setColumnsSettings],
      record: {
        rowType: 'contact',
        createNewRecord: (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
          return {
            teamKey,
            key: `local-${(0,lodash__WEBPACK_IMPORTED_MODULE_0__.uniqueId)()}`,
            givenName: '',
            familyName: '',
            nameGen: '',
            addresses: [],
            creationDate: 0,
            domains: [],
            orgLinks: [],
            emailAddresses: [],
            lastSavedTimestamp: 0,
            normalizedDomains: [],
            phoneNumbers: [],
            relatedPipelines: [],
            relatedDripRecipients: [],
            relatedOrgs: []
          };
        }, [teamKey]),
        pinningEnabled: pinRecordEnabled
      },
      grouping: {
        enabled: groupingEnabled,
        rowType: 'contact_group',
        resolveGroupData: (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((viewportGroup, collectionGroup) => {
          return {
            groupKey: viewportGroup.groupKey,
            groupName: collectionGroup?.groupData?.groupName ?? viewportGroup.groupKey,
            count: viewportGroup.collectionEnd - viewportGroup.collectionStart
          };
        }, [])
      }
    },
    selectionEnabled
  });
  const canAccessContacts = selectedTeam ? isAccessAllowed(selectedTeam, currentUser) : false;
  const showTeamMenu = selectedTeam && teams.length > 1;
  const labelText = context.dataCtx.total > 0 ? showTeamMenu ? `${selectedTeam.name} (${context.dataCtx.total || ''})` : context.dataCtx.total : showTeamMenu ? selectedTeam.name : '';
  const label = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_streakyc_ui_components__WEBPACK_IMPORTED_MODULE_5__/* .Typo */ .Jd, {
    variant: "base/basic",
    color: "black/secondary",
    display: "contents",
    children: labelText
  });
  const isDefaultPermNotSet = !!selectedTeam && getDefaultPermissionSetKey(selectedTeam) === null;
  const {
    startFlow
  } = (0,_userflow__WEBPACK_IMPORTED_MODULE_11__/* .useUserflow */ .V)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (selectedTeam && isDefaultPermNotSet) {
      startFlow(_userflow__WEBPACK_IMPORTED_MODULE_11__/* .StreakUserflowFlow */ .j.CONTACTS_DEFAULT_PERMISSIONS);
    }
  }, [isDefaultPermNotSet, startFlow, selectedTeam]);
  const {
    contactsOrgs
  } = (0,_core_hooks_useEnabledFeatures__WEBPACK_IMPORTED_MODULE_9__/* .useEnabledFeatures */ .o)([_constants__WEBPACK_IMPORTED_MODULE_16__/* .CONTACTS_AS_PAID_FEATURE_KEY */ .MJ]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!contactsOrgs) {
      _core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_3__.inboxSDK.Router.goto('inbox');
      (0,_widgets_paywallGateway_paywallGateway__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z)({
        feature: _constants__WEBPACK_IMPORTED_MODULE_16__/* .CONTACTS_AS_PAID_FEATURE_KEY */ .MJ
      });
    }
  }, [contactsOrgs]);
  const selectedCount = context?.selectionCtx?.selected || 0;
  const devBar = contactsViewDevExp ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_widgets_spreadsheetV2__WEBPACK_IMPORTED_MODULE_7__/* .SpreadsheetToolbarButton */ .lK, {
      icon: "add",
      onClick: context.dataCtx.addNewRecord,
      tooltip: "Add new record"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_widgets_spreadsheetV2__WEBPACK_IMPORTED_MODULE_7__/* .SpreadsheetToolbarButton */ .lK, {
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_streakyc_ui_components__WEBPACK_IMPORTED_MODULE_5__/* .Icon */ .JO, {
        name: "segment",
        variant: "filled"
      }),
      onClick: () => setGroupingEnabled(!groupingEnabled),
      color: groupingEnabled ? 'primary' : 'muted',
      tooltip: "Grouping"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_widgets_spreadsheetV2__WEBPACK_IMPORTED_MODULE_7__/* .SpreadsheetToolbarButton */ .lK, {
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_streakyc_ui_components__WEBPACK_IMPORTED_MODULE_5__/* .Icon */ .JO, {
        name: "push_pin",
        variant: "filled"
      }),
      onClick: () => setPinRecordEnabled(!pinRecordEnabled),
      color: pinRecordEnabled ? 'primary' : 'muted',
      tooltip: "Pin record"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_widgets_spreadsheetV2__WEBPACK_IMPORTED_MODULE_7__/* .SpreadsheetToolbarButton */ .lK, {
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_streakyc_ui_components__WEBPACK_IMPORTED_MODULE_5__/* .Icon */ .JO, {
        name: "check_circle",
        variant: "filled"
      }),
      onClick: () => setSelectionEnabled(!selectionEnabled),
      color: selectionEnabled ? 'primary' : 'muted',
      tooltip: "Selection"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_widgets_spreadsheetV2__WEBPACK_IMPORTED_MODULE_7__/* .SpreadsheetToolbarButton */ .lK, {
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_streakyc_ui_components__WEBPACK_IMPORTED_MODULE_5__/* .Icon */ .JO, {
        name: "toggle_on",
        variant: "filled"
      }),
      onClick: onSwitch,
      tooltip: "Switch to V1"
    })]
  }) : undefined;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_widgets_spreadsheetV2__WEBPACK_IMPORTED_MODULE_7__/* .SpreadsheetLayout */ .bu, {
    header: selectedCount > 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_widgets_view__WEBPACK_IMPORTED_MODULE_10__/* .ViewActionBar */ .XS, {
      title: _services_locale_locale__WEBPACK_IMPORTED_MODULE_20__.Locale.getString('num_selected', {
        num: selectedCount
      }),
      onCancel: () => context.selectionCtx.clear(),
      titleActions: [[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_sequenceView__WEBPACK_IMPORTED_MODULE_22__/* .AddToSequenceMenu */ .D9, {
        trigger: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_widgets_view__WEBPACK_IMPORTED_MODULE_10__/* .ViewActionBarIconButton */ .Tx, {
          icon: _sequenceView__WEBPACK_IMPORTED_MODULE_22__/* .AddToSequenceMenu */ .D9.Icon
        }),
        onAddToNewClick: async () => {
          const keys = await context.selectionCtx.resolveKeys();
          _sequenceView_sequenceManager__WEBPACK_IMPORTED_MODULE_23__["default"].createSequenceFromContacts(keys);
        },
        onAddToExistingClick: async seq => {
          const keys = await context.selectionCtx.resolveKeys();
          _sequenceView_sequenceManager__WEBPACK_IMPORTED_MODULE_23__["default"].addContactsToSequence(seq.key, keys);
        }
      }, "mm"), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)(_streakyc_ui_components_menu__WEBPACK_IMPORTED_MODULE_6__/* .Menu */ .v2, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_streakyc_ui_components_menu__WEBPACK_IMPORTED_MODULE_6__/* .MenuTrigger */ .bF, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_widgets_view__WEBPACK_IMPORTED_MODULE_10__/* .ViewActionBarIconButton */ .Tx, {
            icon: "more_vert"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_streakyc_ui_components_menu__WEBPACK_IMPORTED_MODULE_6__/* .MenuPanel */ .Gk, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_streakyc_ui_components_menu__WEBPACK_IMPORTED_MODULE_6__/* .SubMenuItem */ .vE, {
            text: _services_locale_locale__WEBPACK_IMPORTED_MODULE_20__.Locale.getString('add_to_pipeline_card'),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_components_addToPipelineMenuPanel__WEBPACK_IMPORTED_MODULE_24__/* .AddToPipelineMenuPanel */ .O, {
              teamKey: teamKey,
              spreadsheetCtx: context
            })
          })
        })]
      }, "more")]],
      rightActions: devBar
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_widgets_view__WEBPACK_IMPORTED_MODULE_10__/* .ViewHeader */ .tr, {
      title: _services_locale_locale__WEBPACK_IMPORTED_MODULE_20__.Locale.getString('directory'),
      titleActions: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.Fragment, {
        children: showTeamMenu ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_team__WEBPACK_IMPORTED_MODULE_17__/* .TeamsMenuWidget */ .eq, {
          teams: teams,
          team: selectedTeam,
          onTeamChange: newTeam => onTeamChange(newTeam.key),
          onManageClick: () => _core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_3__.inboxSDK?.Router.goto(_core_routing__WEBPACK_IMPORTED_MODULE_2__/* .StreakCustomRoute */ .ld.ACCOUNT),
          style: {
            placement: 'bottom-end',
            triggerColor: 'muted',
            triggerSize: 's',
            triggerValue: () => label
          }
        }) : label
      }),
      rightActions: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.Fragment, {
        children: [devBar, selectedTeam && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_components_contactsSharingMenu__WEBPACK_IMPORTED_MODULE_19__/* .ContactsSharingMenu */ .L
        /**
         * IMPORTANT: this will make react re-initialize the component so initialOpen value gets replied if the teamKey changes
         */, {
          /**
           * open sharing menu if no default permission set.
           * In this case only the owners can navigate to this view so it is ok to open it just by checking the value
           */
          initialOpen: isDefaultPermNotSet,
          teamKey: selectedTeam.key
        }, selectedTeam.key)]
      })
    }),
    table: canAccessContacts ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_widgets_spreadsheetV2__WEBPACK_IMPORTED_MODULE_7__/* .Spreadsheet */ .YF, {
      context: context
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_streakyc_ui_components_layout__WEBPACK_IMPORTED_MODULE_4__/* .LayoutBox */ .kZ, {
      flex: true,
      alignItemH: "center",
      alignItemV: "center",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)(_streakyc_ui_components_layout__WEBPACK_IMPORTED_MODULE_4__/* .LayoutColumn */ .rO, {
        alignItemsH: "center",
        gapV: "xs",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_streakyc_ui_components__WEBPACK_IMPORTED_MODULE_5__/* .Typo */ .Jd, {
          variant: "H3 - Section",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_streakyc_ui_components__WEBPACK_IMPORTED_MODULE_5__/* .Span */ .Dr, {
            children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_20__.Locale.getString('contacts_no_access_title')
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_streakyc_ui_components__WEBPACK_IMPORTED_MODULE_5__/* .Typo */ .Jd, {
          variant: "H4 - Caption",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_streakyc_ui_components__WEBPACK_IMPORTED_MODULE_5__/* .Span */ .Dr, {
            children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_20__.Locale.getString('contacts_no_access_desc')
          })
        })]
      })
    })
  });
}
function ContactsViewV1(_ref4) {
  let {
    teamKey,
    onSwitch
  } = _ref4;
  const {
    data,
    mutation,
    useViewport,
    updateRecord,
    deleteRecord
  } = (0,_storeV3__WEBPACK_IMPORTED_MODULE_8__/* .useCollection */ .Kx)(_data__WEBPACK_IMPORTED_MODULE_14__/* .CONTACTS_COLLECTION_DEF */ .C, {
    teamKey
  });
  const {
    viewport,
    setViewportOffset
  } = useViewport();
  const onViewportRangeChanged = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(range => {
    setViewportOffset({
      offset: range.startIndex,
      limit: range.endIndex - range.startIndex
    });
  }, [setViewportOffset]);
  const table = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_storeV3__WEBPACK_IMPORTED_MODULE_8__/* .CollectionTable */ .vF, {
    overscan: 10,
    data: data,
    mutation: mutation,
    viewport: viewport,
    onViewportRangeChanged: onViewportRangeChanged,
    columns: [{
      title: 'First name',
      type: 'text',
      accessor: 'givenName'
    }, {
      title: 'Last name',
      type: 'text',
      accessor: 'familyName'
    }, {
      title: 'Emails',
      type: 'array',
      accessor: 'emailAddresses'
    }, {
      title: 'Addresses',
      type: 'array',
      accessor: 'addresses'
    }, {
      title: 'Phone numbers',
      type: 'array',
      accessor: 'phoneNumbers'
    }],
    onChange: (record, column, newValue) => {
      updateRecord(record.key, {
        [column.accessor]: newValue
      });
    },
    onDelete: record => {
      deleteRecord(record.key);
    }
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)(_streakyc_ui_components_layout__WEBPACK_IMPORTED_MODULE_4__/* .LayoutColumn */ .rO, {
    overflow: "hidden",
    maxHeight: "100%",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)(_streakyc_ui_components_layout__WEBPACK_IMPORTED_MODULE_4__/* .LayoutRow */ .WM, {
      padding: "mnudge|l",
      alignItemsH: "space-between",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)(_streakyc_ui_components_layout__WEBPACK_IMPORTED_MODULE_4__/* .LayoutRow */ .WM, {
        gapH: "xxl",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_streakyc_ui_components__WEBPACK_IMPORTED_MODULE_5__/* .Typo */ .Jd, {
          variant: "body/basic",
          children: "Directory"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_streakyc_ui_components__WEBPACK_IMPORTED_MODULE_5__/* .Typo */ .Jd, {
          variant: "base/basic",
          color: "black/secondary",
          children: data.total || ''
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_streakyc_ui_components_layout__WEBPACK_IMPORTED_MODULE_4__/* .LayoutRow */ .WM, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_streakyc_ui_components__WEBPACK_IMPORTED_MODULE_5__/* .ButtonWithText */ .WY, {
          icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_streakyc_ui_components__WEBPACK_IMPORTED_MODULE_5__/* .Icon */ .JO, {
            name: "toggle_off",
            variant: "outlined"
          }),
          onClick: onSwitch,
          color: "muted",
          variant: "text",
          shape: "rect/square",
          tooltip: "Switch to V1",
          size: "s"
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_streakyc_ui_components_layout__WEBPACK_IMPORTED_MODULE_4__/* .LayoutBox */ .kZ, {
      flex: true,
      overflow: "hidden",
      children: table
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 33036:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ CONTACTS_COLLECTION_DEF)
/* harmony export */ });
/* harmony import */ var _storeV3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82966);
/* harmony import */ var _services_data_realtimedata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13704);
/* harmony import */ var _api_fetchApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4216);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_data_realtimedata__WEBPACK_IMPORTED_MODULE_1__, _api_fetchApi__WEBPACK_IMPORTED_MODULE_2__]);
([_services_data_realtimedata__WEBPACK_IMPORTED_MODULE_1__, _api_fetchApi__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const CONTACTS_COLLECTION_DEF = (0,_storeV3__WEBPACK_IMPORTED_MODULE_0__/* .defineCollection */ .eR)({
  api: {
    maxBlockSize: 500,
    fetchMetadata: async params => {
      const res = await (0,_api_fetchApi__WEBPACK_IMPORTED_MODULE_2__/* .fetchContactsMetadata */ .m1)({
        teamKey: params.teamKey
      });
      return {
        groups: res.groups.map(g => ({
          groupKey: g.groupByKeyEncoded,
          groupData: {
            groupKey: g.groupByKeyEncoded,
            groupName: g.groupByValue,
            count: g.count
          },
          total: g.count
        }))
      };
    },
    fetchBlock: async (params, signal) => {
      const res = await (0,_api_fetchApi__WEBPACK_IMPORTED_MODULE_2__/* .fetchContactsBlock */ .as)({
        teamKey: params.teamKey,
        groupKey: params.groupKey,
        cursor: params.cursor,
        offset: params.offset,
        limit: params.limit
      }, signal);
      return {
        metadata: {
          groups: res.groups.map(g => ({
            groupKey: g.groupByKeyEncoded,
            groupData: {
              groupKey: g.groupByKeyEncoded,
              groupName: g.groupByValue,
              count: g.count
            },
            total: g.count
          }))
        },
        prev: res.previousCursor,
        records: res.results,
        next: res.nextCursor
      };
    },
    updateRecord: async params => {
      const res = await (0,_api_fetchApi__WEBPACK_IMPORTED_MODULE_2__/* .updateContact */ .Tk)({
        teamKey: params.teamKey,
        key: params.key,
        partial: params.partial
      });
      return {
        record: res
      };
    },
    deleteRecord: async params => {
      await (0,_api_fetchApi__WEBPACK_IMPORTED_MODULE_2__/* .deleteContact */ .GK)({
        teamKey: params.teamKey,
        key: params.key
      });
      return {
        success: true
      };
    },
    realtime(_ref) {
      let {
        teamKey
      } = _ref;
      return _services_data_realtimedata__WEBPACK_IMPORTED_MODULE_1__.realtimeData.getRealtimeStream().filter(_services_data_realtimedata__WEBPACK_IMPORTED_MODULE_1__.isRealtimeEventTeamContact).flatten(e => {
        return e.entities.filter(e => !e.teamKey || e.teamKey === teamKey).map(entity => ({
          type: e.REALTIME_EVENT === 'CREATE' ? _storeV3__WEBPACK_IMPORTED_MODULE_0__/* .RealtimeEventType */ .O8.CREATE : e.REALTIME_EVENT === 'UPDATE' ? _storeV3__WEBPACK_IMPORTED_MODULE_0__/* .RealtimeEventType */ .O8.UPDATE : _storeV3__WEBPACK_IMPORTED_MODULE_0__/* .RealtimeEventType */ .O8.DELETE,
          key: entity.key
        }));
      });
    }
  },
  utils: {
    cursor: {
      toCursorData(dto) {
        return {
          id: dto.key,
          normalizedFullName: dto.familyName + '' + dto.givenName
        };
      },
      compare(a, b) {
        if (a.normalizedFullName < b.normalizedFullName) {
          return -1;
        } else if (a.normalizedFullName > b.normalizedFullName) {
          return 1;
        } else {
          return a.id < b.id ? -1 : a.id > b.id ? 1 : 0;
        }
      }
    }
  }
});
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 77681:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ useContactColumns)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44345);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35091);
/* harmony import */ var _core_hooks_useEnabledFeatures__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27882);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(59386);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_core_hooks_useEnabledFeatures__WEBPACK_IMPORTED_MODULE_2__]);
_core_hooks_useEnabledFeatures__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function useContactColumns() {
  const allColumns = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const keys = Object.keys(_constants__WEBPACK_IMPORTED_MODULE_3__/* .CONTACTS_SYSTEM_COLUMNS_MAP */ .lT);
    return keys.map(name => {
      const column = _constants__WEBPACK_IMPORTED_MODULE_3__/* .CONTACTS_SYSTEM_COLUMNS_MAP */ .lT[name];
      return {
        columnId: name,
        title: _services_locale_locale__WEBPACK_IMPORTED_MODULE_1__.Locale.getString(column.titleLocaleKey),
        icon: column.icon,
        loadingRenderer: column.loadingRenderer
      };
    });
  }, []);
  const {
    contactsViewDevExp
  } = (0,_core_hooks_useEnabledFeatures__WEBPACK_IMPORTED_MODULE_2__/* .useEnabledFeatures */ .o)(['contactsViewDevExp']);
  const availableColumns = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (contactsViewDevExp) {
      return allColumns;
    }
    return allColumns.filter(column => !_constants__WEBPACK_IMPORTED_MODULE_3__/* .CONTACTS_COLUMNS_DEV_ONLY */ .sh.includes(column.columnId));
  }, [allColumns, contactsViewDevExp]);
  const [columnsSettings, setColumnsSettings] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    order: availableColumns.map(c => c.columnId),
    pinned: _constants__WEBPACK_IMPORTED_MODULE_3__/* .CONTACTS_DEFAULT_PINNED_COLUMNS */ .wD,
    hidden: new Set(),
    title: new Map(availableColumns.map(c => [c.columnId, c.title])),
    width: new Map(availableColumns.map(c => [c.columnId, 200]))
  });
  return {
    columns: allColumns,
    columnsSettings,
    setColumnsSettings
  };
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 23957:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ useContactsSharing)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44345);
/* harmony import */ var _streakyc_common_widgets_sharing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57845);
/* harmony import */ var _services_data_useData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60202);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35091);
/* harmony import */ var _billing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(25161);
/* harmony import */ var _team__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(64936);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(59386);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_streakyc_common_widgets_sharing__WEBPACK_IMPORTED_MODULE_1__, _services_data_useData__WEBPACK_IMPORTED_MODULE_2__, _billing__WEBPACK_IMPORTED_MODULE_4__, _team__WEBPACK_IMPORTED_MODULE_5__]);
([_streakyc_common_widgets_sharing__WEBPACK_IMPORTED_MODULE_1__, _services_data_useData__WEBPACK_IMPORTED_MODULE_2__, _billing__WEBPACK_IMPORTED_MODULE_4__, _team__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








function useContactsSharing(_ref) {
  let {
    teamKey
  } = _ref;
  const {
    useCurrentUser,
    useTeamByKey
  } = (0,_services_data_useData__WEBPACK_IMPORTED_MODULE_2__/* .useData */ .e)();
  const team = useTeamByKey(teamKey);
  const user = useCurrentUser();
  const {
    invite
  } = (0,_billing__WEBPACK_IMPORTED_MODULE_4__/* .useInviteTeamMembers */ .o_)();
  const sharingI18nConfig = useI18nConfig();
  const {
    adminPermission,
    fullAccessPermission,
    noAccessPermission,
    teamPermissions,
    aclPermissions
  } = useContactsPermissions();
  const {
    sharingApi
  } = (0,_team__WEBPACK_IMPORTED_MODULE_5__/* .useTeamBasedPermissions */ .Rf)(_constants__WEBPACK_IMPORTED_MODULE_6__/* .CONTACTS_TEAM_PERMISSION_KEY */ .O2, {
    team,
    currentUser: user,
    canChangeAclEntryPermission: (_, aclEntries, __, _ref2) => {
      let {
        teamBasedPermissions
      } = _ref2;
      const readonlyInTheList = aclEntries.some(e => {
        const originalEntry = teamBasedPermissions.aclEntries.find(oe => oe.userKey === e.userKey);
        return originalEntry?.isReadOnly;
      });
      return !readonlyInTheList;
    },
    constants: {
      adminPermissionSetKey: adminPermission.key,
      noAccessPermissionSetKey: noAccessPermission.key
    }
  });
  const sharingConfig = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return {
      authData: {
        currentUserKey: user.key,
        currentUserEmail: user.email
      },
      permissionsData: {
        teamPermissions: teamPermissions,
        aclPermissions: aclPermissions,
        confirmNoAccess: true,
        customPermissions: null
      },
      teamData: {
        team: team,
        teamPermissionSetKey: sharingApi.defaultPermissionSetKey,
        canChangeTeamPermission: sharingApi.canChangeDefaultPermissionSet,
        changeTeamPermission: sharingApi.changeDefaultPermissionSet
      },
      aclData: {
        initialTargetPermissionSetKey: fullAccessPermission.key,
        overrides: sharingApi.aclEntries,
        canChangeAclEntryPermission: sharingApi.canChangeAclEntryPermission,
        changeAclEntryPermission: sharingApi.changeAclEntries,
        removeAclEntry: sharingApi.removeAclEntries
      },
      inviteData: {
        canInviteAsGuest: false,
        canInviteAsTeamMember: (0,_billing__WEBPACK_IMPORTED_MODULE_4__/* .canUserChangeTeamMembers */ .Qu)(team, user.key),
        async invite(breakdown) {
          if (breakdown.emailsToAddAsMembers.length > 0) {
            const res = await invite(team, breakdown.emailsToAddAsMembers);
            switch (res.status) {
              case _billing__WEBPACK_IMPORTED_MODULE_4__/* .TeamInviteStatus */ .wH.UPGRADE_PAYWALL:
                {
                  return {
                    status: _streakyc_common_widgets_sharing__WEBPACK_IMPORTED_MODULE_1__/* .SharingInviteStatus */ .zp.FAILED_UPGRADE_PAYWALL
                  };
                }
              case _billing__WEBPACK_IMPORTED_MODULE_4__/* .TeamInviteStatus */ .wH.SUCCESS:
                {
                  return {
                    status: _streakyc_common_widgets_sharing__WEBPACK_IMPORTED_MODULE_1__/* .SharingInviteStatus */ .zp.SUCCESS,
                    entries: res.members.map(m => (0,_streakyc_common_widgets_sharing__WEBPACK_IMPORTED_MODULE_1__/* .mapTeamMemberToAclEntry */ .zr)(m, {
                      permissionSetKey: null
                    }))
                  };
                }
            }
          }
          return {
            status: _streakyc_common_widgets_sharing__WEBPACK_IMPORTED_MODULE_1__/* .SharingInviteStatus */ .zp.SUCCESS,
            entries: []
          };
        }
      },
      constants: {
        adminPermissionSetKey: adminPermission.key,
        noAccessPermissionSetKey: noAccessPermission.key
      }
    };
  }, [aclPermissions, adminPermission.key, fullAccessPermission.key, invite, noAccessPermission.key, sharingApi.aclEntries, sharingApi.canChangeAclEntryPermission, sharingApi.canChangeDefaultPermissionSet, sharingApi.changeAclEntries, sharingApi.changeDefaultPermissionSet, sharingApi.defaultPermissionSetKey, sharingApi.removeAclEntries, team, teamPermissions, user.email, user.key]);
  return {
    sharingConfig,
    sharingI18nConfig
  };
}
function useI18nConfig() {
  return (0,_streakyc_common_widgets_sharing__WEBPACK_IMPORTED_MODULE_1__/* .useSharingI18nDefaults */ .Yc)((0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => ({
    removeAccessAlert: {
      title: _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__.Locale.getString('contacts_sharing_no_access_alert_title'),
      subtitle: _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__.Locale.getString('contacts_sharing_no_access_alert_subtitle'),
      body: _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__.Locale.getString('contacts_sharing_no_access_alert_body'),
      learnMoreUrl: 'https://support.streak.com/en/articles/2648401-sharing-a-pipeline' // TODO: use a different link
    },
    search: {
      inviteAsTeamMember(email) {
        return {
          title: _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__.Locale.getArray('contacts_sharing_invite_email_title', {
            email: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("b", {
              children: email
            })
          }),
          subtitle: _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__.Locale.getString('contacts_sharing_invite_email_desc')
        };
      },
      inviteAsGuest() {
        return {
          title: null,
          subtitle: null
        };
      },
      cannotInviteEmail() {
        return {
          text: null,
          subtitle: _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__.Locale.getString('contacts_sharing_cannot_invite_email')
        };
      }
    }
  }), []));
}
const CONTACTS_PERMISSION_I18N_PREFIX = 'contacts_sharing_perm';
function useContactsPermissions() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const adminPermission = (0,_streakyc_common_widgets_sharing__WEBPACK_IMPORTED_MODULE_1__/* .getLocalizedPermissionSet */ .YI)(CONTACTS_PERMISSION_I18N_PREFIX, _constants__WEBPACK_IMPORTED_MODULE_6__/* .CONTACTS_PERMISSION_ADMIN_KEY */ .MQ, {
      order: 0,
      type: _streakyc_common_widgets_sharing__WEBPACK_IMPORTED_MODULE_1__/* .SharingPermissionSetType */ .L7.STANDARD
    });
    const fullAccessPermission = (0,_streakyc_common_widgets_sharing__WEBPACK_IMPORTED_MODULE_1__/* .getLocalizedPermissionSet */ .YI)(CONTACTS_PERMISSION_I18N_PREFIX, _constants__WEBPACK_IMPORTED_MODULE_6__/* .CONTACTS_PERMISSION_FULL_ACCESS_KEY */ .yC, {
      order: 1,
      type: _streakyc_common_widgets_sharing__WEBPACK_IMPORTED_MODULE_1__/* .SharingPermissionSetType */ .L7.STANDARD
    });
    const noAccessPermission = (0,_streakyc_common_widgets_sharing__WEBPACK_IMPORTED_MODULE_1__/* .getLocalizedPermissionSet */ .YI)(CONTACTS_PERMISSION_I18N_PREFIX, _constants__WEBPACK_IMPORTED_MODULE_6__/* .CONTACTS_PERMISSION_NO_ACCESS_KEY */ .X$, {
      order: 2,
      type: _streakyc_common_widgets_sharing__WEBPACK_IMPORTED_MODULE_1__/* .SharingPermissionSetType */ .L7.STANDARD
    });
    return {
      adminPermission,
      fullAccessPermission,
      noAccessPermission,
      teamPermissions: [fullAccessPermission, noAccessPermission],
      aclPermissions: [adminPermission, fullAccessPermission, noAccessPermission]
    };
  }, []);
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 89705:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ useContactTableLookupData)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44345);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17013);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_data_useData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60202);
/* harmony import */ var _sequenceView_hooks_useSequences__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14643);
/* harmony import */ var _communication__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74399);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_data_useData__WEBPACK_IMPORTED_MODULE_2__, _sequenceView_hooks_useSequences__WEBPACK_IMPORTED_MODULE_3__, _communication__WEBPACK_IMPORTED_MODULE_4__]);
([_services_data_useData__WEBPACK_IMPORTED_MODULE_2__, _sequenceView_hooks_useSequences__WEBPACK_IMPORTED_MODULE_3__, _communication__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





function useContactTableLookupData(teamKey) {
  const {
    useTeamByKey,
    usePipelines,
    useUserSettings
  } = (0,_services_data_useData__WEBPACK_IMPORTED_MODULE_2__/* .useData */ .e)();
  const teamRaw = useTeamByKey(teamKey);
  const pipelines = usePipelines();
  const pipelinesByKey = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => (0,lodash__WEBPACK_IMPORTED_MODULE_1__.keyBy)(pipelines, p => p.key), [pipelines]);
  const settings = useUserSettings();
  const {
    data: mailMergesQueryData
  } = (0,_sequenceView_hooks_useSequences__WEBPACK_IMPORTED_MODULE_3__/* .useSequencesList */ .Qs)();
  const mailMerges = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => mailMergesQueryData ?? [], [mailMergesQueryData]);
  const callContext = (0,_communication__WEBPACK_IMPORTED_MODULE_4__/* .useCallMenuContext */ .R)();
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return {
      pipelines,
      pipelinesByKey,
      team: teamRaw,
      userSettings: settings,
      mailMerges,
      callContext
    };
  }, [pipelines, pipelinesByKey, teamRaw, settings, mailMerges, callContext]);
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 55935:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ mailMergesHoverCard)
/* harmony export */ });
/* harmony import */ var _streakyc_ui_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87084);
/* harmony import */ var _streakyc_ui_components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2225);
/* harmony import */ var _streakyc_ui_components_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85440);
/* harmony import */ var _streakyc_ui_components_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16768);
/* harmony import */ var _streakyc_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(72493);
/* harmony import */ var _components_mailMergeProgressIndicator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13467);
/* harmony import */ var _utils_getRecipientMailMergeProgress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(45377);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(35091);
/* harmony import */ var _services_copy_fallbackTitle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(62200);
/* harmony import */ var _sequenceView__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1433);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_streakyc_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_4__, _sequenceView__WEBPACK_IMPORTED_MODULE_9__]);
([_streakyc_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_4__, _sequenceView__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const mailMergesHoverCard = (0,_streakyc_ui_components_table__WEBPACK_IMPORTED_MODULE_3__/* .createHoverCardMenu */ .aV)(data => {
  return {
    render: _ref => {
      let {
        dismiss
      } = _ref;
      const mailMerges = (0,_utils_getRecipientMailMergeProgress__WEBPACK_IMPORTED_MODULE_6__/* .getSortedRecipientMailMergeProgress */ .t)(data.relatedDripRecipients, data.lookupData.mailMerges ?? []);
      const availableMailMergesToBeAdded = (data.lookupData.mailMerges || []).filter(lookupMailMerge => {
        return !mailMerges.some(mm => mm.sequenceKey === lookupMailMerge.key) && lookupMailMerge.status !== _streakyc_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_4__/* .SequenceStatus */ .ST.Archived;
      });
      const canAddToMailMerge = data.contactEmail && availableMailMergesToBeAdded.length > 0;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_streakyc_ui_components_layout__WEBPACK_IMPORTED_MODULE_1__/* .LayoutColumn */ .rO, {
        children: [mailMerges.length === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_streakyc_ui_components_layout__WEBPACK_IMPORTED_MODULE_1__/* .LayoutColumn */ .rO, {
            padding: "m",
            gapV: "xxs",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_streakyc_ui_components_layout__WEBPACK_IMPORTED_MODULE_1__/* .LayoutRow */ .WM, {
              alignItemsV: "center",
              alignItemsH: "center",
              gapH: "snudge",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_streakyc_ui_components_layout__WEBPACK_IMPORTED_MODULE_1__/* .LayoutColumn */ .rO, {
                gapV: "xxs",
                alignItemsV: "center",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_streakyc_ui_components_layout__WEBPACK_IMPORTED_MODULE_1__/* .LayoutBox */ .kZ, {
                  display: "flex",
                  padding: "xs",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_streakyc_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Typo */ .Jd, {
                    variant: "base/basic",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_streakyc_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Span */ .Dr, {
                      children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_7__.Locale.getString('no_mail_merge_found')
                    })
                  })
                })
              })
            })
          })
        }), mailMerges.length > 0 && mailMerges.map(mm => {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_streakyc_ui_components_menu__WEBPACK_IMPORTED_MODULE_2__/* .MenuItem */ .sN, {
            tool: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_mailMergeProgressIndicator__WEBPACK_IMPORTED_MODULE_5__/* .MailMergeProgressIndicator */ .K, {
              progress: mm.progress
            }),
            text: (0,_services_copy_fallbackTitle__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(mm.sequenceName),
            subtext: mm.description,
            onClick: () => {
              dismiss();
              data.onClickMailMerge(mm.sequenceKey, mm.recipientKey);
            }
          }, mm.recipientKey);
        }), canAddToMailMerge && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_streakyc_ui_components_menu__WEBPACK_IMPORTED_MODULE_2__/* .MenuDivider */ .R, {}), canAddToMailMerge && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_streakyc_ui_components_menu__WEBPACK_IMPORTED_MODULE_2__/* .SubMenuItem */ .vE, {
          variant: "action",
          icon: "add",
          text: _services_locale_locale__WEBPACK_IMPORTED_MODULE_7__.Locale.getString('add_to_sequence'),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_streakyc_ui_components_menu__WEBPACK_IMPORTED_MODULE_2__/* .MenuPanel */ .Gk, {
            size: "s",
            children: availableMailMergesToBeAdded.map(mm => {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_streakyc_ui_components_menu__WEBPACK_IMPORTED_MODULE_2__/* .MenuItem */ .sN, {
                tool: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_sequenceView__WEBPACK_IMPORTED_MODULE_9__/* .SequenceStatusIcon */ .KK, {
                  status: mm.status,
                  activeRecipientCount: mm.activeRecipientCount,
                  size: "xs"
                }),
                text: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_streakyc_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Span */ .Dr, {
                  children: [(0,_services_copy_fallbackTitle__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(mm.displayName), mm.status === _streakyc_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_4__/* .SequenceStatus */ .ST.Draft ? ` (${_services_locale_locale__WEBPACK_IMPORTED_MODULE_7__.Locale.getString('draft')})` : '']
                }),
                onClick: () => {
                  dismiss();
                  data.onAddToMailMerge?.(mm.key);
                }
              }, mm.key);
            })
          })
        }, "add_to_sequence")]
      });
    }
  };
});
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 45377:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* binding */ getSortedRecipientMailMergeProgress)
/* harmony export */ });
/* unused harmony export getRecipientMailMergeProgress */
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17013);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_streakTimelineMoment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48726);
/* harmony import */ var _lib_utils_isNotNil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72086);



function getRecipientMailMergeProgress(recipient, briefSequence) {
  let description = '';
  const messageSchedule = recipient.messageSchedule ?? [];
  const scheduledCount = messageSchedule.length;
  const sentCount = recipient.messageHistory?.length || 0;
  const total = scheduledCount + sentCount; // todo: replace this with briefSequence.totalMessageCount
  const nextScheduled = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.sortBy)(messageSchedule, 'estimatedSendTimestamp')[0]?.estimatedSendTimestamp;
  let progress = sentCount > 0 ? sentCount / total * 100 : 0;
  switch (recipient.state) {
    case 'DONE':
      progress = 100;
      description = 'No response';
      break;
    case 'REPLIED':
      progress = 101;
      description = 'Replied';
      break;
    case 'SCHEDULED':
    case 'RUNNING':
      {
        // server will not return archived sequences, but still keep it here for better clarity
        // if it accidentally returns archived sequences, we will show the same message as paused
        description = ['ARCHIVED', 'PAUSED'].includes(briefSequence?.status) || nextScheduled == null ? `This mail merge is ${(briefSequence?.status || '').toLowerCase()}` : `Next email in ${(0,_lib_streakTimelineMoment__WEBPACK_IMPORTED_MODULE_1__/* .streakTimelineMoment */ .iw)(nextScheduled, false)}`;
        break;
      }
    default:
      {
        // rest of recipient states: DRAFT, PAUSED, ERROR
        description = `Recipient is ${(recipient.state ?? '').toLowerCase()}`;
        break;
      }
  }
  return {
    recipientKey: recipient.key,
    sequenceKey: briefSequence.key,
    sequenceName: briefSequence.displayName,
    progress,
    description,
    sequenceStatus: briefSequence.status,
    latestMessageSent: briefSequence.latestMessageSent,
    createdDate: briefSequence.createdDate
  };
}
function getSortedRecipientMailMergeProgress(recipients, briefSequences) {
  const recipientsMailMergeProgress = recipients.map(r => {
    const briefSequence = briefSequences.find(s => s.key === r.sequenceKey);
    if (!briefSequence) return null;
    return getRecipientMailMergeProgress(r, briefSequence);
  }).filter(_lib_utils_isNotNil__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z);
  const archived = recipientsMailMergeProgress.filter(r => r.sequenceStatus === 'ARCHIVED');
  const rest = recipientsMailMergeProgress.filter(r => r.sequenceStatus !== 'ARCHIVED');
  const orderList = [_ref => {
    let {
      latestMessageSent,
      createdDate
    } = _ref;
    return latestMessageSent || createdDate || 0;
  }];
  const sortedArchived = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.orderBy)(archived, orderList, ['desc']);
  const sortedRest = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.orderBy)(rest, orderList, ['desc']);
  return [...sortedRest, ...sortedArchived];
}

/***/ }),

/***/ 83711:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ defineContactTable)
/* harmony export */ });
/* harmony import */ var _streakyc_common_core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77294);
/* harmony import */ var _streakyc_ui_components_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16768);
/* harmony import */ var _lib_initiateCall__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88314);
/* harmony import */ var _widgets_spreadsheetV2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13222);
/* harmony import */ var _hoverCards_mailMergesHoverCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55935);
/* harmony import */ var _getRecipientMailMergeProgress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45377);
/* harmony import */ var _sequenceView_sequenceManager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(28778);
/* harmony import */ var _services_copy_fallbackTitle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(62200);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(35091);
/* harmony import */ var _core_routing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(58556);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_initiateCall__WEBPACK_IMPORTED_MODULE_2__, _hoverCards_mailMergesHoverCard__WEBPACK_IMPORTED_MODULE_4__, _sequenceView_sequenceManager__WEBPACK_IMPORTED_MODULE_6__]);
([_lib_initiateCall__WEBPACK_IMPORTED_MODULE_2__, _hoverCards_mailMergesHoverCard__WEBPACK_IMPORTED_MODULE_4__, _sequenceView_sequenceManager__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










function defineContactTable(_ref) {
  let {
    columns,
    updateContact
  } = _ref;
  const styles = getComputedStyle(document.documentElement);
  const getVarValue = varName => styles.getPropertyValue(varName);
  const openURL = url => {
    const URL = url.startsWith('http') ? url : `https://${url}`;
    window.open(URL, '_blank');
  };
  return (0,_streakyc_ui_components_table__WEBPACK_IMPORTED_MODULE_1__/* .defineTable */ .hG)({
    renderers: [_streakyc_ui_components_table__WEBPACK_IMPORTED_MODULE_1__/* .TEXT_RENDERER */ .yj, _streakyc_ui_components_table__WEBPACK_IMPORTED_MODULE_1__/* .EMAIL_ARRAY_RENDERER */ .aY, _streakyc_ui_components_table__WEBPACK_IMPORTED_MODULE_1__/* .PHONE_ARRAY_RENDERER */ .Pl, _streakyc_ui_components_table__WEBPACK_IMPORTED_MODULE_1__/* .LINK_RENDERER */ .or, _streakyc_ui_components_table__WEBPACK_IMPORTED_MODULE_1__/* .LINK_ARRAY_RENDERER */ .DA, _streakyc_ui_components_table__WEBPACK_IMPORTED_MODULE_1__/* .LABEL_RENDERER */ .v8, _streakyc_ui_components_table__WEBPACK_IMPORTED_MODULE_1__/* .PROFILE_RENDERER */ .KG, _streakyc_ui_components_table__WEBPACK_IMPORTED_MODULE_1__/* .PROGRESS_TAGS_RENDERER */ .sy],
    columns: _ref2 => {
      let {
        defineColumn
      } = _ref2;
      return columns.map(c => defineColumn(c.columnId, {
        menu: {
          canPin: true,
          canHide: true
        },
        icon: c.icon,
        loadingRenderer: c.loadingRenderer
      }));
    },
    rows: _ref3 => {
      let {
        defineRow
      } = _ref3;
      return [defineRow({
        name: 'contact',
        cells: _ref4 => {
          let {
            defineCell
          } = _ref4;
          return {
            name: defineCell({
              render(entity) {
                const fullName = entity.nameGen ?? '';
                return {
                  renderer: 'PROFILE',
                  data: {
                    readonly: true,
                    name: fullName,
                    initial: (fullName[0] ?? '').toUpperCase(),
                    imageUrl: entity.photoUrl,
                    isGroup: false,
                    onClick: () => {
                      _streakyc_common_core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_0__.inboxSDK.Router.goto('streak/contact/:key', {
                        key: entity.key
                      });
                    }
                  }
                };
              },
              onEdited() {
                // noop
              }
            }),
            givenName: defineCell({
              render(entity) {
                return {
                  renderer: 'TEXT',
                  data: {
                    readonly: false,
                    value: entity.givenName || ''
                  }
                };
              },
              onEdited(entity, newValue) {
                updateContact(entity.key, {
                  givenName: newValue.data.value
                });
              }
            }),
            familyName: defineCell({
              render(entity) {
                return {
                  renderer: 'TEXT',
                  data: {
                    readonly: false,
                    value: entity.familyName || ''
                  }
                };
              },
              onEdited(entity, newValue) {
                updateContact(entity.key, {
                  familyName: newValue.data.value
                });
              }
            }),
            company: defineCell({
              render(entity) {
                if (entity.relatedOrgs.length === 0) {
                  return {
                    renderer: 'TEXT',
                    data: {
                      readonly: true,
                      value: ''
                    }
                  };
                }
                const org = entity.relatedOrgs[0];
                const orgName = org.nameGen ?? '';
                return {
                  renderer: 'PROFILE',
                  data: {
                    readonly: true,
                    name: orgName || _services_locale_locale__WEBPACK_IMPORTED_MODULE_8__.Locale.getString('untitled_in_parentheses'),
                    initial: (orgName[0] ?? '').toUpperCase(),
                    imageUrl: org.logoURL,
                    isGroup: true,
                    onClick: () => {
                      _streakyc_common_core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_0__.inboxSDK.Router.goto('streak/organization/:key', {
                        key: org?.key
                      });
                    }
                  }
                };
              },
              onEdited() {
                // noop
              }
            }),
            role: defineCell({
              render(entity) {
                return {
                  renderer: 'TEXT',
                  data: {
                    readonly: true,
                    value: entity.title || ''
                  }
                };
              },
              onEdited() {
                // noop
              }
            }),
            emailAddresses: defineCell({
              render(entity) {
                return {
                  renderer: 'EMAIL_ARRAY',
                  data: {
                    readonly: false,
                    emails: entity.emailAddresses.map(email => ({
                      value: email,
                      onClick: async () => {
                        const composeView = await _streakyc_common_core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_0__.inboxSDK?.Compose?.openNewComposeView();
                        if (composeView != null) {
                          composeView.setToRecipients([email]);
                          return;
                        }
                        window.open(`mailto:${email}`, '_blank');
                      }
                    }))
                  }
                };
              },
              onEdited() {
                // noop
              }
            }),
            phoneNumbers: defineCell({
              render(entity) {
                return {
                  renderer: 'PHONE_ARRAY',
                  data: {
                    readonly: true,
                    phones: entity.phoneNumbers
                  }
                };
              },
              onEdited(_entity, _newValue) {
                // noop
              },
              hoverCard: (data, _, lookupData) => {
                if (data.phoneNumbers.length === 0) return null;
                return (0,_widgets_spreadsheetV2__WEBPACK_IMPORTED_MODULE_3__/* .phonesHoverCard */ .eM)({
                  callContext: lookupData.callContext,
                  phones: data.phoneNumbers,
                  onClick(phone, options) {
                    (0,_lib_initiateCall__WEBPACK_IMPORTED_MODULE_2__/* .callInitWithTeamContact */ .Bi)(phone, {
                      key: data.key
                    }, options);
                  }
                });
              }
            }),
            addresses: defineCell({
              render(entity) {
                return {
                  renderer: 'LINK_ARRAY',
                  data: {
                    readonly: false,
                    links: entity.addresses.map(address => ({
                      value: address,
                      onClick: () => {
                        openURL(`https://www.google.com/maps/search/?api=1&query=${address}`);
                      }
                    }))
                  }
                };
              },
              onEdited() {
                // noop
              }
            }),
            websites: defineCell({
              render(entity) {
                return {
                  renderer: 'LINK_ARRAY',
                  data: {
                    readonly: true,
                    links: entity.domains.map(domain => ({
                      value: domain,
                      onClick: () => {
                        openURL(domain);
                      }
                    }))
                  }
                };
              },
              onEdited() {
                // noop
              }
            }),
            pipelines: defineCell({
              render(entity, _, lookupData) {
                const pipelinesData = entity.relatedPipelines.filter(rp => lookupData.pipelinesByKey[rp.pipelineKey]).map(rp => ({
                  boxes: rp.boxes,
                  pipeline: lookupData.pipelinesByKey[rp.pipelineKey]
                }));
                const {
                  labels
                } = (0,_widgets_spreadsheetV2__WEBPACK_IMPORTED_MODULE_3__/* .mapPipelinesToLabelRendererData */ .Yc)(pipelinesData);
                return {
                  renderer: 'LABELS',
                  data: {
                    readonly: true,
                    labels
                  }
                };
              },
              onEdited() {
                // noop
              },
              hoverCard(data, _, lookupData) {
                if (data.relatedPipelines.length === 0) return null;
                return (0,_widgets_spreadsheetV2__WEBPACK_IMPORTED_MODULE_3__/* .boxesHoverCard */ .P4)({
                  lookupData,
                  boxes: data.relatedPipelines.flatMap(rp => rp.boxes),
                  onClick(box) {
                    _streakyc_common_core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_0__.inboxSDK.Router.goto(_core_routing__WEBPACK_IMPORTED_MODULE_9__/* .StreakCustomRoute */ .ld.BOX, {
                      key: box.key
                    });
                  }
                });
              }
            }),
            mailMerges: defineCell({
              render(entity, _, lookupData) {
                const mailMerges = lookupData.mailMerges ?? [];
                const recipientsMailMerges = (0,_getRecipientMailMergeProgress__WEBPACK_IMPORTED_MODULE_5__/* .getSortedRecipientMailMergeProgress */ .t)(entity.relatedDripRecipients, mailMerges);
                return {
                  renderer: 'PROGRESS_TAGS',
                  data: {
                    readonly: true,
                    items: recipientsMailMerges.map(m => ({
                      name: (0,_services_copy_fallbackTitle__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(m.sequenceName),
                      progress: m.progress
                    }))
                  }
                };
              },
              onEdited() {
                // noop
              },
              hoverCard(data, _, lookupData) {
                const contactEmail = data.emailAddresses[0];
                if (data.relatedDripRecipients.length === 0 && contactEmail == null) return null;
                return (0,_hoverCards_mailMergesHoverCard__WEBPACK_IMPORTED_MODULE_4__/* .mailMergesHoverCard */ .O)({
                  contactEmail,
                  lookupData,
                  relatedDripRecipients: data.relatedDripRecipients,
                  onClickMailMerge(mailMergeKey, _) {
                    _streakyc_common_core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_0__.inboxSDK.Router.goto(_core_routing__WEBPACK_IMPORTED_MODULE_9__/* .StreakCustomRoute */ .ld.SEQUENCE_RECIPIENT_EMAILS, {
                      key: mailMergeKey,
                      emails: contactEmail
                    });
                  },
                  onAddToMailMerge(mailMergeKey) {
                    _sequenceView_sequenceManager__WEBPACK_IMPORTED_MODULE_6__["default"].addContactToSequence(mailMergeKey, data.key);
                  }
                });
              }
            }),
            ...fromEntriesTyped([{
              column: 'twitter',
              entityField: 'twitterHandle',
              domain: 'twitter.com'
            }, {
              column: 'linkedin',
              entityField: 'linkedinHandle',
              domain: 'linkedin.com'
            }, {
              column: 'facebook',
              entityField: 'facebookHandle',
              domain: 'facebook.com'
            }, {
              column: 'instagram',
              entityField: 'instagramHandle',
              domain: 'instagram.com'
            }].map(entry => {
              return [entry.column, defineCell({
                render(entity) {
                  const entityValue = entity[entry.entityField];
                  const prepCellValue = (domain, socialHandle) => {
                    if (!socialHandle) return '';
                    if (socialHandle.includes(domain)) return socialHandle;
                    return `${domain}/${socialHandle}`;
                  };
                  const cellValue = prepCellValue(entry.domain, entityValue);
                  return {
                    renderer: 'LINK',
                    data: {
                      readonly: false,
                      value: cellValue,
                      onClick: () => {
                        openURL(cellValue);
                      }
                    }
                  };
                },
                onEdited(entity, newValue) {
                  updateContact(entity.key, {
                    [entry.entityField]: newValue.data.value
                  });
                }
              })];
            }))
          };
        }
      }), defineRow({
        name: 'contact_group',
        theme: {
          bgCell: getVarValue('--gmail-email-row'),
          baseFontStyle: `700 ${getVarValue('--streak-text-size-13')}`
        },
        cells(_ref5) {
          let {
            defineCell
          } = _ref5;
          return {
            ...fromEntriesTyped(columns.map(c => [c.columnId, defineCell({
              render(data, ctx, _, tableCtx) {
                if (ctx.colIndex === 1) {
                  return {
                    renderer: 'TEXT',
                    data: {
                      readonly: true,
                      value: data.groupName,
                      span: [1, tableCtx.columns.length - 1]
                    }
                  };
                }
                return {
                  renderer: 'TEXT',
                  data: {
                    readonly: true,
                    value: '',
                    span: [1, tableCtx.columns.length - 1]
                  }
                };
              },
              onEdited() {
                // noop
              }
            })]))
          };
        }
      })];
    }
  });
}
function fromEntriesTyped(entries) {
  return Object.fromEntries(entries);
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 82370:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* reexport safe */ _internal_useUserflow__WEBPACK_IMPORTED_MODULE_0__.V),
/* harmony export */   j: () => (/* reexport safe */ _internal_types__WEBPACK_IMPORTED_MODULE_1__.j)
/* harmony export */ });
/* harmony import */ var _internal_useUserflow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73627);
/* harmony import */ var _internal_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38812);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_internal_useUserflow__WEBPACK_IMPORTED_MODULE_0__]);
_internal_useUserflow__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 28270:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ startFlow)
/* harmony export */ });
/* harmony import */ var userflow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32746);
/* harmony import */ var _lib_log_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7961);
/* harmony import */ var _customOnboarding_setupUserflow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32965);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([userflow_js__WEBPACK_IMPORTED_MODULE_0__, _customOnboarding_setupUserflow__WEBPACK_IMPORTED_MODULE_2__]);
([userflow_js__WEBPACK_IMPORTED_MODULE_0__, _customOnboarding_setupUserflow__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



async function startFlow(user, flowId, track, options, attributes) {
  try {
    const setupSuccess = userflow_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.isIdentified() || (await (0,_customOnboarding_setupUserflow__WEBPACK_IMPORTED_MODULE_2__/* .userflowIdentifyUser */ .m)(attributes));
    if (setupSuccess) {
      await userflow_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.start(flowId, options);
      track('flowStarted', {
        userEmail: user.email,
        flowId,
        options
      });
      return true;
    }
  } catch (error) {
    (0,_lib_log_error__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)({
      err: new Error('Error starting userflow flow', {
        cause: error
      }),
      details: {
        flowId
      },
      level: 'warning'
    });
  }
  return false;
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 38812:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ StreakUserflowFlow)
/* harmony export */ });
let StreakUserflowFlow = /*#__PURE__*/function (StreakUserflowFlow) {
  StreakUserflowFlow["CONTACTS_DEFAULT_PERMISSIONS"] = "b5614b1a-5b65-4f4c-a1ab-04d5165dd06f";
  StreakUserflowFlow["ORGS_DEFAULT_PERMISSIONS"] = "6e87f9a0-e01b-4b07-a915-611af66327ac";
  return StreakUserflowFlow;
}({});

/***/ }),

/***/ 73627:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ useUserflow)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44345);
/* harmony import */ var _services_data_useData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60202);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28270);
/* harmony import */ var _services_tracker_useTracker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(70989);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_data_useData__WEBPACK_IMPORTED_MODULE_1__, _helpers__WEBPACK_IMPORTED_MODULE_2__]);
([_services_data_useData__WEBPACK_IMPORTED_MODULE_1__, _helpers__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




function useUserflow() {
  const track = (0,_services_tracker_useTracker__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP)('userflow');
  const {
    useCurrentUser
  } = (0,_services_data_useData__WEBPACK_IMPORTED_MODULE_1__/* .useData */ .e)();
  const user = useCurrentUser();
  const start = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((flow, options) => {
    (0,_helpers__WEBPACK_IMPORTED_MODULE_2__/* .startFlow */ .a)(user, flow, track, options);
  }, [track, user]);
  return {
    startFlow: start
  };
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
//# sourceMappingURL=https://storage.googleapis.com/streak-extension-sourcemaps/clientjs/clientjs.chunk.7109.7b84bb8cc7a5e8510508.js.map