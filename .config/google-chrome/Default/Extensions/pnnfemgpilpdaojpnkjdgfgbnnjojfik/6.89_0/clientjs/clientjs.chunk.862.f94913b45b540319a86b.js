"use strict";
export const id = 862;
export const ids = [862,9117];
export const modules = {

/***/ 65192:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ useIsStreakAdmin)
/* harmony export */ });
/* harmony import */ var _lib_utils_userHasImpersonationAccess__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42468);

function useIsStreakAdmin() {
  return (0,_lib_utils_userHasImpersonationAccess__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
}

/***/ }),

/***/ 73408:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ CommandBarProvider),
/* harmony export */   j: () => (/* binding */ useCommandBar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44345);

/**
 * Command bar results and actions will need to control some
 * aspects of the command bar, such as closing it or changing
 * the current step (for multi-step flows).
 */
const CommandBarContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
const CommandBarProvider = CommandBarContext.Provider;

/**
 * Hook to control the command bar from within a command bar
 * result or action.
 *
 * @example
 * ```tsx
 * function ResultHelpArticle({ title, summary, articleUrl }: HelpArticle) {
 *   const { closeCommandBar, isUserStreakAdmin } = useCommandContext();
 *
 *   return (
 *     <BaseResult
 *       icon='help'
 *       title={<Match text={title} query={query} />}
 *       summary={summary}
 *       onClick={() => {
 *         window.open(articleUrl, '_blank');
 *         closeCommandBar();
 *       }}
 *     />
 *   );
 * }
 * ```
 */
function useCommandBar() {
  const context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(CommandBarContext);
  if (!context) {
    throw new Error('useCommandBar must be used within a CommandBarProvider');
  }
  return context;
}

/***/ }),

/***/ 83465:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OA: () => (/* binding */ CmdBarEntryTitle),
/* harmony export */   R7: () => (/* binding */ CmdBarEntryInfo),
/* harmony export */   pW: () => (/* binding */ CmdBarEntryChip),
/* harmony export */   tB: () => (/* binding */ CmdBarEntry)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44345);
/* harmony import */ var _streakyc_ui_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87084);
/* harmony import */ var _streakyc_ui_components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2225);
/* harmony import */ var _highlightedText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8167);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(59718);





function CmdBarEntry(_ref) {
  let {
    leftAdornment,
    left,
    right = null
  } = _ref;
  const adornment = typeof leftAdornment === 'string' || (0,_streakyc_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .isIconElement */ ._u)(leftAdornment) ? (0,_streakyc_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .renderIcon */ .hY)(leftAdornment, 'snudge', 'black/secondary') : (0,_streakyc_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .isAvatarElement */ .W5)(leftAdornment) ? (0,_streakyc_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .renderAvatar */ .aQ)(leftAdornment, 's') : leftAdornment;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_streakyc_ui_components_layout__WEBPACK_IMPORTED_MODULE_2__/* .LayoutRow */ .WM, {
    padding: "snudge",
    alignItemsH: "space-between",
    alignItemsV: "center",
    gapH: "s",
    overflow: "hidden",
    flex: true,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_streakyc_ui_components_layout__WEBPACK_IMPORTED_MODULE_2__/* .LayoutRow */ .WM, {
      gapH: "m",
      overflow: "hidden",
      flex: true,
      children: [adornment, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_streakyc_ui_components_layout__WEBPACK_IMPORTED_MODULE_2__/* .LayoutBox */ .kZ, {
        overflow: "hidden",
        flex: true,
        maxHeight: 20,
        children: left
      })]
    }), right ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_streakyc_ui_components_layout__WEBPACK_IMPORTED_MODULE_2__/* .LayoutRow */ .WM, {
      gapH: "s",
      children: right
    }) : null]
  });
}
function CmdBarEntryTitle(_ref2) {
  let {
    title,
    subtitle = null
  } = _ref2;
  const CENTER_DOT = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_streakyc_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Typo */ .Jd, {
    variant: "base/basic",
    color: "black/disabled",
    display: "contents",
    children: "\xA0\xB7\xA0"
  });
  const titleNode = typeof title === 'string' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_highlightedText__WEBPACK_IMPORTED_MODULE_3__/* .HighlightedText */ .h, {
    html: title
  }) : title;
  if (subtitle && /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(subtitle) && subtitle.type !== _highlightedText__WEBPACK_IMPORTED_MODULE_3__/* .HighlightedText */ .h) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_streakyc_ui_components_layout__WEBPACK_IMPORTED_MODULE_2__/* .LayoutRow */ .WM, {
      overflow: "hidden",
      alignItemsV: "center",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_streakyc_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Typo */ .Jd, {
        variant: "base/basic",
        display: "contents",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_streakyc_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Span */ .Dr, {
          overflow: "ellipsis",
          children: titleNode
        })
      }), CENTER_DOT, subtitle]
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_streakyc_ui_components_layout__WEBPACK_IMPORTED_MODULE_2__/* .LayoutBox */ .kZ, {
    overflow: "hidden",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_streakyc_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Typo */ .Jd, {
      variant: "base/basic",
      display: "contents",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_streakyc_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Span */ .Dr, {
        overflow: "ellipsis",
        children: [titleNode, subtitle ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_streakyc_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Typo */ .Jd, {
          variant: "base/basic",
          color: "black/disabled",
          display: "contents",
          children: [CENTER_DOT, subtitle]
        }) : null]
      })
    })
  });
}
function CmdBarEntryChip(_ref3) {
  let {
    text,
    color
  } = _ref3;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_streakyc_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Chip */ .Af, {
    color: color,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_streakyc_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Span */ .Dr, {
      overflow: "ellipsis",
      children: text
    })
  });
}
function CmdBarEntryInfo(_ref4) {
  let {
    text
  } = _ref4;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_streakyc_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Typo */ .Jd, {
    variant: "H6 - Tags",
    color: "black/disabled",
    children: text
  });
}

/***/ }),

/***/ 56545:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ CommandBar)
/* harmony export */ });
/* unused harmony export TabId */
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17013);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44345);
/* harmony import */ var _streakyc_ui_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87084);
/* harmony import */ var _streakyc_ui_components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2225);
/* harmony import */ var _streakyc_ui_components_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(66492);
/* harmony import */ var _core_hooks_useIsStreakAdmin__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(65192);
/* harmony import */ var _core_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(58556);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(35091);
/* harmony import */ var _services_tracker_useTracker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(70989);
/* harmony import */ var _widgets_notification__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(55741);
/* harmony import */ var _commandBarContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(73408);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(40634);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(67389);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(66534);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(29124);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks__WEBPACK_IMPORTED_MODULE_11__, ___WEBPACK_IMPORTED_MODULE_13__]);
([_hooks__WEBPACK_IMPORTED_MODULE_11__, ___WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















let TabId = /*#__PURE__*/function (TabId) {
  TabId["ALL"] = "ALL";
  TabId["ITEMS"] = "ITEMS";
  TabId["ACTIONS"] = "ACTIONS";
  TabId["RECENT"] = "RECENT";
  TabId["HELP"] = "HELP";
  return TabId;
}({});
const tabs = [{
  tabId: _types__WEBPACK_IMPORTED_MODULE_10__/* .SearchCategory */ .B.ALL,
  labelLocaleKey: 'command_bar_tab_all'
}, {
  tabId: _types__WEBPACK_IMPORTED_MODULE_10__/* .SearchCategory */ .B.ITEMS,
  labelLocaleKey: 'command_bar_tab_items'
}, {
  tabId: _types__WEBPACK_IMPORTED_MODULE_10__/* .SearchCategory */ .B.ACTIONS,
  labelLocaleKey: 'command_bar_tab_actions'
}, {
  tabId: _types__WEBPACK_IMPORTED_MODULE_10__/* .SearchCategory */ .B.RECENT,
  labelLocaleKey: 'command_bar_tab_recents'
}, {
  tabId: _types__WEBPACK_IMPORTED_MODULE_10__/* .SearchCategory */ .B.HELP,
  labelLocaleKey: 'command_bar_tab_help'
}];
const tabIdList = tabs.map(_ref => {
  let {
    tabId
  } = _ref;
  return tabId;
});
function CommandBar(_ref2) {
  let {
    sources,
    onClose,
    initialQuery = '',
    initialTab = _types__WEBPACK_IMPORTED_MODULE_10__/* .SearchCategory */ .B.ALL,
    onLoad
  } = _ref2;
  const [tabId, setTabId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialTab);
  const [resultStack, setResultStack] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const [query, setQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialQuery);
  const {
    showMessage
  } = (0,_widgets_notification__WEBPACK_IMPORTED_MODULE_8__/* .useButterBar */ .e)();
  const trackEvent = (0,_services_tracker_useTracker__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP)('commandBar');
  const isUserStreakAdmin = (0,_core_hooks_useIsStreakAdmin__WEBPACK_IMPORTED_MODULE_15__/* .useIsStreakAdmin */ .H)();
  const {
    getItem,
    setItem
  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_11__/* .useCommandBarStorage */ .E0)();
  const {
    goTo
  } = (0,_core_routing__WEBPACK_IMPORTED_MODULE_5__/* .useRouting */ .pe)();
  const closeCommandBar = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => onClose(), [onClose]);
  const pushResult = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(result => setResultStack(prevStack => [...prevStack, result]), []);
  const popResult = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => setResultStack(prevResults => prevResults.slice(0, -1)), []);
  const cache = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => new Map(), []);
  const ctx = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => ({
    isUserStreakAdmin,
    tabId,
    getItem,
    setItem,
    closeCommandBar,
    goTo,
    pushResult,
    popResult,
    trackEvent,
    showMessage,
    cache
  }), [isUserStreakAdmin, getItem, setItem, closeCommandBar, goTo, pushResult, popResult, trackEvent, showMessage, tabId, cache]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (onLoad) {
      onLoad(ctx);
    }
  }, [ctx, onLoad]);
  const onChangeTab = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((newTabId, e, direction) => {
    setTabId(newTabId);
    const navMethod = e?.type === 'click' ? 'mouse' : 'keyboard';
    trackEvent('tabChange', {
      from: tabId,
      to: newTabId,
      navMethod,
      direction
    });
  }, [tabId, trackEvent]);
  const onKeyDown = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(e => {
    // We don't want to interfere with other shortcuts
    if (e.key === 'Tab' && !e.ctrlKey && !e.altKey && !e.metaKey) {
      e.preventDefault();
      const direction = e.shiftKey ? _utils__WEBPACK_IMPORTED_MODULE_12__/* .Direction */ .Nm.PREV : _utils__WEBPACK_IMPORTED_MODULE_12__/* .Direction */ .Nm.NEXT;
      const nextTab = (0,_utils__WEBPACK_IMPORTED_MODULE_12__/* .cycleItems */ .SX)(tabIdList, tabId, direction);
      return onChangeTab(nextTab, e, direction);
    }
  }, [tabId, onChangeTab]);
  const onEsc = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(query => {
    trackEvent('close', {
      query,
      tab: tabId
    });
    closeCommandBar();
  }, [closeCommandBar, trackEvent, tabId]);
  const lastResult = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.last)(resultStack);
  const groupResults = query === '' && [_types__WEBPACK_IMPORTED_MODULE_10__/* .SearchCategory */ .B.ALL, _types__WEBPACK_IMPORTED_MODULE_10__/* .SearchCategory */ .B.ITEMS].includes(tabId);
  const filterSource = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(source => source.categories.includes(tabId), [tabId]);
  const renderToolbar = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(items => {
    const countByTab = getCountByTab(items);
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_streakyc_ui_components_tabs__WEBPACK_IMPORTED_MODULE_4__/* .Tabs */ .mQ, {
      value: tabId,
      onChange: onChangeTab,
      "aria-label": "Search type",
      selectionFollowsFocus: true,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_streakyc_ui_components_tabs__WEBPACK_IMPORTED_MODULE_4__/* .TabsList */ .dr, {
        children: tabs.map(_ref3 => {
          let {
            tabId,
            labelLocaleKey: tabLabelKey
          } = _ref3;
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_streakyc_ui_components_tabs__WEBPACK_IMPORTED_MODULE_4__/* .Tab */ .OK, {
            value: tabId,
            children: [_services_locale_locale__WEBPACK_IMPORTED_MODULE_6__.Locale.getString(tabLabelKey), countByTab[tabId] ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_streakyc_ui_components__WEBPACK_IMPORTED_MODULE_2__/* .Span */ .Dr, {
              color: "black/disabled",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Fragment, {
                children: "\xA0"
              }), resultCount(countByTab[tabId])]
            }) : null]
          }, tabId);
        })
      })
    });
  }, [onChangeTab, tabId]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_commandBarContext__WEBPACK_IMPORTED_MODULE_9__/* .CommandBarProvider */ .M, {
    value: ctx,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_streakyc_ui_components_layout__WEBPACK_IMPORTED_MODULE_3__/* .LayoutBox */ .kZ, {
      minWidth: 600,
      maxWidth: 600,
      children: lastResult ? lastResult.source.renderAction?.(lastResult) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(___WEBPACK_IMPORTED_MODULE_13__/* .CommandBarAutocomplete */ .wp, {
        groupResults: groupResults,
        filterSource: filterSource,
        sources: sources,
        value: query,
        onChange: setQuery,
        icon: "search",
        placeholder: _services_locale_locale__WEBPACK_IMPORTED_MODULE_6__.Locale.getString('command_bar_placeholder_all'),
        onKeyDown: onKeyDown,
        onEsc: onEsc,
        renderToolbar: renderToolbar
      })
    })
  });
}
function resultCount(count) {
  return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.isNil)(count) ? '' : count.toLocaleString();
}
function getCountByTab(results) {
  const groupedByCategory = results.reduce((acc, item) => {
    item.source.categories.forEach(c => {
      if (!acc[c]) {
        acc[c] = [];
      }
      acc[c].push(item);
    });
    return acc;
  }, {});
  const countByCategory = Object.fromEntries(Object.entries(groupedByCategory).map(_ref4 => {
    let [key, results] = _ref4;
    return [key, (0,_utils__WEBPACK_IMPORTED_MODULE_12__/* .deduplicateSearchResults */ .e_)(results).reduce((acc, item) => acc + item.data.length, 0)];
  }));
  return countByCategory;
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1001:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ CommandBarAutocomplete)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44345);
/* harmony import */ var _streakyc_ui_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87084);
/* harmony import */ var _streakyc_ui_components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2225);
/* harmony import */ var _streakyc_ui_components_autocomplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(70940);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(35091);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(67389);
/* harmony import */ var _commandBarContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(73408);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(66534);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks__WEBPACK_IMPORTED_MODULE_5__]);
_hooks__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









function CommandBarAutocomplete(_ref) {
  let {
    icon,
    onKeyDown,
    onEsc,
    value: query,
    onChange: setQuery,
    renderToolbar,
    sources,
    placeholder,
    filterSource,
    groupResults = false
  } = _ref;
  const ctx = (0,_commandBarContext__WEBPACK_IMPORTED_MODULE_6__/* .useCommandBar */ .j)();
  const {
    results
  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_5__/* .useSearch */ .Rx)({
    sources,
    ctx,
    query
  });
  const [prevResults, setPrevResults] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(results);
  const _onKeyDown = e => {
    if (e.key === 'Escape' && onEsc) {
      return onEsc(query ?? '', e);
    }
    onKeyDown && onKeyDown(e);
  };
  const queryRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(query);
  queryRef.current = query;

  // We want to show the results form all the sources at once,
  // so we keep the previous results until we get new ones.
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const ready = results.every(_ref2 => {
      let {
        state
      } = _ref2;
      return state === 'LOADED';
    });
    ready && setPrevResults(results);
  }, [results]);
  const filteredResults = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => prevResults.filter(_ref3 => {
    let {
      source
    } = _ref3;
    return filterSource(source);
  }), [filterSource, prevResults]);
  const resultsCountRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  resultsCountRef.current = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return filteredResults.reduce((acc, _ref4) => {
      let {
        data
      } = _ref4;
      return acc + data.length;
    }, 0);
  }, [filteredResults]);
  const renderItem = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((result, itemIdx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_streakyc_ui_components_autocomplete__WEBPACK_IMPORTED_MODULE_3__/* .AutocompleteItemBase */ .fV, {
    onClick: () => {
      ctx.trackEvent('selectResult', {
        source: result.source.nameLocaleKey,
        index: itemIdx,
        query: queryRef.current,
        tab: ctx.tabId,
        resultsCount: resultsCountRef.current
      });
      result.source.onSelectResult(result, ctx);
    },
    children: result.source.renderResult(result.entry.data)
  }, `${result.source.nameLocaleKey}-${itemIdx}`), [ctx]);
  const renderedResults = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return groupResults ? null : (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .deduplicateFlattened */ .AG)((0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .flattenSearchResults */ .JD)(filteredResults).sort((a, b) => compareByScore({
      score: a.source.priority * 10 + a.entry.score
    }, {
      score: b.source.priority * 10 + b.entry.score
    }))).map(renderItem);
  }, [groupResults, filteredResults, renderItem]);
  const toolbar = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => renderToolbar ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_streakyc_ui_components_layout__WEBPACK_IMPORTED_MODULE_2__/* .LayoutBox */ .kZ, {
    padding: "s|snudge",
    children: renderToolbar(prevResults)
  }) : null, [renderToolbar, prevResults]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_streakyc_ui_components_autocomplete__WEBPACK_IMPORTED_MODULE_3__/* .Autocomplete */ .F2, {
    variant: "inline",
    delay: "instant",
    open: true,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_streakyc_ui_components_layout__WEBPACK_IMPORTED_MODULE_2__/* .LayoutBox */ .kZ, {
      padding: {
        top: 'xsnudge'
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_streakyc_ui_components_autocomplete__WEBPACK_IMPORTED_MODULE_3__/* .AutocompleteTrigger */ .En, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_streakyc_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Input */ .II, {
        value: query,
        "aria-label": placeholder,
        placeholder: placeholder,
        onChange: setQuery,
        onKeyDown: _onKeyDown,
        icon: icon,
        color: "muted",
        variant: "clear",
        size: "xl",
        autoFocus: true
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_streakyc_ui_components_layout__WEBPACK_IMPORTED_MODULE_2__/* .LayoutBox */ .kZ, {
      padding: {
        top: 'xsnudge'
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_streakyc_ui_components_layout__WEBPACK_IMPORTED_MODULE_2__/* .LayoutBox */ .kZ, {
      borderThickness: "s",
      border: "primary/base"
    }), toolbar, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_streakyc_ui_components_autocomplete__WEBPACK_IMPORTED_MODULE_3__/* .AutocompletePanel */ .yf, {
      maxHeight: 300,
      overflowY: "auto",
      children: groupResults ? (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .deduplicateSearchResults */ .e_)(filteredResults.filter(g => g.data.length > 0).sort((a, b) => (b.source.priority ?? 0) - (a.source.priority ?? 0)).map(g => {
        g.data.sort(compareByScore);
        return g;
      })).map(_ref5 => {
        let {
          source,
          state,
          data
        } = _ref5;
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_streakyc_ui_components_autocomplete__WEBPACK_IMPORTED_MODULE_3__/* .AutocompleteHeading */ .gs, {
            text: _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__.Locale.getString(source.nameLocaleKey)
          }, source.nameLocaleKey), data.map((item, itemIndex) => renderItem({
            source,
            state,
            entry: item
          }, itemIndex))]
        }, source.nameLocaleKey);
      }) : renderedResults
    })]
  });
}

/**
 * Comparator function to sort results by score (highest
 * score first).
 */
function compareByScore(a, b) {
  return a.score > b.score ? -1 : 1;
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 13028:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ CommandBarInput)
/* harmony export */ });
/* harmony import */ var _streakyc_ui_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87084);
/* harmony import */ var _streakyc_ui_components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2225);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59718);



function CommandBarInput(_ref) {
  let {
    autoFocus,
    icon = 'arrow_back',
    onChange,
    onEsc,
    onReturn,
    placeholder,
    value
  } = _ref;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_streakyc_ui_components_layout__WEBPACK_IMPORTED_MODULE_1__/* .LayoutBox */ .kZ, {
    padding: {
      top: 'xsnudge'
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_streakyc_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Input */ .II, {
      value: value,
      "aria-label": placeholder,
      placeholder: placeholder,
      onChange: onChange,
      icon: icon,
      color: "muted",
      variant: "clear",
      size: "xl",
      onEsc: onEsc,
      onReturn: onReturn,
      autoFocus: autoFocus
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_streakyc_ui_components_layout__WEBPACK_IMPORTED_MODULE_1__/* .LayoutBox */ .kZ, {
      padding: {
        top: 'xsnudge'
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_streakyc_ui_components_layout__WEBPACK_IMPORTED_MODULE_1__/* .LayoutBox */ .kZ, {
      borderThickness: "s",
      border: "primary/base"
    })]
  });
}

/***/ }),

/***/ 8167:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  h: () => (/* binding */ HighlightedText)
});

;// CONCATENATED MODULE: ./extensions/common/js/modules/commandBar/internal/components/highlightedText.module.css
// extracted by mini-css-extract-plugin
var _1 = "streak-mod__rRMoWU4wwV1TI2G8QYFV";


// EXTERNAL MODULE: ./.yarn/cache/react-npm-18.3.1-af38f3c1ae-261137d3f3.zip/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(59718);
;// CONCATENATED MODULE: ./extensions/common/js/modules/commandBar/internal/components/highlightedText.tsx


/**
 * Renders the given text as HTML, allowing for the text to
 * be highlighted.
 *
 * @example
 *
 * ```tsx
 * <HighlightedText html="<em>Real Estate</em> Deals" />
 * // <span><em>Real Estate</em> Deals</span>
 * ```
 */

function HighlightedText(_ref) {
  let {
    html
  } = _ref;
  return /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
    className: _1,
    dangerouslySetInnerHTML: {
      __html: html
    }
  });
}

/***/ }),

/***/ 29124:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OA: () => (/* reexport safe */ _cmdBarEntry__WEBPACK_IMPORTED_MODULE_0__.OA),
/* harmony export */   R7: () => (/* reexport safe */ _cmdBarEntry__WEBPACK_IMPORTED_MODULE_0__.R7),
/* harmony export */   WQ: () => (/* reexport safe */ _commandBarInput__WEBPACK_IMPORTED_MODULE_3__.W),
/* harmony export */   hl: () => (/* reexport safe */ _highlightedText__WEBPACK_IMPORTED_MODULE_1__.h),
/* harmony export */   pW: () => (/* reexport safe */ _cmdBarEntry__WEBPACK_IMPORTED_MODULE_0__.pW),
/* harmony export */   tB: () => (/* reexport safe */ _cmdBarEntry__WEBPACK_IMPORTED_MODULE_0__.tB),
/* harmony export */   wp: () => (/* reexport safe */ _commandBarAutocomplete__WEBPACK_IMPORTED_MODULE_4__.w)
/* harmony export */ });
/* harmony import */ var _cmdBarEntry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83465);
/* harmony import */ var _highlightedText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8167);
/* harmony import */ var _keyboardShortcut__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7936);
/* harmony import */ var _commandBarInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13028);
/* harmony import */ var _commandBarAutocomplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1001);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_commandBarAutocomplete__WEBPACK_IMPORTED_MODULE_4__]);
_commandBarAutocomplete__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7936:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export KeyboardShortcut */
/* harmony import */ var _streakyc_ui_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87084);
/* harmony import */ var _streakyc_ui_components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2225);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59718);



function KeyboardShortcut(_ref) {
  let {
    children
  } = _ref;
  return /*#__PURE__*/_jsx(LayoutBox, {
    border: "black/border:solid",
    borderThickness: "s",
    padding: "xxs|s",
    rounding: "s",
    background: "white",
    children: /*#__PURE__*/_jsx(Typo, {
      variant: "mono",
      fontSize: "xs",
      color: "black/secondary",
      children: children
    })
  });
}

/***/ }),

/***/ 23184:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ MAX_HITS_PER_PAGE),
/* harmony export */   o: () => (/* binding */ DEFAULT_FUZZYSORT_OPTIONS)
/* harmony export */ });
/**
 * Maximum number of results that each source should return.
 */
const MAX_HITS_PER_PAGE = 10;

/**
 * Default options for the fuzzySort function.
 */
const DEFAULT_FUZZYSORT_OPTIONS = {
  threshold: 0.8,
  limit: 10
};

/***/ }),

/***/ 67389:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $c: () => (/* reexport safe */ _useCreateBox__WEBPACK_IMPORTED_MODULE_3__.$),
/* harmony export */   E0: () => (/* reexport safe */ _useCommandBarStorage__WEBPACK_IMPORTED_MODULE_1__.E),
/* harmony export */   Rx: () => (/* reexport safe */ _useSearch__WEBPACK_IMPORTED_MODULE_0__.R)
/* harmony export */ });
/* harmony import */ var _useSearch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96566);
/* harmony import */ var _useCommandBarStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15179);
/* harmony import */ var _useSearchStream__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35878);
/* harmony import */ var _useCreateBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71962);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useCreateBox__WEBPACK_IMPORTED_MODULE_3__]);
_useCreateBox__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 15179:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ useCommandBarStorage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44345);
/* harmony import */ var _core_hooks_useLocalStorageValue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81883);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(66534);




/**
 * Hook to get and set items command bar values from localStorage.
 *
 * ```tsx
 * const {getItem, setItem} = useCommandBarStorage();
 *
 * const recent = getItem('recent_views');
 * ```
 */
function useCommandBarStorage() {
  const [storage, setStorage] = (0,_core_hooks_useLocalStorageValue__WEBPACK_IMPORTED_MODULE_1__/* .useLocalStorageValue */ .ZN)(_utils__WEBPACK_IMPORTED_MODULE_2__/* .COMMAND_BAR_STORAGE_KEY */ .PM, {});
  const getItem = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(key => storage[key], [storage]);
  const setItem = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((key, value) => {
    setStorage({
      ...storage,
      [key]: value
    });
  }, [storage, setStorage]);
  return {
    getItem,
    setItem
  };
}

/***/ }),

/***/ 71962:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ useCreateBox)
/* harmony export */ });
/* harmony import */ var _streakyc_models_box_box__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94545);
/* harmony import */ var _widgets_paywallGateway_paywallGateway__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64167);
/* harmony import */ var _services_boxLimitChecker_doesUserHaveMoreBoxesThanOverallLimit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93237);
/* harmony import */ var _services_data_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38672);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_streakyc_models_box_box__WEBPACK_IMPORTED_MODULE_0__, _widgets_paywallGateway_paywallGateway__WEBPACK_IMPORTED_MODULE_1__, _services_boxLimitChecker_doesUserHaveMoreBoxesThanOverallLimit__WEBPACK_IMPORTED_MODULE_2__, _services_data_data__WEBPACK_IMPORTED_MODULE_3__]);
([_streakyc_models_box_box__WEBPACK_IMPORTED_MODULE_0__, _widgets_paywallGateway_paywallGateway__WEBPACK_IMPORTED_MODULE_1__, _services_boxLimitChecker_doesUserHaveMoreBoxesThanOverallLimit__WEBPACK_IMPORTED_MODULE_2__, _services_data_data__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





/**
 * Returns a function that creates a box given the box name
 * and pipelineKey.
 */
function useCreateBox() {
  return {
    createBox
  };
}

/**
 * Creates a box with the given name and pipelineKey. Returns
 * a promise with the created Box instance.
 */
async function createBox(name, pipelineKey) {
  const pipeline = _services_data_data__WEBPACK_IMPORTED_MODULE_3__/* .Data */ .V.getPipeline(pipelineKey);
  if (!pipeline) {
    // TODO: How should we handle this error?
    return;
  }
  const limitObj = await (0,_services_boxLimitChecker_doesUserHaveMoreBoxesThanOverallLimit__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)();
  if (limitObj.isOverLimit) {
    await (0,_widgets_paywallGateway_paywallGateway__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({
      feature: 'unlimitedBoxes',
      team: pipeline.getTeam(),
      pipeline: pipeline
    });
  }
  const box = _streakyc_models_box_box__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.createFromJSON({
    name,
    pipelineKey
  });
  _services_data_data__WEBPACK_IMPORTED_MODULE_3__/* .Data */ .V.getPipelineBoxes(pipelineKey).add(box);
  await box.saveWithPromise({
    hasSavingMessage: false
  });
  return box;
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 96566:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ useSearch)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44345);
/* harmony import */ var _streakyc_ui_components_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14693);
/* harmony import */ var _useSearchStream__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35878);



/**
 * Search items using the provided sources and context.
 *
 * @example
 *
 * ```tsx
 * const [query, setQuery] = useState('');
 * const {query, setQuery, results} = useSearch({sources, ctx, query});
 *
 * <CommandBarAutocomplete
 *   value={query}
 *   onChange={setQuery}
 *   results={results}
 *   ...
 * />
 * ```
 */
function useSearch(_ref) {
  let {
    sources,
    ctx,
    query
  } = _ref;
  const {
    emit,
    $results
  } = (0,_useSearchStream__WEBPACK_IMPORTED_MODULE_2__/* .useSearchStream */ .s)({
    sources,
    ctx
  });
  const {
    value: results
  } = (0,_streakyc_ui_components_hooks__WEBPACK_IMPORTED_MODULE_1__/* .useKefirStream */ .lf)([], $results);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => emit(query ?? ''), [query, emit]);
  return {
    results
  };
}

/***/ }),

/***/ 35878:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ useSearchStream)
/* harmony export */ });
/* harmony import */ var kefir__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98137);
/* harmony import */ var kefir_bus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67459);
/* harmony import */ var kefir_bus__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(kefir_bus__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _streakyc_ui_storybook_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70069);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44345);
/* harmony import */ var _lib_log_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7961);





/**
 * Hook to search across multiple sources. It returns the current query,
 * a setQuery function, and the current results. The requests to fetch
 * the results are debounced.
 *
 * @example
 *
 * ```tsx
 * const [query, setQuery] = useState('');
 *
 * const { $results, emit } = useSearchStream({ sources });
 * const { value: results } = useKefirStream([], $results);
 *
 * const onChangeInput = (query: string) => {
 *   setQuery(query);
 *   emit(query);
 * }
 *
 * <input value={query} onChange={e => onChangeInput(e.target.value)} />
 * <ul>
 *   {results.map(({config, result}, idx) => (
 *     <li key={idx}>{config.renderResult(result)}</li>
 *   ))}
 * </ul>
 * ```
 */
function useSearchStream(_ref) {
  let {
    sources,
    ctx
  } = _ref;
  const isDevEnv = (0,_streakyc_ui_storybook_toolkit__WEBPACK_IMPORTED_MODULE_1__/* .useStorybookContext */ .kC)();
  const queryRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)('');
  const $queryBus = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => kefir_bus__WEBPACK_IMPORTED_MODULE_4___default()(), []);
  const $resultsBus = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => kefir__WEBPACK_IMPORTED_MODULE_0__["default"].pool(), []);
  const emit = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(query => {
    $queryBus.emit(query);
    queryRef.current = query;
  }, [$queryBus]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    const resultStreams = sources.map(source => {
      const $sourceResult = kefir__WEBPACK_IMPORTED_MODULE_0__["default"].stream(emitter => {
        const noop = () => {};

        // We are mocking the Date.now() function, which breaks
        // Kefir debounce, so we remove debouncing in dev mode.
        const $query = isDevEnv ? $queryBus : $queryBus.throttle(200);
        const $prop = $query.flatMap(query => {
          emitter.emit({
            source,
            state: 'LOADING',
            data: []
          });
          return kefir__WEBPACK_IMPORTED_MODULE_0__["default"].fromPromise(source.fetchResults(query, ctx));
        }).map(result => {
          emitter.emit({
            source,
            state: 'LOADED',
            data: result
          });
          return null;
        }).mapErrors(err => {
          (0,_lib_log_error__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP)({
            err: new Error('failed to fetch source', {
              cause: err
            }),
            level: 'error'
          });
          emitter.emit({
            source,
            state: 'LOADED',
            data: []
          });
          return null;
        }).onValue(noop);
        return () => {
          $prop.offValue(noop);
        };
      }).toProperty(() => ({
        source,
        state: 'NOT_STARTED',
        data: []
      }));
      return $sourceResult;
    });
    const $results = kefir__WEBPACK_IMPORTED_MODULE_0__["default"].combine(resultStreams, function () {
      for (var _len = arguments.length, streams = new Array(_len), _key = 0; _key < _len; _key++) {
        streams[_key] = arguments[_key];
      }
      return streams;
    });
    $resultsBus.plug(kefir__WEBPACK_IMPORTED_MODULE_0__["default"].constant([]));
    $resultsBus.plug($results);
    $queryBus.emit(queryRef.current);
    return () => {
      $resultsBus.unplug($results);
    };
  }, [$queryBus, $resultsBus, sources, ctx, isDevEnv]);
  const $results = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => $resultsBus.toProperty(() => []), [$resultsBus]);
  return {
    emit,
    $results
  };
}

/***/ }),

/***/ 3951:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ CommandCreateBox)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44345);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35091);
/* harmony import */ var _core_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58556);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29124);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67389);
/* harmony import */ var _commandBarContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(73408);
/* harmony import */ var _searchPipelines__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1922);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_3__, _hooks__WEBPACK_IMPORTED_MODULE_4__, _searchPipelines__WEBPACK_IMPORTED_MODULE_6__]);
([_components__WEBPACK_IMPORTED_MODULE_3__, _hooks__WEBPACK_IMPORTED_MODULE_4__, _searchPipelines__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








var Step = /*#__PURE__*/function (Step) {
  Step["SET_BOX_NAME"] = "SET_BOX_NAME";
  Step["SET_PIPELINE"] = "SET_PIPELINE";
  return Step;
}(Step || {});
function CommandCreateBox() {
  const [step, setStep] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(Step.SET_BOX_NAME);
  const [boxName, setBoxName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [pipelineQuery, setPipelineQuery] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const ctx = (0,_commandBarContext__WEBPACK_IMPORTED_MODULE_5__/* .useCommandBar */ .j)();
  const {
    createBox
  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useCreateBox */ .$c)();
  const sources = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const source = {
      ..._searchPipelines__WEBPACK_IMPORTED_MODULE_6__/* .sourceConfig */ .Sr,
      fetchResults: (query, ctx) => {
        if (query === '') {
          const allPipelines = (0,_searchPipelines__WEBPACK_IMPORTED_MODULE_6__/* .fetchAllPipelines */ .G3)();
          return Promise.resolve(allPipelines.map(pipeline => ({
            key: pipeline.pipelineKey,
            score: 1,
            data: pipeline
          })));
        }
        return _searchPipelines__WEBPACK_IMPORTED_MODULE_6__/* .sourceConfig */ .Sr.fetchResults(query, ctx);
      },
      onSelectResult(_ref) {
        let {
          entry
        } = _ref;
        createBox(boxName, entry.data.pipeline.key).then(box => {
          if (box && box.key) {
            ctx.goTo(_core_routing__WEBPACK_IMPORTED_MODULE_2__/* .StreakCustomRoute */ .ld.BOX, {
              key: box.key()
            });
            ctx.closeCommandBar();
          }
        });
      }
    };
    return [source];
  }, [createBox, ctx, boxName]);
  const filterSource = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => true, []);
  if (step === Step.SET_BOX_NAME) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components__WEBPACK_IMPORTED_MODULE_3__/* .CommandBarInput */ .WQ, {
      placeholder: _services_locale_locale__WEBPACK_IMPORTED_MODULE_1__.Locale.getString('command_bar_cmd_create_box'),
      value: boxName,
      onChange: setBoxName,
      onReturn: () => setStep(Step.SET_PIPELINE),
      onEsc: () => ctx.popResult(),
      autoFocus: true
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components__WEBPACK_IMPORTED_MODULE_3__/* .CommandBarAutocomplete */ .wp, {
    icon: "arrow_back",
    sources: sources,
    filterSource: filterSource,
    value: pipelineQuery,
    onChange: setPipelineQuery,
    placeholder: _services_locale_locale__WEBPACK_IMPORTED_MODULE_1__.Locale.getString('command_bar_cmd_create_box_in_pipeline', {
      boxName
    }),
    onEsc: () => setStep(Step.SET_BOX_NAME)
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 78124:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* binding */ CommandDownloadExtension)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44345);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35091);
/* harmony import */ var _commandBarContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73408);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29124);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_3__]);
_components__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function CommandDownloadExtension() {
  const [gitRef, setGitRef] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    closeCommandBar
  } = (0,_commandBarContext__WEBPACK_IMPORTED_MODULE_2__/* .useCommandBar */ .j)();
  const labelText = _services_locale_locale__WEBPACK_IMPORTED_MODULE_1__.Locale.getString('command_bar_placeholder_extension');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components__WEBPACK_IMPORTED_MODULE_3__/* .CommandBarInput */ .WQ, {
    "aria-label": labelText,
    placeholder: labelText,
    value: gitRef,
    onChange: setGitRef,
    onEsc: closeCommandBar,
    onReturn: () => {
      window.open(`https://go/ext/${gitRef.trim()}`, '_blank');
      closeCommandBar();
    },
    autoFocus: true
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 52823:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ CommandImpersonate)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44345);
/* harmony import */ var _streakyc_ui_components_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14693);
/* harmony import */ var _lib_utils_string_isValidEmail__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1760);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35091);
/* harmony import */ var _commandBarContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73408);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29124);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_4__]);
_components__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







function CommandImpersonate() {
  const copiedEmail = useEmailFromClipboard();
  const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    closeCommandBar,
    showMessage
  } = (0,_commandBarContext__WEBPACK_IMPORTED_MODULE_3__/* .useCommandBar */ .j)();

  // Set the email from the clipboard
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    copiedEmail && setEmail(copiedEmail);
  }, [copiedEmail]);
  const labelText = _services_locale_locale__WEBPACK_IMPORTED_MODULE_2__.Locale.getString('command_bar_placeholder_impersonate');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components__WEBPACK_IMPORTED_MODULE_4__/* .CommandBarInput */ .WQ, {
    "aria-label": labelText,
    placeholder: labelText,
    value: email,
    onChange: setEmail,
    onEsc: closeCommandBar,
    onReturn: value => {
      if ((0,_lib_utils_string_isValidEmail__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(value)) {
        impersonateUser(value);
        closeCommandBar();
      } else {
        showMessage({
          message: 'Invalid email entered'
        });
        return;
      }
    },
    autoFocus: true
  });
}

