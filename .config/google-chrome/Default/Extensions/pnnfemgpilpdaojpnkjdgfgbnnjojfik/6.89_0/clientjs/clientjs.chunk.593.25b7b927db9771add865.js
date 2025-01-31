"use strict";
export const id = 593;
export const ids = [593];
export const modules = {

/***/ 59158:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RH: () => (/* binding */ tryGetQuotaApiError),
/* harmony export */   ey: () => (/* binding */ QuotaApiErrorReason),
/* harmony export */   h4: () => (/* binding */ QUOTA_API_ERROR_DOMAIN)
/* harmony export */ });
/* harmony import */ var _core_appShell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81022);
/* harmony import */ var _react_query_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27758);
/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72729);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_queries__WEBPACK_IMPORTED_MODULE_2__]);
_queries__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




/** Should be same as CustomErrorCodes.COMMON_QUOTA_ERROR in CustomErrorCodes.java */
const QUOTA_API_ERROR_CODE = 1101;
const QUOTA_API_ERROR_DOMAIN = 'quota';
var QuotaApiErrorCode = /*#__PURE__*/function (QuotaApiErrorCode) {
  QuotaApiErrorCode[QuotaApiErrorCode["QuotaExceeded"] = 1102] = "QuotaExceeded";
  QuotaApiErrorCode[QuotaApiErrorCode["QuotaWillBeExceeded"] = 1103] = "QuotaWillBeExceeded";
  return QuotaApiErrorCode;
}(QuotaApiErrorCode || {});
let QuotaApiErrorReason = /*#__PURE__*/function (QuotaApiErrorReason) {
  QuotaApiErrorReason["QuotaExceeded"] = "QuotaExceededException";
  QuotaApiErrorReason["QuotaWillBeExceeded"] = "QuotaWillBeExceededException";
  return QuotaApiErrorReason;
}({});
const SUPPORTED_QUOTA_API_ERROR_CODES = [QuotaApiErrorCode.QuotaExceeded, QuotaApiErrorCode.QuotaWillBeExceeded];
async function tryGetQuotaApiError(error) {
  const errorCode = error?.response?.errorCode;
  if (errorCode && SUPPORTED_QUOTA_API_ERROR_CODES.includes(errorCode)) {
    const details = error.response.details;
    if (details?.length > 0) {
      const quota = await (0,_react_query_utils__WEBPACK_IMPORTED_MODULE_1__/* .scopeQueryClientWithKey */ .hM)(_core_appShell__WEBPACK_IMPORTED_MODULE_0__/* .queryClient */ .Eh, _queries__WEBPACK_IMPORTED_MODULE_2__/* .QUOTA_DATA_QUERY_DEF */ .i, {}).fetchQuery();
      const error = details[0];
      error.data.quota = quota;
      return error;
    }
  }
  return undefined;
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 35358:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ useQueryQuotaData)
/* harmony export */ });
/* harmony import */ var _react_query_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27758);
/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72729);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_queries__WEBPACK_IMPORTED_MODULE_1__]);
_queries__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function useQueryQuotaData() {
  return (0,_react_query_utils__WEBPACK_IMPORTED_MODULE_0__/* .useQueryDef */ .PS)(_queries__WEBPACK_IMPORTED_MODULE_1__/* .QUOTA_DATA_QUERY_DEF */ .i, {}, {
    refetchOnWindowFocus: false
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 72729:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ QUOTA_DATA_QUERY_DEF)
/* harmony export */ });
/* harmony import */ var _streakyc_common_services_data_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5575);
/* harmony import */ var _core_ajax_apiRequester__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23392);
/* harmony import */ var _react_query_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27758);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_core_ajax_apiRequester__WEBPACK_IMPORTED_MODULE_0__]);
_core_ajax_apiRequester__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const QUOTA_DATA_QUERY_DEF = (0,_react_query_utils__WEBPACK_IMPORTED_MODULE_1__/* .createQueryDef */ ._f)({
  keyFn: () => ['quota'],
  fetchFn: () => (0,_react_query_utils__WEBPACK_IMPORTED_MODULE_1__/* .createFetchFn */ .eA)(async () => {
    return _core_ajax_apiRequester__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.get('users/me/quota', {
      email: (0,_streakyc_common_services_data_user__WEBPACK_IMPORTED_MODULE_2__/* .getUser */ .P)().getEmail()
    }, {
      prefix: '/api/v2/',
      templateUrl: 'users/me/quota'
    }).getPromise();
  })
});
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 70937:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ getQuotaDisplayPlanName)
/* harmony export */ });
/* harmony import */ var _billing_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13145);
/* harmony import */ var _billing_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57937);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_billing_utils__WEBPACK_IMPORTED_MODULE_1__]);
_billing_utils__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function getQuotaDisplayPlanName(quotaData) {
  const {
    planId,
    planNameLocaleKey,
    planName
  } = quotaData || {};
  if (!planId) {
    return (0,_billing_utils__WEBPACK_IMPORTED_MODULE_1__/* .enrichPlanLabelWithPlan */ .Z_)((0,_billing_utils__WEBPACK_IMPORTED_MODULE_1__/* .getPlanLocalizedName */ .kb)(_billing_constants__WEBPACK_IMPORTED_MODULE_0__/* .freePlanSingleton */ .kT));
  } else {
    return (0,_billing_utils__WEBPACK_IMPORTED_MODULE_1__/* .enrichPlanLabelWithPlan */ .Z_)((0,_billing_utils__WEBPACK_IMPORTED_MODULE_1__/* .getPlanLabelById */ .uY)(planNameLocaleKey || planId, planName));
  }
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 98757:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   y: () => (/* binding */ canUpgradeQuotaPlan)
/* harmony export */ });
function canUpgradeQuotaPlan(quota) {
  return quota.planQuota < quota.googleQuota;
}

/***/ }),

/***/ 50659:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ SequenceMoleManager)
/* harmony export */ });
/* harmony import */ var _streakyc_common_core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77294);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69980);
/* harmony import */ var _core_appShell__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81022);
/* harmony import */ var _components_SequenceMole__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15828);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(35091);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_SequenceMole__WEBPACK_IMPORTED_MODULE_3__]);
_components_SequenceMole__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






class SequenceMoleManager {
  #sequence;
  #source;
  constructor(sequence, source) {
    this.#sequence = sequence;
    this.#source = source;
  }
  setupMole() {
    const el = document.createElement('div');
    const moleView = _streakyc_common_core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_0__.inboxSDK.Widgets.showMoleView({
      title: _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__.Locale.getString('sending_drip'),
      el
    });
    const sequenceKey = this.#sequence.key();
    if (sequenceKey) {
      (0,_core_appShell__WEBPACK_IMPORTED_MODULE_2__/* .renderWithAppShell */ .oC)(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_SequenceMole__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        sequenceKey: sequenceKey,
        moleView: moleView,
        source: this.#source
      }), el);
    }
    moleView.once('destroy', () => {
      react_dom__WEBPACK_IMPORTED_MODULE_1__.unmountComponentAtNode(el);
    });
  }
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8345:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ SequenceApiErrorSidebarModal)
/* harmony export */ });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81518);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _streakyc_common_core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77294);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44345);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(64219);
/* harmony import */ var _streakSidebar_presentation_SidebarModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(93751);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(35091);
/* harmony import */ var _widgets_paywallGateway_MailMergePaywallModalForPaidUser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(28854);
/* harmony import */ var _widgets_paywallGateway_MailMergePaywallModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(70003);
/* harmony import */ var _react_query_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(27758);
/* harmony import */ var _quotaView_api_queries__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(72729);
/* harmony import */ var _quotaView_helpers_upgradeUtils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(98757);
/* harmony import */ var _quotaView_api_errors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(59158);
/* harmony import */ var _quotaView_helpers_quotaDataUtils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(70937);
/* harmony import */ var _billing_helpers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(87872);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_widgets_paywallGateway_MailMergePaywallModalForPaidUser__WEBPACK_IMPORTED_MODULE_6__, _widgets_paywallGateway_MailMergePaywallModal__WEBPACK_IMPORTED_MODULE_7__, _quotaView_api_queries__WEBPACK_IMPORTED_MODULE_9__, _quotaView_api_errors__WEBPACK_IMPORTED_MODULE_10__, _quotaView_helpers_quotaDataUtils__WEBPACK_IMPORTED_MODULE_11__, _billing_helpers__WEBPACK_IMPORTED_MODULE_12__]);
([_widgets_paywallGateway_MailMergePaywallModalForPaidUser__WEBPACK_IMPORTED_MODULE_6__, _widgets_paywallGateway_MailMergePaywallModal__WEBPACK_IMPORTED_MODULE_7__, _quotaView_api_queries__WEBPACK_IMPORTED_MODULE_9__, _quotaView_api_errors__WEBPACK_IMPORTED_MODULE_10__, _quotaView_helpers_quotaDataUtils__WEBPACK_IMPORTED_MODULE_11__, _billing_helpers__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















const SequenceApiErrorSidebarModal = _ref => {
  let {
    apiError,
    onClose
  } = _ref;
  const queryClient = (0,react_query__WEBPACK_IMPORTED_MODULE_3__.useQueryClient)();
  let title = _services_locale_locale__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.getString('error_unknown');
  let subtitle = '';
  let text = _services_locale_locale__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.getString('error_unknown');
  let buttons = [];
  if (apiError.domain === _quotaView_api_errors__WEBPACK_IMPORTED_MODULE_10__/* .QUOTA_API_ERROR_DOMAIN */ .h4) {
    const quota = apiError.data.quota;
    const canUpgrade = (0,_quotaView_helpers_upgradeUtils__WEBPACK_IMPORTED_MODULE_14__/* .canUpgradeQuotaPlan */ .y)(quota);
    title = _services_locale_locale__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.getString('quota_not_enough');
    if (apiError.reason === _quotaView_api_errors__WEBPACK_IMPORTED_MODULE_10__/* .QuotaApiErrorReason */ .ey.QuotaExceeded) {
      subtitle = _services_locale_locale__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.getString('sequence_cannot_send_now');
    } else {
      subtitle = _services_locale_locale__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.getString('sequence_cannot_send_later');
    }
    const quotaPlanName = (0,_quotaView_helpers_quotaDataUtils__WEBPACK_IMPORTED_MODULE_11__/* .getQuotaDisplayPlanName */ .d)(apiError.data.quota);

    // handle usecase when gmail quota is lower then the plan quota (e.g. user is using personal @gmail account)
    if (quota.googleQuota < quota.planQuota + quota.bonusQuota) {
      text = _services_locale_locale__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.getArray('quota_server_maxed_out', {
        planName: quotaPlanName,
        planQuota: quota.planQuota + quota.bonusQuota,
        googleQuota: quota.googleQuota
      });
    } else {
      text = _services_locale_locale__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.getArray('quota_plan_maxed_out', {
        planName: quotaPlanName,
        planQuota: quota.planQuota + quota.bonusQuota
      });
    }
    const onUpgradedPlan = () => {
      (0,_react_query_utils__WEBPACK_IMPORTED_MODULE_8__/* .scopeQueryClientWithKey */ .hM)(queryClient, _quotaView_api_queries__WEBPACK_IMPORTED_MODULE_9__/* .QUOTA_DATA_QUERY_DEF */ .i, {}).invalidateQuery();
    };
    if (canUpgrade) {
      buttons = [{
        text: _services_locale_locale__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.getString('quota_explain'),
        props: {
          onClick: async () => {
            onClose(true);
            _streakyc_common_core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_1__.inboxSDK.Router.goto('quota');
          },
          variant: 'text'
        }
      }, {
        text: _services_locale_locale__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.getString('payment_upgrade'),
        props: {
          onClick: async () => {
            onClose();
            const paidUser = (0,_billing_helpers__WEBPACK_IMPORTED_MODULE_12__/* .isAnyTeamOnPremiumPlan */ .z9)();
            if (paidUser) {
              (0,_widgets_paywallGateway_MailMergePaywallModalForPaidUser__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(onUpgradedPlan);
            } else {
              (0,_widgets_paywallGateway_MailMergePaywallModal__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(onUpgradedPlan);
            }
          }
        }
      }];
    } else {
      buttons = [{
        props: {
          onClick: () => onClose(),
          variant: 'text'
        },
        text: _services_locale_locale__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.getString('close')
      }, {
        text: _services_locale_locale__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.getString('quota_explain'),
        props: {
          onClick: async () => {
            onClose(true);
            _streakyc_common_core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_1__.inboxSDK.Router.goto('quota');
          }
        }
      }];
    }
  } else {
    if (apiError?.message) {
      text = apiError.message;
    }
    buttons = [{
      props: {
        onClick: () => onClose(),
        variant: 'text'
      },
      text: _services_locale_locale__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.getString('close')
    }];
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
    className: "jsx-1077902382",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_streakSidebar_presentation_SidebarModal__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
      theme: "light",
      title: title,
      subtitle: subtitle,
      accent: "warning",
      bodyComponent: () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
        className: "jsx-1077902382" + " " + "streak_sequence_variable_modal",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("p", {
          className: "jsx-1077902382",
          children: text
        })
      }),
      buttons: buttons,
      onCloseClick: onClose
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "1077902382",
      children: [".streak_sequence_variable_modal.jsx-1077902382{width:300px;}"]
    })]
  });
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6552:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ SequenceConfirmModal)
/* harmony export */ });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81518);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44345);
/* harmony import */ var _streakSidebar_presentation_SidebarModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93751);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35091);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(59718);





const SequenceConfirmModal = _ref => {
  let {
    title,
    description,
    yesBtnText,
    noBtnText,
    onClose
  } = _ref;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: "jsx-779023909",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_streakSidebar_presentation_SidebarModal__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      theme: "light",
      title: title,
      bodyComponent: () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "jsx-779023909" + " " + "streak_sequence_descr_modal",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
          className: "jsx-779023909",
          children: description
        })
      }),
      buttons: [{
        props: {
          onClick: () => onClose(false),
          variant: 'text'
        },
        text: noBtnText || _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.getString('no')
      }, {
        text: yesBtnText || _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.getString('yes'),
        props: {
          onClick: () => onClose(true)
        }
      }],
      onCloseClick: () => onClose(false)
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "779023909",
      children: [".streak_sequence_descr_modal.jsx-779023909{width:300px;}"]
    })]
  });
};

/***/ }),

/***/ 60335:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ SequenceCopyDraftModal)
/* harmony export */ });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81518);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35091);
/* harmony import */ var _streakSidebar_presentation_SidebarModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93751);
/* harmony import */ var _services_tracker_tracker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13778);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(59718);





function SequenceCopyDraftModal(_ref) {
  let {
    onClose,
    recipient,
    threadId
  } = _ref;
  const userEmail = encodeURIComponent(__webpack_require__.g.Streak.userEmail);
  const url = `https://mail.google.com/mail/?authuser=${userEmail}#all/${threadId}`;
  const {
    emails,
    givenName,
    familyName
  } = recipient;
  const name = `${givenName || ''} ${familyName || ''}`.trim() || emails[0];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: "jsx-4231765949",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_streakSidebar_presentation_SidebarModal__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      theme: "light",
      bodyComponent: () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "jsx-4231765949" + " " + "streak_sequence_copy_draft_modal",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("p", {
          className: "jsx-4231765949",
          children: [_services_locale_locale__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.getString('sequence_copy_draft_modal_body', {
            recipient: name
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a", {
            href: url,
            onClick: e => {
              e.preventDefault();
              window.open(url);
              _services_tracker_tracker__WEBPACK_IMPORTED_MODULE_3__["default"].track('sequence.copydraft.previewThreadLink.click');
            },
            className: "jsx-4231765949",
            children: "inbox"
          }), "."]
        })
      }),
      buttons: [{
        props: {
          onClick: onClose,
          variant: 'text'
        },
        text: _services_locale_locale__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.getString('close')
      }],
      onOutsideClick: onClose,
      onCloseClick: onClose,
      title: _services_locale_locale__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.getString('sequence_copy_draft_modal_title')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "4231765949",
      children: [".streak_sequence_copy_draft_modal.jsx-4231765949{width:300px;}"]
    })]
  });
}

/***/ }),

