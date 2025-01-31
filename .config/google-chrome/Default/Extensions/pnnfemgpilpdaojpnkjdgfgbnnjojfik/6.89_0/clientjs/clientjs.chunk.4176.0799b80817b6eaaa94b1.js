"use strict";
export const id = 4176;
export const ids = [4176];
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

/***/ 90542:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   y: () => (/* binding */ SequenceRecipientEmails)
/* harmony export */ });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81518);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47587);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(93733);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44345);
/* harmony import */ var _components_Icon_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71174);
/* harmony import */ var _components_IconButton_IconButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(94366);
/* harmony import */ var _core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(72493);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(35091);
/* harmony import */ var _helpers_combineSequenceRecipientEmails__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(57600);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_5__, _helpers_combineSequenceRecipientEmails__WEBPACK_IMPORTED_MODULE_7__]);
([_core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_5__, _helpers_combineSequenceRecipientEmails__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const SequenceRecipientEmailIcon = _ref => {
  let {
    email,
    size,
    onClick,
    showClicks
  } = _ref;
  size = size || 's';
  let icon = null;
  switch (email.state) {
    case _helpers_combineSequenceRecipientEmails__WEBPACK_IMPORTED_MODULE_7__/* .SequenceRecipientEmailState */ .Y.Draft:
      {
        icon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
          name: "insert_drive_file",
          accent: "inherit",
          isOutline: true,
          size: size,
          variant: "text"
        });
        break;
      }
    case _helpers_combineSequenceRecipientEmails__WEBPACK_IMPORTED_MODULE_7__/* .SequenceRecipientEmailState */ .Y.Scheduled:
      {
        const datetime = email.estimatedSendTimestamp;
        // TODO: Once we have the implementation for handling DONE recipients
        // after adding a new message to a non-DRAFT Sequence, we should remove
        // this if-check and have the icon show even if "datetime" is null
        if (datetime != null) {
          icon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            name: "schedule",
            accent: "inherit",
            isOutline: true,
            size: size,
            variant: "text",
            tooltip: _services_locale_locale__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.getString('sequence_view_message_scheduled_on', {
              date: date_fns__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z(datetime, 'MMM dd, yyyy'),
              time: date_fns__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z(datetime, 'h:mm a')
            })
          });
        } else {
          // This case can occur if a new message is added to a Sequence that
          // has recipients already in the DONE state. Although the new message(s)
          // are added to the DONE recipients' messageSchedule list, they will
          // never actually be scheduled to send (currently).
          icon = null;
        }
        break;
      }
    case _helpers_combineSequenceRecipientEmails__WEBPACK_IMPORTED_MODULE_7__/* .SequenceRecipientEmailState */ .Y.Sent:
      {
        if (email.clickedTimestamp && showClicks) {
          icon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            name: "attach_email",
            accent: "inherit",
            isOutline: true,
            size: size,
            variant: "text",
            tooltip: _services_locale_locale__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.getString('sequence_view_message_had_clicks', {
              date: date_fns__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z(email.clickedTimestamp, 'MMM dd, yyyy'),
              time: date_fns__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z(email.clickedTimestamp, 'h:mm a')
            })
          });
        } else if (email.viewedTimestamp) {
          const datetime = new Date(email.viewedTimestamp);
          icon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            name: "mark_email_read",
            accent: "inherit",
            isOutline: true,
            size: size,
            variant: "text",
            tooltip: _services_locale_locale__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.getString('sequence_view_message_viewed_on', {
              date: date_fns__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z(datetime, 'MMM dd, yyyy'),
              time: date_fns__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z(datetime, 'h:mm a')
            })
          });
        } else {
          const datetime = new Date(email.sendTimestamp);
          icon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            name: "email",
            accent: "inherit",
            isOutline: true,
            size: size,
            variant: "text",
            tooltip: _services_locale_locale__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.getString('sequence_view_message_sent_on', {
              date: date_fns__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z(datetime, 'MMM dd, yyyy'),
              time: date_fns__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z(datetime, 'h:mm a')
            })
          });
        }
        break;
      }
    case _helpers_combineSequenceRecipientEmails__WEBPACK_IMPORTED_MODULE_7__/* .SequenceRecipientEmailState */ .Y.Failed:
      {
        icon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
          name: "email",
          accent: "warning",
          isOutline: false,
          size: size,
          variant: "text",
          tooltip: email.reason
        });
        break;
      }
    case _helpers_combineSequenceRecipientEmails__WEBPACK_IMPORTED_MODULE_7__/* .SequenceRecipientEmailState */ .Y.Paused:
      {
        const datetime = email.estimatedSendTimestamp ? new Date(email.estimatedSendTimestamp) : null;
        icon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
          name: "pause",
          accent: "inherit",
          isOutline: true,
          size: size,
          variant: "text",
          tooltip: datetime ? _services_locale_locale__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.getString('sequence_view_message_paused_scheduled_on', {
            date: date_fns__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z(datetime, 'MMM dd, yyyy'),
            time: date_fns__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z(datetime, 'h:mm a')
          }) : _services_locale_locale__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.getString('sequence_view_message_paused_manually'),
          color: 'var(--streak-black-disabled)'
        });
        break;
      }
    case _helpers_combineSequenceRecipientEmails__WEBPACK_IMPORTED_MODULE_7__/* .SequenceRecipientEmailState */ .Y.Cancelled:
      {
        icon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
          name: "close",
          accent: "inherit",
          isOutline: true,
          size: size,
          variant: "text",
          tooltip: email.reason,
          color: 'var(--streak-black-disabled)'
        });
        break;
      }
  }
  if (!icon) {
    return null;
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
    className: "jsx-1635349258" + " " + "icon_wrapper",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_IconButton_IconButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
      onClick: () => onClick?.(email),
      children: icon
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "1635349258",
      children: [".icon_wrapper.jsx-1635349258{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}"]
    })]
  });
};
function SequenceRecipientEmails(_ref2) {
  let {
    actions,
    messageHistory,
    messageSchedule,
    recipientStatus,
    onClickMessage,
    showClicks
  } = _ref2;
  const allEmails = (0,_helpers_combineSequenceRecipientEmails__WEBPACK_IMPORTED_MODULE_7__/* .combineSequenceRecipientEmails */ .U)(recipientStatus, actions, messageHistory, messageSchedule);
  const sentEmails = [];
  const unsentEmails = [];
  allEmails.forEach(msg => {
    // assumption here is that emails with Sent state is always come first
    if (msg.state === _helpers_combineSequenceRecipientEmails__WEBPACK_IMPORTED_MODULE_7__/* .SequenceRecipientEmailState */ .Y.Sent) {
      sentEmails.push(msg);
    } else {
      unsentEmails.push(msg);
    }
  });
  const active = recipientStatus === _core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_5__/* .SequenceRecipientStatus */ .sR.Scheduled || recipientStatus === _core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_5__/* .SequenceRecipientStatus */ .sR.Running;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
    onClick: e => e.stopPropagation(),
    className: "jsx-1115434988" + " " + (classnames__WEBPACK_IMPORTED_MODULE_1___default()('streak__sequence_view_recipient_emails', {
      'has-background': active
    }) || ""),
    children: [sentEmails.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
      className: "jsx-1115434988" + " " + (classnames__WEBPACK_IMPORTED_MODULE_1___default()('sent_message_wrapper') || ""),
      children: sentEmails.map((msg, idx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        className: "jsx-1115434988" + " " + "message_status_wrapper",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(SequenceRecipientEmailIcon, {
          showClicks: showClicks,
          email: msg,
          onClick: () => onClickMessage?.(msg.hexGmailThreadId)
        }), idx !== sentEmails.length - 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
          className: "jsx-1115434988" + " " + "divider"
        })]
      }, msg.actionId))
    }), unsentEmails.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
      className: "jsx-1115434988" + " " + "unsent_message_wrapper",
      children: unsentEmails.map((msg, idx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        className: "jsx-1115434988" + " " + "message_status_wrapper",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(SequenceRecipientEmailIcon, {
          email: msg,
          showClicks: showClicks
        }), idx !== unsentEmails.length - 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
          className: "jsx-1115434988" + " " + "divider"
        })]
      }, msg.actionId))
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "1115434988",
      children: [".streak__sequence_view_recipient_emails.jsx-1115434988{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;color:var(--streak-black-secondary);border-radius:20px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;}", ".streak__sequence_view_recipient_emails.has-background.jsx-1115434988{background:var(--streak-black-surface);}", ".sent_message_wrapper.jsx-1115434988{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;background:#ffffff;border:1px solid var(--streak-black-divider);padding:4px 8px;border-radius:20px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;box-sizing:border-box;}", ".streak__sequence_view_recipient_emails.jsx-1115434988 .sent_message_wrapper.jsx-1115434988:hover{cursor:pointer;box-shadow: 0px 2px 2px rgba(0,0,0,0.12), 0px 3px 1px rgba(0,0,0,0.12), 0px 1px 5px rgba(0,0,0,0.2);}", ".message_status_wrapper.jsx-1115434988{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}", ".divider.jsx-1115434988{width:2px;height:8px;margin:auto 6px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;background-color:var(--streak-black-divider);}", ".unsent_message_wrapper.jsx-1115434988{padding:5px 8px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".unsent_message_wrapper.jsx-1115434988:last-child{margin-right:2px;}"]
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 59938:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EP: () => (/* binding */ SequenceStatusIconWithText),
/* harmony export */   J: () => (/* binding */ SequenceRecipientStatusIconWithText)
/* harmony export */ });
/* unused harmony export SequenceRecipientStatusIcon */
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81518);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47587);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44345);
/* harmony import */ var _components_Icon_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71174);
/* harmony import */ var _services_tracker_useTracker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(70989);
/* harmony import */ var _widgets_react_material_menu_menuButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(23304);
/* harmony import */ var _widgets_react_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(82792);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(35091);
/* harmony import */ var _helpers_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9873);
/* harmony import */ var _core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(72493);
/* harmony import */ var _helpers_status__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7492);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1433);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_9__, _helpers_status__WEBPACK_IMPORTED_MODULE_10__, _index__WEBPACK_IMPORTED_MODULE_11__]);
([_core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_9__, _helpers_status__WEBPACK_IMPORTED_MODULE_10__, _index__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














function StatusMenuItemContent(_ref) {
  let {
    option,
    isSelected
  } = _ref;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
    className: "jsx-1585683949" + " " + (classnames__WEBPACK_IMPORTED_MODULE_1___default()('status_item_wrapper', {
      'is-selected': isSelected
    }) || ""),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
      className: "jsx-1585683949" + " " + "content",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
        className: "jsx-1585683949" + " " + "title",
        children: option.title
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
        className: "jsx-1585683949" + " " + "description",
        children: option.description
      })]
    }), isSelected && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
      className: "jsx-1585683949" + " " + "icon-wrapper",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        name: "check",
        accent: "default",
        isOutline: true,
        size: "m",
        variant: "text"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "1585683949",
      children: [".status_item_wrapper.jsx-1585683949{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:var(--streak-black-primary);}", ".status_item_wrapper.is-selected.jsx-1585683949 .title.jsx-1585683949,.status_item_wrapper.is-selected.jsx-1585683949 .description.jsx-1585683949{color:var(--streak-app-primary);}", ".status_item_wrapper.is-selected.jsx-1585683949 .title.jsx-1585683949{font-weight:bold;}", ".icon-wrapper.jsx-1585683949{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-left:auto;}", ".title.jsx-1585683949{font-family:Roboto;font-style:normal;font-weight:normal;font-size:14px;-webkit-letter-spacing:0.25px;-moz-letter-spacing:0.25px;-ms-letter-spacing:0.25px;letter-spacing:0.25px;line-height:20px;margin-bottom:4px;}", ".description.jsx-1585683949{font-family:Roboto;font-style:normal;font-weight:normal;font-size:13px;line-height:16px;color:var(--streak-black-secondary);}"]
    })]
  });
}
function StatusMenu(_ref2) {
  let {
    icon,
    selected,
    disabled,
    onMenuClose,
    onMenuOpen,
    onSelect,
    options
  } = _ref2;
  const menuButtonRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  const _track = (0,_services_tracker_useTracker__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP)('status');
  const optionsAvailable = options && options.length > 0;
  const button = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(_ref3 => {
    let {
      domRef,
      ...menuButtonProps
    } = _ref3;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
      ...menuButtonProps,
      ref: domRef,
      onMouseDown: e => {
        e.preventDefault();
        if (!disabled && optionsAvailable) {
          menuButtonProps.onMouseDown(e);
        }
      },
      className: "jsx-3895240585" + " " + (classnames__WEBPACK_IMPORTED_MODULE_1___default()('streak__sequence_status', {
        'options-available': optionsAvailable
      }) || ""),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
        className: "jsx-3895240585" + " " + "icon-wrapper",
        children: icon
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
        style: selected.labelStyle,
        className: "jsx-3895240585" + " " + "status",
        children: selected.label
      }), optionsAvailable && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
        className: "jsx-3895240585" + " " + "dropdown_menu_icon_wrapper",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
          name: "arrow_drop_down",
          accent: "inherit",
          isOutline: false,
          size: "s",
          variant: "text"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
        id: "3895240585",
        children: [".streak__sequence_status.jsx-3895240585{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-family:Roboto;font-style:normal;font-weight:normal;font-size:14px;line-height:20px;-webkit-letter-spacing:0.25px;-moz-letter-spacing:0.25px;-ms-letter-spacing:0.25px;letter-spacing:0.25px;}", ".streak__sequence_status.options-available.jsx-3895240585:not([disabled]){cursor:pointer;}", ".streak__sequence_status[disabled].jsx-3895240585,.streak__sequence_status[disabled].jsx-3895240585 .status.jsx-3895240585{color:var(--streak-black-disabled);}", ".icon-wrapper.jsx-3895240585{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-right:4px;}", ".status.jsx-3895240585{text-transform:capitalize;color:var(--streak-black-primary);}", ".dropdown_menu_icon_wrapper.jsx-3895240585{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}"]
      })]
    });
  }, [optionsAvailable, icon, selected, disabled]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
    onClick: e => e.stopPropagation(),
    className: "jsx-2386598445" + " " + "streak__sequence_status_wrapper",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_widgets_react_material_menu_menuButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
      ButtonComponent: button,
      disabled: disabled,
      menu: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_widgets_react_material_menu__WEBPACK_IMPORTED_MODULE_6__/* .Dropdown */ .Lt, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_widgets_react_material_menu__WEBPACK_IMPORTED_MODULE_6__/* .MenuList */ .qy, {
          children: (options || [])?.map((option, index) => {
            const isItemSelected = selected.value.toLowerCase() === option.value.toLowerCase();
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_widgets_react_material_menu__WEBPACK_IMPORTED_MODULE_6__/* .MenuItem */ .sN, {
              onItemChosen: () => {
                if (onSelect && !isItemSelected) {
                  _track('option.click', option);
                  onSelect(option);
                }
              },
              autoHeight: true,
              style: {
                whiteSpace: 'normal',
                padding: '6px 12px',
                width: '280px'
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(StatusMenuItemContent, {
                option: option,
                isSelected: isItemSelected
              })
            }, index);
          })
        })
      }),
      onWillClose: () => {
        if (onMenuClose) {
          _track('menu.close');
          onMenuClose();
        }
      },
      onWillOpen: () => {
        if (onMenuOpen) {
          _track('menu.close');
          onMenuOpen();
        }
      },
      ref: menuButtonRef
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "2386598445",
      children: [".streak__sequence_status_wrapper.jsx-2386598445{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}"]
    })]
  });
}
function SequenceStatusIconWithText(_ref4) {
  let {
    status,
    activeRecipientCount,
    disabled
  } = _ref4;
  let statusLocaleKey = _helpers_constants__WEBPACK_IMPORTED_MODULE_8__/* .SEQUENCE_STATUS_LOCALES */ .mj[status];
  if ((0,_helpers_status__WEBPACK_IMPORTED_MODULE_10__/* .isFinished */ .I)(status, activeRecipientCount)) {
    statusLocaleKey = 'sequences_view_status_finished';
  } else if (status === _core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_9__/* .SequenceStatus */ .ST.Archived) {
    statusLocaleKey = 'sequences_view_status_archived';
  }
  const selectedOption = {
    label: _services_locale_locale__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.getString(statusLocaleKey),
    value: status
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(StatusMenu, {
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_index__WEBPACK_IMPORTED_MODULE_11__/* .SequenceStatusIcon */ .KK, {
      status: status,
      activeRecipientCount: activeRecipientCount
    }),
    selected: selectedOption,
    disabled: disabled
  });
}
const SequenceRecipientStatusIcon = _ref5 => {
  let {
    status,
    size
  } = _ref5;
  let iconProps = {
    name: 'mode',
    accent: 'muted',
    variant: 'outline',
    isOutline: true,
    size: size || 's'
  };
  switch (status) {
    case _core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_9__/* .SequenceRecipientStatus */ .sR.Draft:
      {
        break;
      }
    case _core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_9__/* .SequenceRecipientStatus */ .sR.Scheduled:
      {
        iconProps = {
          name: 'watch_later',
          accent: 'muted',
          variant: 'text',
          isOutline: true,
          size: size || 'ms'
        };
        break;
      }
    case _core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_9__/* .SequenceRecipientStatus */ .sR.Running:
      {
        iconProps = {
          name: 'fiber_manual_record',
          accent: 'success',
          variant: 'inline',
          isOutline: false,
          size: size || 'ms'
        };
        break;
      }
    case _core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_9__/* .SequenceRecipientStatus */ .sR.Error:
      {
        iconProps = {
          name: 'error',
          accent: 'warning',
          variant: 'inline',
          isOutline: false,
          size: size || 's'
        };
        break;
      }
    case _core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_9__/* .SequenceRecipientStatus */ .sR.Paused:
      {
        iconProps = {
          name: 'pause_circle',
          accent: 'highlight',
          variant: 'inline',
          isOutline: false,
          size: size || 's'
        };
        break;
      }
    case _core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_9__/* .SequenceRecipientStatus */ .sR.Replied:
      {
        iconProps = {
          name: 'reply',
          accent: 'muted',
          variant: 'inline',
          isOutline: false,
          size: size || 's'
        };
        break;
      }
    case _core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_9__/* .SequenceRecipientStatus */ .sR.Done:
      {
        iconProps = {
          name: 'remove',
          accent: 'muted',
          variant: 'inline',
          isOutline: true,
          size: size || 'ms'
        };
        break;
      }
    default:
      {
        break;
      }
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    ...iconProps
  });
};
const SequenceRecipientStatusIconWithText = _ref6 => {
  let {
    status,
    disabled,
    onSelectStatus,
    onMenuOpen,
    onMenuClose
  } = _ref6;
  let selectedOption = {
    label: _services_locale_locale__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.getString(_helpers_constants__WEBPACK_IMPORTED_MODULE_8__/* .SEQUENCE_RECIPIENT_STATUS_LOCALES */ .bV[status]),
    value: status
  };
  let options = [];
  switch (status) {
    case _core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_9__/* .SequenceRecipientStatus */ .sR.Draft:
      {
        break;
      }
    case _core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_9__/* .SequenceRecipientStatus */ .sR.Scheduled:
      {
        options = [{
          label: _services_locale_locale__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.getString(_helpers_constants__WEBPACK_IMPORTED_MODULE_8__/* .SEQUENCE_RECIPIENT_STATUS_LOCALES */ .bV[status]),
          title: _services_locale_locale__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.getString(_helpers_constants__WEBPACK_IMPORTED_MODULE_8__/* .SEQUENCE_RECIPIENT_STATUS_LOCALES */ .bV[status]),
          description: _services_locale_locale__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.getString('sequence_view_messages_on_schedule'),
          value: status
        }, {
          label: _services_locale_locale__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.getString('pause'),
          title: _services_locale_locale__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.getString('pause'),
          description: _services_locale_locale__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.getString('sequence_view_no_further_messages_sent'),
          value: _core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_9__/* .SequenceRecipientStatus */ .sR.Paused
        }];
        break;
      }
    case _core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_9__/* .SequenceRecipientStatus */ .sR.Running:
      {
        options = [{
          label: _services_locale_locale__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.getString(_helpers_constants__WEBPACK_IMPORTED_MODULE_8__/* .SEQUENCE_RECIPIENT_STATUS_LOCALES */ .bV[status]),
          title: _services_locale_locale__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.getString(_helpers_constants__WEBPACK_IMPORTED_MODULE_8__/* .SEQUENCE_RECIPIENT_STATUS_LOCALES */ .bV[status]),
          description: _services_locale_locale__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.getString('sequence_view_messages_on_schedule'),
          value: status
        }, {
          label: _services_locale_locale__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.getString('pause'),
          title: _services_locale_locale__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.getString('pause'),
          description: _services_locale_locale__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.getString('sequence_view_no_further_messages_sent'),
          value: _core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_9__/* .SequenceRecipientStatus */ .sR.Paused
        }];
        break;
      }
    case _core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_9__/* .SequenceRecipientStatus */ .sR.Paused:
      {
        options = [{
          label: _services_locale_locale__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.getString('resume'),
          title: _services_locale_locale__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.getString('resume'),
          description: _services_locale_locale__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.getString('sequence_recipient_status_resume_description'),
          value: _core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_9__/* .SequenceRecipientStatus */ .sR.Running
        }, {
          label: _services_locale_locale__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.getString(_helpers_constants__WEBPACK_IMPORTED_MODULE_8__/* .SEQUENCE_RECIPIENT_STATUS_LOCALES */ .bV[status]),
          title: _services_locale_locale__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.getString(_helpers_constants__WEBPACK_IMPORTED_MODULE_8__/* .SEQUENCE_RECIPIENT_STATUS_LOCALES */ .bV[status]),
          description: _services_locale_locale__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.getString('sequence_view_no_further_messages_sent'),
          value: status
        }];
        break;
      }
    case _core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_9__/* .SequenceRecipientStatus */ .sR.Replied:
      {
        selectedOption.labelStyle = {
          fontWeight: 'bold'
        };
        break;
      }
    case _core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_9__/* .SequenceRecipientStatus */ .sR.Done:
      {
        selectedOption.labelStyle = {
          color: 'var(--streak-black-secondary)'
        };
        break;
      }
    case _core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_9__/* .SequenceRecipientStatus */ .sR.Error:
      {
        break;
      }
  }
  if (!selectedOption) {
    selectedOption = {
      label: status,
      value: status
    };
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(StatusMenu, {
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(SequenceRecipientStatusIcon, {
      status: status
    }),
    selected: selectedOption,
    disabled: disabled,
    options: options,
    onSelect: option => onSelectStatus?.(option.value),
    onMenuOpen: onMenuOpen,
    onMenuClose: onMenuClose
  });
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 34176:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SequenceView)
/* harmony export */ });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81518);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44345);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64219);
/* harmony import */ var _widgets_react_material_button_streakButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22682);
/* harmony import */ var _services_tracker_useTracker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(70989);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(35091);
/* harmony import */ var _core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(72493);
/* harmony import */ var _components_Icon_Icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(71174);
/* harmony import */ var _widgets_modal_confirmModalEx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(39367);
/* harmony import */ var _react_query_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(27758);
/* harmony import */ var _lib_log_error__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7961);
/* harmony import */ var _quotaView_api_errors__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(59158);
/* harmony import */ var _core_api_errors__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(69430);
/* harmony import */ var _services_localSettings_localSettings__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(55868);
/* harmony import */ var _api_queries__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(55639);
/* harmony import */ var _api_errors__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(70496);
/* harmony import */ var _hooks_useSequences__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(14643);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(63070);
/* harmony import */ var _SequenceViewRecipientsList__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(93514);
/* harmony import */ var _SequenceApiErrorSidebarModal__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(8345);
/* harmony import */ var _sequenceViewHeader__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(82070);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_6__, _quotaView_api_errors__WEBPACK_IMPORTED_MODULE_11__, _api_queries__WEBPACK_IMPORTED_MODULE_13__, _hooks_useSequences__WEBPACK_IMPORTED_MODULE_15__, _SequenceViewRecipientsList__WEBPACK_IMPORTED_MODULE_16__, _SequenceApiErrorSidebarModal__WEBPACK_IMPORTED_MODULE_17__, _sequenceViewHeader__WEBPACK_IMPORTED_MODULE_18__]);
([_core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_6__, _quotaView_api_errors__WEBPACK_IMPORTED_MODULE_11__, _api_queries__WEBPACK_IMPORTED_MODULE_13__, _hooks_useSequences__WEBPACK_IMPORTED_MODULE_15__, _SequenceViewRecipientsList__WEBPACK_IMPORTED_MODULE_16__, _SequenceApiErrorSidebarModal__WEBPACK_IMPORTED_MODULE_17__, _sequenceViewHeader__WEBPACK_IMPORTED_MODULE_18__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






















function SequenceView(_ref) {
  let {
    sequenceKey,
    emails
  } = _ref;
  const {
    mutateAsync: updateSequence
  } = (0,_hooks_useSequences__WEBPACK_IMPORTED_MODULE_15__/* .useUpdateSequence */ .Mn)();
  const sequenceInfoResult = (0,_hooks_useSequences__WEBPACK_IMPORTED_MODULE_15__/* .useSequenceInfo */ .HW)(sequenceKey, {
    refetchOnWindowFocus: false
  });
  const sequenceInfo = sequenceInfoResult.data;
  const loaded = sequenceInfoResult.status === 'success' && !!sequenceInfo;
  const [resuming, setResuming] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [lastApiError, setLastApiError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const queryClient = (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useQueryClient)();
  const fetchSequence = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async () => {
    if (!sequenceInfo?.key) {
      return null;
    }
    const seqInfoClient = (0,_react_query_utils__WEBPACK_IMPORTED_MODULE_9__/* .scopeQueryClientWithKey */ .hM)(queryClient, _api_queries__WEBPACK_IMPORTED_MODULE_13__/* .SEQUENCE_INFO_QUERY_DEF */ .tG, {
      sequenceKey: sequenceInfo?.key
    });
    return await seqInfoClient.fetchQuery();
  }, [queryClient, sequenceInfo?.key]);
  const trackEvent = (0,_services_tracker_useTracker__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP)('sequenceView');
  const paused = sequenceInfo?.status === _core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_6__/* .SequenceStatus */ .ST.Paused;
  const canActivate = loaded && sequenceInfo.status === _core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_6__/* .SequenceStatus */ .ST.Paused;
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (sequenceInfo?.status === _core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_6__/* .SequenceStatus */ .ST.Archived) {
      _services_localSettings_localSettings__WEBPACK_IMPORTED_MODULE_12__.InMemorySettings.remove(_constants__WEBPACK_IMPORTED_MODULE_20__/* .SETTING */ .F);
    }
  }, [sequenceInfo?.status]);
  const activateSeq = async () => {
    setResuming(true);
    try {
      // force fetch latest overdueRecipientCount value
      const seqInfo = await fetchSequence();
      if (!seqInfo) {
        return;
      }
      const askConfirm = seqInfo.overdueRecipientCount > 0;
      if (askConfirm) {
        const res = await (0,_widgets_modal_confirmModalEx__WEBPACK_IMPORTED_MODULE_8__/* .showConfirmModalEx */ .Z)({
          size: 'medium',
          title: _services_locale_locale__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.getString('sequence_resume_overdue_warning_msg_title', {
            count: seqInfo.overdueRecipientCount
          }),
          subtitle: _services_locale_locale__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.getString('sequence_resume_overdue_warning_msg_subtitle', {
            count: seqInfo.overdueRecipientCount
          }),
          bodyComponent: () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("div", {
            children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.getString('sequence_resume_overdue_warning_msg_body')
          }),
          confirmButtonText: _services_locale_locale__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.getString('resume'),
          hideCancel: false
        });
        if (!res.confirmClicked) {
          return;
        }
      }
      await updateSequence({
        key: sequenceKey,
        status: _core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_6__/* .SequenceStatus */ .ST.Active
      });
    } catch (err) {
      (0,_lib_log_error__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .ZP)({
        err,
        level: 'error',
        details: {
          sequenceKey
        },
        message: 'failed to activate sequence'
      });
      const sequenceApiError = await (0,_api_errors__WEBPACK_IMPORTED_MODULE_14__/* .tryGetSequenceApiError */ .w)(err);
      if (sequenceApiError) {
        setLastApiError(sequenceApiError);
        return;
      }
      const quotaApiError = await (0,_quotaView_api_errors__WEBPACK_IMPORTED_MODULE_11__/* .tryGetQuotaApiError */ .RH)(err);
      if (quotaApiError) {
        setLastApiError(quotaApiError);
        return;
      }
      setLastApiError((0,_core_api_errors__WEBPACK_IMPORTED_MODULE_21__/* .tryGetUnknownApiError */ .S)(err));
    } finally {
      setResuming(false);
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_services_tracker_useTracker__WEBPACK_IMPORTED_MODULE_4__/* .TrackerContext */ .fy.Provider, {
    value: trackEvent,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)("div", {
      className: "jsx-2039903022" + " " + "streak__sequence_view",
      children: [lastApiError && !resuming && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_SequenceApiErrorSidebarModal__WEBPACK_IMPORTED_MODULE_17__/* .SequenceApiErrorSidebarModal */ .q, {
        apiError: lastApiError,
        onClose: () => setLastApiError(undefined)
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_sequenceViewHeader__WEBPACK_IMPORTED_MODULE_18__/* .SequenceViewHeader */ .m, {
        sequenceKey: sequenceKey
      }), paused && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)("div", {
        className: "jsx-2039903022" + " " + "streak__sequence_view_banner_container",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
          name: "pause_circle_outline",
          accent: "muted",
          variant: "text",
          isOutline: true,
          size: "m"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("div", {
          className: "jsx-2039903022" + " " + "description",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("span", {
            className: "jsx-2039903022" + " " + "description-text",
            children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.getString('sequence_view_status_paused_description')
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("div", {
          className: "jsx-2039903022" + " " + "actions",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_widgets_react_material_button_streakButton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP, {
            variant: "text",
            disabled: !canActivate || resuming,
            onClick: () => {
              trackEvent('activate.click');
              activateSeq();
            },
            children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.getString('resume')
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_SequenceViewRecipientsList__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
        sequenceKey: sequenceKey,
        emails: emails,
        sequenceActions: sequenceInfo?.actions || []
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
        id: "2039903022",
        children: [".streak__sequence_view.jsx-2039903022{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;background-color:white;font-family:Roboto;font-size:14px;-webkit-letter-spacing:0.25px;-moz-letter-spacing:0.25px;-ms-letter-spacing:0.25px;letter-spacing:0.25px;color:var(--streak-black-primary);box-sizing:border-box;padding-right:16px;min-width:760px;}", ".streak__sequence_view_banner_container.jsx-2039903022{margin-top:9px;background-color:var(--streak-black-surface);border-radius:4px;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:6px 20px;}", ".streak__sequence_view_banner_container.jsx-2039903022 .description.jsx-2039903022{padding-left:28px;-webkit-flex:2;-ms-flex:2;flex:2;}", ".streak__sequence_view_banner_container.jsx-2039903022 .description-text.jsx-2039903022{padding:6px 0;}", ".streak__sequence_view_banner_container.jsx-2039903022 .actions.jsx-2039903022{-webkit-flex:1;-ms-flex:1;flex:1;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}"]
      })]
    })
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 67957:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KC: () => (/* binding */ SequenceRecipientListItem),
/* harmony export */   SS: () => (/* binding */ SequenceRecipientListItemWithInfo)
/* harmony export */ });
/* unused harmony export SequenceRecipientNameWithAvatar */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44345);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(93733);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47587);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10295);
/* harmony import */ var _lib_utils_prettyDate__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(13871);
/* harmony import */ var _widgets_react_material_tooltip_TooltipContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9112);
/* harmony import */ var _helpers_getSequenceRecipients__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80115);
/* harmony import */ var _SequenceStatus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(59938);
/* harmony import */ var _SequenceRecipientEmails__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(90542);
/* harmony import */ var _services_tracker_useTracker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(70989);
/* harmony import */ var _SequenceViewRecipientListItem_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(84095);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_helpers_getSequenceRecipients__WEBPACK_IMPORTED_MODULE_4__, _SequenceStatus__WEBPACK_IMPORTED_MODULE_5__, _SequenceRecipientEmails__WEBPACK_IMPORTED_MODULE_6__]);
([_helpers_getSequenceRecipients__WEBPACK_IMPORTED_MODULE_4__, _SequenceStatus__WEBPACK_IMPORTED_MODULE_5__, _SequenceRecipientEmails__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const SequenceRecipientListItem = _ref => {
  let {
    id,
    style,
    dimmed,
    recipientNameColumn,
    emailsColumn,
    statusColumn,
    firstSentColumn,
    onClick
  } = _ref;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
    id: id,
    style: style,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_SequenceViewRecipientListItem_module_css__WEBPACK_IMPORTED_MODULE_9__/* .sequenceViewRecipientListItem */ .vO, {
      [_SequenceViewRecipientListItem_module_css__WEBPACK_IMPORTED_MODULE_9__/* .listItemDimmed */ .p_]: !!dimmed,
      [_SequenceViewRecipientListItem_module_css__WEBPACK_IMPORTED_MODULE_9__/* .clickable */ .Zk]: !!onClick
    }),
    onClick: onClick,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
      className: _SequenceViewRecipientListItem_module_css__WEBPACK_IMPORTED_MODULE_9__/* .leftAlign */ .aF,
      children: recipientNameColumn
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
      className: _SequenceViewRecipientListItem_module_css__WEBPACK_IMPORTED_MODULE_9__/* .leftAlign */ .aF,
      children: emailsColumn
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
      className: _SequenceViewRecipientListItem_module_css__WEBPACK_IMPORTED_MODULE_9__/* .leftAlign */ .aF,
      children: statusColumn
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
      className: _SequenceViewRecipientListItem_module_css__WEBPACK_IMPORTED_MODULE_9__/* .rightAlign */ .J_,
      children: firstSentColumn
    })]
  });
};
const SequenceRecipientListItemWithInfo = _ref2 => {
  let {
    id,
    style,
    dimmed,
    actions,
    recipient,
    onGoToRecipient,
    onGoToThread,
    onStatusChange,
    disabled,
    showClicks
  } = _ref2;
  const track = (0,_services_tracker_useTracker__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP)('recipient');
  const messageHistory = recipient.messageHistory;
  const firstSent = messageHistory && messageHistory.length > 0 ? messageHistory[0].sendTimestamp : null;
  const [menuOpened, setMenuOpened] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const goToRecipient = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    track('click', {
      recipientKey: recipient.key,
      contactKey: recipient.contactKey
    });
    onGoToRecipient(recipient);
  }, [track, onGoToRecipient, recipient]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(SequenceRecipientListItem, {
    id: id,
    style: style,
    dimmed: menuOpened ? false : dimmed,
    onClick: goToRecipient,
    recipientNameColumn: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(SequenceRecipientNameWithAvatar, {
      recipient: recipient
    }),
    emailsColumn: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_SequenceRecipientEmails__WEBPACK_IMPORTED_MODULE_6__/* .SequenceRecipientEmails */ .y, {
      actions: actions,
      messageHistory: recipient.messageHistory,
      messageSchedule: recipient.messageSchedule,
      recipientStatus: recipient.state,
      onClickMessage: hexGmailThreadId => onGoToThread(recipient, hexGmailThreadId),
      showClicks: showClicks
    }),
    statusColumn: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_SequenceStatus__WEBPACK_IMPORTED_MODULE_5__/* .SequenceRecipientStatusIconWithText */ .J, {
      status: recipient.state,
      onSelectStatus: newStatus => onStatusChange(recipient, newStatus),
      onMenuOpen: () => setMenuOpened(true),
      onMenuClose: () => setMenuOpened(false),
      disabled: disabled
    }),
    firstSentColumn: firstSent ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_widgets_react_material_tooltip_TooltipContainer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
      tooltip: date_fns__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z(firstSent, 'MMM dd, yyyy, h:mm a'),
      children: (0,_lib_utils_prettyDate__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)(new Date(firstSent))
    }) : '-'
  });
};
const SequenceRecipientNameWithAvatar = _ref3 => {
  let {
    recipient
  } = _ref3;
  const fullName = (0,_helpers_getSequenceRecipients__WEBPACK_IMPORTED_MODULE_4__/* .getSequenceRecipientFullName */ .S0)(recipient);
  const {
    emails,
    photoUrl
  } = recipient;
  const email = emails[0];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
    className: _SequenceViewRecipientListItem_module_css__WEBPACK_IMPORTED_MODULE_9__/* .sequenceViewRecipient */ .m,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
      className: _SequenceViewRecipientListItem_module_css__WEBPACK_IMPORTED_MODULE_9__/* .avatarWrapper */ .Pq,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        imageUrl: photoUrl,
        name: fullName || email,
        size: 24,
        variant: "circle"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: _SequenceViewRecipientListItem_module_css__WEBPACK_IMPORTED_MODULE_9__/* .content */ .kQ,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
        children: fullName || email
      }), fullName && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
        className: _SequenceViewRecipientListItem_module_css__WEBPACK_IMPORTED_MODULE_9__/* .emails */ .Jn,
        children: ` • ${email}`
      })]
    })]
  });
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 93514:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ SequenceViewRecipientsList)
/* harmony export */ });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81518);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44345);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17013);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _streakyc_ui_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87084);
/* harmony import */ var _streakyc_ui_components_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2225);
/* harmony import */ var _hooks_useSequences__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14643);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(35091);
/* harmony import */ var _core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(72493);
/* harmony import */ var _services_threads_goToThread__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(28420);
/* harmony import */ var _components_LoadingBar_LoadingBar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(94246);
/* harmony import */ var _services_tracker_useTracker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(70989);
/* harmony import */ var _widgets_react_material_button_streakButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(22682);
/* harmony import */ var _sequenceManager__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(28778);
/* harmony import */ var _services_data_data__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(38672);
/* harmony import */ var _widgets_react_material_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(82792);
/* harmony import */ var _widgets_react_material_icon_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(84347);
/* harmony import */ var _core_enabledFeaturesController__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(50452);
/* harmony import */ var _core_routing__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(58556);
/* harmony import */ var _SequenceViewRecipientListItem__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(67957);
/* harmony import */ var _CSVUpload__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(67289);
/* harmony import */ var _SequenceViewRecipientsList_module_css__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(35452);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useSequences__WEBPACK_IMPORTED_MODULE_5__, _core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_7__, _sequenceManager__WEBPACK_IMPORTED_MODULE_12__, _services_data_data__WEBPACK_IMPORTED_MODULE_13__, _core_enabledFeaturesController__WEBPACK_IMPORTED_MODULE_16__, _SequenceViewRecipientListItem__WEBPACK_IMPORTED_MODULE_18__]);
([_hooks_useSequences__WEBPACK_IMPORTED_MODULE_5__, _core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_7__, _sequenceManager__WEBPACK_IMPORTED_MODULE_12__, _services_data_data__WEBPACK_IMPORTED_MODULE_13__, _core_enabledFeaturesController__WEBPACK_IMPORTED_MODULE_16__, _SequenceViewRecipientListItem__WEBPACK_IMPORTED_MODULE_18__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






















function SequenceViewRecipientsList(_ref) {
  let {
    sequenceKey,
    emails,
    sequenceActions
  } = _ref;
  const track = (0,_services_tracker_useTracker__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .ZP)('recipients');
  const {
    goTo
  } = (0,_core_routing__WEBPACK_IMPORTED_MODULE_17__/* .useRouting */ .pe)();
  const sequenceInfoResult = (0,_hooks_useSequences__WEBPACK_IMPORTED_MODULE_5__/* .useSequenceInfo */ .HW)(sequenceKey);
  const {
    mutate: updateRecipient
  } = (0,_hooks_useSequences__WEBPACK_IMPORTED_MODULE_5__/* .useUpdateSequenceRecipient */ .C2)(sequenceKey);
  const recipientsResult = (0,_hooks_useSequences__WEBPACK_IMPORTED_MODULE_5__/* .useSortedSequenceRecipients */ .yJ)(sequenceKey, {
    refetchOnWindowFocus: false
  });
  const isLoading = sequenceInfoResult.status === 'loading' || recipientsResult.status === 'loading';
  const sequenceInfo = sequenceInfoResult.data;
  const dimmed = !isLoading && (sequenceInfo?.status === _core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_7__/* .SequenceStatus */ .ST.Paused || sequenceInfo?.status === _core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_7__/* .SequenceStatus */ .ST.Archived);
  const canChangeStatus = !isLoading && sequenceInfo?.status !== _core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_7__/* .SequenceStatus */ .ST.Archived;
  const onGoToRecipient = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(recipient => {
    const key = recipient.contactKey ? recipient.contactKey : recipient.emails[0];
    if (key) {
      goTo(_core_routing__WEBPACK_IMPORTED_MODULE_17__/* .StreakCustomRoute */ .ld.CONTACT, {
        key
      });
    }
  }, [goTo]);
  const onGoToThread = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async (_recipient, hexGmailThreadId) => {
    track('message.click', {
      hexGmailThreadId
    });
    await (0,_services_threads_goToThread__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(hexGmailThreadId);
  }, [track]);
  const onUpdateStatus = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((recipient, newStatus) => {
    const recipientKey = recipient.key;
    track('recipient.changeState', {
      recipientKey,
      state: newStatus
    });
    if (recipientKey) {
      updateRecipient({
        key: recipientKey,
        state: newStatus
      });
    }
  }, [track, updateRecipient]);
  const recipientsData = recipientsResult.data;

  // We pick the first contact that has at least a matching email
  const recipient = findRecipientByEmails(recipientsData ?? [], emails ?? []);
  const recipientKey = recipient?.key;

  // If there is a recipientKey, scroll it into view
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (recipientKey && !isLoading) {
      const el = document.getElementById(recipientKey);
      el?.scrollIntoView({
        behavior: 'auto'
      });
    }
  }, [recipientKey, isLoading]);
  const showClicks = _core_enabledFeaturesController__WEBPACK_IMPORTED_MODULE_16__.EnabledFeatures.isFeatureEnabled('advancedLinkTracking');
  const noRecipientsFound = !isLoading && recipientsResult.status === 'success' && recipientsData && recipientsData.length === 0;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)("div", {
    className: _SequenceViewRecipientsList_module_css__WEBPACK_IMPORTED_MODULE_21__/* .sequenceViewRecipientsList */ .V9,
    children: [!noRecipientsFound && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("div", {
      className: _SequenceViewRecipientsList_module_css__WEBPACK_IMPORTED_MODULE_21__/* .sequenceViewRecipientListHeader */ .j0,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_SequenceViewRecipientListItem__WEBPACK_IMPORTED_MODULE_18__/* .SequenceRecipientListItem */ .KC, {
        dimmed: dimmed,
        recipientNameColumn: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_streakyc_ui_components__WEBPACK_IMPORTED_MODULE_3__/* .Typo */ .Jd, {
          variant: "H3 - Section",
          children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.getString('sequence_view_recipient')
        }),
        emailsColumn: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_streakyc_ui_components__WEBPACK_IMPORTED_MODULE_3__/* .Typo */ .Jd, {
          variant: "H3 - Section",
          children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.getString('sequence_view_emails')
        }),
        statusColumn: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_streakyc_ui_components__WEBPACK_IMPORTED_MODULE_3__/* .Typo */ .Jd, {
          variant: "H3 - Section",
          children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.getString('sequence_view_status')
        }),
        firstSentColumn: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_streakyc_ui_components__WEBPACK_IMPORTED_MODULE_3__/* .Typo */ .Jd, {
          variant: "H3 - Section",
          children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.getString('sequences_view_fist_seen')
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)("div", {
      className: _SequenceViewRecipientsList_module_css__WEBPACK_IMPORTED_MODULE_21__/* .sequenceViewRecipientListBody */ .K_,
      children: [isLoading && [1, 2, 3].map(num => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_SequenceViewRecipientListItem__WEBPACK_IMPORTED_MODULE_18__/* .SequenceRecipientListItem */ .KC, {
        recipientNameColumn: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_components_LoadingBar_LoadingBar__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
          style: {
            borderRadius: '4px'
          },
          height: 16,
          width: 126,
          margin: "16px 0"
        }),
        emailsColumn: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_components_LoadingBar_LoadingBar__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
          style: {
            borderRadius: '4px'
          },
          height: 16,
          width: 126,
          margin: "16px 0"
        }),
        statusColumn: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_components_LoadingBar_LoadingBar__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
          style: {
            borderRadius: '4px'
          },
          height: 16,
          width: 60,
          margin: "16px 0"
        }),
        firstSentColumn: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_components_LoadingBar_LoadingBar__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
          style: {
            borderRadius: '4px'
          },
          height: 16,
          width: 60,
          margin: "16px 0"
        })
      }, num)), !isLoading && recipientsResult.status === 'success' && recipientsData && recipientsData.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("div", {
        className: _SequenceViewRecipientsList_module_css__WEBPACK_IMPORTED_MODULE_21__/* .sequenceItemsContainer */ .Pg,
        children: recipientsData.map(recipient => {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_SequenceViewRecipientListItem__WEBPACK_IMPORTED_MODULE_18__/* .SequenceRecipientListItemWithInfo */ .SS, {
            id: recipient.key,
            style: {
              backgroundColor: recipientKey === recipient.key ? 'lightyellow' : undefined
            },
            dimmed: dimmed,
            actions: sequenceActions,
            recipient: recipient,
            onGoToRecipient: onGoToRecipient,
            onGoToThread: onGoToThread,
            onStatusChange: onUpdateStatus,
            disabled: !canChangeStatus,
            showClicks: showClicks
          }, recipient.key);
        })
      }), noRecipientsFound && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(SequenceViewRecipientsListEmptyMsg, {
        sequenceKey: sequenceKey,
        track: track
      })]
    })]
  });
}
function SequenceViewRecipientsListEmptyMsg(_ref2) {
  let {
    sequenceKey,
    track
  } = _ref2;
  const pipelinesCount = _services_data_data__WEBPACK_IMPORTED_MODULE_13__["default"].getAllPipelines().length;
  const {
    goTo
  } = (0,_core_routing__WEBPACK_IMPORTED_MODULE_17__/* .useRouting */ .pe)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_streakyc_ui_components_layout__WEBPACK_IMPORTED_MODULE_4__/* .LayoutColumn */ .rO, {
    alignItemsV: "center",
    alignItemsH: "center",
    minHeight: 300,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_streakyc_ui_components_layout__WEBPACK_IMPORTED_MODULE_4__/* .LayoutBox */ .kZ, {
      padding: "m|none",
      maxWidth: 550,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_streakyc_ui_components__WEBPACK_IMPORTED_MODULE_3__/* .Typo */ .Jd, {
        variant: "H4 - Caption",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_streakyc_ui_components__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
          align: "center",
          overflow: "wrap",
          children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.getString('sequence_no_recipients')
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_streakyc_ui_components_layout__WEBPACK_IMPORTED_MODULE_4__/* .LayoutRow */ .WM, {
      gapH: "m",
      alignItemsH: "center",
      padding: "none|m",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_CSVUpload__WEBPACK_IMPORTED_MODULE_19__/* .StreakButtonCSVUpload */ .h, {
        variant: "outline",
        onCSVDataUploaded: async (columnNames, rows) => {
          track('addFromCSV.click');
          await _sequenceManager__WEBPACK_IMPORTED_MODULE_12__["default"].addCSVRecipientsToSequence(sequenceKey, columnNames, rows);
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_widgets_react_material_button_streakButton__WEBPACK_IMPORTED_MODULE_11__/* .StreakButtonIcon */ .A2, {
          materialIconName: "insert_drive_file",
          isOutline: true,
          style: {
            marginLeft: '-8px'
          }
        }), _services_locale_locale__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.getString('add_from_csv_file')]
      }), pipelinesCount === 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_widgets_react_material_button_streakButton__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .ZP, {
        variant: "outline",
        onClick: () => {
          track('add_from_pipeline.click');
          goTo(_core_routing__WEBPACK_IMPORTED_MODULE_17__/* .StreakCustomRoute */ .ld.PIPELINE, {
            key: _services_data_data__WEBPACK_IMPORTED_MODULE_13__["default"].getAllPipelines()[0].key()
          });
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_widgets_react_material_button_streakButton__WEBPACK_IMPORTED_MODULE_11__/* .StreakButtonIcon */ .A2, {
          materialIconName: "label_important",
          isOutline: true,
          style: {
            marginLeft: '-8px'
          }
        }), _services_locale_locale__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.getString('add_from_pipeline')]
      }), pipelinesCount > 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(PipelinesMenuButton, {
        variant: "outline",
        onPipelineClick: p => {
          track('add_from_pipeline.click');
          goTo(_core_routing__WEBPACK_IMPORTED_MODULE_17__/* .StreakCustomRoute */ .ld.PIPELINE, {
            key: p.key()
          });
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_widgets_react_material_button_streakButton__WEBPACK_IMPORTED_MODULE_11__/* .StreakButtonIcon */ .A2, {
          materialIconName: "label_important",
          isOutline: true,
          style: {
            marginLeft: '-8px'
          }
        }), _services_locale_locale__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.getString('add_from_pipeline')]
      })]
    })]
  });
}
function PipelinesMenuButton(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_widgets_react_material_menu__WEBPACK_IMPORTED_MODULE_14__/* .MenuButton */ .j2, {
    ButtonComponent: buttonProps => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_widgets_react_material_button_streakButton__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .ZP, {
      ...props,
      ...buttonProps,
      variant: "outline",
      children: props.children
    }),
    menu: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(PipelinesDropdown, {
      onPipelineClick: props.onPipelineClick
    })
  });
}
function PipelinesDropdown(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_widgets_react_material_menu__WEBPACK_IMPORTED_MODULE_14__/* .Dropdown */ .Lt, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_widgets_react_material_menu__WEBPACK_IMPORTED_MODULE_14__/* .MenuList */ .qy, {
      children: _services_data_data__WEBPACK_IMPORTED_MODULE_13__["default"].getAllPipelines().map(pipeline => {
        const pipelineColor = pipeline.isDefaultColor() ? {} : pipeline.getColor();
        const pipelineIconName = pipeline.getIcon();
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_widgets_react_material_menu__WEBPACK_IMPORTED_MODULE_14__/* .MenuItem */ .sN, {
          onItemChosen: () => props.onPipelineClick(pipeline),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)("div", {
            className: "jsx-1991002122" + " " + "streak__pipeline_menu_item",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_widgets_react_material_icon_icon__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
              style: {
                color: pipelineColor.backgroundColor
              },
              materialIconName: pipelineIconName,
              isOutline: true,
              mini: true,
              className: "streak__navMenu_pipelineIcon"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("span", {
              className: "jsx-1991002122" + " " + "streak__seq_menu_item_text",
              children: pipeline.displayNameText()
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
              id: "1991002122",
              children: [".streak__pipeline_menu_item.jsx-1991002122{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-left:1px;}", ".streak__seq_menu_item_text.jsx-1991002122{margin-left:4px;}"]
            })]
          })
        }, pipeline.key());
      })
    })
  });
}

