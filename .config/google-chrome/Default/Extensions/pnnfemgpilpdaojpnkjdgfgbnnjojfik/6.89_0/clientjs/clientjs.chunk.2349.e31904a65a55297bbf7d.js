"use strict";
export const id = 2349;
export const ids = [2349];
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

/***/ 14206:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ AddContactWrapper)
/* harmony export */ });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81518);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17013);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44345);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(63086);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(77724);
/* harmony import */ var _RelatedContactSelectDropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(36576);
/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54165);
/* harmony import */ var _components_Icon_Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71174);
/* harmony import */ var _components_IconButton_IconButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(94366);
/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3572);
/* harmony import */ var _redux_selectors_contactAndOrgSelectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(18073);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(35091);
/* harmony import */ var _widgets_react_material_tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(60303);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_RelatedContactSelectDropdown__WEBPACK_IMPORTED_MODULE_3__]);
_RelatedContactSelectDropdown__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];














function AddContactWrapper(props) {
  const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  const [showInput, setShowInput] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const {
    anchorProps,
    showTooltip
  } = (0,_widgets_react_material_tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_9__/* .useTooltip */ .l)();
  const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_11__/* .useDispatch */ .I0)();
  const relatedContactEmails = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_11__/* .useSelector */ .v9)(state => {
    const relatedContacts = (0,_redux_selectors_contactAndOrgSelectors__WEBPACK_IMPORTED_MODULE_7__/* .getRelatedContacts */ .K1)(state, props.relatedContactLinks);
    return (0,lodash__WEBPACK_IMPORTED_MODULE_1__.flatMap)(relatedContacts, contact => contact.emailAddresses);
  }, react_redux__WEBPACK_IMPORTED_MODULE_12__/* .shallowEqual */ .wU);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
    className: "jsx-553885700" + " " + "add_contact_container_wrapper",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
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
      className: "jsx-553885700" + " " + "add_contact_container",
      children: [!showInput && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
        onClick: () => {
          setShowInput(true);
        },
        className: "jsx-553885700" + " " + "add_contact_display",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_4__/* .Column */ .sg, {
          alignment: "start",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            name: "add",
            variant: "inline"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_4__/* .Column */ .sg, {
          alignment: "center",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("span", {
            className: "jsx-553885700" + " " + "add_contact_text",
            children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z.getString('add_contact')
          })
        })]
      }), showInput && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_RelatedContactSelectDropdown__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        track: props.track,
        contactId: props.contactId,
        newValueType: "CONTACT",
        orgId: props.orgId,
        onBlur: () => {
          setShowInput(false);
        },
        onKeyDown: e => {
          if (e.keyCode === 13) {
            setTimeout(() => containerRef.current && containerRef.current.focus(), 0);
          }
        },
        components: {
          ValueContainer: props => {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
              style: {
                width: '100%'
              },
              className: "jsx-553885700",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_4__/* .Container */ .W2, {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_4__/* .Row */ .X2, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_4__/* .Column */ .sg, {
                    alignment: "start",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                      name: "add",
                      variant: "inline"
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_4__/* .Column */ .sg, {
                    alignment: "center",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(react_select__WEBPACK_IMPORTED_MODULE_13__.F.ValueContainer, {
                      ...props
                    })
                  })]
                })
              })
            });
          }
        },
        placeholder: _services_locale_locale__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z.getString('add_contact'),
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
        }
      })]
    }), !showInput && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_widgets_react_material_tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
      tooltip: showTooltip ? _services_locale_locale__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z.getString('email_all') : null,
      anchor: anchorRef => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
        ref: anchorRef,
        ...anchorProps,
        className: "jsx-553885700" + " " + (anchorProps && anchorProps.className != null && anchorProps.className || ""),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
          className: "jsx-553885700" + " " + "add_contact_email_contact",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_IconButton_IconButton__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            onClick: () => {
              dispatch({
                type: 'CONTACT/CLICK/EMAIL',
                emails: relatedContactEmails
              });
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
              accent: "default",
              isOutline: true,
              name: "email",
              variant: "inline"
            })
          })
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "553885700",
      children: [".add_contact_container_wrapper.jsx-553885700{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}", ".add_contact_container.jsx-553885700{padding:8px 12px;min-height:32px;-webkit-flex:1;-ms-flex:1;flex:1;}", ".add_contact_container.jsx-553885700:hover,.add_contact_container.jsx-553885700:focus{background-color:var(--streak-app-primary-hover);cursor:pointer;border-style:none;outline-style:none;}", ".add_contact_display.jsx-553885700{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex:1;-ms-flex:1;flex:1;}", ".add_contact_display.jsx-553885700 .add_contact_text.jsx-553885700{color:var(--streak-app-primary);font-family:Product Sans;font-size:var(--streak-text-size-14);font-weight:500;line-height:32px;padding-right:8px;}", ".add_contact_email_contact.jsx-553885700{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:12px;}", ".add_contact_email_contact.jsx-553885700:hover{background-color:var(--streak-app-primary-hover);cursor:pointer;}"]
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 16181:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Contact)
/* harmony export */ });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81518);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47587);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44345);
/* harmony import */ var _AddContactWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14206);
/* harmony import */ var _ContactToolbarButtons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74641);
/* harmony import */ var _RelatedContacts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6561);
/* harmony import */ var _containers_ContactDetailsSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(71718);
/* harmony import */ var _containers_Enrichment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(70120);
/* harmony import */ var _presentation_ClickableCountRow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(71725);
/* harmony import */ var _teamContactView_TeamPicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(46017);
/* harmony import */ var _components_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(10295);
/* harmony import */ var _components_Icon_Icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(71174);
/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(54165);
/* harmony import */ var _lib_utils_string_isValidEmail__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(1760);
/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(3572);
/* harmony import */ var _redux_models_modelHooks__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(64076);
/* harmony import */ var _redux_selectors_getIsOnPreviewRoute__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(50633);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(35091);
/* harmony import */ var _ThreadsWithTeam__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(34077);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_AddContactWrapper__WEBPACK_IMPORTED_MODULE_3__, _ContactToolbarButtons__WEBPACK_IMPORTED_MODULE_4__, _RelatedContacts__WEBPACK_IMPORTED_MODULE_5__, _containers_ContactDetailsSection__WEBPACK_IMPORTED_MODULE_6__, _containers_Enrichment__WEBPACK_IMPORTED_MODULE_7__, _ThreadsWithTeam__WEBPACK_IMPORTED_MODULE_16__]);
([_AddContactWrapper__WEBPACK_IMPORTED_MODULE_3__, _ContactToolbarButtons__WEBPACK_IMPORTED_MODULE_4__, _RelatedContacts__WEBPACK_IMPORTED_MODULE_5__, _containers_ContactDetailsSection__WEBPACK_IMPORTED_MODULE_6__, _containers_Enrichment__WEBPACK_IMPORTED_MODULE_7__, _ThreadsWithTeam__WEBPACK_IMPORTED_MODULE_16__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





















function Contact(_ref) {
  let {
    boxId,
    contactId,
    domRef,
    emailAddresses,
    fullName,
    getScrollContainer,
    imageUrl,
    name,
    onClickRelatedContacts,
    orgImageUrl,
    orgName,
    relatedContactLinks,
    relatedOrgLinks,
    showRelatedContacts,
    title,
    track
  } = _ref;
  const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_18__/* .useDispatch */ .I0)();
  const contact = (0,_redux_models_modelHooks__WEBPACK_IMPORTED_MODULE_13__/* .useContact */ .AW)({
    id: contactId
  }).result;
  const contactExtraInfo = (0,_redux_models_modelHooks__WEBPACK_IMPORTED_MODULE_13__/* .useContactExtraInfo */ .y8)(contactId).result;
  const teamCount = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_18__/* .useSelector */ .v9)(state => {
    return Object.values(state.models.teams).length;
  });
  const isOnEmailRoute = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_18__/* .useSelector */ .v9)(state => {
    const routeParams = state.routeState ? state.routeState.params : undefined;
    if (!routeParams) {
      return false;
    }
    return (0,_lib_utils_string_isValidEmail__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z)(routeParams.key);
  });
  const isOnPreviewRoute = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_18__/* .useSelector */ .v9)(state => (0,_redux_selectors_getIsOnPreviewRoute__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(state));
  const shouldShowTeamPicker = teamCount > 1 && isOnEmailRoute;
  const badge = relatedOrgLinks.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("span", {
    className: "jsx-324857992" + " " + "badge-container",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_components_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
      imageUrl: orgImageUrl,
      name: orgName,
      size: 24,
      variant: "square",
      hasBoxShadow: true
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "324857992",
      children: [".badge-container.jsx-324857992{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;border-radius:4px;background:var(--streak-solid-white);}"]
    })]
  });
  const shouldLinkifyHeader = isOnPreviewRoute && (contact?.key ?? contact?.emailAddresses[0]);
  const routeId = contact?.key ?? contact?.emailAddresses[0];
  const linkHandler = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => {
    if (shouldLinkifyHeader && routeId) {
      dispatch({
        type: 'ROUTER/GO_TO_ROUTE',
        routeId: `streak/contact/${routeId}`
      });
    }
  }, [shouldLinkifyHeader, routeId, dispatch]);
  const onBoxesClick = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => {
    dispatch({
      type: 'SIDEBAR/CARDS/PUSH',
      cards: [{
        type: 'CONTACT_AND_ORG_BOXES',
        boxIds: contact?.boxIds || [],
        contactId
      }]
    });
  }, [contact, contactId, dispatch]);
  const addContactWrapperComponent = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_AddContactWrapper__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
      contactId: contactId,
      track: track,
      relatedContactLinks: relatedContactLinks
    });
  }, [contactId, relatedContactLinks, track]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
    ref: domRef,
    className: "jsx-1945320499" + " " + "streak__sidebar_contact",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
      onClick: linkHandler,
      className: "jsx-1945320499" + " " + (classnames__WEBPACK_IMPORTED_MODULE_1___default()('contact_avatar', {
        isLink: shouldLinkifyHeader
      }) || ""),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_components_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
        customBadge: badge,
        imageUrl: imageUrl,
        name: name,
        size: 64,
        variant: "circle"
      })
    }), showRelatedContacts && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_RelatedContacts__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        getScrollContainer: getScrollContainer,
        relatedContactLinks: relatedContactLinks,
        relatedOrgLinks: relatedOrgLinks,
        contactId: contactId,
        track: track
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
        className: "jsx-1945320499" + " " + "streak__sidebar_add_contact",
        children: addContactWrapperComponent
      })]
    }), !showRelatedContacts && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
        onClick: linkHandler,
        className: "jsx-1945320499" + " " + (classnames__WEBPACK_IMPORTED_MODULE_1___default()('contact_name', {
          isLink: shouldLinkifyHeader
        }) || ""),
        children: fullName.split(' ').some(s => s.length) ? fullName : emailAddresses[0]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
        className: "jsx-1945320499" + " " + "contact_role",
        children: `${title} ${title && orgName && '⋅'} ${orgName}`
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
        className: "jsx-1945320499" + " " + "contact_toolbar_buttons",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_ContactToolbarButtons__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
          boxId: boxId,
          contactKeyOrId: {
            id: contactId
          },
          track: track
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
        className: "jsx-1945320499" + " " + "divider"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_presentation_ClickableCountRow__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        count: relatedContactLinks.length + relatedOrgLinks.length,
        label: _services_locale_locale__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z.getString('summary_related_contacts'),
        onClick: onClickRelatedContacts,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_12__/* .Column */ .sg, {
          alignment: "end",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
            name: "keyboard_arrow_right",
            accent: "muted",
            variant: "inline",
            size: "s"
          })
        })
      }), isOnPreviewRoute && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.Fragment, {
        children: [contactExtraInfo && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_presentation_ClickableCountRow__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
          count: contactExtraInfo.boxIds.length,
          label: _services_locale_locale__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z.getString('boxes_count_capitalize', {
            count: contactExtraInfo.boxIds.length
          }),
          onClick: onBoxesClick,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_12__/* .Column */ .sg, {
            alignment: "end",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
              name: "keyboard_arrow_right",
              accent: "muted",
              variant: "inline",
              size: "s"
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_ThreadsWithTeam__WEBPACK_IMPORTED_MODULE_16__/* .ThreadsWithTeam */ .U, {
          entity: {
            type: 'contact',
            key: contact?.key || undefined,
            email: emailAddresses[0]
          },
          onGoToEntity: linkHandler
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
        style: {
          marginBottom: '8px'
        },
        className: "jsx-1945320499"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
        className: "jsx-1945320499" + " " + "divider"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
        className: "jsx-1945320499" + " " + "contact_details",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_containers_ContactDetailsSection__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
          contactId: contactId,
          track: track
        })
      }), shouldShowTeamPicker && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
        className: "jsx-1945320499",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_teamContactView_TeamPicker__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {})
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_containers_Enrichment__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        id: contactId,
        type: "CONTACT"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "1945320499",
      children: [".streak__sidebar_contact.jsx-1945320499{padding-top:28px;}", ".contact_avatar.jsx-1945320499{left:114px;position:absolute;top:34px;cursor:default;opacity:1;-webkit-transition:opacity 0.5s linear;transition:opacity 0.5s linear;}", ".contact_avatar.isLink.jsx-1945320499{cursor:pointer;}", ".contact_name.jsx-1945320499{font-family:Product Sans;font-size:20px;line-height:24px;text-align:center;color:var(--streak-black-primary);}", ".contact_name.isLink.jsx-1945320499{cursor:pointer;}", ".contact_name.isLink.jsx-1945320499:hover{-webkit-text-decoration:underline;text-decoration:underline;}", ".contact_role.jsx-1945320499{font-family:Roboto;font-style:normal;font-weight:normal;font-size:13px;line-height:16px;text-align:center;color:var(--streak-black-secondary);}", ".contact_toolbar_buttons.jsx-1945320499{margin:16px auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;justify-items:center;}", ".contact_related.jsx-1945320499{margin-bottom:8px;}", ".divider.jsx-1945320499{height:1px;background:var(--streak-black-divider);margin-bottom:8px;}", ".streak__sidebar_add_contact.jsx-1945320499{position:absolute;bottom:0;width:100%;left:0;background:var(--streak-solid-white);box-shadow: 0px 2px 4px var(--streak-black-shadow), 0px 1px 10px var(--streak-black-divider), 0px 4px 5px var(--streak-black-divider);}"]
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 46789:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ EnrichmentBody)
});

// EXTERNAL MODULE: ./.yarn/__virtual__/styled-jsx-virtual-9c4bfc1357/0/cache/styled-jsx-npm-5.0.2-aff4f13ebf-96b4507d41.zip/node_modules/styled-jsx/style.js
var style = __webpack_require__(81518);
var style_default = /*#__PURE__*/__webpack_require__.n(style);
// EXTERNAL MODULE: ./extensions/common/js/services/locale/locale.ts + 37 modules
var locale = __webpack_require__(35091);
// EXTERNAL MODULE: ./.yarn/cache/react-npm-18.3.1-af38f3c1ae-261137d3f3.zip/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(59718);
;// CONCATENATED MODULE: ./extensions/common/js/modules/streakSidebar/contactAndOrg/components/Divider.tsx


function Divider() {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "jsx-2434710925" + " " + "divider"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)((style_default()), {
      id: "2434710925",
      children: [".divider.jsx-2434710925{height:1px;background:var(--streak-black-divider);margin:16px 0;}"]
    })]
  });
}
;// CONCATENATED MODULE: ./extensions/common/js/modules/streakSidebar/contactAndOrg/components/EnrichmentBody.tsx




