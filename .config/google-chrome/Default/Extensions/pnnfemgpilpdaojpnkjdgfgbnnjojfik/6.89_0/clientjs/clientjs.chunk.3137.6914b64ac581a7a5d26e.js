"use strict";
export const id = 3137;
export const ids = [3137,4686];
export const modules = {

/***/ 24686:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isThreadRowASequence: () => (/* binding */ isThreadRowASequence)
/* harmony export */ });
/* harmony import */ var _streakyc_common_core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77294);
/* harmony import */ var kefir__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98137);
/* harmony import */ var _core_ajax_apiRequester__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23392);
/* harmony import */ var _core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(72493);
/* harmony import */ var _lib_dependencyManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54612);
/* harmony import */ var _lib_streakDate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(90415);
/* harmony import */ var _lib_streakTimelineMoment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(48726);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(35091);
/* harmony import */ var _services_tracker_tracker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(13778);
/* harmony import */ var _core_routing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(58556);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_core_ajax_apiRequester__WEBPACK_IMPORTED_MODULE_2__, _core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_3__]);
([_core_ajax_apiRequester__WEBPACK_IMPORTED_MODULE_2__, _core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const activeSequenceThreadRows = new Set();
function main() {
  _streakyc_common_core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_0__.inboxSDK.Lists.registerThreadRowViewHandler(threadRowView => {
    if (threadRowView.getVisibleDraftCount() == 0 || threadRowView.getVisibleMessageCount() > 0) {
      return;
    }
    const sequenceChangeStream = kefir__WEBPACK_IMPORTED_MODULE_1__["default"].fromPromise(threadRowView.getDraftID()).flatMap(draftID => kefir__WEBPACK_IMPORTED_MODULE_1__["default"].fromPromise(_core_ajax_apiRequester__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.get('/sequences', {
      gmailDraftIdList: [draftID],
      brief: true
    }, {
      prefix: '/api/v2',
      templateUrl: '/sequences'
    }).getPromise())).map(_ref => {
      let {
        results
      } = _ref;
      if (results.length === 0) {
        return null;
      } else {
        return results[0];
      }
    });
    threadRowView.replaceDraftLabel(sequenceChangeStream.map(sequenceSummary => {
      if (!sequenceSummary) {
        return null;
      }
      return {
        text: _services_locale_locale__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.getString('mail_merge'),
        count: sequenceSummary.recipientCount
      };
    }));
    threadRowView.replaceDate(sequenceChangeStream.map(sequence => {
      if (!sequence) {
        return null;
      }
      const status = sequence.status;
      switch (status) {
        case _core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_3__/* .SequenceStatus */ .ST.Draft:
          return {
            text: _services_locale_locale__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.getString('sequences_view_status_draft'),
            textColor: 'rgb(255, 173, 71)'
          };
        case _core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_3__/* .SequenceStatus */ .ST.Active:
          return {
            text: _services_locale_locale__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.getString('started') + ' ' + (0,_lib_streakTimelineMoment__WEBPACK_IMPORTED_MODULE_6__/* .streakTimelineMoment */ .iw)(sequence.firstMessageSent),
            tooltip: (0,_lib_streakDate__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(sequence.firstMessageSent).customFormat('shortFormat'),
            textColor: 'rgb(255, 173, 71)'
          };
      }
      return null;
    }));
    sequenceChangeStream.onValue(seq => {
      if (seq && !threadRowView.destroyed) {
        const element = threadRowView.getElement();
        element.dataset.seqKey = seq.key;
        element.dataset.seqStatus = seq.status;

        /**
         * in case `registerThreadRowViewHandler` was called for already processed row,
         * but potentially the listener could've been removed, so force remove it and add again
         */
        element.removeEventListener('click', onThreadRowViewElementClicked);
        element.addEventListener('click', onThreadRowViewElementClicked);
        activeSequenceThreadRows.add(threadRowView);
        threadRowView.on('destroy', () => {
          activeSequenceThreadRows.delete(threadRowView);
        });
        threadRowView.replaceSubject(seq.displayName);
      }
    });

    // threadRowView.addAttachmentIcon(
    //   mailMergeChangeStream.map(mailMerge => {
    //     if (!mailMerge) {
    //       return null;
    //     }

    //     if (mailMerge.get('isTracked')) {
    //       return {
    //         iconClass: 'streak__pt_eye_indicator',
    //         tooltip: _getViewCountString(0)
    //       };
    //     } else {
    //       return null;
    //     }
    //   })
    // );
  });
}
function onThreadRowViewElementClicked(e) {
  let seqKey = null;
  let seqStatus = null;
  const currTarget = e.currentTarget;
  if (currTarget.dataset) {
    seqKey = currTarget.dataset?.seqKey || null;
    seqStatus = currTarget.dataset?.seqStatus || null;
  }
  if (!seqKey) {
    return;
  }

  // allow click on some thread row buttons if sequence is archived
  if (seqStatus === _core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_3__/* .SequenceStatus */ .ST.Archived) {
    const target = e.target;
    if (target.nodeName === 'LI') {
      // "delete" button
      if (target.classList.contains('bru')) {
        return;
      }

      // "archive" button
      if (target.classList.contains('brq')) {
        return;
      }
    }
  }
  e.stopPropagation();
  e.stopImmediatePropagation();
  e.preventDefault();
  _services_tracker_tracker__WEBPACK_IMPORTED_MODULE_8__.Tracker.track('sequence.click', {
    sequenceKey: seqKey,
    source: 'thread_row_view_draft'
  });
  _streakyc_common_core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_0__.inboxSDK.Router.goto(_core_routing__WEBPACK_IMPORTED_MODULE_9__/* .StreakCustomRoute */ .ld.SEQUENCE, {
    key: seqKey
  });
  return false;
}
_lib_dependencyManager__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP.addFunction({
  functionKey: 'ThreadRowSequenceInitialized',
  functionReference: main,
  dependentFunctionKeys: ['gmailLoaded', 'localeLoaded', 'data.streakSettings.initialized']
});
function isThreadRowASequence(threadRowView) {
  return activeSequenceThreadRows.has(threadRowView);
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 45901:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ SequenceDraftViewBanner)
/* harmony export */ });
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35091);
/* harmony import */ var _widgets_react_material_button_streakButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22682);
/* harmony import */ var _permissionBanner_PermissionBanner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10080);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(59718);




