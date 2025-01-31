"use strict";
export const id = 227;
export const ids = [227];
export const modules = {

/***/ 98482:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ IntegrationsPromoThreadViewBanner)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44345);
/* harmony import */ var _widgets_react_material_button_streakButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22682);
/* harmony import */ var _permissionBanner_PermissionBanner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10080);
/* harmony import */ var _services_tracker_useTracker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(70989);
/* harmony import */ var _getPromoBannerCopiesForIntegration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55152);
/* harmony import */ var _widgets_paywallGateway_paywallGateway__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(64167);
/* harmony import */ var _services_streakAppLinkHandler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(27859);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_widgets_paywallGateway_paywallGateway__WEBPACK_IMPORTED_MODULE_5__, _services_streakAppLinkHandler__WEBPACK_IMPORTED_MODULE_6__]);
([_widgets_paywallGateway_paywallGateway__WEBPACK_IMPORTED_MODULE_5__, _services_streakAppLinkHandler__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








function IntegrationsPromoThreadViewBanner(props) {
  const _track = (0,_services_tracker_useTracker__WEBPACK_IMPORTED_MODULE_3__/* .useTrackerWithPrefix */ .qp)('integrationsPromoBanner');
  const [isBannerVisible, setIsBannerVisible] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const {
    isCrmUser,
    integrationType,
    canAccessIntegrations
  } = props;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    _track('shown', {
      integrationType,
      isCrmUser
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const mainText = (0,_getPromoBannerCopiesForIntegration__WEBPACK_IMPORTED_MODULE_4__/* .getPromoBannerCopiesForIntegration */ .S)(integrationType, isCrmUser, canAccessIntegrations)?.mainText;
  const actionText = (0,_getPromoBannerCopiesForIntegration__WEBPACK_IMPORTED_MODULE_4__/* .getPromoBannerCopiesForIntegration */ .S)(integrationType, isCrmUser, canAccessIntegrations)?.actionText;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: isBannerVisible && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_permissionBanner_PermissionBanner__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      iconName: "lightbulb",
      iconIsOutline: true,
      mainText: mainText,
      backgroundColor: 'var(--streak-primary-hover)',
      actionRenderer: () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_widgets_react_material_button_streakButton__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP, {
        variant: "text",
        onClick: () => {
          _track('ctaClicked', {
            integrationType,
            isCrmUser
          });
          if (!canAccessIntegrations) {
            (0,_widgets_paywallGateway_paywallGateway__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)({
              feature: 'nativeIntegrations'
            });
          } else {
            const link = (0,_getPromoBannerCopiesForIntegration__WEBPACK_IMPORTED_MODULE_4__/* .getPromoBannerCopiesForIntegration */ .S)(integrationType, isCrmUser, canAccessIntegrations)?.actionLink;
            if (!link) {
              return;
            }
            if (isCrmUser) {
              window.open(link);
            } else {
              (0,_services_streakAppLinkHandler__WEBPACK_IMPORTED_MODULE_6__.tryHandleStreakULink)(link);
            }
          }
        },
        children: actionText
      }),
      onClose: () => {
        _track('dismissed', {
          integrationType,
          isCrmUser
        });
        setIsBannerVisible(false);
        props.onClose();
      }
    })
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3585:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ getIntegraionTypeViaEmail)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89630);

function getIntegraionTypeViaEmail(subject, senderEmail) {
  let integrationType = _types__WEBPACK_IMPORTED_MODULE_0__/* .IntegrationType */ .WN.Unknown;
  switch (senderEmail) {
    case _types__WEBPACK_IMPORTED_MODULE_0__/* .SenderEmail */ .Oi.GoogleForm:
      if (subject.startsWith(_types__WEBPACK_IMPORTED_MODULE_0__/* .SubjectMatching */ .E8.GoogleForm)) {
        integrationType = _types__WEBPACK_IMPORTED_MODULE_0__/* .IntegrationType */ .WN.GoogleForm;
      }
      break;
    case _types__WEBPACK_IMPORTED_MODULE_0__/* .SenderEmail */ .Oi.Calendly:
      if (subject.startsWith(_types__WEBPACK_IMPORTED_MODULE_0__/* .SubjectMatching */ .E8.Calendly)) {
        integrationType = _types__WEBPACK_IMPORTED_MODULE_0__/* .IntegrationType */ .WN.Calendly;
      }
      break;
    case _types__WEBPACK_IMPORTED_MODULE_0__/* .SenderEmail */ .Oi.Typeform:
      // only match on sender email
      integrationType = _types__WEBPACK_IMPORTED_MODULE_0__/* .IntegrationType */ .WN.Typeform;
      break;
    default:
      break;
  }
  return integrationType;
}