/***/ 90593:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81518);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44345);
/* harmony import */ var _streakyc_ui_components_autocomplete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70940);
/* harmony import */ var _streakyc_ui_components_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85440);
/* harmony import */ var _services_tracker_useTracker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(70989);
/* harmony import */ var _widgets_react_CommitHandler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(99174);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(35091);
/* harmony import */ var _lib_log_error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7961);
/* harmony import */ var _streakSidebar_presentation_raisedTextfield__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(83932);
/* harmony import */ var _core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(72493);
/* harmony import */ var _SequenceDrawerTabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(22999);
/* harmony import */ var _widgets_react_material_button_streakButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(22682);
/* harmony import */ var _widgets_react_material_tooltip_TooltipContainer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9112);
/* harmony import */ var _services_tracker_tracker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(13778);
/* harmony import */ var _lib_utils_useModelProperty__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(80795);
/* harmony import */ var _SequenceMoleManager__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(50659);
/* harmony import */ var _helpers_sequenceButterBars__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(26502);
/* harmony import */ var _SequenceInfoModal__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(87259);
/* harmony import */ var _hooks_useValidateSequence__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(76241);
/* harmony import */ var _hooks_useSequences__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(14643);
/* harmony import */ var _contexts_sequenceDetailsRecipientsSourceContext__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(2275);
/* harmony import */ var _contexts_sequenceDetailsRecipientsContext__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(4750);
/* harmony import */ var _contexts_sequenceDetailsContext__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(88331);
/* harmony import */ var _contexts_sequenceDetailsVariablesContext__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(29778);
/* harmony import */ var _contexts_sequenceDetailsRecipientVariablesContext__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(91303);
/* harmony import */ var _widgets_scheduler_scheduler__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(85507);
/* harmony import */ var _SequenceConfirmModal__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(6552);
/* harmony import */ var _SequenceApiErrorSidebarModal__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(8345);
/* harmony import */ var _quotaView_api_errors__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(59158);
/* harmony import */ var _api_errors__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(70496);
/* harmony import */ var _core_api_errors__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(69430);
/* harmony import */ var _helpers_sequenceVariables__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(18730);
/* harmony import */ var _helpers_removeSequenceRecipientsStaleTemplateValues__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(2077);
/* harmony import */ var _lib_utils_usePrevious__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(59049);
/* harmony import */ var _core_enabledFeaturesController__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(50452);
/* harmony import */ var _quotaView_api_hooks__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(35358);
/* harmony import */ var _core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(77294);
/* harmony import */ var _streakyc_ui_components__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(87084);
/* harmony import */ var _core_routing__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(58556);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_9__, _SequenceDrawerTabs__WEBPACK_IMPORTED_MODULE_10__, _SequenceMoleManager__WEBPACK_IMPORTED_MODULE_15__, _helpers_sequenceButterBars__WEBPACK_IMPORTED_MODULE_16__, _hooks_useSequences__WEBPACK_IMPORTED_MODULE_19__, _contexts_sequenceDetailsRecipientsSourceContext__WEBPACK_IMPORTED_MODULE_20__, _contexts_sequenceDetailsRecipientsContext__WEBPACK_IMPORTED_MODULE_21__, _contexts_sequenceDetailsVariablesContext__WEBPACK_IMPORTED_MODULE_23__, _contexts_sequenceDetailsRecipientVariablesContext__WEBPACK_IMPORTED_MODULE_24__, _SequenceApiErrorSidebarModal__WEBPACK_IMPORTED_MODULE_27__, _quotaView_api_errors__WEBPACK_IMPORTED_MODULE_28__, _core_enabledFeaturesController__WEBPACK_IMPORTED_MODULE_33__, _quotaView_api_hooks__WEBPACK_IMPORTED_MODULE_34__]);
([_core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_9__, _SequenceDrawerTabs__WEBPACK_IMPORTED_MODULE_10__, _SequenceMoleManager__WEBPACK_IMPORTED_MODULE_15__, _helpers_sequenceButterBars__WEBPACK_IMPORTED_MODULE_16__, _hooks_useSequences__WEBPACK_IMPORTED_MODULE_19__, _contexts_sequenceDetailsRecipientsSourceContext__WEBPACK_IMPORTED_MODULE_20__, _contexts_sequenceDetailsRecipientsContext__WEBPACK_IMPORTED_MODULE_21__, _contexts_sequenceDetailsVariablesContext__WEBPACK_IMPORTED_MODULE_23__, _contexts_sequenceDetailsRecipientVariablesContext__WEBPACK_IMPORTED_MODULE_24__, _SequenceApiErrorSidebarModal__WEBPACK_IMPORTED_MODULE_27__, _quotaView_api_errors__WEBPACK_IMPORTED_MODULE_28__, _core_enabledFeaturesController__WEBPACK_IMPORTED_MODULE_33__, _quotaView_api_hooks__WEBPACK_IMPORTED_MODULE_34__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








































// todo: need a sequenceModelMock for storybook
const SequenceDrawerContent = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((_ref, ref) => {
  let {
    sequence,
    sequenceController
  } = _ref;
  const _track = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((eventName, extraProps) => {
    _services_tracker_tracker__WEBPACK_IMPORTED_MODULE_13__["default"].track('sequenceDrawer.' + eventName, extraProps);
  }, []);
  const {
    mode
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_sequenceDetailsContext__WEBPACK_IMPORTED_MODULE_22__/* .SequenceDetailsContext */ .IJ);
  const [activeTabSource, setActiveTabSource] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(mode === _contexts_sequenceDetailsContext__WEBPACK_IMPORTED_MODULE_22__/* .SequenceDetailsMode */ .cG.AddingRecipients ? 'RECIPIENTS' : 'DRIP');
  const [busyReason, setBusyReason] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(sequenceController.getIsLoading() ? 'loading' : false);
  const [lastApiError, setLastApiError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const [confirmToActivate, setConfirmToActivate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [confirmToDelete, setConfirmToDelete] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [selectedDraftId, setSelectedDraftId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(() => sequenceController.getSelectedDraftId());
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const onDraftChanged = e => {
      setSelectedDraftId(e.selectedDraftId);
    };
    const stream = sequenceController.getEventStream().filter(event => event.type === 'SELECTED_DRAFT_CHANGED');
    stream.onValue(onDraftChanged);
    return () => {
      stream.offValue(onDraftChanged);
    };
  }, [setSelectedDraftId, sequenceController]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const onLoadingChanged = e => {
      setBusyReason(currentReason => {
        // prevent LoadingChanged event to modify current busy reason if set
        // TODO: think of moving busyReason to SequenceController to have single source of truth for this value
        if (e.isLoading && currentReason === false) {
          return 'loading';
        } else if (!e.isLoading && currentReason === 'loading') {
          return false;
        }
        return currentReason;
      });
    };
    const stream = sequenceController.getEventStream().filter(event => event.type === 'LOADING_CHANGED');
    stream.onValue(onLoadingChanged);
    return () => {
      stream.offValue(onLoadingChanged);
    };
  }, [setBusyReason, sequenceController]);
  const displayName = (0,_lib_utils_useModelProperty__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(sequence, 'displayName');
  const {
    mutateAsync: updateSequence
  } = (0,_hooks_useSequences__WEBPACK_IMPORTED_MODULE_19__/* .useUpdateSequence */ .Mn)();
  const {
    recipients,
    updateRecipients,
    flushRecipients
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_sequenceDetailsRecipientsContext__WEBPACK_IMPORTED_MODULE_21__/* .SequenceDetailsRecipientsContext */ .j);
  const sourceCtx = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_sequenceDetailsRecipientsSourceContext__WEBPACK_IMPORTED_MODULE_20__/* .SequenceDetailsRecipientsSourceContext */ .uq);
  const extractionInProgress = sourceCtx?.isExtracting || false;
  const {
    standardVariablesMap
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_sequenceDetailsVariablesContext__WEBPACK_IMPORTED_MODULE_23__/* .SequenceDetailsVariablesContext */ .c);
  const sequenceValidation = (0,_hooks_useValidateSequence__WEBPACK_IMPORTED_MODULE_18__/* .useValidateSequence */ .C)(sequence, recipients, standardVariablesMap);
  const textfieldRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const {
    data: quotaData
  } = (0,_quotaView_api_hooks__WEBPACK_IMPORTED_MODULE_34__/* .useQueryQuotaData */ .I)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle)(ref, () => ({
    openRecipientsTab: () => setActiveTabSource('RECIPIENTS'),
    getRecipients: () => recipients
  }), [setActiveTabSource, recipients]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    sequenceController.recipientsChanged(recipients);
  }, [sequenceController, recipients]);
  const {
    invalidVariables
  } = sequenceValidation;
  const oldInvalidVariables = (0,_lib_utils_usePrevious__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .Z)(invalidVariables);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!_core_enabledFeaturesController__WEBPACK_IMPORTED_MODULE_33__.EnabledFeatures.isFeatureEnabled('mmOptimizeRecipientsExp') || mode !== _contexts_sequenceDetailsContext__WEBPACK_IMPORTED_MODULE_22__/* .SequenceDetailsMode */ .cG.Editing || !oldInvalidVariables) return;
    if (invalidVariables.length > oldInvalidVariables.length) {
      _track('addTemplateVariable');
    }
  }, [invalidVariables, oldInvalidVariables, mode, _track]);
  const isDraft = sequence.getStatus() === _core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_9__/* .SequenceStatus */ .ST.Draft;
  const isPaused = sequence.getStatus() === _core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_9__/* .SequenceStatus */ .ST.Paused;

  // whether to activate recipients when saving the drip,
  // recipients should not be activated when adding recipients into a DRAFT or PAUSED sequence
  // and they cannot be re-activated when editing active sequence
  let activateRecipientsOnSave = false;
  if (mode === _contexts_sequenceDetailsContext__WEBPACK_IMPORTED_MODULE_22__/* .SequenceDetailsMode */ .cG.New) {
    activateRecipientsOnSave = true;
  } else if (mode === _contexts_sequenceDetailsContext__WEBPACK_IMPORTED_MODULE_22__/* .SequenceDetailsMode */ .cG.Editing) {
    activateRecipientsOnSave = isDraft;
  } else if (mode === _contexts_sequenceDetailsContext__WEBPACK_IMPORTED_MODULE_22__/* .SequenceDetailsMode */ .cG.AddingRecipients) {
    activateRecipientsOnSave = !(isDraft || isPaused);
  }
  let mainBtnText = _services_locale_locale__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.getString('save');
  if (mode === _contexts_sequenceDetailsContext__WEBPACK_IMPORTED_MODULE_22__/* .SequenceDetailsMode */ .cG.AddingRecipients) {
    mainBtnText = _services_locale_locale__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.getString('add_recipients');
  } else if (activateRecipientsOnSave) {
    mainBtnText = _services_locale_locale__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.getString('start_drip_now');
  }
  const discardBtnText = sequence.getStatus() === _core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_9__/* .SequenceStatus */ .ST.Draft ? _services_locale_locale__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.getString('discard') : _services_locale_locale__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.getString('discard_changes');
  const showSendLater = activateRecipientsOnSave;
  const sendLaterBtnText = mode === _contexts_sequenceDetailsContext__WEBPACK_IMPORTED_MODULE_22__/* .SequenceDetailsMode */ .cG.AddingRecipients ? _services_locale_locale__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.getString('sequence_add_recipients_later') : _services_locale_locale__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.getString('send_later');
  const handleSaveDrip = async function () {
    let {
      sendAt,
      forceActivate
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    if (!sendAt && activateRecipientsOnSave) {
      if (!forceActivate) {
        // ask user to confirm that emails will be sent immediately
        setConfirmToActivate(true);
        return;
      }
    }
    const mailMergeQuotaPercentageUsed = quotaData?.planQuota ? 1 - quotaData.availableQuota / quotaData.planQuota : 0;
    if (activateRecipientsOnSave) {
      if (sendAt) {
        setBusyReason('scheduling');
        _track('startDripLater.click', {
          mailMergeQuotaPercentageUsed
        });
      } else {
        setBusyReason('starting');
        _track('startDripNow.click', {
          mailMergeQuotaPercentageUsed
        });
      }
    } else {
      if (mode === _contexts_sequenceDetailsContext__WEBPACK_IMPORTED_MODULE_22__/* .SequenceDetailsMode */ .cG.AddingRecipients) {
        setBusyReason('adding');
        _track('addRecipient.click', {
          mailMergeQuotaPercentageUsed
        });
      } else {
        setBusyReason('saving');
        _track('startDripLater.click', {
          mailMergeQuotaPercentageUsed
        });
      }
    }
    try {
      // Construct new recipients objects
      let newRecipients = null;
      if (sendAt) {
        newRecipients = recipients.map(r => ({
          key: r.key,
          scheduledStart: sendAt.getTime()
        }));
      }

      // If the experiment is running we want to update the recipients template values with only used template variables names
      if (_core_enabledFeaturesController__WEBPACK_IMPORTED_MODULE_33__.EnabledFeatures.isFeatureEnabled('mmOptimizeRecipientsExp')) {
        const actions = sequence.getActions();
        const sequenceVariables = (0,_helpers_sequenceVariables__WEBPACK_IMPORTED_MODULE_30__/* .getSequenceVariables */ .f)(actions);
        const {
          isUpdated,
          recipients: updatedRecipients
        } = (0,_helpers_removeSequenceRecipientsStaleTemplateValues__WEBPACK_IMPORTED_MODULE_31__/* .removeSequenceRecipientsStaleTemplateValues */ .L)(recipients, sequenceVariables);
        if (isUpdated) {
          newRecipients = newRecipients?.map((recipient, i) => ({
            ...recipient,
            ...(updatedRecipients[i] ?? {})
          })) ?? updatedRecipients;
        }
      }

      // Save recipients
      newRecipients && (await updateRecipients(newRecipients));
      await flushRecipients();
      const sequenceKey = sequence.key();
      let seqStatus = sequence.getStatus();
      if (activateRecipientsOnSave && seqStatus === _core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_9__/* .SequenceStatus */ .ST.Draft) {
        // activate sequence only if it is in DRAFT mode (to prevent activating if it is in PAUSE)
        await sequence.saveWithPromise(); // ensure latest sequence actions are saved
        await updateSequence({
          key: sequenceKey,
          status: _core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_9__/* .SequenceStatus */ .ST.Active
        });
        await sequence.refreshWithPromise();
        seqStatus = sequence.getStatus();
      } else {
        await sequence.saveWithPromise(); // ensure latest sequence actions are saved
        seqStatus = sequence.getStatus();
      }
      sequenceController.destroy();
      const recipientsActivated = activateRecipientsOnSave && seqStatus === _core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_9__/* .SequenceStatus */ .ST.Active;
      if (recipientsActivated) {
        (0,_helpers_sequenceButterBars__WEBPACK_IMPORTED_MODULE_16__/* .showSequenceStartedButterMsg */ .JW)({
          sequenceKey,
          sendAt,
          mode
        });

        // show Mole only if no delayed send is specified
        if (!sendAt && mode !== _contexts_sequenceDetailsContext__WEBPACK_IMPORTED_MODULE_22__/* .SequenceDetailsMode */ .cG.AddingRecipients) {
          // TODO: need to define UX of the Mole for AddingRecipients mode
          const sequenceMole = new _SequenceMoleManager__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z(sequence, sequenceController.getSequenceRecipientsSource()?.type);
          sequenceMole.setupMole();
        }
      } else {
        (0,_helpers_sequenceButterBars__WEBPACK_IMPORTED_MODULE_16__/* .showSequenceSavedButterMsg */ .c8)({
          sequenceKey,
          status: seqStatus,
          mode
        });
      }
    } catch (error) {
      (0,_lib_log_error__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP)({
        err: error,
        message: 'failed to save sequence',
        details: {
          sequenceKey: sequence.key(),
          activateRecipientsOnSave,
          sendAt,
          forceActivate
        },
        level: 'error'
      });
      const seqApiError = await (0,_api_errors__WEBPACK_IMPORTED_MODULE_29__/* .tryGetSequenceApiError */ .w)(error);
      if (seqApiError) {
        setLastApiError(seqApiError);
        return;
      }
      const quotaApiError = await (0,_quotaView_api_errors__WEBPACK_IMPORTED_MODULE_28__/* .tryGetQuotaApiError */ .RH)(error);
      if (quotaApiError) {
        setLastApiError(quotaApiError);
        return;
      }
      setLastApiError((0,_core_api_errors__WEBPACK_IMPORTED_MODULE_39__/* .tryGetUnknownApiError */ .S)(error));
    } finally {
      setBusyReason(false);
    }
  };
  const isStartDisabled = !sequenceValidation.valid || !!busyReason || extractionInProgress;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38__.jsx)(_services_tracker_useTracker__WEBPACK_IMPORTED_MODULE_4__/* .TrackerContext */ .fy.Provider, {
    value: _track,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38__.jsxs)("div", {
      className: "jsx-4036285869" + " " + "streak__sequence_drawer",
      children: [!!busyReason && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38__.jsx)(_SequenceInfoModal__WEBPACK_IMPORTED_MODULE_17__/* .SequenceInfoModal */ .B, {
        reason: busyReason
      }), !busyReason && lastApiError && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38__.jsx)(_SequenceApiErrorSidebarModal__WEBPACK_IMPORTED_MODULE_27__/* .SequenceApiErrorSidebarModal */ .q, {
        apiError: lastApiError,
        onClose: minimize => {
          setLastApiError(undefined);
          if (minimize) {
            sequenceController.minimizeCompose();
            sequenceController.closeDrawer();
          }
        }
      }), confirmToActivate && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38__.jsx)(_SequenceConfirmModal__WEBPACK_IMPORTED_MODULE_26__/* .SequenceConfirmModal */ .Z, {
        title: _services_locale_locale__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.getString('sequence_start_confirmation_title', {
          emails: recipients.length
        }),
        description: _services_locale_locale__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.getString('sequence_start_confirmation_body'),
        yesBtnText: _services_locale_locale__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.getString('send'),
        noBtnText: _services_locale_locale__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.getString('cancel'),
        onClose: confirmed => {
          setConfirmToActivate(false);
          if (confirmed) {
            handleSaveDrip({
              forceActivate: true
            });
          }
        }
      }), confirmToDelete && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38__.jsx)(_SequenceConfirmModal__WEBPACK_IMPORTED_MODULE_26__/* .SequenceConfirmModal */ .Z, {
        title: _services_locale_locale__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.getString('sequence_delete_confirmation_title'),
        description: _services_locale_locale__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.getString('sequence_delete_confirmation_body'),
        yesBtnText: _services_locale_locale__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.getString('delete'),
        noBtnText: _services_locale_locale__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.getString('cancel'),
        onClose: confirmed => {
          setConfirmToDelete(false);
          if (confirmed) {
            _track('discard.click.confirmed');
            sequenceController.deleteAndDestroy();
          }
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38__.jsxs)("div", {
        className: "jsx-4036285869" + " " + "streak__sequence_drawer_header",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38__.jsx)("div", {
          className: "jsx-4036285869" + " " + "streak__sequence_drawer_header_close_button_wrapper",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38__.jsx)(_widgets_react_material_tooltip_TooltipContainer__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
            tooltip: _services_locale_locale__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.getString('close'),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38__.jsx)(_widgets_react_material_button_streakButton__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .ZP, {
              accent: "muted",
              isRound: true,
              onClick: async () => {
                sequenceController.closeDrawer();
                _track('close');
              },
              variant: "inline",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38__.jsx)(_widgets_react_material_button_streakButton__WEBPACK_IMPORTED_MODULE_11__/* .StreakButtonIcon */ .A2, {
                materialIconName: "close",
                style: {
                  fontSize: '24px',
                  height: '24px',
                  width: '24px'
                }
              })
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38__.jsx)("div", {
          className: "jsx-4036285869" + " " + "streak__sequence_drawer_header_name",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38__.jsx)(_widgets_react_CommitHandler__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            input: inputProps => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38__.jsx)(_streakSidebar_presentation_raisedTextfield__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
              ...inputProps,
              disabled: false
              // TODO(Pablo): We should remove this onBlur, onCommit is called automatically when the input is blurred
              ,
              onBlur: () => inputProps.onCommit(),
              placeholder: sequence.getDisplayName(),
              ref: textfieldRef,
              size: 20,
              transparent: true
            }),
            onCommit: value => {
              sequence.setDisplayName(value);
            },
            value: displayName
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38__.jsx)(_SequenceDrawerTabs__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
        activeTabSource: activeTabSource,
        selectedDraftId: selectedDraftId,
        onClickAction: async draftId => {
          await sequenceController.openGmailComposeWindowForDraftId(draftId);
        },
        onClickAddFollowup: async () => {
          await sequenceController.openNewGmailComposeWindowWithNewAction();
        },
        onSetActionAdvancedDelay: async (draftId, value) => {
          // As of writing, we have to convert from draftId->actionId because if we force
          // DripTab to send up ActionIds (and switch back convertSequenceActionIntoOrderedRenderItems
          // to use actionIds again), then we always get stale actionIds.
          const action = sequence.getActionByDraftId(draftId);
          sequence.setActionAdvancedDelay(action.actionId, value);
          if (sequence.getStatus() === 'DRAFT') {
            sequenceController.debouncedSave();
          }
        },
        sequence: sequence,
        sequenceValidation: sequenceValidation,
        sequenceController: sequenceController,
        setActiveTabSource: setActiveTabSource
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38__.jsx)("div", {
        className: "jsx-4036285869" + " " + "streak__sequence_drawer_footer",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38__.jsxs)("div", {
          className: "jsx-4036285869" + " " + "actions",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38__.jsx)("div", {
            className: "jsx-4036285869" + " " + "send_now_wrapper",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38__.jsx)(_widgets_react_material_button_streakButton__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .ZP, {
              accent: "default",
              disabled: isStartDisabled,
              onClick: () => handleSaveDrip(),
              variant: "default",
              children: mainBtnText
            })
          }), showSendLater && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38__.jsx)("div", {
            className: "jsx-4036285869" + " " + "send_later_wrapper",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38__.jsxs)(_streakyc_ui_components_menu__WEBPACK_IMPORTED_MODULE_3__/* .Menu */ .v2, {
              offset: true,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38__.jsx)(_streakyc_ui_components_menu__WEBPACK_IMPORTED_MODULE_3__/* .MenuTrigger */ .bF, {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38__.jsx)(_streakyc_ui_components__WEBPACK_IMPORTED_MODULE_36__/* .ButtonWithText */ .WY, {
                  variant: "text",
                  disabled: isStartDisabled,
                  children: sendLaterBtnText
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38__.jsx)(_streakyc_ui_components_menu__WEBPACK_IMPORTED_MODULE_3__/* .MenuPanel */ .Gk, {
                size: "snudge",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38__.jsx)(_streakyc_ui_components_autocomplete__WEBPACK_IMPORTED_MODULE_2__/* .AutocompleteMenuItem */ .EB, {
                  children: ctx => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38__.jsx)(_widgets_scheduler_scheduler__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
                    copyVariant: {
                      type: 'send date',
                      for: 'mail merge'
                    },
                    view: "sequenceDrawer",
                    onConfirm: date => {
                      ctx.dismissMenu();
                      handleSaveDrip({
                        sendAt: date
                      });
                    },
                    closePopover: () => ctx.dismissMenu(),
                    reposition: () => {
                      //
                    }
                  })
                })
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38__.jsx)("div", {
            className: "jsx-4036285869" + " " + "discard_wrapper",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38__.jsx)(_widgets_react_material_button_streakButton__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .ZP, {
              accent: "muted",
              onClick: () => {
                if (sequence.getStatus() === 'DRAFT') {
                  setConfirmToDelete(true);
                } else {
                  if (sequenceController.shouldGoBackToSequenceView) {
                    _core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_35__.inboxSDK.Router.goto(_core_routing__WEBPACK_IMPORTED_MODULE_37__/* .StreakCustomRoute */ .ld.SEQUENCE, {
                      key: sequence.key()
                    });
                  }
                  sequenceController.destroy();
                }
                _track('discard.click');
              },
              variant: "text",
              children: discardBtnText
            })
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38__.jsx)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
        id: "4036285869",
        children: [".jsx-4036285869{--sidebar-header-padding:16px;}", ".streak__sequence_drawer.jsx-4036285869{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}", ".streak__sequence_drawer_header.jsx-4036285869{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:var(--streak-black-surface);box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:var(--sidebar-header-padding) var(--sidebar-header-padding) 0;}", ".streak__sequence_drawer_header_close_button_wrapper.jsx-4036285869{margin-right:8px;}", ".streak__sequence_drawer_header_name.jsx-4036285869{width:100%;}", ".streak__sequence_drawer_footer.jsx-4036285869{background-color:var(--streak-gmail-grey);border-top:1px solid var(--streak-black-divider);bottom:0;box-sizing:border-box;min-height:64px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;}", ".streak__sequence_drawer_footer.jsx-4036285869 .actions.jsx-4036285869{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:var(--sidebar-header-padding);}", ".send_now_wrapper.jsx-4036285869{margin-right:8px;}", ".discard_wrapper.jsx-4036285869{margin-left:auto;}"]
      })]
    })
  });
});
const SequenceDrawer = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((_ref2, ref) => {
  let {
    sequenceDetailsData,
    sequence,
    sequenceController
  } = _ref2;
  const virtualCohort = sequenceDetailsData.mode === _contexts_sequenceDetailsContext__WEBPACK_IMPORTED_MODULE_22__/* .SequenceDetailsMode */ .cG.AddingRecipients;
  const filterOutSavedRecipients = sequenceDetailsData.mode === _contexts_sequenceDetailsContext__WEBPACK_IMPORTED_MODULE_22__/* .SequenceDetailsMode */ .cG.AddingRecipients;
  const source = sequenceDetailsData.recipientsSource;
  const initializeRecipientsOnMount = !!sequenceDetailsData.recipientsSource;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38__.jsx)(_contexts_sequenceDetailsContext__WEBPACK_IMPORTED_MODULE_22__/* .SequenceDetailsProvider */ .aE, {
    mode: sequenceDetailsData.mode,
    sequence: sequenceDetailsData.sequence,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38__.jsx)(_contexts_sequenceDetailsRecipientsContext__WEBPACK_IMPORTED_MODULE_21__/* .SequenceDetailsRecipientsProvider */ .R, {
      virtualCohort: virtualCohort,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38__.jsx)(_contexts_sequenceDetailsRecipientsSourceContext__WEBPACK_IMPORTED_MODULE_20__/* .SequenceDetailsRecipientsSourceProvider */ .Gg, {
        source: source,
        filterOutSavedRecipients: filterOutSavedRecipients,
        initializeRecipientsOnMount: initializeRecipientsOnMount,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38__.jsx)(_contexts_sequenceDetailsVariablesContext__WEBPACK_IMPORTED_MODULE_23__/* .SequenceDetailsVariablesContextProvider */ .y, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38__.jsx)(_contexts_sequenceDetailsRecipientVariablesContext__WEBPACK_IMPORTED_MODULE_24__/* .SequenceDetailsRecipientVariablesContextProvider */ .F, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_38__.jsx)(SequenceDrawerContent, {
              sequence: sequence,
              sequenceController: sequenceController,
              ref: ref
            })
          })
        })
      })
    })
  });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SequenceDrawer);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 22999:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ SequenceDrawerTabs)
/* harmony export */ });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81518);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44345);
/* harmony import */ var _SequenceRecipientsTab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(66895);
/* harmony import */ var _SequenceDripTab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(64369);
/* harmony import */ var _lib_utils_prettyNumber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6567);
/* harmony import */ var _widgets_react_material_tabs_tabBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(66277);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(35091);
/* harmony import */ var _services_tracker_useTracker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(70989);
/* harmony import */ var _components_Icon_Icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(71174);
/* harmony import */ var _contexts_sequenceDetailsRecipientsContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4750);
/* harmony import */ var _contexts_sequenceDetailsContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(88331);
/* harmony import */ var _contexts_sequenceDetailsRecipientsSourceContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2275);
/* harmony import */ var _hooks_useSequenceTabsToShow__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(28884);
/* harmony import */ var _lib_utils_useModelProperty__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(80795);
/* harmony import */ var _contexts_sequenceRecipientsEmailHistoryContext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(37686);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_SequenceRecipientsTab__WEBPACK_IMPORTED_MODULE_2__, _SequenceDripTab__WEBPACK_IMPORTED_MODULE_3__, _contexts_sequenceDetailsRecipientsContext__WEBPACK_IMPORTED_MODULE_9__, _contexts_sequenceDetailsRecipientsSourceContext__WEBPACK_IMPORTED_MODULE_11__, _contexts_sequenceRecipientsEmailHistoryContext__WEBPACK_IMPORTED_MODULE_14__]);
([_SequenceRecipientsTab__WEBPACK_IMPORTED_MODULE_2__, _SequenceDripTab__WEBPACK_IMPORTED_MODULE_3__, _contexts_sequenceDetailsRecipientsContext__WEBPACK_IMPORTED_MODULE_9__, _contexts_sequenceDetailsRecipientsSourceContext__WEBPACK_IMPORTED_MODULE_11__, _contexts_sequenceRecipientsEmailHistoryContext__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

















function SequenceDrawerTabs(props) {
  const {
    mode
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_sequenceDetailsContext__WEBPACK_IMPORTED_MODULE_10__/* .SequenceDetailsContext */ .IJ);
  const {
    recipients,
    savedRecipientsReady
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_sequenceDetailsRecipientsContext__WEBPACK_IMPORTED_MODULE_9__/* .SequenceDetailsRecipientsContext */ .j);
  const sourceCtx = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_sequenceDetailsRecipientsSourceContext__WEBPACK_IMPORTED_MODULE_11__/* .SequenceDetailsRecipientsSourceContext */ .uq);
  const recipientsBeingLoaded = !savedRecipientsReady || sourceCtx?.isExtracting || false;
  const sequenceKey = (0,_lib_utils_useModelProperty__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)(props.sequence, 'key');
  const tabDefsToShow = (0,_hooks_useSequenceTabsToShow__WEBPACK_IMPORTED_MODULE_12__/* .useSequenceTabsToShow */ .W)(mode);
  const tabBarRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const _track = (0,_services_tracker_useTracker__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP)('sequenceDrawerTabs');
  const tabWithErrors = {};
  if (props.sequenceValidation.invalidVariables.length > 0) {
    tabWithErrors['RECIPIENTS'] = true;
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
    className: "jsx-1272845561" + " " + "streak_sequence_drawer_tabs",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div", {
      className: "jsx-1272845561" + " " + "streak_sequence_drawer_tabs_header",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_widgets_react_material_tabs_tabBar__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        mini: true,
        ref: tabBarRef,
        tabs: tabDefsToShow.map(tabDef => {
          let labelText = '';
          if (tabDef.source === 'RECIPIENTS') {
            labelText = _services_locale_locale__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.getString(tabDef.localeKey, {
              count: _services_locale_locale__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.getString('within_round_brackets', {
                content: recipientsBeingLoaded || !sequenceKey ? '...' : (0,_lib_utils_prettyNumber__WEBPACK_IMPORTED_MODULE_4__/* .prettyNumber */ .C)(recipients.length)
              })
            });
          } else {
            labelText = _services_locale_locale__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.getString(tabDef.localeKey);
          }
          return {
            label: tabWithErrors[tabDef.source] ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
              className: "jsx-1272845561" + " " + "streak_sequence_drawer_tab_label",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div", {
                className: "jsx-1272845561" + " " + "streak_sequence_drawer_tab_label_icon_wrapper streak_sequence_drawer_tab_icon_warning",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                  name: "error_outline",
                  size: "s",
                  variant: "outline",
                  accent: props.activeTabSource === tabDef.source ? 'warning' : 'inherit',
                  tooltip: _services_locale_locale__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.getString('sequence_missing_variables')
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("span", {
                className: "jsx-1272845561",
                children: labelText
              })]
            }) : labelText,
            onTabSelected: () => {
              const {
                source
              } = tabDef;
              props.setActiveTabSource(source);
              _track('setActiveSource', {
                source
              });
            }
          };
        }),
        activeTabIndex: tabDefsToShow.findIndex(tab => tab.source === props.activeTabSource),
        alwaysVisibleTabIndices: [...Array(tabDefsToShow.length).keys()]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
      className: "jsx-1272845561" + " " + "streak_sequence_drawer_tabs_body",
      children: [props.activeTabSource === 'DRIP' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_SequenceDripTab__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        selectedDraftId: props.selectedDraftId,
        sequence: props.sequence,
        sequenceValidation: props.sequenceValidation,
        sequenceController: props.sequenceController,
        onClickAction: props.onClickAction,
        onSetActionAdvancedDelay: props.onSetActionAdvancedDelay,
        onClickAddFollowup: props.onClickAddFollowup
      }), props.activeTabSource === 'RECIPIENTS' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_contexts_sequenceRecipientsEmailHistoryContext__WEBPACK_IMPORTED_MODULE_14__/* .SequenceRecipientsEmailHistoryContextProvider */ .E, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_SequenceRecipientsTab__WEBPACK_IMPORTED_MODULE_2__/* .SequenceRecipientsTab */ .c, {
          sequence: props.sequence,
          sequenceValidation: props.sequenceValidation,
          sequenceController: props.sequenceController
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "1272845561",
      children: [".streak_sequence_drawer_tabs.jsx-1272845561{-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;overflow:hidden;}", ".streak_sequence_drawer_tabs_header.jsx-1272845561{background-color:var(--streak-black-surface);font-family:Google Sans;width:100%;}", ".streak_sequence_drawer_tabs_header.jsx-1272845561 .mdl-tabs__tab-bar.mdl-tabs__tab-bar.mdl-tabs__tab-bar-mini{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;position:relative;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;padding-bottom:0;border-bottom:1px solid var(--streak-black-divider);}", ".streak_sequence_drawer_tabs_header.jsx-1272845561 .mdl-tabs__tab-bar.mdl-tabs__tab-bar-mini .mdl-tabs__tab{text-transform:capitalize;font-size:var(--streak-text-size-16);max-width:-webkit-fit-content;max-width:-moz-fit-content;max-width:fit-content;}", ".streak_sequence_drawer_tabs_header.jsx-1272845561 .mdl-tabs__tab-bar.mdl-tabs__tab-bar .mdl-tabs__tab-bar-selection-bar{height:2px;display:block;content:' ';bottom:0;left:0;position:absolute;background:var(--streak-primary-color);}", ".streak_sequence_drawer_tabs_header.jsx-1272845561 .mdl-tabs__tab-bar.mdl-tabs__tab-bar .mdl-tabs__tab.is-active{color:var(--streak-primary-color);}", ".streak_sequence_drawer_tab_label.jsx-1272845561{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".streak_sequence_drawer_tab_label.jsx-1272845561 .streak_sequence_drawer_tab_label_icon_wrapper.jsx-1272845561{margin-right:0.3em;line-height:1em;}", ".streak_sequence_drawer_tab_label.jsx-1272845561 .streak_sequence_drawer_tab_icon_warning.jsx-1272845561{color:var(--streak-warning-onDark);}", ".streak_sequence_drawer_tabs_body.jsx-1272845561{-webkit-flex:1;-ms-flex:1;flex:1;overflow:auto;}"]
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 64369:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ SequenceDripTab)
/* harmony export */ });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81518);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44345);
/* harmony import */ var _core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72493);
/* harmony import */ var _hooks_useSortedSequenceSteps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15701);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(35091);
/* harmony import */ var _services_tracker_useTracker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(70989);
/* harmony import */ var _items_ItemTemplate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(64129);
/* harmony import */ var _items_DelayItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(21705);
/* harmony import */ var _helpers_sequenceSteps__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5593);
/* harmony import */ var _contexts_sequenceDetailsContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(88331);
/* harmony import */ var _widgets_react_material_tooltip_TooltipContainer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9112);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_2__]);
_core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];













