"use strict";
export const id = 2150;
export const ids = [2150];
export const modules = {

/***/ 79589:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ IntegrationCard)
/* harmony export */ });
/* harmony import */ var _components_Label_Label__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32029);
/* harmony import */ var _services_tracker_useTracker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70989);
/* harmony import */ var _images_zapierLogoGrey_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47152);
/* harmony import */ var _core_enabledFeaturesController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50452);
/* harmony import */ var _widgets_paywallGateway_paywallGateway__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(64167);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(35091);
/* harmony import */ var _components_Icon_Icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(71174);
/* harmony import */ var _services_integrationsService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(44557);
/* harmony import */ var _IntegrationCard_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(68871);
/* harmony import */ var _streakyc_ui_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(87084);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_core_enabledFeaturesController__WEBPACK_IMPORTED_MODULE_3__, _widgets_paywallGateway_paywallGateway__WEBPACK_IMPORTED_MODULE_4__]);
([_core_enabledFeaturesController__WEBPACK_IMPORTED_MODULE_3__, _widgets_paywallGateway_paywallGateway__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











function IntegrationCard(_ref) {
  let {
    integrationId,
    onClickCard,
    images,
    title,
    description,
    isZapier = true
  } = _ref;
  const _track = (0,_services_tracker_useTracker__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)('integrationCard', {
    integrationId,
    title,
    isZapier
  });
  const isNativeIntegration = _services_integrationsService__WEBPACK_IMPORTED_MODULE_7__/* .NATIVE_TEMPLATES */ .jr.has(integrationId);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
    className: _IntegrationCard_module_css__WEBPACK_IMPORTED_MODULE_10__/* .main */ .DH,
    onClick: () => {
      _track('click');
      if (isZapier && !_core_enabledFeaturesController__WEBPACK_IMPORTED_MODULE_3__.EnabledFeatures.isFeatureEnabled('advancedZapier')) {
        (0,_widgets_paywallGateway_paywallGateway__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)({
          feature: 'advancedZapier'
        });
      } else if (isNativeIntegration && !_core_enabledFeaturesController__WEBPACK_IMPORTED_MODULE_3__.EnabledFeatures.isFeatureEnabled('nativeIntegrations')) {
        (0,_widgets_paywallGateway_paywallGateway__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)({
          feature: 'nativeIntegrations'
        });
      } else {
        onClickCard(integrationId);
      }
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
      className: _IntegrationCard_module_css__WEBPACK_IMPORTED_MODULE_10__/* .iconsContainer */ .SD,
      children: images.map((image, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("img", {
        src: image
      }, index))
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_streakyc_ui_components__WEBPACK_IMPORTED_MODULE_8__/* .Typo */ .Jd, {
        variant: "H3 - Section",
        children: title
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_streakyc_ui_components__WEBPACK_IMPORTED_MODULE_8__/* .Typo */ .Jd, {
        variant: "base/basic",
        color: "black/secondary",
        children: description
      }), isZapier && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
        className: _IntegrationCard_module_css__WEBPACK_IMPORTED_MODULE_10__/* .tagWrapper */ ._1,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_Label_Label__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
          backgroundColor: "var(--streak-solid-black-divider)",
          foregroundColor: "var(--streak-solid-black-secondary)",
          prefix: () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("img", {
            alt: "Zapier",
            src: _images_zapierLogoGrey_svg__WEBPACK_IMPORTED_MODULE_2__,
            width: "12px",
            height: "12px"
          }),
          children: "Zapier"
        }), !_core_enabledFeaturesController__WEBPACK_IMPORTED_MODULE_3__.EnabledFeatures.isFeatureEnabled('advancedZapier') && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_Label_Label__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
          backgroundColor: "var(--streak-solid-white)",
          foregroundColor: "var(--streak-black-secondary)",
          isWide: true,
          children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_5__.Locale.getString('available_on_pro')
        })]
      }), isNativeIntegration && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
        className: _IntegrationCard_module_css__WEBPACK_IMPORTED_MODULE_10__/* .tagWrapper */ ._1,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_Label_Label__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
          backgroundColor: "var(--streak-solid-black-divider)",
          foregroundColor: "var(--streak-solid-black-secondary)",
          prefix: () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
            className: _IntegrationCard_module_css__WEBPACK_IMPORTED_MODULE_10__/* .iconSizeAdjustment */ .l5,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
              color: `var(--streak-zapier)`,
              name: "logo",
              size: "xs",
              variant: "inline"
            })
          }),
          children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_5__.Locale.getString('native')
        }), !_core_enabledFeaturesController__WEBPACK_IMPORTED_MODULE_3__.EnabledFeatures.isFeatureEnabled('nativeIntegrations') && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_Label_Label__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
          backgroundColor: "var(--streak-solid-white)",
          foregroundColor: "var(--streak-black-secondary)",
          isWide: true,
          children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_5__.Locale.getString('available_on_pro_plus')
        })]
      })]
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 72132:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ IntegrationGroupCard)
/* harmony export */ });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81518);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _streakyc_ui_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87084);
/* harmony import */ var _services_tracker_useTracker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70989);
/* harmony import */ var _core_enabledFeaturesController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50452);
/* harmony import */ var _widgets_paywallGateway_paywallGateway__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(64167);
/* harmony import */ var _streakyc_ui_components_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2225);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_core_enabledFeaturesController__WEBPACK_IMPORTED_MODULE_3__, _widgets_paywallGateway_paywallGateway__WEBPACK_IMPORTED_MODULE_4__]);
([_core_enabledFeaturesController__WEBPACK_IMPORTED_MODULE_3__, _widgets_paywallGateway_paywallGateway__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







function IntegrationGroupCard(_ref) {
  let {
    groupId,
    groupIcon,
    navIcon,
    onClickGroupCard,
    title,
    description
  } = _ref;
  const _track = (0,_services_tracker_useTracker__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)('integrationGroupCard', {
    groupId,
    title
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    onClick: () => {
      _track('click');
      if (groupId === 'more_apps' && !_core_enabledFeaturesController__WEBPACK_IMPORTED_MODULE_3__.EnabledFeatures.isFeatureEnabled('advancedZapier')) {
        (0,_widgets_paywallGateway_paywallGateway__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)({
          feature: 'advancedZapier'
        });
      } else if (groupId === 'native_integrations_from_scratch' && !_core_enabledFeaturesController__WEBPACK_IMPORTED_MODULE_3__.EnabledFeatures.isFeatureEnabled('nativeIntegrations')) {
        (0,_widgets_paywallGateway_paywallGateway__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)({
          feature: 'nativeIntegrations'
        });
      } else {
        onClickGroupCard(groupId);
      }
    },
    className: "jsx-3771298922" + " " + "streak__integration_group_card",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
      className: "jsx-3771298922" + " " + "streak__integration_group_card_iconContainer",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_streakyc_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Icon */ .JO, {
        name: groupIcon,
        color: "black/secondary",
        size: "m"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_streakyc_ui_components_layout__WEBPACK_IMPORTED_MODULE_5__/* .LayoutColumn */ .rO, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_streakyc_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Typo */ .Jd, {
        variant: "H3 - Section",
        children: title
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_streakyc_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Typo */ .Jd, {
        variant: "base/basic",
        color: "black/secondary",
        children: description
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: "jsx-3771298922" + " " + "streak__integration_group_card_endIconContainer",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_streakyc_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Icon */ .JO, {
        name: navIcon,
        size: "m"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "3771298922",
      children: [".streak__integration_group_card.jsx-3771298922{background:var(--streak-solid-white);border:1px solid var(--streak-black-divider);box-sizing:border-box;border-radius:4px;-webkit-transition:box-shadow 0.5s;transition:box-shadow 0.5s;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:10px 12px;}", ".streak__integration_group_card.jsx-3771298922:hover{box-shadow: 0px 2px 4px var(--streak-black-shadow), 0px 1px 10px var(--streak-black-divider), 0px 4px 5px var(--streak-black-divider);border-color:transparent;cursor:pointer;}", ".streak__integration_group_card_iconContainer.jsx-3771298922{margin-right:12px;}", ".streak__integration_group_card_endIconContainer.jsx-3771298922{margin-left:auto;margin-right:8px;}"]
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 39328:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* reexport safe */ _IntegrationCard__WEBPACK_IMPORTED_MODULE_0__.$),
/* harmony export */   h: () => (/* reexport safe */ _IntegrationGroupCard__WEBPACK_IMPORTED_MODULE_1__.h)
/* harmony export */ });
/* harmony import */ var _IntegrationCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79589);
/* harmony import */ var _IntegrationGroupCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72132);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_IntegrationCard__WEBPACK_IMPORTED_MODULE_0__, _IntegrationGroupCard__WEBPACK_IMPORTED_MODULE_1__]);
([_IntegrationCard__WEBPACK_IMPORTED_MODULE_0__, _IntegrationGroupCard__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 42150:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81518);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44345);
/* harmony import */ var _streakyc_common_services_locale_locale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35091);
/* harmony import */ var _streakyc_ui_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87084);
/* harmony import */ var _streakyc_common_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(40310);
/* harmony import */ var _streakyc_common_widgets_bridges_iframeBridgeAsReactComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(73018);
/* harmony import */ var _streakyc_common_widgets_react_loadingSpinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(72905);
/* harmony import */ var _store_messages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(49269);
/* harmony import */ var _store_selectors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(17423);
/* harmony import */ var _basics_drawer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(642);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(825);
/* harmony import */ var _templatesDrawerErrorModal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(52010);
/* harmony import */ var _templatesDrawerZapModal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(46481);
/* harmony import */ var _cards__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(39328);
/* harmony import */ var _nativeBuilder__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(85044);
/* harmony import */ var _flows__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(57619);
/* harmony import */ var _streakyc_common_lib_utils_prettyNumber__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(6567);
/* harmony import */ var _components_LoadingBar_LoadingBar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(94246);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_cards__WEBPACK_IMPORTED_MODULE_13__, _nativeBuilder__WEBPACK_IMPORTED_MODULE_14__, _flows__WEBPACK_IMPORTED_MODULE_15__]);
([_cards__WEBPACK_IMPORTED_MODULE_13__, _nativeBuilder__WEBPACK_IMPORTED_MODULE_14__, _flows__WEBPACK_IMPORTED_MODULE_15__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




















const FlowLogs = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.lazy)(async () => ({
  default: (await Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 57619))).FlowLogs
}));
const FlowsList = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.lazy)(async () => ({
  default: (await Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 57619))).FlowsList
}));
const ApiKeysView = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.lazy)(async () => __webpack_require__.e(/* import() */ 8649).then(__webpack_require__.bind(__webpack_require__, 68649)));
function TemplateItem(props) {
  const t = props.template;
  if (t.type === _models__WEBPACK_IMPORTED_MODULE_10__/* .IntegrationTemplateItemType */ .aY.Hidden) {
    return null;
  } else if (t.type === _models__WEBPACK_IMPORTED_MODULE_10__/* .IntegrationTemplateItemType */ .aY.Group) {
    const navIcon = 'arrow_forward';
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_cards__WEBPACK_IMPORTED_MODULE_13__/* .IntegrationGroupCard */ .h, {
      groupId: t.id,
      title: t.title,
      description: t.description,
      groupIcon: t.iconName,
      navIcon: navIcon,
      onClickGroupCard: () => props.onClick(t)
    });
  } else if (props.template.type === _models__WEBPACK_IMPORTED_MODULE_10__/* .IntegrationTemplateItemType */ .aY.Recipe) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_cards__WEBPACK_IMPORTED_MODULE_13__/* .IntegrationCard */ .$, {
      integrationId: t.id,
      title: t.title,
      description: t.description,
      images: t.images ? [t.images.image1Url, t.images.image2Url] : [],
      onClickCard: () => props.onClick(t),
      isZapier: t.provider === 'zapier'
    });
  }
  return null;
}
function TemplateItemList(_ref) {
  let {
    loading,
    templates,
    onTemplateClick
  } = _ref;
  if (loading) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_streakyc_common_widgets_react_loadingSpinner__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {});
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.Fragment, {
    children: templates.map(t => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("div", {
      style: {
        padding: '0 0 16px 0'
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(TemplateItem, {
        template: t,
        onClick: onTemplateClick
      }, t.id)
    }, t.id))
  });
}
var SubviewsIds = /*#__PURE__*/function (SubviewsIds) {
  SubviewsIds[SubviewsIds["EditFlow"] = 0] = "EditFlow";
  SubviewsIds[SubviewsIds["FlowLogs"] = 1] = "FlowLogs";
  SubviewsIds[SubviewsIds["FlowDetails"] = 2] = "FlowDetails";
  return SubviewsIds;
}(SubviewsIds || {});
var Tabs = /*#__PURE__*/function (Tabs) {
  Tabs[Tabs["Create"] = 0] = "Create";
  Tabs[Tabs["Mine"] = 1] = "Mine";
  Tabs[Tabs["Team"] = 2] = "Team";
  return Tabs;
}(Tabs || {});
const LoadingBarComponent = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_components_LoadingBar_LoadingBar__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
  style: {
    borderRadius: '4px',
    flex: 1,
    alignSelf: 'center'
  },
  height: 16,
  width: 100
});
function DrawerTabsBody(_ref2) {
  let {
    pipelineKey,
    breadcrumbs,
    activeTabIndex,
    tabContent,
    setActiveTabIndex
  } = _ref2;
  const pipelineFlowsQuery = (0,_flows__WEBPACK_IMPORTED_MODULE_15__.usePipelineFlows)(pipelineKey ?? null, {
    refetchOnWindowFocus: false
  });
  const tabs = [{
    label: _streakyc_common_services_locale_locale__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.getString('create')
  }];
  const {
    team: teamFlows,
    mine: myFlows
  } = pipelineFlowsQuery.data;
  const mineFlowsTab = pipelineFlowsQuery.isLoading ? {
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(LoadingBarComponent, {})
  } : {
    label: _streakyc_common_services_locale_locale__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.getString('integrations_flows_mine_count', {
      count: (0,_streakyc_common_lib_utils_prettyNumber__WEBPACK_IMPORTED_MODULE_16__/* .prettyNumber */ .C)(myFlows.length)
    })
  };
  const teamFlowsTab = {
    label: _streakyc_common_services_locale_locale__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.getString('integrations_flows_team_count', {
      count: (0,_streakyc_common_lib_utils_prettyNumber__WEBPACK_IMPORTED_MODULE_16__/* .prettyNumber */ .C)(teamFlows.length)
    })
  };
  tabs.push(mineFlowsTab);
  tabs.push(teamFlowsTab);
  if (!pipelineFlowsQuery.isLoading && !myFlows.length) {
    mineFlowsTab.hidden = true;
  }
  if (!teamFlows.length) {
    teamFlowsTab.hidden = true;
  }
  if (activeTabIndex > tabs.length - 1) {
    // tabbar will fail if index passed is outside of tabs range
    // could happen when consumer component sets index to 1 while pipelineFlowsQuery is still loading
    activeTabIndex = 0;
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_basics_drawer__WEBPACK_IMPORTED_MODULE_9__/* .DrawerBodyContent */ .M2, {
    children: breadcrumbs.length === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_basics_drawer__WEBPACK_IMPORTED_MODULE_9__/* .DrawerTabBar */ .xB, {
      tabs: tabs,
      activeTabIndex: activeTabIndex,
      activeTabContent: tabContent,
      onTabSelected: activeTab => setActiveTabIndex(activeTab)
    }) : tabContent
  });
}
const TemplatesDrawerBody = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(() => {
  const dispatch = (0,_streakyc_common_store__WEBPACK_IMPORTED_MODULE_4__/* .useDispatchV2 */ .Go)();
  const isReady = (0,_streakyc_common_store__WEBPACK_IMPORTED_MODULE_4__/* .useSelectorV2 */ .Gg)(_store_selectors__WEBPACK_IMPORTED_MODULE_8__/* .getReady */ .Yc);
  const breadcrumbs = (0,_streakyc_common_store__WEBPACK_IMPORTED_MODULE_4__/* .useSelectorV2 */ .Gg)(_store_selectors__WEBPACK_IMPORTED_MODULE_8__/* .getBreadcrumbsTemplates */ .bP);
  const visibleTemplates = (0,_streakyc_common_store__WEBPACK_IMPORTED_MODULE_4__/* .useSelectorV2 */ .Gg)(_store_selectors__WEBPACK_IMPORTED_MODULE_8__/* .getVisibleTemplates */ .tH);
  const error = (0,_streakyc_common_store__WEBPACK_IMPORTED_MODULE_4__/* .useSelectorV2 */ .Gg)(_store_selectors__WEBPACK_IMPORTED_MODULE_8__/* .getError */ .by);
  const zapModal = (0,_streakyc_common_store__WEBPACK_IMPORTED_MODULE_4__/* .useSelectorV2 */ .Gg)(_store_selectors__WEBPACK_IMPORTED_MODULE_8__/* .getZapModal */ .hY);
  const pipelineKey = (0,_streakyc_common_store__WEBPACK_IMPORTED_MODULE_4__/* .useSelectorV2 */ .Gg)(_store_selectors__WEBPACK_IMPORTED_MODULE_8__/* .getPipelineKey */ .Rb);
  const flowKey = (0,_streakyc_common_store__WEBPACK_IMPORTED_MODULE_4__/* .useSelectorV2 */ .Gg)(_store_selectors__WEBPACK_IMPORTED_MODULE_8__/* .getFlowKey */ .sz);
  const [subView, setSubView] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const drawerBody = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const [activeTabIndex, setActiveTabIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Tabs.Create);
  const currentBreadcrumb = breadcrumbs.at(-1) ?? null;
  const closeDrawer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    dispatch((0,_store_messages__WEBPACK_IMPORTED_MODULE_7__/* .hideTemplatesAction */ .GU)({}));
  }, [dispatch]);
  const goBack = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    if (subView) {
      setSubView({
        id: SubviewsIds.FlowDetails,
        options: {
          flowKey: subView.options.flowKey
        }
      });
    } else {
      dispatch((0,_store_messages__WEBPACK_IMPORTED_MODULE_7__/* .navigateToBreadcrumbAction */ .Ze)({
        breadcrumbs: breadcrumbs.slice(0, breadcrumbs.length - 1).map(t => t.id)
      }));
    }
  }, [subView, dispatch, breadcrumbs]);
  const onTemplateClick = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(t => {
    dispatch((0,_store_messages__WEBPACK_IMPORTED_MODULE_7__/* .navigateToTemplateAction */ .uQ)({
      template: t
    }));
  }, [dispatch]);
  const drawerCtx = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => ({
    getDrawerWidth: () => drawerBody.current.getDrawerWidth(),
    close: closeDrawer,
    back: goBack
  }), [closeDrawer, goBack]);
  const handleFlowListItemClick = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(flowKey => {
    setSubView({
      id: SubviewsIds.FlowDetails,
      options: {
        flowKey
      }
    });
  }, [setSubView]);
  const handleEditFlowClick = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(flowKey => {
    setSubView({
      id: SubviewsIds.EditFlow,
      options: {
        flowKey
      }
    });
  }, [setSubView]);
  const handleGoBackToFlowsList = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    setSubView(null);
  }, []);
  const handleFlowLogsClick = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(flowKey => {
    setSubView({
      id: SubviewsIds.FlowLogs,
      options: {
        flowKey
      }
    });
  }, [setSubView]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    // If a flowKey is provided, navigate to the Flow Details page on the Mine tab
    if (flowKey && activeTabIndex === Tabs.Create) {
      setActiveTabIndex(Tabs.Mine);
      setSubView({
        id: SubviewsIds.FlowDetails,
        options: {
          flowKey
        }
      });
    }
  }, [flowKey, activeTabIndex]);
  if (subView) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_basics_drawer__WEBPACK_IMPORTED_MODULE_9__/* .DrawerContext */ .rf.Provider, {
      value: drawerCtx,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_basics_drawer__WEBPACK_IMPORTED_MODULE_9__/* .DrawerBody */ .Ng, {
        ref: drawerBody,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, {
          fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_streakyc_common_widgets_react_loadingSpinner__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
          children: [subView?.id === SubviewsIds.FlowLogs && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(FlowLogs, {
            flowKey: subView.options.flowKey,
            onHeaderBack: () => setSubView({
              id: SubviewsIds.FlowDetails,
              options: {
                flowKey: subView.options.flowKey
              }
            })
          }), subView?.id === SubviewsIds.FlowDetails && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_flows__WEBPACK_IMPORTED_MODULE_15__.FlowDetails, {
            flowKey: subView.options.flowKey,
            headerIcon: pipelineKey ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_basics_drawer__WEBPACK_IMPORTED_MODULE_9__/* .DrawerHeaderButton */ .Do, {
              materialIconName: "arrow_back",
              onClick: handleGoBackToFlowsList
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_basics_drawer__WEBPACK_IMPORTED_MODULE_9__/* .DrawerHeaderButton */ .Do, {
              materialIconName: "close",
              onClick: closeDrawer
            }),
            onClickFlowLogs: handleFlowLogsClick,
            onClickEditFlow: handleEditFlowClick,
            onDeleteFlowSuccess: handleGoBackToFlowsList
          }), subView?.id === SubviewsIds.EditFlow && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_nativeBuilder__WEBPACK_IMPORTED_MODULE_14__/* .FlowEditorExistingFlow */ .Nz, {
            flowKey: subView.options.flowKey
          })]
        })
      })
    });
  }
  let tabContent = null;
  if (currentBreadcrumb?.type === _models__WEBPACK_IMPORTED_MODULE_10__/* .IntegrationTemplateItemType */ .aY.Recipe && currentBreadcrumb.provider === 'native' && currentBreadcrumb.action.type === 'embed' || currentBreadcrumb?.type === _models__WEBPACK_IMPORTED_MODULE_10__/* .IntegrationTemplateItemType */ .aY.Hidden) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_basics_drawer__WEBPACK_IMPORTED_MODULE_9__/* .DrawerContext */ .rf.Provider, {
      value: drawerCtx,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_basics_drawer__WEBPACK_IMPORTED_MODULE_9__/* .DrawerBody */ .Ng, {
        ref: drawerBody,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_nativeBuilder__WEBPACK_IMPORTED_MODULE_14__/* .FlowEditorFromTemplate */ .DF, {
          templateId: currentBreadcrumb.id,
          pipelineKey: pipelineKey ?? undefined
        })
      })
    });
  } else if (currentBreadcrumb?.type === _models__WEBPACK_IMPORTED_MODULE_10__/* .IntegrationTemplateItemType */ .aY.Group && currentBreadcrumb.action?.type === 'embed') {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_basics_drawer__WEBPACK_IMPORTED_MODULE_9__/* .DrawerContext */ .rf.Provider, {
      value: drawerCtx,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_basics_drawer__WEBPACK_IMPORTED_MODULE_9__/* .DrawerBody */ .Ng, {
        ref: drawerBody,
        children: currentBreadcrumb.id === 'custom_build' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, {
          fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_streakyc_common_widgets_react_loadingSpinner__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(ApiKeysView, {})
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_nativeBuilder__WEBPACK_IMPORTED_MODULE_14__/* .FlowEditorFromScratch */ .i, {
          pipelineKey: pipelineKey ?? undefined
        })
      })
    });
  }
  if (activeTabIndex === 0) {
    if (currentBreadcrumb?.type === _models__WEBPACK_IMPORTED_MODULE_10__/* .IntegrationTemplateItemType */ .aY.Group) {
      if (currentBreadcrumb?.action?.type === 'link') {
        tabContent = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("div", {
            className: "jsx-4111759328" + " " + "streak__jsx__drawer_content_iframe_wrapper",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_streakyc_common_widgets_bridges_iframeBridgeAsReactComponent__WEBPACK_IMPORTED_MODULE_5__/* .IFrameBridgeAsReactComponent */ .K, {
              className: "streak__jsx__integrations_drawer_iframe_bridge",
              iframeClassName: "streak__jsx__integrations_drawer_iframe",
              iframeSrc: currentBreadcrumb.action.url
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
            id: "4111759328",
            children: [".streak__jsx__drawer_content_iframe_wrapper.jsx-4111759328{-webkit-flex:1;-ms-flex:1;flex:1;padding:0 0 0 16px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}", ".streak__jsx__integrations_drawer_iframe_bridge{-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}", ".streak__jsx__integrations_drawer_iframe{-webkit-flex:1;-ms-flex:1;flex:1;border:none;}"]
          })]
        });
      } else {
        tabContent = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("div", {
          style: {
            padding: 16
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(TemplateItemList, {
            loading: !isReady || currentBreadcrumb?.loaded === false,
            templates: visibleTemplates,
            onTemplateClick: onTemplateClick
          })
        });
      }
    } else {
      tabContent = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("div", {
        style: {
          padding: 16
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(TemplateItemList, {
          loading: !isReady,
          templates: visibleTemplates,
          onTemplateClick: onTemplateClick
        })
      });
    }
  } else if (activeTabIndex === 1) {
    tabContent = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, {
      fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_streakyc_common_widgets_react_loadingSpinner__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(FlowsList, {
        pipelineKey: pipelineKey,
        flowsOwnership: "mine",
        onItemClick: handleFlowListItemClick
      })
    });
  } else if (activeTabIndex === 2) {
    tabContent = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, {
      fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_streakyc_common_widgets_react_loadingSpinner__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(FlowsList, {
        pipelineKey: pipelineKey,
        flowsOwnership: "team",
        onItemClick: handleFlowListItemClick
      })
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_basics_drawer__WEBPACK_IMPORTED_MODULE_9__/* .DrawerContext */ .rf.Provider, {
    value: drawerCtx,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(_basics_drawer__WEBPACK_IMPORTED_MODULE_9__/* .DrawerBody */ .Ng, {
      ref: drawerBody,
      children: [error && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_templatesDrawerErrorModal__WEBPACK_IMPORTED_MODULE_11__/* .TemplatesDrawerErrorModal */ .A, {
        error: error,
        onClose: () => dispatch((0,_store_messages__WEBPACK_IMPORTED_MODULE_7__/* .clearErrorAction */ .B2)({}))
      }), zapModal && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_templatesDrawerZapModal__WEBPACK_IMPORTED_MODULE_12__/* .TemplateDrawerZapModal */ .I, {
        zapModal: zapModal,
        getDrawerWidth: () => drawerBody.current.getDrawerWidth()
      }), breadcrumbs.length === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_basics_drawer__WEBPACK_IMPORTED_MODULE_9__/* .DrawerHeaderWithTitle */ .pD, {
        left: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_basics_drawer__WEBPACK_IMPORTED_MODULE_9__/* .DrawerHeaderButton */ .Do, {
          materialIconName: "close",
          onClick: closeDrawer
        }),
        title: _streakyc_common_services_locale_locale__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.getString('integrations_feature_name'),
        bottomBorder: false
      }), breadcrumbs.length !== 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_basics_drawer__WEBPACK_IMPORTED_MODULE_9__/* .DrawerHeaderWithTitle */ .pD, {
        left: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_basics_drawer__WEBPACK_IMPORTED_MODULE_9__/* .DrawerHeaderButton */ .Do, {
          materialIconName: "arrow_back",
          onClick: goBack
        }),
        title: breadcrumbs.at(-1)?.title,
        bottomBorder: true
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(DrawerTabsBody, {
        pipelineKey: pipelineKey,
        breadcrumbs: breadcrumbs,
        activeTabIndex: activeTabIndex,
        tabContent: tabContent,
        setActiveTabIndex: setActiveTabIndex
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_basics_drawer__WEBPACK_IMPORTED_MODULE_9__/* .DrawerFooter */ .ze, {
        actions: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_streakyc_ui_components__WEBPACK_IMPORTED_MODULE_3__/* .ButtonWithText */ .WY, {
          onClick: closeDrawer,
          children: _streakyc_common_services_locale_locale__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.getString('close')
        })
      })]
    })
  });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TemplatesDrawerBody);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 46481:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ TemplateDrawerZapModal)
