"use strict";
export const id = 2883;
export const ids = [2883];
export const modules = {

/***/ 82883:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

;// CONCATENATED MODULE: ./extensions/common/js/core/force-icon-render.module.css
// extracted by mini-css-extract-plugin
var _1 = "streak-mod__GOQf6ZJtpgIoOLVebXL6";


;// CONCATENATED MODULE: ./extensions/common/js/core/force-icon-render.ts

if (!document.body.querySelector(`.${_1}`)) {
  const parentSpan = document.createElement('span');
  parentSpan.className = _1;

  /** These icon fonts show up on initial extension render. */
  const iconFontsPrerendered = [{
    fontFamily: 'Material Symbols Outlined',
    checkText: '16px "Material Symbols Outlined"',
    ligature: 'arrow_right'
  }, {
    fontFamily: 'Material Icons Outlined',
    checkText: '16px "Material Icons Outlined"',
    ligature: 'arrow_left'
  }, {
    fontFamily: 'Streak Icons',
    checkText: '16px "Streak Icons"',
    ligature: 'Add to pipeline'
  }];
  for (const {
    checkText,
    ligature,
    fontFamily
  } of iconFontsPrerendered) {
    // document.fonts.check is available in Chrome 120+. For other browsers, we just render the font.
    if (document.fonts.check?.(checkText)) {
      continue;
    }
    const span = document.createElement('span');
    span.style.fontFamily = fontFamily;
    span.innerText = ligature;
    parentSpan.appendChild(span);
  }
  document.body.appendChild(parentSpan);
}

/***/ })

};
;
//# sourceMappingURL=https://storage.googleapis.com/streak-extension-sourcemaps/clientjs/clientjs.chunk.2883.2c022c3018f07948da81.js.map