function SequenceDripTab(props) {
  const {
    sequence,
    sequenceValidation
  } = props;
  const steps = (0,_hooks_useSortedSequenceSteps__WEBPACK_IMPORTED_MODULE_3__/* .useSortedSequenceSteps */ .I)(sequence);
  const {
    mode
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_sequenceDetailsContext__WEBPACK_IMPORTED_MODULE_9__/* .SequenceDetailsContext */ .IJ);
  const _track = (0,_services_tracker_useTracker__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP)('sequenceDripTab');
  const lastStep = steps[steps.length - 1];
  const isFollowupDisabled = steps.length === 0 || lastStep && lastStep.type === _helpers_sequenceSteps__WEBPACK_IMPORTED_MODULE_8__/* .SequenceStepType */ .s.Message && lastStep.data.draftId === null ||
  // last email subject is not set yet
  lastStep && lastStep.type === _helpers_sequenceSteps__WEBPACK_IMPORTED_MODULE_8__/* .SequenceStepType */ .s.Message && !lastStep.data.subject?.trim() || mode === _contexts_sequenceDetailsContext__WEBPACK_IMPORTED_MODULE_9__/* .SequenceDetailsMode */ .cG.AddingRecipients;
  const followupTitle = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default().dynamic([["281193637", [isFollowupDisabled ? 'var(--streak-black-disabled)' : 'var(--streak-app-primary)']]]) + " " + "streak__sequence_add_followup_item",
    children: [_services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('add_follow_up'), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "281193637",
      dynamic: [isFollowupDisabled ? 'var(--streak-black-disabled)' : 'var(--streak-app-primary)'],
      children: [`.streak__sequence_add_followup_item.__jsx-style-dynamic-selector{color:${isFollowupDisabled ? 'var(--streak-black-disabled)' : 'var(--streak-app-primary)'};line-height:24px;}`]
    })]
  });
  const invalidVariables = sequenceValidation.invalidVariables;
  const draftsWithErrors = react__WEBPACK_IMPORTED_MODULE_1__.useMemo(() => {
    const result = {};
    invalidVariables.forEach(invalidVar => invalidVar.drafts.forEach(draftId => {
      result[draftId] = true;
    }));
    return result;
  }, [invalidVariables]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
    className: "jsx-3963740280" + " " + "streak__sequence_drip_tab",
    children: [steps.length === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
      className: "jsx-3963740280",
      children: "Loading"
    }), steps.length > 0 && steps.map(step => {
      let Item = null;
      switch (step.type) {
        case _helpers_sequenceSteps__WEBPACK_IMPORTED_MODULE_8__/* .SequenceStepType */ .s.Message:
          {
            {
              const draftId = step.data.draftId;
              const hasError = draftsWithErrors[draftId];
              Item = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_items_ItemTemplate__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                iconProps: {
                  name: `${step.iconName || 'mail'}`,
                  isOutline: true
                },
                title: step.data.subject?.trimLeft() || _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('new_message'),
                subtitle: step.data.body || _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('empty_body'),
                errorMsg: hasError ? _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('sequence_missing_variables') : undefined,
                onClick: async () => {
                  _track('action.click', step);
                  if (step.data.draftId === props.selectedDraftId) {
                    return;
                  }
                  props.onClickAction(draftId);
                },
                disabled: props.selectedDraftId === draftId,
                isSelected: props.selectedDraftId === draftId
              }, draftId);
            }
            break;
          }
        case _helpers_sequenceSteps__WEBPACK_IMPORTED_MODULE_8__/* .SequenceStepType */ .s.Delay:
          {
            Item = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_items_DelayItem__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
              defaultValue: step.data,
              onValueChange: value => {
                props.onSetActionAdvancedDelay(step.draftId, value);
              },
              disabled:
              // If a Sequence is in ACTIVE state, then the duration of a delays can't be
              // edited once they've been saved to the server. If `actionId` is `null`, then
              // this delay has not yet been saved to the server, which can happen if the user
              // is adding an additional message to the Sequence.
              sequence.getStatus() === _core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_2__/* .SequenceStatus */ .ST.Active && step.type === _helpers_sequenceSteps__WEBPACK_IMPORTED_MODULE_8__/* .SequenceStepType */ .s.Delay && step.data.actionId != null
            }, step.stepId);
            break;
          }
      }
      return Item;
    }), steps.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_widgets_react_material_tooltip_TooltipContainer__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
      tooltip: isFollowupDisabled && mode === _contexts_sequenceDetailsContext__WEBPACK_IMPORTED_MODULE_9__/* .SequenceDetailsMode */ .cG.AddingRecipients ? _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('can_not_add_follow_up') : null,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_items_ItemTemplate__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        title: followupTitle,
        iconProps: {
          name: 'add_circle',
          accent: isFollowupDisabled ? 'muted' : 'default',
          variant: 'outline'
        },
        onClick: async () => {
          props.onClickAddFollowup();
        },
        disabled: isFollowupDisabled
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "3963740280",
      children: [".streak__sequence_drip_tab.jsx-3963740280{padding:16px;}"]
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 79391:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sM: () => (/* binding */ SequenceEditVariablesModal)
/* harmony export */ });
/* unused harmony exports getInputValues, getNewTemplateValues, getDisplayProps */
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81518);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44345);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17013);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _streakSidebar_presentation_SidebarModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93751);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(35091);
/* harmony import */ var _widgets_react_material_textField_textField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(32679);
/* harmony import */ var _helpers_variables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(52704);
/* harmony import */ var _contexts_sequenceDetailsVariablesContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(29778);
/* harmony import */ var _contexts_sequenceDetailsRecipientVariablesContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(91303);
/* harmony import */ var _helpers_getSequenceRecipients__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(80115);
/* harmony import */ var _hooks_useCalculateRecipientsTemplateValues__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(21515);
/* harmony import */ var _widgets_react_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(20104);
/* harmony import */ var _core_enabledFeaturesController__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(50452);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_contexts_sequenceDetailsVariablesContext__WEBPACK_IMPORTED_MODULE_7__, _contexts_sequenceDetailsRecipientVariablesContext__WEBPACK_IMPORTED_MODULE_8__, _helpers_getSequenceRecipients__WEBPACK_IMPORTED_MODULE_9__, _hooks_useCalculateRecipientsTemplateValues__WEBPACK_IMPORTED_MODULE_10__, _core_enabledFeaturesController__WEBPACK_IMPORTED_MODULE_12__]);
([_contexts_sequenceDetailsVariablesContext__WEBPACK_IMPORTED_MODULE_7__, _contexts_sequenceDetailsRecipientVariablesContext__WEBPACK_IMPORTED_MODULE_8__, _helpers_getSequenceRecipients__WEBPACK_IMPORTED_MODULE_9__, _hooks_useCalculateRecipientsTemplateValues__WEBPACK_IMPORTED_MODULE_10__, _core_enabledFeaturesController__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















// Initial input values
function getInputValues(variables, singleRecipient) {
  return variables.reduce((acc, variable) => {
    const val = singleRecipient ? singleRecipient.templateValues[variable] ?? '' : '';
    acc[variable] = val;
    return acc;
  }, {});
}

// Construct new template values for all recipients which we use to update values on the backend
function getNewTemplateValues(recipients, variables, shouldSyncBoxValues, recipientsTemplateValues, inputValues) {
  return recipients.reduce((result, recipient) => {
    const recipientKey = recipient.key;
    const newTemplateValues = variables.reduce((acc, varName) => {
      acc[varName] = (shouldSyncBoxValues[varName] ? recipientsTemplateValues[recipientKey]?.[varName] : inputValues[varName]) ?? '';
      return acc;
    }, {});
    result[recipientKey] = newTemplateValues;
    return result;
  }, {});
}
function getDisplayProps(isUsingSync, templateValuesSet) {
  const numberOfUniqueBoxValues = templateValuesSet?.size ?? 0;
  // The sync button is displayed only when there are at least one box value
  const showSyncButton = !!numberOfUniqueBoxValues;
  // Check if we need to display the "multiple values" placeholder
  const hasMultipleValues = !!isUsingSync && numberOfUniqueBoxValues > 1;
  return {
    showSyncButton,
    hasMultipleValues
  };
}
const SequenceEditVariablesModal = _ref => {
  let {
    mode,
    recipients,
    variables,
    onCancel,
    onSave
  } = _ref;
  const {
    standardVariablesMap
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_sequenceDetailsVariablesContext__WEBPACK_IMPORTED_MODULE_7__/* .SequenceDetailsVariablesContext */ .c);
  const {
    getVariableEntityName,
    canUpdateVariableEntity,
    setVariableValuesToRecipients
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_sequenceDetailsRecipientVariablesContext__WEBPACK_IMPORTED_MODULE_8__/* .SequenceDetailsRecipientVariablesContext */ .S);
  let singleRecipient = null;
  if (recipients?.length === 1) {
    singleRecipient = recipients[0];
  }

  // do not update entities when setting variables to multiple recipients
  const shouldUpdateEntity = singleRecipient !== null;
  const variableToEntityMap = shouldUpdateEntity ? variables.reduce((acc, varName) => {
    if (canUpdateVariableEntity(varName, singleRecipient)) {
      const entityName = getVariableEntityName(varName);
      if (entityName) {
        acc[varName] = entityName;
      }
    }
    return acc;
  }, {}) : {};
  const entitiesToUpdate = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.uniq)(Object.values(variableToEntityMap));
  const allVariablesForSameEntity = entitiesToUpdate.length === 1 && variables.every(varName => variableToEntityMap[varName] === entitiesToUpdate[0]);
  const [shouldSyncBoxValues, setShouldSyncBoxValues] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(() => variables.reduce((acc, variable) => {
    acc[variable] = false;
    return acc;
  }, {}));
  const [inputValues, setInputValues] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(() => getInputValues(variables, singleRecipient));
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setInputValues(getInputValues(variables, singleRecipient));
  }, [variables, singleRecipient]);

  // Calculate a cache of recipients' template values
  const recipientsTemplateValues = (0,_hooks_useCalculateRecipientsTemplateValues__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(recipients, _core_enabledFeaturesController__WEBPACK_IMPORTED_MODULE_12__.EnabledFeatures.isFeatureEnabled('mmOptimizeRecipientsExp') && recipients.length > 1);

  // Calculate a cache of boxes' template values for missing variables which is used for displaying a "sync" button and "multiple values" input placeholder
  const boxTemplateValues = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    return Object.values(recipientsTemplateValues).reduce((result, templateValues) => {
      variables.forEach(varName => {
        // We want to add all values, including empty strings
        const value = templateValues[varName] ?? '';
        if (!result[varName]) {
          result[varName] = new Set();
        }
        result[varName].add(value);
      });
      return result;
    }, {});
  }, [recipientsTemplateValues, variables]);
  const [saveInProgress, setSaveInProgress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const handleSave = async () => {
    setSaveInProgress(true);
    const newTemplateValues = getNewTemplateValues(recipients, variables, shouldSyncBoxValues, recipientsTemplateValues, inputValues);
    try {
      await setVariableValuesToRecipients(recipients, newTemplateValues, {
        updateEntity: shouldUpdateEntity
      });
    } finally {
      setSaveInProgress(false);
    }
    onSave();
  };
  let title = _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('sequence_edit_variables', {
    count: variables.length
  });
  if (mode === 'fix') {
    if (recipients.length > 1) {
      title = _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('fix_all');
    } else {
      title = _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('sequence_fix_variables', {
        count: variables.length
      });
    }
  }
  let description = null;
  if (mode === 'fix' && variables.length === 1 && recipients.length > 1) {
    const varName = variables[0];
    // nice description when there is multiple recipients with one missing value and mode is set to 'fix'
    description = _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getArray('recipient_variable_error', {
      number: recipients.length,
      column: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("strong", {
        children: standardVariablesMap[varName]?.displayText || (0,_helpers_variables__WEBPACK_IMPORTED_MODULE_6__/* .getVariableText */ .RR)({
          variableName: varName
        })
      }, "columnName")
    });
  } else {
    if (recipients.length > 1) {
      description = _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('set_variable_values_for_recipients', {
        variables: variables.length,
        recipientCount: recipients.length
      });
    } else {
      const fullName = (0,_helpers_getSequenceRecipients__WEBPACK_IMPORTED_MODULE_9__/* .getSequenceRecipientFullName */ .S0)(singleRecipient);
      const email = singleRecipient.emails[0];
      description = _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getArray('set_variable_values_for_recipient', {
        variables: variables.length,
        recipient: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("strong", {
          children: fullName || email
        }, "recipientName")
      });
    }
  }
  const missingValueError = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => ({
    message: ''
  }), []);
  const handleTextFieldValueChange = (value, varName) => {
    setInputValues(state => ({
      ...state,
      [varName]: value
    }));
    setShouldSyncBoxValues(state => ({
      ...state,
      [varName]: false
    }));
  };
  const handleUseBoxVariableClick = varName => {
    setShouldSyncBoxValues(state => ({
      ...state,
      [varName]: true
    }));
    setInputValues(state => ({
      ...state,
      [varName]: ''
    }));
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
    className: "jsx-2626546336",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_streakSidebar_presentation_SidebarModal__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
      theme: "light",
      title: title,
      bodyComponent: () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
        className: "jsx-2626546336" + " " + "streak_sequence_variable_modal",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("p", {
          className: "jsx-2626546336",
          children: description
        }), allVariablesForSameEntity && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("p", {
          className: "jsx-2626546336" + " " + "streak__subText",
          children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('changes_made_will_be_saved', {
            entity: _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.UNSAFE_getString(entitiesToUpdate[0])
          })
        }), variables.map((varName, i) => {
          const subText = !allVariablesForSameEntity && variableToEntityMap[varName] && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
            className: "jsx-2626546336" + " " + "streak__input_subText",
            children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('changes_made_will_be_saved', {
              entity: _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.UNSAFE_getString(variableToEntityMap[varName])
            })
          });
          const hasMultipleRecipients = recipients.length > 1;
          let label = standardVariablesMap[varName]?.displayText || (0,_helpers_variables__WEBPACK_IMPORTED_MODULE_6__/* .getVariableText */ .RR)({
            variableName: varName
          });
          if (hasMultipleRecipients) {
            label = _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('default_value_for', {
              column: standardVariablesMap[varName]?.displayText || varName
            });
          }
          const inputValue = inputValues[varName];
          let value = inputValue ?? '';
          let error = inputValue ? null : missingValueError;
          let hasMultipleValues = false;
          let showSyncButton = false;

          // Allowing to sync box values to the missing template variables is enabled for multiple recipients only (however feasible for single recipient too).
          if (_core_enabledFeaturesController__WEBPACK_IMPORTED_MODULE_12__.EnabledFeatures.isFeatureEnabled('mmOptimizeRecipientsExp') && hasMultipleRecipients && mode === 'fix') {
            const shouldSync = shouldSyncBoxValues[varName];
            const boxValues = boxTemplateValues[varName] ?? new Set();
            ({
              showSyncButton,
              hasMultipleValues
            } = getDisplayProps(shouldSync, boxValues));
            if (shouldSync) {
              // When using the box sync we override `value` and `error` props so 1.they do not conflict with the `placeholder` prop or 2. display the correct value
              value = hasMultipleValues ? '' : [...boxValues][0] ?? '';
              error = null;
            }
          }
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_widgets_react_material_textField_textField__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
              autofocus: i === 0,
              fullWidth: true,
              label: label,
              onValueChange: value => handleTextFieldValueChange(value, varName),
              value: value,
              error: error,
              placeholder: hasMultipleValues ? _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('sequence_use_box_values_placeholder') : undefined,
              noBottomPadding: !!subText,
              suffix: showSyncButton ? () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_widgets_react_material_button__WEBPACK_IMPORTED_MODULE_11__/* .IconButton */ .hU, {
                materialIconName: "sync",
                onClick: () => handleUseBoxVariableClick(varName),
                tooltip: _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('sequence_use_box_values_tooltip')
              }) : undefined
            }, varName), subText]
          }, `${label}-${i}`);
        })]
      }),
      buttons: [{
        props: {
          onClick: onCancel,
          variant: 'text',
          disabled: saveInProgress
        },
        text: _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('cancel')
      }, {
        text: _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('save'),
        props: {
          onClick: handleSave,
          disabled: saveInProgress
        }
      }],
      onCloseClick: onCancel,
      onOutsideClick: onCancel
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "2626546336",
      children: [".streak_sequence_variable_modal.jsx-2626546336{width:300px;}", ".streak_sequence_variable_modal.jsx-2626546336 .streak__subText.jsx-2626546336{font-size:var(--streak-small-text-size);color:var(--streak-label-grey);}", ".streak_sequence_variable_modal.jsx-2626546336 .streak__input_subText.jsx-2626546336{font-size:var(--streak-small-text-size);color:var(--streak-label-grey);padding:4px 0 20px 0;}"]
    })]
  });
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 87259:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ SequenceInfoModal)
/* harmony export */ });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81518);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44345);
/* harmony import */ var _streakSidebar_presentation_SidebarModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93751);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35091);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(59718);





const SequenceInfoModal = _ref => {
  let {
    reason
  } = _ref;
  let title = _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.getString('loading_message');
  let description = '';
  switch (reason) {
    case 'starting':
      {
        title = _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.getString('starting');
        description = _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.getString('sequence_starting_description');
        break;
      }
    case 'adding':
      {
        title = _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.getString('adding');
        description = _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.getString('sequence_adding_description');
        break;
      }
    case 'scheduling':
      {
        title = _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.getString('sequence_scheduling');
        description = _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.getString('sequence_scheduling_description');
        break;
      }
    case 'loading':
      {
        title = _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.getString('loading_message');
        description = _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.getString('sequence_loading_message_body');
        break;
      }
    case 'saving':
      {
        title = _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.getString('saving');
        description = _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.getString('sequence_saving_description');
      }
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: "jsx-1077902382",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_streakSidebar_presentation_SidebarModal__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      theme: "light",
      title: title,
      bodyComponent: () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "jsx-1077902382" + " " + "streak_sequence_variable_modal",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
          className: "jsx-1077902382",
          children: description
        })
      }),
      buttons: []
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "1077902382",
      children: [".streak_sequence_variable_modal.jsx-1077902382{width:300px;}"]
    })]
  });
};

/***/ }),

