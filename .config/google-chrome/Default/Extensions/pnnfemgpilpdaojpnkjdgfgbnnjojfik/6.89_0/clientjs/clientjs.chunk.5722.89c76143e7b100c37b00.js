"use strict";
export const id = 5722;
export const ids = [5722];
export const modules = {

/***/ 75163:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ ContactSequences)
/* harmony export */ });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81518);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44345);
/* harmony import */ var _core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72493);
/* harmony import */ var _react_query_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27758);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(35091);
/* harmony import */ var _sequenceView_api_queries__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(55639);
/* harmony import */ var _sequenceView_sequenceManager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(28778);
/* harmony import */ var _core_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(58556);
/* harmony import */ var _streakyc_ui_components_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2225);
/* harmony import */ var _widgets_view__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(67003);
/* harmony import */ var _streakyc_ui_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(87084);
/* harmony import */ var _sequenceView__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1433);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_2__, _sequenceView_api_queries__WEBPACK_IMPORTED_MODULE_5__, _sequenceView_sequenceManager__WEBPACK_IMPORTED_MODULE_6__, _sequenceView__WEBPACK_IMPORTED_MODULE_11__]);
([_core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_2__, _sequenceView_api_queries__WEBPACK_IMPORTED_MODULE_5__, _sequenceView_sequenceManager__WEBPACK_IMPORTED_MODULE_6__, _sequenceView__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













function ContactSequences(_ref) {
  let {
    teamContact
  } = _ref;
  const {
    status,
    data
  } = useContactSequences(teamContact);
  const {
    goTo
  } = (0,_core_routing__WEBPACK_IMPORTED_MODULE_7__/* .useRouting */ .pe)();
  const emails = teamContact.getEmailAddresses().join(',');
  const onClickSequence = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(sequence => {
    if (sequence.status === _core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_2__/* .SequenceStatus */ .ST.Draft) {
      _sequenceView_sequenceManager__WEBPACK_IMPORTED_MODULE_6__["default"].editExistingSequence(sequence.key);
      return;
    }
    goTo(_core_routing__WEBPACK_IMPORTED_MODULE_7__/* .StreakCustomRoute */ .ld.SEQUENCE_RECIPIENT_EMAILS, {
      key: sequence.key,
      emails
    });
  }, [emails, goTo]);
  if (status === 'loading' || !data?.results || data.results.length === 0) {
    return null;
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_streakyc_ui_components_layout__WEBPACK_IMPORTED_MODULE_8__/* .LayoutColumn */ .rO, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_streakyc_ui_components_layout__WEBPACK_IMPORTED_MODULE_8__/* .LayoutRow */ .WM, {
      padding: "l|none",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_widgets_view__WEBPACK_IMPORTED_MODULE_9__/* .ViewHorizontalDivider */ .ql, {})
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_streakyc_ui_components_layout__WEBPACK_IMPORTED_MODULE_8__/* .LayoutRow */ .WM, {
      alignItemsH: "start",
      gapH: "s",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_streakyc_ui_components_layout__WEBPACK_IMPORTED_MODULE_8__/* .LayoutBox */ .kZ, {
        alignSelf: "start",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_streakyc_ui_components__WEBPACK_IMPORTED_MODULE_10__/* .Typo */ .Jd, {
          variant: "H7 - Breadcrumb",
          wrap: "nowrap",
          children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('sequence_contact_has_been_added', {
            number: data.results.length
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_streakyc_ui_components_layout__WEBPACK_IMPORTED_MODULE_8__/* .LayoutRow */ .WM, {
        flex: true,
        wrap: "wrap",
        gapV: "xsnudge",
        gapH: "xsnudge",
        padding: {
          top: 'xxs'
        },
        children: data.results.map(seq => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(SequenceChip, {
          sequence: seq,
          onClick: () => onClickSequence(seq)
        }, seq.key))
      })]
    })]
  });
}
function SequenceChip(_ref2) {
  let {
    sequence,
    onClick
  } = _ref2;
  const {
    status,
    activeRecipientCount
  } = sequence;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("span", {
    onClick: onClick,
    className: "jsx-895390300" + " " + "sequence_chip",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_sequenceView__WEBPACK_IMPORTED_MODULE_11__/* .SequenceStatusIcon */ .KK, {
      status: status,
      activeRecipientCount: activeRecipientCount,
      size: "xs"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span", {
      className: "jsx-895390300" + " " + "sequence_chip_text",
      children: sequence.displayName
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "895390300",
      children: [".sequence_chip.jsx-895390300{padding:2px 4px;border:1px solid var(--streak-black-divider);border-radius:4px;background-color:white;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:12px;max-width:150px;}", ".sequence_chip.jsx-895390300:hover{background-color:var(--streak-black-hover);cursor:pointer;}", ".sequence_chip.jsx-895390300 .sequence_chip_text.jsx-895390300{padding-left:3px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;}"]
    })]
  });
}
function useContactSequences(teamContact) {
  return (0,_react_query_utils__WEBPACK_IMPORTED_MODULE_3__/* .useQueryDef */ .PS)(_sequenceView_api_queries__WEBPACK_IMPORTED_MODULE_5__/* .SEQUENCES_SEARCH_BY_CONTACT_QUERY_DEF */ .Xd, {
    contact: teamContact
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 25722:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TeamContactView)
/* harmony export */ });
/* harmony import */ var _streakyc_common_services_data_user__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(5575);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44345);
/* harmony import */ var _timeline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32106);
/* harmony import */ var _threadScoreboard_ThreadsScoreboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88449);
/* harmony import */ var _components_BoxCard_BoxCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(59462);
/* harmony import */ var _components_BoxCard_BoxCardGrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(64448);
/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(3572);
/* harmony import */ var _widgets_react_loadingSpinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(72905);
/* harmony import */ var _lib_utils_string_isValidEmail__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(1760);
/* harmony import */ var _services_tracker_tracker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13778);
/* harmony import */ var _core_models_teamContactAndOrg_teamContactAndOrgCache__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(41675);
/* harmony import */ var _redux_models_contacts_useContactLookupByEmail__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(670);
/* harmony import */ var _redux_models_modelHooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(64076);
/* harmony import */ var _core_emailBlackList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(31813);
/* harmony import */ var _ContactSequences__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(75163);
/* harmony import */ var _streakyc_ui_components_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2225);
/* harmony import */ var _widgets_view__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(67003);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_timeline__WEBPACK_IMPORTED_MODULE_1__, _threadScoreboard_ThreadsScoreboard__WEBPACK_IMPORTED_MODULE_2__, _core_models_teamContactAndOrg_teamContactAndOrgCache__WEBPACK_IMPORTED_MODULE_7__, _redux_models_contacts_useContactLookupByEmail__WEBPACK_IMPORTED_MODULE_8__, _ContactSequences__WEBPACK_IMPORTED_MODULE_11__]);
([_timeline__WEBPACK_IMPORTED_MODULE_1__, _threadScoreboard_ThreadsScoreboard__WEBPACK_IMPORTED_MODULE_2__, _core_models_teamContactAndOrg_teamContactAndOrgCache__WEBPACK_IMPORTED_MODULE_7__, _redux_models_contacts_useContactLookupByEmail__WEBPACK_IMPORTED_MODULE_8__, _ContactSequences__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



















const canSearchEntity = teamContact => {
  const domain = teamContact.displayEmailAddress().indexOf('@') > -1 && teamContact.displayEmailAddress().split('@')[1];
  return !(domain && domain === (0,_streakyc_common_services_data_user__WEBPACK_IMPORTED_MODULE_15__/* .getUser */ .P)().getEmail().split('@')[1]) || _core_emailBlackList__WEBPACK_IMPORTED_MODULE_10__/* .EMAIL_BLACK_LIST */ .rZ.some(regEx => domain.match(regEx));
};
function TeamContactView(_ref) {
  let {
    routeParam
  } = _ref;
  const contactKey = !(0,_lib_utils_string_isValidEmail__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z)(routeParam) ? routeParam : undefined;
  const contactEmail = (0,_lib_utils_string_isValidEmail__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z)(routeParam) ? routeParam : undefined;
  const teamKey = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_17__/* .useSelector */ .v9)(state => state.ui.contactView.teamKey);
  const contactIdsFromEmail = (0,_redux_models_contacts_useContactLookupByEmail__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(contactEmail, teamKey);
  const contactFromEmail = (0,_redux_models_modelHooks__WEBPACK_IMPORTED_MODULE_9__/* .useContact */ .AW)(contactIdsFromEmail && contactIdsFromEmail.length > 0 ? {
    id: contactIdsFromEmail[0]
  } : null).result;
  const contactFromKey = (0,_redux_models_modelHooks__WEBPACK_IMPORTED_MODULE_9__/* .useContact */ .AW)(contactKey ? {
    key: contactKey
  } : null).result;
  const contact = contactFromEmail || contactFromKey;
  const contactId = contact ? contact.id : undefined;
  const boxIds = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_17__/* .useSelector */ .v9)(state => {
    if (!contactId) {
      return [];
    }
    const contactState = state.models.contacts[contactId];
    return contactState && contactState.boxIds || [];
  });
  const teamCount = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_17__/* .useSelector */ .v9)(state => {
    return Object.keys(state.models.teams);
  }).length;
  if (!contactId) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_widgets_react_loadingSpinner__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {});
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(InternalTeamContactView, {
    contactId: contactId,
    boxIds: boxIds,
    shouldShowTeamPicker: (0,_lib_utils_string_isValidEmail__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z)(routeParam) && teamCount > 1
  });
}
function InternalTeamContactView(props) {
  const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_17__/* .useDispatch */ .I0)();
  const {
    contactId
  } = props;
  const teamContact = _core_models_teamContactAndOrg_teamContactAndOrgCache__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.getTeamContactByKeyOrIdSync(contactId);
  const [canSearchEnvelopes] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(teamContact ? canSearchEntity(teamContact) : true);
  const contactKey = teamContact?.key();
  const email = teamContact?.getEmailAddresses()[0];
  const track = (eventName, extraProps) => {
    _services_tracker_tracker__WEBPACK_IMPORTED_MODULE_6__["default"].track(`TeamContactView.${eventName}`, {
      teamContactKey: contactKey,
      teamContactEmail: teamContact && teamContact.displayEmailAddress(),
      ...extraProps
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_streakyc_ui_components_layout__WEBPACK_IMPORTED_MODULE_12__/* .LayoutBox */ .kZ, {
    flex: true,
    overflow: "hidden",
    minHeight: "100%",
    maxHeight: "100%",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_streakyc_ui_components_layout__WEBPACK_IMPORTED_MODULE_12__/* .LayoutColumn */ .rO, {
      padding: "l",
      background: "white",
      flex: true,
      overflow: "auto",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_components_BoxCard_BoxCardGrid__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        contactOrOrgId: {
          contactId
        },
        children: props.boxIds.map(boxId => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_components_BoxCard_BoxCard__WEBPACK_IMPORTED_MODULE_3__/* .BoxCardSummary */ .m, {
          boxId: boxId,
          isSummary: true,
          onClickBoxCard: () => {
            dispatch({
              type: 'BOX_LINK_CLICK',
              boxId
            });
            track('goToBox');
          }
        }, boxId))
      }), teamContact && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_ContactSequences__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
        teamContact: teamContact
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_streakyc_ui_components_layout__WEBPACK_IMPORTED_MODULE_12__/* .LayoutRow */ .WM, {
        padding: "l|none",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_widgets_view__WEBPACK_IMPORTED_MODULE_13__/* .ViewHorizontalDivider */ .ql, {})
      }), canSearchEnvelopes && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_threadScoreboard_ThreadsScoreboard__WEBPACK_IMPORTED_MODULE_2__/* .ThreadsScoreboard */ .u, {
        entity: {
          type: 'contact',
          key: contactKey,
          email
        }
      }), canSearchEnvelopes && teamContact && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_timeline__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        keyOrId: {
          id: contactId
        },
        type: "CONTACT",
        track: (eventName, extraProps) => track(eventName, extraProps)
      })]
    })
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
//# sourceMappingURL=https://storage.googleapis.com/streak-extension-sourcemaps/clientjs/clientjs.chunk.5722.89c76143e7b100c37b00.js.map