const normalizeEnrichmentSuggestions = enrichmentSuggestions => {
  return Object.entries(enrichmentSuggestions ?? {}).map(_ref => {
    let [key, value] = _ref;
    return Array.isArray(value) ? value.map(arrayValue => ({
      property: key,
      value: arrayValue
    })) : {
      property: key,
      value
    };
  }).flat();
};
function EnrichmentBody(_ref2) {
  let {
    enrichment
  } = _ref2;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: "jsx-2830706669" + " " + "enrichment_body__container",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
      style: {
        color: 'var(--streak-black-secondary)'
      },
      className: "jsx-2830706669",
      children: locale/* default */.Z.getArray('streak_found_number_of_updates', {
        number: Object.keys(enrichment).length
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Divider, {}), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "jsx-2830706669" + " " + "enrichment_list__container",
      children: normalizeEnrichmentSuggestions(enrichment).map((_ref3, i) => {
        let {
          property,
          value
        } = _ref3;
        return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "jsx-2830706669" + " " + "enrichment_item__container",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
            className: "jsx-2830706669" + " " + "enrichment_item__container_property",
            children: `${property}: `
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
            className: "jsx-2830706669" + " " + "enrichment_item__container_value",
            children: value
          })]
        }, i);
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)((style_default()), {
      id: "2830706669",
      children: [".enrichment_body__container.jsx-2830706669{font-size:13px;}", ".enrichment_list__container.jsx-2830706669{margin-bottom:16px;}", ".enrichment_item__container_property.jsx-2830706669{color:var(--streak-black-secondary);text-transform:capitalize;}", ".enrichment_item__container_value.jsx-2830706669{word-break:break-word;}"]
    })]
  });
}

/***/ }),

/***/ 62275:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Org)
/* harmony export */ });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81518);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44345);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47587);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _AddContactWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14206);
/* harmony import */ var _RelatedContacts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6561);
/* harmony import */ var _ToolbarButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(60899);
/* harmony import */ var _containers_Enrichment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(70120);
/* harmony import */ var _containers_OrgDetailsSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(84152);
/* harmony import */ var _components_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(10295);
/* harmony import */ var _components_IconButton_IconButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(94366);
/* harmony import */ var _components_Icon_Icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(71174);
/* harmony import */ var _components_MenuButtons_DomainMenuButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(48804);
/* harmony import */ var _components_MenuButtons_PhoneMenuButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(69027);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(35091);
/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(3572);
/* harmony import */ var _teamContactView_TeamPicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(46017);
/* harmony import */ var _lib_utils_string_isValidPrettyDomain__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(46125);
/* harmony import */ var _redux_models_modelHooks__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(64076);
/* harmony import */ var _redux_selectors_getIsOnPreviewRoute__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(50633);
/* harmony import */ var _presentation_ClickableCountRow__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(71725);
/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(54165);
/* harmony import */ var _ThreadsWithTeam__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(34077);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_AddContactWrapper__WEBPACK_IMPORTED_MODULE_3__, _RelatedContacts__WEBPACK_IMPORTED_MODULE_4__, _containers_Enrichment__WEBPACK_IMPORTED_MODULE_6__, _ThreadsWithTeam__WEBPACK_IMPORTED_MODULE_20__]);
([_AddContactWrapper__WEBPACK_IMPORTED_MODULE_3__, _RelatedContacts__WEBPACK_IMPORTED_MODULE_4__, _containers_Enrichment__WEBPACK_IMPORTED_MODULE_6__, _ThreadsWithTeam__WEBPACK_IMPORTED_MODULE_20__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

























function Org(_ref) {
  let {
    boxId,
    domRef,
    domains,
    facebookHandle,
    getScrollContainer,
    imageUrl,
    instagramHandle,
    linkedinHandle,
    name,
    onClickFacebook,
    onClickInstagram,
    onClickLinkedIn,
    onClickRelatedContacts,
    onClickTwitter,
    orgId,
    relatedContactLinks,
    relatedOrgLinks,
    showRelatedContacts,
    track,
    twitterHandle
  } = _ref;
  const org = (0,_redux_models_modelHooks__WEBPACK_IMPORTED_MODULE_16__/* .useOrg */ .s9)({
    id: orgId
  }).result;
  const orgExtraInfo = (0,_redux_models_modelHooks__WEBPACK_IMPORTED_MODULE_16__/* .useOrgExtraInfo */ .ni)(orgId).result;
  const teamCount = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_22__/* .useSelector */ .v9)(state => {
    return Object.values(state.models.teams).length;
  });
  const isOnDomainRoute = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_22__/* .useSelector */ .v9)(state => {
    const routeParams = state.routeState?.params;
    if (!routeParams) {
      return false;
    }
    return (0,_lib_utils_string_isValidPrettyDomain__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)(routeParams.key);
  });
  const isOnPreviewRoute = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_22__/* .useSelector */ .v9)(state => (0,_redux_selectors_getIsOnPreviewRoute__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z)(state));
  const shouldShowTeamPicker = teamCount > 1 && isOnDomainRoute;
  const shouldLinkifyHeader = isOnPreviewRoute && (org?.key ?? org?.domains[0]);
  const routeId = org?.key ?? org?.domains[0];
  const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_22__/* .useDispatch */ .I0)();
  const linkHandler = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    if (shouldLinkifyHeader && routeId) {
      dispatch({
        type: 'ROUTER/GO_TO_ROUTE',
        routeId: `streak/organization/${routeId}`
      });
    }
  }, [shouldLinkifyHeader, routeId, dispatch]);
  const onBoxesClick = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    dispatch({
      type: 'SIDEBAR/CARDS/PUSH',
      cards: [{
        type: 'CONTACT_AND_ORG_BOXES',
        boxIds: org?.boxIds || [],
        orgId
      }]
    });
  }, [org, orgId, dispatch]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
    ref: domRef,
    className: "jsx-2255930311" + " " + "streak__sidebar_org",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("div", {
      onClick: linkHandler,
      className: "jsx-2255930311" + " " + (classnames__WEBPACK_IMPORTED_MODULE_2___default()('org_avatar', {
        isLink: shouldLinkifyHeader
      }) || ""),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_components_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        imageUrl: imageUrl,
        name: name,
        size: 64,
        variant: "square",
        hasBoxShadow: true
      })
    }), showRelatedContacts && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_RelatedContacts__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        getScrollContainer: getScrollContainer,
        relatedContactLinks: relatedContactLinks,
        relatedOrgLinks: relatedOrgLinks,
        orgId: orgId,
        track: track
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("div", {
        className: "jsx-2255930311" + " " + "streak__sidebar_add_contact",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_AddContactWrapper__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
          orgId: orgId,
          track: track,
          relatedContactLinks: relatedContactLinks
        })
      })]
    }), !showRelatedContacts && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("div", {
        onClick: linkHandler,
        className: "jsx-2255930311" + " " + (classnames__WEBPACK_IMPORTED_MODULE_2___default()('org_name', {
          isLink: shouldLinkifyHeader
        }) || ""),
        children: name || domains[0]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
        className: "jsx-2255930311" + " " + "org_toolbar_buttons",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_ToolbarButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
          tooltip: _services_locale_locale__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z.getString('teamOrg_website'),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_components_MenuButtons_DomainMenuButton__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
            orgId: orgId,
            track: track
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_ToolbarButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
          tooltip: (org?.phoneNumbers || []).length !== 0 ? _services_locale_locale__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z.getString('teamContact_phoneNumber') : _services_locale_locale__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z.getString('no_phone_number'),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_components_MenuButtons_PhoneMenuButton__WEBPACK_IMPORTED_MODULE_12__/* .PhoneMenuButton */ .x, {
            boxId: boxId,
            orgId: orgId,
            track: track
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_ToolbarButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
          tooltip: _services_locale_locale__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z.getString('facebook'),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_components_IconButton_IconButton__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
            disabled: facebookHandle.length === 0,
            onClick: onClickFacebook,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
              accent: facebookHandle.length === 0 ? 'inherit' : 'default',
              isOutline: true,
              name: "facebook",
              variant: "inline"
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_ToolbarButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
          tooltip: _services_locale_locale__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z.getString('instagram'),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_components_IconButton_IconButton__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
            disabled: instagramHandle.length === 0,
            onClick: onClickInstagram,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
              accent: instagramHandle.length === 0 ? 'inherit' : 'default',
              isOutline: true,
              name: "instagram",
              variant: "inline"
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_ToolbarButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
          tooltip: _services_locale_locale__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z.getString('linkedin'),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_components_IconButton_IconButton__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
            disabled: linkedinHandle.length === 0,
            onClick: onClickLinkedIn,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
              accent: linkedinHandle.length === 0 ? 'inherit' : 'default',
              isOutline: true,
              name: "linkedin",
              variant: "inline"
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_ToolbarButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
          tooltip: _services_locale_locale__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z.getString('twitter'),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_components_IconButton_IconButton__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
            disabled: twitterHandle.length === 0,
            onClick: onClickTwitter,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
              accent: twitterHandle.length === 0 ? 'inherit' : 'default',
              isOutline: true,
              name: "twitter",
              variant: "inline"
            })
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("div", {
        className: "jsx-2255930311" + " " + "divider"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_presentation_ClickableCountRow__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
        count: relatedContactLinks.length + relatedOrgLinks.length,
        label: _services_locale_locale__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z.getString('summary_related_contacts'),
        onClick: onClickRelatedContacts,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_19__/* .Column */ .sg, {
          alignment: "end",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
            name: "keyboard_arrow_right",
            accent: "muted",
            variant: "inline",
            size: "s"
          })
        })
      }), isOnPreviewRoute && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.Fragment, {
        children: [orgExtraInfo && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_presentation_ClickableCountRow__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
          count: orgExtraInfo.boxIds.length,
          label: _services_locale_locale__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z.getString('boxes_count_capitalize', {
            count: orgExtraInfo.boxIds.length
          }),
          onClick: onBoxesClick,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_19__/* .Column */ .sg, {
            alignment: "end",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
              name: "keyboard_arrow_right",
              accent: "muted",
              variant: "inline",
              size: "s"
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_ThreadsWithTeam__WEBPACK_IMPORTED_MODULE_20__/* .ThreadsWithTeam */ .U, {
          entity: {
            type: 'org',
            key: org?.key || undefined,
            domain: domains[0]
          },
          onGoToEntity: linkHandler
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("div", {
        style: {
          marginBottom: '8px'
        },
        className: "jsx-2255930311"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("div", {
        className: "jsx-2255930311" + " " + "divider"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("div", {
        className: "jsx-2255930311" + " " + "contact_details",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_containers_OrgDetailsSection__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
          orgId: orgId,
          track: track
        })
      }), shouldShowTeamPicker && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_teamContactView_TeamPicker__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_containers_Enrichment__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        id: orgId,
        type: "ORG"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "2255930311",
      children: [".streak__sidebar_org.jsx-2255930311{padding-top:28px;}", ".org_avatar.jsx-2255930311{left:114px;position:absolute;top:34px;cursor:default;background:var(--streak-solid-white);box-shadow:0 1px 2px var(--streak-black-divider);border-radius:16%;opacity:1;-webkit-transition:opacity 0.5s linear;transition:opacity 0.5s linear;}", ".org_avatar.isLink.jsx-2255930311{cursor:pointer;}", ".org_name.jsx-2255930311{font-family:Product Sans;font-size:20px;line-height:24px;text-align:center;color:var(--streak-black-primary);}", ".org_name.isLink.jsx-2255930311:hover{cursor:pointer;-webkit-text-decoration:underline;text-decoration:underline;}", ".org_toolbar_buttons.jsx-2255930311{margin:16px auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;justify-items:center;}", ".org_related.jsx-2255930311{margin-bottom:8px;}", ".divider.jsx-2255930311{height:1px;background:var(--streak-black-divider);margin-bottom:8px;}", ".streak__sidebar_add_contact.jsx-2255930311{position:absolute;bottom:0;width:100%;left:0;background:var(--streak-solid-white);box-shadow: 0px 2px 4px var(--streak-black-shadow), 0px 1px 10px var(--streak-black-divider), 0px 4px 5px var(--streak-black-divider);}"]
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 13862:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ PlacePickerArray)
});

// EXTERNAL MODULE: ./.yarn/__virtual__/styled-jsx-virtual-9c4bfc1357/0/cache/styled-jsx-npm-5.0.2-aff4f13ebf-96b4507d41.zip/node_modules/styled-jsx/style.js
var style = __webpack_require__(81518);
var style_default = /*#__PURE__*/__webpack_require__.n(style);
// EXTERNAL MODULE: ./.yarn/cache/react-npm-18.3.1-af38f3c1ae-261137d3f3.zip/node_modules/react/index.js
var react = __webpack_require__(44345);
// EXTERNAL MODULE: ./.yarn/cache/react-save-refs-npm-1.2.0-c9de25c6f4-af28ec5f20.zip/node_modules/react-save-refs/js/index.js
var js = __webpack_require__(27336);
var js_default = /*#__PURE__*/__webpack_require__.n(js);
// EXTERNAL MODULE: ./.yarn/cache/immutability-helper-npm-3.0.2-17b093bde1-252b7586a9.zip/node_modules/immutability-helper/index.js
var immutability_helper = __webpack_require__(76430);
var immutability_helper_default = /*#__PURE__*/__webpack_require__.n(immutability_helper);
// EXTERNAL MODULE: ./.yarn/cache/classnames-npm-2.5.1-c7273f3423-58eb394e88.zip/node_modules/classnames/index.js
var classnames = __webpack_require__(47587);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./.yarn/cache/kefir-npm-3.8.8-0d392dece2-6a40a9065f.zip/node_modules/kefir/dist/kefir.esm.js
var kefir_esm = __webpack_require__(98137);
// EXTERNAL MODULE: ./.yarn/__virtual__/kefir-bus-virtual-3dd4e0d63d/0/cache/kefir-bus-npm-2.3.1-7bffc4b426-b3389d503d.zip/node_modules/kefir-bus/index.js
var kefir_bus = __webpack_require__(67459);
var kefir_bus_default = /*#__PURE__*/__webpack_require__.n(kefir_bus);
// EXTERNAL MODULE: ./.yarn/cache/lodash-npm-4.17.21-6382451519-c08619c038.zip/node_modules/lodash/lodash.js
var lodash = __webpack_require__(17013);
// EXTERNAL MODULE: ./.yarn/cache/react-npm-18.3.1-af38f3c1ae-261137d3f3.zip/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(59718);
;// CONCATENATED MODULE: ./extensions/common/js/modules/streakSidebar/contactAndOrg/components/PlacePickerItem.tsx



function PlacePickerItem(props) {
  const {
    value: {
      matched_substrings: matchedSubstrings,
      description
    }
  } = props;
  let previousOffsetEnd = 0;
  const parts = (0,lodash.flatMap)(matchedSubstrings, (_ref, i) => {
    let {
      offset,
      length
    } = _ref;
    const unmatchedText = description.substring(previousOffsetEnd, offset);
    const matchedText = description.substring(offset, offset + length);
    previousOffsetEnd = offset + length;
    return [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
      children: unmatchedText
    }, i + 's'), /*#__PURE__*/(0,jsx_runtime.jsx)("b", {
      children: matchedText
    }, i + 'b')];
  });
  const last = /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
    children: description.substring(previousOffsetEnd)
  });
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
    children: [parts, last]
  });
}
// EXTERNAL MODULE: ./extensions/common/js/lib/log-error.ts
var log_error = __webpack_require__(7961);
// EXTERNAL MODULE: ./extensions/common/js/widgets/bridges/iframeBridge.ts
var iframeBridge = __webpack_require__(41809);
// EXTERNAL MODULE: ./extensions/common/js/widgets/react/material/textField/textFieldAndDropdown.tsx
var textFieldAndDropdown = __webpack_require__(16446);
// EXTERNAL MODULE: ./extensions/common/js/widgets/react/material/menu/autocompleteDropdown.tsx
var autocompleteDropdown = __webpack_require__(96810);
;// CONCATENATED MODULE: ./extensions/common/js/modules/streakSidebar/contactAndOrg/components/PlacePicker.tsx











