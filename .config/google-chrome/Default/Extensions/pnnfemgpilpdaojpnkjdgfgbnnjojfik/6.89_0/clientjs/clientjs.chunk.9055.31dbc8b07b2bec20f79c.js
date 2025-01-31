"use strict";
export const id = 9055;
export const ids = [9055];
export const modules = {

/***/ 80260:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ EnableSharingPromptContainer)
/* harmony export */ });
/* harmony import */ var _presentation_EnableSharingPrompt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57678);
/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3572);
/* harmony import */ var _redux_selectors_teamSelectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71973);
/* harmony import */ var _team__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64936);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_redux_selectors_teamSelectors__WEBPACK_IMPORTED_MODULE_1__, _team__WEBPACK_IMPORTED_MODULE_2__]);
([_redux_selectors_teamSelectors__WEBPACK_IMPORTED_MODULE_1__, _team__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





function EnableSharingPromptContainer() {
  const teamCount = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useSelector */ .v9)(state => (0,_redux_selectors_teamSelectors__WEBPACK_IMPORTED_MODULE_1__/* .getTeamsCurrentUserIsOn */ .gR)(state).length);
  const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useDispatch */ .I0)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_presentation_EnableSharingPrompt__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
    teamCount: teamCount,
    onEnableSharing: () => (0,_team__WEBPACK_IMPORTED_MODULE_2__/* .updateTeamsEmailSharing */ .JS)({
      isSharing: true
    }),
    onGoToSettings: () => dispatch({
      type: 'GO_TO_EMAIL_SHARING_SETTINGS'
    })
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6356:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AddBoxContainer)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17013);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44345);
/* harmony import */ var _streakyc_common_services_data_user__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(5575);
/* harmony import */ var _lib_utils_isNotNil__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(72086);
/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(3572);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35091);
/* harmony import */ var _widgets_react_loadingSpinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(72905);
/* harmony import */ var _presentation_listNavigator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12343);
/* harmony import */ var _presentation_pipelineList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(33484);
/* harmony import */ var _presentation_searchField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(79981);
/* harmony import */ var _presentation_sectionHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(29088);
/* harmony import */ var _presentation_suggestedBoxList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(21766);
/* harmony import */ var _redux_selectors_teamSelectors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(71973);
/* harmony import */ var _EnableSharingPromptContainer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(80260);
/* harmony import */ var _services_boxLimitChecker_doesUserHaveMoreBoxesThanOverallLimit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(93237);
/* harmony import */ var _widgets_paywallGateway_paywallGateway__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(64167);
/* harmony import */ var _billing_helpers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(87872);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_presentation_pipelineList__WEBPACK_IMPORTED_MODULE_5__, _redux_selectors_teamSelectors__WEBPACK_IMPORTED_MODULE_9__, _EnableSharingPromptContainer__WEBPACK_IMPORTED_MODULE_10__, _services_boxLimitChecker_doesUserHaveMoreBoxesThanOverallLimit__WEBPACK_IMPORTED_MODULE_11__, _widgets_paywallGateway_paywallGateway__WEBPACK_IMPORTED_MODULE_12__, _billing_helpers__WEBPACK_IMPORTED_MODULE_13__]);
([_presentation_pipelineList__WEBPACK_IMPORTED_MODULE_5__, _redux_selectors_teamSelectors__WEBPACK_IMPORTED_MODULE_9__, _EnableSharingPromptContainer__WEBPACK_IMPORTED_MODULE_10__, _services_boxLimitChecker_doesUserHaveMoreBoxesThanOverallLimit__WEBPACK_IMPORTED_MODULE_11__, _widgets_paywallGateway_paywallGateway__WEBPACK_IMPORTED_MODULE_12__, _billing_helpers__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


















const SEARCH_DEBOUNCE_DELAY = 100;

// There are three states:
// 1. normal add to box
// 2. user has a teamless pipeline
// 3. user has sharing disabled for all teams
// 4. permissions are loading
function AddBoxContainer(_ref) {
  let {
    card,
    hasBoxes,
    track
  } = _ref;
  const {
    threadListMetaData
  } = card;
  const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_15__/* .useDispatch */ .I0)();
  const listNavigatorRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const [isSearchFocused, setIsSearchFocused] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [query, setQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const isLoading = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_15__/* .useSelector */ .v9)(state => state.sidebarState.isBoxingCreating);
  const isInInbox = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_15__/* .useSelector */ .v9)(state => state.threadViewState.type === 'NO_THREAD');
  const orgs = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_15__/* .useSelector */ .v9)(state => Object.values(state.models.orgs).filter(_lib_utils_isNotNil__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z));
  const pipelines = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_15__/* .useSelector */ .v9)(state => state.models.pipelines);
  const teams = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_15__/* .useSelector */ .v9)(state => (0,_redux_selectors_teamSelectors__WEBPACK_IMPORTED_MODULE_9__/* .getTeamsCurrentUserIsOn */ .gR)(state));
  const threadId = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_15__/* .useSelector */ .v9)(state => state.threadViewState.type !== 'NO_THREAD' && state.threadViewState.id);
  const searchBoxSuggestions = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_15__/* .useSelector */ .v9)(state => state.sidebarState.searchBoxSuggestions);
  const initialBoxSuggestions = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_15__/* .useSelector */ .v9)(state => state.sidebarState.initialBoxSuggestions);
  const isLoadingBoxSuggestions = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_15__/* .useSelector */ .v9)(state => state.sidebarState.isLoadingBoxSuggestions);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!threadListMetaData || threadListMetaData.length === 0) {
      return;
    }
    dispatch({
      type: 'LOAD_BOX_SUGGESTIONS',
      threadListMetaData
    });
  }, [dispatch, threadListMetaData]);

  // eslint-disable-next-line
  const search = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((0,lodash__WEBPACK_IMPORTED_MODULE_0__.debounce)(query => dispatch({
    type: 'SIDEBAR_SEARCH_FOR_BOX',
    query
  }), SEARCH_DEBOUNCE_DELAY), [dispatch]);
  if (teams.length === 0) {
    // todo: if there's no team... prompt the user to make one
  }
  if (Object.values(pipelines).filter(_lib_utils_isNotNil__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z).some(_ref2 => {
    let {
      teamKey
    } = _ref2;
    return !teamKey;
  })) {
    //todo: if there are teamless pipelines... prompt the user to add them to a team
  }

  // todo: also consider teams of pipelines you are a guest on
  const enabledTeamKeys = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_15__/* .useSelector */ .v9)(state => (0,_redux_selectors_teamSelectors__WEBPACK_IMPORTED_MODULE_9__/* .getTeamKeysWithSharingEnabled */ .jG)(state));
  if (!isInInbox && threadId == null || isLoading || teams.some(team => !team.key) || !enabledTeamKeys) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_widgets_react_loadingSpinner__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {});
  }

  // Don't include pipelines on teams which has disabled email sharing
  const sharingPipelines = Object.keys(pipelines).reduce((acc, curr) => {
    const pipeline = pipelines[curr];
    if (pipeline.teamKey && enabledTeamKeys && enabledTeamKeys.includes(pipeline.teamKey)) {
      acc[curr] = pipeline;
    }
    return acc;
  }, {});
  const isSharingEnabledForAnyTeam = enabledTeamKeys && enabledTeamKeys.length > 0;
  const isAtLeastOnePipelineWithSharingEnabled = Object.keys(sharingPipelines).length > 0;
  if (!isSharingEnabledForAnyTeam || !isAtLeastOnePipelineWithSharingEnabled) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_EnableSharingPromptContainer__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {});
  }
  const boxSuggestions = query ? searchBoxSuggestions : initialBoxSuggestions;

  // 1. group boxSuggestions by pipeline
  const boxSuggestionsGroupedByPipeline = new Map();
  boxSuggestions.forEach(boxSuggestion => {
    if (!sharingPipelines[boxSuggestion.pipelineId]) {
      return;
    }
    const pipelineGroup = boxSuggestionsGroupedByPipeline.get(boxSuggestion.pipelineId);
    if (pipelineGroup && pipelineGroup.length) {
      pipelineGroup.push(boxSuggestion);
    } else {
      boxSuggestionsGroupedByPipeline.set(boxSuggestion.pipelineId, [boxSuggestion]);
    }
  });

  // 2. flatten grouped array so seleced index is correct
  let boxSuggestionsGroupedByPipelineFlat = [];
  boxSuggestionsGroupedByPipeline.forEach(value => {
    boxSuggestionsGroupedByPipelineFlat = boxSuggestionsGroupedByPipelineFlat.concat(value);
  });

  // TODO: TO MAKE THE LIST MORE FLEXIBLE, WE'LL NEED TO USE KEYS IN THE CB INSTEAD OF INDEX

  const onCancel = () => {
    setQuery('');
    search('');
    search.flush();
  };
  const onClickBox = boxId => {
    dispatch({
      type: 'SIDEBAR_ADD_TO_EXISTING_BOX',
      boxId,
      composeWindowId: card.composeWindowId,
      contactId: card.contactId,
      domain: card.domain,
      email: card.email,
      isAutoboxed: card.isAutoboxed,
      orgId: card.orgId,
      threadListMetaData
    });
  };
  const showPaywallOrTakeAction = originalAction => {
    if (!(0,_billing_helpers__WEBPACK_IMPORTED_MODULE_13__/* .canUseCRMFeatures */ .m$)((0,_streakyc_common_services_data_user__WEBPACK_IMPORTED_MODULE_17__/* .getUser */ .P)())) {
      (0,_widgets_paywallGateway_paywallGateway__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)({
        feature: 'createTeams'
      });
    } else {
      originalAction();
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_presentation_listNavigator__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    isListening: isSearchFocused,
    itemCount: boxSuggestionsGroupedByPipelineFlat.length,
    onEnter: highlightedIndex => showPaywallOrTakeAction(() => onClickBox(boxSuggestionsGroupedByPipelineFlat[highlightedIndex].id)),
    ref: listNavigatorRef,
    render: highlightedIndex => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
      className: "streak__sidebar_addBoxContainer",
      children: [hasBoxes && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
        style: {
          marginBottom: '20px',
          marginLeft: '-8px',
          marginRight: ' -8px'
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_presentation_searchField__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
          autoFocus: true,
          onBlur: () => setIsSearchFocused(false),
          onCancel: onCancel,
          onChange: query => {
            setQuery(query);
            search(query);

            // When deleting the query, clear the search results immediately.
            if (!query) {
              search.flush();
            }
          },
          onFocus: () => {
            setIsSearchFocused(true);
            listNavigatorRef.current && listNavigatorRef.current.setHighlightedIndex(0);
          },
          query: query
        })
      }), isLoadingBoxSuggestions && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_widgets_react_loadingSpinner__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}), !isLoadingBoxSuggestions && boxSuggestionsGroupedByPipelineFlat.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_presentation_sectionHeader__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
          children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.getString('streak_sidebar_add_to_box_suggestions')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_presentation_suggestedBoxList__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
          boxSuggestions: boxSuggestionsGroupedByPipeline,
          highlightedIndex: isSearchFocused ? highlightedIndex : -1,
          onClickBox: boxId => {
            showPaywallOrTakeAction(() => {
              onClickBox(boxId);
              track('existingBoxClick', {
                source: query ? 'search' : 'suggestion'
              });
            });
          },
          pipelines: sharingPipelines
        })]
      }), Object.keys(sharingPipelines).length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_presentation_sectionHeader__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
          children: query ? `${_services_locale_locale__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.getString('streak_sidebar_create_in', {
            boxName: query
          })}` : _services_locale_locale__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.getString('streak_sidebar_create_new')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_presentation_pipelineList__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
          onClick: async pipelineId => {
            showPaywallOrTakeAction(async () => {
              const limitObj = await (0,_services_boxLimitChecker_doesUserHaveMoreBoxesThanOverallLimit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .ZP)();
              track('pipelineClick', {
                ...limitObj
              });
              if (limitObj.isOverLimit) {
                (0,_widgets_paywallGateway_paywallGateway__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)({
                  feature: 'unlimitedBoxes'
                });
              } else {
                dispatch({
                  type: 'SIDEBAR_BOX_CREATE_CLICK',
                  composeWindowId: card.composeWindowId,
                  contactId: card.contactId,
                  domain: card.domain,
                  email: card.email,
                  isAutoboxed: card.isAutoboxed,
                  name: query ? query : getNewBoxName(card, orgs),
                  orgId: card.orgId,
                  pipelineId,
                  threadListMetaData
                });
              }
            });
          },
          pipelines: sharingPipelines
        })]
      })]
    })
  });
}
function getNewBoxName(card, orgs) {
  if (card.name) {
    return card.name;
  }
  if (card.email) {
    return card.email;
  }
  if (card.domain) {
    const org = orgs.find(org => org.domains.includes(card.domain));
    return org ? org.name : card.domain;
  }
  return card.threadListMetaData?.[0]?.subject || _services_locale_locale__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.getString('unnamed_box_name');
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 57678:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ EnableSharingPrompt)
});

