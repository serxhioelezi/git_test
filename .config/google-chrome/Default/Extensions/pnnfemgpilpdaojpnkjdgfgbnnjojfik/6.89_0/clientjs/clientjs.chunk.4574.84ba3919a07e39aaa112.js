"use strict";
export const id = 4574;
export const ids = [4574];
export const modules = {

/***/ 84665:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ CommandPalette)
});

// EXTERNAL MODULE: ./.yarn/__virtual__/styled-jsx-virtual-9c4bfc1357/0/cache/styled-jsx-npm-5.0.2-aff4f13ebf-96b4507d41.zip/node_modules/styled-jsx/style.js
var style = __webpack_require__(81518);
var style_default = /*#__PURE__*/__webpack_require__.n(style);
// EXTERNAL MODULE: ./.yarn/cache/react-npm-18.3.1-af38f3c1ae-261137d3f3.zip/node_modules/react/index.js
var react = __webpack_require__(44345);
// EXTERNAL MODULE: ./.yarn/__virtual__/react-autosuggest-virtual-5e614363f2/0/cache/react-autosuggest-npm-10.1.0-4b1df27cc2-17b2121d56.zip/node_modules/react-autosuggest/dist/index.js
var dist = __webpack_require__(69696);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);
;// CONCATENATED MODULE: ./extensions/common/js/lib/utils/isInputCursorAtLastPosition.ts
function isInputCursorAtLastPosition(input) {
  const {
    selectionEnd,
    selectionStart,
    value
  } = input;
  return selectionStart === selectionEnd && selectionEnd === value.length;
}
// EXTERNAL MODULE: ./extensions/common/js/services/locale/locale.ts + 37 modules
var locale = __webpack_require__(35091);
// EXTERNAL MODULE: ./extensions/common/js/components/Icon/Icon.tsx + 1 modules
var Icon = __webpack_require__(71174);
// EXTERNAL MODULE: ./.yarn/cache/react-npm-18.3.1-af38f3c1ae-261137d3f3.zip/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(59718);
;// CONCATENATED MODULE: ./extensions/common/js/modules/commandPalette/commandPaletteInput.tsx





function CommandPaletteInput(_ref, ref) {
  let {
    context,
    inputProps
  } = _ref;
  const inputRef = (0,react.useRef)(null);
  (0,react.useImperativeHandle)(ref, () => ({
    selectAll() {
      const input = inputRef.current;
      input && input.setSelectionRange(0, input.value.length);
    }
  }));
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: "jsx-2513288353" + " " + "streak__command-palette-inputContainer",
    children: [context && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "jsx-2513288353" + " " + "streak__command-palette-context",
      children: [context.name, /*#__PURE__*/(0,jsx_runtime.jsx)(Icon/* default */.Z, {
        accent: "muted",
        name: "chevron_right",
        variant: "text"
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("input", {
      ...inputProps,
      ref: inputRef,
      style: {
        paddingLeft: context ? 0 : undefined
      },
      className: "jsx-2513288353" + " " + (inputProps && inputProps.className != null && inputProps.className || "")
    }), /*#__PURE__*/(0,jsx_runtime.jsx)((style_default()), {
      id: "2513288353",
      children: [".streak__command-palette-context.jsx-2513288353{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-weight:500;margin-left:22px;white-space:nowrap;}", ".streak__command-palette-input.jsx-2513288353{border:none;box-sizing:border-box;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;font-family:var(--google-font-family);line-height:48px;outline:none;padding:0 22px;width:100%;}", ".streak__command-palette-inputContainer.jsx-2513288353{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-bottom:1px solid var(--streak-black-divider);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:16px;}"]
    })]
  });
}
/* harmony default export */ const commandPaletteInput = (/*#__PURE__*/(0,react.forwardRef)(CommandPaletteInput));
;// CONCATENATED MODULE: ./extensions/common/js/modules/commandPalette/commandPaletteRow.tsx



function CommandPaletteRow(_ref) {
  let {
    suggestion
  } = _ref;
  const {
    command,
    highlight
  } = suggestion;
  const {
    category,
    categoryLabel,
    name,
    type
  } = command;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
      className: "jsx-1104162223" + " " + `streak__command-palette-category streak__command-palette-category-${category}`,
      children: categoryLabel
    }), highlight ? /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
      dangerouslySetInnerHTML: {
        __html: highlight
      },
      className: "jsx-1104162223" + " " + "streak__command-palette-name"
    }) : /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
      className: "jsx-1104162223" + " " + "streak__command-palette-name",
      children: name
    }), type === 'context' && /*#__PURE__*/(0,jsx_runtime.jsx)(Icon/* default */.Z, {
      accent: "muted",
      name: "chevron_right",
      variant: "text"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)((style_default()), {
      id: "1104162223",
      children: [".streak__command-palette-category.jsx-1104162223{border-radius:2px;color:white;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;margin-right:0.5em;max-width:140px;overflow:hidden;padding:2px 6px;text-overflow:ellipsis;white-space:nowrap;}", ".streak__command-palette-category-box.jsx-1104162223{background:var(--streak-app-primary);}", ".streak__command-palette-category-globalDebug.jsx-1104162223{background:var(--streak-black-primary);}", ".streak__command-palette-category-globalIntegration.jsx-1104162223{background:var(--streak-black-secondary);}", ".streak__command-palette-category-globalInternal.jsx-1104162223{background:var(--streak-black-primary);}", ".streak__command-palette-category-globalNav.jsx-1104162223{background:var(--streak-orange);}", ".streak__command-palette-category-globalPipeline.jsx-1104162223{background:var(--streak-success);}", ".streak__command-palette-category-globalSearch.jsx-1104162223{background:var(--streak-app-primary);}", ".streak__command-palette-category-pipeline.jsx-1104162223{background:var(--streak-highlight);}", ".streak__command-palette-name.jsx-1104162223{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}"]
    })]
  });
}
;// CONCATENATED MODULE: ./extensions/common/js/modules/commandPalette/commandPalette.tsx








function CommandPalette(_ref) {
  let {
    context,
    onChangeQuery,
    onClose,
    setContext,
    suggestions,
    track
  } = _ref;
  const autosuggestRef = (0,react.useRef)(null);
  const inputRef = (0,react.useRef)(null);
  const [value, setValue] = (0,react.useState)('');
  (0,react.useEffect)(() => {
    context?.getInitialValue?.().then(initialValue => {
      if (!initialValue) {
        return;
      }
      setValue(initialValue);
      inputRef.current?.selectAll();
    });
  }, [context]);

  // Normally the escape key closes the modal. When there's an active context, we instead want to
  // clear it and keep the modal open. The modal's keydown handler swallows the escape key and
  // prevents the <input>'s onKeyDown and onKeyDownCapture from receiving it, so we have to add our
  // own global keydown listener to handle it.
  (0,react.useEffect)(() => {
    function clearContextOnEscape(event) {
      if (event.key !== 'Escape' || !context) {
        return;
      }
      event.preventDefault();
      event.stopPropagation();
      setContext(null);
      setValue('');
    }
    document.addEventListener('keydown', clearContextOnEscape, true);
    return () => document.removeEventListener('keydown', clearContextOnEscape, true);
  }, [context, setContext]);
  function runSuggestionCommand(_ref2) {
    let {
      command
    } = _ref2;
    switch (command.type) {
      case 'action':
        command.action();
        onClose();
        break;
      case 'context':
        setContext(command.contextToSet);
        setValue('');
        break;
    }
    track('select', {
      command: command.name,
      context: context?.name,
      type: command.type
    });
  }
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)((dist_default()), {
      alwaysRenderSuggestions: true,
      getSuggestionValue: suggestion => suggestion.command.name,
      highlightFirstSuggestion: true,
      inputProps: {
        autoFocus: true,
        onChange: (event, _ref3) => {
          let {
            newValue
          } = _ref3;
          return setValue(newValue);
        },
        onKeyDown: event => {
          switch (event.key) {
            // Navigate to a context via the right arrow.
            case 'ArrowRight':
              {
                const input = event.target;
                const highlightedSuggestion = autosuggestRef.current?.getHighlightedSuggestion() || null;
                if (!isInputCursorAtLastPosition(input) || highlightedSuggestion?.command.type !== 'context') {
                  return;
                }
                runSuggestionCommand(highlightedSuggestion);
                break;
              }
            // Navigate away from a context via the left arrow or delete key.
            case 'ArrowLeft':
            case 'Backspace':
              {
                if (!context || value) {
                  return;
                }
                setContext(null);
                break;
              }
            // Fire a context's default action via the enter key.
            case 'Enter':
              {
                const trimmedValue = value.trim();
                if (!context?.defaultAction || !trimmedValue) {
                  return;
                }
                const contextToSet = context.defaultAction(trimmedValue);
                if (contextToSet) {
                  setContext(contextToSet);
                  setValue('');
                } else {
                  onClose();
                }
                track('select.contextDefaultAction', {
                  context: context.name
                });
                break;
              }
            default:
              {
                return;
              }
          }

          // We should only make it here if we've performed an action in response to a key press.
          event.preventDefault();
          event.stopPropagation();
        },
        placeholder: context ? context.inputPlaceholder : locale/* default */.Z.getString('command_palette_input_placeholder'),
        value
      },
      onSuggestionSelected: (event, _ref4) => {
        let {
          suggestion
        } = _ref4;
        event.preventDefault();
        runSuggestionCommand(suggestion);
      },
      onSuggestionsFetchRequested: _ref5 => {
        let {
          reason,
          value: query
        } = _ref5;
        if (reason !== 'input-changed' && reason !== 'input-focused') {
          return;
        }
        onChangeQuery(query);
      },
      ref: autosuggestRef,
      renderInputComponent: inputProps => /*#__PURE__*/(0,jsx_runtime.jsx)(commandPaletteInput, {
        context: context,
        inputProps: inputProps,
        ref: inputRef
      }),
      renderSuggestion: suggestion => /*#__PURE__*/(0,jsx_runtime.jsx)(CommandPaletteRow, {
        suggestion: suggestion
      }),
      suggestions: suggestions,
      theme: {
        container: 'streak__command-palette-container',
        containerOpen: 'streak__command-palette-containerOpen',
        input: 'streak__command-palette-input',
        inputFocused: 'streak__command-palette-inputFocused',
        inputOpen: 'streak__command-palette-inputOpen',
        sectionContainer: 'streak__command-palette-sectionContainer',
        sectionContainerFirst: 'streak__command-palette-sectionContainerFirst',
        sectionTitle: 'streak__command-palette-sectionTitle',
        suggestion: 'streak__command-palette-suggestion',
        suggestionFirst: 'streak__command-palette-suggestionFirst',
        suggestionHighlighted: 'streak__command-palette-suggestionHighlighted',
        suggestionsContainer: 'streak__command-palette-suggestionsContainer',
        suggestionsContainerOpen: 'streak__command-palette-suggestionsContainerOpen',
        suggestionsList: 'streak__command-palette-suggestionsList'
      }
    }), /*#__PURE__*/(0,jsx_runtime.jsx)((style_default()), {
      id: "3731663974",
      children: [".streak__command-palette-container{font-family:var(--google-font-family);font-size:14px;}", ".streak__command-palette-suggestion{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:8px 22px;}", ".streak__command-palette-suggestionHighlighted{background-color:var(--streak-app-primary-hover);color:var(--streak-app-primary);}", ".streak__command-palette-suggestionsContainer{max-height:280px;overflow-y:auto;}", ".streak__command-palette-suggestionsList{list-style:none;margin:0;padding:0;}"]
    })]
  });
}

