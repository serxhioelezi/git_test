"use strict";
export const id = 8816;
export const ids = [8816,9117];
export const modules = {

/***/ 42648:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ HomeFooter)
/* harmony export */ });
/* harmony import */ var _streakyc_common_core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77294);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44345);
/* harmony import */ var _intercom_intercomMasterController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49895);
/* harmony import */ var _streakSidebar_streakSidebarMasterController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18411);
/* harmony import */ var _topNav_headway__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(90091);
/* harmony import */ var _components_Heading_Heading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(67565);
/* harmony import */ var _components_Icon_Icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(71174);
/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(54165);
/* harmony import */ var _lib_utils_setURL__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(47107);
/* harmony import */ var _modules_referral_ReferralModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(53581);
/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(3572);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(35091);
/* harmony import */ var _services_locale_getNormalizedLocale__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(54023);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(17013);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _lib_utils_isNotNil__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(72086);
/* harmony import */ var _billing_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(57937);
/* harmony import */ var _integrations_templates__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(80151);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(40310);
/* harmony import */ var _HomeFooter_module_css__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(4736);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(47587);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _services_tracker_useTracker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(70989);
/* harmony import */ var _streakyc_ui_components__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(87084);
/* harmony import */ var _streakyc_ui_components_menu__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(85440);
/* harmony import */ var _core_routing__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(58556);
/* harmony import */ var _widgets_paywallGateway_isNonPlanPlatform__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(75191);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_intercom_intercomMasterController__WEBPACK_IMPORTED_MODULE_2__, _streakSidebar_streakSidebarMasterController__WEBPACK_IMPORTED_MODULE_3__, _topNav_headway__WEBPACK_IMPORTED_MODULE_4__, _modules_referral_ReferralModal__WEBPACK_IMPORTED_MODULE_9__, _billing_utils__WEBPACK_IMPORTED_MODULE_12__, _integrations_templates__WEBPACK_IMPORTED_MODULE_13__]);
([_intercom_intercomMasterController__WEBPACK_IMPORTED_MODULE_2__, _streakSidebar_streakSidebarMasterController__WEBPACK_IMPORTED_MODULE_3__, _topNav_headway__WEBPACK_IMPORTED_MODULE_4__, _modules_referral_ReferralModal__WEBPACK_IMPORTED_MODULE_9__, _billing_utils__WEBPACK_IMPORTED_MODULE_12__, _integrations_templates__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


























function HomeFooter() {
  const dispatch = (0,_store__WEBPACK_IMPORTED_MODULE_14__/* .useDispatchV2 */ .Go)();
  const track = (0,_services_tracker_useTracker__WEBPACK_IMPORTED_MODULE_16__/* .useTrackerWithPrefix */ .qp)('streakSidebar.homeNav.header.footer');
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    _topNav_headway__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.reload();
  }, []);
  const isFreePlan = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_21__/* .useSelector */ .v9)(state => !(0,lodash__WEBPACK_IMPORTED_MODULE_11__.values)(state.models.teams).filter(_lib_utils_isNotNil__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z).some(_billing_utils__WEBPACK_IMPORTED_MODULE_12__/* .isTeamOnPremiumPlan */ .rP));
  const getAlternateLanguageCode = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    const current = (0,_services_locale_getNormalizedLocale__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z)(_services_locale_locale__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z.getCurrent());
    const gmail = (0,_services_locale_getNormalizedLocale__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z)(_services_locale_locale__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z.getGmail());
    return current === 'en' ? gmail : 'en';
  }, []);
  const shouldShowLanguageLink = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    return _services_locale_locale__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z.getGmail() !== 'en' && _services_locale_locale__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z.convertLocaleCodeToName(getAlternateLanguageCode()) !== null;
  }, [getAlternateLanguageCode]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)("div", {
    className: _HomeFooter_module_css__WEBPACK_IMPORTED_MODULE_24__/* .footer */ .M,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_components_Heading_Heading__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
      size: "h5",
      color: "var(--streak-black-secondary)",
      margin: "0 0 8px 0",
      children: "Streak"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("div", {
      className: _HomeFooter_module_css__WEBPACK_IMPORTED_MODULE_24__/* .item */ .w,
      onClick: () => {
        track('settings.click');
        // keep sidebar open only if coming from this click, instead of
        // managing one off logic in state, set a flag in localStorage
        // and delete the route handler, possible refactor needed if
        // there are more instances of open/close logic based on source
        localStorage.setItem('openSidebar', 'true');
        (0,_lib_utils_setURL__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(_core_routing__WEBPACK_IMPORTED_MODULE_19__/* .StreakCustomRoute */ .ld.STREAK_SETTINGS);
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_7__/* .Row */ .X2, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_7__/* .Column */ .sg, {
          alignment: "start",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            accent: "muted",
            isOutline: true,
            name: "settings",
            variant: "inline"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_7__/* .Column */ .sg, {
          alignment: "center",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("span", {
            children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z.getString('settings')
          })
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("div", {
      className: _HomeFooter_module_css__WEBPACK_IMPORTED_MODULE_24__/* .item */ .w,
      onClick: () => {
        track('account.click');
        // keep sidebar open only if coming from this click, instead of
        // managing one off logic in state, set a flag in localStorage
        // and delete the route handler, possible refactor needed if
        // there are more instances of open/close logic based on source
        localStorage.setItem('openSidebar', 'true');
        _streakyc_common_core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_0__.inboxSDK.Router.goto('account');
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_7__/* .Row */ .X2, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_7__/* .Column */ .sg, {
          alignment: "start",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            accent: "muted",
            isOutline: true,
            name: "people_alt",
            variant: "inline"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_7__/* .Column */ .sg, {
          alignment: "center",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("span", {
            children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z.getString('manage_team')
          })
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("div", {
      className: _HomeFooter_module_css__WEBPACK_IMPORTED_MODULE_24__/* .item */ .w,
      onClick: () => {
        track('integrations.click');
        // keep sidebar open only if coming from this click, instead of
        // managing one off logic in state, set a flag in localStorage
        // and delete the route handler, possible refactor needed if
        // there are more instances of open/close logic based on source
        localStorage.setItem('openSidebar', 'true');
        dispatch((0,_integrations_templates__WEBPACK_IMPORTED_MODULE_13__/* .showTemplatesAction */ .yQ)({}));
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_7__/* .Row */ .X2, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_7__/* .Column */ .sg, {
          alignment: "start",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            accent: "muted",
            isOutline: true,
            name: "code",
            variant: "inline"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_7__/* .Column */ .sg, {
          alignment: "center",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("span", {
            children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z.getString('integrations')
          })
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_15___default()(_HomeFooter_module_css__WEBPACK_IMPORTED_MODULE_24__/* .item */ .w, 'streak__footer-item--updates'),
      onClick: () => {
        track('updates.click', {
          hasHeadwayUpdates: (0,_streakSidebar_streakSidebarMasterController__WEBPACK_IMPORTED_MODULE_3__.getHasHeadwayUpdates)()
        });

        // if headwayIsNew === true, that means there's a headway badge count
        // and the headway preview will open, if not, open the updates page
        if ((0,_streakSidebar_streakSidebarMasterController__WEBPACK_IMPORTED_MODULE_3__.getHasHeadwayUpdates)()) {
          return;
        }
        window.open('https://updates.streak.com');
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_7__/* .Row */ .X2, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_7__/* .Column */ .sg, {
          alignment: "start",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("div", {
            className: "streak__footer-updates",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
              accent: "muted",
              isOutline: true,
              name: "upload",
              variant: "inline"
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_7__/* .Column */ .sg, {
          alignment: "center",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("span", {
            children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z.getString('top_nav_updates')
          })
        })]
      })
    }), isFreePlan && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("div", {
      className: _HomeFooter_module_css__WEBPACK_IMPORTED_MODULE_24__/* .item */ .w,
      onClick: () => {
        track('referral.click');
        (0,_modules_referral_ReferralModal__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)({
          track: track
        });
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_7__/* .Row */ .X2, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_7__/* .Column */ .sg, {
          alignment: "start",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            accent: "muted",
            isOutline: true,
            name: "favorite_border",
            variant: "inline"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_7__/* .Column */ .sg, {
          alignment: "center",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("span", {
            children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z.getString('refer_a_friend')
          })
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_streakyc_ui_components_menu__WEBPACK_IMPORTED_MODULE_18__/* .Menu */ .v2, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_streakyc_ui_components_menu__WEBPACK_IMPORTED_MODULE_18__/* .MenuTrigger */ .bF, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("div", {
          className: _HomeFooter_module_css__WEBPACK_IMPORTED_MODULE_24__/* .item */ .w,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_7__/* .Row */ .X2, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_7__/* .Column */ .sg, {
              alignment: "start",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                accent: "muted",
                isOutline: true,
                name: "phone_iphone",
                variant: "inline"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_7__/* .Column */ .sg, {
              alignment: "start",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("span", {
                className: "streak__footer_badge",
                children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z.getString('get_mobile_apps')
              })
            })]
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_streakyc_ui_components_menu__WEBPACK_IMPORTED_MODULE_18__/* .MenuPanel */ .Gk, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_streakyc_ui_components_menu__WEBPACK_IMPORTED_MODULE_18__/* .MenuItem */ .sN, {
          icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_streakyc_ui_components__WEBPACK_IMPORTED_MODULE_17__/* .Icon */ .JO, {
            color: "black/secondary",
            name: "phone_iphone"
          }),
          onClick: () => {
            window.open('https://apps.apple.com/ca/app/streak-crm-for-gmail/id674067680', '_blank', 'noopener noreferrer');
            track('iphone.click');
          },
          text: _services_locale_locale__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z.getString('iphone_and_ipad_app')
        }), !(0,_widgets_paywallGateway_isNonPlanPlatform__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z)() && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_streakyc_ui_components_menu__WEBPACK_IMPORTED_MODULE_18__/* .MenuItem */ .sN, {
          icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_streakyc_ui_components__WEBPACK_IMPORTED_MODULE_17__/* .Icon */ .JO, {
            color: "black/secondary",
            name: "android"
          }),
          onClick: () => {
            window.open('https://play.google.com/store/apps/details?id=com.mobile.streak', '_blank', 'noopener noreferrer');
            track('android.click');
          },
          text: _services_locale_locale__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z.getString('android_app')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_streakyc_ui_components_menu__WEBPACK_IMPORTED_MODULE_18__/* .MenuItem */ .sN, {
          icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_streakyc_ui_components__WEBPACK_IMPORTED_MODULE_17__/* .Icon */ .JO, {
            color: "black/secondary",
            name: "add_email"
          }),
          onClick: () => {
            window.open('https://workspace.google.com/marketplace/app/streak_crm_for_g_suite/800057673271', '_blank', 'noopener noreferrer');
            track('gmailAddon.click');
          },
          text: _services_locale_locale__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z.getString('gmail_addon_app')
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("div", {
      className: _HomeFooter_module_css__WEBPACK_IMPORTED_MODULE_24__/* .item */ .w,
      onClick: () => {
        track('help.click');
        _intercom_intercomMasterController__WEBPACK_IMPORTED_MODULE_2__["default"].showMessages();
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_7__/* .Row */ .X2, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_7__/* .Column */ .sg, {
          alignment: "start",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            accent: "muted",
            isOutline: true,
            name: "help_outline",
            variant: "inline"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_7__/* .Column */ .sg, {
          alignment: "start",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("span", {
            className: "streak__footer_badge",
            children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z.getString('help')
          })
        })]
      })
    }), shouldShowLanguageLink() && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("div", {
      className: _HomeFooter_module_css__WEBPACK_IMPORTED_MODULE_24__/* .item */ .w,
      onClick: () => {
        const newLanguageCode = getAlternateLanguageCode();
        _services_locale_locale__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z.setCurrent(newLanguageCode);
        track('switchLanguageLink.click', {
          newLanguageCode
        });
        window.location.reload();
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_7__/* .Row */ .X2, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_7__/* .Column */ .sg, {
          alignment: "start",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            accent: "muted",
            isOutline: true,
            name: "language",
            variant: "inline"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_7__/* .Column */ .sg, {
          alignment: "start",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("span", {
            className: "streak__footer_badge",
            children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z.getString('top_nav_switch_language', {
              language: _services_locale_locale__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z.convertLocaleCodeToName(getAlternateLanguageCode())
            })
          })
        })]
      })
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 58816:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HomeNav)
/* harmony export */ });
/* harmony import */ var _HomeFooter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42648);
/* harmony import */ var _HomeNavPlanPromos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88627);
/* harmony import */ var _HomeNav_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19555);
/* harmony import */ var _StreakUniversity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35226);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_HomeFooter__WEBPACK_IMPORTED_MODULE_0__, _HomeNavPlanPromos__WEBPACK_IMPORTED_MODULE_1__, _StreakUniversity__WEBPACK_IMPORTED_MODULE_2__]);
([_HomeFooter__WEBPACK_IMPORTED_MODULE_0__, _HomeNavPlanPromos__WEBPACK_IMPORTED_MODULE_1__, _StreakUniversity__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





function HomeNav(_ref) {
  let {
    track
  } = _ref;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    className: _HomeNav_module_css__WEBPACK_IMPORTED_MODULE_4__/* .main */ .D,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: _HomeNav_module_css__WEBPACK_IMPORTED_MODULE_4__/* .wrapper */ .Y,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_StreakUniversity__WEBPACK_IMPORTED_MODULE_2__/* .StreakUniversity */ .z, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_HomeFooter__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_HomeNavPlanPromos__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        track: track
      })]
    })
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 88627:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ HomeNavPlanPromos)
/* harmony export */ });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81518);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47587);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _presentation_PlanPromos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(90914);
/* harmony import */ var _hooks_usePlanPromos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13739);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_usePlanPromos__WEBPACK_IMPORTED_MODULE_3__]);
_hooks_usePlanPromos__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function HomeNavPlanPromos(_ref) {
  let {
    track
  } = _ref;
  const plan = (0,_hooks_usePlanPromos__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(track);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: "jsx-1754518220" + " " + (classnames__WEBPACK_IMPORTED_MODULE_1___default()('streak__home_nav_plan_promos-container', {
      'has-plan': plan
    }) || ""),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "jsx-1754518220" + " " + (classnames__WEBPACK_IMPORTED_MODULE_1___default()('streak__home_nav_plan_promos', {
        show: plan
      }) || ""),
      children: plan && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_presentation_PlanPromos__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        track: track,
        subtitle: plan.subtitle,
        action: plan.action,
        actionDisplayName: plan.actionDisplayName,
        planDisplayName: plan.planDisplayName,
        helpLink: plan.helpLink
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "1754518220",
      children: [".streak__home_nav_plan_promos-container.jsx-1754518220{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}", ".streak__home_nav_plan_promos-container.has-plan.jsx-1754518220{min-height:64px;}", ".streak__home_nav_plan_promos.jsx-1754518220{bottom:0;left:0;position:absolute;-webkit-transform:translateY(100%);-ms-transform:translateY(100%);transform:translateY(100%);-webkit-transition:-webkit-transform ease 0.5s;-webkit-transition:transform ease 0.5s;transition:transform ease 0.5s;width:100%;}", ".streak__home_nav_plan_promos.show.jsx-1754518220{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}"]
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 35226:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ StreakUniversity)
/* harmony export */ });
/* harmony import */ var _streak_university_PreviewVideoList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32883);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_streak_university_PreviewVideoList__WEBPACK_IMPORTED_MODULE_0__]);
_streak_university_PreviewVideoList__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function StreakUniversity() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_streak_university_PreviewVideoList__WEBPACK_IMPORTED_MODULE_0__/* .PreviewVideoList */ .d, {});
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 13739:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ usePlanPromos)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44345);
/* harmony import */ var _services_contacts_contactStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68333);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35091);
/* harmony import */ var _lib_utils_isNotNil__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(72086);
/* harmony import */ var _presentation_PlanPromosLabels__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30080);
/* harmony import */ var _subscriptionFlows_planUpgradeFlow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(50814);
/* harmony import */ var _subscriptionFlows_trialUpgradeFlow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(33146);
/* harmony import */ var _widgets_paywallGateway_getCheapestUpgradePlan__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(73782);
/* harmony import */ var _widgets_paywallGateway_openPlanUpgradeRequestEmail__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(76894);
/* harmony import */ var _subscriptionModal_trialAddCardModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(80929);
/* harmony import */ var _lib_log_error__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7961);
/* harmony import */ var _billing_helpers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(87872);
/* harmony import */ var _billing_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(57937);
/* harmony import */ var _customOnboarding_startTeamJoinFlow__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(21582);
/* harmony import */ var _core_hooks_useTeamsOnPremiumPlan__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2390);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_contacts_contactStore__WEBPACK_IMPORTED_MODULE_1__, _subscriptionFlows_planUpgradeFlow__WEBPACK_IMPORTED_MODULE_4__, _subscriptionFlows_trialUpgradeFlow__WEBPACK_IMPORTED_MODULE_5__, _widgets_paywallGateway_getCheapestUpgradePlan__WEBPACK_IMPORTED_MODULE_6__, _widgets_paywallGateway_openPlanUpgradeRequestEmail__WEBPACK_IMPORTED_MODULE_7__, _subscriptionModal_trialAddCardModal__WEBPACK_IMPORTED_MODULE_8__, _billing_helpers__WEBPACK_IMPORTED_MODULE_10__, _billing_utils__WEBPACK_IMPORTED_MODULE_11__, _customOnboarding_startTeamJoinFlow__WEBPACK_IMPORTED_MODULE_12__, _core_hooks_useTeamsOnPremiumPlan__WEBPACK_IMPORTED_MODULE_13__]);
([_services_contacts_contactStore__WEBPACK_IMPORTED_MODULE_1__, _subscriptionFlows_planUpgradeFlow__WEBPACK_IMPORTED_MODULE_4__, _subscriptionFlows_trialUpgradeFlow__WEBPACK_IMPORTED_MODULE_5__, _widgets_paywallGateway_getCheapestUpgradePlan__WEBPACK_IMPORTED_MODULE_6__, _widgets_paywallGateway_openPlanUpgradeRequestEmail__WEBPACK_IMPORTED_MODULE_7__, _subscriptionModal_trialAddCardModal__WEBPACK_IMPORTED_MODULE_8__, _billing_helpers__WEBPACK_IMPORTED_MODULE_10__, _billing_utils__WEBPACK_IMPORTED_MODULE_11__, _customOnboarding_startTeamJoinFlow__WEBPACK_IMPORTED_MODULE_12__, _core_hooks_useTeamsOnPremiumPlan__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















function usePlanPromos(track) {
  const teamsOnPremiumPlan = (0,_core_hooks_useTeamsOnPremiumPlan__WEBPACK_IMPORTED_MODULE_13__/* .useTeamsOnPremiumPlan */ .w)();
  const [planPromos, setPlanPromos] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const _track = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((eventName, extraProps) => {
    track('planPromos.' + eventName, extraProps);
  }, [track]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const isOnFreePlan = !(0,_billing_helpers__WEBPACK_IMPORTED_MODULE_10__/* .isAnyTeamOnPremiumPlan */ .z9)();
    if (isOnFreePlan) {
      (0,_billing_helpers__WEBPACK_IMPORTED_MODULE_10__/* .getLargestOrCreateTeam */ .jH)().then(team => {
        const isTeamOwner = team.isCurrentUserOwner();
        // Non team owner should just contact team owner for starting trial or upgrade
        if (!isTeamOwner) {
          setPlanPromos({
            planDisplayName: _services_locale_locale__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.getString('plan_name_personal'),
            subtitle: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_presentation_PlanPromosLabels__WEBPACK_IMPORTED_MODULE_3__/* .PlanPromosPriceLabel */ .N, {
              price: 0,
              type: "month"
            }),
            actionDisplayName: _services_locale_locale__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.getString('contact_owner'),
            action: () => {
              _track('contactTeamOwnerClick', {
                teamKey: team.key()
              });
              const teamOwners = team.getOwners();
              (0,_widgets_paywallGateway_openPlanUpgradeRequestEmail__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)({
                adminName: _services_contacts_contactStore__WEBPACK_IMPORTED_MODULE_1__["default"].getDisplayName(teamOwners[0]),
                recipientEmails: teamOwners.map(teamowner => teamowner.email).filter(_lib_utils_isNotNil__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z),
                currentPlan: (0,_billing_utils__WEBPACK_IMPORTED_MODULE_11__/* .getTeamPlan */ .CG)(team),
                requiredFeatureKey: 'globalAgenda'
              });
            },
            helpLink: 'https://www.streak.com/pricing'
          });
          return;
        }
        const isEligibleForTrial = (0,_billing_utils__WEBPACK_IMPORTED_MODULE_11__/* .isTeamEligibleForTrial */ .Yq)(team);
        if (isEligibleForTrial) {
          // Team owner starts trial
          setPlanPromos({
            planDisplayName: _services_locale_locale__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.getString('plan_name_personal'),
            subtitle: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_presentation_PlanPromosLabels__WEBPACK_IMPORTED_MODULE_3__/* .PlanPromosPriceLabel */ .N, {
              price: 0,
              type: "month"
            }),
            actionDisplayName: _services_locale_locale__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.getString('try_pro_plus_for_free'),
            action: async () => {
              const recommendedTeam = await (0,_billing_helpers__WEBPACK_IMPORTED_MODULE_10__/* .getRecommendedTeam */ .N2)();
              if (recommendedTeam) {
                (0,_customOnboarding_startTeamJoinFlow__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(recommendedTeam, team, true, 'unlimitedBoxes');
                return;
              }
              _track('startTrialClick', {
                teamKey: team.key(),
                source: 'homeNavPlanPromos'
              });
              const upgradePlan = (0,_widgets_paywallGateway_getCheapestUpgradePlan__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)({
                planMustBeTrialable: true
              });
              (0,_subscriptionFlows_trialUpgradeFlow__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)({
                feature: 'unlimitedBoxes',
                plan: upgradePlan,
                team
              });
            },
            helpLink: 'https://www.streak.com/pricing'
          });
        } else {
          setPlanPromos({
            planDisplayName: _services_locale_locale__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.getString('plan_name_personal'),
            subtitle: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_presentation_PlanPromosLabels__WEBPACK_IMPORTED_MODULE_3__/* .PlanPromosPriceLabel */ .N, {
              price: 0,
              type: "month"
            }),
            actionDisplayName: _services_locale_locale__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.getString('upgrade_to_pro_plus'),
            action: async () => {
              const recommendedTeam = await (0,_billing_helpers__WEBPACK_IMPORTED_MODULE_10__/* .getRecommendedTeam */ .N2)();
              if (recommendedTeam) {
                (0,_customOnboarding_startTeamJoinFlow__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(recommendedTeam, team, false, 'unlimitedBoxes');
                return;
              }
              _track('upgradeToProClick', {
                teamKey: team.key(),
                source: 'homeNavPlanPromos'
              });
              (0,_subscriptionFlows_planUpgradeFlow__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)({
                team
              });
            },
            helpLink: 'https://www.streak.com/pricing'
          });
        }
      }).catch(err => {
        (0,_lib_log_error__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP)({
          err: new Error('Error fetching team data for plan promo'),
          level: 'error',
          details: {
            originalMessage: err.message
          }
        });
      });
    } else {
      if (!teamsOnPremiumPlan) {
        return;
      }
      const teamWithLongestTrial = (0,_billing_helpers__WEBPACK_IMPORTED_MODULE_10__/* .getUserTeamWithLongestTrial */ .Kw)();
      if (!teamWithLongestTrial) {
        return;
      }
      const isTeamOwner = teamWithLongestTrial.isCurrentUserOwner();

      // team on trial
      const daysLeftInTrial = (0,_billing_utils__WEBPACK_IMPORTED_MODULE_11__/* .getDaysLeftInTrial */ .PY)(teamWithLongestTrial);
      const onTrialWithoutCreditCard = !(0,_billing_utils__WEBPACK_IMPORTED_MODULE_11__/* .doesTeamHavePaymentMethod */ .Hd)(teamWithLongestTrial);

      // Non team owner should just contact team owner
      if (!isTeamOwner) {
        setPlanPromos({
          planDisplayName: (0,_billing_utils__WEBPACK_IMPORTED_MODULE_11__/* .enrichPlanLabelWithPlan */ .Z_)((0,_billing_utils__WEBPACK_IMPORTED_MODULE_11__/* .getPlanLabelById */ .uY)((0,_billing_utils__WEBPACK_IMPORTED_MODULE_11__/* .getTeamPlan */ .CG)(teamWithLongestTrial).nameLocaleKey)),
          subtitle: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_presentation_PlanPromosLabels__WEBPACK_IMPORTED_MODULE_3__/* .PlanPromosTrialDueLabel */ .e, {
            daysLeft: daysLeftInTrial
          }),
          actionDisplayName: _services_locale_locale__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.getString('contact_owner'),
          action: () => {
            _track('contactTeamOwnerClick', {
              teamKey: teamWithLongestTrial.key()
            });
            const teamOwners = teamWithLongestTrial.getOwners();
            (0,_widgets_paywallGateway_openPlanUpgradeRequestEmail__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)({
              adminName: _services_contacts_contactStore__WEBPACK_IMPORTED_MODULE_1__["default"].getDisplayName(teamOwners[0]),
              recipientEmails: teamOwners.map(teamowner => teamowner.email).filter(_lib_utils_isNotNil__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z),
              currentPlan: (0,_billing_utils__WEBPACK_IMPORTED_MODULE_11__/* .getTeamPlan */ .CG)(teamWithLongestTrial),
              requiredFeatureKey: 'globalAgenda'
            });
          },
          helpLink: 'https://www.streak.com/pricing'
        });
        return;
      }
      setPlanPromos({
        planDisplayName: (0,_billing_utils__WEBPACK_IMPORTED_MODULE_11__/* .enrichPlanLabelWithPlan */ .Z_)((0,_billing_utils__WEBPACK_IMPORTED_MODULE_11__/* .getPlanLabelById */ .uY)((0,_billing_utils__WEBPACK_IMPORTED_MODULE_11__/* .getTeamPlan */ .CG)(teamWithLongestTrial).nameLocaleKey)),
        subtitle: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_presentation_PlanPromosLabels__WEBPACK_IMPORTED_MODULE_3__/* .PlanPromosTrialDueLabel */ .e, {
          daysLeft: daysLeftInTrial
        }),
        actionDisplayName: onTrialWithoutCreditCard ? _services_locale_locale__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.getString('enter_card_info') : _services_locale_locale__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.getString('learn_more'),
        action: () => {
          if (onTrialWithoutCreditCard) {
            _track('enterCreditCardClicked');
            new _subscriptionModal_trialAddCardModal__WEBPACK_IMPORTED_MODULE_8__/* .TrialAddCardModal */ .h({
              team: teamWithLongestTrial
            });
          } else {
            _track('learnMoreLinkClicked');
            window.open('https://www.streak.com/pricing');
          }
        },
        helpLink: onTrialWithoutCreditCard ? 'https://www.streak.com/pricing' : undefined
      });
    }
  }, [teamsOnPremiumPlan, _track]);

  // todo: isNonPlanPlatform

  return planPromos;
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 97715:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  s: () => (/* binding */ PreviewItem)
});