// EXTERNAL MODULE: ./.yarn/__virtual__/styled-jsx-virtual-9c4bfc1357/0/cache/styled-jsx-npm-5.0.2-aff4f13ebf-96b4507d41.zip/node_modules/styled-jsx/style.js
var style = __webpack_require__(81518);
var style_default = /*#__PURE__*/__webpack_require__.n(style);
// EXTERNAL MODULE: ./extensions/common/js/components/Heading/Heading.tsx
var Heading = __webpack_require__(67565);
// EXTERNAL MODULE: ./extensions/common/js/services/locale/locale.ts + 37 modules
var locale = __webpack_require__(35091);
// EXTERNAL MODULE: ./extensions/common/js/widgets/react/material/button/streakButton.tsx
var streakButton = __webpack_require__(22682);
;// CONCATENATED MODULE: ./extensions/common/images/sidebar/collaboration@3x.png
const collaboration_3x_namespaceObject = __webpack_require__.p + "collaboration@3x.53e63ed796186bba2a8e.png";
// EXTERNAL MODULE: ./.yarn/cache/react-npm-18.3.1-af38f3c1ae-261137d3f3.zip/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(59718);
;// CONCATENATED MODULE: ./extensions/common/js/modules/streakSidebar/presentation/EnableSharingPrompt.tsx






