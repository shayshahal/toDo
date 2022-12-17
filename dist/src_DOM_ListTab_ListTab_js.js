"use strict";
(self["webpackChunktodo"] = self["webpackChunktodo"] || []).push([["src_DOM_ListTab_ListTab_js"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/DOM/ListTab/ListTab.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/DOM/ListTab/ListTab.css ***!
  \***************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "#content\n{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n#div-list\n{\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: stretch;\n    background-color: white;\n    height: 90%;\n    width: 60%;\n    box-shadow: 0 0 20px 5px rgb(44, 42, 42) ;\n    border: 5px solid blue;\n}\n#title-list\n{\n    font-size: 7vmin;\n    text-align: center;\n    padding: .5vh 0vw;\n    height: 10%;\n\n}\n#list\n{\n    border-top: .5vh solid rgb(54, 54, 168);\n    border-bottom: .5vh solid rgb(54, 54, 168);\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: stretch;\n    height: 90%;\n    padding: 1vh .5vw;\n    gap: 1.25vh;\n    overflow:auto;\n}\n.task\n{\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0vh 0vw 0vh .5vw;\n    height: 5vh;\n    background-color: rgb(197, 194, 191);\n    border-radius: 5px;\n    box-shadow: 1px 1px 5px 1px rgb(32, 31, 31);\n    transition: height .3s ease;\n}\n.task:hover\n{\n    transform: translate3d(2px, 2px, 2px);\n}\n.editable\n{\n    background-color: transparent;\n    box-shadow: none;\n    border: none;\n    font-family: inherit;\n    font-size: inherit;\n    height: inherit;\n}\n.editing\n{\n    height: 10vh;\n}\n.btnsDiv\n{\n    display: flex;\n    flex-direction: column;\n    align-self: stretch;\n    justify-content:space-between;\n    align-items: stretch;\n    width: 3vw;\n}\n.check\n{\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n    color: white;\n    cursor: pointer;\n    transition: all 2 ease;\n}\n#check\n{\n    appearance: none;\n    background-color: red;\n    flex: 1;\n}\n#check::before\n{\n    content: \"✔\";\n}\n#check:checked\n{\n    background-color: black;\n}\n#edit\n{\n    appearance: none;\n    flex: 1;\n    background-color: green;\n}\n#edit::before\n{\n    content: \"✎\";\n}\n#edit:checked\n{\n    background-color: rgb(76, 0, 255);\n}", "",{"version":3,"sources":["webpack://./src/DOM/ListTab/ListTab.css"],"names":[],"mappings":"AAAA;;IAEI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;AACA;;IAEI,aAAa;IACb,sBAAsB;IACtB,2BAA2B;IAC3B,oBAAoB;IACpB,uBAAuB;IACvB,WAAW;IACX,UAAU;IACV,yCAAyC;IACzC,sBAAsB;AAC1B;AACA;;IAEI,gBAAgB;IAChB,kBAAkB;IAClB,iBAAiB;IACjB,WAAW;;AAEf;AACA;;IAEI,uCAAuC;IACvC,0CAA0C;IAC1C,aAAa;IACb,sBAAsB;IACtB,2BAA2B;IAC3B,oBAAoB;IACpB,WAAW;IACX,iBAAiB;IACjB,WAAW;IACX,aAAa;AACjB;AACA;;IAEI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,mBAAmB;IACnB,yBAAyB;IACzB,WAAW;IACX,oCAAoC;IACpC,kBAAkB;IAClB,2CAA2C;IAC3C,2BAA2B;AAC/B;AACA;;IAEI,qCAAqC;AACzC;AACA;;IAEI,6BAA6B;IAC7B,gBAAgB;IAChB,YAAY;IACZ,oBAAoB;IACpB,kBAAkB;IAClB,eAAe;AACnB;AACA;;IAEI,YAAY;AAChB;AACA;;IAEI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,6BAA6B;IAC7B,oBAAoB;IACpB,UAAU;AACd;AACA;;IAEI,kBAAkB;IAClB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;IACZ,YAAY;IACZ,eAAe;IACf,sBAAsB;AAC1B;AACA;;IAEI,gBAAgB;IAChB,qBAAqB;IACrB,OAAO;AACX;AACA;;IAEI,YAAY;AAChB;AACA;;IAEI,uBAAuB;AAC3B;AACA;;IAEI,gBAAgB;IAChB,OAAO;IACP,uBAAuB;AAC3B;AACA;;IAEI,YAAY;AAChB;AACA;;IAEI,iCAAiC;AACrC","sourcesContent":["#content\n{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n#div-list\n{\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: stretch;\n    background-color: white;\n    height: 90%;\n    width: 60%;\n    box-shadow: 0 0 20px 5px rgb(44, 42, 42) ;\n    border: 5px solid blue;\n}\n#title-list\n{\n    font-size: 7vmin;\n    text-align: center;\n    padding: .5vh 0vw;\n    height: 10%;\n\n}\n#list\n{\n    border-top: .5vh solid rgb(54, 54, 168);\n    border-bottom: .5vh solid rgb(54, 54, 168);\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: stretch;\n    height: 90%;\n    padding: 1vh .5vw;\n    gap: 1.25vh;\n    overflow:auto;\n}\n.task\n{\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0vh 0vw 0vh .5vw;\n    height: 5vh;\n    background-color: rgb(197, 194, 191);\n    border-radius: 5px;\n    box-shadow: 1px 1px 5px 1px rgb(32, 31, 31);\n    transition: height .3s ease;\n}\n.task:hover\n{\n    transform: translate3d(2px, 2px, 2px);\n}\n.editable\n{\n    background-color: transparent;\n    box-shadow: none;\n    border: none;\n    font-family: inherit;\n    font-size: inherit;\n    height: inherit;\n}\n.editing\n{\n    height: 10vh;\n}\n.btnsDiv\n{\n    display: flex;\n    flex-direction: column;\n    align-self: stretch;\n    justify-content:space-between;\n    align-items: stretch;\n    width: 3vw;\n}\n.check\n{\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n    color: white;\n    cursor: pointer;\n    transition: all 2 ease;\n}\n#check\n{\n    appearance: none;\n    background-color: red;\n    flex: 1;\n}\n#check::before\n{\n    content: \"✔\";\n}\n#check:checked\n{\n    background-color: black;\n}\n#edit\n{\n    appearance: none;\n    flex: 1;\n    background-color: green;\n}\n#edit::before\n{\n    content: \"✎\";\n}\n#edit:checked\n{\n    background-color: rgb(76, 0, 255);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/DOM/ListTab/ListTab.css":
/*!*************************************!*\
  !*** ./src/DOM/ListTab/ListTab.css ***!
  \*************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ListTab_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./ListTab.css */ "./node_modules/css-loader/dist/cjs.js!./src/DOM/ListTab/ListTab.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ListTab_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ListTab_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ListTab_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ListTab_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/DOM/ListTab/ListTab.js":
/*!************************************!*\
  !*** ./src/DOM/ListTab/ListTab.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ListTab_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListTab.css */ "./src/DOM/ListTab/ListTab.css");
/* harmony import */ var _domManipulator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../domManipulator */ "./src/DOM/domManipulator.js");
/* harmony import */ var _Logic_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Logic/user */ "./src/Logic/user.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((name) =>
{
    const content = document.getElementById('content');

    const divList = (0,_domManipulator__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', 'div-list','');
    content.appendChild(divList);

    const titleList = (0,_domManipulator__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', 'title-list', name);
    divList.appendChild(titleList);

    const list = (0,_Logic_user__WEBPACK_IMPORTED_MODULE_2__.getList)(name);
    if(!list)
        return;
    const listContainer = (0,_domManipulator__WEBPACK_IMPORTED_MODULE_1__.createList)(list);
    divList.appendChild(listContainer);

});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LHNCQUFzQiw2QkFBNkIsR0FBRyxXQUFXLHVCQUF1Qiw0QkFBNEIsY0FBYyxHQUFHLG1CQUFtQixxQkFBcUIsR0FBRyxtQkFBbUIsOEJBQThCLEdBQUcsVUFBVSx1QkFBdUIsY0FBYyw4QkFBOEIsR0FBRyxrQkFBa0IscUJBQXFCLEdBQUcsa0JBQWtCLHdDQUF3QyxHQUFHLG1CQUFtQjtBQUNoeks7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOdkMsTUFBcUc7QUFDckcsTUFBMkY7QUFDM0YsTUFBa0c7QUFDbEcsTUFBcUg7QUFDckgsTUFBOEc7QUFDOUcsTUFBOEc7QUFDOUcsTUFBMkc7QUFDM0c7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyx3RkFBTzs7OztBQUlxRDtBQUM3RSxPQUFPLGlFQUFlLHdGQUFPLElBQUksK0ZBQWMsR0FBRywrRkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCdEQ7QUFDcUM7QUFDakI7O0FBRTNDLGlFQUFlO0FBQ2Y7QUFDQTs7QUFFQSxvQkFBb0IsOERBQWE7QUFDakM7O0FBRUEsc0JBQXNCLDhEQUFhO0FBQ25DOztBQUVBLGlCQUFpQixvREFBTztBQUN4QjtBQUNBO0FBQ0EsMEJBQTBCLDJEQUFVO0FBQ3BDOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9ET00vTGlzdFRhYi9MaXN0VGFiLmNzcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL0RPTS9MaXN0VGFiL0xpc3RUYWIuY3NzP2E4ZDQiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9ET00vTGlzdFRhYi9MaXN0VGFiLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiI2NvbnRlbnRcXG57XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4jZGl2LWxpc3RcXG57XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBoZWlnaHQ6IDkwJTtcXG4gICAgd2lkdGg6IDYwJTtcXG4gICAgYm94LXNoYWRvdzogMCAwIDIwcHggNXB4IHJnYig0NCwgNDIsIDQyKSA7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIGJsdWU7XFxufVxcbiN0aXRsZS1saXN0XFxue1xcbiAgICBmb250LXNpemU6IDd2bWluO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IC41dmggMHZ3O1xcbiAgICBoZWlnaHQ6IDEwJTtcXG5cXG59XFxuI2xpc3RcXG57XFxuICAgIGJvcmRlci10b3A6IC41dmggc29saWQgcmdiKDU0LCA1NCwgMTY4KTtcXG4gICAgYm9yZGVyLWJvdHRvbTogLjV2aCBzb2xpZCByZ2IoNTQsIDU0LCAxNjgpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgICBoZWlnaHQ6IDkwJTtcXG4gICAgcGFkZGluZzogMXZoIC41dnc7XFxuICAgIGdhcDogMS4yNXZoO1xcbiAgICBvdmVyZmxvdzphdXRvO1xcbn1cXG4udGFza1xcbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwdmggMHZ3IDB2aCAuNXZ3O1xcbiAgICBoZWlnaHQ6IDV2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NywgMTk0LCAxOTEpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggNXB4IDFweCByZ2IoMzIsIDMxLCAzMSk7XFxuICAgIHRyYW5zaXRpb246IGhlaWdodCAuM3MgZWFzZTtcXG59XFxuLnRhc2s6aG92ZXJcXG57XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMnB4LCAycHgsIDJweCk7XFxufVxcbi5lZGl0YWJsZVxcbntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gICAgaGVpZ2h0OiBpbmhlcml0O1xcbn1cXG4uZWRpdGluZ1xcbntcXG4gICAgaGVpZ2h0OiAxMHZoO1xcbn1cXG4uYnRuc0RpdlxcbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcXG4gICAganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgICB3aWR0aDogM3Z3O1xcbn1cXG4uY2hlY2tcXG57XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IGFsbCAyIGVhc2U7XFxufVxcbiNjaGVja1xcbntcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICBmbGV4OiAxO1xcbn1cXG4jY2hlY2s6OmJlZm9yZVxcbntcXG4gICAgY29udGVudDogXFxcIuKclFxcXCI7XFxufVxcbiNjaGVjazpjaGVja2VkXFxue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuI2VkaXRcXG57XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGZsZXg6IDE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG4jZWRpdDo6YmVmb3JlXFxue1xcbiAgICBjb250ZW50OiBcXFwi4pyOXFxcIjtcXG59XFxuI2VkaXQ6Y2hlY2tlZFxcbntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDc2LCAwLCAyNTUpO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvRE9NL0xpc3RUYWIvTGlzdFRhYi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0lBRUksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCO0FBQ0E7O0lBRUksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0Isb0JBQW9CO0lBQ3BCLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsVUFBVTtJQUNWLHlDQUF5QztJQUN6QyxzQkFBc0I7QUFDMUI7QUFDQTs7SUFFSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixXQUFXOztBQUVmO0FBQ0E7O0lBRUksdUNBQXVDO0lBQ3ZDLDBDQUEwQztJQUMxQyxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQixvQkFBb0I7SUFDcEIsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsYUFBYTtBQUNqQjtBQUNBOztJQUVJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsV0FBVztJQUNYLG9DQUFvQztJQUNwQyxrQkFBa0I7SUFDbEIsMkNBQTJDO0lBQzNDLDJCQUEyQjtBQUMvQjtBQUNBOztJQUVJLHFDQUFxQztBQUN6QztBQUNBOztJQUVJLDZCQUE2QjtJQUM3QixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjtBQUNBOztJQUVJLFlBQVk7QUFDaEI7QUFDQTs7SUFFSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0Isb0JBQW9CO0lBQ3BCLFVBQVU7QUFDZDtBQUNBOztJQUVJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osWUFBWTtJQUNaLGVBQWU7SUFDZixzQkFBc0I7QUFDMUI7QUFDQTs7SUFFSSxnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLE9BQU87QUFDWDtBQUNBOztJQUVJLFlBQVk7QUFDaEI7QUFDQTs7SUFFSSx1QkFBdUI7QUFDM0I7QUFDQTs7SUFFSSxnQkFBZ0I7SUFDaEIsT0FBTztJQUNQLHVCQUF1QjtBQUMzQjtBQUNBOztJQUVJLFlBQVk7QUFDaEI7QUFDQTs7SUFFSSxpQ0FBaUM7QUFDckNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiI2NvbnRlbnRcXG57XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4jZGl2LWxpc3RcXG57XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBoZWlnaHQ6IDkwJTtcXG4gICAgd2lkdGg6IDYwJTtcXG4gICAgYm94LXNoYWRvdzogMCAwIDIwcHggNXB4IHJnYig0NCwgNDIsIDQyKSA7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIGJsdWU7XFxufVxcbiN0aXRsZS1saXN0XFxue1xcbiAgICBmb250LXNpemU6IDd2bWluO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IC41dmggMHZ3O1xcbiAgICBoZWlnaHQ6IDEwJTtcXG5cXG59XFxuI2xpc3RcXG57XFxuICAgIGJvcmRlci10b3A6IC41dmggc29saWQgcmdiKDU0LCA1NCwgMTY4KTtcXG4gICAgYm9yZGVyLWJvdHRvbTogLjV2aCBzb2xpZCByZ2IoNTQsIDU0LCAxNjgpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgICBoZWlnaHQ6IDkwJTtcXG4gICAgcGFkZGluZzogMXZoIC41dnc7XFxuICAgIGdhcDogMS4yNXZoO1xcbiAgICBvdmVyZmxvdzphdXRvO1xcbn1cXG4udGFza1xcbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwdmggMHZ3IDB2aCAuNXZ3O1xcbiAgICBoZWlnaHQ6IDV2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NywgMTk0LCAxOTEpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggNXB4IDFweCByZ2IoMzIsIDMxLCAzMSk7XFxuICAgIHRyYW5zaXRpb246IGhlaWdodCAuM3MgZWFzZTtcXG59XFxuLnRhc2s6aG92ZXJcXG57XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMnB4LCAycHgsIDJweCk7XFxufVxcbi5lZGl0YWJsZVxcbntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gICAgaGVpZ2h0OiBpbmhlcml0O1xcbn1cXG4uZWRpdGluZ1xcbntcXG4gICAgaGVpZ2h0OiAxMHZoO1xcbn1cXG4uYnRuc0RpdlxcbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcXG4gICAganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgICB3aWR0aDogM3Z3O1xcbn1cXG4uY2hlY2tcXG57XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IGFsbCAyIGVhc2U7XFxufVxcbiNjaGVja1xcbntcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICBmbGV4OiAxO1xcbn1cXG4jY2hlY2s6OmJlZm9yZVxcbntcXG4gICAgY29udGVudDogXFxcIuKclFxcXCI7XFxufVxcbiNjaGVjazpjaGVja2VkXFxue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuI2VkaXRcXG57XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGZsZXg6IDE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG4jZWRpdDo6YmVmb3JlXFxue1xcbiAgICBjb250ZW50OiBcXFwi4pyOXFxcIjtcXG59XFxuI2VkaXQ6Y2hlY2tlZFxcbntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDc2LCAwLCAyNTUpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0xpc3RUYWIuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9MaXN0VGFiLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImltcG9ydCAnLi9MaXN0VGFiLmNzcyc7XG5pbXBvcnQge2NyZWF0ZUVsZW1lbnQsIGNyZWF0ZUxpc3R9IGZyb20gXCIuLi9kb21NYW5pcHVsYXRvclwiO1xuaW1wb3J0IHsgZ2V0TGlzdCB9IGZyb20gJy4uLy4uL0xvZ2ljL3VzZXInO1xuXG5leHBvcnQgZGVmYXVsdCAobmFtZSkgPT5cbntcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICAgIGNvbnN0IGRpdkxpc3QgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnZGl2LWxpc3QnLCcnKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGRpdkxpc3QpO1xuXG4gICAgY29uc3QgdGl0bGVMaXN0ID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ3RpdGxlLWxpc3QnLCBuYW1lKTtcbiAgICBkaXZMaXN0LmFwcGVuZENoaWxkKHRpdGxlTGlzdCk7XG5cbiAgICBjb25zdCBsaXN0ID0gZ2V0TGlzdChuYW1lKTtcbiAgICBpZighbGlzdClcbiAgICAgICAgcmV0dXJuO1xuICAgIGNvbnN0IGxpc3RDb250YWluZXIgPSBjcmVhdGVMaXN0KGxpc3QpO1xuICAgIGRpdkxpc3QuYXBwZW5kQ2hpbGQobGlzdENvbnRhaW5lcik7XG5cbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=