// EXTERNAL MODULE: ./.yarn/cache/react-npm-18.3.1-af38f3c1ae-261137d3f3.zip/node_modules/react/index.js
var react = __webpack_require__(44345);
;// CONCATENATED MODULE: ./extensions/common/js/modules/streakSidebar/homeNav/streak-university/PreviewItem.module.css
// extracted by mini-css-extract-plugin
var _1 = "streak-mod__QM9oWu0hNTnP9Q5q5GCO";
var _2 = "streak-mod__JWNr8uRrQqMlKjdcpP0x";
var _3 = "streak-mod__XAT7gDpSEh1NnrQiJ4iD";
var _4 = "streak-mod__Lc0yCpTonLruKLktTqFa";
var _5 = "streak-mod__cuKoWSSdAQpeVweL_sVM";


// EXTERNAL MODULE: ./extensions/common/js/ui/components/index.ts + 13 modules
var components = __webpack_require__(87084);
// EXTERNAL MODULE: ./extensions/common/js/modules/streakSidebar/streakUniversity/utils.ts
var utils = __webpack_require__(79221);
// EXTERNAL MODULE: ./extensions/common/js/services/tracker/tracker.ts
var tracker = __webpack_require__(13778);
// EXTERNAL MODULE: ./.yarn/cache/react-npm-18.3.1-af38f3c1ae-261137d3f3.zip/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(59718);
;// CONCATENATED MODULE: ./extensions/common/js/modules/streakSidebar/homeNav/streak-university/PreviewItem.tsx