class PlacePicker extends react.Component {
  _mapsAutocompleteIframe = null;
  textFieldRef = (() => /*#__PURE__*/react.createRef())();
  containerRef = (() => /*#__PURE__*/react.createRef())();
  state = {
    items: [],
    isRequestPending: false,
    isEditing: false
  };
  _queryBus = (() => kefir_bus_default()())();
  _dropdown = _ref => {
    let {
      reposition
    } = _ref;
    return /*#__PURE__*/(0,jsx_runtime.jsx)(autocompleteDropdown/* default */.Z, {
      maxWidth: 510,
      query: this.props.value,
      reposition: reposition,
      lists: [{
        list: this.state.items
      }],
      keyPropertyName: "place_id",
      Component: PlacePickerItem,
      onItemChosen: item => this._handlePlaceSelected(item)
    });
  };
  render() {
    const {
      isEditing
    } = this.state;
    return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      ref: this.containerRef,
      tabIndex: 0,
      onFocus: e => {
        if (e.target !== this.containerRef.current) {
          return;
        }
        this.setState({
          isEditing: true
        }, () => {
          this.textFieldRef.current?.focus();
        });
      },
      onBlur: () => {
        this.textFieldRef.current?.blur();
      },
      className: "jsx-3897500322" + " " + "place-picker-wrapper",
      children: [isEditing ? /*#__PURE__*/(0,jsx_runtime.jsx)(textFieldAndDropdown/* default */.Z, {
        ref: this.textFieldRef,
        ...this.props,
        onValueChange: query => {
          this._queryBus.emit(query);
          if (this.props.onValueChange) {
            this.props.onValueChange(query);
          }
        },
        onBlur: () => {
          this.setState({
            isEditing: false
          });
        },
        InputComponent: this.props.InputComponent,
        className: classnames_default()('streak__placePicker', this.props.className),
        isRequestPending: this.state.isRequestPending,
        dropdown: this.state.items.length > 0 ? this._dropdown : () => null
      }) : /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "jsx-3897500322" + " " + "place-picker-display",
        children: this.props.value === '' ? /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          style: {
            color: 'var(--gmail-input-placeholder)'
          },
          className: "jsx-3897500322",
          children: "\u2014"
        }) : /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
          href: `https://www.google.com/maps/place/${encodeURIComponent(this.props.value)}`,
          target: "_blank",
          tabIndex: -1,
          className: "jsx-3897500322",
          children: this.props.value
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)((style_default()), {
        id: "3897500322",
        children: [".place-picker-wrapper.jsx-3897500322{width:100%;border-radius:4px;border-style:none;box-sizing:border-box;min-height:32px;outline:none;cursor:text;}", ".place-picker-display.jsx-3897500322{margin:10px 8px 8px;}", ".place-picker-display.jsx-3897500322 a.jsx-3897500322:focus,.place-picker-display.jsx-3897500322 a.jsx-3897500322:active{outline:0;cursor:pointer;color:-webkit-link;}"]
      })]
    });
  }
  focus() {
    this.containerRef.current.focus();
  }
  blur() {
    this.containerRef.current.blur();
  }
  hasFocus() {
    return !!this.textFieldRef.current?.hasFocus();
  }
  selectAll() {
    this.textFieldRef.current?.selectAll();
  }
  componentDidMount() {
    this._mapsAutocompleteIframe = new iframeBridge["default"]({
      iframeSrc: __webpack_require__.g.Streak.server + '/mapsAutocompleteHelper/mapsAutocomplete.html',
      cssClass: 'streak__mapsAutocomplete_helper streak__hide'
    });
    this._mapsAutocompleteIframe.addToPageAsHidden();
    const stopper = this._queryBus.filter(() => false).beforeEnd(() => null);
    this._queryBus.flatMapLatest(query => {
      if (query.length === 0) {
        this.setState({
          items: [],
          isRequestPending: false
        });
        return kefir_esm["default"].never();
      } else {
        const queryKey = query + Date.now();
        this._mapsAutocompleteIframe.postMessage({
          type: 'getQueryPredictions',
          query,
          queryKey
        });
        this.setState({
          items: [],
          isRequestPending: true
        });
        return this._mapsAutocompleteIframe.getEventStream().takeUntilBy(stopper).filter(message => {
          if (message.queryKey !== queryKey) return false;
          if (message.type === 'error') {
            const {
              originalMessageType,
              errorMessage
            } = message;
            const autoCompleteError = new Error('Error loading Places autocomplete predictions');
            (0,log_error/* default */.ZP)({
              err: autoCompleteError,
              message: errorMessage,
              level: 'error',
              details: {
                originalMessageType
              }
            });
            this.setState({
              isRequestPending: false
            });
            return false;
          }
          return true;
        }).take(1).map(_ref2 => {
          let {
            predictions
          } = _ref2;
          return predictions || [];
        });
      }
    }).onValue(placePredictions => {
      this.setState({
        isRequestPending: false,
        items: placePredictions
      });
    });
  }
  componentWillUnmount() {
    this._queryBus.end();
    if (this._mapsAutocompleteIframe) {
      this._mapsAutocompleteIframe.destroy();
    }
  }
  _handlePlaceSelected(item) {
    if (this.props.onValueChange) this.props.onValueChange(item.description);
    this.textFieldRef.current.hideDropdown();
  }
}
// EXTERNAL MODULE: ./extensions/common/js/components/IconButton/IconButton.tsx
var IconButton = __webpack_require__(94366);
// EXTERNAL MODULE: ./extensions/common/js/components/Icon/Icon.tsx + 1 modules
var Icon = __webpack_require__(71174);
// EXTERNAL MODULE: ./extensions/common/js/modules/streakSidebar/presentation/raisedMultilineTextfield.tsx
var raisedMultilineTextfield = __webpack_require__(83369);
;// CONCATENATED MODULE: ./extensions/common/js/modules/streakSidebar/contactAndOrg/components/PlacePickerArray.tsx









class PlacePickerArray extends react.Component {
  _inputRefs = (() => new Map())();
  _addButton = () => {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(IconButton/* default */.Z, {
      hoverIcon: () => /*#__PURE__*/(0,jsx_runtime.jsx)(Icon/* default */.Z, {
        name: "add",
        size: "s",
        isOutline: true,
        variant: "text",
        accent: "default"
      }),
      onClick: () => {
        this._addEntry();
      },
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Icon/* default */.Z, {
        name: "add",
        size: "s",
        isOutline: true,
        variant: "text",
        accent: "muted"
      })
    });
  };
  _addEntry() {
    const lastValueIndex = this.props.value.length - 1;
    this.setState({
      minimumRowCount: this.props.value.length + 1
    }, () => {
      /* focus last input here */
      const inputRef = this._inputRefs.get(lastValueIndex + 1);
      if (inputRef) {
        inputRef.focus();
      }
    });
  }
  focus(index) {
    const input = this._inputRefs.get(index);
    if (input) {
      input.focus();
    }
  }
  constructor(props) {
    super(props);
    this.state = {
      minimumRowCount: null
    };
  }
  componentDidUpdate(prevProps) {
    if (prevProps.value !== this.props.value) {
      this.setState({
        minimumRowCount: null
      });
    }
  }
  render() {
    const {
      value,
      disabled,
      onCancel,
      onCommit,
      placeholder,
      onValueChange
    } = this.props;
    const {
      minimumRowCount
    } = this.state;
    let valuesToRender = value;
    if (minimumRowCount != null && minimumRowCount > value.length) {
      valuesToRender = value.concat(new Array(minimumRowCount - value.length).fill(''));
    }
    return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      ref: this.props.domRef,
      className: "jsx-159462498",
      children: [valuesToRender.map((valueToRender, index) => {
        return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "jsx-159462498" + " " + "placePickerSection",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(PlacePicker, {
            ref: js_default()(this._inputRefs, index),
            disabled: disabled,
            onCommit: onCommit,
            onCancel: onCancel,
            value: valueToRender,
            placeholder: placeholder,
            InputComponent: raisedMultilineTextfield/* default */.Z,
            onValueChange: newValue => onValueChange(immutability_helper_default()(value, {
              [index]: {
                $set: newValue
              }
            }))
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "jsx-159462498" + " " + "suffix",
            children: index === valuesToRender.length - 1 && valueToRender !== '' && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: "jsx-159462498" + " " + "add-button",
              children: this._addButton()
            })
          })]
        }, index);
      }), /*#__PURE__*/(0,jsx_runtime.jsx)((style_default()), {
        id: "159462498",
        children: [".placePickerSection.jsx-159462498{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;border-radius:4px;border-style:none;box-sizing:border-box;outline:none;}", ".suffix.jsx-159462498{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:absolute;right:6px;bottom:6px;}", ".add-button.jsx-159462498{display:none;}", ".placePickerSection.jsx-159462498:hover{background-color:var(--streak-black-hover);}", ".placePickerSection.jsx-159462498:hover .add-button.jsx-159462498{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}"]
      })]
    });
  }
}

/***/ }),

/***/ 36576:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ RelatedContactSelectDropdown)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17013);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Select_wrappers_InternalContactSelectDropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70408);
/* harmony import */ var _teamContacts_teamContactSearcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64459);
/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3572);
/* harmony import */ var _teamContacts_teamOrgSearcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17158);
/* harmony import */ var _lib_utils_string_isValidEmail__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1760);
/* harmony import */ var _lib_utils_string_isValidDomain__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6986);
/* harmony import */ var _teamContacts_clearbitSearch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45421);
/* harmony import */ var _redux_selectors_contactAndOrgSelectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(18073);
/* harmony import */ var _redux_selectors_teamSelectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(71973);
/* harmony import */ var _core_emailBlackList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(31813);
/* harmony import */ var _team__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(64936);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_teamContacts_teamContactSearcher__WEBPACK_IMPORTED_MODULE_2__, _teamContacts_teamOrgSearcher__WEBPACK_IMPORTED_MODULE_3__, _teamContacts_clearbitSearch__WEBPACK_IMPORTED_MODULE_5__, _redux_selectors_teamSelectors__WEBPACK_IMPORTED_MODULE_7__, _team__WEBPACK_IMPORTED_MODULE_9__]);
([_teamContacts_teamContactSearcher__WEBPACK_IMPORTED_MODULE_2__, _teamContacts_teamOrgSearcher__WEBPACK_IMPORTED_MODULE_3__, _teamContacts_clearbitSearch__WEBPACK_IMPORTED_MODULE_5__, _redux_selectors_teamSelectors__WEBPACK_IMPORTED_MODULE_7__, _team__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const LIMIT = 8;
function RelatedContactSelectDropdown(_ref) {
  let {
    contactId,
    newValueType,
    orgId,
    prependNewOrg = false,
    searchContacts = true,
    searchOrgs = true,
    isClearable = false,
    track,
    ...props
  } = _ref;
  const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_11__/* .useDispatch */ .I0)();
  const linkTargetContact = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_11__/* .useSelector */ .v9)(state => (0,_redux_selectors_contactAndOrgSelectors__WEBPACK_IMPORTED_MODULE_6__/* .getContactById */ .cX)(state, contactId));
  const linkTargetOrg = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_11__/* .useSelector */ .v9)(state => (0,_redux_selectors_contactAndOrgSelectors__WEBPACK_IMPORTED_MODULE_6__/* .getOrgById */ .h$)(state, orgId));
  const teams = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_11__/* .useSelector */ .v9)(state => (0,_redux_selectors_teamSelectors__WEBPACK_IMPORTED_MODULE_7__/* .getTeamsCurrentUserIsOn */ .gR)(state));
  const {
    isInternalEmail,
    isInternalDomain
  } = (0,_team__WEBPACK_IMPORTED_MODULE_9__/* .getInternalEmailPredicate */ .WD)(teams);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_Select_wrappers_InternalContactSelectDropdown__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    ...props,
    autoFocus: true,
    defaultMenuIsOpen: true,
    value: props.defaultValue,
    isClearable: isClearable,
    menuPosition: "fixed",
    loadOptions: inputValue => {
      const contactPromise = searchContacts ? _teamContacts_teamContactSearcher__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.fuzzySearch(inputValue).then(res => {
        const contactResults = res.filter(_ref2 => {
          let {
            teamContact
          } = _ref2;
          return !teamContact.getEmailAddresses().some(email => isInternalEmail(email));
        }).map(_ref3 => {
          let {
            teamContact
          } = _ref3;
          // TODO: Accomplish this without using old-world models
          const option = {
            displayName: teamContact.displayNameText(),
            isAutoboxed: false,
            shouldShowAutoboxOption: false,
            imageUrl: null,
            label: teamContact.displayNameText(),
            secondaryName: teamContact.getEmailAddresses().length > 0 ? teamContact.getEmailAddresses()[0] : undefined,
            value: teamContact.key(),
            type: 'CONTACT'
          };
          return option;
        });
        return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.uniqBy)(contactResults, ['value', 'secondaryName']).slice(0, LIMIT);
      }) : Promise.resolve([]);
      const orgPromise = searchOrgs ? _teamContacts_teamOrgSearcher__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.search(inputValue).then(res => {
        const orgResults = res.filter(_ref4 => {
          let {
            teamOrg
          } = _ref4;
          return !teamOrg.getDomains().some(domain => isInternalDomain(domain) || (0,_core_emailBlackList__WEBPACK_IMPORTED_MODULE_8__/* .isDomainBlacklisted */ .Dw)(domain));
        }).map(_ref5 => {
          let {
            teamOrg
          } = _ref5;
          // TODO: Accomplish this without using old-world models
          const option = {
            displayName: teamOrg.displayNameText(),
            secondaryName: teamOrg.getDomains().length > 0 ? teamOrg.getDomains()[0] : undefined,
            isAutoboxed: false,
            shouldShowAutoboxOption: false,
            imageUrl: teamOrg.getDomains().length > 0 ? `https://logo.clearbit.com/${teamOrg.getDomains()[0]}` : null,
            label: teamOrg.displayNameText(),
            value: teamOrg.key(),
            type: 'ORG'
          };
          return option;
        });
        return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.uniqBy)(orgResults, ['value', 'secondaryName']).slice(0, LIMIT);
      }) : Promise.resolve([]);
      const orgClearbitSearchPromise = searchOrgs ? (0,_teamContacts_clearbitSearch__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(inputValue) : Promise.resolve([]);
      return Promise.all([contactPromise, orgPromise, orgClearbitSearchPromise]).then(_ref6 => {
        let [contacts, orgs, clearbitResults] = _ref6;
        const orgClearbitResults = clearbitResults.map(result => ({
          displayName: result.name,
          isAutoboxed: false,
          shouldShowAutoboxOption: false,
          secondaryName: result.domain,
          imageUrl: result.logo || null,
          label: result.name,
          value: 'new-input-org',
          isNew: false,
          type: 'ORG'
        }));
        let results = contacts.concat(orgs, orgClearbitResults);
        if ((!(0,_lib_utils_string_isValidDomain__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(inputValue) || (0,_lib_utils_string_isValidEmail__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(inputValue)) && !contacts.some(contact => contact.secondaryName && contact.secondaryName.toLowerCase().includes(inputValue.toLowerCase()) || contact.displayName && contact.displayName.toLowerCase().includes(inputValue.toLowerCase()))) {
          results = results.concat([{
            displayName: inputValue,
            isAutoboxed: false,
            secondaryName: undefined,
            shouldShowAutoboxOption: false,
            imageUrl: null,
            label: inputValue,
            value: newValueType === 'CONTACT' ? 'new-input-contact' : 'new-input-org',
            isNew: true,
            type: newValueType
          }]);
        }
        if (!(0,_lib_utils_string_isValidEmail__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(inputValue) && !orgs.some(org => org.secondaryName && org.secondaryName.toLowerCase().includes(inputValue.toLowerCase()) || org.displayName && org.displayName.toLowerCase().includes(inputValue.toLowerCase())) && !orgClearbitResults.some(result => result.secondaryName && result.secondaryName.toLowerCase().includes(inputValue.toLowerCase()) || result.displayName && result.displayName.toLowerCase().includes(inputValue.toLowerCase()))) {
          results = results.concat([{
            displayName: inputValue,
            isAutoboxed: false,
            secondaryName: undefined,
            shouldShowAutoboxOption: false,
            imageUrl: null,
            label: inputValue,
            value: 'new-input-org',
            isNew: true,
            type: 'ORG'
          }]);
        }
        return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.uniqBy)(results, 'secondaryName');
      });
    },
    noOptionsMessage: () => null,
    isMulti: false,
    onRemove: option => {
      if (linkTargetContact) {
        if (option.type === 'ORG') {
          dispatch({
            type: 'ORG/UNLINK/CONTACT',
            removeOrgKey: option.value,
            fromContactKey: linkTargetContact.key
          });
          track('contactLinkRemoved', {
            sourceType: 'org',
            destinationType: 'contact'
          });
          props.onBlur?.();
        }
      }
    },
    onChange: newValue => {
      const newOption = newValue;
      if (linkTargetContact) {
        if (newOption.type === 'CONTACT') {
          dispatch({
            type: 'CONTACT/LINK/CONTACT',
            fromContactKey: newOption.value === 'new-input-contact' ? newOption.displayName || '' : newOption.value,
            toContactKey: linkTargetContact.key
          });
          track('contactLinkCreated', {
            sourceType: 'contact',
            destinationType: 'contact'
          });
        } else {
          dispatch({
            type: 'ORG/LINK/CONTACT',
            fromOrgKey: newOption.value === 'new-input-org' ? (0,_lib_utils_string_isValidDomain__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(newOption.secondaryName) ? newOption.secondaryName : newOption.displayName || '' : newOption.value,
            prepend: prependNewOrg,
            toContactKey: linkTargetContact.key
          });
          track('contactLinkCreated', {
            sourceType: 'org',
            destinationType: 'contact'
          });
        }
      } else {
        if (newOption.type === 'CONTACT') {
          dispatch({
            type: 'CONTACT/LINK/ORG',
            fromContactKey: newOption.value === 'new-input-contact' ? newOption.displayName || '' : newOption.value,
            toOrgKey: linkTargetOrg.key
          });
          track('orgLinkCreated', {
            sourceType: 'contact',
            destinationType: 'contact'
          });
        } else {
          dispatch({
            type: 'ORG/LINK/ORG',
            fromOrgKey: newOption.value === 'new-input-org' ? (0,_lib_utils_string_isValidDomain__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(newOption.secondaryName) ? newOption.secondaryName : newOption.displayName || '' : newOption.value,
            toOrgKey: linkTargetOrg.key
          });
          track('orgLinkCreated', {
            sourceType: 'org',
            destinationType: 'contact'
          });
        }
      }
    },
    suggestions: undefined,
    onSuggestionChange: () => {},
    onSuggestionClear: () => {},
    isValidNewOption: () => false
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2094:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ RelatedContactZeroState)
/* harmony export */ });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81518);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35091);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59718);



