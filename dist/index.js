/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/DOM/index/index.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/DOM/index/index.css ***!
  \***********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
___CSS_LOADER_EXPORT___.push([module.id, "*\n{\n    box-sizing: border-box;\n    margin: 0;\n    overflow: hidden;\n    padding: 0;\n    user-select: none;\n}\nhtml, body\n{\n    height: 100vh;\n    width: 100vw;\n    background-image: linear-gradient(180deg, rgb(146, 72, 72) 3%, rgb(38, 121, 180) 100%);\n    font-size: 1vmax;\n}\nbutton\n{\n    border: none;\n    font-size: inherit;\n    color: inherit;\n    background-color: transparent;\n    cursor: pointer;\n}", "",{"version":3,"sources":["webpack://./src/DOM/index/index.css"],"names":[],"mappings":"AAAA;;IAEI,sBAAsB;IACtB,SAAS;IACT,gBAAgB;IAChB,UAAU;IACV,iBAAiB;AACrB;AACA;;IAEI,aAAa;IACb,YAAY;IACZ,sFAAsF;IACtF,gBAAgB;AACpB;AACA;;IAEI,YAAY;IACZ,kBAAkB;IAClB,cAAc;IACd,6BAA6B;IAC7B,eAAe;AACnB","sourcesContent":["*\n{\n    box-sizing: border-box;\n    margin: 0;\n    overflow: hidden;\n    padding: 0;\n    user-select: none;\n}\nhtml, body\n{\n    height: 100vh;\n    width: 100vw;\n    background-image: linear-gradient(180deg, rgb(146, 72, 72) 3%, rgb(38, 121, 180) 100%);\n    font-size: 1vmax;\n}\nbutton\n{\n    border: none;\n    font-size: inherit;\n    color: inherit;\n    background-color: transparent;\n    cursor: pointer;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/DOM/main/main.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/DOM/main/main.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
___CSS_LOADER_EXPORT___.push([module.id, "#content\n{\n    height: 100%;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items:center;\n    \n}\n#welcome\n{\n    font-size: 12vmin;\n    animation: entrance 2s cubic-bezier(0,1,.3,1);\n}\n#welcome2\n{\n    font-size: 4vmin;\n    animation: entrance2 2.5s cubic-bezier(0,1,.5,1);\n}\n#go-to-daily\n{\n    padding: 1vh 0vw;\n    font-size: 3vmin;\n    color: linear-gradient(90deg, black 0%, white 100%);\n    animation: entrance3 2s cubic-bezier(0,1,.5,1);\n}\n/*************************ANIMATIONS***************************/\n\n@keyframes entrance\n{\n    0%\n    {\n        transform: translateX(-500%);\n    }\n    100%\n    {\n        transform: translateX(0%);\n    }\n}\n@keyframes entrance2\n{\n    0%\n    {\n        transform: translateX(1000%);\n    }\n    100%\n    {\n        transform: translateX(0%);\n    }\n}\n@keyframes entrance3\n{\n    0%\n    {\n        opacity: 0%;\n    }\n    100%\n    {\n        opacity: 100%;\n    }\n}", "",{"version":3,"sources":["webpack://./src/DOM/main/main.css"],"names":[],"mappings":"AAAA;;IAEI,YAAY;IACZ,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,kBAAkB;;AAEtB;AACA;;IAEI,iBAAiB;IACjB,6CAA6C;AACjD;AACA;;IAEI,gBAAgB;IAChB,gDAAgD;AACpD;AACA;;IAEI,gBAAgB;IAChB,gBAAgB;IAChB,mDAAmD;IACnD,8CAA8C;AAClD;AACA,+DAA+D;;AAE/D;;IAEI;;QAEI,4BAA4B;IAChC;IACA;;QAEI,yBAAyB;IAC7B;AACJ;AACA;;IAEI;;QAEI,4BAA4B;IAChC;IACA;;QAEI,yBAAyB;IAC7B;AACJ;AACA;;IAEI;;QAEI,WAAW;IACf;IACA;;QAEI,aAAa;IACjB;AACJ","sourcesContent":["#content\n{\n    height: 100%;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items:center;\n    \n}\n#welcome\n{\n    font-size: 12vmin;\n    animation: entrance 2s cubic-bezier(0,1,.3,1);\n}\n#welcome2\n{\n    font-size: 4vmin;\n    animation: entrance2 2.5s cubic-bezier(0,1,.5,1);\n}\n#go-to-daily\n{\n    padding: 1vh 0vw;\n    font-size: 3vmin;\n    color: linear-gradient(90deg, black 0%, white 100%);\n    animation: entrance3 2s cubic-bezier(0,1,.5,1);\n}\n/*************************ANIMATIONS***************************/\n\n@keyframes entrance\n{\n    0%\n    {\n        transform: translateX(-500%);\n    }\n    100%\n    {\n        transform: translateX(0%);\n    }\n}\n@keyframes entrance2\n{\n    0%\n    {\n        transform: translateX(1000%);\n    }\n    100%\n    {\n        transform: translateX(0%);\n    }\n}\n@keyframes entrance3\n{\n    0%\n    {\n        opacity: 0%;\n    }\n    100%\n    {\n        opacity: 100%;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/DOM/menu/menu.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/DOM/menu/menu.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
___CSS_LOADER_EXPORT___.push([module.id, "/*-------------------------Header---------------------------------*/\n#expand-menu-btn\n{\n  position: fixed;\n  top: 0;\n  left: 0;\n  display: flex;\n  border-radius: 50%;\n  color: white;\n  padding: 1vh 1vw;\n  font-size: 4vmin;\n}\n/*-------------------------Sliding Menu---------------------------------*/\n#left-menu\n{\n    position: fixed;\n    display: flex;\n    background-color: rgba(0, 0, 0, 0.5);\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: stretch;\n    top: 0%;\n    left: 0%;\n    height: 100%;\n    color: white;\n    width: 12vw;\n    z-index: 999;\n    box-shadow: 0 3px 5px black;\n}\n#top-div-left-menu\n{\n    height: 6vh;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    gap: 1vw;\n    align-items: center;\n    padding: 0 1vw;\n}\n#retract-menu-btn\n{\n    font-size: 3vmin;\n}\n#name-menu\n{\n    font-size: 2vmin;\n}\n#list-btn-container\n{\n    display: flex;\n    flex-direction: column;\n    align-items: stretch;\n    justify-content: flex-start;\n    border-bottom: .05vh solid rgba(0, 0, 0, 0.5);\n}\n#lists-container\n{\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: stretch;\n    font-size: 1.5vmin;\n}\n.listItem\n{\n    border-top: .05vh solid rgba(0, 0, 0);\n    border-bottom: .05vh solid rgba(0, 0, 0, 0.5);\n    padding: 1vh 0vw;\n}\n.menu-btn\n{\n    border-top: .1vh solid rgba(255, 255, 255, 0.5);\n    border-bottom: .1vh solid rgba(255, 255, 255, 0.5);\n    padding: 1.5vh 0vw;\n    font-size: 2.5vmin;\n}\n#screen-cover\n{\n    display: block;\n    position: fixed;\n    top: 0;\n    left: 0;\n    height: 100vh;\n    width: 100vw;\n    z-index: 99;\n    opacity: 30%;\n    background-color: black;\n}\n\n/* Animations */\n.slideRight\n{\n    animation: slideRight .2s ease-in-out;\n}\n@keyframes slideRight\n{\n    0%\n    {\n        transform: translateX(-100%);\n    }\n    100%\n    {\n        transform: translateX(0%);\n    }\n}\n.slideLeft\n{\n    animation: slideLeft .2s ease-in-out;\n}\n@keyframes slideLeft\n{\n    0%\n    {\n        transform: translateX(0%);\n    }\n    100%\n    {\n        transform: translateX(-100%);\n    }\n} \n.slideDown\n{\n    animation: slideDown .2s ease-in;\n    transform-origin: top center;\n}\n@keyframes slideDown\n{\n    0%\n    {\n        transform: rotateX(90deg);\n    }\n    100%\n    {\n        transform: rotateX(0deg);\n    }\n} \n.slideUp\n{\n    animation: slideUp .2s ease-in;\n    transform-origin: top center;\n}\n@keyframes slideUp\n{\n    0%\n    {\n        transform: rotateX(0deg);\n    }\n    100%\n    {\n        transform: rotateX(90deg);\n    }\n} \n.opIn\n{\n    animation: opIn .2s ease-in-out;\n}\n@keyframes opIn \n{\n    0% \n    {\n        opacity: 0%;\n    }\n    100%\n    {\n        opacity: 30%;\n    }\n}\n.opOut\n{\n    animation: opOut .2s ease-in-out;\n\n}\n@keyframes opOut\n{\n    0% \n    {\n        opacity: 30%;\n    }\n    100%\n    {\n        opacity: 0%;\n    }\n}\n", "",{"version":3,"sources":["webpack://./src/DOM/menu/menu.css"],"names":[],"mappings":"AAAA,mEAAmE;AACnE;;EAEE,eAAe;EACf,MAAM;EACN,OAAO;EACP,aAAa;EACb,kBAAkB;EAClB,YAAY;EACZ,gBAAgB;EAChB,gBAAgB;AAClB;AACA,yEAAyE;AACzE;;IAEI,eAAe;IACf,aAAa;IACb,oCAAoC;IACpC,sBAAsB;IACtB,2BAA2B;IAC3B,oBAAoB;IACpB,OAAO;IACP,QAAQ;IACR,YAAY;IACZ,YAAY;IACZ,WAAW;IACX,YAAY;IACZ,2BAA2B;AAC/B;AACA;;IAEI,WAAW;IACX,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,QAAQ;IACR,mBAAmB;IACnB,cAAc;AAClB;AACA;;IAEI,gBAAgB;AACpB;AACA;;IAEI,gBAAgB;AACpB;AACA;;IAEI,aAAa;IACb,sBAAsB;IACtB,oBAAoB;IACpB,2BAA2B;IAC3B,6CAA6C;AACjD;AACA;;IAEI,aAAa;IACb,sBAAsB;IACtB,2BAA2B;IAC3B,oBAAoB;IACpB,kBAAkB;AACtB;AACA;;IAEI,qCAAqC;IACrC,6CAA6C;IAC7C,gBAAgB;AACpB;AACA;;IAEI,+CAA+C;IAC/C,kDAAkD;IAClD,kBAAkB;IAClB,kBAAkB;AACtB;AACA;;IAEI,cAAc;IACd,eAAe;IACf,MAAM;IACN,OAAO;IACP,aAAa;IACb,YAAY;IACZ,WAAW;IACX,YAAY;IACZ,uBAAuB;AAC3B;;AAEA,eAAe;AACf;;IAEI,qCAAqC;AACzC;AACA;;IAEI;;QAEI,4BAA4B;IAChC;IACA;;QAEI,yBAAyB;IAC7B;AACJ;AACA;;IAEI,oCAAoC;AACxC;AACA;;IAEI;;QAEI,yBAAyB;IAC7B;IACA;;QAEI,4BAA4B;IAChC;AACJ;AACA;;IAEI,gCAAgC;IAChC,4BAA4B;AAChC;AACA;;IAEI;;QAEI,yBAAyB;IAC7B;IACA;;QAEI,wBAAwB;IAC5B;AACJ;AACA;;IAEI,8BAA8B;IAC9B,4BAA4B;AAChC;AACA;;IAEI;;QAEI,wBAAwB;IAC5B;IACA;;QAEI,yBAAyB;IAC7B;AACJ;AACA;;IAEI,+BAA+B;AACnC;AACA;;IAEI;;QAEI,WAAW;IACf;IACA;;QAEI,YAAY;IAChB;AACJ;AACA;;IAEI,gCAAgC;;AAEpC;AACA;;IAEI;;QAEI,YAAY;IAChB;IACA;;QAEI,WAAW;IACf;AACJ","sourcesContent":["/*-------------------------Header---------------------------------*/\n#expand-menu-btn\n{\n  position: fixed;\n  top: 0;\n  left: 0;\n  display: flex;\n  border-radius: 50%;\n  color: white;\n  padding: 1vh 1vw;\n  font-size: 4vmin;\n}\n/*-------------------------Sliding Menu---------------------------------*/\n#left-menu\n{\n    position: fixed;\n    display: flex;\n    background-color: rgba(0, 0, 0, 0.5);\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: stretch;\n    top: 0%;\n    left: 0%;\n    height: 100%;\n    color: white;\n    width: 12vw;\n    z-index: 999;\n    box-shadow: 0 3px 5px black;\n}\n#top-div-left-menu\n{\n    height: 6vh;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    gap: 1vw;\n    align-items: center;\n    padding: 0 1vw;\n}\n#retract-menu-btn\n{\n    font-size: 3vmin;\n}\n#name-menu\n{\n    font-size: 2vmin;\n}\n#list-btn-container\n{\n    display: flex;\n    flex-direction: column;\n    align-items: stretch;\n    justify-content: flex-start;\n    border-bottom: .05vh solid rgba(0, 0, 0, 0.5);\n}\n#lists-container\n{\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: stretch;\n    font-size: 1.5vmin;\n}\n.listItem\n{\n    border-top: .05vh solid rgba(0, 0, 0);\n    border-bottom: .05vh solid rgba(0, 0, 0, 0.5);\n    padding: 1vh 0vw;\n}\n.menu-btn\n{\n    border-top: .1vh solid rgba(255, 255, 255, 0.5);\n    border-bottom: .1vh solid rgba(255, 255, 255, 0.5);\n    padding: 1.5vh 0vw;\n    font-size: 2.5vmin;\n}\n#screen-cover\n{\n    display: block;\n    position: fixed;\n    top: 0;\n    left: 0;\n    height: 100vh;\n    width: 100vw;\n    z-index: 99;\n    opacity: 30%;\n    background-color: black;\n}\n\n/* Animations */\n.slideRight\n{\n    animation: slideRight .2s ease-in-out;\n}\n@keyframes slideRight\n{\n    0%\n    {\n        transform: translateX(-100%);\n    }\n    100%\n    {\n        transform: translateX(0%);\n    }\n}\n.slideLeft\n{\n    animation: slideLeft .2s ease-in-out;\n}\n@keyframes slideLeft\n{\n    0%\n    {\n        transform: translateX(0%);\n    }\n    100%\n    {\n        transform: translateX(-100%);\n    }\n} \n.slideDown\n{\n    animation: slideDown .2s ease-in;\n    transform-origin: top center;\n}\n@keyframes slideDown\n{\n    0%\n    {\n        transform: rotateX(90deg);\n    }\n    100%\n    {\n        transform: rotateX(0deg);\n    }\n} \n.slideUp\n{\n    animation: slideUp .2s ease-in;\n    transform-origin: top center;\n}\n@keyframes slideUp\n{\n    0%\n    {\n        transform: rotateX(0deg);\n    }\n    100%\n    {\n        transform: rotateX(90deg);\n    }\n} \n.opIn\n{\n    animation: opIn .2s ease-in-out;\n}\n@keyframes opIn \n{\n    0% \n    {\n        opacity: 0%;\n    }\n    100%\n    {\n        opacity: 30%;\n    }\n}\n.opOut\n{\n    animation: opOut .2s ease-in-out;\n\n}\n@keyframes opOut\n{\n    0% \n    {\n        opacity: 30%;\n    }\n    100%\n    {\n        opacity: 0%;\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/DOM/index/index.css":
/*!*********************************!*\
  !*** ./src/DOM/index/index.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/DOM/index/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/DOM/main/main.css":
/*!*******************************!*\
  !*** ./src/DOM/main/main.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/DOM/main/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/DOM/menu/menu.css":
/*!*******************************!*\
  !*** ./src/DOM/menu/menu.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./menu.css */ "./node_modules/css-loader/dist/cjs.js!./src/DOM/menu/menu.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/DOM/domManipulator.js":
/*!***********************************!*\
  !*** ./src/DOM/domManipulator.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createElement": () => (/* binding */ createElement),
/* harmony export */   "tabSwitch": () => (/* binding */ tabSwitch)
/* harmony export */ });
function createElement(eType, id, textContent, className = false) 
{
    const element = document.createElement(eType);
    element.textContent = textContent;
    element.id = id;
    if(className)
        element.classList.add(className);
    return element;
};
function tabSwitch(name)
{
    const content = document.getElementById('content');
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
    __webpack_require__("./src/DOM lazy recursive ^\\.\\/.*$ include: \\.js$")(`./${name}`).then(({ default: loadTab})=>{loadTab()});
}


/***/ }),

/***/ "./src/DOM/index/index.js":
/*!********************************!*\
  !*** ./src/DOM/index/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/DOM/index/index.css");
/* harmony import */ var _src_DOM_menu_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/DOM/menu/menu.js */ "./src/DOM/menu/menu.js");
/* harmony import */ var _src_DOM_main_main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/DOM/main/main.js */ "./src/DOM/main/main.js");




if (true) {
    console.log('Looks like we are in development mode!');
  }

(0,_src_DOM_menu_menu_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_src_DOM_main_main_js__WEBPACK_IMPORTED_MODULE_2__["default"])();

/***/ }),

/***/ "./src/DOM/main/main.js":
/*!******************************!*\
  !*** ./src/DOM/main/main.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.css */ "./src/DOM/main/main.css");
/* harmony import */ var _domManipulator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../domManipulator */ "./src/DOM/domManipulator.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() =>
{
    const content = document.getElementById('content');
    const welcome = (0,_domManipulator__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', 'welcome', 'Welcome to ToDo');
    content.appendChild(welcome);
    const welcome2 = (0,_domManipulator__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', 'welcome2', 'Your Source of Productivity.');
    content.appendChild(welcome2);
    const button = (0,_domManipulator__WEBPACK_IMPORTED_MODULE_1__.createElement)('button', 'go-to-daily', 'Go to daily tasks →');
    content.appendChild(button);

    button.addEventListener('click',  () => { (0,_domManipulator__WEBPACK_IMPORTED_MODULE_1__.tabSwitch)('daily') });
});

/***/ }),

/***/ "./src/DOM/menu/menu.js":
/*!******************************!*\
  !*** ./src/DOM/menu/menu.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _menu_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.css */ "./src/DOM/menu/menu.css");