function PreviewItem(_ref) {
  let {
    duration,
    title,
    videoID,
    goToFullList
  } = _ref;
  const imageUrl = (0,react.useMemo)(() => {
    return (0,utils/* youtubeVideoToImg */.RF)(videoID);
  }, [videoID]);
  const onClick = (0,react.useCallback)(() => {
    tracker["default"].trackStreakActive({
      eventName: utils/* TrackingEvents */.MK.previewListPlay,
      youtubeVideoId: videoID
    });
    goToFullList(videoID);
  }, [videoID, goToFullList]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("li", {
    className: _1,
    onClick: onClick,
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: _4,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("img", {
        loading: "lazy",
        src: imageUrl
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: _2,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(components/* Icon */.JO, {
          name: "play_circle_filled",
          color: "black/secondary",
          size: "m"
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: _5,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(components/* Typo */.Jd, {
        variant: "base/basic",
        wrap: "wrap",
        children: title
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: _3,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(components/* Typo */.Jd, {
        variant: "base/basic",
        color: "black/secondary",
        children: duration
      })
    })]
  });
}

/***/ }),

/***/ 32883:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ PreviewVideoList)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39117);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35091);
/* harmony import */ var _PreviewItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97715);
/* harmony import */ var _PreviewVideoList_module_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(98051);
/* harmony import */ var _streakyc_ui_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87084);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44345);
/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3572);
/* harmony import */ var _services_tracker_tracker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13778);
/* harmony import */ var _streakUniversity_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(79221);
/* harmony import */ var use_immer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(57210);
/* harmony import */ var _services_localSettings_localSettings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(55868);
/* harmony import */ var _lib_utils_set__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(16431);
/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(95051);
/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(dompurify__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_config__WEBPACK_IMPORTED_MODULE_0__]);
_config__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];