function RelatedContactZeroState() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "jsx-1565973105" + " " + "streak__sidebar_related_contact_zero_state",
    children: [_services_locale_locale__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.getString('no_related_contacts'), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "1565973105",
      children: [".streak__sidebar_related_contact_zero_state.jsx-1565973105{color:var(--streak-solid-black-secondary);min-height:calc(100vh - 185px);font-size:14px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;line-height:20px;text-align:center;}"]
    })]
  });
}

/***/ }),

/***/ 6561:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ RelatedContacts)
/* harmony export */ });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81518);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17013);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44345);
/* harmony import */ var _RelatedContactZeroState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2094);
/* harmony import */ var _components_ContactCard_ContactCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(93086);
/* harmony import */ var _components_OrgCard_OrgCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(62680);
/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3572);
/* harmony import */ var _redux_models_modelHooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(64076);
/* harmony import */ var _redux_selectors_getContactDisplayName__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(93532);
/* harmony import */ var _redux_selectors_getOrgDisplayName__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(21290);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(35091);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ContactCard_ContactCard__WEBPACK_IMPORTED_MODULE_4__]);
_components_ContactCard_ContactCard__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];













const CARDS_PER_PAGE = 20;
const LOAD_MORE_THRESHOLD = 200; // pixels from bottom before increasing the number of visible cards

function RelatedContacts(_ref) {
  let {
    contactId,
    getScrollContainer,
    orgId,
    relatedContactLinks,
    relatedOrgLinks,
    track
  } = _ref;
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  (0,_redux_models_modelHooks__WEBPACK_IMPORTED_MODULE_6__/* .useContact */ .AW)(contactId ? {
    id: contactId
  } : null);
  (0,_redux_models_modelHooks__WEBPACK_IMPORTED_MODULE_6__/* .useOrg */ .s9)(orgId ? {
    id: orgId
  } : null);
  const contactDisplayName = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_9__/* .useSelector */ .v9)(state => contactId && (0,_redux_selectors_getContactDisplayName__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(state, {
    id: contactId
  }));
  const orgDisplayName = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_9__/* .useSelector */ .v9)(state => orgId && (0,_redux_selectors_getOrgDisplayName__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)(state, {
    id: orgId
  }));
  const displayName = contactDisplayName || orgDisplayName || '';
  const [maxVisibleCardCount, setMaxVisibleCardCount] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(CARDS_PER_PAGE);
  const itemCount = relatedContactLinks.length + relatedOrgLinks.length;
  const visibleCardCount = Math.min(maxVisibleCardCount, itemCount);
  const isShowingAll = visibleCardCount === itemCount;

  // Implement infinite scroll, only loading a page of contacts / orgs at a time.
  const handleScroll = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(event => {
    if (isShowingAll) {
      return;
    }
    const {
      clientHeight,
      scrollHeight,
      scrollTop
    } = event.target;
    const isNearBottom = scrollTop + clientHeight > scrollHeight - LOAD_MORE_THRESHOLD;
    if (isNearBottom) {
      setMaxVisibleCardCount(maxVisibleCardCount => maxVisibleCardCount + CARDS_PER_PAGE);
    }
  }, [isShowingAll]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    const scrollContainer = getScrollContainer();
    scrollContainer?.addEventListener('scroll', handleScroll);
    return () => scrollContainer?.removeEventListener('scroll', handleScroll);
  }, [getScrollContainer, handleScroll]);
  const _track = (eventName, extraProps) => track(`relatedContacts.${eventName}`, {
    ...extraProps,
    contactId,
    orgId
  });
  const sortedContactLinks = Array.from(relatedContactLinks).sort(creationTimestampComparator);
  const sortedOrgLinks = Array.from(relatedOrgLinks).sort(creationTimestampComparator);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
    ref: ref,
    className: "jsx-473745134" + " " + "streak__sidebar_related_contacts",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
      className: "jsx-473745134" + " " + "contact_name",
      children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.getString('related_to_displayName', {
        displayName
      })
    }), itemCount === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_RelatedContactZeroState__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
      className: "jsx-473745134" + " " + "related_contacts_list_wrapper",
      children: (0,lodash__WEBPACK_IMPORTED_MODULE_1__.range)(visibleCardCount).map(index => {
        let card;
        let keyOrId;
        if (index < sortedOrgLinks.length) {
          const org = sortedOrgLinks[index];
          ({
            keyOrId
          } = org || {});
          card = keyOrId && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_OrgCard_OrgCard__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            context: {
              contactId,
              orgId
            },
            hasHoverEffect: true,
            orgKeyOrId: keyOrId,
            track: _track
          });
        } else {
          const contact = sortedContactLinks[index - sortedOrgLinks.length];
          ({
            keyOrId
          } = contact || {});
          card = keyOrId && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_ContactCard_ContactCard__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            contactKeyOrId: keyOrId,
            context: {
              contactId,
              orgId
            },
            hasHoverEffect: true,
            track: _track
          });
        }
        return card && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
          className: "jsx-473745134" + " " + "card-wrapper",
          children: card
        }, JSON.stringify(keyOrId));
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "473745134",
      children: [".streak__sidebar_related_contacts.jsx-473745134 .contact_name.jsx-473745134{text-align:center;margin-bottom:12px;}", ".card-wrapper.jsx-473745134{margin-bottom:16px;}", ".related_contacts_list_wrapper.jsx-473745134:last-child{margin-bottom:64px;}"]
    })]
  });
}
function creationTimestampComparator(linkA, linkB) {
  if (linkA.creationTimestamp == null) {
    return 1;
  }
  if (linkB.creationTimestamp == null) {
    return -1;
  }
  return linkA.creationTimestamp - linkB.creationTimestamp;
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 34077:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ ThreadsWithTeam)
/* harmony export */ });
/* harmony import */ var _components_LoadingBar_LoadingBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94246);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35091);
/* harmony import */ var _services_threads__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48379);
/* harmony import */ var _presentation_ClickableCountRow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71725);
/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54165);
/* harmony import */ var _components_Icon_Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71174);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_threads__WEBPACK_IMPORTED_MODULE_2__]);
_services_threads__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







function ThreadsWithTeam(props) {
  const {
    entity,
    onGoToEntity
  } = props;
  const {
    isError,
    isLoading,
    data
  } = (0,_services_threads__WEBPACK_IMPORTED_MODULE_2__/* .useTeamThreadsSummaryFullForSingleEntity */ .qv)(entity);
  if (isError || !data) {
    return null;
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [isLoading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      style: {
        alignItems: 'center',
        display: 'flex',
        height: '32px'
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_LoadingBar_LoadingBar__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
        height: 8,
        margin: "8px auto"
      })
    }), data && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_presentation_ClickableCountRow__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
      count: data.numOfTotalThreads,
      label: _services_locale_locale__WEBPACK_IMPORTED_MODULE_1__.Locale.getString('threads_with_team', {
        count: data.numOfTotalThreads
      }),
      onClick: onGoToEntity,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_4__/* .Column */ .sg, {
        alignment: "end",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
          name: "open_in_new",
          accent: "muted",
          variant: "inline",
          size: "s"
        })
      })
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 72349:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ContactAndOrgContainer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44345);
/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3572);
/* harmony import */ var _ContactContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5046);
/* harmony import */ var _OrgContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11994);
/* harmony import */ var _widgets_react_loadingSpinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(72905);
/* harmony import */ var _lib_utils_string_isValidEmail__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1760);
/* harmony import */ var _redux_models_contacts_useContactLookupByEmail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(670);
/* harmony import */ var _redux_models_contacts_useOrgLookupByDomain__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(54510);
/* harmony import */ var _redux_models_modelHooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(64076);
/* harmony import */ var _lib_utils_string_isValidDomain__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6986);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ContactContainer__WEBPACK_IMPORTED_MODULE_1__, _OrgContainer__WEBPACK_IMPORTED_MODULE_2__, _redux_models_contacts_useContactLookupByEmail__WEBPACK_IMPORTED_MODULE_4__, _redux_models_contacts_useOrgLookupByDomain__WEBPACK_IMPORTED_MODULE_5__]);
([_ContactContainer__WEBPACK_IMPORTED_MODULE_1__, _OrgContainer__WEBPACK_IMPORTED_MODULE_2__, _redux_models_contacts_useContactLookupByEmail__WEBPACK_IMPORTED_MODULE_4__, _redux_models_contacts_useOrgLookupByDomain__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











function ContactAndOrgContainer(_ref) {
  let {
    contactOrOrgContainerRef,
    getScrollContainer,
    track
  } = _ref;
  const cards = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_9__/* .useSelector */ .v9)(state => state.sidebarState.activeCardOverrides);
  const card = cards[cards.length - 1];
  let boxIdFromCard;
  if (card && ['CONTACT_AND_ORG'].includes(card.type)) {
    boxIdFromCard = card.boxId;
  }
  const contactIdFromCard = card && ['RELATED_CONTACTS', 'CONTACT_AND_ORG'].includes(card.type) && card.contactId;
  const orgIdFromCard = card && ['RELATED_CONTACTS', 'CONTACT_AND_ORG'].includes(card.type) && card.orgId;
  const isOnContactView = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_9__/* .useSelector */ .v9)(state => {
    return state.routeState && state.routeState.id === 'streak/contact/:key';
  });
  const isOnOrgView = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_9__/* .useSelector */ .v9)(state => {
    return state.routeState?.id === 'streak/organization/:key';
  });
  const contactKey = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_9__/* .useSelector */ .v9)(state => {
    if (!isOnContactView) {
      return undefined;
    }
    return state.routeState.params['key'];
  });
  const orgKey = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_9__/* .useSelector */ .v9)(state => {
    if (!isOnOrgView) {
      return undefined;
    }
    return state.routeState.params['key'];
  });
  const teamKey = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_9__/* .useSelector */ .v9)(state => {
    return state.ui.contactView.teamKey;
  });
  const contactFromCard = (0,_redux_models_modelHooks__WEBPACK_IMPORTED_MODULE_6__/* .useContact */ .AW)(contactIdFromCard ? {
    id: contactIdFromCard
  } : null).result;
  const contactIdsFromEmail = (0,_redux_models_contacts_useContactLookupByEmail__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(contactKey, teamKey);
  const contactFromEmail = (0,_redux_models_modelHooks__WEBPACK_IMPORTED_MODULE_6__/* .useContact */ .AW)(contactIdsFromEmail && contactIdsFromEmail.length > 0 ? {
    id: contactIdsFromEmail[0]
  } : null).result;
  const contactFromKey = (0,_redux_models_modelHooks__WEBPACK_IMPORTED_MODULE_6__/* .useContact */ .AW)(contactKey && !(0,_lib_utils_string_isValidEmail__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(contactKey) ? {
    key: contactKey
  } : null).result;
  const contact = contactFromEmail || contactFromKey || contactFromCard;
  const orgFromCard = (0,_redux_models_modelHooks__WEBPACK_IMPORTED_MODULE_6__/* .useOrg */ .s9)(orgIdFromCard ? {
    id: orgIdFromCard
  } : null).result;
  const orgIdsFromDomain = (0,_redux_models_contacts_useOrgLookupByDomain__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(orgKey, teamKey);
  const orgFromDomain = (0,_redux_models_modelHooks__WEBPACK_IMPORTED_MODULE_6__/* .useOrg */ .s9)(orgIdsFromDomain && orgIdsFromDomain.length > 0 ? {
    id: orgIdsFromDomain[0]
  } : null).result;
  const orgFromKey = (0,_redux_models_modelHooks__WEBPACK_IMPORTED_MODULE_6__/* .useOrg */ .s9)(orgKey && !(0,_lib_utils_string_isValidDomain__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(orgKey) ? {
    key: orgKey
  } : null).result;
  const org = orgFromDomain || orgFromKey || orgFromCard;
  if (contact) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_ContactContainer__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
      boxId: boxIdFromCard
      // Lift ref up another level, parent ref can be used as regular prop but it must have a different name
      // https://stackoverflow.com/questions/50621471/access-a-nested-grand-child-component-in-a-parent-component
      ,
      contactContainerRef: contactOrOrgContainerRef,
      contactKeyOrId: {
        id: contact.id
      },
      getScrollContainer: getScrollContainer,
      track: track
    });
  }
  if (org) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_OrgContainer__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      boxId: boxIdFromCard,
      getScrollContainer: getScrollContainer
      // Lift ref up another level, parent ref can be used as regular prop but it must have a different name
      // https://stackoverflow.com/questions/50621471/access-a-nested-grand-child-component-in-a-parent-component
      ,
      orgContainerRef: contactOrOrgContainerRef,
      orgKeyOrId: {
        id: org.id
      },
      track: track
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_widgets_react_loadingSpinner__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {});
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 31596:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ ContactCompanyPickerWrapper)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44345);
/* harmony import */ var _components_RelatedContactSelectDropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36576);
/* harmony import */ var _presentation_RaisedRichTextArea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56139);
/* harmony import */ var _components_ContactCard_getContactCompanyOrgKeyOrId__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98950);
/* harmony import */ var _components_LoadingBar_LoadingBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(94246);
/* harmony import */ var _redux_models_modelHooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(64076);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_RelatedContactSelectDropdown__WEBPACK_IMPORTED_MODULE_1__]);
_components_RelatedContactSelectDropdown__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