// TODO: Move impersonation somewhere else, handle failed
// impersonation, etc.
function impersonateUser(email) {
  localStorage['streak_ai'] = email;
  window.open('https://gmail.com', '_blank');
}
function useEmailFromClipboard() {
  const {
    copyFromClipboard
  } = (0,_streakyc_ui_components_hooks__WEBPACK_IMPORTED_MODULE_1__/* .useClipboard */ .VP)();
  const [copiedEmail, setCopiedEmail] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    async function updateEmail() {
      const copiedText = await copyFromClipboard();
      const trimmedText = copiedText?.trim();
      if (trimmedText && (0,_lib_utils_string_isValidEmail__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(trimmedText)) {
        setCopiedEmail(trimmedText);
      }
    }
    updateEmail();
  }, [copyFromClipboard]);
  return copiedEmail;
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 94215:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ CommandToggleExperiment)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44345);
/* harmony import */ var _commandBarContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73408);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29124);
/* harmony import */ var _searchExperiment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38591);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_2__, _searchExperiment__WEBPACK_IMPORTED_MODULE_3__]);
([_components__WEBPACK_IMPORTED_MODULE_2__, _searchExperiment__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





function CommandToggleExperiment() {
  const [featureName, setFeatureName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const ctx = (0,_commandBarContext__WEBPACK_IMPORTED_MODULE_1__/* .useCommandBar */ .j)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components__WEBPACK_IMPORTED_MODULE_2__/* .CommandBarAutocomplete */ .wp, {
    icon: "arrow_back",
    sources: [_searchExperiment__WEBPACK_IMPORTED_MODULE_3__/* .sourceConfig */ .S],
    filterSource: () => true,
    value: featureName,
    onChange: setFeatureName,
    placeholder: "Toggle experiment or feature",
    onEsc: ctx.popResult,
    groupResults: true
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 26824:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* reexport safe */ _sourceConfig__WEBPACK_IMPORTED_MODULE_0__.S),
/* harmony export */   c: () => (/* reexport safe */ _sourceConfig__WEBPACK_IMPORTED_MODULE_0__.c)
/* harmony export */ });
/* harmony import */ var _sourceConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54247);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_sourceConfig__WEBPACK_IMPORTED_MODULE_0__]);
_sourceConfig__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 54247:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ sourceConfig),
/* harmony export */   c: () => (/* binding */ actionImpersonate)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17013);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _streakyc_ui_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87084);
/* harmony import */ var _streakyc_ui_components_fuzzy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99788);
/* harmony import */ var _core_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(58556);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(35091);
/* harmony import */ var _services_tracker_tracker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13778);
/* harmony import */ var _core_enabledFeaturesController__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(50452);
/* harmony import */ var _redux_storeSingleton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5568);
/* harmony import */ var _topNav_showDebugModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(87193);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(40634);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(29124);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(23184);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(66534);
/* harmony import */ var _commandImpersonate__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(52823);
/* harmony import */ var _commandDownloadExtension__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(78124);
/* harmony import */ var _commandCreateBox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(3951);
/* harmony import */ var _commandToggleExperiment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(94215);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_core_enabledFeaturesController__WEBPACK_IMPORTED_MODULE_6__, _components__WEBPACK_IMPORTED_MODULE_10__, _commandImpersonate__WEBPACK_IMPORTED_MODULE_13__, _commandDownloadExtension__WEBPACK_IMPORTED_MODULE_14__, _commandCreateBox__WEBPACK_IMPORTED_MODULE_15__, _commandToggleExperiment__WEBPACK_IMPORTED_MODULE_16__]);
([_core_enabledFeaturesController__WEBPACK_IMPORTED_MODULE_6__, _components__WEBPACK_IMPORTED_MODULE_10__, _commandImpersonate__WEBPACK_IMPORTED_MODULE_13__, _commandDownloadExtension__WEBPACK_IMPORTED_MODULE_14__, _commandCreateBox__WEBPACK_IMPORTED_MODULE_15__, _commandToggleExperiment__WEBPACK_IMPORTED_MODULE_16__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


















var ActionKey = /*#__PURE__*/function (ActionKey) {
  ActionKey["COMMAND_COPY_DEBUG_INFO"] = "COMMAND_COPY_DEBUG_INFO";
  ActionKey["COMMAND_COPY_REDUX_STATE"] = "COMMAND_COPY_REDUX_STATE";
  ActionKey["COMMAND_CREATE_BOX"] = "COMMAND_CREATE_BOX";
  ActionKey["COMMAND_EXTENSION"] = "COMMAND_EXTENSION";
  ActionKey["COMMAND_FORCE_ENTERPRISE"] = "COMMAND_FORCE_ENTERPRISE";
  ActionKey["COMMAND_IMPERSONATE"] = "COMMAND_IMPERSONATE";
  ActionKey["COMMAND_LOG_REALTIME"] = "COMMAND_LOG_REALTIME";
  ActionKey["COMMAND_LOG_USER_EVENTS"] = "COMMAND_LOG_USER_EVENTS";
  ActionKey["COMMAND_LOGOUT"] = "COMMAND_LOGOUT";
  ActionKey["COMMAND_RESET_ALL_FORCED"] = "COMMAND_RESET_ALL_FORCED";
  ActionKey["COMMAND_TOGGLE_EXPERIMENT"] = "COMMAND_TOGGLE_EXPERIMENT";
  ActionKey["GOTO_ACCOUNT"] = "GOTO_ACCOUNT";
  ActionKey["GOTO_ALL_CONTACTS"] = "GOTO_ALL_CONTACTS";
  ActionKey["GOTO_ALL_ORGS"] = "GOTO_ALL_ORGS";
  ActionKey["GOTO_MAIL_MERGES"] = "GOTO_MAIL_MERGES";
  ActionKey["GOTO_QUOTA"] = "GOTO_QUOTA";
  ActionKey["GOTO_RECENT_EMAILS"] = "GOTO_RECENT_EMAILS";
  ActionKey["GOTO_STREAK_EMAIL_SETTINGS"] = "GOTO_STREAK_EMAIL_SETTINGS";
  ActionKey["GOTO_STREAK_SETTINGS"] = "GOTO_STREAK_SETTINGS";
  ActionKey["GOTO_TEAM_SHARING"] = "GOTO_TEAM_SHARING";
  ActionKey["GOTO_TRACKED_EMAILS"] = "GOTO_TRACKED_EMAILS";
  return ActionKey;
}(ActionKey || {});
var ActionType = /*#__PURE__*/function (ActionType) {
  ActionType["REGULAR"] = "REGULAR";
  ActionType["INTERNAL"] = "INTERNAL";
  return ActionType;
}(ActionType || {});
const actionImpersonate = {
  key: ActionKey.COMMAND_IMPERSONATE,
  type: ActionType.INTERNAL,
  localeKey: 'command_bar_cmd_impersonate_user',
  action(configResult, ctx) {
    ctx.pushResult(configResult);
  },
  icon: 'people'
};
const actions = [{
  key: ActionKey.COMMAND_CREATE_BOX,
  type: ActionType.REGULAR,
  localeKey: 'command_bar_cmd_create_box',
  action(configResult, ctx) {
    ctx.pushResult(configResult);
  },
  icon: 'add'
}, {
  key: ActionKey.GOTO_STREAK_SETTINGS,
  type: ActionType.REGULAR,
  localeKey: 'command_bar_goto_streak_settings',
  action: (_, ctx) => {
    ctx.goTo(_core_routing__WEBPACK_IMPORTED_MODULE_3__/* .StreakCustomRoute */ .ld.STREAK_SETTINGS);
    ctx.closeCommandBar();
  },
  icon: 'settings'
}, actionImpersonate, {
  key: ActionKey.GOTO_ACCOUNT,
  type: ActionType.REGULAR,
  localeKey: 'top_nav_teams',
  action: (_, ctx) => {
    ctx.goTo(_core_routing__WEBPACK_IMPORTED_MODULE_3__/* .StreakCustomRoute */ .ld.ACCOUNT);
    ctx.closeCommandBar();
  },
  icon: 'manage_accounts'
}, {
  key: ActionKey.GOTO_TEAM_SHARING,
  type: ActionType.REGULAR,
  localeKey: 'command_bar_goto_team_email_sharing',
  action: (_, ctx) => {
    ctx.goTo(_core_routing__WEBPACK_IMPORTED_MODULE_3__/* .StreakCustomRoute */ .ld.PERMISSIONS);
    ctx.closeCommandBar();
  },
  icon: 'link'
}, {
  key: ActionKey.GOTO_QUOTA,
  type: ActionType.REGULAR,
  localeKey: 'command_bar_goto_quota',
  action: (_, ctx) => {
    ctx.goTo(_core_routing__WEBPACK_IMPORTED_MODULE_3__/* .StreakCustomRoute */ .ld.QUOTA);
    ctx.closeCommandBar();
  },
  icon: 'bar_chart'
}, {
  key: ActionKey.GOTO_RECENT_EMAILS,
  type: ActionType.REGULAR,
  localeKey: 'command_bar_goto_recent_emails',
  action: (_, ctx) => {
    ctx.goTo(_core_routing__WEBPACK_IMPORTED_MODULE_3__/* .StreakCustomRoute */ .ld.RECENTLY_VIEWED);
    ctx.closeCommandBar();
  },
  icon: 'drafts'
},
// TODO: Add Tracked emails
{
  key: ActionKey.GOTO_MAIL_MERGES,
  type: ActionType.REGULAR,
  localeKey: 'command_bar_goto_mail_merges',
  action: (_, ctx) => {
    ctx.goTo(_core_routing__WEBPACK_IMPORTED_MODULE_3__/* .StreakCustomRoute */ .ld.SEQUENCES_ALL);
    ctx.closeCommandBar();
  },
  icon: 'stacked_email'
}, {
  key: ActionKey.GOTO_ALL_CONTACTS,
  type: ActionType.REGULAR,
  localeKey: 'command_bar_goto_all_contacts',
  action: (_, ctx) => {
    ctx.goTo(_core_routing__WEBPACK_IMPORTED_MODULE_3__/* .StreakCustomRoute */ .ld.CONTACTS);
    ctx.closeCommandBar();
  },
  icon: 'perm_contact_calendar'
}, {
  key: ActionKey.GOTO_ALL_ORGS,
  type: ActionType.REGULAR,
  localeKey: 'command_bar_goto_all_orgs',
  action: (_, ctx) => {
    ctx.goTo(_core_routing__WEBPACK_IMPORTED_MODULE_3__/* .StreakCustomRoute */ .ld.ORGS);
    ctx.closeCommandBar();
  },
  icon: 'business'
}, {
  key: ActionKey.COMMAND_COPY_REDUX_STATE,
  type: ActionType.INTERNAL,
  localeKey: 'command_bar_cmd_copy_redux_state',
  async action(_configResult, ctx) {
    const state = _redux_storeSingleton__WEBPACK_IMPORTED_MODULE_7__.store.getState();
    const stateJson = JSON.stringify(state);
    await navigator.clipboard.writeText(stateJson);
    ctx.showMessage({
      message: _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__.Locale.getString('copied_to_clipboard')
    });
    ctx.closeCommandBar();
  },
  icon: 'data_object'
}, {
  key: ActionKey.COMMAND_TOGGLE_EXPERIMENT,
  type: ActionType.INTERNAL,
  localeKey: 'command_bar_toggle_experiment',
  action(configResult, ctx) {
    ctx.pushResult(configResult);
  },
  icon: 'science'
}, {
  key: ActionKey.COMMAND_EXTENSION,
  type: ActionType.INTERNAL,
  localeKey: 'command_bar_cmd_download_extension',
  action(configResult, ctx) {
    ctx.pushResult(configResult);
  }
}, {
  key: ActionKey.COMMAND_LOG_REALTIME,
  type: ActionType.INTERNAL,
  localeKey: 'command_bar_toggle_log_realtime_messages',
  icon: 'terminal',
  action: (_, ctx) => {
    const isEnabled = sessionStorage.getItem(_services_tracker_tracker__WEBPACK_IMPORTED_MODULE_5__.VERBOSE_REALTIME_LOGS);
    if (isEnabled) {
      sessionStorage.removeItem(_services_tracker_tracker__WEBPACK_IMPORTED_MODULE_5__.VERBOSE_REALTIME_LOGS);
      ctx.showMessage({
        message: 'Logging real-time events disabled'
      });
    } else {
      sessionStorage.setItem(_services_tracker_tracker__WEBPACK_IMPORTED_MODULE_5__.VERBOSE_REALTIME_LOGS, 'true');
      ctx.showMessage({
        message: 'Logging real-time events enabled'
      });
    }
    ctx.closeCommandBar();
  }
}, {
  key: ActionKey.COMMAND_LOG_USER_EVENTS,
  type: ActionType.INTERNAL,
  localeKey: 'command_bar_toggle_log_user_events',
  icon: 'terminal',
  action: (_, ctx) => {
    const isEnabled = sessionStorage.getItem(_services_tracker_tracker__WEBPACK_IMPORTED_MODULE_5__.VERBOSE_TRACKER_LOGS);
    if (isEnabled) {
      sessionStorage.removeItem(_services_tracker_tracker__WEBPACK_IMPORTED_MODULE_5__.VERBOSE_TRACKER_LOGS);
      ctx.showMessage({
        message: 'Logging user events disabled'
      });
    } else {
      sessionStorage.setItem(_services_tracker_tracker__WEBPACK_IMPORTED_MODULE_5__.VERBOSE_TRACKER_LOGS, 'true');
      ctx.showMessage({
        message: 'Logging user events enabled'
      });
    }
    ctx.closeCommandBar();
  }
}, {
  key: ActionKey.COMMAND_COPY_DEBUG_INFO,
  type: ActionType.INTERNAL,
  localeKey: 'command_palette_copy_debug_panel_contents',
  action: (_, ctx) => {
    copyDebugInfo();
    ctx.showMessage({
      message: 'Debug info copied to clipboard'
    });
    ctx.closeCommandBar();
  },
  icon: 'content_copy'
}, {
  key: ActionKey.COMMAND_FORCE_ENTERPRISE,
  type: ActionType.INTERNAL,
  localeKey: 'command_bar_enterprise_features',
  action: (_, ctx) => {
    _core_enabledFeaturesController__WEBPACK_IMPORTED_MODULE_6__.EnabledFeaturesInternalHelper.forceEnterprisePlanFeatures();
    ctx.showMessage({
      message: 'Enterprise features have been enabled'
    });
    ctx.closeCommandBar();
  },
  icon: 'business'
}, {
  key: ActionKey.COMMAND_RESET_ALL_FORCED,
  type: ActionType.INTERNAL,
  localeKey: 'command_bar_reset_forced_features',
  action: (_, ctx) => {
    _core_enabledFeaturesController__WEBPACK_IMPORTED_MODULE_6__.EnabledFeaturesInternalHelper.resetAllForcedFeatures();
    ctx.showMessage({
      message: 'All forced features have been reset'
    });
    ctx.closeCommandBar();
  },
  icon: 'business'
}];
const sourceConfig = (0,_utils__WEBPACK_IMPORTED_MODULE_12__/* .createSourceConfig */ .Zo)({
  nameLocaleKey: 'command_bar_tab_actions',
  categories: [_types__WEBPACK_IMPORTED_MODULE_9__/* .SearchCategory */ .B.ALL, _types__WEBPACK_IMPORTED_MODULE_9__/* .SearchCategory */ .B.ACTIONS],
  async fetchResults(query, ctx) {
    // Filter out internal commands if the user is not a Streak admin,
    // and attach the localized name to each command.
    const enabledCommands = actions.filter(item => item.type === ActionType.INTERNAL ? ctx.isUserStreakAdmin : true).map(item => ({
      ...item,
      name: _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__.Locale.getString(item.localeKey)
    }));
    if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(query)) {
      const emptyStateResults = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.take)(enabledCommands, 3).map(item => ({
        score: 1,
        key: item.key,
        data: item
      }));
      return emptyStateResults.slice(0, 3);
    }
    const matchedItems = (0,_streakyc_ui_components_fuzzy__WEBPACK_IMPORTED_MODULE_2__/* .fuzzySearch */ .s)(query, enabledCommands, ['name'], _constants__WEBPACK_IMPORTED_MODULE_11__/* .DEFAULT_FUZZYSORT_OPTIONS */ .o).map(item => ({
      score: item.score,
      key: item.data.key,
      data: {
        ...item.data,
        nameHighlighted: item.highlights.name
      }
    }));
    return matchedItems;
  },
  renderResult(_ref) {
    let {
      name,
      nameHighlighted,
      icon = 'check_circle'
    } = _ref;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_components__WEBPACK_IMPORTED_MODULE_10__/* .CmdBarEntry */ .tB, {
      leftAdornment: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_streakyc_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Icon */ .JO, {
        name: icon
      }),
      left: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_components__WEBPACK_IMPORTED_MODULE_10__/* .CmdBarEntryTitle */ .OA, {
        title: nameHighlighted ?? name
      })
      // TODO: Update with the keyboard shortcut, if any
      ,
      right: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_components__WEBPACK_IMPORTED_MODULE_10__/* .CmdBarEntryChip */ .pW, {
        text: _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__.Locale.getString('command_bar_chip_command')
      })
    });
  },
  renderAction(_ref2) {
    let {
      entry
    } = _ref2;
    switch (entry.key) {
      case ActionKey.COMMAND_IMPERSONATE:
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_commandImpersonate__WEBPACK_IMPORTED_MODULE_13__/* .CommandImpersonate */ .M, {});
      case ActionKey.COMMAND_EXTENSION:
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_commandDownloadExtension__WEBPACK_IMPORTED_MODULE_14__/* .CommandDownloadExtension */ .J, {});
      case ActionKey.COMMAND_CREATE_BOX:
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_commandCreateBox__WEBPACK_IMPORTED_MODULE_15__/* .CommandCreateBox */ .w, {});
      case ActionKey.COMMAND_TOGGLE_EXPERIMENT:
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_commandToggleExperiment__WEBPACK_IMPORTED_MODULE_16__/* .CommandToggleExperiment */ .K, {});
      default:
        break;
    }
  },
  onSelectResult(result, ctx) {
    result.entry.data.action(result, ctx);
  }
});
async function copyDebugInfo() {
  try {
    await navigator.clipboard.writeText(_topNav_showDebugModal__WEBPACK_IMPORTED_MODULE_8__/* .DebugInfoSingleton */ .q.getAll().map(debugItems => JSON.stringify(debugItems)).join(', '));
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error('Error copying debug info', e);
  }
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 27766:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ queryAlgolia)
/* harmony export */ });
/* harmony import */ var _services_algolia_algoliaClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56001);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23184);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_algolia_algoliaClient__WEBPACK_IMPORTED_MODULE_0__]);
_services_algolia_algoliaClient__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const algolia = new _services_algolia_algoliaClient__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z({
  apiKeyRefreshUrl: 'search/key'
});
function queryAlgolia(query) {
  const queryParams = {
    query,
    hitsPerPage: _constants__WEBPACK_IMPORTED_MODULE_1__/* .MAX_HITS_PER_PAGE */ .U,
    restrictSearchableAttributes: ['name'],
    attributesToRetrieve: ['name', 'caseKey', 'workflowKey', 'stageKey', 'lastUpdatedTimestamp', 'assignedToKeys']
  };
  return algolia.search('Box', queryParams);
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 41688:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* reexport safe */ _sourceConfig__WEBPACK_IMPORTED_MODULE_0__.S)
/* harmony export */ });
/* harmony import */ var _sourceConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91665);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_sourceConfig__WEBPACK_IMPORTED_MODULE_0__]);
_sourceConfig__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 91665:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ BoxEntry),
/* harmony export */   S: () => (/* binding */ sourceConfig)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17013);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44345);
/* harmony import */ var _streakyc_ui_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87084);
/* harmony import */ var _streakyc_ui_components_fuzzy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99788);
/* harmony import */ var _core_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(58556);
/* harmony import */ var _lib_streakTimelineMoment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(48726);
/* harmony import */ var _services_data_useData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(60202);
/* harmony import */ var _components_Label_Label__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(32029);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(35091);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(40634);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(66534);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(29124);
/* harmony import */ var _algoliaApi__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(27766);
/* harmony import */ var _useContactsFromKeys__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(39855);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_data_useData__WEBPACK_IMPORTED_MODULE_6__, _components__WEBPACK_IMPORTED_MODULE_11__, _algoliaApi__WEBPACK_IMPORTED_MODULE_12__, _useContactsFromKeys__WEBPACK_IMPORTED_MODULE_13__]);
([_services_data_useData__WEBPACK_IMPORTED_MODULE_6__, _components__WEBPACK_IMPORTED_MODULE_11__, _algoliaApi__WEBPACK_IMPORTED_MODULE_12__, _useContactsFromKeys__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















function fetchBoxes(query) {
  if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(query)) {
    return Promise.resolve([]);
  }
  return (0,_algoliaApi__WEBPACK_IMPORTED_MODULE_12__/* .queryAlgolia */ .$)(query).then(_ref => {
    let {
      hits
    } = _ref;
    const boxes = hits.map(algoliaBox => {
      const nameHighlighted = algoliaBox?._highlightResult?.name?.value;
      const box = {
        key: algoliaBox.caseKey,
        name: algoliaBox.name,
        pipelineKey: algoliaBox.workflowKey,
        stageKey: algoliaBox.stageKey,
        lastUpdatedTimestamp: algoliaBox.lastUpdatedTimestamp,
        assignedToSharingEntries: (algoliaBox.assignedToKeys || []).map(userKey => ({
          userKey
        }))
      };
      return {
        box,
        nameHighlighted
      };
    });

    // We remove the unused highlighted prop from fuzzySearch to favor
    // the highlights from Algolia
    return (0,_streakyc_ui_components_fuzzy__WEBPACK_IMPORTED_MODULE_3__/* .fuzzySearch */ .s)(query, boxes, ['box.name']).map(_ref2 => {
      let {
        score,
        data
      } = _ref2;
      // TODO: The BoxRaw key can be undefined
      return {
        score,
        data,
        key: `${data.box.key}`
      };
    });
  });
}
function BoxEntry(_ref3) {
  let {
    box,
    nameHighlighted,
    icon = 'assignment_ind'
  } = _ref3;
  const {
    usePipelineByKey
  } = (0,_services_data_useData__WEBPACK_IMPORTED_MODULE_6__/* .useData */ .e)();
  const pipeline = usePipelineByKey(box.pipelineKey ?? '');
  const stage = pipeline?.stages[`${box.stageKey}`];
  const stageName = stage?.name;
  const stageColor = stage?.color;
  const foregroundColor = stageColor?.foregroundColor ?? 'black';
  const backgroundColor = stageColor?.backgroundColor ?? '#eee';
  const userKeys = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    const assignedToSharingEntries = box.assignedToSharingEntries || [];
    return assignedToSharingEntries.map(_ref4 => {
      let {
        userKey
      } = _ref4;
      return userKey;
    });
  }, [box.assignedToSharingEntries]);
  const avatarContacts = (0,_useContactsFromKeys__WEBPACK_IMPORTED_MODULE_13__/* .useContactsFromKeys */ .D)(userKeys);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_components__WEBPACK_IMPORTED_MODULE_11__/* .CmdBarEntry */ .tB, {
    leftAdornment: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_streakyc_ui_components__WEBPACK_IMPORTED_MODULE_2__/* .Icon */ .JO, {
      name: icon
    }),
    left: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_components__WEBPACK_IMPORTED_MODULE_11__/* .CmdBarEntryTitle */ .OA, {
      title: nameHighlighted ?? box.name,
      subtitle: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_components_Label_Label__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        backgroundColor: backgroundColor,
        foregroundColor: foregroundColor,
        children: stageName
      })
    }),
    right: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_streakyc_ui_components__WEBPACK_IMPORTED_MODULE_2__/* .AvatarStack */ .Jh, {
        contacts: avatarContacts.map(formatAvatarContact),
        size: "xs",
        maxVisibleAvatars: 3
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_components__WEBPACK_IMPORTED_MODULE_11__/* .CmdBarEntryInfo */ .R7, {
        text: (0,_lib_streakTimelineMoment__WEBPACK_IMPORTED_MODULE_5__/* .streakTimelineMoment */ .iw)(box.lastUpdatedTimestamp)
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_components__WEBPACK_IMPORTED_MODULE_11__/* .CmdBarEntryChip */ .pW, {
        text: _services_locale_locale__WEBPACK_IMPORTED_MODULE_8__.Locale.getString('box')
      })]
    })
  });
}
const sourceConfig = (0,_utils__WEBPACK_IMPORTED_MODULE_10__/* .createSourceConfig */ .Zo)({
  nameLocaleKey: 'boxes',
  categories: [_types__WEBPACK_IMPORTED_MODULE_9__/* .SearchCategory */ .B.ALL, _types__WEBPACK_IMPORTED_MODULE_9__/* .SearchCategory */ .B.ITEMS],
  fetchResults: fetchBoxes,
  renderResult: _ref5 => {
    let {
      box,
      nameHighlighted
    } = _ref5;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(BoxEntry, {
      box: box,
      nameHighlighted: nameHighlighted
    });
  },
  onSelectResult: (_ref6, ctx) => {
    let {
      entry
    } = _ref6;
    const boxKey = entry.data.box.key;
    if (boxKey) {
      ctx.goTo(_core_routing__WEBPACK_IMPORTED_MODULE_4__/* .StreakCustomRoute */ .ld.BOX, {
        key: boxKey
      });
    }
    ctx.closeCommandBar();
  }
});
function formatAvatarContact(contact) {
  return {
    ...contact,
    name: contact.displayName ?? contact.fullName ?? contact.email ?? 'NA'
  };
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 39855:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ useContactsFromKeys)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44345);
/* harmony import */ var usehooks_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8809);
/* harmony import */ var _services_contacts_contactStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68333);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_contacts_contactStore__WEBPACK_IMPORTED_MODULE_1__]);
_services_contacts_contactStore__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function useContactsFromKeys(userKeys) {
  const [contacts, setContacts] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const isMounted = (0,usehooks_ts__WEBPACK_IMPORTED_MODULE_2__/* .useIsMounted */ .tm)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    async function fetchContacts() {
      _services_contacts_contactStore__WEBPACK_IMPORTED_MODULE_1__["default"].getContactsFromUserKeysAsMap(userKeys).then(items => {
        if (isMounted()) {
          setContacts(Object.values(items));
        }
      });
    }
    fetchContacts();
  }, [userKeys, isMounted]);
  return contacts;
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 38591:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* reexport safe */ _sourceConfig__WEBPACK_IMPORTED_MODULE_0__.S)
/* harmony export */ });
/* harmony import */ var _sourceConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84993);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_sourceConfig__WEBPACK_IMPORTED_MODULE_0__]);
_sourceConfig__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 84993:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ sourceConfig)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17013);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _streakyc_ui_components_fuzzy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99788);
/* harmony import */ var _streakyc_ui_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87084);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35091);
/* harmony import */ var _core_enabledFeaturesController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(50452);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(29124);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(23184);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(40634);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(66534);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_core_enabledFeaturesController__WEBPACK_IMPORTED_MODULE_4__, _components__WEBPACK_IMPORTED_MODULE_5__]);
([_core_enabledFeaturesController__WEBPACK_IMPORTED_MODULE_4__, _components__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const sourceConfig = (0,_utils__WEBPACK_IMPORTED_MODULE_8__/* .createSourceConfig */ .Zo)({
  nameLocaleKey: 'command_bar_experiments',
  categories: [_types__WEBPACK_IMPORTED_MODULE_7__/* .SearchCategory */ .B.ACTIONS],
  fetchResults: async query => {
    const experimentList = fetchExperiments();
    if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(query)) {
      const emptyResults = experimentList.map(item => ({
        score: 1,
        key: item.experimentKey,
        data: item
      }));
      return Promise.resolve(emptyResults);
    }
    const matches = (0,_streakyc_ui_components_fuzzy__WEBPACK_IMPORTED_MODULE_1__/* .fuzzySearch */ .s)(query, experimentList, ['experimentKey'], _constants__WEBPACK_IMPORTED_MODULE_6__/* .DEFAULT_FUZZYSORT_OPTIONS */ .o).map(_ref => {
      let {
        score,
        data,
        highlights
      } = _ref;
      return {
        score,
        key: data.experimentKey,
        data: {
          ...data,
          experimentKeyHighlighted: highlights.experimentKey
        }
      };
    });
    return Promise.resolve(matches);
  },
  renderResult: _ref2 => {
    let {
      isEnabled,
      experimentKey,
      experimentKeyHighlighted
    } = _ref2;
    const htmlTitle = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(experimentKeyHighlighted) ? experimentKey : experimentKeyHighlighted;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components__WEBPACK_IMPORTED_MODULE_5__/* .CmdBarEntry */ .tB, {
      leftAdornment: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_streakyc_ui_components__WEBPACK_IMPORTED_MODULE_2__/* .Icon */ .JO, {
        name: "science"
      }),
      left: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components__WEBPACK_IMPORTED_MODULE_5__/* .CmdBarEntryTitle */ .OA, {
        title: htmlTitle ?? ''
      }),
      right: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components__WEBPACK_IMPORTED_MODULE_5__/* .CmdBarEntryChip */ .pW, {
        text: _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__.Locale.getString(isEnabled ? 'enabled' : 'disabled'),
        color: isEnabled ? 'success' : 'muted'
      })
    });
  },
  onSelectResult: (_ref3, ctx) => {
    let {
      entry
    } = _ref3;
    const {
      experimentKey,
      isEnabled
    } = entry.data;
    if (isEnabled) {
      _core_enabledFeaturesController__WEBPACK_IMPORTED_MODULE_4__.EnabledFeaturesInternalHelper.unforceFeature(experimentKey);
      ctx.showMessage({
        message: `Experiment ${experimentKey} reset`
      });
    } else {
      _core_enabledFeaturesController__WEBPACK_IMPORTED_MODULE_4__.EnabledFeaturesInternalHelper.forceFeature(experimentKey);
      ctx.showMessage({
        message: `Experiment ${experimentKey} enabled`
      });
    }
    ctx.closeCommandBar();
    location.reload();
  }
});
function fetchExperiments() {
  const experiments = _core_enabledFeaturesController__WEBPACK_IMPORTED_MODULE_4__.EnabledFeatures.userExperiments();
  const [entriesEnabled, entriesDisabled] = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.partition)(experiments, entry => entry.isEnabled);
  const sortedEnabled = entriesEnabled.sort(compareKeys);
  const sortedDisabled = entriesDisabled.sort(compareKeys);
  return [...sortedEnabled, ...sortedDisabled];
}
function compareKeys(a, b) {
  return a.experimentKey.localeCompare(b.experimentKey);
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 85003:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* reexport safe */ _sourceConfig__WEBPACK_IMPORTED_MODULE_0__.S)
/* harmony export */ });
/* harmony import */ var _sourceConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14590);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_sourceConfig__WEBPACK_IMPORTED_MODULE_0__]);
_sourceConfig__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 14590:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ sourceConfig)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17013);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _streakyc_ui_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87084);
/* harmony import */ var _streakyc_ui_components_fuzzy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99788);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35091);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29124);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(40634);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(66534);
/* harmony import */ var _helpArticles_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(77237);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(23184);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_4__]);
_components__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










const sourceConfig = (0,_utils__WEBPACK_IMPORTED_MODULE_6__/* .createSourceConfig */ .Zo)({
  nameLocaleKey: 'help',
  categories: [_types__WEBPACK_IMPORTED_MODULE_5__/* .SearchCategory */ .B.ALL, _types__WEBPACK_IMPORTED_MODULE_5__/* .SearchCategory */ .B.HELP],
  fetchResults: async query => {
    if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(query)) {
      return Promise.resolve([]);
    }
    const matches = (0,_streakyc_ui_components_fuzzy__WEBPACK_IMPORTED_MODULE_2__/* .fuzzySearch */ .s)(query, _helpArticles_json__WEBPACK_IMPORTED_MODULE_7__, ['title', 'description']).map(item => ({
      score: item.score,
      key: item.data.url,
      data: {
        ...item.data,
        titleHighlighted: item.highlights.title,
        descriptionHighlighted: item.highlights.description
      }
    }), _constants__WEBPACK_IMPORTED_MODULE_8__/* .DEFAULT_FUZZYSORT_OPTIONS */ .o);
    return Promise.resolve(matches);
  },
  renderResult: result => {
    const htmlTitle = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(result.titleHighlighted) ? result.title : result.titleHighlighted;
    const htmlDescription = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(result.descriptionHighlighted) ? result.description : result.descriptionHighlighted;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components__WEBPACK_IMPORTED_MODULE_4__/* .CmdBarEntry */ .tB, {
      leftAdornment: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_streakyc_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Icon */ .JO, {
        name: "help_outline"
      }),
      left: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components__WEBPACK_IMPORTED_MODULE_4__/* .CmdBarEntryTitle */ .OA, {
        title: htmlTitle ?? '',
        subtitle: htmlDescription ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components__WEBPACK_IMPORTED_MODULE_4__/* .HighlightedText */ .hl, {
          html: htmlDescription
        }) : null
      }),
      right: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components__WEBPACK_IMPORTED_MODULE_4__/* .CmdBarEntryChip */ .pW, {
        text: _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__.Locale.getString('command_bar_chip_help_article')
      })
    });
  },
  onSelectResult: (_ref, ctx) => {
    let {
      entry
    } = _ref;
    window.open(entry.data.url, '_blank');
    ctx.closeCommandBar();
  }
});
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 42417:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ queryAlgolia)
/* harmony export */ });
/* harmony import */ var _services_algolia_algoliaClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56001);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23184);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_algolia_algoliaClient__WEBPACK_IMPORTED_MODULE_0__]);
_services_algolia_algoliaClient__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const algolia = new _services_algolia_algoliaClient__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z({
  apiKeyRefreshUrl: 'teams/organizations/search/key'
});
function queryAlgolia(query) {
  const queryParams = {
    query,
    hitsPerPage: _constants__WEBPACK_IMPORTED_MODULE_1__/* .MAX_HITS_PER_PAGE */ .U,
    restrictSearchableAttributes: ['name', 'domains'],
    attributesToRetrieve: ['key', 'teamKey', 'name', 'domains', 'relatedBoxesByPipeline'],
    attributesToHighlight: ['name', 'domains']
  };
  return algolia.search('TeamOrganization', queryParams);
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 95927:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cf: () => (/* reexport safe */ _sourceConfig__WEBPACK_IMPORTED_MODULE_0__.Cf),
/* harmony export */   Sr: () => (/* reexport safe */ _sourceConfig__WEBPACK_IMPORTED_MODULE_0__.Sr),
/* harmony export */   jy: () => (/* reexport safe */ _sourceConfig__WEBPACK_IMPORTED_MODULE_0__.jy)
/* harmony export */ });
/* harmony import */ var _sourceConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5771);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_sourceConfig__WEBPACK_IMPORTED_MODULE_0__]);
_sourceConfig__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5771:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cf: () => (/* binding */ OrganizationEntry),
/* harmony export */   Sr: () => (/* binding */ sourceConfig),
/* harmony export */   jy: () => (/* binding */ getTeamOrgByKey)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17013);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _streakyc_ui_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87084);
/* harmony import */ var _streakyc_ui_components_fuzzy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99788);
/* harmony import */ var _streakyc_models_teamContactAndOrg_teamContactAndOrgCache__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41675);
/* harmony import */ var _core_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(58556);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(35091);
/* harmony import */ var _lib_utils_isNotNil__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(72086);
/* harmony import */ var _lib_utils_useModelLatestObject__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(72029);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(40634);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(66534);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(29124);
/* harmony import */ var _algoliaApi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(42417);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_streakyc_models_teamContactAndOrg_teamContactAndOrgCache__WEBPACK_IMPORTED_MODULE_3__, _components__WEBPACK_IMPORTED_MODULE_9__, _algoliaApi__WEBPACK_IMPORTED_MODULE_10__]);
([_streakyc_models_teamContactAndOrg_teamContactAndOrgCache__WEBPACK_IMPORTED_MODULE_3__, _components__WEBPACK_IMPORTED_MODULE_9__, _algoliaApi__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const sourceConfig = (0,_utils__WEBPACK_IMPORTED_MODULE_8__/* .createSourceConfig */ .Zo)({
  nameLocaleKey: 'organizations',
  categories: [_types__WEBPACK_IMPORTED_MODULE_7__/* .SearchCategory */ .B.ALL, _types__WEBPACK_IMPORTED_MODULE_7__/* .SearchCategory */ .B.ITEMS],
  fetchResults: async query => {
    if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(query)) {
      return Promise.resolve([]);
    }
    return (0,_algoliaApi__WEBPACK_IMPORTED_MODULE_10__/* .queryAlgolia */ .$)(query).then(_ref => {
      let {
        hits
      } = _ref;
      const orgList = hits.map(item => {
        const teamOrg = {
          key: item.key,
          name: item.name,
          domains: item.domains || []
        };
        const domainsHighlighted = item._highlightResult?.domains ?? [];
        return teamOrg ? {
          teamOrg,
          ...item,
          nameHighlighted: item?._highlightResult?.name?.value,
          domainsHighlighted: domainsHighlighted.map(item => item.value),
          relatedBoxesByPipeline: item.relatedBoxesByPipeline ?? []
        } : null;
      }).filter(_lib_utils_isNotNil__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z);

      // We remove the unused highlighted prop from fuzzySearch to favor
      // the highlights from Algolia
      return (0,_streakyc_ui_components_fuzzy__WEBPACK_IMPORTED_MODULE_2__/* .fuzzySearch */ .s)(query, orgList, ['name']).map(_ref2 => {
        let {
          score,
          data
        } = _ref2;
        return {
          score,
          data,
          key: data.teamOrg.key
        };
      });
    });
  },
  renderResult: props => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(OrganizationEntry, {
    ...props
  }),
  onSelectResult: (_ref3, ctx) => {
    let {
      entry
    } = _ref3;
    ctx.goTo(_core_routing__WEBPACK_IMPORTED_MODULE_4__/* .StreakCustomRoute */ .ld.ORG, {
      key: entry.data.teamOrg.key
    });
    ctx.closeCommandBar();
  }
});
function OrganizationEntry(_ref4) {
  let {
    teamOrg,
    nameHighlighted,
    domainsHighlighted,
    relatedBoxesByPipeline,
    icon
  } = _ref4;
  // In some cases, the teamOrg object may not be available in the cache,
  // so we enrich it to have all the available information.
  const orgModel = _streakyc_models_teamContactAndOrg_teamContactAndOrgCache__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.getTeamOrgSync(teamOrg.key);
  const teamOrgRaw = (0,_lib_utils_useModelLatestObject__WEBPACK_IMPORTED_MODULE_6__/* .useModelLatestObject */ ._)(orgModel);
  const teamOrgObject = {
    ...teamOrg,
    ...teamOrgRaw
  };
  const orgName = teamOrgObject.name ?? '';
  const nameHtml = nameHighlighted ?? orgName ?? '';
  const domainHtml = (domainsHighlighted ?? teamOrgObject.domains ?? []).join(', ') ?? '';
  const pipelineCount = relatedBoxesByPipeline?.length ?? 0;
  const formattedPipelineCount = _services_locale_locale__WEBPACK_IMPORTED_MODULE_5__.Locale.getString('command_bar_in_count_pipelines', {
    count: pipelineCount
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components__WEBPACK_IMPORTED_MODULE_9__/* .CmdBarEntry */ .tB, {
    leftAdornment: icon ?? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_streakyc_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Avatar */ .qE, {
      name: orgName,
      shape: "square",
      color: "google/green",
      imageUrl: teamOrgObject ? teamOrgObject.logoURL : null
    }),
    left: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components__WEBPACK_IMPORTED_MODULE_9__/* .CmdBarEntryTitle */ .OA, {
      title: nameHtml,
      subtitle: domainHtml ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components__WEBPACK_IMPORTED_MODULE_9__/* .HighlightedText */ .hl, {
        html: domainHtml
      }) : null
    }),
    right: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
      children: [pipelineCount > 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components__WEBPACK_IMPORTED_MODULE_9__/* .CmdBarEntryInfo */ .R7, {
        text: formattedPipelineCount
      }) : null, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components__WEBPACK_IMPORTED_MODULE_9__/* .CmdBarEntryChip */ .pW, {
        text: _services_locale_locale__WEBPACK_IMPORTED_MODULE_5__.Locale.getString('teamOrg')
      })]
    })
  });
}
function getTeamOrgByKey(organizationKey) {
  const teamOrgModel = _streakyc_models_teamContactAndOrg_teamContactAndOrgCache__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.getTeamOrgSync(organizationKey);
  return teamOrgModel ? teamOrgModel.getLatestObject() : null;
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1922:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G3: () => (/* reexport safe */ _sourceConfig__WEBPACK_IMPORTED_MODULE_0__.G3),
/* harmony export */   Sr: () => (/* reexport safe */ _sourceConfig__WEBPACK_IMPORTED_MODULE_0__.Sr)
/* harmony export */ });
/* harmony import */ var _sourceConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65229);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_sourceConfig__WEBPACK_IMPORTED_MODULE_0__]);
_sourceConfig__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 65229:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G3: () => (/* binding */ fetchAllPipelines),
/* harmony export */   Sr: () => (/* binding */ sourceConfig),
/* harmony export */   nE: () => (/* binding */ PipelineEntry)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17013);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _streakyc_models_pipeline_pipelineUtils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(68993);
/* harmony import */ var _streakyc_ui_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87084);
/* harmony import */ var _streakyc_ui_components_fuzzy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99788);
/* harmony import */ var _core_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(58556);
/* harmony import */ var _services_data_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38672);
/* harmony import */ var _services_data_useData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(60202);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(35091);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(66534);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(40634);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(29124);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(23184);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_data_data__WEBPACK_IMPORTED_MODULE_4__, _services_data_useData__WEBPACK_IMPORTED_MODULE_5__, _components__WEBPACK_IMPORTED_MODULE_9__]);
([_services_data_data__WEBPACK_IMPORTED_MODULE_4__, _services_data_useData__WEBPACK_IMPORTED_MODULE_5__, _components__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













function fetchAllPipelines() {
  return _services_data_data__WEBPACK_IMPORTED_MODULE_4__/* .Data */ .V.getAllPipelines().map(pipeline => {
    const pipelineRaw = pipeline.getLatestObject();
    return {
      pipeline: pipelineRaw,
      name: pipelineRaw.name,
      pipelineKey: pipelineRaw.key
    };
  });
}
function fetchPipelines(query) {
  if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(query)) {
    return Promise.resolve([]);
  }
  const pipelines = fetchAllPipelines();
  const matches = (0,_streakyc_ui_components_fuzzy__WEBPACK_IMPORTED_MODULE_2__/* .fuzzySearch */ .s)(query, pipelines, ['name'], _constants__WEBPACK_IMPORTED_MODULE_10__/* .DEFAULT_FUZZYSORT_OPTIONS */ .o).map(item => ({
    score: item.score,
    key: item.data.pipelineKey,
    data: {
      ...item.data,
      nameHighlighted: item.highlights.name
    }
  }));
  return Promise.resolve(matches);
}
function PipelineEntry(_ref) {
  let {
    pipeline,
    nameHighlighted,
    icon
  } = _ref;
  const {
    useUserSettings
  } = (0,_services_data_useData__WEBPACK_IMPORTED_MODULE_5__/* .useData */ .e)();
  const userSettings = useUserSettings();
  const titleHtml = nameHighlighted ?? pipeline.name;
  const pipelineLabel = _services_locale_locale__WEBPACK_IMPORTED_MODULE_6__.Locale.getString('pipeline');
  const pipelineIcon = (0,_streakyc_models_pipeline_pipelineUtils__WEBPACK_IMPORTED_MODULE_12__/* .getPipelineIcon */ .K)(userSettings, pipeline);
  const boxCount = formatBoxCount(pipeline.boxCountHint);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components__WEBPACK_IMPORTED_MODULE_9__/* .CmdBarEntry */ .tB, {
    leftAdornment: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_streakyc_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Icon */ .JO, {
      name: icon ?? pipelineIcon
    }),
    left: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components__WEBPACK_IMPORTED_MODULE_9__/* .CmdBarEntryTitle */ .OA, {
      title: titleHtml,
      subtitle: boxCount ? _services_locale_locale__WEBPACK_IMPORTED_MODULE_6__.Locale.getString('boxes_count', {
        count: boxCount
      }) : null
    }),
    right: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components__WEBPACK_IMPORTED_MODULE_9__/* .CmdBarEntryChip */ .pW, {
        text: pipelineLabel
      })
    })
  });
}
const sourceConfig = (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .createSourceConfig */ .Zo)({
  nameLocaleKey: 'pipelines',
  categories: [_types__WEBPACK_IMPORTED_MODULE_8__/* .SearchCategory */ .B.ALL, _types__WEBPACK_IMPORTED_MODULE_8__/* .SearchCategory */ .B.ITEMS],
  fetchResults: fetchPipelines,
  renderResult: _ref2 => {
    let {
      pipeline,
      name,
      nameHighlighted
    } = _ref2;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(PipelineEntry, {
      pipeline: pipeline,
      name: name,
      nameHighlighted: nameHighlighted
    });
  },
  onSelectResult: (_ref3, ctx) => {
    let {
      entry
    } = _ref3;
    ctx.goTo(_core_routing__WEBPACK_IMPORTED_MODULE_3__/* .StreakCustomRoute */ .ld.PIPELINE, {
      key: entry.data.pipeline.key
    });
    ctx.closeCommandBar();
  }
});