// LocalSettings.remove(localSettingsWatchedVideoIdsKey);

const allVideos = Object.values(_config__WEBPACK_IMPORTED_MODULE_0__.streakUniversityItemsByGroup).flatMap(items => items.filter(item =>
// This is probably too simplistic. We may want to keep around 'watched' videos until the modal associated with them is closed
'duration' in item));
function PreviewVideoList() {
  const [{
    watchedVideos,
    initialized
  }, updateState] = (0,use_immer__WEBPACK_IMPORTED_MODULE_10__/* .useImmer */ .x)({
    /** Watched videos only changes state on initial render. */
    watchedVideos: new Set(),
    initialized: false
  });
  const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_11__/* .useDispatch */ .I0)();
  const goToFullList = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(videoId => {
    dispatch({
      type: 'SIDEBAR/CARDS/PUSH',
      cards: videoId ? [{
        type: 'STREAK_UNIVERSITY',
        videoId
      }] : [{
        type: 'STREAK_UNIVERSITY'
      }]
    });
    if (!videoId) {
      _services_tracker_tracker__WEBPACK_IMPORTED_MODULE_5__["default"].trackStreakActive({
        eventName: _streakUniversity_utils__WEBPACK_IMPORTED_MODULE_6__/* .TrackingEvents */ .MK.moreVideosClick
      });
    }
  }, [dispatch]);
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    // Update local storage when watchedVideos changes. This should filter out any videos that were removed from the lesson list.
    if (initialized) {
      _services_localSettings_localSettings__WEBPACK_IMPORTED_MODULE_7__.LocalSettings.set(_streakUniversity_utils__WEBPACK_IMPORTED_MODULE_6__/* .localSettingsWatchedVideoIdsKey */ .Wj, Array.from(watchedVideos));
    }
  }, [initialized, watchedVideos]);
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    updateState(draft => {
      // If a videoId is in watchedVideos but not allVideos, it's probably a videoId that was removed from the list.
      draft.watchedVideos = (0,_lib_utils_set__WEBPACK_IMPORTED_MODULE_12__/* .intersection */ .jV)(new Set(allVideos.map(x => x.videoID)), (0,_streakUniversity_utils__WEBPACK_IMPORTED_MODULE_6__/* .getWatchedLessonVideoIds */ .yp)());
      draft.initialized = true;
    });
  }, [updateState]);
  const upNext = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(() => {
    const unwatchedUpnext = Array.from(allVideos).filter(item => !watchedVideos.has(item.videoID)).slice(0, 3);
    const fillerVideos = unwatchedUpnext.length < 3 ? allVideos.slice(0, 3 - unwatchedUpnext.length) : [];
    return unwatchedUpnext.concat(fillerVideos);
  }, [watchedVideos]);

  // TODO the item should go to the full list but also open the relevant video
  const items = upNext.map(_ref => {
    let {
      duration,
      title,
      videoID
    } = _ref;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_PreviewItem__WEBPACK_IMPORTED_MODULE_2__/* .PreviewItem */ .s, {
      duration: duration,
      title: _services_locale_locale__WEBPACK_IMPORTED_MODULE_1__.Locale.getString(title),
      videoID: videoID,
      goToFullList: goToFullList
    }, title);
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
      className: _PreviewVideoList_module_css__WEBPACK_IMPORTED_MODULE_13__/* .header */ .Fs,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_streakyc_ui_components__WEBPACK_IMPORTED_MODULE_3__/* .Typo */ .Jd, {
        variant: "H5 - Overline",
        children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_1__.Locale.getString('streak_u_learn')
      }), initialized && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
        className: _PreviewVideoList_module_css__WEBPACK_IMPORTED_MODULE_13__/* .customChip */ .er,
        dangerouslySetInnerHTML: {
          __html: (0,dompurify__WEBPACK_IMPORTED_MODULE_8__.sanitize)(_services_locale_locale__WEBPACK_IMPORTED_MODULE_1__.Locale.getString('streak_u_progress', {
            watched: watchedVideos.size,
            total: allVideos.length
          }))
        }
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("ol", {
      className: _PreviewVideoList_module_css__WEBPACK_IMPORTED_MODULE_13__/* .list */ .pb,
      children: items
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
      className: _PreviewVideoList_module_css__WEBPACK_IMPORTED_MODULE_13__/* .seeMore */ .ox,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_streakyc_ui_components__WEBPACK_IMPORTED_MODULE_3__/* .ButtonWithText */ .WY, {
        onClick: () => goToFullList(),
        color: "primary",
        iconAfter: "arrow_forward",
        variant: "text",
        children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_1__.Locale.getString('streak_u_see_all_lessons')
      })
    })]
  });
}
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