/***/ }),

/***/ 14574:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var kefir__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98137);
/* harmony import */ var kefir_stopper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(94322);
/* harmony import */ var kefir_stopper__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(kefir_stopper__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44345);
/* harmony import */ var _commandPalette__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84665);
/* harmony import */ var _commands__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81218);
/* harmony import */ var _suggestions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65029);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_commands__WEBPACK_IMPORTED_MODULE_3__]);
_commands__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








function CommandPaletteContainer(_ref, ref) {
  let {
    onClose,
    track
  } = _ref;
  const [context, setContext] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const [query, setQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const [suggestions, setSuggestions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const stopper = kefir_stopper__WEBPACK_IMPORTED_MODULE_6___default()();
    const commandsStreamFunction = context ? context.getCommandsStream || (() => kefir__WEBPACK_IMPORTED_MODULE_0__.constant([])) : _commands__WEBPACK_IMPORTED_MODULE_3__/* .getRootCommandsStream */ .R;
    commandsStreamFunction(query).takeUntilBy(stopper).onValue(commands => {
      const suggestions = (0,_suggestions__WEBPACK_IMPORTED_MODULE_4__/* .getSuggestionsFromQuery */ .r)(query, commands);
      setSuggestions(suggestions);
    });
    return () => stopper.destroy();
  }, [context, query]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle)(ref, () => ({
    setContext
  }));
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_commandPalette__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    context: context,
    onChangeQuery: setQuery,
    onClose: onClose,
    setContext: context => {
      setContext(context);
      setQuery('');
    },
    suggestions: suggestions,
    track: track
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(CommandPaletteContainer));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5798:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ getBoxCommandsStream)
/* harmony export */ });
/* harmony import */ var _redux_getStateStream__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60478);
/* harmony import */ var _redux_selectors_getBoxFromRoute__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43991);
/* harmony import */ var _redux_storeSingleton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5568);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35091);
/* harmony import */ var _boxView_timeline_openDriveFilePicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83807);
/* harmony import */ var _meetings_meetingMoleManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(78195);
/* harmony import */ var _tasks_tasksMoleManager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63374);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_boxView_timeline_openDriveFilePicker__WEBPACK_IMPORTED_MODULE_4__, _meetings_meetingMoleManager__WEBPACK_IMPORTED_MODULE_5__, _tasks_tasksMoleManager__WEBPACK_IMPORTED_MODULE_6__]);
([_boxView_timeline_openDriveFilePicker__WEBPACK_IMPORTED_MODULE_4__, _meetings_meetingMoleManager__WEBPACK_IMPORTED_MODULE_5__, _tasks_tasksMoleManager__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







function getBoxCommandsStream() {
  return (0,_redux_getStateStream__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(_redux_selectors_getBoxFromRoute__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, (a, b) => a?.id === b?.id).map(box => box ? getBoxCommands(box) : []);
}

// TODO: only show command if permissions allow it (i.e. use AccessManager.isAccessAllowed)
function getBoxCommands(box) {
  const baseCommand = {
    category: 'box',
    categoryLabel: box.name
  };
  const stages = Object.values(_redux_storeSingleton__WEBPACK_IMPORTED_MODULE_2__.store.getState().models.pipelines[box.pipelineId].stages);
  return [{
    ...baseCommand,
    action: () => {
      box.key && _tasks_tasksMoleManager__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.openToNewTaskWithBoxKey(box.key);
    },
    name: _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.getString('command_palette_box_create_task'),
    type: 'action'
  },
  /* TODO
  {
    ...baseCommand,
    action: () => {},
    name: Locale.getString('command_palette_box_create_comment'),
    type: 'action'
  },
  */
  {
    ...baseCommand,
    action: () => box.key && (0,_boxView_timeline_openDriveFilePicker__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(box.key),
    name: _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.getString('command_palette_box_add_file'),
    type: 'action'
  }, {
    ...baseCommand,
    action: () => {
      box.key && _meetings_meetingMoleManager__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.openNewCallLogMoleWithBoxKey(box.key);
    },
    name: _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.getString('command_palette_box_create_call_log'),
    type: 'action'
  }, {
    ...baseCommand,
    action: () => {
      box.key && _meetings_meetingMoleManager__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.openNewMeetingNotesMoleWithBoxKey(box.key);
    },
    name: _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.getString('command_palette_box_create_meeting_note'),
    type: 'action'
  }, ...stages.filter(stage => stage.key !== box.stageKey).map(stage => ({
    ...baseCommand,
    action: () => _redux_storeSingleton__WEBPACK_IMPORTED_MODULE_2__.store.dispatch({
      type: 'UPDATE_BOX',
      boxId: box.id,
      columnKey: 'property|stageKey',
      value: stage.key
    }),
    name: _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.getString('command_palette_box_change_stage', {
      stage: stage.name
    }),
    type: 'action'
  }))
  /* TODO: show entry per person
  {
    ...baseCommand,
    action: () => {},
    name: Locale.getString('command_palette_box_assign_to', {person: 'TODO'}),
    type: 'action'
  }
  */];
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 27173:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ getPipelineCommandsStream)
});

// EXTERNAL MODULE: ./extensions/common/js/redux/getStateStream.ts
var getStateStream = __webpack_require__(60478);
// EXTERNAL MODULE: ./extensions/common/js/core/routing/index.ts + 4 modules
var routing = __webpack_require__(58556);
;// CONCATENATED MODULE: ./extensions/common/js/redux/selectors/getPipelineKeyFromRoute.ts

function getPipelineKeyFromRoute(state) {
  const {
    routeState
  } = state;
  if (!routeState) {
    return null;
  }
  return routeState.id === routing/* StreakCustomRoute */.ld.PIPELINE ? routeState.params.key : null;
}
;// CONCATENATED MODULE: ./extensions/common/js/redux/selectors/getPipelineFromRoute.ts

function getPipelineFromRoute(state) {
  const pipelineKey = getPipelineKeyFromRoute(state);
  const pipelineId = pipelineKey && state.modelMaps.pipelineIdsByKey[pipelineKey];
  return pipelineId ? state.models.pipelines[pipelineId] : null;
}
// EXTERNAL MODULE: ./extensions/common/js/redux/saga/goToSavedView.ts
var goToSavedView = __webpack_require__(15229);
;// CONCATENATED MODULE: ./extensions/common/js/modules/commandPalette/commands/getPipelineCommandsStream.ts



function getPipelineCommandsStream() {
  return (0,getStateStream/* default */.Z)(getPipelineFromRoute, (a, b) => a?.id === b?.id).map(pipeline => pipeline ? getPipelineCommands(pipeline) : []);
}
function getPipelineCommands(pipeline) {
  const baseCommand = {
    category: 'pipeline',
    categoryLabel: pipeline.name
  };
  return Object.entries(pipeline.savedViews).filter(_ref => {
    let [_, savedView] = _ref;
    return !savedView.isDefault;
  }).map(_ref2 => {
    let [key, savedView] = _ref2;
    return {
      ...baseCommand,
      action: () => (0,goToSavedView/* default */.Z)(pipeline.key, key),
      name: savedView.name,
      type: 'action'
    };
  });
}

/***/ }),

/***/ 81218:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ getRootCommandsStream)
/* harmony export */ });
/* harmony import */ var kefir__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98137);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17013);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _getBoxCommandsStream__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5798);
/* harmony import */ var _getGlobalCommandsStream__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27574);
/* harmony import */ var _getPipelineCommandsStream__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(27173);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_getBoxCommandsStream__WEBPACK_IMPORTED_MODULE_2__, _getGlobalCommandsStream__WEBPACK_IMPORTED_MODULE_3__]);
([_getBoxCommandsStream__WEBPACK_IMPORTED_MODULE_2__, _getGlobalCommandsStream__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





function getRootCommandsStream() {
  return kefir__WEBPACK_IMPORTED_MODULE_0__.combine([(0,_getGlobalCommandsStream__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(), (0,_getBoxCommandsStream__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(), (0,_getPipelineCommandsStream__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)()], lodash__WEBPACK_IMPORTED_MODULE_1__.concat);
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 65029:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ getSuggestionsFromQuery)
/* harmony export */ });
/* harmony import */ var fuzzysort__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24248);
/* harmony import */ var fuzzysort__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fuzzysort__WEBPACK_IMPORTED_MODULE_0__);

