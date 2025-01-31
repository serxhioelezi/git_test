"use strict";
export const id = 7397;
export const ids = [7397];
export const modules = {

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

/***/ 47397:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SequencesView)
/* harmony export */ });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81518);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _streakyc_common_core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77294);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47587);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(93733);
/* harmony import */ var react_virtualized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22862);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44345);
/* harmony import */ var _hooks_useSequences__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14643);
/* harmony import */ var _lib_utils_prettyDate__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(13871);
/* harmony import */ var _components_Heading_Heading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(67565);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(35091);
/* harmony import */ var _services_tracker_tracker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(13778);
/* harmony import */ var _services_tracker_useTracker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(70989);
/* harmony import */ var _services_copy_fallbackTitle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(62200);
/* harmony import */ var _components_LoadingBar_LoadingBar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(94246);
/* harmony import */ var _SequencesViewEmpty__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(48365);
/* harmony import */ var _SequenceStatus__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(59938);
/* harmony import */ var _widgets_react_material_tooltip_TooltipContainer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(9112);
/* harmony import */ var _components_Icon_Icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(71174);
/* harmony import */ var _widgets_react_material_spinner_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2962);
/* harmony import */ var _widgets_react_material_button_streakButton__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(22682);
/* harmony import */ var _core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(72493);
/* harmony import */ var _sequenceManager__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(28778);
/* harmony import */ var _lib_utils_prettyNumber__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(6567);
/* harmony import */ var _core_enabledFeaturesController__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(50452);
/* harmony import */ var _core_routing__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(58556);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useSequences__WEBPACK_IMPORTED_MODULE_5__, _SequencesViewEmpty__WEBPACK_IMPORTED_MODULE_12__, _SequenceStatus__WEBPACK_IMPORTED_MODULE_13__, _core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_18__, _sequenceManager__WEBPACK_IMPORTED_MODULE_19__, _core_enabledFeaturesController__WEBPACK_IMPORTED_MODULE_21__]);
([_hooks_useSequences__WEBPACK_IMPORTED_MODULE_5__, _SequencesViewEmpty__WEBPACK_IMPORTED_MODULE_12__, _SequenceStatus__WEBPACK_IMPORTED_MODULE_13__, _core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_18__, _sequenceManager__WEBPACK_IMPORTED_MODULE_19__, _core_enabledFeaturesController__WEBPACK_IMPORTED_MODULE_21__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



























const ROW_HEIGHT = 48;
const cache = new react_virtualized__WEBPACK_IMPORTED_MODULE_3__/* .CellMeasurerCache */ .t1({
  fixedHeight: true
});
function SequencesView() {
  const listRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);
  const currentRouteId = _streakyc_common_core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_1__.inboxSDK.Router.getCurrentRouteView().getRouteID();
  const route = currentRouteId?.split('/')[1];
  const filterFunc = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(sequence => {
    switch (route) {
      case 'active':
        {
          return sequence.status === _core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_18__/* .SequenceStatus */ .ST.Active && sequence.activeRecipientCount > 0;
        }
      case 'draft':
        {
          return sequence.status === _core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_18__/* .SequenceStatus */ .ST.Draft;
        }
      default:
        {
          return sequence.status !== _core_models_sequence_sequence__WEBPACK_IMPORTED_MODULE_18__/* .SequenceStatus */ .ST.Archived;
        }
    }
  }, [route]);

  // Account for scrollbar width on Windows/macOS with a non windows mouse
  const [scrollbarOffset, setScrollbarOffset] = react__WEBPACK_IMPORTED_MODULE_4__.useState(0);
  react__WEBPACK_IMPORTED_MODULE_4__.useEffect(() => {
    if (!listRef.current) {
      return;
    }
    const el = document.querySelector('.ReactVirtualized__List.streak__sequences_view_body_list');
    if (!el) {
      return;
    }

    // https://stackoverflow.com/a/40568748/1924257
    setScrollbarOffset(el.offsetWidth - el.clientWidth);
    // only works for initial render
  }, [listRef]);
  const _track = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)((eventName, extraProps) => {
    _services_tracker_tracker__WEBPACK_IMPORTED_MODULE_8__["default"].track(`sequencesView.${route}.` + eventName, extraProps);
  }, [route]);

  // can tweak how we fetch data, eg: refetchOnWindowFocus
  const sequencesResult = (0,_hooks_useSequences__WEBPACK_IMPORTED_MODULE_5__/* .useSequencesList */ .Qs)(filterFunc, {
    refetchOnWindowFocus: false
  });
  const {
    status,
    data
  } = sequencesResult;
  const showClicks = _core_enabledFeaturesController__WEBPACK_IMPORTED_MODULE_21__.EnabledFeatures.isFeatureEnabled('advancedLinkTracking');
  const _rowRenderer = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(_ref => {
    let {
      key,
      index,
      parent,
      style
    } = _ref;
    const {
      displayName,
      status,
      recipientCount,
      key: sequenceKey,
      activeRecipientCount,
      clickedRecipientCount,
      sentRecipientCount,
      viewedRecipientCount,
      repliedRecipientCount,
      latestMessageSent
    } = data[index];
    const nameCol = (0,_services_copy_fallbackTitle__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(displayName);
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(react_virtualized__WEBPACK_IMPORTED_MODULE_3__/* .CellMeasurer */ .Z8, {
      cache: cache,
      columnIndex: 0,
      rowIndex: index,
      parent: parent,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(SequenceRow, {
        style: style,
        disabled: sequencesResult.isFetching,
        name: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("div", {
          className: "streak__sequence_view_name_tbody",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_widgets_react_material_tooltip_TooltipContainer__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
            tooltip: nameCol,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("div", {
              style: {
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap'
              },
              children: nameCol
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_widgets_react_material_tooltip_TooltipContainer__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
            tooltip: _services_locale_locale__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.getString('sequences_view_recipients'),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("span", {
              className: "streak__sequence-view--recipient-count",
              children: ["(", (0,_lib_utils_prettyNumber__WEBPACK_IMPORTED_MODULE_20__/* .prettyNumber */ .C)(recipientCount), ")"]
            })
          })]
        }),
        status: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_SequenceStatus__WEBPACK_IMPORTED_MODULE_13__/* .SequenceStatusIconWithText */ .EP, {
          status: status,
          activeRecipientCount: activeRecipientCount,
          disabled: sequencesResult.isFetching
        }),
        stats: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(SequenceStats, {
          sentRecipientCount: sentRecipientCount,
          viewedRecipientCount: viewedRecipientCount,
          clickedRecipientCount: clickedRecipientCount,
          repliedRecipientCount: repliedRecipientCount,
          showClicks: showClicks
        }),
        mostRecent: latestMessageSent ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_widgets_react_material_tooltip_TooltipContainer__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
          tooltip: date_fns__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z(latestMessageSent, 'MMM dd, yyyy, h:mm a'),
          children: (0,_lib_utils_prettyDate__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z)(new Date(latestMessageSent))
        }) : '-',
        onClickRow: () => {
          _track('sequence.click', {
            sequenceKey
          });
          _streakyc_common_core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_1__.inboxSDK.Router.goto(_core_routing__WEBPACK_IMPORTED_MODULE_22__/* .StreakCustomRoute */ .ld.SEQUENCE, {
            key: sequenceKey
          });
        }
      })
    }, key);
  }, [_track, data, sequencesResult.isFetching, showClicks]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_services_tracker_useTracker__WEBPACK_IMPORTED_MODULE_9__/* .TrackerContext */ .fy.Provider, {
    value: _track,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default().dynamic([["3827360196", [16 + scrollbarOffset, 16 + scrollbarOffset]]]) + " " + "streak__sequences_view",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default().dynamic([["3827360196", [16 + scrollbarOffset, 16 + scrollbarOffset]]]) + " " + "streak__sequences_view_header",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(SequenceRow, {
          name: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_components_Heading_Heading__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            size: "h3",
            children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.getString('sequences_view_name')
          }),
          status: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_components_Heading_Heading__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            size: "h3",
            children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.getString('sequences_view_status')
          }),
          stats: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(SequenceStatsHeader, {
            showClicks: showClicks
          }),
          mostRecent: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_components_Heading_Heading__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            size: "h3",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("div", {
              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default().dynamic([["3827360196", [16 + scrollbarOffset, 16 + scrollbarOffset]]]) + " " + "streak__sequences_view_header--most-recent",
              children: [_services_locale_locale__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.getString('sequences_view_most_recent'), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                accent: "muted",
                isOutline: true,
                name: "arrow_downward",
                size: "xs",
                variant: "inline"
              })]
            })
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default().dynamic([["3827360196", [16 + scrollbarOffset, 16 + scrollbarOffset]]]) + " " + "streak__sequences_view_group_header",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_components_Heading_Heading__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
          size: "h2",
          margin: "12px 0 12px 62px",
          children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.getString('sequences_view_my_sequences')
        }), sequencesResult.isFetching && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("div", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default().dynamic([["3827360196", [16 + scrollbarOffset, 16 + scrollbarOffset]]]) + " " + "loading-wrapper",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_widgets_react_material_spinner_spinner__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
            medium: true,
            withText: true,
            singleColor: true
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("div", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default().dynamic([["3827360196", [16 + scrollbarOffset, 16 + scrollbarOffset]]]) + " " + "icon-wrapper",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_widgets_react_material_button_streakButton__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .ZP, {
            accent: "default",
            className: "streak__sequences_view_add",
            isRound: true,
            onClick: async () => {
              _track('createNewSequence.click');
              _sequenceManager__WEBPACK_IMPORTED_MODULE_19__["default"].showChooseDataSourceInNextCompose();
              await _streakyc_common_core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_1__.inboxSDK.Compose.openNewComposeView();
            },
            variant: "inline",
            tooltip: _services_locale_locale__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.getString('add_sequence'),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_widgets_react_material_button_streakButton__WEBPACK_IMPORTED_MODULE_17__/* .StreakButtonIcon */ .A2, {
              materialIconName: "add"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_widgets_react_material_button_streakButton__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .ZP, {
            accent: "default",
            isRound: true,
            onClick: async () => {
              _track('quotaManagement.click');
              _streakyc_common_core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_1__.inboxSDK.Router.goto('quota');
            },
            variant: "text",
            tooltip: _services_locale_locale__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.getString('quota_management'),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_widgets_react_material_button_streakButton__WEBPACK_IMPORTED_MODULE_17__/* .StreakButtonIcon */ .A2, {
              materialIconName: "leaderboard"
            })
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default().dynamic([["3827360196", [16 + scrollbarOffset, 16 + scrollbarOffset]]]) + " " + "streak__sequences_view_body",
        children: [(status === 'loading' || status === 'error') && [1, 2, 3].map(num => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(SequenceRow, {
          name: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_components_LoadingBar_LoadingBar__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
            style: {
              borderRadius: '4px'
            },
            height: 16,
            width: 126,
            margin: "16px 0"
          }),
          status: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_components_LoadingBar_LoadingBar__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
            style: {
              borderRadius: '4px'
            },
            height: 16,
            width: 60,
            margin: "16px 0"
          }),
          stats: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_components_LoadingBar_LoadingBar__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
            style: {
              borderRadius: '4px'
            },
            height: 16,
            width: 126,
            margin: "16px 0"
          }),
          mostRecent: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_components_LoadingBar_LoadingBar__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
            style: {
              borderRadius: '4px'
            },
            height: 16,
            width: 60,
            margin: "16px 0"
          })
        }, num)), status === 'success' && data && data.length === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_SequencesViewEmpty__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
          track: _track
        }), status === 'success' && data && data.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(react_virtualized__WEBPACK_IMPORTED_MODULE_3__/* .AutoSizer */ .qj, {
          children: _ref2 => {
            let {
              height,
              width
            } = _ref2;
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("div", {
              style: {
                height,
                width
              },
              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default().dynamic([["3827360196", [16 + scrollbarOffset, 16 + scrollbarOffset]]]),
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(react_virtualized__WEBPACK_IMPORTED_MODULE_3__/* .List */ .aV, {
                ref: listRef,
                width: width,
                height: height,
                className: "streak__sequences_view_body_list",
                rowCount: data?.length ?? 0,
                rowHeight: ROW_HEIGHT,
                rowRenderer: _rowRenderer,
                overscanRowCount: 5
              })
            });
          }
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
        id: "3827360196",
        dynamic: [16 + scrollbarOffset, 16 + scrollbarOffset],
        children: [`.streak__sequences_view.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;background-color:white;font-family:Roboto;font-size:14px;-webkit-letter-spacing:0.25px;-moz-letter-spacing:0.25px;-ms-letter-spacing:0.25px;letter-spacing:0.25px;color:var(--streak-black-primary);box-sizing:border-box;padding-right:${16 + scrollbarOffset}px;min-width:760px;}`, ".streak__sequences_view_header.__jsx-style-dynamic-selector{box-shadow:inset 0px -1px 0px var(--streak-black-divider);}", `.streak__sequences_view_group_header.__jsx-style-dynamic-selector{background:#ffffff;box-shadow:inset 0px -1px 0px rgba(0,0,0,0.12);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-right:${16 + scrollbarOffset}px;}`, ".loading-wrapper.__jsx-style-dynamic-selector{margin-left:12px;}", ".icon-wrapper.__jsx-style-dynamic-selector{margin-left:auto;margin-right:4px;}", ".streak__sequences_view_body.__jsx-style-dynamic-selector{-webkit-flex:1 0 auto;-ms-flex:1 0 auto;flex:1 0 auto;}", ".streak__sequences_view.__jsx-style-dynamic-selector .ReactVirtualized__Grid.ReactVirtualized__List{overflow:auto;}", ".streak__sequences_view.__jsx-style-dynamic-selector .ReactVirtualized__Grid.ReactVirtualized__List:focus{outline:none;}", ".streak__sequences_view.__jsx-style-dynamic-selector .streak__sequences_view_body_list{width:100%;overflow:auto;}", ".streak__sequences_view_header--most-recent.__jsx-style-dynamic-selector{display:grid;grid-gap:2px;grid-auto-flow:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".streak__sequence_view_name_tbody{display:grid;grid-template-columns:minmax(0,1fr) min-content;-webkit-column-gap:4px;column-gap:4px;}", ".streak__sequence-view--recipient-count{color:var(--streak-black-disabled);}"]
      })]
    })
  });
}
function SequenceRow(_ref3) {
  let {
    name,
    disabled,
    status,
    stats,
    mostRecent,
    onClickRow,
    style
  } = _ref3;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("div", {
    style: style,
    className: "jsx-2543869647" + " " + "sequence_summary_row_wrapper",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("div", {
      onClick: () => {
        if (!disabled) {
          onClickRow && onClickRow();
        }
      },
      className: "jsx-2543869647" + " " + (classnames__WEBPACK_IMPORTED_MODULE_2___default()('sequence_summary_row', {
        'is-disabled': disabled || onClickRow == undefined
      }) || ""),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("div", {
        className: "jsx-2543869647" + " " + "left-align",
        children: name
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("div", {
        className: "jsx-2543869647" + " " + "left-align",
        children: status
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("div", {
        className: "jsx-2543869647" + " " + "right-align",
        children: stats
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("div", {
        className: "jsx-2543869647" + " " + "right-align",
        children: mostRecent
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "2543869647",
      children: [".sequence_summary_row.jsx-2543869647{display:grid;grid-template-columns:minmax(0,1fr) 100px 250px 120px;-webkit-column-gap:16px;column-gap:16px;white-space:nowrap;height:inherit;padding:0 16px;}", ".sequence_summary_row.jsx-2543869647>div.jsx-2543869647{width:-webkit-fill-available;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:inherit;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".sequence_summary_row.is-disabled.jsx-2543869647{color:var(--streak-black-disabled);}", ".sequence_summary_row.jsx-2543869647:not(.is-disabled):hover{cursor:pointer;background:var(--streak-black-hover);border-radius:24px;}", ".sequence_summary_row.jsx-2543869647 .left-align.jsx-2543869647{padding:0;text-align:left;margin-right:auto;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}", ".sequence_summary_row.jsx-2543869647{margin:0 0 0 48px;}", ".sequence_summary_row.jsx-2543869647 .right-align.jsx-2543869647{padding:0;text-align:right;margin-left:auto;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}", ".sequence_summary_row.jsx-2543869647 .center.jsx-2543869647{padding:0 14px;text-align:right;margin-left:auto;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}"]
    })]
  });
}
function SequenceStatsHeader(_ref4) {
  let {
    showClicks
  } = _ref4;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("div", {
    className: "jsx-3619942466" + " " + "streak__sequences_view_stats_header",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("div", {
      className: "jsx-3619942466" + " " + "icon-wrapper",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
        name: "person",
        accent: "inherit",
        size: "s",
        isOutline: true
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_components_Heading_Heading__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      size: "h3",
      margin: "auto",
      children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.getString('sequences_view_stats_sent')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("div", {
      className: "jsx-3619942466" + " " + "divider"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_components_Heading_Heading__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      size: "h3",
      margin: "auto",
      children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.getString('sequences_view_stats_viewed')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("div", {
      className: "jsx-3619942466" + " " + "divider"
    }), showClicks && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_components_Heading_Heading__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      size: "h3",
      margin: "auto",
      children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.getString('sequences_view_stats_clicked')
    }), showClicks && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("div", {
      className: "jsx-3619942466" + " " + "divider"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_components_Heading_Heading__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      size: "h3",
      margin: "auto",
      children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.getString('sequences_view_stats_replied')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "3619942466",
      children: [".streak__sequences_view_stats_header.jsx-3619942466{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", "@media screen and (max-width:1200px){.icon-wrapper.jsx-3619942466{display:none !important;}}", ".icon-wrapper.jsx-3619942466{margin-right:4px;display:inline-block;}", ".divider.jsx-3619942466{margin:0 6px;display:inline-block;border:1px solid var(--streak-black-divider);height:12px;}"]
    })]
  });
}
function SequenceStats(_ref5) {
  let {
    clickedRecipientCount,
    sentRecipientCount,
    viewedRecipientCount,
    repliedRecipientCount,
    showClicks
  } = _ref5;
  const customFormat = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(count => {
    /*
     * Aleem mentioned he wanted each column to be 4 characters wide for stats,
     * and to only use compact number formatting past 4 digits.
     */
    if (count > 9999) {
      return (0,_lib_utils_prettyNumber__WEBPACK_IMPORTED_MODULE_20__/* .prettyNumber */ .C)(count);
    }
    return count;
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default().dynamic([["3966904171", [showClicks ? `grid-template-columns: 5ch min-content 5ch min-content 5ch min-content 5ch;` : `grid-template-columns: 5ch min-content 5ch min-content 5ch;`]]]) + " " + "streak__sequences_view_stats",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default().dynamic([["3966904171", [showClicks ? `grid-template-columns: 5ch min-content 5ch min-content 5ch min-content 5ch;` : `grid-template-columns: 5ch min-content 5ch min-content 5ch;`]]]) + " " + "counts",
      children: customFormat(sentRecipientCount)
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default().dynamic([["3966904171", [showClicks ? `grid-template-columns: 5ch min-content 5ch min-content 5ch min-content 5ch;` : `grid-template-columns: 5ch min-content 5ch min-content 5ch;`]]]) + " " + "icon-wrapper",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
        name: "filter_list",
        accent: "inherit",
        size: "s",
        isOutline: true
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default().dynamic([["3966904171", [showClicks ? `grid-template-columns: 5ch min-content 5ch min-content 5ch min-content 5ch;` : `grid-template-columns: 5ch min-content 5ch min-content 5ch;`]]]) + " " + "counts",
      children: customFormat(viewedRecipientCount)
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default().dynamic([["3966904171", [showClicks ? `grid-template-columns: 5ch min-content 5ch min-content 5ch min-content 5ch;` : `grid-template-columns: 5ch min-content 5ch min-content 5ch;`]]]) + " " + "icon-wrapper",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
        name: "filter_list",
        accent: "inherit",
        size: "s",
        isOutline: true
      })
    }), showClicks && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default().dynamic([["3966904171", [showClicks ? `grid-template-columns: 5ch min-content 5ch min-content 5ch min-content 5ch;` : `grid-template-columns: 5ch min-content 5ch min-content 5ch;`]]]) + " " + "counts",
      children: customFormat(clickedRecipientCount)
    }), showClicks && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default().dynamic([["3966904171", [showClicks ? `grid-template-columns: 5ch min-content 5ch min-content 5ch min-content 5ch;` : `grid-template-columns: 5ch min-content 5ch min-content 5ch;`]]]) + " " + "icon-wrapper",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
        name: "filter_list",
        accent: "inherit",
        size: "s",
        isOutline: true
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default().dynamic([["3966904171", [showClicks ? `grid-template-columns: 5ch min-content 5ch min-content 5ch min-content 5ch;` : `grid-template-columns: 5ch min-content 5ch min-content 5ch;`]]]) + " " + "counts",
      children: customFormat(repliedRecipientCount)
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "3966904171",
      dynamic: [showClicks ? `grid-template-columns: 5ch min-content 5ch min-content 5ch min-content 5ch;` : `grid-template-columns: 5ch min-content 5ch min-content 5ch;`],
      children: [`.streak__sequences_view_stats.__jsx-style-dynamic-selector{display:grid;${showClicks ? `grid-template-columns: 5ch min-content 5ch min-content 5ch min-content 5ch;` : `grid-template-columns: 5ch min-content 5ch min-content 5ch;`} column-gap:2px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;}`, ".counts.__jsx-style-dynamic-selector{text-align:center;}", ".icon-wrapper.__jsx-style-dynamic-selector{color:var(--streak-black-secondary);-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);}"]
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 48365:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ SequencesViewEmpty)
/* harmony export */ });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81518);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _streakyc_common_core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77294);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35091);
/* harmony import */ var _widgets_react_material_button_streakButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22682);
/* harmony import */ var _sequenceManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(28778);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_sequenceManager__WEBPACK_IMPORTED_MODULE_4__]);
_sequenceManager__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