/***/ 90914:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ PlanPromos)
/* harmony export */ });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81518);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47587);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _widgets_react_material_button_streakButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22682);
/* harmony import */ var _components_Icon_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71174);
/* harmony import */ var _components_Heading_Heading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67565);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(59718);






function PlanPromos(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: "jsx-4242779488" + " " + (classnames__WEBPACK_IMPORTED_MODULE_1___default()('streak__plan_promos', props.className) || ""),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "jsx-4242779488" + " " + "streak__plan_promos_info",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "jsx-4242779488" + " " + "streak__plan_title",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_Heading_Heading__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
          size: "h4",
          margin: "0 2px 0 0",
          children: props.planDisplayName
        }), props.helpLink && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          onClick: () => {
            window.open(props.helpLink);
          },
          className: "jsx-4242779488" + " " + "streak__plan_help",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            className: "icon",
            name: "help_outline",
            size: "s",
            variant: "text",
            accent: "muted"
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "jsx-4242779488" + " " + "streak__plan_subtitle",
        children: props.subtitle
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_widgets_react_material_button_streakButton__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP, {
      accent: "default",
      disabled: false,
      isRound: false,
      size: "default",
      variant: "default",
      onClick: props.action,
      children: props.actionDisplayName
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "4242779488",
      children: [".streak__plan_promos.jsx-4242779488{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:14px 12px;box-shadow: 0px 2px 4px var(--streak-black-shadow), 0px 1px 10px var(--streak-black-divider), 0px 4px 5px var(--streak-black-divider);background:var(--streak-solid-white);}", ".streak__plan_title.jsx-4242779488{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".streak__plan_help.jsx-4242779488{cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}", ".streak__plan_help.jsx-4242779488 .icon{font-size:16px;width:16px;height:16px;}"]
    })]
  });
}