const SUGGESTION_LIMIT = 100;
function getSuggestionsFromQuery(query, commands) {
  if (!query) {
    return getUnfilteredSuggestions(commands);
  }
  const results = fuzzysort__WEBPACK_IMPORTED_MODULE_0___default().go(query, commands, {
    key: 'name',
    limit: SUGGESTION_LIMIT
  });
  if (results.length === 0) {
    return getUnfilteredSuggestions(commands);
  }
  return results.map(result => ({
    command: result.obj,
    highlight: result.highlight()
  }));
}
function getUnfilteredSuggestions(commands) {
  return commands.map(command => ({
    command,
    highlight: null
  })).slice(0, SUGGESTION_LIMIT);
}

/***/ }),

/***/ 43991:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ getBoxFromRoute)
});

// EXTERNAL MODULE: ./extensions/common/js/core/routing/index.ts + 4 modules
var routing = __webpack_require__(58556);
;// CONCATENATED MODULE: ./extensions/common/js/redux/selectors/getBoxKeyFromRoute.ts

function getBoxKeyFromRoute(state) {
  const {
    routeState
  } = state;
  if (!routeState) {
    return null;
  }
  return routeState.id === routing/* StreakCustomRoute */.ld.BOX ? routeState.params.key : null;
}
;// CONCATENATED MODULE: ./extensions/common/js/redux/selectors/getBoxFromRoute.ts

function getBoxFromRoute(state) {
  const boxKey = getBoxKeyFromRoute(state);
  const boxId = boxKey && state.modelMaps.boxIdsByKey[boxKey];
  return boxId ? state.models.boxes[boxId] : null;
}

/***/ }),

/***/ 74991:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(44345));

var _propTypes = _interopRequireDefault(__webpack_require__(22739));

var _arrays = _interopRequireDefault(__webpack_require__(56932));

var _Autowhatever = _interopRequireDefault(__webpack_require__(56791));

var _theme = __webpack_require__(37986);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var alwaysTrue = function alwaysTrue() {
  return true;
};

var defaultShouldRenderSuggestions = function defaultShouldRenderSuggestions(value) {
  return value.trim().length > 0;
};

var defaultRenderSuggestionsContainer = function defaultRenderSuggestionsContainer(_ref) {
  var containerProps = _ref.containerProps,
      children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement("div", containerProps, children);
};

var REASON_SUGGESTIONS_REVEALED = 'suggestions-revealed';
var REASON_SUGGESTIONS_UPDATED = 'suggestions-updated';
var REASON_SUGGESTION_SELECTED = 'suggestion-selected';
var REASON_INPUT_FOCUSED = 'input-focused';
var REASON_INPUT_CHANGED = 'input-changed';
var REASON_INPUT_BLURRED = 'input-blurred';
var REASON_ESCAPE_PRESSED = 'escape-pressed';

