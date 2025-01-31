
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "clientjs.chunk." + chunkId + "." + "5474e5e3e42c9b6c1196" + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/import chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = new URL("./", import.meta.url);
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			764: 0
/******/ 		};
/******/ 		
/******/ 		// no install chunk
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		// no on chunks loaded
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
var _global = (typeof window !== 'undefined' ? window : typeof __webpack_require__.g !== 'undefined' ? __webpack_require__.g : typeof self !== 'undefined' ? self : {}); _global.SENTRY_RELEASE={id:"mv3_367fdb3ec5d02503c57c4a6cf7db250b577eb480"};
      _global.SENTRY_RELEASES=_global.SENTRY_RELEASES || {};
      _global.SENTRY_RELEASES["streak-extension@streak"]={id:"mv3_367fdb3ec5d02503c57c4a6cf7db250b577eb480"};
      
})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
// An html file is created for this, and that html file is loaded in ./mainThreadWorker.ts.

const worker = new Worker(new URL(/* worker import */ __webpack_require__.p + __webpack_require__.u(4810), __webpack_require__.b));
worker.addEventListener('message', event => {
  if (!window.parent) return;
  window.parent.postMessage(event.data, '*', event.data.transferableList);
});
worker.addEventListener('error', event => {
  // eslint-disable-next-line no-console
  console.error('worker error:', event);
});
window.addEventListener('message', event => {
  if (!/^(chrome|safari(-web)?)-extension:/.test(event.origin)) return;
  worker.postMessage(event.data, event.data.transferableList);
});
window.addEventListener('load', () => {
  if (!window.parent) return;
  window.parent.postMessage('loaded', '*');
});
})();

/******/ })()
;
//# sourceMappingURL=https://storage.googleapis.com/streak-extension-sourcemaps/clientjs/workerIframe.58e79907b84a374a487b.js.map