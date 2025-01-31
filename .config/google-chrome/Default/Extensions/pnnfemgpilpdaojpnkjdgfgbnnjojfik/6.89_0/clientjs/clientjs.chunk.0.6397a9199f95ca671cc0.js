"use strict";
export const id = 0;
export const ids = [0];
export const modules = {

/***/ 50000:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EmailTrackingSidebarContainer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44345);
/* harmony import */ var kefir_stopper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(94322);
/* harmony import */ var kefir_stopper__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(kefir_stopper__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _presentation_EmailTracking__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43305);
/* harmony import */ var _services_threads_getThreadViewData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70966);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35091);
/* harmony import */ var _services_tracker_tracker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13778);
/* harmony import */ var _lib_streakTimelineMoment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(48726);
/* harmony import */ var _services_data_commonData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(90885);
/* harmony import */ var _presentation_EmailTrackingPromo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9478);
/* harmony import */ var _react_toolkit_hooks_useForceUpdate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(10102);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(17013);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _subscriptionFlows_planUpgradeFlow__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(50814);
/* harmony import */ var _core_enabledFeaturesController__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(50452);
/* harmony import */ var _billing_helpers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(87872);
/* harmony import */ var _billing_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(57937);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_data_commonData__WEBPACK_IMPORTED_MODULE_6__, _subscriptionFlows_planUpgradeFlow__WEBPACK_IMPORTED_MODULE_10__, _core_enabledFeaturesController__WEBPACK_IMPORTED_MODULE_11__, _billing_helpers__WEBPACK_IMPORTED_MODULE_12__, _billing_utils__WEBPACK_IMPORTED_MODULE_13__]);
([_services_data_commonData__WEBPACK_IMPORTED_MODULE_6__, _subscriptionFlows_planUpgradeFlow__WEBPACK_IMPORTED_MODULE_10__, _core_enabledFeaturesController__WEBPACK_IMPORTED_MODULE_11__, _billing_helpers__WEBPACK_IMPORTED_MODULE_12__, _billing_utils__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















function EmailTrackingSidebarContainer(_ref) {
  let {
    totalViews,
    ...props
  } = _ref;
  const isOnFreePlan = !(0,_billing_helpers__WEBPACK_IMPORTED_MODULE_12__/* .isAnyTeamOnPremiumPlan */ .z9)();
  const showPromoFooter = isOnFreePlan;
  const forceUpdate = (0,_react_toolkit_hooks_useForceUpdate__WEBPACK_IMPORTED_MODULE_8__/* .useForceUpdate */ .N)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const stopper = kefir_stopper__WEBPACK_IMPORTED_MODULE_15___default()();
    _services_data_commonData__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.getTeams().getChangeEventStream().takeUntilBy(stopper).onValue(() => {
      forceUpdate();
    });
    return () => {
      stopper.destroy();
    };
  }, [forceUpdate]);
  const count = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return props.views.reduce((acc, x) => {
      const key = (() => {
        if ('linkHref' in x && x.linkHref) {
          return 'LINK';
        }
        return 'IMAGE';
      })();
      const current = acc.get(key);
      acc.set(key, (current ?? 0) + 1);
      return acc;
    }, new Map());
  }, [props.views]);
  const mostRecentByType = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    // For linkType="LINK" we want the most recent click on any of links respective views.
    const reversed = (0,lodash__WEBPACK_IMPORTED_MODULE_9__.orderBy)(props.links, ['creationTimestamp'], ['desc']);
    let image;
    let link;
    for (const l of reversed) {
      if (link && image || image && !count.has('LINK')) {
        break;
      }
      switch (l.linkType) {
        case 'LINK':
          {
            // We want the most recent linkType with views.
            if (!link && l.views.length) {
              link = l;
            }
            break;
          }
        case 'IMAGE':
          {
            if (!image) {
              image = l;
            }
            break;
          }
      }
    }
    return {
      LINK: link,
      IMAGE: image
    };
  }, [count, props.links]);
  const linkTrackingEnabled = _core_enabledFeaturesController__WEBPACK_IMPORTED_MODULE_11__.EnabledFeatures.isFeatureEnabled('advancedLinkTracking');
  const uniqueLinksClicked = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const linksWithViews = props.links.flatMap(l => l.linkType === 'LINK' && l.views.length ? [l.guid] : []);
    return new Set(linksWithViews).size;
  }, [props.links]);
  const totalClicks = count.get('LINK') || 0;
  const hasView = !!totalViews;
  const recentView = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const latestMsgViews = mostRecentByType.IMAGE?.views;
    const sortedLatestMsgViews = latestMsgViews != null ? (0,_services_threads_getThreadViewData__WEBPACK_IMPORTED_MODULE_2__/* .getSortedTrackedViews */ .m6)(latestMsgViews) : [];
    const latestMsgViewTimestamp = sortedLatestMsgViews[0]?.timestamp;
    return latestMsgViewTimestamp != null ? _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.getArray('email_tracking_container_recent_viewed', {
      time: (0,_lib_streakTimelineMoment__WEBPACK_IMPORTED_MODULE_5__/* .streakTimelineMoment */ .iw)(latestMsgViewTimestamp)
    }).join(' ') : _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.getString('email_tracking_container_recent_no_view');
  }, [mostRecentByType.IMAGE?.views]);
  const mostRecentViewsCounts = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return mostRecentByType.IMAGE?.views.length ?? 0;
  }, [mostRecentByType.IMAGE]);
  const isLatestViewed = mostRecentViewsCounts > 0;
  const isReply = totalViews >= 2;
  const recentViewActivity = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    let result = '';
    const mostRecentLink = mostRecentByType.IMAGE;
    if (!hasView && mostRecentLink) {
      result = _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.getArray('email_tracking_container_recent_activity_sent_not_viewed', {
        time: (0,_lib_streakTimelineMoment__WEBPACK_IMPORTED_MODULE_5__/* .streakTimelineMoment */ .iw)(mostRecentLink.lastSavedTimestamp)
      }).join(' ');
    }

    // Use shorter copy with link tracking experiment for now.
    const maybeAlt = linkTrackingEnabled ? '_alt' : '';
    if (isLatestViewed && isReply) {
      result = _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.getArray(`email_tracking_container_recent_activity_reply_viewed${maybeAlt}`, {
        count: mostRecentViewsCounts
      }).join(' ');
    }
    if (isLatestViewed && !isReply) {
      result = _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.getArray(`email_tracking_container_recent_activity_sent_viewed${maybeAlt}`, {
        count: mostRecentViewsCounts
      }).join(' ');
    }
    if (!isLatestViewed && isReply && mostRecentLink) {
      result = _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.getArray('email_tracking_container_recent_activity_reply_not_viewed', {
        time: (0,_lib_streakTimelineMoment__WEBPACK_IMPORTED_MODULE_5__/* .streakTimelineMoment */ .iw)(mostRecentLink.lastSavedTimestamp)
      }).join(' ');
    }
    return result;
  }, [hasView, isLatestViewed, isReply, linkTrackingEnabled, mostRecentByType.IMAGE, mostRecentViewsCounts]);
  const recentClick = linkTrackingEnabled ? _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.getString('email_tracking_container_link_opened_recently', {
    count: uniqueLinksClicked
  }) : _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.getString('email_tracking_container_link_opened_recently_hide_details');
  const mostRecentClick = mostRecentByType.LINK;
  const recentClickActivity = linkTrackingEnabled && (mostRecentClick?.views.length || 0) > 0 ? _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.getString('email_tracking_dropdown_latest_link_opened', {
    time: (0,_lib_streakTimelineMoment__WEBPACK_IMPORTED_MODULE_5__/* .streakTimelineMoment */ .iw)((0,lodash__WEBPACK_IMPORTED_MODULE_9__.maxBy)(mostRecentClick.views, x => x.timestamp ?? 0)?.timestamp)
  }) : _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.getString('email_tracking_container_recent_click_activity_hide_details');
  const viewOrClickItems = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const views = (() => {
      if (linkTrackingEnabled) {
        return props.views;
      }
      return props.views.filter(x => x.linkHref == null);
    })();
    return (0,_services_threads_getThreadViewData__WEBPACK_IMPORTED_MODULE_2__/* .getCollapsedSortedTrackedThreadViews */ .i0)(views);
  }, [linkTrackingEnabled, props.views]);
  const team = (0,_billing_helpers__WEBPACK_IMPORTED_MODULE_12__/* .getLargestTeam */ .n4)(_services_data_commonData__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.getOwnedTeams());
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_presentation_EmailTracking__WEBPACK_IMPORTED_MODULE_1__/* .EmailTracking */ .H, {
      track: _services_tracker_tracker__WEBPACK_IMPORTED_MODULE_4__["default"].track,
      recentView: recentView,
      recentViewActivity: recentViewActivity,
      recentClick: recentClick,
      recentClickActivity: recentClickActivity,
      totalViews: totalViews,
      totalClicks: totalClicks,
      viewOrClickItems: viewOrClickItems,
      isLatestViewed: isLatestViewed,
      showClickDetails: linkTrackingEnabled
    }), showPromoFooter && team && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
      style: {
        margin: '26px 12px 12px 12px'
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_presentation_EmailTrackingPromo__WEBPACK_IMPORTED_MODULE_7__/* .EmailTrackingPromo */ .T, {
        upgradeText: (0,_billing_utils__WEBPACK_IMPORTED_MODULE_13__/* .isTeamEligibleForTrial */ .Yq)(team) ? _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.getString('start_trial') : _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.getString('upgrade'),
        onClickUpgrade: () => {
          if (team) {
            (0,_subscriptionFlows_planUpgradeFlow__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)({
              team,
              source: 'emailTrackingPromo'
            });
          }
        }
      })
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 43305:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  H: () => (/* binding */ EmailTracking)
});