var Autosuggest = /*#__PURE__*/function (_Component) {
  _inherits(Autosuggest, _Component);

  var _super = _createSuper(Autosuggest);

  function Autosuggest(_ref2) {
    var _this;

    var _alwaysRenderSuggestions = _ref2.alwaysRenderSuggestions;

    _classCallCheck(this, Autosuggest);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "onDocumentMouseDown", function (event) {
      _this.justClickedOnSuggestionsContainer = false;
      var node = event.detail && event.detail.target || // This is for testing only. Please show me a better way to emulate this.
      event.target;

      while (node !== null && node !== document) {
        if (node.getAttribute && node.getAttribute('data-suggestion-index') !== null) {
          // Suggestion was clicked
          return;
        }

        if (node === _this.suggestionsContainer) {
          // Something else inside suggestions container was clicked
          _this.justClickedOnSuggestionsContainer = true;
          return;
        }

        node = node.parentNode;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "storeAutowhateverRef", function (autowhatever) {
      if (autowhatever !== null) {
        _this.autowhatever = autowhatever;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onSuggestionMouseEnter", function (event, _ref3) {
      var sectionIndex = _ref3.sectionIndex,
          itemIndex = _ref3.itemIndex;

      _this.updateHighlightedSuggestion(sectionIndex, itemIndex);

      if (event.target === _this.pressedSuggestion) {
        _this.justSelectedSuggestion = true;
      }

      _this.justMouseEntered = true;
      setTimeout(function () {
        _this.justMouseEntered = false;
      });
    });

    _defineProperty(_assertThisInitialized(_this), "highlightFirstSuggestion", function () {
      _this.updateHighlightedSuggestion(_this.props.multiSection ? 0 : null, 0);
    });

    _defineProperty(_assertThisInitialized(_this), "onDocumentMouseUp", function () {
      if (_this.pressedSuggestion && !_this.justSelectedSuggestion) {
        _this.input.focus();
      }

      _this.pressedSuggestion = null;
    });

    _defineProperty(_assertThisInitialized(_this), "onSuggestionMouseDown", function (event) {
      // Checking if this.justSelectedSuggestion is already true to not duplicate touch events in chrome
      // See: https://github.com/facebook/react/issues/9809#issuecomment-413978405
      if (!_this.justSelectedSuggestion) {
        _this.justSelectedSuggestion = true;
        _this.pressedSuggestion = event.target;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onSuggestionsClearRequested", function () {
      var onSuggestionsClearRequested = _this.props.onSuggestionsClearRequested;
      onSuggestionsClearRequested && onSuggestionsClearRequested();
    });

    _defineProperty(_assertThisInitialized(_this), "onSuggestionSelected", function (event, data) {
      var _this$props = _this.props,
          alwaysRenderSuggestions = _this$props.alwaysRenderSuggestions,
          onSuggestionSelected = _this$props.onSuggestionSelected,
          onSuggestionsFetchRequested = _this$props.onSuggestionsFetchRequested;
      onSuggestionSelected && onSuggestionSelected(event, data);

      var keepSuggestionsOnSelect = _this.props.shouldKeepSuggestionsOnSelect(data.suggestion);

      if (alwaysRenderSuggestions || keepSuggestionsOnSelect) {
        onSuggestionsFetchRequested({
          value: data.suggestionValue,
          reason: REASON_SUGGESTION_SELECTED
        });
      } else {
        _this.onSuggestionsClearRequested();
      }

      _this.resetHighlightedSuggestion();
    });

    _defineProperty(_assertThisInitialized(_this), "onSuggestionClick", function (event) {
      var _this$props2 = _this.props,
          alwaysRenderSuggestions = _this$props2.alwaysRenderSuggestions,
          focusInputOnSuggestionClick = _this$props2.focusInputOnSuggestionClick;

      var _this$getSuggestionIn = _this.getSuggestionIndices(_this.findSuggestionElement(event.target)),
          sectionIndex = _this$getSuggestionIn.sectionIndex,
          suggestionIndex = _this$getSuggestionIn.suggestionIndex;

      var clickedSuggestion = _this.getSuggestion(sectionIndex, suggestionIndex);

      var clickedSuggestionValue = _this.props.getSuggestionValue(clickedSuggestion);

      _this.maybeCallOnChange(event, clickedSuggestionValue, 'click');

      _this.onSuggestionSelected(event, {
        suggestion: clickedSuggestion,
        suggestionValue: clickedSuggestionValue,
        suggestionIndex: suggestionIndex,
        sectionIndex: sectionIndex,
        method: 'click'
      });

      var keepSuggestionsOnSelect = _this.props.shouldKeepSuggestionsOnSelect(clickedSuggestion);

      if (!(alwaysRenderSuggestions || keepSuggestionsOnSelect)) {
        _this.closeSuggestions();
      }

      if (focusInputOnSuggestionClick === true) {
        _this.input.focus();
      } else {
        _this.onBlur();
      }

      setTimeout(function () {
        _this.justSelectedSuggestion = false;
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onBlur", function () {
      var _this$props3 = _this.props,
          inputProps = _this$props3.inputProps,
          shouldRenderSuggestions = _this$props3.shouldRenderSuggestions;
      var value = inputProps.value,
          onBlur = inputProps.onBlur;

      var highlightedSuggestion = _this.getHighlightedSuggestion();

      var shouldRender = shouldRenderSuggestions(value, REASON_INPUT_BLURRED);

      _this.setState({
        isFocused: false,
        highlightedSectionIndex: null,
        highlightedSuggestionIndex: null,
        highlightedSuggestion: null,
        valueBeforeUpDown: null,
        isCollapsed: !shouldRender
      });

      onBlur && onBlur(_this.blurEvent, {
        highlightedSuggestion: highlightedSuggestion
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onSuggestionMouseLeave", function (event) {
      _this.resetHighlightedSuggestion(false); // shouldResetValueBeforeUpDown


      if (_this.justSelectedSuggestion && event.target === _this.pressedSuggestion) {
        _this.justSelectedSuggestion = false;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onSuggestionTouchStart", function () {
      _this.justSelectedSuggestion = true; // todo: event.preventDefault when https://github.com/facebook/react/issues/2043
      // todo: gets released so onSuggestionMouseDown won't fire in chrome
    });

    _defineProperty(_assertThisInitialized(_this), "onSuggestionTouchMove", function () {
      _this.justSelectedSuggestion = false;
      _this.pressedSuggestion = null;

      _this.input.focus();
    });

    _defineProperty(_assertThisInitialized(_this), "itemProps", function (_ref4) {
      var sectionIndex = _ref4.sectionIndex,
          itemIndex = _ref4.itemIndex;
      return {
        'data-section-index': sectionIndex,
        'data-suggestion-index': itemIndex,
        onMouseEnter: _this.onSuggestionMouseEnter,
        onMouseLeave: _this.onSuggestionMouseLeave,
        onMouseDown: _this.onSuggestionMouseDown,
        onTouchStart: _this.onSuggestionTouchStart,
        onTouchMove: _this.onSuggestionTouchMove,
        onClick: _this.onSuggestionClick
      };
    });

    _defineProperty(_assertThisInitialized(_this), "renderSuggestionsContainer", function (_ref5) {
      var containerProps = _ref5.containerProps,
          children = _ref5.children;
      var renderSuggestionsContainer = _this.props.renderSuggestionsContainer;
      return renderSuggestionsContainer({
        containerProps: containerProps,
        children: children,
        query: _this.getQuery()
      });
    });

    _this.state = {
      isFocused: false,
      isCollapsed: !_alwaysRenderSuggestions,
      highlightedSectionIndex: null,
      highlightedSuggestionIndex: null,
      highlightedSuggestion: null,
      valueBeforeUpDown: null
    };
    _this.justPressedUpDown = false;
    _this.justMouseEntered = false;
    _this.pressedSuggestion = null;
    return _this;
  }

  _createClass(Autosuggest, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('mousedown', this.onDocumentMouseDown);
      document.addEventListener('mouseup', this.onDocumentMouseUp);
      this.input = this.autowhatever.input;
      this.suggestionsContainer = this.autowhatever.itemsContainer;
    } // eslint-disable-next-line camelcase, react/sort-comp

  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      // When highlightFirstSuggestion becomes deactivated, if the first suggestion was
      // set, we should reset the suggestion back to the unselected default state.
      var shouldResetHighlighting = this.state.highlightedSuggestionIndex === 0 && this.props.highlightFirstSuggestion && !nextProps.highlightFirstSuggestion;

      if ((0, _arrays["default"])(nextProps.suggestions, this.props.suggestions)) {
        if (nextProps.highlightFirstSuggestion && nextProps.suggestions.length > 0 && this.justPressedUpDown === false && this.justMouseEntered === false) {
          this.highlightFirstSuggestion();
        } else if (shouldResetHighlighting) {
          this.resetHighlightedSuggestion();
        }
      } else {
        if (this.willRenderSuggestions(nextProps, REASON_SUGGESTIONS_UPDATED)) {
          if (this.state.isCollapsed && !this.justSelectedSuggestion) {
            this.revealSuggestions();
          }

          if (shouldResetHighlighting) {
            this.resetHighlightedSuggestion();
          }
        } else {
          this.resetHighlightedSuggestion();
        }
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this$props4 = this.props,
          suggestions = _this$props4.suggestions,
          onSuggestionHighlighted = _this$props4.onSuggestionHighlighted,
          highlightFirstSuggestion = _this$props4.highlightFirstSuggestion;

      if (!(0, _arrays["default"])(suggestions, prevProps.suggestions) && suggestions.length > 0 && highlightFirstSuggestion) {
        this.highlightFirstSuggestion();
        return;
      }

      if (onSuggestionHighlighted) {
        var highlightedSuggestion = this.getHighlightedSuggestion();
        var prevHighlightedSuggestion = prevState.highlightedSuggestion;

        if (highlightedSuggestion != prevHighlightedSuggestion) {
          onSuggestionHighlighted({
            suggestion: highlightedSuggestion
          });
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('mousedown', this.onDocumentMouseDown);
      document.removeEventListener('mouseup', this.onDocumentMouseUp);
    }
  }, {
    key: "updateHighlightedSuggestion",
    value: function updateHighlightedSuggestion(sectionIndex, suggestionIndex, prevValue) {
      var _this2 = this;

      this.setState(function (state) {
        var valueBeforeUpDown = state.valueBeforeUpDown;

        if (suggestionIndex === null) {
          valueBeforeUpDown = null;
        } else if (valueBeforeUpDown === null && typeof prevValue !== 'undefined') {
          valueBeforeUpDown = prevValue;
        }

        return {
          highlightedSectionIndex: sectionIndex,
          highlightedSuggestionIndex: suggestionIndex,
          highlightedSuggestion: suggestionIndex === null ? null : _this2.getSuggestion(sectionIndex, suggestionIndex),
          valueBeforeUpDown: valueBeforeUpDown
        };
      });
    }
  }, {
    key: "resetHighlightedSuggestion",
    value: function resetHighlightedSuggestion() {
      var shouldResetValueBeforeUpDown = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      this.setState(function (state) {
        var valueBeforeUpDown = state.valueBeforeUpDown;
        return {
          highlightedSectionIndex: null,
          highlightedSuggestionIndex: null,
          highlightedSuggestion: null,
          valueBeforeUpDown: shouldResetValueBeforeUpDown ? null : valueBeforeUpDown
        };
      });
    }
  }, {
    key: "revealSuggestions",
    value: function revealSuggestions() {
      this.setState({
        isCollapsed: false
      });
    }
  }, {
    key: "closeSuggestions",
    value: function closeSuggestions() {
      this.setState({
        highlightedSectionIndex: null,
        highlightedSuggestionIndex: null,
        highlightedSuggestion: null,
        valueBeforeUpDown: null,
        isCollapsed: true
      });
    }
  }, {
    key: "getSuggestion",
    value: function getSuggestion(sectionIndex, suggestionIndex) {
      var _this$props5 = this.props,
          suggestions = _this$props5.suggestions,
          multiSection = _this$props5.multiSection,
          getSectionSuggestions = _this$props5.getSectionSuggestions;

      if (multiSection) {
        return getSectionSuggestions(suggestions[sectionIndex])[suggestionIndex];
      }

      return suggestions[suggestionIndex];
    }
  }, {
    key: "getHighlightedSuggestion",
    value: function getHighlightedSuggestion() {
      var _this$state = this.state,
          highlightedSectionIndex = _this$state.highlightedSectionIndex,
          highlightedSuggestionIndex = _this$state.highlightedSuggestionIndex;

      if (highlightedSuggestionIndex === null) {
        return null;
      }

      return this.getSuggestion(highlightedSectionIndex, highlightedSuggestionIndex);
    }
  }, {
    key: "getSuggestionValueByIndex",
    value: function getSuggestionValueByIndex(sectionIndex, suggestionIndex) {
      var getSuggestionValue = this.props.getSuggestionValue;
      return getSuggestionValue(this.getSuggestion(sectionIndex, suggestionIndex));
    }
  }, {
    key: "getSuggestionIndices",
    value: function getSuggestionIndices(suggestionElement) {
      var sectionIndex = suggestionElement.getAttribute('data-section-index');
      var suggestionIndex = suggestionElement.getAttribute('data-suggestion-index');
      return {
        sectionIndex: typeof sectionIndex === 'string' ? parseInt(sectionIndex, 10) : null,
        suggestionIndex: parseInt(suggestionIndex, 10)
      };
    }
  }, {
    key: "findSuggestionElement",
    value: function findSuggestionElement(startNode) {
      var node = startNode;

      do {
        if (node.getAttribute && node.getAttribute('data-suggestion-index') !== null) {
          return node;
        }

        node = node.parentNode;
      } while (node !== null);

      console.error('Clicked element:', startNode); // eslint-disable-line no-console

      throw new Error("Couldn't find suggestion element");
    }
  }, {
    key: "maybeCallOnChange",
    value: function maybeCallOnChange(event, newValue, method) {
      var _this$props$inputProp = this.props.inputProps,
          value = _this$props$inputProp.value,
          onChange = _this$props$inputProp.onChange;

      if (newValue !== value) {
        onChange(event, {
          newValue: newValue,
          method: method
        });
      }
    }
  }, {
    key: "willRenderSuggestions",
    value: function willRenderSuggestions(props, reason) {
      var suggestions = props.suggestions,
          inputProps = props.inputProps,
          shouldRenderSuggestions = props.shouldRenderSuggestions;
      var value = inputProps.value;
      return suggestions.length > 0 && shouldRenderSuggestions(value, reason);
    }
  }, {
    key: "getQuery",
    value: function getQuery() {
      var inputProps = this.props.inputProps;
      var value = inputProps.value;
      var valueBeforeUpDown = this.state.valueBeforeUpDown;
      return (valueBeforeUpDown === null ? value : valueBeforeUpDown).trim();
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props6 = this.props,
          suggestions = _this$props6.suggestions,
          renderInputComponent = _this$props6.renderInputComponent,
          onSuggestionsFetchRequested = _this$props6.onSuggestionsFetchRequested,
          renderSuggestion = _this$props6.renderSuggestion,
          inputProps = _this$props6.inputProps,
          multiSection = _this$props6.multiSection,
          renderSectionTitle = _this$props6.renderSectionTitle,
          id = _this$props6.id,
          getSectionSuggestions = _this$props6.getSectionSuggestions,
          theme = _this$props6.theme,
          getSuggestionValue = _this$props6.getSuggestionValue,
          alwaysRenderSuggestions = _this$props6.alwaysRenderSuggestions,
          highlightFirstSuggestion = _this$props6.highlightFirstSuggestion,
          containerProps = _this$props6.containerProps;
      var _this$state2 = this.state,
          isFocused = _this$state2.isFocused,
          isCollapsed = _this$state2.isCollapsed,
          highlightedSectionIndex = _this$state2.highlightedSectionIndex,
          highlightedSuggestionIndex = _this$state2.highlightedSuggestionIndex,
          valueBeforeUpDown = _this$state2.valueBeforeUpDown;
      var shouldRenderSuggestions = alwaysRenderSuggestions ? alwaysTrue : this.props.shouldRenderSuggestions;
      var value = inputProps.value,
          _onFocus = inputProps.onFocus,
          _onKeyDown = inputProps.onKeyDown;
      var willRenderSuggestions = this.willRenderSuggestions(this.props, 'render');
      var isOpen = alwaysRenderSuggestions || isFocused && !isCollapsed && willRenderSuggestions;
      var items = isOpen ? suggestions : [];

      var autowhateverInputProps = _objectSpread({}, inputProps, {
        onFocus: function onFocus(event) {
          if (!_this3.justSelectedSuggestion && !_this3.justClickedOnSuggestionsContainer) {
            var shouldRender = shouldRenderSuggestions(value, REASON_INPUT_FOCUSED);

            _this3.setState({
              isFocused: true,
              isCollapsed: !shouldRender
            });

            _onFocus && _onFocus(event);

            if (shouldRender) {
              onSuggestionsFetchRequested({
                value: value,
                reason: REASON_INPUT_FOCUSED
              });
            }
          }
        },
        onBlur: function onBlur(event) {
          if (_this3.justClickedOnSuggestionsContainer) {
            _this3.input.focus();

            return;
          }

          _this3.blurEvent = event;

          if (!_this3.justSelectedSuggestion) {
            _this3.onBlur();

            _this3.onSuggestionsClearRequested();
          }
        },
        onChange: function onChange(event) {
          var value = event.target.value;
          var shouldRender = shouldRenderSuggestions(value, REASON_INPUT_CHANGED);

          _this3.maybeCallOnChange(event, value, 'type');

          if (_this3.suggestionsContainer) {
            _this3.suggestionsContainer.scrollTop = 0;
          }

          _this3.setState(_objectSpread({}, highlightFirstSuggestion ? {} : {
            highlightedSectionIndex: null,
            highlightedSuggestionIndex: null,
            highlightedSuggestion: null
          }, {
            valueBeforeUpDown: null,
            isCollapsed: !shouldRender
          }));

          if (shouldRender) {
            onSuggestionsFetchRequested({
              value: value,
              reason: REASON_INPUT_CHANGED
            });
          } else {
            _this3.onSuggestionsClearRequested();
          }
        },
        onKeyDown: function onKeyDown(event, data) {
          var keyCode = event.keyCode;

          switch (keyCode) {
            case 40: // ArrowDown

            case 38:
              // ArrowUp
              if (isCollapsed) {
                if (shouldRenderSuggestions(value, REASON_SUGGESTIONS_REVEALED)) {
                  onSuggestionsFetchRequested({
                    value: value,
                    reason: REASON_SUGGESTIONS_REVEALED
                  });

                  _this3.revealSuggestions();

                  event.preventDefault(); // We act on the key.
                }
              } else if (suggestions.length > 0) {
                var newHighlightedSectionIndex = data.newHighlightedSectionIndex,
                    newHighlightedItemIndex = data.newHighlightedItemIndex;
                var newValue;

                if (newHighlightedItemIndex === null) {
                  // valueBeforeUpDown can be null if, for example, user
                  // hovers on the first suggestion and then pressed Up.
                  // If that happens, use the original input value.
                  newValue = valueBeforeUpDown === null ? value : valueBeforeUpDown;
                } else {
                  newValue = _this3.getSuggestionValueByIndex(newHighlightedSectionIndex, newHighlightedItemIndex);
                }

                _this3.updateHighlightedSuggestion(newHighlightedSectionIndex, newHighlightedItemIndex, value);

                _this3.maybeCallOnChange(event, newValue, keyCode === 40 ? 'down' : 'up');

                event.preventDefault(); // We act on the key.
              }

              _this3.justPressedUpDown = true;
              setTimeout(function () {
                _this3.justPressedUpDown = false;
              });
              break;
            // Enter

            case 13:
              {
                // See #388
                if (event.keyCode === 229) {
                  break;
                }

                var highlightedSuggestion = _this3.getHighlightedSuggestion();

                if (isOpen && !alwaysRenderSuggestions) {
                  _this3.closeSuggestions();
                }

                if (highlightedSuggestion != null) {
                  event.preventDefault();

                  var _newValue = getSuggestionValue(highlightedSuggestion);

                  _this3.maybeCallOnChange(event, _newValue, 'enter');

                  _this3.onSuggestionSelected(event, {
                    suggestion: highlightedSuggestion,
                    suggestionValue: _newValue,
                    suggestionIndex: highlightedSuggestionIndex,
                    sectionIndex: highlightedSectionIndex,
                    method: 'enter'
                  });

                  _this3.justSelectedSuggestion = true;
                  setTimeout(function () {
                    _this3.justSelectedSuggestion = false;
                  });
                }

                break;
              }
            // Escape

            case 27:
              {
                if (isOpen) {
                  // If input.type === 'search', the browser clears the input
                  // when Escape is pressed. We want to disable this default
                  // behaviour so that, when suggestions are shown, we just hide
                  // them, without clearing the input.
                  event.preventDefault();
                }

                var willCloseSuggestions = isOpen && !alwaysRenderSuggestions;

                if (valueBeforeUpDown === null) {
                  // Didn't interact with Up/Down
                  if (!willCloseSuggestions) {
                    var _newValue2 = '';

                    _this3.maybeCallOnChange(event, _newValue2, 'escape');

                    if (shouldRenderSuggestions(_newValue2, REASON_ESCAPE_PRESSED)) {
                      onSuggestionsFetchRequested({
                        value: _newValue2,
                        reason: REASON_ESCAPE_PRESSED
                      });
                    } else {
                      _this3.onSuggestionsClearRequested();
                    }
                  }
                } else {
                  // Interacted with Up/Down
                  _this3.maybeCallOnChange(event, valueBeforeUpDown, 'escape');
                }

                if (willCloseSuggestions) {
                  _this3.onSuggestionsClearRequested();

                  _this3.closeSuggestions();
                } else {
                  _this3.resetHighlightedSuggestion();
                }

                break;
              }
          }

          _onKeyDown && _onKeyDown(event);
        }
      });

      var renderSuggestionData = {
        query: this.getQuery()
      };
      return /*#__PURE__*/_react["default"].createElement(_Autowhatever["default"], {
        multiSection: multiSection,
        items: items,
        renderInputComponent: renderInputComponent,
        renderItemsContainer: this.renderSuggestionsContainer,
        renderItem: renderSuggestion,
        renderItemData: renderSuggestionData,
        renderSectionTitle: renderSectionTitle,
        getSectionItems: getSectionSuggestions,
        highlightedSectionIndex: highlightedSectionIndex,
        highlightedItemIndex: highlightedSuggestionIndex,
        containerProps: containerProps,
        inputProps: autowhateverInputProps,
        itemProps: this.itemProps,
        theme: (0, _theme.mapToAutowhateverTheme)(theme),
        id: id,
        ref: this.storeAutowhateverRef
      });
    }
  }]);

  return Autosuggest;
}(_react.Component);

exports["default"] = Autosuggest;

_defineProperty(Autosuggest, "propTypes", {
  suggestions: _propTypes["default"].array.isRequired,
  onSuggestionsFetchRequested: function onSuggestionsFetchRequested(props, propName) {
    var onSuggestionsFetchRequested = props[propName];

    if (typeof onSuggestionsFetchRequested !== 'function') {
      throw new Error("'onSuggestionsFetchRequested' must be implemented. See: https://github.com/moroshko/react-autosuggest#onSuggestionsFetchRequestedProp");
    }
  },
  onSuggestionsClearRequested: function onSuggestionsClearRequested(props, propName) {
    var onSuggestionsClearRequested = props[propName];

    if (props.alwaysRenderSuggestions === false && typeof onSuggestionsClearRequested !== 'function') {
      throw new Error("'onSuggestionsClearRequested' must be implemented. See: https://github.com/moroshko/react-autosuggest#onSuggestionsClearRequestedProp");
    }
  },
  shouldKeepSuggestionsOnSelect: _propTypes["default"].func,
  onSuggestionSelected: _propTypes["default"].func,
  onSuggestionHighlighted: _propTypes["default"].func,
  renderInputComponent: _propTypes["default"].func,
  renderSuggestionsContainer: _propTypes["default"].func,
  getSuggestionValue: _propTypes["default"].func.isRequired,
  renderSuggestion: _propTypes["default"].func.isRequired,
  inputProps: function inputProps(props, propName) {
    var inputProps = props[propName];

    if (!inputProps) {
      throw new Error("'inputProps' must be passed.");
    }

    if (!Object.prototype.hasOwnProperty.call(inputProps, 'value')) {
      throw new Error("'inputProps' must have 'value'.");
    }

    if (!Object.prototype.hasOwnProperty.call(inputProps, 'onChange')) {
      throw new Error("'inputProps' must have 'onChange'.");
    }
  },
  shouldRenderSuggestions: _propTypes["default"].func,
  alwaysRenderSuggestions: _propTypes["default"].bool,
  multiSection: _propTypes["default"].bool,
  renderSectionTitle: function renderSectionTitle(props, propName) {
    var renderSectionTitle = props[propName];

    if (props.multiSection === true && typeof renderSectionTitle !== 'function') {
      throw new Error("'renderSectionTitle' must be implemented. See: https://github.com/moroshko/react-autosuggest#renderSectionTitleProp");
    }
  },
  getSectionSuggestions: function getSectionSuggestions(props, propName) {
    var getSectionSuggestions = props[propName];

    if (props.multiSection === true && typeof getSectionSuggestions !== 'function') {
      throw new Error("'getSectionSuggestions' must be implemented. See: https://github.com/moroshko/react-autosuggest#getSectionSuggestionsProp");
    }
  },
  focusInputOnSuggestionClick: _propTypes["default"].bool,
  highlightFirstSuggestion: _propTypes["default"].bool,
  theme: _propTypes["default"].object,
  id: _propTypes["default"].string,
  containerProps: _propTypes["default"].object // Arbitrary container props

});

_defineProperty(Autosuggest, "defaultProps", {
  renderSuggestionsContainer: defaultRenderSuggestionsContainer,
  shouldRenderSuggestions: defaultShouldRenderSuggestions,
  alwaysRenderSuggestions: false,
  multiSection: false,
  shouldKeepSuggestionsOnSelect: function shouldKeepSuggestionsOnSelect() {
    return false;
  },
  focusInputOnSuggestionClick: true,
  highlightFirstSuggestion: false,
  theme: _theme.defaultTheme,
  id: '1',
  containerProps: {}
});

/***/ }),

/***/ 56791:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(44345));

var _propTypes = _interopRequireDefault(__webpack_require__(22739));

var _sectionIterator = _interopRequireDefault(__webpack_require__(48157));

var _reactThemeable = _interopRequireDefault(__webpack_require__(69424));

var _SectionTitle = _interopRequireDefault(__webpack_require__(45921));

var _ItemList = _interopRequireDefault(__webpack_require__(72513));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var emptyObject = {};

var defaultRenderInputComponent = function defaultRenderInputComponent(props) {
  return /*#__PURE__*/_react["default"].createElement("input", props);
};

var defaultRenderItemsContainer = function defaultRenderItemsContainer(_ref) {
  var containerProps = _ref.containerProps,
      children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement("div", containerProps, children);
};

var defaultTheme = {
  container: 'react-autowhatever__container',
  containerOpen: 'react-autowhatever__container--open',
  input: 'react-autowhatever__input',
  inputOpen: 'react-autowhatever__input--open',
  inputFocused: 'react-autowhatever__input--focused',
  itemsContainer: 'react-autowhatever__items-container',
  itemsContainerOpen: 'react-autowhatever__items-container--open',
  itemsList: 'react-autowhatever__items-list',
  item: 'react-autowhatever__item',
  itemFirst: 'react-autowhatever__item--first',
  itemHighlighted: 'react-autowhatever__item--highlighted',
  sectionContainer: 'react-autowhatever__section-container',
  sectionContainerFirst: 'react-autowhatever__section-container--first',
  sectionTitle: 'react-autowhatever__section-title'
};

var Autowhatever = /*#__PURE__*/function (_Component) {
  _inherits(Autowhatever, _Component);

  var _super = _createSuper(Autowhatever);

  function Autowhatever(props) {
    var _this;

    _classCallCheck(this, Autowhatever);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "storeInputReference", function (input) {
      if (input !== null) {
        _this.input = input;
      }

      var userRef = _this.props.inputProps.ref;

      if (userRef) {
        if (typeof userRef === 'function') {
          userRef(input);
        } else if (_typeof(userRef) === 'object' && Object.prototype.hasOwnProperty.call(userRef, 'current')) {
          userRef.current = input;
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "storeItemsContainerReference", function (itemsContainer) {
      if (itemsContainer !== null) {
        _this.itemsContainer = itemsContainer;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onHighlightedItemChange", function (highlightedItem) {
      _this.highlightedItem = highlightedItem;
    });

    _defineProperty(_assertThisInitialized(_this), "getItemId", function (sectionIndex, itemIndex) {
      if (itemIndex === null) {
        return null;
      }

      var id = _this.props.id;
      var section = sectionIndex === null ? '' : "section-".concat(sectionIndex);
      return "react-autowhatever-".concat(id, "-").concat(section, "-item-").concat(itemIndex);
    });

    _defineProperty(_assertThisInitialized(_this), "onFocus", function (event) {
      var inputProps = _this.props.inputProps;

      _this.setState({
        isInputFocused: true
      });

      inputProps.onFocus && inputProps.onFocus(event);
    });

    _defineProperty(_assertThisInitialized(_this), "onBlur", function (event) {
      var inputProps = _this.props.inputProps;

      _this.setState({
        isInputFocused: false
      });

      inputProps.onBlur && inputProps.onBlur(event);
    });

    _defineProperty(_assertThisInitialized(_this), "onKeyDown", function (event) {
      var _this$props = _this.props,
          inputProps = _this$props.inputProps,
          highlightedSectionIndex = _this$props.highlightedSectionIndex,
          highlightedItemIndex = _this$props.highlightedItemIndex;
      var keyCode = event.keyCode;

      switch (keyCode) {
        case 40: // ArrowDown

        case 38:
          {
            // ArrowUp
            var nextPrev = keyCode === 40 ? 'next' : 'prev';

            var _this$sectionIterator = _this.sectionIterator[nextPrev]([highlightedSectionIndex, highlightedItemIndex]),
                _this$sectionIterator2 = _slicedToArray(_this$sectionIterator, 2),
                newHighlightedSectionIndex = _this$sectionIterator2[0],
                newHighlightedItemIndex = _this$sectionIterator2[1];

            inputProps.onKeyDown(event, {
              newHighlightedSectionIndex: newHighlightedSectionIndex,
              newHighlightedItemIndex: newHighlightedItemIndex
            });
            break;
          }

        default:
          inputProps.onKeyDown(event, {
            highlightedSectionIndex: highlightedSectionIndex,
            highlightedItemIndex: highlightedItemIndex
          });
      }
    });

    _this.highlightedItem = null;
    _this.state = {
      isInputFocused: false
    };

    _this.setSectionsItems(props);

    _this.setSectionIterator(props);

    _this.setTheme(props);

    return _this;
  }

  _createClass(Autowhatever, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.ensureHighlightedItemIsVisible();
    } // eslint-disable-next-line camelcase, react/sort-comp

  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      if (nextProps.items !== this.props.items) {
        this.setSectionsItems(nextProps);
      }

      if (nextProps.items !== this.props.items || nextProps.multiSection !== this.props.multiSection) {
        this.setSectionIterator(nextProps);
      }

      if (nextProps.theme !== this.props.theme) {
        this.setTheme(nextProps);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.ensureHighlightedItemIsVisible();
    }
  }, {
    key: "setSectionsItems",
    value: function setSectionsItems(props) {
      if (props.multiSection) {
        this.sectionsItems = props.items.map(function (section) {
          return props.getSectionItems(section);
        });
        this.sectionsLengths = this.sectionsItems.map(function (items) {
          return items.length;
        });
        this.allSectionsAreEmpty = this.sectionsLengths.every(function (itemsCount) {
          return itemsCount === 0;
        });
      }
    }
  }, {
    key: "setSectionIterator",
    value: function setSectionIterator(props) {
      this.sectionIterator = (0, _sectionIterator["default"])({
        multiSection: props.multiSection,
        data: props.multiSection ? this.sectionsLengths : props.items.length
      });
    }
  }, {
    key: "setTheme",
    value: function setTheme(props) {
      this.theme = (0, _reactThemeable["default"])(props.theme);
    }
  }, {
    key: "renderSections",
    value: function renderSections() {
      var _this2 = this;

      if (this.allSectionsAreEmpty) {
        return null;
      }

      var theme = this.theme;
      var _this$props2 = this.props,
          id = _this$props2.id,
          items = _this$props2.items,
          renderItem = _this$props2.renderItem,
          renderItemData = _this$props2.renderItemData,
          renderSectionTitle = _this$props2.renderSectionTitle,
          highlightedSectionIndex = _this$props2.highlightedSectionIndex,
          highlightedItemIndex = _this$props2.highlightedItemIndex,
          itemProps = _this$props2.itemProps;
      return items.map(function (section, sectionIndex) {
        var keyPrefix = "react-autowhatever-".concat(id, "-");
        var sectionKeyPrefix = "".concat(keyPrefix, "section-").concat(sectionIndex, "-");
        var isFirstSection = sectionIndex === 0; // `key` is provided by theme()

        /* eslint-disable react/jsx-key */

        return /*#__PURE__*/_react["default"].createElement("div", theme("".concat(sectionKeyPrefix, "container"), 'sectionContainer', isFirstSection && 'sectionContainerFirst'), /*#__PURE__*/_react["default"].createElement(_SectionTitle["default"], {
          section: section,
          renderSectionTitle: renderSectionTitle,
          theme: theme,
          sectionKeyPrefix: sectionKeyPrefix
        }), /*#__PURE__*/_react["default"].createElement(_ItemList["default"], {
          items: _this2.sectionsItems[sectionIndex],
          itemProps: itemProps,
          renderItem: renderItem,
          renderItemData: renderItemData,
          sectionIndex: sectionIndex,
          highlightedItemIndex: highlightedSectionIndex === sectionIndex ? highlightedItemIndex : null,
          onHighlightedItemChange: _this2.onHighlightedItemChange,
          getItemId: _this2.getItemId,
          theme: theme,
          keyPrefix: keyPrefix,
          ref: _this2.storeItemsListReference
        }));
        /* eslint-enable react/jsx-key */
      });
    }
  }, {
    key: "renderItems",
    value: function renderItems() {
      var items = this.props.items;

      if (items.length === 0) {
        return null;
      }

      var theme = this.theme;
      var _this$props3 = this.props,
          id = _this$props3.id,
          renderItem = _this$props3.renderItem,
          renderItemData = _this$props3.renderItemData,
          highlightedSectionIndex = _this$props3.highlightedSectionIndex,
          highlightedItemIndex = _this$props3.highlightedItemIndex,
          itemProps = _this$props3.itemProps;
      return /*#__PURE__*/_react["default"].createElement(_ItemList["default"], {
        items: items,
        itemProps: itemProps,
        renderItem: renderItem,
        renderItemData: renderItemData,
        highlightedItemIndex: highlightedSectionIndex === null ? highlightedItemIndex : null,
        onHighlightedItemChange: this.onHighlightedItemChange,
        getItemId: this.getItemId,
        theme: theme,
        keyPrefix: "react-autowhatever-".concat(id, "-")
      });
    }
  }, {
    key: "ensureHighlightedItemIsVisible",
    value: function ensureHighlightedItemIsVisible() {
      var highlightedItem = this.highlightedItem;

      if (!highlightedItem) {
        return;
      }

      var itemsContainer = this.itemsContainer;
      var itemOffsetRelativeToContainer = highlightedItem.offsetParent === itemsContainer ? highlightedItem.offsetTop : highlightedItem.offsetTop - itemsContainer.offsetTop;
      var scrollTop = itemsContainer.scrollTop; // Top of the visible area

      if (itemOffsetRelativeToContainer < scrollTop) {
        // Item is off the top of the visible area
        scrollTop = itemOffsetRelativeToContainer;
      } else if (itemOffsetRelativeToContainer + highlightedItem.offsetHeight > scrollTop + itemsContainer.offsetHeight) {
        // Item is off the bottom of the visible area
        scrollTop = itemOffsetRelativeToContainer + highlightedItem.offsetHeight - itemsContainer.offsetHeight;
      }

      if (scrollTop !== itemsContainer.scrollTop) {
        itemsContainer.scrollTop = scrollTop;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var theme = this.theme;
      var _this$props4 = this.props,
          id = _this$props4.id,
          multiSection = _this$props4.multiSection,
          renderInputComponent = _this$props4.renderInputComponent,
          renderItemsContainer = _this$props4.renderItemsContainer,
          highlightedSectionIndex = _this$props4.highlightedSectionIndex,
          highlightedItemIndex = _this$props4.highlightedItemIndex;
      var isInputFocused = this.state.isInputFocused;
      var renderedItems = multiSection ? this.renderSections() : this.renderItems();
      var isOpen = renderedItems !== null;
      var ariaActivedescendant = this.getItemId(highlightedSectionIndex, highlightedItemIndex);
      var itemsContainerId = "react-autowhatever-".concat(id);

      var containerProps = _objectSpread({
        role: 'combobox',
        'aria-haspopup': 'listbox',
        'aria-owns': itemsContainerId,
        'aria-expanded': isOpen
      }, theme("react-autowhatever-".concat(id, "-container"), 'container', isOpen && 'containerOpen'), {}, this.props.containerProps);

      var inputComponent = renderInputComponent(_objectSpread({
        type: 'text',
        value: '',
        autoComplete: 'off',
        'aria-autocomplete': 'list',
        'aria-controls': itemsContainerId,
        'aria-activedescendant': ariaActivedescendant
      }, theme("react-autowhatever-".concat(id, "-input"), 'input', isOpen && 'inputOpen', isInputFocused && 'inputFocused'), {}, this.props.inputProps, {
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        onKeyDown: this.props.inputProps.onKeyDown && this.onKeyDown,
        ref: this.storeInputReference
      }));
      var itemsContainer = renderItemsContainer({
        containerProps: _objectSpread({
          id: itemsContainerId,
          role: 'listbox'
        }, theme("react-autowhatever-".concat(id, "-items-container"), 'itemsContainer', isOpen && 'itemsContainerOpen'), {
          ref: this.storeItemsContainerReference
        }),
        children: renderedItems
      });
      return /*#__PURE__*/_react["default"].createElement("div", containerProps, inputComponent, itemsContainer);
    }
  }]);

  return Autowhatever;
}(_react.Component);

exports["default"] = Autowhatever;

_defineProperty(Autowhatever, "propTypes", {
  id: _propTypes["default"].string,
  // Used in aria-* attributes. If multiple Autowhatever's are rendered on a page, they must have unique ids.
  multiSection: _propTypes["default"].bool,
  // Indicates whether a multi section layout should be rendered.
  renderInputComponent: _propTypes["default"].func,
  // When specified, it is used to render the input element.
  renderItemsContainer: _propTypes["default"].func,
  // Renders the items container.
  items: _propTypes["default"].array.isRequired,
  // Array of items or sections to render.
  renderItem: _propTypes["default"].func,
  // This function renders a single item.
  renderItemData: _propTypes["default"].object,
  // Arbitrary data that will be passed to renderItem()
  renderSectionTitle: _propTypes["default"].func,
  // This function gets a section and renders its title.
  getSectionItems: _propTypes["default"].func,
  // This function gets a section and returns its items, which will be passed into `renderItem` for rendering.
  containerProps: _propTypes["default"].object,
  // Arbitrary container props
  inputProps: _propTypes["default"].object,
  // Arbitrary input props
  itemProps: _propTypes["default"].oneOfType([// Arbitrary item props
  _propTypes["default"].object, _propTypes["default"].func]),
  highlightedSectionIndex: _propTypes["default"].number,
  // Section index of the highlighted item
  highlightedItemIndex: _propTypes["default"].number,
  // Highlighted item index (within a section)
  theme: _propTypes["default"].oneOfType([// Styles. See: https://github.com/markdalgleish/react-themeable
  _propTypes["default"].object, _propTypes["default"].array])
});

_defineProperty(Autowhatever, "defaultProps", {
  id: '1',
  multiSection: false,
  renderInputComponent: defaultRenderInputComponent,
  renderItemsContainer: defaultRenderItemsContainer,
  renderItem: function renderItem() {
    throw new Error('`renderItem` must be provided');
  },
  renderItemData: emptyObject,
  renderSectionTitle: function renderSectionTitle() {
    throw new Error('`renderSectionTitle` must be provided');
  },
  getSectionItems: function getSectionItems() {
    throw new Error('`getSectionItems` must be provided');
  },
  containerProps: emptyObject,
  inputProps: emptyObject,
  itemProps: emptyObject,
  highlightedSectionIndex: null,
  highlightedItemIndex: null,
  theme: defaultTheme
});

/***/ }),

/***/ 40486:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(44345));

var _propTypes = _interopRequireDefault(__webpack_require__(22739));

var _compareObjects = _interopRequireDefault(__webpack_require__(4586));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Item = /*#__PURE__*/function (_Component) {
  _inherits(Item, _Component);

  var _super = _createSuper(Item);

  function Item() {
    var _this;

    _classCallCheck(this, Item);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "storeItemReference", function (item) {
      if (item !== null) {
        _this.item = item;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseEnter", function (event) {
      var _this$props = _this.props,
          sectionIndex = _this$props.sectionIndex,
          itemIndex = _this$props.itemIndex;

      _this.props.onMouseEnter(event, {
        sectionIndex: sectionIndex,
        itemIndex: itemIndex
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseLeave", function (event) {
      var _this$props2 = _this.props,
          sectionIndex = _this$props2.sectionIndex,
          itemIndex = _this$props2.itemIndex;

      _this.props.onMouseLeave(event, {
        sectionIndex: sectionIndex,
        itemIndex: itemIndex
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseDown", function (event) {
      var _this$props3 = _this.props,
          sectionIndex = _this$props3.sectionIndex,
          itemIndex = _this$props3.itemIndex;

      _this.props.onMouseDown(event, {
        sectionIndex: sectionIndex,
        itemIndex: itemIndex
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onClick", function (event) {
      var _this$props4 = _this.props,
          sectionIndex = _this$props4.sectionIndex,
          itemIndex = _this$props4.itemIndex;

      _this.props.onClick(event, {
        sectionIndex: sectionIndex,
        itemIndex: itemIndex
      });
    });

    return _this;
  }

  _createClass(Item, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      return (0, _compareObjects["default"])(nextProps, this.props, ['renderItemData']);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props5 = this.props,
          isHighlighted = _this$props5.isHighlighted,
          item = _this$props5.item,
          renderItem = _this$props5.renderItem,
          renderItemData = _this$props5.renderItemData,
          restProps = _objectWithoutProperties(_this$props5, ["isHighlighted", "item", "renderItem", "renderItemData"]);

      delete restProps.sectionIndex;
      delete restProps.itemIndex;

      if (typeof restProps.onMouseEnter === 'function') {
        restProps.onMouseEnter = this.onMouseEnter;
      }

      if (typeof restProps.onMouseLeave === 'function') {
        restProps.onMouseLeave = this.onMouseLeave;
      }

      if (typeof restProps.onMouseDown === 'function') {
        restProps.onMouseDown = this.onMouseDown;
      }

      if (typeof restProps.onClick === 'function') {
        restProps.onClick = this.onClick;
      }

      return /*#__PURE__*/_react["default"].createElement("li", _extends({
        role: "option"
      }, restProps, {
        ref: this.storeItemReference
      }), renderItem(item, _objectSpread({
        isHighlighted: isHighlighted
      }, renderItemData)));
    }
  }]);

  return Item;
}(_react.Component);

exports["default"] = Item;

_defineProperty(Item, "propTypes", {
  sectionIndex: _propTypes["default"].number,
  isHighlighted: _propTypes["default"].bool.isRequired,
  itemIndex: _propTypes["default"].number.isRequired,
  item: _propTypes["default"].any.isRequired,
  renderItem: _propTypes["default"].func.isRequired,
  renderItemData: _propTypes["default"].object.isRequired,
  onMouseEnter: _propTypes["default"].func,
  onMouseLeave: _propTypes["default"].func,
  onMouseDown: _propTypes["default"].func,
  onClick: _propTypes["default"].func
});

/***/ }),

/***/ 72513:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(44345));

var _propTypes = _interopRequireDefault(__webpack_require__(22739));

var _Item = _interopRequireDefault(__webpack_require__(40486));

var _compareObjects = _interopRequireDefault(__webpack_require__(4586));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ItemsList = /*#__PURE__*/function (_Component) {
  _inherits(ItemsList, _Component);

  var _super = _createSuper(ItemsList);

  function ItemsList() {
    var _this;

    _classCallCheck(this, ItemsList);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "storeHighlightedItemReference", function (highlightedItem) {
      _this.props.onHighlightedItemChange(highlightedItem === null ? null : highlightedItem.item);
    });

    return _this;
  }

  _createClass(ItemsList, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      return (0, _compareObjects["default"])(nextProps, this.props, ['itemProps']);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          items = _this$props.items,
          itemProps = _this$props.itemProps,
          renderItem = _this$props.renderItem,
          renderItemData = _this$props.renderItemData,
          sectionIndex = _this$props.sectionIndex,
          highlightedItemIndex = _this$props.highlightedItemIndex,
          getItemId = _this$props.getItemId,
          theme = _this$props.theme,
          keyPrefix = _this$props.keyPrefix;
      var sectionPrefix = sectionIndex === null ? keyPrefix : "".concat(keyPrefix, "section-").concat(sectionIndex, "-");
      var isItemPropsFunction = typeof itemProps === 'function';
      return /*#__PURE__*/_react["default"].createElement("ul", _extends({
        role: "listbox"
      }, theme("".concat(sectionPrefix, "items-list"), 'itemsList')), items.map(function (item, itemIndex) {
        var isFirst = itemIndex === 0;
        var isHighlighted = itemIndex === highlightedItemIndex;
        var itemKey = "".concat(sectionPrefix, "item-").concat(itemIndex);
        var itemPropsObj = isItemPropsFunction ? itemProps({
          sectionIndex: sectionIndex,
          itemIndex: itemIndex
        }) : itemProps;

        var allItemProps = _objectSpread({
          id: getItemId(sectionIndex, itemIndex),
          'aria-selected': isHighlighted
        }, theme(itemKey, 'item', isFirst && 'itemFirst', isHighlighted && 'itemHighlighted'), {}, itemPropsObj);

        if (isHighlighted) {
          allItemProps.ref = _this2.storeHighlightedItemReference;
        } // `key` is provided by theme()

        /* eslint-disable react/jsx-key */


        return /*#__PURE__*/_react["default"].createElement(_Item["default"], _extends({}, allItemProps, {
          sectionIndex: sectionIndex,
          isHighlighted: isHighlighted,
          itemIndex: itemIndex,
          item: item,
          renderItem: renderItem,
          renderItemData: renderItemData
        }));
        /* eslint-enable react/jsx-key */
      }));
    }
  }]);

  return ItemsList;
}(_react.Component);