/***/ 15828:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ SequenceMole)
/* harmony export */ });
/* harmony import */ var _streakyc_common_core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77294);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44345);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64219);
/* harmony import */ var _components_Icon_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71174);
/* harmony import */ var _widgets_react_material_button_streakButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22682);
/* harmony import */ var _hooks_useSequences__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14643);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(35091);
/* harmony import */ var _widgets_react_material_spinner_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2962);
/* harmony import */ var _services_tracker_tracker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(13778);
/* harmony import */ var _react_query_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(27758);
/* harmony import */ var _api_queries__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(55639);
/* harmony import */ var _core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(72493);
/* harmony import */ var _SequenceMole_module_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(27594);
/* harmony import */ var _widgets_react_loadingSpinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(72905);
/* harmony import */ var _contexts_sequenceDetailsRecipientsSourceContext__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2275);
/* harmony import */ var _core_routing__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(58556);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useSequences__WEBPACK_IMPORTED_MODULE_5__, _api_queries__WEBPACK_IMPORTED_MODULE_10__, _core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_11__, _contexts_sequenceDetailsRecipientsSourceContext__WEBPACK_IMPORTED_MODULE_13__]);
([_hooks_useSequences__WEBPACK_IMPORTED_MODULE_5__, _api_queries__WEBPACK_IMPORTED_MODULE_10__, _core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_11__, _contexts_sequenceDetailsRecipientsSourceContext__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

















const SequencePipelineImport = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.lazy)(() => __webpack_require__.e(/* import() */ 2440).then(__webpack_require__.bind(__webpack_require__, 42440)));
function SequenceMole(_ref) {
  let {
    sequenceKey,
    moleView,
    source
  } = _ref;
  const [options, setOptions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    refetchInterval: 1000
  });
  const promoEnabled = source === _contexts_sequenceDetailsRecipientsSourceContext__WEBPACK_IMPORTED_MODULE_13__/* .SequenceRecipientsSourceType */ .pL.CSV;
  const {
    data,
    error
  } = (0,_hooks_useSequences__WEBPACK_IMPORTED_MODULE_5__/* .useSequenceInfo */ .HW)(sequenceKey, options);
  const sentCount = data?.sentRecipientCount || 0;
  const total = data?.recipientCount || 0;
  const failedCount = data?.failedRecipientCount || 0;
  const remaining = total - sentCount - failedCount;
  const status = data?.status;
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    // stop refetching when there is an error or finished sending
    if (error && options) {
      setOptions(undefined);
    }
  }, [error, options]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    // stop refetching once all sent
    if (data?.sentRecipientCount !== undefined && data?.recipientCount !== undefined && data?.failedRecipientCount !== undefined && data?.sentRecipientCount + data?.failedRecipientCount === data?.recipientCount) {
      setOptions(undefined);
    }
  }, [data?.failedRecipientCount, data?.recipientCount, data?.sentRecipientCount]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!data) {
      moleView.setTitle(_services_locale_locale__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.getString('mail_merge'));
    } else {
      if (status === _core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_11__/* .SequenceStatus */ .ST.Active && remaining > 0) {
        moleView.setTitle(_services_locale_locale__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.getString('sequence_sending_sent_total', {
          sent: sentCount,
          total: total
        }));
      } else if (status === _core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_11__/* .SequenceStatus */ .ST.Paused && remaining > 0) {
        moleView.setTitle(_services_locale_locale__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.getString('sequence_paused_sent_total', {
          sent: sentCount,
          total: total
        }));
      } else {
        moleView.setTitle(_services_locale_locale__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.getString('mail_merge'));
      }
    }
  }, [moleView, data, sentCount, total, remaining, status]);
  const queryClient = (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useQueryClient)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    (0,_react_query_utils__WEBPACK_IMPORTED_MODULE_9__/* .scopeInfiniteQueryClientWithKey */ .gc)(queryClient, _api_queries__WEBPACK_IMPORTED_MODULE_10__/* .SEQUENCE_RECIPIENTS_QUERY_DEF */ .xP, {
      sequenceKey
    }).invalidateQuery();
  }, [queryClient, sequenceKey, remaining]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
    id: "streak__sequence_mole",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div", {
      className: _SequenceMole_module_css__WEBPACK_IMPORTED_MODULE_16__/* .buttonWrapper */ .Yq,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_widgets_react_material_button_streakButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP, {
        variant: "text",
        onClick: () => {
          _services_tracker_tracker__WEBPACK_IMPORTED_MODULE_8__["default"].track('sequenceMole.openInNew', {
            sequenceKey,
            mmSource: source
          });
          _streakyc_common_core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_0__.inboxSDK.Router.goto(_core_routing__WEBPACK_IMPORTED_MODULE_14__/* .StreakCustomRoute */ .ld.SEQUENCE, {
            key: sequenceKey
          });
        },
        children: [data?.displayName, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_widgets_react_material_button_streakButton__WEBPACK_IMPORTED_MODULE_4__/* .StreakButtonIcon */ .A2, {
          isOutline: true,
          materialIconName: "open_in_new"
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("ul", {
      className: _SequenceMole_module_css__WEBPACK_IMPORTED_MODULE_16__/* .sequenceProgressList */ .lv,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("li", {
        className: _SequenceMole_module_css__WEBPACK_IMPORTED_MODULE_16__/* .sequenceProgress */ .oM,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
          accent: "success",
          isOutline: true,
          name: "check_circle",
          variant: "inline"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("span", {
          className: _SequenceMole_module_css__WEBPACK_IMPORTED_MODULE_16__/* .content */ .kQ,
          children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.getString('sent')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("span", {
          className: _SequenceMole_module_css__WEBPACK_IMPORTED_MODULE_16__/* .count */ .QX,
          children: sentCount
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("li", {
        className: _SequenceMole_module_css__WEBPACK_IMPORTED_MODULE_16__/* .sequenceProgress */ .oM,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
          accent: "muted",
          isOutline: true,
          name: "error_outline",
          variant: "inline"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("span", {
          className: _SequenceMole_module_css__WEBPACK_IMPORTED_MODULE_16__/* .content */ .kQ,
          style: {
            fontWeight: 'normal'
          },
          children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.getString('failed')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("span", {
          className: _SequenceMole_module_css__WEBPACK_IMPORTED_MODULE_16__/* .count */ .QX,
          children: failedCount
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("li", {
        className: _SequenceMole_module_css__WEBPACK_IMPORTED_MODULE_16__/* .sequenceProgress */ .oM,
        children: [remaining > 0 && status === _core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_11__/* .SequenceStatus */ .ST.Active ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("span", {
          className: _SequenceMole_module_css__WEBPACK_IMPORTED_MODULE_16__/* .loadingWrapper */ .$6,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_widgets_react_material_spinner_spinner__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
            mini: true,
            singleColor: true
          })
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("span", {
          className: _SequenceMole_module_css__WEBPACK_IMPORTED_MODULE_16__/* .spacer */ .OF
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("span", {
          className: _SequenceMole_module_css__WEBPACK_IMPORTED_MODULE_16__/* .content */ .kQ,
          children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.getString('remaining')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("span", {
          className: _SequenceMole_module_css__WEBPACK_IMPORTED_MODULE_16__/* .count */ .QX,
          children: remaining
        })]
      })]
    }), promoEnabled && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, {
      fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_widgets_react_loadingSpinner__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {}),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(SequencePipelineImport, {
        sequenceKey: sequenceKey
      })
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 62123:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (/* binding */ SequenceRecipientRow),
/* harmony export */   yy: () => (/* binding */ SequenceRecipientRowAccessoryType)
/* harmony export */ });
/* unused harmony export SequenceRecipientRowPossibleFixAccessory */
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81518);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44345);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47587);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10295);
/* harmony import */ var _components_Icon_Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71174);
/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(54165);
/* harmony import */ var _services_tracker_useTracker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(70989);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(35091);
/* harmony import */ var _helpers_getSequenceRecipients__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(80115);
/* harmony import */ var _contexts_sequenceRecipientsEmailHistoryContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(37686);
/* harmony import */ var _SequenceRecipientRowEmailHistoryWarning__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2109);
/* harmony import */ var _services_data_user__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5575);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_helpers_getSequenceRecipients__WEBPACK_IMPORTED_MODULE_8__, _contexts_sequenceRecipientsEmailHistoryContext__WEBPACK_IMPORTED_MODULE_9__]);
([_helpers_getSequenceRecipients__WEBPACK_IMPORTED_MODULE_8__, _contexts_sequenceRecipientsEmailHistoryContext__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













let SequenceRecipientRowAccessoryType = /*#__PURE__*/function (SequenceRecipientRowAccessoryType) {
  SequenceRecipientRowAccessoryType["EMAIL_SUMMARY"] = "emailSummary";
  SequenceRecipientRowAccessoryType["POSSIBLE_FIX"] = "possibleFix";
  return SequenceRecipientRowAccessoryType;
}({});
function SequenceRecipientRow(_ref) {
  let {
    isFirst,
    isLast,
    isPreviewDisabled,
    onPreviewRecipient,
    onEditRecipient,
    onRemoveRecipient,
    onHistoryClick,
    onClickFixRecipient,
    recipient,
    missingVariables,
    invalidVariableName,
    possibleFix,
    accessoryType,
    onMouseEnter,
    onMouseLeave
  } = _ref;
  const track = (0,_services_tracker_useTracker__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP)('sequenceRecipientsTab');
  const fullName = (0,_helpers_getSequenceRecipients__WEBPACK_IMPORTED_MODULE_8__/* .getSequenceRecipientFullName */ .S0)(recipient);
  const {
    emails,
    photoUrl
  } = recipient;
  const email = emails[0];
  const hasErrors = missingVariables && missingVariables.length > 0;
  const historyContext = react__WEBPACK_IMPORTED_MODULE_1__.useContext(_contexts_sequenceRecipientsEmailHistoryContext__WEBPACK_IMPORTED_MODULE_9__/* .SequenceRecipientsEmailHistoryContext */ .V);
  let historyEntry = null;
  if (accessoryType === SequenceRecipientRowAccessoryType.EMAIL_SUMMARY) {
    historyEntry = historyContext.getRecipientEmailHistory(email);
    if (!onHistoryClick) {
      throw new Error('onHistoryClick is required when accessoryType is emailSummary');
    }
  }
  if (accessoryType === SequenceRecipientRowAccessoryType.POSSIBLE_FIX) {
    if (!onClickFixRecipient) {
      throw new Error('onClickFixRecipient is required when accessoryType is possibleFix');
    }
    if (!invalidVariableName) {
      throw new Error('invalidVariableName is required when accessoryType is possibleFix');
    }
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
    onMouseEnter: () => onMouseEnter(recipient),
    onMouseLeave: () => onMouseLeave(recipient),
    className: "jsx-3113475011" + " " + (classnames__WEBPACK_IMPORTED_MODULE_2___default()('streak__sequence_recipient_row_wrapper', {
      'pos-first': isFirst,
      'pos-last': isLast
    }) || ""),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
      onClick: () => {
        track('recipient.edit', recipient);
        onEditRecipient(recipient);
      },
      className: "jsx-3113475011" + " " + "streak__sequence_recipient_row",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_5__/* .Row */ .X2, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_5__/* .Column */ .sg, {
          alignment: "start",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            imageUrl: photoUrl,
            name: fullName || emails[0],
            size: 24,
            variant: "circle"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_5__/* .Column */ .sg, {
          alignment: "center",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("span", {
            className: "jsx-3113475011" + " " + "streak_sequence_recipient_name",
            children: fullName || email
          }), fullName && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("span", {
            className: "jsx-3113475011" + " " + "streak_sequence_recipient_email",
            children: ' • ' + email
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
          className: "jsx-3113475011" + " " + "streak__sequence_recipient_row_actions streak__sequence_recipient_actions_not_hovered",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_5__/* .Column */ .sg, {
            alignment: "end",
            children: hasErrors && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
              className: "jsx-3113475011" + " " + "streak__sequence_recipient_row_action streak__sequence_recipient_row_action_errors warning",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                accent: "warning",
                isOutline: true,
                name: "error_outline",
                variant: "inline",
                size: "s"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("span", {
                className: "jsx-3113475011" + " " + "recipient_errors_nb",
                children: missingVariables.length
              })]
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
          className: "jsx-3113475011" + " " + "streak__sequence_recipient_row_actions streak__sequence_recipient_actions_hovered",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_5__/* .Column */ .sg, {
            alignment: "end",
            children: [!hasErrors && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
                "aria-disabled": isPreviewDisabled,
                onClick: e => {
                  // prevent root div click of firing up
                  e.stopPropagation();
                  if (isPreviewDisabled) return;
                  track('recipient.preview', recipient);
                  onPreviewRecipient(recipient);
                },
                className: "jsx-3113475011" + " " + (classnames__WEBPACK_IMPORTED_MODULE_2___default()('streak__sequence_recipient_row_action streak__sequence_recipient_row_preview', {
                  streak__sequence_recipient_row_action_disabled: isPreviewDisabled
                }) || ""),
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                  accent: "muted",
                  isOutline: true,
                  name: "preview",
                  variant: "inline",
                  color: isPreviewDisabled ? 'var(--streak-black-disabled)' : undefined,
                  tooltip: isPreviewDisabled ? _services_locale_locale__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.getString('mm_error_plain_text_draft') : _services_locale_locale__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.getString('sequence_recipient_row_preview_tooltip')
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
                onClick: e => {
                  // prevent root div click of firing up
                  e.stopPropagation();
                  track('recipient.edit', recipient);
                  onEditRecipient(recipient);
                },
                className: "jsx-3113475011" + " " + "streak__sequence_recipient_row_action streak__sequence_recipient_row_edit",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                  accent: "muted",
                  isOutline: true,
                  name: "edit",
                  variant: "inline"
                })
              })]
            }), hasErrors && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
              onClick: e => {
                // prevent root div click of firing up
                e.stopPropagation();
                track('recipient.edit', recipient);
                onEditRecipient(recipient, missingVariables);
              },
              className: "jsx-3113475011" + " " + "streak__sequence_recipient_row_action streak__sequence_recipient_row_action_errors warning",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                accent: "warning",
                isOutline: true,
                name: "error_outline",
                variant: "inline",
                size: "s"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("span", {
                className: "jsx-3113475011" + " " + "recipient_errors_nb",
                children: missingVariables.length
              })]
            }), onRemoveRecipient && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
              onClick: e => {
                // prevent root div click of firing up
                e.stopPropagation();
                track('recipient.remove', recipient);
                onRemoveRecipient(recipient);
              },
              className: "jsx-3113475011" + " " + "streak__sequence_recipient_row_action streak__sequence_recipient_row_remove",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                accent: "muted",
                isOutline: true,
                name: "close",
                variant: "inline",
                tooltip: _services_locale_locale__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.getString('remove')
              })
            })]
          })
        })]
      })
    }), accessoryType === SequenceRecipientRowAccessoryType.EMAIL_SUMMARY && historyEntry?.mostRecentSentByTeamMemberTimestamp && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
      className: "jsx-3113475011" + " " + "streak__sequence_recipient_row_accessories",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_5__/* .Row */ .X2, {
        height: "auto",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_5__/* .Column */ .sg, {
          alignment: "center",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_SequenceRecipientRowEmailHistoryWarning__WEBPACK_IMPORTED_MODULE_10__/* .SequenceRecipientRowEmailHistoryWarning */ .l, {
            recipient: recipient,
            isLatestThreadByCurrentUser: historyEntry.mostRecentSentByTeamMemberEmail === (0,_services_data_user__WEBPACK_IMPORTED_MODULE_12__/* .getUser */ .P)().email,
            mostRecentThreadDate: historyEntry.mostRecentSentByTeamMemberTimestamp ?? 0,
            onHistoryClick: onHistoryClick
          })
        })
      })
    }), accessoryType === SequenceRecipientRowAccessoryType.POSSIBLE_FIX && possibleFix && invalidVariableName && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
      className: "jsx-3113475011" + " " + "streak__sequence_recipient_row_accessories",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_5__/* .Row */ .X2, {
        height: "auto",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_5__/* .Column */ .sg, {
          alignment: "center",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(SequenceRecipientRowPossibleFixAccessory, {
            recipient: recipient,
            variableName: invalidVariableName,
            suggestion: possibleFix,
            onClick: onClickFixRecipient
          })
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "3113475011",
      children: [".streak__sequence_recipient_row.jsx-3113475011{border-radius:2em;padding:0 12px;cursor:pointer;}", ".streak__sequence_recipient_row.jsx-3113475011 .streak_sequence_recipient_email.jsx-3113475011{color:var(--streak-black-secondary);}", ".streak__sequence_recipient_row.jsx-3113475011:hover{background-color:var(--streak-black-hover);}", ".streak__sequence_recipient_row.jsx-3113475011:hover .streak__sequence_recipient_actions_not_hovered.jsx-3113475011{display:none;}", ".streak__sequence_recipient_row.jsx-3113475011:hover .streak__sequence_recipient_actions_hovered.jsx-3113475011{display:block;}", ".streak__sequence_recipient_row_actions.jsx-3113475011{margin-right:-6px;}", ".streak__sequence_recipient_actions_not_hovered.jsx-3113475011{cursor:pointer;display:block;padding-right:24px;}", ".streak__sequence_recipient_actions_hovered.jsx-3113475011{cursor:pointer;display:none;}", ".streak__sequence_recipient_row.jsx-3113475011 .streak__sequence_recipient_row_action.jsx-3113475011{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}", ".streak__sequence_recipient_row_action_disabled.jsx-3113475011{cursor:not-allowed;color:var(--streak-black-disabled);}", ".streak__sequence_recipient_row_edit.jsx-3113475011{margin-left:0.3em;}", ".streak__sequence_recipient_row_action_errors.jsx-3113475011{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border:1px solid transparent;border-radius:1em;padding:0.1em 0.3em;}", ".streak__sequence_recipient_row_action_errors.warning.jsx-3113475011{background-color:var(--streak-warning-hover);color:var(--streak-warning-text);}", ".streak__sequence_recipient_row_action_errors.jsx-3113475011:hover{border:1px solid var(--streak-warning-onDark);}", ".streak__sequence_recipient_row_action_errors.jsx-3113475011 .recipient_errors_nb.jsx-3113475011{padding-left:0.3em;}", ".streak__sequence_recipient_row_accessories.jsx-3113475011{padding:0 48px 13px 48px;}", ".streak__sequence_recipient_row_wrapper.pos-last.jsx-3113475011 .streak__sequence_recipient_row_accessories.jsx-3113475011{padding-bottom:0;}"]
    })]
  });
}
const SequenceRecipientRowPossibleFixAccessory = props => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
    className: "jsx-4019516301" + " " + "streak__sequence_recipient_row_fix_accessory",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("span", {
      className: "jsx-4019516301",
      children: [_services_locale_locale__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.getString('suggested_fix'), "\xA0"]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
      onClick: () => {
        props.onClick(props.recipient, props.variableName, props.suggestion);
      },
      className: "jsx-4019516301" + " " + "mdl-link",
      children: props.suggestion
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "4019516301",
      children: [".streak__sequence_recipient_row_fix_accessory.jsx-4019516301{color:var(--streak-black-secondary);}", ".streak__sequence_recipient_row_fix_accessory.jsx-4019516301 .mdl-link.jsx-4019516301{font-weight:bold;}"]
    })]
  });
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2109:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: () => (/* binding */ SequenceRecipientRowEmailHistoryWarning)
/* harmony export */ });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81518);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35091);
/* harmony import */ var _widgets_react_material_button_streakButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22682);
/* harmony import */ var _lib_streakTimelineMoment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48726);
/* harmony import */ var _components_Icon_Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71174);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(59718);






function SequenceRecipientRowEmailHistoryWarning(_ref) {
  let {
    recipient,
    isLatestThreadByCurrentUser,
    mostRecentThreadDate,
    onHistoryClick
  } = _ref;
  if (mostRecentThreadDate === 0) {
    return null;
  }
  const body = _services_locale_locale__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.getString(isLatestThreadByCurrentUser ? 'sequence_you_emailed_date' : 'sequence_teammate_emailed_date', {
    time: (0,_lib_streakTimelineMoment__WEBPACK_IMPORTED_MODULE_3__/* .streakTimelineMoment */ .iw)(mostRecentThreadDate)
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: "jsx-3864562022" + " " + "container",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
      accent: "highlight",
      isOutline: true,
      name: "error_outline",
      variant: "inline",
      size: "ms"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
      className: "jsx-3864562022" + " " + "text_wrapper",
      children: body
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_widgets_react_material_button_streakButton__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP, {
      size: "xs",
      variant: "text",
      onClick: () => {
        onHistoryClick(recipient);
      },
      children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.getString('sequence_see_history')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "3864562022",
      children: [".container.jsx-3864562022{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".text_wrapper.jsx-3864562022{margin-left:4px;color:var(--streak-black-secondary);}"]
    })]
  });
}

/***/ }),