function ContactCompanyPickerWrapper(_ref) {
  let {
    contactId,
    isEditable,
    track
  } = _ref;
  const [isEditing, setIsEditing] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const orgKeyOrId = (0,_redux_models_modelHooks__WEBPACK_IMPORTED_MODULE_5__/* .useContact */ .AW)({
    id: contactId
  }, _components_ContactCard_getContactCompanyOrgKeyOrId__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z).result;
  const orgName = (0,_redux_models_modelHooks__WEBPACK_IMPORTED_MODULE_5__/* .useOrg */ .s9)(orgKeyOrId, relatedOrg => relatedOrg.name || relatedOrg.domains[0]).result || '';
  if (orgKeyOrId && !orgName) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_LoadingBar_LoadingBar__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
      height: 8,
      margin: "8px auto 8px 8px"
    });
  }
  let option = null;
  let defaultOptions = [];
  if (orgKeyOrId != null && 'key' in orgKeyOrId) {
    option = {
      displayName: orgName,
      label: orgName,
      type: 'ORG',
      isAutoboxed: false,
      shouldShowAutoboxOption: false,
      value: orgKeyOrId.key
    };
    defaultOptions = [option];
  }
  return isEditing ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_RelatedContactSelectDropdown__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    contactId: contactId,
    defaultOptions: defaultOptions,
    defaultValue: defaultOptions[0],
    isClearable: true,
    newValueType: "ORG",
    onBlur: () => setIsEditing(false),
    placeholder: "",
    prependNewOrg: true,
    searchContacts: false,
    searchOrgs: true,
    styles: {
      container: styles => ({
        ...styles,
        width: '100%'
      }),
      input: styles => ({
        ...styles,
        fontSize: 13,
        margin: 0
      }),
      menu: styles => ({
        ...styles,
        marginTop: 4,
        right: 0,
        width: '300px'
      }),
      placeholder: styles => ({
        ...styles,
        fontSize: 13,
        letterSpacing: 0,
        margin: 0
      })
    },
    track: track
  }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_presentation_RaisedRichTextArea__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    disabled: !isEditable,
    onCancel: () => {},
    onCommit: () => {},
    onFocus: () => setIsEditing(true),
    onValueChange: () => {},
    placeholder: "\u2014",
    value: orgName
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5046:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ ContactContainer)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17013);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44345);
/* harmony import */ var _components_ContactCard_getContactCompanyOrgKeyOrId__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98950);
/* harmony import */ var _components_Contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16181);
/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3572);
/* harmony import */ var _redux_models_modelHooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(64076);
/* harmony import */ var _redux_selectors_getEffectiveTopCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(89159);
/* harmony import */ var _widgets_react_loadingSpinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(72905);
/* harmony import */ var _streakyc_models_teamContactAndOrg_teamContactAndOrgCache__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(41675);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Contact__WEBPACK_IMPORTED_MODULE_3__, _streakyc_models_teamContactAndOrg_teamContactAndOrgCache__WEBPACK_IMPORTED_MODULE_7__]);
([_components_Contact__WEBPACK_IMPORTED_MODULE_3__, _streakyc_models_teamContactAndOrg_teamContactAndOrgCache__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










function ContactContainer(_ref) {
  let {
    boxId,
    contactContainerRef,
    contactKeyOrId,
    getScrollContainer,
    track
  } = _ref;
  const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_9__/* .useDispatch */ .I0)();
  const contactState = (0,_redux_models_modelHooks__WEBPACK_IMPORTED_MODULE_4__/* .useContact */ .AW)(contactKeyOrId).result;
  const contactKey = contactState?.key;
  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
    if (!contactKey) {
      return;
    }
    _streakyc_models_teamContactAndOrg_teamContactAndOrgCache__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.getCachedTeamContact(contactKey)?.refresh();
  }, [contactKey]);
  const {
    emailAddresses = [],
    id: contactId
  } = contactState || {};
  const personState = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_9__/* .useSelector */ .v9)(state => {
    let personId;
    if (contactId) {
      personId = state.modelMaps.personIdByContactId[contactId];
    }
    return personId ? state.models.people[personId] : null;
  });
  const {
    displayName,
    familyName,
    givenName
  } = personState || {};
  const name = displayName || givenName || familyName || emailAddresses[0] || '';
  const card = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_9__/* .useSelector */ .v9)(_redux_selectors_getEffectiveTopCard__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, lodash__WEBPACK_IMPORTED_MODULE_0__.isEqual);
  const orgKeyOrId = contactState ? (0,_components_ContactCard_getContactCompanyOrgKeyOrId__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(contactState) : null;
  const org = (0,_redux_models_modelHooks__WEBPACK_IMPORTED_MODULE_4__/* .useOrg */ .s9)(orgKeyOrId).result;
  const orgName = org && org.name || '';
  const orgImageUrl = org && org.imageUrl || undefined;
  if (!contactState || !personState) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_widgets_react_loadingSpinner__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {});
  }
  const _track = (eventName, extraProps) => track(`contact.${eventName}`, {
    ...extraProps,
    contactId
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_Contact__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    boxId: boxId
    // Lift ref up another level, parent ref can be used as regular prop but it must have a different name
    // https://stackoverflow.com/questions/50621471/access-a-nested-grand-child-component-in-a-parent-component
    ,
    contactId: contactState.id,
    domRef: contactContainerRef,
    emailAddresses: contactState.emailAddresses,
    fullName: personState.fullName,
    getScrollContainer: getScrollContainer,
    imageUrl: personState.imageUrl,
    name: name,
    onClickRelatedContacts: () => {
      dispatch({
        type: 'SIDEBAR/CARDS/PUSH',
        cards: [{
          type: 'RELATED_CONTACTS',
          contactId: contactState.id
        }]
      });
      _track('relatedContacts.click');
    },
    orgImageUrl: orgImageUrl,
    orgName: orgName,
    relatedContactLinks: contactState.relatedContactLinks,
    relatedOrgLinks: contactState.relatedOrgLinks,
    showRelatedContacts: card.type === 'RELATED_CONTACTS',
    title: contactState.title,
    track: _track
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 71718:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ ContactDetailsSection)
/* harmony export */ });
/* harmony import */ var _ContactFieldRow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67888);
/* harmony import */ var _redux_helpers_getContactFieldInputForType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15592);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ContactFieldRow__WEBPACK_IMPORTED_MODULE_0__, _redux_helpers_getContactFieldInputForType__WEBPACK_IMPORTED_MODULE_1__]);
([_ContactFieldRow__WEBPACK_IMPORTED_MODULE_0__, _redux_helpers_getContactFieldInputForType__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



function ContactDetailsSection(_ref) {
  let {
    contactId,
    track
  } = _ref;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: _redux_helpers_getContactFieldInputForType__WEBPACK_IMPORTED_MODULE_1__/* .ContactFields */ .Kg.map(field => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_ContactFieldRow__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
      contactId: contactId,
      fieldKey: field.fieldKey,
      fieldName: field.fieldName,
      fieldType: field.fieldType,
      isEditable: field.isEditable,
      labelName: field.labelName,
      track: track
    }, field.fieldKey))
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 67888:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ ContactFieldRow)
/* harmony export */ });
/* harmony import */ var _presentation_FieldRow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15501);
/* harmony import */ var _redux_helpers_getContactFieldInputForType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15592);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_redux_helpers_getContactFieldInputForType__WEBPACK_IMPORTED_MODULE_1__]);
_redux_helpers_getContactFieldInputForType__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function ContactFieldRow(_ref) {
  let {
    contactId,
    fieldKey,
    track,
    fieldName,
    labelName,
    isEditable,
    fieldType
  } = _ref;
  const input = (0,_redux_helpers_getContactFieldInputForType__WEBPACK_IMPORTED_MODULE_1__/* .getContactFieldInputForType */ .ES)(fieldType);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_presentation_FieldRow__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
    inputComponent: input({
      contactId,
      fieldKey,
      track,
      isEditable
    }),
    name: fieldName,
    labelName: labelName,
    columnType: fieldType,
    isEditable: true,
    fieldFlexBasic: "84px"
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 59368:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ ContactPlacePickerWrapper)
/* harmony export */ });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81518);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3572);
/* harmony import */ var _redux_selectors_contactAndOrgSelectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18073);
/* harmony import */ var _widgets_react_CommitHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99174);
/* harmony import */ var _presentation_RaisedRichTextAreaArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73785);
/* harmony import */ var _components_PlacePickerArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13862);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(59718);







function ContactPlacePickerWrapper(_ref) {
  let {
    contactId,
    fieldKey,
    isEditable,
    track
  } = _ref;
  const values = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useSelector */ .v9)(state => (0,_redux_selectors_contactAndOrgSelectors__WEBPACK_IMPORTED_MODULE_1__/* .getContactTextFieldValues */ .$_)(state, contactId, fieldKey));
  const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useDispatch */ .I0)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: "jsx-3561783110" + " " + "streak_input_wrapper",
    children: [!isEditable && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_presentation_RaisedRichTextAreaArray__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
      disabled: true,
      onCancel: () => {},
      onCommit: () => {},
      onValueChange: () => {},
      value: values,
      placeholder: "\u2014"
    }), isEditable && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_widgets_react_CommitHandler__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      input: props => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_PlacePickerArray__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        ...props,
        disabled: false,
        placeholder: "\u2014"
      }),
      value: values,
      onCommit: value => {
        track('contact.value.set', {
          fieldName: name,
          view: 'sidebar',
          fieldKey
        });
        dispatch({
          type: 'CONTACT/FIELD/SET',
          contactId,
          fieldKey,
          fieldValue: value.flatMap(v => v?.trim() || [])
        });
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "3561783110",
      children: [".streak_input_wrapper.jsx-3561783110{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-flex:1;-ms-flex:1;flex:1;min-width:0;}"]
    })]
  });
}

/***/ }),

/***/ 36518:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ ContactTextInputArrayWrapper)
/* harmony export */ });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81518);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3572);
/* harmony import */ var _redux_selectors_contactAndOrgSelectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18073);
/* harmony import */ var _widgets_react_CommitHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99174);
/* harmony import */ var _presentation_RaisedRichTextAreaArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73785);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(59718);






function ContactTextInputArrayWrapper(_ref) {
  let {
    contactId,
    fieldKey,
    isEditable,
    track
  } = _ref;
  const values = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_5__/* .useSelector */ .v9)(state => (0,_redux_selectors_contactAndOrgSelectors__WEBPACK_IMPORTED_MODULE_1__/* .getContactTextFieldValues */ .$_)(state, contactId, fieldKey));
  const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_5__/* .useDispatch */ .I0)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: "jsx-3561783110" + " " + "streak_input_wrapper",
    children: [!isEditable && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_presentation_RaisedRichTextAreaArray__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
      disabled: true,
      onCancel: () => {},
      onCommit: () => {},
      onValueChange: () => {},
      value: values,
      placeholder: "\u2014"
    }), isEditable && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_widgets_react_CommitHandler__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      input: props => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_presentation_RaisedRichTextAreaArray__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        ...props,
        disabled: false,
        placeholder: "\u2014"
      }),
      value: values,
      onCommit: value => {
        track('contact.value.set', {
          fieldName: name,
          view: 'sidebar',
          fieldKey
        });
        dispatch({
          type: 'CONTACT/FIELD/SET',
          contactId,
          fieldKey,
          fieldValue: value.flatMap(v => {
            const trimmed = v?.trim();
            if (!trimmed?.length) {
              return [];
            }
            return trimmed;
          })
        });
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "3561783110",
      children: [".streak_input_wrapper.jsx-3561783110{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-flex:1;-ms-flex:1;flex:1;min-width:0;}"]
    })]
  });
}

/***/ }),

/***/ 64687:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ ContactTextInputWrapper)
/* harmony export */ });
/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3572);
/* harmony import */ var _redux_selectors_contactAndOrgSelectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18073);
/* harmony import */ var _widgets_react_CommitHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99174);
/* harmony import */ var _presentation_RaisedRichTextArea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56139);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(59718);





function ContactTextInputWrapper(_ref) {
  let {
    contactId,
    fieldKey,
    isEditable,
    track
  } = _ref;
  const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useDispatch */ .I0)();
  const value = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useSelector */ .v9)(state => (0,_redux_selectors_contactAndOrgSelectors__WEBPACK_IMPORTED_MODULE_0__/* .getContactTextFieldValue */ .A)(state, contactId, fieldKey));
  if (!isEditable) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_presentation_RaisedRichTextArea__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      disabled: true,
      onCancel: () => {},
      onCommit: () => {},
      value: value,
      onValueChange: () => {},
      placeholder: "\u2014"
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_widgets_react_CommitHandler__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    value: value,
    input: props => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_presentation_RaisedRichTextArea__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      ...props,
      placeholder: "\u2014"
    }),
    onCommit: input => {
      track('contact.value.set', {
        fieldName: name,
        view: 'sidebar',
        fieldKey
      });
      dispatch({
        type: 'CONTACT/FIELD/SET',
        contactId,
        fieldKey,
        fieldValue: input
      });
    }
  });
}

/***/ }),

/***/ 70120:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Enrichment)
/* harmony export */ });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81518);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44345);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47587);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35091);
/* harmony import */ var _redux_models_useEnrichment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(46101);
/* harmony import */ var _widgets_react_material_button_streakButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(22682);
/* harmony import */ var _presentation_SidebarModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(93751);
/* harmony import */ var _components_EnrichmentBody__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(46789);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_redux_models_useEnrichment__WEBPACK_IMPORTED_MODULE_4__]);
_redux_models_useEnrichment__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