function EnableSharingPrompt(_ref) {
  let {
    teamCount,
    onEnableSharing,
    onGoToSettings
  } = _ref;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: "jsx-1117859205" + " " + "streak__sidebar_enableSharingPrompt_container",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("img", {
      src: collaboration_3x_namespaceObject,
      className: "jsx-1117859205" + " " + "streak__sidebar_enableSharingPrompt_image"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Heading/* default */.Z, {
      size: "h1",
      children: locale/* default */.Z.getString('team_email_sharing_disabled_title')
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "jsx-1117859205" + " " + "streak__sidebar_enableSharingPrompt_subtitle",
      children: locale/* default */.Z.getString('team_email_sharing_disabled_subtitle')
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "jsx-1117859205" + " " + "streak__sidebar_enableSharingPrompt_buttonContainer",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(streakButton/* default */.ZP, {
        onClick: () => onEnableSharing(),
        children: locale/* default */.Z.getString(teamCount === 1 ? 'team_email_sharing_disabled_action_singleteam' : 'team_email_sharing_disabled_action_multiteam')
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(streakButton/* default */.ZP, {
        onClick: () => onGoToSettings(),
        variant: "text",
        children: locale/* default */.Z.getString('go_to_settings')
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)((style_default()), {
      id: "1117859205",
      children: [".streak__sidebar_enableSharingPrompt_container.jsx-1117859205{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;text-align:center;-webkit-letter-spacing:0.25px;-moz-letter-spacing:0.25px;-ms-letter-spacing:0.25px;letter-spacing:0.25px;height:100%;}", ".streak__sidebar_enableSharingPrompt_buttonContainer.jsx-1117859205{margin-top:30px;max-height:82px;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}", ".streak__sidebar_enableSharingPrompt_image.jsx-1117859205{width:100%;margin-bottom:30px;}", ".streak__sidebar_enableSharingPrompt_subtitle.jsx-1117859205{font-family:Roboto;font-size:14px;line-height:20px;-webkit-letter-spacing:0.25px;-moz-letter-spacing:0.25px;-ms-letter-spacing:0.25px;letter-spacing:0.25px;color:var(--streak-black-secondary);}"]
    })]
  });
}

/***/ }),

/***/ 12343:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   b: () => (/* binding */ NO_HIGHLIGHT)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17013);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44345);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59718);