/* harmony import */ var _src_DOM_domManipulator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/DOM/domManipulator.js */ "./src/DOM/domManipulator.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() =>
{
    // Create Menu expending button
    const expandMenuButton = (0,_src_DOM_domManipulator_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('button', 'expand-menu-btn', '☰');
    document.body.appendChild(expandMenuButton);

    //--------------------------Create left menu --------------------------------------//
    const leftMenu = (0,_src_DOM_domManipulator_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', 'left-menu','', '');

    // Horizontal div for menu button and name
    const topDivLeftMenu = (0,_src_DOM_domManipulator_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', 'top-div-left-menu','');
    leftMenu.appendChild(topDivLeftMenu);

    // Menu retract button
    const retractMenuButton = (0,_src_DOM_domManipulator_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('button', 'retract-menu-btn', '☰');
    topDivLeftMenu.appendChild(retractMenuButton);

    // Name of site
    const credit = (0,_src_DOM_domManipulator_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', 'name-menu', '©Shay Shahal');
    topDivLeftMenu.appendChild(credit);

    // Create screen cover for rest of main screen when menu is open
    const screenCover = (0,_src_DOM_domManipulator_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', 'screen-cover', '');

    // Create button to go to current day tasks
    const dailyBtn = (0,_src_DOM_domManipulator_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('button', 'dly-btn', 'My Day', 'menu-btn');
    leftMenu.appendChild(dailyBtn);

    // Create button to go to current day tasks
    const allBtn = (0,_src_DOM_domManipulator_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('button', 'all-btn', 'All tasks', 'menu-btn');
    leftMenu.appendChild(allBtn);

    // Create button to go to current day tasks
    const listContainer = (0,_src_DOM_domManipulator_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', 'list-btn-container', '');
    leftMenu.appendChild(listContainer);
    const listsBtn = (0,_src_DOM_domManipulator_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('button', 'list-btn', 'My Lists', 'menu-btn');
    listContainer.appendChild(listsBtn);
    let isOpen = false;
    const listDiv = createListDiv();

    //--------------------------EventListeners --------------------------------------//
    // Expand button
    expandMenuButton.addEventListener('click',() => 
    {
        expandWithAni(document.body, leftMenu, 'slideRight');
        expandWithAni(document.body, screenCover, 'opIn');
        expandMenuButton.textContent = '';
    });

    // Animations
    screenCover.addEventListener('click', (e) => 
    {
        retractAnimation(leftMenu, 'slideLeft');
        retractAnimation(e.target, 'opOut');
    });
    retractMenuButton.addEventListener('click', () => 
    {
        retractAnimation(leftMenu, 'slideLeft');
        retractAnimation(screenCover, 'opOut');
    });

    // Extract after animation
    leftMenu.addEventListener('animationend', (e) =>
    {
        if(e.animationName === 'slideLeft')
        {
            removeAfterAni(document.body, e.target, 'slideLeft');
            removeAfterAni(document.body, screenCover, 'opOut');
            expandMenuButton.textContent = '☰';
        }
    });

    listsBtn.addEventListener('click', () => 
    {
        isOpen ? retractAnimation(listDiv, 'slideUp') : expandWithAni(listContainer, listDiv, 'slideDown');
        isOpen = !isOpen;
        console.log(isOpen);
    });
    listDiv.addEventListener('animationend', (e) => 
    {
        if(e.animationName === 'slideUp')
        {
            removeAfterAni(listContainer, e.target, 'slideUp');
        }
    } );
});

function expandWithAni(parent, element, ani)
{
    element.classList.toggle(ani);
    parent.appendChild(element);
}

function retractAnimation(element, ani)
{
    var classList = element.classList;
    while (classList.length > 0) {
       classList.remove(classList.item(0));
    }
    element.classList.add(ani);
}

function removeAfterAni(parent, element, ani)
{
    element.classList.remove(ani);
    parent.removeChild(element);
}

function createListDiv()
{
    const container = (0,_src_DOM_domManipulator_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('div','lists-container', '');
    for (let i = 0; i < 5; i++) 
    {
        const list = (0,_src_DOM_domManipulator_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('button', 'list-item' + i, 'List ' + i, 'listItem')
        container.appendChild(list);
    }
    return container;
}

/***/ }),

/***/ "./src/DOM lazy recursive ^\\.\\/.*$ include: \\.js$":
/*!*************************************************************************************!*\
  !*** ./src/DOM/ lazy ^\.\/.*$ include: \.js$ chunkName: [request] namespace object ***!
  \*************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./daily/daily": [
		"./src/DOM/daily/daily.js",
		"daily-daily"
	],
	"./daily/daily.js": [
		"./src/DOM/daily/daily.js",
		"daily-daily"
	],
	"./domManipulator": [
		"./src/DOM/domManipulator.js"
	],
	"./domManipulator.js": [
		"./src/DOM/domManipulator.js"
	],
	"./index": [
		"./src/DOM/index/index.js"
	],
	"./index/": [
		"./src/DOM/index/index.js"
	],
	"./index/index": [
		"./src/DOM/index/index.js"
	],
	"./index/index.js": [
		"./src/DOM/index/index.js"
	],
	"./main/main": [
		"./src/DOM/main/main.js"
	],
	"./main/main.js": [
		"./src/DOM/main/main.js"
	],
	"./menu/menu": [
		"./src/DOM/menu/menu.js"
	],
	"./menu/menu.js": [
		"./src/DOM/menu/menu.js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./src/DOM lazy recursive ^\\.\\/.*$ include: \\.js$";
module.exports = webpackAsyncContext;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
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
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "todo:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			};
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunktodo"] = self["webpackChunktodo"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/DOM/index/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bUcsWUFBWTtXQUMvRztXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsbUVBQW1FLGlDQUFpQztXQUNwRztXQUNBO1dBQ0E7V0FDQTs7Ozs7V0N4Q0E7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUM7O1dBRWpDO1dBQ0E7V0FDQTtXQUNBLEtBQUs7V0FDTCxlQUFlO1dBQ2Y7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNO1dBQ047V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1dDckZBOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9ET00vaW5kZXgvaW5kZXguY3NzIiwid2VicGFjazovL3RvZG8vLi9zcmMvRE9NL21haW4vbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9ET00vbWVudS9tZW51LmNzcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9ET00vaW5kZXgvaW5kZXguY3NzPzk2YWQiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9ET00vbWFpbi9tYWluLmNzcz9kMThjIiwid2VicGFjazovL3RvZG8vLi9zcmMvRE9NL21lbnUvbWVudS5jc3M/NjA2YyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvRE9NL2RvbU1hbmlwdWxhdG9yLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvRE9NL2luZGV4L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvRE9NL21haW4vbWFpbi5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL0RPTS9tZW51L21lbnUuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9ET00vIGxhenkgXlxcLlxcLy4qJCBpbmNsdWRlOiBcXC5qcyQgY2h1bmtOYW1lOiBbcmVxdWVzdF0gbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZW5zdXJlIGNodW5rIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2dldCBqYXZhc2NyaXB0IGNodW5rIGZpbGVuYW1lIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbG9hZCBzY3JpcHQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqXFxue1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5odG1sLCBib2R5XFxue1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYigxNDYsIDcyLCA3MikgMyUsIHJnYigzOCwgMTIxLCAxODApIDEwMCUpO1xcbiAgICBmb250LXNpemU6IDF2bWF4O1xcbn1cXG5idXR0b25cXG57XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL0RPTS9pbmRleC9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0lBRUksc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLGlCQUFpQjtBQUNyQjtBQUNBOztJQUVJLGFBQWE7SUFDYixZQUFZO0lBQ1osc0ZBQXNGO0lBQ3RGLGdCQUFnQjtBQUNwQjtBQUNBOztJQUVJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLDZCQUE2QjtJQUM3QixlQUFlO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIipcXG57XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcbmh0bWwsIGJvZHlcXG57XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiKDE0NiwgNzIsIDcyKSAzJSwgcmdiKDM4LCAxMjEsIDE4MCkgMTAwJSk7XFxuICAgIGZvbnQtc2l6ZTogMXZtYXg7XFxufVxcbmJ1dHRvblxcbntcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIjY29udGVudFxcbntcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcXG4gICAgXFxufVxcbiN3ZWxjb21lXFxue1xcbiAgICBmb250LXNpemU6IDEydm1pbjtcXG4gICAgYW5pbWF0aW9uOiBlbnRyYW5jZSAycyBjdWJpYy1iZXppZXIoMCwxLC4zLDEpO1xcbn1cXG4jd2VsY29tZTJcXG57XFxuICAgIGZvbnQtc2l6ZTogNHZtaW47XFxuICAgIGFuaW1hdGlvbjogZW50cmFuY2UyIDIuNXMgY3ViaWMtYmV6aWVyKDAsMSwuNSwxKTtcXG59XFxuI2dvLXRvLWRhaWx5XFxue1xcbiAgICBwYWRkaW5nOiAxdmggMHZ3O1xcbiAgICBmb250LXNpemU6IDN2bWluO1xcbiAgICBjb2xvcjogbGluZWFyLWdyYWRpZW50KDkwZGVnLCBibGFjayAwJSwgd2hpdGUgMTAwJSk7XFxuICAgIGFuaW1hdGlvbjogZW50cmFuY2UzIDJzIGN1YmljLWJlemllcigwLDEsLjUsMSk7XFxufVxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqQU5JTUFUSU9OUyoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG5cXG5Aa2V5ZnJhbWVzIGVudHJhbmNlXFxue1xcbiAgICAwJVxcbiAgICB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwMCUpO1xcbiAgICB9XFxuICAgIDEwMCVcXG4gICAge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcXG4gICAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGVudHJhbmNlMlxcbntcXG4gICAgMCVcXG4gICAge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMDAlKTtcXG4gICAgfVxcbiAgICAxMDAlXFxuICAgIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XFxuICAgIH1cXG59XFxuQGtleWZyYW1lcyBlbnRyYW5jZTNcXG57XFxuICAgIDAlXFxuICAgIHtcXG4gICAgICAgIG9wYWNpdHk6IDAlO1xcbiAgICB9XFxuICAgIDEwMCVcXG4gICAge1xcbiAgICAgICAgb3BhY2l0eTogMTAwJTtcXG4gICAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvRE9NL21haW4vbWFpbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0lBRUksWUFBWTtJQUNaLFdBQVc7SUFDWCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixrQkFBa0I7O0FBRXRCO0FBQ0E7O0lBRUksaUJBQWlCO0lBQ2pCLDZDQUE2QztBQUNqRDtBQUNBOztJQUVJLGdCQUFnQjtJQUNoQixnREFBZ0Q7QUFDcEQ7QUFDQTs7SUFFSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLG1EQUFtRDtJQUNuRCw4Q0FBOEM7QUFDbEQ7QUFDQSwrREFBK0Q7O0FBRS9EOztJQUVJOztRQUVJLDRCQUE0QjtJQUNoQztJQUNBOztRQUVJLHlCQUF5QjtJQUM3QjtBQUNKO0FBQ0E7O0lBRUk7O1FBRUksNEJBQTRCO0lBQ2hDO0lBQ0E7O1FBRUkseUJBQXlCO0lBQzdCO0FBQ0o7QUFDQTs7SUFFSTs7UUFFSSxXQUFXO0lBQ2Y7SUFDQTs7UUFFSSxhQUFhO0lBQ2pCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiI2NvbnRlbnRcXG57XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XFxuICAgIFxcbn1cXG4jd2VsY29tZVxcbntcXG4gICAgZm9udC1zaXplOiAxMnZtaW47XFxuICAgIGFuaW1hdGlvbjogZW50cmFuY2UgMnMgY3ViaWMtYmV6aWVyKDAsMSwuMywxKTtcXG59XFxuI3dlbGNvbWUyXFxue1xcbiAgICBmb250LXNpemU6IDR2bWluO1xcbiAgICBhbmltYXRpb246IGVudHJhbmNlMiAyLjVzIGN1YmljLWJlemllcigwLDEsLjUsMSk7XFxufVxcbiNnby10by1kYWlseVxcbntcXG4gICAgcGFkZGluZzogMXZoIDB2dztcXG4gICAgZm9udC1zaXplOiAzdm1pbjtcXG4gICAgY29sb3I6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgYmxhY2sgMCUsIHdoaXRlIDEwMCUpO1xcbiAgICBhbmltYXRpb246IGVudHJhbmNlMyAycyBjdWJpYy1iZXppZXIoMCwxLC41LDEpO1xcbn1cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKkFOSU1BVElPTlMqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuXFxuQGtleWZyYW1lcyBlbnRyYW5jZVxcbntcXG4gICAgMCVcXG4gICAge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MDAlKTtcXG4gICAgfVxcbiAgICAxMDAlXFxuICAgIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XFxuICAgIH1cXG59XFxuQGtleWZyYW1lcyBlbnRyYW5jZTJcXG57XFxuICAgIDAlXFxuICAgIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAwJSk7XFxuICAgIH1cXG4gICAgMTAwJVxcbiAgICB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xcbiAgICB9XFxufVxcbkBrZXlmcmFtZXMgZW50cmFuY2UzXFxue1xcbiAgICAwJVxcbiAgICB7XFxuICAgICAgICBvcGFjaXR5OiAwJTtcXG4gICAgfVxcbiAgICAxMDAlXFxuICAgIHtcXG4gICAgICAgIG9wYWNpdHk6IDEwMCU7XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tSGVhZGVyLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG4jZXhwYW5kLW1lbnUtYnRuXFxue1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAxdmggMXZ3O1xcbiAgZm9udC1zaXplOiA0dm1pbjtcXG59XFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tU2xpZGluZyBNZW51LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG4jbGVmdC1tZW51XFxue1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gICAgdG9wOiAwJTtcXG4gICAgbGVmdDogMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB3aWR0aDogMTJ2dztcXG4gICAgei1pbmRleDogOTk5O1xcbiAgICBib3gtc2hhZG93OiAwIDNweCA1cHggYmxhY2s7XFxufVxcbiN0b3AtZGl2LWxlZnQtbWVudVxcbntcXG4gICAgaGVpZ2h0OiA2dmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZ2FwOiAxdnc7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAgMXZ3O1xcbn1cXG4jcmV0cmFjdC1tZW51LWJ0blxcbntcXG4gICAgZm9udC1zaXplOiAzdm1pbjtcXG59XFxuI25hbWUtbWVudVxcbntcXG4gICAgZm9udC1zaXplOiAydm1pbjtcXG59XFxuI2xpc3QtYnRuLWNvbnRhaW5lclxcbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYm9yZGVyLWJvdHRvbTogLjA1dmggc29saWQgcmdiYSgwLCAwLCAwLCAwLjUpO1xcbn1cXG4jbGlzdHMtY29udGFpbmVyXFxue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgICBmb250LXNpemU6IDEuNXZtaW47XFxufVxcbi5saXN0SXRlbVxcbntcXG4gICAgYm9yZGVyLXRvcDogLjA1dmggc29saWQgcmdiYSgwLCAwLCAwKTtcXG4gICAgYm9yZGVyLWJvdHRvbTogLjA1dmggc29saWQgcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgICBwYWRkaW5nOiAxdmggMHZ3O1xcbn1cXG4ubWVudS1idG5cXG57XFxuICAgIGJvcmRlci10b3A6IC4xdmggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcbiAgICBib3JkZXItYm90dG9tOiAuMXZoIHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG4gICAgcGFkZGluZzogMS41dmggMHZ3O1xcbiAgICBmb250LXNpemU6IDIuNXZtaW47XFxufVxcbiNzY3JlZW4tY292ZXJcXG57XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICB6LWluZGV4OiA5OTtcXG4gICAgb3BhY2l0eTogMzAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuLyogQW5pbWF0aW9ucyAqL1xcbi5zbGlkZVJpZ2h0XFxue1xcbiAgICBhbmltYXRpb246IHNsaWRlUmlnaHQgLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5Aa2V5ZnJhbWVzIHNsaWRlUmlnaHRcXG57XFxuICAgIDAlXFxuICAgIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XFxuICAgIH1cXG4gICAgMTAwJVxcbiAgICB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xcbiAgICB9XFxufVxcbi5zbGlkZUxlZnRcXG57XFxuICAgIGFuaW1hdGlvbjogc2xpZGVMZWZ0IC4ycyBlYXNlLWluLW91dDtcXG59XFxuQGtleWZyYW1lcyBzbGlkZUxlZnRcXG57XFxuICAgIDAlXFxuICAgIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XFxuICAgIH1cXG4gICAgMTAwJVxcbiAgICB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xcbiAgICB9XFxufSBcXG4uc2xpZGVEb3duXFxue1xcbiAgICBhbmltYXRpb246IHNsaWRlRG93biAuMnMgZWFzZS1pbjtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIGNlbnRlcjtcXG59XFxuQGtleWZyYW1lcyBzbGlkZURvd25cXG57XFxuICAgIDAlXFxuICAgIHtcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCg5MGRlZyk7XFxuICAgIH1cXG4gICAgMTAwJVxcbiAgICB7XFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XFxuICAgIH1cXG59IFxcbi5zbGlkZVVwXFxue1xcbiAgICBhbmltYXRpb246IHNsaWRlVXAgLjJzIGVhc2UtaW47XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcCBjZW50ZXI7XFxufVxcbkBrZXlmcmFtZXMgc2xpZGVVcFxcbntcXG4gICAgMCVcXG4gICAge1xcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xcbiAgICB9XFxuICAgIDEwMCVcXG4gICAge1xcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKDkwZGVnKTtcXG4gICAgfVxcbn0gXFxuLm9wSW5cXG57XFxuICAgIGFuaW1hdGlvbjogb3BJbiAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcbkBrZXlmcmFtZXMgb3BJbiBcXG57XFxuICAgIDAlIFxcbiAgICB7XFxuICAgICAgICBvcGFjaXR5OiAwJTtcXG4gICAgfVxcbiAgICAxMDAlXFxuICAgIHtcXG4gICAgICAgIG9wYWNpdHk6IDMwJTtcXG4gICAgfVxcbn1cXG4ub3BPdXRcXG57XFxuICAgIGFuaW1hdGlvbjogb3BPdXQgLjJzIGVhc2UtaW4tb3V0O1xcblxcbn1cXG5Aa2V5ZnJhbWVzIG9wT3V0XFxue1xcbiAgICAwJSBcXG4gICAge1xcbiAgICAgICAgb3BhY2l0eTogMzAlO1xcbiAgICB9XFxuICAgIDEwMCVcXG4gICAge1xcbiAgICAgICAgb3BhY2l0eTogMCU7XFxuICAgIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL0RPTS9tZW51L21lbnUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLG1FQUFtRTtBQUNuRTs7RUFFRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCO0FBQ0EseUVBQXlFO0FBQ3pFOztJQUVJLGVBQWU7SUFDZixhQUFhO0lBQ2Isb0NBQW9DO0lBQ3BDLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0Isb0JBQW9CO0lBQ3BCLE9BQU87SUFDUCxRQUFRO0lBQ1IsWUFBWTtJQUNaLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtJQUNaLDJCQUEyQjtBQUMvQjtBQUNBOztJQUVJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixRQUFRO0lBQ1IsbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7QUFDQTs7SUFFSSxnQkFBZ0I7QUFDcEI7QUFDQTs7SUFFSSxnQkFBZ0I7QUFDcEI7QUFDQTs7SUFFSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG9CQUFvQjtJQUNwQiwyQkFBMkI7SUFDM0IsNkNBQTZDO0FBQ2pEO0FBQ0E7O0lBRUksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0Isb0JBQW9CO0lBQ3BCLGtCQUFrQjtBQUN0QjtBQUNBOztJQUVJLHFDQUFxQztJQUNyQyw2Q0FBNkM7SUFDN0MsZ0JBQWdCO0FBQ3BCO0FBQ0E7O0lBRUksK0NBQStDO0lBQy9DLGtEQUFrRDtJQUNsRCxrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCO0FBQ0E7O0lBRUksY0FBYztJQUNkLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLGFBQWE7SUFDYixZQUFZO0lBQ1osV0FBVztJQUNYLFlBQVk7SUFDWix1QkFBdUI7QUFDM0I7O0FBRUEsZUFBZTtBQUNmOztJQUVJLHFDQUFxQztBQUN6QztBQUNBOztJQUVJOztRQUVJLDRCQUE0QjtJQUNoQztJQUNBOztRQUVJLHlCQUF5QjtJQUM3QjtBQUNKO0FBQ0E7O0lBRUksb0NBQW9DO0FBQ3hDO0FBQ0E7O0lBRUk7O1FBRUkseUJBQXlCO0lBQzdCO0lBQ0E7O1FBRUksNEJBQTRCO0lBQ2hDO0FBQ0o7QUFDQTs7SUFFSSxnQ0FBZ0M7SUFDaEMsNEJBQTRCO0FBQ2hDO0FBQ0E7O0lBRUk7O1FBRUkseUJBQXlCO0lBQzdCO0lBQ0E7O1FBRUksd0JBQXdCO0lBQzVCO0FBQ0o7QUFDQTs7SUFFSSw4QkFBOEI7SUFDOUIsNEJBQTRCO0FBQ2hDO0FBQ0E7O0lBRUk7O1FBRUksd0JBQXdCO0lBQzVCO0lBQ0E7O1FBRUkseUJBQXlCO0lBQzdCO0FBQ0o7QUFDQTs7SUFFSSwrQkFBK0I7QUFDbkM7QUFDQTs7SUFFSTs7UUFFSSxXQUFXO0lBQ2Y7SUFDQTs7UUFFSSxZQUFZO0lBQ2hCO0FBQ0o7QUFDQTs7SUFFSSxnQ0FBZ0M7O0FBRXBDO0FBQ0E7O0lBRUk7O1FBRUksWUFBWTtJQUNoQjtJQUNBOztRQUVJLFdBQVc7SUFDZjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUhlYWRlci0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuI2V4cGFuZC1tZW51LWJ0blxcbntcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMXZoIDF2dztcXG4gIGZvbnQtc2l6ZTogNHZtaW47XFxufVxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVNsaWRpbmcgTWVudS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuI2xlZnQtbWVudVxcbntcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICAgIHRvcDogMCU7XFxuICAgIGxlZnQ6IDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgd2lkdGg6IDEydnc7XFxuICAgIHotaW5kZXg6IDk5OTtcXG4gICAgYm94LXNoYWRvdzogMCAzcHggNXB4IGJsYWNrO1xcbn1cXG4jdG9wLWRpdi1sZWZ0LW1lbnVcXG57XFxuICAgIGhlaWdodDogNnZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGdhcDogMXZ3O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwIDF2dztcXG59XFxuI3JldHJhY3QtbWVudS1idG5cXG57XFxuICAgIGZvbnQtc2l6ZTogM3ZtaW47XFxufVxcbiNuYW1lLW1lbnVcXG57XFxuICAgIGZvbnQtc2l6ZTogMnZtaW47XFxufVxcbiNsaXN0LWJ0bi1jb250YWluZXJcXG57XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGJvcmRlci1ib3R0b206IC4wNXZoIHNvbGlkIHJnYmEoMCwgMCwgMCwgMC41KTtcXG59XFxuI2xpc3RzLWNvbnRhaW5lclxcbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gICAgZm9udC1zaXplOiAxLjV2bWluO1xcbn1cXG4ubGlzdEl0ZW1cXG57XFxuICAgIGJvcmRlci10b3A6IC4wNXZoIHNvbGlkIHJnYmEoMCwgMCwgMCk7XFxuICAgIGJvcmRlci1ib3R0b206IC4wNXZoIHNvbGlkIHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gICAgcGFkZGluZzogMXZoIDB2dztcXG59XFxuLm1lbnUtYnRuXFxue1xcbiAgICBib3JkZXItdG9wOiAuMXZoIHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG4gICAgYm9yZGVyLWJvdHRvbTogLjF2aCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxuICAgIHBhZGRpbmc6IDEuNXZoIDB2dztcXG4gICAgZm9udC1zaXplOiAyLjV2bWluO1xcbn1cXG4jc2NyZWVuLWNvdmVyXFxue1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgei1pbmRleDogOTk7XFxuICAgIG9wYWNpdHk6IDMwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi8qIEFuaW1hdGlvbnMgKi9cXG4uc2xpZGVSaWdodFxcbntcXG4gICAgYW5pbWF0aW9uOiBzbGlkZVJpZ2h0IC4ycyBlYXNlLWluLW91dDtcXG59XFxuQGtleWZyYW1lcyBzbGlkZVJpZ2h0XFxue1xcbiAgICAwJVxcbiAgICB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xcbiAgICB9XFxuICAgIDEwMCVcXG4gICAge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcXG4gICAgfVxcbn1cXG4uc2xpZGVMZWZ0XFxue1xcbiAgICBhbmltYXRpb246IHNsaWRlTGVmdCAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcbkBrZXlmcmFtZXMgc2xpZGVMZWZ0XFxue1xcbiAgICAwJVxcbiAgICB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xcbiAgICB9XFxuICAgIDEwMCVcXG4gICAge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcXG4gICAgfVxcbn0gXFxuLnNsaWRlRG93blxcbntcXG4gICAgYW5pbWF0aW9uOiBzbGlkZURvd24gLjJzIGVhc2UtaW47XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcCBjZW50ZXI7XFxufVxcbkBrZXlmcmFtZXMgc2xpZGVEb3duXFxue1xcbiAgICAwJVxcbiAgICB7XFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoOTBkZWcpO1xcbiAgICB9XFxuICAgIDEwMCVcXG4gICAge1xcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xcbiAgICB9XFxufSBcXG4uc2xpZGVVcFxcbntcXG4gICAgYW5pbWF0aW9uOiBzbGlkZVVwIC4ycyBlYXNlLWluO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgY2VudGVyO1xcbn1cXG5Aa2V5ZnJhbWVzIHNsaWRlVXBcXG57XFxuICAgIDAlXFxuICAgIHtcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTtcXG4gICAgfVxcbiAgICAxMDAlXFxuICAgIHtcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCg5MGRlZyk7XFxuICAgIH1cXG59IFxcbi5vcEluXFxue1xcbiAgICBhbmltYXRpb246IG9wSW4gLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5Aa2V5ZnJhbWVzIG9wSW4gXFxue1xcbiAgICAwJSBcXG4gICAge1xcbiAgICAgICAgb3BhY2l0eTogMCU7XFxuICAgIH1cXG4gICAgMTAwJVxcbiAgICB7XFxuICAgICAgICBvcGFjaXR5OiAzMCU7XFxuICAgIH1cXG59XFxuLm9wT3V0XFxue1xcbiAgICBhbmltYXRpb246IG9wT3V0IC4ycyBlYXNlLWluLW91dDtcXG5cXG59XFxuQGtleWZyYW1lcyBvcE91dFxcbntcXG4gICAgMCUgXFxuICAgIHtcXG4gICAgICAgIG9wYWNpdHk6IDMwJTtcXG4gICAgfVxcbiAgICAxMDAlXFxuICAgIHtcXG4gICAgICAgIG9wYWNpdHk6IDAlO1xcbiAgICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tZW51LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWVudS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQoZVR5cGUsIGlkLCB0ZXh0Q29udGVudCwgY2xhc3NOYW1lID0gZmFsc2UpIFxue1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVUeXBlKTtcbiAgICBlbGVtZW50LnRleHRDb250ZW50ID0gdGV4dENvbnRlbnQ7XG4gICAgZWxlbWVudC5pZCA9IGlkO1xuICAgIGlmKGNsYXNzTmFtZSlcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIHRhYlN3aXRjaChuYW1lKVxue1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIHdoaWxlIChjb250ZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBpbXBvcnQoXG4gICAgICAgIC8qd2VicGFja0NodW5rTmFtZTogXCJbcmVxdWVzdF1cIiovIFxuICAgIC8qIHdlYnBhY2tJbmNsdWRlOiAvXFwuanMkLyovXG4gICAgYC4vJHtuYW1lfWApLnRoZW4oKHsgZGVmYXVsdDogbG9hZFRhYn0pPT57bG9hZFRhYigpfSk7XG59XG4iLCJpbXBvcnQgJy4vaW5kZXguY3NzJ1xuaW1wb3J0IGxvYWRNZW51IGZyb20gJy9zcmMvRE9NL21lbnUvbWVudS5qcyc7XG5pbXBvcnQgbG9hZE1haW4gZnJvbSAnL3NyYy9ET00vbWFpbi9tYWluLmpzJztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zb2xlLmxvZygnTG9va3MgbGlrZSB3ZSBhcmUgaW4gZGV2ZWxvcG1lbnQgbW9kZSEnKTtcbiAgfVxuXG5sb2FkTWVudSgpO1xubG9hZE1haW4oKTsiLCJpbXBvcnQgJy4vbWFpbi5jc3MnO1xuaW1wb3J0IHsgdGFiU3dpdGNoLCBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi4vZG9tTWFuaXB1bGF0b3InO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9Plxue1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIGNvbnN0IHdlbGNvbWUgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnd2VsY29tZScsICdXZWxjb21lIHRvIFRvRG8nKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHdlbGNvbWUpO1xuICAgIGNvbnN0IHdlbGNvbWUyID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ3dlbGNvbWUyJywgJ1lvdXIgU291cmNlIG9mIFByb2R1Y3Rpdml0eS4nKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHdlbGNvbWUyKTtcbiAgICBjb25zdCBidXR0b24gPSBjcmVhdGVFbGVtZW50KCdidXR0b24nLCAnZ28tdG8tZGFpbHknLCAnR28gdG8gZGFpbHkgdGFza3Mg4oaSJyk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChidXR0b24pO1xuXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgICgpID0+IHsgdGFiU3dpdGNoKCdkYWlseScpIH0pO1xufSIsImltcG9ydCAnLi9tZW51LmNzcyc7XG5pbXBvcnQge2NyZWF0ZUVsZW1lbnR9IGZyb20gJy9zcmMvRE9NL2RvbU1hbmlwdWxhdG9yLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT5cbntcbiAgICAvLyBDcmVhdGUgTWVudSBleHBlbmRpbmcgYnV0dG9uXG4gICAgY29uc3QgZXhwYW5kTWVudUJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsICdleHBhbmQtbWVudS1idG4nLCAn4piwJyk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChleHBhbmRNZW51QnV0dG9uKTtcblxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1DcmVhdGUgbGVmdCBtZW51IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cbiAgICBjb25zdCBsZWZ0TWVudSA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdsZWZ0LW1lbnUnLCcnLCAnJyk7XG5cbiAgICAvLyBIb3Jpem9udGFsIGRpdiBmb3IgbWVudSBidXR0b24gYW5kIG5hbWVcbiAgICBjb25zdCB0b3BEaXZMZWZ0TWVudSA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICd0b3AtZGl2LWxlZnQtbWVudScsJycpO1xuICAgIGxlZnRNZW51LmFwcGVuZENoaWxkKHRvcERpdkxlZnRNZW51KTtcblxuICAgIC8vIE1lbnUgcmV0cmFjdCBidXR0b25cbiAgICBjb25zdCByZXRyYWN0TWVudUJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsICdyZXRyYWN0LW1lbnUtYnRuJywgJ+KYsCcpO1xuICAgIHRvcERpdkxlZnRNZW51LmFwcGVuZENoaWxkKHJldHJhY3RNZW51QnV0dG9uKTtcblxuICAgIC8vIE5hbWUgb2Ygc2l0ZVxuICAgIGNvbnN0IGNyZWRpdCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICduYW1lLW1lbnUnLCAnwqlTaGF5IFNoYWhhbCcpO1xuICAgIHRvcERpdkxlZnRNZW51LmFwcGVuZENoaWxkKGNyZWRpdCk7XG5cbiAgICAvLyBDcmVhdGUgc2NyZWVuIGNvdmVyIGZvciByZXN0IG9mIG1haW4gc2NyZWVuIHdoZW4gbWVudSBpcyBvcGVuXG4gICAgY29uc3Qgc2NyZWVuQ292ZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnc2NyZWVuLWNvdmVyJywgJycpO1xuXG4gICAgLy8gQ3JlYXRlIGJ1dHRvbiB0byBnbyB0byBjdXJyZW50IGRheSB0YXNrc1xuICAgIGNvbnN0IGRhaWx5QnRuID0gY3JlYXRlRWxlbWVudCgnYnV0dG9uJywgJ2RseS1idG4nLCAnTXkgRGF5JywgJ21lbnUtYnRuJyk7XG4gICAgbGVmdE1lbnUuYXBwZW5kQ2hpbGQoZGFpbHlCdG4pO1xuXG4gICAgLy8gQ3JlYXRlIGJ1dHRvbiB0byBnbyB0byBjdXJyZW50IGRheSB0YXNrc1xuICAgIGNvbnN0IGFsbEJ0biA9IGNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsICdhbGwtYnRuJywgJ0FsbCB0YXNrcycsICdtZW51LWJ0bicpO1xuICAgIGxlZnRNZW51LmFwcGVuZENoaWxkKGFsbEJ0bik7XG5cbiAgICAvLyBDcmVhdGUgYnV0dG9uIHRvIGdvIHRvIGN1cnJlbnQgZGF5IHRhc2tzXG4gICAgY29uc3QgbGlzdENvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdsaXN0LWJ0bi1jb250YWluZXInLCAnJyk7XG4gICAgbGVmdE1lbnUuYXBwZW5kQ2hpbGQobGlzdENvbnRhaW5lcik7XG4gICAgY29uc3QgbGlzdHNCdG4gPSBjcmVhdGVFbGVtZW50KCdidXR0b24nLCAnbGlzdC1idG4nLCAnTXkgTGlzdHMnLCAnbWVudS1idG4nKTtcbiAgICBsaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3RzQnRuKTtcbiAgICBsZXQgaXNPcGVuID0gZmFsc2U7XG4gICAgY29uc3QgbGlzdERpdiA9IGNyZWF0ZUxpc3REaXYoKTtcblxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1FdmVudExpc3RlbmVycyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG4gICAgLy8gRXhwYW5kIGJ1dHRvblxuICAgIGV4cGFuZE1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpID0+IFxuICAgIHtcbiAgICAgICAgZXhwYW5kV2l0aEFuaShkb2N1bWVudC5ib2R5LCBsZWZ0TWVudSwgJ3NsaWRlUmlnaHQnKTtcbiAgICAgICAgZXhwYW5kV2l0aEFuaShkb2N1bWVudC5ib2R5LCBzY3JlZW5Db3ZlciwgJ29wSW4nKTtcbiAgICAgICAgZXhwYW5kTWVudUJ1dHRvbi50ZXh0Q29udGVudCA9ICcnO1xuICAgIH0pO1xuXG4gICAgLy8gQW5pbWF0aW9uc1xuICAgIHNjcmVlbkNvdmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IFxuICAgIHtcbiAgICAgICAgcmV0cmFjdEFuaW1hdGlvbihsZWZ0TWVudSwgJ3NsaWRlTGVmdCcpO1xuICAgICAgICByZXRyYWN0QW5pbWF0aW9uKGUudGFyZ2V0LCAnb3BPdXQnKTtcbiAgICB9KTtcbiAgICByZXRyYWN0TWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IFxuICAgIHtcbiAgICAgICAgcmV0cmFjdEFuaW1hdGlvbihsZWZ0TWVudSwgJ3NsaWRlTGVmdCcpO1xuICAgICAgICByZXRyYWN0QW5pbWF0aW9uKHNjcmVlbkNvdmVyLCAnb3BPdXQnKTtcbiAgICB9KTtcblxuICAgIC8vIEV4dHJhY3QgYWZ0ZXIgYW5pbWF0aW9uXG4gICAgbGVmdE1lbnUuYWRkRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgKGUpID0+XG4gICAge1xuICAgICAgICBpZihlLmFuaW1hdGlvbk5hbWUgPT09ICdzbGlkZUxlZnQnKVxuICAgICAgICB7XG4gICAgICAgICAgICByZW1vdmVBZnRlckFuaShkb2N1bWVudC5ib2R5LCBlLnRhcmdldCwgJ3NsaWRlTGVmdCcpO1xuICAgICAgICAgICAgcmVtb3ZlQWZ0ZXJBbmkoZG9jdW1lbnQuYm9keSwgc2NyZWVuQ292ZXIsICdvcE91dCcpO1xuICAgICAgICAgICAgZXhwYW5kTWVudUJ1dHRvbi50ZXh0Q29udGVudCA9ICfimLAnO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBsaXN0c0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IFxuICAgIHtcbiAgICAgICAgaXNPcGVuID8gcmV0cmFjdEFuaW1hdGlvbihsaXN0RGl2LCAnc2xpZGVVcCcpIDogZXhwYW5kV2l0aEFuaShsaXN0Q29udGFpbmVyLCBsaXN0RGl2LCAnc2xpZGVEb3duJyk7XG4gICAgICAgIGlzT3BlbiA9ICFpc09wZW47XG4gICAgICAgIGNvbnNvbGUubG9nKGlzT3Blbik7XG4gICAgfSk7XG4gICAgbGlzdERpdi5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCAoZSkgPT4gXG4gICAge1xuICAgICAgICBpZihlLmFuaW1hdGlvbk5hbWUgPT09ICdzbGlkZVVwJylcbiAgICAgICAge1xuICAgICAgICAgICAgcmVtb3ZlQWZ0ZXJBbmkobGlzdENvbnRhaW5lciwgZS50YXJnZXQsICdzbGlkZVVwJyk7XG4gICAgICAgIH1cbiAgICB9ICk7XG59XG5cbmZ1bmN0aW9uIGV4cGFuZFdpdGhBbmkocGFyZW50LCBlbGVtZW50LCBhbmkpXG57XG4gICAgZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKGFuaSk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiByZXRyYWN0QW5pbWF0aW9uKGVsZW1lbnQsIGFuaSlcbntcbiAgICB2YXIgY2xhc3NMaXN0ID0gZWxlbWVudC5jbGFzc0xpc3Q7XG4gICAgd2hpbGUgKGNsYXNzTGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICAgY2xhc3NMaXN0LnJlbW92ZShjbGFzc0xpc3QuaXRlbSgwKSk7XG4gICAgfVxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChhbmkpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVBZnRlckFuaShwYXJlbnQsIGVsZW1lbnQsIGFuaSlcbntcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoYW5pKTtcbiAgICBwYXJlbnQucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpc3REaXYoKVxue1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsJ2xpc3RzLWNvbnRhaW5lcicsICcnKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykgXG4gICAge1xuICAgICAgICBjb25zdCBsaXN0ID0gY3JlYXRlRWxlbWVudCgnYnV0dG9uJywgJ2xpc3QtaXRlbScgKyBpLCAnTGlzdCAnICsgaSwgJ2xpc3RJdGVtJylcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3QpO1xuICAgIH1cbiAgICByZXR1cm4gY29udGFpbmVyO1xufSIsInZhciBtYXAgPSB7XG5cdFwiLi9kYWlseS9kYWlseVwiOiBbXG5cdFx0XCIuL3NyYy9ET00vZGFpbHkvZGFpbHkuanNcIixcblx0XHRcImRhaWx5LWRhaWx5XCJcblx0XSxcblx0XCIuL2RhaWx5L2RhaWx5LmpzXCI6IFtcblx0XHRcIi4vc3JjL0RPTS9kYWlseS9kYWlseS5qc1wiLFxuXHRcdFwiZGFpbHktZGFpbHlcIlxuXHRdLFxuXHRcIi4vZG9tTWFuaXB1bGF0b3JcIjogW1xuXHRcdFwiLi9zcmMvRE9NL2RvbU1hbmlwdWxhdG9yLmpzXCJcblx0XSxcblx0XCIuL2RvbU1hbmlwdWxhdG9yLmpzXCI6IFtcblx0XHRcIi4vc3JjL0RPTS9kb21NYW5pcHVsYXRvci5qc1wiXG5cdF0sXG5cdFwiLi9pbmRleFwiOiBbXG5cdFx0XCIuL3NyYy9ET00vaW5kZXgvaW5kZXguanNcIlxuXHRdLFxuXHRcIi4vaW5kZXgvXCI6IFtcblx0XHRcIi4vc3JjL0RPTS9pbmRleC9pbmRleC5qc1wiXG5cdF0sXG5cdFwiLi9pbmRleC9pbmRleFwiOiBbXG5cdFx0XCIuL3NyYy9ET00vaW5kZXgvaW5kZXguanNcIlxuXHRdLFxuXHRcIi4vaW5kZXgvaW5kZXguanNcIjogW1xuXHRcdFwiLi9zcmMvRE9NL2luZGV4L2luZGV4LmpzXCJcblx0XSxcblx0XCIuL21haW4vbWFpblwiOiBbXG5cdFx0XCIuL3NyYy9ET00vbWFpbi9tYWluLmpzXCJcblx0XSxcblx0XCIuL21haW4vbWFpbi5qc1wiOiBbXG5cdFx0XCIuL3NyYy9ET00vbWFpbi9tYWluLmpzXCJcblx0XSxcblx0XCIuL21lbnUvbWVudVwiOiBbXG5cdFx0XCIuL3NyYy9ET00vbWVudS9tZW51LmpzXCJcblx0XSxcblx0XCIuL21lbnUvbWVudS5qc1wiOiBbXG5cdFx0XCIuL3NyYy9ET00vbWVudS9tZW51LmpzXCJcblx0XVxufTtcbmZ1bmN0aW9uIHdlYnBhY2tBc3luY0NvbnRleHQocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuXHRcdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdFx0dGhyb3cgZTtcblx0XHR9KTtcblx0fVxuXG5cdHZhciBpZHMgPSBtYXBbcmVxXSwgaWQgPSBpZHNbMF07XG5cdHJldHVybiBQcm9taXNlLmFsbChpZHMuc2xpY2UoMSkubWFwKF9fd2VicGFja19yZXF1aXJlX18uZSkpLnRoZW4oKCkgPT4ge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcblx0fSk7XG59XG53ZWJwYWNrQXN5bmNDb250ZXh0LmtleXMgPSAoKSA9PiAoT2JqZWN0LmtleXMobWFwKSk7XG53ZWJwYWNrQXN5bmNDb250ZXh0LmlkID0gXCIuL3NyYy9ET00gbGF6eSByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKiQgaW5jbHVkZTogXFxcXC5qcyRcIjtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0FzeW5jQ29udGV4dDsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5mID0ge307XG4vLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4vLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18uZSA9IChjaHVua0lkKSA9PiB7XG5cdHJldHVybiBQcm9taXNlLmFsbChPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLmYpLnJlZHVjZSgocHJvbWlzZXMsIGtleSkgPT4ge1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18uZltrZXldKGNodW5rSWQsIHByb21pc2VzKTtcblx0XHRyZXR1cm4gcHJvbWlzZXM7XG5cdH0sIFtdKSk7XG59OyIsIi8vIFRoaXMgZnVuY3Rpb24gYWxsb3cgdG8gcmVmZXJlbmNlIGFzeW5jIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy51ID0gKGNodW5rSWQpID0+IHtcblx0Ly8gcmV0dXJuIHVybCBmb3IgZmlsZW5hbWVzIGJhc2VkIG9uIHRlbXBsYXRlXG5cdHJldHVybiBcIlwiICsgY2h1bmtJZCArIFwiLmpzXCI7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsInZhciBpblByb2dyZXNzID0ge307XG52YXIgZGF0YVdlYnBhY2tQcmVmaXggPSBcInRvZG86XCI7XG4vLyBsb2FkU2NyaXB0IGZ1bmN0aW9uIHRvIGxvYWQgYSBzY3JpcHQgdmlhIHNjcmlwdCB0YWdcbl9fd2VicGFja19yZXF1aXJlX18ubCA9ICh1cmwsIGRvbmUsIGtleSwgY2h1bmtJZCkgPT4ge1xuXHRpZihpblByb2dyZXNzW3VybF0pIHsgaW5Qcm9ncmVzc1t1cmxdLnB1c2goZG9uZSk7IHJldHVybjsgfVxuXHR2YXIgc2NyaXB0LCBuZWVkQXR0YWNoO1xuXHRpZihrZXkgIT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHNjcmlwdHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBzID0gc2NyaXB0c1tpXTtcblx0XHRcdGlmKHMuZ2V0QXR0cmlidXRlKFwic3JjXCIpID09IHVybCB8fCBzLmdldEF0dHJpYnV0ZShcImRhdGEtd2VicGFja1wiKSA9PSBkYXRhV2VicGFja1ByZWZpeCArIGtleSkgeyBzY3JpcHQgPSBzOyBicmVhazsgfVxuXHRcdH1cblx0fVxuXHRpZighc2NyaXB0KSB7XG5cdFx0bmVlZEF0dGFjaCA9IHRydWU7XG5cdFx0c2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG5cblx0XHRzY3JpcHQuY2hhcnNldCA9ICd1dGYtOCc7XG5cdFx0c2NyaXB0LnRpbWVvdXQgPSAxMjA7XG5cdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubmMpIHtcblx0XHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKTtcblx0XHR9XG5cdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcImRhdGEtd2VicGFja1wiLCBkYXRhV2VicGFja1ByZWZpeCArIGtleSk7XG5cdFx0c2NyaXB0LnNyYyA9IHVybDtcblx0fVxuXHRpblByb2dyZXNzW3VybF0gPSBbZG9uZV07XG5cdHZhciBvblNjcmlwdENvbXBsZXRlID0gKHByZXYsIGV2ZW50KSA9PiB7XG5cdFx0Ly8gYXZvaWQgbWVtIGxlYWtzIGluIElFLlxuXHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG51bGw7XG5cdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuXHRcdHZhciBkb25lRm5zID0gaW5Qcm9ncmVzc1t1cmxdO1xuXHRcdGRlbGV0ZSBpblByb2dyZXNzW3VybF07XG5cdFx0c2NyaXB0LnBhcmVudE5vZGUgJiYgc2NyaXB0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcblx0XHRkb25lRm5zICYmIGRvbmVGbnMuZm9yRWFjaCgoZm4pID0+IChmbihldmVudCkpKTtcblx0XHRpZihwcmV2KSByZXR1cm4gcHJldihldmVudCk7XG5cdH07XG5cdHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgdW5kZWZpbmVkLCB7IHR5cGU6ICd0aW1lb3V0JywgdGFyZ2V0OiBzY3JpcHQgfSksIDEyMDAwMCk7XG5cdHNjcmlwdC5vbmVycm9yID0gb25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHNjcmlwdC5vbmVycm9yKTtcblx0c2NyaXB0Lm9ubG9hZCA9IG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCBzY3JpcHQub25sb2FkKTtcblx0bmVlZEF0dGFjaCAmJiBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG59OyIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmYuaiA9IChjaHVua0lkLCBwcm9taXNlcykgPT4ge1xuXHRcdC8vIEpTT05QIGNodW5rIGxvYWRpbmcgZm9yIGphdmFzY3JpcHRcblx0XHR2YXIgaW5zdGFsbGVkQ2h1bmtEYXRhID0gX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgPyBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gOiB1bmRlZmluZWQ7XG5cdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhICE9PSAwKSB7IC8vIDAgbWVhbnMgXCJhbHJlYWR5IGluc3RhbGxlZFwiLlxuXG5cdFx0XHQvLyBhIFByb21pc2UgbWVhbnMgXCJjdXJyZW50bHkgbG9hZGluZ1wiLlxuXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhKSB7XG5cdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmKHRydWUpIHsgLy8gYWxsIGNodW5rcyBoYXZlIEpTXG5cdFx0XHRcdFx0Ly8gc2V0dXAgUHJvbWlzZSBpbiBjaHVuayBjYWNoZVxuXHRcdFx0XHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4gKGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IFtyZXNvbHZlLCByZWplY3RdKSk7XG5cdFx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0gPSBwcm9taXNlKTtcblxuXHRcdFx0XHRcdC8vIHN0YXJ0IGNodW5rIGxvYWRpbmdcblx0XHRcdFx0XHR2YXIgdXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgX193ZWJwYWNrX3JlcXVpcmVfXy51KGNodW5rSWQpO1xuXHRcdFx0XHRcdC8vIGNyZWF0ZSBlcnJvciBiZWZvcmUgc3RhY2sgdW53b3VuZCB0byBnZXQgdXNlZnVsIHN0YWNrdHJhY2UgbGF0ZXJcblx0XHRcdFx0XHR2YXIgZXJyb3IgPSBuZXcgRXJyb3IoKTtcblx0XHRcdFx0XHR2YXIgbG9hZGluZ0VuZGVkID0gKGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSkge1xuXHRcdFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG5cdFx0XHRcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSAhPT0gMCkgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gdW5kZWZpbmVkO1xuXHRcdFx0XHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEpIHtcblx0XHRcdFx0XHRcdFx0XHR2YXIgZXJyb3JUeXBlID0gZXZlbnQgJiYgKGV2ZW50LnR5cGUgPT09ICdsb2FkJyA/ICdtaXNzaW5nJyA6IGV2ZW50LnR5cGUpO1xuXHRcdFx0XHRcdFx0XHRcdHZhciByZWFsU3JjID0gZXZlbnQgJiYgZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5zcmM7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IubWVzc2FnZSA9ICdMb2FkaW5nIGNodW5rICcgKyBjaHVua0lkICsgJyBmYWlsZWQuXFxuKCcgKyBlcnJvclR5cGUgKyAnOiAnICsgcmVhbFNyYyArICcpJztcblx0XHRcdFx0XHRcdFx0XHRlcnJvci5uYW1lID0gJ0NodW5rTG9hZEVycm9yJztcblx0XHRcdFx0XHRcdFx0XHRlcnJvci50eXBlID0gZXJyb3JUeXBlO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLnJlcXVlc3QgPSByZWFsU3JjO1xuXHRcdFx0XHRcdFx0XHRcdGluc3RhbGxlZENodW5rRGF0YVsxXShlcnJvcik7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubCh1cmwsIGxvYWRpbmdFbmRlZCwgXCJjaHVuay1cIiArIGNodW5rSWQsIGNodW5rSWQpO1xuXHRcdFx0XHR9IGVsc2UgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0XHRcdH1cblx0XHR9XG59O1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rdG9kb1wiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmt0b2RvXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL0RPTS9pbmRleC9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==