/***/ }),

/***/ 30080:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ PlanPromosPriceLabel),
/* harmony export */   e: () => (/* binding */ PlanPromosTrialDueLabel)
/* harmony export */ });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81518);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35091);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59718);



function PlanPromosPriceLabel(_ref) {
  let {
    price,
    type
  } = _ref;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span", {
    className: "jsx-1739359069" + " " + "streak__plan_promos_price",
    children: ["$", price, " / ", type, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "1739359069",
      children: [".streak__plan_promos_price.jsx-1739359069{font-family:Roboto;font-style:normal;font-weight:normal;font-size:12px;color:var(--streak-black-secondary);}"]
    })]
  });
}
function PlanPromosTrialDueLabel(_ref2) {
  let {
    daysLeft
  } = _ref2;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default().dynamic([["362471524", [daysLeft > 7 ? 'var(--streak-success-hover)' : 'var(--streak-warning-hover)', daysLeft > 7 ? 'var(--streak-success)' : 'var(--streak-warning)']]]) + " " + "streak__plan_promos_trial_due",
    children: [_services_locale_locale__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.getArray('pro_trial_days_left', {
      count: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("b", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default().dynamic([["362471524", [daysLeft > 7 ? 'var(--streak-success-hover)' : 'var(--streak-warning-hover)', daysLeft > 7 ? 'var(--streak-success)' : 'var(--streak-warning)']]]),
        children: daysLeft
      }, "count")
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "362471524",
      dynamic: [daysLeft > 7 ? 'var(--streak-success-hover)' : 'var(--streak-warning-hover)', daysLeft > 7 ? 'var(--streak-success)' : 'var(--streak-warning)'],
      children: [`.streak__plan_promos_trial_due.__jsx-style-dynamic-selector{padding:0px 4px;background:${daysLeft > 7 ? 'var(--streak-success-hover)' : 'var(--streak-warning-hover)'};border-radius:4px;color:${daysLeft > 7 ? 'var(--streak-success)' : 'var(--streak-warning)'};font-family:Roboto;font-style:normal;font-size:12px;}`]
    })]
  });
}