/***/ 66895:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ SequenceRecipientsTab)
/* harmony export */ });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81518);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _streakyc_common_core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77294);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44345);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(64219);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17013);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(47587);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_virtualized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(22862);
/* harmony import */ var kefir_stopper__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(94322);
/* harmony import */ var kefir_stopper__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(kefir_stopper__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var _components_Heading_Heading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(67565);
/* harmony import */ var _components_Icon_Icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(71174);
/* harmony import */ var _core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(72493);
/* harmony import */ var _lib_log_error__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7961);
/* harmony import */ var _lib_utils_isNotNil__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(72086);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(35091);
/* harmony import */ var _services_tracker_useTracker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(70989);
/* harmony import */ var _widgets_react_material_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(82792);
/* harmony import */ var _widgets_react_material_menu_menuButton__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(23304);
/* harmony import */ var _helpers_sequenceVariables__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(18730);
/* harmony import */ var _helpers_sendCopyDraft__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(15839);
/* harmony import */ var _SequenceCopyDraftModal__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(60335);
/* harmony import */ var _SequenceEditVariablesModal__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(79391);
/* harmony import */ var _SequenceRecipientRow__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(62123);
/* harmony import */ var _contexts_sequenceDetailsContext__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(88331);
/* harmony import */ var _contexts_sequenceDetailsRecipientsContext__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(4750);
/* harmony import */ var _contexts_sequenceDetailsRecipientsSourceContext__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(2275);
/* harmony import */ var _contexts_sequenceDetailsVariablesContext__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(29778);
/* harmony import */ var _helpers_sequenceRecipientsExtraction__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(31696);
/* harmony import */ var _helpers_variables__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(52704);
/* harmony import */ var _contexts_sequenceDetailsRecipientVariablesContext__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(91303);
/* harmony import */ var _hooks_sequenceActionsHooks__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(13893);
/* harmony import */ var _react_toolkit_hooks_useForceUpdate__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(10102);
/* harmony import */ var _react_query_utils__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(27758);
/* harmony import */ var _api_queries__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(55639);
/* harmony import */ var _widgets_react_material_tooltip_TooltipContainer__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(9112);
/* harmony import */ var _services_butterBarManager__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(99329);
/* harmony import */ var _contexts_sequenceRecipientsEmailHistoryContext__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(37686);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_9__, _helpers_sendCopyDraft__WEBPACK_IMPORTED_MODULE_16__, _SequenceEditVariablesModal__WEBPACK_IMPORTED_MODULE_18__, _SequenceRecipientRow__WEBPACK_IMPORTED_MODULE_19__, _contexts_sequenceDetailsRecipientsContext__WEBPACK_IMPORTED_MODULE_21__, _contexts_sequenceDetailsRecipientsSourceContext__WEBPACK_IMPORTED_MODULE_22__, _contexts_sequenceDetailsVariablesContext__WEBPACK_IMPORTED_MODULE_23__, _helpers_sequenceRecipientsExtraction__WEBPACK_IMPORTED_MODULE_24__, _contexts_sequenceDetailsRecipientVariablesContext__WEBPACK_IMPORTED_MODULE_26__, _api_queries__WEBPACK_IMPORTED_MODULE_30__, _contexts_sequenceRecipientsEmailHistoryContext__WEBPACK_IMPORTED_MODULE_33__]);
([_core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_9__, _helpers_sendCopyDraft__WEBPACK_IMPORTED_MODULE_16__, _SequenceEditVariablesModal__WEBPACK_IMPORTED_MODULE_18__, _SequenceRecipientRow__WEBPACK_IMPORTED_MODULE_19__, _contexts_sequenceDetailsRecipientsContext__WEBPACK_IMPORTED_MODULE_21__, _contexts_sequenceDetailsRecipientsSourceContext__WEBPACK_IMPORTED_MODULE_22__, _contexts_sequenceDetailsVariablesContext__WEBPACK_IMPORTED_MODULE_23__, _helpers_sequenceRecipientsExtraction__WEBPACK_IMPORTED_MODULE_24__, _contexts_sequenceDetailsRecipientVariablesContext__WEBPACK_IMPORTED_MODULE_26__, _api_queries__WEBPACK_IMPORTED_MODULE_30__, _contexts_sequenceRecipientsEmailHistoryContext__WEBPACK_IMPORTED_MODULE_33__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






































const getExtractionName = extr => {
  return extr.displayName || (extr.displayResName ? _services_locale_locale__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z.getString(extr.displayResName) : '');
};
const SequenceRecipientsTab = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.memo(_ref => {
  let {
    sequence,
    sequenceValidation,
    sequenceController
  } = _ref;
  const _track = (0,_services_tracker_useTracker__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .ZP)('sequenceRecipientsTabs');
  const queryClient = (0,react_query__WEBPACK_IMPORTED_MODULE_3__.useQueryClient)();
  const {
    mode
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_sequenceDetailsContext__WEBPACK_IMPORTED_MODULE_20__/* .SequenceDetailsContext */ .IJ);
  const [editVariablesPopup, setEditVariablesPopup] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
  const [previewPopup, setPreviewPopup] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
  const sequenceKey = sequence.key();
  const canRemoveRecipient = sequence.getStatus() === _core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_9__/* .SequenceStatus */ .ST.Draft || mode === _contexts_sequenceDetailsContext__WEBPACK_IMPORTED_MODULE_20__/* .SequenceDetailsMode */ .cG.AddingRecipients;
  const recipientToPreviewRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  const onRecipientToPreviewChanged = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => {
    const recipientToPreview = recipientToPreviewRef.current;
    sequenceController.previewRecipient(recipientToPreview);
    if (recipientToPreview) {
      _track('recipient.hoverPreview', {
        sequenceKey,
        recipientKey: recipientToPreview.key
      });
    }
  }, [_track, sequenceKey, sequenceController, recipientToPreviewRef]);
  const onRecipientEnter = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(recipient => {
    recipientToPreviewRef.current = recipient;
    onRecipientToPreviewChanged();
  }, [recipientToPreviewRef, onRecipientToPreviewChanged]);
  const onRecipientLeave = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(recipient => {
    const prevRecipient = recipientToPreviewRef.current;
    recipientToPreviewRef.current = !prevRecipient || prevRecipient?.key === recipient.key ? null : recipient;
    onRecipientToPreviewChanged();
  }, [recipientToPreviewRef, onRecipientToPreviewChanged]);
  const actionsOptimized = (0,_hooks_sequenceActionsHooks__WEBPACK_IMPORTED_MODULE_27__/* .useSequenceActionsOptimized */ .B)(sequence);
  const {
    savedRecipientsReady,
    recipients,
    deleteRecipients
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_sequenceDetailsRecipientsContext__WEBPACK_IMPORTED_MODULE_21__/* .SequenceDetailsRecipientsContext */ .j);
  const {
    standardVariablesMap
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_sequenceDetailsVariablesContext__WEBPACK_IMPORTED_MODULE_23__/* .SequenceDetailsVariablesContext */ .c);
  const {
    setVariableValuesToRecipients
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_sequenceDetailsRecipientVariablesContext__WEBPACK_IMPORTED_MODULE_26__/* .SequenceDetailsRecipientVariablesContext */ .S);
  const sourceCtx = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_sequenceDetailsRecipientsSourceContext__WEBPACK_IMPORTED_MODULE_22__/* .SequenceDetailsRecipientsSourceContext */ .uq);
  const extractionInProgress = sourceCtx?.isExtracting || false;
  const isAllColumnsExtractionSelected = !!sourceCtx?.extractions.find(e => e.key === _helpers_sequenceRecipientsExtraction__WEBPACK_IMPORTED_MODULE_24__/* .EXTRACTION_PIPELINE_ALLCOLUMNS */ .o4.key);
  const lastExtractionDebugInfo = sourceCtx?.lastExtractionDebugInfo;
  const lastExtractionError = lastExtractionDebugInfo?.error;

  // usedVariables are used for edit variables modal,
  // this list should not hold any alternative variable names,
  // so we normalize variables used in all seq actions
  const usedVariables = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => (0,_helpers_variables__WEBPACK_IMPORTED_MODULE_25__/* .replaceAlternativeVariableNames */ .u3)((0,_helpers_sequenceVariables__WEBPACK_IMPORTED_MODULE_15__/* .getSequenceVariables */ .f)(actionsOptimized), standardVariablesMap), [actionsOptimized, standardVariablesMap]);
  const handleSendPreviewRecipient = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async recipient => {
    const isPlainTextMode = sequenceController.getSequenceComposeController()?.isPlainText;
    if (isPlainTextMode) {
      _services_butterBarManager__WEBPACK_IMPORTED_MODULE_32__.ButterBarManager.showError(_services_locale_locale__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z.getString('mm_error_plain_text_draft'));
      return;
    }
    const draftIds = actionsOptimized.map(action => action.data.draftId).filter(_lib_utils_isNotNil__WEBPACK_IMPORTED_MODULE_35__/* ["default"] */ .Z);
    const templateValues = recipient.templateValues;
    const recipientEmail = recipient.emails[0];
    try {
      const {
        threadId
      } = await (0,_helpers_sendCopyDraft__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z)({
        draftIds,
        templateValues
      });
      setPreviewPopup({
        threadId,
        recipient
      });
    } catch (error) {
      (0,_lib_log_error__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .ZP)({
        err: new Error(error.message),
        details: {
          recipientEmail
        },
        level: 'error'
      });
    }
  }, [actionsOptimized, sequenceController]);
  const handleEditRecipient = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((recipient, variables) => {
    const variablesToEdit = variables && variables.length > 0 ? variables : usedVariables;
    if (variablesToEdit.length !== 0) {
      setEditVariablesPopup({
        mode: variables && variables.length > 0 ? 'fix' : 'edit',
        variables: variablesToEdit,
        recipients: [recipient]
      });
    }
  }, [usedVariables]);
  const handleRemoveRecipient = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(recipient => {
    deleteRecipients([recipient.key]);
  }, [deleteRecipients]);
  const handleGoToRecipient = recipient => {
    _streakyc_common_core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_1__.inboxSDK.Router.goto('streak/contact/:key', {
      key: recipient.contactKey ? recipient.contactKey : recipient.emails[0]
    });
  };
  const handleSave = async () => {
    setEditVariablesPopup(null);
    (0,_react_query_utils__WEBPACK_IMPORTED_MODULE_29__/* .scopeInfiniteQueryClientWithKey */ .gc)(queryClient, _api_queries__WEBPACK_IMPORTED_MODULE_30__/* .SEQUENCE_RECIPIENTS_QUERY_DEF */ .xP, {
      sequenceKey: sequence.key()
    }).refetchQueries();
  };
  const applyVariableValueToRecipient = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((recipient, variableName, variableValue) => {
    const newValues = {
      [variableName]: variableValue
    };
    setVariableValuesToRecipients([recipient], {
      [recipient.key]: newValues
    }, {
      updateEntity: true
    });
  }, [setVariableValuesToRecipients]);
  const invalidVariables = sequenceValidation.invalidVariables;
  const recipientsWithMissingVars = react__WEBPACK_IMPORTED_MODULE_2__.useMemo(() => {
    const result = {};
    invalidVariables.forEach(invalidVar => invalidVar.recipients.forEach(r => {
      if (!result[r.key]) {
        result[r.key] = [];
      }
      result[r.key].push(invalidVar.variableName);
    }));
    return result;
  }, [invalidVariables]);
  const onFixAll = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(invalidVar => {
    if (invalidVar.recipients.length > 0) {
      setEditVariablesPopup({
        mode: 'fix',
        variables: [invalidVar.variableName],
        recipients: invalidVar.recipients
      });
    }
  }, [setEditVariablesPopup]);
  const haveSourcePicker = sourceCtx && sourceCtx.availExtractions.length !== 0;
  const [isPlainText, setIsPlainText] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(() => sequenceController.getSequenceComposeController()?.isPlainText ?? false);
  const isPreviewDisabled = isPlainText ?? false;
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    const stopper = kefir_stopper__WEBPACK_IMPORTED_MODULE_36___default()();
    sequenceController.getSequenceComposeController()?.getIsPlainTextChangeStream().takeUntilBy(stopper).onValue(val => {
      setIsPlainText(val);
    });
    return () => {
      stopper.destroy();
    };
  }, [sequenceController]);
  const rows = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    const headingMarginFirst = '0 0 11px 0';
    const headingMarginNonFirst = '26px 0 11px 0';
    const result = [];
    if (haveSourcePicker) {
      result.push(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(SequenceRecipientsSourcePicker, {}));
    }
    if (!extractionInProgress) {
      invalidVariables.forEach(invalidVar => {
        result.push(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(SequenceInvalidVariableSectionHeader, {
          margin: result.length === 0 ? headingMarginFirst : headingMarginNonFirst,
          standardVariablesMap: standardVariablesMap,
          invalidVar: invalidVar,
          onFixAll: onFixAll
        }));
        invalidVar.recipients.forEach((recipient, index) => {
          const possibleFixes = invalidVar.possibleFixes[recipient.key];
          result.push(() => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_SequenceRecipientRow__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .ZP, {
            isFirst: index === 0,
            isLast: index === invalidVar.recipients.length - 1,
            isPreviewDisabled: isPreviewDisabled,
            onPreviewRecipient: handleSendPreviewRecipient,
            onEditRecipient: handleEditRecipient,
            onRemoveRecipient: canRemoveRecipient ? handleRemoveRecipient : undefined,
            recipient: recipient,
            missingVariables: recipientsWithMissingVars[recipient.key],
            accessoryType: _SequenceRecipientRow__WEBPACK_IMPORTED_MODULE_19__/* .SequenceRecipientRowAccessoryType */ .yy.POSSIBLE_FIX,
            invalidVariableName: invalidVar.variableName,
            possibleFix: possibleFixes && possibleFixes.length > 0 ? possibleFixes[0] : undefined,
            onClickFixRecipient: applyVariableValueToRecipient,
            onMouseEnter: onRecipientEnter,
            onMouseLeave: onRecipientLeave
          }));
        });
      });
      if (recipients.length > 0 || !isAllColumnsExtractionSelected) {
        // if at least one recipient available or it is possible to change extraction columns
        result.push(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_components_Heading_Heading__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
          size: "h3",
          margin: result.length === 0 ? headingMarginFirst : headingMarginNonFirst,
          children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z.getString('all_recipients')
        }));
      }
      let msgRowAdded = false;
      if (recipients.length == 0 && !isAllColumnsExtractionSelected && lastExtractionDebugInfo && lastExtractionDebugInfo.recipientsSkipped.length === 0) {
        // if no recipients extracted, none were skipped and possible to change extraction
        result.push(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(SequenceMsgRow, {
          icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
            name: "warning_amber",
            size: "m",
            variant: "outline",
            accent: "highlight"
          }),
          text: _services_locale_locale__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z.getArray('sequence_recipients_found_can_change_extraction', {
            found: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)("b", {
              children: "0"
            })
          })
        }));
        msgRowAdded = true;
      }
      if (lastExtractionDebugInfo && lastExtractionDebugInfo.recipientsSkipped.length > 0) {
        // if at least one email was skipped, also
        // propose to change dropdown if all emails were skipped
        const proposeToChangeExtractionColumns = !isAllColumnsExtractionSelected && lastExtractionDebugInfo.recipientsExtracted === lastExtractionDebugInfo.recipientsSkipped.length;
        result.push(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(SequenceMsgRow, {
          icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
            name: "error_outline",
            size: "m",
            variant: "outline",
            accent: "muted"
          }),
          text: _services_locale_locale__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z.getArray(proposeToChangeExtractionColumns ? 'sequence_recipients_skipped_can_change_extraction' : 'sequence_recipients_skipped', {
            total: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)("b", {
              children: lastExtractionDebugInfo.recipientsExtracted
            }),
            skipped: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_widgets_react_material_tooltip_TooltipContainer__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .Z, {
              style: {
                display: 'inline'
              },
              tooltip: lastExtractionDebugInfo.recipientsSkipped.map((r, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)("div", {
                children: r.emails[0]
              }, i)),
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)("b", {
                children: lastExtractionDebugInfo.recipientsSkipped.length
              })
            })
          })
        }));
        msgRowAdded = true;
      }
      recipients.forEach((recipient, index) => {
        result.push(() => {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_SequenceRecipientRow__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .ZP, {
            isFirst: index === 0 && !msgRowAdded,
            isLast: index === recipients.length - 1,
            isPreviewDisabled: isPreviewDisabled,
            onPreviewRecipient: handleSendPreviewRecipient,
            onEditRecipient: handleEditRecipient,
            onRemoveRecipient: canRemoveRecipient ? handleRemoveRecipient : undefined,
            accessoryType: _SequenceRecipientRow__WEBPACK_IMPORTED_MODULE_19__/* .SequenceRecipientRowAccessoryType */ .yy.EMAIL_SUMMARY,
            onHistoryClick: handleGoToRecipient,
            recipient: recipient,
            missingVariables: recipientsWithMissingVars[recipient.key],
            onMouseEnter: onRecipientEnter,
            onMouseLeave: onRecipientLeave
          });
        });
      });
    }
    return result;
  }, [haveSourcePicker, extractionInProgress, invalidVariables, recipients, isAllColumnsExtractionSelected, lastExtractionDebugInfo, standardVariablesMap, onFixAll, isPreviewDisabled, handleSendPreviewRecipient, handleEditRecipient, canRemoveRecipient, handleRemoveRecipient, recipientsWithMissingVars, applyVariableValueToRecipient, onRecipientEnter, onRecipientLeave]);
  const cache = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => new react_virtualized__WEBPACK_IMPORTED_MODULE_6__/* .CellMeasurerCache */ .t1({
    fixedHeight: false
  }), []);
  const forceUpdate = (0,_react_toolkit_hooks_useForceUpdate__WEBPACK_IMPORTED_MODULE_28__/* .useForceUpdate */ .N)();
  const {
    update
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_sequenceRecipientsEmailHistoryContext__WEBPACK_IMPORTED_MODULE_33__/* .SequenceRecipientsEmailHistoryContext */ .V);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    cache.clearAll();
    forceUpdate();
  }, [forceUpdate, cache, invalidVariables, recipients, lastExtractionDebugInfo, isAllColumnsExtractionSelected, update]);
  const rowRenderer = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(_ref2 => {
    let {
      key,
      index,
      parent,
      style
    } = _ref2;
    const content = rows[index];
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(react_virtualized__WEBPACK_IMPORTED_MODULE_6__/* .CellMeasurer */ .Z8, {
      cache: cache,
      columnIndex: 0,
      rowIndex: index,
      parent: parent,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)("div", {
        style: style,
        children: (0,lodash__WEBPACK_IMPORTED_MODULE_4__.isFunction)(content) ? content() : content
      })
    }, key);
  }, [cache, rows]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)("div", {
    className: "jsx-2560170400" + " " + "streak__sequence_recipients_tab",
    children: [editVariablesPopup && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_SequenceEditVariablesModal__WEBPACK_IMPORTED_MODULE_18__/* .SequenceEditVariablesModal */ .sM, {
      mode: editVariablesPopup.mode,
      recipients: editVariablesPopup.recipients,
      variables: editVariablesPopup.variables,
      onCancel: () => setEditVariablesPopup(null),
      onSave: handleSave
    }), previewPopup && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_SequenceCopyDraftModal__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
      onClose: () => setPreviewPopup(null),
      recipient: previewPopup.recipient,
      threadId: previewPopup.threadId
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(react_virtualized__WEBPACK_IMPORTED_MODULE_6__/* .AutoSizer */ .qj, {
      children: _ref3 => {
        let {
          height
        } = _ref3;
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)("div", {
          style: {
            height
          },
          className: "jsx-2560170400",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(react_virtualized__WEBPACK_IMPORTED_MODULE_6__/* .List */ .aV, {
            width: 452,
            height: height,
            rowCount: rows.length,
            rowHeight: cache.rowHeight,
            rowRenderer: rowRenderer,
            overscanRowCount: 10,
            style: {
              padding: '16px 8px 16px 16px'
            }
          })
        });
      }
    }), !extractionInProgress && lastExtractionDebugInfo && isAllColumnsExtractionSelected && lastExtractionDebugInfo.recipientsSkipped.length === 0 && !lastExtractionError && savedRecipientsReady && recipients.length === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)("div", {
      className: "jsx-2560170400" + " " + (classnames__WEBPACK_IMPORTED_MODULE_5___default()('streak__sequence_recipients_section', {
        first: rows.length === 0
      }) || ""),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)("div", {
        className: "jsx-2560170400" + " " + "streak__drawer_warning",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
          size: "xl",
          name: "info_outline",
          accent: "inherit",
          variant: "outline"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)("div", {
          className: "jsx-2560170400" + " " + "streak__drawer_warning_text",
          children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z.getString('no_recipients_from')
        })]
      })
    }), !extractionInProgress && lastExtractionError && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)("div", {
      className: "jsx-2560170400" + " " + (classnames__WEBPACK_IMPORTED_MODULE_5___default()('streak__sequence_recipients_section', {
        first: rows.length === 0
      }) || ""),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)("div", {
        className: "jsx-2560170400" + " " + "streak__drawer_warning",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
          size: "xl",
          name: "report_problem",
          accent: "inherit",
          variant: "outline"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)("div", {
          className: "jsx-2560170400" + " " + "streak__drawer_warning_text",
          children: lastExtractionError.type === 'api' ? lastExtractionError.error.message : _services_locale_locale__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z.getString('error_unknown')
        })]
      })
    }), !extractionInProgress && !savedRecipientsReady && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)("div", {
      className: "jsx-2560170400" + " " + (classnames__WEBPACK_IMPORTED_MODULE_5___default()('streak__sequence_recipients_section', {
        first: rows.length === 0
      }) || ""),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)("div", {
        className: "jsx-2560170400" + " " + "streak__drawer_warning",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
          size: "xl",
          name: "hourglass_empty",
          accent: "inherit",
          variant: "outline"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)("div", {
          className: "jsx-2560170400" + " " + "streak__drawer_warning_text",
          children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z.getString('notice_loading')
        })]
      })
    }), extractionInProgress && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)("div", {
      className: "jsx-2560170400" + " " + (classnames__WEBPACK_IMPORTED_MODULE_5___default()('streak__sequence_recipients_section', {
        first: rows.length === 0
      }) || ""),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)("div", {
        className: "jsx-2560170400" + " " + "streak__drawer_warning",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
          size: "xl",
          name: "hourglass_empty",
          accent: "inherit",
          variant: "outline"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)("div", {
          className: "jsx-2560170400" + " " + "streak__drawer_warning_text",
          children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z.getString('pulling_recipients')
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "2560170400",
      children: [".streak__sequence_recipients_tab.jsx-2560170400{height:100%;border-radius:4px;box-sizing:border-box;color:var(--streak-black-primary);font-family:Roboto;font-size:var(--streak-text-size-14);font-style:normal;font-weight:normal;-webkit-letter-spacing:0.5px;-moz-letter-spacing:0.5px;-ms-letter-spacing:0.5px;letter-spacing:0.5px;margin:0;overflow:hidden;}", ".streak__sequence_recipients_section.jsx-2560170400:not(.first){padding-top:26px;}", ".streak__sequence_recipients_tab.jsx-2560170400 .streak__drawer_warning.jsx-2560170400{text-align:center;}", ".streak__drawer_warning_text.jsx-2560170400{margin-top:4px;}"]
    })]
  });
});
const SequenceRecipientsSourcePicker = () => {
  const _track = (0,_services_tracker_useTracker__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .ZP)('sequenceRecipientsTabs');
  const sourceCtx = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_sequenceDetailsRecipientsSourceContext__WEBPACK_IMPORTED_MODULE_22__/* .SequenceDetailsRecipientsSourceContext */ .uq);
  if (!sourceCtx || sourceCtx.availExtractions.length === 0) {
    return null;
  }
  const extractionInProgress = sourceCtx.isExtracting;
  const selected = sourceCtx.extractions;
  // Although IncludeTeammates is included with the other "extraction" sources, it does not
  // represent a column that is being extracted from, but instead affects how other columns are
  // extracted from.
  // The below button shows "# of columns selected", so although we do show the "IncludeTeammates"
  // toggle in the menu spawned from the button, it is not a "column", and we therefore shouldn't
  // consider it when determining the "# of columns selected" text.
  const selectedColumns = sourceCtx.extractions.filter(_ref4 => {
    let {
      type
    } = _ref4;
    return type !== _helpers_sequenceRecipientsExtraction__WEBPACK_IMPORTED_MODULE_24__/* .SequencePipelineRecipientsExtractionType */ .Lo.IncludeTeammates;
  });
  const availExtractionsGroups = (0,lodash__WEBPACK_IMPORTED_MODULE_4__.groupBy)(sourceCtx.availExtractions, e => e.groupName);
  const availExtractionsGroupKeys = Object.keys(availExtractionsGroups);
  const button = _ref5 => {
    let {
      domRef,
      ...menuButtonProps
    } = _ref5;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)("span", {
      ...menuButtonProps,
      ref: domRef,
      tabIndex: 0,
      onClick: () => _track('button.click'),
      className: "jsx-2031175433" + " " + "streak__sequence_source_menu",
      children: [selectedColumns.length === 0 && _services_locale_locale__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z.getString('no_column_selected'), selectedColumns.length === 1 && getExtractionName(selectedColumns[0]), selectedColumns.length > 1 && _services_locale_locale__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z.getString('number_columns_selected', {
        number: selectedColumns.length
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)("div", {
        className: "jsx-2031175433" + " " + "streak__sequence_source_menu_icon_wrapper",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
          isOutline: true,
          variant: "text",
          name: "expand_more"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
        id: "2031175433",
        children: [".streak__sequence_source_menu.jsx-2031175433{font-weight:bold;cursor:pointer;color:var(--streak-app-primary);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-left:6px;}", ".streak__sequence_source_menu_icon_wrapper.jsx-2031175433{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;}"]
      })]
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)("div", {
    className: "jsx-94501664" + " " + "streak__squence_source_wrapper",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)("div", {
      className: "jsx-94501664" + " " + "streak__squence_source",
      children: [_services_locale_locale__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z.getString('pulling_recipients_from'), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_widgets_react_material_menu_menuButton__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
        ButtonComponent: button,
        disabled: extractionInProgress,
        menu: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_widgets_react_material_menu__WEBPACK_IMPORTED_MODULE_13__/* .Dropdown */ .Lt, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_widgets_react_material_menu__WEBPACK_IMPORTED_MODULE_13__/* .MenuList */ .qy, {
            children: availExtractionsGroupKeys.map((g, gIndex, allGroups) => {
              const labelKey = _helpers_sequenceRecipientsExtraction__WEBPACK_IMPORTED_MODULE_24__/* .EXTRACTION_GROUPING_RES_NAMES */ .DP[g];
              const groupLabel = labelKey ? _services_locale_locale__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z.getString(labelKey) : '';
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
                children: [groupLabel && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)("div", {
                  className: "jsx-94501664" + " " + "mdl-menu__header",
                  children: groupLabel
                }), availExtractionsGroups[g].map(extr => {
                  if (extr.type === _helpers_sequenceRecipientsExtraction__WEBPACK_IMPORTED_MODULE_24__/* .SequencePipelineRecipientsExtractionType */ .Lo.IncludeTeammates) {
                    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_widgets_react_material_menu__WEBPACK_IMPORTED_MODULE_13__/* .ToggleItem */ .HP, {
                      checked: !!selected.find(e => e.key === extr.key),
                      disabled: extractionInProgress,
                      onItemChosen: checked => {
                        if (checked) {
                          _track(`sourceMenu.${extr.key}`);
                        }
                        sourceCtx.toggleExtraction(extr, checked);
                      },
                      materialIconName: "business",
                      style: {
                        height: '40px'
                      },
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)("div", {
                        className: "jsx-94501664" + " " + "streak__include-team-toggle",
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)("div", {
                          className: "jsx-94501664",
                          children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z.getString('internal_recipients')
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)("div", {
                          className: "jsx-94501664" + " " + "streak__include-team-toggle--secondary",
                          children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z.getString('include_from_my_domain')
                        })]
                      })
                    }, extr.key);
                  } else {
                    const isMagic = extr.type === _helpers_sequenceRecipientsExtraction__WEBPACK_IMPORTED_MODULE_24__/* .SequencePipelineRecipientsExtractionType */ .Lo.NonContactColumn && extr.meta.isMagic;
                    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(_widgets_react_material_menu__WEBPACK_IMPORTED_MODULE_13__/* .CheckboxItem */ .oC, {
                      checked: !!selected.find(e => e.key === extr.key),
                      disabled: extractionInProgress,
                      onItemChosen: async checked => {
                        if (checked) {
                          _track(`sourceMenu.${extr.key}`);
                        }
                        sourceCtx.toggleExtraction(extr, checked);
                      },
                      children: [getExtractionName(extr), isMagic && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)("span", {
                        className: "jsx-94501664" + " " + "streak__column_icon_wrapper",
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                          name: "magic",
                          accent: "inherit",
                          variant: "outline",
                          size: "ms"
                        })
                      })]
                    }, extr.key);
                  }
                }), gIndex !== allGroups.length - 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)("hr", {
                  className: "jsx-94501664"
                }, "teamSharingDivider")]
              }, g);
            })
          })
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "94501664",
      children: [".streak__squence_source_wrapper.jsx-94501664{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin:10px 26px 0 16px;}", ".streak__squence_source.jsx-94501664{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;padding:8px 0;background-color:var(--streak-solid-black-surface);border:1px solid var(--streak-solid-black-divider);border-radius:8px;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}", ".streak__include-team-toggle.jsx-94501664{line-height:normal;}", ".streak__include-team-toggle--secondary.jsx-94501664{color:var(--streak-black-secondary);font-size:var(--streak-text-size-13);}", ".streak__column_icon_wrapper.jsx-94501664{margin-left:5px;vertical-align:middle;}"]
    })]
  });
};
const SequenceInvalidVariableSectionHeader = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.memo(_ref6 => {
  let {
    margin,
    standardVariablesMap,
    invalidVar,
    onFixAll
  } = _ref6;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)("div", {
    className: "jsx-4083445201" + " " + "streak__sequence_recipients_error_header",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_components_Heading_Heading__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
      size: "h3",
      margin: margin,
      children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z.getString('sequence_missing_variable', {
        name: standardVariablesMap[invalidVar.variableName]?.displayText || invalidVar.variableName
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)("div", {
      onClick: () => onFixAll(invalidVar),
      className: "jsx-4083445201" + " " + "streak__sequence_recipients_error_header_fix_all",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_components_Heading_Heading__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        color: 'var(--streak-warning-text)',
        size: "h3",
        margin: margin,
        children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z.getString('fix_all')
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "4083445201",
      children: [".streak__sequence_recipients_error_header.jsx-4083445201{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}", ".streak__sequence_recipients_error_header_fix_all.jsx-4083445201{cursor:pointer;margin-right:32px;}"]
    })]
  });
});
function SequenceMsgRow(_ref7) {
  let {
    icon,
    text
  } = _ref7;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)("div", {
    className: "jsx-4227071996" + " " + "streak__jsx__msg_row_wrapper",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)("div", {
      className: "jsx-4227071996" + " " + "streak__jsx__msg_row",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)("div", {
        className: "jsx-4227071996" + " " + "streak__jsx__msg_row_icon",
        children: icon
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)("div", {
        className: "jsx-4227071996" + " " + "streak__jsx__msg_row_text",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)("span", {
          className: "jsx-4227071996",
          children: text
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "4227071996",
      children: [".streak__jsx__msg_row.jsx-4227071996{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:0 6px 13px 6px;}", ".streak__jsx__msg_row_icon.jsx-4227071996{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}", ".streak__jsx__msg_row_text.jsx-4227071996{margin:0 42px 0 14px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}"]
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 21705:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ DelayItem)
/* harmony export */ });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81518);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns_tz__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4153);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44345);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17013);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Icon_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71174);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(35091);
/* harmony import */ var _services_tracker_useTracker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(70989);
/* harmony import */ var _widgets_react_material_menu_menuButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(23304);
/* harmony import */ var _widgets_react_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(82792);
/* harmony import */ var _ItemTemplate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(64129);
/* harmony import */ var _helpers_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9873);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(59718);