function Enrichment(_ref) {
  let {
    id,
    type
  } = _ref;
  const {
    enrichment,
    reject,
    accept
  } = (0,_redux_models_useEnrichment__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP)({
    id
  }, type);
  const [showUpdates, setShowUpdates] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [isDismissed, setIsDismissed] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: "jsx-3050705989" + " " + (classnames__WEBPACK_IMPORTED_MODULE_2___default()('updates_container', {
        show: enrichment && Object.keys(enrichment).length > 0 && !isDismissed
      }) || ""),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
        style: {
          fontSize: '14px'
        },
        className: "jsx-3050705989",
        children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.getArray('number_suggested_updates', {
          number: Object.keys(enrichment || {}).length
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_widgets_react_material_button_streakButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP, {
        onClick: () => {
          setShowUpdates(true);
        },
        style: {
          color: 'var(--streak-app-primary-onDark)'
        },
        variant: "text",
        children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.getString('review')
      })]
    }), showUpdates && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_presentation_SidebarModal__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      title: _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.getString('suggested_updates'),
      bodyComponent: () => enrichment && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_EnrichmentBody__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        enrichment: enrichment
      }),
      buttons: [{
        text: _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.getString('reject'),
        props: {
          onClick: () => {
            reject();
            setShowUpdates(false);
            setIsDismissed(true);
          },
          variant: 'text'
        }
      }, {
        text: _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.getString('accept'),
        props: {
          onClick: () => {
            enrichment && accept(enrichment);
            setShowUpdates(false);
            setIsDismissed(true);
          }
        }
      }],
      onOutsideClick: () => {
        setShowUpdates(false);
      },
      onCloseClick: () => {
        setShowUpdates(false);
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "3050705989",
      children: [".updates_container.jsx-3050705989{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;bottom:0;left:0;right:0;padding:12px;position:absolute;background-color:var(--streak-black-primary);color:var(--streak-solid-white);-webkit-transition:-webkit-transform ease 0.5s;-webkit-transition:transform ease 0.5s;transition:transform ease 0.5s;-webkit-transform:translateY(100%);-ms-transform:translateY(100%);transform:translateY(100%);z-index:99;}", ".updates_container.show.jsx-3050705989{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}"]
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 11994:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ OrgContainer)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17013);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44345);
/* harmony import */ var _components_Org__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62275);
/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3572);
/* harmony import */ var _redux_models_modelHooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(64076);
/* harmony import */ var _redux_selectors_getEffectiveTopCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(89159);
/* harmony import */ var _widgets_react_loadingSpinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(72905);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Org__WEBPACK_IMPORTED_MODULE_2__]);
_components_Org__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








function OrgContainer(_ref) {
  let {
    boxId,
    getScrollContainer,
    orgContainerRef,
    orgKeyOrId,
    track
  } = _ref;
  const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_7__/* .useDispatch */ .I0)();
  const orgState = (0,_redux_models_modelHooks__WEBPACK_IMPORTED_MODULE_3__/* .useOrg */ .s9)(orgKeyOrId).result;
  const card = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_7__/* .useSelector */ .v9)(_redux_selectors_getEffectiveTopCard__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, lodash__WEBPACK_IMPORTED_MODULE_0__.isEqual);
  if (!orgState) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_widgets_react_loadingSpinner__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {});
  }
  const _track = (eventName, extraProps) => track(`org.${eventName}`, {
    ...extraProps,
    orgId: orgState.id
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_Org__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    boxId: boxId
    // Lift ref up another level, parent ref can be used as regular prop but it must have a different name
    // https://stackoverflow.com/questions/50621471/access-a-nested-grand-child-component-in-a-parent-component
    ,
    domRef: orgContainerRef,
    domains: orgState.domains,
    facebookHandle: orgState.facebookHandle,
    getScrollContainer: getScrollContainer,
    imageUrl: orgState.imageUrl,
    instagramHandle: orgState.instagramHandle,
    linkedinHandle: orgState.linkedinHandle,
    name: orgState.name,
    onClickFacebook: () => {
      window.open('https://www.facebook.com/' + orgState.facebookHandle);
      _track('org.facebook.click');
    },
    onClickInstagram: () => {
      window.open(`https://www.instagram.com/${orgState.instagramHandle}`, '_blank');
      _track('org.instagram.click');
    },
    onClickLinkedIn: () => {
      window.open(`https://www.linkedin.com/${orgState.linkedinHandle}`, '_blank');
      _track('org.linkedin.click');
    },
    onClickTwitter: () => {
      window.open(`https://www.twitter.com/${orgState.twitterHandle}`, '_blank');
      _track('org.twitter.click');
    },
    onClickRelatedContacts: () => {
      dispatch({
        type: 'SIDEBAR/CARDS/PUSH',
        cards: [{
          type: 'RELATED_CONTACTS',
          orgId: orgState.id
        }]
      });
      _track('org.relatedContacts.click');
    },
    orgId: orgState.id,
    relatedContactLinks: orgState.relatedContactLinks,
    relatedOrgLinks: orgState.relatedOrgLinks,
    showRelatedContacts: card.type === 'RELATED_CONTACTS',
    track: _track,
    twitterHandle: orgState.twitterHandle
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 84152:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ OrgDetailsSection)
});

// EXTERNAL MODULE: ./.yarn/cache/react-npm-18.3.1-af38f3c1ae-261137d3f3.zip/node_modules/react/index.js
var react = __webpack_require__(44345);
// EXTERNAL MODULE: ./extensions/common/js/lib/createDebouncedLogger.ts
var createDebouncedLogger = __webpack_require__(80752);
// EXTERNAL MODULE: ./.yarn/__virtual__/styled-jsx-virtual-9c4bfc1357/0/cache/styled-jsx-npm-5.0.2-aff4f13ebf-96b4507d41.zip/node_modules/styled-jsx/style.js
var style = __webpack_require__(81518);
var style_default = /*#__PURE__*/__webpack_require__.n(style);
// EXTERNAL MODULE: ./extensions/common/js/redux/hooks.ts
var hooks = __webpack_require__(3572);
// EXTERNAL MODULE: ./extensions/common/js/redux/selectors/contactAndOrgSelectors.ts
var contactAndOrgSelectors = __webpack_require__(18073);
// EXTERNAL MODULE: ./extensions/common/js/widgets/react/CommitHandler.tsx
var CommitHandler = __webpack_require__(99174);
// EXTERNAL MODULE: ./extensions/common/js/modules/streakSidebar/presentation/RaisedRichTextAreaArray.tsx
var RaisedRichTextAreaArray = __webpack_require__(73785);
// EXTERNAL MODULE: ./extensions/common/js/modules/streakSidebar/contactAndOrg/components/PlacePickerArray.tsx + 2 modules
var PlacePickerArray = __webpack_require__(13862);
// EXTERNAL MODULE: ./.yarn/cache/react-npm-18.3.1-af38f3c1ae-261137d3f3.zip/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(59718);
;// CONCATENATED MODULE: ./extensions/common/js/modules/streakSidebar/contactAndOrg/containers/OrgPlacePickerWrapper.tsx







function OrgPlacePickerWrapper(_ref) {
  let {
    fieldKey,
    isEditable,
    orgId,
    track
  } = _ref;
  const values = (0,hooks/* useSelector */.v9)(state => (0,contactAndOrgSelectors/* getOrgTextFieldValues */._f)(state, orgId, fieldKey));
  const dispatch = (0,hooks/* useDispatch */.I0)();
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: "jsx-3561783110" + " " + "streak_input_wrapper",
    children: [!isEditable && /*#__PURE__*/(0,jsx_runtime.jsx)(RaisedRichTextAreaArray/* default */.Z, {
      disabled: true,
      onCancel: () => {},
      onCommit: () => {},
      onValueChange: () => {},
      value: values,
      placeholder: "\u2014"
    }), isEditable && /*#__PURE__*/(0,jsx_runtime.jsx)(CommitHandler/* default */.Z, {
      input: props => /*#__PURE__*/(0,jsx_runtime.jsx)(PlacePickerArray/* default */.Z, {
        ...props,
        disabled: false,
        placeholder: "\u2014"
      }),
      value: values,
      onCommit: value => {
        track('org.value.set', {
          fieldName: name,
          view: 'sidebar',
          fieldKey: fieldKey
        });
        dispatch({
          type: 'ORG/FIELD/SET',
          orgId,
          fieldKey,
          fieldValue: value.flatMap(v => v?.trim() || [])
        });
      }
    }), /*#__PURE__*/(0,jsx_runtime.jsx)((style_default()), {
      id: "3561783110",
      children: [".streak_input_wrapper.jsx-3561783110{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-flex:1;-ms-flex:1;flex:1;min-width:0;}"]
    })]
  });
}
;// CONCATENATED MODULE: ./extensions/common/js/modules/streakSidebar/contactAndOrg/containers/OrgTextInputArrayWrapper.module.css
// extracted by mini-css-extract-plugin
var _1 = "streak-mod__jciNUrZ31pXbIN5zRezX";


;// CONCATENATED MODULE: ./extensions/common/js/modules/streakSidebar/contactAndOrg/containers/OrgTextInputArrayWrapper.tsx






function OrgTextInputArrayWrapper(_ref) {
  let {
    fieldKey,
    isEditable,
    orgId,
    track
  } = _ref;
  const values = (0,hooks/* useSelector */.v9)(state => (0,contactAndOrgSelectors/* getOrgTextFieldValues */._f)(state, orgId, fieldKey));
  const dispatch = (0,hooks/* useDispatch */.I0)();
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: _1,
    children: [!isEditable && /*#__PURE__*/(0,jsx_runtime.jsx)(RaisedRichTextAreaArray/* default */.Z, {
      disabled: true,
      onCancel: () => {},
      onCommit: () => {},
      onValueChange: () => {},
      value: values,
      placeholder: "\u2014"
    }), isEditable && /*#__PURE__*/(0,jsx_runtime.jsx)(CommitHandler/* default */.Z, {
      input: props => /*#__PURE__*/(0,jsx_runtime.jsx)(RaisedRichTextAreaArray/* default */.Z, {
        ...props,
        disabled: false,
        placeholder: "\u2014"
      }),
      value: values,
      onCommit: value => {
        track('org.value.set', {
          fieldName: name,
          view: 'sidebar',
          fieldKey: fieldKey
        });
        dispatch({
          type: 'ORG/FIELD/SET',
          orgId,
          fieldKey,
          fieldValue: value.flatMap(v => {
            const trimmed = v.trim();
            if (trimmed.length === 0) {
              return [];
            }
            return [trimmed];
          })
        });
      }
    })]
  });
}
// EXTERNAL MODULE: ./extensions/common/js/modules/streakSidebar/presentation/RaisedRichTextArea.tsx
var RaisedRichTextArea = __webpack_require__(56139);
;// CONCATENATED MODULE: ./extensions/common/js/modules/streakSidebar/contactAndOrg/containers/OrgTextInputWrapper.tsx





function TextInputWrapper(_ref) {
  let {
    fieldKey,
    isEditable,
    orgId,
    track
  } = _ref;
  const dispatch = (0,hooks/* useDispatch */.I0)();
  const value = (0,hooks/* useSelector */.v9)(state => (0,contactAndOrgSelectors/* getOrgTextFieldValue */.XA)(state, orgId, fieldKey));
  if (!isEditable) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(RaisedRichTextArea/* default */.Z, {
      disabled: true,
      onCancel: () => {},
      onCommit: () => {},
      value: value,
      onValueChange: () => {},
      placeholder: "\u2014"
    });
  }
  return /*#__PURE__*/(0,jsx_runtime.jsx)(CommitHandler/* default */.Z, {
    value: value,
    input: props => /*#__PURE__*/(0,jsx_runtime.jsx)(RaisedRichTextArea/* default */.Z, {
      ...props,
      placeholder: "\u2014"
    }),
    onCommit: input => {
      track('org.value.set', {
        fieldName: name,
        view: 'sidebar',
        fieldKey: fieldKey
      });
      dispatch({
        type: 'ORG/FIELD/SET',
        orgId,
        fieldKey,
        fieldValue: input
      });
    }
  });
}
// EXTERNAL MODULE: ./extensions/common/js/services/locale/locale.ts + 37 modules
var locale = __webpack_require__(35091);
;// CONCATENATED MODULE: ./extensions/common/js/redux/helpers/getOrgFieldInputForType.tsx







let FieldType = /*#__PURE__*/function (FieldType) {
  FieldType["PLACE_PICKER"] = "PLACE_PICKER";
  FieldType["TEXT_INPUT"] = "TEXT_INPUT";
  FieldType["TEXT_INPUT_ARRAY"] = "TEXT_INPUT_ARRAY";
  return FieldType;
}({});
const OrgFields = [{
  fieldKey: 'name',
  fieldName: 'Company',
  labelName: 'Company',
  isEditable: true,
  fieldType: FieldType.TEXT_INPUT
}, {
  fieldKey: 'industry',
  fieldName: 'Industry',
  labelName: 'Industry',
  isEditable: true,
  fieldType: FieldType.TEXT_INPUT
}, {
  fieldKey: 'domains',
  fieldName: 'Website',
  labelName: 'Website',
  isEditable: true,
  fieldType: FieldType.TEXT_INPUT_ARRAY
}, {
  fieldKey: 'employeeCount',
  fieldName: '# Employees',
  labelName: '# Employees',
  isEditable: true,
  fieldType: FieldType.TEXT_INPUT
}, {
  fieldKey: 'phoneNumbers',
  fieldName: 'Phone',
  labelName: 'Phone',
  isEditable: true,
  fieldType: FieldType.TEXT_INPUT_ARRAY
}, {
  fieldKey: 'addresses',
  fieldName: 'Location',
  labelName: 'Location',
  isEditable: true,
  fieldType: FieldType.PLACE_PICKER
}, {
  fieldKey: 'twitterHandle',
  fieldName: 'Twitter',
  labelName: 'Twitter',
  isEditable: true,
  fieldType: FieldType.TEXT_INPUT
}, {
  fieldKey: 'linkedinHandle',
  fieldName: 'LinkedIn',
  labelName: 'LinkedIn',
  isEditable: true,
  fieldType: FieldType.TEXT_INPUT
}, {
  fieldKey: 'facebookHandle',
  fieldName: 'Facebook',
  labelName: 'Facebook',
  isEditable: true,
  fieldType: FieldType.TEXT_INPUT
}, {
  fieldKey: 'instagramHandle',
  fieldName: 'Instagram',
  labelName: 'Instagram',
  isEditable: true,
  fieldType: FieldType.TEXT_INPUT
}, {
  fieldKey: 'other',
  fieldName: 'Notes',
  labelName: 'Notes',
  isEditable: true,
  fieldType: FieldType.TEXT_INPUT
}];
const debouncedUnsupportedFieldTypeError = (0,createDebouncedLogger/* default */.Z)({
  err: new Error('Unsupported field type'),
  level: 'error'
}, 1000 * 60);
function getOrgFieldInputForTypes(fieldType) {
  switch (fieldType) {
    case FieldType.PLACE_PICKER:
      return _ref => {
        let {
          orgId,
          fieldKey,
          track,
          isEditable
        } = _ref;
        return /*#__PURE__*/(0,jsx_runtime.jsx)(OrgPlacePickerWrapper, {
          fieldKey: fieldKey,
          isEditable: isEditable,
          orgId: orgId,
          track: track
        });
      };
    case FieldType.TEXT_INPUT:
      return _ref2 => {
        let {
          orgId,
          fieldKey,
          track,
          isEditable
        } = _ref2;
        return /*#__PURE__*/(0,jsx_runtime.jsx)(TextInputWrapper, {
          fieldKey: fieldKey,
          isEditable: isEditable,
          orgId: orgId,
          track: track
        });
      };
    case FieldType.TEXT_INPUT_ARRAY:
      return _ref3 => {
        let {
          orgId,
          fieldKey,
          track,
          isEditable
        } = _ref3;
        return /*#__PURE__*/(0,jsx_runtime.jsx)(OrgTextInputArrayWrapper, {
          fieldKey: fieldKey,
          isEditable: isEditable,
          orgId: orgId,
          track: track
        });
      };
    default:
      return () => {
        debouncedUnsupportedFieldTypeError({
          fieldType
        });
        return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          children: locale/* default */.Z.getString('unsupported_field_type')
        });
      };
  }
}
// EXTERNAL MODULE: ./extensions/common/js/modules/streakSidebar/presentation/FieldRow.tsx
var FieldRow = __webpack_require__(15501);
;// CONCATENATED MODULE: ./extensions/common/js/modules/streakSidebar/contactAndOrg/containers/OrgFieldRow.tsx