/**
 * Finds the first recipient that has emails matching at least
 * one of the given emails.
 */
function findRecipientByEmails(recipients, emails) {
  const emailsLower = emails.map(lodash__WEBPACK_IMPORTED_MODULE_2__.toLower);
  const recipient = recipients?.find(_ref3 => {
    let {
      emails: recipientEmails
    } = _ref3;
    return (0,lodash__WEBPACK_IMPORTED_MODULE_2__.intersection)(recipientEmails.map(lodash__WEBPACK_IMPORTED_MODULE_2__.toLower), emailsLower).length > 0;
  });
  return recipient;
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 82070:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ SequenceViewHeader)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44345);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17013);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _streakyc_ui_components_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85440);
/* harmony import */ var _streakyc_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(72493);
/* harmony import */ var _react_query_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(27758);
/* harmony import */ var _services_tracker_useTracker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(70989);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(35091);
/* harmony import */ var _core_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(58556);
/* harmony import */ var _widgets_view__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(67003);
/* harmony import */ var _widgets_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(26736);
/* harmony import */ var _core_api_errors__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(69430);
/* harmony import */ var _helpers_sequenceButterBars__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(26502);
/* harmony import */ var _services_localSettings_localSettings__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(55868);
/* harmony import */ var _core_appShell__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(81022);
/* harmony import */ var _lib_log_error__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7961);
/* harmony import */ var _quotaView_api_errors__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(59158);
/* harmony import */ var _hooks_useSequences__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(14643);
/* harmony import */ var _helpers_status__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(7492);
/* harmony import */ var _api_queries__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(55639);
/* harmony import */ var _api_errors__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(70496);
/* harmony import */ var _sequenceManager__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(28778);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(63070);
/* harmony import */ var _SequenceStatus__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(59938);
/* harmony import */ var _CSVUpload__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(67289);
/* harmony import */ var _widgets_react_material_button_streakButton__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(22682);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_streakyc_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_3__, _helpers_sequenceButterBars__WEBPACK_IMPORTED_MODULE_10__, _quotaView_api_errors__WEBPACK_IMPORTED_MODULE_14__, _hooks_useSequences__WEBPACK_IMPORTED_MODULE_15__, _helpers_status__WEBPACK_IMPORTED_MODULE_16__, _api_queries__WEBPACK_IMPORTED_MODULE_17__, _sequenceManager__WEBPACK_IMPORTED_MODULE_19__, _SequenceStatus__WEBPACK_IMPORTED_MODULE_20__]);
([_streakyc_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_3__, _helpers_sequenceButterBars__WEBPACK_IMPORTED_MODULE_10__, _quotaView_api_errors__WEBPACK_IMPORTED_MODULE_14__, _hooks_useSequences__WEBPACK_IMPORTED_MODULE_15__, _helpers_status__WEBPACK_IMPORTED_MODULE_16__, _api_queries__WEBPACK_IMPORTED_MODULE_17__, _sequenceManager__WEBPACK_IMPORTED_MODULE_19__, _SequenceStatus__WEBPACK_IMPORTED_MODULE_20__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


























function SequenceViewHeader(_ref) {
  let {
    sequenceKey
  } = _ref;
  const [_isResuming, setIsResuming] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [_lastApiError, setLastApiError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const sequenceInfoResult = (0,_hooks_useSequences__WEBPACK_IMPORTED_MODULE_15__/* .useSequenceInfo */ .HW)(sequenceKey);
  const trackEvent = (0,_services_tracker_useTracker__WEBPACK_IMPORTED_MODULE_5__/* .useTrackerWithoutPrefix */ .io)();
  const {
    goTo
  } = (0,_core_routing__WEBPACK_IMPORTED_MODULE_7__/* .useRouting */ .pe)();
  const openConfirmDelete = (0,_widgets_modal__WEBPACK_IMPORTED_MODULE_9__/* .useConfirmDeleteAlert */ .LA)();
  const {
    openConfirmAlert
  } = (0,_widgets_modal__WEBPACK_IMPORTED_MODULE_9__/* .useConfirmAlert */ .Zp)({
    color: 'primary',
    size: 'm'
  });
  const sequenceInfo = sequenceInfoResult.data;
  const sequenceInfoKey = sequenceInfo?.key;
  const sequenceStatus = sequenceInfo?.status;
  const fetchSequence = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async () => {
    if (!sequenceInfoKey) {
      return null;
    }
    const sequenceInfoClient = (0,_react_query_utils__WEBPACK_IMPORTED_MODULE_4__/* .scopeQueryClientWithKey */ .hM)(_core_appShell__WEBPACK_IMPORTED_MODULE_12__/* .queryClient */ .Eh, _api_queries__WEBPACK_IMPORTED_MODULE_17__/* .SEQUENCE_INFO_QUERY_DEF */ .tG, {
      sequenceKey: sequenceInfoKey
    });
    return await sequenceInfoClient.fetchQuery();
  }, [sequenceInfoKey]);

  // TODO: How to mock these hooks in Storybook?
  const {
    mutateAsync: cloneSequence
  } = (0,_hooks_useSequences__WEBPACK_IMPORTED_MODULE_15__/* .useCloneSequence */ .b5)(sequenceKey);
  const {
    mutateAsync: deleteSequence
  } = (0,_hooks_useSequences__WEBPACK_IMPORTED_MODULE_15__/* .useDeleteSequence */ .mh)(sequenceKey);
  const {
    mutateAsync: updateSequence
  } = (0,_hooks_useSequences__WEBPACK_IMPORTED_MODULE_15__/* .useUpdateSequence */ .Mn)();
  const goBack = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    trackEvent('back.click', {
      sequenceKey
    });
    history.back();
  }, [trackEvent, sequenceKey]);
  const onClone = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async () => {
    trackEvent('clone.click', {
      sequenceKey
    });
    const originalSeqKey = sequenceKey;
    (0,_helpers_sequenceButterBars__WEBPACK_IMPORTED_MODULE_10__/* .showSequenceClonedButterMsg */ .FI)({
      originalSeqKey,
      beingCloned: true
    });
    const clonedSequence = await cloneSequence();
    goTo(_core_routing__WEBPACK_IMPORTED_MODULE_7__/* .StreakCustomRoute */ .ld.SEQUENCE, {
      key: clonedSequence.key
    });
    (0,_helpers_sequenceButterBars__WEBPACK_IMPORTED_MODULE_10__/* .showSequenceClonedButterMsg */ .FI)({
      originalSeqKey,
      beingCloned: false
    });
  }, [trackEvent, cloneSequence, goTo, sequenceKey]);
  const onDelete = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async () => {
    const confirmDelete = await openConfirmDelete({
      title: _services_locale_locale__WEBPACK_IMPORTED_MODULE_6__.Locale.getString('sequence_delete_confirmation_title'),
      content: _services_locale_locale__WEBPACK_IMPORTED_MODULE_6__.Locale.getString('sequence_delete_confirmation_body')
    });
    if (confirmDelete) {
      deleteSequence();
      goTo(_core_routing__WEBPACK_IMPORTED_MODULE_7__/* .StreakCustomRoute */ .ld.SEQUENCES_ALL);
    }
    const eventLabel = confirmDelete ? 'discard.click.confirmed' : 'discard.click.canceled';
    trackEvent(eventLabel);
  }, [goTo, trackEvent, deleteSequence, openConfirmDelete]);
  const onAddCSV = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async (columnNames, rows) => {
    trackEvent('addFromCSV.click');
    await _sequenceManager__WEBPACK_IMPORTED_MODULE_19__["default"].addCSVRecipientsToSequence(sequenceKey, columnNames, rows);
  }, [trackEvent, sequenceKey]);
  const onArchive = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    trackEvent('archive.click');
    updateSequence({
      key: sequenceKey,
      status: _streakyc_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_3__/* .SequenceStatus */ .ST.Archived
    });
    _services_localSettings_localSettings__WEBPACK_IMPORTED_MODULE_11__.InMemorySettings.remove(_constants__WEBPACK_IMPORTED_MODULE_24__/* .SETTING */ .F);
  }, [trackEvent, sequenceKey, updateSequence]);
  const onPause = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    trackEvent('pause.click');
    updateSequence({
      key: sequenceKey,
      status: _streakyc_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_3__/* .SequenceStatus */ .ST.Paused
    });
  }, [trackEvent, sequenceKey, updateSequence]);
  const onResume = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async () => {
    trackEvent('activate.click');
    try {
      setIsResuming(true);
      const seqInfo = await fetchSequence();
      const count = seqInfo?.overdueRecipientCount;
      if (!seqInfo || count === 0) {
        return;
      }
      const shouldResume = await openConfirmAlert({
        title: _services_locale_locale__WEBPACK_IMPORTED_MODULE_6__.Locale.getString('sequence_resume_overdue_warning_msg_title', {
          count
        }),
        subtitle: _services_locale_locale__WEBPACK_IMPORTED_MODULE_6__.Locale.getString('sequence_resume_overdue_warning_msg_subtitle', {
          count
        }),
        content: _services_locale_locale__WEBPACK_IMPORTED_MODULE_6__.Locale.getString('sequence_resume_overdue_warning_msg_body'),
        cancel: _services_locale_locale__WEBPACK_IMPORTED_MODULE_6__.Locale.getString('cancel'),
        confirm: _services_locale_locale__WEBPACK_IMPORTED_MODULE_6__.Locale.getString('resume')
      });
      if (!shouldResume) {
        return;
      }
      await updateSequence({
        key: sequenceKey,
        status: _streakyc_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_3__/* .SequenceStatus */ .ST.Active
      });
    } catch (err) {
      (0,_lib_log_error__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .ZP)({
        err,
        level: 'error',
        details: sequenceKey,
        message: 'failed to activate sequence'
      });
      const sequenceApiError = await (0,_api_errors__WEBPACK_IMPORTED_MODULE_18__/* .tryGetSequenceApiError */ .w)(err);
      if (sequenceApiError) {
        setLastApiError(sequenceApiError);
        return;
      }
      const quotaApiError = await (0,_quotaView_api_errors__WEBPACK_IMPORTED_MODULE_14__/* .tryGetQuotaApiError */ .RH)(err);
      if (quotaApiError) {
        setLastApiError(quotaApiError);
        return;
      }
      setLastApiError((0,_core_api_errors__WEBPACK_IMPORTED_MODULE_25__/* .tryGetUnknownApiError */ .S)(err));
    } finally {
      setIsResuming(false);
    }
  }, [sequenceKey, updateSequence, trackEvent, fetchSequence, openConfirmAlert]);
  const onEdit = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    trackEvent('editSequence.click');
    _sequenceManager__WEBPACK_IMPORTED_MODULE_19__["default"].editExistingSequence(sequenceKey);
  }, [trackEvent, sequenceKey]);
  const onRename = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(newTitle => updateSequence({
    key: sequenceKey,
    displayName: newTitle
  }), [sequenceKey, updateSequence]);
  const isLoaded = sequenceInfoResult.status === 'success' && !(0,lodash__WEBPACK_IMPORTED_MODULE_1__.isNil)(sequenceInfo);
  const canDelete = sequenceStatus === _streakyc_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_3__/* .SequenceStatus */ .ST.Draft;
  const canAddFromCSV = sequenceInfo?.source === _streakyc_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_3__/* .SequenceSource */ .F9.CSV;
  const canArchive = sequenceInfo && (0,_helpers_status__WEBPACK_IMPORTED_MODULE_16__/* .isArchivable */ .t)(sequenceStatus, sequenceInfo.activeRecipientCount);
  const canPause = sequenceStatus === _streakyc_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_3__/* .SequenceStatus */ .ST.Active;
  const canResume = sequenceStatus === _streakyc_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_3__/* .SequenceStatus */ .ST.Paused;
  const viewTitle = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return sequenceInfo ? {
      placeholder: _services_locale_locale__WEBPACK_IMPORTED_MODULE_6__.Locale.getString('untitled'),
      value: sequenceInfo.displayName,
      onCommit: onRename
    } : _services_locale_locale__WEBPACK_IMPORTED_MODULE_6__.Locale.getString('untitled');
  }, [sequenceInfo, onRename]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_widgets_view__WEBPACK_IMPORTED_MODULE_8__/* .ViewHeader */ .tr, {
    goBack: goBack,
    title: viewTitle,
    titleActions: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.Fragment, {
      children: sequenceInfo && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_SequenceStatus__WEBPACK_IMPORTED_MODULE_20__/* .SequenceStatusIconWithText */ .EP, {
        status: sequenceInfo.status,
        activeRecipientCount: sequenceInfo.activeRecipientCount
      })
    }),
    loading: isLoaded ? undefined : 'minimal',
    rightActions: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.Fragment, {
      children: [canAddFromCSV ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_CSVUpload__WEBPACK_IMPORTED_MODULE_21__/* .StreakButtonCSVUpload */ .h, {
        accent: "muted",
        variant: "inline",
        isRound: true,
        onCSVDataUploaded: onAddCSV,
        tooltip: _services_locale_locale__WEBPACK_IMPORTED_MODULE_6__.Locale.getString('add_from_csv_file'),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_widgets_react_material_button_streakButton__WEBPACK_IMPORTED_MODULE_22__/* .StreakButtonIcon */ .A2, {
          isOutline: true,
          materialIconName: "group_add"
        })
      }) : null, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_widgets_view__WEBPACK_IMPORTED_MODULE_8__/* .ViewHeaderIconButton */ .iE, {
        icon: "edit",
        "aria-label": (0,lodash__WEBPACK_IMPORTED_MODULE_1__.upperFirst)(_services_locale_locale__WEBPACK_IMPORTED_MODULE_6__.Locale.getString('edit')),
        onClick: onEdit
      }), sequenceInfo && sequenceInfo.status === _streakyc_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_3__/* .SequenceStatus */ .ST.Archived ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_widgets_view__WEBPACK_IMPORTED_MODULE_8__/* .ViewHeaderIconButton */ .iE, {
        icon: "content_copy",
        "aria-label": _services_locale_locale__WEBPACK_IMPORTED_MODULE_6__.Locale.getString('saved_view_duplicate'),
        onClick: onClone
      }, "duplicate") : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)(_streakyc_ui_components_menu__WEBPACK_IMPORTED_MODULE_2__/* .Menu */ .v2, {
        placement: "bottom-end",
        offset: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_streakyc_ui_components_menu__WEBPACK_IMPORTED_MODULE_2__/* .MenuTrigger */ .bF, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_widgets_view__WEBPACK_IMPORTED_MODULE_8__/* .ViewHeaderIconButton */ .iE, {
            icon: "more_vert",
            "aria-label": _services_locale_locale__WEBPACK_IMPORTED_MODULE_6__.Locale.getString('options')
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)(_streakyc_ui_components_menu__WEBPACK_IMPORTED_MODULE_2__/* .MenuPanel */ .Gk, {
          children: [canResume ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_streakyc_ui_components_menu__WEBPACK_IMPORTED_MODULE_2__/* .MenuItem */ .sN, {
            icon: "play_circle",
            text: _services_locale_locale__WEBPACK_IMPORTED_MODULE_6__.Locale.getString('resume'),
            onClick: onResume
          }) : null, canPause ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_streakyc_ui_components_menu__WEBPACK_IMPORTED_MODULE_2__/* .MenuItem */ .sN, {
            icon: "pause",
            text: _services_locale_locale__WEBPACK_IMPORTED_MODULE_6__.Locale.getString('pause'),
            onClick: onPause
          }) : null, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_streakyc_ui_components_menu__WEBPACK_IMPORTED_MODULE_2__/* .MenuItem */ .sN, {
            icon: "content_copy",
            text: _services_locale_locale__WEBPACK_IMPORTED_MODULE_6__.Locale.getString('saved_view_duplicate'),
            onClick: onClone
          }, "duplicate"), canArchive ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_streakyc_ui_components_menu__WEBPACK_IMPORTED_MODULE_2__/* .MenuItem */ .sN, {
            icon: "archive",
            text: _services_locale_locale__WEBPACK_IMPORTED_MODULE_6__.Locale.getString('archive'),
            onClick: onArchive
          }) : null, canDelete ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_streakyc_ui_components_menu__WEBPACK_IMPORTED_MODULE_2__/* .MenuItem */ .sN, {
            icon: "delete",
            text: _services_locale_locale__WEBPACK_IMPORTED_MODULE_6__.Locale.getString('delete'),
            onClick: onDelete
          }) : null]
        })]
      })]
    })
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 57600:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ combineSequenceRecipientEmails),
/* harmony export */   Y: () => (/* binding */ SequenceRecipientEmailState)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17013);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72493);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35091);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_1__]);
_core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