function SequenceDraftViewBanner(_ref) {
  let {
    draftSequenceCount,
    onViewDraftsClick
  } = _ref;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_permissionBanner_PermissionBanner__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    iconName: "compare_arrows",
    mainText: _services_locale_locale__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.getString('sequence_drafts_banner_descr', {
      count: draftSequenceCount
    }),
    actionRenderer: () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_widgets_react_material_button_streakButton__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP, {
      variant: "text",
      onClick: onViewDraftsClick,
      children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.getString('sequence_view_drafts')
    })
  });
}

/***/ }),

/***/ 53137:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var kefir__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98137);
/* harmony import */ var _streakyc_common_core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77294);
/* harmony import */ var _core_appShell__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81022);
/* harmony import */ var _core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(72493);
/* harmony import */ var _lib_dependencyManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54612);
/* harmony import */ var _lib_utils_fromEventsCapture__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(59163);
/* harmony import */ var _lib_log_error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7961);
/* harmony import */ var _react_query_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(27758);
/* harmony import */ var _api_queries__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(55639);
/* harmony import */ var _components_SequenceDraftViewBanner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(45901);
/* harmony import */ var _widgets_modal_confirmModalEx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(39367);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(35091);
/* harmony import */ var _lib_dom_simulateMouseClick__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(81896);
/* harmony import */ var _listIndicators_threadRowSequence__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(24686);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_3__, _api_queries__WEBPACK_IMPORTED_MODULE_8__, _listIndicators_threadRowSequence__WEBPACK_IMPORTED_MODULE_12__]);
([_core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_3__, _api_queries__WEBPACK_IMPORTED_MODULE_8__, _listIndicators_threadRowSequence__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















function init() {
  _streakyc_common_core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_1__.inboxSDK.Router.handleListRoute(_streakyc_common_core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_1__.inboxSDK.Router.NativeRouteIDs.DRAFTS, async listRouteView => {
    const discardButton = document.querySelector(
    // div.D.E.G-atb.PY[gh='tm'] is the active parent element for the discard button
    // div[role='button'].T-I.J-J5-Ji.aFh is the discard button
    "div.D.E.G-atb.PY[gh='tm'] div[role='button'].T-I.J-J5-Ji.aFh");
    if (discardButton) {
      let allowDiscardPress = false;
      kefir__WEBPACK_IMPORTED_MODULE_0__["default"].merge([(0,_lib_utils_fromEventsCapture__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(discardButton, 'mousedown'), (0,_lib_utils_fromEventsCapture__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(discardButton, 'click')]).takeUntilBy(kefir__WEBPACK_IMPORTED_MODULE_0__["default"].fromEvents(listRouteView, 'destroy')).onValue(event => {
        if (allowDiscardPress) {
          return;
        }

        // if none of the selected rows are a mail merge, don't do anything
        const isASequenceSelected = _streakyc_common_core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_1__.inboxSDK.Lists.getSelectedThreadRowViews().some(_listIndicators_threadRowSequence__WEBPACK_IMPORTED_MODULE_12__.isThreadRowASequence);
        if (!isASequenceSelected) {
          return;
        }
        event.stopImmediatePropagation();
        if (event.type === 'click') {
          (0,_widgets_modal_confirmModalEx__WEBPACK_IMPORTED_MODULE_10__/* .showConfirmModalEx */ .Z)({
            size: 'medium',
            title: _services_locale_locale__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z.getString('drafts_delete_confirmation_title'),
            confirmButtonText: _services_locale_locale__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z.getString('discard_anyway'),
            bodyComponent: () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
              children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z.getString('drafts_delete_confirmation_body')
            })
          }).then(_ref => {
            let {
              confirmClicked
            } = _ref;
            if (confirmClicked) {
              allowDiscardPress = true;
              try {
                (0,_lib_dom_simulateMouseClick__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(discardButton);
              } finally {
                allowDiscardPress = false;
              }
            }
          });
        }
      });
    } else {
      (0,_lib_log_error__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP)({
        err: new Error('Could not find discard button'),
        level: 'error'
      });
    }
    const scoped = (0,_react_query_utils__WEBPACK_IMPORTED_MODULE_7__/* .scopeQueryClientWithKey */ .hM)(_core_appShell__WEBPACK_IMPORTED_MODULE_2__/* .queryClient */ .Eh, _api_queries__WEBPACK_IMPORTED_MODULE_8__/* .SEQUENCES_INFO_QUERY_DEF */ .e9, {});
    let sequences = [];
    try {
      const {
        results
      } = await scoped.fetchQuery({
        staleTime: Number.MAX_VALUE
      });
      sequences = results;
    } catch (err) {
      (0,_lib_log_error__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP)({
        err,
        level: 'error'
      });
    }
    const draftSequences = sequences.filter(seq => seq.status === _core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_3__/* .SequenceStatus */ .ST.Draft);
    if (draftSequences.length > 0) {
      const el = document.createElement('div');
      (0,_core_appShell__WEBPACK_IMPORTED_MODULE_2__/* .renderWithAppShell */ .oC)(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_SequenceDraftViewBanner__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        draftSequenceCount: draftSequences.length,
        onViewDraftsClick: () => {
          _streakyc_common_core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_1__.inboxSDK.Router.goto('sequences/draft');
        }
      }), el);
      listRouteView.addSection({
        contentElement: el
      });
    }
  });
}
_lib_dependencyManager__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP.addFunction({
  functionKey: 'sequenceDraftViewInit',
  functionReference: function () {
    init();
  },
  dependentFunctionKeys: ['gmailLoaded', 'data.pipelines.initialized', 'htmlLoaded', 'userSettingsInitialized', 'accessManagerInitialized', 'enabledFeaturesControllerInitialized']
});
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

/***/ })

};
;
//# sourceMappingURL=https://storage.googleapis.com/streak-extension-sourcemaps/clientjs/clientjs.chunk.3137.6914b64ac581a7a5d26e.js.map