/***/ }),

/***/ 55152:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ getPromoBannerCopiesForIntegration)
/* harmony export */ });
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35091);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89630);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59718);



function getPromoBannerCopiesForIntegration(integrationType, isCrmUser, canAccessIntegrations) {
  const introToPipelineLink = 'https://www.streak.com/university/introduction-to-pipelines';
  const actionText = canAccessIntegrations ? _services_locale_locale__WEBPACK_IMPORTED_MODULE_0__.Locale.getString('learn_more') : _services_locale_locale__WEBPACK_IMPORTED_MODULE_0__.Locale.getString('try_it');
  switch (integrationType) {
    case _types__WEBPACK_IMPORTED_MODULE_1__/* .IntegrationType */ .WN.GoogleForm:
      return isCrmUser ? {
        mainText: _services_locale_locale__WEBPACK_IMPORTED_MODULE_0__.Locale.getArray('integrations_promo_banner_mainText_crm', {
          integration_action: _services_locale_locale__WEBPACK_IMPORTED_MODULE_0__.Locale.getString('google_form_is_submitted'),
          integration: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("b", {
            children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_0__.Locale.getString('google_forms_streak')
          })
        }),
        actionText,
        actionLink: 'https://support.streak.com/en/articles/7036539-native-google-forms-integration'
      } : {
        mainText: _services_locale_locale__WEBPACK_IMPORTED_MODULE_0__.Locale.getArray('integrations_promo_banner_mainText_non_crm', {
          integration_type: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("b", {
            children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_0__.Locale.getString('google_form')
          }),
          streak: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("b", {
            children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_0__.Locale.getString('streak')
          })
        }),
        actionText,
        actionLink: introToPipelineLink
      };
    case _types__WEBPACK_IMPORTED_MODULE_1__/* .IntegrationType */ .WN.Calendly:
      return isCrmUser ? {
        mainText: _services_locale_locale__WEBPACK_IMPORTED_MODULE_0__.Locale.getArray('integrations_promo_banner_mainText_crm', {
          integration_action: _services_locale_locale__WEBPACK_IMPORTED_MODULE_0__.Locale.getString('calendly_meeting_is_booked'),
          integration: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("b", {
            children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_0__.Locale.getString('calendly_streak')
          })
        }),
        actionText,
        actionLink: 'https://support.streak.com/en/articles/6842363-native-calendly-integration'
      } : {
        mainText: _services_locale_locale__WEBPACK_IMPORTED_MODULE_0__.Locale.getArray('integrations_promo_banner_mainText_non_crm', {
          integration_type: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("b", {
            children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_0__.Locale.getString('calendly')
          }),
          streak: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("b", {
            children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_0__.Locale.getString('streak')
          })
        }),
        actionText,
        actionLink: introToPipelineLink
      };
    case _types__WEBPACK_IMPORTED_MODULE_1__/* .IntegrationType */ .WN.Typeform:
      return isCrmUser ? {
        mainText: _services_locale_locale__WEBPACK_IMPORTED_MODULE_0__.Locale.getArray('integrations_promo_banner_mainText_crm', {
          integration_action: _services_locale_locale__WEBPACK_IMPORTED_MODULE_0__.Locale.getString('typeform_is_submitted'),
          integration: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("b", {
            children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_0__.Locale.getString('typeform_streak')
          })
        }),
        actionText,
        actionLink: 'https://support.streak.com/en/articles/6843072-native-typeform-integration'
      } : {
        mainText: _services_locale_locale__WEBPACK_IMPORTED_MODULE_0__.Locale.getArray('integrations_promo_banner_mainText_non_crm', {
          integration_type: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("b", {
            children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_0__.Locale.getString('typeform')
          }),
          streak: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("b", {
            children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_0__.Locale.getString('streak')
          })
        }),
        actionText,
        actionLink: introToPipelineLink
      };
    default:
      return null;
  }
}

/***/ }),

