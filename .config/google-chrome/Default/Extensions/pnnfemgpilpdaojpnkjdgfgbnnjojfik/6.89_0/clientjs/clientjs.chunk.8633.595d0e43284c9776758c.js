"use strict";
export const id = 8633;
export const ids = [8633];
export const modules = {

/***/ 78633:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SequenceComposeReadOnlyStatusBar: () => (/* binding */ SequenceComposeReadOnlyStatusBar),
/* harmony export */   SequenceComposeStatusBar: () => (/* binding */ SequenceComposeStatusBar)
/* harmony export */ });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81518);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44345);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17013);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35091);
/* harmony import */ var _widgets_react_matches__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65693);
/* harmony import */ var _widgets_react_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(82792);
/* harmony import */ var _services_tracker_tracker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13778);
/* harmony import */ var _helpers_sequenceRecipientsSourceVariables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5235);
/* harmony import */ var _widgets_react_material_menu_searchableMenuDropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(91141);
/* harmony import */ var _widgets_react_material_button_streakButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(22682);
/* harmony import */ var _components_Icon_Icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(71174);
/* harmony import */ var _snippets_snippetsComposeMenu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(54286);
/* harmony import */ var _snippets_insertSnippetIntoComposeWindow__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(35552);
/* harmony import */ var _services_data_data__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(38672);
/* harmony import */ var _snippets_snippetsManager__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(42935);
/* harmony import */ var _SequenceComposeNavButtons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(48469);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_helpers_sequenceRecipientsSourceVariables__WEBPACK_IMPORTED_MODULE_7__, _snippets_snippetsComposeMenu__WEBPACK_IMPORTED_MODULE_11__, _services_data_data__WEBPACK_IMPORTED_MODULE_12__, _snippets_snippetsManager__WEBPACK_IMPORTED_MODULE_13__]);
([_helpers_sequenceRecipientsSourceVariables__WEBPACK_IMPORTED_MODULE_7__, _snippets_snippetsComposeMenu__WEBPACK_IMPORTED_MODULE_11__, _services_data_data__WEBPACK_IMPORTED_MODULE_12__, _snippets_snippetsManager__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


















function SequenceComposeReadOnlyStatusBar(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
    className: "jsx-917582741" + " " + "streak__sequence_statusbar",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_SequenceComposeNavButtons__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
      sequenceController: props.sequenceController
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
      className: "jsx-917582741" + " " + "streak__sequence_statusbar_msg",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("span", {
        className: "jsx-917582741",
        children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.getString('sequence_compose_readonly')
      }), props.attachments > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("span", {
        className: "jsx-917582741" + " " + "streak__sequence_statusbar_msg_icon",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
          accent: "inherit",
          name: "attach_file",
          size: "ms",
          variant: "outline"
        }), _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.getString('attachments_count', {
          count: props.attachments
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "917582741",
      children: [".streak__sequence_statusbar.jsx-917582741{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-top:2px;}", ".streak__sequence_statusbar_msg.jsx-917582741{color:var(--streak-icon-grey);font-size:var(--streak-text-size-12);-webkit-flex:1;-ms-flex:1;flex:1;padding-left:10px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}", ".streak__sequence_statusbar_msg.jsx-917582741 .streak__sequence_statusbar_msg_icon.jsx-917582741{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}"]
    })]
  });
}
const SequenceComposeStatusBar = _ref => {
  let {
    gmailComposeWindow,
    sequenceController
  } = _ref;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
    className: "streak__sequence_statusbar",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(SequenceComposeVariablesButton, {
      gmailComposeWindow: gmailComposeWindow,
      sequenceController: sequenceController
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(SequenceComposeSnippetsButton, {
      gmailComposeWindow: gmailComposeWindow,
      sequenceController: sequenceController
    })]
  });
};
const SequenceComposeVariablesButton = _ref2 => {
  let {
    gmailComposeWindow,
    sequenceController
  } = _ref2;
  const recipientsSource = sequenceController.getSequenceRecipientsSource();
  if (!recipientsSource) {
    return null;
  }
  const variables = (0,_helpers_sequenceRecipientsSourceVariables__WEBPACK_IMPORTED_MODULE_7__/* .getSequenceRecipientsSourceVariables */ .u)(recipientsSource);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(VariablePickerMenuButton, {
    variables: variables,
    onVariableChoosen: _ref3 => {
      let {
        variableText
      } = _ref3;
      gmailComposeWindow.addTextAtCurrentCursorPosition((0,lodash__WEBPACK_IMPORTED_MODULE_2__.escape)(variableText));
    }
  });
};
const VariablePickerMenuButton = _ref4 => {
  let {
    variables,
    onVariableChoosen
  } = _ref4;
  const menuButtonRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const itemGroups = variables.reduce((acc, variable) => {
    let group = acc.find(i => i.headerText === variable.groupTitle);
    if (!group) {
      group = {
        headerText: variable.groupTitle,
        itemValues: []
      };
      acc.push(group);
    }
    group.itemValues.push(variable);
    return acc;
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_widgets_react_material_menu__WEBPACK_IMPORTED_MODULE_5__/* .MenuButton */ .j2, {
    ref: menuButtonRef,
    ButtonComponent: buttonProps => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_widgets_react_material_button_streakButton__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP, {
      ...buttonProps,
      accent: "muted",
      variant: "text",
      size: "s",
      style: {
        marginTop: 5,
        padding: '0 4px',
        textTransform: 'capitalize'
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_widgets_react_material_button_streakButton__WEBPACK_IMPORTED_MODULE_9__/* .StreakButtonIcon */ .A2, {
        size: "m",
        materialIconName: "code",
        isOutline: true,
        style: {
          width: 24
        }
      }), _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.getString('variables'), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
        isOutline: true,
        variant: "text",
        accent: "muted",
        name: "arrow_drop_down"
      })]
    }),
    onDidOpen: () => {
      _services_tracker_tracker__WEBPACK_IMPORTED_MODULE_6__["default"].track('sequence.compose.variable.menu.open');
    },
    menu: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_widgets_react_material_menu__WEBPACK_IMPORTED_MODULE_5__/* .Dropdown */ .Lt, {
      className: "streak__sequence_insertVariableDropdown",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_widgets_react_material_menu__WEBPACK_IMPORTED_MODULE_5__/* .SearchableMenuDropdown */ .bA, {
        itemGroups: itemGroups,
        doesMatchSearch: (itemValue, searchValue) => itemValue.displayText.toLowerCase().includes(searchValue.toLowerCase()),
        onItemChosen: onVariableChoosen,
        label: _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.getString('filter_variables'),
        reposition: () => {
          menuButtonRef.current?.reposition();
        },
        rowHeight: item => {
          return item.isGroupHeader ? _widgets_react_material_menu_searchableMenuDropdown__WEBPACK_IMPORTED_MODULE_8__/* .DEFAULT_HEADER_HEIGHT */ .gz : _widgets_react_material_menu_searchableMenuDropdown__WEBPACK_IMPORTED_MODULE_8__/* .DEFAULT_ITEM_HEIGHT */ .f1;
        },
        ItemComponent: props => {
          const {
            onItemChosen,
            query,
            style,
            value: {
              displayText,
              variableText
            }
          } = props;
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_widgets_react_material_menu__WEBPACK_IMPORTED_MODULE_5__/* .MenuItemWithHelp */ .te, {
            help: variableText,
            onItemChosen: _event => {
              onItemChosen(props.value);
              _services_tracker_tracker__WEBPACK_IMPORTED_MODULE_6__["default"].track('sequence.compose.variable.menu.item.click');
            },
            style: style,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_widgets_react_matches__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
              query: query,
              value: displayText
            })
          });
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
        id: "1826381763",
        children: [".streak__sequence_insertVariableDropdown{width:320px;}", ".streak__sequence_insertVariableDropdown .streak__snippets_group_divider{border:none;}"]
      })]
    })
  });
};
const SequenceComposeSnippetsButton = _ref5 => {
  let {
    gmailComposeWindow
  } = _ref5;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(SnippetsPickerMenuButton, {
    readonly: true,
    gmailComposeWindow: gmailComposeWindow,
    onSnippetChoosen: snippet => {
      (0,_snippets_insertSnippetIntoComposeWindow__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z)(snippet, gmailComposeWindow);
      _services_tracker_tracker__WEBPACK_IMPORTED_MODULE_6__["default"].track('snippet inserted', {
        isSnippetsV2: true,
        method: 'snippet menu',
        snippetName: snippet.get('snippetName'),
        snippetKey: snippet.key()
      });
    }
  });
};
const SnippetsPickerMenuButton = _ref6 => {
  let {
    readonly,
    gmailComposeWindow,
    onSnippetChoosen
  } = _ref6;
  const snippetsCollection = _services_data_data__WEBPACK_IMPORTED_MODULE_12__["default"].getAllSnippets();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_widgets_react_material_menu__WEBPACK_IMPORTED_MODULE_5__/* .MenuButton */ .j2, {
    ButtonComponent: buttonProps => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_widgets_react_material_button_streakButton__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP, {
      ...buttonProps,
      accent: "muted",
      variant: "text",
      size: "s",
      style: {
        marginTop: 5,
        padding: '0 4px',
        textTransform: 'capitalize'
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_widgets_react_material_button_streakButton__WEBPACK_IMPORTED_MODULE_9__/* .StreakButtonIcon */ .A2, {
        size: "m",
        materialIconName: "library_books",
        isOutline: true,
        style: {
          width: 24
        }
      }), _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.getString('snippets_tooltip'), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
        isOutline: true,
        variant: "text",
        accent: "muted",
        name: "arrow_drop_down"
      })]
    }),
    menu: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_snippets_snippetsComposeMenu__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
      noShadow: false,
      snippets: snippetsCollection,
      onSnippetSelected: snippet => {
        onSnippetChoosen(snippet);
      },
      onManageSelected: () => {
        (0,_snippets_snippetsManager__WEBPACK_IMPORTED_MODULE_13__/* .openSnippetsDrawer */ .qJ)(snippetsCollection, gmailComposeWindow);
        _services_tracker_tracker__WEBPACK_IMPORTED_MODULE_6__["default"].track('manage snippets open', {
          isSnippetsV2: true
        });
      },
      onAddDraft: () => {
        (0,_snippets_snippetsManager__WEBPACK_IMPORTED_MODULE_13__/* .createSnippetFromDraft */ .jW)(gmailComposeWindow);
        _services_tracker_tracker__WEBPACK_IMPORTED_MODULE_6__["default"].track('create snippets open', {
          isSnippetsV2: true
        });
      },
      readOnlyMode: readonly
    })
  });
};
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

/***/ })

};
;
//# sourceMappingURL=https://storage.googleapis.com/streak-extension-sourcemaps/clientjs/clientjs.chunk.8633.595d0e43284c9776758c.js.map