function SequencesViewEmpty(_ref) {
  let {
    track
  } = _ref;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: "jsx-140504678" + " " + "streak__sequences_view_body_empty",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
      className: "jsx-140504678",
      children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.getString('sequences_view_empty')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "jsx-140504678" + " " + "cta",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_widgets_react_material_button_streakButton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP, {
        onClick: async () => {
          track('createNewSequence.click');
          _sequenceManager__WEBPACK_IMPORTED_MODULE_4__["default"].showChooseDataSourceInNextCompose();
          await _streakyc_common_core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_1__.inboxSDK.Compose.openNewComposeView();
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_widgets_react_material_button_streakButton__WEBPACK_IMPORTED_MODULE_3__/* .StreakButtonIcon */ .A2, {
          materialIconName: "add",
          style: {
            marginLeft: '-8px'
          }
        }), _services_locale_locale__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.getString('sequences_view_empty_cta')]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "140504678",
      children: [".streak__sequences_view_body_empty.jsx-140504678{margin:70px auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;}", ".streak__sequences_view_body_empty.jsx-140504678 p.jsx-140504678{font-family:Roboto;font-style:normal;font-weight:normal;font-size:13px;line-height:16px;color:var(--streak-black-secondary);}", ".streak__sequences_view_body_empty.jsx-140504678 .cta.jsx-140504678{margin:auto;}"]
    })]
  });
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

/***/ })

};
;
//# sourceMappingURL=https://storage.googleapis.com/streak-extension-sourcemaps/clientjs/clientjs.chunk.7397.45118144c919454c4ccc.js.map