/***/ }),

/***/ 79221:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EQ: () => (/* binding */ localeKeyByGroupTitle),
/* harmony export */   MK: () => (/* binding */ TrackingEvents),
/* harmony export */   Mp: () => (/* binding */ markLessonAsWatched),
/* harmony export */   RF: () => (/* binding */ youtubeVideoToImg),
/* harmony export */   Wj: () => (/* binding */ localSettingsWatchedVideoIdsKey),
/* harmony export */   yp: () => (/* binding */ getWatchedLessonVideoIds)
/* harmony export */ });
/* unused harmony export getLessonVideoIds */
/* harmony import */ var _services_localSettings_localSettings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55868);
/* harmony import */ var _homeNav_streak_university_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66123);



/**
 * @example input '1YAEunp-N2U' from https://www.youtube.com/watch?v=1YAEunp-N2U;
 * outputs https://img.youtube.com/vi/1YAEunp-N2U/mqdefault.jpg
 */
function youtubeVideoToImg(videoId) {
  let quality = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'mqdefault';
  const imgSrc = `https://img.youtube.com/vi/${videoId}/${quality}.jpg`;
  return imgSrc;
}
function getLessonVideoIds(config) {
  return new Set(Object.values(config).flatMap(items => items.flatMap(item => {
    if ('comingSoon' in item) {
      return [];
    }
    return [item.videoID];
  })));
}
const localSettingsWatchedVideoIdsKey = 'streakUWatchedVideoIds';
function getWatchedLessonVideoIds() {
  return new Set(_services_localSettings_localSettings__WEBPACK_IMPORTED_MODULE_0__.LocalSettings.get(localSettingsWatchedVideoIdsKey) ?? []);
}
async function markLessonAsWatched(videoId) {
  const watchedVideoIds = new Set(_services_localSettings_localSettings__WEBPACK_IMPORTED_MODULE_0__.LocalSettings.get(localSettingsWatchedVideoIdsKey) ?? []);
  if (!watchedVideoIds.has(videoId)) {
    watchedVideoIds.add(videoId);
    _services_localSettings_localSettings__WEBPACK_IMPORTED_MODULE_0__.LocalSettings.set(localSettingsWatchedVideoIdsKey, Array.from(watchedVideoIds));
  }
}
const localeKeyByGroupTitle = {
  [_homeNav_streak_university_types__WEBPACK_IMPORTED_MODULE_1__/* .StreakUniversityGroups */ .F.gettingStarted]: 'streak_u_group_getting_started',
  [_homeNav_streak_university_types__WEBPACK_IMPORTED_MODULE_1__/* .StreakUniversityGroups */ .F.emailEffectively]: 'streak_u_group_email_effectively',
  [_homeNav_streak_university_types__WEBPACK_IMPORTED_MODULE_1__/* .StreakUniversityGroups */ .F.trackPeopleAndCompanies]: 'streak_u_group_track_people_and_companies',
  [_homeNav_streak_university_types__WEBPACK_IMPORTED_MODULE_1__/* .StreakUniversityGroups */ .F.prioritizeYourWork]: 'streak_u_group_prioritize_your_work'
};
var TrackingEvents = {
  fullListPlay: "streakUniversity.fullList.videoPlay",
  lessonExpand: "streakUniversity.fullList.lessonExpand",
  moreVideosClick: "streakUniversity.previewList.moreVideosClick",
  startTourClick: "streakUniversity.fullList.startTourClick",
  previewListPlay: "streakUniversity.previewList.videoPlay",
  relatedLinkClick: "streakUniversity.fullList.relatedArticleClick",
  videoPlayerSizeChange: "streakUniversity.videoPlayer.sizeChange",
  videoPlayerClose: "streakUniversity.videoPlayer.close"
};

