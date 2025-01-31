"use strict";
export const id = 9462;
export const ids = [9462];
export const modules = {

/***/ 15449:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ SequenceThreadViewBanner)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44345);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(93733);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(39433);
/* harmony import */ var _core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72493);
/* harmony import */ var _hooks_useSequences__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14643);
/* harmony import */ var _widgets_react_material_button_streakButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22682);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(35091);
/* harmony import */ var _helpers_sequenceActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4571);
/* harmony import */ var _helpers_combineSequenceRecipientEmails__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(57600);
/* harmony import */ var _services_tracker_tracker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13778);
/* harmony import */ var _permissionBanner_PermissionBanner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(10080);
/* harmony import */ var _widgets_react_material_tooltip_TooltipContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9112);
/* harmony import */ var _core_routing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(58556);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_1__, _hooks_useSequences__WEBPACK_IMPORTED_MODULE_2__, _helpers_combineSequenceRecipientEmails__WEBPACK_IMPORTED_MODULE_5__]);
([_core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_1__, _hooks_useSequences__WEBPACK_IMPORTED_MODULE_2__, _helpers_combineSequenceRecipientEmails__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













function SequenceThreadViewBanner(_ref) {
  let {
    sequenceKey,
    sequenceRecipientKey
  } = _ref;
  const _track = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((eventName, extraProps) => {
    _services_tracker_tracker__WEBPACK_IMPORTED_MODULE_6__["default"].track(`threadviewbanner.` + eventName, extraProps);
  }, []);
  const {
    goTo
  } = (0,_core_routing__WEBPACK_IMPORTED_MODULE_9__/* .useRouting */ .pe)();
  const {
    data: sequence
  } = (0,_hooks_useSequences__WEBPACK_IMPORTED_MODULE_2__/* .useSequenceInfo */ .HW)(sequenceKey);
  const {
    data: sequenceRecipient
  } = (0,_hooks_useSequences__WEBPACK_IMPORTED_MODULE_2__/* .useSequenceRecipient */ .mL)(sequenceKey, sequenceRecipientKey);
  const {
    mutate: updateRecipient
  } = (0,_hooks_useSequences__WEBPACK_IMPORTED_MODULE_2__/* .useUpdateSequenceRecipient */ .C2)(sequenceKey);
  if (!sequence || !sequenceRecipient) {
    return null;
  }
  const mightHaveFollowup = sequence.status === _core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_1__/* .SequenceStatus */ .ST.Active && (sequenceRecipient.state === _core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_1__/* .SequenceRecipientStatus */ .sR.Running || _core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_1__/* .SequenceRecipientStatus */ .sR.Scheduled);

  // determine if there is a message going out in the future
  let followupSendDate;
  if (mightHaveFollowup) {
    const sortedActions = (0,_helpers_sequenceActions__WEBPACK_IMPORTED_MODULE_11__/* .sortSequenceActions */ .Wu)(sequence.actions);
    const recipientEmails = (0,_helpers_combineSequenceRecipientEmails__WEBPACK_IMPORTED_MODULE_5__/* .combineSequenceRecipientEmails */ .U)(sequenceRecipient.state, sortedActions, sequenceRecipient.messageHistory || [], sequenceRecipient.messageSchedule || []);

    // get next scheduled message if any
    const followup = recipientEmails.find(e => e.state === _helpers_combineSequenceRecipientEmails__WEBPACK_IMPORTED_MODULE_5__/* .SequenceRecipientEmailState */ .Y.Scheduled);
    if (followup?.estimatedSendTimestamp) {
      followupSendDate = new Date(followup.estimatedSendTimestamp);
    }
  }
  const paused = sequence.status === _core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_1__/* .SequenceStatus */ .ST.Paused || sequenceRecipient.state === _core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_1__/* .SequenceRecipientStatus */ .sR.Paused;
  const canPauseFollowup = sequence.status === _core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_1__/* .SequenceStatus */ .ST.Active && !!followupSendDate;
  const [iconName, iconIsOutline] = paused ? ['pause_circle_outline', true] : canPauseFollowup ? ['watch_later', true] : ['send', false];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_permissionBanner_PermissionBanner__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
    iconName: iconName,
    iconIsOutline: iconIsOutline,
    mainText: followupSendDate ? _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getArray('sequence_upcoming_message_to_be_sent_by', {
      time: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_widgets_react_material_tooltip_TooltipContainer__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        style: {
          display: 'inline'
        },
        tooltip: date_fns__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z(followupSendDate, 'MMM dd, yyyy, h:mm a'),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("b", {
          children: date_fns__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z(followupSendDate, {
            addSuffix: false
          })
        })
      }),
      sequence: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("b", {
        children: sequence.displayName
      })
    }) : _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getArray('sequence_thread_banner_description', {
      sequence: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("b", {
        children: sequence.displayName
      })
    }),
    actionRenderer: () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_widgets_react_material_button_streakButton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP, {
        variant: "text",
        onClick: () => {
          const emails = sequenceRecipient.emails.join(',');
          goTo(_core_routing__WEBPACK_IMPORTED_MODULE_9__/* .StreakCustomRoute */ .ld.SEQUENCE_RECIPIENT_EMAILS, {
            key: sequence.key,
            emails
          });
        },
        children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('view_sequence')
      }), canPauseFollowup && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_widgets_react_material_button_streakButton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP, {
        variant: "text",
        onClick: () => {
          _track('recipient.changeState', {
            recipientKey: sequenceRecipient.key,
            state: _core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_1__/* .SequenceRecipientStatus */ .sR.Paused
          });
          updateRecipient({
            key: sequenceRecipient.key,
            state: _core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_1__/* .SequenceRecipientStatus */ .sR.Paused
          });
        },
        children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('pause_sequence_followup')
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

/***/ 69462:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _streakyc_common_core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77294);
/* harmony import */ var _core_ajax_apiRequester__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23392);
/* harmony import */ var _core_appShell__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81022);
/* harmony import */ var _lib_dependencyManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54612);
/* harmony import */ var _components_SequenceThreadViewBanner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15449);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_core_ajax_apiRequester__WEBPACK_IMPORTED_MODULE_1__, _components_SequenceThreadViewBanner__WEBPACK_IMPORTED_MODULE_4__]);
([_core_ajax_apiRequester__WEBPACK_IMPORTED_MODULE_1__, _components_SequenceThreadViewBanner__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






_lib_dependencyManager__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP.addFunction({
  functionKey: 'sequenceThreadViewMasterControllerInitialized',
  functionReference: function () {
    _streakyc_common_core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_0__.inboxSDK.Conversations.registerThreadViewHandler(handleThreadView);
  },
  dependentFunctionKeys: ['gmailLoaded', 'localeLoaded', 'keyboardInitialized', 'accessManagerInitialized', 'userPreServerExperiment', 'data.billingPlans.initialized', 'data.teams.initialized']
});
async function handleThreadView(threadView) {
  const threadId = await threadView.getThreadIDAsync();
  let sequenceRecipient;
  try {
    sequenceRecipient = await _core_ajax_apiRequester__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.get('/sequences/recipients/search', {
      gmailThreadId: threadId
    }, {
      prefix: '/api/v2',
      templateUrl: '/sequences/recipients/search'
    }).getPromise();
  } catch (err) {
    return;
  }
  if (!sequenceRecipient?.sequenceKey) {
    return;
  }
  const noticeBar = threadView.addNoticeBar();
  const el = noticeBar.el;
  el.className = '';
  (0,_core_appShell__WEBPACK_IMPORTED_MODULE_2__/* .renderWithAppShell */ .oC)(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_SequenceThreadViewBanner__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    sequenceKey: sequenceRecipient.sequenceKey,
    sequenceRecipientKey: sequenceRecipient.key
  }), el);
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
//# sourceMappingURL=https://storage.googleapis.com/streak-extension-sourcemaps/clientjs/clientjs.chunk.9462.c2a507ff5409aa71c46c.js.map