exports["default"] = ItemsList;

_defineProperty(ItemsList, "propTypes", {
  items: _propTypes["default"].array.isRequired,
  itemProps: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].func]),
  renderItem: _propTypes["default"].func.isRequired,
  renderItemData: _propTypes["default"].object.isRequired,
  sectionIndex: _propTypes["default"].number,
  highlightedItemIndex: _propTypes["default"].number,
  onHighlightedItemChange: _propTypes["default"].func.isRequired,
  getItemId: _propTypes["default"].func.isRequired,
  theme: _propTypes["default"].func.isRequired,
  keyPrefix: _propTypes["default"].string.isRequired
});

_defineProperty(ItemsList, "defaultProps", {
  sectionIndex: null
});

/***/ }),

/***/ 45921:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(44345));

var _propTypes = _interopRequireDefault(__webpack_require__(22739));

var _compareObjects = _interopRequireDefault(__webpack_require__(4586));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SectionTitle = /*#__PURE__*/function (_Component) {
  _inherits(SectionTitle, _Component);

  var _super = _createSuper(SectionTitle);

  function SectionTitle() {
    _classCallCheck(this, SectionTitle);

    return _super.apply(this, arguments);
  }

  _createClass(SectionTitle, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      return (0, _compareObjects["default"])(nextProps, this.props);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          section = _this$props.section,
          renderSectionTitle = _this$props.renderSectionTitle,
          theme = _this$props.theme,
          sectionKeyPrefix = _this$props.sectionKeyPrefix;
      var sectionTitle = renderSectionTitle(section);

      if (!sectionTitle) {
        return null;
      }

      return /*#__PURE__*/_react["default"].createElement("div", theme("".concat(sectionKeyPrefix, "title"), 'sectionTitle'), sectionTitle);
    }
  }]);

  return SectionTitle;
}(_react.Component);

