"use strict";
(self["webpackChunktodo"] = self["webpackChunktodo"] || []).push([["daily-daily"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/DOM/daily/daily.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/DOM/daily/daily.css ***!
  \***********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#content\n{\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n}\n#div-list\n{\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: stretch;\n    background-color: white;\n    height: 90%;\n    width: 60%;\n    box-shadow: 0 0 20px 5px rgb(44, 42, 42) ;\n    border: 5px solid blue;\n}\n#title-list\n{\n    font-size: 7vmin;\n    text-align: center;\n    padding: .5vh 0vw;\n    height: 10%;\n\n}\n#task-container\n{\n    border-top: .5vh solid rgb(54, 54, 168);\n    border-bottom: .5vh solid rgb(54, 54, 168);\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: stretch;\n    height: 70%;\n    padding: .5vh .5vw;\n    gap: 1vh;\n    overflow:auto;\n}\n.task\n{\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: stretch;\n    padding: 1vh 1vw;\n    background-color: rgb(197, 194, 191);\n    border-radius: 5px;\n    box-shadow: 1px 1px 5px 1px rgb(32, 31, 31);\n}\n.task:hover\n{\n    transform: translate3d(2px, 2px, 2px);\n}\n.check\n{\n    appearance: none;\n    height: 100%;\n}\n.check::after\n{\n    content: \"\";\n    display: block;\n    height: 100%;\n    background-color: red;\n}\n", "",{"version":3,"sources":["webpack://./src/DOM/daily/daily.css"],"names":[],"mappings":"AAAA;;IAEI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,mBAAmB;AACvB;AACA;;IAEI,aAAa;IACb,sBAAsB;IACtB,2BAA2B;IAC3B,oBAAoB;IACpB,uBAAuB;IACvB,WAAW;IACX,UAAU;IACV,yCAAyC;IACzC,sBAAsB;AAC1B;AACA;;IAEI,gBAAgB;IAChB,kBAAkB;IAClB,iBAAiB;IACjB,WAAW;;AAEf;AACA;;IAEI,uCAAuC;IACvC,0CAA0C;IAC1C,aAAa;IACb,sBAAsB;IACtB,2BAA2B;IAC3B,oBAAoB;IACpB,WAAW;IACX,kBAAkB;IAClB,QAAQ;IACR,aAAa;AACjB;AACA;;IAEI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,oBAAoB;IACpB,gBAAgB;IAChB,oCAAoC;IACpC,kBAAkB;IAClB,2CAA2C;AAC/C;AACA;;IAEI,qCAAqC;AACzC;AACA;;IAEI,gBAAgB;IAChB,YAAY;AAChB;AACA;;IAEI,WAAW;IACX,cAAc;IACd,YAAY;IACZ,qBAAqB;AACzB","sourcesContent":["#content\n{\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n}\n#div-list\n{\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: stretch;\n    background-color: white;\n    height: 90%;\n    width: 60%;\n    box-shadow: 0 0 20px 5px rgb(44, 42, 42) ;\n    border: 5px solid blue;\n}\n#title-list\n{\n    font-size: 7vmin;\n    text-align: center;\n    padding: .5vh 0vw;\n    height: 10%;\n\n}\n#task-container\n{\n    border-top: .5vh solid rgb(54, 54, 168);\n    border-bottom: .5vh solid rgb(54, 54, 168);\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: stretch;\n    height: 70%;\n    padding: .5vh .5vw;\n    gap: 1vh;\n    overflow:auto;\n}\n.task\n{\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: stretch;\n    padding: 1vh 1vw;\n    background-color: rgb(197, 194, 191);\n    border-radius: 5px;\n    box-shadow: 1px 1px 5px 1px rgb(32, 31, 31);\n}\n.task:hover\n{\n    transform: translate3d(2px, 2px, 2px);\n}\n.check\n{\n    appearance: none;\n    height: 100%;\n}\n.check::after\n{\n    content: \"\";\n    display: block;\n    height: 100%;\n    background-color: red;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/DOM/daily/daily.css":
/*!*********************************!*\
  !*** ./src/DOM/daily/daily.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_daily_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./daily.css */ "./node_modules/css-loader/dist/cjs.js!./src/DOM/daily/daily.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_daily_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_daily_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_daily_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_daily_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/DOM/daily/daily.js":
/*!********************************!*\
  !*** ./src/DOM/daily/daily.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _daily_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./daily.css */ "./src/DOM/daily/daily.css");
/* harmony import */ var _domManipulator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../domManipulator */ "./src/DOM/domManipulator.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() =>
{
    const content = document.getElementById('content');

    const divList = (0,_domManipulator__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', 'div-list','');
    content.appendChild(divList);

    const titleList = (0,_domManipulator__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', 'title-list', 'My Day');
    divList.appendChild(titleList);

    const taskContainer = (0,_domManipulator__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', 'task-container', '');
    divList.appendChild(taskContainer);

    const addForm = (0,_domManipulator__WEBPACK_IMPORTED_MODULE_1__.createAddForm)();
    divList.appendChild(addForm);


});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFpbHktZGFpbHkuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNnSDtBQUNqQjtBQUMvRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EscURBQXFELG9CQUFvQiwwQkFBMEIsOEJBQThCLDBCQUEwQixHQUFHLGNBQWMsb0JBQW9CLDZCQUE2QixrQ0FBa0MsMkJBQTJCLDhCQUE4QixrQkFBa0IsaUJBQWlCLGdEQUFnRCw2QkFBNkIsR0FBRyxnQkFBZ0IsdUJBQXVCLHlCQUF5Qix3QkFBd0Isa0JBQWtCLEtBQUssb0JBQW9CLDhDQUE4QyxpREFBaUQsb0JBQW9CLDZCQUE2QixrQ0FBa0MsMkJBQTJCLGtCQUFrQix5QkFBeUIsZUFBZSxvQkFBb0IsR0FBRyxVQUFVLG9CQUFvQiwwQkFBMEIscUNBQXFDLDJCQUEyQix1QkFBdUIsMkNBQTJDLHlCQUF5QixrREFBa0QsR0FBRyxnQkFBZ0IsNENBQTRDLEdBQUcsV0FBVyx1QkFBdUIsbUJBQW1CLEdBQUcsa0JBQWtCLG9CQUFvQixxQkFBcUIsbUJBQW1CLDRCQUE0QixHQUFHLFNBQVMsMkZBQTJGLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE1BQU0sTUFBTSxZQUFZLGFBQWEsYUFBYSxZQUFZLEtBQUssTUFBTSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFlBQVksV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsWUFBWSxxQ0FBcUMsb0JBQW9CLDBCQUEwQiw4QkFBOEIsMEJBQTBCLEdBQUcsY0FBYyxvQkFBb0IsNkJBQTZCLGtDQUFrQywyQkFBMkIsOEJBQThCLGtCQUFrQixpQkFBaUIsZ0RBQWdELDZCQUE2QixHQUFHLGdCQUFnQix1QkFBdUIseUJBQXlCLHdCQUF3QixrQkFBa0IsS0FBSyxvQkFBb0IsOENBQThDLGlEQUFpRCxvQkFBb0IsNkJBQTZCLGtDQUFrQywyQkFBMkIsa0JBQWtCLHlCQUF5QixlQUFlLG9CQUFvQixHQUFHLFVBQVUsb0JBQW9CLDBCQUEwQixxQ0FBcUMsMkJBQTJCLHVCQUF1QiwyQ0FBMkMseUJBQXlCLGtEQUFrRCxHQUFHLGdCQUFnQiw0Q0FBNEMsR0FBRyxXQUFXLHVCQUF1QixtQkFBbUIsR0FBRyxrQkFBa0Isb0JBQW9CLHFCQUFxQixtQkFBbUIsNEJBQTRCLEdBQUcscUJBQXFCO0FBQ2h5RztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ052QyxNQUFxRztBQUNyRyxNQUEyRjtBQUMzRixNQUFrRztBQUNsRyxNQUFxSDtBQUNySCxNQUE4RztBQUM5RyxNQUE4RztBQUM5RyxNQUF5RztBQUN6RztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSW1EO0FBQzNFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSw2RkFBYyxHQUFHLDZGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQnhEO0FBQzBDOztBQUUvRCxpRUFBZTtBQUNmO0FBQ0E7O0FBRUEsb0JBQW9CLDhEQUFhO0FBQ2pDOztBQUVBLHNCQUFzQiw4REFBYTtBQUNuQzs7QUFFQSwwQkFBMEIsOERBQWE7QUFDdkM7O0FBRUEsb0JBQW9CLDhEQUFhO0FBQ2pDOzs7QUFHQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvRE9NL2RhaWx5L2RhaWx5LmNzcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL0RPTS9kYWlseS9kYWlseS5jc3M/NmU5MSIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL0RPTS9kYWlseS9kYWlseS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiNjb250ZW50XFxue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuI2Rpdi1saXN0XFxue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgaGVpZ2h0OiA5MCU7XFxuICAgIHdpZHRoOiA2MCU7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAyMHB4IDVweCByZ2IoNDQsIDQyLCA0MikgO1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCBibHVlO1xcbn1cXG4jdGl0bGUtbGlzdFxcbntcXG4gICAgZm9udC1zaXplOiA3dm1pbjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAuNXZoIDB2dztcXG4gICAgaGVpZ2h0OiAxMCU7XFxuXFxufVxcbiN0YXNrLWNvbnRhaW5lclxcbntcXG4gICAgYm9yZGVyLXRvcDogLjV2aCBzb2xpZCByZ2IoNTQsIDU0LCAxNjgpO1xcbiAgICBib3JkZXItYm90dG9tOiAuNXZoIHNvbGlkIHJnYig1NCwgNTQsIDE2OCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICAgIGhlaWdodDogNzAlO1xcbiAgICBwYWRkaW5nOiAuNXZoIC41dnc7XFxuICAgIGdhcDogMXZoO1xcbiAgICBvdmVyZmxvdzphdXRvO1xcbn1cXG4udGFza1xcbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gICAgcGFkZGluZzogMXZoIDF2dztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NywgMTk0LCAxOTEpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggNXB4IDFweCByZ2IoMzIsIDMxLCAzMSk7XFxufVxcbi50YXNrOmhvdmVyXFxue1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDJweCwgMnB4LCAycHgpO1xcbn1cXG4uY2hlY2tcXG57XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuLmNoZWNrOjphZnRlclxcbntcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL0RPTS9kYWlseS9kYWlseS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0lBRUksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCO0FBQ0E7O0lBRUksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0Isb0JBQW9CO0lBQ3BCLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsVUFBVTtJQUNWLHlDQUF5QztJQUN6QyxzQkFBc0I7QUFDMUI7QUFDQTs7SUFFSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixXQUFXOztBQUVmO0FBQ0E7O0lBRUksdUNBQXVDO0lBQ3ZDLDBDQUEwQztJQUMxQyxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQixvQkFBb0I7SUFDcEIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsYUFBYTtBQUNqQjtBQUNBOztJQUVJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsb0NBQW9DO0lBQ3BDLGtCQUFrQjtJQUNsQiwyQ0FBMkM7QUFDL0M7QUFDQTs7SUFFSSxxQ0FBcUM7QUFDekM7QUFDQTs7SUFFSSxnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjtBQUNBOztJQUVJLFdBQVc7SUFDWCxjQUFjO0lBQ2QsWUFBWTtJQUNaLHFCQUFxQjtBQUN6QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIjY29udGVudFxcbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbiNkaXYtbGlzdFxcbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGhlaWdodDogOTAlO1xcbiAgICB3aWR0aDogNjAlO1xcbiAgICBib3gtc2hhZG93OiAwIDAgMjBweCA1cHggcmdiKDQ0LCA0MiwgNDIpIDtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgYmx1ZTtcXG59XFxuI3RpdGxlLWxpc3RcXG57XFxuICAgIGZvbnQtc2l6ZTogN3ZtaW47XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogLjV2aCAwdnc7XFxuICAgIGhlaWdodDogMTAlO1xcblxcbn1cXG4jdGFzay1jb250YWluZXJcXG57XFxuICAgIGJvcmRlci10b3A6IC41dmggc29saWQgcmdiKDU0LCA1NCwgMTY4KTtcXG4gICAgYm9yZGVyLWJvdHRvbTogLjV2aCBzb2xpZCByZ2IoNTQsIDU0LCAxNjgpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgICBoZWlnaHQ6IDcwJTtcXG4gICAgcGFkZGluZzogLjV2aCAuNXZ3O1xcbiAgICBnYXA6IDF2aDtcXG4gICAgb3ZlcmZsb3c6YXV0bztcXG59XFxuLnRhc2tcXG57XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICAgIHBhZGRpbmc6IDF2aCAxdnc7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTcsIDE5NCwgMTkxKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDVweCAxcHggcmdiKDMyLCAzMSwgMzEpO1xcbn1cXG4udGFzazpob3ZlclxcbntcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgycHgsIDJweCwgMnB4KTtcXG59XFxuLmNoZWNrXFxue1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5jaGVjazo6YWZ0ZXJcXG57XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZGFpbHkuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9kYWlseS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJpbXBvcnQgJy4vZGFpbHkuY3NzJztcbmltcG9ydCB7Y3JlYXRlQWRkRm9ybSwgY3JlYXRlRWxlbWVudH0gZnJvbSBcIi4uL2RvbU1hbmlwdWxhdG9yXCI7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+XG57XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbiAgICBjb25zdCBkaXZMaXN0ID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ2Rpdi1saXN0JywnJyk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChkaXZMaXN0KTtcblxuICAgIGNvbnN0IHRpdGxlTGlzdCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICd0aXRsZS1saXN0JywgJ015IERheScpO1xuICAgIGRpdkxpc3QuYXBwZW5kQ2hpbGQodGl0bGVMaXN0KTtcblxuICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAndGFzay1jb250YWluZXInLCAnJyk7XG4gICAgZGl2TGlzdC5hcHBlbmRDaGlsZCh0YXNrQ29udGFpbmVyKTtcblxuICAgIGNvbnN0IGFkZEZvcm0gPSBjcmVhdGVBZGRGb3JtKCk7XG4gICAgZGl2TGlzdC5hcHBlbmRDaGlsZChhZGRGb3JtKTtcblxuXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9