// TODO: Implement smarter formatting
function formatBoxCount(count) {
  return Intl.NumberFormat(_services_locale_locale__WEBPACK_IMPORTED_MODULE_6__.Locale.getIntlGmailLocale()).format(count);
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 52693:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O6: () => (/* reexport safe */ _sourceConfig__WEBPACK_IMPORTED_MODULE_1__.O),
/* harmony export */   Sr: () => (/* reexport safe */ _sourceConfig__WEBPACK_IMPORTED_MODULE_1__.S),
/* harmony export */   h7: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_0__.h7)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69335);
/* harmony import */ var _sourceConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76437);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_sourceConfig__WEBPACK_IMPORTED_MODULE_1__]);
_sourceConfig__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 76437:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ sourceConfigLimited),
/* harmony export */   S: () => (/* binding */ sourceConfig)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17013);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _streakyc_ui_components_fuzzy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99788);
/* harmony import */ var _core_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58556);
/* harmony import */ var _lib_utils_isNotNil__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(72086);
/* harmony import */ var _services_data_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38672);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(66534);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(40634);
/* harmony import */ var _searchBoxes_sourceConfig__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(91665);
/* harmony import */ var _searchPipelines_sourceConfig__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(65229);
/* harmony import */ var _searchTeamContacts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(43117);
/* harmony import */ var _searchSavedViews__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(14285);
/* harmony import */ var _searchOrganizations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(95927);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(69335);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_data_data__WEBPACK_IMPORTED_MODULE_3__, _searchBoxes_sourceConfig__WEBPACK_IMPORTED_MODULE_6__, _searchPipelines_sourceConfig__WEBPACK_IMPORTED_MODULE_7__, _searchTeamContacts__WEBPACK_IMPORTED_MODULE_8__, _searchSavedViews__WEBPACK_IMPORTED_MODULE_9__, _searchOrganizations__WEBPACK_IMPORTED_MODULE_10__]);
([_services_data_data__WEBPACK_IMPORTED_MODULE_3__, _searchBoxes_sourceConfig__WEBPACK_IMPORTED_MODULE_6__, _searchPipelines_sourceConfig__WEBPACK_IMPORTED_MODULE_7__, _searchTeamContacts__WEBPACK_IMPORTED_MODULE_8__, _searchSavedViews__WEBPACK_IMPORTED_MODULE_9__, _searchOrganizations__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














const recentsConfig = {
  [_core_routing__WEBPACK_IMPORTED_MODULE_2__/* .StreakCustomRoute */ .ld.BOX]: {
    fetchResults(query, ctx) {
      const entries = (0,_utils__WEBPACK_IMPORTED_MODULE_11__/* .getRecentRoutes */ .lC)(ctx).filter((0,_core_routing__WEBPACK_IMPORTED_MODULE_2__/* .buildIsRoutePredicate */ .hJ)(_core_routing__WEBPACK_IMPORTED_MODULE_2__/* .StreakCustomRoute */ .ld.BOX)).map(getBoxEntryFromRoute).filter(_lib_utils_isNotNil__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z);
      if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(query)) {
        return Promise.resolve(entries.map(entry => ({
          key: entry.data.key,
          score: 1,
          data: entry
        })));
      }
      const highlightedEntries = (0,_streakyc_ui_components_fuzzy__WEBPACK_IMPORTED_MODULE_1__/* .fuzzySearch */ .s)(query, entries, ['data.name']).map(item => ({
        key: item.data.data.key,
        score: item.score,
        data: {
          ...item.data,
          highlights: (0,_streakyc_ui_components_fuzzy__WEBPACK_IMPORTED_MODULE_1__/* .fuzzyUnnest */ .b)(item.highlights, ['data'])
        }
      }));
      return Promise.resolve(highlightedEntries);
    },
    renderResult(result) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_searchBoxes_sourceConfig__WEBPACK_IMPORTED_MODULE_6__/* .BoxEntry */ .H, {
        box: result.data,
        nameHighlighted: result.highlights?.name,
        icon: "history"
      });
    }
  },
  [_core_routing__WEBPACK_IMPORTED_MODULE_2__/* .StreakCustomRoute */ .ld.PIPELINE]: {
    fetchResults(query, ctx) {
      const entries = (0,_utils__WEBPACK_IMPORTED_MODULE_11__/* .getRecentRoutes */ .lC)(ctx).filter((0,_core_routing__WEBPACK_IMPORTED_MODULE_2__/* .buildIsRoutePredicate */ .hJ)(_core_routing__WEBPACK_IMPORTED_MODULE_2__/* .StreakCustomRoute */ .ld.PIPELINE)).map(getPipelineEntryFromRoute).filter(_lib_utils_isNotNil__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z);
      if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(query)) {
        return Promise.resolve(entries.map(entry => ({
          key: entry.data.key,
          score: 1,
          data: entry
        })));
      }
      const highlightedEntries = (0,_streakyc_ui_components_fuzzy__WEBPACK_IMPORTED_MODULE_1__/* .fuzzySearch */ .s)(query, entries, ['data.name']).map(item => ({
        key: item.data.data.key,
        score: item.score,
        data: {
          ...item.data,
          highlights: (0,_streakyc_ui_components_fuzzy__WEBPACK_IMPORTED_MODULE_1__/* .fuzzyUnnest */ .b)(item.highlights, 'data')
        }
      }));
      return Promise.resolve(highlightedEntries);
    },
    renderResult(result) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_searchPipelines_sourceConfig__WEBPACK_IMPORTED_MODULE_7__/* .PipelineEntry */ .nE, {
        pipeline: {
          ...result.data,
          fields: []
        },
        name: result.data.name,
        nameHighlighted: result.highlights?.name,
        icon: "history"
      });
    }
  },
  [_core_routing__WEBPACK_IMPORTED_MODULE_2__/* .StreakCustomRoute */ .ld.CONTACT]: {
    fetchResults(query, ctx) {
      const entries = (0,_utils__WEBPACK_IMPORTED_MODULE_11__/* .getRecentRoutes */ .lC)(ctx).filter((0,_core_routing__WEBPACK_IMPORTED_MODULE_2__/* .buildIsRoutePredicate */ .hJ)(_core_routing__WEBPACK_IMPORTED_MODULE_2__/* .StreakCustomRoute */ .ld.CONTACT)).map(getContactEntryFromRoute).filter(_lib_utils_isNotNil__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z);
      if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(query)) {
        return Promise.resolve(entries.map(entry => ({
          key: entry.data.key,
          score: 1,
          data: entry
        })));
      }

      // TODO: Highlight email addresses
      // TODO: We need to add how many boxes the contact is in?
      const highlightedEntries = (0,_streakyc_ui_components_fuzzy__WEBPACK_IMPORTED_MODULE_1__/* .fuzzySearch */ .s)(query, entries, ['data.givenName', 'data.familyName']).map(item => ({
        key: item.data.data.key,
        score: item.score,
        data: {
          ...item.data,
          highlights: (0,_streakyc_ui_components_fuzzy__WEBPACK_IMPORTED_MODULE_1__/* .fuzzyUnnest */ .b)(item.highlights, ['data'])
        }
      }));
      return Promise.resolve(highlightedEntries);
    },
    renderResult(result) {
      const contactRaw = {
        ...result.data,
        contactLinks: [],
        orgLinks: []
      };
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_searchTeamContacts__WEBPACK_IMPORTED_MODULE_8__/* .ContactEntry */ .TG, {
        familyNameHighlighted: result.highlights?.familyName,
        givenNameHighlighted: result.highlights?.givenName,
        contact: contactRaw,
        icon: "history"
      });
    }
  },
  [_core_routing__WEBPACK_IMPORTED_MODULE_2__/* .StreakCustomRoute */ .ld.PIPELINE_SAVEDVIEW]: {
    fetchResults(query, ctx) {
      const savedViewsByKey = (0,_searchSavedViews__WEBPACK_IMPORTED_MODULE_9__/* .getSavedViewsMap */ .n)(ctx);
      const entries = (0,_utils__WEBPACK_IMPORTED_MODULE_11__/* .getRecentRoutes */ .lC)(ctx).filter((0,_core_routing__WEBPACK_IMPORTED_MODULE_2__/* .buildIsRoutePredicate */ .hJ)(_core_routing__WEBPACK_IMPORTED_MODULE_2__/* .StreakCustomRoute */ .ld.PIPELINE_SAVEDVIEW)).map(route => {
        const data = savedViewsByKey[route.params.viewKey];
        return data ? {
          routeId: _core_routing__WEBPACK_IMPORTED_MODULE_2__/* .StreakCustomRoute */ .ld.PIPELINE_SAVEDVIEW,
          route,
          data
        } : null;
      }).filter(_lib_utils_isNotNil__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z);
      if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(query)) {
        return Promise.resolve(entries.map(entry => ({
          key: entry.data.savedView.viewKey,
          score: 1,
          data: entry
        })));
      }
      const highlightedEntries = (0,_streakyc_ui_components_fuzzy__WEBPACK_IMPORTED_MODULE_1__/* .fuzzySearch */ .s)(query, entries, ['data.savedView.displayName', 'data.pipeline.name']).map(item => ({
        key: item.data.data.savedView.viewKey,
        score: item.score,
        data: {
          ...item.data,
          highlights: (0,_streakyc_ui_components_fuzzy__WEBPACK_IMPORTED_MODULE_1__/* .fuzzyUnnest */ .b)(item.highlights, ['data'])
        }
      }));
      return Promise.resolve(highlightedEntries);
    },
    renderResult(result) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_searchSavedViews__WEBPACK_IMPORTED_MODULE_9__/* .SavedViewEntry */ .V, {
        savedView: result.data.savedView,
        pipeline: result.data.pipeline,
        nameHighlighted: result.highlights?.['savedView.displayName'],
        pipelineNameHighlighted: result.highlights?.['pipeline.name'],
        icon: "history"
      });
    }
  },
  [_core_routing__WEBPACK_IMPORTED_MODULE_2__/* .StreakCustomRoute */ .ld.ORG]: {
    fetchResults(query, ctx) {
      const entries = (0,_utils__WEBPACK_IMPORTED_MODULE_11__/* .getRecentRoutes */ .lC)(ctx).filter((0,_core_routing__WEBPACK_IMPORTED_MODULE_2__/* .buildIsRoutePredicate */ .hJ)(_core_routing__WEBPACK_IMPORTED_MODULE_2__/* .StreakCustomRoute */ .ld.ORG)).map(getOrganizationEntryFromRoute).filter(_lib_utils_isNotNil__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z);
      if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(query)) {
        return Promise.resolve(entries.map(entry => ({
          key: entry.data.key,
          score: 1,
          data: entry
        })));
      }
      // TODO: Highlight domains
      const highlightedEntries = (0,_streakyc_ui_components_fuzzy__WEBPACK_IMPORTED_MODULE_1__/* .fuzzySearch */ .s)(query, entries, ['data.name']).map(item => ({
        key: item.data.data.key,
        score: item.score,
        data: {
          ...item.data,
          highlights: (0,_streakyc_ui_components_fuzzy__WEBPACK_IMPORTED_MODULE_1__/* .fuzzyUnnest */ .b)(item.highlights, ['data'])
        }
      }));
      return Promise.resolve(highlightedEntries);
    },
    renderResult(result) {
      const {
        data: teamOrg,
        highlights
      } = result;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_searchOrganizations__WEBPACK_IMPORTED_MODULE_10__/* .OrganizationEntry */ .Cf, {
        teamOrg: teamOrg,
        nameHighlighted: highlights?.name,
        icon: "history"
      });
    }
  }
};
async function fetchRecentItems(query, ctx) {
  const promises = Object.values(recentsConfig).map(config => config.fetchResults(query, ctx));
  const result = await Promise.all(promises).then(results => results.flat());
  return (0,_utils__WEBPACK_IMPORTED_MODULE_11__/* .getRecentRoutes */ .lC)(ctx).map(route => result.find(r => r.data.route.params === route.params)).filter(_lib_utils_isNotNil__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z);
}
const sourceConfig = (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .createSourceConfig */ .Zo)({
  priority: 2,
  nameLocaleKey: 'command_bar_tab_recents',
  categories: [_types__WEBPACK_IMPORTED_MODULE_5__/* .SearchCategory */ .B.RECENT, _types__WEBPACK_IMPORTED_MODULE_5__/* .SearchCategory */ .B.ITEMS],
  async fetchResults(query, ctx) {
    return fetchRecentItems(query, ctx);
  },
  renderResult(result) {
    switch (result.routeId) {
      case _core_routing__WEBPACK_IMPORTED_MODULE_2__/* .StreakCustomRoute */ .ld.BOX:
        return recentsConfig[result.routeId].renderResult(result);
      case _core_routing__WEBPACK_IMPORTED_MODULE_2__/* .StreakCustomRoute */ .ld.PIPELINE:
        return recentsConfig[result.routeId].renderResult(result);
      case _core_routing__WEBPACK_IMPORTED_MODULE_2__/* .StreakCustomRoute */ .ld.PIPELINE_SAVEDVIEW:
        return recentsConfig[result.routeId].renderResult(result);
      case _core_routing__WEBPACK_IMPORTED_MODULE_2__/* .StreakCustomRoute */ .ld.CONTACT:
        return recentsConfig[result.routeId].renderResult(result);
      case _core_routing__WEBPACK_IMPORTED_MODULE_2__/* .StreakCustomRoute */ .ld.ORG:
        return recentsConfig[result.routeId].renderResult(result);
      default:
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {});
    }
  },
  onSelectResult(_ref, ctx) {
    let {
      entry
    } = _ref;
    const {
      route
    } = entry.data;
    ctx.goTo(route.routeId, route.params);
    ctx.closeCommandBar();
  }
});
const sourceConfigLimited = (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .createSourceConfig */ .Zo)({
  ...sourceConfig,
  categories: [_types__WEBPACK_IMPORTED_MODULE_5__/* .SearchCategory */ .B.ALL],
  async fetchResults(query, ctx) {
    const sortedResults = await fetchRecentItems(query, ctx);
    if (query === '') {
      return sortedResults.slice(0, 3);
    }
    return sortedResults;
  }
});
function getPipelineByKey(pipelineKey) {
  const pipeline = _services_data_data__WEBPACK_IMPORTED_MODULE_3__/* .Data */ .V.getPipeline(pipelineKey);
  return pipeline ? pipeline.getLatestObject() : null;
}
function getBoxByKey(boxKey) {
  const box = _services_data_data__WEBPACK_IMPORTED_MODULE_3__/* .Data */ .V.getBox(boxKey);
  return box ? box.getLatestObject() : null;
}
function getBoxEntryFromRoute(route) {
  const box = getBoxByKey(route.params.key);
  return box ? {
    routeId: _core_routing__WEBPACK_IMPORTED_MODULE_2__/* .StreakCustomRoute */ .ld.BOX,
    route,
    data: box
  } : null;
}
function getPipelineEntryFromRoute(route) {
  const pipeline = getPipelineByKey(route.params.key);
  return pipeline ? {
    routeId: _core_routing__WEBPACK_IMPORTED_MODULE_2__/* .StreakCustomRoute */ .ld.PIPELINE,
    route,
    data: pipeline
  } : null;
}
function getContactEntryFromRoute(route) {
  const data = (0,_searchTeamContacts__WEBPACK_IMPORTED_MODULE_8__/* .getContactByKey */ .aF)(route.params.key);
  return data ? {
    routeId: _core_routing__WEBPACK_IMPORTED_MODULE_2__/* .StreakCustomRoute */ .ld.CONTACT,
    route,
    data
  } : null;
}
function getOrganizationEntryFromRoute(route) {
  const data = (0,_searchOrganizations__WEBPACK_IMPORTED_MODULE_10__/* .getTeamOrgByKey */ .jy)(route.params.key);
  return data ? {
    routeId: route.routeId,
    route,
    data
  } : null;
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 69335:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h7: () => (/* binding */ addToRecentRoutes),
/* harmony export */   lC: () => (/* binding */ getRecentRoutes)
/* harmony export */ });
/* unused harmony export RECENT_ROUTES_STORAGE_KEY */
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17013);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _streakyc_common_core_hooks_useLocalStorageValue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81883);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(66534);



const NUM_RECENT_ROUTES = 10;
const RECENT_ROUTES_STORAGE_KEY = 'streak__recentRoutes';
function addToRecentRoutes(route) {
  const commandBarStoredValue = (0,_streakyc_common_core_hooks_useLocalStorageValue__WEBPACK_IMPORTED_MODULE_1__/* .LEGACY_HOOK_getLocalStorageValue */ .Wd)(_utils__WEBPACK_IMPORTED_MODULE_2__/* .COMMAND_BAR_STORAGE_KEY */ .PM, {});
  const recentRoutes = commandBarStoredValue?.[RECENT_ROUTES_STORAGE_KEY] || [];

  // Only store the most recent NUM_RECENT_ROUTES and remove duplicates
  const latestRoutes = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.take)([route, ...recentRoutes], NUM_RECENT_ROUTES);
  const uniqueRoutes = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.uniqBy)(latestRoutes, item => JSON.stringify(item));
  (0,_streakyc_common_core_hooks_useLocalStorageValue__WEBPACK_IMPORTED_MODULE_1__/* .LEGACY_HOOK_setLocalStorageValue */ .iT)(_utils__WEBPACK_IMPORTED_MODULE_2__/* .COMMAND_BAR_STORAGE_KEY */ .PM, {
    ...commandBarStoredValue,
    [RECENT_ROUTES_STORAGE_KEY]: uniqueRoutes
  });
}
function getRecentRoutes(ctx) {
  return ctx.getItem(RECENT_ROUTES_STORAGE_KEY) || [];
}

/***/ }),

/***/ 11995:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ getSavedViews)
/* harmony export */ });
/* harmony import */ var _services_data_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38672);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_data_data__WEBPACK_IMPORTED_MODULE_0__]);
_services_data_data__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

function getSavedViews(ctx) {
  if (ctx.cache.has('savedViews')) {
    return ctx.cache.get('savedViews');
  }
  const savedViews = _services_data_data__WEBPACK_IMPORTED_MODULE_0__/* .Data */ .V.getAllPipelines().flatMap(pipelineModel => {
    const pipeline = pipelineModel.getLatestObject();
    return pipelineModel.getSavedViewsManager().getOrderedSavedViews().map(savedViewModel => {
      // Converting the entire savedView to SavedViewRaw is
      // ~30x slower than just getting the fields we need.
      const savedView = {
        viewKey: savedViewModel.getViewKey(),
        displayName: savedViewModel.displayNameText(),
        filterSettings: savedViewModel.getFilterSettings(),
        sortSettings: savedViewModel.getSortSettings()
      };
      return {
        pipeline,
        savedView
      };
    });
  });
  ctx.cache.set('savedViews', savedViews);
  return savedViews;
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 14285:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Sr: () => (/* reexport safe */ _sourceConfig__WEBPACK_IMPORTED_MODULE_0__.Sr),
/* harmony export */   V: () => (/* reexport safe */ _sourceConfig__WEBPACK_IMPORTED_MODULE_0__.V),
/* harmony export */   n: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.n)
/* harmony export */ });
/* harmony import */ var _sourceConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14128);
/* harmony import */ var _getSavedViews__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11995);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40892);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_sourceConfig__WEBPACK_IMPORTED_MODULE_0__, _getSavedViews__WEBPACK_IMPORTED_MODULE_1__, _utils__WEBPACK_IMPORTED_MODULE_2__]);
([_sourceConfig__WEBPACK_IMPORTED_MODULE_0__, _getSavedViews__WEBPACK_IMPORTED_MODULE_1__, _utils__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 14128:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Sr: () => (/* binding */ sourceConfig),
/* harmony export */   V: () => (/* binding */ SavedViewEntry)
/* harmony export */ });
/* unused harmony export fetchResults */
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17013);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _streakyc_models_pipeline_savedViews_filterSettingsManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15668);
/* harmony import */ var _streakyc_models_pipeline_savedViews_sortSettingsManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(468);
/* harmony import */ var _streakyc_ui_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87084);
/* harmony import */ var _streakyc_ui_components_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2225);
/* harmony import */ var _streakyc_ui_components_fuzzy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(99788);
/* harmony import */ var _core_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(58556);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(35091);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(66534);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(40634);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(29124);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(23184);
/* harmony import */ var _getSavedViews__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(11995);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_10__, _getSavedViews__WEBPACK_IMPORTED_MODULE_12__]);
([_components__WEBPACK_IMPORTED_MODULE_10__, _getSavedViews__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














function fetchResults(query, ctx) {
  if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(query)) {
    return Promise.resolve([]);
  }
  const savedViews = (0,_getSavedViews__WEBPACK_IMPORTED_MODULE_12__/* .getSavedViews */ .S)(ctx);
  const highlightedEntries = (0,_streakyc_ui_components_fuzzy__WEBPACK_IMPORTED_MODULE_5__/* .fuzzySearch */ .s)(query, savedViews, ['savedView.displayName', 'pipeline.name'], _constants__WEBPACK_IMPORTED_MODULE_11__/* .DEFAULT_FUZZYSORT_OPTIONS */ .o).map(item => ({
    score: item.score,
    key: item.data.savedView.viewKey,
    data: {
      ...item.data,
      nameHighlighted: item.highlights['savedView.displayName'],
      pipelineNameHighlighted: item.highlights['pipeline.name']
    }
  }));
  return Promise.resolve(highlightedEntries);
}
function SavedViewSettingsInfo(_ref) {
  let {
    icon,
    count
  } = _ref;
  return count ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_streakyc_ui_components_layout__WEBPACK_IMPORTED_MODULE_4__/* .LayoutRow */ .WM, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_streakyc_ui_components__WEBPACK_IMPORTED_MODULE_3__/* .Icon */ .JO, {
      name: icon,
      color: "black/disabled"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components__WEBPACK_IMPORTED_MODULE_10__/* .CmdBarEntryInfo */ .R7, {
      text: `${count}`
    })]
  }) : null;
}
const sourceConfig = (0,_utils__WEBPACK_IMPORTED_MODULE_8__/* .createSourceConfig */ .Zo)({
  nameLocaleKey: 'saved_views',
  categories: [_types__WEBPACK_IMPORTED_MODULE_9__/* .SearchCategory */ .B.ALL, _types__WEBPACK_IMPORTED_MODULE_9__/* .SearchCategory */ .B.ITEMS],
  fetchResults,
  renderResult: _ref2 => {
    let {
      savedView,
      pipeline,
      nameHighlighted,
      pipelineNameHighlighted
    } = _ref2;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(SavedViewEntry, {
      savedView: savedView,
      pipeline: pipeline,
      nameHighlighted: nameHighlighted,
      pipelineNameHighlighted: pipelineNameHighlighted
    });
  },
  onSelectResult: (_ref3, ctx) => {
    let {
      entry
    } = _ref3;
    const {
      viewKey
    } = entry.data.savedView;
    const {
      key
    } = entry.data.pipeline;
    ctx.goTo(_core_routing__WEBPACK_IMPORTED_MODULE_6__/* .StreakCustomRoute */ .ld.PIPELINE_SAVEDVIEW, {
      key,
      viewKey
    });
    ctx.closeCommandBar();
  }
});
function SavedViewEntry(_ref4) {
  let {
    savedView,
    pipeline,
    nameHighlighted,
    pipelineNameHighlighted,
    icon = 'filter_list'
  } = _ref4;
  const {
    displayName,
    sortSettings,
    filterSettings
  } = savedView;
  const nameHtml = nameHighlighted || displayName;
  const pipelineHtml = pipelineNameHighlighted || pipeline.name;
  const numberOfSortedColumns = _streakyc_models_pipeline_savedViews_sortSettingsManager__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.getNumberOfSortedColumns(sortSettings);
  const numberOfUniqueFilteredColumns = _streakyc_models_pipeline_savedViews_filterSettingsManager__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.getNumberOfUniqueFilteredColumns(filterSettings);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components__WEBPACK_IMPORTED_MODULE_10__/* .CmdBarEntry */ .tB, {
    leftAdornment: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_streakyc_ui_components__WEBPACK_IMPORTED_MODULE_3__/* .Icon */ .JO, {
      name: icon
    }),
    left: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components__WEBPACK_IMPORTED_MODULE_10__/* .CmdBarEntryTitle */ .OA, {
      title: nameHtml,
      subtitle: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components__WEBPACK_IMPORTED_MODULE_10__/* .HighlightedText */ .hl, {
        html: pipelineHtml
      })
    }),
    right: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Fragment, {
      children: [numberOfUniqueFilteredColumns || numberOfSortedColumns ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_streakyc_ui_components_layout__WEBPACK_IMPORTED_MODULE_4__/* .LayoutRow */ .WM, {
        gapH: "xsnudge",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(SavedViewSettingsInfo, {
          icon: "filter_list",
          count: numberOfUniqueFilteredColumns
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(SavedViewSettingsInfo, {
          icon: "swap_vert",
          count: numberOfSortedColumns
        })]
      }) : null, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components__WEBPACK_IMPORTED_MODULE_10__/* .CmdBarEntryChip */ .pW, {
        text: _services_locale_locale__WEBPACK_IMPORTED_MODULE_7__.Locale.getString('saved_view')
      })]
    })
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 40892:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ getSavedViewsMap)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17013);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _getSavedViews__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11995);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_getSavedViews__WEBPACK_IMPORTED_MODULE_1__]);
_getSavedViews__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function getSavedViewsMap(ctx) {
  if (ctx.cache.has('savedViewsByKey')) {
    return ctx.cache.get('savedViewsByKey');
  }
  const savedViews = (0,_getSavedViews__WEBPACK_IMPORTED_MODULE_1__/* .getSavedViews */ .S)(ctx);
  const savedViewsByKey = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.keyBy)(savedViews, _ref => {
    let {
      savedView
    } = _ref;
    return savedView.viewKey;
  });
  ctx.cache.set('savedViewsByKey', savedViewsByKey);
  return savedViewsByKey;
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 49568:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ queryAlgolia)
/* harmony export */ });
/* harmony import */ var _services_algolia_algoliaClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56001);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23184);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_algolia_algoliaClient__WEBPACK_IMPORTED_MODULE_0__]);
_services_algolia_algoliaClient__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const algolia = new _services_algolia_algoliaClient__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z({
  apiKeyRefreshUrl: 'teams/contacts/search/key'
});
function queryAlgolia(query) {
  const queryParams = {
    query,
    hitsPerPage: _constants__WEBPACK_IMPORTED_MODULE_1__/* .MAX_HITS_PER_PAGE */ .U,
    restrictSearchableAttributes: ['emailAddresses', 'givenName', 'familyName'],
    attributesToRetrieve: ['key', 'teamKey', 'emailAddresses', 'givenName', 'familyName', 'relatedBoxesByPipeline'],
    attributesToHighlight: ['givenName', 'familyName', 'emailAddresses']
  };
  return algolia.search('TeamContact', queryParams);
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 43117:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Sr: () => (/* reexport safe */ _sourceConfig__WEBPACK_IMPORTED_MODULE_0__.Sr),
/* harmony export */   TG: () => (/* reexport safe */ _sourceConfig__WEBPACK_IMPORTED_MODULE_0__.TG),
/* harmony export */   aF: () => (/* reexport safe */ _sourceConfig__WEBPACK_IMPORTED_MODULE_0__.aF)
/* harmony export */ });
/* harmony import */ var _sourceConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52671);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_sourceConfig__WEBPACK_IMPORTED_MODULE_0__]);
_sourceConfig__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 52671:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Sr: () => (/* binding */ sourceConfig),
/* harmony export */   TG: () => (/* binding */ ContactEntry),
/* harmony export */   aF: () => (/* binding */ getContactByKey)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17013);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _streakyc_ui_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87084);
/* harmony import */ var _streakyc_ui_components_fuzzy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99788);
/* harmony import */ var _streakyc_models_teamContactAndOrg_teamContactAndOrgCache__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41675);
/* harmony import */ var _lib_utils_useModelLatestObject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(72029);
/* harmony import */ var _core_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(58556);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(35091);
/* harmony import */ var _lib_utils_isNotNil__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(72086);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(40634);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(66534);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(29124);
/* harmony import */ var _algoliaApi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(49568);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_streakyc_models_teamContactAndOrg_teamContactAndOrgCache__WEBPACK_IMPORTED_MODULE_3__, _components__WEBPACK_IMPORTED_MODULE_9__, _algoliaApi__WEBPACK_IMPORTED_MODULE_10__]);
([_streakyc_models_teamContactAndOrg_teamContactAndOrgCache__WEBPACK_IMPORTED_MODULE_3__, _components__WEBPACK_IMPORTED_MODULE_9__, _algoliaApi__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const sourceConfig = (0,_utils__WEBPACK_IMPORTED_MODULE_8__/* .createSourceConfig */ .Zo)({
  nameLocaleKey: 'contacts',
  categories: [_types__WEBPACK_IMPORTED_MODULE_7__/* .SearchCategory */ .B.ALL, _types__WEBPACK_IMPORTED_MODULE_7__/* .SearchCategory */ .B.ITEMS],
  fetchResults: async query => {
    if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(query)) {
      return Promise.resolve([]);
    }
    return (0,_algoliaApi__WEBPACK_IMPORTED_MODULE_10__/* .queryAlgolia */ .$)(query).then(_ref => {
      let {
        hits
      } = _ref;
      const contacts = hits.map(item => {
        const contact = getContactByKey(item.key);
        return contact ? {
          ...item,
          contact,
          familyNameHighlighted: item._highlightResult?.familyName?.value,
          givenNameHighlighted: item._highlightResult?.givenName?.value,
          emailAddressesHighlighted: item._highlightResult?.emailAddresses?.map(e => e.value)
        } : null;
      }).filter(_lib_utils_isNotNil__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z);

      // We remove the unused highlighted prop from fuzzySearch to favor
      // the highlights from Algolia
      return (0,_streakyc_ui_components_fuzzy__WEBPACK_IMPORTED_MODULE_2__/* .fuzzySearch */ .s)(query, contacts, ['givenName', 'familyName']).map(_ref2 => {
        let {
          score,
          data
        } = _ref2;
        return {
          score,
          key: data.key,
          data
        };
      });
    });
  },
  renderResult: props => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(ContactEntry, {
    ...props
  }),
  onSelectResult: (_ref3, ctx) => {
    let {
      entry
    } = _ref3;
    ctx.goTo(_core_routing__WEBPACK_IMPORTED_MODULE_5__/* .StreakCustomRoute */ .ld.CONTACT, {
      key: entry.data.contact.key
    });
    ctx.closeCommandBar();
  }
});
function ContactEntry(_ref4) {
  let {
    givenNameHighlighted,
    familyNameHighlighted,
    emailAddressesHighlighted,
    relatedBoxesByPipeline,
    contact,
    icon
  } = _ref4;
  // The contact prop might be incomplete, so we need to enrich
  // the object with information from the local data store.
  const contactModel = _streakyc_models_teamContactAndOrg_teamContactAndOrgCache__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.getTeamContactSync(contact.key);
  const contactRaw = (0,_lib_utils_useModelLatestObject__WEBPACK_IMPORTED_MODULE_4__/* .useModelLatestObject */ ._)(contactModel);
  const contactObject = {
    ...contact,
    ...contactRaw
  };
  const givenName = contactObject.givenName ?? '';
  const familyName = contactObject.familyName ?? '';
  const givenNameHtml = givenNameHighlighted ?? givenName;
  const familyNameHtml = familyNameHighlighted ?? familyName;
  const fullName = `${givenName} ${familyName}`.trim() || '-';
  const fullNameHtml = `${givenNameHtml} ${familyNameHtml}`.trim() || '-';
  const emailsHtml = (contactObject.emailAddresses ?? []).map((email, index) => emailAddressesHighlighted?.[index] ?? email).join(', ');
  const pipelineCount = relatedBoxesByPipeline?.length ?? 0;
  const formattedPipelineCount = _services_locale_locale__WEBPACK_IMPORTED_MODULE_6__.Locale.getString('command_bar_in_count_pipelines', {
    count: pipelineCount
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components__WEBPACK_IMPORTED_MODULE_9__/* .CmdBarEntry */ .tB, {
    leftAdornment: icon ?? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_streakyc_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Avatar */ .qE, {
      name: fullName,
      imageUrl: contactObject?.photoUrl
    }),
    left: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components__WEBPACK_IMPORTED_MODULE_9__/* .CmdBarEntryTitle */ .OA, {
      title: fullNameHtml,
      subtitle: emailsHtml ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components__WEBPACK_IMPORTED_MODULE_9__/* .HighlightedText */ .hl, {
        html: emailsHtml
      }) : null
    }),
    right: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
      children: [pipelineCount > 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components__WEBPACK_IMPORTED_MODULE_9__/* .CmdBarEntryInfo */ .R7, {
        text: formattedPipelineCount
      }) : null, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components__WEBPACK_IMPORTED_MODULE_9__/* .CmdBarEntryChip */ .pW, {
        text: _services_locale_locale__WEBPACK_IMPORTED_MODULE_6__.Locale.getString('contact')
      })]
    })
  });
}
function getContactByKey(contactKey) {
  const contactModel = _streakyc_models_teamContactAndOrg_teamContactAndOrgCache__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.getTeamContactSync(contactKey);
  return contactModel ? contactModel.getLatestObject() : null;
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 69879:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* reexport safe */ _sourceConfig__WEBPACK_IMPORTED_MODULE_0__.O),
/* harmony export */   S: () => (/* reexport safe */ _sourceConfig__WEBPACK_IMPORTED_MODULE_0__.S)
/* harmony export */ });
/* harmony import */ var _sourceConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1196);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_sourceConfig__WEBPACK_IMPORTED_MODULE_0__]);
_sourceConfig__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1196:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ sourceConfigLimited),
/* harmony export */   S: () => (/* binding */ sourceConfig)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17013);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _streakyc_ui_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87084);
/* harmony import */ var _streakyc_ui_components_fuzzy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99788);
/* harmony import */ var _streakSidebar_homeNav_streak_university_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39117);
/* harmony import */ var _streakSidebar_homeNav_streak_university_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(66123);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(35091);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(66534);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(40634);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(29124);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(23184);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_streakSidebar_homeNav_streak_university_config__WEBPACK_IMPORTED_MODULE_3__, _components__WEBPACK_IMPORTED_MODULE_8__]);
([_streakSidebar_homeNav_streak_university_config__WEBPACK_IMPORTED_MODULE_3__, _components__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











function formatVideo(video) {
  return {
    title: _services_locale_locale__WEBPACK_IMPORTED_MODULE_5__.Locale.getString(video.title),
    description: _services_locale_locale__WEBPACK_IMPORTED_MODULE_5__.Locale.getString(video.description),
    videoId: video.videoID
  };
}
const gettingStartedVideos = _streakSidebar_homeNav_streak_university_config__WEBPACK_IMPORTED_MODULE_3__.streakUniversityItemsByGroup[_streakSidebar_homeNav_streak_university_types__WEBPACK_IMPORTED_MODULE_4__/* .StreakUniversityGroups */ .F.gettingStarted];
const sourceConfig = (0,_utils__WEBPACK_IMPORTED_MODULE_6__/* .createSourceConfig */ .Zo)({
  nameLocaleKey: 'streak_university',
  categories: [_types__WEBPACK_IMPORTED_MODULE_7__/* .SearchCategory */ .B.HELP],
  fetchResults: async query => {
    const videoItems = Object.values(_streakSidebar_homeNav_streak_university_config__WEBPACK_IMPORTED_MODULE_3__.streakUniversityItemsByGroup).flatMap(items => items).filter(_streakSidebar_homeNav_streak_university_types__WEBPACK_IMPORTED_MODULE_4__/* .isVideo */ .W).map(formatVideo);
    if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(query)) {
      const emptyStateItems = gettingStartedVideos.filter(_streakSidebar_homeNav_streak_university_types__WEBPACK_IMPORTED_MODULE_4__/* .isVideo */ .W).map(formatVideo).map(video => ({
        score: 1,
        key: video.videoId,
        data: video
      }));
      return emptyStateItems;
    }
    const matchedItems = (0,_streakyc_ui_components_fuzzy__WEBPACK_IMPORTED_MODULE_2__/* .fuzzySearch */ .s)(query, videoItems, ['title', 'description'], _constants__WEBPACK_IMPORTED_MODULE_9__/* .DEFAULT_FUZZYSORT_OPTIONS */ .o).map(item => ({
      score: item.score,
      key: item.data.videoId,
      data: {
        ...item.data,
        titleHighlighted: item.highlights.title,
        descriptionHighlighted: item.highlights.description
      }
    }));
    return matchedItems;
  },
  renderResult: result => {
    const htmlTitle = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(result.titleHighlighted) ? result.title : result.titleHighlighted;
    const htmlDescription = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(result.descriptionHighlighted) ? result.description : result.descriptionHighlighted;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components__WEBPACK_IMPORTED_MODULE_8__/* .CmdBarEntry */ .tB, {
      leftAdornment: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_streakyc_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Icon */ .JO, {
        name: "play_circle_filled",
        color: "primary/base"
      }),
      left: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components__WEBPACK_IMPORTED_MODULE_8__/* .CmdBarEntryTitle */ .OA, {
        title: htmlTitle ?? '',
        subtitle: htmlDescription ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components__WEBPACK_IMPORTED_MODULE_8__/* .HighlightedText */ .hl, {
          html: htmlDescription
        }) : null
      }),
      right: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components__WEBPACK_IMPORTED_MODULE_8__/* .CmdBarEntryChip */ .pW, {
        text: _services_locale_locale__WEBPACK_IMPORTED_MODULE_5__.Locale.getString('command_bar_chip_video')
      })
    });
  },
  onSelectResult(_ref, ctx) {
    let {
      entry
    } = _ref;
    openSidebarVideo(entry.data.videoId);
    ctx.closeCommandBar();
  }
});
const sourceConfigLimited = (0,_utils__WEBPACK_IMPORTED_MODULE_6__/* .createSourceConfig */ .Zo)({
  ...sourceConfig,
  categories: [_types__WEBPACK_IMPORTED_MODULE_7__/* .SearchCategory */ .B.ALL],
  fetchResults: async query => {
    const videoItems = Object.values(_streakSidebar_homeNav_streak_university_config__WEBPACK_IMPORTED_MODULE_3__.streakUniversityItemsByGroup).flatMap(items => items).filter(_streakSidebar_homeNav_streak_university_types__WEBPACK_IMPORTED_MODULE_4__/* .isVideo */ .W).map(formatVideo);
    if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(query)) {
      const emptyStateItems = gettingStartedVideos.filter(_streakSidebar_homeNav_streak_university_types__WEBPACK_IMPORTED_MODULE_4__/* .isVideo */ .W).map(formatVideo).map(video => ({
        score: 1,
        key: video.videoId,
        data: video
      }));
      return emptyStateItems.slice(0, 3);
    }
    const matchedItems = (0,_streakyc_ui_components_fuzzy__WEBPACK_IMPORTED_MODULE_2__/* .fuzzySearch */ .s)(query, videoItems, ['title', 'description']).map(item => ({
      score: item.score,
      key: item.data.videoId,
      data: {
        ...item.data,
        titleHighlighted: item.highlights.title,
        descriptionHighlighted: item.highlights.description
      }
    }));
    return matchedItems;
  }
});
function openSidebarVideo(videoId) {
  // TODO: It would be better to show the video in-app
  window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 40634:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ SearchCategory)