/* harmony export */ });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81518);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44345);
/* harmony import */ var kefir__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98137);
/* harmony import */ var _basics_drawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(642);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(35091);
/* harmony import */ var _services_tracker_useTracker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(70989);
/* harmony import */ var _widgets_react_material_spinner_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2962);
/* harmony import */ var _services_butterBarManager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(99329);
/* harmony import */ var _components_QuickCopyBox_quickCopyBox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(61238);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(40310);
/* harmony import */ var _store_messages__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(49269);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(59718);













const POPUP_MARGIN = 50;
function TemplateDrawerZapModal(props) {
  const track = (0,_services_tracker_useTracker__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP)('templateDrawer.apiKeyModal', {
    id: props.zapModal.template.id,
    title: props.zapModal.template.title,
    provider: props.zapModal.template.provider
  });
  const {
    zapModal
  } = props;
  const dispatch = (0,_store__WEBPACK_IMPORTED_MODULE_9__/* .useDispatchV2 */ .Go)();
  const zapPopupRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const [popupOpened, setPopupOpened] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const closeModal = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    track('closePress');
    dispatch((0,_store_messages__WEBPACK_IMPORTED_MODULE_10__/* .closeZapModalAction */ .xQ)({}));
  }, [dispatch, track]);
  const onCloseButtonClick = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    track('cornerClosePress');
    dispatch((0,_store_messages__WEBPACK_IMPORTED_MODULE_10__/* .closeZapModalAction */ .xQ)({}));
  }, [dispatch, track]);
  const focusPopup = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    if (zapPopupRef.current) {
      zapPopupRef.current.focus();
    }
  }, [zapPopupRef]);
  const apiKey = zapModal.apiKey;
  const createZap = () => {
    track('continuePress');
    if (apiKey) {
      navigator.clipboard.writeText(apiKey).then(() => {
        _services_butterBarManager__WEBPACK_IMPORTED_MODULE_7__["default"].showMessage({
          text: _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('api_key_copied'),
          time: 3000
        });
      });
    }
    const availWidth = window.innerWidth - (props.getDrawerWidth() || 0);
    const availHeight = window.innerHeight;
    const width = availWidth - POPUP_MARGIN;
    const height = availHeight - POPUP_MARGIN;
    const left = window.screenX + (availWidth - width) / 2;
    const top = window.screenY + (availHeight - height) / 2;
    zapPopupRef.current = window.open(zapModal.template.zapTemplate.create_url, 'Zap Editor', 'height=' + height + ',width=' + width + ',left=' + left + ',top=' + top + ',toolbar=0,resizable=0,menubar=0,location=0,status=0,scrollbars=0');
    if (zapPopupRef.current) {
      setPopupOpened(true);
    } else {
      setPopupOpened(false);
      _services_butterBarManager__WEBPACK_IMPORTED_MODULE_7__["default"].showMessage({
        text: _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('popup_was_blocked'),
        time: 3000
      }, {
        isError: true
      });
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (popupOpened && zapPopupRef.current) {
      const onPopupShouldClose = () => {
        closeModal();
      };
      const stream = kefir__WEBPACK_IMPORTED_MODULE_2__["default"].merge([kefir__WEBPACK_IMPORTED_MODULE_2__["default"].fromEvents(window, 'message').filter(e => e.data === 'zap:unpause'), kefir__WEBPACK_IMPORTED_MODULE_2__["default"].interval(200, false).filter(() => {
        try {
          return zapPopupRef.current?.closed ?? true;
        } catch (err) {
          // content scripts (?) spontaneously fail to be allowed to interact
          // with popups sometimes as they're loading. Blame Chrome.
          return false;
        }
      })]).take(1);
      stream.onValue(onPopupShouldClose);
      return () => {
        stream.offValue(onPopupShouldClose);
      };
    }
  }, [popupOpened, closeModal, zapPopupRef]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    return () => {
      if (zapPopupRef.current && !zapPopupRef.current.closed) {
        zapPopupRef.current.close();
      }
    };
  }, [zapPopupRef]);
  let buttons = [];
  let title = null;
  let text = null;
  if (popupOpened) {
    title = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
      style: {
        display: 'flex',
        alignItems: 'center'
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_widgets_react_material_spinner_spinner__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        withText: true,
        singleColor: true
      }), _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('finish_your_integration')]
    });
    text = _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getArray('just_opened_a_popup', {
      popup: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("b", {
        children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('popup')
      }, "popup")
    });
    buttons = [{
      props: {
        onClick: closeModal,
        variant: 'text'
      },
      text: _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('close')
    }];
    buttons.push({
      props: {
        onClick: focusPopup
      },
      text: _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('go_to_popup')
    });
  } else {
    title = _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('youll_need_an_api_key');
    text = _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('streak_uses_zapier');
    buttons = [{
      props: {
        onClick: closeModal,
        variant: 'text'
      },
      text: _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('close')
    }, {
      props: {
        onClick: createZap
      },
      text: _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('copy_amp_continue')
    }];
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_basics_drawer__WEBPACK_IMPORTED_MODULE_3__/* .DrawerModal */ ._J, {
    title: title,
    body: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
        className: "jsx-2774087111" + " " + "streak__jsx__apiKeyModal_body",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("p", {
          className: "jsx-2774087111",
          children: text
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_QuickCopyBox_quickCopyBox__WEBPACK_IMPORTED_MODULE_8__/* .QuickCopyBox */ .i, {
          copyConfirmButterText: _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('api_key_copied'),
          track: track,
          value: zapModal.apiKey
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
        id: "2774087111",
        children: [".streak__jsx__apiKeyModal_body.jsx-2774087111{margin-bottom:30px;}", ".streak__jsx__apiKeyModal_body.jsx-2774087111>p.jsx-2774087111{margin-bottom:20px;min-height:40px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:var(--streak-text-size-14);line-height:20px;-webkit-letter-spacing:0.25px;-moz-letter-spacing:0.25px;-ms-letter-spacing:0.25px;letter-spacing:0.25px;color:var(--streak-black-secondary);}"]
      })]
    }),
    buttons: buttons,
    onClose: onCloseButtonClick
  });
}

/***/ }),

/***/ 68871:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DH: () => (/* binding */ _3),
/* harmony export */   SD: () => (/* binding */ _2),
/* harmony export */   _1: () => (/* binding */ _4),
/* harmony export */   l5: () => (/* binding */ _1)
/* harmony export */ });
// extracted by mini-css-extract-plugin
var _1 = "streak-mod__B6q5kPmfEevyh19oPpgI";
var _2 = "streak-mod__SsO7SGrOReH0BbaqsGJt";
var _3 = "streak-mod__Gyo0Nt5xZx82f1KiEqvA";
var _4 = "streak-mod__ywHJOdi77A5YJC5lmYOu";



/***/ }),

/***/ 47152:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "zapierLogoGrey.7332bef9306dfd889418.svg";

/***/ })

};
;
//# sourceMappingURL=https://storage.googleapis.com/streak-extension-sourcemaps/clientjs/clientjs.chunk.2150.507fb163df3d4f96d854.js.map