/***/ 40227:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _streakyc_common_core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77294);
/* harmony import */ var _streakyc_common_core_appShell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81022);
/* harmony import */ var _streakyc_common_lib_dependencyManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54612);
/* harmony import */ var _IntegrationsPromoThreadViewBanner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98482);
/* harmony import */ var _getIntegrationTypeViaEmail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3585);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(89630);
/* harmony import */ var _lib_utils_storageArray__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(86543);
/* harmony import */ var _services_data_user__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5575);
/* harmony import */ var _services_data_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(38672);
/* harmony import */ var _core_enabledFeaturesController__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(50452);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_IntegrationsPromoThreadViewBanner__WEBPACK_IMPORTED_MODULE_3__, _services_data_data__WEBPACK_IMPORTED_MODULE_7__, _core_enabledFeaturesController__WEBPACK_IMPORTED_MODULE_8__]);
([_IntegrationsPromoThreadViewBanner__WEBPACK_IMPORTED_MODULE_3__, _services_data_data__WEBPACK_IMPORTED_MODULE_7__, _core_enabledFeaturesController__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const DISMISS_INTEGRATIONS_PROMO_BANNERS_STORAGE_KEY = 'streak__dismissedIntegrationsPromoBanners';
_streakyc_common_lib_dependencyManager__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP.addFunction({
  functionKey: 'integrationsPromoThreadViewMasterControllerInitialized',
  functionReference: function () {
    _streakyc_common_core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_0__.inboxSDK.Conversations.registerThreadViewHandler(handleThreadView);
  },
  dependentFunctionKeys: ['data.pipelines.initialized', 'localeLoaded', 'gmailLoaded', 'userLoggedIn', 'enabledFeaturesControllerInitialized', 'accessManagerInitialized', 'sdkLoaded']
});
function handleThreadView(threadView) {
  const messageViews = threadView.getMessageViews();
  const messageView = messageViews[0];
  if (messageViews.length > 1 || !messageView) {
    return;
  }
  const subject = threadView.getSubject();
  const senderEmail = messageView.getSender().emailAddress;
  const integrationType = (0,_getIntegrationTypeViaEmail__WEBPACK_IMPORTED_MODULE_4__/* .getIntegraionTypeViaEmail */ .S)(subject, senderEmail);
  const userEmail = (0,_services_data_user__WEBPACK_IMPORTED_MODULE_10__/* .getUser */ .P)().getEmail();
  const storageKey = `${DISMISS_INTEGRATIONS_PROMO_BANNERS_STORAGE_KEY}__${userEmail}`;
  const isDismissed = _lib_utils_storageArray__WEBPACK_IMPORTED_MODULE_6__/* .localStorageArray */ .N.get(storageKey)?.includes(integrationType);
  if (integrationType === _types__WEBPACK_IMPORTED_MODULE_5__/* .IntegrationType */ .WN.Unknown || isDismissed) {
    return;
  }
  const isCrmUser = _services_data_data__WEBPACK_IMPORTED_MODULE_7__/* .Data */ .V.getAllPipelines().length >= 1;
  const noticeBar = threadView.addNoticeBar();
  const el = noticeBar.el;
  el.className = '';
  (0,_streakyc_common_core_appShell__WEBPACK_IMPORTED_MODULE_1__/* .renderWithAppShell */ .oC)(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_IntegrationsPromoThreadViewBanner__WEBPACK_IMPORTED_MODULE_3__/* .IntegrationsPromoThreadViewBanner */ .r, {
    integrationType: integrationType,
    isCrmUser: isCrmUser,
    onClose: () => {
      _lib_utils_storageArray__WEBPACK_IMPORTED_MODULE_6__/* .localStorageArray */ .N.addItem(storageKey, integrationType);
    },
    canAccessIntegrations: _core_enabledFeaturesController__WEBPACK_IMPORTED_MODULE_8__.EnabledFeatures.isFeatureEnabled('nativeIntegrations')
  }), el);
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 89630:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E8: () => (/* binding */ SubjectMatching),
/* harmony export */   Oi: () => (/* binding */ SenderEmail),
/* harmony export */   WN: () => (/* binding */ IntegrationType)
/* harmony export */ });
let SenderEmail = /*#__PURE__*/function (SenderEmail) {
  SenderEmail["GoogleForm"] = "forms-receipts-noreply@google.com";
  SenderEmail["Calendly"] = "notifications@calendly.com";
  SenderEmail["Typeform"] = "notifications@typeform.com";
  return SenderEmail;
}({});
let SubjectMatching = /*#__PURE__*/function (SubjectMatching) {
  SubjectMatching["GoogleForm"] = "Your form";
  SubjectMatching["Calendly"] = "New Event";
  return SubjectMatching;
}({});
let IntegrationType = /*#__PURE__*/function (IntegrationType) {
  IntegrationType["GoogleForm"] = "Google Form";
  IntegrationType["Calendly"] = "Calendly";
  IntegrationType["Typeform"] = "Typeform";
  IntegrationType["Unknown"] = "Unknown";
  return IntegrationType;
}({});

/***/ })

};
;
//# sourceMappingURL=https://storage.googleapis.com/streak-extension-sourcemaps/clientjs/clientjs.chunk.227.47ab52b66e6ff78d6feb.js.map