function DelayItem(props) {
  const _track = (0,_services_tracker_useTracker__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP)('advancedDelayItem');
  const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.defaultValue);
  const {
    onValueChange
  } = props;
  const handleDayDelayChanged = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(value => {
    _track('advancedDelayChanged', value);
    setValue(value);
    onValueChange(value);
  }, [_track, onValueChange]);
  switch (value.unit) {
    case 'SECONDS':
      {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(TimeoutDelayItem, {
          value: value
        });
      }
    case 'DAYS':
    case 'BUSINESS_DAYS':
    case 'WEEKS':
      {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(DayDelayItem, {
          currentValue: value,
          onDelayChange: handleDayDelayChanged,
          disabled: !!props.disabled
        });
      }
  }
}
function DayDelayItem(props) {
  const _track = (0,_services_tracker_useTracker__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP)('dayDelayItem');
  const {
    currentValue,
    onDelayChange
  } = props;
  const handleQuantityChanged = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(quantity => {
    _track('quantityChange', {
      quantity
    });
    const newValue = {
      ...currentValue,
      quantity
    };
    onDelayChange(newValue);
  }, [_track, onDelayChange, currentValue]);
  const handleUnitChanged = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(unit => {
    _track('unitChange', {
      unit
    });
    const newValue = {
      ...currentValue,
      unit
    };
    if (unit === 'SECONDS') {
      onDelayChange({
        unit: newValue.unit,
        quantity: newValue.quantity
      });
    } else {
      onDelayChange(newValue);
    }
  }, [_track, onDelayChange, currentValue]);
  const handleTimeChanged = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((hour, minute) => {
    _track('timeChange', {
      hour,
      minute
    });
    const newValue = {
      ...currentValue,
      hour,
      minute
    };
    onDelayChange(newValue);
  }, [_track, onDelayChange, currentValue]);
  const titleEle = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
    className: "jsx-3572307449" + " " + "streak__sequence_advanced_delay_item",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
      className: "jsx-3572307449" + " " + "streak__sequence_advanced_delay_item_block",
      children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('if_no_reply_wait')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
      className: "jsx-3572307449" + " " + "streak__sequence_advanced_delay_item_block streak__block_interactive",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(QuantityMenuButton, {
        value: currentValue.quantity,
        onValueChange: handleQuantityChanged,
        disabled: props.disabled,
        type: currentValue.unit
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
      className: "jsx-3572307449" + " " + "streak__sequence_advanced_delay_item_block streak__block_interactive",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(UnitMenuButton, {
        quantity: currentValue.quantity,
        value: currentValue.unit,
        onValueChange: handleUnitChanged,
        disabled: props.disabled
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
      className: "jsx-3572307449" + " " + "streak__sequence_advanced_delay_item_block",
      children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('date_at_time')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
      className: "jsx-3572307449" + " " + "streak__sequence_advanced_delay_item_block streak__block_interactive",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(TimeMenuButton, {
        hour: currentValue.hour,
        minute: currentValue.minute,
        timezoneId: currentValue.timezone,
        onTimeChange: handleTimeChanged,
        disabled: props.disabled
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "3572307449",
      children: [".streak__sequence_advanced_delay_item.jsx-3572307449{font-weight:normal;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:baseline;-webkit-box-align:baseline;-ms-flex-align:baseline;align-items:baseline;}", ".streak__sequence_advanced_delay_item_block.jsx-3572307449:not(:first-child){margin-left:6px;}", ".streak__sequence_advanced_delay_item_block.streak__block_interactive.jsx-3572307449{margin-left:4px;}", ".streak__sequence_delay_quantity_menu.mdl-dropdown-container.mdl{min-width:110px;}", ".streak__sequence_delay_unit_menu.mdl-dropdown-container.mdl{min-width:200px;}"]
    })]
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_ItemTemplate__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
    title: titleEle,
    iconProps: {
      name: 'timer',
      accent: 'muted',
      isOutline: true
    },
    disabled: true
  });
}
// These are considered "legacy" style delays and included to support old sequences. They are not configurable.
function TimeoutDelayItem(props) {
  const durationLocalKey = _helpers_constants__WEBPACK_IMPORTED_MODULE_9__/* .DELAY_OPTIONS */ .$m.find(opt => opt.value === props.value.quantity)?.localeKey;
  const duration = durationLocalKey ? _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString(durationLocalKey) : _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('number_seconds', {
    number: props.value.quantity
  });
  const titleEle = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
    className: "jsx-2402758914" + " " + "streak__sequence_timeout_delay_item",
    children: [_services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('wait'), "\xA0", duration, "\xA0", _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('if_no_reply_then'), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "2402758914",
      children: [".streak__sequence_timeout_delay_item.jsx-2402758914{font-weight:normal;line-height:24px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:baseline;-webkit-box-align:baseline;-ms-flex-align:baseline;align-items:baseline;}"]
    })]
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_ItemTemplate__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
    title: titleEle,
    iconProps: {
      name: 'timer',
      accent: 'muted',
      isOutline: true
    },
    disabled: true
  });
}
function QuantityMenuButton(props) {
  const _track = (0,_services_tracker_useTracker__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP)('advancedDelayItem_quantityMenu');
  const options = [];
  let maxQuantity = 1;
  switch (props.type) {
    case 'DAYS':
      {
        maxQuantity = 29;
        break;
      }
    case 'BUSINESS_DAYS':
      {
        maxQuantity = 18;
        break;
      }
    case 'WEEKS':
      {
        maxQuantity = 25;
        break;
      }
    default:
      {
        maxQuantity = 1;
        break;
      }
  }
  for (let i = 1; i <= maxQuantity; i++) {
    options.push({
      value: i,
      label: '' + i
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(InlineMenu, {
    className: "streak__sequence_delay_quantity_menu",
    track: _track,
    options: options,
    currentValue: props.value,
    onItemChosen: props.onValueChange,
    disabled: props.disabled
  });
}
function UnitMenuButton(props) {
  const _track = (0,_services_tracker_useTracker__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP)('advancedDelayItem_unitMenu');
  const menuOptions = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    const secondDelayItem = {
      value: 'SECONDS',
      label: (0,lodash__WEBPACK_IMPORTED_MODULE_2__.capitalize)(_services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('seconds')),
      selectedLabel: _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('seconds')
    };
    const dayDelayItems = [{
      value: 'DAYS',
      label: (0,lodash__WEBPACK_IMPORTED_MODULE_2__.capitalize)(_services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('day_days', {
        pluralize: [props.quantity]
      })),
      selectedLabel: _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('day_days', {
        pluralize: [props.quantity]
      })
    }, {
      value: 'BUSINESS_DAYS',
      label: (0,lodash__WEBPACK_IMPORTED_MODULE_2__.capitalize)(_services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('business_day_days', {
        pluralize: [props.quantity]
      })),
      selectedLabel: _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('business_day_days', {
        pluralize: [props.quantity]
      })
    }, {
      value: 'WEEKS',
      label: (0,lodash__WEBPACK_IMPORTED_MODULE_2__.capitalize)(_services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('week_weeks', {
        pluralize: [props.quantity]
      })),
      selectedLabel: _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('week_weeks', {
        pluralize: [props.quantity]
      })
    }];
    const delays = localStorage.getItem('streak__admin_use_seconds_delay') === 'true' ? [...dayDelayItems, secondDelayItem] : dayDelayItems;
    return delays;
  }, [props.quantity]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(InlineMenu, {
    className: "streak__sequence_delay_unit_menu",
    track: _track,
    options: menuOptions,
    currentValue: props.value,
    onItemChosen: props.onValueChange,
    disabled: props.disabled
  });
}
function timeToLabel(time, short) {
  let ampm = 'am';
  if (time.hour >= 12) {
    ampm = 'pm';
  }

  // Convert hour to 12-hour clock
  let hour = time.hour;
  if (hour > 12) {
    hour = hour - 12;
  }
  if (hour === 0) {
    hour = 12;
  }
  if (short && time.minute === 0) {
    return `${hour}${ampm}`;
  } else {
    const minuteStr = time.minute.toString().padStart(2, '0');
    return `${hour}:${minuteStr}${ampm}`;
  }
}
const RANGE_MINUTES = 15;
function timeToRangeLabel(time, timezoneAbbr) {
  const startHour = time.hour;
  const startMinute = time.minute;
  let endHour = startHour;
  let endMinute = startMinute + RANGE_MINUTES;
  if (endMinute > 59) {
    endMinute -= 60;
    endHour += 1;
    if (endHour === 24) {
      endHour = 0;
    }
  }
  const startTime = timeToLabel({
    hour: startHour,
    minute: startMinute
  }, false);
  const endTime = timeToLabel({
    hour: endHour,
    minute: endMinute
  }, false);
  return _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('time_range_between_with_timezone', {
    start: startTime,
    end: endTime,
    timezone: timezoneAbbr
  });
}
function timeToValue(time) {
  const hourString = time.hour.toString().padStart(2, '0');
  const minuteString = time.minute.toString().padStart(2, '0');
  // HH:MM
  return hourString + ':' + minuteString;
}
function valueToTime(value) {
  const [hourStr, minuteStr] = value.split(':');
  return {
    hour: parseInt(hourStr),
    minute: parseInt(minuteStr)
  };
}
function TimeMenuButton(props) {
  const _track = (0,_services_tracker_useTracker__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP)('advancedDelayItem_timeMenu');
  const {
    timezoneId
  } = props;
  const options = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    const tzAbbr = (0,date_fns_tz__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)(new Date(), 'z', {
      timeZone: timezoneId || undefined
    }); // "PDT"
    const result = [];
    for (let hour = 0; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += RANGE_MINUTES) {
        result.push({
          value: timeToValue({
            hour,
            minute
          }),
          label: timeToRangeLabel({
            hour,
            minute
          }, tzAbbr),
          selectedLabel: timeToLabel({
            hour,
            minute
          }, true)
        });
      }
    }
    return result;
  }, [timezoneId]);
  const currentValue = timeToValue({
    hour: props.hour,
    minute: props.minute
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(InlineMenu, {
    track: _track,
    options: options,
    currentValue: currentValue,
    onItemChosen: value => {
      const parsed = valueToTime(value);
      _track('timeChanged', parsed);
      props.onTimeChange(parsed.hour, parsed.minute);
    },
    disabled: props.disabled
  });
}
function InlineMenu(_ref) {
  let {
    className,
    track: _track,
    options,
    currentValue,
    onItemChosen,
    disabled
  } = _ref;
  const selectedOption = options.find(option => option.value === currentValue);
  const button = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(_ref2 => {
    let {
      domRef,
      ...menuButtonProps
    } = _ref2;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("span", {
      ...menuButtonProps,
      onKeyPress: menuButtonProps.disabled ? undefined : menuButtonProps.onKeyPress,
      onMouseDown: menuButtonProps.disabled ? undefined : menuButtonProps.onMouseDown,
      ref: domRef,
      tabIndex: 0,
      onClick: () => _track('button.click'),
      className: "jsx-1094296421" + " " + "streak__sequence_advanced_delay_item_menu",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
        className: "jsx-1094296421" + " " + "streak__sequence_advanced_delay_item_menu_value",
        children: selectedOption.selectedLabel || selectedOption.label
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
        className: "jsx-1094296421" + " " + "streak__sequence_advanced_delay_item_menu_icon_wrapper",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
          isOutline: true,
          variant: "text",
          name: "arrow_drop_down",
          color: menuButtonProps.disabled ? 'var(--streak-black-disabled)' : undefined
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
        id: "1094296421",
        children: [".streak__sequence_advanced_delay_item_menu.jsx-1094296421{font-weight:bold;cursor:pointer;color:var(--streak-app-primary);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-bottom:2px solid transparent;box-sizing:content-box;padding-left:2px;}", ".streak__sequence_advanced_delay_item_menu.jsx-1094296421:not([disabled]):hover{border-bottom:2px solid var(--streak-app-primary-hover);}", ".streak__sequence_advanced_delay_item_menu_icon_wrapper.jsx-1094296421{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;margin-left:-4px;margin-top:1px;width:18px;}", ".streak__sequence_advanced_delay_item_menu[disabled].jsx-1094296421{cursor:text;color:var(--streak-black-disabled);}"]
      })]
    });
  }, [_track, selectedOption]);
  const dropdownMenu = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_widgets_react_material_menu__WEBPACK_IMPORTED_MODULE_7__/* .Dropdown */ .Lt, {
    className: className,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_widgets_react_material_menu__WEBPACK_IMPORTED_MODULE_7__/* .MenuList */ .qy, {
      children: options.map(option => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(InlineMenuItem, {
        track: _track,
        option: option,
        selected: option.value === currentValue,
        onItemChosen: onItemChosen
      }, option.value))
    })
  });
  const menuButtonRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_widgets_react_material_menu_menuButton__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
    ButtonComponent: button,
    menu: dropdownMenu,
    ref: menuButtonRef,
    disabled: disabled
  });
}
function InlineMenuItem(_ref3) {
  let {
    track: _track,
    option,
    selected,
    onItemChosen
  } = _ref3;
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (selected) {
      ref.current?.highlight(true);
    }
  }, [ref, selected]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_widgets_react_material_menu__WEBPACK_IMPORTED_MODULE_7__/* .MenuItem */ .sN, {
    ref: ref,
    onItemChosen: () => {
      _track('option.click', option);
      onItemChosen(option.value);
    },
    selected: selected,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
      className: "jsx-1291187864" + " " + "streak__sequence_advanced_delay_item_menu_item_content",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
        id: "1291187864",
        children: [".streak__sequence_advanced_delay_item_menu_item_content{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}", ".streak__sequence_advanced_delay_item_menu_item_content_check{margin-left:auto;height:24px;}"]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
        className: "jsx-1291187864" + " " + "streak__sequence_advanced_delay_item_menu_item_content_value",
        children: option.label
      }), selected && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
        className: "jsx-1291187864" + " " + "streak__sequence_advanced_delay_item_menu_item_content_check",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
          name: "check",
          isOutline: true,
          variant: "inline",
          accent: "default"
        })
      })]
    })
  });
}

/***/ }),

/***/ 64129:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ ItemTemplate)
/* harmony export */ });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81518);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47587);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44345);
/* harmony import */ var _components_Icon_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71174);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(59718);






function ItemTemplate(_ref) {
  let {
    children,
    disabled,
    iconProps,
    isSelected = false,
    onClick,
    subtitle,
    title,
    errorMsg
  } = _ref;
  const [hovered, setHovered] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default().dynamic([["3925799720", [disabled ? 'auto' : 'pointer', disabled ? 'auto' : 'pointer']]]) + " " + (classnames__WEBPACK_IMPORTED_MODULE_1___default()('streak__sequence_drip_tab_item', {
      hovered
    }) || ""),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      onMouseEnter: () => setHovered(true),
      onMouseLeave: () => setHovered(false),
      onClick: () => {
        if (disabled) {
          return;
        }
        if (onClick) {
          onClick();
        }
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default().dynamic([["3925799720", [disabled ? 'auto' : 'pointer', disabled ? 'auto' : 'pointer']]]) + " " + "streak__sequence_drip_tab_item_iconWrapper",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        ...iconProps,
        className: "streak__sequence_drip_tab_item_icon",
        accent: iconProps.accent || 'muted',
        isOutline: iconProps.isOutline,
        variant: iconProps.variant || 'outline',
        name: iconProps.name
      }), errorMsg && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
          className: "streak__sequence_drip_tab_item_icon_error",
          name: "circle",
          size: "ms",
          variant: "default",
          accent: "default",
          tooltip: errorMsg
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
          className: "streak__sequence_drip_tab_item_icon_error",
          name: "error_outline",
          size: "ms",
          variant: "outline",
          accent: "warning",
          tooltip: errorMsg
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      onMouseEnter: () => setHovered(true),
      onMouseLeave: () => setHovered(false),
      onClick: () => {
        if (disabled) {
          return;
        }
        if (onClick) {
          onClick();
        }
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default().dynamic([["3925799720", [disabled ? 'auto' : 'pointer', disabled ? 'auto' : 'pointer']]]) + " " + (classnames__WEBPACK_IMPORTED_MODULE_1___default()('streak__sequence_drip_tab_item_main', {
        'is-selected': isSelected,
        'is-hover': !disabled
      }) || ""),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default().dynamic([["3925799720", [disabled ? 'auto' : 'pointer', disabled ? 'auto' : 'pointer']]]) + " " + "streak__sequence_drip_tab_item_title",
        children: title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default().dynamic([["3925799720", [disabled ? 'auto' : 'pointer', disabled ? 'auto' : 'pointer']]]),
          children: title
        })
      }), subtitle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default().dynamic([["3925799720", [disabled ? 'auto' : 'pointer', disabled ? 'auto' : 'pointer']]]) + " " + "streak__sequence_drip_tab_item_subtitle",
        children: subtitle
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default().dynamic([["3925799720", [disabled ? 'auto' : 'pointer', disabled ? 'auto' : 'pointer']]]) + " " + "streak__sequence_drip_tab_item_body",
        children: children
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "3925799720",
      dynamic: [disabled ? 'auto' : 'pointer', disabled ? 'auto' : 'pointer'],
      children: [".streak__sequence_drip_tab_item.__jsx-style-dynamic-selector{border-left-color:inherit;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:var(--streak-text-size-14);padding:8px;position:relative;}", ".streak__sequence_drip_tab_item.__jsx-style-dynamic-selector:first-child.__jsx-style-dynamic-selector::before{top:40px;}", ".streak__sequence_drip_tab_item.__jsx-style-dynamic-selector:last-child.__jsx-style-dynamic-selector::before{bottom:20px;}", ".streak__sequence_drip_tab_item.__jsx-style-dynamic-selector::before{border-left:1px solid var(--streak-black-divider);bottom:0;content:'';left:19px;position:absolute;top:0;z-index:0;}", `.streak__sequence_drip_tab_item_iconWrapper.__jsx-style-dynamic-selector{cursor:${disabled ? 'auto' : 'pointer'};display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;height:-webkit-min-content;height:-webkit-min-content;height:-moz-min-content;height:min-content;position:relative;width:24px;z-index:1;margin-top:12px;margin-right:12px;}`, ".streak__sequence_drip_tab_item_iconWrapper.__jsx-style-dynamic-selector::before{background-color:var(--streak-solid-white);bottom:-4px;content:'';left:0px;position:absolute;right:0px;top:-4px;z-index:1;}", ".streak__sequence_drip_tab_item_iconWrapper.__jsx-style-dynamic-selector .streak__sequence_drip_tab_item_icon{z-index:2;}", ".streak__sequence_drip_tab_item_iconWrapper.__jsx-style-dynamic-selector .streak__sequence_drip_tab_item_icon_error{background-color:transparent;position:absolute;right:-5px;top:-5px;z-index:2;}", `.streak__sequence_drip_tab_item_main.__jsx-style-dynamic-selector{cursor:${disabled ? 'auto' : 'pointer'};-webkit-flex:1;-ms-flex:1;flex:1;min-width:0;padding:12px;border-radius:4px;border:1px solid transparent;}`, ".streak__sequence_drip_tab_item_main.is-hover.__jsx-style-dynamic-selector:hover.__jsx-style-dynamic-selector:not(.is-selected),.hovered.__jsx-style-dynamic-selector .streak__sequence_drip_tab_item_main.is-hover.__jsx-style-dynamic-selector:not(.is-selected){background-color:var(--streak-app-primary-hover);}", ".streak__sequence_drip_tab_item_main.is-selected.__jsx-style-dynamic-selector{background-color:var(--streak-app-primary-hover);border:1px solid var(--streak-app-primary);}", ".streak__sequence_drip_tab_item_title.__jsx-style-dynamic-selector{-webkit-align-items:baseline;-webkit-box-align:baseline;-ms-flex-align:baseline;align-items:baseline;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:var(--streak-text-size-24);line-height:var(--streak-text-size-24);}", ".streak__sequence_drip_tab_item_title.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector:first-child{-webkit-flex:1;-ms-flex:1;flex:1;font-size:var(--streak-text-size-14);font-weight:bold;line-height:var(--streak-text-size-24);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}", ".streak__sequence_drip_tab_item_subtitle.__jsx-style-dynamic-selector{color:var(--streak-sub-text-color);line-height:var(--streak-text-size-20);margin-top:4px;-webkit-box-orient:vertical;-webkit-line-clamp:2;display:-webkit-box;overflow:hidden;text-overflow:ellipsis;word-break:break-word;}"]
    })]
  });
}

/***/ }),