/* harmony export */ });
/**
 * Search categories correspond to the tabs in the command bar. Sources
 * can specify which categories it should appear in.
 */
let SearchCategory = /*#__PURE__*/function (SearchCategory) {
  SearchCategory["ALL"] = "ALL";
  SearchCategory["ITEMS"] = "ITEMS";
  SearchCategory["ACTIONS"] = "ACTIONS";
  SearchCategory["RECENT"] = "RECENT";
  SearchCategory["HELP"] = "HELP";
  return SearchCategory;
}({});

/***/ }),

/***/ 66534:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AG: () => (/* binding */ deduplicateFlattened),
/* harmony export */   JD: () => (/* binding */ flattenSearchResults),
/* harmony export */   Nm: () => (/* binding */ Direction),
/* harmony export */   PM: () => (/* binding */ COMMAND_BAR_STORAGE_KEY),
/* harmony export */   SX: () => (/* binding */ cycleItems),
/* harmony export */   Zo: () => (/* binding */ createSourceConfig),
/* harmony export */   b: () => (/* binding */ matchCommandBarShortcut),
/* harmony export */   e_: () => (/* binding */ deduplicateSearchResults),
/* harmony export */   xI: () => (/* binding */ matchImpersonationShortcut)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17013);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_utils_isModKeyPressed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12036);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92802);



function createSourceConfig(config) {
  return {
    priority: 1,
    ...config
  };
}
const COMMAND_BAR_STORAGE_KEY = 'streak__commandBar';
function matchImpersonationShortcut(event) {
  const modKey = (0,_lib_utils_isModKeyPressed__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(event);
  return modKey && event.shiftKey && event.key.toUpperCase() === 'I';
}
function matchCommandBarShortcut(event) {
  const modKey = (0,_lib_utils_isModKeyPressed__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(event);
  return modKey && event.key.toUpperCase() === 'K' || modKey && event.shiftKey && event.key.toUpperCase() === 'P';
}
let Direction = /*#__PURE__*/function (Direction) {
  Direction[Direction["NEXT"] = 1] = "NEXT";
  Direction[Direction["PREV"] = -1] = "PREV";
  return Direction;
}({});

/**
 * Returns the next or previous item in the list, cycling back to
 * the beginning or end if necessary.
 */
function cycleItems(items, current, direction) {
  const currentIndex = items.indexOf(current);
  if (currentIndex === -1) {
    return current;
  }
  const nextItem = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.nth)(items, (currentIndex + direction) % items.length);
  return nextItem ?? current;
}
function flattenSearchResults(results) {
  return results.flatMap(r => r.data.map(e => ({
    source: r.source,
    state: r.state,
    entry: e
  })));
}
function deduplicateFlattened(items) {
  return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.uniqBy)(items, item => item.entry.key);
}
function deduplicateSearchResults(searchResults) {
  return (0,immer__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)(searchResults, searchResults => {
    const keys = new Set();
    for (const searchResult of searchResults) {
      searchResult.data = searchResult.data.filter(item => {
        if (keys.has(item.key)) {
          return false;
        }
        keys.add(item.key);
        return true;
      });
    }
    return searchResults;
  });
}

/***/ }),

/***/ 70862:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _streakyc_common_core_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58556);
/* harmony import */ var _lib_dependencyManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54612);
/* harmony import */ var _core_enabledFeaturesController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50452);
/* harmony import */ var _core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(77294);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(35091);
/* harmony import */ var _widgets_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26736);
/* harmony import */ var _search_searchSuggestionsController__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63389);
/* harmony import */ var _internal_components_commandBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(56545);
/* harmony import */ var _internal_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(40634);
/* harmony import */ var _internal_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(66534);
/* harmony import */ var _internal_sources_searchBoxes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(41688);
/* harmony import */ var _internal_sources_searchSavedViews__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(14285);
/* harmony import */ var _internal_sources_searchPipelines__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1922);
/* harmony import */ var _internal_sources_searchHelpArticles__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(85003);
/* harmony import */ var _internal_sources_searchTeamContacts__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(43117);
/* harmony import */ var _internal_sources_searchOrganizations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(95927);
/* harmony import */ var _internal_sources_searchActions__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(26824);
/* harmony import */ var _internal_sources_searchUniversity__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(69879);
/* harmony import */ var _internal_sources_searchRecentRoutes__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(52693);
/* harmony import */ var _services_tracker_tracker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(13778);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_core_enabledFeaturesController__WEBPACK_IMPORTED_MODULE_2__, _search_searchSuggestionsController__WEBPACK_IMPORTED_MODULE_6__, _internal_components_commandBar__WEBPACK_IMPORTED_MODULE_7__, _internal_sources_searchBoxes__WEBPACK_IMPORTED_MODULE_10__, _internal_sources_searchSavedViews__WEBPACK_IMPORTED_MODULE_11__, _internal_sources_searchPipelines__WEBPACK_IMPORTED_MODULE_12__, _internal_sources_searchHelpArticles__WEBPACK_IMPORTED_MODULE_13__, _internal_sources_searchTeamContacts__WEBPACK_IMPORTED_MODULE_14__, _internal_sources_searchOrganizations__WEBPACK_IMPORTED_MODULE_15__, _internal_sources_searchActions__WEBPACK_IMPORTED_MODULE_16__, _internal_sources_searchUniversity__WEBPACK_IMPORTED_MODULE_17__, _internal_sources_searchRecentRoutes__WEBPACK_IMPORTED_MODULE_18__]);
([_core_enabledFeaturesController__WEBPACK_IMPORTED_MODULE_2__, _search_searchSuggestionsController__WEBPACK_IMPORTED_MODULE_6__, _internal_components_commandBar__WEBPACK_IMPORTED_MODULE_7__, _internal_sources_searchBoxes__WEBPACK_IMPORTED_MODULE_10__, _internal_sources_searchSavedViews__WEBPACK_IMPORTED_MODULE_11__, _internal_sources_searchPipelines__WEBPACK_IMPORTED_MODULE_12__, _internal_sources_searchHelpArticles__WEBPACK_IMPORTED_MODULE_13__, _internal_sources_searchTeamContacts__WEBPACK_IMPORTED_MODULE_14__, _internal_sources_searchOrganizations__WEBPACK_IMPORTED_MODULE_15__, _internal_sources_searchActions__WEBPACK_IMPORTED_MODULE_16__, _internal_sources_searchUniversity__WEBPACK_IMPORTED_MODULE_17__, _internal_sources_searchRecentRoutes__WEBPACK_IMPORTED_MODULE_18__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





















const sources = [_internal_sources_searchBoxes__WEBPACK_IMPORTED_MODULE_10__/* .sourceConfig */ .S, _internal_sources_searchHelpArticles__WEBPACK_IMPORTED_MODULE_13__/* .sourceConfig */ .S, _internal_sources_searchPipelines__WEBPACK_IMPORTED_MODULE_12__/* .sourceConfig */ .Sr, _internal_sources_searchRecentRoutes__WEBPACK_IMPORTED_MODULE_18__/* .sourceConfig */ .Sr, _internal_sources_searchRecentRoutes__WEBPACK_IMPORTED_MODULE_18__/* .sourceConfigLimited */ .O6, _internal_sources_searchSavedViews__WEBPACK_IMPORTED_MODULE_11__/* .sourceConfig */ .Sr, _internal_sources_searchTeamContacts__WEBPACK_IMPORTED_MODULE_14__/* .sourceConfig */ .Sr, _internal_sources_searchOrganizations__WEBPACK_IMPORTED_MODULE_15__/* .sourceConfig */ .Sr, _internal_sources_searchActions__WEBPACK_IMPORTED_MODULE_16__/* .sourceConfig */ .S, _internal_sources_searchUniversity__WEBPACK_IMPORTED_MODULE_17__/* .sourceConfig */ .S, _internal_sources_searchUniversity__WEBPACK_IMPORTED_MODULE_17__/* .sourceConfigLimited */ .O];
function openImpersonation(ctx) {
  ctx.pushResult({
    source: _internal_sources_searchActions__WEBPACK_IMPORTED_MODULE_16__/* .sourceConfig */ .S,
    state: 'LOADED',
    entry: {
      key: _internal_sources_searchActions__WEBPACK_IMPORTED_MODULE_16__/* .actionImpersonate */ .c.key,
      score: 1,
      data: _internal_sources_searchActions__WEBPACK_IMPORTED_MODULE_16__/* .actionImpersonate */ .c
    }
  });
}
function openCommandBar(initialQuery, initialTab, trackingProps, onLoad) {
  (0,_widgets_modal__WEBPACK_IMPORTED_MODULE_5__/* .openDialog_LEGACY */ .np)(_ref => {
    let {
      close
    } = _ref;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_internal_components_commandBar__WEBPACK_IMPORTED_MODULE_7__/* .CommandBar */ .X, {
      sources: sources,
      onClose: () => close(null),
      initialTab: initialTab,
      initialQuery: initialQuery,
      onLoad: onLoad
    });
  }, null, {
    placement: 'top',
    offsetTop: 50
  });
  _services_tracker_tracker__WEBPACK_IMPORTED_MODULE_19__["default"].track('commandBar.open', {
    initialQuery,
    initialTab,
    ...trackingProps
  });
}
function init() {
  const isCommandBarEnabled = _core_enabledFeaturesController__WEBPACK_IMPORTED_MODULE_2__.EnabledFeatures.isExperimentEnabled('commandBarExp');
  if (!isCommandBarEnabled) {
    return;
  }
  const openedComposes = [];
  function isInComposeMole(event) {
    return openedComposes.some(el => el === event.target || el.contains(event.target));
  }
  document.body.addEventListener('keydown', event => {
    // Ignore the keyboard shortcut if we are in the compose or reply view
    if (isInComposeMole(event)) {
      return;
    }
    const trackingProps = {
      trigger: 'keyboardShortcut'
    };
    if ((0,_internal_utils__WEBPACK_IMPORTED_MODULE_9__/* .matchImpersonationShortcut */ .xI)(event)) {
      openCommandBar('', _internal_types__WEBPACK_IMPORTED_MODULE_8__/* .SearchCategory */ .B.ALL, trackingProps, openImpersonation);
      event.preventDefault();
      return;
    }
    if ((0,_internal_utils__WEBPACK_IMPORTED_MODULE_9__/* .matchCommandBarShortcut */ .b)(event)) {
      openCommandBar('', _internal_types__WEBPACK_IMPORTED_MODULE_8__/* .SearchCategory */ .B.ALL, trackingProps);
      event.preventDefault();
      return;
    }
  }, {
    capture: true
  });
  _core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_3__.inboxSDK.Keyboard.createShortcutHandle({
    chord: 'mod+k',
    description: _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__.Locale.getString('command_palette_shortcut_help')
  });

  // Keep an array of open compose views, so we can ignore keyboard
  // events triggered from within one of them.
  _core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_3__.inboxSDK.Compose.registerComposeViewHandler(composeView => {
    const el = composeView.getElement();
    openedComposes.push(el);
    composeView.on('destroy', () => {
      openedComposes.splice(openedComposes.indexOf(el), 1);
    });
  });

  // We save the route information so we can show recently
  // visited routes to the user.
  _core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_3__.inboxSDK.Router.handleAllRoutes(routeView => {
    const routeId = routeView.getRouteID();
    if (routeId === _streakyc_common_core_routing__WEBPACK_IMPORTED_MODULE_0__/* .StreakCustomRoute */ .ld.PIPELINE || routeId === _streakyc_common_core_routing__WEBPACK_IMPORTED_MODULE_0__/* .StreakCustomRoute */ .ld.BOX || routeId === _streakyc_common_core_routing__WEBPACK_IMPORTED_MODULE_0__/* .StreakCustomRoute */ .ld.CONTACT || routeId === _streakyc_common_core_routing__WEBPACK_IMPORTED_MODULE_0__/* .StreakCustomRoute */ .ld.ORG) {
      (0,_internal_sources_searchRecentRoutes__WEBPACK_IMPORTED_MODULE_18__/* .addToRecentRoutes */ .h7)({
        routeId: routeId,
        params: routeView.getParams()
      });
    }
    if (routeId === _streakyc_common_core_routing__WEBPACK_IMPORTED_MODULE_0__/* .StreakCustomRoute */ .ld.PIPELINE_SAVEDVIEW) {
      (0,_internal_sources_searchRecentRoutes__WEBPACK_IMPORTED_MODULE_18__/* .addToRecentRoutes */ .h7)({
        routeId,
        params: routeView.getParams()
      });
    }
  });

  // Update the behavior of the search suggestions controller
  // to show fewer results and render the "More results" item.
  if (_search_searchSuggestionsController__WEBPACK_IMPORTED_MODULE_6__.searchSuggestionsController) {
    _search_searchSuggestionsController__WEBPACK_IMPORTED_MODULE_6__.searchSuggestionsController.setOnClickMoreResults((query, numResults) => openCommandBar(query, _internal_types__WEBPACK_IMPORTED_MODULE_8__/* .SearchCategory */ .B.ITEMS, {
      numResults,
      trigger: 'gmailAutocomplete'
    }));
  }
}
_lib_dependencyManager__WEBPACK_IMPORTED_MODULE_1__/* .DependencyManager */ .Lm.addFunction({
  functionKey: 'commandBarInitialized',
  functionReference: init,
  dependentFunctionKeys: ['sdkLoaded', 'localeLoaded', 'userLoggedIn', 'enabledFeaturesControllerInitialized', 'SearchSuggestionsControllerInitialized']
});
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 39117:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   streakUniversityItemsByGroup: () => (/* binding */ streakUniversityItemsByGroup)
/* harmony export */ });
/* harmony import */ var _customOnboarding_setupUserflow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32965);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66123);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_customOnboarding_setupUserflow__WEBPACK_IMPORTED_MODULE_0__]);
_customOnboarding_setupUserflow__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


/**
 * @note Order of keys here is significant
 */
const streakUniversityItemsByGroup = {
  [_types__WEBPACK_IMPORTED_MODULE_1__/* .StreakUniversityGroups */ .F.gettingStarted]: [{
    title: 'streak_u_welcome_to_streak!',
    description: 'streak_u_welcome_to_streak!_desc',
    videoID: 'oYrNZGQ2mu0',
    externalPath: 'welcome-to-streak',
    duration: '6:29',
    relatedArticles: [{
      title: 'streak_u_related_article_adding_boxes_to_your_pipeline',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_adding_boxes_to_your_pipeline_desc',
      url: 'https://support.streak.com/en/articles/3317255-adding-boxes-to-your-pipeline'
    }, {
      title: 'streak_u_related_article_adding_contacts_and_organizations_to_pipelines',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_adding_contacts_and_organizations_to_pipelines_desc',
      url: 'https://support.streak.com/en/articles/2400401-adding-contacts-and-organizations-to-your-pipelines'
    }, {
      title: 'streak_u_related_article_call_logs_and_meeting_notes',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_call_logs_and_meeting_notes_desc',
      url: 'https://support.streak.com/en/articles/2569566-call-logs-meeting-notes'
    }]
  }, {
    title: 'streak_u_introduction_to_streak_pipelines',
    description: 'streak_u_introduction_to_streak_pipelines_desc',
    videoID: '1YAEunp-N2U',
    externalPath: 'introduction-to-pipelines',
    duration: '3:02',
    relatedArticles: [{
      title: 'streak_u_related_article_pipelines',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_pipelines_desc',
      url: 'https://support.streak.com/en/articles/2761926-pipelines'
    }],
    tourLinks: [{
      async fn() {
        await (0,_customOnboarding_setupUserflow__WEBPACK_IMPORTED_MODULE_0__/* .startUserflowContent */ .Z)("aa884b23-3595-44b2-942c-a69e4fdf158e");
      },
      localeKey: 'streak_u_tour_link_ explore_pipelines',
      tourId: "aa884b23-3595-44b2-942c-a69e4fdf158e"
    }]
  }, {
    title: 'streak_u_pipelines_deepdive_column_types',
    description: 'streak_u_pipelines_deepdive_column_types_desc',
    videoID: 'ST3fmPKDyaM',
    externalPath: 'pipelines-deepdive-columns',
    duration: '6:03',
    relatedArticles: [{
      title: 'streak_u_related_article_custom_columns',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_custom_columns_desc',
      url: 'https://support.streak.com/en/articles/2563457-custom-columns'
    }, {
      title: 'streak_u_related_article_magic_columns',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_magic_columns_desc',
      url: 'https://support.streak.com/en/articles/2563465-magic-columns'
    }]
  }, {
    title: 'streak_u_build_your_pipeline_with_templates',
    description: 'streak_u_build_your_pipeline_with_templates_desc',
    videoID: '5rIdYNccqEk',
    externalPath: 'build-your-pipeline',
    duration: '3:02',
    relatedArticles: [{
      title: 'streak_u_related_article_pipelines',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_pipelines_desc',
      url: 'https://support.streak.com/en/articles/2761926-pipelines'
    }, {
      title: 'streak_u_related_article_customizing_a_pipeline',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_customizing_a_pipeline_desc',
      url: 'https://support.streak.com/en/articles/2562671-customizing-a-pipeline'
    }, {
      title: 'streak_u_related_article_magic_columns',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_magic_columns_desc',
      url: 'https://support.streak.com/en/articles/2563465-magic-columns'
    }, {
      title: 'streak_u_related_article_custom_columns',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_custom_columns_desc',
      url: 'https://support.streak.com/en/articles/2563457-custom-columns'
    }]
  }, {
    title: 'streak_u_auto_fill_your_pipeline_from_your_inbox',
    description: 'streak_u_auto_fill_your_pipeline_from_your_inbox_desc',
    videoID: 'NKX711y3e90',
    externalPath: 'auto-fill-your-pipeline',
    duration: '2:56',
    relatedArticles: [{
      title: 'streak_u_related_article_adding_boxes_to_your_pipeline',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_adding_boxes_to_your_pipeline_desc',
      url: 'https://support.streak.com/en/articles/3317255-adding-boxes-to-your-pipeline'
    }, {
      title: 'streak_u_related_article_adding_contacts_and_organizations_to_pipelines',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_adding_contacts_and_organizations_to_pipelines_desc',
      url: 'https://support.streak.com/en/articles/2400401-adding-contacts-and-organizations-to-your-pipelines'
    }, {
      title: 'streak_u_related_article_import_data_into_streak',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_import_data_into_streak_desc',
      url: 'https://support.streak.com/en/articles/2514596-import-data-into-streak'
    }],
    tourLinks: [{
      async fn() {
        await (0,_customOnboarding_setupUserflow__WEBPACK_IMPORTED_MODULE_0__/* .startUserflowContent */ .Z)("4c5e738a-159e-4afe-9dd0-3ad5087bd9b4");
      },
      localeKey: 'streak_u_tour_link_add_a_box',
      tourId: "4c5e738a-159e-4afe-9dd0-3ad5087bd9b4"
    }]
  }, {
    title: 'streak_u_the_box_view',
    description: 'streak_u_the_box_view_desc',
    videoID: 'duMo5ETbIBM',
    externalPath: 'the-box-view',
    duration: '5:03',
    relatedArticles: [{
      title: 'streak_u_related_article_boxes',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_boxes_desc',
      url: 'https://support.streak.com/en/articles/2563490-boxes'
    }, {
      title: 'streak_u_related_article_adding_boxes_to_your_pipeline',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_adding_boxes_to_your_pipeline_desc',
      url: 'https://support.streak.com/en/articles/3317255-adding-boxes-to-your-pipeline'
    }, {
      title: 'streak_u_related_article_using_contacts_and_organizations',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_using_contacts_and_organizations_desc',
      url: 'https://support.streak.com/en/articles/2414716-using-contacts-and-organizations'
    }],
    tourLinks: [{
      async fn() {
        await (0,_customOnboarding_setupUserflow__WEBPACK_IMPORTED_MODULE_0__/* .startUserflowContent */ .Z)("6524067a-906f-4c0e-97d6-c1cb435fbc75");
      },
      tourId: "6524067a-906f-4c0e-97d6-c1cb435fbc75",
      localeKey: 'streak_u_tour_link_explore_box_view'
    }]
  }, {
    title: 'streak_u_invite_your_team_to_collaborate_in_streak',
    description: 'streak_u_invite_your_team_to_collaborate_in_streak_desc',
    videoID: 'VOVAyfwrGWQ',
    externalPath: 'invite-your-team-to-collaborate',
    duration: '1:25',
    relatedArticles: [{
      title: 'streak_u_related_article_managing_users_on_your_team',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_managing_users_on_your_team_desc',
      url: 'https://support.streak.com/en/collections/3821982-manage-users'
    }, {
      title: 'streak_u_related_article_user_roles_and_permissions',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_user_roles_and_permissions_desc',
      url: 'https://support.streak.com/en/articles/2546324-user-roles-and-permissions'
    }]
  }],
  [_types__WEBPACK_IMPORTED_MODULE_1__/* .StreakUniversityGroups */ .F.emailEffectively]: [{
    title: 'streak_u_snippets',
    description: 'streak_u_snippets_desc',
    videoID: 'EnVw_RSlnYA',
    externalPath: 'snippets',
    duration: '4:44',
    relatedArticles: [{
      title: 'streak_u_related_article_snippets',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_snippets_desc',
      url: 'https://support.streak.com/en/articles/2546223-snippets'
    }, {
      title: 'streak_u_related_article_share_a_snippet',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_share_a_snippet_desc',
      url: 'https://support.streak.com/en/articles/2833007-share-a-snippet'
    }, {
      title: 'streak_u_related_article_add_images_to_snippets_and_mail_merges',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_add_images_to_snippets_and_mail_merges_desc',
      url: 'https://support.streak.com/en/articles/2546122-add-images-to-snippets-and-mail-merges'
    }]
  }, {
    title: 'streak_u_email_tracking',
    description: 'streak_u_email_tracking_desc',
    videoID: 'dMKtSYU-rd8',
    externalPath: 'email-tracking',
    duration: '5:56',
    relatedArticles: [{
      title: 'streak_u_related_article_email_tracking',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_email_tracking_desc',
      url: 'https://support.streak.com/en/articles/2448073-email-tracking'
    }, {
      title: 'streak_u_related_article_how_does_email_tracking_work',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_how_does_email_tracking_work_desc',
      url: 'https://support.streak.com/en/articles/2447759-how-does-email-tracking-work'
    }, {
      title: 'streak_u_related_article_how_to_tell_when_a_tracked_message_is_read',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_how_to_tell_when_a_tracked_message_is_read_desc',
      url: 'https://support.streak.com/en/articles/3179591-how-to-tell-when-a-tracked-message-is-read'
    }, {
      title: 'streak_u_related_article_test_email_tracking',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_test_email_tracking_desc',
      url: 'https://support.streak.com/en/articles/2276966-test-email-tracking'
    }]
  }, {
    title: 'streak_u_link_tracking',
    description: 'streak_u_link_tracking_desc',
    videoID: 'PtVFcw_w7L4',
    externalPath: 'link-tracking',
    duration: '3:13',
    relatedArticles: [{
      title: 'streak_u_related_article_track_link_clicks_in_your_sent_emails',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_track_link_clicks_in_your_sent_emails_desc',
      url: 'https://support.streak.com/en/articles/6017570-track-link-clicks-in-your-sent-emails'
    }, {
      title: 'streak_u_related_article_email_tracking',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_email_tracking_desc',
      url: 'https://support.streak.com/en/articles/2448073-email-tracking'
    }]
  }, {
    title: 'streak_u_create_a_mail_merge',
    description: 'streak_u_create_a_mail_merge_desc',
    videoID: 'YgDQn8UHEUk',
    externalPath: 'mail-merge',
    duration: '5:28',
    relatedArticles: [{
      title: 'streak_u_related_article_mail_merge',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_mail_merge_desc',
      url: 'https://support.streak.com/en/articles/2348155-mail-merge'
    }, {
      title: 'streak_u_related_article_customizing_a_mail_merge',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_customizing_a_mail_merge_desc',
      url: 'https://support.streak.com/en/articles/2546027-customizing-a-mail-merge'
    }, {
      title: 'streak_u_related_article_best_practices_when_creating_a_mail_merge',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_best_practices_when_creating_a_mail_merge_desc',
      url: 'https://support.streak.com/en/articles/2735763-best-practices-when-creating-a-mail-merge'
    }, {
      title: 'streak_u_related_article_daily_mail_merge_sending_limits',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_daily_mail_merge_sending_limits_desc',
      url: 'https://support.streak.com/en/articles/2546069-daily-mail-merge-sending-limits'
    }, {
      title: 'streak_u_related_article_how_can_i_avoid_my_emails_being_marked_as_spam?',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_how_can_i_avoid_my_emails_being_marked_as_spam?_desc',
      url: 'https://support.streak.com/en/articles/3851138-how-can-i-avoid-my-emails-being-marked-as-spam-when-sending-a-mail-merge'
    }, {
      title: 'streak_u_related_article_add_images_to_snippets_and_mail_merges',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_add_images_to_snippets_and_mail_merges_desc',
      url: 'https://support.streak.com/en/articles/2546122-add-images-to-snippets-and-mail-merges'
    }]
  }, {
    title: 'streak_u_add_automatic_follow-up_to_a_mail_merge',
    description: 'streak_u_add_automatic_follow-up_to_a_mail_merge_desc',
    videoID: 'Iwd5d5bEm7g',
    externalPath: 'add-automatic-follow-up-to-a-mail-merge',
    duration: '2:12',
    relatedArticles: [{
      title: 'streak_u_related_article_mail_merge',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_mail_merge_desc',
      url: 'https://support.streak.com/en/articles/2348155-mail-merge'
    }, {
      title: 'streak_u_related_article_customizing_a_mail_merge',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_customizing_a_mail_merge_desc',
      url: 'https://support.streak.com/en/articles/2546027-customizing-a-mail-merge'
    }, {
      title: 'streak_u_related_article_daily_mail_merge_sending_limits',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_daily_mail_merge_sending_limits_desc',
      url: 'https://support.streak.com/en/articles/2546069-daily-mail-merge-sending-limits'
    }, {
      title: 'streak_u_related_article_best_practices_when_creating_a_mail_merge',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_best_practices_when_creating_a_mail_merge_desc',
      url: 'https://support.streak.com/en/articles/2735763-best-practices-when-creating-a-mail-merge'
    }, {
      title: 'streak_u_related_article_how_can_i_avoid_my_emails_being_marked_as_spam?',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_how_can_i_avoid_my_emails_being_marked_as_spam?_desc',
      url: 'https://support.streak.com/en/articles/3851138-how-can-i-avoid-my-emails-being-marked-as-spam-when-sending-a-mail-merge'
    }]
  }, {
    title: 'streak_u_manage_your_mail_merges_and_quota',
    description: 'streak_u_manage_your_mail_merges_and_quota_desc',
    videoID: 'Gb85l1OIFbk',
    externalPath: 'manage-your-mail-merges-and-quota',
    duration: '4:30',
    relatedArticles: [{
      title: 'streak_u_related_article_daily_mail_merge_sending_limits',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_daily_mail_merge_sending_limits_desc',
      url: 'https://support.streak.com/en/articles/2546069-daily-mail-merge-sending-limits'
    }, {
      title: 'streak_u_related_article_mail_merge',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_mail_merge_desc',
      url: 'https://support.streak.com/en/articles/2348155-mail-merge'
    }, {
      title: 'streak_u_related_article_best_practices_when_creating_a_mail_merge',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_best_practices_when_creating_a_mail_merge_desc',
      url: 'https://support.streak.com/en/articles/2735763-best-practices-when-creating-a-mail-merge'
    }]
  }],
  [_types__WEBPACK_IMPORTED_MODULE_1__/* .StreakUniversityGroups */ .F.trackPeopleAndCompanies]: [{
    title: 'streak_u_contacts_and_organizations',
    description: 'streak_u_contacts_and_organizations_desc',
    videoID: '4UXjqi8z6W8',
    externalPath: 'contacts-and-organizations',
    duration: '5:32',
    relatedArticles: [{
      title: 'streak_u_related_article_contacts_and_organizations',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_contacts_and_organizations_desc',
      url: 'https://support.streak.com/en/articles/3623777-contacts-and-organizations'
    }, {
      title: 'streak_u_related_article_using_contacts_and_organizations',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_using_contacts_and_organizations_desc',
      url: 'https://support.streak.com/en/articles/2414716-using-contacts-and-organizations'
    }, {
      title: 'streak_u_related_article_adding_contacts_and_organizations_to_pipelines',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_adding_contacts_and_organizations_to_pipelines_desc',
      url: 'https://support.streak.com/en/articles/2400401-adding-contacts-and-organizations-to-your-pipelines'
    }]
  }, {
    title: 'streak_u_add_contacts_and_organizations,_share_emails_automatically',
    description: 'streak_u_add_contacts_and_organizations,_share_emails_automatically_desc',
    videoID: 'o0P7QBSnqNY',
    externalPath: 'add-contacts-and-organizations-share-emails-automatically',
    duration: '6:47',
    relatedArticles: [{
      title: 'streak_u_related_article_overview:_automatic_email_sharing',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_overview:_automatic_email_sharing_desc',
      url: 'https://support.streak.com/en/articles/4300110-overview-automatic-email-sharing'
    }, {
      title: 'streak_u_related_article_adding_contacts_and_organizations_to_pipelines',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_adding_contacts_and_organizations_to_pipelines_desc',
      url: 'https://support.streak.com/en/articles/2400401-adding-contacts-and-organizations-to-your-pipelines'
    }, {
      title: 'streak_u_related_article_contacts_and_organizations',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_contacts_and_organizations_desc',
      url: 'https://support.streak.com/en/articles/3623777-contacts-and-organizations'
    }]
  }],
  [_types__WEBPACK_IMPORTED_MODULE_1__/* .StreakUniversityGroups */ .F.prioritizeYourWork]: [{
    title: 'streak_u_saved_views_filter_and_segment_your_pipelines',
    description: 'streak_u_saved_views_filter_and_segment_your_pipelines_desc',
    videoID: 'lZXCJ7UJxHA',
    externalPath: 'saved-views',
    duration: '3:56',
    relatedArticles: [{
      title: 'streak_u_related_article_filter,_sort,_and_group_boxes_using_saved_views',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_filter,_sort,_and_group_boxes_using_saved_views_desc',
      url: 'https://support.streak.com/en/articles/2466406-filter-sort-and-group-boxes-using-saved-views'
    }, {
      title: 'streak_u_related_article_view_boxes_from_a_saved_view_in_your_inbox',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_view_boxes_from_a_saved_view_in_your_inbox_desc',
      url: 'https://support.streak.com/en/articles/2481424-view-boxes-in-a-saved-view-from-your-inbox'
    }]
  }, {
    title: 'streak_u_how_to_create_saved_views',
    description: 'streak_u_how_to_create_saved_views_desc',
    videoID: 'tBHbgCUrYz4',
    externalPath: 'how-to-create-saved-views',
    duration: '6:10',
    relatedArticles: [{
      title: 'streak_u_related_article_filter,_sort,_and_group_boxes_using_saved_views',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_filter,_sort,_and_group_boxes_using_saved_views_desc',
      url: 'https://support.streak.com/en/articles/2466406-filter-sort-and-group-boxes-using-saved-views'
    }, {
      title: 'streak_u_related_article_view_boxes_from_a_saved_view_in_your_inbox',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_view_boxes_from_a_saved_view_in_your_inbox_desc',
      url: 'https://support.streak.com/en/articles/2481424-view-boxes-in-a-saved-view-from-your-inbox'
    }, {
      title: 'streak_u_related_article_magic_columns',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_magic_columns_desc',
      url: 'https://support.streak.com/en/articles/2563465-magic-columns'
    }, {
      title: 'streak_u_related_article_custom_columns',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_custom_columns_desc',
      url: 'https://support.streak.com/en/articles/2563457-custom-columns'
    }]
  }, {
    title: 'streak_u_the_reports_dashboard',
    comingSoon: true
  }, {
    title: 'streak_u_custom_reports_with_saved_views',
    description: 'streak_u_custom_reports_with_saved_views_desc',
    videoID: 'sEoqoOvvtiM',
    externalPath: 'custom-reports-with-saved-views',
    duration: '6:21',
    relatedArticles: [{
      title: 'streak_u_related_article_pipeline_reports',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_pipeline_reports_desc',
      url: 'https://support.streak.com/en/articles/2514184-pipeline-reports'
    }, {
      title: 'streak_u_related_article_how_to_create_custom_reports_from_saved_views',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_how_to_create_custom_reports_from_saved_views_desc',
      url: 'https://support.streak.com/en/articles/2514266-how-to-create-custom-reports-from-saved-views'
    }]
  }, {
    title: 'streak_u_reporting_deepdive_custom_reports',
    comingSoon: true
  }]
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 66123:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ StreakUniversityGroups),
/* harmony export */   W: () => (/* binding */ isVideo)
/* harmony export */ });
var StreakUniversityGroups = {
  gettingStarted: 0,
  emailEffectively: 1,
  trackPeopleAndCompanies: 2,
  prioritizeYourWork: 3
};

/**
 * This should be filtered out of any preview list.
 */

function isVideo(lesson) {
  return 'videoID' in lesson;
}

/***/ }),

/***/ 99788:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* reexport safe */ _internal_fuzzy__WEBPACK_IMPORTED_MODULE_0__.b),
/* harmony export */   s: () => (/* reexport safe */ _internal_fuzzy__WEBPACK_IMPORTED_MODULE_0__.s)
/* harmony export */ });
/* harmony import */ var _internal_fuzzy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94217);


/***/ }),

/***/ 66492:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  OK: () => (/* reexport */ Tab),
  mQ: () => (/* reexport */ tabs_Tabs),
  dr: () => (/* reexport */ tabs_TabsList)
});

// UNUSED EXPORTS: TabPanel

// EXTERNAL MODULE: ./.yarn/cache/react-npm-18.3.1-af38f3c1ae-261137d3f3.zip/node_modules/react/index.js
var react = __webpack_require__(44345);
var react_namespaceObject = /*#__PURE__*/__webpack_require__.t(react, 2);
;// CONCATENATED MODULE: ./.yarn/cache/@babel-runtime-npm-7.25.0-a7bca33687-6870e9e0e9.zip/node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}

