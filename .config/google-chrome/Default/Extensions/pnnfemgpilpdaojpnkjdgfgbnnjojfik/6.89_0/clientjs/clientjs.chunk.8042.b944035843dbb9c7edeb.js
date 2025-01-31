"use strict";
export const id = 8042;
export const ids = [8042];
export const modules = {

/***/ 61977:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ LoginPrompt)
});

// EXTERNAL MODULE: ./.yarn/__virtual__/styled-jsx-virtual-9c4bfc1357/0/cache/styled-jsx-npm-5.0.2-aff4f13ebf-96b4507d41.zip/node_modules/styled-jsx/style.js
var style = __webpack_require__(81518);
var style_default = /*#__PURE__*/__webpack_require__.n(style);
// EXTERNAL MODULE: ./extensions/common/js/redux/hooks.ts
var hooks = __webpack_require__(3572);
// EXTERNAL MODULE: ./extensions/common/js/widgets/react/GoogleSignInButton.tsx + 1 modules
var GoogleSignInButton = __webpack_require__(65485);
;// CONCATENATED MODULE: ./extensions/common/images/sidebar/login@2x.png
const login_2x_namespaceObject = __webpack_require__.p + "login@2x.15a85f14e2de025de14a.png";
// EXTERNAL MODULE: ./extensions/common/js/services/locale/locale.ts + 37 modules
var locale = __webpack_require__(35091);
// EXTERNAL MODULE: ./extensions/common/js/services/localSettings/localSettings.ts
var localSettings = __webpack_require__(55868);
// EXTERNAL MODULE: ./.yarn/cache/react-npm-18.3.1-af38f3c1ae-261137d3f3.zip/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(59718);
;// CONCATENATED MODULE: ./extensions/common/js/modules/streakSidebar/presentation/loginPrompt.tsx







function LoginPrompt(props) {
  const {
    track
  } = props;
  const dispatch = (0,hooks/* useDispatch */.I0)();
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: "jsx-1079145253" + " " + "streak__sidebar_loginPrompt_container",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)((style_default()), {
      id: "1079145253",
      children: [".streak__sidebar_loginPrompt_container.jsx-1079145253{text-align:center;-webkit-letter-spacing:0.25px;-moz-letter-spacing:0.25px;-ms-letter-spacing:0.25px;letter-spacing:0.25px;}", ".streak__sidebar_loginPrompt_buttonContainer.jsx-1079145253{margin-top:30px;margin-bottom:16px;}", ".streak__sidebar_loginPrompt_image.jsx-1079145253{width:100%;}", ".streak__ww_cancel.jsx-1079145253{font-size:14px;-webkit-text-decoration:underline;text-decoration:underline;cursor:pointer;color:var(--streak-black-secondary);}", ".streak__ww_cancel.jsx-1079145253:hover{color:var(--streak-primary);}"]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
      src: login_2x_namespaceObject,
      className: "jsx-1079145253" + " " + "streak__sidebar_loginPrompt_image"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "jsx-1079145253" + " " + "streak__sidebar_loginPrompt_buttonContainer",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(GoogleSignInButton/* default */.Z, {
        onClick: () => {
          track('signin.click');
          dispatch({
            type: 'SIGN_IN_BUTTON_CLICK'
          });
        }
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      onClick: () => {
        localSettings["default"].set('topNav/loggedOutDismissed', true);
        dispatch({
          type: 'SIDEBAR/CLOSE'
        });
      },
      className: "jsx-1079145253" + " " + "streak__ww_cancel",
      children: locale/* default */.Z.getString('not_use_streak_for_account')
    })]
  });
}

/***/ })

};
;
//# sourceMappingURL=https://storage.googleapis.com/streak-extension-sourcemaps/clientjs/clientjs.chunk.8042.b944035843dbb9c7edeb.js.map