let SequenceRecipientEmailState = /*#__PURE__*/function (SequenceRecipientEmailState) {
  SequenceRecipientEmailState[SequenceRecipientEmailState["Draft"] = 0] = "Draft";
  SequenceRecipientEmailState[SequenceRecipientEmailState["Scheduled"] = 1] = "Scheduled";
  SequenceRecipientEmailState[SequenceRecipientEmailState["Sent"] = 2] = "Sent";
  SequenceRecipientEmailState[SequenceRecipientEmailState["Failed"] = 3] = "Failed";
  SequenceRecipientEmailState[SequenceRecipientEmailState["Paused"] = 4] = "Paused";
  SequenceRecipientEmailState[SequenceRecipientEmailState["Cancelled"] = 5] = "Cancelled";
  return SequenceRecipientEmailState;
}({});

// SequenceRecipientMessageHistory does not normally include info about unsent messages so we're extending the type to include that state.

function combineSequenceRecipientEmails(recipientStatus, actions, messageHistory, messageSchedule) {
  const messageHistoryByKey = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.keyBy)(messageHistory, msg => msg.actionKey);
  const messageScheduleByKey = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.keyBy)(messageSchedule, msg => msg.actionKey);
  return actions.map(_ref => {
    let {
      actionId
    } = _ref;
    if (recipientStatus === _core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_1__/* .SequenceRecipientStatus */ .sR.Draft) {
      return {
        state: SequenceRecipientEmailState.Draft,
        actionId: actionId
      };
    } else if (actionId in messageHistoryByKey) {
      const historyItem = messageHistoryByKey[actionId];
      if (historyItem.state === 'SENT') {
        return {
          state: SequenceRecipientEmailState.Sent,
          actionId: historyItem.actionKey,
          hexGmailMessageId: historyItem.hexGmailMessageId,
          hexGmailThreadId: historyItem.hexGmailThreadId,
          sendTimestamp: historyItem.sendTimestamp,
          viewedTimestamp: historyItem.viewedTimestamp,
          clickedTimestamp: historyItem.clickedTimestamp
        };
      } else if (historyItem.state === 'FAILED') {
        return {
          state: SequenceRecipientEmailState.Failed,
          actionId: historyItem.actionKey,
          sendTimestamp: historyItem.sendTimestamp,
          reason: historyItem.failureReason
        };
      }
      return {
        state: SequenceRecipientEmailState.Scheduled,
        actionId: actionId,
        estimatedSendTimestamp: undefined
      };
    } else {
      const schedule = messageScheduleByKey[actionId];
      if (recipientStatus === _core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_1__/* .SequenceRecipientStatus */ .sR.Error) {
        return {
          state: SequenceRecipientEmailState.Cancelled,
          actionId: actionId,
          reason: _services_locale_locale__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.getString('sequence_view_message_paused_on_error')
        };
      } else if (recipientStatus === _core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_1__/* .SequenceRecipientStatus */ .sR.Replied) {
        return {
          state: SequenceRecipientEmailState.Cancelled,
          actionId: actionId,
          reason: _services_locale_locale__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.getString('sequence_view_message_paused_on_reply')
        };
      } else if (recipientStatus === _core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_1__/* .SequenceRecipientStatus */ .sR.Paused) {
        return {
          state: SequenceRecipientEmailState.Paused,
          actionId: actionId,
          estimatedSendTimestamp: schedule?.estimatedSendTimestamp
        };
      }
      return {
        state: SequenceRecipientEmailState.Scheduled,
        actionId: actionId,
        estimatedSendTimestamp: schedule?.estimatedSendTimestamp
      };
    }
  });
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