;// CONCATENATED MODULE: ./.yarn/cache/@babel-runtime-npm-7.25.0-a7bca33687-6870e9e0e9.zip/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (e.includes(n)) continue;
    t[n] = r[n];
  }
  return t;
}

;// CONCATENATED MODULE: ./.yarn/__virtual__/@mui-utils-virtual-714b21789a/0/cache/@mui-utils-npm-5.16.6-19c1f450c3-214bc3e9fe.zip/node_modules/@mui/utils/esm/setRef/setRef.js
/**
 * TODO v5: consider making it private
 *
 * passes {value} to {ref}
 *
 * WARNING: Be sure to only call this inside a callback that is passed as a ref.
 * Otherwise, make sure to cleanup the previous {ref} if it changes. See
 * https://github.com/mui/material-ui/issues/13539
 *
 * Useful if you want to expose the ref of an inner component to the public API
 * while still using it inside the component.
 * @param ref A ref callback or ref object. If anything falsy, this is a no-op.
 */
function setRef(ref, value) {
  if (typeof ref === 'function') {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
}
;// CONCATENATED MODULE: ./.yarn/__virtual__/@mui-utils-virtual-714b21789a/0/cache/@mui-utils-npm-5.16.6-19c1f450c3-214bc3e9fe.zip/node_modules/@mui/utils/esm/useForkRef/useForkRef.js
'use client';



function useForkRef(...refs) {
  /**
   * This will create a new function if the refs passed to this hook change and are all defined.
   * This means react will call the old forkRef with `null` and the new forkRef
   * with the ref. Cleanup naturally emerges from this behavior.
   */
  return react.useMemo(() => {
    if (refs.every(ref => ref == null)) {
      return null;
    }
    return instance => {
      refs.forEach(ref => {
        setRef(ref, instance);
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, refs);
}
;// CONCATENATED MODULE: ./.yarn/__virtual__/@mui-utils-virtual-714b21789a/0/cache/@mui-utils-npm-5.16.6-19c1f450c3-214bc3e9fe.zip/node_modules/@mui/utils/esm/composeClasses/composeClasses.js
function composeClasses(slots, getUtilityClass, classes = undefined) {
  const output = {};
  Object.keys(slots).forEach(
  // `Object.keys(slots)` can't be wider than `T` because we infer `T` from `slots`.
  // @ts-expect-error https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
  slot => {
    output[slot] = slots[slot].reduce((acc, key) => {
      if (key) {
        const utilityClass = getUtilityClass(key);
        if (utilityClass !== '') {
          acc.push(utilityClass);
        }
        if (classes && classes[key]) {
          acc.push(classes[key]);
        }
      }
      return acc;
    }, []).join(' ');
  });
  return output;
}
;// CONCATENATED MODULE: ./.yarn/__virtual__/@mui-utils-virtual-714b21789a/0/cache/@mui-utils-npm-5.16.6-19c1f450c3-214bc3e9fe.zip/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js

const generateUtilityClass_globalStateClasses = {
  active: 'active',
  checked: 'checked',
  completed: 'completed',
  disabled: 'disabled',
  error: 'error',
  expanded: 'expanded',
  focused: 'focused',
  focusVisible: 'focusVisible',
  open: 'open',
  readOnly: 'readOnly',
  required: 'required',
  selected: 'selected'
};
function generateUtilityClass(componentName, slot, globalStatePrefix = 'Mui') {
  const globalStateClass = generateUtilityClass_globalStateClasses[slot];
  return globalStateClass ? `${globalStatePrefix}-${globalStateClass}` : `${ClassNameGenerator.generate(componentName)}-${slot}`;
}
function isGlobalState(slot) {
  return generateUtilityClass_globalStateClasses[slot] !== undefined;
}
;// CONCATENATED MODULE: ./.yarn/__virtual__/@mui-base-virtual-32e976ef84/0/cache/@mui-base-npm-5.0.0-beta.40-248417914d-ebee3d9e11.zip/node_modules/@mui/base/generateUtilityClass/index.js

const GLOBAL_CLASS_PREFIX = 'base';
function buildStateClass(state) {
  return `${GLOBAL_CLASS_PREFIX}--${state}`;
}
function buildSlotClass(componentName, slot) {
  return `${GLOBAL_CLASS_PREFIX}-${componentName}-${slot}`;
}
function generateUtilityClass_generateUtilityClass(componentName, slot) {
  const globalStateClass = generateUtilityClass_globalStateClasses[slot];
  return globalStateClass ? buildStateClass(globalStateClass) : buildSlotClass(componentName, slot);
}
function generateUtilityClass_isGlobalState(slot) {
  return globalStateClasses[slot] !== undefined;
}
;// CONCATENATED MODULE: ./.yarn/__virtual__/@mui-base-virtual-32e976ef84/0/cache/@mui-base-npm-5.0.0-beta.40-248417914d-ebee3d9e11.zip/node_modules/@mui/base/generateUtilityClasses/index.js

function generateUtilityClasses(componentName, slots) {
  const result = {};
  slots.forEach(slot => {
    result[slot] = generateUtilityClass_generateUtilityClass(componentName, slot);
  });
  return result;
}
;// CONCATENATED MODULE: ./.yarn/__virtual__/@mui-base-virtual-32e976ef84/0/cache/@mui-base-npm-5.0.0-beta.40-248417914d-ebee3d9e11.zip/node_modules/@mui/base/Tab/tabClasses.js


const COMPONENT_NAME = 'Tab';
function getTabUtilityClass(slot) {
  return generateUtilityClass_generateUtilityClass(COMPONENT_NAME, slot);
}
const tabClasses = generateUtilityClasses(COMPONENT_NAME, ['root', 'selected', 'disabled']);
;// CONCATENATED MODULE: ./.yarn/__virtual__/@mui-utils-virtual-714b21789a/0/cache/@mui-utils-npm-5.16.6-19c1f450c3-214bc3e9fe.zip/node_modules/@mui/utils/esm/useId/useId.js
'use client';


let globalId = 0;
function useGlobalId(idOverride) {
  const [defaultId, setDefaultId] = react.useState(idOverride);
  const id = idOverride || defaultId;
  react.useEffect(() => {
    if (defaultId == null) {
      // Fallback to this default id when possible.
      // Use the incrementing value for client-side rendering only.
      // We can't use it server-side.
      // If you want to use random values please consider the Birthday Problem: https://en.wikipedia.org/wiki/Birthday_problem
      globalId += 1;
      setDefaultId(`mui-${globalId}`);
    }
  }, [defaultId]);
  return id;
}

// downstream bundlers may remove unnecessary concatenation, but won't remove toString call -- Workaround for https://github.com/webpack/webpack/issues/14814
const maybeReactUseId = react_namespaceObject['useId'.toString()];
/**
 *
 * @example <div id={useId()} />
 * @param idOverride
 * @returns {string}
 */
function useId(idOverride) {
  if (maybeReactUseId !== undefined) {
    const reactId = maybeReactUseId();
    return idOverride != null ? idOverride : reactId;
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks -- `React.useId` is invariant at runtime.
  return useGlobalId(idOverride);
}
;// CONCATENATED MODULE: ./.yarn/__virtual__/@mui-base-virtual-32e976ef84/0/cache/@mui-base-npm-5.0.0-beta.40-248417914d-ebee3d9e11.zip/node_modules/@mui/base/Tabs/TabsContext.js

/**
 * @ignore - internal component.
 */
const TabsContext = /*#__PURE__*/react.createContext(null);
if (false) {}
function useTabsContext() {
  const context = react.useContext(TabsContext);
  if (context == null) {
    throw new Error('No TabsContext provided');
  }
  return context;
}

;// CONCATENATED MODULE: ./.yarn/__virtual__/@mui-base-virtual-32e976ef84/0/cache/@mui-base-npm-5.0.0-beta.40-248417914d-ebee3d9e11.zip/node_modules/@mui/base/utils/extractEventHandlers.js
/**
 * Extracts event handlers from a given object.
 * A prop is considered an event handler if it is a function and its name starts with `on`.
 *
 * @param object An object to extract event handlers from.
 * @param excludeKeys An array of keys to exclude from the returned object.
 */
function extractEventHandlers(object, excludeKeys = []) {
  if (object === undefined) {
    return {};
  }
  const result = {};
  Object.keys(object).filter(prop => prop.match(/^on[A-Z]/) && typeof object[prop] === 'function' && !excludeKeys.includes(prop)).forEach(prop => {
    result[prop] = object[prop];
  });
  return result;
}
;// CONCATENATED MODULE: ./.yarn/__virtual__/@mui-utils-virtual-714b21789a/0/cache/@mui-utils-npm-5.16.6-19c1f450c3-214bc3e9fe.zip/node_modules/@mui/utils/esm/useEnhancedEffect/useEnhancedEffect.js
'use client';



/**
 * A version of `React.useLayoutEffect` that does not show a warning when server-side rendering.
 * This is useful for effects that are only needed for client-side rendering but not for SSR.
 *
 * Before you use this hook, make sure to read https://gist.github.com/gaearon/e7d97cdf38a2907924ea12e4ebdf3c85
 * and confirm it doesn't apply to your use-case.
 */
const useEnhancedEffect = typeof window !== 'undefined' ? react.useLayoutEffect : react.useEffect;
/* harmony default export */ const useEnhancedEffect_useEnhancedEffect = (useEnhancedEffect);
;// CONCATENATED MODULE: ./.yarn/__virtual__/@mui-base-virtual-32e976ef84/0/cache/@mui-base-npm-5.0.0-beta.40-248417914d-ebee3d9e11.zip/node_modules/@mui/base/useCompound/useCompoundParent.js
'use client';


const CompoundComponentContext = /*#__PURE__*/react.createContext(null);
if (false) {}
/**
 * Sorts the subitems by their position in the DOM.
 */
function sortSubitems(subitems) {
  const subitemsArray = Array.from(subitems.keys()).map(key => {
    const subitem = subitems.get(key);
    return {
      key,
      subitem
    };
  });
  subitemsArray.sort((a, b) => {
    const aNode = a.subitem.ref.current;
    const bNode = b.subitem.ref.current;
    if (aNode === null || bNode === null || aNode === bNode) {
      return 0;
    }

    // eslint-disable-next-line no-bitwise
    return aNode.compareDocumentPosition(bNode) & Node.DOCUMENT_POSITION_PRECEDING ? 1 : -1;
  });
  return new Map(subitemsArray.map(item => [item.key, item.subitem]));
}

/**
 * Provides a way for a component to know about its children.
 *
 * Child components register themselves with the `useCompoundItem` hook, passing in arbitrary metadata to the parent.
 *
 * This is a more powerful altervantive to `children` traversal, as child components don't have to be placed
 * directly inside the parent component. They can be anywhere in the tree (and even rendered by other components).
 *
 * The downside is that this doesn't work with SSR as it relies on the useEffect hook.
 *
 * @ignore - internal hook.
 */
function useCompoundParent() {
  const [subitems, setSubitems] = react.useState(new Map());
  const subitemKeys = react.useRef(new Set());
  const deregisterItem = react.useCallback(function deregisterItem(id) {
    subitemKeys.current.delete(id);
    setSubitems(previousState => {
      const newState = new Map(previousState);
      newState.delete(id);
      return newState;
    });
  }, []);
  const registerItem = react.useCallback(function registerItem(id, item) {
    let providedOrGeneratedId;
    if (typeof id === 'function') {
      providedOrGeneratedId = id(subitemKeys.current);
    } else {
      providedOrGeneratedId = id;
    }
    subitemKeys.current.add(providedOrGeneratedId);
    setSubitems(previousState => {
      const newState = new Map(previousState);
      newState.set(providedOrGeneratedId, item);
      return newState;
    });
    return {
      id: providedOrGeneratedId,
      deregister: () => deregisterItem(providedOrGeneratedId)
    };
  }, [deregisterItem]);
  const sortedSubitems = react.useMemo(() => sortSubitems(subitems), [subitems]);
  const getItemIndex = react.useCallback(function getItemIndex(id) {
    return Array.from(sortedSubitems.keys()).indexOf(id);
  }, [sortedSubitems]);
  const contextValue = react.useMemo(() => ({
    getItemIndex,
    registerItem,
    totalSubitemCount: subitems.size
  }), [getItemIndex, registerItem, subitems.size]);
  return {
    contextValue,
    subitems: sortedSubitems
  };
}
;// CONCATENATED MODULE: ./.yarn/__virtual__/@mui-base-virtual-32e976ef84/0/cache/@mui-base-npm-5.0.0-beta.40-248417914d-ebee3d9e11.zip/node_modules/@mui/base/useCompound/useCompoundItem.js
'use client';




/**
 * Registers a child component with the parent component.
 *
 * @param id A unique key for the child component. If the `id` is `undefined`, the registration logic will not run (this can sometimes be the case during SSR).
 *   This can be either a value, or a function that generates a value based on already registered siblings' ids.
 *   If a function, it's called with the set of the ids of all the items that have already been registered.
 *   Return `existingKeys.size` if you want to use the index of the new item as the id.
 * @param itemMetadata Arbitrary metadata to pass to the parent component. This should be a stable reference (for example a memoized object), to avoid unnecessary re-registrations.
 *
 * @ignore - internal hook.
 */
function useCompoundItem(id, itemMetadata) {
  const context = react.useContext(CompoundComponentContext);
  if (context === null) {
    throw new Error('useCompoundItem must be used within a useCompoundParent');
  }
  const {
    registerItem
  } = context;
  const [registeredId, setRegisteredId] = react.useState(typeof id === 'function' ? undefined : id);
  useEnhancedEffect_useEnhancedEffect(() => {
    const {
      id: returnedId,
      deregister
    } = registerItem(id, itemMetadata);
    setRegisteredId(returnedId);
    return deregister;
  }, [registerItem, itemMetadata, id]);
  return {
    id: registeredId,
    index: registeredId !== undefined ? context.getItemIndex(registeredId) : -1,
    totalItemCount: context.totalSubitemCount
  };
}
;// CONCATENATED MODULE: ./.yarn/__virtual__/@mui-base-virtual-32e976ef84/0/cache/@mui-base-npm-5.0.0-beta.40-248417914d-ebee3d9e11.zip/node_modules/@mui/base/useList/listActions.types.js
const ListActionTypes = {
  blur: 'list:blur',
  focus: 'list:focus',
  itemClick: 'list:itemClick',
  itemHover: 'list:itemHover',
  itemsChange: 'list:itemsChange',
  keyDown: 'list:keyDown',
  resetHighlight: 'list:resetHighlight',
  highlightLast: 'list:highlightLast',
  textNavigation: 'list:textNavigation',
  clearSelection: 'list:clearSelection'
};

/**
 * A union of all standard actions that can be dispatched to the list reducer.
 */
;// CONCATENATED MODULE: ./.yarn/__virtual__/@mui-base-virtual-32e976ef84/0/cache/@mui-base-npm-5.0.0-beta.40-248417914d-ebee3d9e11.zip/node_modules/@mui/base/useList/ListContext.js

const ListContext = /*#__PURE__*/react.createContext(null);
if (false) {}
;// CONCATENATED MODULE: ./.yarn/__virtual__/@mui-base-virtual-32e976ef84/0/cache/@mui-base-npm-5.0.0-beta.40-248417914d-ebee3d9e11.zip/node_modules/@mui/base/useList/useListItem.js
'use client';







/**
 * Contains the logic for an item of a list-like component (for example Select, Menu, etc.).
 * It handles the item's mouse events and tab index.
 *
 * @template ItemValue The type of the item's value. This should be consistent with the type of useList's `items` parameter.
 * @ignore - internal hook.
 */
function useListItem(parameters) {
  const {
    handlePointerOverEvents = false,
    item
  } = parameters;
  const listContext = react.useContext(ListContext);
  if (!listContext) {
    throw new Error('useListItem must be used within a ListProvider');
  }
  const {
    dispatch,
    getItemState
  } = listContext;
  const {
    highlighted,
    selected,
    focusable
  } = getItemState(item);
  const createHandleClick = react.useCallback(externalHandlers => event => {
    var _externalHandlers$onC;
    (_externalHandlers$onC = externalHandlers.onClick) == null || _externalHandlers$onC.call(externalHandlers, event);
    if (event.defaultPrevented) {
      return;
    }
    if (false) {}
    dispatch({
      type: ListActionTypes.itemClick,
      item: item,
      event
    });
  }, [dispatch, item]);
  const createHandlePointerOver = react.useCallback(externalHandlers => event => {
    var _externalHandlers$onM;
    (_externalHandlers$onM = externalHandlers.onMouseOver) == null || _externalHandlers$onM.call(externalHandlers, event);
    if (event.defaultPrevented) {
      return;
    }
    if (false) {}
    dispatch({
      type: ListActionTypes.itemHover,
      item: item,
      event
    });
  }, [dispatch, item]);
  let tabIndex;
  if (focusable) {
    tabIndex = highlighted ? 0 : -1;
  }
  const getRootProps = (externalProps = {}) => {
    const externalEventHandlers = extractEventHandlers(externalProps);
    return _extends({}, externalProps, {
      onClick: createHandleClick(externalEventHandlers),
      onPointerOver: handlePointerOverEvents ? createHandlePointerOver(externalEventHandlers) : undefined,
      tabIndex
    });
  };
  return {
    getRootProps,
    highlighted,
    selected
  };
}
;// CONCATENATED MODULE: ./.yarn/__virtual__/@mui-utils-virtual-714b21789a/0/cache/@mui-utils-npm-5.16.6-19c1f450c3-214bc3e9fe.zip/node_modules/@mui/utils/esm/useTimeout/useTimeout.js
'use client';



class Timeout {
  constructor() {
    this.currentId = null;
    this.clear = () => {
      if (this.currentId !== null) {
        clearTimeout(this.currentId);
        this.currentId = null;
      }
    };
    this.disposeEffect = () => {
      return this.clear;
    };
  }
  static create() {
    return new Timeout();
  }
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(delay, fn) {
    this.clear();
    this.currentId = setTimeout(() => {
      this.currentId = null;
      fn();
    }, delay);
  }
}
function useTimeout() {
  const timeout = useLazyRef(Timeout.create).current;
  useOnMount(timeout.disposeEffect);
  return timeout;
}
;// CONCATENATED MODULE: ./.yarn/__virtual__/@mui-utils-virtual-714b21789a/0/cache/@mui-utils-npm-5.16.6-19c1f450c3-214bc3e9fe.zip/node_modules/@mui/utils/esm/useIsFocusVisible/useIsFocusVisible.js
'use client';

// based on https://github.com/WICG/focus-visible/blob/v4.1.5/src/focus-visible.js


let hadKeyboardEvent = true;
let hadFocusVisibleRecently = false;
const hadFocusVisibleRecentlyTimeout = new Timeout();
const inputTypesWhitelist = {
  text: true,
  search: true,
  url: true,
  tel: true,
  email: true,
  password: true,
  number: true,
  date: true,
  month: true,
  week: true,
  time: true,
  datetime: true,
  'datetime-local': true
};

/**
 * Computes whether the given element should automatically trigger the
 * `focus-visible` class being added, i.e. whether it should always match
 * `:focus-visible` when focused.
 * @param {Element} node
 * @returns {boolean}
 */
function focusTriggersKeyboardModality(node) {
  const {
    type,
    tagName
  } = node;
  if (tagName === 'INPUT' && inputTypesWhitelist[type] && !node.readOnly) {
    return true;
  }
  if (tagName === 'TEXTAREA' && !node.readOnly) {
    return true;
  }
  if (node.isContentEditable) {
    return true;
  }
  return false;
}

/**
 * Keep track of our keyboard modality state with `hadKeyboardEvent`.
 * If the most recent user interaction was via the keyboard;
 * and the key press did not include a meta, alt/option, or control key;
 * then the modality is keyboard. Otherwise, the modality is not keyboard.
 * @param {KeyboardEvent} event
 */
function handleKeyDown(event) {
  if (event.metaKey || event.altKey || event.ctrlKey) {
    return;
  }
  hadKeyboardEvent = true;
}

/**
 * If at any point a user clicks with a pointing device, ensure that we change
 * the modality away from keyboard.
 * This avoids the situation where a user presses a key on an already focused
 * element, and then clicks on a different element, focusing it with a
 * pointing device, while we still think we're in keyboard modality.
 */
function handlePointerDown() {
  hadKeyboardEvent = false;
}
function handleVisibilityChange() {
  if (this.visibilityState === 'hidden') {
    // If the tab becomes active again, the browser will handle calling focus
    // on the element (Safari actually calls it twice).
    // If this tab change caused a blur on an element with focus-visible,
    // re-apply the class when the user switches back to the tab.
    if (hadFocusVisibleRecently) {
      hadKeyboardEvent = true;
    }
  }
}
function prepare(doc) {
  doc.addEventListener('keydown', handleKeyDown, true);
  doc.addEventListener('mousedown', handlePointerDown, true);
  doc.addEventListener('pointerdown', handlePointerDown, true);
  doc.addEventListener('touchstart', handlePointerDown, true);
  doc.addEventListener('visibilitychange', handleVisibilityChange, true);
}
function teardown(doc) {
  doc.removeEventListener('keydown', handleKeyDown, true);
  doc.removeEventListener('mousedown', handlePointerDown, true);
  doc.removeEventListener('pointerdown', handlePointerDown, true);
  doc.removeEventListener('touchstart', handlePointerDown, true);
  doc.removeEventListener('visibilitychange', handleVisibilityChange, true);
}
function isFocusVisible(event) {
  const {
    target
  } = event;
  try {
    return target.matches(':focus-visible');
  } catch (error) {
    // Browsers not implementing :focus-visible will throw a SyntaxError.
    // We use our own heuristic for those browsers.
    // Rethrow might be better if it's not the expected error but do we really
    // want to crash if focus-visible malfunctioned?
  }

  // No need for validFocusTarget check. The user does that by attaching it to
  // focusable events only.
  return hadKeyboardEvent || focusTriggersKeyboardModality(target);
}
function useIsFocusVisible() {
  const ref = react.useCallback(node => {
    if (node != null) {
      prepare(node.ownerDocument);
    }
  }, []);
  const isFocusVisibleRef = react.useRef(false);

  /**
   * Should be called if a blur event is fired
   */
  function handleBlurVisible() {
    // checking against potential state variable does not suffice if we focus and blur synchronously.
    // React wouldn't have time to trigger a re-render so `focusVisible` would be stale.
    // Ideally we would adjust `isFocusVisible(event)` to look at `relatedTarget` for blur events.
    // This doesn't work in IE11 due to https://github.com/facebook/react/issues/3751
    // TODO: check again if React releases their internal changes to focus event handling (https://github.com/facebook/react/pull/19186).
    if (isFocusVisibleRef.current) {
      // To detect a tab/window switch, we look for a blur event followed
      // rapidly by a visibility change.
      // If we don't see a visibility change within 100ms, it's probably a
      // regular focus change.
      hadFocusVisibleRecently = true;
      hadFocusVisibleRecentlyTimeout.start(100, () => {
        hadFocusVisibleRecently = false;
      });
      isFocusVisibleRef.current = false;
      return true;
    }
    return false;
  }

  /**
   * Should be called if a blur event is fired
   */
  function handleFocusVisible(event) {
    if (isFocusVisible(event)) {
      isFocusVisibleRef.current = true;
      return true;
    }
    return false;
  }
  return {
    isFocusVisibleRef,
    onFocus: handleFocusVisible,
    onBlur: handleBlurVisible,
    ref
  };
}
;// CONCATENATED MODULE: ./.yarn/__virtual__/@mui-base-virtual-32e976ef84/0/cache/@mui-base-npm-5.0.0-beta.40-248417914d-ebee3d9e11.zip/node_modules/@mui/base/utils/useRootElementName.js
'use client';


/**
 * @ignore - do not document.
 *
 * Use this function determine the host element correctly on the server (in a SSR context, for example Next.js)
 */
function useRootElementName(parameters) {
  const {
    rootElementName: rootElementNameProp = '',
    componentName
  } = parameters;
  const [rootElementName, setRootElementName] = react.useState(rootElementNameProp.toUpperCase());
  if (false) {}
  const updateRootElementName = react.useCallback(instance => {
    var _instance$tagName;
    setRootElementName((_instance$tagName = instance == null ? void 0 : instance.tagName) != null ? _instance$tagName : '');
  }, []);
  return [rootElementName, updateRootElementName];
}
;// CONCATENATED MODULE: ./.yarn/__virtual__/@mui-base-virtual-32e976ef84/0/cache/@mui-base-npm-5.0.0-beta.40-248417914d-ebee3d9e11.zip/node_modules/@mui/base/useButton/useButton.js
'use client';






/**
 *
 * Demos:
 *
 * - [Button](https://mui.com/base-ui/react-button/#hook)
 *
 * API:
 *
 * - [useButton API](https://mui.com/base-ui/react-button/hooks-api/#use-button)
 */
function useButton(parameters = {}) {
  const {
    disabled = false,
    focusableWhenDisabled,
    href,
    rootRef: externalRef,
    tabIndex,
    to,
    type,
    rootElementName: rootElementNameProp
  } = parameters;
  const buttonRef = react.useRef();
  const [active, setActive] = react.useState(false);
  const {
    isFocusVisibleRef,
    onFocus: handleFocusVisible,
    onBlur: handleBlurVisible,
    ref: focusVisibleRef
  } = useIsFocusVisible();
  const [focusVisible, setFocusVisible] = react.useState(false);
  if (disabled && !focusableWhenDisabled && focusVisible) {
    setFocusVisible(false);
  }
  react.useEffect(() => {
    isFocusVisibleRef.current = focusVisible;
  }, [focusVisible, isFocusVisibleRef]);
  const [rootElementName, updateRootElementName] = useRootElementName({
    rootElementName: rootElementNameProp != null ? rootElementNameProp : href || to ? 'a' : undefined,
    componentName: 'Button'
  });
  const createHandleMouseLeave = otherHandlers => event => {
    var _otherHandlers$onMous;
    if (focusVisible) {
      event.preventDefault();
    }
    (_otherHandlers$onMous = otherHandlers.onMouseLeave) == null || _otherHandlers$onMous.call(otherHandlers, event);
  };
  const createHandleBlur = otherHandlers => event => {
    var _otherHandlers$onBlur;
    handleBlurVisible(event);
    if (isFocusVisibleRef.current === false) {
      setFocusVisible(false);
    }
    (_otherHandlers$onBlur = otherHandlers.onBlur) == null || _otherHandlers$onBlur.call(otherHandlers, event);
  };
  const createHandleFocus = otherHandlers => event => {
    var _otherHandlers$onFocu2;
    // Fix for https://github.com/facebook/react/issues/7769
    if (!buttonRef.current) {
      buttonRef.current = event.currentTarget;
    }
    handleFocusVisible(event);
    if (isFocusVisibleRef.current === true) {
      var _otherHandlers$onFocu;
      setFocusVisible(true);
      (_otherHandlers$onFocu = otherHandlers.onFocusVisible) == null || _otherHandlers$onFocu.call(otherHandlers, event);
    }
    (_otherHandlers$onFocu2 = otherHandlers.onFocus) == null || _otherHandlers$onFocu2.call(otherHandlers, event);
  };
  const isNativeButton = () => {
    const button = buttonRef.current;
    return rootElementName === 'BUTTON' || rootElementName === 'INPUT' && ['button', 'submit', 'reset'].includes(button == null ? void 0 : button.type) || rootElementName === 'A' && (button == null ? void 0 : button.href);
  };
  const createHandleClick = otherHandlers => event => {
    if (!disabled) {
      var _otherHandlers$onClic;
      (_otherHandlers$onClic = otherHandlers.onClick) == null || _otherHandlers$onClic.call(otherHandlers, event);
    }
  };
  const createHandleMouseDown = otherHandlers => event => {
    var _otherHandlers$onMous2;
    if (!disabled) {
      setActive(true);
      document.addEventListener('mouseup', () => {
        setActive(false);
      }, {
        once: true
      });
    }
    (_otherHandlers$onMous2 = otherHandlers.onMouseDown) == null || _otherHandlers$onMous2.call(otherHandlers, event);
  };
  const createHandleKeyDown = otherHandlers => event => {
    var _otherHandlers$onKeyD;
    (_otherHandlers$onKeyD = otherHandlers.onKeyDown) == null || _otherHandlers$onKeyD.call(otherHandlers, event);
    if (event.defaultMuiPrevented) {
      return;
    }
    if (event.target === event.currentTarget && !isNativeButton() && event.key === ' ') {
      event.preventDefault();
    }
    if (event.target === event.currentTarget && event.key === ' ' && !disabled) {
      setActive(true);
    }

    // Keyboard accessibility for non interactive elements
    if (event.target === event.currentTarget && !isNativeButton() && event.key === 'Enter' && !disabled) {
      var _otherHandlers$onClic2;
      (_otherHandlers$onClic2 = otherHandlers.onClick) == null || _otherHandlers$onClic2.call(otherHandlers, event);
      event.preventDefault();
    }
  };
  const createHandleKeyUp = otherHandlers => event => {
    var _otherHandlers$onKeyU;
    // calling preventDefault in keyUp on a <button> will not dispatch a click event if Space is pressed
    // https://codesandbox.io/p/sandbox/button-keyup-preventdefault-dn7f0

    if (event.target === event.currentTarget) {
      setActive(false);
    }
    (_otherHandlers$onKeyU = otherHandlers.onKeyUp) == null || _otherHandlers$onKeyU.call(otherHandlers, event);

    // Keyboard accessibility for non interactive elements
    if (event.target === event.currentTarget && !isNativeButton() && !disabled && event.key === ' ' && !event.defaultMuiPrevented) {
      var _otherHandlers$onClic3;
      (_otherHandlers$onClic3 = otherHandlers.onClick) == null || _otherHandlers$onClic3.call(otherHandlers, event);
    }
  };
  const handleRef = useForkRef(updateRootElementName, externalRef, focusVisibleRef, buttonRef);
  const buttonProps = {};
  if (tabIndex !== undefined) {
    buttonProps.tabIndex = tabIndex;
  }
  if (rootElementName === 'BUTTON') {
    buttonProps.type = type != null ? type : 'button';
    if (focusableWhenDisabled) {
      buttonProps['aria-disabled'] = disabled;
    } else {
      buttonProps.disabled = disabled;
    }
  } else if (rootElementName === 'INPUT') {
    if (type && ['button', 'submit', 'reset'].includes(type)) {
      if (focusableWhenDisabled) {
        buttonProps['aria-disabled'] = disabled;
      } else {
        buttonProps.disabled = disabled;
      }
    }
  } else if (rootElementName !== '') {
    if (!href && !to) {
      buttonProps.role = 'button';
      buttonProps.tabIndex = tabIndex != null ? tabIndex : 0;
    }
    if (disabled) {
      buttonProps['aria-disabled'] = disabled;
      buttonProps.tabIndex = focusableWhenDisabled ? tabIndex != null ? tabIndex : 0 : -1;
    }
  }
  const getRootProps = (externalProps = {}) => {
    const externalEventHandlers = _extends({}, extractEventHandlers(parameters), extractEventHandlers(externalProps));
    const props = _extends({
      type
    }, externalEventHandlers, buttonProps, externalProps, {
      onBlur: createHandleBlur(externalEventHandlers),
      onClick: createHandleClick(externalEventHandlers),
      onFocus: createHandleFocus(externalEventHandlers),
      onKeyDown: createHandleKeyDown(externalEventHandlers),
      onKeyUp: createHandleKeyUp(externalEventHandlers),
      onMouseDown: createHandleMouseDown(externalEventHandlers),
      onMouseLeave: createHandleMouseLeave(externalEventHandlers),
      ref: handleRef
    });

    // onFocusVisible can be present on the props or parameters,
    // but it's not a valid React event handler so it must not be forwarded to the inner component.
    // If present, it will be handled by the focus handler.
    delete props.onFocusVisible;
    return props;
  };
  return {
    getRootProps,
    focusVisible,
    setFocusVisible,
    active,
    rootRef: handleRef
  };
}
;// CONCATENATED MODULE: ./.yarn/__virtual__/@mui-base-virtual-32e976ef84/0/cache/@mui-base-npm-5.0.0-beta.40-248417914d-ebee3d9e11.zip/node_modules/@mui/base/utils/combineHooksSlotProps.js

/**
 * Combines the two get*Props functions from Base UI hooks into one.
 * Useful when a hook uses two other hooks behind the scenes
 * (such as useSelect that depends on useList and useButton for its root slot).
 *
 * The resulting function will return the combined props.
 * They are merged from left to right, similarly to how Object.assign works.
 *
 * The getSecondProps function will receive the result of the getFirstProps function as its argument,
 * so its event handlers can call the previous handlers and act depending on its result.
 *
 * @param getFirstProps - A getter function that returns the props for the first slot. It receives the external event handlers as its argument.
 * @param getSecondProps - A getter function that returns the props for the second slot. It receives the result of the getFirstProps function as its argument.
 */
function combineHooksSlotProps(getFirstProps, getSecondProps) {
  return function getCombinedProps(external = {}) {
    const firstResult = _extends({}, external, getFirstProps(external));
    const result = _extends({}, firstResult, getSecondProps(firstResult));
    return result;
  };
}
;// CONCATENATED MODULE: ./.yarn/__virtual__/@mui-base-virtual-32e976ef84/0/cache/@mui-base-npm-5.0.0-beta.40-248417914d-ebee3d9e11.zip/node_modules/@mui/base/useTab/useTab.js
'use client';










function tabValueGenerator(otherTabValues) {
  return otherTabValues.size;
}

/**
 *
 * Demos:
 *
 * - [Tabs](https://mui.com/base-ui/react-tabs/#hooks)
 *
 * API:
 *
 * - [useTab API](https://mui.com/base-ui/react-tabs/hooks-api/#use-tab)
 */
function useTab(parameters) {
  const {
    value: valueParam,
    rootRef: externalRef,
    disabled = false,
    id: idParam
  } = parameters;
  const tabRef = react.useRef(null);
  const id = useId(idParam);
  const {
    value: selectedValue,
    selectionFollowsFocus,
    getTabPanelId
  } = useTabsContext();
  const tabMetadata = react.useMemo(() => ({
    disabled,
    ref: tabRef,
    id
  }), [disabled, tabRef, id]);
  const {
    id: value,
    index,
    totalItemCount: totalTabsCount
  } = useCompoundItem(valueParam != null ? valueParam : tabValueGenerator, tabMetadata);
  const {
    getRootProps: getTabProps,
    highlighted,
    selected
  } = useListItem({
    item: value
  });
  const {
    getRootProps: getButtonProps,
    rootRef: buttonRefHandler,
    active,
    focusVisible,
    setFocusVisible
  } = useButton({
    disabled,
    focusableWhenDisabled: !selectionFollowsFocus,
    type: 'button'
  });
  const handleRef = useForkRef(tabRef, externalRef, buttonRefHandler);
  const tabPanelId = value !== undefined ? getTabPanelId(value) : undefined;
  const getRootProps = (externalProps = {}) => {
    const externalEventHandlers = extractEventHandlers(externalProps);
    const getCombinedRootProps = combineHooksSlotProps(getTabProps, getButtonProps);
    return _extends({}, externalProps, getCombinedRootProps(externalEventHandlers), {
      role: 'tab',
      'aria-controls': tabPanelId,
      'aria-selected': selected,
      id,
      ref: handleRef
    });
  };
  return {
    getRootProps,
    active,
    focusVisible,
    highlighted,
    index,
    rootRef: handleRef,
    // the `selected` state isn't set on the server (it relies on effects to be calculated),
    // so we fall back to checking the `value` prop with the selectedValue from the TabsContext
    selected: selected || value === selectedValue,
    setFocusVisible,
    totalTabsCount
  };
}

;// CONCATENATED MODULE: ./.yarn/__virtual__/@mui-base-virtual-32e976ef84/0/cache/@mui-base-npm-5.0.0-beta.40-248417914d-ebee3d9e11.zip/node_modules/@mui/base/utils/isHostComponent.js
/**
 * Determines if a given element is a DOM element name (i.e. not a React component).
 */
function isHostComponent(element) {
  return typeof element === 'string';
}
;// CONCATENATED MODULE: ./.yarn/__virtual__/@mui-base-virtual-32e976ef84/0/cache/@mui-base-npm-5.0.0-beta.40-248417914d-ebee3d9e11.zip/node_modules/@mui/base/utils/appendOwnerState.js



/**
 * Type of the ownerState based on the type of an element it applies to.
 * This resolves to the provided OwnerState for React components and `undefined` for host components.
 * Falls back to `OwnerState | undefined` when the exact type can't be determined in development time.
 */

/**
 * Appends the ownerState object to the props, merging with the existing one if necessary.
 *
 * @param elementType Type of the element that owns the `existingProps`. If the element is a DOM node or undefined, `ownerState` is not applied.
 * @param otherProps Props of the element.
 * @param ownerState
 */
function appendOwnerState(elementType, otherProps, ownerState) {
  if (elementType === undefined || isHostComponent(elementType)) {
    return otherProps;
  }
  return _extends({}, otherProps, {
    ownerState: _extends({}, otherProps.ownerState, ownerState)
  });
}
;// CONCATENATED MODULE: ./.yarn/cache/clsx-npm-2.1.1-96125b98be-cdfb57fa6c.zip/node_modules/clsx/dist/clsx.mjs
function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}/* harmony default export */ const dist_clsx = (clsx);
;// CONCATENATED MODULE: ./.yarn/__virtual__/@mui-base-virtual-32e976ef84/0/cache/@mui-base-npm-5.0.0-beta.40-248417914d-ebee3d9e11.zip/node_modules/@mui/base/utils/omitEventHandlers.js
/**
 * Removes event handlers from the given object.
 * A field is considered an event handler if it is a function with a name beginning with `on`.
 *
 * @param object Object to remove event handlers from.
 * @returns Object with event handlers removed.
 */
function omitEventHandlers(object) {
  if (object === undefined) {
    return {};
  }
  const result = {};
  Object.keys(object).filter(prop => !(prop.match(/^on[A-Z]/) && typeof object[prop] === 'function')).forEach(prop => {
    result[prop] = object[prop];
  });
  return result;
}
;// CONCATENATED MODULE: ./.yarn/__virtual__/@mui-base-virtual-32e976ef84/0/cache/@mui-base-npm-5.0.0-beta.40-248417914d-ebee3d9e11.zip/node_modules/@mui/base/utils/mergeSlotProps.js




/**
 * Merges the slot component internal props (usually coming from a hook)
 * with the externally provided ones.
 *
 * The merge order is (the latter overrides the former):
 * 1. The internal props (specified as a getter function to work with get*Props hook result)
 * 2. Additional props (specified internally on a Base UI component)
 * 3. External props specified on the owner component. These should only be used on a root slot.
 * 4. External props specified in the `slotProps.*` prop.
 * 5. The `className` prop - combined from all the above.
 * @param parameters
 * @returns
 */
function mergeSlotProps(parameters) {
  const {
    getSlotProps,
    additionalProps,
    externalSlotProps,
    externalForwardedProps,
    className
  } = parameters;
  if (!getSlotProps) {
    // The simpler case - getSlotProps is not defined, so no internal event handlers are defined,
    // so we can simply merge all the props without having to worry about extracting event handlers.
    const joinedClasses = dist_clsx(additionalProps == null ? void 0 : additionalProps.className, className, externalForwardedProps == null ? void 0 : externalForwardedProps.className, externalSlotProps == null ? void 0 : externalSlotProps.className);
    const mergedStyle = _extends({}, additionalProps == null ? void 0 : additionalProps.style, externalForwardedProps == null ? void 0 : externalForwardedProps.style, externalSlotProps == null ? void 0 : externalSlotProps.style);
    const props = _extends({}, additionalProps, externalForwardedProps, externalSlotProps);
    if (joinedClasses.length > 0) {
      props.className = joinedClasses;
    }
    if (Object.keys(mergedStyle).length > 0) {
      props.style = mergedStyle;
    }
    return {
      props,
      internalRef: undefined
    };
  }

  // In this case, getSlotProps is responsible for calling the external event handlers.
  // We don't need to include them in the merged props because of this.

  const eventHandlers = extractEventHandlers(_extends({}, externalForwardedProps, externalSlotProps));
  const componentsPropsWithoutEventHandlers = omitEventHandlers(externalSlotProps);
  const otherPropsWithoutEventHandlers = omitEventHandlers(externalForwardedProps);
  const internalSlotProps = getSlotProps(eventHandlers);

  // The order of classes is important here.
  // Emotion (that we use in libraries consuming Base UI) depends on this order
  // to properly override style. It requires the most important classes to be last
  // (see https://github.com/mui/material-ui/pull/33205) for the related discussion.
  const joinedClasses = dist_clsx(internalSlotProps == null ? void 0 : internalSlotProps.className, additionalProps == null ? void 0 : additionalProps.className, className, externalForwardedProps == null ? void 0 : externalForwardedProps.className, externalSlotProps == null ? void 0 : externalSlotProps.className);
  const mergedStyle = _extends({}, internalSlotProps == null ? void 0 : internalSlotProps.style, additionalProps == null ? void 0 : additionalProps.style, externalForwardedProps == null ? void 0 : externalForwardedProps.style, externalSlotProps == null ? void 0 : externalSlotProps.style);
  const props = _extends({}, internalSlotProps, additionalProps, otherPropsWithoutEventHandlers, componentsPropsWithoutEventHandlers);
  if (joinedClasses.length > 0) {
    props.className = joinedClasses;
  }
  if (Object.keys(mergedStyle).length > 0) {
    props.style = mergedStyle;
  }
  return {
    props,
    internalRef: internalSlotProps.ref
  };
}
;// CONCATENATED MODULE: ./.yarn/__virtual__/@mui-base-virtual-32e976ef84/0/cache/@mui-base-npm-5.0.0-beta.40-248417914d-ebee3d9e11.zip/node_modules/@mui/base/utils/resolveComponentProps.js
/**
 * If `componentProps` is a function, calls it with the provided `ownerState`.
 * Otherwise, just returns `componentProps`.
 */
function resolveComponentProps(componentProps, ownerState, slotState) {
  if (typeof componentProps === 'function') {
    return componentProps(ownerState, slotState);
  }
  return componentProps;
}
;// CONCATENATED MODULE: ./.yarn/__virtual__/@mui-base-virtual-32e976ef84/0/cache/@mui-base-npm-5.0.0-beta.40-248417914d-ebee3d9e11.zip/node_modules/@mui/base/utils/useSlotProps.js
'use client';



const _excluded = ["elementType", "externalSlotProps", "ownerState", "skipResolvingSlotProps"];




/**
 * @ignore - do not document.
 * Builds the props to be passed into the slot of an unstyled component.
 * It merges the internal props of the component with the ones supplied by the user, allowing to customize the behavior.
 * If the slot component is not a host component, it also merges in the `ownerState`.
 *
 * @param parameters.getSlotProps - A function that returns the props to be passed to the slot component.
 */
function useSlotProps(parameters) {
  var _parameters$additiona;
  const {
      elementType,
      externalSlotProps,
      ownerState,
      skipResolvingSlotProps = false
    } = parameters,
    rest = _objectWithoutPropertiesLoose(parameters, _excluded);
  const resolvedComponentsProps = skipResolvingSlotProps ? {} : resolveComponentProps(externalSlotProps, ownerState);
  const {
    props: mergedProps,
    internalRef
  } = mergeSlotProps(_extends({}, rest, {
    externalSlotProps: resolvedComponentsProps
  }));
  const ref = useForkRef(internalRef, resolvedComponentsProps == null ? void 0 : resolvedComponentsProps.ref, (_parameters$additiona = parameters.additionalProps) == null ? void 0 : _parameters$additiona.ref);
  const props = appendOwnerState(elementType, _extends({}, mergedProps, {
    ref
  }), ownerState);
  return props;
}
// EXTERNAL MODULE: ./.yarn/cache/react-npm-18.3.1-af38f3c1ae-261137d3f3.zip/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(59718);
;// CONCATENATED MODULE: ./.yarn/__virtual__/@mui-base-virtual-32e976ef84/0/cache/@mui-base-npm-5.0.0-beta.40-248417914d-ebee3d9e11.zip/node_modules/@mui/base/utils/ClassNameConfigurator.js
'use client';



const defaultContextValue = {
  disableDefaultClasses: false
};
const ClassNameConfiguratorContext = /*#__PURE__*/react.createContext(defaultContextValue);
if (false) {}
/**
 * @ignore - internal hook.
 *
 * Wraps the `generateUtilityClass` function and controls how the classes are generated.
 * Currently it only affects whether the classes are applied or not.
 *
 * @returns Function to be called with the `generateUtilityClass` function specific to a component to generate the classes.
 */
function useClassNamesOverride(generateUtilityClass) {
  const {
    disableDefaultClasses
  } = react.useContext(ClassNameConfiguratorContext);
  return slot => {
    if (disableDefaultClasses) {
      return '';
    }
    return generateUtilityClass(slot);
  };
}

/**
 * Allows to configure the components within to not apply any built-in classes.
 */
function ClassNameConfigurator(props) {
  const {
    disableDefaultClasses,
    children
  } = props;
  const contextValue = React.useMemo(() => ({
    disableDefaultClasses: disableDefaultClasses != null ? disableDefaultClasses : false
  }), [disableDefaultClasses]);
  return /*#__PURE__*/_jsx(ClassNameConfiguratorContext.Provider, {
    value: contextValue,
    children: children
  });
}
;// CONCATENATED MODULE: ./.yarn/__virtual__/@mui-base-virtual-32e976ef84/0/cache/@mui-base-npm-5.0.0-beta.40-248417914d-ebee3d9e11.zip/node_modules/@mui/base/Tab/Tab.js
'use client';



const Tab_excluded = ["action", "children", "disabled", "onChange", "onClick", "onFocus", "slotProps", "slots", "value"];









const useUtilityClasses = ownerState => {
  const {
    selected,
    disabled
  } = ownerState;
  const slots = {
    root: ['root', selected && 'selected', disabled && 'disabled']
  };
  return composeClasses(slots, useClassNamesOverride(getTabUtilityClass));
};
/**
 *
 * Demos:
 *
 * - [Tabs](https://mui.com/base-ui/react-tabs/)
 *
 * API:
 *
 * - [Tab API](https://mui.com/base-ui/react-tabs/components-api/#tab)
 */
const Tab_Tab = /*#__PURE__*/react.forwardRef(function Tab(props, forwardedRef) {
  var _slots$root;
  const {
      children,
      disabled = false,
      slotProps = {},
      slots = {},
      value
    } = props,
    other = _objectWithoutPropertiesLoose(props, Tab_excluded);
  const tabRef = react.useRef();
  const handleRef = useForkRef(tabRef, forwardedRef);
  const {
    active,
    highlighted,
    selected,
    getRootProps
  } = useTab(_extends({}, props, {
    rootRef: handleRef,
    value
  }));
  const ownerState = _extends({}, props, {
    active,
    disabled,
    highlighted,
    selected
  });
  const classes = useUtilityClasses(ownerState);
  const TabRoot = (_slots$root = slots.root) != null ? _slots$root : 'button';
  const tabRootProps = useSlotProps({
    elementType: TabRoot,
    getSlotProps: getRootProps,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    additionalProps: {
      ref: forwardedRef
    },
    ownerState,
    className: classes.root
  });
  return /*#__PURE__*/(0,jsx_runtime.jsx)(TabRoot, _extends({}, tabRootProps, {
    children: children
  }));
});
 false ? 0 : void 0;

;// CONCATENATED MODULE: ./.yarn/__virtual__/@mui-base-virtual-32e976ef84/0/cache/@mui-base-npm-5.0.0-beta.40-248417914d-ebee3d9e11.zip/node_modules/@mui/base/TabsList/tabsListClasses.js


const tabsListClasses_COMPONENT_NAME = 'TabsList';
function getTabsListUtilityClass(slot) {
  return generateUtilityClass_generateUtilityClass(tabsListClasses_COMPONENT_NAME, slot);
}
const tabsListClasses = generateUtilityClasses(tabsListClasses_COMPONENT_NAME, ['root', 'horizontal', 'vertical']);
;// CONCATENATED MODULE: ./.yarn/__virtual__/@mui-base-virtual-32e976ef84/0/cache/@mui-base-npm-5.0.0-beta.40-248417914d-ebee3d9e11.zip/node_modules/@mui/base/useTabsList/useTabsList.types.js
const TabsListActionTypes = {
  valueChange: 'valueChange'
};
;// CONCATENATED MODULE: ./.yarn/__virtual__/@mui-base-virtual-32e976ef84/0/cache/@mui-base-npm-5.0.0-beta.40-248417914d-ebee3d9e11.zip/node_modules/@mui/base/useList/listReducer.js


/**
 * Looks up the next valid item to highlight within the list.
 *
 * @param currentIndex The index of the start of the search.
 * @param lookupDirection Whether to look for the next or previous item.
 * @param items The array of items to search.
 * @param includeDisabledItems Whether to include disabled items in the search.
 * @param isItemDisabled A function that determines whether an item is disabled.
 * @param wrapAround Whether to wrap around the list when searching.
 * @returns The index of the next valid item to highlight or -1 if no valid item is found.
 */
function findValidItemToHighlight(currentIndex, lookupDirection, items, includeDisabledItems, isItemDisabled, wrapAround) {
  if (items.length === 0 || !includeDisabledItems && items.every((item, itemIndex) => isItemDisabled(item, itemIndex))) {
    return -1;
  }
  let nextFocus = currentIndex;
  for (;;) {
    // No valid items found
    if (!wrapAround && lookupDirection === 'next' && nextFocus === items.length || !wrapAround && lookupDirection === 'previous' && nextFocus === -1) {
      return -1;
    }
    const nextFocusDisabled = includeDisabledItems ? false : isItemDisabled(items[nextFocus], nextFocus);
    if (nextFocusDisabled) {
      nextFocus += lookupDirection === 'next' ? 1 : -1;
      if (wrapAround) {
        nextFocus = (nextFocus + items.length) % items.length;
      }
    } else {
      return nextFocus;
    }
  }
}

/**
 * Gets the next item to highlight based on the current highlighted item and the search direction.
 *
 * @param previouslyHighlightedValue The item from which to start the search for the next candidate.
 * @param offset The offset from the previously highlighted item to search for the next candidate or a special named value ('reset', 'start', 'end').
 * @param context The list action context.
 *
 * @returns The next item to highlight or null if no item is valid.
 */
function moveHighlight(previouslyHighlightedValue, offset, context) {
  var _items$nextIndex;
  const {
    items,
    isItemDisabled,
    disableListWrap,
    disabledItemsFocusable,
    itemComparer,
    focusManagement
  } = context;

  // TODO: make this configurable
  // The always should be an item highlighted when focus is managed by the DOM
  // so that it's accessible by the `tab` key.
  const defaultHighlightedIndex = focusManagement === 'DOM' ? 0 : -1;
  const maxIndex = items.length - 1;
  const previouslyHighlightedIndex = previouslyHighlightedValue == null ? -1 : items.findIndex(item => itemComparer(item, previouslyHighlightedValue));
  let nextIndexCandidate;
  let lookupDirection;
  let wrapAround = !disableListWrap;
  switch (offset) {
    case 'reset':
      if (defaultHighlightedIndex === -1) {
        return null;
      }
      nextIndexCandidate = 0;
      lookupDirection = 'next';
      wrapAround = false;
      break;
    case 'start':
      nextIndexCandidate = 0;
      lookupDirection = 'next';
      wrapAround = false;
      break;
    case 'end':
      nextIndexCandidate = maxIndex;
      lookupDirection = 'previous';
      wrapAround = false;
      break;
    default:
      {
        const newIndex = previouslyHighlightedIndex + offset;
        if (newIndex < 0) {
          if (!wrapAround && previouslyHighlightedIndex !== -1 || Math.abs(offset) > 1) {
            nextIndexCandidate = 0;
            lookupDirection = 'next';
          } else {
            nextIndexCandidate = maxIndex;
            lookupDirection = 'previous';
          }
        } else if (newIndex > maxIndex) {
          if (!wrapAround || Math.abs(offset) > 1) {
            nextIndexCandidate = maxIndex;
            lookupDirection = 'previous';
          } else {
            nextIndexCandidate = 0;
            lookupDirection = 'next';
          }
        } else {
          nextIndexCandidate = newIndex;
          lookupDirection = offset >= 0 ? 'next' : 'previous';
        }
      }
  }
  const nextIndex = findValidItemToHighlight(nextIndexCandidate, lookupDirection, items, disabledItemsFocusable, isItemDisabled, wrapAround);

  // If there are no valid items to highlight, return the previously highlighted item (if it's still valid).
  if (nextIndex === -1 && previouslyHighlightedValue !== null && !isItemDisabled(previouslyHighlightedValue, previouslyHighlightedIndex)) {
    return previouslyHighlightedValue;
  }
  return (_items$nextIndex = items[nextIndex]) != null ? _items$nextIndex : null;
}

/**
 * Toggles the selection of an item.
 *
 * @param item Item to toggle.
 * @param selectedValues Already selected items.
 * @param selectionMode The number of items that can be simultanously selected.
 * @param itemComparer A custom item comparer function.
 *
 * @returns The new array of selected items.
 */
function toggleSelection(item, selectedValues, selectionMode, itemComparer) {
  if (selectionMode === 'none') {
    return [];
  }
  if (selectionMode === 'single') {
    // if the item to select has already been selected, return the original array
    if (itemComparer(selectedValues[0], item)) {
      return selectedValues;
    }
    return [item];
  }

  // The toggled item is selected; remove it from the selection.
  if (selectedValues.some(sv => itemComparer(sv, item))) {
    return selectedValues.filter(sv => !itemComparer(sv, item));
  }

  // The toggled item is not selected - add it to the selection.
  return [...selectedValues, item];
}

/**
 * Handles item selection in a list.
 *
 * @param item - The item to be selected.
 * @param state - The current state of the list.
 * @param context - The context of the list action.
 * @returns The new state of the list after the item has been selected, or the original state if the item is disabled.
 */
function handleItemSelection(item, state, context) {
  const {
    itemComparer,
    isItemDisabled,
    selectionMode,
    items
  } = context;
  const {
    selectedValues
  } = state;
  const itemIndex = items.findIndex(i => itemComparer(item, i));
  if (isItemDisabled(item, itemIndex)) {
    return state;
  }

  // if the item is already selected, remove it from the selection, otherwise add it
  const newSelectedValues = toggleSelection(item, selectedValues, selectionMode, itemComparer);
  return _extends({}, state, {
    selectedValues: newSelectedValues,
    highlightedValue: item
  });
}
function listReducer_handleKeyDown(key, state, context) {
  const previouslySelectedValue = state.highlightedValue;
  const {
    orientation,
    pageSize
  } = context;
  switch (key) {
    case 'Home':
      return _extends({}, state, {
        highlightedValue: moveHighlight(previouslySelectedValue, 'start', context)
      });
    case 'End':
      return _extends({}, state, {
        highlightedValue: moveHighlight(previouslySelectedValue, 'end', context)
      });
    case 'PageUp':
      return _extends({}, state, {
        highlightedValue: moveHighlight(previouslySelectedValue, -pageSize, context)
      });
    case 'PageDown':
      return _extends({}, state, {
        highlightedValue: moveHighlight(previouslySelectedValue, pageSize, context)
      });
    case 'ArrowUp':
      if (orientation !== 'vertical') {
        break;
      }
      return _extends({}, state, {
        highlightedValue: moveHighlight(previouslySelectedValue, -1, context)
      });
    case 'ArrowDown':
      if (orientation !== 'vertical') {
        break;
      }
      return _extends({}, state, {
        highlightedValue: moveHighlight(previouslySelectedValue, 1, context)
      });
    case 'ArrowLeft':
      {
        if (orientation === 'vertical') {
          break;
        }
        const offset = orientation === 'horizontal-ltr' ? -1 : 1;
        return _extends({}, state, {
          highlightedValue: moveHighlight(previouslySelectedValue, offset, context)
        });
      }
    case 'ArrowRight':
      {
        if (orientation === 'vertical') {
          break;
        }
        const offset = orientation === 'horizontal-ltr' ? 1 : -1;
        return _extends({}, state, {
          highlightedValue: moveHighlight(previouslySelectedValue, offset, context)
        });
      }
    case 'Enter':
    case ' ':
      if (state.highlightedValue === null) {
        return state;
      }
      return handleItemSelection(state.highlightedValue, state, context);
    default:
      break;
  }
  return state;
}
function handleBlur(state, context) {
  if (context.focusManagement === 'DOM') {
    return state;
  }
  return _extends({}, state, {
    highlightedValue: null
  });
}
function textCriteriaMatches(nextFocus, searchString, stringifyItem) {
  var _stringifyItem;
  const text = (_stringifyItem = stringifyItem(nextFocus)) == null ? void 0 : _stringifyItem.trim().toLowerCase();
  if (!text || text.length === 0) {
    // Make item not navigable if stringification fails or results in empty string.
    return false;
  }
  return text.indexOf(searchString) === 0;
}
function handleTextNavigation(state, searchString, context) {
  const {
    items,
    isItemDisabled,
    disabledItemsFocusable,
    getItemAsString
  } = context;
  const startWithCurrentItem = searchString.length > 1;
  let nextItem = startWithCurrentItem ? state.highlightedValue : moveHighlight(state.highlightedValue, 1, context);
  for (let index = 0; index < items.length; index += 1) {
    // Return un-mutated state if looped back to the currently highlighted value
    if (!nextItem || !startWithCurrentItem && state.highlightedValue === nextItem) {
      return state;
    }
    if (textCriteriaMatches(nextItem, searchString, getItemAsString) && (!isItemDisabled(nextItem, items.indexOf(nextItem)) || disabledItemsFocusable)) {
      // The nextItem is the element to be highlighted
      return _extends({}, state, {
        highlightedValue: nextItem
      });
    }
    // Move to the next element.
    nextItem = moveHighlight(nextItem, 1, context);
  }

  // No item matches the text search criteria
  return state;
}
function handleItemsChange(items, previousItems, state, context) {
  var _state$selectedValues;
  const {
    itemComparer,
    focusManagement
  } = context;
  let newHighlightedValue = null;
  if (state.highlightedValue != null) {
    var _items$find;
    newHighlightedValue = (_items$find = items.find(item => itemComparer(item, state.highlightedValue))) != null ? _items$find : null;
  } else if (focusManagement === 'DOM' && previousItems.length === 0) {
    newHighlightedValue = moveHighlight(null, 'reset', context);
  }

  // exclude selected values that are no longer in the items list
  const selectedValues = (_state$selectedValues = state.selectedValues) != null ? _state$selectedValues : [];
  const newSelectedValues = selectedValues.filter(selectedValue => items.some(item => itemComparer(item, selectedValue)));
  return _extends({}, state, {
    highlightedValue: newHighlightedValue,
    selectedValues: newSelectedValues
  });
}
function handleResetHighlight(state, context) {
  return _extends({}, state, {
    highlightedValue: moveHighlight(null, 'reset', context)
  });
}
function handleHighlightLast(state, context) {
  return _extends({}, state, {
    highlightedValue: moveHighlight(null, 'end', context)
  });
}
function handleClearSelection(state, context) {
  return _extends({}, state, {
    selectedValues: [],
    highlightedValue: moveHighlight(null, 'reset', context)
  });
}
function listReducer(state, action) {
  const {
    type,
    context
  } = action;
  switch (type) {
    case ListActionTypes.keyDown:
      return listReducer_handleKeyDown(action.key, state, context);
    case ListActionTypes.itemClick:
      return handleItemSelection(action.item, state, context);
    case ListActionTypes.blur:
      return handleBlur(state, context);
    case ListActionTypes.textNavigation:
      return handleTextNavigation(state, action.searchString, context);
    case ListActionTypes.itemsChange:
      return handleItemsChange(action.items, action.previousItems, state, context);
    case ListActionTypes.resetHighlight:
      return handleResetHighlight(state, context);
    case ListActionTypes.highlightLast:
      return handleHighlightLast(state, context);
    case ListActionTypes.clearSelection:
      return handleClearSelection(state, context);
    default:
      return state;
  }
}
;// CONCATENATED MODULE: ./.yarn/__virtual__/@mui-base-virtual-32e976ef84/0/cache/@mui-base-npm-5.0.0-beta.40-248417914d-ebee3d9e11.zip/node_modules/@mui/base/utils/useControllableReducer.js
'use client';



function areEqual(a, b) {
  return a === b;
}
const EMPTY_OBJECT = {};
const NOOP = () => {};

/**
 * Gets the current state augmented with controlled values from the outside.
 * If a state item has a corresponding controlled value, it will be used instead of the internal state.
 */
function getControlledState(internalState, controlledProps) {
  const augmentedState = _extends({}, internalState);
  Object.keys(controlledProps).forEach(key => {
    if (controlledProps[key] !== undefined) {
      augmentedState[key] = controlledProps[key];
    }
  });
  return augmentedState;
}
/**
 * Defines an effect that compares the next state with the previous state and calls
 * the `onStateChange` callback if the state has changed.
 * The comparison is done based on the `stateComparers` parameter.
 */
function useStateChangeDetection(parameters) {
  const {
    nextState,
    initialState,
    stateComparers,
    onStateChange,
    controlledProps,
    lastActionRef
  } = parameters;
  const internalPreviousStateRef = react.useRef(initialState);
  react.useEffect(() => {
    if (lastActionRef.current === null) {
      // Detect changes only if an action has been dispatched.
      return;
    }
    const previousState = getControlledState(internalPreviousStateRef.current, controlledProps);
    Object.keys(nextState).forEach(key => {
      var _stateComparers$key;
      // go through all state keys and compare them with the previous state
      const stateComparer = (_stateComparers$key = stateComparers[key]) != null ? _stateComparers$key : areEqual;
      const nextStateItem = nextState[key];
      const previousStateItem = previousState[key];
      if (previousStateItem == null && nextStateItem != null || previousStateItem != null && nextStateItem == null || previousStateItem != null && nextStateItem != null && !stateComparer(nextStateItem, previousStateItem)) {
        var _event, _type;
        onStateChange == null || onStateChange((_event = lastActionRef.current.event) != null ? _event : null, key, nextStateItem, (_type = lastActionRef.current.type) != null ? _type : '', nextState);
      }
    });
    internalPreviousStateRef.current = nextState;
    lastActionRef.current = null;
  }, [internalPreviousStateRef, nextState, lastActionRef, onStateChange, stateComparers, controlledProps]);
}

/**
 * The alternative to `React.useReducer` that lets you control the state from the outside.
 *
 * It can be used in an uncontrolled mode, similar to `React.useReducer`, or in a controlled mode, when the state is controlled by the props.
 * It also supports partially controlled state, when some state items are controlled and some are not.
 *
 * The controlled state items are provided via the `controlledProps` parameter.
 * When a reducer action is dispatched, the internal state is updated with the new values.
 * A change event (`onStateChange`) is then triggered (for each changed state item) if the new state is different from the previous state.
 * This event can be used to update the controlled values.
 *
 * The comparison of the previous and next states is done using the `stateComparers` parameter.
 * If a state item has a corresponding comparer, it will be used to determine if the state has changed.
 * This is useful when the state item is an object and you want to compare only a subset of its properties or if it's an array and you want to compare its contents.
 *
 * An additional feature is the `actionContext` parameter. It allows you to add additional properties to every action object,
 * similarly to how React context is implicitly available to every component.
 *
 * @template State - The type of the state calculated by the reducer.
 * @template Action - The type of the actions that can be dispatched.
 * @template ActionContext - The type of the additional properties that will be added to every action object.
 *
 * @ignore - internal hook.
 */
function useControllableReducer(parameters) {
  const lastActionRef = react.useRef(null);
  const {
    reducer,
    initialState,
    controlledProps = EMPTY_OBJECT,
    stateComparers = EMPTY_OBJECT,
    onStateChange = NOOP,
    actionContext,
    componentName = ''
  } = parameters;
  const controlledPropsRef = react.useRef(controlledProps);
  if (false) {}

  // The reducer that is passed to React.useReducer is wrapped with a function that augments the state with controlled values.
  const reducerWithControlledState = react.useCallback((state, action) => {
    lastActionRef.current = action;
    const controlledState = getControlledState(state, controlledProps);
    const newState = reducer(controlledState, action);
    return newState;
  }, [controlledProps, reducer]);
  const [nextState, dispatch] = react.useReducer(reducerWithControlledState, initialState);

  // The action that is passed to dispatch is augmented with the actionContext.
  const dispatchWithContext = react.useCallback(action => {
    dispatch(_extends({}, action, {
      context: actionContext
    }));
  }, [actionContext]);
  useStateChangeDetection({
    nextState,
    initialState,
    stateComparers: stateComparers != null ? stateComparers : EMPTY_OBJECT,
    onStateChange: onStateChange != null ? onStateChange : NOOP,
    controlledProps,
    lastActionRef
  });
  return [getControlledState(nextState, controlledProps), dispatchWithContext];
}
;// CONCATENATED MODULE: ./.yarn/__virtual__/@mui-base-virtual-32e976ef84/0/cache/@mui-base-npm-5.0.0-beta.40-248417914d-ebee3d9e11.zip/node_modules/@mui/base/utils/areArraysEqual.js
function areArraysEqual(array1, array2, itemComparer = (a, b) => a === b) {
  return array1.length === array2.length && array1.every((value, index) => itemComparer(value, array2[index]));
}
;// CONCATENATED MODULE: ./.yarn/__virtual__/@mui-base-virtual-32e976ef84/0/cache/@mui-base-npm-5.0.0-beta.40-248417914d-ebee3d9e11.zip/node_modules/@mui/base/utils/useTextNavigation.js
'use client';


const TEXT_NAVIGATION_RESET_TIMEOUT = 500; // milliseconds

/**
 * @ignore - internal hook.
 *
 * Provides a handler for text navigation.
 * It's used to navigate a list by typing the first letters of the options.
 *
 * @param callback A function to be called when the navigation should be performed.
 * @returns A function to be used in a keydown event handler.
 */
function useTextNavigation(callback) {
  const textCriteriaRef = react.useRef({
    searchString: '',
    lastTime: null
  });
  return react.useCallback(event => {
    if (event.key.length === 1 && event.key !== ' ') {
      const textCriteria = textCriteriaRef.current;
      const lowerKey = event.key.toLowerCase();
      const currentTime = performance.now();
      if (textCriteria.searchString.length > 0 && textCriteria.lastTime && currentTime - textCriteria.lastTime > TEXT_NAVIGATION_RESET_TIMEOUT) {
        textCriteria.searchString = lowerKey;
      } else if (textCriteria.searchString.length !== 1 || lowerKey !== textCriteria.searchString) {
        // If there is just one character in the buffer and the key is the same, do not append
        textCriteria.searchString += lowerKey;
      }
      textCriteria.lastTime = currentTime;
      callback(textCriteria.searchString, event);
    }
  }, [callback]);
}
;// CONCATENATED MODULE: ./.yarn/__virtual__/@mui-base-virtual-32e976ef84/0/cache/@mui-base-npm-5.0.0-beta.40-248417914d-ebee3d9e11.zip/node_modules/@mui/base/useList/useList.js
'use client';










const useList_EMPTY_OBJECT = {};
const useList_NOOP = () => {};
const defaultItemComparer = (optionA, optionB) => optionA === optionB;
const defaultIsItemDisabled = () => false;
const defaultItemStringifier = item => typeof item === 'string' ? item : String(item);
const defaultGetInitialState = () => ({
  highlightedValue: null,
  selectedValues: []
});

/**
 * The useList is a lower-level utility that is used to build list-like components.
 * It's used to manage the state of the list and its items.
 *
 * Supports highlighting a single item and selecting an arbitrary number of items.
 *
 * The state of the list is managed by a controllable reducer - that is a reducer that can have its state
 * controlled from outside.
 *
 * By default, the state consists of `selectedValues` and `highlightedValue` but can be extended by the caller of the hook.
 * Also the actions that can be dispatched and the reducer function can be defined externally.
 *
 * @template ItemValue The type of the item values.
 * @template State The type of the list state. This should be a subtype of `ListState<ItemValue>`.
 * @template CustomAction The type of the actions that can be dispatched (besides the standard ListAction).
 * @template CustomActionContext The shape of additional properties that will be added to actions when dispatched.
 *
 * @ignore - internal hook.
 */
function useList(params) {
  const {
    controlledProps = useList_EMPTY_OBJECT,
    disabledItemsFocusable = false,
    disableListWrap = false,
    focusManagement = 'activeDescendant',
    getInitialState = defaultGetInitialState,
    getItemDomElement,
    getItemId,
    isItemDisabled = defaultIsItemDisabled,
    rootRef: externalListRef,
    onStateChange = useList_NOOP,
    items,
    itemComparer = defaultItemComparer,
    getItemAsString = defaultItemStringifier,
    onChange,
    onHighlightChange,
    onItemsChange,
    orientation = 'vertical',
    pageSize = 5,
    reducerActionContext = useList_EMPTY_OBJECT,
    selectionMode = 'single',
    stateReducer: externalReducer,
    componentName = 'useList'
  } = params;
  if (false) {}
  const listRef = react.useRef(null);
  const handleRef = useForkRef(externalListRef, listRef);
  const handleHighlightChange = react.useCallback((event, value, reason) => {
    onHighlightChange == null || onHighlightChange(event, value, reason);
    if (focusManagement === 'DOM' && value != null && (reason === ListActionTypes.itemClick || reason === ListActionTypes.keyDown || reason === ListActionTypes.textNavigation)) {
      var _getItemDomElement;
      getItemDomElement == null || (_getItemDomElement = getItemDomElement(value)) == null || _getItemDomElement.focus();
    }
  }, [getItemDomElement, onHighlightChange, focusManagement]);
  const stateComparers = react.useMemo(() => ({
    highlightedValue: itemComparer,
    selectedValues: (valuesArray1, valuesArray2) => areArraysEqual(valuesArray1, valuesArray2, itemComparer)
  }), [itemComparer]);

  // This gets called whenever a reducer changes the state.
  const handleStateChange = react.useCallback((event, field, value, reason, state) => {
    onStateChange == null || onStateChange(event, field, value, reason, state);
    switch (field) {
      case 'highlightedValue':
        handleHighlightChange(event, value, reason);
        break;
      case 'selectedValues':
        onChange == null || onChange(event, value, reason);
        break;
      default:
        break;
    }
  }, [handleHighlightChange, onChange, onStateChange]);

  // The following object is added to each action when it's dispatched.
  // It's accessible in the reducer via the `action.context` field.
  const listActionContext = react.useMemo(() => {
    return {
      disabledItemsFocusable,
      disableListWrap,
      focusManagement,
      isItemDisabled,
      itemComparer,
      items,
      getItemAsString,
      onHighlightChange: handleHighlightChange,
      orientation,
      pageSize,
      selectionMode,
      stateComparers
    };
  }, [disabledItemsFocusable, disableListWrap, focusManagement, isItemDisabled, itemComparer, items, getItemAsString, handleHighlightChange, orientation, pageSize, selectionMode, stateComparers]);
  const initialState = getInitialState();
  const reducer = externalReducer != null ? externalReducer : listReducer;
  const actionContext = react.useMemo(() => _extends({}, reducerActionContext, listActionContext), [reducerActionContext, listActionContext]);
  const [state, dispatch] = useControllableReducer({
    reducer,
    actionContext,
    initialState: initialState,
    controlledProps,
    stateComparers,
    onStateChange: handleStateChange,
    componentName
  });
  const {
    highlightedValue,
    selectedValues
  } = state;
  const handleTextNavigation = useTextNavigation((searchString, event) => dispatch({
    type: ListActionTypes.textNavigation,
    event,
    searchString
  }));
  const previousItems = react.useRef([]);
  react.useEffect(() => {
    // Whenever the `items` object changes, we need to determine if the actual items changed.
    // If they did, we need to dispatch an `itemsChange` action, so the selected/highlighted state is updated.
    if (areArraysEqual(previousItems.current, items, itemComparer)) {
      return;
    }
    dispatch({
      type: ListActionTypes.itemsChange,
      event: null,
      items,
      previousItems: previousItems.current
    });
    previousItems.current = items;
    onItemsChange == null || onItemsChange(items);
  }, [items, itemComparer, dispatch, onItemsChange]);
  const createHandleKeyDown = externalHandlers => event => {
    var _externalHandlers$onK;
    (_externalHandlers$onK = externalHandlers.onKeyDown) == null || _externalHandlers$onK.call(externalHandlers, event);
    if (event.defaultMuiPrevented) {
      return;
    }
    const keysToPreventDefault = ['Home', 'End', 'PageUp', 'PageDown'];
    if (orientation === 'vertical') {
      keysToPreventDefault.push('ArrowUp', 'ArrowDown');
    } else {
      keysToPreventDefault.push('ArrowLeft', 'ArrowRight');
    }
    if (focusManagement === 'activeDescendant') {
      // When the child element is focused using the activeDescendant attribute,
      // the list handles keyboard events on its behalf.
      // We have to `preventDefault()` is this case to prevent the browser from
      // scrolling the view when space is pressed or submitting forms when enter is pressed.
      keysToPreventDefault.push(' ', 'Enter');
    }
    if (keysToPreventDefault.includes(event.key)) {
      event.preventDefault();
    }
    dispatch({
      type: ListActionTypes.keyDown,
      key: event.key,
      event
    });
    handleTextNavigation(event);
  };
  const createHandleBlur = externalHandlers => event => {
    var _externalHandlers$onB, _listRef$current;
    (_externalHandlers$onB = externalHandlers.onBlur) == null || _externalHandlers$onB.call(externalHandlers, event);
    if (event.defaultMuiPrevented) {
      return;
    }
    if ((_listRef$current = listRef.current) != null && _listRef$current.contains(event.relatedTarget)) {
      // focus remains within the list
      return;
    }
    dispatch({
      type: ListActionTypes.blur,
      event
    });
  };
  const getRootProps = (externalProps = {}) => {
    const externalEventHandlers = extractEventHandlers(externalProps);
    return _extends({}, externalProps, {
      'aria-activedescendant': focusManagement === 'activeDescendant' && highlightedValue != null ? getItemId(highlightedValue) : undefined,
      tabIndex: focusManagement === 'DOM' ? -1 : 0,
      ref: handleRef
    }, externalEventHandlers, {
      onBlur: createHandleBlur(externalEventHandlers),
      onKeyDown: createHandleKeyDown(externalEventHandlers)
    });
  };
  const getItemState = react.useCallback(item => {
    const selected = (selectedValues != null ? selectedValues : []).some(value => value != null && itemComparer(item, value));
    const highlighted = highlightedValue != null && itemComparer(item, highlightedValue);
    const focusable = focusManagement === 'DOM';
    return {
      focusable,
      highlighted,
      selected
    };
  }, [itemComparer, selectedValues, highlightedValue, focusManagement]);
  const contextValue = react.useMemo(() => ({
    dispatch,
    getItemState
  }), [dispatch, getItemState]);
  react.useDebugValue({
    state
  });
  return {
    contextValue,
    dispatch,
    getRootProps,
    rootRef: handleRef,
    state
  };
}

;// CONCATENATED MODULE: ./.yarn/__virtual__/@mui-base-virtual-32e976ef84/0/cache/@mui-base-npm-5.0.0-beta.40-248417914d-ebee3d9e11.zip/node_modules/@mui/base/useTabsList/tabsListReducer.js



function tabsListReducer(state, action) {
  if (action.type === TabsListActionTypes.valueChange) {
    return _extends({}, state, {
      highlightedValue: action.value
    });
  }
  const newState = listReducer(state, action);
  const {
    context: {
      selectionFollowsFocus
    }
  } = action;
  if (action.type === ListActionTypes.itemsChange) {
    if (newState.selectedValues.length > 0) {
      return _extends({}, newState, {
        highlightedValue: newState.selectedValues[0]
      });
    }
    moveHighlight(null, 'reset', action.context);
  }
  if (selectionFollowsFocus && newState.highlightedValue != null) {
    return _extends({}, newState, {
      selectedValues: [newState.highlightedValue]
    });
  }
  return newState;
}
;// CONCATENATED MODULE: ./.yarn/__virtual__/@mui-base-virtual-32e976ef84/0/cache/@mui-base-npm-5.0.0-beta.40-248417914d-ebee3d9e11.zip/node_modules/@mui/base/useTabsList/useTabsList.js
'use client';









/**
 *
 * Demos:
 *
 * - [Tabs](https://mui.com/base-ui/react-tabs/#hooks)
 *
 * API:
 *
 * - [useTabsList API](https://mui.com/base-ui/react-tabs/hooks-api/#use-tabs-list)
 */
function useTabsList(parameters) {
  var _selectedValues$;
  const {
    rootRef: externalRef
  } = parameters;
  const {
    direction = 'ltr',
    onSelected,
    orientation = 'horizontal',
    value,
    registerTabIdLookup,
    selectionFollowsFocus
  } = useTabsContext();
  const {
    subitems,
    contextValue: compoundComponentContextValue
  } = useCompoundParent();
  const tabIdLookup = react.useCallback(tabValue => {
    var _subitems$get;
    return (_subitems$get = subitems.get(tabValue)) == null ? void 0 : _subitems$get.id;
  }, [subitems]);
  registerTabIdLookup(tabIdLookup);
  const subitemKeys = react.useMemo(() => Array.from(subitems.keys()), [subitems]);
  const getTabElement = react.useCallback(tabValue => {
    var _subitems$get$ref$cur, _subitems$get2;
    if (tabValue == null) {
      return null;
    }
    return (_subitems$get$ref$cur = (_subitems$get2 = subitems.get(tabValue)) == null ? void 0 : _subitems$get2.ref.current) != null ? _subitems$get$ref$cur : null;
  }, [subitems]);
  const isRtl = direction === 'rtl';
  let listOrientation;
  if (orientation === 'vertical') {
    listOrientation = 'vertical';
  } else {
    listOrientation = isRtl ? 'horizontal-rtl' : 'horizontal-ltr';
  }
  const handleChange = react.useCallback((event, newValue) => {
    var _newValue$;
    onSelected(event, (_newValue$ = newValue[0]) != null ? _newValue$ : null);
  }, [onSelected]);
  const controlledProps = react.useMemo(() => {
    if (value === undefined) {
      return {};
    }
    return value != null ? {
      selectedValues: [value]
    } : {
      selectedValues: []
    };
  }, [value]);
  const isItemDisabled = react.useCallback(item => {
    var _subitems$get$disable, _subitems$get3;
    return (_subitems$get$disable = (_subitems$get3 = subitems.get(item)) == null ? void 0 : _subitems$get3.disabled) != null ? _subitems$get$disable : false;
  }, [subitems]);
  const {
    contextValue: listContextValue,
    dispatch,
    getRootProps: getListboxRootProps,
    state: {
      highlightedValue,
      selectedValues
    },
    rootRef: mergedRootRef
  } = useList({
    controlledProps,
    disabledItemsFocusable: !selectionFollowsFocus,
    focusManagement: 'DOM',
    getItemDomElement: getTabElement,
    isItemDisabled,
    items: subitemKeys,
    rootRef: externalRef,
    onChange: handleChange,
    orientation: listOrientation,
    reducerActionContext: react.useMemo(() => ({
      selectionFollowsFocus: selectionFollowsFocus || false
    }), [selectionFollowsFocus]),
    selectionMode: 'single',
    stateReducer: tabsListReducer
  });
  react.useEffect(() => {
    if (value === undefined) {
      return;
    }

    // when a value changes externally, the highlighted value should be synced to it
    if (value != null) {
      dispatch({
        type: TabsListActionTypes.valueChange,
        value
      });
    }
  }, [dispatch, value]);
  const getRootProps = (externalProps = {}) => {
    return _extends({}, externalProps, getListboxRootProps(externalProps), {
      'aria-orientation': orientation === 'vertical' ? 'vertical' : undefined,
      role: 'tablist'
    });
  };
  const contextValue = react.useMemo(() => _extends({}, compoundComponentContextValue, listContextValue), [compoundComponentContextValue, listContextValue]);
  return {
    contextValue,
    dispatch,
    getRootProps,
    highlightedValue,
    isRtl,
    orientation,
    rootRef: mergedRootRef,
    selectedValue: (_selectedValues$ = selectedValues[0]) != null ? _selectedValues$ : null
  };
}

;// CONCATENATED MODULE: ./.yarn/__virtual__/@mui-base-virtual-32e976ef84/0/cache/@mui-base-npm-5.0.0-beta.40-248417914d-ebee3d9e11.zip/node_modules/@mui/base/useTabsList/TabsListProvider.js
'use client';





/**
 * Sets up the contexts for the underlying Tab components.
 *
 * @ignore - do not document.
 */
function TabsListProvider(props) {
  const {
    value,
    children
  } = props;
  const {
    dispatch,
    getItemIndex,
    getItemState,
    registerItem,
    totalSubitemCount
  } = value;
  const listContextValue = react.useMemo(() => ({
    dispatch,
    getItemState,
    getItemIndex
  }), [dispatch, getItemIndex, getItemState]);
  const compoundComponentContextValue = react.useMemo(() => ({
    getItemIndex,
    registerItem,
    totalSubitemCount
  }), [registerItem, getItemIndex, totalSubitemCount]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(CompoundComponentContext.Provider, {
    value: compoundComponentContextValue,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(ListContext.Provider, {
      value: listContextValue,
      children: children
    })
  });
}
;// CONCATENATED MODULE: ./.yarn/__virtual__/@mui-base-virtual-32e976ef84/0/cache/@mui-base-npm-5.0.0-beta.40-248417914d-ebee3d9e11.zip/node_modules/@mui/base/TabsList/TabsList.js
'use client';



const TabsList_excluded = ["children", "slotProps", "slots"];









const TabsList_useUtilityClasses = ownerState => {
  const {
    orientation
  } = ownerState;
  const slots = {
    root: ['root', orientation]
  };
  return composeClasses(slots, useClassNamesOverride(getTabsListUtilityClass));
};

/**
 *
 * Demos:
 *
 * - [Tabs](https://mui.com/base-ui/react-tabs/)
 *
 * API:
 *
 * - [TabsList API](https://mui.com/base-ui/react-tabs/components-api/#tabs-list)
 */
const TabsList = /*#__PURE__*/react.forwardRef(function TabsList(props, forwardedRef) {
  var _slots$root;
  const {
      children,
      slotProps = {},
      slots = {}
    } = props,
    other = _objectWithoutPropertiesLoose(props, TabsList_excluded);
  const {
    isRtl,
    orientation,
    getRootProps,
    contextValue
  } = useTabsList({
    rootRef: forwardedRef
  });
  const ownerState = _extends({}, props, {
    isRtl,
    orientation
  });
  const classes = TabsList_useUtilityClasses(ownerState);
  const TabsListRoot = (_slots$root = slots.root) != null ? _slots$root : 'div';
  const tabsListRootProps = useSlotProps({
    elementType: TabsListRoot,
    getSlotProps: getRootProps,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    ownerState,
    className: classes.root
  });
  return /*#__PURE__*/(0,jsx_runtime.jsx)(TabsListProvider, {
    value: contextValue,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(TabsListRoot, _extends({}, tabsListRootProps, {
      children: children
    }))
  });
});
 false ? 0 : void 0;

;// CONCATENATED MODULE: ./.yarn/__virtual__/@mui-base-virtual-32e976ef84/0/cache/@mui-base-npm-5.0.0-beta.40-248417914d-ebee3d9e11.zip/node_modules/@mui/base/Tabs/tabsClasses.js


const tabsClasses_COMPONENT_NAME = 'Tabs';
function getTabsUtilityClass(slot) {
  return generateUtilityClass_generateUtilityClass(tabsClasses_COMPONENT_NAME, slot);
}
const tabsClasses = generateUtilityClasses(tabsClasses_COMPONENT_NAME, ['root', 'horizontal', 'vertical']);
;// CONCATENATED MODULE: ./.yarn/__virtual__/@mui-utils-virtual-714b21789a/0/cache/@mui-utils-npm-5.16.6-19c1f450c3-214bc3e9fe.zip/node_modules/@mui/utils/esm/useControlled/useControlled.js
'use client';

/* eslint-disable react-hooks/rules-of-hooks, react-hooks/exhaustive-deps */

function useControlled({
  controlled,
  default: defaultProp,
  name,
  state = 'value'
}) {
  // isControlled is ignored in the hook dependency lists as it should never change.
  const {
    current: isControlled
  } = react.useRef(controlled !== undefined);
  const [valueState, setValue] = react.useState(defaultProp);
  const value = isControlled ? controlled : valueState;
  if (false) {}
  const setValueIfUncontrolled = react.useCallback(newValue => {
    if (!isControlled) {
      setValue(newValue);
    }
  }, []);
  return [value, setValueIfUncontrolled];
}
;// CONCATENATED MODULE: ./.yarn/__virtual__/@mui-base-virtual-32e976ef84/0/cache/@mui-base-npm-5.0.0-beta.40-248417914d-ebee3d9e11.zip/node_modules/@mui/base/useTabs/useTabs.js
'use client';





/**
 *
 * Demos:
 *
 * - [Tabs](https://mui.com/base-ui/react-tabs/#hooks)
 *
 * API:
 *
 * - [useTabs API](https://mui.com/base-ui/react-tabs/hooks-api/#use-tabs)
 */
function useTabs(parameters) {
  const {
    value: valueProp,
    defaultValue,
    onChange,
    orientation = 'horizontal',
    direction = 'ltr',
    selectionFollowsFocus = false
  } = parameters;
  const [value, setValue] = useControlled({
    controlled: valueProp,
    default: defaultValue,
    name: 'Tabs',
    state: 'value'
  });
  const onSelected = react.useCallback((event, newValue) => {
    setValue(newValue);
    onChange == null || onChange(event, newValue);
  }, [onChange, setValue]);
  const {
    subitems: tabPanels,
    contextValue: compoundComponentContextValue
  } = useCompoundParent();
  const tabIdLookup = react.useRef(() => undefined);
  const getTabPanelId = react.useCallback(tabValue => {
    var _tabPanels$get;
    return (_tabPanels$get = tabPanels.get(tabValue)) == null ? void 0 : _tabPanels$get.id;
  }, [tabPanels]);
  const getTabId = react.useCallback(tabPanelId => {
    return tabIdLookup.current(tabPanelId);
  }, []);
  const registerTabIdLookup = react.useCallback(lookupFunction => {
    tabIdLookup.current = lookupFunction;
  }, []);
  return {
    contextValue: _extends({
      direction,
      getTabId,
      getTabPanelId,
      onSelected,
      orientation,
      registerTabIdLookup,
      selectionFollowsFocus,
      value
    }, compoundComponentContextValue)
  };
}

;// CONCATENATED MODULE: ./.yarn/__virtual__/@mui-base-virtual-32e976ef84/0/cache/@mui-base-npm-5.0.0-beta.40-248417914d-ebee3d9e11.zip/node_modules/@mui/base/useTabs/TabsProvider.js
'use client';





/**
 * Sets up the contexts for the underlying Tab and TabPanel components.
 *
 * @ignore - do not document.
 */
function TabsProvider(props) {
  const {
    value: valueProp,
    children
  } = props;
  const {
    direction,
    getItemIndex,
    onSelected,
    orientation,
    registerItem,
    registerTabIdLookup,
    selectionFollowsFocus,
    totalSubitemCount,
    value,
    getTabId,
    getTabPanelId
  } = valueProp;
  const compoundComponentContextValue = react.useMemo(() => ({
    getItemIndex,
    registerItem,
    totalSubitemCount
  }), [registerItem, getItemIndex, totalSubitemCount]);
  const tabsContextValue = react.useMemo(() => ({
    direction,
    getTabId,
    getTabPanelId,
    onSelected,
    orientation,
    registerTabIdLookup,
    selectionFollowsFocus,
    value
  }), [direction, getTabId, getTabPanelId, onSelected, orientation, registerTabIdLookup, selectionFollowsFocus, value]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(CompoundComponentContext.Provider, {
    value: compoundComponentContextValue,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(TabsContext.Provider, {
      value: tabsContextValue,
      children: children
    })
  });
}
;// CONCATENATED MODULE: ./.yarn/__virtual__/@mui-base-virtual-32e976ef84/0/cache/@mui-base-npm-5.0.0-beta.40-248417914d-ebee3d9e11.zip/node_modules/@mui/base/Tabs/Tabs.js
'use client';



const Tabs_excluded = ["children", "value", "defaultValue", "orientation", "direction", "onChange", "selectionFollowsFocus", "slotProps", "slots"];









const Tabs_useUtilityClasses = ownerState => {
  const {
    orientation
  } = ownerState;
  const slots = {
    root: ['root', orientation]
  };
  return composeClasses(slots, useClassNamesOverride(getTabsUtilityClass));
};

/**
 *
 * Demos:
 *
 * - [Tabs](https://mui.com/base-ui/react-tabs/)
 *
 * API:
 *
 * - [Tabs API](https://mui.com/base-ui/react-tabs/components-api/#tabs)
 */
const Tabs = /*#__PURE__*/react.forwardRef(function Tabs(props, forwardedRef) {
  var _slots$root;
  const {
      children,
      orientation = 'horizontal',
      direction = 'ltr',
      slotProps = {},
      slots = {}
    } = props,
    other = _objectWithoutPropertiesLoose(props, Tabs_excluded);
  const ownerState = _extends({}, props, {
    orientation,
    direction
  });
  const {
    contextValue
  } = useTabs(ownerState);
  const classes = Tabs_useUtilityClasses(ownerState);
  const TabsRoot = (_slots$root = slots.root) != null ? _slots$root : 'div';
  const tabsRootProps = useSlotProps({
    elementType: TabsRoot,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    additionalProps: {
      ref: forwardedRef
    },
    ownerState,
    className: classes.root
  });
  return /*#__PURE__*/(0,jsx_runtime.jsx)(TabsRoot, _extends({}, tabsRootProps, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(TabsProvider, {
      value: contextValue,
      children: children
    })
  }));
});
 false ? 0 : void 0;

// EXTERNAL MODULE: ./.yarn/cache/classnames-npm-2.5.1-c7273f3423-58eb394e88.zip/node_modules/classnames/index.js
var classnames = __webpack_require__(47587);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./extensions/common/js/ui/components/internal/layout/index.ts + 8 modules
var layout = __webpack_require__(44369);
// EXTERNAL MODULE: ./extensions/common/js/ui/components/internal/typography/index.ts + 9 modules
var typography = __webpack_require__(96496);
// EXTERNAL MODULE: ./extensions/common/js/ui/components/internal/theme/index.ts + 9 modules
var theme = __webpack_require__(65506);
;// CONCATENATED MODULE: ./extensions/common/js/ui/components/internal/tabs/internal/tabs.module.css
// extracted by mini-css-extract-plugin
var _1 = "streak-mod__RHb6lsY1zMCooa5lzAAj";
var _2 = "streak-mod__J95ONGPrcrkB1gKneXMt";


;// CONCATENATED MODULE: ./extensions/common/js/ui/components/internal/tabs/internal/tabs.tsx








const Tab = /*#__PURE__*/(0,react.forwardRef)(function Tab(_ref, ref) {
  let {
    children,
    ...otherProps
  } = _ref;
  const themeBaseClasses = (0,theme/* themeCx */.yf)({
    background: 'white',
    typography: 'base/bold',
    foreground: 'black/secondary'
  });
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Tab_Tab, {
    ...otherProps,
    ref: ref,
    slotProps: {
      root: _ref2 => {
        let {
          selected,
          disabled
        } = _ref2;
        return {
          className: classnames_default()(_1, themeBaseClasses, {
            [_2]: selected
          }),
          disabled
        };
      }
    },
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(layout/* LayoutBox */.kZ, {
      padding: "xxs|xs",
      rounding: "s",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* Typo */.Jd, {
        variant: "H6 - Tags",
        color: "inherit",
        children: children
      })
    })
  });
});
function TabPanel(props) {
  return /*#__PURE__*/_jsx(MuiTabPanel, {
    ...props
  });
}
function tabs_TabsList(_ref3) {
  let {
    children
  } = _ref3;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(TabsList, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(layout/* LayoutRow */.WM, {
      gapH: "m",
      children: children
    })
  });
}
/**
 * Accessibility
 *
 * - The Tabs component should have a label. It can be set with either
 *   `aria-label` or `aria-labelledby` if the label is in another element.
 * - The keyboard interaction implements the Tabs pattern described in the
 *   WAI-ARIA Authoring Practices: one tab to focus the tab list, arrow keys
 *   to navigate between tabs.
 *
 * See https://www.w3.org/WAI/ARIA/apg/patterns/tabs/ for more details.
 */
function tabs_Tabs(_ref4) {
  let {
    children,
    value,
    onChange,
    selectionFollowsFocus = false,
    ...otherProps
  } = _ref4;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Tabs, {
    value: value,
    onChange: (e, tab) => onChange(tab, e),
    selectionFollowsFocus: selectionFollowsFocus,
    ...otherProps,
    children: children
  });
}
;// CONCATENATED MODULE: ./extensions/common/js/ui/components/internal/tabs/index.ts

;// CONCATENATED MODULE: ./extensions/common/js/ui/components/tabs.ts


/***/ }),