// EXTERNAL MODULE: ./.yarn/cache/classnames-npm-2.5.1-c7273f3423-58eb394e88.zip/node_modules/classnames/index.js
var classnames = __webpack_require__(47587);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./extensions/common/js/services/locale/locale.ts + 37 modules
var locale = __webpack_require__(35091);
// EXTERNAL MODULE: ./extensions/common/js/components/Icon/Icon.tsx + 1 modules
var Icon = __webpack_require__(71174);
// EXTERNAL MODULE: ./extensions/common/js/components/EmailTracking/EmailTrackingItem.tsx + 1 modules
var EmailTrackingItem = __webpack_require__(25190);
;// CONCATENATED MODULE: ./extensions/common/js/modules/streakSidebar/presentation/EmailTracking.module.css
// extracted by mini-css-extract-plugin
var _1 = "streak-mod__qT1kqQOPmA32FYtVO7ht";
var _2 = "streak-mod__QMiCsxPafC0J7xKywwr8";
var _3 = "streak-mod__wLQHcEuXSFbBeaCPLG0q";
var _4 = "streak-mod__fMwATSO9qmn5n5IsmTQL";
var _5 = "streak-mod__rvo2mqCkJrAFRcCkvuZ5";
var _6 = "streak-mod__P6myaSAwmWIWM6u6nKBC";
var _7 = "streak-mod__m0q7vmNJqOenhGGryfAO";
var _8 = "streak-mod__NrKPwDP96P14_7oU14Tk";
var _9 = "streak-mod__sTHDgCRyFTew2mKeLTsX";
var _a = "streak-mod__aLEchVhV1r9IVE4e9Z7r";
var _b = "streak-mod__Rim6T83b_NOwJgYdPFxF";
var _c = "streak-mod__kowMfGaLPltfNMKrlXtk";
var _d = "streak-mod__ylaDN9zD6Sq4J5J3baCm";


