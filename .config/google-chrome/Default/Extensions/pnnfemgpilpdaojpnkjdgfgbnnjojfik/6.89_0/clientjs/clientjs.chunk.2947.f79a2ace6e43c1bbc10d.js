"use strict";
export const id = 2947;
export const ids = [2947];
export const modules = {

/***/ 49858:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ CountBubble)
/* harmony export */ });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81518);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47587);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59718);



function CountBubble(_ref) {
  let {
    backgroundColor,
    color,
    count,
    fontSize = 12
  } = _ref;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    style: {
      backgroundColor: backgroundColor,
      color: color,
      fontSize: `var(--streak-text-size-${fontSize})`
    },
    className: "jsx-1414249412" + " " + (classnames__WEBPACK_IMPORTED_MODULE_1___default()('streak_countBubble', {
      'streak_countBubble--isZero': parseInt(count) === 0
    }) || ""),
    children: [count, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "1414249412",
      children: [".streak_countBubble.jsx-1414249412{background-color:var(--streak-app-primary);border-radius:28px;color:var(--streak-solid-white);display:inline-block;font-family:var(--google-font-family);font-weight:bold;height:20px;line-height:20px;text-align:center;width:24px;}", ".streak_countBubble--isZero.jsx-1414249412{background-color:var(--streak-app-primary-hover);color:var(--streak-app-primary);}"]
    })]
  });
}

/***/ }),

/***/ 44708:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ Select_Select),
  k: () => (/* binding */ propOverrides)
});

// EXTERNAL MODULE: ./.yarn/cache/react-npm-18.3.1-af38f3c1ae-261137d3f3.zip/node_modules/react/index.js
var react = __webpack_require__(44345);
// EXTERNAL MODULE: ./.yarn/__virtual__/@emotion-core-virtual-374e52d4dc/0/cache/@emotion-core-npm-10.3.1-5d0bd2504d-3ef35fe18d.zip/node_modules/@emotion/core/dist/core.browser.esm.js + 2 modules
var core_browser_esm = __webpack_require__(47278);
// EXTERNAL MODULE: ./.yarn/__virtual__/react-dom-virtual-3bf8f3011d/0/cache/react-dom-npm-18.3.1-a805663f38-3f4b73a3aa.zip/node_modules/react-dom/index.js
var react_dom = __webpack_require__(69980);
// EXTERNAL MODULE: ./.yarn/__virtual__/react-select-virtual-a7d228ba97/0/cache/react-select-npm-3.2.0-85707201d2-0147c89825.zip/node_modules/react-select/dist/Select-e1cf49ae.browser.esm.js + 4 modules
var Select_e1cf49ae_browser_esm = __webpack_require__(87338);
// EXTERNAL MODULE: ./.yarn/cache/@emotion-css-npm-10.0.27-3fd4a0c157-1420f5b514.zip/node_modules/@emotion/css/dist/css.browser.esm.js
var css_browser_esm = __webpack_require__(83970);
// EXTERNAL MODULE: ./.yarn/__virtual__/react-input-autosize-virtual-24f398c9c9/0/cache/react-input-autosize-npm-3.0.0-c2fd3b468a-0cf93fdcbf.zip/node_modules/react-input-autosize/lib/AutosizeInput.js
var AutosizeInput = __webpack_require__(17832);
// EXTERNAL MODULE: ./.yarn/__virtual__/react-select-virtual-a7d228ba97/0/cache/react-select-npm-3.2.0-85707201d2-0147c89825.zip/node_modules/react-select/dist/stateManager-2f2b6f5b.browser.esm.js
var stateManager_2f2b6f5b_browser_esm = __webpack_require__(31318);
// EXTERNAL MODULE: ./.yarn/cache/@emotion-cache-npm-10.0.29-076efd3781-9978106bb1.zip/node_modules/@emotion/cache/dist/cache.browser.esm.js + 2 modules
var cache_browser_esm = __webpack_require__(4755);
;// CONCATENATED MODULE: ./.yarn/__virtual__/react-select-virtual-a7d228ba97/0/cache/react-select-npm-3.2.0-85707201d2-0147c89825.zip/node_modules/react-select/dist/react-select.browser.esm.js

























function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var NonceProvider = /*#__PURE__*/(/* unused pure expression or super */ null && (function (_Component) {
  _inherits(NonceProvider, _Component);

  var _super = _createSuper(NonceProvider);

  function NonceProvider(props) {
    var _this;

    _classCallCheck(this, NonceProvider);

    _this = _super.call(this, props);

    _this.createEmotionCache = function (nonce) {
      return createCache({
        nonce: nonce
      });
    };

    _this.createEmotionCache = memoizeOne(_this.createEmotionCache);
    return _this;
  }

  _createClass(NonceProvider, [{
    key: "render",
    value: function render() {
      var emotionCache = this.createEmotionCache(this.props.nonce);
      return /*#__PURE__*/React.createElement(CacheProvider, {
        value: emotionCache
      }, this.props.children);
    }
  }]);

  return NonceProvider;
}(Component)));

var index = (0,stateManager_2f2b6f5b_browser_esm.m)(Select_e1cf49ae_browser_esm.S);

/* harmony default export */ const react_select_browser_esm = (index);


// EXTERNAL MODULE: ./.yarn/cache/react-npm-18.3.1-af38f3c1ae-261137d3f3.zip/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(59718);
;// CONCATENATED MODULE: ./extensions/common/js/components/Select/Select.tsx




/*
propOverrides exists to enable some default styles and behavior on the base
react-select wrapper components. A big gotcha with react-select is it it
currently doesn't support defaulting to no selected option, so we have to
hack it to accomplish this (https://github.com/JedWatson/react-select/pull/3705)
*/

function propOverrides(props, _select) {
  /*
  We want to expose a way to override styles for these components while still
  achieving the raised apperance, so this override object exists so we can
  merge this component's style with any user supplied ones.
  */
  const stylesFromProps = {
    ...props.styles
  };
  const styleOverridesToMerge = {
    dropdownIndicator: (styles, state) => {
      return stylesFromProps.dropdownIndicator ? stylesFromProps.dropdownIndicator(styles, state) : styles;
    },
    container: (styles, state) => {
      return stylesFromProps.container ? stylesFromProps.container(styles, state) : styles;
    },
    control: (styles, state) => {
      return stylesFromProps.control ? stylesFromProps.control(styles, state) : styles;
    },
    indicatorsContainer: (styles, state) => {
      return stylesFromProps.indicatorsContainer ? stylesFromProps.indicatorsContainer(styles, state) : styles;
    },
    menu: (styles, state) => {
      return stylesFromProps.menu ? stylesFromProps.menu(styles, state) : styles;
    },
    option: (styles, state) => {
      return stylesFromProps.option ? stylesFromProps.option(styles, state) : styles;
    }
  };

  /*
  The non-style props here are default behaviors that enable react-select
  to not highlight the default option.
  */
  return {
    menuPortalTarget: document.body,
    onInputChange: (newValue, actionMeta) => {
      props.onInputChange && props.onInputChange(newValue, actionMeta);
      if (newValue === '') {
        setTimeout(() => _select.current && _select.current.select.setState({
          focusedOption: null
        }), 0);
      }
    },
    onChange: (newValue, actionMeta) => {
      props.onChange && props.onChange(newValue, actionMeta);
      setTimeout(() => _select.current && _select.current.select.setState({
        focusedOption: null
      }), 0);
    },
    onKeyDown: e => {
      props.onKeyDown && props.onKeyDown(e);
      if (e.key === 'Enter' && _select.current && _select.current.select.focusedOptionRef == null) {
        _select.current.select.blur();
      }

      /*
      TODO: Currently there is a bug where Gmail is capturing Escape
      key presses, so this block won't fire. Fix this issue in SDK
      */
      if (e.key === 'Escape') {
        props.onCancel && props.onCancel();
        _select.current && _select.current.select.blur();
      }
    },
    styles: {
      ...stylesFromProps,
      dropdownIndicator: (styles, state) => styleOverridesToMerge.dropdownIndicator({
        ...styles,
        display: 'none'
      }, state),
      container: (styles, state) => styleOverridesToMerge.container({
        ...styles,
        border: 0,
        boxShadow: state.isFocused ? '0 8px 10px 1px var(--streak-black-hover), 0 3px 14px 2px var(--streak-black-hover), 0 5px 5px -3px var(--streak-black-shadow)' : 'none',
        borderRadius: '4px',
        zIndex: 2
      }, state),
      control: (styles, state) => styleOverridesToMerge.control({
        ...styles,
        border: 0,
        boxShadow: 'none',
        ':hover': {
          backgroundColor: state.isFocused ? 'white' : 'var(--streak-black-hover)'
        },
        minHeight: '32px'
      },
      // casting to any because react-select expects CSSProperties, which doesn't have a :hover key
      state),
      indicatorsContainer: (styles, state) => styleOverridesToMerge.indicatorsContainer({
        ...styles,
        display: 'none'
      }, state),
      menu: (styles, state) => styleOverridesToMerge.menu({
        ...styles,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        boxShadow: '0 8px 10px 1px var(--streak-black-hover), 0 3px 14px 2px var(--streak-black-hover), 0 5px 5px -3px var(--streak-black-shadow)',
        marginTop: 0
      }, state),
      option: (styles, state) => styleOverridesToMerge.option({
        ...styles,
        color: 'var(--streak-black-primary)',
        cursor: 'pointer',
        height: '32px',
        fontSize: 'var(--streak-text-size-14)',
        lineHeight: '20px',
        whiteSpace: 'nowrap',
        transition: 'background-color 0.15s cubic-bezier(0.4, 0, 0.2, 1)',
        backgroundColor: state.isFocused ? 'var(--streak-black-hover)' : 'inherit',
        ':hover': {
          backgroundColor: 'var(--streak-black-hover)'
        },
        ':focus': {
          backgroundColor: 'var(--streak-black-hover)'
        }
      }, state)
    }
  };
}

// Component for getting a stylized <Select /> that has a raised appearance
const SelectForwarding = (props, ref) => {
  /*
  There's a bug in react-select where the isMenuOpen cb is called
  on every keystroke. We maintain our own state to know when the menu
  is open/close so we can programmatically de-focus the first option when
  the menu first opens
  */
  const [isMenuOpen, setIsMenuOpen] = (0,react.useState)(props.defaultMenuIsOpen || props.menuIsOpen || false);
  const _select = (0,react.useRef)(null);
  (0,react.useImperativeHandle)(ref, () => ({
    blur: _select.current.blur,
    focus: _select.current.focus,
    getProp: _select.current.getProp,
    select: _select.current.select,
    callProp: _select.current.callProp,
    onChange: _select.current.onChange,
    onInputChange: _select.current.onInputChange,
    onMenuOpen: _select.current.onMenuOpen,
    onMenuClose: _select.current.onMenuClose,
    context: _select.current.context,
    setState: _select.current.setState,
    forceUpdate: _select.current.forceUpdate,
    render: _select.current.render,
    props: _select.current.props,
    state: _select.current.state,
    refs: _select.current.refs
  }));
  return /*#__PURE__*/(0,jsx_runtime.jsx)(react_select_browser_esm, {
    ref: _select,
    ...props,
    ...propOverrides(props, _select),
    onMenuOpen: () => {
      if (!isMenuOpen) {
        setIsMenuOpen(true);
      }
    },
    onMenuClose: () => {
      props.onMenuClose && props.onMenuClose();
      setIsMenuOpen(false);
    }
  });
};
const Select = /*#__PURE__*/(0,react.forwardRef)(SelectForwarding);
/* harmony default export */ const Select_Select = (Select);

/***/ }),

/***/ 52146:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ AddContactWrapper)
/* harmony export */ });
/* unused harmony export default */
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81518);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44345);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(77724);
/* harmony import */ var _InternalContactSelectDropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70408);
/* harmony import */ var _CountBubble_CountBubble__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49858);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71174);
/* harmony import */ var _Layout_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(54165);
/* harmony import */ var _core_emailBlackList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(31813);
/* harmony import */ var _modules_teamContacts_teamContactSearcher__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(64459);
/* harmony import */ var _modules_teamContacts_teamOrgSearcher__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(17158);
/* harmony import */ var _lib_utils_isNotNil__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(72086);
/* harmony import */ var _lib_utils_string_isValidDomain__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6986);
/* harmony import */ var _lib_utils_string_isValidEmail__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(1760);
/* harmony import */ var _lib_utils_useSuggestions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(87810);
/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(3572);
/* harmony import */ var _redux_models_modelHooks__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(64076);
/* harmony import */ var _redux_selectors_getTeamKeyForBoxId__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(10535);
/* harmony import */ var _redux_selectors_teamSelectors__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(71973);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(35091);
/* harmony import */ var _services_tracker_useTracker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(70989);
/* harmony import */ var _services_tracker_tracker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(13778);
/* harmony import */ var _services_contacts_contactStore__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(68333);
/* harmony import */ var _modules_teamContacts_clearbitSearch__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(45421);
/* harmony import */ var _core_models_teamContactAndOrg_teamContactAndOrgBatchOperationManager__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(82454);
/* harmony import */ var _core_models_teamContactAndOrg_teamContact__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(12176);
/* harmony import */ var _core_models_teamContactAndOrg_teamOrg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(68289);
/* harmony import */ var _modules_team__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(64936);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_modules_teamContacts_teamContactSearcher__WEBPACK_IMPORTED_MODULE_7__, _modules_teamContacts_teamOrgSearcher__WEBPACK_IMPORTED_MODULE_8__, _redux_selectors_teamSelectors__WEBPACK_IMPORTED_MODULE_12__, _services_contacts_contactStore__WEBPACK_IMPORTED_MODULE_16__, _modules_teamContacts_clearbitSearch__WEBPACK_IMPORTED_MODULE_17__, _core_models_teamContactAndOrg_teamContactAndOrgBatchOperationManager__WEBPACK_IMPORTED_MODULE_18__, _core_models_teamContactAndOrg_teamContact__WEBPACK_IMPORTED_MODULE_19__, _core_models_teamContactAndOrg_teamOrg__WEBPACK_IMPORTED_MODULE_20__, _modules_team__WEBPACK_IMPORTED_MODULE_21__]);
([_modules_teamContacts_teamContactSearcher__WEBPACK_IMPORTED_MODULE_7__, _modules_teamContacts_teamOrgSearcher__WEBPACK_IMPORTED_MODULE_8__, _redux_selectors_teamSelectors__WEBPACK_IMPORTED_MODULE_12__, _services_contacts_contactStore__WEBPACK_IMPORTED_MODULE_16__, _modules_teamContacts_clearbitSearch__WEBPACK_IMPORTED_MODULE_17__, _core_models_teamContactAndOrg_teamContactAndOrgBatchOperationManager__WEBPACK_IMPORTED_MODULE_18__, _core_models_teamContactAndOrg_teamContact__WEBPACK_IMPORTED_MODULE_19__, _core_models_teamContactAndOrg_teamOrg__WEBPACK_IMPORTED_MODULE_20__, _modules_team__WEBPACK_IMPORTED_MODULE_21__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






























/*
There's an issue with typescript where trying to pick only
certain props from AsyncCreateableProps to expose ends up
making ExternalProps have no type inference. So as a work-around
I'm making this just accept a Partial
 */

const LIMIT = 8;
function BoxContactSelectDropdown(props) {
  const {
    boxId,
    track
  } = props;
  const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_23__/* .useDispatch */ .I0)();
  const suggestionResults = (0,_lib_utils_useSuggestions__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(boxId);
  const boxState = (0,_redux_models_modelHooks__WEBPACK_IMPORTED_MODULE_11__/* .useBox */ .EJ)({
    id: boxId
  }).result;
  const boxContactLinks = boxState && boxState.contacts || [];
  const boxOrgLinks = boxState && boxState.orgs || [];
  const boxContactsResult = useContacts(boxContactLinks.flatMap(link => 'key' in link.contactKeyOrId ? {
    key: link.contactKeyOrId.key
  } : []));
  const boxOrgsResult = useOrgs(boxOrgLinks.flatMap(link => 'key' in link.orgKeyOrId ? {
    key: link.orgKeyOrId.key
  } : []));
  const boxContacts = boxContactsResult.type === 'model' ? boxContactsResult.result : [];
  const boxOrgs = boxOrgsResult.type === 'model' ? boxOrgsResult.result : [];
  const areContactsAndOrgsLoading = boxContactsResult.type === 'loading' || boxOrgsResult.type === 'loading';
  const {
    key: boxKey
  } = boxState || {};
  const teams = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_23__/* .useSelector */ .v9)(state => (0,_redux_selectors_teamSelectors__WEBPACK_IMPORTED_MODULE_12__/* .getTeamsCurrentUserIsOn */ .gR)(state));
  const {
    isInternalEmail,
    isInternalDomain
  } = (0,_modules_team__WEBPACK_IMPORTED_MODULE_21__/* .getInternalEmailPredicate */ .WD)(teams);
  const teamKey = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_23__/* .useSelector */ .v9)(state => {
    return (0,_redux_selectors_getTeamKeyForBoxId__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z)(state, boxId);
  });

  /*
  TODO: Make InternalContactSelectDropdwon redux aware so
  that it's option can configure themselves.
   */

  const existingContactSuggestions = suggestionResults?.contactIds.map(id => {
    return {
      type: 'CONTACT',
      value: id,
      label: id,
      isAutoboxed: false,
      shouldShowAutoboxOption: true,
      isSuggestion: true
    };
  }) ?? [];
  const existingOrgSuggestions = suggestionResults?.orgIds.map(id => ({
    type: 'ORG',
    value: id,
    label: id,
    isAutoboxed: false,
    shouldShowAutoboxOption: true,
    isSuggestion: true
  })) ?? [];
  const suggestions = existingContactSuggestions.concat(existingOrgSuggestions);
  const loadContacts = inputValue => {
    if (areContactsAndOrgsLoading) {
      return Promise.resolve([]);
    }
    const googleContactPromise = _services_contacts_contactStore__WEBPACK_IMPORTED_MODULE_16__["default"].queryContacts(inputValue).then(res => {
      return res.filter(contact => contact?.email && !isInternalEmail(contact.email) && !boxContacts.some(teamContact => teamContact.getEmailAddresses().includes(contact.email))).map(contact => ({
        displayName: contact.displayName,
        imageUrl: contact.imageUrl,
        isAutoboxed: false,
        label: contact.displayName,
        secondaryName: contact.email,
        shouldShowAutoboxOption: true,
        type: 'GOOGLE_CONTACT',
        value: contact.email
      }));
    });
    const contactPromise = _modules_teamContacts_teamContactSearcher__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.fuzzySearch(inputValue, teamKey ? teamKey : undefined).then(res => {
      const contactResults = res.filter(_ref => {
        let {
          teamContact
        } = _ref;
        return !teamContact.getEmailAddresses().some(email => isInternalEmail(email));
      }).map(_ref2 => {
        let {
          teamContact
        } = _ref2;
        // TODO: Accomplish this without using old-world models
        const option = {
          displayName: teamContact.displayNameText(),
          imageUrl: null,
          isAutoboxed: false,
          label: teamContact.displayNameText(),
          secondaryName: teamContact.getEmailAddresses().length > 0 ? teamContact.getEmailAddresses()[0] : undefined,
          shouldShowAutoboxOption: true,
          type: 'CONTACT',
          value: teamContact.key()
        };
        return option;
      });
      return contactResults.filter(opt => {
        return !boxContactLinks.some(boxContactLink => {
          // TODO: what happens if you only have an ID?
          return 'key' in boxContactLink.contactKeyOrId && boxContactLink.contactKeyOrId.key === opt.value;
        });
      }).slice(0, LIMIT);
    });
    const clearbitPromise = (0,_modules_teamContacts_clearbitSearch__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z)(inputValue).then(res => {
      return res.filter(clearbitOrg => {
        return clearbitOrg.domain && !isInternalDomain(clearbitOrg.domain) && !(0,_core_emailBlackList__WEBPACK_IMPORTED_MODULE_6__/* .isDomainBlacklisted */ .Dw)(clearbitOrg.domain) && !boxOrgs.some(org => org.getDomains().includes(clearbitOrg.domain));
      }).map(clearbitOrg => ({
        displayName: clearbitOrg.name,
        value: clearbitOrg.domain,
        imageUrl: clearbitOrg.logo,
        isAutoboxed: false,
        secondaryName: clearbitOrg.domain,
        shouldShowAutoboxOption: true,
        type: 'CLEARBIT_ORG'
      }));
    });
    const orgPromise = _modules_teamContacts_teamOrgSearcher__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z.search(inputValue, teamKey ? teamKey : undefined).then(res => {
      const orgResults = res.filter(_ref3 => {
        let {
          teamOrg
        } = _ref3;
        return !teamOrg.getDomains().some(domain => isInternalDomain(domain) || (0,_core_emailBlackList__WEBPACK_IMPORTED_MODULE_6__/* .isDomainBlacklisted */ .Dw)(domain));
      }).map(_ref4 => {
        let {
          teamOrg
        } = _ref4;
        // TODO: Accomplish this without using old-world models
        const option = {
          displayName: teamOrg.displayNameText(),
          imageUrl: teamOrg.getDomains().length > 0 ? `https://logo.clearbit.com/${teamOrg.getDomains()[0]}` : null,
          isAutoboxed: false,
          secondaryName: teamOrg.getDomains().length > 0 ? teamOrg.getDomains()[0] : undefined,
          shouldShowAutoboxOption: true,
          label: teamOrg.displayNameText(),
          type: 'ORG',
          value: teamOrg.key()
        };
        return option;
      });
      return orgResults.filter(opt => {
        return !boxOrgLinks.some(boxOrgLink => {
          // TODO: what happens if you only have an ID?
          return 'key' in boxOrgLink.orgKeyOrId && boxOrgLink.orgKeyOrId.key === opt.value;
        });
      }).slice(0, LIMIT);
    });
    return Promise.all([contactPromise, orgPromise, googleContactPromise, clearbitPromise]).then(_ref5 => {
      let [contacts, orgs, googleContacts, clearbitOrgs] = _ref5;
      let results = contacts.concat(orgs).concat(googleContacts).concat(clearbitOrgs);
      const trimmedValue = inputValue.trim();
      if ((0,_lib_utils_string_isValidEmail__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z)(trimmedValue) && boxContacts.some(contact => contact.getEmailAddresses().some(address => address === trimmedValue))) {
        return [{
          // Don't suggest a duplicate email
          type: 'EMAIL_ALREADY_ADDED',
          isAutoboxed: false,
          isNew: false,
          isSuggestion: false,
          shouldShowAutoboxOption: false,
          value: trimmedValue
        }];
      }
      if ((!(0,_lib_utils_string_isValidDomain__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(inputValue) || (0,_lib_utils_string_isValidEmail__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z)(inputValue)) && !contacts.some(contact => contact.secondaryName?.toLowerCase().includes(inputValue.toLowerCase()) || contact.displayName.toLowerCase().includes(inputValue.toLowerCase()))) {
        results = results.concat([{
          displayName: inputValue,
          isAutoboxed: false,
          shouldShowAutoboxOption: (0,_lib_utils_string_isValidEmail__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z)(inputValue),
          imageUrl: null,
          label: inputValue,
          value: 'new-input-contact',
          isNew: true,
          type: 'CONTACT'
        }]);
      }
      if (!(0,_lib_utils_string_isValidEmail__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z)(inputValue) && !orgs.some(org => org.secondaryName && org.secondaryName.toLowerCase().includes(inputValue.toLowerCase()) || org.displayName.toLowerCase().includes(inputValue.toLowerCase()))) {
        results = results.concat([{
          displayName: inputValue,
          isAutoboxed: false,
          shouldShowAutoboxOption: (0,_lib_utils_string_isValidDomain__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(inputValue),
          imageUrl: null,
          label: inputValue,
          value: 'new-input-org',
          isNew: true,
          type: 'ORG'
        }]);
      }
      return results;
    });
  };

  /*
  We only want to display chips when the component is
  used as a multi-value. Otherwise once a selection
  is made, we should remove any text input and display a blank
  value
  */
  const value = props.isMulti ? boxContactLinks.map(val => {
    return {
      isAutoboxed: val.isAutoboxed,
      isNew: false,
      isSuggestion: false,
      type: 'CONTACT',
      // TODO: what happens if you have an id instead of key?
      value: 'key' in val.contactKeyOrId ? val.contactKeyOrId.key : val.contactKeyOrId.id
    };
  }).concat(boxOrgLinks.map(val => ({
    isAutoboxed: val.isAutoboxed,
    isNew: false,
    isSuggestion: false,
    type: 'ORG',
    // TODO: what happens if you have an id instead of key?
    value: 'key' in val.orgKeyOrId ? val.orgKeyOrId.key : val.orgKeyOrId.id
  }))).filter(_ref6 => {
    let {
      value
    } = _ref6;
    return (0,_lib_utils_isNotNil__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z)(value);
  }) : undefined;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_services_tracker_useTracker__WEBPACK_IMPORTED_MODULE_14__/* .TrackerContext */ .fy.Provider, {
    value: track,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_InternalContactSelectDropdown__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      ...props,
      value: value,
      suggestions: suggestions,
      loadOptions: loadContacts,
      noOptionsMessage: () => null,
      onChange: (newValue, actionMeta) => {
        if (actionMeta.action === 'pop-value') {
          const option = actionMeta.removedValue;
          if (option) {
            // TODO: Disptach action to remove the value from the box.
            // This should only happen if isMulti is set to true, otherwise
            // you cannot delete a value from the select component
            // dispatch({type: "CONTACT/REMOVE_FROM_BOX"});
          }
          return;
        }
        const newOption = Array.isArray(newValue) ? newValue.at(-1) : newValue;
        if (newOption.type === 'EMAIL_ALREADY_ADDED') {
          return;
        }
        if (actionMeta.action === 'create-option' || newOption.isNew) {
          // Dispatch action to create new option
          if (newOption.type === 'CONTACT') {
            if (!isInternalEmail(newOption.displayName)) {
              dispatch({
                type: 'CONTACT/CREATE_FROM_TEXT',
                boxId: props.boxId,
                isAutoboxed: newOption.isAutoboxed,
                text: newOption.displayName
              });
              track('contact.createFromText');
            } else {
              dispatch({
                type: 'BUTTERBAR/SHOW/ERROR',
                message: _services_locale_locale__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z.getString('box_contact_add_teammate')
              });
            }
          } else {
            if (!isInternalDomain(newOption.displayName) && !(0,_core_emailBlackList__WEBPACK_IMPORTED_MODULE_6__/* .isDomainBlacklisted */ .Dw)(newOption.displayName)) {
              dispatch({
                type: 'ORG/CREATE_FROM_TEXT',
                boxId: props.boxId,
                isAutoboxed: newOption.isAutoboxed,
                text: newOption.displayName
              });
              track('org.createFromText');
            } else {
              dispatch({
                type: 'BUTTERBAR/SHOW/ERROR',
                message: _services_locale_locale__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z.getString('box_org_add_team')
              });
            }
          }
        } else {
          const googleContacts = [newOption].filter(opt => opt.type === 'GOOGLE_CONTACT');
          const clearbitOrgs = [newOption].filter(opt => opt.type === 'CLEARBIT_ORG');
          const contactKeys = [newOption].filter(opt => opt.type === 'CONTACT').map(opt => ({
            key: opt.value,
            isAutoboxed: opt.isAutoboxed
          }));
          const orgKeys = [newOption].filter(opt => opt.type === 'ORG').map(opt => ({
            key: opt.value,
            isAutoboxed: opt.isAutoboxed
          }));
          dispatch({
            type: 'CONTACT/ADD_TO_BOX',
            contactKeys,
            orgKeys,
            googleContacts,
            clearbitOrgs,
            boxId: props.boxId
          });
          track('contact.add', {
            contactKeys,
            orgKeys
          });
        }
      },
      onSuggestionChange: newValue => {
        const newOption = Array.isArray(newValue) ? newValue.at(-1) : newValue;
        if (newOption?.type === 'EMAIL_ALREADY_ADDED') {
          return;
        } else if (newOption?.type === 'CONTACT') {
          const suggestedContact = newOption;
          dispatch({
            type: 'CONTACT/SUGGESTION/ACCEPT',
            boxId,
            contactId: (0,_lib_utils_string_isValidEmail__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z)(suggestedContact.value) ? null : suggestedContact.value,
            // TODO: Figure out data model(s) that should be passed around
            email: (0,_lib_utils_string_isValidEmail__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z)(suggestedContact.value) ? suggestedContact.value : '',
            isAutoboxed: newOption.isAutoboxed
          });
          track('contact.suggestion.accept');
        } else if (newOption?.type === 'ORG') {
          const suggestedOrg = newValue;
          dispatch({
            type: 'ORG/SUGGESTION/ACCEPT',
            boxId,
            orgId: suggestedOrg.value.includes('.') ? null : suggestedOrg.value,
            // TODO: Figure out data model(s) that should be passed around
            domain: suggestedOrg.value.includes('.') ? suggestedOrg.value : '',
            isAutoboxed: newOption.isAutoboxed
          });
          track('org.suggestion.accept');
        }
      },
      onSuggestionsClear: () => {
        if (boxKey) {
          dispatch({
            type: 'BOX/CONTACTS/CLEAR_SUGGESTIONS',
            payload: {
              boxKey
            }
          });
        }
      },
      isValidNewOption: () => false
    })
  });
}
const AddContactWrapper = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function _AddContactWrapper(props, ref) {
  const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const [showInput, setShowInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const suggestions = (0,_lib_utils_useSuggestions__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(props.boxId);
  const suggestionCount = suggestions && !suggestions.hasCleared ? suggestions.contactIds.length + suggestions.orgIds.length : 0;
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle)(ref, () => ({
    openOrFocusContactInput: () => {
      setShowInput(true);
    }
  }));
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)("div", {
    ref: containerRef,
    tabIndex: 0,
    onKeyDown: e => {
      if (e.target !== containerRef.current) {
        return;
      }
      if (e.keyCode === 13) {
        setShowInput(true);
      }
    },
    className: "jsx-4212867529" + " " + "add_contact_container",
    children: [!showInput && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("div", {
      onClick: () => setShowInput(true),
      className: "jsx-4212867529" + " " + "add_contact_display",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_Layout_Layout__WEBPACK_IMPORTED_MODULE_5__/* .Container */ .W2, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(_Layout_Layout__WEBPACK_IMPORTED_MODULE_5__/* .Row */ .X2, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_Layout_Layout__WEBPACK_IMPORTED_MODULE_5__/* .Column */ .sg, {
            alignment: "start",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_Icon_Icon__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
              name: "add",
              variant: "inline"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(_Layout_Layout__WEBPACK_IMPORTED_MODULE_5__/* .Column */ .sg, {
            alignment: "center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("span", {
              className: "jsx-4212867529" + " " + "add_contact_text",
              children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z.getString('add_contact')
            }), suggestionCount > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_CountBubble_CountBubble__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
              count: `${suggestionCount}`,
              color: "var(--box-contact-select-color)",
              backgroundColor: 'var(--box-contact-select-color-background)'
            })]
          })]
        })
      })
    }), showInput && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(BoxContactSelectDropdown, {
      autoFocus: true,
      boxId: props.boxId,
      components: {
        ValueContainer
      },
      defaultMenuIsOpen: true,
      onBlur: () => {
        setShowInput(false);
      },
      onKeyDown: e => {
        if (e.keyCode === 13) {
          _services_tracker_tracker__WEBPACK_IMPORTED_MODULE_15__["default"].track('detailsPanel.contact.focusInput');
          setTimeout(() => containerRef.current && containerRef.current.focus(), 0);
        }
      },
      placeholder: _services_locale_locale__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z.getString('add_contact'),
      styles: {
        menu: styles => ({
          ...styles,
          marginTop: 4
        }),
        input: styles => ({
          ...styles,
          marginLeft: 0,
          paddingLeft: 0
        }),
        placeholder: styles => ({
          ...styles,
          margin: 0
        }),
        valueContainer: styles => ({
          ...styles,
          paddingLeft: 0
        })
      },
      track: props.track
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "4212867529",
      children: [".add_contact_display.jsx-4212867529{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".add_contact_display.jsx-4212867529 .add_contact_text.jsx-4212867529{color:var(--streak-app-primary);font-family:Google Sans;font-size:var(--streak-text-size-14);font-weight:500;line-height:32px;padding-right:8px;}", ".add_contact_container.jsx-4212867529{--box-contact-select-color:var(--streak-app-primary);--box-contact-select-color-background:var(--streak-app-primary-hover);min-height:32px;margin-top:2px;}", ".add_contact_container.jsx-4212867529:hover,.add_contact_container.jsx-4212867529:focus{--box-contact-select-color:var(--streak-solid-white);--box-contact-select-color-background:var(--streak-app-primary);background-color:var(--streak-app-primary-hover);border-style:none;border-radius:16px;cursor:pointer;outline-style:none;}"]
    })]
  });
});
function ValueContainer(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("div", {
    style: {
      width: '100%'
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_Layout_Layout__WEBPACK_IMPORTED_MODULE_5__/* .Container */ .W2, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(_Layout_Layout__WEBPACK_IMPORTED_MODULE_5__/* .Row */ .X2, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_Layout_Layout__WEBPACK_IMPORTED_MODULE_5__/* .Column */ .sg, {
          alignment: "start",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_Icon_Icon__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            name: "add",
            variant: "inline"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_Layout_Layout__WEBPACK_IMPORTED_MODULE_5__/* .Column */ .sg, {
          alignment: "center",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(react_select__WEBPACK_IMPORTED_MODULE_27__.F.ValueContainer, {
            ...props
          })
        })]
      })
    })
  });
}

function useContacts(contactKeys) {
  const contactKeyJson = JSON.stringify(contactKeys);
  const [result, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setResult(undefined);
    const keys = JSON.parse(contactKeyJson);
    _core_models_teamContactAndOrg_teamContactAndOrgBatchOperationManager__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z.get(keys.map(_ref7 => {
      let {
        key
      } = _ref7;
      return new _core_models_teamContactAndOrg_teamContact__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z({
        key
      });
    }), 'contacts').then(teamContacts => {
      setResult(teamContacts);
    });
  }, [contactKeyJson]);
  return result == undefined ? {
    type: 'loading'
  } : {
    type: 'model',
    result
  };
}
function useOrgs(orgKeys) {
  const contactKeyJson = JSON.stringify(orgKeys);
  const [result, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setResult(undefined);
    const keys = JSON.parse(contactKeyJson);
    _core_models_teamContactAndOrg_teamContactAndOrgBatchOperationManager__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z.get(keys.map(_ref8 => {
      let {
        key
      } = _ref8;
      return new _core_models_teamContactAndOrg_teamOrg__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z({
        key
      });
    }), 'organizations').then(teamOrgs => {
      setResult(teamOrgs);
    });
  }, [contactKeyJson]);
  return result == undefined ? {
    type: 'loading'
  } : {
    type: 'model',
    result
  };
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 70408:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ InternalContactSelectDropdown)
});

// EXTERNAL MODULE: ./.yarn/__virtual__/styled-jsx-virtual-9c4bfc1357/0/cache/styled-jsx-npm-5.0.2-aff4f13ebf-96b4507d41.zip/node_modules/styled-jsx/style.js
var style = __webpack_require__(81518);
var style_default = /*#__PURE__*/__webpack_require__.n(style);
// EXTERNAL MODULE: ./.yarn/cache/classnames-npm-2.5.1-c7273f3423-58eb394e88.zip/node_modules/classnames/index.js
var classnames = __webpack_require__(47587);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./.yarn/cache/react-npm-18.3.1-af38f3c1ae-261137d3f3.zip/node_modules/react/index.js
var react = __webpack_require__(44345);
// EXTERNAL MODULE: ./.yarn/__virtual__/react-select-virtual-a7d228ba97/0/cache/react-select-npm-3.2.0-85707201d2-0147c89825.zip/node_modules/react-select/dist/index-75b02bac.browser.esm.js + 1 modules
var index_75b02bac_browser_esm = __webpack_require__(77724);
// EXTERNAL MODULE: ./.yarn/__virtual__/@emotion-core-virtual-374e52d4dc/0/cache/@emotion-core-npm-10.3.1-5d0bd2504d-3ef35fe18d.zip/node_modules/@emotion/core/dist/core.browser.esm.js + 2 modules
var core_browser_esm = __webpack_require__(47278);
// EXTERNAL MODULE: ./.yarn/__virtual__/react-dom-virtual-3bf8f3011d/0/cache/react-dom-npm-18.3.1-a805663f38-3f4b73a3aa.zip/node_modules/react-dom/index.js
var react_dom = __webpack_require__(69980);
// EXTERNAL MODULE: ./.yarn/__virtual__/react-select-virtual-a7d228ba97/0/cache/react-select-npm-3.2.0-85707201d2-0147c89825.zip/node_modules/react-select/dist/Select-e1cf49ae.browser.esm.js + 4 modules
var Select_e1cf49ae_browser_esm = __webpack_require__(87338);
// EXTERNAL MODULE: ./.yarn/cache/@emotion-css-npm-10.0.27-3fd4a0c157-1420f5b514.zip/node_modules/@emotion/css/dist/css.browser.esm.js
var css_browser_esm = __webpack_require__(83970);
// EXTERNAL MODULE: ./.yarn/__virtual__/react-input-autosize-virtual-24f398c9c9/0/cache/react-input-autosize-npm-3.0.0-c2fd3b468a-0cf93fdcbf.zip/node_modules/react-input-autosize/lib/AutosizeInput.js
var AutosizeInput = __webpack_require__(17832);
// EXTERNAL MODULE: ./.yarn/__virtual__/react-select-virtual-a7d228ba97/0/cache/react-select-npm-3.2.0-85707201d2-0147c89825.zip/node_modules/react-select/dist/stateManager-2f2b6f5b.browser.esm.js
var stateManager_2f2b6f5b_browser_esm = __webpack_require__(31318);
// EXTERNAL MODULE: ./.yarn/cache/@babel-runtime-npm-7.25.7-67dab27f3f-73411fe0f1.zip/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__(79308);
// EXTERNAL MODULE: ./.yarn/cache/@babel-runtime-npm-7.25.7-67dab27f3f-73411fe0f1.zip/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(14354);
// EXTERNAL MODULE: ./.yarn/cache/@babel-runtime-npm-7.25.7-67dab27f3f-73411fe0f1.zip/node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(32829);
// EXTERNAL MODULE: ./.yarn/cache/@babel-runtime-npm-7.25.7-67dab27f3f-73411fe0f1.zip/node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(26713);
// EXTERNAL MODULE: ./.yarn/cache/@babel-runtime-npm-7.25.7-67dab27f3f-73411fe0f1.zip/node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(32523);
// EXTERNAL MODULE: ./.yarn/cache/@babel-runtime-npm-7.25.7-67dab27f3f-73411fe0f1.zip/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(92014);
// EXTERNAL MODULE: ./.yarn/cache/@babel-runtime-npm-7.25.7-67dab27f3f-73411fe0f1.zip/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(27175);
;// CONCATENATED MODULE: ./.yarn/__virtual__/react-select-virtual-a7d228ba97/0/cache/react-select-npm-3.2.0-85707201d2-0147c89825.zip/node_modules/react-select/async/dist/react-select.browser.esm.js























function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,getPrototypeOf/* default */.Z)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,getPrototypeOf/* default */.Z)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,possibleConstructorReturn/* default */.Z)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var defaultProps = {
  cacheOptions: false,
  defaultOptions: false,
  filterOption: null,
  isLoading: false
};
var makeAsyncSelect = function makeAsyncSelect(SelectComponent) {
  var _class, _temp;

  return _temp = _class = /*#__PURE__*/function (_Component) {
    (0,inherits/* default */.Z)(Async, _Component);

    var _super = _createSuper(Async);

    function Async(props) {
      var _this;

      (0,classCallCheck/* default */.Z)(this, Async);

      _this = _super.call(this);
      _this.select = void 0;
      _this.lastRequest = void 0;
      _this.mounted = false;
      _this.optionsCache = {};

      _this.handleInputChange = function (newValue, actionMeta) {
        var _this$props = _this.props,
            cacheOptions = _this$props.cacheOptions,
            onInputChange = _this$props.onInputChange; // TODO

        var inputValue = (0,index_75b02bac_browser_esm.G)(newValue, actionMeta, onInputChange);

        if (!inputValue) {
          delete _this.lastRequest;

          _this.setState({
            inputValue: '',
            loadedInputValue: '',
            loadedOptions: [],
            isLoading: false,
            passEmptyOptions: false
          });

          return;
        }

        if (cacheOptions && _this.optionsCache[inputValue]) {
          _this.setState({
            inputValue: inputValue,
            loadedInputValue: inputValue,
            loadedOptions: _this.optionsCache[inputValue],
            isLoading: false,
            passEmptyOptions: false
          });
        } else {
          var request = _this.lastRequest = {};

          _this.setState({
            inputValue: inputValue,
            isLoading: true,
            passEmptyOptions: !_this.state.loadedInputValue
          }, function () {
            _this.loadOptions(inputValue, function (options) {
              if (!_this.mounted) return;

              if (options) {
                _this.optionsCache[inputValue] = options;
              }

              if (request !== _this.lastRequest) return;
              delete _this.lastRequest;

              _this.setState({
                isLoading: false,
                loadedInputValue: inputValue,
                loadedOptions: options || [],
                passEmptyOptions: false
              });
            });
          });
        }

        return inputValue;
      };

      _this.state = {
        defaultOptions: Array.isArray(props.defaultOptions) ? props.defaultOptions : undefined,
        inputValue: typeof props.inputValue !== 'undefined' ? props.inputValue : '',
        isLoading: props.defaultOptions === true,
        loadedOptions: [],
        passEmptyOptions: false
      };
      return _this;
    }

    (0,createClass/* default */.Z)(Async, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;

        this.mounted = true;
        var defaultOptions = this.props.defaultOptions;
        var inputValue = this.state.inputValue;

        if (defaultOptions === true) {
          this.loadOptions(inputValue, function (options) {
            if (!_this2.mounted) return;
            var isLoading = !!_this2.lastRequest;

            _this2.setState({
              defaultOptions: options || [],
              isLoading: isLoading
            });
          });
        }
      }
    }, {
      key: "UNSAFE_componentWillReceiveProps",
      value: function UNSAFE_componentWillReceiveProps(nextProps) {
        // if the cacheOptions prop changes, clear the cache
        if (nextProps.cacheOptions !== this.props.cacheOptions) {
          this.optionsCache = {};
        }

        if (nextProps.defaultOptions !== this.props.defaultOptions) {
          this.setState({
            defaultOptions: Array.isArray(nextProps.defaultOptions) ? nextProps.defaultOptions : undefined
          });
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.mounted = false;
      }
    }, {
      key: "focus",
      value: function focus() {
        this.select.focus();
      }
    }, {
      key: "blur",
      value: function blur() {
        this.select.blur();
      }
    }, {
      key: "loadOptions",
      value: function loadOptions(inputValue, callback) {
        var loadOptions = this.props.loadOptions;
        if (!loadOptions) return callback();
        var loader = loadOptions(inputValue, callback);

        if (loader && typeof loader.then === 'function') {
          loader.then(callback, function () {
            return callback();
          });
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this3 = this;

        var _this$props2 = this.props,
            loadOptions = _this$props2.loadOptions,
            isLoadingProp = _this$props2.isLoading,
            props = (0,objectWithoutProperties/* default */.Z)(_this$props2, ["loadOptions", "isLoading"]);

        var _this$state = this.state,
            defaultOptions = _this$state.defaultOptions,
            inputValue = _this$state.inputValue,
            isLoading = _this$state.isLoading,
            loadedInputValue = _this$state.loadedInputValue,
            loadedOptions = _this$state.loadedOptions,
            passEmptyOptions = _this$state.passEmptyOptions;
        var options = passEmptyOptions ? [] : inputValue && loadedInputValue ? loadedOptions : defaultOptions || [];
        return /*#__PURE__*/react.createElement(SelectComponent, (0,esm_extends/* default */.Z)({}, props, {
          ref: function ref(_ref) {
            _this3.select = _ref;
          },
          options: options,
          isLoading: isLoading || isLoadingProp,
          onInputChange: this.handleInputChange
        }));
      }
    }]);

    return Async;
  }(react.Component), _class.defaultProps = defaultProps, _temp;
};
var SelectState = (0,stateManager_2f2b6f5b_browser_esm.m)(Select_e1cf49ae_browser_esm.S);
var Async = makeAsyncSelect(SelectState);

/* harmony default export */ const react_select_browser_esm = ((/* unused pure expression or super */ null && (Async)));


// EXTERNAL MODULE: ./.yarn/cache/@babel-runtime-npm-7.25.7-67dab27f3f-73411fe0f1.zip/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 3 modules
var toConsumableArray = __webpack_require__(43609);
// EXTERNAL MODULE: ./.yarn/cache/@babel-runtime-npm-7.25.7-67dab27f3f-73411fe0f1.zip/node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(87768);
;// CONCATENATED MODULE: ./.yarn/__virtual__/react-select-virtual-a7d228ba97/0/cache/react-select-npm-3.2.0-85707201d2-0147c89825.zip/node_modules/react-select/creatable/dist/react-select.browser.esm.js























function react_select_browser_esm_createSuper(Derived) { var hasNativeReflectConstruct = react_select_browser_esm_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,getPrototypeOf/* default */.Z)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,getPrototypeOf/* default */.Z)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,possibleConstructorReturn/* default */.Z)(this, result); }; }

function react_select_browser_esm_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var compareOption = function compareOption() {
  var inputValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var option = arguments.length > 1 ? arguments[1] : undefined;
  var candidate = String(inputValue).toLowerCase();
  var optionValue = String(option.value).toLowerCase();
  var optionLabel = String(option.label).toLowerCase();
  return optionValue === candidate || optionLabel === candidate;
};

var builtins = {
  formatCreateLabel: function formatCreateLabel(inputValue) {
    return "Create \"".concat(inputValue, "\"");
  },
  isValidNewOption: function isValidNewOption(inputValue, selectValue, selectOptions) {
    return !(!inputValue || selectValue.some(function (option) {
      return compareOption(inputValue, option);
    }) || selectOptions.some(function (option) {
      return compareOption(inputValue, option);
    }));
  },
  getNewOptionData: function getNewOptionData(inputValue, optionLabel) {
    return {
      label: optionLabel,
      value: inputValue,
      __isNew__: true
    };
  }
};
var react_select_browser_esm_defaultProps = _objectSpread({
  allowCreateWhileLoading: false,
  createOptionPosition: 'last'
}, builtins);
var makeCreatableSelect = function makeCreatableSelect(SelectComponent) {
  var _class, _temp;

  return _temp = _class = /*#__PURE__*/function (_Component) {
    (0,inherits/* default */.Z)(Creatable, _Component);

    var _super = react_select_browser_esm_createSuper(Creatable);

    function Creatable(props) {
      var _this;

      (0,classCallCheck/* default */.Z)(this, Creatable);

      _this = _super.call(this, props);
      _this.select = void 0;

      _this.onChange = function (newValue, actionMeta) {
        var _this$props = _this.props,
            getNewOptionData = _this$props.getNewOptionData,
            inputValue = _this$props.inputValue,
            isMulti = _this$props.isMulti,
            onChange = _this$props.onChange,
            onCreateOption = _this$props.onCreateOption,
            value = _this$props.value,
            name = _this$props.name;

        if (actionMeta.action !== 'select-option') {
          return onChange(newValue, actionMeta);
        }

        var newOption = _this.state.newOption;
        var valueArray = Array.isArray(newValue) ? newValue : [newValue];

        if (valueArray[valueArray.length - 1] === newOption) {
          if (onCreateOption) onCreateOption(inputValue);else {
            var newOptionData = getNewOptionData(inputValue, inputValue);
            var newActionMeta = {
              action: 'create-option',
              name: name
            };

            if (isMulti) {
              onChange([].concat((0,toConsumableArray/* default */.Z)((0,index_75b02bac_browser_esm.C)(value)), [newOptionData]), newActionMeta);
            } else {
              onChange(newOptionData, newActionMeta);
            }
          }
          return;
        }

        onChange(newValue, actionMeta);
      };

      var options = props.options || [];
      _this.state = {
        newOption: undefined,
        options: options
      };
      return _this;
    }

    (0,createClass/* default */.Z)(Creatable, [{
      key: "UNSAFE_componentWillReceiveProps",
      value: function UNSAFE_componentWillReceiveProps(nextProps) {
        var allowCreateWhileLoading = nextProps.allowCreateWhileLoading,
            createOptionPosition = nextProps.createOptionPosition,
            formatCreateLabel = nextProps.formatCreateLabel,
            getNewOptionData = nextProps.getNewOptionData,
            inputValue = nextProps.inputValue,
            isLoading = nextProps.isLoading,
            isValidNewOption = nextProps.isValidNewOption,
            value = nextProps.value;
        var options = nextProps.options || [];
        var newOption = this.state.newOption;

        if (isValidNewOption(inputValue, (0,index_75b02bac_browser_esm.C)(value), options)) {
          newOption = getNewOptionData(inputValue, formatCreateLabel(inputValue));
        } else {
          newOption = undefined;
        }

        this.setState({
          newOption: newOption,
          options: (allowCreateWhileLoading || !isLoading) && newOption ? createOptionPosition === 'first' ? [newOption].concat((0,toConsumableArray/* default */.Z)(options)) : [].concat((0,toConsumableArray/* default */.Z)(options), [newOption]) : options
        });
      }
    }, {
      key: "focus",
      value: function focus() {
        this.select.focus();
      }
    }, {
      key: "blur",
      value: function blur() {
        this.select.blur();
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var options = this.state.options;
        return /*#__PURE__*/react.createElement(SelectComponent, (0,esm_extends/* default */.Z)({}, this.props, {
          ref: function ref(_ref) {
            _this2.select = _ref;
          },
          options: options,
          onChange: this.onChange
        }));
      }
    }]);

    return Creatable;
  }(react.Component), _class.defaultProps = react_select_browser_esm_defaultProps, _temp;
}; // TODO: do this in package entrypoint

var SelectCreatable = makeCreatableSelect(Select_e1cf49ae_browser_esm.S);
var Creatable = (0,stateManager_2f2b6f5b_browser_esm.m)(SelectCreatable);

/* harmony default export */ const dist_react_select_browser_esm = ((/* unused pure expression or super */ null && (Creatable)));


;// CONCATENATED MODULE: ./.yarn/__virtual__/react-select-virtual-a7d228ba97/0/cache/react-select-npm-3.2.0-85707201d2-0147c89825.zip/node_modules/react-select/async-creatable/dist/react-select.browser.esm.js

























var react_select_browser_esm_SelectCreatable = makeCreatableSelect(Select_e1cf49ae_browser_esm.S);
var SelectCreatableState = (0,stateManager_2f2b6f5b_browser_esm.m)(react_select_browser_esm_SelectCreatable);
var AsyncCreatable = makeAsyncSelect(SelectCreatableState);

/* harmony default export */ const async_creatable_dist_react_select_browser_esm = (AsyncCreatable);

// EXTERNAL MODULE: ./extensions/common/js/components/LoadingBar/LoadingBar.tsx
var LoadingBar = __webpack_require__(94246);
// EXTERNAL MODULE: ./extensions/common/js/components/Select/Select.tsx + 1 modules
var Select = __webpack_require__(44708);
// EXTERNAL MODULE: ./.yarn/cache/react-npm-18.3.1-af38f3c1ae-261137d3f3.zip/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(59718);
;// CONCATENATED MODULE: ./extensions/common/js/components/Select/AsyncCreatableSelect.tsx






// Component for getting a stylized <Select /> that has a raised appearance
const AsyncCreatableSelectForwarding = (props, ref) => {
  /*
  There's a bug in react-select where the isMenuOpen cb is called
  on every keystroke. We maintain our own state to know when the menu
  is open/close so we can programmatically de-focus the first option when
  the menu first opens
  */
  const [isMenuOpen, setIsMenuOpen] = (0,react.useState)(props.defaultMenuIsOpen || props.menuIsOpen || false);
  const _select = (0,react.useRef)(null);
  (0,react.useImperativeHandle)(ref, () => ({
    blur: _select.current.blur,
    focus: _select.current.focus,
    getProp: _select.current.getProp,
    select: _select.current.select,
    callProp: _select.current.callProp,
    onChange: _select.current.onChange,
    onInputChange: _select.current.onInputChange,
    onMenuOpen: _select.current.onMenuOpen,
    onMenuClose: _select.current.onMenuClose,
    context: _select.current.context,
    setState: _select.current.setState,
    forceUpdate: _select.current.forceUpdate,
    render: _select.current.render,
    props: _select.current.props,
    state: _select.current.state,
    refs: _select.current.refs
  }));
  return /*#__PURE__*/(0,jsx_runtime.jsx)(async_creatable_dist_react_select_browser_esm, {
    ref: _select,
    isLoading: true,
    loadingMessage: _ref => {
      let {
        inputValue
      } = _ref;
      // Returning a React node instead of a string isn't officially supported.
      // It works though, and it's the easiest way to show a custom loading component.
      //
      // https://github.com/JedWatson/react-select/issues/3511
      return inputValue ? /*#__PURE__*/(0,jsx_runtime.jsx)(LoadingBar/* default */.Z, {
        height: 8
      }) : null;
    },
    ...props,
    ...(0,Select/* propOverrides */.k)(props, _select),
    onMenuOpen: () => {
      if (!isMenuOpen) {
        setIsMenuOpen(true);
      }
    },
    onMenuClose: () => {
      props.onMenuClose && props.onMenuClose();
      setIsMenuOpen(false);
    }
  });
};
const AsyncCreatableSelect = /*#__PURE__*/(0,react.forwardRef)(AsyncCreatableSelectForwarding);
/* harmony default export */ const Select_AsyncCreatableSelect = (AsyncCreatableSelect);
// EXTERNAL MODULE: ./extensions/common/js/components/Avatar/Avatar.tsx + 1 modules
var Avatar = __webpack_require__(10295);
// EXTERNAL MODULE: ./extensions/common/js/components/Layout/Layout.tsx
var Layout = __webpack_require__(54165);
// EXTERNAL MODULE: ./extensions/common/js/components/Icon/Icon.tsx + 1 modules
var Icon = __webpack_require__(71174);
// EXTERNAL MODULE: ./extensions/common/js/services/locale/locale.ts + 37 modules
var locale = __webpack_require__(35091);
// EXTERNAL MODULE: ./extensions/common/js/widgets/react/material/toggle/switchToggle.tsx
var switchToggle = __webpack_require__(3342);
// EXTERNAL MODULE: ./extensions/common/js/widgets/react/material/button/streakButton.tsx
var streakButton = __webpack_require__(22682);
// EXTERNAL MODULE: ./extensions/common/js/redux/models/modelHooks.ts + 1 modules
var modelHooks = __webpack_require__(64076);
// EXTERNAL MODULE: ./extensions/common/js/redux/hooks.ts
var hooks = __webpack_require__(3572);
// EXTERNAL MODULE: ./extensions/common/js/services/tracker/useTracker.tsx
var useTracker = __webpack_require__(70989);
;// CONCATENATED MODULE: ./extensions/common/js/components/Select/wrappers/InternalContactSelectDropdown.module.css
// extracted by mini-css-extract-plugin
var _1 = "streak-mod__rnDmFnvBODmTBi1uC444";


;// CONCATENATED MODULE: ./extensions/common/js/components/Select/wrappers/InternalContactSelectDropdown.tsx

















// TODO: MAKE CUSTOM VALUE COMPONENT THAT CAN USE REDUX TO GET DISPLAY NAME

function InternalContactSelectDropdown(props) {
  const {
    suggestions = []
  } = props;
  const [showSuggestions, setShowSuggestions] = (0,react.useState)(suggestions.length > 0);
  const selectRef = (0,react.useRef)(null);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Select_AsyncCreatableSelect, {
    ref: selectRef,
    value: props.value,
    isClearable: props.isClearable,
    ...props,
    onInputChange: newValue => {
      if (newValue == '' && suggestions.length > 0) {
        setShowSuggestions(true);
      } else {
        setShowSuggestions(false);
      }
    },
    defaultOptions: suggestions.length > 0 ? [{
      label: locale/* default */.Z.getString('suggestions'),
      options: suggestions
    }] : props.defaultOptions,
    onChange: (newValue, actionMeta) => {
      // This internal component can do the extra
      // step of inferring whether a suggestion was chosen
      // or a regular contact was chosen
      if (Array.isArray(newValue)) {
        const first = newValue[0];
        if (first && newValue.length === 1 && first.type === 'EMAIL_ALREADY_ADDED') {
          return;
        }
        // We only ever show the suggestions by themselves,
        // so we know that if one is a suggestion, they all are
        else if (newValue.some(val => val.isSuggestion)) {
          props.onSuggestionChange(newValue, actionMeta);
        } else {
          props.onChange?.(newValue, actionMeta);
        }
      } else if (newValue && !Array.isArray(newValue)) {
        if ('type' in newValue && newValue.type === 'EMAIL_ALREADY_ADDED') {
          return;
        } else if (newValue.isSuggestion) {
          props.onSuggestionChange(newValue, actionMeta);
        } else {
          props.onChange?.(newValue, actionMeta);
        }
      } else if (actionMeta.action === 'clear') {
        if (props.isMulti === true) {
          throw new Error("can't use isMulti with isClearable");
        } else if (newValue && 'type' in newValue && newValue.type === 'EMAIL_ALREADY_ADDED') {
          return;
        } else if (props.value) {
          props.onRemove?.(props.value);
        }
      }
      if (!props.isMulti && actionMeta.action === 'select-option') {
        // We don't want single valued contact inputs to ever display a value
        selectRef.current?.select.blur();
      }
    },
    styles: {
      ...props.styles,
      input: (styles, state) => ({
        ...styles,
        fontSize: 'var(--streak-text-size-14)',
        ...(props.styles?.input?.(styles, state) ?? {})
      }),
      placeholder: (styles, state) => ({
        ...styles,
        fontSize: 'var(--streak-text-size-14)',
        letterSpacing: 0.5,
        ...(props.styles?.placeholder?.(styles, state) ?? {})
      }),
      menuPortal: (styles, state) => ({
        ...styles,
        zIndex: 1000,
        ...(props.styles?.menuPortal?.(styles, state) ?? {})
      }),
      groupHeading: styles => ({
        ...styles,
        paddingLeft: 8
      })
    },
    components: {
      ...props.components,
      Option,
      GroupHeading: showSuggestions ? SuggestionGroupHeading : index_75b02bac_browser_esm.F.GroupHeading
    }
  });
}
function SuggestionGroupHeading(props) {
  return /*#__PURE__*/(0,jsx_runtime.jsx)(index_75b02bac_browser_esm.F.GroupHeading, {
    ...props,
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      },
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
        children: locale/* default */.Z.getString('suggestions')
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(streakButton/* default */.ZP, {
        onClick: () => {
          props.selectProps.onSuggestionsClear?.();
          props.selectProps.onBlur?.();
        },
        variant: "text",
        accent: "muted",
        size: "xs",
        children: locale/* default */.Z.getString('clear')
      })]
    })
  });
}
function SuggestionOption(props) {
  const {
    data
  } = props;
  const {
    value,
    type
  } = data;
  const [isAutoboxed, setIsAutoboxed] = (0,react.useState)(data.isAutoboxed);
  const track = (0,useTracker/* default */.ZP)('suggestion');
  const contact = (0,modelHooks/* useContact */.AW)(type === 'CONTACT' ? {
    id: value
  } : null).result;
  const org = (0,modelHooks/* useOrg */.s9)(type === 'ORG' ? {
    id: value
  } : null).result;
  const personState = (0,hooks/* useSelector */.v9)(state => {
    if (!contact) {
      return undefined;
    }
    return state.models.people[state.modelMaps.personIdByContactId[contact.id]];
  });
  if (!org && !contact) {
    return null;
  }
  const imageUrl = personState?.imageUrl || org?.imageUrl;
  const displayName = personState?.displayName || contact?.emailAddresses && contact?.emailAddresses[0] || org?.name || org?.domains && org?.domains[0] || '';
  const secondaryName = contact?.emailAddresses ? contact?.emailAddresses[0] : org?.domains ? org?.domains[0] : undefined;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    ...props.innerProps,
    ref: props.innerRef,
    className: "jsx-1195501646" + " " + (props.innerProps && props.innerProps.className != null && props.innerProps.className || classnames_default()('option_wrapper', {
      isFocused: props.isFocused,
      isAutoboxed
    }) || ""),
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Layout/* Container */.W2, {
      minWidth: "100%",
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Layout/* Row */.X2, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Layout/* Column */.sg, {
          alignment: "start",
          children: !data.isNew ? /*#__PURE__*/(0,jsx_runtime.jsx)(Avatar/* default */.Z, {
            imageUrl: imageUrl,
            name: displayName,
            size: 24,
            variant: type === 'CONTACT' ? 'circle' : 'square'
          }) : /*#__PURE__*/(0,jsx_runtime.jsx)(Icon/* default */.Z, {
            variant: "inline",
            name: type === 'CONTACT' ? 'account_circle' : 'business',
            accent: "muted"
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Layout/* Column */.sg, {
          alignment: "center",
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
            className: "jsx-1195501646" + " " + "option_label_wrapper",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
              className: "jsx-1195501646" + " " + "option_displayName_wrapper",
              children: displayName
            }), secondaryName && /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
              className: "jsx-1195501646" + " " + "option_secondaryName_wrapper",
              children: ` • ${secondaryName}`
            })]
          })
        }), data.shouldShowAutoboxOption && props.isFocused && /*#__PURE__*/(0,jsx_runtime.jsx)(Layout/* Column */.sg, {
          alignment: "end",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            onClick: e => {
              e.stopPropagation();
              e.preventDefault();
              data.isAutoboxed = !isAutoboxed;
              setIsAutoboxed(!isAutoboxed);
              track('autoboxToggle', {
                isAutoboxed: !isAutoboxed
              });
            },
            className: "jsx-1195501646" + " " + (classnames_default()('option_autoboxToggle_wrapper', {
              isAutoboxed
            }) || ""),
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(switchToggle/* default */.Z, {
              value: isAutoboxed,
              onValueChange: newValue => {
                // This won't actually ever be called since we are capturing the click above
                setIsAutoboxed(newValue);
              }
            })
          })
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)((style_default()), {
      id: "1195501646",
      children: [".option_wrapper.jsx-1195501646{cursor:pointer;height:32px;line-height:32px;white-space:nowrap;-webkit-transition:background-color 0.15s cubic-bezier(0.4,0,0.2,1);transition:background-color 0.15s cubic-bezier(0.4,0,0.2,1);}", ".option_wrapper.isFocused.jsx-1195501646{background-color:var(--streak-black-hover);}", ".option_wrapper.isFocused.isAutoboxed.jsx-1195501646{background-color:var(--streak-app-primary-hover);}", ".option_label_wrapper.jsx-1195501646{display:inline-block;font-size:var(--streak-text-size-14);height:20px;line-height:20px;max-width:100%;overflow:hidden;text-overflow:ellipsis;vertical-align:middle;white-space:nowrap;width:100%;}", ".option_secondaryName_wrapper.jsx-1195501646{color:var(--streak-black-secondary);}", ".option_autoboxToggle_wrapper.jsx-1195501646{margin-top:-4px;}", ".option_autoboxToggle_wrapper.jsx-1195501646 .mdl-switch__thumb::after{content:'magic';color:var(--streak-black-disabled);font-family:'Streak Icons';font-size:12px;font-feature-settings:'liga';-webkit-font-smoothing:antialiased;position:relative;top:-6px;right:4px;}", ".option_autoboxToggle_wrapper.isAutoboxed.jsx-1195501646 .mdl-switch__thumb::after{color:white;}"]
    })]
  });
}
function Option(props) {
  const {
    data
  } = props;
  const [isAutoboxed, setIsAutoboxed] = (0,react.useState)(data.isAutoboxed);
  if (data.type === 'EMAIL_ALREADY_ADDED') {
    return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: classnames_default()('option_wrapper', _1),
      ...props.innerProps,
      ref: props.innerRef,
      children: locale.Locale.getString('contact_already_added_to_box')
    });
  }
  if (data.isSuggestion) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(SuggestionOption, {
      ...props
    });
  }
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    ...props.innerProps,
    ref: props.innerRef,
    className: "jsx-2797397322" + " " + (props.innerProps && props.innerProps.className != null && props.innerProps.className || classnames_default()('option_wrapper', {
      isFocused: props.isFocused,
      isAutoboxed
    }) || ""),
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Layout/* Container */.W2, {
      minWidth: "100%",
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Layout/* Row */.X2, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Layout/* Column */.sg, {
          alignment: "start",
          children: !data.isNew ? /*#__PURE__*/(0,jsx_runtime.jsx)(Avatar/* default */.Z, {
            imageUrl: data.imageUrl,
            name: data.displayName,
            size: 24,
            variant: data.type === 'CONTACT' || data.type === 'GOOGLE_CONTACT' ? 'circle' : 'square'
          }) : /*#__PURE__*/(0,jsx_runtime.jsx)(Icon/* default */.Z, {
            variant: "inline",
            name: data.type === 'CONTACT' || data.type === 'GOOGLE_CONTACT' ? 'account_circle' : 'business',
            accent: "muted"
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Layout/* Column */.sg, {
          alignment: "center",
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
            className: "jsx-2797397322" + " " + "option_label_wrapper",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
              className: "jsx-2797397322" + " " + "option_displayName_wrapper",
              children: data.displayName
            }), data.secondaryName && /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
              className: "jsx-2797397322" + " " + "option_secondaryName_wrapper",
              children: ` • ${data.secondaryName}`
            })]
          })
        }), data.shouldShowAutoboxOption && props.isFocused && /*#__PURE__*/(0,jsx_runtime.jsx)(Layout/* Column */.sg, {
          alignment: "end",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            onClick: e => {
              e.stopPropagation();
              e.preventDefault();
              data.isAutoboxed = !isAutoboxed;
              setIsAutoboxed(!isAutoboxed);
            },
            className: "jsx-2797397322" + " " + (classnames_default()('option_autoboxToggle_wrapper', {
              isAutoboxed
            }) || ""),
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(switchToggle/* default */.Z, {
              value: isAutoboxed,
              onValueChange: newValue => {
                // This won't actually ever be called since we are capturing the click above
                setIsAutoboxed(newValue);
              }
            })
          })
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)((style_default()), {
      id: "2797397322",
      children: [".option_wrapper.jsx-2797397322{cursor:pointer;height:32px;line-height:32px;white-space:nowrap;-webkit-transition:background-color 0.15s cubic-bezier(0.4,0,0.2,1);transition:background-color 0.15s cubic-bezier(0.4,0,0.2,1);}", ".option_wrapper.isFocused.jsx-2797397322{background-color:var(--streak-black-hover);}", ".option_wrapper.isFocused.isAutoboxed.jsx-2797397322{background-color:var(--streak-app-primary-hover);}", ".option_label_wrapper.jsx-2797397322{display:inline-block;font-size:var(--streak-text-size-14);height:20px;line-height:20px;max-width:100%;overflow:hidden;text-overflow:ellipsis;vertical-align:middle;white-space:nowrap;}", ".option_secondaryName_wrapper.jsx-2797397322{color:var(--streak-black-secondary);}", ".option_autoboxToggle_wrapper.jsx-2797397322{margin-top:-4px;}", ".option_autoboxToggle_wrapper.jsx-2797397322 .mdl-switch__thumb::after{content:'magic';color:var(--streak-black-disabled);font-family:'Streak Icons';font-size:12px;font-feature-settings:'liga';-webkit-font-smoothing:antialiased;position:relative;top:-6px;right:4px;}", ".option_autoboxToggle_wrapper.isAutoboxed.jsx-2797397322 .mdl-switch__thumb::after{color:white;}"]
    })]
  });
}

/***/ }),

/***/ 80752:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ createDebouncedLogger)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17013);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _log_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7961);


function createDebouncedLogger(_ref, duration) {
  let {
    err,
    details,
    message,
    level
  } = _ref;
  return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.debounce)(specificDetails => (0,_log_error__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)({
    err,
    details: {
      ...details,
      ...specificDetails
    },
    message,
    level
  }), duration);
}

/***/ }),

/***/ 87810:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ useSuggestions)
/* harmony export */ });
/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3572);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44345);


function useSuggestions(boxId) {
  const contactJsonString = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_1__/* .useSelector */ .v9)(state => {
    return state.models.boxes[boxId]?.contacts.map(link => link.contactKeyOrId).sort().join(',');
  });
  const orgJsonString = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_1__/* .useSelector */ .v9)(state => {
    return state.models.boxes[boxId]?.orgs.map(link => link.orgKeyOrId).sort().join(',');
  });
  const suggestions = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_1__/* .useSelector */ .v9)(state => {
    return state.ui.boxContactSuggestions[boxId];
  });
  const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_1__/* .useDispatch */ .I0)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    dispatch({
      type: 'BOX/CONTACTS/LOAD_SUGGESTIONS',
      keyOrId: {
        id: boxId
      }
    });
  }, [boxId, contactJsonString, orgJsonString, dispatch]);
  return suggestions;
}

/***/ }),

/***/ 70870:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ BoxAssignedToInputContainer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44345);
/* harmony import */ var _components_Icon_Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71174);
/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54165);
/* harmony import */ var _components_MultiAvatar_MultiAvatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14916);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(35091);
/* harmony import */ var _widgets_react_CommitHandler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(99174);
/* harmony import */ var _widgets_peoplePicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(41155);
/* harmony import */ var _boxView_taskReminder_hooks_useShareData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(69871);
/* harmony import */ var _services_data_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(38672);
/* harmony import */ var _streakyc_ui_components_hooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(14693);
/* harmony import */ var _boxView_taskReminder_hooks_useAssignees__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(96752);
/* harmony import */ var _lib_utils_useModelProperty__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(80795);
/* harmony import */ var _BoxAssignedToInputContainer_module_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(79182);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_widgets_peoplePicker__WEBPACK_IMPORTED_MODULE_6__, _boxView_taskReminder_hooks_useShareData__WEBPACK_IMPORTED_MODULE_7__, _services_data_data__WEBPACK_IMPORTED_MODULE_8__]);
([_widgets_peoplePicker__WEBPACK_IMPORTED_MODULE_6__, _boxView_taskReminder_hooks_useShareData__WEBPACK_IMPORTED_MODULE_7__, _services_data_data__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














function BoxAssignedToInputContainer(_ref) {
  let {
    boxId,
    track
  } = _ref;
  const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const box = _services_data_data__WEBPACK_IMPORTED_MODULE_8__/* .Data */ .V.getBoxById(boxId);
  const pipeline = box?.getPipeline();
  const [isEditing, setIsEditing] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    canModifyPipelinePermissions,
    canModifyTeam,
    maybeInviteAssignees,
    teamMembers
  } = (0,_boxView_taskReminder_hooks_useShareData__WEBPACK_IMPORTED_MODULE_7__/* .useShareData */ .g)(pipeline);
  const assignedToSharingEntries = (0,_lib_utils_useModelProperty__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)(box, 'assignedToSharingEntries');
  const assignees = (0,_streakyc_ui_components_hooks__WEBPACK_IMPORTED_MODULE_9__/* .useMemoCompare */ .qy)((0,_boxView_taskReminder_hooks_useAssignees__WEBPACK_IMPORTED_MODULE_10__/* .currentAssignees */ .UY)(assignedToSharingEntries ?? [], teamMembers));
  const autocompletePeople = (0,_boxView_taskReminder_hooks_useAssignees__WEBPACK_IMPORTED_MODULE_10__/* .assigneeSuggestions */ .ju)(teamMembers);
  const commitHandler = (0,_widgets_react_CommitHandler__WEBPACK_IMPORTED_MODULE_5__/* .useCommitHandler */ .w)({
    value: assignees,
    onCommit: async to => {
      await maybeInviteAssignees(to);
      box.assignedToSharingEntries = to.map(assignee => ({
        email: assignee.email,
        displayName: assignee.name,
        image: assignee.imageUrl,
        userKey: undefined
      }));
      box?.saveWithPromise();
    }
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
    ref: containerRef,
    className: _BoxAssignedToInputContainer_module_css__WEBPACK_IMPORTED_MODULE_13__/* .assignedTo */ .Oz,
    onKeyDown: e => {
      if (e.target !== containerRef.current) {
        return;
      }
      if (e.key === 'Enter') {
        setIsEditing(true);
      }
    },
    onClick: () => setIsEditing(true),
    tabIndex: 0,
    children: isEditing ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_widgets_peoplePicker__WEBPACK_IMPORTED_MODULE_6__/* .PeoplePickerInput */ .s, {
      autoCompletePeople: autocompletePeople,
      canModifyPipelinePermissions: canModifyPipelinePermissions,
      canModifyTeam: canModifyTeam,
      onClose: () => {
        setIsEditing(false);
        commitHandler.onCommit();
      },
      onEsc: () => {
        commitHandler.onCancel();
        setIsEditing(false);
      },
      onReturn: () => {
        commitHandler.onCommit();
        setIsEditing(false);
      },
      onSelectedPeopleChange: newPeople => {
        commitHandler.onValueChange(newPeople);
      },
      selectedPeople: commitHandler.value,
      teamPeople: teamMembers,
      track: track
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
      className: _BoxAssignedToInputContainer_module_css__WEBPACK_IMPORTED_MODULE_13__/* .displayContainer */ .r4,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__/* .Container */ .W2, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__/* .Row */ .X2, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__/* .Column */ .sg, {
            alignment: "start",
            children: [assignees.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
              className: _BoxAssignedToInputContainer_module_css__WEBPACK_IMPORTED_MODULE_13__/* .avatarContainer */ .AP,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_MultiAvatar_MultiAvatar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                avatars: assignees,
                size: 32,
                variant: "circle"
              })
            }), assignees.length === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
              accent: "muted",
              isOutline: true,
              name: "account_circle",
              variant: "inline"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__/* .Column */ .sg, {
            alignment: "center",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span", {
              className: assignees.length ? _BoxAssignedToInputContainer_module_css__WEBPACK_IMPORTED_MODULE_13__/* .namesContainer */ .lY : _BoxAssignedToInputContainer_module_css__WEBPACK_IMPORTED_MODULE_13__/* .emptyContainer */ .I6,
              children: assignees.length ? assignees.map(user => user.name).join(', ') : _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('add_assignee')
            })
          })]
        })
      })
    })
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 35493:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ BoxDetailsViewLink)
/* harmony export */ });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81518);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47587);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3572);
/* harmony import */ var _widgets_react_material_button_streakButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22682);
/* harmony import */ var _widgets_react_material_tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60303);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(35091);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(59718);







function BoxDetailsViewLink(_ref) {
  let {
    track,
    boxId,
    className
  } = _ref;
  const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useDispatch */ .I0)();
  const {
    anchorProps,
    showTooltip
  } = (0,_widgets_react_material_tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_3__/* .useTooltip */ .l)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_widgets_react_material_tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    tooltip: showTooltip ? _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('go_to_box') : null,
    anchor: anchorRef => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      ref: anchorRef,
      ...anchorProps,
      className: "jsx-844689925" + " " + (anchorProps && anchorProps.className != null && anchorProps.className || classnames__WEBPACK_IMPORTED_MODULE_1___default()('streak__sidebar_boxView_link', className) || ""),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_widgets_react_material_button_streakButton__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP, {
        accent: "muted",
        onClick: () => {
          dispatch({
            type: 'BOX_LINK_CLICK',
            boxId
          });
          track('goToBox');
        },
        variant: "inline",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_widgets_react_material_button_streakButton__WEBPACK_IMPORTED_MODULE_2__/* .StreakButtonIcon */ .A2, {
          materialIconName: "open_in_new",
          style: {
            fontSize: '20px',
            height: '20px',
            width: '20px'
          }
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
        id: "844689925",
        children: [".streak__sidebar_boxView_link.jsx-844689925{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}", ".streak__sidebar_boxView_link.jsx-844689925 .streak__button{height:32px;min-width:32px;width:32px;}"]
      })]
    })
  });
}

/***/ }),

/***/ 4126:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ BoxNameInputContainer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44345);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35091);
/* harmony import */ var _redux_selectors_accessSelectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76656);
/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3572);
/* harmony import */ var _widgets_react_CommitHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99174);
/* harmony import */ var _presentation_raisedMultilineTextfield__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83369);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(63086);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(59718);








function BoxNameInputContainer(_ref) {
  let {
    boxId,
    className,
    onBoxNameChange,
    onNameFocused
  } = _ref;
  const canEdit = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useSelector */ .v9)(state => (0,_redux_selectors_accessSelectors__WEBPACK_IMPORTED_MODULE_2__/* .isAccessAllowed */ .n)(state, 'Box', boxId, 'UPDATE'));
  const {
    name,
    isRecentlyMadeLocally
  } = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useSelector */ .v9)(state => {
    const box = state.models.boxes[boxId];
    if (!box) {
      return {};
    }
    return {
      name: box.name,
      isRecentlyMadeLocally: box.isRecentlyMadeLocally
    };
  }, react_redux__WEBPACK_IMPORTED_MODULE_7__/* .shallowEqual */ .wU);
  const nameInput = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    const node = nameInput.current;
    if (isRecentlyMadeLocally) {
      if (node) {
        node.select();
      }
      onNameFocused();
    }
  }, [onNameFocused, isRecentlyMadeLocally]);
  if (name == null) {
    return null;
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
    className: className,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_widgets_react_CommitHandler__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
      value: name,
      input: inputProps => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_presentation_raisedMultilineTextfield__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        ...inputProps,
        onValueChange: value => inputProps.onValueChange(value.replace(/\r?\n|\r/g, '')),
        disabled: !canEdit,
        size: 20,
        ref: nameInput,
        placeholder: _services_locale_locale__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.getString('enter_a_name'),
        onBlur: () => inputProps.onCommit()
      }),
      onCommit: input => onBoxNameChange(input)
    })
  });
}

/***/ }),

/***/ 25674:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ StageSelectButtonContainer)
/* harmony export */ });
/* unused harmony export StageSelectButton */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44345);
/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3572);
/* harmony import */ var _widgets_react_material_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82792);
/* harmony import */ var _redux_selectors_accessSelectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76656);
/* harmony import */ var _components_Icon_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71174);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(59718);







function StageSelectButtonContainer(props) {
  const pipeline = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_5__/* .useSelector */ .v9)(state => {
    const box = state.models.boxes[props.boxId];
    if (!box) {
      return null;
    }
    return state.models.pipelines[box.pipelineId];
  });
  const boxStageKey = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_5__/* .useSelector */ .v9)(state => {
    const box = state.models.boxes[props.boxId];
    if (!box) {
      return null;
    }
    return box.stageKey;
  });
  const canEdit = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_5__/* .useSelector */ .v9)(state => {
    if (!pipeline) {
      return false;
    }
    return (0,_redux_selectors_accessSelectors__WEBPACK_IMPORTED_MODULE_2__/* .isAccessAllowed */ .n)(state, 'Box', props.boxId, 'UPDATE');
  });
  if (!pipeline || !boxStageKey) {
    return null;
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(StageSelectButton, {
    className: props.className,
    pipeline: pipeline,
    selectedStageKey: boxStageKey,
    canEdit: canEdit,
    onStageChange: props.onStageChange
  });
}
function StageSelectButton(_ref) {
  let {
    className,
    pipeline,
    selectedStageKey,
    canEdit,
    onStageChange
  } = _ref;
  const {
    stages,
    stageOrder
  } = pipeline;
  const selectedStage = stages[selectedStageKey];
  const {
    backgroundColor
  } = selectedStage.color;
  const orderedStages = stageOrder.map(stageKey => stages[stageKey]);
  const buttonComponent = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => buttonProps => {
    const {
      domRef,
      ...rest
    } = buttonProps;
    const {
      name: stageName,
      color
    } = selectedStage;
    const {
      backgroundColor,
      foregroundColor
    } = color;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
      ...rest,
      ref: domRef,
      className: "streak__sidebar_boxView_overview_stage",
      style: {
        backgroundColor,
        color: foregroundColor
      },
      children: getMenuButton(stageName, canEdit ? 'arrow_drop_down' : null, foregroundColor)
    });
  }, [selectedStage, canEdit]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
    className: className,
    style: {
      backgroundColor
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_widgets_react_material_menu__WEBPACK_IMPORTED_MODULE_1__/* .MenuButton */ .j2
    // TODO: There is an issue in menubutton which doens't allow these alignment options to work correctly.
    // For now, use the default behavior.  Eventually we want the menu to appear on top of the list.
    // positionOptions={{position: 'cover', vAlign: 'top'}}
    , {
      disabled: !canEdit,
      ButtonComponent: buttonComponent,
      menu: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_widgets_react_material_menu__WEBPACK_IMPORTED_MODULE_1__/* .Dropdown */ .Lt, {
        maxHeight: "75vh",
        maxWidth: "410px",
        className: "streak__sidebar_boxView_overview_stage_menu",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_widgets_react_material_menu__WEBPACK_IMPORTED_MODULE_1__/* .MenuList */ .qy, {
          children: orderedStages.map(stage => getMenuItem(stage, selectedStageKey, onStageChange))
        })
      })
    })
  });
}
function getMenuItem(stage, selectedStageKey, onStageChange) {
  const isSelected = stage.key === selectedStageKey;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_widgets_react_material_menu__WEBPACK_IMPORTED_MODULE_1__/* .MenuItem */ .sN, {
    autoHeight: true,
    onItemChosen: () => onStageChange(stage.key),
    className: "streak__sidebar_boxView_overview_stage_menu_item",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: 'streak__sidebar_boxView_overview_stage',
      style: {
        color: isSelected ? 'var(--streak-app-primary)' : 'inherit',
        fontWeight: isSelected ? 500 : 'inherit',
        fontSize: 14
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        name: "label_important_filled",
        variant: "inline",
        color: stage.color.backgroundColor
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
        className: "streak__sidebar_boxView_overview_stage_name",
        children: stage.name
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "streak__sidebar_boxView_overview_stage_icon_container",
        children: isSelected && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
          name: "check",
          isOutline: true,
          variant: "inline",
          accent: "default"
        })
      })]
    })
  }, stage.key);
}
function getMenuButton(name, label, stageColor) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
      name: "label_important",
      variant: "inline",
      color: stageColor
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
      className: "streak__sidebar_boxView_overview_stage_name",
      children: name
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "streak__sidebar_boxView_overview_stage_icon_container",
      children: label && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        name: label,
        isOutline: true,
        variant: "inline",
        color: stageColor
      })
    })]
  });
}

/***/ }),

/***/ 36339:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ ActionButtons)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44345);
/* harmony import */ var _integrations_core_components_ActionButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57680);
/* harmony import */ var _actionButtons_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9562);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_integrations_core_components_ActionButton__WEBPACK_IMPORTED_MODULE_1__]);
_integrations_core_components_ActionButton__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function ActionButtons(props) {
  const actionButtons = props.pipeline?.actionButtons ?? [];
  const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const [showShadow, setShowShadow] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const boxKeys = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => [props.boxKey], [props.boxKey]);

  // toggle shadow based on width of scrollable container
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => {
    const container = containerRef.current;
    if (!container) return;
    const shouldShowShadow = container.scrollWidth > container.clientWidth;
    setShowShadow(shouldShowShadow);
  }, [containerRef]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: _actionButtons_module_css__WEBPACK_IMPORTED_MODULE_3__/* .container */ .nC,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: _actionButtons_module_css__WEBPACK_IMPORTED_MODULE_3__/* .buttonsContainer */ .FE,
      ref: containerRef,
      children: [showShadow && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: _actionButtons_module_css__WEBPACK_IMPORTED_MODULE_3__/* .startShadow */ .AD
      }), actionButtons.map(actionButton => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_integrations_core_components_ActionButton__WEBPACK_IMPORTED_MODULE_1__/* .ActionButton */ .K, {
        size: "m",
        buttonData: actionButton,
        boxKeys: boxKeys
      }, actionButton.key)), showShadow && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: _actionButtons_module_css__WEBPACK_IMPORTED_MODULE_3__/* .endShadow */ .WD
      })]
    })
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 92947:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81518);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47587);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44345);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(63086);
/* harmony import */ var _boxFields__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7705);
/* harmony import */ var _recentActivity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(35510);
/* harmony import */ var _presentation_addFieldButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5735);
/* harmony import */ var _presentation_boxDetailsCount__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(40478);
/* harmony import */ var _presentation_boxDetailsOverview__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(84748);
/* harmony import */ var _presentation_ContactsSection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(24139);
/* harmony import */ var _presentation_sidebarFabButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(74826);
/* harmony import */ var _components_Heading_Heading__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(67565);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(35091);
/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(3572);
/* harmony import */ var _redux_models_modelHooks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(64076);
/* harmony import */ var _redux_models_shortcutHooks__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(545);
/* harmony import */ var _widgets_react_loadingSpinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(72905);
/* harmony import */ var _actionButtons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(36339);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_boxFields__WEBPACK_IMPORTED_MODULE_3__, _presentation_boxDetailsOverview__WEBPACK_IMPORTED_MODULE_7__, _presentation_ContactsSection__WEBPACK_IMPORTED_MODULE_8__, _actionButtons__WEBPACK_IMPORTED_MODULE_15__]);
([_boxFields__WEBPACK_IMPORTED_MODULE_3__, _presentation_boxDetailsOverview__WEBPACK_IMPORTED_MODULE_7__, _presentation_ContactsSection__WEBPACK_IMPORTED_MODULE_8__, _actionButtons__WEBPACK_IMPORTED_MODULE_15__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



















/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(function BoxDetails(props) {
  const {
    card: boxCard,
    track
  } = props;
  const {
    id: boxId
  } = boxCard;
  const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_17__/* .useDispatch */ .I0)();
  const boxKey = (0,_redux_models_modelHooks__WEBPACK_IMPORTED_MODULE_12__/* .useBox */ .EJ)({
    id: boxId
  }, box => box.key).result;
  (0,_redux_models_shortcutHooks__WEBPACK_IMPORTED_MODULE_13__/* .useBoxShortcuts */ .p)({
    id: boxId
  }, 'boxStreakSidebar');
  const pipelineId = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_17__/* .useSelector */ .v9)(state => {
    const box = state.models.boxes[boxId];
    return box ? box.pipelineId : null;
  });
  const {
    tasksCount,
    linkedBoxesCount,
    tasksMostDueDate
  } = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_17__/* .useSelector */ .v9)(state => {
    const box = state.models.boxes[boxId];
    if (!box) {
      return {
        tasksCount: 0,
        linkedBoxesCount: 0
      };
    }
    return {
      tasksCount: box.tasks,
      linkedBoxesCount: box.linkedBoxes,
      tasksMostDueDate: box.tasksMostDueDate
    };
  }, react_redux__WEBPACK_IMPORTED_MODULE_18__/* .shallowEqual */ .wU);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    boxKey && dispatch({
      type: 'VIEW_BOX',
      boxKey
    });
  }, [boxKey, dispatch]);
  const pipeline = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_17__/* .useSelector */ .v9)(state => pipelineId ? state.models.pipelines[pipelineId] : null);
  if (boxKey == null) {
    // TODO figure out why this component gates on the box key like this
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_widgets_react_loadingSpinner__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {});
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
    className: "jsx-2029607710" + " " + "streak__boxDetails_container",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_presentation_sidebarFabButton__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
      onFabClick: () => {
        dispatch({
          type: 'GO_TO_COMMENT_INPUT',
          boxId
        });
      },
      onFabItemClick: dispatchAction => {
        // Cast the dispatch object to any otherwise flow will yell that it can't decide
        // which case this matches to since there are many that have boxId and type.
        dispatch({
          type: dispatchAction,
          boxId
        });
      },
      track: (eventName, extraProps) => track('fab.' + eventName, extraProps)
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(Section, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_presentation_boxDetailsOverview__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        boxId: boxId,
        track: track
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(Section, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_presentation_boxDetailsCount__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        tasksCount: tasksCount,
        linkedBoxesCount: linkedBoxesCount,
        tasksMostDueDate: tasksMostDueDate,
        onTasksClick: () => {
          dispatch({
            type: 'OPEN_BOX_TASKS',
            boxId
          });
          track('tasks.click');
        },
        onLinkedBoxesClick: () => {
          dispatch({
            type: 'LINKED_BOXES_COUNT_CLICK',
            boxId
          });
          track('linkedBoxes.click');
        }
      })
    }), !!pipeline?.actionButtons?.length && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(Section, {
      header: _services_locale_locale__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z.getString('integrations_action_buttons'),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_actionButtons__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
        boxKey: boxKey,
        pipeline: pipeline
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(Section, {
      header: _services_locale_locale__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z.getString('contacts'),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_presentation_ContactsSection__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        boxId: boxId,
        track: track
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(Section, {
      header: _services_locale_locale__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z.getString('recent_activity'),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_recentActivity__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        boxId: boxId,
        track: track
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(Section, {
      header: _services_locale_locale__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z.getString('fields'),
      hideBottomBorder: true,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_boxFields__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        track: (eventName, extraProps) => track('boxFields.' + eventName, extraProps),
        boxId: boxId
      }), pipelineId && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_presentation_addFieldButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        pipelineId: pipelineId,
        track: track
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "2029607710",
      children: [".streak__boxDetails_container.jsx-2029607710{margin-top:-4px;padding-bottom:64px;}"]
    })]
  }, boxKey);
}, (prevProps, nextProps) => prevProps.card.id === nextProps.card.id));
function Section(props) {
  const {
    header,
    children,
    hideBottomBorder
  } = props;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
    className: "jsx-2160467295" + " " + (classnames__WEBPACK_IMPORTED_MODULE_1___default()('streak__sidebar_boxView_section', {
      noBorder: hideBottomBorder
    }) || ""),
    children: [header && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_components_Heading_Heading__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
      size: "h5",
      color: "var(--streak-black-secondary)",
      margin: "4px 0 8px 0",
      children: header
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
      className: "jsx-2160467295" + " " + "streak__sidebar_boxView_section_body",
      children: children
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "2160467295",
      children: [".streak__sidebar_boxView_section.jsx-2160467295{border-bottom:1px solid var(--streak-black-divider);padding-bottom:8px;padding-top:8px;}", ".streak__sidebar_boxView_section.noBorder.jsx-2160467295{border-bottom:none;}"]
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 71750:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ BoxFieldRow)
/* harmony export */ });
/* harmony import */ var _redux_helpers_getColumnInputForType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28354);
/* harmony import */ var _redux_helpers_getColumnDisplayforType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99723);
/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3572);
/* harmony import */ var _presentation_FieldRow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15501);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_redux_helpers_getColumnInputForType__WEBPACK_IMPORTED_MODULE_0__]);
_redux_helpers_getColumnInputForType__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function BoxFieldRow(_ref) {
  let {
    boxId,
    columnKey,
    track
  } = _ref;
  const {
    name,
    shortName,
    isEditable,
    type: columnType,
    shouldShowInColumnsList
  } = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useSelector */ .v9)(state => {
    const pipelineId = state.models.boxes[boxId].pipelineId;
    return state.models.pipelines[pipelineId].columns[columnKey];
  });
  if (!shouldShowInColumnsList) {
    return null;
  }
  let input;
  if (isEditable) {
    input = (0,_redux_helpers_getColumnInputForType__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(columnType);
  } else {
    input = (0,_redux_helpers_getColumnDisplayforType__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(columnType);
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_presentation_FieldRow__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    inputComponent: input({
      boxId,
      columnKey,
      track
    }),
    name: name,
    labelName: shortName,
    isEditable: isEditable,
    columnType: columnType,
    fieldFlexBasic: "116px"
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7705:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44345);
/* harmony import */ var _boxFieldRow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71750);
/* harmony import */ var _redux_selectors_getOrderedColumns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32416);
/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3572);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(63086);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_boxFieldRow__WEBPACK_IMPORTED_MODULE_1__]);
_boxFieldRow__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






function BoxFields(props) {
  const {
    boxId,
    track
  } = props;
  const orderedColumns = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useSelector */ .v9)(state => (0,_redux_selectors_getOrderedColumns__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(state, boxId), react_redux__WEBPACK_IMPORTED_MODULE_5__/* .shallowEqual */ .wU);
  if (orderedColumns.length === 0) {
    return null;
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: orderedColumns.map(columnKey => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_boxFieldRow__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
      boxId: boxId,
      columnKey: columnKey,
      track: track
    }, columnKey))
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo(BoxFields, (prevProps, nextProps) => prevProps.boxId === nextProps.boxId));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 35510:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ RecentActivity)
});

// EXTERNAL MODULE: ./extensions/common/js/redux/hooks.ts
var hooks = __webpack_require__(3572);
// EXTERNAL MODULE: ./extensions/common/js/redux/models/modelHooks.ts + 1 modules
var modelHooks = __webpack_require__(64076);
// EXTERNAL MODULE: ./.yarn/__virtual__/styled-jsx-virtual-9c4bfc1357/0/cache/styled-jsx-npm-5.0.2-aff4f13ebf-96b4507d41.zip/node_modules/styled-jsx/style.js
var style = __webpack_require__(81518);
var style_default = /*#__PURE__*/__webpack_require__.n(style);
// EXTERNAL MODULE: ./extensions/common/js/components/Layout/Layout.tsx
var Layout = __webpack_require__(54165);
// EXTERNAL MODULE: ./extensions/common/js/components/Icon/Icon.tsx + 1 modules
var Icon = __webpack_require__(71174);
// EXTERNAL MODULE: ./extensions/common/js/modules/timeline/entries/templates/TimelineTimestamp.tsx
var TimelineTimestamp = __webpack_require__(8153);
// EXTERNAL MODULE: ./extensions/common/js/components/BoxCard/ActivityItem.tsx
var ActivityItem = __webpack_require__(2076);
// EXTERNAL MODULE: ./.yarn/cache/dompurify-npm-3.0.1-3793c93bcb-f6d5c1d2c2.zip/node_modules/dompurify/dist/purify.js
var purify = __webpack_require__(95051);
// EXTERNAL MODULE: ./.yarn/cache/react-npm-18.3.1-af38f3c1ae-261137d3f3.zip/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(59718);
;// CONCATENATED MODULE: ./extensions/common/js/modules/streakSidebar/presentation/activityDetails.tsx








// We intentionally omit <div> to prevent the message from displaying over multiple lines.
// We manually deal with <br>, but this is easier since they can't contain child elements.
const allowedTags = ['b', 'br', 'code', 'em', 'i', 'strike', 'strong'];
const iconNames = {
  CALL_LOG: 'phone',
  COMMENT: 'comment',
  EMAIL: 'email',
  MEETING_NOTES: 'assignment'
};
function stripExtraLines(html) {
  if (html === undefined) {
    return '';
  }
  html = html.split('<br>')[0];
  html = html.split('<br />')[0];
  return html;
}
function ActivityDetails(_ref) {
  let {
    boxId,
    entry,
    track
  } = _ref;
  const dispatch = (0,hooks/* useDispatch */.I0)();
  const activity = (0,ActivityItem/* useRecentActivityItem */.a)(entry);
  const {
    unsafeHtml,
    timestamp,
    type
  } = activity;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    onClick: () => {
      dispatch({
        type: 'SIDEBAR_RECENT_ACTIVITY_CLICK',
        activity,
        boxId
      });
      track('click', {
        activityType: activity.type,
        details: activity.trackingDetails
      });
    },
    className: "jsx-2295747976" + " " + "streak__sidebar-activity-row streak__transition-background-color",
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Layout/* Row */.X2, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Layout/* Column */.sg, {
        alignment: "start",
        className: "activity_icon_container",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Icon/* default */.Z, {
          accent: "muted",
          className: "streak__sidebar-activity-row_icon",
          isOutline: true,
          name: iconNames[type],
          variant: "inline"
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Layout/* Column */.sg, {
        alignment: "center",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          dangerouslySetInnerHTML: {
            __html: (0,purify.sanitize)(stripExtraLines(unsafeHtml), {
              ALLOWED_TAGS: allowedTags
            })
          },
          title: (0,purify.sanitize)(unsafeHtml, {
            ALLOWED_TAGS: []
          }),
          className: "jsx-2295747976" + " " + "streak__sidebar-activity-row-text"
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Layout/* Column */.sg, {
        alignment: "end",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(TimelineTimestamp/* default */.Z, {
          timestamp: timestamp
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)((style_default()), {
      id: "2295747976",
      children: [".streak__sidebar-activity-row.jsx-2295747976{border-radius:2em;cursor:pointer;font-size:var(--streak-text-size-14);margin:var(--sidebar-section-row-margin);padding:0 12px;}", ".streak__sidebar-activity-row.jsx-2295747976:hover{background-color:var(--streak-black-hover);}", ".streak__sidebar-activity-row.jsx-2295747976 .activity_icon_container{padding-left:8px;}", ".streak__sidebar-activity-row-text.jsx-2295747976{overflow:hidden;text-overflow:ellipsis;}"]
    })]
  });
}
// EXTERNAL MODULE: ./extensions/common/js/modules/streakSidebar/presentation/viewAllButton.tsx
var viewAllButton = __webpack_require__(55157);
;// CONCATENATED MODULE: ./extensions/common/js/modules/streakSidebar/containers/recentActivity.tsx





function RecentActivity(_ref) {
  let {
    boxId,
    maxVisible = 3,
    track
  } = _ref;
  const boxTimelineResult = (0,modelHooks/* useBoxTimeline */.Y8)({
    id: boxId
  }, ['EMAILS', 'COMMENTS', 'MEETING_NOTES', 'CALL_LOGS'], maxVisible + 1);
  const dispatch = (0,hooks/* useDispatch */.I0)();
  const entries = boxTimelineResult.result?.timelineEntries || [];
  const hiddenCount = Math.max(entries.length - maxVisible, 0);
  const _track = (eventName, extraProps) => track('recentActivity.' + eventName, extraProps);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [entries.slice(0, maxVisible).map(entry => /*#__PURE__*/(0,jsx_runtime.jsx)(ActivityDetails, {
      boxId: boxId,
      entry: entry,
      track: _track
    }, JSON.stringify(entry.keyOrId))), hiddenCount > 0 && /*#__PURE__*/(0,jsx_runtime.jsx)(viewAllButton/* default */.Z, {
      hiddenCount: hiddenCount,
      onClick: () => {
        dispatch({
          type: 'VIEW_ALL_RECENT_ACTIVITY',
          boxId
        });
        _track('viewAll');
      }
    })]
  });
}

/***/ }),

/***/ 71725:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ ClickableCountRow)
/* harmony export */ });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81518);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44345);
/* harmony import */ var _components_CountBubble_CountBubble__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49858);
/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54165);
/* harmony import */ var _lib_utils_prettyNumber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6567);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(59718);






function ClickableCountRow(props) {
  const {
    count,
    label,
    onClick
  } = props;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      onClick: onClick,
      className: "jsx-4142010221" + " " + "streak__sidebar_count_row streak__transition-background-color",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_3__/* .Row */ .X2, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_3__/* .Column */ .sg, {
          alignment: "start",
          className: "count_bubble_column",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_CountBubble_CountBubble__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z
          // this row has a hover color of var(--streak-app-primary-hover),
          // we can't use the same rgba color as the CountBubble's bg bc
          // layering two rgbas will create a new color. so we're just
          // pass the rgb value of var(--streak-app-primary-hover)
          , {
            backgroundColor: count === 0 ? '#ECEEFA' : '',
            count: (0,_lib_utils_prettyNumber__WEBPACK_IMPORTED_MODULE_4__/* .prettyNumber */ .C)(count),
            "font-size": 14
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_3__/* .Column */ .sg, {
          alignment: "center",
          children: label
        }), props.children]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "4142010221",
      children: [".streak__sidebar_count_row.jsx-4142010221{border-radius:2em;cursor:pointer;font-family:var(--google-font-family);font-size:14px;font-weight:bold;margin:var(--sidebar-section-row-margin);padding:0 12px;}", ".streak__sidebar_count_row.jsx-4142010221:hover{background-color:var(--streak-primary-hover);}", ".streak__sidebar_count_row.jsx-4142010221 .count_bubble_column{padding-left:8px;}"]
    })]
  });
}

/***/ }),

/***/ 24139:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81518);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44345);
/* harmony import */ var _viewAllButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55157);
/* harmony import */ var _components_ContactRow_ContactRow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43420);
/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54165);
/* harmony import */ var _components_OrgRow_OrgRow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11315);
/* harmony import */ var _components_Select_wrappers_BoxContactSelectDropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(52146);
/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3572);
/* harmony import */ var _redux_selectors_accessSelectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(76656);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(35091);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ContactRow_ContactRow__WEBPACK_IMPORTED_MODULE_3__, _components_Select_wrappers_BoxContactSelectDropdown__WEBPACK_IMPORTED_MODULE_6__]);
([_components_ContactRow_ContactRow__WEBPACK_IMPORTED_MODULE_3__, _components_Select_wrappers_BoxContactSelectDropdown__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const MAX_VISIBLE_CONTACTS = 3;
function ContactsSection(_ref) {
  let {
    boxId,
    track
  } = _ref;
  const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_10__/* .useDispatch */ .I0)();
  const boxState = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_10__/* .useSelector */ .v9)(state => state.models.boxes[boxId]);
  const canEdit = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_10__/* .useSelector */ .v9)(state => (0,_redux_selectors_accessSelectors__WEBPACK_IMPORTED_MODULE_7__/* .isAccessAllowed */ .n)(state, 'Box', boxId, 'UPDATE'));
  if (!boxState) {
    return null;
  }
  const boxContactLinks = Object.values(boxState.contacts).sort((a, b) => a.isStarred === b.isStarred ? 0 : a.isStarred ? -1 : 1);
  const boxOrgLinks = Object.values(boxState.orgs).sort((a, b) => a.isStarred === b.isStarred ? 0 : a.isStarred ? -1 : 1);
  const contactsToShow = boxContactLinks.slice(0, MAX_VISIBLE_CONTACTS);
  const orgsToShow = contactsToShow.length < MAX_VISIBLE_CONTACTS ? boxOrgLinks.slice(0, MAX_VISIBLE_CONTACTS - contactsToShow.length) : [];
  const contactsHidden = boxContactLinks.length - contactsToShow.length;
  const orgsHidden = boxOrgLinks.length - orgsToShow.length;
  const hiddenCount = contactsHidden + orgsHidden;
  const showAddContactRow = contactsHidden === 0 && orgsHidden === 0 && canEdit;
  const _track = (eventName, extraProps) => track('contacts.' + eventName, extraProps);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [contactsToShow.length === 0 && !canEdit && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
      className: "jsx-480500642" + " " + "streak__contacts-row",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_4__/* .Row */ .X2, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_4__/* .Column */ .sg, {
          alignment: "center",
          children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z.getString('no_contacts_added')
        })
      })
    }), contactsToShow.map(contact => {
      const key = 'key' in contact.contactKeyOrId ? contact.contactKeyOrId.key : contact.contactKeyOrId.id;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_ContactRow_ContactRow__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        contactKeyOrId: contact.contactKeyOrId,
        context: {
          boxId
        },
        track: _track
      }, key);
    }), orgsToShow.map(org => {
      const key = 'key' in org.orgKeyOrId ? org.orgKeyOrId.key : org.orgKeyOrId.id;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_OrgRow_OrgRow__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        context: {
          boxId
        },
        orgKeyOrId: org.orgKeyOrId,
        track: _track
      }, key);
    }), showAddContactRow && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
      className: "jsx-480500642" + " " + "add_wrapper",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_Select_wrappers_BoxContactSelectDropdown__WEBPACK_IMPORTED_MODULE_6__/* .AddContactWrapper */ .I, {
        boxId: boxId,
        track: _track
      })
    }), hiddenCount > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_viewAllButton__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      hiddenCount: hiddenCount,
      onClick: () => {
        _track('viewAll');
        dispatch({
          type: 'VIEW_ALL_CONTACTS',
          boxId
        });
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "480500642",
      children: [".add_wrapper.jsx-480500642 .add_contact_container{margin:var(--sidebar-section-row-margin);}"]
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.memo(ContactsSection, (prevProps, nextProps) => prevProps.boxId === nextProps.boxId));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 15501:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ FieldRow)
/* harmony export */ });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81518);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44345);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47587);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SimpleErrorWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(75539);
/* harmony import */ var _redux_helpers_columnType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(96834);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(59718);






function FieldRow(_ref) {
  let {
    name,
    labelName,
    isEditable,
    columnType,
    inputComponent,
    fieldFlexBasic
  } = _ref;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default().dynamic([["4009964073", [fieldFlexBasic]]]) + " " + (classnames__WEBPACK_IMPORTED_MODULE_2___default()('streak__sidebarField', {
      isDisplay: !isEditable,
      isCheckbox: columnType === _redux_helpers_columnType__WEBPACK_IMPORTED_MODULE_4__/* .ColumnType */ .Q.CHECKBOX,
      isFormula: columnType === _redux_helpers_columnType__WEBPACK_IMPORTED_MODULE_4__/* .ColumnType */ .Q.FORMULA,
      isTag: columnType === _redux_helpers_columnType__WEBPACK_IMPORTED_MODULE_4__/* .ColumnType */ .Q.TAG
    }) || ""),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      title: name,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default().dynamic([["4009964073", [fieldFlexBasic]]]) + " " + "streak__sidebarField_name",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default().dynamic([["4009964073", [fieldFlexBasic]]]),
        children: labelName
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default().dynamic([["4009964073", [fieldFlexBasic]]]) + " " + (classnames__WEBPACK_IMPORTED_MODULE_2___default()('streak__sidebarField_input', {
        'streak__transition-background-color': columnType === _redux_helpers_columnType__WEBPACK_IMPORTED_MODULE_4__/* .ColumnType */ .Q.TAG || columnType === _redux_helpers_columnType__WEBPACK_IMPORTED_MODULE_4__/* .ColumnType */ .Q.CHECKBOX
      }) || ""),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_SimpleErrorWrapper__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        children: inputComponent
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "4009964073",
      dynamic: [fieldFlexBasic],
      children: [".streak__sidebarField.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:var(--streak-text-size-13);min-height:32px;}", `.streak__sidebarField_name.__jsx-style-dynamic-selector{color:var(--streak-black-secondary);-webkit-flex:0 0 ${fieldFlexBasic};-ms-flex:0 0 ${fieldFlexBasic};flex:0 0 ${fieldFlexBasic};margin-right:4px;min-width:40px;overflow:hidden;padding-top:9px;text-overflow:ellipsis;white-space:nowrap;-webkit-transition:flex 0.1s,text-overflow 0 ease 0.1s;transition:flex 0.1s,text-overflow 0 ease 0.1s;}`, ".streak__sidebarField.__jsx-style-dynamic-selector:focus-within.__jsx-style-dynamic-selector:not(.isCheckbox,.isDisplay) .streak__sidebarField_name.__jsx-style-dynamic-selector{-webkit-flex:0;-ms-flex:0;flex:0;text-overflow:clip;}", ".streak__sidebarField_input.__jsx-style-dynamic-selector{color:var(--streak-black-primary);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1;min-width:0;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".streak__sidebarField_input.__jsx-style-dynamic-selector .raisedMultilineTextfield,.streak__sidebarField_input.__jsx-style-dynamic-selector .raisedTextfield,.streak__sidebarField_input.__jsx-style-dynamic-selector .raisedRichTextArea{font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif !important;}", ".streak__sidebarField.isCheckbox.__jsx-style-dynamic-selector .streak__sidebarField_input.__jsx-style-dynamic-selector{padding-top:5px;padding-left:8px;}", ".streak__sidebarField.isCheckbox.__jsx-style-dynamic-selector .streak__sidebarField_input.__jsx-style-dynamic-selector:hover,.streak__sidebarField.isTag.__jsx-style-dynamic-selector .streak__sidebarField_input.__jsx-style-dynamic-selector:hover{background-color:var(--streak-black-hover);}", ".streak__sidebarField.isCheckbox.__jsx-style-dynamic-selector .streak__sidebarField_input.__jsx-style-dynamic-selector:hover{border-radius:4px;cursor:pointer;}", ".streak__sidebarField.isCheckbox.__jsx-style-dynamic-selector .streak__sidebarField_input.__jsx-style-dynamic-selector label.mdl-checkbox{height:100%;width:100%;}", ".streak__sidebarField.isCheckbox.__jsx-style-dynamic-selector .streak__sidebarField_input.__jsx-style-dynamic-selector label.mdl-checkbox:hover{cursor:pointer;}", ".streak__sidebarField.isTag.__jsx-style-dynamic-selector .streak__sidebarField_input.__jsx-style-dynamic-selector{border-radius:4px;width:148px;}", ".streak__sidebarField.isTag.__jsx-style-dynamic-selector .mdl-textfield.mdl-textfield > label{top:0 !important;line-height:32px;-webkit-letter-spacing:0.5px;-moz-letter-spacing:0.5px;-ms-letter-spacing:0.5px;letter-spacing:0.5px;font-family:'Roboto';}", ".streak__sidebarField.isTag.__jsx-style-dynamic-selector .mdl-textfield.mdl-textfield > label.mdl-textfield--label-placeholder{color:var(--gmail-input-placeholder);padding-left:8px;}", ".streak__sidebarField.isTag.__jsx-style-dynamic-selector .streak__sidebarField_input.__jsx-style-dynamic-selector .mdl-textfield{border-radius:4px;padding:4px 8px !important;}", ".streak__sidebarField.isTag.__jsx-style-dynamic-selector .streak__sidebarField_input.__jsx-style-dynamic-selector .mdl-textfield.is-focused{background:#ffffff;box-shadow:0 8px 10px 1px var(--streak-black-hover), 0 3px 14px 2px var(--streak-black-hover),0 5px 5px -3px var(--streak-black-shadow);border-radius:4px;z-index:2;}", ".streak__sidebarField.isTag.__jsx-style-dynamic-selector .streak__sidebarField_input.__jsx-style-dynamic-selector .mdl-textfield .mdl-chip{background-color:var(--streak-black-hover);border-radius:2px;padding:0px 4px;}", ".streak__sidebarField.isTag.__jsx-style-dynamic-selector .streak__sidebarField_input.__jsx-style-dynamic-selector .mdl-textfield span.mdl-chip:focus{background-color:var(--streak-black-shadow);}", ".streak__sidebarField.isTag.__jsx-style-dynamic-selector .streak__sidebarField_input.__jsx-style-dynamic-selector .mdl-textfield span.mdl-chip:focus .mdl-chip__text,.streak__sidebarField.isTag.__jsx-style-dynamic-selector .streak__sidebarField_input.__jsx-style-dynamic-selector .mdl-textfield span.mdl-chip:focus .mdl-chip--action{color:var(--streak-black-primary);}", ".streak__sidebarField.isTag.__jsx-style-dynamic-selector .streak__sidebarField_input.__jsx-style-dynamic-selector .mdl-textfield span.mdl-chip:focus .mdl-chip--action{-webkit-mask:none;background-color:transparent;}", ".streak__sidebarField.isTag.__jsx-style-dynamic-selector .streak__sidebarField_input.__jsx-style-dynamic-selector .mdl-textfield .mdl-chip .mdl-chip__text{max-width:124px;}", ".streak__sidebarField.isTag.__jsx-style-dynamic-selector .streak__sidebarField_input.__jsx-style-dynamic-selector .mdl-textfield.is-focused .mdl-chip .mdl-chip__text{max-width:102px;}", ".streak__sidebarField.isTag.__jsx-style-dynamic-selector .streak__sidebarField_input.__jsx-style-dynamic-selector .mdl-textfield .mdl-chip--action{padding:0 0 0 4px;}", ".streak__sidebarField.isTag.__jsx-style-dynamic-selector .streak__sidebarField_input.__jsx-style-dynamic-selector .mdl-textfield .mdl-chip--action .streak__icon{font-size:16px;height:16px;width:16px;}", ".streak__sidebarField.isTag.__jsx-style-dynamic-selector .streak__sidebarField_input.__jsx-style-dynamic-selector .mdl-textfield .mdl-textfield--suffix{display:none;}", ".streak__sidebarField.isTag.__jsx-style-dynamic-selector .streak__sidebarField_input.__jsx-style-dynamic-selector .mdl-textfield:not(.is-focused) .mdl-chip .mdl-chip--action{display:none;}"]
    })]
  });
}

/***/ }),

/***/ 85993:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ LinkedBoxesInput)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44345);
/* harmony import */ var jwerty_globals_fixed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14773);
/* harmony import */ var jwerty_globals_fixed__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jwerty_globals_fixed__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _widgets_react_material_textField_textFieldWithChipsAndDropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99848);
/* harmony import */ var _widgets_react_material_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82792);
/* harmony import */ var _widgets_react_material_chip_chip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60468);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(59718);






class LinkedBoxesInput extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  state = {
    query: '',
    boxes: [],
    isRequestPending: false
  };
  _dropdownRef = null;
  _dropdown = _ref => {
    let {
      reposition
    } = _ref;
    const {
      query
    } = this.state;
    const {
      options
    } = this.props;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_widgets_react_material_menu__WEBPACK_IMPORTED_MODULE_3__/* .AutocompleteDropdown */ .Y9, {
      ref: ref => this._dropdownRef = ref,
      query: query,
      reposition: reposition,
      lists: [{
        list: options
      }],
      getKey: value => value.key,
      menuItemProps: {
        autoHeight: true
      },
      Component: _ref2 => {
        let {
          value
        } = _ref2;
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(BoxListing, {
          box: value
          // tracking={{view: this.props.view, usage: 'linkedBoxTextAdder'}}
        });
      },
      onItemChosen: item => {
        this.props.onValueChange(this.props.value.concat([item]));
        this.props.onCommit();
        this.setState({
          query: ''
        });
      }
    });
  };
  render() {
    const {
      value,
      onValueChange,
      onQueryChange,
      onCommit,
      options
    } = this.props;
    const {
      query,
      isRequestPending
    } = this.state;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_widgets_react_material_textField_textFieldWithChipsAndDropdown__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      value: query,
      showSpinnerOnRequestPending: true,
      chipValue: value,
      ChipComponent: BoxChip,
      onChipValueChange: value => {
        onValueChange(value);
        onCommit();
      },
      shouldShowDropdown: () => options.length > 0,
      dropdown: this._dropdown,
      isRequestPending: isRequestPending,
      onKeyDown: e => this._handleKeyDown(e),
      onValueChange: query => {
        onQueryChange(query);
        this.setState({
          query
        });
      },
      onBlur: () => {
        onCommit();
      },
      noTopPadding: true,
      fullWidth: true
    });
  }
  _handleKeyDown(e) {
    const dropdownRef = this._dropdownRef;
    if (dropdownRef && jwerty_globals_fixed__WEBPACK_IMPORTED_MODULE_1__.jwerty.is('tab/shift+tab/', e)) {
      const highlightedBoxKey = dropdownRef.getHighlightedKey();
      if (highlightedBoxKey) {
        const box = this.props.options.find(option => option.key === highlightedBoxKey);
        if (box && (dropdownRef.getDidKeyboardHighlight() || dropdownRef.getDidAutoHighlight())) {
          this.props.onValueChange(this.props.value.concat(box));
          this.props.onCommit();
          this.setState({
            query: ''
          });
          e.preventDefault();
          e.stopPropagation();
          return;
        }
      }
    }
    if (this.props.onKeyDown) {
      this.props.onKeyDown(e);
    }
  }
}
class BoxChip extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    const {
      value,
      ...chipProps
    } = this.props;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_widgets_react_material_chip_chip__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
      value: value.name,
      ...chipProps
    });
  }
}
function BoxListing(_ref3) {
  let {
    box
  } = _ref3;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    children: [" ", box.name]
  });
}

/***/ }),

/***/ 5735:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ AddFieldButton)
});

// EXTERNAL MODULE: ./.yarn/cache/react-npm-18.3.1-af38f3c1ae-261137d3f3.zip/node_modules/react/index.js
var react = __webpack_require__(44345);
// EXTERNAL MODULE: ./extensions/common/js/widgets/react/material/menu/index.ts + 6 modules
var menu = __webpack_require__(82792);
// EXTERNAL MODULE: ./extensions/common/js/redux/hooks.ts
var hooks = __webpack_require__(3572);
// EXTERNAL MODULE: ./extensions/common/js/modules/setupModal/presentation/customColumnsList.tsx
var customColumnsList = __webpack_require__(99570);
// EXTERNAL MODULE: ./extensions/common/js/modules/setupModal/presentation/magicColumnsList.tsx + 1 modules
var magicColumnsList = __webpack_require__(75229);
// EXTERNAL MODULE: ./extensions/common/js/services/locale/locale.ts + 37 modules
var locale = __webpack_require__(35091);
// EXTERNAL MODULE: ./.yarn/__virtual__/styled-jsx-virtual-9c4bfc1357/0/cache/styled-jsx-npm-5.0.2-aff4f13ebf-96b4507d41.zip/node_modules/styled-jsx/style.js
var style = __webpack_require__(81518);
var style_default = /*#__PURE__*/__webpack_require__.n(style);
// EXTERNAL MODULE: ./extensions/common/js/components/Icon/Icon.tsx + 1 modules
var Icon = __webpack_require__(71174);
// EXTERNAL MODULE: ./extensions/common/js/components/Layout/Layout.tsx
var Layout = __webpack_require__(54165);
// EXTERNAL MODULE: ./.yarn/cache/react-npm-18.3.1-af38f3c1ae-261137d3f3.zip/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(59718);
;// CONCATENATED MODULE: ./extensions/common/js/modules/streakSidebar/presentation/rowAddButton.tsx






// The onKeypress and onMouseDown props are here to let RowAddButton play
// nicely with react-menu-list's MenuButton component

function RowAddButton(_ref, fwdRef) {
  let {
    onClick,
    onKeyPress,
    onMouseDown,
    text
  } = _ref;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    onClick: onClick,
    onKeyPress: onKeyPress,
    onMouseDown: onMouseDown,
    ref: fwdRef,
    className: "jsx-1674469153" + " " + "streak__row-add-button",
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Layout/* Row */.X2, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Layout/* Column */.sg, {
        alignment: "start",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Icon/* default */.Z, {
          name: "add",
          variant: "inline"
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Layout/* Column */.sg, {
        className: "streak__row-add-button-text",
        alignment: "center",
        children: text
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)((style_default()), {
      id: "1674469153",
      children: [".streak__row-add-button.jsx-1674469153{color:var(--streak-app-primary);cursor:pointer;font-family:Google Sans;font-size:var(--streak-text-size-14);font-weight:500;-webkit-letter-spacing:0.25px;-moz-letter-spacing:0.25px;-ms-letter-spacing:0.25px;letter-spacing:0.25px;margin:var(--sidebar-section-row-margin);min-height:32px;padding:0 12px;}", ".streak__row-add-button.jsx-1674469153:hover,.streak__row-add-button.jsx-1674469153:focus{background-color:var(--streak-app-primary-hover);border-style:none;border-radius:16px;cursor:pointer;outline-style:none;}", ".streak__row-add-button-text{text-transform:lowercase;}", ".streak__row-add-button-text::first-letter{text-transform:uppercase;}"]
    })]
  });
}
/* harmony default export */ const rowAddButton = (/*#__PURE__*/(0,react.forwardRef)(RowAddButton));
;// CONCATENATED MODULE: ./extensions/common/js/modules/streakSidebar/presentation/addFieldButton.tsx








function AddFieldButton(props) {
  const {
    pipelineId,
    track
  } = props;
  const dispatch = (0,hooks/* useDispatch */.I0)();
  const _track = (0,react.useCallback)(function (eventName) {
    let extraProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return track('addFieldButton.' + eventName, extraProps);
  }, [track]);
  const button = (0,react.useCallback)(_ref => {
    let {
      domRef,
      ...otherProps
    } = _ref;
    return /*#__PURE__*/(0,jsx_runtime.jsx)(rowAddButton, {
      ref: domRef,
      text: locale/* default */.Z.getString('add_field'),
      ...otherProps
    });
  }, []);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(menu/* MenuButton */.j2, {
    ButtonComponent: button,
    menu: /*#__PURE__*/(0,jsx_runtime.jsx)(menu/* Dropdown */.Lt, {
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(menu/* MenuList */.qy, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(customColumnsList/* default */.Z, {
          onItemChosen: async columnTypeDefinition => {
            dispatch({
              columnTypeDefinition,
              markAsNew: false,
              pipelineId: pipelineId,
              showColumnNameModal: true,
              type: 'PIPELINE/ADD_CUSTOM_COLUMN'
            });
          },
          track: _track
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("hr", {}), /*#__PURE__*/(0,jsx_runtime.jsx)(magicColumnsList/* default */.Z, {
          onItemChosen: systemColumnDefinition => {
            dispatch({
              systemColumnDefinition,
              pipelineId: pipelineId,
              type: 'PIPELINE/ADD_MAGIC_COLUMN'
            });
          },
          track: _track
        })]
      })
    })
  });
}

/***/ }),

/***/ 40478:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ BoxDetailsCount)
/* harmony export */ });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81518);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(14559);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(93733);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47587);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Icon_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71174);
/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54165);
/* harmony import */ var _widgets_react_material_tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60303);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(35091);
/* harmony import */ var _presentation_ClickableCountRow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(71725);
/* harmony import */ var _lib_streakTimelineMoment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(48726);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(59718);










function BoxDetailsCount(_ref) {
  let {
    tasksCount,
    linkedBoxesCount,
    tasksMostDueDate,
    onLinkedBoxesClick,
    onTasksClick
  } = _ref;
  const {
    anchorProps,
    showTooltip
  } = (0,_widgets_react_material_tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_4__/* .useTooltip */ .l)();
  const isTaskOverdue = tasksMostDueDate != null && tasksMostDueDate < Date.now();
  const isTaskDueAfterToday = tasksMostDueDate != null && tasksMostDueDate > date_fns__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z().valueOf();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
    className: "jsx-1403388264" + " " + "streak__box-details-count",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_presentation_ClickableCountRow__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      count: tasksCount,
      label: _services_locale_locale__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.getString('tasks'),
      onClick: onTasksClick,
      children: tasksMostDueDate && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_widgets_react_material_tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        tooltip: showTooltip ? _services_locale_locale__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.getString(isTaskOverdue ? 'tasks_box_overdue' : 'tasks_box_due') + ': ' + date_fns__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z(tasksMostDueDate, 'PP h:mm a') : null,
        anchor: anchorRef => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
          ref: anchorRef,
          ...anchorProps,
          className: "jsx-1403388264" + " " + (anchorProps && anchorProps.className != null && anchorProps.className || ""),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_3__/* .Column */ .sg, {
            alignment: "end",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("span", {
              className: "jsx-1403388264" + " " + (classnames__WEBPACK_IMPORTED_MODULE_1___default()('streak__due-date', {
                'is-past': isTaskOverdue,
                'is-future': isTaskDueAfterToday
              }) || ""),
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                accent: "inherit",
                name: "access_time",
                size: "s",
                variant: "outline"
              }), "\xA0", (0,_lib_streakTimelineMoment__WEBPACK_IMPORTED_MODULE_7__/* .streakTimelineMoment */ .iw)(tasksMostDueDate, true)]
            })
          })
        })
      })
    }), linkedBoxesCount > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_presentation_ClickableCountRow__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      count: linkedBoxesCount,
      label: _services_locale_locale__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.getString('related_pipeline_items'),
      onClick: onLinkedBoxesClick
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "1403388264",
      children: [".streak__box-details-count.jsx-1403388264{font-family:var(--google-font-family);font-size:var(--streak-text-size-14);font-weight:500;-webkit-letter-spacing:0.25px;-moz-letter-spacing:0.25px;-ms-letter-spacing:0.25px;letter-spacing:0.25px;}", ".streak__due-date.jsx-1403388264{color:var(--streak-color-gradient-flat);display:contents;}", ".streak__due-date.is-past.jsx-1403388264{color:var(--streak-warning-text);}", ".streak__due-date.is-future.jsx-1403388264{color:var(--streak-app-primary);}"]
    })]
  });
}

/***/ }),

/***/ 84748:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81518);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44345);
/* harmony import */ var _components_PipelineHeader_PipelineHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71162);
/* harmony import */ var _containers_StageSelectButtonContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25674);
/* harmony import */ var _containers_BoxNameInputContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4126);
/* harmony import */ var _containers_BoxDetailsViewLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(35493);
/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3572);
/* harmony import */ var _containers_BoxAssignedToInputContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(70870);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_containers_BoxAssignedToInputContainer__WEBPACK_IMPORTED_MODULE_6__]);
_containers_BoxAssignedToInputContainer__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









function BoxDetailsOverview(props) {
  const {
    boxId,
    track
  } = props;
  const pipeline = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_8__/* .useSelector */ .v9)(state => {
    const box = state.models.boxes[boxId];
    if (!box) {
      return null;
    }
    return state.models.pipelines[box.pipelineId];
  });
  const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_8__/* .useDispatch */ .I0)();
  if (!pipeline) {
    return null;
  }
  const {
    name: pipelineName
  } = pipeline;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
    className: "jsx-2248496803",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "2248496803",
      children: [".streak__sidebar_boxView_overview_name_wrapper{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;margin-bottom:8px;}", ".streak__sidebar_boxView_overview_link{margin-left:4px;margin-right:-7px;}", ".streak__sidebar_boxView_overview_name{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1;margin-left:-8px;}", ".streak__sidebar_boxView_overview_stage_container{border-radius:4px;margin:0 -8px 8px -8px;}", ".streak__sidebar_boxView_overview_stage{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0 8px;width:100%;border-radius:4px;height:32px;font-size:16px;cursor:pointer;border:none;box-sizing:border-box;}", ".streak__sidebar_boxView_overview_stage:focus{outline:none;}", ".streak__sidebar_boxView_overview_stage_icon_container{margin-left:auto;margin-right:8px;height:24px;}", ".streak__sidebar_boxView_overview_stage_menu{width:284px;}", ".streak__sidebar_boxView_overview_stage_menu_item{padding:0;}", ".streak__sidebar_boxView_overview_stage_name{font-size:var(--streak-text-size-14);margin-left:12px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}", ".streak__box_assignedTo_dropdown_icon{line-height:32px;margin-right:4px;}"]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_PipelineHeader_PipelineHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      icon: pipeline.icon,
      name: pipelineName,
      onClick: () => {
        dispatch({
          type: 'BOX_PIPELINE_CLICK',
          boxId
        });
        track('goToPipeline');
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: "jsx-2248496803" + " " + "streak__sidebar_boxView_overview_name_wrapper",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_containers_BoxNameInputContainer__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        className: "streak__sidebar_boxView_overview_name",
        boxId: boxId,
        onBoxNameChange: newName => {
          dispatch({
            type: 'UPDATE_BOX',
            columnKey: 'property|name',
            value: newName,
            boxId
          });
          track('rename');
        },
        onNameFocused: () => {
          dispatch({
            type: 'BOX_NAME_FOCUSED',
            boxId
          });
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_containers_BoxDetailsViewLink__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        className: "streak__sidebar_boxView_overview_link",
        track: track,
        boxId: boxId
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_containers_StageSelectButtonContainer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
      className: "streak__sidebar_boxView_overview_stage_container",
      boxId: boxId,
      onStageChange: newStageKey => {
        dispatch({
          type: 'UPDATE_BOX',
          columnKey: 'property|stageKey',
          value: newStageKey,
          boxId
        });
        track('changeStage');
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_containers_BoxAssignedToInputContainer__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      boxId: boxId,
      track: track
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.memo(BoxDetailsOverview, (prevProps, nextProps) => prevProps.boxId === nextProps.boxId));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 83369:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81518);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44345);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47587);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_utils_isCursorAtEnd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80793);
/* harmony import */ var _lib_utils_isCursorAtStart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9857);
/* harmony import */ var _lib_utils_setCursorToEnd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(87633);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(59718);








function RaisedMultilineTextfield(props, ref) {
  const {
    disabled,
    size = 13,
    value,
    onValueChange,
    placeholder
  } = props;
  const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const resizeHeight = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    if (inputRef.current && inputRef.current.style) {
      // Set overflow to 'hidden', otherwise the scrollbar takes some width
      // which could cause a line to wrap and change the height.
      inputRef.current.style.overflow = 'hidden';
      inputRef.current.style.height = 'auto';
      inputRef.current.style.height = Math.min(props.maxHeight || Infinity, inputRef.current.scrollHeight) + 'px';
      inputRef.current.style.overflow = '';
    }
  }, [inputRef, props.maxHeight]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle)(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
    blur: () => {
      inputRef.current.blur();
    },
    select: () => {
      inputRef.current.select();
    },
    hasFocus: () => {
      return document.activeElement === inputRef.current;
    },
    isCursorAtEnd: () => {
      (0,_lib_utils_isCursorAtEnd__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(inputRef.current);
    },
    isCursorAtStart: () => {
      (0,_lib_utils_isCursorAtStart__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(inputRef.current);
    },
    selectAll: () => {
      inputRef.current.select();
    },
    setCursorToEnd: () => {
      (0,_lib_utils_setCursorToEnd__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(inputRef.current);
    },
    recalculateHeight: () => {
      resizeHeight();
    }
  }));
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)(() => {
    // https://stackoverflow.com/questions/454202/creating-a-textarea-with-auto-resize#answer-25621277
    resizeHeight();
  }, [value, resizeHeight]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "3917268869",
      children: [".raisedMultilineTextfield.jsx-3917268869{border-radius:4px;border-style:none;box-sizing:border-box;caret-color:var(--streak-app-primary);color:var(--streak-black-primary);font-family:Product Sans;min-height:32px;outline:none;padding:10px 8px 8px;position:relative;resize:none;text-overflow:ellipsis;white-space:pre-wrap;width:100%;}", ".raisedMultilineTextfield.jsx-3917268869::-webkit-input-placeholder{color:var(--gmail-input-placeholder);}", ".raisedMultilineTextfield.jsx-3917268869::-moz-placeholder{color:var(--gmail-input-placeholder);}", ".raisedMultilineTextfield.jsx-3917268869:-ms-input-placeholder{color:var(--gmail-input-placeholder);}", ".raisedMultilineTextfield.jsx-3917268869::placeholder{color:var(--gmail-input-placeholder);}", ".raisedMultilineTextfield.jsx-3917268869:focus.jsx-3917268869::-webkit-input-placeholder{color:transparent;}", ".raisedMultilineTextfield.jsx-3917268869:focus.jsx-3917268869::-moz-placeholder{color:transparent;}", ".raisedMultilineTextfield.jsx-3917268869:focus.jsx-3917268869:-ms-input-placeholder{color:transparent;}", ".raisedMultilineTextfield.jsx-3917268869:focus.jsx-3917268869::placeholder{color:transparent;}", ".raisedMultilineTextfield--11.jsx-3917268869{font-size:11px;line-height:11px;}", ".raisedMultilineTextfield--13.jsx-3917268869{font-size:13px;line-height:13px;}", ".raisedMultilineTextfield--20.jsx-3917268869{font-size:20px;font-weight:bold;line-height:24px;padding:4px 8px;}", ".raisedMultilineTextfield.jsx-3917268869:not(:disabled):hover{background-color:var(--streak-black-hover);}", ".raisedMultilineTextfield.jsx-3917268869:not(:disabled):focus:hover{background-color:#ffffff;}", ".raisedMultilineTextfield.jsx-3917268869:focus{background-color:#ffffff;box-shadow: 0 8px 10px 1px var(--streak-black-hover), 0 3px 14px 2px var(--streak-black-hover), 0 5px 5px -3px var(--streak-black-shadow);border-radius:4px;z-index:2;}"]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("textarea", {
      disabled: disabled,
      onBlur: () => {
        props.onCommit();
        if (props.onBlur) {
          props.onBlur();
        }
      },
      onChange: e => onValueChange(e.target.value),
      onFocus: () => {
        if (props.onFocus) {
          props.onFocus();
        }
      },
      onKeyDown: event => {
        if (event.key === 'Enter') {
          event.preventDefault();
          event.stopPropagation();
          inputRef.current && inputRef.current.blur();
        }
      },
      placeholder: placeholder,
      ref: ref => {
        inputRef.current = ref;
        if (props.domRef) {
          if (typeof props.domRef === 'function') {
            props.domRef(ref);
          } else {
            props.domRef.current = ref;
          }
        }
      },
      rows: 1,
      value: value,
      className: "jsx-3917268869" + " " + (classnames__WEBPACK_IMPORTED_MODULE_2___default()('raisedMultilineTextfield streak__transition-background-color', {
        'raisedMultilineTextfield--11': size === 11,
        'raisedMultilineTextfield--13': size === 13,
        'raisedMultilineTextfield--20': size === 20
      }) || "")
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(RaisedMultilineTextfield));

/***/ }),

/***/ 74826:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ SidebarFabButton)
/* harmony export */ });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81518);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54165);
/* harmony import */ var _components_Icon_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71174);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35091);
/* harmony import */ var _widgets_react_material_button_fabButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(42693);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(59718);






const sidebarFabItems = [{
  dispatchAction: 'GO_TO_LINKEDBOX_ADDER_INPUT',
  name: 'compare_arrows',
  translationKey: 'system_sub_menu_related_items'
}, {
  dispatchAction: 'GO_TO_BOX_CONTACT_ADDER',
  name: 'account_circle',
  translationKey: 'contact'
}, {
  dispatchAction: 'OPEN_BOX_FILE_ADDER',
  name: 'insert_drive_file',
  translationKey: 'file'
}, {
  dispatchAction: 'OPEN_NEW_MEETING_NOTES',
  name: 'assignment',
  translationKey: 'meeting_notes'
}, {
  dispatchAction: 'OPEN_NEW_CALL_LOG',
  name: 'phone',
  translationKey: 'call_log'
}, {
  dispatchAction: 'OPEN_BOX_TASKS',
  name: 'check_box',
  translationKey: 'task'
}];
function SidebarFabButton(_ref) {
  let {
    onFabClick,
    onFabItemClick,
    track
  } = _ref;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "jsx-2846263088" + " " + "streak__sidebar-fab-button",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_widgets_react_material_button_fabButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        hoverMaterialIconName: "comment",
        materialIconName: "add",
        onClick: () => {
          onFabClick();
          track('addBoxItem', {
            type: 'comment'
          });
        },
        children: [sidebarFabItems.map((_ref2, i) => {
          let {
            name,
            translationKey,
            dispatchAction
          } = _ref2;
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            onClick: () => {
              onFabItemClick(dispatchAction);
              track('addBoxItem', {
                type: translationKey
              });
            },
            className: "jsx-2846263088" + " " + "streak__sidebar-fab-item",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_1__/* .Row */ .X2, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_1__/* .Column */ .sg, {
                alignment: "end",
                className: "streak__sidebar-fab-item-label",
                children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.getString(translationKey)
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_1__/* .Column */ .sg, {
                alignment: "end",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                  className: "streak__sidebar-fab-item-icon",
                  isCircle: true,
                  isOutline: true,
                  name: name,
                  size: "m",
                  variant: "text"
                })
              })]
            })
          }, i);
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "jsx-2846263088" + " " + "streak__sidebar-fab-item-label",
          children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.getString('comment')
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "jsx-2846263088" + " " + "streak__sidebar-fab-button-background"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "2846263088",
      children: [".streak__sidebar-fab-button.jsx-2846263088{bottom:10px;color:var(--streak-app-primary);font-family:var(--google-font-family);font-weight:500;-webkit-letter-spacing:0.25px;-moz-letter-spacing:0.25px;-ms-letter-spacing:0.25px;letter-spacing:0.25px;position:absolute;right:10px;z-index:1000;}", ".streak__sidebar-fab-button.jsx-2846263088:hover+.streak__sidebar-fab-button-background.jsx-2846263088{opacity:0.95;-webkit-transition:opacity 0.25s ease-out;transition:opacity 0.25s ease-out;}", ".streak__sidebar-fab-button-background.jsx-2846263088{background-color:white;bottom:0;left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;-webkit-transition:opacity 0.35s ease-out;transition:opacity 0.35s ease-out;z-index:999;}", ".streak__sidebar-fab-item.jsx-2846263088{display:contents;cursor:pointer;}", ".streak__sidebar-fab-button.jsx-2846263088 .mdl-button--fab{background-color:var(--streak-app-primary);color:white;}", ".streak__sidebar-fab-button.jsx-2846263088 .mdl-hover-menu-item-container{-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;}", ".streak__sidebar-fab-button.jsx-2846263088 .mdl-hover-menu-item{font-size:var(--streak-text-size-14);font-weight:bold;-webkit-letter-spacing:0.2px;-moz-letter-spacing:0.2px;-ms-letter-spacing:0.2px;letter-spacing:0.2px;padding:8px 16px 8px 0px;}", ".streak__sidebar-fab-button.jsx-2846263088 .mdl-hover-menu-item:last-child{padding-bottom:4px;}", ".streak__sidebar-fab-button.jsx-2846263088 .streak__sidebar-fab-item-icon::before{background-color:white;box-shadow: 0 0 4px rgba(0,0,0,0.14), 0 4px 8px rgba(0,0,0,0.28);}", ".streak__sidebar-fab-button.jsx-2846263088 .streak__sidebar-fab-item-icon.streak__icon--is-circle::before{bottom:-0.35em;height:1.7em;left:-0.35em;right:-0.35em;top:-0.35em;width:1.7em;}", ".streak__sidebar-fab-button.jsx-2846263088 .streak__sidebar-fab-item-label{padding-right:24px;}", ".streak__sidebar-fab-button.jsx-2846263088 .streak__sidebar-fab-item-label:last-child{bottom:-36px;left:-124px;position:absolute;}", ".streak__sidebar-fab-button.jsx-2846263088 .mdl-button--fab .mdl-icon:last-child{height:32px;width:32px;}"]
    })]
  });
}

/***/ }),

/***/ 99723:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ FormulaDisplayWrapper),
/* harmony export */   Z: () => (/* binding */ getColumnDisplayForType)
/* harmony export */ });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81518);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47587);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17013);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3572);
/* harmony import */ var _selectors_getColumnGroupNameForType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24985);
/* harmony import */ var _selectors_getColumnValue__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(10500);
/* harmony import */ var _selectors_columnValues__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(98205);
/* harmony import */ var _components_Icon_Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71174);
/* harmony import */ var _core_models_pipeline_columns_columnTypes_formatters_percentFormatter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(43200);
/* harmony import */ var _core_models_pipeline_columns_columnTypes_helpers_touchPointValueToDisplay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(15028);
/* harmony import */ var _core_models_pipeline_columns_columnTypes_helpers_getFormulaValueText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(98548);
/* harmony import */ var _modules_meetings_meetingDurationText__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(88952);
/* harmony import */ var _core_models_pipeline_columns_columnTypes_formatters_dateFormatter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(33173);
/* harmony import */ var _columnType__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(96834);
/* harmony import */ var _modules_streakSidebar_presentation_RaisedRichTextArea__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(56139);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(59718);
















function getColumnDisplayForType(columnType) {
  switch (columnType) {
    case 'DATE':
      {
        return _ref => {
          let {
            boxId,
            columnKey,
            track
          } = _ref;
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(DateDisplayWrapper, {
            boxId: boxId,
            columnKey: columnKey,
            track: track
          });
        };
      }
    case 'BASIC_TEXT':
      {
        return _ref2 => {
          let {
            boxId,
            columnKey,
            track
          } = _ref2;
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(TextDisplayWrapper, {
            boxId: boxId,
            columnKey: columnKey,
            columnType: columnType,
            track: track
          });
        };
      }
    case 'DURATION':
      {
        return _ref3 => {
          let {
            boxId,
            columnKey,
            track
          } = _ref3;
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(TextDisplayWrapper, {
            boxId: boxId,
            columnKey: columnKey,
            columnType: columnType,
            track: track,
            valueToDisplay: v => !v ? '' : (0,_modules_meetings_meetingDurationText__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(v)
          });
        };
      }
    case 'EMAIL_ADDRESSES':
      {
        return _ref4 => {
          let {
            boxId,
            columnKey,
            track
          } = _ref4;
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(TextDisplayWrapper, {
            boxId: boxId,
            columnKey: columnKey,
            columnType: columnType,
            track: track,
            valueToDisplay: v => !v ? '' : v.map(lodash__WEBPACK_IMPORTED_MODULE_2__.escape).join(', ')
          });
        };
      }
    case 'FORMULA':
      {
        return _ref5 => {
          let {
            boxId,
            columnKey,
            track
          } = _ref5;
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(FormulaDisplayWrapper, {
            boxId: boxId,
            columnKey: columnKey,
            track: track
          });
        };
      }
    case 'FRESHNESS':
      {
        return _ref6 => {
          let {
            boxId,
            columnKey,
            track
          } = _ref6;
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(FreshnessDisplayWrapper, {
            boxId: boxId,
            columnKey: columnKey,
            track: track
          });
        };
      }
    case 'NUMBER':
      {
        return _ref7 => {
          let {
            boxId,
            columnKey,
            track
          } = _ref7;
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(TextDisplayWrapper, {
            boxId: boxId,
            columnType: columnType,
            columnKey: columnKey,
            track: track,
            valueToDisplay: v => !v ? '0' : String(v)
          });
        };
      }
    case 'PERCENT':
      {
        return _ref8 => {
          let {
            boxId,
            columnKey,
            track
          } = _ref8;
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(TextDisplayWrapper, {
            boxId: boxId,
            columnKey: columnKey,
            columnType: columnType,
            track: track,
            valueToDisplay: v => !v ? '' : _core_models_pipeline_columns_columnTypes_formatters_percentFormatter__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.getTextValue(v, {
              type: 'PERCENT',
              numberOfDecimals: 4
            })
          });
        };
      }
    case 'PERSON':
      {
        return _ref9 => {
          let {
            boxId,
            columnKey,
            track
          } = _ref9;
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(PeopleDisplayWrapper, {
            boxId: boxId,
            columnType: _columnType__WEBPACK_IMPORTED_MODULE_10__/* .ColumnType */ .Q.PERSON,
            columnKey: columnKey,
            track: track
          });
        };
      }
    case 'SINGLE_PERSON':
      {
        return _ref10 => {
          let {
            boxId,
            columnKey,
            track
          } = _ref10;
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(PeopleDisplayWrapper, {
            boxId: boxId,
            columnType: _columnType__WEBPACK_IMPORTED_MODULE_10__/* .ColumnType */ .Q.SINGLE_PERSON,
            columnKey: columnKey,
            track: track
          });
        };
      }
    case 'SUMMARY_COUNT':
      {
        return _ref11 => {
          let {
            boxId,
            columnKey,
            track
          } = _ref11;
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(SummaryDisplayWrapper, {
            boxId: boxId,
            columnKey: columnKey,
            track: track
          });
        };
      }
    case 'TOUCHPOINT_TYPE':
      {
        return _ref12 => {
          let {
            boxId,
            columnKey,
            track
          } = _ref12;
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(TextDisplayWrapper, {
            boxId: boxId,
            columnKey: columnKey,
            columnType: columnType,
            track: track,
            valueToDisplay: v => (0,_core_models_pipeline_columns_columnTypes_helpers_touchPointValueToDisplay__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(v)
          });
        };
      }
    default:
      {
        return () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
          children: " no display component found"
        });
      }
  }
}
function SummaryDisplayWrapper(_ref13) {
  let {
    boxId
  } = _ref13;
  const callLogsCount = (0,_hooks__WEBPACK_IMPORTED_MODULE_13__/* .useSelector */ .v9)(state => state.models.boxes[boxId].callLogs);
  const commentsCount = (0,_hooks__WEBPACK_IMPORTED_MODULE_13__/* .useSelector */ .v9)(state => state.models.boxes[boxId].comments);
  const filesCount = (0,_hooks__WEBPACK_IMPORTED_MODULE_13__/* .useSelector */ .v9)(state => state.models.boxes[boxId].files);
  const gmailThreadsCount = (0,_hooks__WEBPACK_IMPORTED_MODULE_13__/* .useSelector */ .v9)(state => state.models.boxes[boxId].gmailThreads);
  const meetingNotesCount = (0,_hooks__WEBPACK_IMPORTED_MODULE_13__/* .useSelector */ .v9)(state => state.models.boxes[boxId].meetingNotes);
  const tasksCount = (0,_hooks__WEBPACK_IMPORTED_MODULE_13__/* .useSelector */ .v9)(state => state.models.boxes[boxId].tasks);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
    className: "jsx-1770800839" + " " + "streak__sidebarBoxField_summaryType",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
      className: "jsx-1770800839",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
        className: "jsx-1770800839" + " " + "boxSummary_type",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span", {
          className: "jsx-1770800839" + " " + "boxSummaryIcon boxSummaryEmail"
        }), gmailThreadsCount]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
        className: "jsx-1770800839" + " " + "boxSummary_type",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span", {
          className: "jsx-1770800839" + " " + "boxSummaryIcon boxSummaryFile"
        }), filesCount]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
        className: "jsx-1770800839" + " " + "boxSummary_type",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span", {
          className: "jsx-1770800839" + " " + "boxSummaryIcon boxSummaryComment"
        }), commentsCount]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
      className: "jsx-1770800839",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
        className: "jsx-1770800839" + " " + "boxSummary_type",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span", {
          className: "jsx-1770800839" + " " + "boxSummaryIcon boxSummaryTask"
        }), tasksCount]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
        className: "jsx-1770800839" + " " + "boxSummary_type",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span", {
          className: "jsx-1770800839" + " " + "boxSummaryIcon boxSummaryCall"
        }), callLogsCount]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
        className: "jsx-1770800839" + " " + "boxSummary_type",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span", {
          className: "jsx-1770800839" + " " + "boxSummaryIcon boxSummaryMeeting"
        }), meetingNotesCount]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "1770800839",
      children: [".streak__sidebarBoxField_summaryType.jsx-1770800839{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-left:5px;}", ".boxSummary_type.jsx-1770800839{display:inline-block;min-width:30px;}"]
    })]
  });
}
function FreshnessDisplayWrapper(_ref14) {
  let {
    boxId,
    columnKey
  } = _ref14;
  const value = (0,_hooks__WEBPACK_IMPORTED_MODULE_13__/* .useSelector */ .v9)(state => (0,_selectors_columnValues__WEBPACK_IMPORTED_MODULE_14__/* .getFreshnessColumnValue */ .YF)(state, boxId, columnKey));
  // The raw value is a decimal between 0 and 1. Map it to an integer between 0 and 5.
  const freshnessValue = Math.round((value || 0) * 5);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
    className: "jsx-2037397285" + " " + "__streak__FreshnessIndicator",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span", {
      className: "jsx-2037397285" + " " + (classnames__WEBPACK_IMPORTED_MODULE_1___default()({
        __streak__FreshnessIndicatorFresh: freshnessValue > 0
      }) || "")
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span", {
      className: "jsx-2037397285" + " " + (classnames__WEBPACK_IMPORTED_MODULE_1___default()({
        __streak__FreshnessIndicatorFresh: freshnessValue > 1
      }) || "")
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span", {
      className: "jsx-2037397285" + " " + (classnames__WEBPACK_IMPORTED_MODULE_1___default()({
        __streak__FreshnessIndicatorFresh: freshnessValue > 2
      }) || "")
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span", {
      className: "jsx-2037397285" + " " + (classnames__WEBPACK_IMPORTED_MODULE_1___default()({
        __streak__FreshnessIndicatorFresh: freshnessValue > 3
      }) || "")
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span", {
      className: "jsx-2037397285" + " " + (classnames__WEBPACK_IMPORTED_MODULE_1___default()({
        __streak__FreshnessIndicatorFresh: freshnessValue > 4
      }) || "")
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "2037397285",
      children: [".__streak__FreshnessIndicator.jsx-2037397285{margin-left:8px;}"]
    })]
  });
}
function PeopleDisplayWrapper(_ref15) {
  let {
    boxId,
    columnKey,
    columnType
  } = _ref15;
  const people = (0,_hooks__WEBPACK_IMPORTED_MODULE_13__/* .useSelector */ .v9)(state => (0,_selectors_getColumnValue__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)(state, boxId, (0,_selectors_getColumnGroupNameForType__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(columnType), columnKey));
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
      className: "jsx-2231152266" + " " + "streak__sidebarBoxField_peopleType",
      children: (Array.isArray(people) ? people : [people]).map(person => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
        title: person.displayName,
        className: "jsx-2231152266" + " " + "streak__sidebarBoxField_person",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("img", {
          src: person.image,
          height: "18",
          width: "18",
          className: "jsx-2231152266"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span", {
          className: "jsx-2231152266",
          children: person.displayName
        })]
      }, person.userKey))
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
      accent: "muted",
      name: "magic",
      size: "s",
      variant: "text"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "2231152266",
      children: [".streak__sidebarBoxField_peopleType.jsx-2231152266{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;text-overflow:ellipsis;overflow:hidden;}", ".streak__sidebarBoxField_person.jsx-2231152266{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;white-space:nowrap;}", ".streak__sidebarBoxField_person.jsx-2231152266:not(:first-child){padding-top:6px;}", ".streak__sidebarBoxField_person.jsx-2231152266>img.jsx-2231152266{border-radius:50%;margin-right:4px;vertical-align:middle;}", ".streak__sidebarBoxField_person.jsx-2231152266>span.jsx-2231152266{overflow:hidden;text-overflow:ellipsis;}"]
    })]
  });
}
function TextDisplayWrapper(_ref16) {
  let {
    boxId,
    columnKey,
    columnType,
    iconName = 'magic',
    valueToDisplay
  } = _ref16;
  const value = (0,_hooks__WEBPACK_IMPORTED_MODULE_13__/* .useSelector */ .v9)(state => (0,_selectors_getColumnValue__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)(state, boxId, (0,_selectors_getColumnGroupNameForType__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(columnType), columnKey) || '');
  let display = value;
  if (valueToDisplay != null) display = valueToDisplay(value);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
      title: display,
      className: "jsx-2995316503" + " " + "streak__sidebarBoxField_input_basicText",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_modules_streakSidebar_presentation_RaisedRichTextArea__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
        disabled: true,
        onCancel: () => {},
        onCommit: () => {},
        value: display,
        onValueChange: () => {}
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
      accent: "muted",
      name: iconName,
      size: "s",
      variant: "text"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "2995316503",
      children: [".streak__sidebarBoxField_input_basicText.jsx-2995316503{color:var(--streak-black-disabled);-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;overflow:hidden;overflow-wrap:break-word;}", ".streak__sidebarBoxField_input_basicText.jsx-2995316503 .raisedRichTextArea{padding:0px;min-height:initial;}", ".streak__sidebarBoxField_input_basicText.jsx-2995316503:empty.jsx-2995316503::before{content:'\u2014';color:var(--gmail-input-placeholder);}"]
    })]
  });
}
function FormulaDisplayWrapper(_ref17) {
  let {
    boxId,
    columnKey,
    track
  } = _ref17;
  const formatOptions = (0,_hooks__WEBPACK_IMPORTED_MODULE_13__/* .useSelector */ .v9)(state => {
    const pipelineId = state.models.boxes[boxId].pipelineId;
    return state.models.pipelines[pipelineId].columns[columnKey].formatOptions;
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(TextDisplayWrapper, {
    boxId: boxId,
    columnKey: columnKey,
    columnType: _columnType__WEBPACK_IMPORTED_MODULE_10__/* .ColumnType */ .Q.FORMULA,
    iconName: "code",
    track: track,
    valueToDisplay: v => (0,_core_models_pipeline_columns_columnTypes_helpers_getFormulaValueText__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(v, formatOptions)
  });
}
function DateDisplayWrapper(_ref18) {
  let {
    boxId,
    columnKey,
    track
  } = _ref18;
  const formatOptions = (0,_hooks__WEBPACK_IMPORTED_MODULE_13__/* .useSelector */ .v9)(state => {
    const pipelineId = state.models.boxes[boxId].pipelineId;
    return state.models.pipelines[pipelineId].columns[columnKey].formatOptions;
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(TextDisplayWrapper, {
    boxId: boxId,
    columnKey: columnKey,
    columnType: _columnType__WEBPACK_IMPORTED_MODULE_10__/* .ColumnType */ .Q.DATE,
    track: track,
    valueToDisplay: v => _core_models_pipeline_columns_columnTypes_formatters_dateFormatter__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z.getTextValue(new Date(v), formatOptions)
  });
}

/***/ }),

/***/ 28354:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ getColumnInputForType)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44345);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17013);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var kefir__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98137);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(3572);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(21539);
/* harmony import */ var _services_data_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38672);
/* harmony import */ var _selectors_columnValues__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(98205);
/* harmony import */ var _widgets_react_material_boxSpecific_tagColumnInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(90099);
/* harmony import */ var _modules_streakSidebar_presentation_raisedTextfield__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(83932);
/* harmony import */ var _widgets_react_material_boxSpecific_dropdownColumnInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(35312);
/* harmony import */ var _widgets_react_material_boxSpecific_freeFormColumnInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(67211);
/* harmony import */ var _widgets_react_material_datePicker_textFieldAndDatePicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(53945);
/* harmony import */ var _widgets_react_material_toggle_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(39447);
/* harmony import */ var _widgets_react_CommitHandler__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(99174);
/* harmony import */ var _core_models_pipeline_columns_columnTypes_formatters_dateUtils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8707);
/* harmony import */ var _core_models_pipeline_columns_columnTypes_formatters_freeFormFormatter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(44135);
/* harmony import */ var _core_models_pipeline_columns_columnTypes_helpers_getMatchingTextValuesInBoxes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(88841);
/* harmony import */ var _modules_streakSidebar_presentation_LinkedBoxesInput__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(85993);
/* harmony import */ var _getColumnDisplayforType__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(99723);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(35091);
/* harmony import */ var _modules_streakSidebar_presentation_RaisedRichTextArea__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(56139);
/* harmony import */ var _columnType__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(96834);
/* harmony import */ var _lib_createDebouncedLogger__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(80752);
/* harmony import */ var _lib_utils_isNotNil__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(72086);
/* harmony import */ var _modules_boxCache_BoxCache__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(18123);
/* harmony import */ var _widgets_spreadsheet_columnHeader_columnFormatMenu__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(43964);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_data_data__WEBPACK_IMPORTED_MODULE_3__, _modules_boxCache_BoxCache__WEBPACK_IMPORTED_MODULE_20__]);
([_services_data_data__WEBPACK_IMPORTED_MODULE_3__, _modules_boxCache_BoxCache__WEBPACK_IMPORTED_MODULE_20__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



























const debouncedUnsupportedColumnTypeError = (0,_lib_createDebouncedLogger__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z)({
  err: new Error('Unsuppored column type'),
  level: 'error'
}, 1000 * 60);
function getColumnInputForType(columnType) {
  switch (columnType) {
    case _columnType__WEBPACK_IMPORTED_MODULE_18__/* .ColumnType */ .Q.NOTES:
      {
        return _ref => {
          let {
            boxId,
            columnKey,
            track
          } = _ref;
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(NotesInputWrapper, {
            boxId: boxId,
            columnKey: columnKey,
            track: track
          });
        };
      }
    case _columnType__WEBPACK_IMPORTED_MODULE_18__/* .ColumnType */ .Q.LINKED_BOXES:
      {
        return _ref2 => {
          let {
            boxId,
            columnKey,
            track
          } = _ref2;
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(LinkedBoxInputWrapper, {
            boxId: boxId,
            columnKey: columnKey,
            track: track
          });
        };
      }
    case _columnType__WEBPACK_IMPORTED_MODULE_18__/* .ColumnType */ .Q.TAG:
      {
        return _ref3 => {
          let {
            boxId,
            columnKey,
            track
          } = _ref3;
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(TagInputWrapper, {
            boxId: boxId,
            columnKey: columnKey,
            track: track
          });
        };
      }
    case _columnType__WEBPACK_IMPORTED_MODULE_18__/* .ColumnType */ .Q.CHECKBOX:
      {
        return _ref4 => {
          let {
            boxId,
            columnKey,
            track
          } = _ref4;
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(CheckboxInputWrapper, {
            boxId: boxId,
            columnKey: columnKey,
            track: track
          });
        };
      }
    case _columnType__WEBPACK_IMPORTED_MODULE_18__/* .ColumnType */ .Q.DROPDOWN:
      {
        return _ref5 => {
          let {
            boxId,
            columnKey,
            track
          } = _ref5;
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(DropdownInputWrapper, {
            boxId: boxId,
            columnKey: columnKey,
            track: track
          });
        };
      }
    case _columnType__WEBPACK_IMPORTED_MODULE_18__/* .ColumnType */ .Q.TEXT_INPUT:
      {
        return _ref6 => {
          let {
            boxId,
            columnKey,
            track
          } = _ref6;
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(FreeFormInputWrapper, {
            boxId: boxId,
            columnKey: columnKey,
            track: track
          });
        };
      }
    case _columnType__WEBPACK_IMPORTED_MODULE_18__/* .ColumnType */ .Q.DATE:
      {
        return _ref7 => {
          let {
            boxId,
            columnKey,
            track
          } = _ref7;
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(DateInputWrapper, {
            boxId: boxId,
            columnKey: columnKey,
            track: track
          });
        };
      }
    case _columnType__WEBPACK_IMPORTED_MODULE_18__/* .ColumnType */ .Q.FORMULA:
      {
        return _ref8 => {
          let {
            boxId,
            columnKey,
            track
          } = _ref8;
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_getColumnDisplayforType__WEBPACK_IMPORTED_MODULE_15__/* .FormulaDisplayWrapper */ .M, {
            boxId: boxId,
            columnKey: columnKey,
            track: track
          });
        };
      }
    case _columnType__WEBPACK_IMPORTED_MODULE_18__/* .ColumnType */ .Q.PERSON:
      {
        return () => {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("div", {
            children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z.getString('person_column_deprecation')
          });
        };
      }
    default:
      {
        debouncedUnsupportedColumnTypeError({
          columnType
        });
        return () => {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("div", {
            children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z.getString('unsupported_column_type')
          });
        };
      }
  }
}
function LinkedBoxInputWrapper(_ref9) {
  let {
    boxId,
    columnKey
  } = _ref9;
  const {
    suggestions,
    isLoading
  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_23__/* .useSelector */ .v9)(state => {
    //TODO: Util function for generating this key?
    const key = `linkedBoxesQuery_${boxId}_${columnKey}`;
    const data = state.ui.linkedBoxesQueries[key] || {
      results: [],
      isLoading: false
    };
    return {
      suggestions: data.results,
      isLoading: data.isLoading
    };
  });
  const linkedBoxes = (0,_hooks__WEBPACK_IMPORTED_MODULE_23__/* .useSelector */ .v9)(state => {
    const linkedBoxesKeys = (0,_selectors_columnValues__WEBPACK_IMPORTED_MODULE_24__/* .getLinkedBoxesColumnValue */ .gF)(state, boxId, columnKey);
    if (!linkedBoxesKeys) {
      return;
    }
    return linkedBoxesKeys.map(key => state.models.boxes[state.modelMaps.boxIdsByKey[key]]).filter(_lib_utils_isNotNil__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z).filter(boxState => !!boxState.key);
  });
  const dispatch = (0,_hooks__WEBPACK_IMPORTED_MODULE_23__/* .useDispatch */ .I0)();
  if (!linkedBoxes) {
    return null;
  }
  const input = props => {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_modules_streakSidebar_presentation_LinkedBoxesInput__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
      ...props,
      options: suggestions,
      onQueryChange: (0,lodash__WEBPACK_IMPORTED_MODULE_1__.debounce)(query => {
        dispatch({
          type: 'LINKED_BOXES_QUERY_CHANGE',
          query,
          columnKey,
          boxId
        });
      }, 250),
      isRequestPending: isLoading
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_widgets_react_CommitHandler__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
    onCommit: value => {
      //dispatch action to update
      dispatch({
        type: 'LINKED_BOX_COLUMN_UPDATE',
        value: value.map(box => box.key),
        boxId,
        columnKey
      });
    }
    // TS isn't picking up the filter on boxKeys in the above useSelector
    ,
    value: linkedBoxes,
    input: input
  });
}
function FreeFormInputWrapper(_ref10) {
  let {
    boxId,
    columnKey,
    track
  } = _ref10;
  const value = (0,_hooks__WEBPACK_IMPORTED_MODULE_23__/* .useSelector */ .v9)(state => (0,_selectors_columnValues__WEBPACK_IMPORTED_MODULE_24__/* .getFreeFormColumnValue */ .Wb)(state, boxId, columnKey) || '');
  const {
    formatOptions,
    name,
    type
  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_23__/* .useSelector */ .v9)(state => {
    const pipelineId = state.models.boxes[boxId].pipelineId;
    return state.models.pipelines[pipelineId].columns[columnKey];
  });
  const dispatch = (0,_hooks__WEBPACK_IMPORTED_MODULE_23__/* .useDispatch */ .I0)();
  const input = props => {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_widgets_react_material_boxSpecific_freeFormColumnInput__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
      ...props,
      InputComponent: _modules_streakSidebar_presentation_RaisedRichTextArea__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z,
      placeholder: "\u2014",
      noTopPadding: true,
      fullWidth: true,
      format: v => {
        return formatOptions !== null ? _core_models_pipeline_columns_columnTypes_formatters_freeFormFormatter__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z.getTextValue(v, formatOptions) : v ? v : '';
      },
      getMatchingExistingValues: (query, stopper) => {
        // TODO: Make this redux powered. Relies on all boxes
        // for this pipeline loaded which Redux doesn't assume
        const boxModel = _modules_boxCache_BoxCache__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z.isBoxCacheExperimentEnabled() ? _modules_boxCache_BoxCache__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z.dangerouslyGetBoxById(boxId) : _services_data_data__WEBPACK_IMPORTED_MODULE_3__["default"].getBoxById(boxId);
        if (!boxModel) {
          return kefir__WEBPACK_IMPORTED_MODULE_2__["default"].never();
        }
        const column = boxModel.getPipeline().getColumnManager().getColumn(columnKey);
        if (!column) {
          return kefir__WEBPACK_IMPORTED_MODULE_2__["default"].never();
        }
        return (0,_core_models_pipeline_columns_columnTypes_helpers_getMatchingTextValuesInBoxes__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)(_modules_boxCache_BoxCache__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z.isBoxCacheExperimentEnabled() ? _modules_boxCache_BoxCache__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z.dangerouslyGetAllCachedBoxes() : _services_data_data__WEBPACK_IMPORTED_MODULE_3__["default"].getPipelineBoxes(boxModel.getPipelineKey()).slice(), box => {
          const value = column.getValue(box);
          if (value.toLowerCase().startsWith(query.toLowerCase())) return value;else return null;
        }, stopper);
      }
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_widgets_react_CommitHandler__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
    value: value,
    input: input,
    onCommit: input => {
      track('box.value.set', {
        columnName: name,
        view: 'sidebar',
        columnType: type
      });
      dispatch({
        type: 'UPDATE_BOX',
        boxId,
        columnKey,
        value: input
      });
    }
  });
}
function CheckboxInputWrapper(_ref11) {
  let {
    boxId,
    columnKey,
    track
  } = _ref11;
  const value = (0,_hooks__WEBPACK_IMPORTED_MODULE_23__/* .useSelector */ .v9)(state => (0,_selectors_columnValues__WEBPACK_IMPORTED_MODULE_24__/* .getCheckboxColumnValue */ .oj)(state, boxId, columnKey) || false);
  const {
    type,
    name
  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_23__/* .useSelector */ .v9)(state => {
    const pipelineId = state.models.boxes[boxId].pipelineId;
    return state.models.pipelines[pipelineId].columns[columnKey];
  });
  const dispatch = (0,_hooks__WEBPACK_IMPORTED_MODULE_23__/* .useDispatch */ .I0)();
  const checkBoxRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_widgets_react_CommitHandler__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
    value: value,
    input: props => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_widgets_react_material_toggle_checkbox__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
      ref: checkBoxRef,
      ...props
    }),
    onCommit: input => {
      track('box.value.set', {
        columnName: name,
        view: 'sidebar',
        columnType: type
      });
      dispatch({
        type: 'UPDATE_BOX',
        boxId,
        columnKey,
        value: input
      });
    }
  });
}
function DropdownInputWrapper(_ref12) {
  let {
    boxId,
    columnKey,
    track
  } = _ref12;
  const value = (0,_hooks__WEBPACK_IMPORTED_MODULE_23__/* .useSelector */ .v9)(state => (0,_selectors_columnValues__WEBPACK_IMPORTED_MODULE_24__/* .getDropdownColumnValue */ .$9)(state, boxId, columnKey) || '');
  const {
    options: dropdownOptions,
    name,
    type
  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_23__/* .useSelector */ .v9)(state => {
    const pipelineId = state.models.boxes[boxId].pipelineId;
    return state.models.pipelines[pipelineId].columns[columnKey];
  });
  const dispatch = (0,_hooks__WEBPACK_IMPORTED_MODULE_23__/* .useDispatch */ .I0)();
  const optionKeyToNameMap = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.fromPairs)(dropdownOptions.map(option => [option.key || option.name, option.name]));
  const optionNameToKeyMap = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.fromPairs)(dropdownOptions.map(option => [option.name, option.key]));
  const mapValueToInput = value => {
    if (value) {
      const option = optionKeyToNameMap[value];
      if (!option) return null;
      return option;
    } else {
      return null;
    }
  };
  const mapInputToValue = input => {
    if (input) {
      const option = optionNameToKeyMap[input];
      return option || '';
    } else {
      return '';
    }
  };
  const input = props => {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_widgets_react_material_boxSpecific_dropdownColumnInput__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      ...props,
      InputComponent: _modules_streakSidebar_presentation_raisedTextfield__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
      placeholder: "\u2014",
      noTopPadding: true,
      fullWidth: true,
      allowedToModifyOptions: true,
      dropdownOptions: dropdownOptions,
      onManageClick: () => {
        dispatch({
          type: 'MANAGE_OPTIONS_CLICK',
          boxId,
          columnKey
        });
      },
      onCreateNewClick: dropdownOption => {
        dispatch({
          type: 'CREATE_NEW_DROPDOWN_OPTION_CLICK',
          boxId,
          columnKey,
          dropdownOption
        });
      }
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_widgets_react_CommitHandler__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
    input: input,
    onCommit: input => {
      track('box.value.set', {
        columnName: name,
        view: 'sidebar',
        columnType: type
      });
      dispatch({
        type: 'UPDATE_BOX_DROPDOWN_COLUMN',
        boxId,
        columnKey,
        dropdownItemKey: mapInputToValue(input),
        rawInput: input
      });
    },
    value: mapValueToInput(value) || ''
  });
}
function DateInputWrapper(_ref13) {
  let {
    boxId,
    columnKey,
    track
  } = _ref13;
  const value = (0,_hooks__WEBPACK_IMPORTED_MODULE_23__/* .useSelector */ .v9)(state => (0,_selectors_columnValues__WEBPACK_IMPORTED_MODULE_24__/* .getDateColumnValue */ .lI)(state, boxId, columnKey) || null);
  const {
    name,
    type
  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_23__/* .useSelector */ .v9)(state => {
    const pipelineId = state.models.boxes[boxId].pipelineId;
    return state.models.pipelines[pipelineId].columns[columnKey];
  });
  const mapValueToInput = time => time == null || time === '' ? null : new Date(time);
  const mapInputToValue = date => date ? date.getTime() : '';
  const formatOptions = (0,_hooks__WEBPACK_IMPORTED_MODULE_23__/* .useSelector */ .v9)(state => {
    const pipelineId = state.models.boxes[boxId].pipelineId;
    return state.models.pipelines[pipelineId].columns[columnKey].formatOptions;
  });
  const input = props => {
    // TODO: attach the format options to the columnDetails so we can actually access them here
    let formatter = undefined;
    let parser = undefined;
    if (formatOptions) {
      const formatType = formatOptions.type;
      const {
        formatString
      } = formatOptions;
      const daysBeforeToday = formatOptions.daysBeforeToday;
      formatter = date => {
        if (formatType === 'RELATIVE_TO_TODAY_DATE') return (0,_core_models_pipeline_columns_columnTypes_formatters_dateUtils__WEBPACK_IMPORTED_MODULE_11__/* .getDateTextValue */ .Lm)(date, formatOptions);else {
          return (0,_widgets_spreadsheet_columnHeader_columnFormatMenu__WEBPACK_IMPORTED_MODULE_21__/* .legacyMomentFormatter */ .S9)(date, formatString);
        }
      };
      parser = text => {
        if (formatType === 'RELATIVE_TO_TODAY_DATE') {
          return date_fns__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z(new Date(), (daysBeforeToday ? -1 : 1) * parseInt(text));
        } else {
          return (0,_widgets_spreadsheet_columnHeader_columnFormatMenu__WEBPACK_IMPORTED_MODULE_21__/* .legacyMomentFormatParser */ .XU)(text, formatString);
        }
      };
    }
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_widgets_react_material_datePicker_textFieldAndDatePicker__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
      ...props,
      InputComponent: _modules_streakSidebar_presentation_raisedTextfield__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
      placeholder: "\u2014",
      noTopPadding: true,
      fullWidth: true,
      formatter: formatter,
      parser: parser
    });
  };
  const dispatch = (0,_hooks__WEBPACK_IMPORTED_MODULE_23__/* .useDispatch */ .I0)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_widgets_react_CommitHandler__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
    value: mapValueToInput(value),
    input: input,
    onCommit: input => {
      track('box.value.set', {
        columnName: name,
        view: 'sidebar',
        columnType: type
      });
      dispatch({
        type: 'UPDATE_BOX',
        boxId,
        columnKey,
        value: mapInputToValue(input)
      });
    }
  });
}
function TagInputWrapper(_ref14) {
  let {
    boxId,
    columnKey,
    track
  } = _ref14;
  const value = (0,_hooks__WEBPACK_IMPORTED_MODULE_23__/* .useSelector */ .v9)(state => (0,_selectors_columnValues__WEBPACK_IMPORTED_MODULE_24__/* .getTagColumnValue */ .df)(state, boxId, columnKey) || []);
  const {
    options: tagOptions,
    name,
    type
  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_23__/* .useSelector */ .v9)(state => {
    const pipelineId = state.models.boxes[boxId].pipelineId;
    return state.models.pipelines[pipelineId].columns[columnKey];
  });
  const dispatch = (0,_hooks__WEBPACK_IMPORTED_MODULE_23__/* .useDispatch */ .I0)();
  const tagKeyToNameMap = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.fromPairs)(tagOptions.map(option => [option.key || option.name, option.name]));
  const tagNameToKeyMap = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.fromPairs)(tagOptions.map(option => [option.name, option.key]));
  // value is an array of tag keys
  const mapValueToInput = value => {
    return (value || []).map(value => tagKeyToNameMap[value]).filter(_lib_utils_isNotNil__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z);
  };
  const input = props => {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_widgets_react_material_boxSpecific_tagColumnInput__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
      ...props,
      allowedToModifyOptions: true,
      fullWidth: true,
      maxWidth: 268,
      noBlueUnderline: true,
      noBorder: true,
      noTopPadding: true,
      onManageClick: () => dispatch({
        type: 'MANAGE_OPTIONS_CLICK',
        boxId,
        columnKey
      }),
      placeholder: "\u2014",
      tagOptions: tagOptions
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_widgets_react_CommitHandler__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
    input: input,
    onCommit: tagNames => {
      // Here's where we will dispatch a new action to update tags
      const tagKeys = [];
      const tagNamesToCreate = [];
      for (const tagName of tagNames) {
        const tagKey = tagNameToKeyMap[tagName];
        if (tagKey) {
          tagKeys.push(tagKey);
        } else {
          tagNamesToCreate.push(tagName);
        }
      }
      track('box.value.set', {
        columnName: name,
        view: 'sidebar',
        columnType: type
      });
      dispatch({
        type: 'UPDATE_BOX_TAG_COLUMN',
        selectedTagKeys: tagKeys,
        tagNamesToCreate,
        boxId,
        columnKey
      });
    },
    value: mapValueToInput(value)
  });
}
function NotesInputWrapper(_ref15) {
  let {
    boxId,
    columnKey,
    track
  } = _ref15;
  const dispatch = (0,_hooks__WEBPACK_IMPORTED_MODULE_23__/* .useDispatch */ .I0)();
  const value = (0,_hooks__WEBPACK_IMPORTED_MODULE_23__/* .useSelector */ .v9)(state => (0,_selectors_columnValues__WEBPACK_IMPORTED_MODULE_24__/* .getNotesColumnValue */ .Bg)(state, boxId, columnKey));
  const {
    name,
    type
  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_23__/* .useSelector */ .v9)(state => {
    const pipelineId = state.models.boxes[boxId].pipelineId;
    return state.models.pipelines[pipelineId].columns[columnKey];
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_widgets_react_CommitHandler__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
    value: value,
    input: props => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_modules_streakSidebar_presentation_RaisedRichTextArea__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
      ...props,
      placeholder: "\u2014"
    }),
    onCommit: input => {
      track('box.value.set', {
        columnName: name,
        view: 'sidebar',
        columnType: type
      });
      dispatch({
        type: 'UPDATE_BOX',
        boxId,
        columnKey,
        value: input
      });
    }
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 76656:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ isAccessAllowed)
/* harmony export */ });
/* unused harmony export isAccessAllowedForUser */
/* harmony import */ var _lib_utils_assertNever__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(659);
/* harmony import */ var _lib_createDebouncedLogger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80752);


const debouncedLogErrorPermissionNotFound = (0,_lib_createDebouncedLogger__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)({
  err: new Error('SpecificUserPermission not found'),
  level: 'error'
}, 1000 * 60);
const debouncedLogErrorUnsupportedEntityForCondition = (0,_lib_createDebouncedLogger__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)({
  err: new Error('Condition Not Supported For Entity'),
  level: 'error'
}, 1000 * 60);
const debouncedLogErrorUnsupportedCondition = (0,_lib_createDebouncedLogger__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)({
  err: new Error('Condition Not Supported'),
  level: 'error'
}, 1000 * 60);
const debouncedLogErrorUnsupportedEntity = (0,_lib_createDebouncedLogger__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)({
  err: new Error('Entity Not Supported'),
  level: 'error'
}, 1000 * 60);
function isAccessAllowed(state, entityType, entityId, action) {
  if (state.userLoggedInState.type !== 'LOGGED_IN') {
    return false;
  }
  return isAccessAllowedForUser(state, entityType, entityId, action, state.userLoggedInState.streakUser.key);
}
function isAccessAllowedForUser(state, entityType, entityId, action, userKey) {
  const relevantPermission = getPermissionForUserAction(state, entityType, entityId, action, userKey);
  if (!relevantPermission) {
    return false;
  }
  return evaluateCondition(state, relevantPermission.conditionalCheck, entityType, entityId, userKey);
}
function getPermissionForUserAction(state, entityType, entityId, action, userKey) {
  const modelProperty = convertPermissionEntityTypeToModelStateKey(entityType);
  if (!modelProperty) {
    return null;
  }
  switch (modelProperty) {
    case 'boxes':
      {
        const boxState = state.models[modelProperty][entityId];
        if (!boxState) {
          return null;
        }
        return getPermissionOnPipelineForUserAction(state, boxState.pipelineId, entityType, action, userKey);
      }
    case 'files':
      {
        const fileState = state.models[modelProperty][entityId];
        if (!fileState) {
          return null;
        }
        const boxId = state.modelMaps.boxIdsByKey[fileState.boxKey];
        const boxState = state.models.boxes[boxId];
        if (!boxState) {
          throw Error('Meeting loaded when box not loaded');
        }
        return getPermissionOnPipelineForUserAction(state, boxState.pipelineId, entityType, action, userKey);
      }
    case 'meetings':
      {
        const meetingState = state.models[modelProperty][entityId];
        if (!meetingState) {
          return null;
        }
        const {
          boxKey
        } = meetingState;
        const boxId = state.modelMaps.boxIdsByKey[boxKey];
        const boxState = state.models.boxes[boxId];
        if (!boxState) {
          throw Error('Meeting loaded when box not loaded');
        }
        return getPermissionOnPipelineForUserAction(state, boxState.pipelineId, entityType, action, userKey);
      }
    case 'unifiedThreadSummaries':
      {
        const uts = state.models[modelProperty][entityId];
        if (!uts) {
          return null;
        }
        if (!('boxKey' in uts)) {
          return null;
        }
        const {
          boxKey
        } = uts;
        const boxId = state.modelMaps.boxIdsByKey[boxKey];
        const boxState = state.models.boxes[boxId];
        if (!boxState) {
          throw Error('uts loaded when box not loaded');
        }
        return getPermissionOnPipelineForUserAction(state, boxState.pipelineId, entityType, action, userKey);
      }
    case 'contacts':
    case 'comments':
    case 'hangoutsChats':
    case 'newsfeedEntries':
    case 'orgs':
    case 'people':
    case 'pipelines':
    case 'users':
    case 'teams':
    case 'boxTimelines':
    case 'referral':
      debouncedLogErrorUnsupportedEntity({
        entityType
      });
      return null;
    default:
      try {
        (0,_lib_utils_assertNever__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(modelProperty);
      } catch (err) {
        return null;
      }
      return null;
  }
}
function getPermissionOnPipelineForUserAction(state, pipelineId, entityType, action, userKey) {
  const pipelineState = state.models.pipelines[pipelineId];
  if (!pipelineState) {
    return null;
  }
  const userPermissionSetName = getPermissionSetNameForUserOnPipeline(pipelineState, userKey);
  const userPermissionSet = getPermissionSetDefinitionForName(pipelineState, state.permissionSetDefinitions, userPermissionSetName);
  if (!userPermissionSet) {
    debouncedLogErrorPermissionNotFound({
      defaultPermissionSetsPresent: Boolean(userPermissionSet)
    });
    return null;
  }
  return userPermissionSet.permissions.find(permission => permission.entityType === entityType && permission.action === action);
}
function getPermissionSetNameForUserOnPipeline(pipeline, userKey) {
  const pipelineUser = pipeline.aclEntries.find(entry => entry.userKey === userKey);
  const pipelineUserPermission = pipelineUser ? pipelineUser.permissionSetName : null;
  const pipelineDefaultPermissionSet = pipeline.defaultPermissionSetName || '__defaultOrgPermissionSet__';
  return pipelineUserPermission || pipelineDefaultPermissionSet;
}
function getPermissionSetDefinitionForName(pipelineState, permissionSetDefinitions, permissionSetName) {
  const customPermissionSets = pipelineState.customPermissionSets || {};
  const pipelineCustomSetDefinition = customPermissionSets[permissionSetName];
  const defaultPermissionSet = permissionSetDefinitions && permissionSetDefinitions['__defaultOrgPermissionSet__'];
  return permissionSetDefinitions && permissionSetDefinitions[permissionSetName] || pipelineCustomSetDefinition || defaultPermissionSet;
}
function evaluateCondition(state, condition, entityType, entityId, userKey) {
  if (condition === 'NONE') {
    return true;
  }
  const modelKey = convertPermissionEntityTypeToModelStateKey(entityType);
  if (!modelKey) {
    return false;
  }
  switch (condition) {
    case 'ASSIGNED_TO':
      {
        switch (modelKey) {
          case 'boxes':
            {
              const boxState = state.models[modelKey][entityId];
              if (!boxState) {
                return false;
              }
              return boxState.assignedTos.some(assignToUserKey => assignToUserKey === userKey);
            }
          case 'contacts':
          case 'comments':
          case 'files':
          case 'hangoutsChats':
          case 'newsfeedEntries':
          case 'orgs':
          case 'people':
          case 'pipelines':
          case 'users':
          case 'meetings':
          case 'unifiedThreadSummaries':
          case 'boxTimelines':
          case 'referral':
          case 'teams':
            {
              debouncedLogErrorUnsupportedEntityForCondition({
                entityType,
                condition
              });
              return false;
            }
          default:
            {
              try {
                (0,_lib_utils_assertNever__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(modelKey);
              } catch (err) {
                return false;
              }
              return false;
            }
        }
      }
    case 'BOX_UPDATE':
      {
        switch (modelKey) {
          case 'unifiedThreadSummaries':
            {
              const unifiedThreadSummary = state.models.unifiedThreadSummaries[entityId];
              if (!unifiedThreadSummary) {
                return false;
              }
              if (!('boxKey' in unifiedThreadSummary)) {
                return false;
              }
              const {
                boxKey
              } = unifiedThreadSummary;
              const boxId = state.modelMaps.boxIdsByKey[boxKey];
              if (!boxId) {
                return false;
              }
              return isAccessAllowedForUser(state, 'Box', boxId, 'UPDATE', userKey);
            }
          // All these models have a boxKey property on them
          case 'hangoutsChats':
          case 'newsfeedEntries':
          case 'files':
          case 'meetings':
          case 'comments':
            {
              const model = state.models[modelKey][entityId];
              if (!model) {
                return false;
              }
              const {
                boxKey
              } = model;
              const boxId = state.modelMaps.boxIdsByKey[boxKey];
              if (!boxId) {
                return false;
              }
              return isAccessAllowedForUser(state, 'Box', boxId, 'UPDATE', userKey);
            }
          // Making the decision that "boxes" is an invalid possibility. Don't want to recurse so going to default to not sharing.
          case 'boxes': // todo: applies to entities scoped to boxes like tasks, comments, etc.  for now just log an err if you try to do this.  Same situation with BOX_VIEW case.
          case 'contacts':
          case 'orgs':
          case 'people':
          case 'pipelines':
          case 'users':
          case 'boxTimelines':
          case 'referral':
          case 'teams':
            {
              debouncedLogErrorUnsupportedEntityForCondition({
                entityType,
                condition
              });
              return false;
            }
          default:
            {
              try {
                (0,_lib_utils_assertNever__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(modelKey);
              } catch (err) {
                return false;
              }
              return false;
            }
        }
      }
    case 'BOX_VIEW':
      {
        switch (modelKey) {
          case 'unifiedThreadSummaries':
            {
              const unifiedThreadSummary = state.models.unifiedThreadSummaries[entityId];
              if (!unifiedThreadSummary) {
                return false;
              }
              if (!('boxKey' in unifiedThreadSummary)) {
                return false;
              }
              const {
                boxKey
              } = unifiedThreadSummary;
              const boxId = state.modelMaps.boxIdsByKey[boxKey];
              if (!boxId) {
                return false;
              }
              return isAccessAllowedForUser(state, 'Box', boxId, 'GET', userKey);
            }
          case 'hangoutsChats':
          case 'newsfeedEntries':
          case 'files':
          case 'meetings':
          case 'comments':
            {
              const model = state.models[modelKey][entityId];
              if (!model) {
                return false;
              }
              const {
                boxKey
              } = model;
              const boxId = state.modelMaps.boxIdsByKey[boxKey];
              if (!boxId) {
                return false;
              }
              return isAccessAllowedForUser(state, 'Box', boxId, 'GET', userKey);
            }
          case 'boxes':
          case 'contacts':
          case 'orgs':
          case 'people':
          case 'pipelines':
          case 'users':
          case 'boxTimelines':
          case 'referral':
          case 'teams':
            {
              debouncedLogErrorUnsupportedEntityForCondition({
                entityType,
                condition
              });
              return false;
            }
          default:
            {
              try {
                (0,_lib_utils_assertNever__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(modelKey);
              } catch (err) {
                return false;
              }
              return false;
            }
        }
      }
    case 'CREATOR':
      {
        switch (modelKey) {
          case 'boxes':
            {
              const boxState = state.models[modelKey][entityId];
              if (!boxState) {
                return false;
              }
              return boxState.creatorKey === userKey;
            }
          case 'comments':
          case 'contacts':
          case 'files':
          case 'hangoutsChats':
          case 'newsfeedEntries':
          case 'orgs':
          case 'people':
          case 'pipelines':
          case 'referral':
          case 'users':
          case 'meetings':
          case 'boxTimelines':
          case 'teams':
          case 'unifiedThreadSummaries':
            {
              debouncedLogErrorUnsupportedEntityForCondition({
                entityType,
                condition
              });
              return false;
            }
          default:
            try {
              (0,_lib_utils_assertNever__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(modelKey);
            } catch (err) {
              return false;
            }
            return false;
        }
      }
    // These two permissions are defined on the server enum but were never used by the client
    case 'STAGE':
    case 'FIELD_COMPARISON':
      debouncedLogErrorUnsupportedCondition({
        condition
      });
      return false;
    default:
      {
        debouncedLogErrorUnsupportedCondition({
          condition
        });
        try {
          (0,_lib_utils_assertNever__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(condition);
        } catch (err) {
          return false;
        }
        return false;
      }
  }
}
function convertPermissionEntityTypeToModelStateKey(entityType) {
  switch (entityType) {
    case 'Box':
      return 'boxes';
    case 'File':
      return 'files';
    case 'Meeting':
      return 'meetings';
    case 'GmailThread':
      return 'unifiedThreadSummaries';
  }
  debouncedLogErrorUnsupportedEntity({
    entityType
  });
  return null;
}

/***/ }),

/***/ 98205:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $9: () => (/* binding */ getDropdownColumnValue),
/* harmony export */   Bg: () => (/* binding */ getNotesColumnValue),
/* harmony export */   Wb: () => (/* binding */ getFreeFormColumnValue),
/* harmony export */   YF: () => (/* binding */ getFreshnessColumnValue),
/* harmony export */   df: () => (/* binding */ getTagColumnValue),
/* harmony export */   gF: () => (/* binding */ getLinkedBoxesColumnValue),
/* harmony export */   lI: () => (/* binding */ getDateColumnValue),
/* harmony export */   oj: () => (/* binding */ getCheckboxColumnValue)
/* harmony export */ });
/* unused harmony exports getBasicTextColumnValue, getDurationColumnValue, getEmailAddressColumnValue, getFormulaColumnValue, getPercentColumnValue, getPersonColumnValue, getSinglePersonColumnValue, getSummaryColumnValue, getTouchPointColumnValue */
/* harmony import */ var _getColumnValue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10500);

function getBasicTextColumnValue(state, boxId, columnKey) {
  return getColumnValue(state, boxId, 'basicTextColumns', columnKey);
}
function getCheckboxColumnValue(state, boxId, columnKey) {
  return (0,_getColumnValue__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(state, boxId, 'checkboxColumns', columnKey);
}
function getDateColumnValue(state, boxId, columnKey) {
  return (0,_getColumnValue__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(state, boxId, 'dateColumns', columnKey);
}
function getDropdownColumnValue(state, boxId, columnKey) {
  return (0,_getColumnValue__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(state, boxId, 'dropdownColumns', columnKey);
}
function getDurationColumnValue(state, boxId, columnKey) {
  return getColumnValue(state, boxId, 'durationColumns', columnKey);
}
function getEmailAddressColumnValue(state, boxId, columnKey) {
  return getColumnValue(state, boxId, 'emailAddressColumns', columnKey);
}
function getFormulaColumnValue(state, boxId, columnKey) {
  return getColumnValue(state, boxId, 'formulaColumns', columnKey);
}
function getFreeFormColumnValue(state, boxId, columnKey) {
  return (0,_getColumnValue__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(state, boxId, 'freeFormColumns', columnKey);
}
function getFreshnessColumnValue(state, boxId, columnKey) {
  return (0,_getColumnValue__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(state, boxId, 'freshnessColumns', columnKey);
}
function getLinkedBoxesColumnValue(state, boxId, columnKey) {
  return (0,_getColumnValue__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(state, boxId, 'linkedBoxesColumns', columnKey);
}
function getNotesColumnValue(state, boxId, columnKey) {
  return (0,_getColumnValue__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(state, boxId, 'noteColumns', columnKey);
}
function getPercentColumnValue(state, boxId, columnKey) {
  return getColumnValue(state, boxId, 'percentColumns', columnKey);
}
function getPersonColumnValue(state, boxId, columnKey) {
  return getColumnValue(state, boxId, 'personColumns', columnKey);
}
function getSinglePersonColumnValue(state, boxId, columnKey) {
  return getColumnValue(state, boxId, 'singlePersonColumns', columnKey);
}
function getSummaryColumnValue(state, boxId, columnKey) {
  return getColumnValue(state, boxId, 'summaryColumns', columnKey);
}
function getTagColumnValue(state, boxId, columnKey) {
  return (0,_getColumnValue__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(state, boxId, 'tagColumns', columnKey);
}
function getTouchPointColumnValue(state, boxId, columnKey) {
  return getColumnValue(state, boxId, 'touchPointColumns', columnKey);
}

/***/ }),

/***/ 10535:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ getTeamKeyForBoxId)
/* harmony export */ });
function getTeamKeyForBoxId(state, boxId) {
  const box = state.models.boxes[boxId];
  if (!box) {
    return null;
  }
  const pipeline = state.models.pipelines[box.pipelineId];
  if (!pipeline) {
    return null;
  }
  return pipeline.teamKey;
}

/***/ }),

/***/ 79182:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AP: () => (/* binding */ _2),
/* harmony export */   I6: () => (/* binding */ _4),
/* harmony export */   Oz: () => (/* binding */ _1),
/* harmony export */   lY: () => (/* binding */ _5),
/* harmony export */   r4: () => (/* binding */ _3)
/* harmony export */ });
// extracted by mini-css-extract-plugin
var _1 = "streak-mod__l0pTlnNjDEm3weynSFMw";
var _2 = "streak-mod__K6sATDBJYaAF_d320BgY";
var _3 = "streak-mod___bTBAt0uqXLlvR5qZex4";
var _4 = "streak-mod__D0kbPPi1aevbZ00RZHkg";
var _5 = "streak-mod__mSeeHdBue10kkM_WKgo1";



/***/ }),

/***/ 9562:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AD: () => (/* binding */ _4),
/* harmony export */   FE: () => (/* binding */ _1),
/* harmony export */   WD: () => (/* binding */ _3),
/* harmony export */   nC: () => (/* binding */ _2)
/* harmony export */ });
// extracted by mini-css-extract-plugin
var _1 = "streak-mod__tHNoZCQnxbglMJtXki5X";
var _2 = "streak-mod__HeDSJgspDcm5NrsbbQ2w";
var _3 = "streak-mod__kJJIA415YicaKbBYEMK4";
var _4 = "streak-mod___r4EOd2o38KoyhAI5jsa";



/***/ }),

/***/ 47278:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ms: () => (/* binding */ ClassNames),
  tZ: () => (/* binding */ jsx),
  F4: () => (/* binding */ keyframes)
});

// UNUSED EXPORTS: CacheProvider, Global, ThemeContext, createElement, css, withEmotionCache

// EXTERNAL MODULE: ./.yarn/cache/react-npm-18.3.1-af38f3c1ae-261137d3f3.zip/node_modules/react/index.js
var react = __webpack_require__(44345);
// EXTERNAL MODULE: ./.yarn/cache/@emotion-cache-npm-10.0.29-076efd3781-9978106bb1.zip/node_modules/@emotion/cache/dist/cache.browser.esm.js + 2 modules
var cache_browser_esm = __webpack_require__(4755);
;// CONCATENATED MODULE: ./.yarn/cache/@emotion-utils-npm-0.11.3-5aea83fd8c-c69d9fe084.zip/node_modules/@emotion/utils/dist/utils.browser.esm.js
var isBrowser = "object" !== 'undefined';
function getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = '';
  classNames.split(' ').forEach(function (className) {
    if (registered[className] !== undefined) {
      registeredStyles.push(registered[className]);
    } else {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var utils_browser_esm_insertStyles = function insertStyles(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;

  if ( // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (isStringTag === false || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  isBrowser === false && cache.compat !== undefined) && cache.registered[className] === undefined) {
    cache.registered[className] = serialized.styles;
  }

  if (cache.inserted[serialized.name] === undefined) {
    var current = serialized;

    do {
      var maybeStyles = cache.insert("." + className, current, cache.sheet, true);

      current = current.next;
    } while (current !== undefined);
  }
};



// EXTERNAL MODULE: ./.yarn/cache/@emotion-serialize-npm-0.11.16-ffd808625b-a6c3b70417.zip/node_modules/@emotion/serialize/dist/serialize.browser.esm.js + 3 modules
var serialize_browser_esm = __webpack_require__(94870);
;// CONCATENATED MODULE: ./.yarn/__virtual__/@emotion-core-virtual-374e52d4dc/0/cache/@emotion-core-npm-10.3.1-5d0bd2504d-3ef35fe18d.zip/node_modules/@emotion/core/dist/emotion-element-04d85134.browser.esm.js






var emotion_element_04d85134_browser_esm_hasOwnProperty = Object.prototype.hasOwnProperty;

var EmotionCacheContext = /*#__PURE__*/(0,react.createContext)( // we're doing this to avoid preconstruct's dead code elimination in this one case
// because this module is primarily intended for the browser and node
// but it's also required in react native and similar environments sometimes
// and we could have a special build just for that
// but this is much easier and the native packages
// might use a different theme context in the future anyway
typeof HTMLElement !== 'undefined' ? (0,cache_browser_esm/* default */.Z)() : null);
var emotion_element_04d85134_browser_esm_ThemeContext = /*#__PURE__*/(0,react.createContext)({});
var CacheProvider = EmotionCacheContext.Provider;

var emotion_element_04d85134_browser_esm_withEmotionCache = function withEmotionCache(func) {
  var render = function render(props, ref) {
    return /*#__PURE__*/(0,react.createElement)(EmotionCacheContext.Consumer, null, function (cache) {
      return func(props, cache, ref);
    });
  }; // $FlowFixMe


  return /*#__PURE__*/(0,react.forwardRef)(render);
};

// thus we only need to replace what is a valid character for JS, but not for CSS

var sanitizeIdentifier = function sanitizeIdentifier(identifier) {
  return identifier.replace(/\$/g, '-');
};

var typePropName = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__';
var labelPropName = '__EMOTION_LABEL_PLEASE_DO_NOT_USE__';
var createEmotionProps = function createEmotionProps(type, props) {
  if (false) {}

  var newProps = {};

  for (var key in props) {
    if (emotion_element_04d85134_browser_esm_hasOwnProperty.call(props, key)) {
      newProps[key] = props[key];
    }
  }

  newProps[typePropName] = type; // TODO: check if this still works with all of those different JSX functions

  if (false) { var match, error; }

  return newProps;
};

var Noop = function Noop() {
  return null;
};

var render = function render(cache, props, theme, ref) {
  var cssProp = theme === null ? props.css : props.css(theme); // so that using `css` from `emotion` and passing the result to the css prop works
  // not passing the registered cache to serializeStyles because it would
  // make certain babel optimisations not possible

  if (typeof cssProp === 'string' && cache.registered[cssProp] !== undefined) {
    cssProp = cache.registered[cssProp];
  }

  var type = props[typePropName];
  var registeredStyles = [cssProp];
  var className = '';

  if (typeof props.className === 'string') {
    className = getRegisteredStyles(cache.registered, registeredStyles, props.className);
  } else if (props.className != null) {
    className = props.className + " ";
  }

  var serialized = (0,serialize_browser_esm/* serializeStyles */.O)(registeredStyles);

  if (false) { var labelFromStack; }

  var rules = utils_browser_esm_insertStyles(cache, serialized, typeof type === 'string');
  className += cache.key + "-" + serialized.name;
  var newProps = {};

  for (var key in props) {
    if (emotion_element_04d85134_browser_esm_hasOwnProperty.call(props, key) && key !== 'css' && key !== typePropName && ( true || 0)) {
      newProps[key] = props[key];
    }
  }

  newProps.ref = ref;
  newProps.className = className;
  var ele = /*#__PURE__*/(0,react.createElement)(type, newProps);
  var possiblyStyleElement = /*#__PURE__*/(0,react.createElement)(Noop, null);


  return /*#__PURE__*/(0,react.createElement)(react.Fragment, null, possiblyStyleElement, ele);
}; // eslint-disable-next-line no-undef


var Emotion = /* #__PURE__ */emotion_element_04d85134_browser_esm_withEmotionCache(function (props, cache, ref) {
  if (typeof props.css === 'function') {
    return /*#__PURE__*/(0,react.createElement)(emotion_element_04d85134_browser_esm_ThemeContext.Consumer, null, function (theme) {
      return render(cache, props, theme, ref);
    });
  }

  return render(cache, props, null, ref);
});

if (false) {}



// EXTERNAL MODULE: ./.yarn/cache/@emotion-css-npm-10.0.27-3fd4a0c157-1420f5b514.zip/node_modules/@emotion/css/dist/css.browser.esm.js
var css_browser_esm = __webpack_require__(83970);
;// CONCATENATED MODULE: ./.yarn/__virtual__/@emotion-core-virtual-374e52d4dc/0/cache/@emotion-core-npm-10.3.1-5d0bd2504d-3ef35fe18d.zip/node_modules/@emotion/core/dist/core.browser.esm.js











var jsx = function jsx(type, props) {
  var args = arguments;

  if (props == null || !emotion_element_04d85134_browser_esm_hasOwnProperty.call(props, 'css')) {
    // $FlowFixMe
    return react.createElement.apply(undefined, args);
  }

  var argsLength = args.length;
  var createElementArgArray = new Array(argsLength);
  createElementArgArray[0] = Emotion;
  createElementArgArray[1] = createEmotionProps(type, props);

  for (var i = 2; i < argsLength; i++) {
    createElementArgArray[i] = args[i];
  } // $FlowFixMe


  return react.createElement.apply(null, createElementArgArray);
};

var warnedAboutCssPropForGlobal = false;
var Global = /* #__PURE__ */(/* unused pure expression or super */ null && (withEmotionCache(function (props, cache) {
  if (false) {}

  var styles = props.styles;

  if (typeof styles === 'function') {
    return /*#__PURE__*/createElement(ThemeContext.Consumer, null, function (theme) {
      var serialized = serializeStyles([styles(theme)]);
      return /*#__PURE__*/createElement(InnerGlobal, {
        serialized: serialized,
        cache: cache
      });
    });
  }

  var serialized = serializeStyles([styles]);
  return /*#__PURE__*/createElement(InnerGlobal, {
    serialized: serialized,
    cache: cache
  });
})));

// maintain place over rerenders.
// initial render from browser, insertBefore context.sheet.tags[0] or if a style hasn't been inserted there yet, appendChild
// initial client-side render from SSR, use place of hydrating tag
var InnerGlobal = /*#__PURE__*/(/* unused pure expression or super */ null && (function (_React$Component) {
  _inheritsLoose(InnerGlobal, _React$Component);

  function InnerGlobal(props, context, updater) {
    return _React$Component.call(this, props, context, updater) || this;
  }

  var _proto = InnerGlobal.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.sheet = new StyleSheet({
      key: this.props.cache.key + "-global",
      nonce: this.props.cache.sheet.nonce,
      container: this.props.cache.sheet.container
    }); // $FlowFixMe

    var node = document.querySelector("style[data-emotion-" + this.props.cache.key + "=\"" + this.props.serialized.name + "\"]");

    if (node !== null) {
      this.sheet.tags.push(node);
    }

    if (this.props.cache.sheet.tags.length) {
      this.sheet.before = this.props.cache.sheet.tags[0];
    }

    this.insertStyles();
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (prevProps.serialized.name !== this.props.serialized.name) {
      this.insertStyles();
    }
  };

  _proto.insertStyles = function insertStyles$1() {
    if (this.props.serialized.next !== undefined) {
      // insert keyframes
      insertStyles(this.props.cache, this.props.serialized.next, true);
    }

    if (this.sheet.tags.length) {
      // if this doesn't exist then it will be null so the style element will be appended
      var element = this.sheet.tags[this.sheet.tags.length - 1].nextElementSibling;
      this.sheet.before = element;
      this.sheet.flush();
    }

    this.props.cache.insert("", this.props.serialized, this.sheet, false);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.sheet.flush();
  };

  _proto.render = function render() {

    return null;
  };

  return InnerGlobal;
}(Component)));

var keyframes = function keyframes() {
  var insertable = css_browser_esm/* default */.Z.apply(void 0, arguments);
  var name = "animation-" + insertable.name; // $FlowFixMe

  return {
    name: name,
    styles: "@keyframes " + name + "{" + insertable.styles + "}",
    anim: 1,
    toString: function toString() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
};

var classnames = function classnames(args) {
  var len = args.length;
  var i = 0;
  var cls = '';

  for (; i < len; i++) {
    var arg = args[i];
    if (arg == null) continue;
    var toAdd = void 0;

    switch (typeof arg) {
      case 'boolean':
        break;

      case 'object':
        {
          if (Array.isArray(arg)) {
            toAdd = classnames(arg);
          } else {
            toAdd = '';

            for (var k in arg) {
              if (arg[k] && k) {
                toAdd && (toAdd += ' ');
                toAdd += k;
              }
            }
          }

          break;
        }

      default:
        {
          toAdd = arg;
        }
    }

    if (toAdd) {
      cls && (cls += ' ');
      cls += toAdd;
    }
  }

  return cls;
};

function merge(registered, css, className) {
  var registeredStyles = [];
  var rawClassName = getRegisteredStyles(registered, registeredStyles, className);

  if (registeredStyles.length < 2) {
    return className;
  }

  return rawClassName + css(registeredStyles);
}

var core_browser_esm_Noop = function Noop() {
  return null;
};

var ClassNames = emotion_element_04d85134_browser_esm_withEmotionCache(function (props, context) {
  return /*#__PURE__*/(0,react.createElement)(emotion_element_04d85134_browser_esm_ThemeContext.Consumer, null, function (theme) {
    var hasRendered = false;

    var css = function css() {
      if (hasRendered && "production" !== 'production') {}

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var serialized = (0,serialize_browser_esm/* serializeStyles */.O)(args, context.registered);

      {
        utils_browser_esm_insertStyles(context, serialized, false);
      }

      return context.key + "-" + serialized.name;
    };

    var cx = function cx() {
      if (hasRendered && "production" !== 'production') {}

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return merge(context.registered, css, classnames(args));
    };

    var content = {
      css: css,
      cx: cx,
      theme: theme
    };
    var ele = props.children(content);
    hasRendered = true;
    var possiblyStyleElement = /*#__PURE__*/(0,react.createElement)(core_browser_esm_Noop, null);


    return /*#__PURE__*/(0,react.createElement)(react.Fragment, null, possiblyStyleElement, ele);
  });
});




/***/ }),

/***/ 17832:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;


__webpack_unused_export__ = ({
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(44345);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(22739);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var sizerStyle = {
	position: 'absolute',
	top: 0,
	left: 0,
	visibility: 'hidden',
	height: 0,
	overflow: 'scroll',
	whiteSpace: 'pre'
};

var INPUT_PROPS_BLACKLIST = ['extraWidth', 'injectStyles', 'inputClassName', 'inputRef', 'inputStyle', 'minWidth', 'onAutosize', 'placeholderIsMinWidth'];

var cleanInputProps = function cleanInputProps(inputProps) {
	INPUT_PROPS_BLACKLIST.forEach(function (field) {
		return delete inputProps[field];
	});
	return inputProps;
};

var copyStyles = function copyStyles(styles, node) {
	node.style.fontSize = styles.fontSize;
	node.style.fontFamily = styles.fontFamily;
	node.style.fontWeight = styles.fontWeight;
	node.style.fontStyle = styles.fontStyle;
	node.style.letterSpacing = styles.letterSpacing;
	node.style.textTransform = styles.textTransform;
};

var isIE = typeof window !== 'undefined' && window.navigator ? /MSIE |Trident\/|Edge\//.test(window.navigator.userAgent) : false;

var generateId = function generateId() {
	// we only need an auto-generated ID for stylesheet injection, which is only
	// used for IE. so if the browser is not IE, this should return undefined.
	return isIE ? '_' + Math.random().toString(36).substr(2, 12) : undefined;
};

var AutosizeInput = function (_Component) {
	_inherits(AutosizeInput, _Component);

	_createClass(AutosizeInput, null, [{
		key: 'getDerivedStateFromProps',
		value: function getDerivedStateFromProps(props, state) {
			var id = props.id;

			return id !== state.prevId ? { inputId: id || generateId(), prevId: id } : null;
		}
	}]);

	function AutosizeInput(props) {
		_classCallCheck(this, AutosizeInput);

		var _this = _possibleConstructorReturn(this, (AutosizeInput.__proto__ || Object.getPrototypeOf(AutosizeInput)).call(this, props));

		_this.inputRef = function (el) {
			_this.input = el;
			if (typeof _this.props.inputRef === 'function') {
				_this.props.inputRef(el);
			}
		};

		_this.placeHolderSizerRef = function (el) {
			_this.placeHolderSizer = el;
		};

		_this.sizerRef = function (el) {
			_this.sizer = el;
		};

		_this.state = {
			inputWidth: props.minWidth,
			inputId: props.id || generateId(),
			prevId: props.id
		};
		return _this;
	}

	_createClass(AutosizeInput, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.mounted = true;
			this.copyInputStyles();
			this.updateInputWidth();
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate(prevProps, prevState) {
			if (prevState.inputWidth !== this.state.inputWidth) {
				if (typeof this.props.onAutosize === 'function') {
					this.props.onAutosize(this.state.inputWidth);
				}
			}
			this.updateInputWidth();
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this.mounted = false;
		}
	}, {
		key: 'copyInputStyles',
		value: function copyInputStyles() {
			if (!this.mounted || !window.getComputedStyle) {
				return;
			}
			var inputStyles = this.input && window.getComputedStyle(this.input);
			if (!inputStyles) {
				return;
			}
			copyStyles(inputStyles, this.sizer);
			if (this.placeHolderSizer) {
				copyStyles(inputStyles, this.placeHolderSizer);
			}
		}
	}, {
		key: 'updateInputWidth',
		value: function updateInputWidth() {
			if (!this.mounted || !this.sizer || typeof this.sizer.scrollWidth === 'undefined') {
				return;
			}
			var newInputWidth = void 0;
			if (this.props.placeholder && (!this.props.value || this.props.value && this.props.placeholderIsMinWidth)) {
				newInputWidth = Math.max(this.sizer.scrollWidth, this.placeHolderSizer.scrollWidth) + 2;
			} else {
				newInputWidth = this.sizer.scrollWidth + 2;
			}
			// add extraWidth to the detected width. for number types, this defaults to 16 to allow for the stepper UI
			var extraWidth = this.props.type === 'number' && this.props.extraWidth === undefined ? 16 : parseInt(this.props.extraWidth) || 0;
			newInputWidth += extraWidth;
			if (newInputWidth < this.props.minWidth) {
				newInputWidth = this.props.minWidth;
			}
			if (newInputWidth !== this.state.inputWidth) {
				this.setState({
					inputWidth: newInputWidth
				});
			}
		}
	}, {
		key: 'getInput',
		value: function getInput() {
			return this.input;
		}
	}, {
		key: 'focus',
		value: function focus() {
			this.input.focus();
		}
	}, {
		key: 'blur',
		value: function blur() {
			this.input.blur();
		}
	}, {
		key: 'select',
		value: function select() {
			this.input.select();
		}
	}, {
		key: 'renderStyles',
		value: function renderStyles() {
			// this method injects styles to hide IE's clear indicator, which messes
			// with input size detection. the stylesheet is only injected when the
			// browser is IE, and can also be disabled by the `injectStyles` prop.
			var injectStyles = this.props.injectStyles;

			return isIE && injectStyles ? _react2.default.createElement('style', { dangerouslySetInnerHTML: {
					__html: 'input#' + this.state.inputId + '::-ms-clear {display: none;}'
				} }) : null;
		}
	}, {
		key: 'render',
		value: function render() {
			var sizerValue = [this.props.defaultValue, this.props.value, ''].reduce(function (previousValue, currentValue) {
				if (previousValue !== null && previousValue !== undefined) {
					return previousValue;
				}
				return currentValue;
			});

			var wrapperStyle = _extends({}, this.props.style);
			if (!wrapperStyle.display) wrapperStyle.display = 'inline-block';

			var inputStyle = _extends({
				boxSizing: 'content-box',
				width: this.state.inputWidth + 'px'
			}, this.props.inputStyle);

			var inputProps = _objectWithoutProperties(this.props, []);

			cleanInputProps(inputProps);
			inputProps.className = this.props.inputClassName;
			inputProps.id = this.state.inputId;
			inputProps.style = inputStyle;

			return _react2.default.createElement(
				'div',
				{ className: this.props.className, style: wrapperStyle },
				this.renderStyles(),
				_react2.default.createElement('input', _extends({}, inputProps, { ref: this.inputRef })),
				_react2.default.createElement(
					'div',
					{ ref: this.sizerRef, style: sizerStyle },
					sizerValue
				),
				this.props.placeholder ? _react2.default.createElement(
					'div',
					{ ref: this.placeHolderSizerRef, style: sizerStyle },
					this.props.placeholder
				) : null
			);
		}
	}]);

	return AutosizeInput;
}(_react.Component);

AutosizeInput.propTypes = {
	className: _propTypes2.default.string, // className for the outer element
	defaultValue: _propTypes2.default.any, // default field value
	extraWidth: _propTypes2.default.oneOfType([// additional width for input element
	_propTypes2.default.number, _propTypes2.default.string]),
	id: _propTypes2.default.string, // id to use for the input, can be set for consistent snapshots
	injectStyles: _propTypes2.default.bool, // inject the custom stylesheet to hide clear UI, defaults to true
	inputClassName: _propTypes2.default.string, // className for the input element
	inputRef: _propTypes2.default.func, // ref callback for the input element
	inputStyle: _propTypes2.default.object, // css styles for the input element
	minWidth: _propTypes2.default.oneOfType([// minimum width for input element
	_propTypes2.default.number, _propTypes2.default.string]),
	onAutosize: _propTypes2.default.func, // onAutosize handler: function(newWidth) {}
	onChange: _propTypes2.default.func, // onChange handler: function(event) {}
	placeholder: _propTypes2.default.string, // placeholder text
	placeholderIsMinWidth: _propTypes2.default.bool, // don't collapse size to less than the placeholder
	style: _propTypes2.default.object, // css styles for the outer element
	value: _propTypes2.default.any // field value
};
AutosizeInput.defaultProps = {
	minWidth: 1,
	injectStyles: true
};

exports.Z = AutosizeInput;

/***/ }),

/***/ 87338:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  S: () => (/* binding */ Select)
});

// UNUSED EXPORTS: a, c, d, m

// EXTERNAL MODULE: ./.yarn/cache/@babel-runtime-npm-7.25.7-67dab27f3f-73411fe0f1.zip/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__(79308);
// EXTERNAL MODULE: ./.yarn/cache/@babel-runtime-npm-7.25.7-67dab27f3f-73411fe0f1.zip/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(14354);
;// CONCATENATED MODULE: ./.yarn/cache/@babel-runtime-npm-7.25.7-67dab27f3f-73411fe0f1.zip/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}

;// CONCATENATED MODULE: ./.yarn/cache/@babel-runtime-npm-7.25.7-67dab27f3f-73411fe0f1.zip/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}

// EXTERNAL MODULE: ./.yarn/cache/@babel-runtime-npm-7.25.7-67dab27f3f-73411fe0f1.zip/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
var unsupportedIterableToArray = __webpack_require__(78454);
;// CONCATENATED MODULE: ./.yarn/cache/@babel-runtime-npm-7.25.7-67dab27f3f-73411fe0f1.zip/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

;// CONCATENATED MODULE: ./.yarn/cache/@babel-runtime-npm-7.25.7-67dab27f3f-73411fe0f1.zip/node_modules/@babel/runtime/helpers/esm/slicedToArray.js




function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || (0,unsupportedIterableToArray/* default */.Z)(r, e) || _nonIterableRest();
}

// EXTERNAL MODULE: ./.yarn/cache/@babel-runtime-npm-7.25.7-67dab27f3f-73411fe0f1.zip/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 3 modules
var toConsumableArray = __webpack_require__(43609);
// EXTERNAL MODULE: ./.yarn/cache/@babel-runtime-npm-7.25.7-67dab27f3f-73411fe0f1.zip/node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(87768);
// EXTERNAL MODULE: ./.yarn/cache/@babel-runtime-npm-7.25.7-67dab27f3f-73411fe0f1.zip/node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(32829);
// EXTERNAL MODULE: ./.yarn/cache/@babel-runtime-npm-7.25.7-67dab27f3f-73411fe0f1.zip/node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(26713);
// EXTERNAL MODULE: ./.yarn/cache/@babel-runtime-npm-7.25.7-67dab27f3f-73411fe0f1.zip/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(22148);
// EXTERNAL MODULE: ./.yarn/cache/@babel-runtime-npm-7.25.7-67dab27f3f-73411fe0f1.zip/node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(32523);
// EXTERNAL MODULE: ./.yarn/cache/@babel-runtime-npm-7.25.7-67dab27f3f-73411fe0f1.zip/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(92014);
// EXTERNAL MODULE: ./.yarn/cache/@babel-runtime-npm-7.25.7-67dab27f3f-73411fe0f1.zip/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(27175);
// EXTERNAL MODULE: ./.yarn/cache/react-npm-18.3.1-af38f3c1ae-261137d3f3.zip/node_modules/react/index.js
var react = __webpack_require__(44345);
// EXTERNAL MODULE: ./.yarn/cache/memoize-one-npm-5.2.1-ee0f8be979-b7141dc148.zip/node_modules/memoize-one/dist/memoize-one.esm.js
var memoize_one_esm = __webpack_require__(31018);
// EXTERNAL MODULE: ./.yarn/__virtual__/@emotion-core-virtual-374e52d4dc/0/cache/@emotion-core-npm-10.3.1-5d0bd2504d-3ef35fe18d.zip/node_modules/@emotion/core/dist/core.browser.esm.js + 2 modules
var core_browser_esm = __webpack_require__(47278);
// EXTERNAL MODULE: ./.yarn/__virtual__/react-dom-virtual-3bf8f3011d/0/cache/react-dom-npm-18.3.1-a805663f38-3f4b73a3aa.zip/node_modules/react-dom/index.js
var react_dom = __webpack_require__(69980);
// EXTERNAL MODULE: ./.yarn/__virtual__/react-select-virtual-a7d228ba97/0/cache/react-select-npm-3.2.0-85707201d2-0147c89825.zip/node_modules/react-select/dist/index-75b02bac.browser.esm.js + 1 modules
var index_75b02bac_browser_esm = __webpack_require__(77724);
// EXTERNAL MODULE: ./.yarn/cache/@emotion-css-npm-10.0.27-3fd4a0c157-1420f5b514.zip/node_modules/@emotion/css/dist/css.browser.esm.js
var css_browser_esm = __webpack_require__(83970);
;// CONCATENATED MODULE: ./.yarn/__virtual__/react-select-virtual-a7d228ba97/0/cache/react-select-npm-3.2.0-85707201d2-0147c89825.zip/node_modules/react-select/dist/Select-e1cf49ae.browser.esm.js


















var diacritics = [{
  base: 'A',
  letters: "A\u24B6\uFF21\xC0\xC1\xC2\u1EA6\u1EA4\u1EAA\u1EA8\xC3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\xC4\u01DE\u1EA2\xC5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F"
}, {
  base: 'AA',
  letters: "\uA732"
}, {
  base: 'AE',
  letters: "\xC6\u01FC\u01E2"
}, {
  base: 'AO',
  letters: "\uA734"
}, {
  base: 'AU',
  letters: "\uA736"
}, {
  base: 'AV',
  letters: "\uA738\uA73A"
}, {
  base: 'AY',
  letters: "\uA73C"
}, {
  base: 'B',
  letters: "B\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181"
}, {
  base: 'C',
  letters: "C\u24B8\uFF23\u0106\u0108\u010A\u010C\xC7\u1E08\u0187\u023B\uA73E"
}, {
  base: 'D',
  letters: "D\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779"
}, {
  base: 'DZ',
  letters: "\u01F1\u01C4"
}, {
  base: 'Dz',
  letters: "\u01F2\u01C5"
}, {
  base: 'E',
  letters: "E\u24BA\uFF25\xC8\xC9\xCA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\xCB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E"
}, {
  base: 'F',
  letters: "F\u24BB\uFF26\u1E1E\u0191\uA77B"
}, {
  base: 'G',
  letters: "G\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E"
}, {
  base: 'H',
  letters: "H\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D"
}, {
  base: 'I',
  letters: "I\u24BE\uFF29\xCC\xCD\xCE\u0128\u012A\u012C\u0130\xCF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197"
}, {
  base: 'J',
  letters: "J\u24BF\uFF2A\u0134\u0248"
}, {
  base: 'K',
  letters: "K\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2"
}, {
  base: 'L',
  letters: "L\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780"
}, {
  base: 'LJ',
  letters: "\u01C7"
}, {
  base: 'Lj',
  letters: "\u01C8"
}, {
  base: 'M',
  letters: "M\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C"
}, {
  base: 'N',
  letters: "N\u24C3\uFF2E\u01F8\u0143\xD1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4"
}, {
  base: 'NJ',
  letters: "\u01CA"
}, {
  base: 'Nj',
  letters: "\u01CB"
}, {
  base: 'O',
  letters: "O\u24C4\uFF2F\xD2\xD3\xD4\u1ED2\u1ED0\u1ED6\u1ED4\xD5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\xD6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\xD8\u01FE\u0186\u019F\uA74A\uA74C"
}, {
  base: 'OI',
  letters: "\u01A2"
}, {
  base: 'OO',
  letters: "\uA74E"
}, {
  base: 'OU',
  letters: "\u0222"
}, {
  base: 'P',
  letters: "P\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754"
}, {
  base: 'Q',
  letters: "Q\u24C6\uFF31\uA756\uA758\u024A"
}, {
  base: 'R',
  letters: "R\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782"
}, {
  base: 'S',
  letters: "S\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784"
}, {
  base: 'T',
  letters: "T\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786"
}, {
  base: 'TZ',
  letters: "\uA728"
}, {
  base: 'U',
  letters: "U\u24CA\uFF35\xD9\xDA\xDB\u0168\u1E78\u016A\u1E7A\u016C\xDC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244"
}, {
  base: 'V',
  letters: "V\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245"
}, {
  base: 'VY',
  letters: "\uA760"
}, {
  base: 'W',
  letters: "W\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72"
}, {
  base: 'X',
  letters: "X\u24CD\uFF38\u1E8A\u1E8C"
}, {
  base: 'Y',
  letters: "Y\u24CE\uFF39\u1EF2\xDD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE"
}, {
  base: 'Z',
  letters: "Z\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762"
}, {
  base: 'a',
  letters: "a\u24D0\uFF41\u1E9A\xE0\xE1\xE2\u1EA7\u1EA5\u1EAB\u1EA9\xE3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\xE4\u01DF\u1EA3\xE5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250"
}, {
  base: 'aa',
  letters: "\uA733"
}, {
  base: 'ae',
  letters: "\xE6\u01FD\u01E3"
}, {
  base: 'ao',
  letters: "\uA735"
}, {
  base: 'au',
  letters: "\uA737"
}, {
  base: 'av',
  letters: "\uA739\uA73B"
}, {
  base: 'ay',
  letters: "\uA73D"
}, {
  base: 'b',
  letters: "b\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253"
}, {
  base: 'c',
  letters: "c\u24D2\uFF43\u0107\u0109\u010B\u010D\xE7\u1E09\u0188\u023C\uA73F\u2184"
}, {
  base: 'd',
  letters: "d\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A"
}, {
  base: 'dz',
  letters: "\u01F3\u01C6"
}, {
  base: 'e',
  letters: "e\u24D4\uFF45\xE8\xE9\xEA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\xEB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD"
}, {
  base: 'f',
  letters: "f\u24D5\uFF46\u1E1F\u0192\uA77C"
}, {
  base: 'g',
  letters: "g\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F"
}, {
  base: 'h',
  letters: "h\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265"
}, {
  base: 'hv',
  letters: "\u0195"
}, {
  base: 'i',
  letters: "i\u24D8\uFF49\xEC\xED\xEE\u0129\u012B\u012D\xEF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131"
}, {
  base: 'j',
  letters: "j\u24D9\uFF4A\u0135\u01F0\u0249"
}, {
  base: 'k',
  letters: "k\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3"
}, {
  base: 'l',
  letters: "l\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747"
}, {
  base: 'lj',
  letters: "\u01C9"
}, {
  base: 'm',
  letters: "m\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F"
}, {
  base: 'n',
  letters: "n\u24DD\uFF4E\u01F9\u0144\xF1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5"
}, {
  base: 'nj',
  letters: "\u01CC"
}, {
  base: 'o',
  letters: "o\u24DE\uFF4F\xF2\xF3\xF4\u1ED3\u1ED1\u1ED7\u1ED5\xF5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\xF6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\xF8\u01FF\u0254\uA74B\uA74D\u0275"
}, {
  base: 'oi',
  letters: "\u01A3"
}, {
  base: 'ou',
  letters: "\u0223"
}, {
  base: 'oo',
  letters: "\uA74F"
}, {
  base: 'p',
  letters: "p\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755"
}, {
  base: 'q',
  letters: "q\u24E0\uFF51\u024B\uA757\uA759"
}, {
  base: 'r',
  letters: "r\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783"
}, {
  base: 's',
  letters: "s\u24E2\uFF53\xDF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B"
}, {
  base: 't',
  letters: "t\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787"
}, {
  base: 'tz',
  letters: "\uA729"
}, {
  base: 'u',
  letters: "u\u24E4\uFF55\xF9\xFA\xFB\u0169\u1E79\u016B\u1E7B\u016D\xFC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289"
}, {
  base: 'v',
  letters: "v\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C"
}, {
  base: 'vy',
  letters: "\uA761"
}, {
  base: 'w',
  letters: "w\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73"
}, {
  base: 'x',
  letters: "x\u24E7\uFF58\u1E8B\u1E8D"
}, {
  base: 'y',
  letters: "y\u24E8\uFF59\u1EF3\xFD\u0177\u1EF9\u0233\u1E8F\xFF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF"
}, {
  base: 'z',
  letters: "z\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763"
}];
var anyDiacritic = new RegExp('[' + diacritics.map(function (d) {
  return d.letters;
}).join('') + ']', 'g');
var diacriticToBase = {};

for (var i = 0; i < diacritics.length; i++) {
  var diacritic = diacritics[i];

  for (var j = 0; j < diacritic.letters.length; j++) {
    diacriticToBase[diacritic.letters[j]] = diacritic.base;
  }
}

var stripDiacritics = function stripDiacritics(str) {
  return str.replace(anyDiacritic, function (match) {
    return diacriticToBase[match];
  });
};

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var trimString = function trimString(str) {
  return str.replace(/^\s+|\s+$/g, '');
};

var defaultStringify = function defaultStringify(option) {
  return "".concat(option.label, " ").concat(option.value);
};

var createFilter = function createFilter(config) {
  return function (option, rawInput) {
    var _ignoreCase$ignoreAcc = _objectSpread({
      ignoreCase: true,
      ignoreAccents: true,
      stringify: defaultStringify,
      trim: true,
      matchFrom: 'any'
    }, config),
        ignoreCase = _ignoreCase$ignoreAcc.ignoreCase,
        ignoreAccents = _ignoreCase$ignoreAcc.ignoreAccents,
        stringify = _ignoreCase$ignoreAcc.stringify,
        trim = _ignoreCase$ignoreAcc.trim,
        matchFrom = _ignoreCase$ignoreAcc.matchFrom;

    var input = trim ? trimString(rawInput) : rawInput;
    var candidate = trim ? trimString(stringify(option)) : stringify(option);

    if (ignoreCase) {
      input = input.toLowerCase();
      candidate = candidate.toLowerCase();
    }

    if (ignoreAccents) {
      input = stripDiacritics(input);
      candidate = stripDiacritics(candidate);
    }

    return matchFrom === 'start' ? candidate.substr(0, input.length) === input : candidate.indexOf(input) > -1;
  };
};

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

var _ref =  true ? {
  name: "1laao21-a11yText",
  styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap;"
} : 0;

var A11yText = function A11yText(props) {
  return (0,core_browser_esm/* jsx */.tZ)("span", (0,esm_extends/* default */.Z)({
    css: _ref
  }, props));
};

function DummyInput(_ref) {
  var inProp = _ref.in,
      out = _ref.out,
      onExited = _ref.onExited,
      appear = _ref.appear,
      enter = _ref.enter,
      exit = _ref.exit,
      innerRef = _ref.innerRef,
      emotion = _ref.emotion,
      props = (0,objectWithoutProperties/* default */.Z)(_ref, ["in", "out", "onExited", "appear", "enter", "exit", "innerRef", "emotion"]);

  return (0,core_browser_esm/* jsx */.tZ)("input", (0,esm_extends/* default */.Z)({
    ref: innerRef
  }, props, {
    css: /*#__PURE__*/(0,css_browser_esm/* default */.Z)({
      label: 'dummyInput',
      // get rid of any default styles
      background: 0,
      border: 0,
      fontSize: 'inherit',
      outline: 0,
      padding: 0,
      // important! without `width` browsers won't allow focus
      width: 1,
      // remove cursor on desktop
      color: 'transparent',
      // remove cursor on mobile whilst maintaining "scroll into view" behaviour
      left: -100,
      opacity: 0,
      position: 'relative',
      transform: 'scale(0)'
    },  true ? "" : 0)
  }));
}

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,getPrototypeOf/* default */.Z)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,getPrototypeOf/* default */.Z)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,possibleConstructorReturn/* default */.Z)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var NodeResolver = /*#__PURE__*/function (_Component) {
  (0,inherits/* default */.Z)(NodeResolver, _Component);

  var _super = _createSuper(NodeResolver);

  function NodeResolver() {
    (0,classCallCheck/* default */.Z)(this, NodeResolver);

    return _super.apply(this, arguments);
  }

  (0,createClass/* default */.Z)(NodeResolver, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.innerRef((0,react_dom.findDOMNode)(this));
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.innerRef(null);
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);

  return NodeResolver;
}(react.Component);

var STYLE_KEYS = ['boxSizing', 'height', 'overflow', 'paddingRight', 'position'];
var LOCK_STYLES = {
  boxSizing: 'border-box',
  // account for possible declaration `width: 100%;` on body
  overflow: 'hidden',
  position: 'relative',
  height: '100%'
};

function preventTouchMove(e) {
  e.preventDefault();
}
function allowTouchMove(e) {
  e.stopPropagation();
}
function preventInertiaScroll() {
  var top = this.scrollTop;
  var totalScroll = this.scrollHeight;
  var currentScroll = top + this.offsetHeight;

  if (top === 0) {
    this.scrollTop = 1;
  } else if (currentScroll === totalScroll) {
    this.scrollTop = top - 1;
  }
} // `ontouchstart` check works on most browsers
// `maxTouchPoints` works on IE10/11 and Surface

function isTouchDevice() {
  return 'ontouchstart' in window || navigator.maxTouchPoints;
}

function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = (0,getPrototypeOf/* default */.Z)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,getPrototypeOf/* default */.Z)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,possibleConstructorReturn/* default */.Z)(this, result); }; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var canUseDOM = !!( window.document && window.document.createElement);
var activeScrollLocks = 0;

var ScrollLock = /*#__PURE__*/function (_Component) {
  (0,inherits/* default */.Z)(ScrollLock, _Component);

  var _super = _createSuper$1(ScrollLock);

  function ScrollLock() {
    var _this;

    (0,classCallCheck/* default */.Z)(this, ScrollLock);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.originalStyles = {};
    _this.listenerOptions = {
      capture: false,
      passive: false
    };
    return _this;
  }

  (0,createClass/* default */.Z)(ScrollLock, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (!canUseDOM) return;
      var _this$props = this.props,
          accountForScrollbars = _this$props.accountForScrollbars,
          touchScrollTarget = _this$props.touchScrollTarget;
      var target = document.body;
      var targetStyle = target && target.style;

      if (accountForScrollbars) {
        // store any styles already applied to the body
        STYLE_KEYS.forEach(function (key) {
          var val = targetStyle && targetStyle[key];
          _this2.originalStyles[key] = val;
        });
      } // apply the lock styles and padding if this is the first scroll lock


      if (accountForScrollbars && activeScrollLocks < 1) {
        var currentPadding = parseInt(this.originalStyles.paddingRight, 10) || 0;
        var clientWidth = document.body ? document.body.clientWidth : 0;
        var adjustedPadding = window.innerWidth - clientWidth + currentPadding || 0;
        Object.keys(LOCK_STYLES).forEach(function (key) {
          var val = LOCK_STYLES[key];

          if (targetStyle) {
            targetStyle[key] = val;
          }
        });

        if (targetStyle) {
          targetStyle.paddingRight = "".concat(adjustedPadding, "px");
        }
      } // account for touch devices


      if (target && isTouchDevice()) {
        // Mobile Safari ignores { overflow: hidden } declaration on the body.
        target.addEventListener('touchmove', preventTouchMove, this.listenerOptions); // Allow scroll on provided target

        if (touchScrollTarget) {
          touchScrollTarget.addEventListener('touchstart', preventInertiaScroll, this.listenerOptions);
          touchScrollTarget.addEventListener('touchmove', allowTouchMove, this.listenerOptions);
        }
      } // increment active scroll locks


      activeScrollLocks += 1;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this3 = this;

      if (!canUseDOM) return;
      var _this$props2 = this.props,
          accountForScrollbars = _this$props2.accountForScrollbars,
          touchScrollTarget = _this$props2.touchScrollTarget;
      var target = document.body;
      var targetStyle = target && target.style; // safely decrement active scroll locks

      activeScrollLocks = Math.max(activeScrollLocks - 1, 0); // reapply original body styles, if any

      if (accountForScrollbars && activeScrollLocks < 1) {
        STYLE_KEYS.forEach(function (key) {
          var val = _this3.originalStyles[key];

          if (targetStyle) {
            targetStyle[key] = val;
          }
        });
      } // remove touch listeners


      if (target && isTouchDevice()) {
        target.removeEventListener('touchmove', preventTouchMove, this.listenerOptions);

        if (touchScrollTarget) {
          touchScrollTarget.removeEventListener('touchstart', preventInertiaScroll, this.listenerOptions);
          touchScrollTarget.removeEventListener('touchmove', allowTouchMove, this.listenerOptions);
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return ScrollLock;
}(react.Component);

ScrollLock.defaultProps = {
  accountForScrollbars: true
};

function _EMOTION_STRINGIFIED_CSS_ERROR__$1() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

function _createSuper$2(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$2(); return function _createSuperInternal() { var Super = (0,getPrototypeOf/* default */.Z)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,getPrototypeOf/* default */.Z)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,possibleConstructorReturn/* default */.Z)(this, result); }; }

function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var _ref$1 =  true ? {
  name: "1dsbpcp",
  styles: "position:fixed;left:0;bottom:0;right:0;top:0;"
} : 0;

// NOTE:
// We shouldn't need this after updating to React v16.3.0, which introduces:
// - createRef() https://reactjs.org/docs/react-api.html#reactcreateref
// - forwardRef() https://reactjs.org/docs/react-api.html#reactforwardref
var ScrollBlock = /*#__PURE__*/function (_PureComponent) {
  (0,inherits/* default */.Z)(ScrollBlock, _PureComponent);

  var _super = _createSuper$2(ScrollBlock);

  function ScrollBlock() {
    var _this;

    (0,classCallCheck/* default */.Z)(this, ScrollBlock);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      touchScrollTarget: null
    };

    _this.getScrollTarget = function (ref) {
      if (ref === _this.state.touchScrollTarget) return;

      _this.setState({
        touchScrollTarget: ref
      });
    };

    _this.blurSelectInput = function () {
      if (document.activeElement) {
        document.activeElement.blur();
      }
    };

    return _this;
  }

  (0,createClass/* default */.Z)(ScrollBlock, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          isEnabled = _this$props.isEnabled;
      var touchScrollTarget = this.state.touchScrollTarget; // bail early if not enabled

      if (!isEnabled) return children;
      /*
       * Div
       * ------------------------------
       * blocks scrolling on non-body elements behind the menu
        * NodeResolver
       * ------------------------------
       * we need a reference to the scrollable element to "unlock" scroll on
       * mobile devices
        * ScrollLock
       * ------------------------------
       * actually does the scroll locking
       */

      return (0,core_browser_esm/* jsx */.tZ)("div", null, (0,core_browser_esm/* jsx */.tZ)("div", {
        onClick: this.blurSelectInput,
        css: _ref$1
      }), (0,core_browser_esm/* jsx */.tZ)(NodeResolver, {
        innerRef: this.getScrollTarget
      }, children), touchScrollTarget ? (0,core_browser_esm/* jsx */.tZ)(ScrollLock, {
        touchScrollTarget: touchScrollTarget
      }) : null);
    }
  }]);

  return ScrollBlock;
}(react.PureComponent);

function _createSuper$3(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$3(); return function _createSuperInternal() { var Super = (0,getPrototypeOf/* default */.Z)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,getPrototypeOf/* default */.Z)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,possibleConstructorReturn/* default */.Z)(this, result); }; }

function _isNativeReflectConstruct$3() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var ScrollCaptor = /*#__PURE__*/function (_Component) {
  (0,inherits/* default */.Z)(ScrollCaptor, _Component);

  var _super = _createSuper$3(ScrollCaptor);

  function ScrollCaptor() {
    var _this;

    (0,classCallCheck/* default */.Z)(this, ScrollCaptor);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.isBottom = false;
    _this.isTop = false;
    _this.scrollTarget = void 0;
    _this.touchStart = void 0;

    _this.cancelScroll = function (event) {
      event.preventDefault();
      event.stopPropagation();
    };

    _this.handleEventDelta = function (event, delta) {
      var _this$props = _this.props,
          onBottomArrive = _this$props.onBottomArrive,
          onBottomLeave = _this$props.onBottomLeave,
          onTopArrive = _this$props.onTopArrive,
          onTopLeave = _this$props.onTopLeave;
      var _this$scrollTarget = _this.scrollTarget,
          scrollTop = _this$scrollTarget.scrollTop,
          scrollHeight = _this$scrollTarget.scrollHeight,
          clientHeight = _this$scrollTarget.clientHeight;
      var target = _this.scrollTarget;
      var isDeltaPositive = delta > 0;
      var availableScroll = scrollHeight - clientHeight - scrollTop;
      var shouldCancelScroll = false; // reset bottom/top flags

      if (availableScroll > delta && _this.isBottom) {
        if (onBottomLeave) onBottomLeave(event);
        _this.isBottom = false;
      }

      if (isDeltaPositive && _this.isTop) {
        if (onTopLeave) onTopLeave(event);
        _this.isTop = false;
      } // bottom limit


      if (isDeltaPositive && delta > availableScroll) {
        if (onBottomArrive && !_this.isBottom) {
          onBottomArrive(event);
        }

        target.scrollTop = scrollHeight;
        shouldCancelScroll = true;
        _this.isBottom = true; // top limit
      } else if (!isDeltaPositive && -delta > scrollTop) {
        if (onTopArrive && !_this.isTop) {
          onTopArrive(event);
        }

        target.scrollTop = 0;
        shouldCancelScroll = true;
        _this.isTop = true;
      } // cancel scroll


      if (shouldCancelScroll) {
        _this.cancelScroll(event);
      }
    };

    _this.onWheel = function (event) {
      _this.handleEventDelta(event, event.deltaY);
    };

    _this.onTouchStart = function (event) {
      // set touch start so we can calculate touchmove delta
      _this.touchStart = event.changedTouches[0].clientY;
    };

    _this.onTouchMove = function (event) {
      var deltaY = _this.touchStart - event.changedTouches[0].clientY;

      _this.handleEventDelta(event, deltaY);
    };

    _this.getScrollTarget = function (ref) {
      _this.scrollTarget = ref;
    };

    return _this;
  }

  (0,createClass/* default */.Z)(ScrollCaptor, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.startListening(this.scrollTarget);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.stopListening(this.scrollTarget);
    }
  }, {
    key: "startListening",
    value: function startListening(el) {
      // bail early if no element is available to attach to
      if (!el) return; // all the if statements are to appease Flow 😢

      if (typeof el.addEventListener === 'function') {
        el.addEventListener('wheel', this.onWheel, false);
      }

      if (typeof el.addEventListener === 'function') {
        el.addEventListener('touchstart', this.onTouchStart, false);
      }

      if (typeof el.addEventListener === 'function') {
        el.addEventListener('touchmove', this.onTouchMove, false);
      }
    }
  }, {
    key: "stopListening",
    value: function stopListening(el) {
      if (!el) return; // all the if statements are to appease Flow 😢

      if (typeof el.removeEventListener === 'function') {
        el.removeEventListener('wheel', this.onWheel, false);
      }

      if (typeof el.removeEventListener === 'function') {
        el.removeEventListener('touchstart', this.onTouchStart, false);
      }

      if (typeof el.removeEventListener === 'function') {
        el.removeEventListener('touchmove', this.onTouchMove, false);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react.createElement(NodeResolver, {
        innerRef: this.getScrollTarget
      }, this.props.children);
    }
  }]);

  return ScrollCaptor;
}(react.Component);

function ScrollCaptorSwitch(_ref) {
  var _ref$isEnabled = _ref.isEnabled,
      isEnabled = _ref$isEnabled === void 0 ? true : _ref$isEnabled,
      props = (0,objectWithoutProperties/* default */.Z)(_ref, ["isEnabled"]);

  return isEnabled ? /*#__PURE__*/react.createElement(ScrollCaptor, props) : props.children;
}

var instructionsAriaMessage = function instructionsAriaMessage(event) {
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var isSearchable = context.isSearchable,
      isMulti = context.isMulti,
      label = context.label,
      isDisabled = context.isDisabled,
      tabSelectsValue = context.tabSelectsValue;

  switch (event) {
    case 'menu':
      return "Use Up and Down to choose options".concat(isDisabled ? '' : ', press Enter to select the currently focused option', ", press Escape to exit the menu").concat(tabSelectsValue ? ', press Tab to select the option and exit the menu' : '', ".");

    case 'input':
      return "".concat(label ? label : 'Select', " is focused ").concat(isSearchable ? ',type to refine list' : '', ", press Down to open the menu, ").concat(isMulti ? ' press left to focus selected values' : '');

    case 'value':
      return 'Use left and right to toggle between focused values, press Backspace to remove the currently focused value';
  }
};
var valueEventAriaMessage = function valueEventAriaMessage(event, context) {
  var value = context.value,
      isDisabled = context.isDisabled;
  if (!value) return;

  switch (event) {
    case 'deselect-option':
    case 'pop-value':
    case 'remove-value':
      return "option ".concat(value, ", deselected.");

    case 'select-option':
      return isDisabled ? "option ".concat(value, " is disabled. Select another option.") : "option ".concat(value, ", selected.");
  }
};
var valueFocusAriaMessage = function valueFocusAriaMessage(_ref) {
  var focusedValue = _ref.focusedValue,
      getOptionLabel = _ref.getOptionLabel,
      selectValue = _ref.selectValue;
  return "value ".concat(getOptionLabel(focusedValue), " focused, ").concat(selectValue.indexOf(focusedValue) + 1, " of ").concat(selectValue.length, ".");
};
var optionFocusAriaMessage = function optionFocusAriaMessage(_ref2) {
  var focusedOption = _ref2.focusedOption,
      getOptionLabel = _ref2.getOptionLabel,
      options = _ref2.options;
  return "option ".concat(getOptionLabel(focusedOption), " focused").concat(focusedOption.isDisabled ? ' disabled' : '', ", ").concat(options.indexOf(focusedOption) + 1, " of ").concat(options.length, ".");
};
var resultsAriaMessage = function resultsAriaMessage(_ref3) {
  var inputValue = _ref3.inputValue,
      screenReaderMessage = _ref3.screenReaderMessage;
  return "".concat(screenReaderMessage).concat(inputValue ? ' for search term ' + inputValue : '', ".");
};

var formatGroupLabel = function formatGroupLabel(group) {
  return group.label;
};
var getOptionLabel = function getOptionLabel(option) {
  return option.label;
};
var getOptionValue = function getOptionValue(option) {
  return option.value;
};
var isOptionDisabled = function isOptionDisabled(option) {
  return !!option.isDisabled;
};

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var defaultStyles = {
  clearIndicator: index_75b02bac_browser_esm.c,
  container: index_75b02bac_browser_esm.a,
  control: index_75b02bac_browser_esm.b,
  dropdownIndicator: index_75b02bac_browser_esm.d,
  group: index_75b02bac_browser_esm.g,
  groupHeading: index_75b02bac_browser_esm.e,
  indicatorsContainer: index_75b02bac_browser_esm.i,
  indicatorSeparator: index_75b02bac_browser_esm.f,
  input: index_75b02bac_browser_esm.h,
  loadingIndicator: index_75b02bac_browser_esm.l,
  loadingMessage: index_75b02bac_browser_esm.j,
  menu: index_75b02bac_browser_esm.m,
  menuList: index_75b02bac_browser_esm.k,
  menuPortal: index_75b02bac_browser_esm.n,
  multiValue: index_75b02bac_browser_esm.o,
  multiValueLabel: index_75b02bac_browser_esm.p,
  multiValueRemove: index_75b02bac_browser_esm.q,
  noOptionsMessage: index_75b02bac_browser_esm.r,
  option: index_75b02bac_browser_esm.s,
  placeholder: index_75b02bac_browser_esm.t,
  singleValue: index_75b02bac_browser_esm.u,
  valueContainer: index_75b02bac_browser_esm.v
}; // Merge Utility
// Allows consumers to extend a base Select with additional styles

function mergeStyles(source) {
  var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  // initialize with source styles
  var styles = _objectSpread$1({}, source); // massage in target styles


  Object.keys(target).forEach(function (key) {
    if (source[key]) {
      styles[key] = function (rsCss, props) {
        return target[key](source[key](rsCss, props), props);
      };
    } else {
      styles[key] = target[key];
    }
  });
  return styles;
}

var colors = {
  primary: '#2684FF',
  primary75: '#4C9AFF',
  primary50: '#B2D4FF',
  primary25: '#DEEBFF',
  danger: '#DE350B',
  dangerLight: '#FFBDAD',
  neutral0: 'hsl(0, 0%, 100%)',
  neutral5: 'hsl(0, 0%, 95%)',
  neutral10: 'hsl(0, 0%, 90%)',
  neutral20: 'hsl(0, 0%, 80%)',
  neutral30: 'hsl(0, 0%, 70%)',
  neutral40: 'hsl(0, 0%, 60%)',
  neutral50: 'hsl(0, 0%, 50%)',
  neutral60: 'hsl(0, 0%, 40%)',
  neutral70: 'hsl(0, 0%, 30%)',
  neutral80: 'hsl(0, 0%, 20%)',
  neutral90: 'hsl(0, 0%, 10%)'
};
var borderRadius = 4; // Used to calculate consistent margin/padding on elements

var baseUnit = 4; // The minimum height of the control

var controlHeight = 38; // The amount of space between the control and menu */

var menuGutter = baseUnit * 2;
var spacing = {
  baseUnit: baseUnit,
  controlHeight: controlHeight,
  menuGutter: menuGutter
};
var defaultTheme = {
  borderRadius: borderRadius,
  colors: colors,
  spacing: spacing
};

function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$2(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper$4(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$4(); return function _createSuperInternal() { var Super = (0,getPrototypeOf/* default */.Z)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,getPrototypeOf/* default */.Z)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,possibleConstructorReturn/* default */.Z)(this, result); }; }

function _isNativeReflectConstruct$4() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var defaultProps = {
  backspaceRemovesValue: true,
  blurInputOnSelect: (0,index_75b02bac_browser_esm.w)(),
  captureMenuScroll: !(0,index_75b02bac_browser_esm.w)(),
  closeMenuOnSelect: true,
  closeMenuOnScroll: false,
  components: {},
  controlShouldRenderValue: true,
  escapeClearsValue: false,
  filterOption: createFilter(),
  formatGroupLabel: formatGroupLabel,
  getOptionLabel: getOptionLabel,
  getOptionValue: getOptionValue,
  isDisabled: false,
  isLoading: false,
  isMulti: false,
  isRtl: false,
  isSearchable: true,
  isOptionDisabled: isOptionDisabled,
  loadingMessage: function loadingMessage() {
    return 'Loading...';
  },
  maxMenuHeight: 300,
  minMenuHeight: 140,
  menuIsOpen: false,
  menuPlacement: 'bottom',
  menuPosition: 'absolute',
  menuShouldBlockScroll: false,
  menuShouldScrollIntoView: !(0,index_75b02bac_browser_esm.x)(),
  noOptionsMessage: function noOptionsMessage() {
    return 'No options';
  },
  openMenuOnFocus: false,
  openMenuOnClick: true,
  options: [],
  pageSize: 5,
  placeholder: 'Select...',
  screenReaderStatus: function screenReaderStatus(_ref) {
    var count = _ref.count;
    return "".concat(count, " result").concat(count !== 1 ? 's' : '', " available");
  },
  styles: {},
  tabIndex: '0',
  tabSelectsValue: true
};
var instanceId = 1;

var Select = /*#__PURE__*/function (_Component) {
  (0,inherits/* default */.Z)(Select, _Component);

  var _super = _createSuper$4(Select);

  // Misc. Instance Properties
  // ------------------------------
  // TODO
  // Refs
  // ------------------------------
  // Lifecycle
  // ------------------------------
  function Select(_props) {
    var _this;

    (0,classCallCheck/* default */.Z)(this, Select);

    _this = _super.call(this, _props);
    _this.state = {
      ariaLiveSelection: '',
      ariaLiveContext: '',
      focusedOption: null,
      focusedValue: null,
      inputIsHidden: false,
      isFocused: false,
      menuOptions: {
        render: [],
        focusable: []
      },
      selectValue: []
    };
    _this.blockOptionHover = false;
    _this.isComposing = false;
    _this.clearFocusValueOnUpdate = false;
    _this.commonProps = void 0;
    _this.components = void 0;
    _this.hasGroups = false;
    _this.initialTouchX = 0;
    _this.initialTouchY = 0;
    _this.inputIsHiddenAfterUpdate = void 0;
    _this.instancePrefix = '';
    _this.openAfterFocus = false;
    _this.scrollToFocusedOptionOnUpdate = false;
    _this.userIsDragging = void 0;
    _this.controlRef = null;

    _this.getControlRef = function (ref) {
      _this.controlRef = ref;
    };

    _this.focusedOptionRef = null;

    _this.getFocusedOptionRef = function (ref) {
      _this.focusedOptionRef = ref;
    };

    _this.menuListRef = null;

    _this.getMenuListRef = function (ref) {
      _this.menuListRef = ref;
    };

    _this.inputRef = null;

    _this.getInputRef = function (ref) {
      _this.inputRef = ref;
    };

    _this.cacheComponents = function (components) {
      _this.components = (0,index_75b02bac_browser_esm.y)({
        components: components
      });
    };

    _this.focus = _this.focusInput;
    _this.blur = _this.blurInput;

    _this.onChange = function (newValue, actionMeta) {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          name = _this$props.name;
      onChange(newValue, _objectSpread$2(_objectSpread$2({}, actionMeta), {}, {
        name: name
      }));
    };

    _this.setValue = function (newValue) {
      var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'set-value';
      var option = arguments.length > 2 ? arguments[2] : undefined;
      var _this$props2 = _this.props,
          closeMenuOnSelect = _this$props2.closeMenuOnSelect,
          isMulti = _this$props2.isMulti;

      _this.onInputChange('', {
        action: 'set-value'
      });

      if (closeMenuOnSelect) {
        _this.inputIsHiddenAfterUpdate = !isMulti;

        _this.onMenuClose();
      } // when the select value should change, we should reset focusedValue


      _this.clearFocusValueOnUpdate = true;

      _this.onChange(newValue, {
        action: action,
        option: option
      });
    };

    _this.selectOption = function (newValue) {
      var _this$props3 = _this.props,
          blurInputOnSelect = _this$props3.blurInputOnSelect,
          isMulti = _this$props3.isMulti;
      var selectValue = _this.state.selectValue;

      if (isMulti) {
        if (_this.isOptionSelected(newValue, selectValue)) {
          var candidate = _this.getOptionValue(newValue);

          _this.setValue(selectValue.filter(function (i) {
            return _this.getOptionValue(i) !== candidate;
          }), 'deselect-option', newValue);

          _this.announceAriaLiveSelection({
            event: 'deselect-option',
            context: {
              value: _this.getOptionLabel(newValue)
            }
          });
        } else {
          if (!_this.isOptionDisabled(newValue, selectValue)) {
            _this.setValue([].concat((0,toConsumableArray/* default */.Z)(selectValue), [newValue]), 'select-option', newValue);

            _this.announceAriaLiveSelection({
              event: 'select-option',
              context: {
                value: _this.getOptionLabel(newValue)
              }
            });
          } else {
            // announce that option is disabled
            _this.announceAriaLiveSelection({
              event: 'select-option',
              context: {
                value: _this.getOptionLabel(newValue),
                isDisabled: true
              }
            });
          }
        }
      } else {
        if (!_this.isOptionDisabled(newValue, selectValue)) {
          _this.setValue(newValue, 'select-option');

          _this.announceAriaLiveSelection({
            event: 'select-option',
            context: {
              value: _this.getOptionLabel(newValue)
            }
          });
        } else {
          // announce that option is disabled
          _this.announceAriaLiveSelection({
            event: 'select-option',
            context: {
              value: _this.getOptionLabel(newValue),
              isDisabled: true
            }
          });
        }
      }

      if (blurInputOnSelect) {
        _this.blurInput();
      }
    };

    _this.removeValue = function (removedValue) {
      var selectValue = _this.state.selectValue;

      var candidate = _this.getOptionValue(removedValue);

      var newValue = selectValue.filter(function (i) {
        return _this.getOptionValue(i) !== candidate;
      });

      _this.onChange(newValue.length ? newValue : null, {
        action: 'remove-value',
        removedValue: removedValue
      });

      _this.announceAriaLiveSelection({
        event: 'remove-value',
        context: {
          value: removedValue ? _this.getOptionLabel(removedValue) : ''
        }
      });

      _this.focusInput();
    };

    _this.clearValue = function () {
      _this.onChange(null, {
        action: 'clear'
      });
    };

    _this.popValue = function () {
      var selectValue = _this.state.selectValue;
      var lastSelectedValue = selectValue[selectValue.length - 1];
      var newValue = selectValue.slice(0, selectValue.length - 1);

      _this.announceAriaLiveSelection({
        event: 'pop-value',
        context: {
          value: lastSelectedValue ? _this.getOptionLabel(lastSelectedValue) : ''
        }
      });

      _this.onChange(newValue.length ? newValue : null, {
        action: 'pop-value',
        removedValue: lastSelectedValue
      });
    };

    _this.getValue = function () {
      return _this.state.selectValue;
    };

    _this.cx = function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return index_75b02bac_browser_esm.z.apply(void 0, [_this.props.classNamePrefix].concat(args));
    };

    _this.getOptionLabel = function (data) {
      return _this.props.getOptionLabel(data);
    };

    _this.getOptionValue = function (data) {
      return _this.props.getOptionValue(data);
    };

    _this.getStyles = function (key, props) {
      var base = defaultStyles[key](props);
      base.boxSizing = 'border-box';
      var custom = _this.props.styles[key];
      return custom ? custom(base, props) : base;
    };

    _this.getElementId = function (element) {
      return "".concat(_this.instancePrefix, "-").concat(element);
    };

    _this.getActiveDescendentId = function () {
      var menuIsOpen = _this.props.menuIsOpen;
      var _this$state = _this.state,
          menuOptions = _this$state.menuOptions,
          focusedOption = _this$state.focusedOption;
      if (!focusedOption || !menuIsOpen) return undefined;
      var index = menuOptions.focusable.indexOf(focusedOption);
      var option = menuOptions.render[index];
      return option && option.key;
    };

    _this.announceAriaLiveSelection = function (_ref2) {
      var event = _ref2.event,
          context = _ref2.context;

      _this.setState({
        ariaLiveSelection: valueEventAriaMessage(event, context)
      });
    };

    _this.announceAriaLiveContext = function (_ref3) {
      var event = _ref3.event,
          context = _ref3.context;

      _this.setState({
        ariaLiveContext: instructionsAriaMessage(event, _objectSpread$2(_objectSpread$2({}, context), {}, {
          label: _this.props['aria-label']
        }))
      });
    };

    _this.onMenuMouseDown = function (event) {
      if (event.button !== 0) {
        return;
      }

      event.stopPropagation();
      event.preventDefault();

      _this.focusInput();
    };

    _this.onMenuMouseMove = function (event) {
      _this.blockOptionHover = false;
    };

    _this.onControlMouseDown = function (event) {
      var openMenuOnClick = _this.props.openMenuOnClick;

      if (!_this.state.isFocused) {
        if (openMenuOnClick) {
          _this.openAfterFocus = true;
        }

        _this.focusInput();
      } else if (!_this.props.menuIsOpen) {
        if (openMenuOnClick) {
          _this.openMenu('first');
        }
      } else {
        if ( // $FlowFixMe
        event.target.tagName !== 'INPUT' && event.target.tagName !== 'TEXTAREA') {
          _this.onMenuClose();
        }
      }

      if ( // $FlowFixMe
      event.target.tagName !== 'INPUT' && event.target.tagName !== 'TEXTAREA') {
        event.preventDefault();
      }
    };

    _this.onDropdownIndicatorMouseDown = function (event) {
      // ignore mouse events that weren't triggered by the primary button
      if (event && event.type === 'mousedown' && event.button !== 0) {
        return;
      }

      if (_this.props.isDisabled) return;
      var _this$props4 = _this.props,
          isMulti = _this$props4.isMulti,
          menuIsOpen = _this$props4.menuIsOpen;

      _this.focusInput();

      if (menuIsOpen) {
        _this.inputIsHiddenAfterUpdate = !isMulti;

        _this.onMenuClose();
      } else {
        _this.openMenu('first');
      }

      event.preventDefault();
      event.stopPropagation();
    };

    _this.onClearIndicatorMouseDown = function (event) {
      // ignore mouse events that weren't triggered by the primary button
      if (event && event.type === 'mousedown' && event.button !== 0) {
        return;
      }

      _this.clearValue();

      event.stopPropagation();
      _this.openAfterFocus = false;

      if (event.type === 'touchend') {
        _this.focusInput();
      } else {
        setTimeout(function () {
          return _this.focusInput();
        });
      }
    };

    _this.onScroll = function (event) {
      if (typeof _this.props.closeMenuOnScroll === 'boolean') {
        if (event.target instanceof HTMLElement && (0,index_75b02bac_browser_esm.A)(event.target)) {
          _this.props.onMenuClose();
        }
      } else if (typeof _this.props.closeMenuOnScroll === 'function') {
        if (_this.props.closeMenuOnScroll(event)) {
          _this.props.onMenuClose();
        }
      }
    };

    _this.onCompositionStart = function () {
      _this.isComposing = true;
    };

    _this.onCompositionEnd = function () {
      _this.isComposing = false;
    };

    _this.onTouchStart = function (_ref4) {
      var touches = _ref4.touches;
      var touch = touches && touches.item(0);

      if (!touch) {
        return;
      }

      _this.initialTouchX = touch.clientX;
      _this.initialTouchY = touch.clientY;
      _this.userIsDragging = false;
    };

    _this.onTouchMove = function (_ref5) {
      var touches = _ref5.touches;
      var touch = touches && touches.item(0);

      if (!touch) {
        return;
      }

      var deltaX = Math.abs(touch.clientX - _this.initialTouchX);
      var deltaY = Math.abs(touch.clientY - _this.initialTouchY);
      var moveThreshold = 5;
      _this.userIsDragging = deltaX > moveThreshold || deltaY > moveThreshold;
    };

    _this.onTouchEnd = function (event) {
      if (_this.userIsDragging) return; // close the menu if the user taps outside
      // we're checking on event.target here instead of event.currentTarget, because we want to assert information
      // on events on child elements, not the document (which we've attached this handler to).

      if (_this.controlRef && !_this.controlRef.contains(event.target) && _this.menuListRef && !_this.menuListRef.contains(event.target)) {
        _this.blurInput();
      } // reset move vars


      _this.initialTouchX = 0;
      _this.initialTouchY = 0;
    };

    _this.onControlTouchEnd = function (event) {
      if (_this.userIsDragging) return;

      _this.onControlMouseDown(event);
    };

    _this.onClearIndicatorTouchEnd = function (event) {
      if (_this.userIsDragging) return;

      _this.onClearIndicatorMouseDown(event);
    };

    _this.onDropdownIndicatorTouchEnd = function (event) {
      if (_this.userIsDragging) return;

      _this.onDropdownIndicatorMouseDown(event);
    };

    _this.handleInputChange = function (event) {
      var inputValue = event.currentTarget.value;
      _this.inputIsHiddenAfterUpdate = false;

      _this.onInputChange(inputValue, {
        action: 'input-change'
      });

      if (!_this.props.menuIsOpen) {
        _this.onMenuOpen();
      }
    };

    _this.onInputFocus = function (event) {
      var _this$props5 = _this.props,
          isSearchable = _this$props5.isSearchable,
          isMulti = _this$props5.isMulti;

      if (_this.props.onFocus) {
        _this.props.onFocus(event);
      }

      _this.inputIsHiddenAfterUpdate = false;

      _this.announceAriaLiveContext({
        event: 'input',
        context: {
          isSearchable: isSearchable,
          isMulti: isMulti
        }
      });

      _this.setState({
        isFocused: true
      });

      if (_this.openAfterFocus || _this.props.openMenuOnFocus) {
        _this.openMenu('first');
      }

      _this.openAfterFocus = false;
    };

    _this.onInputBlur = function (event) {
      if (_this.menuListRef && _this.menuListRef.contains(document.activeElement)) {
        _this.inputRef.focus();

        return;
      }

      if (_this.props.onBlur) {
        _this.props.onBlur(event);
      }

      _this.onInputChange('', {
        action: 'input-blur'
      });

      _this.onMenuClose();

      _this.setState({
        focusedValue: null,
        isFocused: false
      });
    };

    _this.onOptionHover = function (focusedOption) {
      if (_this.blockOptionHover || _this.state.focusedOption === focusedOption) {
        return;
      }

      _this.setState({
        focusedOption: focusedOption
      });
    };

    _this.shouldHideSelectedOptions = function () {
      var _this$props6 = _this.props,
          hideSelectedOptions = _this$props6.hideSelectedOptions,
          isMulti = _this$props6.isMulti;
      if (hideSelectedOptions === undefined) return isMulti;
      return hideSelectedOptions;
    };

    _this.onKeyDown = function (event) {
      var _this$props7 = _this.props,
          isMulti = _this$props7.isMulti,
          backspaceRemovesValue = _this$props7.backspaceRemovesValue,
          escapeClearsValue = _this$props7.escapeClearsValue,
          inputValue = _this$props7.inputValue,
          isClearable = _this$props7.isClearable,
          isDisabled = _this$props7.isDisabled,
          menuIsOpen = _this$props7.menuIsOpen,
          onKeyDown = _this$props7.onKeyDown,
          tabSelectsValue = _this$props7.tabSelectsValue,
          openMenuOnFocus = _this$props7.openMenuOnFocus;
      var _this$state2 = _this.state,
          focusedOption = _this$state2.focusedOption,
          focusedValue = _this$state2.focusedValue,
          selectValue = _this$state2.selectValue;
      if (isDisabled) return;

      if (typeof onKeyDown === 'function') {
        onKeyDown(event);

        if (event.defaultPrevented) {
          return;
        }
      } // Block option hover events when the user has just pressed a key


      _this.blockOptionHover = true;

      switch (event.key) {
        case 'ArrowLeft':
          if (!isMulti || inputValue) return;

          _this.focusValue('previous');

          break;

        case 'ArrowRight':
          if (!isMulti || inputValue) return;

          _this.focusValue('next');

          break;

        case 'Delete':
        case 'Backspace':
          if (inputValue) return;

          if (focusedValue) {
            _this.removeValue(focusedValue);
          } else {
            if (!backspaceRemovesValue) return;

            if (isMulti) {
              _this.popValue();
            } else if (isClearable) {
              _this.clearValue();
            }
          }

          break;

        case 'Tab':
          if (_this.isComposing) return;

          if (event.shiftKey || !menuIsOpen || !tabSelectsValue || !focusedOption || // don't capture the event if the menu opens on focus and the focused
          // option is already selected; it breaks the flow of navigation
          openMenuOnFocus && _this.isOptionSelected(focusedOption, selectValue)) {
            return;
          }

          _this.selectOption(focusedOption);

          break;

        case 'Enter':
          if (event.keyCode === 229) {
            // ignore the keydown event from an Input Method Editor(IME)
            // ref. https://www.w3.org/TR/uievents/#determine-keydown-keyup-keyCode
            break;
          }

          if (menuIsOpen) {
            if (!focusedOption) return;
            if (_this.isComposing) return;

            _this.selectOption(focusedOption);

            break;
          }

          return;

        case 'Escape':
          if (menuIsOpen) {
            _this.inputIsHiddenAfterUpdate = false;

            _this.onInputChange('', {
              action: 'menu-close'
            });

            _this.onMenuClose();
          } else if (isClearable && escapeClearsValue) {
            _this.clearValue();
          }

          break;

        case ' ':
          // space
          if (inputValue) {
            return;
          }

          if (!menuIsOpen) {
            _this.openMenu('first');

            break;
          }

          if (!focusedOption) return;

          _this.selectOption(focusedOption);

          break;

        case 'ArrowUp':
          if (menuIsOpen) {
            _this.focusOption('up');
          } else {
            _this.openMenu('last');
          }

          break;

        case 'ArrowDown':
          if (menuIsOpen) {
            _this.focusOption('down');
          } else {
            _this.openMenu('first');
          }

          break;

        case 'PageUp':
          if (!menuIsOpen) return;

          _this.focusOption('pageup');

          break;

        case 'PageDown':
          if (!menuIsOpen) return;

          _this.focusOption('pagedown');

          break;

        case 'Home':
          if (!menuIsOpen) return;

          _this.focusOption('first');

          break;

        case 'End':
          if (!menuIsOpen) return;

          _this.focusOption('last');

          break;

        default:
          return;
      }

      event.preventDefault();
    };

    _this.buildMenuOptions = function (props, selectValue) {
      var _props$inputValue = props.inputValue,
          inputValue = _props$inputValue === void 0 ? '' : _props$inputValue,
          options = props.options;

      var toOption = function toOption(option, id) {
        var isDisabled = _this.isOptionDisabled(option, selectValue);

        var isSelected = _this.isOptionSelected(option, selectValue);

        var label = _this.getOptionLabel(option);

        var value = _this.getOptionValue(option);

        if (_this.shouldHideSelectedOptions() && isSelected || !_this.filterOption({
          label: label,
          value: value,
          data: option
        }, inputValue)) {
          return;
        }

        var onHover = isDisabled ? undefined : function () {
          return _this.onOptionHover(option);
        };
        var onSelect = isDisabled ? undefined : function () {
          return _this.selectOption(option);
        };
        var optionId = "".concat(_this.getElementId('option'), "-").concat(id);
        return {
          innerProps: {
            id: optionId,
            onClick: onSelect,
            onMouseMove: onHover,
            onMouseOver: onHover,
            tabIndex: -1
          },
          data: option,
          isDisabled: isDisabled,
          isSelected: isSelected,
          key: optionId,
          label: label,
          type: 'option',
          value: value
        };
      };

      return options.reduce(function (acc, item, itemIndex) {
        if (item.options) {
          // TODO needs a tidier implementation
          if (!_this.hasGroups) _this.hasGroups = true;
          var items = item.options;
          var children = items.map(function (child, i) {
            var option = toOption(child, "".concat(itemIndex, "-").concat(i));
            if (option) acc.focusable.push(child);
            return option;
          }).filter(Boolean);

          if (children.length) {
            var groupId = "".concat(_this.getElementId('group'), "-").concat(itemIndex);
            acc.render.push({
              type: 'group',
              key: groupId,
              data: item,
              options: children
            });
          }
        } else {
          var option = toOption(item, "".concat(itemIndex));

          if (option) {
            acc.render.push(option);
            acc.focusable.push(item);
          }
        }

        return acc;
      }, {
        render: [],
        focusable: []
      });
    };

    var _value = _props.value;
    _this.cacheComponents = (0,memoize_one_esm/* default */.Z)(_this.cacheComponents, index_75b02bac_browser_esm.B).bind((0,assertThisInitialized/* default */.Z)(_this));

    _this.cacheComponents(_props.components);

    _this.instancePrefix = 'react-select-' + (_this.props.instanceId || ++instanceId);

    var _selectValue = (0,index_75b02bac_browser_esm.C)(_value);

    _this.buildMenuOptions = (0,memoize_one_esm/* default */.Z)(_this.buildMenuOptions, function (newArgs, lastArgs) {
      var _ref6 = newArgs,
          _ref7 = _slicedToArray(_ref6, 2),
          newProps = _ref7[0],
          newSelectValue = _ref7[1];

      var _ref8 = lastArgs,
          _ref9 = _slicedToArray(_ref8, 2),
          lastProps = _ref9[0],
          lastSelectValue = _ref9[1];

      return newSelectValue === lastSelectValue && newProps.inputValue === lastProps.inputValue && newProps.options === lastProps.options;
    }).bind((0,assertThisInitialized/* default */.Z)(_this));

    var _menuOptions = _props.menuIsOpen ? _this.buildMenuOptions(_props, _selectValue) : {
      render: [],
      focusable: []
    };

    _this.state.menuOptions = _menuOptions;
    _this.state.selectValue = _selectValue;
    return _this;
  }

  (0,createClass/* default */.Z)(Select, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.startListeningComposition();
      this.startListeningToTouch();

      if (this.props.closeMenuOnScroll && document && document.addEventListener) {
        // Listen to all scroll events, and filter them out inside of 'onScroll'
        document.addEventListener('scroll', this.onScroll, true);
      }

      if (this.props.autoFocus) {
        this.focusInput();
      }
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      var _this$props8 = this.props,
          options = _this$props8.options,
          value = _this$props8.value,
          menuIsOpen = _this$props8.menuIsOpen,
          inputValue = _this$props8.inputValue; // re-cache custom components

      this.cacheComponents(nextProps.components); // rebuild the menu options

      if (nextProps.value !== value || nextProps.options !== options || nextProps.menuIsOpen !== menuIsOpen || nextProps.inputValue !== inputValue) {
        var selectValue = (0,index_75b02bac_browser_esm.C)(nextProps.value);
        var menuOptions = nextProps.menuIsOpen ? this.buildMenuOptions(nextProps, selectValue) : {
          render: [],
          focusable: []
        };
        var focusedValue = this.getNextFocusedValue(selectValue);
        var focusedOption = this.getNextFocusedOption(menuOptions.focusable);
        this.setState({
          menuOptions: menuOptions,
          selectValue: selectValue,
          focusedOption: focusedOption,
          focusedValue: focusedValue
        });
      } // some updates should toggle the state of the input visibility


      if (this.inputIsHiddenAfterUpdate != null) {
        this.setState({
          inputIsHidden: this.inputIsHiddenAfterUpdate
        });
        delete this.inputIsHiddenAfterUpdate;
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props9 = this.props,
          isDisabled = _this$props9.isDisabled,
          menuIsOpen = _this$props9.menuIsOpen;
      var isFocused = this.state.isFocused;

      if ( // ensure focus is restored correctly when the control becomes enabled
      isFocused && !isDisabled && prevProps.isDisabled || // ensure focus is on the Input when the menu opens
      isFocused && menuIsOpen && !prevProps.menuIsOpen) {
        this.focusInput();
      }

      if (isFocused && isDisabled && !prevProps.isDisabled) {
        // ensure select state gets blurred in case Select is programatically disabled while focused
        this.setState({
          isFocused: false
        }, this.onMenuClose);
      } // scroll the focused option into view if necessary


      if (this.menuListRef && this.focusedOptionRef && this.scrollToFocusedOptionOnUpdate) {
        (0,index_75b02bac_browser_esm.D)(this.menuListRef, this.focusedOptionRef);
        this.scrollToFocusedOptionOnUpdate = false;
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.stopListeningComposition();
      this.stopListeningToTouch();
      document.removeEventListener('scroll', this.onScroll, true);
    }
  }, {
    key: "onMenuOpen",
    // ==============================
    // Consumer Handlers
    // ==============================
    value: function onMenuOpen() {
      this.props.onMenuOpen();
    }
  }, {
    key: "onMenuClose",
    value: function onMenuClose() {
      var _this$props10 = this.props,
          isSearchable = _this$props10.isSearchable,
          isMulti = _this$props10.isMulti;
      this.announceAriaLiveContext({
        event: 'input',
        context: {
          isSearchable: isSearchable,
          isMulti: isMulti
        }
      });
      this.onInputChange('', {
        action: 'menu-close'
      });
      this.props.onMenuClose();
    }
  }, {
    key: "onInputChange",
    value: function onInputChange(newValue, actionMeta) {
      this.props.onInputChange(newValue, actionMeta);
    } // ==============================
    // Methods
    // ==============================

  }, {
    key: "focusInput",
    value: function focusInput() {
      if (!this.inputRef) return;
      this.inputRef.focus();
    }
  }, {
    key: "blurInput",
    value: function blurInput() {
      if (!this.inputRef) return;
      this.inputRef.blur();
    } // aliased for consumers

  }, {
    key: "openMenu",
    value: function openMenu(focusOption) {
      var _this2 = this;

      var _this$state3 = this.state,
          selectValue = _this$state3.selectValue,
          isFocused = _this$state3.isFocused;
      var menuOptions = this.buildMenuOptions(this.props, selectValue);
      var _this$props11 = this.props,
          isMulti = _this$props11.isMulti,
          tabSelectsValue = _this$props11.tabSelectsValue;
      var openAtIndex = focusOption === 'first' ? 0 : menuOptions.focusable.length - 1;

      if (!isMulti) {
        var selectedIndex = menuOptions.focusable.indexOf(selectValue[0]);

        if (selectedIndex > -1) {
          openAtIndex = selectedIndex;
        }
      } // only scroll if the menu isn't already open


      this.scrollToFocusedOptionOnUpdate = !(isFocused && this.menuListRef);
      this.inputIsHiddenAfterUpdate = false;
      this.setState({
        menuOptions: menuOptions,
        focusedValue: null,
        focusedOption: menuOptions.focusable[openAtIndex]
      }, function () {
        _this2.onMenuOpen();

        _this2.announceAriaLiveContext({
          event: 'menu',
          context: {
            tabSelectsValue: tabSelectsValue
          }
        });
      });
    }
  }, {
    key: "focusValue",
    value: function focusValue(direction) {
      var _this$props12 = this.props,
          isMulti = _this$props12.isMulti,
          isSearchable = _this$props12.isSearchable;
      var _this$state4 = this.state,
          selectValue = _this$state4.selectValue,
          focusedValue = _this$state4.focusedValue; // Only multiselects support value focusing

      if (!isMulti) return;
      this.setState({
        focusedOption: null
      });
      var focusedIndex = selectValue.indexOf(focusedValue);

      if (!focusedValue) {
        focusedIndex = -1;
        this.announceAriaLiveContext({
          event: 'value'
        });
      }

      var lastIndex = selectValue.length - 1;
      var nextFocus = -1;
      if (!selectValue.length) return;

      switch (direction) {
        case 'previous':
          if (focusedIndex === 0) {
            // don't cycle from the start to the end
            nextFocus = 0;
          } else if (focusedIndex === -1) {
            // if nothing is focused, focus the last value first
            nextFocus = lastIndex;
          } else {
            nextFocus = focusedIndex - 1;
          }

          break;

        case 'next':
          if (focusedIndex > -1 && focusedIndex < lastIndex) {
            nextFocus = focusedIndex + 1;
          }

          break;
      }

      if (nextFocus === -1) {
        this.announceAriaLiveContext({
          event: 'input',
          context: {
            isSearchable: isSearchable,
            isMulti: isMulti
          }
        });
      }

      this.setState({
        inputIsHidden: nextFocus !== -1,
        focusedValue: selectValue[nextFocus]
      });
    }
  }, {
    key: "focusOption",
    value: function focusOption() {
      var direction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'first';
      var _this$props13 = this.props,
          pageSize = _this$props13.pageSize,
          tabSelectsValue = _this$props13.tabSelectsValue;
      var _this$state5 = this.state,
          focusedOption = _this$state5.focusedOption,
          menuOptions = _this$state5.menuOptions;
      var options = menuOptions.focusable;
      if (!options.length) return;
      var nextFocus = 0; // handles 'first'

      var focusedIndex = options.indexOf(focusedOption);

      if (!focusedOption) {
        focusedIndex = -1;
        this.announceAriaLiveContext({
          event: 'menu',
          context: {
            tabSelectsValue: tabSelectsValue
          }
        });
      }

      if (direction === 'up') {
        nextFocus = focusedIndex > 0 ? focusedIndex - 1 : options.length - 1;
      } else if (direction === 'down') {
        nextFocus = (focusedIndex + 1) % options.length;
      } else if (direction === 'pageup') {
        nextFocus = focusedIndex - pageSize;
        if (nextFocus < 0) nextFocus = 0;
      } else if (direction === 'pagedown') {
        nextFocus = focusedIndex + pageSize;
        if (nextFocus > options.length - 1) nextFocus = options.length - 1;
      } else if (direction === 'last') {
        nextFocus = options.length - 1;
      }

      this.scrollToFocusedOptionOnUpdate = true;
      this.setState({
        focusedOption: options[nextFocus],
        focusedValue: null
      });
      this.announceAriaLiveContext({
        event: 'menu',
        context: {
          isDisabled: isOptionDisabled(options[nextFocus]),
          tabSelectsValue: tabSelectsValue
        }
      });
    }
  }, {
    key: "getTheme",
    // ==============================
    // Getters
    // ==============================
    value: function getTheme() {
      // Use the default theme if there are no customizations.
      if (!this.props.theme) {
        return defaultTheme;
      } // If the theme prop is a function, assume the function
      // knows how to merge the passed-in default theme with
      // its own modifications.


      if (typeof this.props.theme === 'function') {
        return this.props.theme(defaultTheme);
      } // Otherwise, if a plain theme object was passed in,
      // overlay it with the default theme.


      return _objectSpread$2(_objectSpread$2({}, defaultTheme), this.props.theme);
    }
  }, {
    key: "getCommonProps",
    value: function getCommonProps() {
      var clearValue = this.clearValue,
          cx = this.cx,
          getStyles = this.getStyles,
          getValue = this.getValue,
          setValue = this.setValue,
          selectOption = this.selectOption,
          props = this.props;
      var isMulti = props.isMulti,
          isRtl = props.isRtl,
          options = props.options;
      var hasValue = this.hasValue();
      return {
        cx: cx,
        clearValue: clearValue,
        getStyles: getStyles,
        getValue: getValue,
        hasValue: hasValue,
        isMulti: isMulti,
        isRtl: isRtl,
        options: options,
        selectOption: selectOption,
        setValue: setValue,
        selectProps: props,
        theme: this.getTheme()
      };
    }
  }, {
    key: "getNextFocusedValue",
    value: function getNextFocusedValue(nextSelectValue) {
      if (this.clearFocusValueOnUpdate) {
        this.clearFocusValueOnUpdate = false;
        return null;
      }

      var _this$state6 = this.state,
          focusedValue = _this$state6.focusedValue,
          lastSelectValue = _this$state6.selectValue;
      var lastFocusedIndex = lastSelectValue.indexOf(focusedValue);

      if (lastFocusedIndex > -1) {
        var nextFocusedIndex = nextSelectValue.indexOf(focusedValue);

        if (nextFocusedIndex > -1) {
          // the focused value is still in the selectValue, return it
          return focusedValue;
        } else if (lastFocusedIndex < nextSelectValue.length) {
          // the focusedValue is not present in the next selectValue array by
          // reference, so return the new value at the same index
          return nextSelectValue[lastFocusedIndex];
        }
      }

      return null;
    }
  }, {
    key: "getNextFocusedOption",
    value: function getNextFocusedOption(options) {
      var lastFocusedOption = this.state.focusedOption;
      return lastFocusedOption && options.indexOf(lastFocusedOption) > -1 ? lastFocusedOption : options[0];
    }
  }, {
    key: "hasValue",
    value: function hasValue() {
      var selectValue = this.state.selectValue;
      return selectValue.length > 0;
    }
  }, {
    key: "hasOptions",
    value: function hasOptions() {
      return !!this.state.menuOptions.render.length;
    }
  }, {
    key: "countOptions",
    value: function countOptions() {
      return this.state.menuOptions.focusable.length;
    }
  }, {
    key: "isClearable",
    value: function isClearable() {
      var _this$props14 = this.props,
          isClearable = _this$props14.isClearable,
          isMulti = _this$props14.isMulti; // single select, by default, IS NOT clearable
      // multi select, by default, IS clearable

      if (isClearable === undefined) return isMulti;
      return isClearable;
    }
  }, {
    key: "isOptionDisabled",
    value: function isOptionDisabled(option, selectValue) {
      return typeof this.props.isOptionDisabled === 'function' ? this.props.isOptionDisabled(option, selectValue) : false;
    }
  }, {
    key: "isOptionSelected",
    value: function isOptionSelected(option, selectValue) {
      var _this3 = this;

      if (selectValue.indexOf(option) > -1) return true;

      if (typeof this.props.isOptionSelected === 'function') {
        return this.props.isOptionSelected(option, selectValue);
      }

      var candidate = this.getOptionValue(option);
      return selectValue.some(function (i) {
        return _this3.getOptionValue(i) === candidate;
      });
    }
  }, {
    key: "filterOption",
    value: function filterOption(option, inputValue) {
      return this.props.filterOption ? this.props.filterOption(option, inputValue) : true;
    }
  }, {
    key: "formatOptionLabel",
    value: function formatOptionLabel(data, context) {
      if (typeof this.props.formatOptionLabel === 'function') {
        var inputValue = this.props.inputValue;
        var selectValue = this.state.selectValue;
        return this.props.formatOptionLabel(data, {
          context: context,
          inputValue: inputValue,
          selectValue: selectValue
        });
      } else {
        return this.getOptionLabel(data);
      }
    }
  }, {
    key: "formatGroupLabel",
    value: function formatGroupLabel(data) {
      return this.props.formatGroupLabel(data);
    } // ==============================
    // Mouse Handlers
    // ==============================

  }, {
    key: "startListeningComposition",
    // ==============================
    // Composition Handlers
    // ==============================
    value: function startListeningComposition() {
      if (document && document.addEventListener) {
        document.addEventListener('compositionstart', this.onCompositionStart, false);
        document.addEventListener('compositionend', this.onCompositionEnd, false);
      }
    }
  }, {
    key: "stopListeningComposition",
    value: function stopListeningComposition() {
      if (document && document.removeEventListener) {
        document.removeEventListener('compositionstart', this.onCompositionStart);
        document.removeEventListener('compositionend', this.onCompositionEnd);
      }
    }
  }, {
    key: "startListeningToTouch",
    // ==============================
    // Touch Handlers
    // ==============================
    value: function startListeningToTouch() {
      if (document && document.addEventListener) {
        document.addEventListener('touchstart', this.onTouchStart, false);
        document.addEventListener('touchmove', this.onTouchMove, false);
        document.addEventListener('touchend', this.onTouchEnd, false);
      }
    }
  }, {
    key: "stopListeningToTouch",
    value: function stopListeningToTouch() {
      if (document && document.removeEventListener) {
        document.removeEventListener('touchstart', this.onTouchStart);
        document.removeEventListener('touchmove', this.onTouchMove);
        document.removeEventListener('touchend', this.onTouchEnd);
      }
    }
  }, {
    key: "constructAriaLiveMessage",
    // ==============================
    // Renderers
    // ==============================
    value: function constructAriaLiveMessage() {
      var _this$state7 = this.state,
          ariaLiveContext = _this$state7.ariaLiveContext,
          selectValue = _this$state7.selectValue,
          focusedValue = _this$state7.focusedValue,
          focusedOption = _this$state7.focusedOption;
      var _this$props15 = this.props,
          options = _this$props15.options,
          menuIsOpen = _this$props15.menuIsOpen,
          inputValue = _this$props15.inputValue,
          screenReaderStatus = _this$props15.screenReaderStatus; // An aria live message representing the currently focused value in the select.

      var focusedValueMsg = focusedValue ? valueFocusAriaMessage({
        focusedValue: focusedValue,
        getOptionLabel: this.getOptionLabel,
        selectValue: selectValue
      }) : ''; // An aria live message representing the currently focused option in the select.

      var focusedOptionMsg = focusedOption && menuIsOpen ? optionFocusAriaMessage({
        focusedOption: focusedOption,
        getOptionLabel: this.getOptionLabel,
        options: options
      }) : ''; // An aria live message representing the set of focusable results and current searchterm/inputvalue.

      var resultsMsg = resultsAriaMessage({
        inputValue: inputValue,
        screenReaderMessage: screenReaderStatus({
          count: this.countOptions()
        })
      });
      return "".concat(focusedValueMsg, " ").concat(focusedOptionMsg, " ").concat(resultsMsg, " ").concat(ariaLiveContext);
    }
  }, {
    key: "renderInput",
    value: function renderInput() {
      var _this$props16 = this.props,
          isDisabled = _this$props16.isDisabled,
          isSearchable = _this$props16.isSearchable,
          inputId = _this$props16.inputId,
          inputValue = _this$props16.inputValue,
          tabIndex = _this$props16.tabIndex,
          form = _this$props16.form;
      var Input = this.components.Input;
      var inputIsHidden = this.state.inputIsHidden;
      var id = inputId || this.getElementId('input'); // aria attributes makes the JSX "noisy", separated for clarity

      var ariaAttributes = {
        'aria-autocomplete': 'list',
        'aria-label': this.props['aria-label'],
        'aria-labelledby': this.props['aria-labelledby']
      };

      if (!isSearchable) {
        // use a dummy input to maintain focus/blur functionality
        return /*#__PURE__*/react.createElement(DummyInput, (0,esm_extends/* default */.Z)({
          id: id,
          innerRef: this.getInputRef,
          onBlur: this.onInputBlur,
          onChange: index_75b02bac_browser_esm.E,
          onFocus: this.onInputFocus,
          readOnly: true,
          disabled: isDisabled,
          tabIndex: tabIndex,
          form: form,
          value: ""
        }, ariaAttributes));
      }

      var _this$commonProps = this.commonProps,
          cx = _this$commonProps.cx,
          theme = _this$commonProps.theme,
          selectProps = _this$commonProps.selectProps;
      return /*#__PURE__*/react.createElement(Input, (0,esm_extends/* default */.Z)({
        autoCapitalize: "none",
        autoComplete: "off",
        autoCorrect: "off",
        cx: cx,
        getStyles: this.getStyles,
        id: id,
        innerRef: this.getInputRef,
        isDisabled: isDisabled,
        isHidden: inputIsHidden,
        onBlur: this.onInputBlur,
        onChange: this.handleInputChange,
        onFocus: this.onInputFocus,
        selectProps: selectProps,
        spellCheck: "false",
        tabIndex: tabIndex,
        form: form,
        theme: theme,
        type: "text",
        value: inputValue
      }, ariaAttributes));
    }
  }, {
    key: "renderPlaceholderOrValue",
    value: function renderPlaceholderOrValue() {
      var _this4 = this;

      var _this$components = this.components,
          MultiValue = _this$components.MultiValue,
          MultiValueContainer = _this$components.MultiValueContainer,
          MultiValueLabel = _this$components.MultiValueLabel,
          MultiValueRemove = _this$components.MultiValueRemove,
          SingleValue = _this$components.SingleValue,
          Placeholder = _this$components.Placeholder;
      var commonProps = this.commonProps;
      var _this$props17 = this.props,
          controlShouldRenderValue = _this$props17.controlShouldRenderValue,
          isDisabled = _this$props17.isDisabled,
          isMulti = _this$props17.isMulti,
          inputValue = _this$props17.inputValue,
          placeholder = _this$props17.placeholder;
      var _this$state8 = this.state,
          selectValue = _this$state8.selectValue,
          focusedValue = _this$state8.focusedValue,
          isFocused = _this$state8.isFocused;

      if (!this.hasValue() || !controlShouldRenderValue) {
        return inputValue ? null : /*#__PURE__*/react.createElement(Placeholder, (0,esm_extends/* default */.Z)({}, commonProps, {
          key: "placeholder",
          isDisabled: isDisabled,
          isFocused: isFocused
        }), placeholder);
      }

      if (isMulti) {
        var selectValues = selectValue.map(function (opt, index) {
          var isOptionFocused = opt === focusedValue;
          return /*#__PURE__*/react.createElement(MultiValue, (0,esm_extends/* default */.Z)({}, commonProps, {
            components: {
              Container: MultiValueContainer,
              Label: MultiValueLabel,
              Remove: MultiValueRemove
            },
            isFocused: isOptionFocused,
            isDisabled: isDisabled,
            key: "".concat(_this4.getOptionValue(opt)).concat(index),
            index: index,
            removeProps: {
              onClick: function onClick() {
                return _this4.removeValue(opt);
              },
              onTouchEnd: function onTouchEnd() {
                return _this4.removeValue(opt);
              },
              onMouseDown: function onMouseDown(e) {
                e.preventDefault();
                e.stopPropagation();
              }
            },
            data: opt
          }), _this4.formatOptionLabel(opt, 'value'));
        });
        return selectValues;
      }

      if (inputValue) {
        return null;
      }

      var singleValue = selectValue[0];
      return /*#__PURE__*/react.createElement(SingleValue, (0,esm_extends/* default */.Z)({}, commonProps, {
        data: singleValue,
        isDisabled: isDisabled
      }), this.formatOptionLabel(singleValue, 'value'));
    }
  }, {
    key: "renderClearIndicator",
    value: function renderClearIndicator() {
      var ClearIndicator = this.components.ClearIndicator;
      var commonProps = this.commonProps;
      var _this$props18 = this.props,
          isDisabled = _this$props18.isDisabled,
          isLoading = _this$props18.isLoading;
      var isFocused = this.state.isFocused;

      if (!this.isClearable() || !ClearIndicator || isDisabled || !this.hasValue() || isLoading) {
        return null;
      }

      var innerProps = {
        onMouseDown: this.onClearIndicatorMouseDown,
        onTouchEnd: this.onClearIndicatorTouchEnd,
        'aria-hidden': 'true'
      };
      return /*#__PURE__*/react.createElement(ClearIndicator, (0,esm_extends/* default */.Z)({}, commonProps, {
        innerProps: innerProps,
        isFocused: isFocused
      }));
    }
  }, {
    key: "renderLoadingIndicator",
    value: function renderLoadingIndicator() {
      var LoadingIndicator = this.components.LoadingIndicator;
      var commonProps = this.commonProps;
      var _this$props19 = this.props,
          isDisabled = _this$props19.isDisabled,
          isLoading = _this$props19.isLoading;
      var isFocused = this.state.isFocused;
      if (!LoadingIndicator || !isLoading) return null;
      var innerProps = {
        'aria-hidden': 'true'
      };
      return /*#__PURE__*/react.createElement(LoadingIndicator, (0,esm_extends/* default */.Z)({}, commonProps, {
        innerProps: innerProps,
        isDisabled: isDisabled,
        isFocused: isFocused
      }));
    }
  }, {
    key: "renderIndicatorSeparator",
    value: function renderIndicatorSeparator() {
      var _this$components2 = this.components,
          DropdownIndicator = _this$components2.DropdownIndicator,
          IndicatorSeparator = _this$components2.IndicatorSeparator; // separator doesn't make sense without the dropdown indicator

      if (!DropdownIndicator || !IndicatorSeparator) return null;
      var commonProps = this.commonProps;
      var isDisabled = this.props.isDisabled;
      var isFocused = this.state.isFocused;
      return /*#__PURE__*/react.createElement(IndicatorSeparator, (0,esm_extends/* default */.Z)({}, commonProps, {
        isDisabled: isDisabled,
        isFocused: isFocused
      }));
    }
  }, {
    key: "renderDropdownIndicator",
    value: function renderDropdownIndicator() {
      var DropdownIndicator = this.components.DropdownIndicator;
      if (!DropdownIndicator) return null;
      var commonProps = this.commonProps;
      var isDisabled = this.props.isDisabled;
      var isFocused = this.state.isFocused;
      var innerProps = {
        onMouseDown: this.onDropdownIndicatorMouseDown,
        onTouchEnd: this.onDropdownIndicatorTouchEnd,
        'aria-hidden': 'true'
      };
      return /*#__PURE__*/react.createElement(DropdownIndicator, (0,esm_extends/* default */.Z)({}, commonProps, {
        innerProps: innerProps,
        isDisabled: isDisabled,
        isFocused: isFocused
      }));
    }
  }, {
    key: "renderMenu",
    value: function renderMenu() {
      var _this5 = this;

      var _this$components3 = this.components,
          Group = _this$components3.Group,
          GroupHeading = _this$components3.GroupHeading,
          Menu = _this$components3.Menu,
          MenuList = _this$components3.MenuList,
          MenuPortal = _this$components3.MenuPortal,
          LoadingMessage = _this$components3.LoadingMessage,
          NoOptionsMessage = _this$components3.NoOptionsMessage,
          Option = _this$components3.Option;
      var commonProps = this.commonProps;
      var _this$state9 = this.state,
          focusedOption = _this$state9.focusedOption,
          menuOptions = _this$state9.menuOptions;
      var _this$props20 = this.props,
          captureMenuScroll = _this$props20.captureMenuScroll,
          inputValue = _this$props20.inputValue,
          isLoading = _this$props20.isLoading,
          loadingMessage = _this$props20.loadingMessage,
          minMenuHeight = _this$props20.minMenuHeight,
          maxMenuHeight = _this$props20.maxMenuHeight,
          menuIsOpen = _this$props20.menuIsOpen,
          menuPlacement = _this$props20.menuPlacement,
          menuPosition = _this$props20.menuPosition,
          menuPortalTarget = _this$props20.menuPortalTarget,
          menuShouldBlockScroll = _this$props20.menuShouldBlockScroll,
          menuShouldScrollIntoView = _this$props20.menuShouldScrollIntoView,
          noOptionsMessage = _this$props20.noOptionsMessage,
          onMenuScrollToTop = _this$props20.onMenuScrollToTop,
          onMenuScrollToBottom = _this$props20.onMenuScrollToBottom;
      if (!menuIsOpen) return null; // TODO: Internal Option Type here

      var render = function render(props) {
        // for performance, the menu options in state aren't changed when the
        // focused option changes so we calculate additional props based on that
        var isFocused = focusedOption === props.data;
        props.innerRef = isFocused ? _this5.getFocusedOptionRef : undefined;
        return /*#__PURE__*/react.createElement(Option, (0,esm_extends/* default */.Z)({}, commonProps, props, {
          isFocused: isFocused
        }), _this5.formatOptionLabel(props.data, 'menu'));
      };

      var menuUI;

      if (this.hasOptions()) {
        menuUI = menuOptions.render.map(function (item) {
          if (item.type === 'group') {
            var type = item.type,
                group = (0,objectWithoutProperties/* default */.Z)(item, ["type"]);

            var headingId = "".concat(item.key, "-heading");
            return /*#__PURE__*/react.createElement(Group, (0,esm_extends/* default */.Z)({}, commonProps, group, {
              Heading: GroupHeading,
              headingProps: {
                id: headingId,
                data: item.data
              },
              label: _this5.formatGroupLabel(item.data)
            }), item.options.map(function (option) {
              return render(option);
            }));
          } else if (item.type === 'option') {
            return render(item);
          }
        });
      } else if (isLoading) {
        var message = loadingMessage({
          inputValue: inputValue
        });
        if (message === null) return null;
        menuUI = /*#__PURE__*/react.createElement(LoadingMessage, commonProps, message);
      } else {
        var _message = noOptionsMessage({
          inputValue: inputValue
        });

        if (_message === null) return null;
        menuUI = /*#__PURE__*/react.createElement(NoOptionsMessage, commonProps, _message);
      }

      var menuPlacementProps = {
        minMenuHeight: minMenuHeight,
        maxMenuHeight: maxMenuHeight,
        menuPlacement: menuPlacement,
        menuPosition: menuPosition,
        menuShouldScrollIntoView: menuShouldScrollIntoView
      };
      var menuElement = /*#__PURE__*/react.createElement(index_75b02bac_browser_esm.M, (0,esm_extends/* default */.Z)({}, commonProps, menuPlacementProps), function (_ref10) {
        var ref = _ref10.ref,
            _ref10$placerProps = _ref10.placerProps,
            placement = _ref10$placerProps.placement,
            maxHeight = _ref10$placerProps.maxHeight;
        return /*#__PURE__*/react.createElement(Menu, (0,esm_extends/* default */.Z)({}, commonProps, menuPlacementProps, {
          innerRef: ref,
          innerProps: {
            onMouseDown: _this5.onMenuMouseDown,
            onMouseMove: _this5.onMenuMouseMove
          },
          isLoading: isLoading,
          placement: placement
        }), /*#__PURE__*/react.createElement(ScrollCaptorSwitch, {
          isEnabled: captureMenuScroll,
          onTopArrive: onMenuScrollToTop,
          onBottomArrive: onMenuScrollToBottom
        }, /*#__PURE__*/react.createElement(ScrollBlock, {
          isEnabled: menuShouldBlockScroll
        }, /*#__PURE__*/react.createElement(MenuList, (0,esm_extends/* default */.Z)({}, commonProps, {
          innerRef: _this5.getMenuListRef,
          isLoading: isLoading,
          maxHeight: maxHeight
        }), menuUI))));
      }); // positioning behaviour is almost identical for portalled and fixed,
      // so we use the same component. the actual portalling logic is forked
      // within the component based on `menuPosition`

      return menuPortalTarget || menuPosition === 'fixed' ? /*#__PURE__*/react.createElement(MenuPortal, (0,esm_extends/* default */.Z)({}, commonProps, {
        appendTo: menuPortalTarget,
        controlElement: this.controlRef,
        menuPlacement: menuPlacement,
        menuPosition: menuPosition
      }), menuElement) : menuElement;
    }
  }, {
    key: "renderFormField",
    value: function renderFormField() {
      var _this6 = this;

      var _this$props21 = this.props,
          delimiter = _this$props21.delimiter,
          isDisabled = _this$props21.isDisabled,
          isMulti = _this$props21.isMulti,
          name = _this$props21.name;
      var selectValue = this.state.selectValue;
      if (!name || isDisabled) return;

      if (isMulti) {
        if (delimiter) {
          var value = selectValue.map(function (opt) {
            return _this6.getOptionValue(opt);
          }).join(delimiter);
          return /*#__PURE__*/react.createElement("input", {
            name: name,
            type: "hidden",
            value: value
          });
        } else {
          var input = selectValue.length > 0 ? selectValue.map(function (opt, i) {
            return /*#__PURE__*/react.createElement("input", {
              key: "i-".concat(i),
              name: name,
              type: "hidden",
              value: _this6.getOptionValue(opt)
            });
          }) : /*#__PURE__*/react.createElement("input", {
            name: name,
            type: "hidden"
          });
          return /*#__PURE__*/react.createElement("div", null, input);
        }
      } else {
        var _value2 = selectValue[0] ? this.getOptionValue(selectValue[0]) : '';

        return /*#__PURE__*/react.createElement("input", {
          name: name,
          type: "hidden",
          value: _value2
        });
      }
    }
  }, {
    key: "renderLiveRegion",
    value: function renderLiveRegion() {
      if (!this.state.isFocused) return null;
      return /*#__PURE__*/react.createElement(A11yText, {
        "aria-live": "polite"
      }, /*#__PURE__*/react.createElement("span", {
        id: "aria-selection-event"
      }, "\xA0", this.state.ariaLiveSelection), /*#__PURE__*/react.createElement("span", {
        id: "aria-context"
      }, "\xA0", this.constructAriaLiveMessage()));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$components4 = this.components,
          Control = _this$components4.Control,
          IndicatorsContainer = _this$components4.IndicatorsContainer,
          SelectContainer = _this$components4.SelectContainer,
          ValueContainer = _this$components4.ValueContainer;
      var _this$props22 = this.props,
          className = _this$props22.className,
          id = _this$props22.id,
          isDisabled = _this$props22.isDisabled,
          menuIsOpen = _this$props22.menuIsOpen;
      var isFocused = this.state.isFocused;
      var commonProps = this.commonProps = this.getCommonProps();
      return /*#__PURE__*/react.createElement(SelectContainer, (0,esm_extends/* default */.Z)({}, commonProps, {
        className: className,
        innerProps: {
          id: id,
          onKeyDown: this.onKeyDown
        },
        isDisabled: isDisabled,
        isFocused: isFocused
      }), this.renderLiveRegion(), /*#__PURE__*/react.createElement(Control, (0,esm_extends/* default */.Z)({}, commonProps, {
        innerRef: this.getControlRef,
        innerProps: {
          onMouseDown: this.onControlMouseDown,
          onTouchEnd: this.onControlTouchEnd
        },
        isDisabled: isDisabled,
        isFocused: isFocused,
        menuIsOpen: menuIsOpen
      }), /*#__PURE__*/react.createElement(ValueContainer, (0,esm_extends/* default */.Z)({}, commonProps, {
        isDisabled: isDisabled
      }), this.renderPlaceholderOrValue(), this.renderInput()), /*#__PURE__*/react.createElement(IndicatorsContainer, (0,esm_extends/* default */.Z)({}, commonProps, {
        isDisabled: isDisabled
      }), this.renderClearIndicator(), this.renderLoadingIndicator(), this.renderIndicatorSeparator(), this.renderDropdownIndicator())), this.renderMenu(), this.renderFormField());
    }
  }]);

  return Select;
}(react.Component);

Select.defaultProps = defaultProps;




/***/ }),

/***/ 77724:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ isDocumentElement),
  B: () => (/* binding */ exportedEqual),
  C: () => (/* binding */ cleanValue),
  D: () => (/* binding */ scrollIntoView),
  E: () => (/* binding */ noop),
  F: () => (/* binding */ components),
  G: () => (/* binding */ handleInputChange),
  M: () => (/* binding */ MenuPlacer),
  a: () => (/* binding */ containerCSS),
  b: () => (/* binding */ css),
  c: () => (/* binding */ clearIndicatorCSS),
  d: () => (/* binding */ dropdownIndicatorCSS),
  e: () => (/* binding */ groupHeadingCSS),
  f: () => (/* binding */ indicatorSeparatorCSS),
  g: () => (/* binding */ groupCSS),
  h: () => (/* binding */ inputCSS),
  i: () => (/* binding */ indicatorsContainerCSS),
  j: () => (/* binding */ loadingMessageCSS),
  k: () => (/* binding */ menuListCSS),
  l: () => (/* binding */ loadingIndicatorCSS),
  m: () => (/* binding */ menuCSS),
  n: () => (/* binding */ menuPortalCSS),
  o: () => (/* binding */ multiValueCSS),
  p: () => (/* binding */ multiValueLabelCSS),
  q: () => (/* binding */ multiValueRemoveCSS),
  r: () => (/* binding */ noOptionsMessageCSS),
  s: () => (/* binding */ optionCSS),
  t: () => (/* binding */ placeholderCSS),
  u: () => (/* binding */ css$1),
  v: () => (/* binding */ valueContainerCSS),
  w: () => (/* binding */ isTouchCapable),
  x: () => (/* binding */ isMobileDevice),
  y: () => (/* binding */ defaultComponents),
  z: () => (/* binding */ classNames)
});

// EXTERNAL MODULE: ./.yarn/cache/@babel-runtime-npm-7.25.7-67dab27f3f-73411fe0f1.zip/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__(79308);
// EXTERNAL MODULE: ./.yarn/cache/@babel-runtime-npm-7.25.7-67dab27f3f-73411fe0f1.zip/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(14354);
// EXTERNAL MODULE: ./.yarn/cache/@babel-runtime-npm-7.25.7-67dab27f3f-73411fe0f1.zip/node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(87768);
// EXTERNAL MODULE: ./.yarn/cache/@babel-runtime-npm-7.25.7-67dab27f3f-73411fe0f1.zip/node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(32829);
// EXTERNAL MODULE: ./.yarn/cache/@babel-runtime-npm-7.25.7-67dab27f3f-73411fe0f1.zip/node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(26713);
// EXTERNAL MODULE: ./.yarn/cache/@babel-runtime-npm-7.25.7-67dab27f3f-73411fe0f1.zip/node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(32523);
// EXTERNAL MODULE: ./.yarn/cache/@babel-runtime-npm-7.25.7-67dab27f3f-73411fe0f1.zip/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(92014);
// EXTERNAL MODULE: ./.yarn/cache/@babel-runtime-npm-7.25.7-67dab27f3f-73411fe0f1.zip/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(27175);
// EXTERNAL MODULE: ./.yarn/cache/react-npm-18.3.1-af38f3c1ae-261137d3f3.zip/node_modules/react/index.js
var react = __webpack_require__(44345);
// EXTERNAL MODULE: ./.yarn/__virtual__/@emotion-core-virtual-374e52d4dc/0/cache/@emotion-core-npm-10.3.1-5d0bd2504d-3ef35fe18d.zip/node_modules/@emotion/core/dist/core.browser.esm.js + 2 modules
var core_browser_esm = __webpack_require__(47278);
// EXTERNAL MODULE: ./.yarn/__virtual__/react-dom-virtual-3bf8f3011d/0/cache/react-dom-npm-18.3.1-a805663f38-3f4b73a3aa.zip/node_modules/react-dom/index.js
var react_dom = __webpack_require__(69980);
// EXTERNAL MODULE: ./.yarn/cache/@babel-runtime-npm-7.25.7-67dab27f3f-73411fe0f1.zip/node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(31206);
// EXTERNAL MODULE: ./.yarn/cache/@emotion-css-npm-10.0.27-3fd4a0c157-1420f5b514.zip/node_modules/@emotion/css/dist/css.browser.esm.js
var css_browser_esm = __webpack_require__(83970);
;// CONCATENATED MODULE: ./.yarn/cache/@babel-runtime-npm-7.25.7-67dab27f3f-73411fe0f1.zip/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js
function _taggedTemplateLiteral(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
    raw: {
      value: Object.freeze(t)
    }
  }));
}

// EXTERNAL MODULE: ./.yarn/__virtual__/react-input-autosize-virtual-24f398c9c9/0/cache/react-input-autosize-npm-3.0.0-c2fd3b468a-0cf93fdcbf.zip/node_modules/react-input-autosize/lib/AutosizeInput.js
var AutosizeInput = __webpack_require__(17832);
;// CONCATENATED MODULE: ./.yarn/__virtual__/react-select-virtual-a7d228ba97/0/cache/react-select-npm-3.2.0-85707201d2-0147c89825.zip/node_modules/react-select/dist/index-75b02bac.browser.esm.js
















// ==============================
// NO OP
// ==============================
var noop = function noop() {};
// Class Name Prefixer
// ==============================

/**
 String representation of component state for styling with class names.

 Expects an array of strings OR a string/object pair:
 - className(['comp', 'comp-arg', 'comp-arg-2'])
   @returns 'react-select__comp react-select__comp-arg react-select__comp-arg-2'
 - className('comp', { some: true, state: false })
   @returns 'react-select__comp react-select__comp--some'
*/

function applyPrefixToName(prefix, name) {
  if (!name) {
    return prefix;
  } else if (name[0] === '-') {
    return prefix + name;
  } else {
    return prefix + '__' + name;
  }
}

function classNames(prefix, state, className) {
  var arr = [className];

  if (state && prefix) {
    for (var key in state) {
      if (state.hasOwnProperty(key) && state[key]) {
        arr.push("".concat(applyPrefixToName(prefix, key)));
      }
    }
  }

  return arr.filter(function (i) {
    return i;
  }).map(function (i) {
    return String(i).trim();
  }).join(' ');
} // ==============================
// Clean Value
// ==============================

var cleanValue = function cleanValue(value) {
  if (Array.isArray(value)) return value.filter(Boolean);
  if ((0,esm_typeof/* default */.Z)(value) === 'object' && value !== null) return [value];
  return [];
}; // ==============================
// Handle Input Change
// ==============================

function handleInputChange(inputValue, actionMeta, onInputChange) {
  if (onInputChange) {
    var newValue = onInputChange(inputValue, actionMeta);
    if (typeof newValue === 'string') return newValue;
  }

  return inputValue;
} // ==============================
// Scroll Helpers
// ==============================

function isDocumentElement(el) {
  return [document.documentElement, document.body, window].indexOf(el) > -1;
} // Normalized Scroll Top
// ------------------------------

function getScrollTop(el) {
  if (isDocumentElement(el)) {
    return window.pageYOffset;
  }

  return el.scrollTop;
}
function scrollTo(el, top) {
  // with a scroll distance, we perform scroll on the element
  if (isDocumentElement(el)) {
    window.scrollTo(0, top);
    return;
  }

  el.scrollTop = top;
} // Get Scroll Parent
// ------------------------------

function getScrollParent(element) {
  var style = getComputedStyle(element);
  var excludeStaticParent = style.position === 'absolute';
  var overflowRx = /(auto|scroll)/;
  var docEl = document.documentElement; // suck it, flow...

  if (style.position === 'fixed') return docEl;

  for (var parent = element; parent = parent.parentElement;) {
    style = getComputedStyle(parent);

    if (excludeStaticParent && style.position === 'static') {
      continue;
    }

    if (overflowRx.test(style.overflow + style.overflowY + style.overflowX)) {
      return parent;
    }
  }

  return docEl;
} // Animated Scroll To
// ------------------------------

/**
  @param t: time (elapsed)
  @param b: initial value
  @param c: amount of change
  @param d: duration
*/

function easeOutCubic(t, b, c, d) {
  return c * ((t = t / d - 1) * t * t + 1) + b;
}

function animatedScrollTo(element, to) {
  var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 200;
  var callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : noop;
  var start = getScrollTop(element);
  var change = to - start;
  var increment = 10;
  var currentTime = 0;

  function animateScroll() {
    currentTime += increment;
    var val = easeOutCubic(currentTime, start, change, duration);
    scrollTo(element, val);

    if (currentTime < duration) {
      window.requestAnimationFrame(animateScroll);
    } else {
      callback(element);
    }
  }

  animateScroll();
} // Scroll Into View
// ------------------------------

function scrollIntoView(menuEl, focusedEl) {
  var menuRect = menuEl.getBoundingClientRect();
  var focusedRect = focusedEl.getBoundingClientRect();
  var overScroll = focusedEl.offsetHeight / 3;

  if (focusedRect.bottom + overScroll > menuRect.bottom) {
    scrollTo(menuEl, Math.min(focusedEl.offsetTop + focusedEl.clientHeight - menuEl.offsetHeight + overScroll, menuEl.scrollHeight));
  } else if (focusedRect.top - overScroll < menuRect.top) {
    scrollTo(menuEl, Math.max(focusedEl.offsetTop - overScroll, 0));
  }
} // ==============================
// Get bounding client object
// ==============================
// cannot get keys using array notation with DOMRect

function getBoundingClientObj(element) {
  var rect = element.getBoundingClientRect();
  return {
    bottom: rect.bottom,
    height: rect.height,
    left: rect.left,
    right: rect.right,
    top: rect.top,
    width: rect.width
  };
}
// Touch Capability Detector
// ==============================

function isTouchCapable() {
  try {
    document.createEvent('TouchEvent');
    return true;
  } catch (e) {
    return false;
  }
} // ==============================
// Mobile Device Detector
// ==============================

function isMobileDevice() {
  try {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  } catch (e) {
    return false;
  }
}

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,getPrototypeOf/* default */.Z)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,getPrototypeOf/* default */.Z)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,possibleConstructorReturn/* default */.Z)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
function getMenuPlacement(_ref) {
  var maxHeight = _ref.maxHeight,
      menuEl = _ref.menuEl,
      minHeight = _ref.minHeight,
      placement = _ref.placement,
      shouldScroll = _ref.shouldScroll,
      isFixedPosition = _ref.isFixedPosition,
      theme = _ref.theme;
  var spacing = theme.spacing;
  var scrollParent = getScrollParent(menuEl);
  var defaultState = {
    placement: 'bottom',
    maxHeight: maxHeight
  }; // something went wrong, return default state

  if (!menuEl || !menuEl.offsetParent) return defaultState; // we can't trust `scrollParent.scrollHeight` --> it may increase when
  // the menu is rendered

  var _scrollParent$getBoun = scrollParent.getBoundingClientRect(),
      scrollHeight = _scrollParent$getBoun.height;

  var _menuEl$getBoundingCl = menuEl.getBoundingClientRect(),
      menuBottom = _menuEl$getBoundingCl.bottom,
      menuHeight = _menuEl$getBoundingCl.height,
      menuTop = _menuEl$getBoundingCl.top;

  var _menuEl$offsetParent$ = menuEl.offsetParent.getBoundingClientRect(),
      containerTop = _menuEl$offsetParent$.top;

  var viewHeight = window.innerHeight;
  var scrollTop = getScrollTop(scrollParent);
  var marginBottom = parseInt(getComputedStyle(menuEl).marginBottom, 10);
  var marginTop = parseInt(getComputedStyle(menuEl).marginTop, 10);
  var viewSpaceAbove = containerTop - marginTop;
  var viewSpaceBelow = viewHeight - menuTop;
  var scrollSpaceAbove = viewSpaceAbove + scrollTop;
  var scrollSpaceBelow = scrollHeight - scrollTop - menuTop;
  var scrollDown = menuBottom - viewHeight + scrollTop + marginBottom;
  var scrollUp = scrollTop + menuTop - marginTop;
  var scrollDuration = 160;

  switch (placement) {
    case 'auto':
    case 'bottom':
      // 1: the menu will fit, do nothing
      if (viewSpaceBelow >= menuHeight) {
        return {
          placement: 'bottom',
          maxHeight: maxHeight
        };
      } // 2: the menu will fit, if scrolled


      if (scrollSpaceBelow >= menuHeight && !isFixedPosition) {
        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollDown, scrollDuration);
        }

        return {
          placement: 'bottom',
          maxHeight: maxHeight
        };
      } // 3: the menu will fit, if constrained


      if (!isFixedPosition && scrollSpaceBelow >= minHeight || isFixedPosition && viewSpaceBelow >= minHeight) {
        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollDown, scrollDuration);
        } // we want to provide as much of the menu as possible to the user,
        // so give them whatever is available below rather than the minHeight.


        var constrainedHeight = isFixedPosition ? viewSpaceBelow - marginBottom : scrollSpaceBelow - marginBottom;
        return {
          placement: 'bottom',
          maxHeight: constrainedHeight
        };
      } // 4. Forked beviour when there isn't enough space below
      // AUTO: flip the menu, render above


      if (placement === 'auto' || isFixedPosition) {
        // may need to be constrained after flipping
        var _constrainedHeight = maxHeight;
        var spaceAbove = isFixedPosition ? viewSpaceAbove : scrollSpaceAbove;

        if (spaceAbove >= minHeight) {
          _constrainedHeight = Math.min(spaceAbove - marginBottom - spacing.controlHeight, maxHeight);
        }

        return {
          placement: 'top',
          maxHeight: _constrainedHeight
        };
      } // BOTTOM: allow browser to increase scrollable area and immediately set scroll


      if (placement === 'bottom') {
        scrollTo(scrollParent, scrollDown);
        return {
          placement: 'bottom',
          maxHeight: maxHeight
        };
      }

      break;

    case 'top':
      // 1: the menu will fit, do nothing
      if (viewSpaceAbove >= menuHeight) {
        return {
          placement: 'top',
          maxHeight: maxHeight
        };
      } // 2: the menu will fit, if scrolled


      if (scrollSpaceAbove >= menuHeight && !isFixedPosition) {
        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollUp, scrollDuration);
        }

        return {
          placement: 'top',
          maxHeight: maxHeight
        };
      } // 3: the menu will fit, if constrained


      if (!isFixedPosition && scrollSpaceAbove >= minHeight || isFixedPosition && viewSpaceAbove >= minHeight) {
        var _constrainedHeight2 = maxHeight; // we want to provide as much of the menu as possible to the user,
        // so give them whatever is available below rather than the minHeight.

        if (!isFixedPosition && scrollSpaceAbove >= minHeight || isFixedPosition && viewSpaceAbove >= minHeight) {
          _constrainedHeight2 = isFixedPosition ? viewSpaceAbove - marginTop : scrollSpaceAbove - marginTop;
        }

        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollUp, scrollDuration);
        }

        return {
          placement: 'top',
          maxHeight: _constrainedHeight2
        };
      } // 4. not enough space, the browser WILL NOT increase scrollable area when
      // absolutely positioned element rendered above the viewport (only below).
      // Flip the menu, render below


      return {
        placement: 'bottom',
        maxHeight: maxHeight
      };

    default:
      throw new Error("Invalid placement provided \"".concat(placement, "\"."));
  } // fulfil contract with flow: implicit return value of undefined


  return defaultState;
} // Menu Component
// ------------------------------

function alignToControl(placement) {
  var placementToCSSProp = {
    bottom: 'top',
    top: 'bottom'
  };
  return placement ? placementToCSSProp[placement] : 'bottom';
}

var coercePlacement = function coercePlacement(p) {
  return p === 'auto' ? 'bottom' : p;
};

var menuCSS = function menuCSS(_ref2) {
  var _ref3;

  var placement = _ref2.placement,
      _ref2$theme = _ref2.theme,
      borderRadius = _ref2$theme.borderRadius,
      spacing = _ref2$theme.spacing,
      colors = _ref2$theme.colors;
  return _ref3 = {
    label: 'menu'
  }, (0,defineProperty/* default */.Z)(_ref3, alignToControl(placement), '100%'), (0,defineProperty/* default */.Z)(_ref3, "backgroundColor", colors.neutral0), (0,defineProperty/* default */.Z)(_ref3, "borderRadius", borderRadius), (0,defineProperty/* default */.Z)(_ref3, "boxShadow", '0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)'), (0,defineProperty/* default */.Z)(_ref3, "marginBottom", spacing.menuGutter), (0,defineProperty/* default */.Z)(_ref3, "marginTop", spacing.menuGutter), (0,defineProperty/* default */.Z)(_ref3, "position", 'absolute'), (0,defineProperty/* default */.Z)(_ref3, "width", '100%'), (0,defineProperty/* default */.Z)(_ref3, "zIndex", 1), _ref3;
};
var PortalPlacementContext = /*#__PURE__*/(0,react.createContext)({
  getPortalPlacement: null
}); // NOTE: internal only

var MenuPlacer = /*#__PURE__*/function (_Component) {
  (0,inherits/* default */.Z)(MenuPlacer, _Component);

  var _super = _createSuper(MenuPlacer);

  function MenuPlacer() {
    var _this;

    (0,classCallCheck/* default */.Z)(this, MenuPlacer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      maxHeight: _this.props.maxMenuHeight,
      placement: null
    };

    _this.getPlacement = function (ref) {
      var _this$props = _this.props,
          minMenuHeight = _this$props.minMenuHeight,
          maxMenuHeight = _this$props.maxMenuHeight,
          menuPlacement = _this$props.menuPlacement,
          menuPosition = _this$props.menuPosition,
          menuShouldScrollIntoView = _this$props.menuShouldScrollIntoView,
          theme = _this$props.theme;
      if (!ref) return; // DO NOT scroll if position is fixed

      var isFixedPosition = menuPosition === 'fixed';
      var shouldScroll = menuShouldScrollIntoView && !isFixedPosition;
      var state = getMenuPlacement({
        maxHeight: maxMenuHeight,
        menuEl: ref,
        minHeight: minMenuHeight,
        placement: menuPlacement,
        shouldScroll: shouldScroll,
        isFixedPosition: isFixedPosition,
        theme: theme
      });
      var getPortalPlacement = _this.context.getPortalPlacement;
      if (getPortalPlacement) getPortalPlacement(state);

      _this.setState(state);
    };

    _this.getUpdatedProps = function () {
      var menuPlacement = _this.props.menuPlacement;
      var placement = _this.state.placement || coercePlacement(menuPlacement);
      return _objectSpread(_objectSpread({}, _this.props), {}, {
        placement: placement,
        maxHeight: _this.state.maxHeight
      });
    };

    return _this;
  }

  (0,createClass/* default */.Z)(MenuPlacer, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      return children({
        ref: this.getPlacement,
        placerProps: this.getUpdatedProps()
      });
    }
  }]);

  return MenuPlacer;
}(react.Component);
MenuPlacer.contextType = PortalPlacementContext;

var Menu = function Menu(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerRef = props.innerRef,
      innerProps = props.innerProps;
  return (0,core_browser_esm/* jsx */.tZ)("div", (0,esm_extends/* default */.Z)({
    css: getStyles('menu', props),
    className: cx({
      menu: true
    }, className)
  }, innerProps, {
    ref: innerRef
  }), children);
};
// Menu List
// ==============================

var menuListCSS = function menuListCSS(_ref4) {
  var maxHeight = _ref4.maxHeight,
      baseUnit = _ref4.theme.spacing.baseUnit;
  return {
    maxHeight: maxHeight,
    overflowY: 'auto',
    paddingBottom: baseUnit,
    paddingTop: baseUnit,
    position: 'relative',
    // required for offset[Height, Top] > keyboard scroll
    WebkitOverflowScrolling: 'touch'
  };
};
var MenuList = function MenuList(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      isMulti = props.isMulti,
      innerRef = props.innerRef,
      innerProps = props.innerProps;
  return (0,core_browser_esm/* jsx */.tZ)("div", (0,esm_extends/* default */.Z)({
    css: getStyles('menuList', props),
    className: cx({
      'menu-list': true,
      'menu-list--is-multi': isMulti
    }, className),
    ref: innerRef
  }, innerProps), children);
}; // ==============================
// Menu Notices
// ==============================

var noticeCSS = function noticeCSS(_ref5) {
  var _ref5$theme = _ref5.theme,
      baseUnit = _ref5$theme.spacing.baseUnit,
      colors = _ref5$theme.colors;
  return {
    color: colors.neutral40,
    padding: "".concat(baseUnit * 2, "px ").concat(baseUnit * 3, "px"),
    textAlign: 'center'
  };
};

var noOptionsMessageCSS = noticeCSS;
var loadingMessageCSS = noticeCSS;
var NoOptionsMessage = function NoOptionsMessage(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return (0,core_browser_esm/* jsx */.tZ)("div", (0,esm_extends/* default */.Z)({
    css: getStyles('noOptionsMessage', props),
    className: cx({
      'menu-notice': true,
      'menu-notice--no-options': true
    }, className)
  }, innerProps), children);
};
NoOptionsMessage.defaultProps = {
  children: 'No options'
};
var LoadingMessage = function LoadingMessage(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return (0,core_browser_esm/* jsx */.tZ)("div", (0,esm_extends/* default */.Z)({
    css: getStyles('loadingMessage', props),
    className: cx({
      'menu-notice': true,
      'menu-notice--loading': true
    }, className)
  }, innerProps), children);
};
LoadingMessage.defaultProps = {
  children: 'Loading...'
}; // ==============================
// Menu Portal
// ==============================

var menuPortalCSS = function menuPortalCSS(_ref6) {
  var rect = _ref6.rect,
      offset = _ref6.offset,
      position = _ref6.position;
  return {
    left: rect.left,
    position: position,
    top: offset,
    width: rect.width,
    zIndex: 1
  };
};
var MenuPortal = /*#__PURE__*/function (_Component2) {
  (0,inherits/* default */.Z)(MenuPortal, _Component2);

  var _super2 = _createSuper(MenuPortal);

  function MenuPortal() {
    var _this2;

    (0,classCallCheck/* default */.Z)(this, MenuPortal);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this2 = _super2.call.apply(_super2, [this].concat(args));
    _this2.state = {
      placement: null
    };

    _this2.getPortalPlacement = function (_ref7) {
      var placement = _ref7.placement;
      var initialPlacement = coercePlacement(_this2.props.menuPlacement); // avoid re-renders if the placement has not changed

      if (placement !== initialPlacement) {
        _this2.setState({
          placement: placement
        });
      }
    };

    return _this2;
  }

  (0,createClass/* default */.Z)(MenuPortal, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          appendTo = _this$props2.appendTo,
          children = _this$props2.children,
          controlElement = _this$props2.controlElement,
          menuPlacement = _this$props2.menuPlacement,
          position = _this$props2.menuPosition,
          getStyles = _this$props2.getStyles;
      var isFixed = position === 'fixed'; // bail early if required elements aren't present

      if (!appendTo && !isFixed || !controlElement) {
        return null;
      }

      var placement = this.state.placement || coercePlacement(menuPlacement);
      var rect = getBoundingClientObj(controlElement);
      var scrollDistance = isFixed ? 0 : window.pageYOffset;
      var offset = rect[placement] + scrollDistance;
      var state = {
        offset: offset,
        position: position,
        rect: rect
      }; // same wrapper element whether fixed or portalled

      var menuWrapper = (0,core_browser_esm/* jsx */.tZ)("div", {
        css: getStyles('menuPortal', state)
      }, children);
      return (0,core_browser_esm/* jsx */.tZ)(PortalPlacementContext.Provider, {
        value: {
          getPortalPlacement: this.getPortalPlacement
        }
      }, appendTo ? /*#__PURE__*/(0,react_dom.createPortal)(menuWrapper, appendTo) : menuWrapper);
    }
  }]);

  return MenuPortal;
}(react.Component);

var isArray = Array.isArray;
var keyList = Object.keys;
var hasProp = Object.prototype.hasOwnProperty;

function equal(a, b) {
  // fast-deep-equal index.js 2.0.1
  if (a === b) return true;

  if (a && b && (0,esm_typeof/* default */.Z)(a) == 'object' && (0,esm_typeof/* default */.Z)(b) == 'object') {
    var arrA = isArray(a),
        arrB = isArray(b),
        i,
        length,
        key;

    if (arrA && arrB) {
      length = a.length;
      if (length != b.length) return false;

      for (i = length; i-- !== 0;) {
        if (!equal(a[i], b[i])) return false;
      }

      return true;
    }

    if (arrA != arrB) return false;
    var dateA = a instanceof Date,
        dateB = b instanceof Date;
    if (dateA != dateB) return false;
    if (dateA && dateB) return a.getTime() == b.getTime();
    var regexpA = a instanceof RegExp,
        regexpB = b instanceof RegExp;
    if (regexpA != regexpB) return false;
    if (regexpA && regexpB) return a.toString() == b.toString();
    var keys = keyList(a);
    length = keys.length;

    if (length !== keyList(b).length) {
      return false;
    }

    for (i = length; i-- !== 0;) {
      if (!hasProp.call(b, keys[i])) return false;
    } // end fast-deep-equal
    // Custom handling for React


    for (i = length; i-- !== 0;) {
      key = keys[i];

      if (key === '_owner' && a.$$typeof) {
        // React-specific: avoid traversing React elements' _owner.
        //  _owner contains circular references
        // and is not needed when comparing the actual elements (and not their owners)
        // .$$typeof and ._store on just reasonable markers of a react element
        continue;
      } else {
        // all other properties should be traversed as usual
        if (!equal(a[key], b[key])) return false;
      }
    } // fast-deep-equal index.js 2.0.1


    return true;
  }

  return a !== a && b !== b;
} // end fast-deep-equal


function exportedEqual(a, b) {
  try {
    return equal(a, b);
  } catch (error) {
    if (error.message && error.message.match(/stack|recursion/i)) {
      // warn on circular references, don't crash
      // browsers give this different errors name and messages:
      // chrome/safari: "RangeError", "Maximum call stack size exceeded"
      // firefox: "InternalError", too much recursion"
      // edge: "Error", "Out of stack space"
      console.warn('Warning: react-fast-compare does not handle circular references.', error.name, error.message);
      return false;
    } // some other error. we should definitely know about these


    throw error;
  }
}

var containerCSS = function containerCSS(_ref) {
  var isDisabled = _ref.isDisabled,
      isRtl = _ref.isRtl;
  return {
    label: 'container',
    direction: isRtl ? 'rtl' : null,
    pointerEvents: isDisabled ? 'none' : null,
    // cancel mouse events when disabled
    position: 'relative'
  };
};
var SelectContainer = function SelectContainer(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps,
      isDisabled = props.isDisabled,
      isRtl = props.isRtl;
  return (0,core_browser_esm/* jsx */.tZ)("div", (0,esm_extends/* default */.Z)({
    css: getStyles('container', props),
    className: cx({
      '--is-disabled': isDisabled,
      '--is-rtl': isRtl
    }, className)
  }, innerProps), children);
}; // ==============================
// Value Container
// ==============================

var valueContainerCSS = function valueContainerCSS(_ref2) {
  var spacing = _ref2.theme.spacing;
  return {
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    flexWrap: 'wrap',
    padding: "".concat(spacing.baseUnit / 2, "px ").concat(spacing.baseUnit * 2, "px"),
    WebkitOverflowScrolling: 'touch',
    position: 'relative',
    overflow: 'hidden'
  };
};
var ValueContainer = function ValueContainer(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      isMulti = props.isMulti,
      getStyles = props.getStyles,
      hasValue = props.hasValue;
  return (0,core_browser_esm/* jsx */.tZ)("div", {
    css: getStyles('valueContainer', props),
    className: cx({
      'value-container': true,
      'value-container--is-multi': isMulti,
      'value-container--has-value': hasValue
    }, className)
  }, children);
}; // ==============================
// Indicator Container
// ==============================

var indicatorsContainerCSS = function indicatorsContainerCSS() {
  return {
    alignItems: 'center',
    alignSelf: 'stretch',
    display: 'flex',
    flexShrink: 0
  };
};
var IndicatorsContainer = function IndicatorsContainer(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles;
  return (0,core_browser_esm/* jsx */.tZ)("div", {
    css: getStyles('indicatorsContainer', props),
    className: cx({
      indicators: true
    }, className)
  }, children);
};

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  0%, 80%, 100% { opacity: 0; }\n  40% { opacity: 1; }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

var _ref2 =  true ? {
  name: "19bqh2r",
  styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0;"
} : 0;

// ==============================
// Dropdown & Clear Icons
// ==============================
var Svg = function Svg(_ref) {
  var size = _ref.size,
      props = (0,objectWithoutProperties/* default */.Z)(_ref, ["size"]);

  return (0,core_browser_esm/* jsx */.tZ)("svg", (0,esm_extends/* default */.Z)({
    height: size,
    width: size,
    viewBox: "0 0 20 20",
    "aria-hidden": "true",
    focusable: "false",
    css: _ref2
  }, props));
};

var CrossIcon = function CrossIcon(props) {
  return (0,core_browser_esm/* jsx */.tZ)(Svg, (0,esm_extends/* default */.Z)({
    size: 20
  }, props), (0,core_browser_esm/* jsx */.tZ)("path", {
    d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
  }));
};
var DownChevron = function DownChevron(props) {
  return (0,core_browser_esm/* jsx */.tZ)(Svg, (0,esm_extends/* default */.Z)({
    size: 20
  }, props), (0,core_browser_esm/* jsx */.tZ)("path", {
    d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
  }));
}; // ==============================
// Dropdown & Clear Buttons
// ==============================

var baseCSS = function baseCSS(_ref3) {
  var isFocused = _ref3.isFocused,
      _ref3$theme = _ref3.theme,
      baseUnit = _ref3$theme.spacing.baseUnit,
      colors = _ref3$theme.colors;
  return {
    label: 'indicatorContainer',
    color: isFocused ? colors.neutral60 : colors.neutral20,
    display: 'flex',
    padding: baseUnit * 2,
    transition: 'color 150ms',
    ':hover': {
      color: isFocused ? colors.neutral80 : colors.neutral40
    }
  };
};

var dropdownIndicatorCSS = baseCSS;
var DropdownIndicator = function DropdownIndicator(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return (0,core_browser_esm/* jsx */.tZ)("div", (0,esm_extends/* default */.Z)({}, innerProps, {
    css: getStyles('dropdownIndicator', props),
    className: cx({
      indicator: true,
      'dropdown-indicator': true
    }, className)
  }), children || (0,core_browser_esm/* jsx */.tZ)(DownChevron, null));
};
var clearIndicatorCSS = baseCSS;
var ClearIndicator = function ClearIndicator(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return (0,core_browser_esm/* jsx */.tZ)("div", (0,esm_extends/* default */.Z)({}, innerProps, {
    css: getStyles('clearIndicator', props),
    className: cx({
      indicator: true,
      'clear-indicator': true
    }, className)
  }), children || (0,core_browser_esm/* jsx */.tZ)(CrossIcon, null));
}; // ==============================
// Separator
// ==============================

var indicatorSeparatorCSS = function indicatorSeparatorCSS(_ref4) {
  var isDisabled = _ref4.isDisabled,
      _ref4$theme = _ref4.theme,
      baseUnit = _ref4$theme.spacing.baseUnit,
      colors = _ref4$theme.colors;
  return {
    label: 'indicatorSeparator',
    alignSelf: 'stretch',
    backgroundColor: isDisabled ? colors.neutral10 : colors.neutral20,
    marginBottom: baseUnit * 2,
    marginTop: baseUnit * 2,
    width: 1
  };
};
var IndicatorSeparator = function IndicatorSeparator(props) {
  var className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return (0,core_browser_esm/* jsx */.tZ)("span", (0,esm_extends/* default */.Z)({}, innerProps, {
    css: getStyles('indicatorSeparator', props),
    className: cx({
      'indicator-separator': true
    }, className)
  }));
}; // ==============================
// Loading
// ==============================

var loadingDotAnimations = (0,core_browser_esm/* keyframes */.F4)(_templateObject());
var loadingIndicatorCSS = function loadingIndicatorCSS(_ref5) {
  var isFocused = _ref5.isFocused,
      size = _ref5.size,
      _ref5$theme = _ref5.theme,
      colors = _ref5$theme.colors,
      baseUnit = _ref5$theme.spacing.baseUnit;
  return {
    label: 'loadingIndicator',
    color: isFocused ? colors.neutral60 : colors.neutral20,
    display: 'flex',
    padding: baseUnit * 2,
    transition: 'color 150ms',
    alignSelf: 'center',
    fontSize: size,
    lineHeight: 1,
    marginRight: size,
    textAlign: 'center',
    verticalAlign: 'middle'
  };
};

var LoadingDot = function LoadingDot(_ref6) {
  var delay = _ref6.delay,
      offset = _ref6.offset;
  return (0,core_browser_esm/* jsx */.tZ)("span", {
    css: /*#__PURE__*/(0,css_browser_esm/* default */.Z)({
      animation: "".concat(loadingDotAnimations, " 1s ease-in-out ").concat(delay, "ms infinite;"),
      backgroundColor: 'currentColor',
      borderRadius: '1em',
      display: 'inline-block',
      marginLeft: offset ? '1em' : null,
      height: '1em',
      verticalAlign: 'top',
      width: '1em'
    },  true ? "" : 0)
  });
};

var LoadingIndicator = function LoadingIndicator(props) {
  var className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps,
      isRtl = props.isRtl;
  return (0,core_browser_esm/* jsx */.tZ)("div", (0,esm_extends/* default */.Z)({}, innerProps, {
    css: getStyles('loadingIndicator', props),
    className: cx({
      indicator: true,
      'loading-indicator': true
    }, className)
  }), (0,core_browser_esm/* jsx */.tZ)(LoadingDot, {
    delay: 0,
    offset: isRtl
  }), (0,core_browser_esm/* jsx */.tZ)(LoadingDot, {
    delay: 160,
    offset: true
  }), (0,core_browser_esm/* jsx */.tZ)(LoadingDot, {
    delay: 320,
    offset: !isRtl
  }));
};
LoadingIndicator.defaultProps = {
  size: 4
};

var css = function css(_ref) {
  var isDisabled = _ref.isDisabled,
      isFocused = _ref.isFocused,
      _ref$theme = _ref.theme,
      colors = _ref$theme.colors,
      borderRadius = _ref$theme.borderRadius,
      spacing = _ref$theme.spacing;
  return {
    label: 'control',
    alignItems: 'center',
    backgroundColor: isDisabled ? colors.neutral5 : colors.neutral0,
    borderColor: isDisabled ? colors.neutral10 : isFocused ? colors.primary : colors.neutral20,
    borderRadius: borderRadius,
    borderStyle: 'solid',
    borderWidth: 1,
    boxShadow: isFocused ? "0 0 0 1px ".concat(colors.primary) : null,
    cursor: 'default',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    minHeight: spacing.controlHeight,
    outline: '0 !important',
    position: 'relative',
    transition: 'all 100ms',
    '&:hover': {
      borderColor: isFocused ? colors.primary : colors.neutral30
    }
  };
};

var Control = function Control(props) {
  var children = props.children,
      cx = props.cx,
      getStyles = props.getStyles,
      className = props.className,
      isDisabled = props.isDisabled,
      isFocused = props.isFocused,
      innerRef = props.innerRef,
      innerProps = props.innerProps,
      menuIsOpen = props.menuIsOpen;
  return (0,core_browser_esm/* jsx */.tZ)("div", (0,esm_extends/* default */.Z)({
    ref: innerRef,
    css: getStyles('control', props),
    className: cx({
      control: true,
      'control--is-disabled': isDisabled,
      'control--is-focused': isFocused,
      'control--menu-is-open': menuIsOpen
    }, className)
  }, innerProps), children);
};

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var groupCSS = function groupCSS(_ref) {
  var spacing = _ref.theme.spacing;
  return {
    paddingBottom: spacing.baseUnit * 2,
    paddingTop: spacing.baseUnit * 2
  };
};

var Group = function Group(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      Heading = props.Heading,
      headingProps = props.headingProps,
      label = props.label,
      theme = props.theme,
      selectProps = props.selectProps;
  return (0,core_browser_esm/* jsx */.tZ)("div", {
    css: getStyles('group', props),
    className: cx({
      group: true
    }, className)
  }, (0,core_browser_esm/* jsx */.tZ)(Heading, (0,esm_extends/* default */.Z)({}, headingProps, {
    selectProps: selectProps,
    theme: theme,
    getStyles: getStyles,
    cx: cx
  }), label), (0,core_browser_esm/* jsx */.tZ)("div", null, children));
};

var groupHeadingCSS = function groupHeadingCSS(_ref2) {
  var spacing = _ref2.theme.spacing;
  return {
    label: 'group',
    color: '#999',
    cursor: 'default',
    display: 'block',
    fontSize: '75%',
    fontWeight: '500',
    marginBottom: '0.25em',
    paddingLeft: spacing.baseUnit * 3,
    paddingRight: spacing.baseUnit * 3,
    textTransform: 'uppercase'
  };
};
var GroupHeading = function GroupHeading(props) {
  var className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      theme = props.theme,
      selectProps = props.selectProps,
      cleanProps = (0,objectWithoutProperties/* default */.Z)(props, ["className", "cx", "getStyles", "theme", "selectProps"]);

  return (0,core_browser_esm/* jsx */.tZ)("div", (0,esm_extends/* default */.Z)({
    css: getStyles('groupHeading', _objectSpread$1({
      theme: theme
    }, cleanProps)),
    className: cx({
      'group-heading': true
    }, className)
  }, cleanProps));
};

function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$2(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var inputCSS = function inputCSS(_ref) {
  var isDisabled = _ref.isDisabled,
      _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      colors = _ref$theme.colors;
  return {
    margin: spacing.baseUnit / 2,
    paddingBottom: spacing.baseUnit / 2,
    paddingTop: spacing.baseUnit / 2,
    visibility: isDisabled ? 'hidden' : 'visible',
    color: colors.neutral80
  };
};

var inputStyle = function inputStyle(isHidden) {
  return {
    label: 'input',
    background: 0,
    border: 0,
    fontSize: 'inherit',
    opacity: isHidden ? 0 : 1,
    outline: 0,
    padding: 0,
    color: 'inherit'
  };
};

var Input = function Input(_ref2) {
  var className = _ref2.className,
      cx = _ref2.cx,
      getStyles = _ref2.getStyles,
      innerRef = _ref2.innerRef,
      isHidden = _ref2.isHidden,
      isDisabled = _ref2.isDisabled,
      theme = _ref2.theme,
      selectProps = _ref2.selectProps,
      props = (0,objectWithoutProperties/* default */.Z)(_ref2, ["className", "cx", "getStyles", "innerRef", "isHidden", "isDisabled", "theme", "selectProps"]);

  return (0,core_browser_esm/* jsx */.tZ)("div", {
    css: getStyles('input', _objectSpread$2({
      theme: theme
    }, props))
  }, (0,core_browser_esm/* jsx */.tZ)(AutosizeInput/* default */.Z, (0,esm_extends/* default */.Z)({
    className: cx({
      input: true
    }, className),
    inputRef: innerRef,
    inputStyle: inputStyle(isHidden),
    disabled: isDisabled
  }, props)));
};

function ownKeys$3(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$3(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$3(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var multiValueCSS = function multiValueCSS(_ref) {
  var _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      borderRadius = _ref$theme.borderRadius,
      colors = _ref$theme.colors;
  return {
    label: 'multiValue',
    backgroundColor: colors.neutral10,
    borderRadius: borderRadius / 2,
    display: 'flex',
    margin: spacing.baseUnit / 2,
    minWidth: 0 // resolves flex/text-overflow bug

  };
};
var multiValueLabelCSS = function multiValueLabelCSS(_ref2) {
  var _ref2$theme = _ref2.theme,
      borderRadius = _ref2$theme.borderRadius,
      colors = _ref2$theme.colors,
      cropWithEllipsis = _ref2.cropWithEllipsis;
  return {
    borderRadius: borderRadius / 2,
    color: colors.neutral80,
    fontSize: '85%',
    overflow: 'hidden',
    padding: 3,
    paddingLeft: 6,
    textOverflow: cropWithEllipsis ? 'ellipsis' : null,
    whiteSpace: 'nowrap'
  };
};
var multiValueRemoveCSS = function multiValueRemoveCSS(_ref3) {
  var _ref3$theme = _ref3.theme,
      spacing = _ref3$theme.spacing,
      borderRadius = _ref3$theme.borderRadius,
      colors = _ref3$theme.colors,
      isFocused = _ref3.isFocused;
  return {
    alignItems: 'center',
    borderRadius: borderRadius / 2,
    backgroundColor: isFocused && colors.dangerLight,
    display: 'flex',
    paddingLeft: spacing.baseUnit,
    paddingRight: spacing.baseUnit,
    ':hover': {
      backgroundColor: colors.dangerLight,
      color: colors.danger
    }
  };
};
var MultiValueGeneric = function MultiValueGeneric(_ref4) {
  var children = _ref4.children,
      innerProps = _ref4.innerProps;
  return (0,core_browser_esm/* jsx */.tZ)("div", innerProps, children);
};
var MultiValueContainer = MultiValueGeneric;
var MultiValueLabel = MultiValueGeneric;
function MultiValueRemove(_ref5) {
  var children = _ref5.children,
      innerProps = _ref5.innerProps;
  return (0,core_browser_esm/* jsx */.tZ)("div", innerProps, children || (0,core_browser_esm/* jsx */.tZ)(CrossIcon, {
    size: 14
  }));
}

var MultiValue = function MultiValue(props) {
  var children = props.children,
      className = props.className,
      components = props.components,
      cx = props.cx,
      data = props.data,
      getStyles = props.getStyles,
      innerProps = props.innerProps,
      isDisabled = props.isDisabled,
      removeProps = props.removeProps,
      selectProps = props.selectProps;
  var Container = components.Container,
      Label = components.Label,
      Remove = components.Remove;
  return (0,core_browser_esm/* jsx */.tZ)(core_browser_esm/* ClassNames */.ms, null, function (_ref6) {
    var css = _ref6.css,
        emotionCx = _ref6.cx;
    return (0,core_browser_esm/* jsx */.tZ)(Container, {
      data: data,
      innerProps: _objectSpread$3(_objectSpread$3({}, innerProps), {}, {
        className: emotionCx(css(getStyles('multiValue', props)), cx({
          'multi-value': true,
          'multi-value--is-disabled': isDisabled
        }, className))
      }),
      selectProps: selectProps
    }, (0,core_browser_esm/* jsx */.tZ)(Label, {
      data: data,
      innerProps: {
        className: emotionCx(css(getStyles('multiValueLabel', props)), cx({
          'multi-value__label': true
        }, className))
      },
      selectProps: selectProps
    }, children), (0,core_browser_esm/* jsx */.tZ)(Remove, {
      data: data,
      innerProps: _objectSpread$3({
        className: emotionCx(css(getStyles('multiValueRemove', props)), cx({
          'multi-value__remove': true
        }, className))
      }, removeProps),
      selectProps: selectProps
    }));
  });
};

MultiValue.defaultProps = {
  cropWithEllipsis: true
};

var optionCSS = function optionCSS(_ref) {
  var isDisabled = _ref.isDisabled,
      isFocused = _ref.isFocused,
      isSelected = _ref.isSelected,
      _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      colors = _ref$theme.colors;
  return {
    label: 'option',
    backgroundColor: isSelected ? colors.primary : isFocused ? colors.primary25 : 'transparent',
    color: isDisabled ? colors.neutral20 : isSelected ? colors.neutral0 : 'inherit',
    cursor: 'default',
    display: 'block',
    fontSize: 'inherit',
    padding: "".concat(spacing.baseUnit * 2, "px ").concat(spacing.baseUnit * 3, "px"),
    width: '100%',
    userSelect: 'none',
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    // provide some affordance on touch devices
    ':active': {
      backgroundColor: !isDisabled && (isSelected ? colors.primary : colors.primary50)
    }
  };
};

var Option = function Option(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      isDisabled = props.isDisabled,
      isFocused = props.isFocused,
      isSelected = props.isSelected,
      innerRef = props.innerRef,
      innerProps = props.innerProps;
  return (0,core_browser_esm/* jsx */.tZ)("div", (0,esm_extends/* default */.Z)({
    css: getStyles('option', props),
    className: cx({
      option: true,
      'option--is-disabled': isDisabled,
      'option--is-focused': isFocused,
      'option--is-selected': isSelected
    }, className),
    ref: innerRef
  }, innerProps), children);
};

var placeholderCSS = function placeholderCSS(_ref) {
  var _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      colors = _ref$theme.colors;
  return {
    label: 'placeholder',
    color: colors.neutral50,
    marginLeft: spacing.baseUnit / 2,
    marginRight: spacing.baseUnit / 2,
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)'
  };
};

var Placeholder = function Placeholder(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return (0,core_browser_esm/* jsx */.tZ)("div", (0,esm_extends/* default */.Z)({
    css: getStyles('placeholder', props),
    className: cx({
      placeholder: true
    }, className)
  }, innerProps), children);
};

var css$1 = function css(_ref) {
  var isDisabled = _ref.isDisabled,
      _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      colors = _ref$theme.colors;
  return {
    label: 'singleValue',
    color: isDisabled ? colors.neutral40 : colors.neutral80,
    marginLeft: spacing.baseUnit / 2,
    marginRight: spacing.baseUnit / 2,
    maxWidth: "calc(100% - ".concat(spacing.baseUnit * 2, "px)"),
    overflow: 'hidden',
    position: 'absolute',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    top: '50%',
    transform: 'translateY(-50%)'
  };
};

var SingleValue = function SingleValue(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      isDisabled = props.isDisabled,
      innerProps = props.innerProps;
  return (0,core_browser_esm/* jsx */.tZ)("div", (0,esm_extends/* default */.Z)({
    css: getStyles('singleValue', props),
    className: cx({
      'single-value': true,
      'single-value--is-disabled': isDisabled
    }, className)
  }, innerProps), children);
};

function ownKeys$4(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$4(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$4(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$4(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var components = {
  ClearIndicator: ClearIndicator,
  Control: Control,
  DropdownIndicator: DropdownIndicator,
  DownChevron: DownChevron,
  CrossIcon: CrossIcon,
  Group: Group,
  GroupHeading: GroupHeading,
  IndicatorsContainer: IndicatorsContainer,
  IndicatorSeparator: IndicatorSeparator,
  Input: Input,
  LoadingIndicator: LoadingIndicator,
  Menu: Menu,
  MenuList: MenuList,
  MenuPortal: MenuPortal,
  LoadingMessage: LoadingMessage,
  NoOptionsMessage: NoOptionsMessage,
  MultiValue: MultiValue,
  MultiValueContainer: MultiValueContainer,
  MultiValueLabel: MultiValueLabel,
  MultiValueRemove: MultiValueRemove,
  Option: Option,
  Placeholder: Placeholder,
  SelectContainer: SelectContainer,
  SingleValue: SingleValue,
  ValueContainer: ValueContainer
};
var defaultComponents = function defaultComponents(props) {
  return _objectSpread$4(_objectSpread$4({}, components), props.components);
};




/***/ }),

/***/ 31318:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ manageState)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(79308);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(14354);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32829);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26713);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32523);
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92014);
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27175);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44345);









function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var defaultProps = {
  defaultInputValue: '',
  defaultMenuIsOpen: false,
  defaultValue: null
};

var manageState = function manageState(SelectComponent) {
  var _class, _temp;

  return _temp = _class = /*#__PURE__*/function (_Component) {
    (0,_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(StateManager, _Component);

    var _super = _createSuper(StateManager);

    function StateManager() {
      var _this;

      (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(this, StateManager);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      _this.select = void 0;
      _this.state = {
        inputValue: _this.props.inputValue !== undefined ? _this.props.inputValue : _this.props.defaultInputValue,
        menuIsOpen: _this.props.menuIsOpen !== undefined ? _this.props.menuIsOpen : _this.props.defaultMenuIsOpen,
        value: _this.props.value !== undefined ? _this.props.value : _this.props.defaultValue
      };

      _this.onChange = function (value, actionMeta) {
        _this.callProp('onChange', value, actionMeta);

        _this.setState({
          value: value
        });
      };

      _this.onInputChange = function (value, actionMeta) {
        // TODO: for backwards compatibility, we allow the prop to return a new
        // value, but now inputValue is a controllable prop we probably shouldn't
        var newValue = _this.callProp('onInputChange', value, actionMeta);

        _this.setState({
          inputValue: newValue !== undefined ? newValue : value
        });
      };

      _this.onMenuOpen = function () {
        _this.callProp('onMenuOpen');

        _this.setState({
          menuIsOpen: true
        });
      };

      _this.onMenuClose = function () {
        _this.callProp('onMenuClose');

        _this.setState({
          menuIsOpen: false
        });
      };

      return _this;
    }

    (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(StateManager, [{
      key: "focus",
      value: function focus() {
        this.select.focus();
      }
    }, {
      key: "blur",
      value: function blur() {
        this.select.blur();
      } // FIXME: untyped flow code, return any

    }, {
      key: "getProp",
      value: function getProp(key) {
        return this.props[key] !== undefined ? this.props[key] : this.state[key];
      } // FIXME: untyped flow code, return any

    }, {
      key: "callProp",
      value: function callProp(name) {
        if (typeof this.props[name] === 'function') {
          var _this$props;

          for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
          }

          return (_this$props = this.props)[name].apply(_this$props, args);
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$props2 = this.props,
            defaultInputValue = _this$props2.defaultInputValue,
            defaultMenuIsOpen = _this$props2.defaultMenuIsOpen,
            defaultValue = _this$props2.defaultValue,
            props = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(_this$props2, ["defaultInputValue", "defaultMenuIsOpen", "defaultValue"]);

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(SelectComponent, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)({}, props, {
          ref: function ref(_ref) {
            _this2.select = _ref;
          },
          inputValue: this.getProp('inputValue'),
          menuIsOpen: this.getProp('menuIsOpen'),
          onChange: this.onChange,
          onInputChange: this.onInputChange,
          onMenuClose: this.onMenuClose,
          onMenuOpen: this.onMenuOpen,
          value: this.getProp('value')
        }));
      }
    }]);

    return StateManager;
  }(react__WEBPACK_IMPORTED_MODULE_0__.Component), _class.defaultProps = defaultProps, _temp;
};




/***/ }),

/***/ 76077:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ _arrayLikeToArray)
/* harmony export */ });
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}


/***/ }),

/***/ 22148:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ _assertThisInitialized)
/* harmony export */ });
function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}


/***/ }),

/***/ 32829:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ _classCallCheck)
/* harmony export */ });
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}


/***/ }),

/***/ 26713:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ _createClass)
/* harmony export */ });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9351);

function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}


/***/ }),

/***/ 87768:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ _defineProperty)
/* harmony export */ });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9351);

function _defineProperty(e, r, t) {
  return (r = (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}


/***/ }),

/***/ 27175:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ _getPrototypeOf)
/* harmony export */ });
function _getPrototypeOf(t) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, _getPrototypeOf(t);
}


/***/ }),

/***/ 32523:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ _inherits)
});

;// CONCATENATED MODULE: ./.yarn/cache/@babel-runtime-npm-7.25.7-67dab27f3f-73411fe0f1.zip/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}

;// CONCATENATED MODULE: ./.yarn/cache/@babel-runtime-npm-7.25.7-67dab27f3f-73411fe0f1.zip/node_modules/@babel/runtime/helpers/esm/inherits.js

function _inherits(t, e) {
  if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(t, "prototype", {
    writable: !1
  }), e && _setPrototypeOf(t, e);
}


/***/ }),

/***/ 79308:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ _objectWithoutProperties)
});

;// CONCATENATED MODULE: ./.yarn/cache/@babel-runtime-npm-7.25.7-67dab27f3f-73411fe0f1.zip/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (e.includes(n)) continue;
    t[n] = r[n];
  }
  return t;
}

;// CONCATENATED MODULE: ./.yarn/cache/@babel-runtime-npm-7.25.7-67dab27f3f-73411fe0f1.zip/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js

function _objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o,
    r,
    i = _objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}


/***/ }),

/***/ 92014:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ _possibleConstructorReturn)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31206);
/* harmony import */ var _assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22148);


function _possibleConstructorReturn(t, e) {
  if (e && ("object" == (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(e) || "function" == typeof e)) return e;
  if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
  return (0,_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(t);
}


/***/ }),

/***/ 43609:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ _toConsumableArray)
});

// EXTERNAL MODULE: ./.yarn/cache/@babel-runtime-npm-7.25.7-67dab27f3f-73411fe0f1.zip/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
var arrayLikeToArray = __webpack_require__(76077);
;// CONCATENATED MODULE: ./.yarn/cache/@babel-runtime-npm-7.25.7-67dab27f3f-73411fe0f1.zip/node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return (0,arrayLikeToArray/* default */.Z)(r);
}

;// CONCATENATED MODULE: ./.yarn/cache/@babel-runtime-npm-7.25.7-67dab27f3f-73411fe0f1.zip/node_modules/@babel/runtime/helpers/esm/iterableToArray.js
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}

// EXTERNAL MODULE: ./.yarn/cache/@babel-runtime-npm-7.25.7-67dab27f3f-73411fe0f1.zip/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
var unsupportedIterableToArray = __webpack_require__(78454);
;// CONCATENATED MODULE: ./.yarn/cache/@babel-runtime-npm-7.25.7-67dab27f3f-73411fe0f1.zip/node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

;// CONCATENATED MODULE: ./.yarn/cache/@babel-runtime-npm-7.25.7-67dab27f3f-73411fe0f1.zip/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js




function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || (0,unsupportedIterableToArray/* default */.Z)(r) || _nonIterableSpread();
}


/***/ }),

/***/ 9351:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ toPropertyKey)
});

// EXTERNAL MODULE: ./.yarn/cache/@babel-runtime-npm-7.25.7-67dab27f3f-73411fe0f1.zip/node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(31206);
;// CONCATENATED MODULE: ./.yarn/cache/@babel-runtime-npm-7.25.7-67dab27f3f-73411fe0f1.zip/node_modules/@babel/runtime/helpers/esm/toPrimitive.js

function toPrimitive(t, r) {
  if ("object" != (0,esm_typeof/* default */.Z)(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != (0,esm_typeof/* default */.Z)(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}

;// CONCATENATED MODULE: ./.yarn/cache/@babel-runtime-npm-7.25.7-67dab27f3f-73411fe0f1.zip/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js


function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == (0,esm_typeof/* default */.Z)(i) ? i : i + "";
}


/***/ }),

/***/ 31206:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}


/***/ }),

/***/ 78454:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ _unsupportedIterableToArray)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76077);

function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(r, a) : void 0;
  }
}


/***/ }),

/***/ 4755:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ cache_browser_esm)
});

;// CONCATENATED MODULE: ./.yarn/cache/@emotion-sheet-npm-0.9.4-de430f41b2-53bb833b4b.zip/node_modules/@emotion/sheet/dist/sheet.browser.esm.js
/*

Based off glamor's StyleSheet, thanks Sunil ❤️

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance

// usage

import { StyleSheet } from '@emotion/sheet'

let styleSheet = new StyleSheet({ key: '', container: document.head })

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents

*/
// $FlowFixMe
function sheetForTag(tag) {
  if (tag.sheet) {
    // $FlowFixMe
    return tag.sheet;
  } // this weirdness brought to you by firefox

  /* istanbul ignore next */


  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      // $FlowFixMe
      return document.styleSheets[i];
    }
  }
}

function createStyleElement(options) {
  var tag = document.createElement('style');
  tag.setAttribute('data-emotion', options.key);

  if (options.nonce !== undefined) {
    tag.setAttribute('nonce', options.nonce);
  }

  tag.appendChild(document.createTextNode(''));
  return tag;
}

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet(options) {
    this.isSpeedy = options.speedy === undefined ? "production" === 'production' : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets

    this.key = options.key;
    this.container = options.container;
    this.before = null;
  }

  var _proto = StyleSheet.prototype;

  _proto.insert = function insert(rule) {
    // the max length is how many rules we have per style tag, it's 65000 in speedy mode
    // it's 1 in dev because we insert source maps that map a single rule to a location
    // and you can only have one source map per style tag
    if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
      var _tag = createStyleElement(this);

      var before;

      if (this.tags.length === 0) {
        before = this.before;
      } else {
        before = this.tags[this.tags.length - 1].nextSibling;
      }

      this.container.insertBefore(_tag, before);
      this.tags.push(_tag);
    }

    var tag = this.tags[this.tags.length - 1];

    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);

      try {
        // this is a really hot path
        // we check the second character first because having "i"
        // as the second character will happen less often than
        // having "@" as the first character
        var isImportRule = rule.charCodeAt(1) === 105 && rule.charCodeAt(0) === 64; // this is the ultrafast version, works across browsers
        // the big drawback is that the css won't be editable in devtools

        sheet.insertRule(rule, // we need to insert @import rules before anything else
        // otherwise there will be an error
        // technically this means that the @import rules will
        // _usually_(not always since there could be multiple style tags)
        // be the first ones in prod and generally later in dev
        // this shouldn't really matter in the real world though
        // @import is generally only used for font faces from google fonts and etc.
        // so while this could be technically correct then it would be slower and larger
        // for a tiny bit of correctness that won't matter in the real world
        isImportRule ? 0 : sheet.cssRules.length);
      } catch (e) {
        if (false) {}
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }

    this.ctr++;
  };

  _proto.flush = function flush() {
    // $FlowFixMe
    this.tags.forEach(function (tag) {
      return tag.parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;
  };

  return StyleSheet;
}();



;// CONCATENATED MODULE: ./.yarn/cache/@emotion-stylis-npm-0.8.5-3e9db8959f-ceaa673457.zip/node_modules/@emotion/stylis/dist/stylis.browser.esm.js
function stylis_min (W) {
  function M(d, c, e, h, a) {
    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
      g = e.charCodeAt(l);
      l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);

      if (0 === b + n + v + m) {
        if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;

            default:
              f += e.charAt(l);
          }

          g = 59;
        }

        switch (g) {
          case 123:
            f = f.trim();
            q = f.charCodeAt(0);
            k = 1;

            for (t = ++l; l < B;) {
              switch (g = e.charCodeAt(l)) {
                case 123:
                  k++;
                  break;

                case 125:
                  k--;
                  break;

                case 47:
                  switch (g = e.charCodeAt(l + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u = l + 1; u < J; ++u) {
                          switch (e.charCodeAt(u)) {
                            case 47:
                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                l = u + 1;
                                break a;
                              }

                              break;

                            case 10:
                              if (47 === g) {
                                l = u + 1;
                                break a;
                              }

                          }
                        }

                        l = u;
                      }

                  }

                  break;

                case 91:
                  g++;

                case 40:
                  g++;

                case 34:
                case 39:
                  for (; l++ < J && e.charCodeAt(l) !== g;) {
                  }

              }

              if (0 === k) break;
              l++;
            }

            k = e.substring(t, l);
            0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));

            switch (q) {
              case 64:
                0 < r && (f = f.replace(N, ''));
                g = f.charCodeAt(1);

                switch (g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r = c;
                    break;

                  default:
                    r = O;
                }

                k = M(c, r, k, g, a + 1);
                t = k.length;
                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                if (0 < t) switch (g) {
                  case 115:
                    f = f.replace(da, ea);

                  case 100:
                  case 109:
                  case 45:
                    k = f + '{' + k + '}';
                    break;

                  case 107:
                    f = f.replace(fa, '$1 $2');
                    k = f + '{' + k + '}';
                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                    break;

                  default:
                    k = f + k, 112 === h && (k = (p += k, ''));
                } else k = '';
                break;

              default:
                k = M(c, X(c, f, I), k, h, a + 1);
            }

            F += k;
            k = I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
            break;

          case 125:
          case 59:
            f = (0 < r ? f.replace(N, '') : f).trim();
            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
              case 0:
                break;

              case 64:
                if (105 === g || 99 === g) {
                  G += f + e.charAt(l);
                  break;
                }

              default:
                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
            }
            I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
        }
      }

      switch (g) {
        case 13:
        case 10:
          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
          z = 1;
          D++;
          break;

        case 59:
        case 125:
          if (0 === b + n + v + m) {
            z++;
            break;
          }

        default:
          z++;
          y = e.charAt(l);

          switch (g) {
            case 9:
            case 32:
              if (0 === n + m + b) switch (x) {
                case 44:
                case 58:
                case 9:
                case 32:
                  y = '';
                  break;

                default:
                  32 !== g && (y = ' ');
              }
              break;

            case 0:
              y = '\\0';
              break;

            case 12:
              y = '\\f';
              break;

            case 11:
              y = '\\v';
              break;

            case 38:
              0 === n + b + m && (r = I = 1, y = '\f' + y);
              break;

            case 108:
              if (0 === n + b + m + E && 0 < u) switch (l - u) {
                case 2:
                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);

                case 8:
                  111 === K && (E = K);
              }
              break;

            case 58:
              0 === n + b + m && (u = l);
              break;

            case 44:
              0 === b + v + n + m && (r = 1, y += '\r');
              break;

            case 34:
            case 39:
              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
              break;

            case 91:
              0 === n + b + v && m++;
              break;

            case 93:
              0 === n + b + v && m--;
              break;

            case 41:
              0 === n + b + m && v--;
              break;

            case 40:
              if (0 === n + b + m) {
                if (0 === q) switch (2 * x + 3 * K) {
                  case 533:
                    break;

                  default:
                    q = 1;
                }
                v++;
              }

              break;

            case 64:
              0 === b + v + n + m + u + k && (k = 1);
              break;

            case 42:
            case 47:
              if (!(0 < n + m + v)) switch (b) {
                case 0:
                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                    case 235:
                      b = 47;
                      break;

                    case 220:
                      t = l, b = 42;
                  }

                  break;

                case 42:
                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
              }
          }

          0 === b && (f += y);
      }

      K = x;
      x = g;
      l++;
    }

    t = p.length;

    if (0 < t) {
      r = c;
      if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
      p = r.join(',') + '{' + p + '}';

      if (0 !== w * E) {
        2 !== w || L(p, 2) || (E = 0);

        switch (E) {
          case 111:
            p = p.replace(ha, ':-moz-$1') + p;
            break;

          case 112:
            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
        }

        E = 0;
      }
    }

    return G + p + F;
  }

  function X(d, c, e) {
    var h = c.trim().split(ia);
    c = h;
    var a = h.length,
        m = d.length;

    switch (m) {
      case 0:
      case 1:
        var b = 0;

        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
          c[b] = Z(d, c[b], e).trim();
        }

        break;

      default:
        var v = b = 0;

        for (c = []; b < a; ++b) {
          for (var n = 0; n < m; ++n) {
            c[v++] = Z(d[n] + ' ', h[b], e).trim();
          }
        }

    }

    return c;
  }

  function Z(d, c, e) {
    var h = c.charCodeAt(0);
    33 > h && (h = (c = c.trim()).charCodeAt(0));

    switch (h) {
      case 38:
        return c.replace(F, '$1' + d.trim());

      case 58:
        return d.trim() + c.replace(F, '$1' + d.trim());

      default:
        if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
    }

    return d + c;
  }

  function P(d, c, e, h) {
    var a = d + ';',
        m = 2 * c + 3 * e + 4 * h;

    if (944 === m) {
      d = a.indexOf(':', 9) + 1;
      var b = a.substring(d, a.length - 1).trim();
      b = a.substring(0, d).trim() + b + ';';
      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
    }

    if (0 === w || 2 === w && !L(a, 1)) return a;

    switch (m) {
      case 1015:
        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;

      case 951:
        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;

      case 963:
        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;

      case 1009:
        if (100 !== a.charCodeAt(4)) break;

      case 969:
      case 942:
        return '-webkit-' + a + a;

      case 978:
        return '-webkit-' + a + '-moz-' + a + a;

      case 1019:
      case 983:
        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;

      case 883:
        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
        if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
        break;

      case 932:
        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
          case 103:
            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;

          case 115:
            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;

          case 98:
            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
        }
        return '-webkit-' + a + '-ms-' + a + a;

      case 964:
        return '-webkit-' + a + '-ms-flex-' + a + a;

      case 1023:
        if (99 !== a.charCodeAt(8)) break;
        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;

      case 1005:
        return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;

      case 1e3:
        b = a.substring(13).trim();
        c = b.indexOf('-') + 1;

        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
          case 226:
            b = a.replace(G, 'tb');
            break;

          case 232:
            b = a.replace(G, 'tb-rl');
            break;

          case 220:
            b = a.replace(G, 'lr');
            break;

          default:
            return a;
        }

        return '-webkit-' + a + '-ms-' + b + a;

      case 1017:
        if (-1 === a.indexOf('sticky', 9)) break;

      case 975:
        c = (a = d).length - 10;
        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();

        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b.charCodeAt(8)) break;

          case 115:
            a = a.replace(b, '-webkit-' + b) + ';' + a;
            break;

          case 207:
          case 102:
            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
        }

        return a + ';';

      case 938:
        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
          case 105:
            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;

          case 115:
            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;

          default:
            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
        }
        break;

      case 973:
      case 989:
        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

      case 931:
      case 953:
        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
        break;

      case 962:
        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
    }

    return a;
  }

  function L(d, c) {
    var e = d.indexOf(1 === c ? ':' : '{'),
        h = d.substring(0, 3 !== c ? e : 10);
    e = d.substring(e + 1, d.length - 1);
    return R(2 !== c ? h : h.replace(na, '$1'), e, c);
  }

  function ea(d, c) {
    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
  }

  function H(d, c, e, h, a, m, b, v, n, q) {
    for (var g = 0, x = c, w; g < A; ++g) {
      switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;

        default:
          x = w;
      }
    }

    if (x !== c) return x;
  }

  function T(d) {
    switch (d) {
      case void 0:
      case null:
        A = S.length = 0;
        break;

      default:
        if ('function' === typeof d) S[A++] = d;else if ('object' === typeof d) for (var c = 0, e = d.length; c < e; ++c) {
          T(d[c]);
        } else Y = !!d | 0;
    }

    return T;
  }

  function U(d) {
    d = d.prefix;
    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
    return U;
  }

  function B(d, c) {
    var e = d;
    33 > e.charCodeAt(0) && (e = e.trim());
    V = e;
    e = [V];

    if (0 < A) {
      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
      void 0 !== h && 'string' === typeof h && (c = h);
    }

    var a = M(O, e, c, 0, 0);
    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
    V = '';
    E = 0;
    z = D = 1;
    return a;
  }

  var ca = /^\0+/g,
      N = /[\0\r\f]/g,
      aa = /: */g,
      ka = /zoo|gra/,
      ma = /([,: ])(transform)/g,
      ia = /,\r+?/g,
      F = /([\t\r\n ])*\f?&/g,
      fa = /@(k\w+)\s*(\S*)\s*/,
      Q = /::(place)/g,
      ha = /:(read-only)/g,
      G = /[svh]\w+-[tblr]{2}/,
      da = /\(\s*(.*)\s*\)/g,
      oa = /([\s\S]*?);/g,
      ba = /-self|flex-/g,
      na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
      la = /stretch|:\s*\w+\-(?:conte|avail)/,
      ja = /([^-])(image-set\()/,
      z = 1,
      D = 1,
      E = 0,
      w = 1,
      O = [],
      S = [],
      A = 0,
      R = null,
      Y = 0,
      V = '';
  B.use = T;
  B.set = U;
  void 0 !== W && U(W);
  return B;
}

/* harmony default export */ const stylis_browser_esm = (stylis_min);

;// CONCATENATED MODULE: ./.yarn/cache/@emotion-cache-npm-10.0.29-076efd3781-9978106bb1.zip/node_modules/@emotion/cache/dist/cache.browser.esm.js




// https://github.com/thysultan/stylis.js/tree/master/plugins/rule-sheet
// inlined to avoid umd wrapper and peerDep warnings/installing stylis
// since we use stylis after closure compiler
var delimiter = '/*|*/';
var needle = delimiter + '}';

function toSheet(block) {
  if (block) {
    Sheet.current.insert(block + '}');
  }
}

var Sheet = {
  current: null
};
var ruleSheet = function ruleSheet(context, content, selectors, parents, line, column, length, ns, depth, at) {
  switch (context) {
    // property
    case 1:
      {
        switch (content.charCodeAt(0)) {
          case 64:
            {
              // @import
              Sheet.current.insert(content + ';');
              return '';
            }
          // charcode for l

          case 108:
            {
              // charcode for b
              // this ignores label
              if (content.charCodeAt(2) === 98) {
                return '';
              }
            }
        }

        break;
      }
    // selector

    case 2:
      {
        if (ns === 0) return content + delimiter;
        break;
      }
    // at-rule

    case 3:
      {
        switch (ns) {
          // @font-face, @page
          case 102:
          case 112:
            {
              Sheet.current.insert(selectors[0] + content);
              return '';
            }

          default:
            {
              return content + (at === 0 ? delimiter : '');
            }
        }
      }

    case -2:
      {
        content.split(needle).forEach(toSheet);
      }
  }
};

var createCache = function createCache(options) {
  if (options === undefined) options = {};
  var key = options.key || 'css';
  var stylisOptions;

  if (options.prefix !== undefined) {
    stylisOptions = {
      prefix: options.prefix
    };
  }

  var stylis = new stylis_browser_esm(stylisOptions);

  if (false) {}

  var inserted = {}; // $FlowFixMe

  var container;

  {
    container = options.container || document.head;
    var nodes = document.querySelectorAll("style[data-emotion-" + key + "]");
    Array.prototype.forEach.call(nodes, function (node) {
      var attrib = node.getAttribute("data-emotion-" + key); // $FlowFixMe

      attrib.split(' ').forEach(function (id) {
        inserted[id] = true;
      });

      if (node.parentNode !== container) {
        container.appendChild(node);
      }
    });
  }

  var _insert;

  {
    stylis.use(options.stylisPlugins)(ruleSheet);

    _insert = function insert(selector, serialized, sheet, shouldCache) {
      var name = serialized.name;
      Sheet.current = sheet;

      if (false) { var map; }

      stylis(selector, serialized.styles);

      if (shouldCache) {
        cache.inserted[name] = true;
      }
    };
  }

  if (false) { var commentEnd, commentStart; }

  var cache = {
    key: key,
    sheet: new StyleSheet({
      key: key,
      container: container,
      nonce: options.nonce,
      speedy: options.speedy
    }),
    nonce: options.nonce,
    inserted: inserted,
    registered: {},
    insert: _insert
  };
  return cache;
};

/* harmony default export */ const cache_browser_esm = (createCache);


/***/ }),

/***/ 83970:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_serialize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94870);


function css() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return (0,_emotion_serialize__WEBPACK_IMPORTED_MODULE_0__/* .serializeStyles */ .O)(args);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (css);


/***/ }),

/***/ 94870:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  O: () => (/* binding */ serializeStyles)
});

;// CONCATENATED MODULE: ./.yarn/cache/@emotion-hash-npm-0.8.0-0104f4bbf3-4b35d88a97.zip/node_modules/@emotion/hash/dist/hash.browser.esm.js
/* eslint-disable */
// Inspired by https://github.com/garycourt/murmurhash-js
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
function murmur2(str) {
  // 'm' and 'r' are mixing constants generated offline.
  // They're not really 'magic', they just happen to work well.
  // const m = 0x5bd1e995;
  // const r = 24;
  // Initialize the hash
  var h = 0; // Mix 4 bytes at a time into the hash

  var k,
      i = 0,
      len = str.length;

  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
    k ^=
    /* k >>> r: */
    k >>> 24;
    h =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^
    /* Math.imul(h, m): */
    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Handle the last few bytes of the input array


  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h =
      /* Math.imul(h, m): */
      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Do a few final mixes of the hash to ensure the last few
  // bytes are well-incorporated.


  h ^= h >>> 13;
  h =
  /* Math.imul(h, m): */
  (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
}

/* harmony default export */ const hash_browser_esm = (murmur2);

;// CONCATENATED MODULE: ./.yarn/cache/@emotion-unitless-npm-0.7.5-14e1171640-f976e5345b.zip/node_modules/@emotion/unitless/dist/unitless.browser.esm.js
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

/* harmony default export */ const unitless_browser_esm = (unitlessKeys);

;// CONCATENATED MODULE: ./.yarn/cache/@emotion-memoize-npm-0.7.4-5648cf11b8-4e3920d4ec.zip/node_modules/@emotion/memoize/dist/memoize.browser.esm.js
function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ const memoize_browser_esm = (memoize);

;// CONCATENATED MODULE: ./.yarn/cache/@emotion-serialize-npm-0.11.16-ffd808625b-a6c3b70417.zip/node_modules/@emotion/serialize/dist/serialize.browser.esm.js




var ILLEGAL_ESCAPE_SEQUENCE_ERROR = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";
var UNDEFINED_AS_OBJECT_KEY_ERROR = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).";
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;

var isCustomProperty = function isCustomProperty(property) {
  return property.charCodeAt(1) === 45;
};

var isProcessableValue = function isProcessableValue(value) {
  return value != null && typeof value !== 'boolean';
};

var processStyleName = memoize_browser_esm(function (styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
});

var processStyleValue = function processStyleValue(key, value) {
  switch (key) {
    case 'animation':
    case 'animationName':
      {
        if (typeof value === 'string') {
          return value.replace(animationRegex, function (match, p1, p2) {
            cursor = {
              name: p1,
              styles: p2,
              next: cursor
            };
            return p1;
          });
        }
      }
  }

  if (unitless_browser_esm[key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
    return value + 'px';
  }

  return value;
};

if (false) { var hyphenatedCache, hyphenPattern, msPattern, oldProcessStyleValue, contentValues, contentValuePattern; }

var shouldWarnAboutInterpolatingClassNameFromCss = true;

function handleInterpolation(mergedProps, registered, interpolation, couldBeSelectorInterpolation) {
  if (interpolation == null) {
    return '';
  }

  if (interpolation.__emotion_styles !== undefined) {
    if (false) {}

    return interpolation;
  }

  switch (typeof interpolation) {
    case 'boolean':
      {
        return '';
      }

    case 'object':
      {
        if (interpolation.anim === 1) {
          cursor = {
            name: interpolation.name,
            styles: interpolation.styles,
            next: cursor
          };
          return interpolation.name;
        }

        if (interpolation.styles !== undefined) {
          var next = interpolation.next;

          if (next !== undefined) {
            // not the most efficient thing ever but this is a pretty rare case
            // and there will be very few iterations of this generally
            while (next !== undefined) {
              cursor = {
                name: next.name,
                styles: next.styles,
                next: cursor
              };
              next = next.next;
            }
          }

          var styles = interpolation.styles + ";";

          if (false) {}

          return styles;
        }

        return createStringFromObject(mergedProps, registered, interpolation);
      }

    case 'function':
      {
        if (mergedProps !== undefined) {
          var previousCursor = cursor;
          var result = interpolation(mergedProps);
          cursor = previousCursor;
          return handleInterpolation(mergedProps, registered, result, couldBeSelectorInterpolation);
        } else if (false) {}

        break;
      }

    case 'string':
      if (false) { var replaced, matched; }

      break;
  } // finalize string values (regular strings and functions interpolated into css calls)


  if (registered == null) {
    return interpolation;
  }

  var cached = registered[interpolation];

  if (false) {}

  return cached !== undefined && !couldBeSelectorInterpolation ? cached : interpolation;
}

function createStringFromObject(mergedProps, registered, obj) {
  var string = '';

  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += handleInterpolation(mergedProps, registered, obj[i], false);
    }
  } else {
    for (var _key in obj) {
      var value = obj[_key];

      if (typeof value !== 'object') {
        if (registered != null && registered[value] !== undefined) {
          string += _key + "{" + registered[value] + "}";
        } else if (isProcessableValue(value)) {
          string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
        }
      } else {
        if (_key === 'NO_COMPONENT_SELECTOR' && "production" !== 'production') {}

        if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value, false);

          switch (_key) {
            case 'animation':
            case 'animationName':
              {
                string += processStyleName(_key) + ":" + interpolated + ";";
                break;
              }

            default:
              {
                if (false) {}

                string += _key + "{" + interpolated + "}";
              }
          }
        }
      }
    }
  }

  return string;
}

var labelPattern = /label:\s*([^\s;\n{]+)\s*;/g;
var sourceMapPattern;

if (false) {} // this is the cursor for keyframes
// keyframes are stored on the SerializedStyles object as a linked list


var cursor;
var serializeStyles = function serializeStyles(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== undefined) {
    return args[0];
  }

  var stringMode = true;
  var styles = '';
  cursor = undefined;
  var strings = args[0];

  if (strings == null || strings.raw === undefined) {
    stringMode = false;
    styles += handleInterpolation(mergedProps, registered, strings, false);
  } else {
    if (false) {}

    styles += strings[0];
  } // we start at 1 since we've already handled the first arg


  for (var i = 1; i < args.length; i++) {
    styles += handleInterpolation(mergedProps, registered, args[i], styles.charCodeAt(styles.length - 1) === 46);

    if (stringMode) {
      if (false) {}

      styles += strings[i];
    }
  }

  var sourceMap;

  if (false) {} // using a global regex with .exec is stateful so lastIndex has to be reset each time


  labelPattern.lastIndex = 0;
  var identifierName = '';
  var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5

  while ((match = labelPattern.exec(styles)) !== null) {
    identifierName += '-' + // $FlowFixMe we know it's not null
    match[1];
  }

  var name = hash_browser_esm(styles) + identifierName;

  if (false) {}

  return {
    name: name,
    styles: styles,
    next: cursor
  };
};




/***/ }),

/***/ 31018:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var safeIsNaN = Number.isNaN ||
    function ponyfill(value) {
        return typeof value === 'number' && value !== value;
    };
function isEqual(first, second) {
    if (first === second) {
        return true;
    }
    if (safeIsNaN(first) && safeIsNaN(second)) {
        return true;
    }
    return false;
}
function areInputsEqual(newInputs, lastInputs) {
    if (newInputs.length !== lastInputs.length) {
        return false;
    }
    for (var i = 0; i < newInputs.length; i++) {
        if (!isEqual(newInputs[i], lastInputs[i])) {
            return false;
        }
    }
    return true;
}

function memoizeOne(resultFn, isEqual) {
    if (isEqual === void 0) { isEqual = areInputsEqual; }
    var lastThis;
    var lastArgs = [];
    var lastResult;
    var calledOnce = false;
    function memoized() {
        var newArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            newArgs[_i] = arguments[_i];
        }
        if (calledOnce && lastThis === this && isEqual(newArgs, lastArgs)) {
            return lastResult;
        }
        lastResult = resultFn.apply(this, newArgs);
        calledOnce = true;
        lastThis = this;
        lastArgs = newArgs;
        return lastResult;
    }
    return memoized;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (memoizeOne);


/***/ })

};
;
//# sourceMappingURL=https://storage.googleapis.com/streak-extension-sourcemaps/clientjs/clientjs.chunk.2947.f79a2ace6e43c1bbc10d.js.map