/***/ 8809:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   tm: () => (/* binding */ useIsMounted)
/* harmony export */ });
/* unused harmony exports useBoolean, useClickAnyWhere, useCopyToClipboard, useCountdown, useCounter, useDarkMode, useDebounceCallback, useDebounceValue, useDocumentTitle, useEventCallback, useEventListener, useHover, useIntersectionObserver, useInterval, useIsClient, useIsomorphicLayoutEffect, useLocalStorage, useMap, useMediaQuery, useOnClickOutside, useReadLocalStorage, useResizeObserver, useScreen, useScript, useScrollLock, useSessionStorage, useStep, useTernaryDarkMode, useTimeout, useToggle, useUnmount, useWindowSize */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44345);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74726);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_1__);



// src/useBoolean/useBoolean.ts
function useBoolean(defaultValue = false) {
  if (typeof defaultValue !== "boolean") {
    throw new Error("defaultValue must be `true` or `false`");
  }
  const [value, setValue] = useState(defaultValue);
  const setTrue = useCallback(() => {
    setValue(true);
  }, []);
  const setFalse = useCallback(() => {
    setValue(false);
  }, []);
  const toggle = useCallback(() => {
    setValue((x) => !x);
  }, []);
  return { value, setValue, setTrue, setFalse, toggle };
}
var useIsomorphicLayoutEffect = typeof window !== "undefined" ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;