const NO_HIGHLIGHT = -1;
function ListNavigator(_ref, ref) {
  let {
    isListening,
    itemCount,
    onEnter,
    render
  } = _ref;
  const [highlightedIndex, setHighlightedIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(NO_HIGHLIGHT);

  // Ensure the highlighted index isn't beyond the last index when the number of items changes.
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (itemCount === 0) {
      setHighlightedIndex(NO_HIGHLIGHT);
      return;
    }
    if (highlightedIndex > itemCount - 1) {
      setHighlightedIndex(itemCount - 1);
      return;
    }
  }, [highlightedIndex, itemCount]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle)(ref, () => ({
    setHighlightedIndex
  }));
  function changeHighlightedIndex(delta) {
    const newHighlightedIndex = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.clamp)(highlightedIndex + delta, 0, itemCount - 1);
    if (newHighlightedIndex === highlightedIndex) {
      return false;
    }
    setHighlightedIndex(newHighlightedIndex);
    return true;
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    onKeyDownCapture: event => {
      if (!isListening || itemCount === 0) {
        return;
      }
      switch (event.key) {
        case 'ArrowUp':
          {
            const didChangeHighlightedIndex = changeHighlightedIndex(-1);
            if (!didChangeHighlightedIndex) {
              return;
            }
            break;
          }
        case 'ArrowDown':
          {
            const didChangeHighlightedIndex = changeHighlightedIndex(1);
            if (!didChangeHighlightedIndex) {
              return;
            }
            break;
          }
        case 'Enter':
          {
            if (highlightedIndex < 0) {
              return;
            }
            onEnter(highlightedIndex);
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
    children: render(highlightedIndex)
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(ListNavigator));

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

/***/ 21766:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ SuggestedBoxList)
});