exports["default"] = SectionTitle;

_defineProperty(SectionTitle, "propTypes", {
  section: _propTypes["default"].any.isRequired,
  renderSectionTitle: _propTypes["default"].func.isRequired,
  theme: _propTypes["default"].func.isRequired,
  sectionKeyPrefix: _propTypes["default"].string.isRequired
});

/***/ }),

/***/ 4586:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = compareObjects;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function compareObjects(objA, objB) {
  var keys = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  if (objA === objB) {
    return false;
  }

  var aKeys = Object.keys(objA);
  var bKeys = Object.keys(objB);

  if (aKeys.length !== bKeys.length) {
    return true;
  }

  var keysMap = {};
  var i, len;

  for (i = 0, len = keys.length; i < len; i++) {
    keysMap[keys[i]] = true;
  }

  for (i = 0, len = aKeys.length; i < len; i++) {
    var key = aKeys[i];
    var aValue = objA[key];
    var bValue = objB[key];

    if (aValue === bValue) {
      continue;
    }

    if (!keysMap[key] || aValue === null || bValue === null || _typeof(aValue) !== 'object' || _typeof(bValue) !== 'object') {
      return true;
    }

    var aValueKeys = Object.keys(aValue);
    var bValueKeys = Object.keys(bValue);

    if (aValueKeys.length !== bValueKeys.length) {
      return true;
    }

    for (var n = 0, length = aValueKeys.length; n < length; n++) {
      var aValueKey = aValueKeys[n];

      if (aValue[aValueKey] !== bValue[aValueKey]) {
        return true;
      }
    }
  }

  return false;
}