// src/useEventListener/useEventListener.ts
function useEventListener(eventName, handler, element, options) {
  const savedHandler = useRef(handler);
  useIsomorphicLayoutEffect(() => {
    savedHandler.current = handler;
  }, [handler]);
  useEffect(() => {
    const targetElement = (element == null ? void 0 : element.current) ?? window;
    if (!(targetElement && targetElement.addEventListener))
      return;
    const listener = (event) => {
      savedHandler.current(event);
    };
    targetElement.addEventListener(eventName, listener, options);
    return () => {
      targetElement.removeEventListener(eventName, listener, options);
    };
  }, [eventName, element, options]);
}

// src/useClickAnyWhere/useClickAnyWhere.ts
function useClickAnyWhere(handler) {
  useEventListener("click", (event) => {
    handler(event);
  });
}
function useCopyToClipboard() {
  const [copiedText, setCopiedText] = useState(null);
  const copy = useCallback(async (text) => {
    if (!(navigator == null ? void 0 : navigator.clipboard)) {
      console.warn("Clipboard not supported");
      return false;
    }
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
      return true;
    } catch (error) {
      console.warn("Copy failed", error);
      setCopiedText(null);
      return false;
    }
  }, []);
  return [copiedText, copy];
}
function useCounter(initialValue) {
  const [count, setCount] = useState(initialValue ?? 0);
  const increment = useCallback(() => {
    setCount((x) => x + 1);
  }, []);
  const decrement = useCallback(() => {
    setCount((x) => x - 1);
  }, []);
  const reset = useCallback(() => {
    setCount(initialValue ?? 0);
  }, [initialValue]);
  return {
    count,
    increment,
    decrement,
    reset,
    setCount
  };
}
function useInterval(callback, delay) {
  const savedCallback = useRef(callback);
  useIsomorphicLayoutEffect(() => {
    savedCallback.current = callback;
  }, [callback]);
  useEffect(() => {
    if (delay === null) {
      return;
    }
    const id = setInterval(() => {
      savedCallback.current();
    }, delay);
    return () => {
      clearInterval(id);
    };
  }, [delay]);
}

// src/useCountdown/useCountdown.ts
function useCountdown({
  countStart,
  countStop = 0,
  intervalMs = 1e3,
  isIncrement = false
}) {
  const {
    count,
    increment,
    decrement,
    reset: resetCounter
  } = useCounter(countStart);
  const {
    value: isCountdownRunning,
    setTrue: startCountdown,
    setFalse: stopCountdown
  } = useBoolean(false);
  const resetCountdown = useCallback(() => {
    stopCountdown();
    resetCounter();
  }, [stopCountdown, resetCounter]);
  const countdownCallback = useCallback(() => {
    if (count === countStop) {
      stopCountdown();
      return;
    }
    if (isIncrement) {
      increment();
    } else {
      decrement();
    }
  }, [count, countStop, decrement, increment, isIncrement, stopCountdown]);
  useInterval(countdownCallback, isCountdownRunning ? intervalMs : null);
  return [count, { startCountdown, stopCountdown, resetCountdown }];
}
function useEventCallback(fn) {
  const ref = useRef(() => {
    throw new Error("Cannot call an event handler while rendering.");
  });
  useIsomorphicLayoutEffect(() => {
    ref.current = fn;
  }, [fn]);
  return useCallback((...args) => {
    var _a;
    return (_a = ref.current) == null ? void 0 : _a.call(ref, ...args);
  }, [ref]);
}

// src/useLocalStorage/useLocalStorage.ts
var IS_SERVER = typeof window === "undefined";
function useLocalStorage(key, initialValue, options = {}) {
  const { initializeWithValue = true } = options;
  const serializer = useCallback(
    (value) => {
      if (options.serializer) {
        return options.serializer(value);
      }
      return JSON.stringify(value);
    },
    [options]
  );
  const deserializer = useCallback(
    (value) => {
      if (options.deserializer) {
        return options.deserializer(value);
      }
      if (value === "undefined") {
        return void 0;
      }
      const defaultValue = initialValue instanceof Function ? initialValue() : initialValue;
      let parsed;
      try {
        parsed = JSON.parse(value);
      } catch (error) {
        console.error("Error parsing JSON:", error);
        return defaultValue;
      }
      return parsed;
    },
    [options, initialValue]
  );
  const readValue = useCallback(() => {
    const initialValueToUse = initialValue instanceof Function ? initialValue() : initialValue;
    if (IS_SERVER) {
      return initialValueToUse;
    }
    try {
      const raw = window.localStorage.getItem(key);
      return raw ? deserializer(raw) : initialValueToUse;
    } catch (error) {
      console.warn(`Error reading localStorage key \u201C${key}\u201D:`, error);
      return initialValueToUse;
    }
  }, [initialValue, key, deserializer]);
  const [storedValue, setStoredValue] = useState(() => {
    if (initializeWithValue) {
      return readValue();
    }
    return initialValue instanceof Function ? initialValue() : initialValue;
  });
  const setValue = useEventCallback((value) => {
    if (IS_SERVER) {
      console.warn(
        `Tried setting localStorage key \u201C${key}\u201D even though environment is not a client`
      );
    }
    try {
      const newValue = value instanceof Function ? value(readValue()) : value;
      window.localStorage.setItem(key, serializer(newValue));
      setStoredValue(newValue);
      window.dispatchEvent(new StorageEvent("local-storage", { key }));
    } catch (error) {
      console.warn(`Error setting localStorage key \u201C${key}\u201D:`, error);
    }
  });
  const removeValue = useEventCallback(() => {
    if (IS_SERVER) {
      console.warn(
        `Tried removing localStorage key \u201C${key}\u201D even though environment is not a client`
      );
    }
    const defaultValue = initialValue instanceof Function ? initialValue() : initialValue;
    window.localStorage.removeItem(key);
    setStoredValue(defaultValue);
    window.dispatchEvent(new StorageEvent("local-storage", { key }));
  });
  useEffect(() => {
    setStoredValue(readValue());
  }, [key]);
  const handleStorageChange = useCallback(
    (event) => {
      if (event.key && event.key !== key) {
        return;
      }
      setStoredValue(readValue());
    },
    [key, readValue]
  );
  useEventListener("storage", handleStorageChange);
  useEventListener("local-storage", handleStorageChange);
  return [storedValue, setValue, removeValue];
}
var IS_SERVER2 = typeof window === "undefined";
function useMediaQuery(query, {
  defaultValue = false,
  initializeWithValue = true
} = {}) {
  const getMatches = (query2) => {
    if (IS_SERVER2) {
      return defaultValue;
    }
    return window.matchMedia(query2).matches;
  };
  const [matches, setMatches] = useState(() => {
    if (initializeWithValue) {
      return getMatches(query);
    }
    return defaultValue;
  });
  function handleChange() {
    setMatches(getMatches(query));
  }
  useIsomorphicLayoutEffect(() => {
    const matchMedia = window.matchMedia(query);
    handleChange();
    if (matchMedia.addListener) {
      matchMedia.addListener(handleChange);
    } else {
      matchMedia.addEventListener("change", handleChange);
    }
    return () => {
      if (matchMedia.removeListener) {
        matchMedia.removeListener(handleChange);
      } else {
        matchMedia.removeEventListener("change", handleChange);
      }
    };
  }, [query]);
  return matches;
}

// src/useDarkMode/useDarkMode.ts
var COLOR_SCHEME_QUERY = "(prefers-color-scheme: dark)";
var LOCAL_STORAGE_KEY = "usehooks-ts-dark-mode";
function useDarkMode(options = {}) {
  const {
    defaultValue,
    localStorageKey = LOCAL_STORAGE_KEY,
    initializeWithValue = true
  } = options;
  const isDarkOS = useMediaQuery(COLOR_SCHEME_QUERY, {
    initializeWithValue,
    defaultValue
  });
  const [isDarkMode, setDarkMode] = useLocalStorage(
    localStorageKey,
    defaultValue ?? isDarkOS ?? false,
    { initializeWithValue }
  );
  useIsomorphicLayoutEffect(() => {
    if (isDarkOS !== isDarkMode) {
      setDarkMode(isDarkOS);
    }
  }, [isDarkOS]);
  return {
    isDarkMode,
    toggle: () => {
      setDarkMode((prev) => !prev);
    },
    enable: () => {
      setDarkMode(true);
    },
    disable: () => {
      setDarkMode(false);
    },
    set: (value) => {
      setDarkMode(value);
    }
  };
}
function useUnmount(func) {
  const funcRef = useRef(func);
  funcRef.current = func;
  useEffect(
    () => () => {
      funcRef.current();
    },
    []
  );
}

// src/useDebounceCallback/useDebounceCallback.ts
function useDebounceCallback(func, delay = 500, options) {
  const debouncedFunc = useRef();
  useUnmount(() => {
    if (debouncedFunc.current) {
      debouncedFunc.current.cancel();
    }
  });
  const debounced = useMemo(() => {
    const debouncedFuncInstance = debounce(func, delay, options);
    const wrappedFunc = (...args) => {
      return debouncedFuncInstance(...args);
    };
    wrappedFunc.cancel = () => {
      debouncedFuncInstance.cancel();
    };
    wrappedFunc.isPending = () => {
      return !!debouncedFunc.current;
    };
    wrappedFunc.flush = () => {
      return debouncedFuncInstance.flush();
    };
    return wrappedFunc;
  }, [func, delay, options]);
  useEffect(() => {
    debouncedFunc.current = debounce(func, delay, options);
  }, [func, delay, options]);
  return debounced;
}
function useDebounceValue(initialValue, delay, options) {
  const eq = (options == null ? void 0 : options.equalityFn) ?? ((left, right) => left === right);
  const unwrappedInitialValue = initialValue instanceof Function ? initialValue() : initialValue;
  const [debouncedValue, setDebouncedValue] = useState(unwrappedInitialValue);
  const previousValueRef = useRef(unwrappedInitialValue);
  const updateDebouncedValue = useDebounceCallback(
    setDebouncedValue,
    delay,
    options
  );
  if (!eq(previousValueRef.current, unwrappedInitialValue)) {
    updateDebouncedValue(unwrappedInitialValue);
    previousValueRef.current = unwrappedInitialValue;
  }
  return [debouncedValue, updateDebouncedValue];
}
function useDocumentTitle(title, options = {}) {
  const { preserveTitleOnUnmount = true } = options;
  const defaultTitle = useRef(null);
  useIsomorphicLayoutEffect(() => {
    defaultTitle.current = window.document.title;
  }, []);
  useIsomorphicLayoutEffect(() => {
    window.document.title = title;
  }, [title]);
  useUnmount(() => {
    if (!preserveTitleOnUnmount && defaultTitle.current) {
      window.document.title = defaultTitle.current;
    }
  });
}
function useHover(elementRef) {
  const [value, setValue] = useState(false);
  const handleMouseEnter = () => {
    setValue(true);
  };
  const handleMouseLeave = () => {
    setValue(false);
  };
  useEventListener("mouseenter", handleMouseEnter, elementRef);
  useEventListener("mouseleave", handleMouseLeave, elementRef);
  return value;
}
function useIntersectionObserver({
  threshold = 0,
  root = null,
  rootMargin = "0%",
  freezeOnceVisible = false,
  initialIsIntersecting = false,
  onChange
} = {}) {
  var _a;
  const [ref, setRef] = useState(null);
  const [state, setState] = useState(() => ({
    isIntersecting: initialIsIntersecting,
    entry: void 0
  }));
  const callbackRef = useRef();
  callbackRef.current = onChange;
  const frozen = ((_a = state.entry) == null ? void 0 : _a.isIntersecting) && freezeOnceVisible;
  useEffect(() => {
    if (!ref)
      return;
    if (!("IntersectionObserver" in window))
      return;
    if (frozen)
      return;
    let unobserve;
    const observer = new IntersectionObserver(
      (entries) => {
        const thresholds = Array.isArray(observer.thresholds) ? observer.thresholds : [observer.thresholds];
        entries.forEach((entry) => {
          const isIntersecting = entry.isIntersecting && thresholds.some((threshold2) => entry.intersectionRatio >= threshold2);
          setState({ isIntersecting, entry });
          if (callbackRef.current) {
            callbackRef.current(isIntersecting, entry);
          }
          if (isIntersecting && freezeOnceVisible && unobserve) {
            unobserve();
            unobserve = void 0;
          }
        });
      },
      { threshold, root, rootMargin }
    );
    observer.observe(ref);
    return () => {
      observer.disconnect();
    };
  }, [
    ref,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    JSON.stringify(threshold),
    root,
    rootMargin,
    frozen,
    freezeOnceVisible
  ]);
  const prevRef = useRef(null);
  useEffect(() => {
    var _a2;
    if (!ref && ((_a2 = state.entry) == null ? void 0 : _a2.target) && !freezeOnceVisible && !frozen && prevRef.current !== state.entry.target) {
      prevRef.current = state.entry.target;
      setState({ isIntersecting: initialIsIntersecting, entry: void 0 });
    }
  }, [ref, state.entry, freezeOnceVisible, frozen, initialIsIntersecting]);
  const result = [
    setRef,
    !!state.isIntersecting,
    state.entry
  ];
  result.ref = result[0];
  result.isIntersecting = result[1];
  result.entry = result[2];
  return result;
}
function useIsClient() {
  const [isClient, setClient] = useState(false);
  useEffect(() => {
    setClient(true);
  }, []);
  return isClient;
}
function useIsMounted() {
  const isMounted = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => isMounted.current, []);
}
function useMap(initialState = /* @__PURE__ */ new Map()) {
  const [map, setMap] = useState(new Map(initialState));
  const actions = {
    set: useCallback((key, value) => {
      setMap((prev) => {
        const copy = new Map(prev);
        copy.set(key, value);
        return copy;
      });
    }, []),
    setAll: useCallback((entries) => {
      setMap(() => new Map(entries));
    }, []),
    remove: useCallback((key) => {
      setMap((prev) => {
        const copy = new Map(prev);
        copy.delete(key);
        return copy;
      });
    }, []),
    reset: useCallback(() => {
      setMap(() => /* @__PURE__ */ new Map());
    }, [])
  };
  return [map, actions];
}

// src/useOnClickOutside/useOnClickOutside.ts
function useOnClickOutside(ref, handler, eventType = "mousedown", eventListenerOptions = {}) {
  useEventListener(
    eventType,
    (event) => {
      const target = event.target;
      if (!target || !target.isConnected) {
        return;
      }
      const isOutside = Array.isArray(ref) ? ref.filter((r) => Boolean(r.current)).every((r) => r.current && !r.current.contains(target)) : ref.current && !ref.current.contains(target);
      if (isOutside) {
        handler(event);
      }
    },
    void 0,
    eventListenerOptions
  );
}
var IS_SERVER3 = typeof window === "undefined";
function useReadLocalStorage(key, options = {}) {
  let { initializeWithValue = true } = options;
  if (IS_SERVER3) {
    initializeWithValue = false;
  }
  const deserializer = useCallback(
    (value) => {
      if (options.deserializer) {
        return options.deserializer(value);
      }
      if (value === "undefined") {
        return void 0;
      }
      let parsed;
      try {
        parsed = JSON.parse(value);
      } catch (error) {
        console.error("Error parsing JSON:", error);
        return null;
      }
      return parsed;
    },
    [options]
  );
  const readValue = useCallback(() => {
    if (IS_SERVER3) {
      return null;
    }
    try {
      const raw = window.localStorage.getItem(key);
      return raw ? deserializer(raw) : null;
    } catch (error) {
      console.warn(`Error reading localStorage key \u201C${key}\u201D:`, error);
      return null;
    }
  }, [key, deserializer]);
  const [storedValue, setStoredValue] = useState(() => {
    if (initializeWithValue) {
      return readValue();
    }
    return void 0;
  });
  useEffect(() => {
    setStoredValue(readValue());
  }, [key]);
  const handleStorageChange = useCallback(
    (event) => {
      if (event.key && event.key !== key) {
        return;
      }
      setStoredValue(readValue());
    },
    [key, readValue]
  );
  useEventListener("storage", handleStorageChange);
  useEventListener("local-storage", handleStorageChange);
  return storedValue;
}
var initialSize = {
  width: void 0,
  height: void 0
};
function useResizeObserver(options) {
  const { ref, box = "content-box" } = options;
  const [{ width, height }, setSize] = useState(initialSize);
  const isMounted = useIsMounted();
  const previousSize = useRef({ ...initialSize });
  const onResize = useRef(void 0);
  onResize.current = options.onResize;
  useEffect(() => {
    if (!ref.current)
      return;
    if (typeof window === "undefined" || !("ResizeObserver" in window))
      return;
    const observer = new ResizeObserver(([entry]) => {
      const boxProp = box === "border-box" ? "borderBoxSize" : box === "device-pixel-content-box" ? "devicePixelContentBoxSize" : "contentBoxSize";
      const newWidth = extractSize(entry, boxProp, "inlineSize");
      const newHeight = extractSize(entry, boxProp, "blockSize");
      const hasChanged = previousSize.current.width !== newWidth || previousSize.current.height !== newHeight;
      if (hasChanged) {
        const newSize = { width: newWidth, height: newHeight };
        previousSize.current.width = newWidth;
        previousSize.current.height = newHeight;
        if (onResize.current) {
          onResize.current(newSize);
        } else {
          if (isMounted()) {
            setSize(newSize);
          }
        }
      }
    });
    observer.observe(ref.current, { box });
    return () => {
      observer.disconnect();
    };
  }, [box, ref, isMounted]);
  return { width, height };
}
function extractSize(entry, box, sizeType) {
  if (!entry[box]) {
    if (box === "contentBoxSize") {
      return entry.contentRect[sizeType === "inlineSize" ? "width" : "height"];
    }
    return void 0;
  }
  return Array.isArray(entry[box]) ? entry[box][0][sizeType] : (
    // @ts-ignore Support Firefox's non-standard behavior
    entry[box][sizeType]
  );
}
var IS_SERVER4 = typeof window === "undefined";
function useScreen(options = {}) {
  let { initializeWithValue = true } = options;
  if (IS_SERVER4) {
    initializeWithValue = false;
  }
  const readScreen = () => {
    if (IS_SERVER4) {
      return void 0;
    }
    return window.screen;
  };
  const [screen, setScreen] = useState(() => {
    if (initializeWithValue) {
      return readScreen();
    }
    return void 0;
  });
  const debouncedSetScreen = useDebounceCallback(
    setScreen,
    options.debounceDelay
  );
  function handleSize() {
    const newScreen = readScreen();
    const setSize = options.debounceDelay ? debouncedSetScreen : setScreen;
    if (newScreen) {
      const {
        width,
        height,
        availHeight,
        availWidth,
        colorDepth,
        orientation,
        pixelDepth
      } = newScreen;
      setSize({
        width,
        height,
        availHeight,
        availWidth,
        colorDepth,
        orientation,
        pixelDepth
      });
    }
  }
  useEventListener("resize", handleSize);
  useIsomorphicLayoutEffect(() => {
    handleSize();
  }, []);
  return screen;
}
var cachedScriptStatuses = /* @__PURE__ */ new Map();
function getScriptNode(src) {
  const node = document.querySelector(
    `script[src="${src}"]`
  );
  const status = node == null ? void 0 : node.getAttribute("data-status");
  return {
    node,
    status
  };
}
function useScript(src, options) {
  const [status, setStatus] = useState(() => {
    if (!src || (options == null ? void 0 : options.shouldPreventLoad)) {
      return "idle";
    }
    if (typeof window === "undefined") {
      return "loading";
    }
    return cachedScriptStatuses.get(src) ?? "loading";
  });
  useEffect(() => {
    if (!src || (options == null ? void 0 : options.shouldPreventLoad)) {
      return;
    }
    const cachedScriptStatus = cachedScriptStatuses.get(src);
    if (cachedScriptStatus === "ready" || cachedScriptStatus === "error") {
      setStatus(cachedScriptStatus);
      return;
    }
    const script = getScriptNode(src);
    let scriptNode = script.node;
    if (!scriptNode) {
      scriptNode = document.createElement((()=>{throw new Error("script element creation disabled")})());
      scriptNode.src = src;
      scriptNode.async = true;
      if (options == null ? void 0 : options.id) {
        scriptNode.id = options.id;
      }
      scriptNode.setAttribute("data-status", "loading");
      document.body.appendChild(scriptNode);
      const setAttributeFromEvent = (event) => {
        const scriptStatus = event.type === "load" ? "ready" : "error";
        scriptNode == null ? void 0 : scriptNode.setAttribute("data-status", scriptStatus);
      };
      scriptNode.addEventListener("load", setAttributeFromEvent);
      scriptNode.addEventListener("error", setAttributeFromEvent);
    } else {
      setStatus(script.status ?? cachedScriptStatus ?? "loading");
    }
    const setStateFromEvent = (event) => {
      const newStatus = event.type === "load" ? "ready" : "error";
      setStatus(newStatus);
      cachedScriptStatuses.set(src, newStatus);
    };
    scriptNode.addEventListener("load", setStateFromEvent);
    scriptNode.addEventListener("error", setStateFromEvent);
    return () => {
      if (scriptNode) {
        scriptNode.removeEventListener("load", setStateFromEvent);
        scriptNode.removeEventListener("error", setStateFromEvent);
      }
      if (scriptNode && (options == null ? void 0 : options.removeOnUnmount)) {
        scriptNode.remove();
        cachedScriptStatuses.delete(src);
      }
    };
  }, [src, options == null ? void 0 : options.shouldPreventLoad, options == null ? void 0 : options.removeOnUnmount, options == null ? void 0 : options.id]);
  return status;
}
var IS_SERVER5 = typeof window === "undefined";
function useScrollLock(options = {}) {
  const { autoLock = true, lockTarget, widthReflow = true } = options;
  const [isLocked, setIsLocked] = useState(false);
  const target = useRef(null);
  const originalStyle = useRef(null);
  const lock = () => {
    if (target.current) {
      const { overflow, paddingRight } = target.current.style;
      originalStyle.current = { overflow, paddingRight };
      if (widthReflow) {
        const offsetWidth = target.current === document.body ? window.innerWidth : target.current.offsetWidth;
        const currentPaddingRight = parseInt(window.getComputedStyle(target.current).paddingRight, 10) || 0;
        const scrollbarWidth = offsetWidth - target.current.scrollWidth;
        target.current.style.paddingRight = `${scrollbarWidth + currentPaddingRight}px`;
      }
      target.current.style.overflow = "hidden";
      setIsLocked(true);
    }
  };
  const unlock = () => {
    if (target.current && originalStyle.current) {
      target.current.style.overflow = originalStyle.current.overflow;
      if (widthReflow) {
        target.current.style.paddingRight = originalStyle.current.paddingRight;
      }
    }
    setIsLocked(false);
  };
  useIsomorphicLayoutEffect(() => {
    if (IS_SERVER5)
      return;
    if (lockTarget) {
      target.current = typeof lockTarget === "string" ? document.querySelector(lockTarget) : lockTarget;
    }
    if (!target.current) {
      target.current = document.body;
    }
    if (autoLock) {
      lock();
    }
    return () => {
      unlock();
    };
  }, [autoLock, lockTarget, widthReflow]);
  return { isLocked, lock, unlock };
}
var IS_SERVER6 = typeof window === "undefined";
function useSessionStorage(key, initialValue, options = {}) {
  const { initializeWithValue = true } = options;
  const serializer = useCallback(
    (value) => {
      if (options.serializer) {
        return options.serializer(value);
      }
      return JSON.stringify(value);
    },
    [options]
  );
  const deserializer = useCallback(
    (value) => {
      if (options.deserializer) {
        return options.deserializer(value);
      }
      if (value === "undefined") {
        return void 0;
      }
      const defaultValue = initialValue instanceof Function ? initialValue() : initialValue;
      let parsed;
      try {
        parsed = JSON.parse(value);
      } catch (error) {
        console.error("Error parsing JSON:", error);
        return defaultValue;
      }
      return parsed;
    },
    [options, initialValue]
  );
  const readValue = useCallback(() => {
    const initialValueToUse = initialValue instanceof Function ? initialValue() : initialValue;
    if (IS_SERVER6) {
      return initialValueToUse;
    }
    try {
      const raw = window.sessionStorage.getItem(key);
      return raw ? deserializer(raw) : initialValueToUse;
    } catch (error) {
      console.warn(`Error reading sessionStorage key \u201C${key}\u201D:`, error);
      return initialValueToUse;
    }
  }, [initialValue, key, deserializer]);
  const [storedValue, setStoredValue] = useState(() => {
    if (initializeWithValue) {
      return readValue();
    }
    return initialValue instanceof Function ? initialValue() : initialValue;
  });
  const setValue = useEventCallback((value) => {
    if (IS_SERVER6) {
      console.warn(
        `Tried setting sessionStorage key \u201C${key}\u201D even though environment is not a client`
      );
    }
    try {
      const newValue = value instanceof Function ? value(readValue()) : value;
      window.sessionStorage.setItem(key, serializer(newValue));
      setStoredValue(newValue);
      window.dispatchEvent(new StorageEvent("session-storage", { key }));
    } catch (error) {
      console.warn(`Error setting sessionStorage key \u201C${key}\u201D:`, error);
    }
  });
  const removeValue = useEventCallback(() => {
    if (IS_SERVER6) {
      console.warn(
        `Tried removing sessionStorage key \u201C${key}\u201D even though environment is not a client`
      );
    }
    const defaultValue = initialValue instanceof Function ? initialValue() : initialValue;
    window.sessionStorage.removeItem(key);
    setStoredValue(defaultValue);
    window.dispatchEvent(new StorageEvent("session-storage", { key }));
  });
  useEffect(() => {
    setStoredValue(readValue());
  }, [key]);
  const handleStorageChange = useCallback(
    (event) => {
      if (event.key && event.key !== key) {
        return;
      }
      setStoredValue(readValue());
    },
    [key, readValue]
  );
  useEventListener("storage", handleStorageChange);
  useEventListener("session-storage", handleStorageChange);
  return [storedValue, setValue, removeValue];
}
function useStep(maxStep) {
  const [currentStep, setCurrentStep] = useState(1);
  const canGoToNextStep = currentStep + 1 <= maxStep;
  const canGoToPrevStep = currentStep - 1 > 0;
  const setStep = useCallback(
    (step) => {
      const newStep = step instanceof Function ? step(currentStep) : step;
      if (newStep >= 1 && newStep <= maxStep) {
        setCurrentStep(newStep);
        return;
      }
      throw new Error("Step not valid");
    },
    [maxStep, currentStep]
  );
  const goToNextStep = useCallback(() => {
    if (canGoToNextStep) {
      setCurrentStep((step) => step + 1);
    }
  }, [canGoToNextStep]);
  const goToPrevStep = useCallback(() => {
    if (canGoToPrevStep) {
      setCurrentStep((step) => step - 1);
    }
  }, [canGoToPrevStep]);
  const reset = useCallback(() => {
    setCurrentStep(1);
  }, []);
  return [
    currentStep,
    {
      goToNextStep,
      goToPrevStep,
      canGoToNextStep,
      canGoToPrevStep,
      setStep,
      reset
    }
  ];
}