/***/ 7492:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ isFinished),
/* harmony export */   t: () => (/* binding */ isArchivable)
/* harmony export */ });
/* harmony import */ var _core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72493);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_0__]);
_core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

function isFinished(status, activeRecipientCount) {
  return status === _core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_0__/* .SequenceStatus */ .ST.Active && activeRecipientCount === 0;
}
function isArchivable(status, activeRecipientCount) {
  return isFinished(status, activeRecipientCount) || status === _core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_0__/* .SequenceStatus */ .ST.Paused;
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 39367:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ showConfirmModalEx)
/* harmony export */ });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81518);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var kefir__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98137);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44345);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35091);
/* harmony import */ var _services_tracker_tracker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13778);
/* harmony import */ var _widgets_react_material_button_buttonLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(63726);
/* harmony import */ var _widgets_react_material_button_streakButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(22682);
/* harmony import */ var _showModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(64673);
/* harmony import */ var _ModalChrome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(56823);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(59718);










function showConfirmModalEx(options) {
  _services_tracker_tracker__WEBPACK_IMPORTED_MODULE_4__["default"].track('show confirm modal ex');
  const el = options.el || document.createElement('div');
  if (!options.el) {
    el.className = `streak__modal_${options.size || 'standard'}`;
  }
  let confirmClicked = false;
  const BodyComponent = options.bodyComponent;
  const modalView = (0,_showModal__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)({
    viewOptions: {
      chrome: false,
      el
    },
    bodyComponent: _ref => {
      let {
        modalView
      } = _ref;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
        className: "jsx-2954905862",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ModalChrome__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
          heading: options.title,
          subheading: options.subtitle,
          accent: options.accent,
          onClose: () => {
            modalView.close();
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
          className: "jsx-2954905862" + " " + "streak__modal_body",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(BodyComponent, {
            modalView: modalView
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_widgets_react_material_button_buttonLayout__WEBPACK_IMPORTED_MODULE_5__/* .ButtonRow */ .V, {
            className: "streak__mt-5",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_widgets_react_material_button_buttonLayout__WEBPACK_IMPORTED_MODULE_5__/* .ButtonGroup */ .h, {
              right: true,
              children: [options.hideCancel === true ? null : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_widgets_react_material_button_streakButton__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP, {
                onClick: () => {
                  modalView.close();
                },
                variant: "text",
                children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.getString('cancel')
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_widgets_react_material_button_streakButton__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP, {
                onClick: () => {
                  confirmClicked = true;
                  modalView.close();
                },
                children: options.confirmButtonText || _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.getString('modal_done')
              })]
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
          id: "2954905862",
          children: [".streak__modal_body.jsx-2954905862{padding:16px;}"]
        })]
      });
    }
  });
  return kefir__WEBPACK_IMPORTED_MODULE_1__["default"].fromEvents(modalView, 'destroy').take(1).map(() => ({
    confirmClicked
  })).toPromise();
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

/***/ 84095:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J_: () => (/* binding */ _7),
/* harmony export */   Jn: () => (/* binding */ _4),
/* harmony export */   Pq: () => (/* binding */ _1),
/* harmony export */   Zk: () => (/* binding */ _2),
/* harmony export */   aF: () => (/* binding */ _5),
/* harmony export */   kQ: () => (/* binding */ _3),
/* harmony export */   m: () => (/* binding */ _8),
/* harmony export */   p_: () => (/* binding */ _6),
/* harmony export */   vO: () => (/* binding */ _9)
/* harmony export */ });
// extracted by mini-css-extract-plugin
var _1 = "streak-mod__IWSeBrplcUTMIx5o8_cA";
var _2 = "streak-mod___cGJhmFBmUPK1ox1blMT";
var _3 = "streak-mod__f_Lt7Zr2D2pQstqxbM2l";
var _4 = "streak-mod__AremAvXBFAlDsrzJE5p6";
var _5 = "streak-mod__xBwPg7yka5HR8_Af3zBR";
var _6 = "streak-mod__sVWuKDWx7jPCgOzH8ZVY";
var _7 = "streak-mod__b1okMe8VTuDvnvIIXJXA";
var _8 = "streak-mod__GteTKE6RtGxpu6oPskWh";
var _9 = "streak-mod__cYTm5CAeEWH7je3PJpwq";



/***/ }),

/***/ 35452:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K_: () => (/* binding */ _2),
/* harmony export */   Pg: () => (/* binding */ _1),
/* harmony export */   V9: () => (/* binding */ _4),
/* harmony export */   j0: () => (/* binding */ _3)
/* harmony export */ });
// extracted by mini-css-extract-plugin
var _1 = "streak-mod__OhzRZhp_Ppj3tBsFmit0";
var _2 = "streak-mod__zKzqTzgDx9Ap6D2cUdsU";
var _3 = "streak-mod__bH1OebsyjbEJvnI9f10w";
var _4 = "streak-mod__DLjJAimhJW4dTzGoFHSy";



/***/ })

};
;
//# sourceMappingURL=https://storage.googleapis.com/streak-extension-sourcemaps/clientjs/clientjs.chunk.4176.0799b80817b6eaaa94b1.js.map