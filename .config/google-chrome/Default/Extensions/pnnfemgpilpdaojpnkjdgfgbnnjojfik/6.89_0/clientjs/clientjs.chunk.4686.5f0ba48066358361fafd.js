"use strict";
export const id = 4686;
export const ids = [4686];
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

/***/ })

};
;
//# sourceMappingURL=https://storage.googleapis.com/streak-extension-sourcemaps/clientjs/clientjs.chunk.4686.5f0ba48066358361fafd.js.map