function OrgFieldRow(_ref) {
  let {
    orgId,
    fieldKey,
    track,
    fieldName,
    labelName,
    isEditable,
    fieldType
  } = _ref;
  const input = getOrgFieldInputForTypes(fieldType);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(FieldRow/* default */.Z, {
    inputComponent: input({
      orgId,
      fieldKey,
      track,
      isEditable
    }),
    name: fieldName,
    labelName: labelName,
    columnType: fieldType,
    isEditable: true,
    fieldFlexBasic: "84px"
  });
}
;// CONCATENATED MODULE: ./extensions/common/js/modules/streakSidebar/contactAndOrg/containers/OrgDetailsSection.tsx



function OrgDetailsSection(_ref) {
  let {
    orgId,
    track
  } = _ref;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: OrgFields.map(field => /*#__PURE__*/(0,jsx_runtime.jsx)(OrgFieldRow, {
      orgId: orgId,
      fieldKey: field.fieldKey,
      fieldName: field.fieldName,
      fieldType: field.fieldType,
      isEditable: field.isEditable,
      labelName: field.labelName,
      track: track
    }, field.fieldKey))
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

/***/ 73785:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ RaisedRichTextAreaArray)
/* harmony export */ });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81518);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44345);
/* harmony import */ var react_save_refs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(27336);
/* harmony import */ var react_save_refs__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_save_refs__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76430);
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutability_helper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47587);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8519);
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(draft_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var draft_js_plugins_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(58837);
/* harmony import */ var draft_js_linkify_plugin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(17147);
/* harmony import */ var _components_Icon_Icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(71174);
/* harmony import */ var _components_IconButton_IconButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(94366);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(59718);












const plugins = [(0,draft_js_linkify_plugin__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)({
  theme: {
    link: 'RaisedRichTextAreaLink'
  }
})];
class RichTextArea extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  _editor = (() => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createRef())();
  constructor(props) {
    super(props);
    const {
      value
    } = props;
    this.state = {
      editorState: draft_js__WEBPACK_IMPORTED_MODULE_4__.EditorState.createWithContent(draft_js__WEBPACK_IMPORTED_MODULE_4__.ContentState.createFromText(value))
    };
  }
  static getDerivedStateFromProps(props, state) {
    if (props.value === state.editorState.getCurrentContent().getPlainText()) {
      return null;
    }
    const {
      editorState
    } = state;
    const currentContent = editorState.getCurrentContent();
    const firstBlock = currentContent.getBlockMap().first();
    const lastBlock = currentContent.getBlockMap().last();
    const firstBlockKey = firstBlock.getKey();
    const lastBlockKey = lastBlock.getKey();
    const lengthOfLastBlock = lastBlock.getLength();
    const selection = new draft_js__WEBPACK_IMPORTED_MODULE_4__.SelectionState({
      anchorKey: firstBlockKey,
      anchorOffset: 0,
      focusKey: lastBlockKey,
      focusOffset: lengthOfLastBlock
    });
    const newContent = draft_js__WEBPACK_IMPORTED_MODULE_4__.Modifier.replaceText(currentContent, selection, props.value);
    let newState = draft_js__WEBPACK_IMPORTED_MODULE_4__.EditorState.push(editorState, newContent, 'change-block-data');
    if (editorState.getSelection().getHasFocus()) {
      newState = draft_js__WEBPACK_IMPORTED_MODULE_4__.EditorState.moveFocusToEnd(newState);
    }
    return {
      editorState: newState
    };
  }
  render() {
    const {
      editorState
    } = this.state;
    const {
      suffix
    } = this.props;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
      className: "jsx-1151456341" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()('raisedRichTextArea streak__transition-background-color', {
        isDisabled: this.props.disabled
      }) || ""),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(draft_js_plugins_editor__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP, {
        editorState: editorState,
        plugins: plugins,
        stripPastedStyles: true,
        onChange: this._onChange,
        handleReturn: event => {
          if (event.shiftKey) {
            return 'not-handled';
          }
          this._editor.current && this._editor.current.blur();
          return 'handled';
        },
        onBlur: this._onBlur,
        onFocus: this._onFocus,
        placeholder: this.props.placeholder,
        readOnly: this.props.disabled,
        ref: this._editor
      }), suffix && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
        tabIndex: -1,
        className: "jsx-1151456341" + " " + "suffix_wrapper",
        children: suffix
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
        id: "1151456341",
        children: [".raisedRichTextArea.jsx-1151456341{border-radius:4px;border-style:none;box-sizing:border-box;caret-color:var(--streak-app-primary);font-family:Product Sans;min-height:32px;outline:none;text-overflow:ellipsis;position:relative;resize:none;white-space:pre-wrap;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}", ".raisedRichTextArea.jsx-1151456341 .public-DraftEditorPlaceholder-root{color:var(--gmail-input-placeholder);padding:10px 8px 8px;}", ".raisedRichTextArea.jsx-1151456341 .public-DraftEditor-content{padding:10px 8px 8px;}", ".raisedRichTextArea.jsx-1151456341:focus-within .public-DraftEditorPlaceholder-root{color:transparent;}", ".raisedRichTextArea--11.jsx-1151456341{font-size:11px;line-height:11px;}", ".raisedRichTextArea--13.jsx-1151456341{font-size:13px;line-height:13px;}", ".raisedRichTextArea--20.jsx-1151456341{font-size:20px;font-weight:bold;line-height:24px;padding:4px 8px;}", ".raisedRichTextArea.jsx-1151456341:not(.isDisabled):hover{background-color:var(--streak-black-hover);}", ".raisedRichTextArea.jsx-1151456341:not(.isDisabled):focus-within:hover{background-color:#ffffff;}", ".raisedRichTextArea.jsx-1151456341:focus-within{background-color:#ffffff;box-shadow: 0 8px 10px 1px var(--streak-black-hover), 0 3px 14px 2px var(--streak-black-hover), 0 5px 5px -3px var(--streak-black-shadow);border-radius:4px;z-index:2;}", ".raisedRichTextArea.jsx-1151456341 .DraftEditor-root{width:calc(100% - 18px);display:inline-block;}", ".raisedRichTextArea.jsx-1151456341 .suffix_wrapper.jsx-1151456341{display:none;}", ".raisedRichTextArea.jsx-1151456341:not(.isDisabled):hover .suffix_wrapper.jsx-1151456341,.raisedRichTextArea.jsx-1151456341:focus-within .suffix_wrapper.jsx-1151456341{display:block;position:absolute;bottom:4px;right:6px;}", ".suffix_wrapper.jsx-1151456341:focus{outline:none;}", ".raisedRichTextArea.jsx-1151456341 .RaisedRichTextAreaLink:hover,.raisedRichTextArea.jsx-1151456341 .RaisedRichTextAreaLink:focus{outline:0;cursor:pointer;}"]
      })]
    });
  }
  hasFocus() {
    return this.state.editorState.getSelection().getHasFocus();
  }
  focus = () => {
    this._editor.current.focus();
  };
  blur = () => {
    this._editor.current.blur();
  };
  _onBlur = () => {
    this.props.onCommit();
    this.props.onBlur && this.props.onBlur();
  };
  _onFocus = () => {
    this.props.onFocus && this.props.onFocus();
  };
  _onChange = editorState => {
    this.setState({
      editorState
    });
    if (this.state.editorState.getCurrentContent() === editorState.getCurrentContent()) {
      // EditorState fires an onchange for both selection and content changes. We just
      // want to call the onValueChange method when the actual content changes
      return;
    }
    const text = editorState.getCurrentContent().getPlainText();
    this.props.onValueChange(text);
  };
}
class RaisedRichTextAreaArray extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  _inputRefs = (() => new Map())();
  _addButton = () => {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_IconButton_IconButton__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
      hoverIcon: () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        name: "add",
        size: "s",
        isOutline: true,
        variant: "text",
        accent: "default"
      }),
      onClick: () => {
        this._addEntry();
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        name: "add",
        size: "s",
        isOutline: true,
        variant: "text",
        accent: "muted"
      })
    });
  };
  constructor(props) {
    super(props);
    this.state = {
      minimumRowCount: null
    };
  }
  hasFocus() {
    return Array.from(this._inputRefs.values()).filter(Boolean).some(input => input.hasFocus());
  }
  _addEntry() {
    const lastValueIndex = this.props.value.length - 1;
    this.setState({
      minimumRowCount: this.props.value.length + 1
    }, () => {
      /* focus last input here */
      const inputRef = this._inputRefs.get(lastValueIndex + 1);
      if (inputRef) {
        // Need this setTimeout because force focus actually breaks plugins
        // Issue: https://github.com/draft-js-plugins/draft-js-plugins/issues/800
        setTimeout(inputRef.focus, 0);
      }
    });
  }
  focus(index) {
    const input = this._inputRefs.get(index);
    if (input) {
      input.focus();
    }
  }
  blur() {
    // avoid overhead of keeping track the focused input by blurring them all
    this._inputRefs.forEach(value => value.blur());
  }
  componentDidUpdate(prevProps) {
    if (prevProps.value !== this.props.value) {
      this.setState({
        minimumRowCount: null
      });
    }
  }
  render() {
    const {
      value,
      disabled,
      onCancel,
      onCommit,
      placeholder,
      onValueChange
    } = this.props;
    const {
      minimumRowCount
    } = this.state;
    let valuesToRender = value;
    if (minimumRowCount != null && minimumRowCount > value.length) {
      valuesToRender = value.concat(new Array(minimumRowCount - value.length).fill(''));
    }
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
      ref: this.props.domRef,
      children: valuesToRender.map((valueToRender, index) => {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
          className: "raisedRichTextAreaSection",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(RichTextArea, {
            ref: react_save_refs__WEBPACK_IMPORTED_MODULE_10___default()(this._inputRefs, index),
            disabled: disabled,
            onCommit: onCommit,
            onCancel: onCancel,
            value: valueToRender,
            placeholder: placeholder,
            onValueChange: newValue => onValueChange(immutability_helper__WEBPACK_IMPORTED_MODULE_2___default()(value, {
              [index]: {
                $set: newValue
              }
            })),
            suffix: index === valuesToRender.length - 1 && valueToRender !== '' ? this._addButton() : null
          })
        }, index);
      })
    });
  }
}

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

/***/ 46017:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ TeamPicker)
/* harmony export */ });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81518);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35091);
/* harmony import */ var _components_Select_Select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44708);
/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3572);
/* harmony import */ var _lib_utils_isNotNil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(72086);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(59718);






function TeamPicker() {
  const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useDispatch */ .I0)();
  const teams = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useSelector */ .v9)(state => {
    return state.models.teams;
  });
  const teamKey = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useSelector */ .v9)(state => {
    return state.ui.contactView.teamKey;
  });
  const currentTeam = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useSelector */ .v9)(state => {
    if (!teamKey) {
      return undefined;
    }
    const teamId = state.modelMaps.teamIdsByKey[teamKey];
    if (!teamId) {
      return undefined;
    }
    return state.models.teams[teamId];
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: "jsx-563715372" + " " + "streak__team-picker-container",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      style: {
        color: 'var(--streak-black-secondary)'
      },
      className: "jsx-563715372",
      children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.getString('current_team')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "jsx-563715372" + " " + "select-container",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_Select_Select__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        menuPlacement: "top",
        options: Object.values(teams).filter(_lib_utils_isNotNil__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z).map(team => ({
          label: team.name,
          value: team.key
        })),
        value: currentTeam ? {
          label: currentTeam.name,
          value: currentTeam.key
        } : undefined,
        onChange: newValue => {
          if (!Array.isArray(newValue) && newValue) {
            const {
              value
            } = newValue;
            dispatch({
              type: 'CONTACT_VIEW/SET_TEAM',
              teamKey: value
            });
          }
        },
        styles: {
          menuPortal: styles => ({
            ...styles,
            zIndex: 999
          })
        }
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "563715372",
      children: [".streak__team-picker-container.jsx-563715372{position:absolute;bottom:20px;background-color:white;border-radius:4px;box-shadow: 0px 2px 4px var(--streak-black-shadow), 0px 1px 10px var(--streak-black-divider), 0px 4px 5px var(--streak-black-divider);-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:8px;width:240px;z-index:99;}"]
    })]
  });
}

/***/ }),

/***/ 15592:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ES: () => (/* binding */ getContactFieldInputForType),
/* harmony export */   Kg: () => (/* binding */ ContactFields)
/* harmony export */ });
/* unused harmony export FieldType */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44345);
/* harmony import */ var _modules_streakSidebar_contactAndOrg_containers_ContactCompanyPickerWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31596);
/* harmony import */ var _modules_streakSidebar_contactAndOrg_containers_ContactPlacePickerWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59368);
/* harmony import */ var _modules_streakSidebar_contactAndOrg_containers_ContactTextInputArrayWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(36518);
/* harmony import */ var _modules_streakSidebar_contactAndOrg_containers_ContactTextInputWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(64687);
/* harmony import */ var _lib_createDebouncedLogger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(80752);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(35091);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_modules_streakSidebar_contactAndOrg_containers_ContactCompanyPickerWrapper__WEBPACK_IMPORTED_MODULE_1__]);
_modules_streakSidebar_contactAndOrg_containers_ContactCompanyPickerWrapper__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








