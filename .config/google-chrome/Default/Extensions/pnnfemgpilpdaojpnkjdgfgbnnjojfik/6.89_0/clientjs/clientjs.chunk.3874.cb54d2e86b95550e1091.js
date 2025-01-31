"use strict";
export const id = 3874;
export const ids = [3874];
export const modules = {

/***/ 23874:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_ajax_apiRequester__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23392);
/* harmony import */ var _lib_dependencyManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54612);
/* harmony import */ var _pipelineImportProgressMole__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14890);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_core_ajax_apiRequester__WEBPACK_IMPORTED_MODULE_0__, _pipelineImportProgressMole__WEBPACK_IMPORTED_MODULE_2__]);
([_core_ajax_apiRequester__WEBPACK_IMPORTED_MODULE_0__, _pipelineImportProgressMole__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function fetchImportJobs() {
  const jobs = await APIRequester.get('importjobs').getPromise();
  const processingJobs = jobs.filter(job => !['DONE', 'ERROR_IMPORTING', 'CANCELLING', 'CANCELLED_BY_USER'].includes(job.status));
  processingJobs.forEach(job => {
    setupProgressBarMole(job);
  });
}
_lib_dependencyManager__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP.addFunction({
  functionKey: 'persistImportJobs',
  functionReference: async function () {
    // fetchImportJobs();
  },
  dependentFunctionKeys: ['gmailLoaded', 'localeLoaded', 'userLoggedIn', 'data.pipelines.initialized']
});
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
//# sourceMappingURL=https://storage.googleapis.com/streak-extension-sourcemaps/clientjs/clientjs.chunk.3874.cb54d2e86b95550e1091.js.map