/***/ 91303:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ SequenceDetailsRecipientVariablesContextProvider),
/* harmony export */   S: () => (/* binding */ SequenceDetailsRecipientVariablesContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44345);
/* harmony import */ var _core_models_teamContactAndOrg_teamContactAndOrgCache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41675);
/* harmony import */ var _helpers_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9873);
/* harmony import */ var _helpers_variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52704);
/* harmony import */ var _sequenceDetailsRecipientsContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4750);
/* harmony import */ var _sequenceDetailsVariablesContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(29778);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_core_models_teamContactAndOrg_teamContactAndOrgCache__WEBPACK_IMPORTED_MODULE_1__, _sequenceDetailsRecipientsContext__WEBPACK_IMPORTED_MODULE_4__, _sequenceDetailsVariablesContext__WEBPACK_IMPORTED_MODULE_5__]);
([_core_models_teamContactAndOrg_teamContactAndOrgCache__WEBPACK_IMPORTED_MODULE_1__, _sequenceDetailsRecipientsContext__WEBPACK_IMPORTED_MODULE_4__, _sequenceDetailsVariablesContext__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const CONTACT_PROPS_ALLOWED_TO_UPDATE = ['givenName', 'familyName', 'other', 'notes', 'title'];
const getTemplateValues = (values, standardVariablesMap) => Object.keys(values).reduce((acc, varName) => {
  acc[varName] = values[varName];
  const varInfo = standardVariablesMap[varName];

  // fill alternative names with the same value
  if (varInfo) {
    varInfo.alternativeNames.forEach(altVarName => acc[altVarName] = values[varName]);
  }
  return acc;
}, {});
const SequenceDetailsRecipientVariablesContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
const SequenceDetailsRecipientVariablesContextProvider = props => {
  const {
    updateRecipients
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_sequenceDetailsRecipientsContext__WEBPACK_IMPORTED_MODULE_4__/* .SequenceDetailsRecipientsContext */ .j);
  const {
    standardVariablesMap
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_sequenceDetailsVariablesContext__WEBPACK_IMPORTED_MODULE_5__/* .SequenceDetailsVariablesContext */ .c);
  const getVariableEntityName = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(variableName => {
    const {
      fieldType,
      fieldKey
    } = (0,_helpers_variables__WEBPACK_IMPORTED_MODULE_3__/* .parseVariableName */ .RK)(variableName);
    if (_helpers_constants__WEBPACK_IMPORTED_MODULE_2__/* .SUPPORTED_CONTACT_VARIABLE_TYPES */ .mA.includes(fieldType) && CONTACT_PROPS_ALLOWED_TO_UPDATE.includes(fieldKey)) {
      return 'contact';
    }
    return null;
  }, []);
  const canUpdateVariableEntity = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((variableName, recipient) => {
    const entityName = getVariableEntityName(variableName);
    if (entityName === 'contact') {
      return !!recipient.contactKey;
    }
    return false;
  }, [getVariableEntityName]);
  const updateTeamContactValues = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async (recipients, newValues) => {
    // filter only <contact_*> or <recipient_*> variables, also filter out array properties (not supported yet)
    const contactValues = Object.keys(newValues).reduce((acc, varName) => {
      const entityName = getVariableEntityName(varName);
      if (entityName === 'contact') {
        const {
          fieldKey
        } = (0,_helpers_variables__WEBPACK_IMPORTED_MODULE_3__/* .parseVariableName */ .RK)(varName);
        acc[fieldKey] = newValues[varName];
      }
      return acc;
    }, {});
    if (Object.keys(contactValues).length === 0) {
      return;
    }
    const contactPromises = recipients.map(r => {
      if (r.contactKey) {
        const teamContact = _core_models_teamContactAndOrg_teamContactAndOrgCache__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.getTeamContactSync(r.contactKey);
        if (teamContact) {
          Object.keys(contactValues).forEach(propName => {
            teamContact.set(propName, contactValues[propName]);
          });
          return teamContact.saveWithPromise();
        }
      }
      return Promise.resolve();
    });
    await Promise.all(contactPromises);
  }, [getVariableEntityName]);
  const setVariableValuesToRecipients = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async (recipients, values, options) => {
    const recipientsTemplateValues = [];
    const updatedRecipients = recipients.map(recipient => {
      const recipientValues = values[recipient.key] || {};
      const templateValues = getTemplateValues(recipientValues, standardVariablesMap);
      recipientsTemplateValues.push(templateValues);
      return {
        key: recipient.key,
        templateValues: {
          ...recipient.templateValues,
          ...templateValues
        }
      };
    });
    await updateRecipients(updatedRecipients);
    if (options?.updateEntity) {
      const promises = recipients.map((recipient, i) => {
        return updateTeamContactValues([recipient], recipientsTemplateValues[i]);
      });
      await Promise.all(promises);
    }
  }, [standardVariablesMap, updateRecipients, updateTeamContactValues]);
  const ctxValue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return {
      getVariableEntityName,
      canUpdateVariableEntity,
      setVariableValuesToRecipients
    };
  }, [setVariableValuesToRecipients, getVariableEntityName, canUpdateVariableEntity]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(SequenceDetailsRecipientVariablesContext.Provider, {
    value: ctxValue,
    children: props.children
  });
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 29778:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ SequenceDetailsVariablesContext),
/* harmony export */   y: () => (/* binding */ SequenceDetailsVariablesContextProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44345);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17013);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_data_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38672);
/* harmony import */ var _core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(72493);
/* harmony import */ var _helpers_sequenceRecipientsSourceVariables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5235);
/* harmony import */ var _sequenceDetailsContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(88331);
/* harmony import */ var _sequenceDetailsRecipientsSourceContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2275);
/* harmony import */ var _hooks_useSequences__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(14643);
/* harmony import */ var _lib_utils_useModelProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(80795);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_data_data__WEBPACK_IMPORTED_MODULE_2__, _core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_3__, _helpers_sequenceRecipientsSourceVariables__WEBPACK_IMPORTED_MODULE_4__, _sequenceDetailsRecipientsSourceContext__WEBPACK_IMPORTED_MODULE_6__, _hooks_useSequences__WEBPACK_IMPORTED_MODULE_7__]);
([_services_data_data__WEBPACK_IMPORTED_MODULE_2__, _core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_3__, _helpers_sequenceRecipientsSourceVariables__WEBPACK_IMPORTED_MODULE_4__, _sequenceDetailsRecipientsSourceContext__WEBPACK_IMPORTED_MODULE_6__, _hooks_useSequences__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const SequenceDetailsVariablesContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
const SequenceDetailsVariablesContextProvider = props => {
  const {
    sequence: sequenceModel
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_sequenceDetailsContext__WEBPACK_IMPORTED_MODULE_5__/* .SequenceDetailsContext */ .IJ);
  const sourceCtx = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_sequenceDetailsRecipientsSourceContext__WEBPACK_IMPORTED_MODULE_6__/* .SequenceDetailsRecipientsSourceContext */ .uq);
  const sequenceKey = (0,_lib_utils_useModelProperty__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(sequenceModel, 'key');
  const {
    data: sequence
  } = (0,_hooks_useSequences__WEBPACK_IMPORTED_MODULE_7__/* .useSequenceInfo */ .HW)(sequenceKey || '');
  const source = sourceCtx?.source;
  const initialVariables = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!sequence) {
      return null;
    }
    if (sequence.source === _core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_3__/* .SequenceSource */ .F9.CSV && sequence.columnNames) {
      return (0,_helpers_sequenceRecipientsSourceVariables__WEBPACK_IMPORTED_MODULE_4__/* .getSequenceRecipientsSourceVariables */ .u)({
        type: _sequenceDetailsRecipientsSourceContext__WEBPACK_IMPORTED_MODULE_6__/* .SequenceRecipientsSourceType */ .pL.CSV,
        columnNames: sequence.columnNames,
        rows: []
      });
    }
    if (sequence.boxKeys) {
      const boxKey = sequence.boxKeys[0];
      const box = _services_data_data__WEBPACK_IMPORTED_MODULE_2__["default"].getBoxSync(boxKey);
      const pipeline = box?.getPipeline();
      if (pipeline) {
        return (0,_helpers_sequenceRecipientsSourceVariables__WEBPACK_IMPORTED_MODULE_4__/* .getSequenceRecipientsSourceVariables */ .u)({
          type: _sequenceDetailsRecipientsSourceContext__WEBPACK_IMPORTED_MODULE_6__/* .SequenceRecipientsSourceType */ .pL.Pipeline,
          pipeline,
          boxes: []
        });
      }
    }
    return null;
  }, [sequence]);
  const sourceVariables = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!source) {
      return null;
    }
    return (0,_helpers_sequenceRecipientsSourceVariables__WEBPACK_IMPORTED_MODULE_4__/* .getSequenceRecipientsSourceVariables */ .u)(source);
  }, [source]);
  const standardVariables = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => sourceVariables || initialVariables || [], [sourceVariables, initialVariables]);
  const standardVariablesMap = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => (0,lodash__WEBPACK_IMPORTED_MODULE_1__.keyBy)(standardVariables, v => v.variableName), [standardVariables]);
  const ctxValue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return {
      standardVariables,
      standardVariablesMap
    };
  }, [standardVariables, standardVariablesMap]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(SequenceDetailsVariablesContext.Provider, {
    value: ctxValue,
    children: props.children
  });
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 37686:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ SequenceRecipientsEmailHistoryContextProvider),
/* harmony export */   V: () => (/* binding */ SequenceRecipientsEmailHistoryContext)
/* harmony export */ });
/* harmony import */ var kefir_bus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67459);
/* harmony import */ var kefir_bus__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(kefir_bus__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var kefir__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98137);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44345);
/* harmony import */ var _services_threads__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48379);
/* harmony import */ var kefir_stopper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(94322);
/* harmony import */ var kefir_stopper__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(kefir_stopper__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_threads__WEBPACK_IMPORTED_MODULE_2__]);
_services_threads__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const REQUESTED_EMAILS_LIMIT = 20;
const CONCURRENT_REQUESTS_LIMIT = 2;
const SequenceRecipientsEmailHistoryContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);
const SequenceRecipientsEmailHistoryContextProvider = props => {
  const {
    children
  } = props;
  const cache = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(new Map());
  const inRequestCache = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(new Set());
  const $stream = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => kefir_bus__WEBPACK_IMPORTED_MODULE_4___default()(), []);
  const stopper = kefir_stopper__WEBPACK_IMPORTED_MODULE_5___default()();
  const [update, setUpdate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(x => x + 1, 0);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    $stream.takeUntilBy(stopper).bufferWithTimeOrCount(1000, REQUESTED_EMAILS_LIMIT).map(emails => emails.filter(email => !inRequestCache.current.has(email))).filter(emails => Array.from(new Set(emails)).length > 0).flatMapConcurLimit(emails => {
      emails.forEach(email => inRequestCache.current.add(email));
      return kefir__WEBPACK_IMPORTED_MODULE_0__.fromPromise((0,_services_threads__WEBPACK_IMPORTED_MODULE_2__/* .fetchTeamThreadsBriefSummary */ .Sh)({
        emails: Array.from(new Set(emails))
      }));
    }, CONCURRENT_REQUESTS_LIMIT).map(response => {
      for (const email in response) {
        cache.current.set(email, response[email]);
        inRequestCache.current.delete(email);
      }
      return response;
    }).throttle(100, {
      trailing: true
    }).onValue(() => setUpdate());
    return () => stopper.destroy();
  }, [$stream, stopper]);
  const getRecipientEmailHistory = email => {
    if (!cache.current.get(email)) {
      $stream.emit(email);
      return null;
    }
    return cache.current.get(email) ?? null;
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(SequenceRecipientsEmailHistoryContext.Provider, {
    value: {
      getRecipientEmailHistory,
      update
    },
    children: children
  });
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2077:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ removeSequenceRecipientsStaleTemplateValues)
/* harmony export */ });
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86390);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_0__);

function removeSequenceRecipientsStaleTemplateValues(recipients, templateVariables) {
  const newVarNames = [...templateVariables, 'boxKey'];
  const updatedRecipients = [];
  let isUpdated = false;
  recipients.forEach(recipient => {
    // Skip recipient with no box designation (CSV import created ones) since we won't be able to fetch the data back in when template variables change
    if (!recipient.boxKey) return;
    const recipientTemplateVarNames = Object.keys(recipient.templateValues);
    // Nothing to update, skip
    if (lodash_isEqual__WEBPACK_IMPORTED_MODULE_0___default()(newVarNames, recipientTemplateVarNames)) return;

    // Calculate the new template values
    const newTemplateValues = newVarNames.reduce((acc, key) => {
      const templateValue = recipient.templateValues[key];
      if (templateValue) {
        acc[key] = templateValue;
      }
      return acc;
    }, {});
    // Capture the update state
    if (!isUpdated) {
      isUpdated = Object.keys(newTemplateValues).length !== Object.keys(recipient.templateValues).length;
    }
    updatedRecipients.push({
      key: recipient.key,
      templateValues: newTemplateValues
    });
  });
  return {
    recipients: updatedRecipients,
    isUpdated
  };
}

/***/ }),

/***/ 15839:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ sendCopyDraft)
/* harmony export */ });
/* harmony import */ var _core_ajax_apiRequester__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23392);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_core_ajax_apiRequester__WEBPACK_IMPORTED_MODULE_0__]);
_core_ajax_apiRequester__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

function sendCopyDraft(options) {
  return _core_ajax_apiRequester__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post(`sequences/drafts/copy`, {
    json: {
      draftIds: options.draftIds,
      templateValues: options.templateValues
    }
  }, null, {
    prefix: '/api/v2/',
    templateUrl: `sequences/drafts/copy`
  }).getPromise();
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 26502:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FI: () => (/* binding */ showSequenceClonedButterMsg),
/* harmony export */   JW: () => (/* binding */ showSequenceStartedButterMsg),
/* harmony export */   c8: () => (/* binding */ showSequenceSavedButterMsg)
/* harmony export */ });
/* harmony import */ var _streakyc_common_core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77294);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(93733);
/* harmony import */ var _core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72493);
/* harmony import */ var _services_butterBarManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99329);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35091);
/* harmony import */ var _services_tracker_tracker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13778);
/* harmony import */ var _contexts_sequenceDetailsContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(88331);
/* harmony import */ var _sequenceManager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(28778);
/* harmony import */ var _core_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(58556);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_1__, _sequenceManager__WEBPACK_IMPORTED_MODULE_6__]);
([_core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_1__, _sequenceManager__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









function showSequenceStartedButterMsg(options) {
  const {
    sequenceKey,
    sendAt,
    mode
  } = options;
  const datetime = date_fns__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z(sendAt ?? new Date(), 'MMM dd, yyyy, h:mm a');
  const text = sendAt ? mode === _contexts_sequenceDetailsContext__WEBPACK_IMPORTED_MODULE_5__/* .SequenceDetailsMode */ .cG.AddingRecipients ? _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.getString('sequence_new_recipients_scheduled_at', {
    datetime
  }) : _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.getString('sequence_scheduled_at', {
    datetime
  }) : mode === _contexts_sequenceDetailsContext__WEBPACK_IMPORTED_MODULE_5__/* .SequenceDetailsMode */ .cG.AddingRecipients ? _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.getString('sequence_new_recipients_added') : _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.getString('drip_started');
  _services_butterBarManager__WEBPACK_IMPORTED_MODULE_2__["default"].showMessage({
    messageKey: 'dripStarted',
    buttons: [{
      onClick: () => {
        _services_tracker_tracker__WEBPACK_IMPORTED_MODULE_4__["default"].track('dripStarted.details', {
          sequenceKey
        });
        _streakyc_common_core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_0__.inboxSDK.Router.goto(_core_routing__WEBPACK_IMPORTED_MODULE_7__/* .StreakCustomRoute */ .ld.SEQUENCE, {
          key: sequenceKey
        });
      },
      title: _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.getString('details')
    }],
    text
  });
}
function showSequenceSavedButterMsg(options) {
  const {
    sequenceKey,
    status,
    mode
  } = options;
  const isDraft = status === _core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_1__/* .SequenceStatus */ .ST.Draft;
  const text = mode === _contexts_sequenceDetailsContext__WEBPACK_IMPORTED_MODULE_5__/* .SequenceDetailsMode */ .cG.AddingRecipients ? _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.getString('sequence_new_recipients_added') : _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.getString('drip_saved');
  _services_butterBarManager__WEBPACK_IMPORTED_MODULE_2__["default"].showMessage({
    messageKey: 'dripSaved',
    buttons: [{
      onClick: () => {
        _services_tracker_tracker__WEBPACK_IMPORTED_MODULE_4__["default"].track('dripSaved.details', {
          sequenceKey
        });
        if (isDraft) {
          _sequenceManager__WEBPACK_IMPORTED_MODULE_6__["default"].editExistingSequence(sequenceKey);
        } else {
          _streakyc_common_core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_0__.inboxSDK.Router.goto(_core_routing__WEBPACK_IMPORTED_MODULE_7__/* .StreakCustomRoute */ .ld.SEQUENCE, {
            key: sequenceKey
          });
        }
      },
      title: isDraft ? _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.getString('sequence_edit') : _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.getString('details')
    }],
    text
  });
}
function showSequenceClonedButterMsg(options) {
  const messageKey = 'dripCloned' + options.originalSeqKey;
  if (options.beingCloned) {
    _services_butterBarManager__WEBPACK_IMPORTED_MODULE_2__["default"].showMessage({
      messageKey,
      text: _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.getString('sequence_being_cloned')
    });
  } else {
    _services_butterBarManager__WEBPACK_IMPORTED_MODULE_2__["default"].showMessage({
      messageKey,
      text: _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.getString('sequence_was_cloned_text')
    });
  }
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5235:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: () => (/* binding */ getSequenceRecipientsSourceVariables)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17013);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _getPipelineColumns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18733);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35091);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52704);
/* harmony import */ var _contexts_sequenceDetailsRecipientsSourceContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2275);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_contexts_sequenceDetailsRecipientsSourceContext__WEBPACK_IMPORTED_MODULE_4__]);
_contexts_sequenceDetailsRecipientsSourceContext__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function getSequenceRecipientsSourceVariables(source) {
  if (source.type === _contexts_sequenceDetailsRecipientsSourceContext__WEBPACK_IMPORTED_MODULE_4__/* .SequenceRecipientsSourceType */ .pL.CSV) {
    return getCSVSourceVariables(source);
  } else if (source.type === _contexts_sequenceDetailsRecipientsSourceContext__WEBPACK_IMPORTED_MODULE_4__/* .SequenceRecipientsSourceType */ .pL.Pipeline) {
    return getPipelineSourceVariables(source);
  } else if (source.type === _contexts_sequenceDetailsRecipientsSourceContext__WEBPACK_IMPORTED_MODULE_4__/* .SequenceRecipientsSourceType */ .pL.Contact) {
    const box = source.box;
    const pipeline = box?.getPipeline();
    if (box && pipeline) {
      return getPipelineSourceVariables({
        type: _contexts_sequenceDetailsRecipientsSourceContext__WEBPACK_IMPORTED_MODULE_4__/* .SequenceRecipientsSourceType */ .pL.Pipeline,
        pipeline,
        boxes: [box]
      });
    }
    return getContactSourceVariables();
  }
  return [];
}
function getCSVSourceVariables(source) {
  const result = [];
  const contactVariableList = [{
    displayText: _services_locale_locale__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.getString('mm_givenName'),
    variableName: 'contact_givenName',
    alternativeNames: ['recipient_givenName']
  }, {
    displayText: _services_locale_locale__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.getString('mm_familyName'),
    variableName: 'contact_familyName',
    alternativeNames: ['recipient_familyName']
  }, {
    displayText: _services_locale_locale__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.getString('email'),
    variableName: 'contact_email',
    alternativeNames: ['recipient_email']
  }].map(item => ({
    groupTitle: _services_locale_locale__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.getString('mm_contact_fields'),
    displayText: item.displayText,
    variableName: item.variableName,
    variableText: (0,_variables__WEBPACK_IMPORTED_MODULE_3__/* .getVariableText */ .RR)({
      variableName: item.variableName
    }),
    alternativeNames: item.alternativeNames || []
  }));
  result.push(...contactVariableList);
  const columnNames = source.columnNames;
  if (columnNames.length > 0) {
    const groupTitle = _services_locale_locale__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.getString('variables_from', {
      group: _services_locale_locale__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.getString('csv_file')
    });
    result.push(...(0,lodash__WEBPACK_IMPORTED_MODULE_0__.sortBy)(columnNames).map(columnName => {
      const variableName = `field_${columnName}`;
      const normalizedVariableName = (0,_variables__WEBPACK_IMPORTED_MODULE_3__/* .normalizeVariableName */ .$U)(variableName);
      return {
        groupTitle,
        displayText: columnName,
        variableText: (0,_variables__WEBPACK_IMPORTED_MODULE_3__/* .getVariableText */ .RR)({
          variableName
        }),
        variableName,
        alternativeNames: [normalizedVariableName]
      };
    }));
  }
  return result;
}
function getContactSourceVariables() {
  const contactVariableList = [{
    displayText: _services_locale_locale__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.getString('mm_givenName'),
    variableName: 'contact_givenName',
    alternativeNames: ['recipient_givenName']
  }, {
    displayText: _services_locale_locale__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.getString('mm_familyName'),
    variableName: 'contact_familyName',
    alternativeNames: ['recipient_familyName']
  }, {
    displayText: _services_locale_locale__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.getString('email'),
    variableName: 'contact_email',
    alternativeNames: ['recipient_email']
  }, {
    displayText: _services_locale_locale__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.getString('teamContact_title'),
    variableName: 'contact_title'
  }, {
    displayText: _services_locale_locale__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.getString('teamContact_phoneNumber'),
    variableName: 'contact_phoneNumbers'
  }, {
    displayText: _services_locale_locale__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.getString('teamContact_address'),
    variableName: 'contact_addresses'
  }, {
    displayText: _services_locale_locale__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.getString('notes'),
    variableName: 'contact_notes',
    alternativeNames: ['contact_other']
  }].map(item => ({
    groupTitle: _services_locale_locale__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.getString('mm_contact_fields'),
    displayText: item.displayText,
    variableName: item.variableName,
    variableText: (0,_variables__WEBPACK_IMPORTED_MODULE_3__/* .getVariableText */ .RR)({
      variableName: item.variableName
    }),
    alternativeNames: item.alternativeNames || []
  }));
  return contactVariableList;
}
function getPipelineSourceVariables(source) {
  const result = [];
  const contactVariableList = getContactSourceVariables();
  result.push(...contactVariableList);
  const pipeline = source.pipeline;
  const columns = pipeline && (0,_getPipelineColumns__WEBPACK_IMPORTED_MODULE_1__/* .getPipelineColumns */ .B)(pipeline);
  const grouped = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.groupBy)(columns, column => {
    if (column.isCustom()) {
      return 'A_CUSTOM';
    } else if (column.isMagic()) {
      return 'A_MAGIC';
    } else {
      return column.getColumnSortValue();
    }
  });
  (0,lodash__WEBPACK_IMPORTED_MODULE_0__.sortBy)(Object.keys(grouped)).forEach(groupId => {
    const groupTitle = _services_locale_locale__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.getString('variables_from', {
      group: getGroupName(groupId)
    });
    const columns = grouped[groupId];
    result.push(...(0,lodash__WEBPACK_IMPORTED_MODULE_0__.sortBy)(columns, c => c.displayNameText()).map(column => {
      const columnName = column.displayNameText();
      const boxVarName = 'box_' + columnName;
      const normalizedBoxVarName = (0,_variables__WEBPACK_IMPORTED_MODULE_3__/* .normalizeVariableName */ .$U)(boxVarName);
      const fieldVarName = 'field_' + columnName; // <field_*> variable is alternative name for <box_*> in MailMerge

      return {
        groupTitle,
        displayText: columnName,
        variableText: (0,_variables__WEBPACK_IMPORTED_MODULE_3__/* .getVariableText */ .RR)({
          variableName: normalizedBoxVarName
        }),
        variableName: normalizedBoxVarName,
        alternativeNames: [boxVarName, fieldVarName]
      };
    }));
  });
  return result;
}
function getGroupName(groupId) {
  switch (groupId) {
    case 'A_CUSTOM':
      return _services_locale_locale__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.getString('box_custom_columns');
    case 'A_DEFAULT':
      return _services_locale_locale__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.getString('box_default_columns');
    case 'A_MAGIC':
      return _services_locale_locale__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.getString('box_magic_columns');
    default:
      return groupId;
  }
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5593:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ SequenceStepType),
/* harmony export */   v: () => (/* binding */ mapToSortedSequenceSteps)
/* harmony export */ });
/* harmony import */ var _sequenceActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4571);

let SequenceStepType = /*#__PURE__*/function (SequenceStepType) {
  SequenceStepType["Message"] = "MESSAGE";
  SequenceStepType["Delay"] = "DELAY";
  return SequenceStepType;
}({});
// The purpose of this function is to gurantee the order of a sequence actions to be rendered in SequenceDripTab, see sequenceSteps test cases
function mapToSortedSequenceSteps(actions) {
  const sortedActions = (0,_sequenceActions__WEBPACK_IMPORTED_MODULE_0__/* .sortSequenceActions */ .Wu)(actions);
  const steps = [];
  let previousStepId = null;
  for (let i = 0; i < sortedActions.length; i++) {
    const action = sortedActions[i];
    if (action.advancedDelay) {
      const delayStep = {
        stepId: `${action.data.draftId}|delay`,
        afterStepId: previousStepId,
        type: SequenceStepType.Delay,
        data: action.advancedDelay,
        draftId: action.data.draftId
      };
      steps.push(delayStep);
      previousStepId = delayStep.stepId;
    }
    const messageStep = {
      stepId: action.data.draftId,
      afterStepId: previousStepId,
      type: SequenceStepType.Message,
      data: action.data,
      iconName: i == 0 ? 'mail' : 'reply'
    };
    steps.push(messageStep);
    previousStepId = messageStep.stepId;
  }
  return steps;
}

/***/ }),

/***/ 18730:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ getSequenceVariablesSummary),
/* harmony export */   f: () => (/* binding */ getSequenceVariables)
/* harmony export */ });
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52704);

function getSequenceVariables(actions) {
  const variables = [];
  actions.forEach(action => action.data.templateVariableNames.forEach(templateVariableName => {
    if (variables.indexOf(templateVariableName) === -1) {
      variables.push(templateVariableName);
    }
  }));
  return variables;
}
/**
 * Prepares a summary of variables used in all @param actions in a sequence.
 * If @param knownVariablesMap is provided, alternative variable names will be replaced with their main name.
 */
function getSequenceVariablesSummary(actions, knownVariablesMap) {
  const summary = {
    variableNames: [],
    variables: []
  };
  actions.forEach(action => action.data.templateVariableNames.forEach(variableName => {
    if (knownVariablesMap) {
      // replace with main variable name if it is alternative name
      variableName = (0,_variables__WEBPACK_IMPORTED_MODULE_0__/* .replaceAlternativeVariableName */ .SG)(variableName, knownVariablesMap);
    }
    if (summary.variableNames.indexOf(variableName) === -1) {
      summary.variableNames.push(variableName);
    }
    let varInfo = summary.variables.find(v => v.variableName === variableName);
    if (!varInfo) {
      varInfo = {
        variableName,
        actions: []
      };
      summary.variables.push(varInfo);
    }
    if (!varInfo.actions.some(a => a.data.draftId === action.data.draftId)) {
      varInfo.actions.push({
        data: {
          draftId: action.data.draftId
        }
      });
    }
  }));
  return summary;
}

/***/ }),

/***/ 21515:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ useCalculateRecipientsTemplateValues)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44345);
/* harmony import */ var _helpers_getSequenceRecipients__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80115);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_helpers_getSequenceRecipients__WEBPACK_IMPORTED_MODULE_1__]);
_helpers_getSequenceRecipients__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


async function calculateTemplateValuesMap(recipients) {
  const results = await Promise.all(recipients.map(recipient => {
    // if there's no boxKey it means the recipient might have been created via CSV importing.
    // such users don't have boxes thus skip computation and return empty values
    if (!recipient.boxKey) {
      return {
        key: recipient.key,
        values: {}
      };
    }
    return (0,_helpers_getSequenceRecipients__WEBPACK_IMPORTED_MODULE_1__/* .getSequenceRecipientTemplateValuesFromBox */ .u4)(recipient.boxKey, recipient.contactKey).then(templateValues => ({
      key: recipient.key,
      values: templateValues
    }));
  }));
  const templateValuesByRecipientKey = results.reduce((acc, result) => ({
    ...acc,
    [result.key]: result.values
  }), {});
  return templateValuesByRecipientKey;
}
function useCalculateRecipientsTemplateValues(recipients, isEnabled) {
  const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const recipientsKeys = recipients.map(r => r.key);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    async function recalculate() {
      const result = await calculateTemplateValuesMap(recipients);
      setValue(result);
    }
    isEnabled && recalculate();
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [isEnabled, ...recipientsKeys]);
  return value;
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 28884:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ useSequenceTabsToShow)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44345);
/* harmony import */ var _contexts_sequenceDetailsContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88331);
/* harmony import */ var _helpers_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9873);



function useSequenceTabsToShow(mode) {
  const drawerTabsToShow = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    switch (mode) {
      case _contexts_sequenceDetailsContext__WEBPACK_IMPORTED_MODULE_1__/* .SequenceDetailsMode */ .cG.AddingRecipients:
        {
          const addRecipientsTabDef = {
            ..._helpers_constants__WEBPACK_IMPORTED_MODULE_2__/* .TAB_DEFS */ .wj.RECIPIENTS,
            localeKey: 'new_recipients_count'
          };
          return [_helpers_constants__WEBPACK_IMPORTED_MODULE_2__/* .TAB_DEFS */ .wj.DRIP, addRecipientsTabDef];
        }
      default:
        return [_helpers_constants__WEBPACK_IMPORTED_MODULE_2__/* .TAB_DEFS */ .wj.DRIP, _helpers_constants__WEBPACK_IMPORTED_MODULE_2__/* .TAB_DEFS */ .wj.RECIPIENTS];
    }
  }, [mode]);
  return drawerTabsToShow;
}

/***/ }),