let FieldType = /*#__PURE__*/function (FieldType) {
  FieldType["COMPANY_PICKER"] = "COMPANY_PICKER";
  FieldType["PLACE_PICKER"] = "PLACE_PICKER";
  FieldType["TEXT_INPUT"] = "TEXT_INPUT";
  FieldType["TEXT_INPUT_ARRAY"] = "TEXT_INPUT_ARRAY";
  return FieldType;
}({});
const ContactFields = [{
  fieldKey: 'givenName',
  fieldName: 'First Name',
  labelName: 'First Name',
  isEditable: true,
  fieldType: FieldType.TEXT_INPUT
}, {
  fieldKey: 'familyName',
  fieldName: 'Last Name',
  labelName: 'Last Name',
  isEditable: true,
  fieldType: FieldType.TEXT_INPUT
}, {
  fieldKey: 'company',
  fieldName: 'Company',
  labelName: 'Company',
  isEditable: true,
  fieldType: FieldType.COMPANY_PICKER
}, {
  fieldKey: 'title',
  fieldName: 'Role',
  labelName: 'Role',
  isEditable: true,
  fieldType: FieldType.TEXT_INPUT
}, {
  fieldKey: 'emailAddresses',
  fieldName: 'Email',
  labelName: 'Email',
  isEditable: true,
  fieldType: FieldType.TEXT_INPUT_ARRAY
}, {
  fieldKey: 'phoneNumbers',
  fieldName: 'Phone',
  labelName: 'Phone',
  isEditable: true,
  fieldType: FieldType.TEXT_INPUT_ARRAY
}, {
  fieldKey: 'addresses',
  fieldName: 'Location',
  labelName: 'Location',
  isEditable: true,
  fieldType: FieldType.PLACE_PICKER
}, {
  fieldKey: 'twitterHandle',
  fieldName: 'Twitter',
  labelName: 'Twitter',
  isEditable: true,
  fieldType: FieldType.TEXT_INPUT
}, {
  fieldKey: 'linkedinHandle',
  fieldName: 'LinkedIn',
  labelName: 'LinkedIn',
  isEditable: true,
  fieldType: FieldType.TEXT_INPUT
}, {
  fieldKey: 'facebookHandle',
  fieldName: 'Facebook',
  labelName: 'Facebook',
  isEditable: true,
  fieldType: FieldType.TEXT_INPUT
}, {
  fieldKey: 'instagramHandle',
  fieldName: 'Instagram',
  labelName: 'Instagram',
  isEditable: true,
  fieldType: FieldType.TEXT_INPUT
}, {
  fieldKey: 'domains',
  fieldName: 'Website',
  labelName: 'Website',
  isEditable: true,
  fieldType: FieldType.TEXT_INPUT_ARRAY
}, {
  fieldKey: 'other',
  fieldName: 'Notes',
  labelName: 'Notes',
  isEditable: true,
  fieldType: FieldType.TEXT_INPUT
}];
const debouncedUnsupportedFieldTypeError = (0,_lib_createDebouncedLogger__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)({
  err: new Error('Unsupported field type'),
  level: 'error'
}, 1000 * 60);
function getContactFieldInputForType(fieldType) {
  switch (fieldType) {
    case FieldType.COMPANY_PICKER:
      return _ref => {
        let {
          contactId,
          fieldKey,
          track,
          isEditable
        } = _ref;
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_modules_streakSidebar_contactAndOrg_containers_ContactCompanyPickerWrapper__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
          contactId: contactId,
          fieldKey: fieldKey,
          isEditable: isEditable,
          track: track
        });
      };
    case FieldType.PLACE_PICKER:
      return _ref2 => {
        let {
          contactId,
          fieldKey,
          track,
          isEditable
        } = _ref2;
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_modules_streakSidebar_contactAndOrg_containers_ContactPlacePickerWrapper__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
          contactId: contactId,
          fieldKey: fieldKey,
          isEditable: isEditable,
          track: track
        });
      };
    case FieldType.TEXT_INPUT:
      return _ref3 => {
        let {
          contactId,
          fieldKey,
          track,
          isEditable
        } = _ref3;
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_modules_streakSidebar_contactAndOrg_containers_ContactTextInputWrapper__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
          contactId: contactId,
          fieldKey: fieldKey,
          isEditable: isEditable,
          track: track
        });
      };
    case FieldType.TEXT_INPUT_ARRAY:
      return _ref4 => {
        let {
          contactId,
          fieldKey,
          track,
          isEditable
        } = _ref4;
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_modules_streakSidebar_contactAndOrg_containers_ContactTextInputArrayWrapper__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
          contactId: contactId,
          fieldKey: fieldKey,
          isEditable: isEditable,
          track: track
        });
      };
    default:
      return () => {
        debouncedUnsupportedFieldTypeError({
          fieldType
        });
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
          children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.getString('unsupported_field_type')
        });
      };
  }
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 46101:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (/* binding */ useEnrichment)
/* harmony export */ });
/* unused harmony exports useContactEnrichment, useOrgEnrichment */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44345);
/* harmony import */ var _core_ajax_apiRequester__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23392);
/* harmony import */ var _core_models_teamContactAndOrg_teamContactAndOrgCache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41675);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3572);
/* harmony import */ var _lib_log_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7961);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_core_ajax_apiRequester__WEBPACK_IMPORTED_MODULE_1__, _core_models_teamContactAndOrg_teamContactAndOrgCache__WEBPACK_IMPORTED_MODULE_2__]);
([_core_ajax_apiRequester__WEBPACK_IMPORTED_MODULE_1__, _core_models_teamContactAndOrg_teamContactAndOrgCache__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





function useContactEnrichment(keyOrId) {
  return useEnrichment(keyOrId, 'CONTACT');
}
function useOrgEnrichment(keyOrId) {
  return useEnrichment(keyOrId, 'ORG');
}
function useEnrichment(keyOrId, type) {
  const [enrichment, setEnrichment] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(undefined);
  const model = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useSelector */ .v9)(state => {
    if (!keyOrId) {
      return undefined;
    }
    const models = type === 'CONTACT' ? state.models.contacts : state.models.orgs;
    const modelMaps = type === 'CONTACT' ? state.modelMaps.contactIdByKey : state.modelMaps.orgIdByKey;
    return 'id' in keyOrId ? models[keyOrId.id] : models[modelMaps[keyOrId.key]];
  });
  const key = model && model.key ? model.key : '';
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!key) {
      return;
    }
    const url = type === 'CONTACT' ? `/contacts/${key}/enrichment` : `/organizations/${key}/enrichment`;
    _core_ajax_apiRequester__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.get(url, {}, {
      prefix: '/api/v2',
      templateUrl: 'contactORorg/KEY/enrichment'
    }).getPromise().then(res => {
      if (res.diff && Object.keys(res.diff).length > 0) {
        setEnrichment(res.diff);
      }
    }).catch(err => {
      (0,_lib_log_error__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP)({
        err: new Error('Error fetching enrichment data'),
        level: 'error',
        details: {
          type,
          key,
          originalMessage: err.message
        }
      });
    });
  }, [key, type]);
  const accept = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async suggestions => {
    if (model && model.key) {
      const modelEntity = type === 'CONTACT' ? await _core_models_teamContactAndOrg_teamContactAndOrgCache__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.getTeamContactByKeyOrIdSync(model.key) : await _core_models_teamContactAndOrg_teamContactAndOrgCache__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.getTeamOrgByKeyOrIdSync(model.key);
      if (modelEntity) {
        return modelEntity.saveEnrichmentSuggestions(suggestions);
      }
    }
  }, [model, type]);
  const reject = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    if (enrichment && model && model.key) {
      const url = type === 'CONTACT' ? `/contacts/${model.key}/enrichment` : `/organizations/${model.key}/enrichment`;
      return _core_ajax_apiRequester__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.post(url, {
        json: '{}'
      }, {}, {
        prefix: '/api/v2',
        templateUrl: 'contactORorg/KEY/enrichment'
      }).getPromise();
    }
    return Promise.resolve();
  }, [enrichment, model, type]);
  return {
    enrichment,
    accept,
    reject
  };
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 18073:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $_: () => (/* binding */ getContactTextFieldValues),
/* harmony export */   A: () => (/* binding */ getContactTextFieldValue),
/* harmony export */   K1: () => (/* binding */ getRelatedContacts),
/* harmony export */   XA: () => (/* binding */ getOrgTextFieldValue),
/* harmony export */   _f: () => (/* binding */ getOrgTextFieldValues),
/* harmony export */   cX: () => (/* binding */ getContactById),
/* harmony export */   h$: () => (/* binding */ getOrgById)
/* harmony export */ });
/* unused harmony exports getContactByRoute, getPersonById, getOrgByRoute, getContactRelatedOrgs */
/* harmony import */ var _lib_utils_linkify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98084);


function getContactByRoute(state) {
  if (state.routeState && state.routeState.id && state.routeState.id.includes('streak/contact')) {
    const contactEmailOrKey = state.routeState.params.key;
    const teamKey = state.ui.contactView.teamKey;
    if (isValidEmail(contactEmailOrKey)) {
      const contactIds = state.modelMaps.contactIdByEmail[contactEmailOrKey] || [];
      // TODO: Multiple team contacts with same email?
      for (const id of contactIds) {
        const contact = state.models.contacts[id];
        if (teamKey && contact && contact.teamKey === teamKey) {
          return contact;
        }
      }
      return state.models.contacts[contactIds[0]];
    }
    const contactId = state.modelMaps.contactIdByKey[contactEmailOrKey];
    return state.models.contacts[contactId];
  }
}
function getContactById(state, contactId) {
  return state.models.contacts[contactId];
}
function getOrgById(state, orgId) {
  return state.models.orgs[orgId];
}
function getPersonById(state, contactId) {
  const personId = state.modelMaps.personIdByContactId[contactId];
  return state.models.people[personId];
}
function getOrgByRoute(state) {
  if (state.routeState && state.routeState.id && state.routeState.id.includes('streak/organization')) {
    const orgKey = state.routeState.params.key;
    const orgId = state.modelMaps.orgIdByKey[orgKey];
    return state.models.orgs[orgId];
  }
}

// use with isEqual
function getContactRelatedOrgs(state, orgIds) {
  return orgIds.map(id => state.models.orgs[id]).filter(Boolean);
}

// use with isEqual
function getRelatedContacts(state, relatedContactLinks) {
  return relatedContactLinks.map(relatedContactLink => 'key' in relatedContactLink.keyOrId ? state.models.contacts[state.modelMaps.contactIdByKey[relatedContactLink.keyOrId.key]] : state.models.contacts[relatedContactLink.keyOrId.id]).filter(Boolean);
}
function getContactTextFieldValue(state, contactId, fieldKey) {
  const contact = state.models.contacts[contactId];
  const personId = state.modelMaps.personIdByContactId[contactId];
  if (!contact || !personId) {
    return '';
  }
  const person = state.models.people[personId];
  switch (fieldKey) {
    // for "case 'company'" use useOrg to load the org into state and get the name from the result
    case 'facebookHandle':
      {
        const foundLinks = (0,_lib_utils_linkify__WEBPACK_IMPORTED_MODULE_0__/* .getLinksInText */ ._3)(contact.facebookHandle);
        if (foundLinks.length > 0 && foundLinks[0].value.includes('facebook') || contact.facebookHandle === '') {
          return contact.facebookHandle;
        } else {
          return `facebook.com/${contact.facebookHandle}`;
        }
      }
    case 'familyName':
      {
        return person.familyName;
      }
    case 'givenName':
      {
        return person.givenName;
      }
    case 'instagramHandle':
      {
        const foundLinks = (0,_lib_utils_linkify__WEBPACK_IMPORTED_MODULE_0__/* .getLinksInText */ ._3)(contact.instagramHandle);
        if (foundLinks.length > 0 && foundLinks[0].value.includes('instagram') || contact.instagramHandle === '') {
          return contact.instagramHandle;
        } else {
          return `instagram.com/${contact.instagramHandle}`;
        }
      }
    case 'linkedinHandle':
      {
        const foundLinks = (0,_lib_utils_linkify__WEBPACK_IMPORTED_MODULE_0__/* .getLinksInText */ ._3)(contact.linkedinHandle);
        if (foundLinks.length > 0 && foundLinks[0].value.includes('linkedin') || contact.linkedinHandle === '') {
          return contact.linkedinHandle;
        } else {
          return `linkedin.com/${contact.linkedinHandle}`;
        }
      }
    case 'other':
      {
        return contact.notes;
      }
    case 'title':
      {
        return contact.title;
      }
    case 'twitterHandle':
      {
        const foundLinks = (0,_lib_utils_linkify__WEBPACK_IMPORTED_MODULE_0__/* .getLinksInText */ ._3)(contact.twitterHandle);
        if (foundLinks.length > 0 && foundLinks[0].value.includes('twitter') || contact.twitterHandle === '') {
          return contact.twitterHandle;
        } else {
          return `twitter.com/${contact.twitterHandle}`;
        }
      }
    default:
      {
        return '';
      }
  }
}
function getContactTextFieldValues(state, contactId, fieldKey) {
  const contact = state.models.contacts[contactId];
  const personId = state.modelMaps.personIdByContactId[contactId];
  if (!contact || !personId) {
    return [''];
  }
  switch (fieldKey) {
    case 'emailAddresses':
      {
        return contact.emailAddresses.length > 0 ? contact.emailAddresses : [''];
      }
    case 'phoneNumbers':
      {
        return contact.phoneNumbers.length > 0 ? contact.phoneNumbers : [''];
      }
    case 'addresses':
      {
        return contact.addresses.length > 0 ? contact.addresses : [''];
      }
    case 'domains':
      {
        return contact.domains.length > 0 ? contact.domains : [''];
      }
    default:
      {
        return [''];
      }
  }
}
function getOrgTextFieldValue(state, orgId, fieldKey) {
  const org = state.models.orgs[orgId];
  if (!org) {
    return '';
  }
  switch (fieldKey) {
    case 'name':
      {
        return org.name;
      }
    case 'industry':
      {
        return org.industry;
      }
    case 'employeeCount':
      {
        return org.employeeCount.toString();
      }
    case 'twitterHandle':
      {
        const foundLinks = (0,_lib_utils_linkify__WEBPACK_IMPORTED_MODULE_0__/* .getLinksInText */ ._3)(org.twitterHandle);
        if (foundLinks.length > 0 && foundLinks[0].value.includes('twitter')) {
          return org.twitterHandle;
        } else {
          return `twitter.com/${org.twitterHandle}`;
        }
      }
    case 'linkedinHandle':
      {
        const foundLinks = (0,_lib_utils_linkify__WEBPACK_IMPORTED_MODULE_0__/* .getLinksInText */ ._3)(org.linkedinHandle);
        if (foundLinks.length > 0 && foundLinks[0].value.includes('linkedin') || org.linkedinHandle === '') {
          return org.linkedinHandle;
        } else {
          return `linkedin.com/${org.linkedinHandle}`;
        }
      }
    case 'facebookHandle':
      {
        const foundLinks = (0,_lib_utils_linkify__WEBPACK_IMPORTED_MODULE_0__/* .getLinksInText */ ._3)(org.facebookHandle);
        if (foundLinks.length > 0 && foundLinks[0].value.includes('facebook') || org.facebookHandle === '') {
          return org.facebookHandle;
        } else {
          return `facebook.com/${org.facebookHandle}`;
        }
      }
    case 'instagramHandle':
      {
        const foundLinks = (0,_lib_utils_linkify__WEBPACK_IMPORTED_MODULE_0__/* .getLinksInText */ ._3)(org.instagramHandle);
        if (foundLinks.length > 0 && foundLinks[0].value.includes('instagram') || org.instagramHandle === '') {
          return org.instagramHandle;
        } else {
          return `instagram.com/${org.instagramHandle}`;
        }
      }
    case 'other':
      {
        return org.notes || '';
      }
    default:
      {
        return '';
      }
  }
}
function getOrgTextFieldValues(state, orgId, fieldKey) {
  const org = state.models.orgs[orgId];
  if (!org) {
    return [''];
  }
  switch (fieldKey) {
    case 'domains':
      {
        return org.domains.length > 0 ? org.domains : [''];
      }
    case 'phoneNumbers':
      {
        return org.phoneNumbers.length > 0 ? org.phoneNumbers : [''];
      }
    case 'addresses':
      {
        return org.addresses.length > 0 ? org.addresses : [''];
      }
    default:
      {
        return [''];
      }
  }
}

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
//# sourceMappingURL=https://storage.googleapis.com/streak-extension-sourcemaps/clientjs/clientjs.chunk.2349.e31904a65a55297bbf7d.js.map