// EXTERNAL MODULE: ./.yarn/__virtual__/styled-jsx-virtual-9c4bfc1357/0/cache/styled-jsx-npm-5.0.2-aff4f13ebf-96b4507d41.zip/node_modules/styled-jsx/style.js
var style = __webpack_require__(81518);
var style_default = /*#__PURE__*/__webpack_require__.n(style);
// EXTERNAL MODULE: ./extensions/common/js/modules/streakSidebar/presentation/listNavigator.tsx
var listNavigator = __webpack_require__(12343);
// EXTERNAL MODULE: ./.yarn/cache/react-npm-18.3.1-af38f3c1ae-261137d3f3.zip/node_modules/react/index.js
var react = __webpack_require__(44345);
// EXTERNAL MODULE: ./extensions/common/js/components/MoreHorizButton/MoreHorizButton.tsx
var MoreHorizButton = __webpack_require__(72644);
// EXTERNAL MODULE: ./extensions/common/js/components/PipelineHeader/PipelineHeader.tsx
var PipelineHeader = __webpack_require__(71162);
// EXTERNAL MODULE: ./.yarn/cache/classnames-npm-2.5.1-c7273f3423-58eb394e88.zip/node_modules/classnames/index.js
var classnames = __webpack_require__(47587);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./extensions/common/js/components/Icon/Icon.tsx + 1 modules
var Icon = __webpack_require__(71174);
// EXTERNAL MODULE: ./extensions/common/js/components/Label/Label.tsx + 1 modules
var Label = __webpack_require__(32029);
// EXTERNAL MODULE: ./extensions/common/js/components/Layout/Layout.tsx
var Layout = __webpack_require__(54165);
// EXTERNAL MODULE: ./extensions/common/js/services/locale/locale.ts + 37 modules
var locale = __webpack_require__(35091);
// EXTERNAL MODULE: ./extensions/common/js/widgets/react/material/tooltip/TooltipContainer.tsx
var TooltipContainer = __webpack_require__(9112);
// EXTERNAL MODULE: ./.yarn/cache/react-npm-18.3.1-af38f3c1ae-261137d3f3.zip/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(59718);
;// CONCATENATED MODULE: ./extensions/common/js/modules/streakSidebar/presentation/suggestedBox.tsx