// src/useTernaryDarkMode/useTernaryDarkMode.ts
var COLOR_SCHEME_QUERY2 = "(prefers-color-scheme: dark)";
var LOCAL_STORAGE_KEY2 = "usehooks-ts-ternary-dark-mode";
function useTernaryDarkMode({
  defaultValue = "system",
  localStorageKey = LOCAL_STORAGE_KEY2,
  initializeWithValue = true
} = {}) {
  const isDarkOS = useMediaQuery(COLOR_SCHEME_QUERY2, { initializeWithValue });
  const [mode, setMode] = useLocalStorage(localStorageKey, defaultValue, {
    initializeWithValue
  });
  const isDarkMode = mode === "dark" || mode === "system" && isDarkOS;
  const toggleTernaryDarkMode = () => {
    const modes = ["light", "system", "dark"];
    setMode((prevMode) => {
      const nextIndex = (modes.indexOf(prevMode) + 1) % modes.length;
      return modes[nextIndex];
    });
  };
  return {
    isDarkMode,
    ternaryDarkMode: mode,
    setTernaryDarkMode: setMode,
    toggleTernaryDarkMode
  };
}
function useTimeout(callback, delay) {
  const savedCallback = useRef(callback);
  useIsomorphicLayoutEffect(() => {
    savedCallback.current = callback;
  }, [callback]);
  useEffect(() => {
    if (!delay && delay !== 0) {
      return;
    }
    const id = setTimeout(() => {
      savedCallback.current();
    }, delay);
    return () => {
      clearTimeout(id);
    };
  }, [delay]);
}
function useToggle(defaultValue) {
  const [value, setValue] = useState(!!defaultValue);
  const toggle = useCallback(() => {
    setValue((x) => !x);
  }, []);
  return [value, toggle, setValue];
}
var IS_SERVER7 = typeof window === "undefined";
function useWindowSize(options = {}) {
  let { initializeWithValue = true } = options;
  if (IS_SERVER7) {
    initializeWithValue = false;
  }
  const [windowSize, setWindowSize] = useState(() => {
    if (initializeWithValue) {
      return {
        width: window.innerWidth,
        height: window.innerHeight
      };
    }
    return {
      width: void 0,
      height: void 0
    };
  });
  const debouncedSetWindowSize = useDebounceCallback(
    setWindowSize,
    options.debounceDelay
  );
  function handleSize() {
    const setSize = options.debounceDelay ? debouncedSetWindowSize : setWindowSize;
    setSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }
  useEventListener("resize", handleSize);
  useIsomorphicLayoutEffect(() => {
    handleSize();
  }, []);
  return windowSize;
}




/***/ }),

/***/ 77237:
/***/ ((module) => {

module.exports = JSON.parse('[{"title":"Native Gmail integration for incoming emails","description":"Create automation in Streak from incoming emails","url":"http://support.streak.com/en/articles/9043632-native-gmail-integration-for-incoming-emails"},{"title":"FAQ - Streak AI features","description":"Commonly asked questions on Streak\'s AI features","url":"http://support.streak.com/en/articles/8500642-faq-streak-ai-features"},{"title":"Native dialer using Google Voice","description":"Connect Streak with Google Voice to dial directly from a Streak contact","url":"http://support.streak.com/en/articles/8482238-native-dialer-using-google-voice"},{"title":"Streak action buttons","description":"Create a button to start a Streak integration or automation directly from your pipeline","url":"http://support.streak.com/en/articles/8377078-streak-action-buttons"},{"title":"Import your mail merge CSV file to a pipeline","description":"","url":"http://support.streak.com/en/articles/8063657-import-your-mail-merge-csv-file-to-a-pipeline"},{"title":"Import data into Streak","description":"Learn how to import data into your Streak Pipelines","url":"http://support.streak.com/en/articles/8011247-import-data-into-streak"},{"title":"Native webhooks","description":"Create inbound and outbound webhooks to send data through Streak.","url":"http://support.streak.com/en/articles/7855559-native-webhooks"},{"title":"Native Google Forms integration","description":"Connect Streak with Google Forms and automate your workflow when somebody submits a new form.","url":"http://support.streak.com/en/articles/7036539-native-google-forms-integration"},{"title":"Removing Users from your Streak team","description":"How to remove a user from your team and how to manage their data after they leave","url":"http://support.streak.com/en/articles/6925675-removing-users-from-your-streak-team"},{"title":"Add users to your Streak team","description":"Collaborate with team members and share emails in your pipelines","url":"http://support.streak.com/en/articles/6925671-add-users-to-your-streak-team"},{"title":"Advanced Reporting","description":"Answer questions and gain insights with granular pipeline analytics.","url":"http://support.streak.com/en/articles/6871687-advanced-reporting"},{"title":"Introduction to Integrations & Automation","description":"Overview: connect Streak with third party apps and automate your workflow","url":"http://support.streak.com/en/articles/6856282-introduction-to-integrations-automation"},{"title":"Frequently used integration formulas","description":"Customize your automations to calculate values using formulas","url":"http://support.streak.com/en/articles/6854417-frequently-used-integration-formulas"},{"title":"FAQ - Native Integrations and Automations","description":"Common questions when using Streak integrations and automations","url":"http://support.streak.com/en/articles/6846143-faq-native-integrations-and-automations"},{"title":"Funnel Reports","description":"See where boxes drop off throughout your pipeline and improve conversion rates","url":"http://support.streak.com/en/articles/6843564-funnel-reports"},{"title":"Native Streak <> Streak automations","description":"How to build automations in Streak","url":"http://support.streak.com/en/articles/6843173-native-streak-streak-automations"},{"title":"Native Typeform integration","description":"Integrate Streak with Typeform and automate your workflow when somebody completes a new form","url":"http://support.streak.com/en/articles/6843072-native-typeform-integration"},{"title":"Native Calendly integration","description":"Integrate with Calendly and create automations when somebody books an event.","url":"http://support.streak.com/en/articles/6842363-native-calendly-integration"},{"title":"Why am I getting errors when importing with Google Sheets?","description":"Common errors when using the Streak CRM Importer Tool","url":"http://support.streak.com/en/articles/6597541-why-am-i-getting-errors-when-importing-with-google-sheets"},{"title":"Introduction to Streak pipelines","description":"Learn how to track leads, contacts, and opportunities through a pipeline","url":"http://support.streak.com/en/articles/6167710-introduction-to-streak-pipelines"},{"title":"Learn your way around Streak","description":"Learn where to find Streak in your inbox","url":"http://support.streak.com/en/articles/6167701-learn-your-way-around-streak"},{"title":"Welcome to Streak!","description":"Watch an overview of how Streak works","url":"http://support.streak.com/en/articles/6167694-welcome-to-streak"},{"title":"Add credit card information before your trial period ends","description":"Paying for your Streak subscription","url":"http://support.streak.com/en/articles/6057653-add-credit-card-information-before-your-trial-period-ends"},{"title":"Invoices and receipts","description":"Looking for your team\'s billing history?","url":"http://support.streak.com/en/articles/6057647-invoices-and-receipts"},{"title":"Updating your credit card and billing information","description":"Need to update payment details on file for your paid subscription?","url":"http://support.streak.com/en/articles/6057637-updating-your-credit-card-and-billing-information"},{"title":"Taking over billing for your team","description":"Billing owner leaving?","url":"http://support.streak.com/en/articles/6057632-taking-over-billing-for-your-team"},{"title":"Link text with URLs not supported","description":"","url":"http://support.streak.com/en/articles/6047968-link-text-with-urls-not-supported"},{"title":"Suspicious links","description":"Why can\'t Streak track my link?","url":"http://support.streak.com/en/articles/6047937-suspicious-links"},{"title":"Track link clicks in your sent emails","description":"Send tracked links and see they were clicked","url":"http://support.streak.com/en/articles/6017570-track-link-clicks-in-your-sent-emails"},{"title":"Create a mail merge using a CSV file","description":"Upload a CSV file to add recipients to your mail merge","url":"http://support.streak.com/en/articles/5867318-create-a-mail-merge-using-a-csv-file"},{"title":"See the status of your mail merge","description":"View a list of all your mail merges and their performance","url":"http://support.streak.com/en/articles/5604670-see-the-status-of-your-mail-merge"},{"title":"Pausing an active mail merge","description":"Pause all messages, or just for specific recipients","url":"http://support.streak.com/en/articles/5604620-pausing-an-active-mail-merge"},{"title":"Share all emails in your pipeline","description":"Why do I have to request access to a thread?","url":"http://support.streak.com/en/articles/5142195-share-all-emails-in-your-pipeline"},{"title":"How to start a chat with Streak Support","description":"Our team is available to assist","url":"http://support.streak.com/en/articles/5091382-how-to-start-a-chat-with-streak-support"},{"title":"Why am I getting a “refused to connect” error on my importer tool?","description":"Troubleshooting the Streak Importer","url":"http://support.streak.com/en/articles/4887242-why-am-i-getting-a-refused-to-connect-error-on-my-importer-tool"},{"title":"Opting in to the new pipeline preview","description":"","url":"http://support.streak.com/en/articles/4853876-opting-in-to-the-new-pipeline-preview"},{"title":"Add an email to more than one box","description":"Add an email to multiple boxes and pipelines","url":"http://support.streak.com/en/articles/4300872-add-an-email-to-more-than-one-box"},{"title":"Adding unshared emails in an existing thread","description":"Share your version of a thread with your team.","url":"http://support.streak.com/en/articles/4300274-adding-unshared-emails-in-an-existing-thread"},{"title":"Adding an email from the compose window","description":"Add an email that you\'re currently writing to track outgoing emails","url":"http://support.streak.com/en/articles/4300261-adding-an-email-from-the-compose-window"},{"title":"Adding emails from the inbox view","description":"Add one or more emails from your inbox","url":"http://support.streak.com/en/articles/4300260-adding-emails-from-the-inbox-view"},{"title":"Adding an email from the thread view","description":"Add an email that you are currently viewing in your inbox","url":"http://support.streak.com/en/articles/4300253-adding-an-email-from-the-thread-view"},{"title":"Overview: Automatic email sharing","description":"Pull your team\'s emails into boxes automatically","url":"http://support.streak.com/en/articles/4300110-overview-automatic-email-sharing"},{"title":"Mail merge","description":"Send personalized mass emails with automatic follow-up sequences","url":"http://support.streak.com/en/articles/4278211-mail-merge"},{"title":"Referral Program","description":"Increase your Streak limits by referring your friends","url":"http://support.streak.com/en/articles/4178004-referral-program"},{"title":"Deleting a contact or organization","description":"","url":"http://support.streak.com/en/articles/4144011-deleting-a-contact-or-organization"},{"title":"Share links to pipelines, saved views, and boxes","description":"Send your team members direct links to your work in Streak","url":"http://support.streak.com/en/articles/4037275-share-links-to-pipelines-saved-views-and-boxes"},{"title":"Editing stages in your pipeline","description":"How to rename, add, delete, and reorder your pipeline\'s stages","url":"http://support.streak.com/en/articles/3948242-editing-stages-in-your-pipeline"},{"title":"Streak Home","description":"Find your to-do list, learn how to use Streak, and manage your settings","url":"http://support.streak.com/en/articles/3945433-streak-home"},{"title":"How can I avoid my emails being marked as spam when sending a mail merge?","description":"Tips for a successful mail merge","url":"http://support.streak.com/en/articles/3851138-how-can-i-avoid-my-emails-being-marked-as-spam-when-sending-a-mail-merge"},{"title":"How to hide pipelines","description":"How to hide less frequently accessed pipelines from the sidebar","url":"http://support.streak.com/en/articles/3839141-how-to-hide-pipelines"},{"title":"Cómo desinstalar la extensión Streak","description":"","url":"http://support.streak.com/es/articles/3811899-como-desinstalar-la-extension-streak"},{"title":"How to copy a pipeline to a new pipeline","description":"","url":"http://support.streak.com/en/articles/3690643-how-to-copy-a-pipeline-to-a-new-pipeline"},{"title":"Deleting a pipeline","description":"Made a mistake or need to remove a pipeline?","url":"http://support.streak.com/en/articles/3640306-deleting-a-pipeline"},{"title":"Contacts and organizations","description":"Track contact information and your team\'s interaction history with a person or company","url":"http://support.streak.com/en/articles/3623777-contacts-and-organizations"},{"title":"Stop sharing emails in Streak","description":"Make an email private, remove it from a box, or turn off email sharing in Streak","url":"http://support.streak.com/en/articles/3617621-stop-sharing-emails-in-streak"},{"title":"Include all emails with a contact","description":"Automatically share all of your emails and see your team’s conversations with contacts or organizations.","url":"http://support.streak.com/en/articles/3544409-include-all-emails-with-a-contact"},{"title":"How to move a box to a new pipeline","description":"","url":"http://support.streak.com/en/articles/3519103-how-to-move-a-box-to-a-new-pipeline"},{"title":"Streak for Slack integration","description":"How to use the Streak for Slack app","url":"http://support.streak.com/en/articles/3426055-streak-for-slack-integration"},{"title":"Installing the Streak for Slack app","description":"How to add and remove Streak from your Slack channels","url":"http://support.streak.com/en/articles/3426032-installing-the-streak-for-slack-app"},{"title":"Adding and Deleting Pipeline Columns","description":"Custom and Magic Columns let you track any type of information that is important and useful to you in your pipeline","url":"http://support.streak.com/en/articles/3403969-adding-and-deleting-pipeline-columns"},{"title":"Keyboard shortcuts","description":"Increase efficiency with Streak keyboard shortcuts","url":"http://support.streak.com/en/articles/3383748-keyboard-shortcuts"},{"title":"Adding boxes to your pipeline","description":"Five ways to fill in your pipeline","url":"http://support.streak.com/en/articles/3317255-adding-boxes-to-your-pipeline"},{"title":"Update box information in the sidebar","description":"Update your pipeline while reading or drafting an email","url":"http://support.streak.com/en/articles/3223055-update-box-information-in-the-sidebar"},{"title":"Find pipeline information in the sidebar","description":"Pipeline information about your emails and contacts, right in your inbox.","url":"http://support.streak.com/en/articles/3222909-find-pipeline-information-in-the-sidebar"},{"title":"How to tell when a tracked message is read","description":"Understanding the email tracking icons","url":"http://support.streak.com/en/articles/3179591-how-to-tell-when-a-tracked-message-is-read"},{"title":"What happens if I change my email address or email domain?","description":"","url":"http://support.streak.com/en/articles/3105643-what-happens-if-i-change-my-email-address-or-email-domain"},{"title":"Formula Errors","description":"Seeing \\"Error\\" in your formula columns?","url":"http://support.streak.com/en/articles/3025204-formula-errors"},{"title":"Is it possible to merge boxes?","description":"We do not yet have the ability to merge boxes","url":"http://support.streak.com/en/articles/2921618-is-it-possible-to-merge-boxes"},{"title":"How does Streak handle phone extensions?","description":"What if my Contact card has an extension or foreign number?","url":"http://support.streak.com/en/articles/2887504-how-does-streak-handle-phone-extensions"},{"title":"Reply to your team\'s shared emails","description":"Streak makes it possible to reply to emails that aren\'t actually in your Gmail inbox","url":"http://support.streak.com/en/articles/2865998-reply-to-your-team-s-shared-emails"},{"title":"Share a snippet","description":"Save your team time with standardized messaging","url":"http://support.streak.com/en/articles/2833007-share-a-snippet"},{"title":"Scheduling pipeline exports","description":"Utilize Zapier to schedule exports of data within a pipeline to a Google Sheet on a regular cadence","url":"http://support.streak.com/en/articles/2786415-scheduling-pipeline-exports"},{"title":"Can Streak encrypt my email?","description":"Looking for Secure Mail for Gmail or password-protected mails?","url":"http://support.streak.com/en/articles/2775844-can-streak-encrypt-my-email"},{"title":"Pipelines","description":"Manage workflows, processes, and accounts","url":"http://support.streak.com/en/articles/2761926-pipelines"},{"title":"Creating a pipeline","description":"Begin managing your workflow in Gmail","url":"http://support.streak.com/en/articles/2761787-creating-a-pipeline"},{"title":"Best practices when creating a mail merge","description":"Our best tips for an effective mail merge","url":"http://support.streak.com/en/articles/2735763-best-practices-when-creating-a-mail-merge"},{"title":"Can recipients see each other?","description":"How does Streak\'s mail merge work? Is it similar to BCC?","url":"http://support.streak.com/en/articles/2735703-can-recipients-see-each-other"},{"title":"Linking boxes","description":"Tie and link boxes together in many-to-many relationships","url":"http://support.streak.com/en/articles/2735535-linking-boxes"},{"title":"Streak Share","description":"Link to emails in your inbox","url":"http://support.streak.com/en/articles/2726302-streak-share"},{"title":"Streak Unlimited Licensing","description":"","url":"http://support.streak.com/en/articles/2690948-streak-unlimited-licensing"},{"title":"Import multiple contacts from Sheets to a Pipeline","description":"Import more than one contact to a box in Streak","url":"http://support.streak.com/en/articles/2680307-import-multiple-contacts-from-sheets-to-a-pipeline"},{"title":"Accessing a pipeline\'s newsfeed","description":"Keep track of all changes in a pipeline","url":"http://support.streak.com/en/articles/2664729-accessing-a-pipeline-s-newsfeed"},{"title":"How does Sales use Streak? (Pt. 3)","description":"A day in the life of Sales with Streak (part three)","url":"http://support.streak.com/en/articles/2650863-how-does-sales-use-streak-pt-3"},{"title":"How does Sales use Streak? (Pt. 2)","description":"A day in the life of Sales with Streak (part two)","url":"http://support.streak.com/en/articles/2650829-how-does-sales-use-streak-pt-2"},{"title":"How does Sales use Streak? (Pt. 1)","description":"A day in the life of Sales with Streak (part one)","url":"http://support.streak.com/en/articles/2650084-how-does-sales-use-streak-pt-1"},{"title":"Pipeline access roles","description":"Assign different roles to different users to control your data","url":"http://support.streak.com/en/articles/2648798-pipeline-access-roles"},{"title":"Sharing a pipeline","description":"Collaborate with your team","url":"http://support.streak.com/en/articles/2648401-sharing-a-pipeline"},{"title":"Connecting Hangouts Chat to your pipelines","description":"Integrate Google\'s enterprise chat solution with Streak to create a single source of truth for your team","url":"http://support.streak.com/en/articles/2632103-connecting-hangouts-chat-to-your-pipelines"},{"title":"Which are the most popular features of Streak?","description":"Four features in Streak that our users use and love","url":"http://support.streak.com/en/articles/2627649-which-are-the-most-popular-features-of-streak"},{"title":"What are Streak\'s Email Power Tools?","description":"A list of Streak\'s Email Power Tools","url":"http://support.streak.com/en/articles/2626807-what-are-streak-s-email-power-tools"},{"title":"Getting Started","description":"A few easy steps to get started with Streak","url":"http://support.streak.com/en/articles/2624039-getting-started"},{"title":"Get your Streak API key","description":"Any and everything you need to know about authentication with the Streak API","url":"http://support.streak.com/en/articles/2612883-get-your-streak-api-key"},{"title":"Can I see the exact time a view was tracked?","description":"Need to know the exact time an email was viewed?","url":"http://support.streak.com/en/articles/2612568-can-i-see-the-exact-time-a-view-was-tracked"},{"title":"Multiple deals for one company/customer","description":"Best practices for tracking multiple deals with the same people","url":"http://support.streak.com/en/articles/2577250-multiple-deals-for-one-company-customer"},{"title":"Can I export my Tasks, Call Logs, and Meeting Notes from my Pipeline?","description":"","url":"http://support.streak.com/en/articles/2569582-can-i-export-my-tasks-call-logs-and-meeting-notes-from-my-pipeline"},{"title":"Call Logs & Meeting Notes","description":"Record notes from calls and meetings in the box timeline","url":"http://support.streak.com/en/articles/2569566-call-logs-meeting-notes"},{"title":"How can I find my Tasks from the Pipeline level?","description":"","url":"http://support.streak.com/en/articles/2566627-how-can-i-find-my-tasks-from-the-pipeline-level"},{"title":"Tasks","description":"Create tasks to manage your follow-up and to-do list in Streak","url":"http://support.streak.com/en/articles/2563556-tasks"},{"title":"Sync tasks with Google Calendar","description":"See your Streak tasks in Google Calendar","url":"http://support.streak.com/en/articles/2563544-sync-tasks-with-google-calendar"},{"title":"Boxes","description":"What is a box?","url":"http://support.streak.com/en/articles/2563490-boxes"},{"title":"Customize the box view layout","description":"Sections are arrangeable and customizable to your preference.","url":"http://support.streak.com/en/articles/2563484-customize-the-box-view-layout"},{"title":"Magic Columns","description":"Streak automatically captures data for you, like Date of Last Sent Email, Total Tracked Views, Days in Stage, or even Number of Tasks Due.","url":"http://support.streak.com/en/articles/2563465-magic-columns"},{"title":"Custom Columns","description":"Track any type of data in your pipeline","url":"http://support.streak.com/en/articles/2563457-custom-columns"},{"title":"Can I use today\'s date in a formula?","description":"Need to create a formula that uses today\'s date?","url":"http://support.streak.com/en/articles/2563349-can-i-use-today-s-date-in-a-formula"},{"title":"Upcoming","description":"View all of your tasks in the sidebar","url":"http://support.streak.com/en/articles/2563282-upcoming"},{"title":"Email magic columns are broken, what\'s going wrong?","description":"Date of Last Email Sent not tracking your messages?","url":"http://support.streak.com/en/articles/2563027-email-magic-columns-are-broken-what-s-going-wrong"},{"title":"Customizing a Pipeline","description":"Track information that is important to your process","url":"http://support.streak.com/en/articles/2562671-customizing-a-pipeline"},{"title":"Is Streak available outside of Gmail or the web?","description":"Looking for a Firefox extension or Outlook plugin?","url":"http://support.streak.com/en/articles/2559460-is-streak-available-outside-of-gmail-or-the-web"},{"title":"How do I remove Streak from my personal email?","description":"Streak appearing in both your personal and professional emails?","url":"http://support.streak.com/en/articles/2554858-how-do-i-remove-streak-from-my-personal-email"},{"title":"Can I use Streak with multiple email accounts?","description":"Share your pipelines with team members","url":"http://support.streak.com/en/articles/2554784-can-i-use-streak-with-multiple-email-accounts"},{"title":"How does Streak work with Gmail?","description":"Streak is built as an overlay on top of Gmail to tightly integrate with your email experience","url":"http://support.streak.com/en/articles/2554774-how-does-streak-work-with-gmail"},{"title":"How do I fix the formatting on my snippet?","description":"Snippet creating odd formatting in your emails?","url":"http://support.streak.com/en/articles/2553117-how-do-i-fix-the-formatting-on-my-snippet"},{"title":"What does \\"Bad Response From Server\\" mean?","description":"Trying to open a shared email and receiving an error?","url":"http://support.streak.com/en/articles/2553100-what-does-bad-response-from-server-mean"},{"title":"Thread splitter","description":"Select specific messages in a conversation and split them into their own thread.","url":"http://support.streak.com/en/articles/2553011-thread-splitter"},{"title":"How do I close the sidebar?","description":"Sidebar blocking your view? Need more space in your Gmail?","url":"http://support.streak.com/en/articles/2553001-how-do-i-close-the-sidebar"},{"title":"Streak Gsuite Add-on","description":"The add-on adds additional mobile functionality to your Streak experience","url":"http://support.streak.com/en/articles/2552972-streak-gsuite-add-on"},{"title":"Extension conflicts","description":"Does Streak work with my other extensions? What is an extension conflict?","url":"http://support.streak.com/en/articles/2552945-extension-conflicts"},{"title":"Recommended browser settings","description":"Configuring your browser for maximum compatibility with Streak","url":"http://support.streak.com/en/articles/2552865-recommended-browser-settings"},{"title":"Streak is not loading in my Gmail, what do I do?","description":"A few simple troubleshooting steps will usually resolve the issue","url":"http://support.streak.com/en/articles/2552859-streak-is-not-loading-in-my-gmail-what-do-i-do"},{"title":"Connecting a form with Streak","description":"Using Google Forms, Wufoo, or Typeform to collect information? Send the answers directly to Streak.","url":"http://support.streak.com/en/articles/2551915-connecting-a-form-with-streak"},{"title":"Why does Streak need permission to my Google accounts?","description":"Streak needs access to your Google accounts for our various features and integration to work.","url":"http://support.streak.com/en/articles/2549174-why-does-streak-need-permission-to-my-google-accounts"},{"title":"What information does Streak collect?","description":"","url":"http://support.streak.com/en/articles/2548836-what-information-does-streak-collect"},{"title":"Does Streak read or have access to my emails?","description":"","url":"http://support.streak.com/en/articles/2548748-does-streak-read-or-have-access-to-my-emails"},{"title":"Where is my data stored and who has access to my data?","description":"Streak data is stored on Google\'s Cloud Platform in the United States.","url":"http://support.streak.com/en/articles/2548736-where-is-my-data-stored-and-who-has-access-to-my-data"},{"title":"User roles and permissions","description":"Understand different roles on a Streak team","url":"http://support.streak.com/en/articles/2546324-user-roles-and-permissions"},{"title":"Snippets","description":"Create templated email messages and replies","url":"http://support.streak.com/en/articles/2546223-snippets"},{"title":"Send mail merge to specific contacts in your boxes","description":"Choose all contacts, starred contacts, internal, or custom contacts from each box","url":"http://support.streak.com/en/articles/2546175-send-mail-merge-to-specific-contacts-in-your-boxes"},{"title":"Can I send a different attachment to each recipient?","description":"Need to send your contacts specific attachments?","url":"http://support.streak.com/en/articles/2546139-can-i-send-a-different-attachment-to-each-recipient"},{"title":"Add images to snippets and mail merges","description":"How to add an image to your snippet or include an image in your mail merge","url":"http://support.streak.com/en/articles/2546122-add-images-to-snippets-and-mail-merges"},{"title":"Daily mail merge sending limits","description":"Mail Merge daily sending limits for each Streak and Google plan type","url":"http://support.streak.com/en/articles/2546069-daily-mail-merge-sending-limits"},{"title":"Personalize your mail merge with variables","description":"Make your emails more personal with variables","url":"http://support.streak.com/en/articles/2546027-personalize-your-mail-merge-with-variables"},{"title":"Frequently used JavaScript formulas","description":"Kickstart your pipeline with our most common JavaScript formulas","url":"http://support.streak.com/en/articles/2545207-frequently-used-javascript-formulas"},{"title":"Terminology","description":"What are pipelines, stages, and boxes?","url":"http://support.streak.com/en/articles/2542963-terminology"},{"title":"What is Streak?","description":"Manage everything from Gmail","url":"http://support.streak.com/en/articles/2542950-what-is-streak"},{"title":"How can I migrate my data from another service?","description":"","url":"http://support.streak.com/en/articles/2514648-how-can-i-migrate-my-data-from-another-service"},{"title":"Using Google Sheets Tips & Tricks","description":"Tips and tricks for working with your data in Google Sheets","url":"http://support.streak.com/en/articles/2514624-using-google-sheets-tips-tricks"},{"title":"Why did my exported file combine all Columns into one cell?","description":"","url":"http://support.streak.com/en/articles/2514621-why-did-my-exported-file-combine-all-columns-into-one-cell"},{"title":"Export a pipeline","description":"Learn how to export your pipeline data to Google Sheets","url":"http://support.streak.com/en/articles/2514616-export-a-pipeline"},{"title":"Import data into Streak using Google Sheets (Old Version)","description":"Learn how to import data into your Streak Pipelines","url":"http://support.streak.com/en/articles/2514596-import-data-into-streak-using-google-sheets-old-version"},{"title":"Some of my Reports aren\'t calculating all of the money in my Pipeline. Why?","description":"","url":"http://support.streak.com/en/articles/2514277-some-of-my-reports-aren-t-calculating-all-of-the-money-in-my-pipeline-why"},{"title":"How to create custom reports from Saved Views","description":"Create reports with granular data and custom visualizations","url":"http://support.streak.com/en/articles/2514266-how-to-create-custom-reports-from-saved-views"},{"title":"Pipeline Visualizations","description":"Visually represent your pipeline data with charts and graphs","url":"http://support.streak.com/en/articles/2514239-pipeline-visualizations"},{"title":"Pipeline Summaries","description":"","url":"http://support.streak.com/en/articles/2514232-pipeline-summaries"},{"title":"Measuring Team Performance With Streak Reports","description":"","url":"http://support.streak.com/en/articles/2514211-measuring-team-performance-with-streak-reports"},{"title":"Pipeline Reports","description":"Learn how to analyze and report on your data in Streak","url":"http://support.streak.com/en/articles/2514184-pipeline-reports"},{"title":"JavaScript formulas","description":"A reference guide for using JavaScript in a formula column","url":"http://support.streak.com/en/articles/2511556-javascript-formulas"},{"title":"Formula columns with AI","description":"Looking to automatically calculate data in your pipeline?","url":"http://support.streak.com/en/articles/2511537-formula-columns-with-ai"},{"title":"Recommended Gmail settings","description":"Looking for the optimal experience or having trouble with Gmail? Check here to make sure your settings align with what Streak expects.","url":"http://support.streak.com/en/articles/2481449-recommended-gmail-settings"},{"title":"How do I update Streak?","description":"Being asked by Streak to update or refresh?","url":"http://support.streak.com/en/articles/2481429-how-do-i-update-streak"},{"title":"View boxes from a saved view in your inbox","description":"See your saved view results in your inbox.","url":"http://support.streak.com/en/articles/2481424-view-boxes-from-a-saved-view-in-your-inbox"},{"title":"Streak\'s API","description":"Where to find our API documentation and how to get answers","url":"http://support.streak.com/en/articles/2466642-streak-s-api"},{"title":"Canceling your plan","description":"We\'re sad to see you go. 😢","url":"http://support.streak.com/en/articles/2466485-canceling-your-plan"},{"title":"Upgrading your plan","description":"Ready to start utilizing Streak\'s fully-featured CRM?","url":"http://support.streak.com/en/articles/2466455-upgrading-your-plan"},{"title":"Filter, sort, and group boxes using saved views","description":"Create pipeline filters and segments with saved views","url":"http://support.streak.com/en/articles/2466406-filter-sort-and-group-boxes-using-saved-views"},{"title":"Total number of tracking views is inaccurate","description":"It\'s possible you or one of your email recipients inadvertently copied the email tracking pixel.","url":"http://support.streak.com/en/articles/2448084-total-number-of-tracking-views-is-inaccurate"},{"title":"Email view tracking","description":"Turn on and configure email tracking","url":"http://support.streak.com/en/articles/2448073-email-view-tracking"},{"title":"There\'s no tracking information but the recipient replied","description":"Streak missed a view?","url":"http://support.streak.com/en/articles/2447924-there-s-no-tracking-information-but-the-recipient-replied"},{"title":"Streak tracked my own view","description":"Does opening the sent email seem to be adding views to your email?","url":"http://support.streak.com/en/articles/2447854-streak-tracked-my-own-view"},{"title":"The tracking location data is incorrect","description":"Recipient in a location that doesn\'t add up?","url":"http://support.streak.com/en/articles/2447787-the-tracking-location-data-is-incorrect"},{"title":"Why do some emails include tracking location data and others don\'t?","description":"","url":"http://support.streak.com/en/articles/2447785-why-do-some-emails-include-tracking-location-data-and-others-don-t"},{"title":"Can I start tracking or stop tracking an email I\'ve already sent?","description":"Once an email is sent either with or without the image, it isn\'t possible to add or remove it.","url":"http://support.streak.com/en/articles/2447771-can-i-start-tracking-or-stop-tracking-an-email-i-ve-already-sent"},{"title":"Can I see exactly which of the recipients opened my tracked email?","description":"Who read my email?","url":"http://support.streak.com/en/articles/2447768-can-i-see-exactly-which-of-the-recipients-opened-my-tracked-email"},{"title":"Can my recipient tell if I\'m tracking the email I send?","description":"You should generally assume \\"yes.\\"","url":"http://support.streak.com/en/articles/2447764-can-my-recipient-tell-if-i-m-tracking-the-email-i-send"},{"title":"How does email tracking work?","description":"It\'s a tiny pixel.","url":"http://support.streak.com/en/articles/2447759-how-does-email-tracking-work"},{"title":"Report a bug","description":"Found something that doesn\'t look right?","url":"http://support.streak.com/en/articles/2415036-report-a-bug"},{"title":"Phone number for support","description":"Looking for a call?","url":"http://support.streak.com/en/articles/2415033-phone-number-for-support"},{"title":"Merge or delete a team","description":"Looking to migrate your data into a single team?","url":"http://support.streak.com/en/articles/2415018-merge-or-delete-a-team"},{"title":"Unable to add Contacts and Organization to your Pipeline?","description":"","url":"http://support.streak.com/en/articles/2415013-unable-to-add-contacts-and-organization-to-your-pipeline"},{"title":"Editing and adding information to a Contact or Organization","description":"Edit or add more information to your contacts and organizations.","url":"http://support.streak.com/en/articles/2414989-editing-and-adding-information-to-a-contact-or-organization"},{"title":"Removing a contact or organization from your boxes","description":"How to remove a contact from your boxes","url":"http://support.streak.com/en/articles/2414965-removing-a-contact-or-organization-from-your-boxes"},{"title":"Using contacts and organizations","description":"What can I do with contacts and organizations?","url":"http://support.streak.com/en/articles/2414716-using-contacts-and-organizations"},{"title":"Add contacts and organizations to your pipelines","description":"Track people and companies in Streak","url":"http://support.streak.com/en/articles/2400401-add-contacts-and-organizations-to-your-pipelines"},{"title":"Mail Merge with automatic follow-up","description":"Send emails and automatic followup at scale","url":"http://support.streak.com/en/articles/2348155-mail-merge-with-automatic-follow-up"},{"title":"How do I uninstall Streak?","description":"We\'re sorry to see you go.","url":"http://support.streak.com/en/articles/2348111-how-do-i-uninstall-streak"},{"title":"Installing Streak\'s mobile app","description":"Take Streak with you wherever you go.","url":"http://support.streak.com/en/articles/2292078-installing-streak-s-mobile-app"},{"title":"Installing the Streak extension","description":"The first step in using Streak to manage everything from your inbox","url":"http://support.streak.com/en/articles/2291329-installing-the-streak-extension"},{"title":"Test email tracking","description":"Unsure if your messages are being tracked?","url":"http://support.streak.com/en/articles/2276966-test-email-tracking"},{"title":"Clear your browser\'s cache","description":"Having trouble? Clearing your browser\'s cache is likely the solution.","url":"http://support.streak.com/en/articles/2274524-clear-your-browser-s-cache"},{"title":"Create an exception for Streak","description":"Using AdBlock, Ghostery, or other privacy software alongside Streak?","url":"http://support.streak.com/en/articles/2274158-create-an-exception-for-streak"},{"title":"Enable third-party cookies","description":"Having trouble staying logged-in?","url":"http://support.streak.com/en/articles/2274121-enable-third-party-cookies"}]');

/***/ })

};
;
//# sourceMappingURL=https://storage.googleapis.com/streak-extension-sourcemaps/clientjs/clientjs.chunk.862.f94913b45b540319a86b.js.map