/***/ 15701:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ useSortedSequenceSteps)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44345);
/* harmony import */ var _lib_utils_useModelProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80795);
/* harmony import */ var _helpers_sequenceSteps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5593);



function useSortedSequenceSteps(sequence) {
  const actions = (0,_lib_utils_useModelProperty__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(sequence, 'actions');
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => (0,_helpers_sequenceSteps__WEBPACK_IMPORTED_MODULE_2__/* .mapToSortedSequenceSteps */ .v)(actions || []), [actions]);
}

/***/ }),

/***/ 76241:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ useValidateSequence)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44345);
/* harmony import */ var _helpers_sequenceValidation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13942);
/* harmony import */ var _helpers_sequenceVariables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18730);
/* harmony import */ var _sequenceActionsHooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13893);




function useValidateSequence(sequence, recipients, standardVariablesMap) {
  const actionsOptimized = (0,_sequenceActionsHooks__WEBPACK_IMPORTED_MODULE_2__/* .useSequenceActionsOptimized */ .B)(sequence);
  const actionsLength = actionsOptimized?.length || 0;
  const variablesSummary = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => (0,_helpers_sequenceVariables__WEBPACK_IMPORTED_MODULE_1__/* .getSequenceVariablesSummary */ .A)(actionsOptimized, standardVariablesMap), [actionsOptimized, standardVariablesMap]);
  const hasSubjectAndBody = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => actionsOptimized.every(a => a.hasSubject && a.hasBody), [actionsOptimized]);
  const variableResult = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (actionsLength === 0 || !recipients || recipients.length === 0) {
      return {
        invalidVariables: [],
        valid: false
      };
    }
    const invalidVariables = (0,_helpers_sequenceValidation__WEBPACK_IMPORTED_MODULE_3__/* .validateSequenceVariables */ .p)(variablesSummary, recipients);
    const valid = invalidVariables.length === 0 && hasSubjectAndBody;
    return {
      valid,
      invalidVariables
    };
  }, [actionsLength, hasSubjectAndBody, recipients, variablesSummary]);
  const result = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return {
      invalidVariables: variableResult.invalidVariables,
      valid: variableResult.valid
    };
  }, [variableResult]);
  return result;
}

/***/ }),

/***/ 70003:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ showMailMergePaywallModal)
/* harmony export */ });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81518);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _streakyc_common_services_data_user__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(5575);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47587);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_log_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7961);
/* harmony import */ var _modules_subscriptionFlows_planUpgradeFlow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50814);
/* harmony import */ var _modules_subscriptionFlows_trialUpgradeFlow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(33146);
/* harmony import */ var _redux_models_useReferral__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24465);
/* harmony import */ var _services_boxLimitChecker_doesUserHaveMoreBoxesThanOverallLimit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(93237);
/* harmony import */ var _services_butterBarManager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(99329);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(35091);
/* harmony import */ var _services_tracker_tracker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(13778);
/* harmony import */ var _widgets_modal_ModalChrome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(56823);
/* harmony import */ var _widgets_modal_showModal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(64673);
/* harmony import */ var _widgets_react_loadingSpinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(72905);
/* harmony import */ var _widgets_react_material_button_buttonLayout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(63726);
/* harmony import */ var _widgets_react_material_button_streakButton__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(22682);
/* harmony import */ var _components_QuickCopyBox_inlineQuickCopyBox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(40616);
/* harmony import */ var _modules_customOnboarding_startTeamJoinFlow__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(21582);
/* harmony import */ var _modules_billing_helpers__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(87872);
/* harmony import */ var _modules_billing_utils__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(57937);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_modules_subscriptionFlows_planUpgradeFlow__WEBPACK_IMPORTED_MODULE_3__, _modules_subscriptionFlows_trialUpgradeFlow__WEBPACK_IMPORTED_MODULE_4__, _services_boxLimitChecker_doesUserHaveMoreBoxesThanOverallLimit__WEBPACK_IMPORTED_MODULE_6__, _modules_customOnboarding_startTeamJoinFlow__WEBPACK_IMPORTED_MODULE_16__, _modules_billing_helpers__WEBPACK_IMPORTED_MODULE_17__, _modules_billing_utils__WEBPACK_IMPORTED_MODULE_18__]);
([_modules_subscriptionFlows_planUpgradeFlow__WEBPACK_IMPORTED_MODULE_3__, _modules_subscriptionFlows_trialUpgradeFlow__WEBPACK_IMPORTED_MODULE_4__, _services_boxLimitChecker_doesUserHaveMoreBoxesThanOverallLimit__WEBPACK_IMPORTED_MODULE_6__, _modules_customOnboarding_startTeamJoinFlow__WEBPACK_IMPORTED_MODULE_16__, _modules_billing_helpers__WEBPACK_IMPORTED_MODULE_17__, _modules_billing_utils__WEBPACK_IMPORTED_MODULE_18__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






















const REFFERAL_SUPPORT_LINK = 'https://support.streak.com/en/articles/4178004-referral-program';
const butterBarError = text => {
  _services_butterBarManager__WEBPACK_IMPORTED_MODULE_7__["default"].showError({
    text
  });
};
const logUpgradeError = err => {
  (0,_lib_log_error__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)({
    err,
    details: {
      userKey: (0,_streakyc_common_services_data_user__WEBPACK_IMPORTED_MODULE_20__/* .getUser */ .P)().key()
    },
    level: 'warning'
  });
};
const onPlanUpgradeClick = async team => {
  let response;

  // If the user is free and has org teams to join detour to the team join flow
  const isOnFreePlan = !(0,_modules_billing_helpers__WEBPACK_IMPORTED_MODULE_17__/* .isAnyTeamOnPremiumPlan */ .z9)();
  if (isOnFreePlan) {
    const recommendedTeam = await (0,_modules_billing_helpers__WEBPACK_IMPORTED_MODULE_17__/* .getRecommendedTeam */ .N2)();
    if (recommendedTeam) {
      const userflowStarted = await (0,_modules_customOnboarding_startTeamJoinFlow__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z)(recommendedTeam, team, false, 'upgradedMailMerge');
      if (userflowStarted) return Promise.resolve({
        planUpgraded: false,
        teamRequestMade: true
      });
    }
  }
  if (team) {
    try {
      response = (0,_modules_subscriptionFlows_planUpgradeFlow__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({
        isBackToPlansHidden: true,
        team,
        source: 'mailMerge.quotaExceeded.paidUpgrade'
      });
    } catch (err) {
      butterBarError(_services_locale_locale__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z.getString('paywall_upgrade_error'));
      logUpgradeError(err);
    }
  } else {
    butterBarError(_services_locale_locale__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z.getString('paywall_upgrade_error'));
    logUpgradeError(new Error('mail merge paywall: tried to upgrade plan without team'));
  }

  // response is a promise if the user has upgraded to a new plan
  return response ? Promise.resolve(response).then(response => response) : Promise.resolve({
    planUpgraded: false
  });
};
const onTrialUpgradeClick = async team => {
  let response;

  // If the user is free and has org teams to join detour to the team join flow
  const isOnFreePlan = !(0,_modules_billing_helpers__WEBPACK_IMPORTED_MODULE_17__/* .isAnyTeamOnPremiumPlan */ .z9)();
  if (isOnFreePlan) {
    const recommendedTeam = await (0,_modules_billing_helpers__WEBPACK_IMPORTED_MODULE_17__/* .getRecommendedTeam */ .N2)();
    if (recommendedTeam) {
      const userflowStarted = await (0,_modules_customOnboarding_startTeamJoinFlow__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z)(recommendedTeam, team, true, 'upgradedMailMerge');
      if (userflowStarted) return Promise.resolve({
        isTrialUpgraded: false,
        teamRequestMade: true
      });
    }
  }
  if (team) {
    try {
      response = (0,_modules_subscriptionFlows_trialUpgradeFlow__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)({
        feature: 'upgradedMailMerge',
        team
      });
    } catch (err) {
      butterBarError(_services_locale_locale__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z.getString('paywall_upgrade_trial_error'));
      logUpgradeError(err);
    }
  } else {
    butterBarError(_services_locale_locale__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z.getString('paywall_upgrade_trial_error'));
    logUpgradeError(new Error('mail merge paywall: tried to upgrade plan without team'));
  }

  // response is a promise if the user has upgraded to a new plan
  return response ? Promise.resolve(response).then(response => response) : Promise.resolve({
    isTrialUpgraded: false
  });
};
function showMailMergePaywallModal(onUpgradedPlan) {
  const _track = function (eventName) {
    let extraProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    _services_tracker_tracker__WEBPACK_IMPORTED_MODULE_9__["default"].track(`modal.paywall.mailMerge.${eventName}`, extraProps);
  };
  return (0,_widgets_modal_showModal__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)({
    viewOptions: {
      chrome: false
    },
    bodyComponent: _ref => {
      let {
        modalView
      } = _ref;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)("div", {
        className: "streak__modal_standard",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(MailMergePaywallChrome, {
          modalView: modalView,
          track: _track
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(MailMergePaywallBody, {
          modalView: modalView,
          onUpgradedPlan: onUpgradedPlan,
          track: _track
        })]
      });
    }
  });
}
function MailMergePaywallChrome(_ref2) {
  let {
    modalView,
    track
  } = _ref2;
  const team = (0,_modules_billing_helpers__WEBPACK_IMPORTED_MODULE_17__/* .getLargestTeam */ .n4)();
  const isEligibleForTrial = team ? (0,_modules_billing_utils__WEBPACK_IMPORTED_MODULE_18__/* .isTeamEligibleForTrial */ .Yq)(team) : (0,_streakyc_common_services_data_user__WEBPACK_IMPORTED_MODULE_20__/* .getUser */ .P)().isEligibleForTrial();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_widgets_modal_ModalChrome__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
    heading: _services_locale_locale__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z.getString('mail_merge_paywall_heading'),
    onClose: () => {
      track('close');
      modalView.close();
    },
    subheading: isEligibleForTrial ? _services_locale_locale__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z.getString('mail_merge_paywall_subheading_trial') : _services_locale_locale__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z.getString('mail_merge_paywall_subheading')
  });
}
function MailMergePaywallBody(_ref3) {
  let {
    modalView,
    onUpgradedPlan,
    track
  } = _ref3;
  const {
    result,
    type
  } = (0,_redux_models_useReferral__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
  const {
    referralCode
  } = result || {};
  const referralLink = `streak.com/r/${referralCode}`;
  const team = (0,_modules_billing_helpers__WEBPACK_IMPORTED_MODULE_17__/* .getLargestTeam */ .n4)();
  const isEligibleForTrial = team ? (0,_modules_billing_utils__WEBPACK_IMPORTED_MODULE_18__/* .isTeamEligibleForTrial */ .Yq)(team) : (0,_streakyc_common_services_data_user__WEBPACK_IMPORTED_MODULE_20__/* .getUser */ .P)().isEligibleForTrial();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)("div", {
    className: "jsx-2663300457" + " " + "streak__mailMerge_paywall",
    children: [type === 'loading' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("div", {
      className: "jsx-2663300457" + " " + "streak__mailMerge_paywall--loading",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_widgets_react_loadingSpinner__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
        style: {
          height: '100%'
        }
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)("div", {
      className: "jsx-2663300457" + " " + (classnames__WEBPACK_IMPORTED_MODULE_1___default()({
        'streak__mailMerge_paywall--isLoading': type === 'loading'
      }) || ""),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)("div", {
        className: "jsx-2663300457",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("b", {
          className: "jsx-2663300457",
          children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z.getString('mail_merge_paywall_option_1')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("p", {
          className: "jsx-2663300457",
          children: isEligibleForTrial ? _services_locale_locale__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z.getArray('mail_merge_paywall_option_1_body_trial', {
            proPlan: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("b", {
              className: "jsx-2663300457",
              children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z.getString('pro_plus_plan')
            }, _services_locale_locale__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z.getString('plan_name_pro'))
          }) : _services_locale_locale__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z.getArray('mail_merge_paywall_option_1_body', {
            proPlan: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("b", {
              className: "jsx-2663300457",
              children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z.getString('plan_name_pro')
            }, _services_locale_locale__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z.getString('plan_name_pro'))
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)("div", {
        className: "jsx-2663300457",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("b", {
          className: "jsx-2663300457",
          children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z.getArray('mail_merge_paywall_option_2', {
            maxPaidBoxLimit: _services_boxLimitChecker_doesUserHaveMoreBoxesThanOverallLimit__WEBPACK_IMPORTED_MODULE_6__/* .PAID_BOX_LIMIT */ .oj.toLocaleString()
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("p", {
          className: "jsx-2663300457",
          children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z.getArray('mail_merge_paywall_option_2_body', {
            referralMailMergeBonus: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("b", {
              className: "jsx-2663300457",
              children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z.getString('mail_merge_referral_bonus')
            }, "referralMailMergeBonus"),
            referralLink: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_components_QuickCopyBox_inlineQuickCopyBox__WEBPACK_IMPORTED_MODULE_15__/* .InlineQuickCopyBox */ .p, {
              copyConfirmButterText: _services_locale_locale__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z.getString('referral_link_copied'),
              track: track,
              value: referralLink
            }, "referralLink")
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("div", {
        className: "jsx-2663300457" + " " + "streak__modal_buttons",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_widgets_react_material_button_buttonLayout__WEBPACK_IMPORTED_MODULE_13__/* .ButtonRow */ .V, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)(_widgets_react_material_button_buttonLayout__WEBPACK_IMPORTED_MODULE_13__/* .ButtonGroup */ .h, {
            right: true,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_widgets_react_material_button_streakButton__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .ZP, {
              onClick: () => {
                window.open(REFFERAL_SUPPORT_LINK, '_blank');
                track('referral.learnMore.click');
                modalView.close();
              },
              variant: "text",
              children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z.getString('learn_more_about_referrals')
            }), isEligibleForTrial ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_widgets_react_material_button_streakButton__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .ZP, {
              onClick: e => {
                e.stopPropagation();
                track('trial.clicked');
                onTrialUpgradeClick(team).then(_ref4 => {
                  let {
                    isTrialUpgraded,
                    teamRequestMade
                  } = _ref4;
                  if (isTrialUpgraded && !teamRequestMade) {
                    track('trial.success');
                    onUpgradedPlan();
                  } else if (!teamRequestMade) {
                    track('trial.fail');
                  }
                  modalView.close();
                });
              },
              children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z.getString('start_your_free_pro_trial')
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_widgets_react_material_button_streakButton__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .ZP, {
              onClick: e => {
                e.stopPropagation();
                track('upgrade.clicked');
                onPlanUpgradeClick(team).then(_ref5 => {
                  let {
                    planUpgraded,
                    teamRequestMade
                  } = _ref5;
                  if (planUpgraded && !teamRequestMade) {
                    track('upgrade.success');
                    onUpgradedPlan();
                  } else if (!teamRequestMade) {
                    track('upgrade.fail');
                  }
                  modalView.close();
                });
              },
              children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z.getString('upgrade_to_pro_plan')
            })]
          })
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "2663300457",
      children: [".streak__mailMerge_paywall.jsx-2663300457{margin:16px;position:relative;}", ".streak__mailMerge_paywall--loading.jsx-2663300457{height:100%;position:absolute;width:100%;}", ".streak__mailMerge_paywall--isLoading.jsx-2663300457{visibility:hidden;}", ".streak__mailMerge_paywall.jsx-2663300457 p.jsx-2663300457{margin-top:0px;}", ".streak__modal_buttons.jsx-2663300457{margin-top:48px;}"]
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 28854:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ showMailMergePaywallModalForPaidUser)
/* harmony export */ });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81518);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _streakyc_common_services_data_user__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5575);
/* harmony import */ var _lib_log_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7961);
/* harmony import */ var _modules_billing_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87872);
/* harmony import */ var _modules_billing_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57937);
/* harmony import */ var _modules_subscriptionFlows_planUpgradeFlow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(50814);
/* harmony import */ var _modules_subscriptionFlows_trialUpgradeFlow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(33146);
/* harmony import */ var _services_butterBarManager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(99329);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(35091);
/* harmony import */ var _services_tracker_tracker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(13778);
/* harmony import */ var _widgets_modal_ModalChrome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(56823);
/* harmony import */ var _widgets_modal_showModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(64673);
/* harmony import */ var _widgets_react_material_button_buttonLayout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(63726);
/* harmony import */ var _widgets_react_material_button_streakButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(22682);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_modules_billing_helpers__WEBPACK_IMPORTED_MODULE_2__, _modules_billing_utils__WEBPACK_IMPORTED_MODULE_3__, _modules_subscriptionFlows_planUpgradeFlow__WEBPACK_IMPORTED_MODULE_4__, _modules_subscriptionFlows_trialUpgradeFlow__WEBPACK_IMPORTED_MODULE_5__]);
([_modules_billing_helpers__WEBPACK_IMPORTED_MODULE_2__, _modules_billing_utils__WEBPACK_IMPORTED_MODULE_3__, _modules_subscriptionFlows_planUpgradeFlow__WEBPACK_IMPORTED_MODULE_4__, _modules_subscriptionFlows_trialUpgradeFlow__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















const PRICING_LINK = 'https://streak.com/pricing';
const butterBarError = text => {
  _services_butterBarManager__WEBPACK_IMPORTED_MODULE_6__["default"].showError({
    text
  });
};
const logUpgradeError = err => {
  (0,_lib_log_error__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)({
    err,
    details: {
      userKey: (0,_streakyc_common_services_data_user__WEBPACK_IMPORTED_MODULE_14__/* .getUser */ .P)().key()
    },
    level: 'warning'
  });
};
const onPlanUpgradeClick = team => {
  let response;
  if (team) {
    try {
      response = (0,_modules_subscriptionFlows_planUpgradeFlow__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)({
        isBackToPlansHidden: true,
        team,
        source: 'mailMerge.quotaExceeded.paidUpgrade'
      });
    } catch (err) {
      butterBarError(_services_locale_locale__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.getString('paywall_upgrade_error'));
      logUpgradeError(err);
    }
  } else {
    butterBarError(_services_locale_locale__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.getString('paywall_upgrade_error'));
    logUpgradeError(new Error('mail merge paywall: tried to upgrade plan without team'));
  }

  // response is a promise if the user has upgraded to a new plan
  return response ? Promise.resolve(response).then(response => response) : Promise.resolve({
    planUpgraded: false
  });
};
const onTrialUpgradeClick = team => {
  let response;
  if (team) {
    try {
      response = (0,_modules_subscriptionFlows_trialUpgradeFlow__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)({
        feature: 'upgradedMailMerge',
        team
      });
    } catch (err) {
      butterBarError(_services_locale_locale__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.getString('paywall_upgrade_trial_error'));
      logUpgradeError(err);
    }
  } else {
    butterBarError(_services_locale_locale__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.getString('paywall_upgrade_trial_error'));
    logUpgradeError(new Error('mail merge paywall: tried to upgrade plan without team'));
  }

  // response is a promise if the user has upgraded to a new plan
  return response ? Promise.resolve(response).then(response => response) : Promise.resolve({
    isTrialUpgraded: false
  });
};
function showMailMergePaywallModalForPaidUser(onUpgradedPlan) {
  const _track = function (eventName) {
    let extraProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    _services_tracker_tracker__WEBPACK_IMPORTED_MODULE_8__["default"].track(`modal.paywall.mailMerge.${eventName}`, extraProps);
  };
  return (0,_widgets_modal_showModal__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)({
    viewOptions: {
      chrome: false
    },
    bodyComponent: _ref => {
      let {
        modalView
      } = _ref;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
        className: "streak__modal_standard",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(MailMergePaywallChrome, {
          modalView: modalView,
          track: _track
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(MailMergePaywallBody, {
          modalView: modalView,
          onUpgradedPlan: onUpgradedPlan,
          track: _track
        })]
      });
    }
  });
}
function MailMergePaywallChrome(_ref2) {
  let {
    modalView,
    track
  } = _ref2;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_widgets_modal_ModalChrome__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
    heading: _services_locale_locale__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.getString('mail_merge_paywall_heading'),
    onClose: () => {
      track('close');
      modalView.close();
    },
    subheading: _services_locale_locale__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.getString('mail_merge_paywall_subheading_paid')
  });
}
function MailMergePaywallBody(_ref3) {
  let {
    modalView,
    onUpgradedPlan,
    track
  } = _ref3;
  const team = (0,_modules_billing_helpers__WEBPACK_IMPORTED_MODULE_2__/* .getLargestTeam */ .n4)();
  const isEligibleForTrial = team ? (0,_modules_billing_utils__WEBPACK_IMPORTED_MODULE_3__/* .isTeamEligibleForTrial */ .Yq)(team) : (0,_streakyc_common_services_data_user__WEBPACK_IMPORTED_MODULE_14__/* .getUser */ .P)().isEligibleForTrial();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
    className: "jsx-1355299004" + " " + "streak__mailMerge_paywall",
    children: [isEligibleForTrial ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("p", {
      className: "jsx-1355299004",
      children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.getArray('mail_merge_paywall_body_paid_trial', {
        mailMergeLimit: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("b", {
          className: "jsx-1355299004",
          children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.getString('mail_merge_limit_1500')
        }, "mailMergeLimit"),
        proPlan: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("b", {
          className: "jsx-1355299004",
          children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.getString('pro_plus_plan')
        }, "proPlan")
      })
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("p", {
      className: "jsx-1355299004",
      children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.getArray('mail_merge_paywall_body_paid', {
        mailMergeLimit: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("b", {
          className: "jsx-1355299004",
          children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.getString('mail_merge_limit_1500')
        }, "mailMergeLimit"),
        proPlan: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("b", {
          className: "jsx-1355299004",
          children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.getString('pro_plan')
        }, "proPlan")
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
      className: "jsx-1355299004" + " " + "streak__modal_buttons",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_widgets_react_material_button_buttonLayout__WEBPACK_IMPORTED_MODULE_11__/* .ButtonRow */ .V, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_widgets_react_material_button_buttonLayout__WEBPACK_IMPORTED_MODULE_11__/* .ButtonGroup */ .h, {
          right: true,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_widgets_react_material_button_streakButton__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .ZP, {
            onClick: () => {
              window.open(PRICING_LINK, '_blank');
              track('limitedMailMerge.learnMore.click');
            },
            variant: "text",
            children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.getString('learn_more')
          }), isEligibleForTrial ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_widgets_react_material_button_streakButton__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .ZP, {
            onClick: e => {
              e.stopPropagation();
              track('trial.clicked');
              onTrialUpgradeClick(team).then(_ref4 => {
                let {
                  isTrialUpgraded
                } = _ref4;
                if (isTrialUpgraded) {
                  track('trial.success');
                  onUpgradedPlan();
                } else {
                  track('trial.fail');
                }
              });
              modalView.close();
            },
            children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.getString('start_your_free_trial')
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_widgets_react_material_button_streakButton__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .ZP, {
            onClick: e => {
              e.stopPropagation();
              track('upgrade.clicked');
              onPlanUpgradeClick(team).then(_ref5 => {
                let {
                  planUpgraded
                } = _ref5;
                if (planUpgraded) {
                  track('upgrade.success');
                  onUpgradedPlan();
                } else {
                  track('upgrade.fail');
                }
              });
              modalView.close();
            },
            children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.getString('upgrade_to_pro_plan')
          })]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "1355299004",
      children: [".streak__mailMerge_paywall.jsx-1355299004{margin:16px;position:relative;}", ".streak__mailMerge_paywall--loading.jsx-1355299004{height:100%;position:absolute;width:100%;}", ".streak__mailMerge_paywall.jsx-1355299004 p.jsx-1355299004{margin-top:0px;}", ".streak__modal_buttons.jsx-1355299004{margin-top:48px;}"]
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 27594:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $6: () => (/* binding */ _4),
/* harmony export */   OF: () => (/* binding */ _7),
/* harmony export */   QX: () => (/* binding */ _3),
/* harmony export */   Yq: () => (/* binding */ _1),
/* harmony export */   kQ: () => (/* binding */ _2),
/* harmony export */   lv: () => (/* binding */ _6),
/* harmony export */   oM: () => (/* binding */ _5)
/* harmony export */ });
// extracted by mini-css-extract-plugin
var _1 = "streak-mod__FkRAhikk9mrYlcmomn6b";
var _2 = "streak-mod__e9Q5CujOrD7C_iMDGYRi";
var _3 = "streak-mod__XiFz_lWuyjdU2b9TKH3d";
var _4 = "streak-mod__qgdaqL1SPvWp9Uh6eS9Y";
var _5 = "streak-mod__zgB1OM0HMdvYC5eg29b8";
var _6 = "streak-mod__gaBV7Y5Gni0ZqXHn5_dE";
var _7 = "streak-mod__wNTWP5677NwmJNZ0X8pI";



/***/ })

};
;
//# sourceMappingURL=https://storage.googleapis.com/streak-extension-sourcemaps/clientjs/clientjs.chunk.593.25b7b927db9771add865.js.map