function SuggestedBox(_ref) {
  let {
    boxSuggestion,
    isHighlighted = false,
    onClick,
    operation = 'none',
    pipeline
  } = _ref;
  const [isMouseOver, setIsMouseOver] = (0,react.useState)(false);
  const {
    id,
    name: boxName,
    stageKey
  } = boxSuggestion;
  const isActive = operation === 'add' && (isHighlighted || isMouseOver);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    onKeyDown: event => {
      if (event.key === 'Enter') {
        onClick(id);
      }
    },
    onMouseLeave: () => setIsMouseOver(false),
    onMouseOver: () => setIsMouseOver(true),
    onClick: () => onClick(id),
    tabIndex: 0,
    className: "jsx-4017448882" + " " + (classnames_default()('streak__sidebar_suggested_box', {
      'streak__sidebar_suggested_box--isActive': isActive
    }) || ""),
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Layout/* Row */.X2, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Layout/* Column */.sg, {
        alignment: "start",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(TooltipContainer/* default */.Z, {
          tooltip: locale/* default */.Z.getString('add_to_box'),
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(Icon/* default */.Z, {
            accent: isActive ? 'default' : 'muted',
            isOutline: true,
            name: isActive ? 'add' : pipeline.icon,
            variant: "text"
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Layout/* Column */.sg, {
        alignment: "center",
        className: "streak__no-padding-right",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(TooltipContainer/* default */.Z, {
          className: "streak__tool-tip-container",
          tooltip: boxName,
          children: boxName
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Layout/* Column */.sg, {
        alignment: "end",
        className: "streak__no-padding-right",
        maxWidth: 128,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Label/* default */.Z, {
          backgroundColor: pipeline.stages[stageKey].color.backgroundColor,
          foregroundColor: pipeline.stages[stageKey].color.foregroundColor,
          tooltip: `${locale/* default */.Z.getString('stage')}: ${pipeline.stages[stageKey].name}`,
          children: pipeline.stages[stageKey].name
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)((style_default()), {
      id: "4017448882",
      children: [".streak__sidebar_suggested_box.jsx-4017448882{border-radius:4px;cursor:pointer;font-size:14px;margin:0 -8px;outline:none;padding:0 20px 0 8px;}", ".streak__sidebar_suggested_box.jsx-4017448882:focus,.streak__sidebar_suggested_box--isActive.jsx-4017448882{background-color:var(--streak-primary-hover);color:var(--streak-primary);}", ".streak__sidebar_suggested_box.jsx-4017448882:focus .streak__icon{color:var(--streak-app-primary);}", ".streak__sidebar_suggested_box.jsx-4017448882 .streak__tool-tip-container{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}", ".streak__sidebar_suggested_box.jsx-4017448882 .streak__no-padding-right{padding-right:0;}"]
    })]
  });
}
;// CONCATENATED MODULE: ./extensions/common/js/modules/streakSidebar/presentation/suggestedBoxListGroup.tsx






const MAX_SUGGESTION_COUNT = 3;
function SuggestedBoxListGroup(_ref) {
  let {
    boxSuggestions,
    highlightedIndex,
    onClickBox,
    pipeline
  } = _ref;
  const [showAll, setShowAll] = (0,react.useState)(false);
  const visibleBoxCount = showAll ? boxSuggestions.length : MAX_SUGGESTION_COUNT;
  (0,react.useEffect)(() => {
    if (highlightedIndex > MAX_SUGGESTION_COUNT - 1) {
      setShowAll(true);
    }
  }, [highlightedIndex]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: "jsx-4269072737" + " " + "streak__sidebar_suggested_box_list_group",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(PipelineHeader/* default */.Z, {
      name: pipeline.name
    }), boxSuggestions.slice(0, visibleBoxCount).map((boxSuggestion, index) => /*#__PURE__*/(0,jsx_runtime.jsx)(SuggestedBox, {
      boxSuggestion: boxSuggestion,
      isHighlighted: index === highlightedIndex,
      onClick: onClickBox,
      operation: "add",
      pipeline: pipeline
    }, boxSuggestion.id)), boxSuggestions.length > MAX_SUGGESTION_COUNT && !showAll && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "jsx-4269072737" + " " + "streak__sidebar_suggested_box_list_group_more_toggle",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(MoreHorizButton/* default */.Z, {
        onClick: () => setShowAll(!showAll)
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)((style_default()), {
      id: "4269072737",
      children: [".streak__sidebar_suggested_box_list_group.jsx-4269072737{margin-bottom:16px;}", ".streak__sidebar_suggested_box_list_group_more_toggle.jsx-4269072737{text-align:center;}"]
    })]
  });
}
;// CONCATENATED MODULE: ./extensions/common/js/modules/streakSidebar/presentation/suggestedBoxList.tsx




function SuggestedBoxList(_ref) {
  let {
    boxSuggestions,
    highlightedIndex,
    onClickBox,
    pipelines
  } = _ref;
  let previousBoxSuggestionCount = 0;
  function getHighlightedIndexForGroup(groupBoxSuggestionCount) {
    const highlightedIndexForGroup = highlightedIndex - previousBoxSuggestionCount;
    if (highlightedIndexForGroup < 0 || highlightedIndexForGroup > groupBoxSuggestionCount - 1) {
      return listNavigator/* NO_HIGHLIGHT */.b;
    }
    return highlightedIndexForGroup;
  }
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: "jsx-1766547150" + " " + "streak__sidebar_suggested_box_list",
    children: [Array.from(boxSuggestions.entries()).map(_ref2 => {
      let [key, value] = _ref2;
      const group = /*#__PURE__*/(0,jsx_runtime.jsx)(SuggestedBoxListGroup, {
        boxSuggestions: value,
        highlightedIndex: getHighlightedIndexForGroup(value.length),
        onClickBox: onClickBox,
        pipeline: pipelines[key]
      }, key);
      previousBoxSuggestionCount += value.length;
      return group;
    }), /*#__PURE__*/(0,jsx_runtime.jsx)((style_default()), {
      id: "1766547150",
      children: [".streak__sidebar_suggested_box_list.jsx-1766547150{margin-bottom:28px;}"]
    })]
  });
}

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
//# sourceMappingURL=https://storage.googleapis.com/streak-extension-sourcemaps/clientjs/clientjs.chunk.9055.31dbc8b07b2bec20f79c.js.map