// EXTERNAL MODULE: ./extensions/common/js/lib/utils/prettyNumber.ts
var prettyNumber = __webpack_require__(6567);
// EXTERNAL MODULE: ./.yarn/cache/react-npm-18.3.1-af38f3c1ae-261137d3f3.zip/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(59718);
;// CONCATENATED MODULE: ./extensions/common/js/modules/streakSidebar/presentation/EmailTracking.tsx







function MastItem(_ref) {
  let {
    active,
    hasStuff,
    title,
    subtitle,
    iconName
  } = _ref;
  const background = `var(--streak-${active ? 'success-hover' : 'black-surface'})`;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: _5,
      style: {
        background
      },
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Icon/* default */.Z, {
        name: iconName,
        accent: active ? 'success' : 'muted',
        size: "m",
        variant: "text",
        isOutline: !hasStuff
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("h3", {
      className: _a,
      children: title
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("h4", {
      className: _9,
      children: subtitle
    })]
  });
}
function EmailTracking(props) {
  const {
    isLatestViewed,
    recentViewActivity,
    recentView,
    recentClick,
    recentClickActivity,
    totalViews,
    totalClicks,
    viewOrClickItems,
    showClickDetails
  } = props;
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: _8,
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "streak__sidebar_email_tracking__container",
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: classnames_default()(_4, {
          [_d]: totalClicks > 0
        }),
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(MastItem, {
          active: isLatestViewed,
          hasStuff: totalViews > 0,
          iconName: totalViews > 0 ? 'visibility' : 'visibility_off',
          title: recentView,
          subtitle: recentViewActivity
        }), totalClicks > 0 && /*#__PURE__*/(0,jsx_runtime.jsx)(MastItem, {
          active: totalClicks > 0,
          hasStuff: totalClicks > 0,
          iconName: 'ads_click',
          title: recentClick,
          subtitle: recentClickActivity
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: _1,
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: _2,
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: _c,
            children: [locale.Locale.getArray('pt_total_views', {
              count: /*#__PURE__*/(0,jsx_runtime.jsx)("b", {
                children: (0,prettyNumber/* prettyNumber */.C)(totalViews)
              }, "number"),
              number: totalViews
            }), showClickDetails && /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
              children: ["\xA0\xB7\xA0", locale.Locale.getArray('pt_total_clicks', {
                count: /*#__PURE__*/(0,jsx_runtime.jsx)("b", {
                  children: (0,prettyNumber/* prettyNumber */.C)(totalClicks)
                }, "number"),
                number: totalClicks
              })]
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
            className: classnames_default()(_6, {
              [_d]: showClickDetails
            }),
            onClick: () => {
              window.open('https://www.streak.com/university/email-tracking#lessons');
              props.track('emailTracking.sidebar.learnMoreClicked');
            },
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
              className: _7,
              children: locale.Locale.getString('learn_more')
            }), !showClickDetails && /*#__PURE__*/(0,jsx_runtime.jsx)(Icon/* default */.Z, {
              className: "open-in-new",
              name: "open_in_new",
              accent: "muted",
              size: "s",
              variant: "text"
            })]
          })]
        }), viewOrClickItems.length > 0 && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: _3,
          children: viewOrClickItems.map(view => {
            const {
              key,
              icon,
              iconTooltip,
              location,
              time,
              timeTooltip,
              isDeviceUnknown,
              isLocationUnknown,
              linkTracking
            } = view;
            return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(EmailTrackingItem/* EmailTrackingItem */.p, {
                icon,
                iconTooltip,
                location,
                time,
                timeTooltip,
                isDeviceUnknown,
                isLocationUnknown,
                linkTracking
              })
            }, key);
          })
        })]
      })]
    })
  });
}