/***/ }),

/***/ 69696:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



module.exports = __webpack_require__(74991)["default"];

/***/ }),

/***/ 37986:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.mapToAutowhateverTheme = exports.defaultTheme = void 0;
var defaultTheme = {
  container: 'react-autosuggest__container',
  containerOpen: 'react-autosuggest__container--open',
  input: 'react-autosuggest__input',
  inputOpen: 'react-autosuggest__input--open',
  inputFocused: 'react-autosuggest__input--focused',
  suggestionsContainer: 'react-autosuggest__suggestions-container',
  suggestionsContainerOpen: 'react-autosuggest__suggestions-container--open',
  suggestionsList: 'react-autosuggest__suggestions-list',
  suggestion: 'react-autosuggest__suggestion',
  suggestionFirst: 'react-autosuggest__suggestion--first',
  suggestionHighlighted: 'react-autosuggest__suggestion--highlighted',
  sectionContainer: 'react-autosuggest__section-container',
  sectionContainerFirst: 'react-autosuggest__section-container--first',
  sectionTitle: 'react-autosuggest__section-title'
};
exports.defaultTheme = defaultTheme;

var mapToAutowhateverTheme = function mapToAutowhateverTheme(theme) {
  var result = {};

  for (var key in theme) {
    switch (key) {
      case 'suggestionsContainer':
        result['itemsContainer'] = theme[key];
        break;

      case 'suggestionsContainerOpen':
        result['itemsContainerOpen'] = theme[key];
        break;

      case 'suggestion':
        result['item'] = theme[key];
        break;

      case 'suggestionFirst':
        result['itemFirst'] = theme[key];
        break;

      case 'suggestionHighlighted':
        result['itemHighlighted'] = theme[key];
        break;

      case 'suggestionsList':
        result['itemsList'] = theme[key];
        break;

      default:
        result[key] = theme[key];
    }
  }

  return result;
};