/***/ }),

/***/ 4736:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ _1),
/* harmony export */   w: () => (/* binding */ _2)
/* harmony export */ });
// extracted by mini-css-extract-plugin
var _1 = "streak-mod__Ane15rtYFCT9Nhck1Wtk";
var _2 = "streak-mod__RPoQrTmgvOe23oQmmRfh";



/***/ }),

/***/ 19555:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ _1),
/* harmony export */   Y: () => (/* binding */ _2)
/* harmony export */ });
// extracted by mini-css-extract-plugin
var _1 = "streak-mod__zn7SjyVjF0WFYLYoY_ZO";
var _2 = "streak-mod__VzAXpi2a_cxfG0VxGEXA";



/***/ }),

/***/ 98051:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Fs: () => (/* binding */ _2),
/* harmony export */   er: () => (/* binding */ _1),
/* harmony export */   ox: () => (/* binding */ _4),
/* harmony export */   pb: () => (/* binding */ _3)
/* harmony export */ });
// extracted by mini-css-extract-plugin
var _1 = "streak-mod__QimUzYEL7ZCFKbP4kKBw";
var _2 = "streak-mod__xzn55AExurciqYcurK5c";
var _3 = "streak-mod__RD1W5FLInKCsGaR_2HNf";
var _4 = "streak-mod__q998AakWsGEpSIjx_xCK";



/***/ })

};
;
//# sourceMappingURL=https://storage.googleapis.com/streak-extension-sourcemaps/clientjs/clientjs.chunk.8816.e5ba4f57d658ea866b87.js.map