/***/ }),

/***/ 9478:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ EmailTrackingPromo)
/* harmony export */ });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81518);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44345);
/* harmony import */ var _components_Heading_Heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67565);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35091);
/* harmony import */ var _services_tracker_useTracker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(70989);
/* harmony import */ var _widgets_react_material_button_streakButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(22682);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(59718);







const emailTrackingPromoBulletPoints = [['✉️', 'email_tracking_crm_promo_shareEmailsWithYourTeam'], ['🤝', 'email_tracking_crm_promo_sendMassEmailsWithFollowUpSequences']];

// We only want to track the event once per Gmail load.
let trackingPromoHasBeenViewedOnce;
function EmailTrackingPromo(_ref) {
  let {
    upgradeText,
    onClickUpgrade
  } = _ref;
  const _track = (0,_services_tracker_useTracker__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP)('emailTrackingPromo');
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (trackingPromoHasBeenViewedOnce) {
      return;
    }
    _track('shown');
    trackingPromoHasBeenViewedOnce ??= true;
  }, [_track]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    className: "jsx-1330556149" + " " + "streak__email_tracking_promo",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_Heading_Heading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      margin: "0 0 10px 0",
      size: "h3",
      children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.getString('email_tracking_crm_promo_heading')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: "jsx-1330556149" + " " + "streak__email_tracking_promo_copies",
      children: emailTrackingPromoBulletPoints.map(_ref2 => {
        let [icon, copy] = _ref2;
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "jsx-1330556149" + " " + "copy-reason",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "jsx-1330556149",
            children: icon
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "jsx-1330556149" + " " + "content",
            children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.getString(copy)
          })]
        }, copy);
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_widgets_react_material_button_streakButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP, {
      accent: "default",
      disabled: false,
      isRound: false,
      size: "default",
      variant: "default",
      onClick: () => {
        _track('upgrade.click');
        onClickUpgrade();
      },
      children: upgradeText
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_widgets_react_material_button_streakButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP, {
      onClick: () => {
        _track('learnMore');
        window.open('http://www.streak.com/features');
      },
      variant: "text",
      style: {
        marginLeft: '16px'
      },
      children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.getString('email_tracking_crm_promo_learnMore')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "1330556149",
      children: [".streak__email_tracking_promo.jsx-1330556149{padding:12px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:var(--streak-black-hover);font-size:var(--streak-text-size-14);border-radius:4px;}", ".streak__email_tracking_promo_copies.jsx-1330556149{font-family:'Roboto';font-style:normal;font-weight:400;font-size:14px;-webkit-letter-spacing:0.25px;-moz-letter-spacing:0.25px;-ms-letter-spacing:0.25px;letter-spacing:0.25px;margin-bottom:16px;}", ".copy-reason.jsx-1330556149{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:baseline;-webkit-box-align:baseline;-ms-flex-align:baseline;align-items:baseline;}", ".content.jsx-1330556149{margin-left:10px;line-height:20px;}"]
    })]
  });
}

/***/ })

};
;
//# sourceMappingURL=https://storage.googleapis.com/streak-extension-sourcemaps/clientjs/clientjs.chunk.0.6397a9199f95ca671cc0.js.map