"use strict";
export const id = 6106;
export const ids = [6106];
export const modules = {

/***/ 5582:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ CreatePipelinePrompt)
});

// EXTERNAL MODULE: ./.yarn/__virtual__/styled-jsx-virtual-9c4bfc1357/0/cache/styled-jsx-npm-5.0.2-aff4f13ebf-96b4507d41.zip/node_modules/styled-jsx/style.js
var style = __webpack_require__(81518);
var style_default = /*#__PURE__*/__webpack_require__.n(style);
// EXTERNAL MODULE: ./extensions/common/js/redux/hooks.ts
var hooks = __webpack_require__(3572);
// EXTERNAL MODULE: ./extensions/common/js/services/locale/locale.ts + 37 modules
var locale = __webpack_require__(35091);
// EXTERNAL MODULE: ./extensions/common/js/widgets/react/material/button/streakButton.tsx
var streakButton = __webpack_require__(22682);
;// CONCATENATED MODULE: ./extensions/common/images/sidebar/pipelineStages@2x.png
const pipelineStages_2x_namespaceObject = __webpack_require__.p + "pipelineStages@2x.71a9d7316e3aa5f72fcb.png";
// EXTERNAL MODULE: ./.yarn/cache/react-npm-18.3.1-af38f3c1ae-261137d3f3.zip/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(59718);
;// CONCATENATED MODULE: ./extensions/common/js/modules/streakSidebar/presentation/createPipelinePrompt.tsx






function CreatePipelinePrompt(props) {
  const {
    track
  } = props;
  const dispatch = (0,hooks/* useDispatch */.I0)();
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: "jsx-2171682505" + " " + "streak__sidebar_pipelinePrompt_container",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)((style_default()), {
      id: "2171682505",
      children: [".streak__sidebar_pipelinePrompt_container.jsx-2171682505{text-align:center;-webkit-letter-spacing:0.25px;-moz-letter-spacing:0.25px;-ms-letter-spacing:0.25px;letter-spacing:0.25px;}", ".streak__sidebar_pipelinePrompt_title.jsx-2171682505{font-size:28px;line-height:32px;font-family:'Montserrat',sans-serif;margin-top:49px;}", ".streak__sidebar_pipelinePrompt_description.jsx-2171682505{margin-top:16px;color:var(--streak-black-secondary);font-size:14px;font-family:Roboto;}", ".streak__sidebar_pipelinePrompt_buttonContainer.jsx-2171682505{margin-top:25px;}", ".streak__sidebar_pipelinePrompt_image.jsx-2171682505{width:100%;}"]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
      src: pipelineStages_2x_namespaceObject,
      className: "jsx-2171682505" + " " + "streak__sidebar_pipelinePrompt_image"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "jsx-2171682505" + " " + "streak__sidebar_pipelinePrompt_title",
      children: locale/* default */.Z.getString('streak_sidebar_pipelinePrompt_title')
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "jsx-2171682505" + " " + "streak__sidebar_pipelinePrompt_description",
      children: locale/* default */.Z.getString('streak_sidebar_pipelinePrompt_desc')
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "jsx-2171682505" + " " + "streak__sidebar_pipelinePrompt_buttonContainer",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(streakButton/* default */.ZP, {
        onClick: () => {
          track('createButton.click');
          dispatch({
            type: 'CREATE_PIPELINE_CLICK'
          });
        },
        children: locale/* default */.Z.getString('create_first_pipeline')
      })
    })]
  });
}

/***/ })

};
;
//# sourceMappingURL=https://storage.googleapis.com/streak-extension-sourcemaps/clientjs/clientjs.chunk.6106.2c7c24b98cc29c7cf087.js.map