exports.mapToAutowhateverTheme = mapToAutowhateverTheme;

/***/ }),

/***/ 35122:
/***/ ((module) => {


var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function ToObject(val) {
	if (val == null) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function ownEnumerableKeys(obj) {
	var keys = Object.getOwnPropertyNames(obj);

	if (Object.getOwnPropertySymbols) {
		keys = keys.concat(Object.getOwnPropertySymbols(obj));
	}

	return keys.filter(function (key) {
		return propIsEnumerable.call(obj, key);
	});
}

module.exports = Object.assign || function (target, source) {
	var from;
	var keys;
	var to = ToObject(target);

	for (var s = 1; s < arguments.length; s++) {
		from = arguments[s];
		keys = ownEnumerableKeys(Object(from));

		for (var i = 0; i < keys.length; i++) {
			to[keys[i]] = from[keys[i]];
		}
	}

	return to;
};


/***/ }),

/***/ 69424:
/***/ ((module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

var _objectAssign = __webpack_require__(35122);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var truthy = function truthy(x) {
  return x;
};

exports["default"] = function (input) {
  var _ref = Array.isArray(input) && input.length === 2 ? input : [input, null];

  var _ref2 = _slicedToArray(_ref, 2);

  var theme = _ref2[0];
  var classNameDecorator = _ref2[1];

  return function (key) {
    for (var _len = arguments.length, names = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      names[_key - 1] = arguments[_key];
    }

    var styles = names.map(function (name) {
      return theme[name];
    }).filter(truthy);

    return typeof styles[0] === 'string' || typeof classNameDecorator === 'function' ? { key: key, className: classNameDecorator ? classNameDecorator.apply(undefined, _toConsumableArray(styles)) : styles.join(' ') } : { key: key, style: _objectAssign2['default'].apply(undefined, [{}].concat(_toConsumableArray(styles))) };
  };
};

module.exports = exports['default'];

/***/ }),

/***/ 48157:
/***/ ((module) => {



var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

module.exports = function (_ref) {
  var data = _ref.data;
  var multiSection = _ref.multiSection;

  function nextNonEmptySectionIndex(sectionIndex) {
    if (sectionIndex === null) {
      sectionIndex = 0;
    } else {
      sectionIndex++;
    }

    while (sectionIndex < data.length && data[sectionIndex] === 0) {
      sectionIndex++;
    }

    return sectionIndex === data.length ? null : sectionIndex;
  }

  function prevNonEmptySectionIndex(sectionIndex) {
    if (sectionIndex === null) {
      sectionIndex = data.length - 1;
    } else {
      sectionIndex--;
    }

    while (sectionIndex >= 0 && data[sectionIndex] === 0) {
      sectionIndex--;
    }

    return sectionIndex === -1 ? null : sectionIndex;
  }

  function next(position) {
    var _position = _slicedToArray(position, 2);

    var sectionIndex = _position[0];
    var itemIndex = _position[1];


    if (multiSection) {
      if (itemIndex === null || itemIndex === data[sectionIndex] - 1) {
        sectionIndex = nextNonEmptySectionIndex(sectionIndex);

        if (sectionIndex === null) {
          return [null, null];
        }

        return [sectionIndex, 0];
      }

      return [sectionIndex, itemIndex + 1];
    }

    if (data === 0 || itemIndex === data - 1) {
      return [null, null];
    }

    if (itemIndex === null) {
      return [null, 0];
    }

    return [null, itemIndex + 1];
  }

  function prev(position) {
    var _position2 = _slicedToArray(position, 2);

    var sectionIndex = _position2[0];
    var itemIndex = _position2[1];


    if (multiSection) {
      if (itemIndex === null || itemIndex === 0) {
        sectionIndex = prevNonEmptySectionIndex(sectionIndex);

        if (sectionIndex === null) {
          return [null, null];
        }

        return [sectionIndex, data[sectionIndex] - 1];
      }

      return [sectionIndex, itemIndex - 1];
    }

    if (data === 0 || itemIndex === 0) {
      return [null, null];
    }

    if (itemIndex === null) {
      return [null, data - 1];
    }

    return [null, itemIndex - 1];
  }

  function isLast(position) {
    return next(position)[1] === null;
  }

  return {
    next: next,
    prev: prev,
    isLast: isLast
  };
};


/***/ }),

/***/ 56932:
/***/ ((module) => {



function shallowEqualArrays(arrA, arrB) {
  if (arrA === arrB) {
    return true;
  }

  if (!arrA || !arrB) {
    return false;
  }

  var len = arrA.length;

  if (arrB.length !== len) {
    return false;
  }

  for (var i = 0; i < len; i++) {
    if (arrA[i] !== arrB[i]) {
      return false;
    }
  }

  return true;
}

module.exports = shallowEqualArrays;


/***/ })

};
;
//# sourceMappingURL=https://storage.googleapis.com/streak-extension-sourcemaps/clientjs/clientjs.chunk.4574.84ba3919a07e39aaa112.js.map