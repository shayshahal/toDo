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
___CSS_LOADER_EXPORT___.push([module.id, "*\n{\n    box-sizing: border-box;\n    margin: 0;\n    overflow: hidden;\n    padding: 0;\n    user-select: none;\n}\nhtml, body\n{\n    height: 100vh;\n    width: 100vw;\n    background-image: linear-gradient(180deg, rgb(146, 72, 72) 3%, rgb(38, 121, 180) 100%);\n    font-size: 1vmax;\n}\nbutton\n{\n    border: none;\n    font-size: inherit;\n    color: inherit;\n    background-color: transparent;\n    cursor: pointer;\n}\n#content\n{\n    height: 100%;\n    width: 100%;\n}", "",{"version":3,"sources":["webpack://./src/DOM/index/index.css"],"names":[],"mappings":"AAAA;;IAEI,sBAAsB;IACtB,SAAS;IACT,gBAAgB;IAChB,UAAU;IACV,iBAAiB;AACrB;AACA;;IAEI,aAAa;IACb,YAAY;IACZ,sFAAsF;IACtF,gBAAgB;AACpB;AACA;;IAEI,YAAY;IACZ,kBAAkB;IAClB,cAAc;IACd,6BAA6B;IAC7B,eAAe;AACnB;AACA;;IAEI,YAAY;IACZ,WAAW;AACf","sourcesContent":["*\n{\n    box-sizing: border-box;\n    margin: 0;\n    overflow: hidden;\n    padding: 0;\n    user-select: none;\n}\nhtml, body\n{\n    height: 100vh;\n    width: 100vw;\n    background-image: linear-gradient(180deg, rgb(146, 72, 72) 3%, rgb(38, 121, 180) 100%);\n    font-size: 1vmax;\n}\nbutton\n{\n    border: none;\n    font-size: inherit;\n    color: inherit;\n    background-color: transparent;\n    cursor: pointer;\n}\n#content\n{\n    height: 100%;\n    width: 100%;\n}"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "#content\n{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items:center;\n    \n}\n#welcome\n{\n    font-size: 12vmin;\n    animation: entrance 2s cubic-bezier(0,1,.3,1);\n}\n#welcome2\n{\n    font-size: 4vmin;\n    animation: entrance2 2.5s cubic-bezier(0,1,.5,1);\n}\n#go-to-daily\n{\n    padding: 1vh 0vw;\n    font-size: 3vmin;\n    color: linear-gradient(90deg, black 0%, white 100%);\n    animation: entrance3 2s cubic-bezier(0,1,.5,1);\n}\n/*************************ANIMATIONS***************************/\n\n@keyframes entrance\n{\n    0%\n    {\n        transform: translateX(-500%);\n    }\n    100%\n    {\n        transform: translateX(0%);\n    }\n}\n@keyframes entrance2\n{\n    0%\n    {\n        transform: translateX(1000%);\n    }\n    100%\n    {\n        transform: translateX(0%);\n    }\n}\n@keyframes entrance3\n{\n    0%\n    {\n        opacity: 0%;\n    }\n    100%\n    {\n        opacity: 100%;\n    }\n}", "",{"version":3,"sources":["webpack://./src/DOM/main/main.css"],"names":[],"mappings":"AAAA;;IAEI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,kBAAkB;;AAEtB;AACA;;IAEI,iBAAiB;IACjB,6CAA6C;AACjD;AACA;;IAEI,gBAAgB;IAChB,gDAAgD;AACpD;AACA;;IAEI,gBAAgB;IAChB,gBAAgB;IAChB,mDAAmD;IACnD,8CAA8C;AAClD;AACA,+DAA+D;;AAE/D;;IAEI;;QAEI,4BAA4B;IAChC;IACA;;QAEI,yBAAyB;IAC7B;AACJ;AACA;;IAEI;;QAEI,4BAA4B;IAChC;IACA;;QAEI,yBAAyB;IAC7B;AACJ;AACA;;IAEI;;QAEI,WAAW;IACf;IACA;;QAEI,aAAa;IACjB;AACJ","sourcesContent":["#content\n{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items:center;\n    \n}\n#welcome\n{\n    font-size: 12vmin;\n    animation: entrance 2s cubic-bezier(0,1,.3,1);\n}\n#welcome2\n{\n    font-size: 4vmin;\n    animation: entrance2 2.5s cubic-bezier(0,1,.5,1);\n}\n#go-to-daily\n{\n    padding: 1vh 0vw;\n    font-size: 3vmin;\n    color: linear-gradient(90deg, black 0%, white 100%);\n    animation: entrance3 2s cubic-bezier(0,1,.5,1);\n}\n/*************************ANIMATIONS***************************/\n\n@keyframes entrance\n{\n    0%\n    {\n        transform: translateX(-500%);\n    }\n    100%\n    {\n        transform: translateX(0%);\n    }\n}\n@keyframes entrance2\n{\n    0%\n    {\n        transform: translateX(1000%);\n    }\n    100%\n    {\n        transform: translateX(0%);\n    }\n}\n@keyframes entrance3\n{\n    0%\n    {\n        opacity: 0%;\n    }\n    100%\n    {\n        opacity: 100%;\n    }\n}"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "/*-------------------------Header---------------------------------------*/\n#expand-menu-btn\n{\n    position: fixed;\n    top: 0;\n    left: 0;\n    display: flex;\n    border-radius: 50%;\n    color: white;\n    padding: 1vh 1vw;\n    font-size: 4vmin;\n}\n/*-------------------------Sliding Menu---------------------------------*/\n#left-menu\n{\n    position: fixed;\n    display: flex;\n    background-color: rgba(0, 0, 0, 0.5);\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: stretch;\n    top: 0%;\n    left: 0%;\n    height: 100%;\n    color: white;\n    width: 12vw;\n    z-index: 999;\n    box-shadow: 0 3px 5px black;\n}\n#top-div-left-menu\n{\n    height: 6vh;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    gap: 1vw;\n    align-items: center;\n    padding: 0 1vw;\n}\n#retract-menu-btn\n{\n    font-size: 3vmin;\n}\n#name-menu\n{\n    font-size: 2vmin;\n}\n#list-btn-container\n{\n    display: flex;\n    flex-direction: column;\n    align-items: stretch;\n    justify-content: flex-start;\n}\n#lists-container\n{\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: stretch;\n    font-size: 1.5vmin;\n}\n.listItem\n{\n    padding: 1vh 0vw;\n}\n.menu-btn\n{\n    border-top: .1vh solid rgba(255, 255, 255, 0.5);\n    border-bottom: .1vh solid rgba(255, 255, 255, 0.5);\n    padding: 1.5vh 0vw;\n    font-size: 2.5vmin;\n}\n#screen-cover\n{\n    display: block;\n    position: fixed;\n    top: 0;\n    left: 0;\n    height: 100vh;\n    width: 100vw;\n    z-index: 99;\n    opacity: 30%;\n    background-color: black;\n}\n\n/* Animations */\n.slideRight\n{\n    animation: slideRight .2s ease-in-out;\n}\n@keyframes slideRight\n{\n    0%\n    {\n        transform: translateX(-100%);\n    }\n    100%\n    {\n        transform: translateX(0%);\n    }\n}\n.slideLeft\n{\n    animation: slideLeft .2s ease-in-out;\n}\n@keyframes slideLeft\n{\n    0%\n    {\n        transform: translateX(0%);\n    }\n    100%\n    {\n        transform: translateX(-100%);\n    }\n} \n.slideDown\n{\n    animation: slideDown .2s ease-in;\n    transform-origin: top center;\n}\n@keyframes slideDown\n{\n    0%\n    {\n        transform: rotateX(90deg);\n    }\n    100%\n    {\n        transform: rotateX(0deg);\n    }\n} \n.slideUp\n{\n    animation: slideUp .2s ease-in;\n    transform-origin: top center;\n}\n@keyframes slideUp\n{\n    0%\n    {\n        transform: rotateX(0deg);\n    }\n    100%\n    {\n        transform: rotateX(90deg);\n    }\n} \n.opIn\n{\n    animation: opIn .2s ease-in-out;\n}\n@keyframes opIn \n{\n    0% \n    {\n        opacity: 0%;\n    }\n    100%\n    {\n        opacity: 30%;\n    }\n}\n.opOut\n{\n    animation: opOut .2s ease-in-out;\n\n}\n@keyframes opOut\n{\n    0% \n    {\n        opacity: 30%;\n    }\n    100%\n    {\n        opacity: 0%;\n    }\n}\n", "",{"version":3,"sources":["webpack://./src/DOM/menu/menu.css"],"names":[],"mappings":"AAAA,yEAAyE;AACzE;;IAEI,eAAe;IACf,MAAM;IACN,OAAO;IACP,aAAa;IACb,kBAAkB;IAClB,YAAY;IACZ,gBAAgB;IAChB,gBAAgB;AACpB;AACA,yEAAyE;AACzE;;IAEI,eAAe;IACf,aAAa;IACb,oCAAoC;IACpC,sBAAsB;IACtB,2BAA2B;IAC3B,oBAAoB;IACpB,OAAO;IACP,QAAQ;IACR,YAAY;IACZ,YAAY;IACZ,WAAW;IACX,YAAY;IACZ,2BAA2B;AAC/B;AACA;;IAEI,WAAW;IACX,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,QAAQ;IACR,mBAAmB;IACnB,cAAc;AAClB;AACA;;IAEI,gBAAgB;AACpB;AACA;;IAEI,gBAAgB;AACpB;AACA;;IAEI,aAAa;IACb,sBAAsB;IACtB,oBAAoB;IACpB,2BAA2B;AAC/B;AACA;;IAEI,aAAa;IACb,sBAAsB;IACtB,2BAA2B;IAC3B,oBAAoB;IACpB,kBAAkB;AACtB;AACA;;IAEI,gBAAgB;AACpB;AACA;;IAEI,+CAA+C;IAC/C,kDAAkD;IAClD,kBAAkB;IAClB,kBAAkB;AACtB;AACA;;IAEI,cAAc;IACd,eAAe;IACf,MAAM;IACN,OAAO;IACP,aAAa;IACb,YAAY;IACZ,WAAW;IACX,YAAY;IACZ,uBAAuB;AAC3B;;AAEA,eAAe;AACf;;IAEI,qCAAqC;AACzC;AACA;;IAEI;;QAEI,4BAA4B;IAChC;IACA;;QAEI,yBAAyB;IAC7B;AACJ;AACA;;IAEI,oCAAoC;AACxC;AACA;;IAEI;;QAEI,yBAAyB;IAC7B;IACA;;QAEI,4BAA4B;IAChC;AACJ;AACA;;IAEI,gCAAgC;IAChC,4BAA4B;AAChC;AACA;;IAEI;;QAEI,yBAAyB;IAC7B;IACA;;QAEI,wBAAwB;IAC5B;AACJ;AACA;;IAEI,8BAA8B;IAC9B,4BAA4B;AAChC;AACA;;IAEI;;QAEI,wBAAwB;IAC5B;IACA;;QAEI,yBAAyB;IAC7B;AACJ;AACA;;IAEI,+BAA+B;AACnC;AACA;;IAEI;;QAEI,WAAW;IACf;IACA;;QAEI,YAAY;IAChB;AACJ;AACA;;IAEI,gCAAgC;;AAEpC;AACA;;IAEI;;QAEI,YAAY;IAChB;IACA;;QAEI,WAAW;IACf;AACJ","sourcesContent":["/*-------------------------Header---------------------------------------*/\n#expand-menu-btn\n{\n    position: fixed;\n    top: 0;\n    left: 0;\n    display: flex;\n    border-radius: 50%;\n    color: white;\n    padding: 1vh 1vw;\n    font-size: 4vmin;\n}\n/*-------------------------Sliding Menu---------------------------------*/\n#left-menu\n{\n    position: fixed;\n    display: flex;\n    background-color: rgba(0, 0, 0, 0.5);\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: stretch;\n    top: 0%;\n    left: 0%;\n    height: 100%;\n    color: white;\n    width: 12vw;\n    z-index: 999;\n    box-shadow: 0 3px 5px black;\n}\n#top-div-left-menu\n{\n    height: 6vh;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    gap: 1vw;\n    align-items: center;\n    padding: 0 1vw;\n}\n#retract-menu-btn\n{\n    font-size: 3vmin;\n}\n#name-menu\n{\n    font-size: 2vmin;\n}\n#list-btn-container\n{\n    display: flex;\n    flex-direction: column;\n    align-items: stretch;\n    justify-content: flex-start;\n}\n#lists-container\n{\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: stretch;\n    font-size: 1.5vmin;\n}\n.listItem\n{\n    padding: 1vh 0vw;\n}\n.menu-btn\n{\n    border-top: .1vh solid rgba(255, 255, 255, 0.5);\n    border-bottom: .1vh solid rgba(255, 255, 255, 0.5);\n    padding: 1.5vh 0vw;\n    font-size: 2.5vmin;\n}\n#screen-cover\n{\n    display: block;\n    position: fixed;\n    top: 0;\n    left: 0;\n    height: 100vh;\n    width: 100vw;\n    z-index: 99;\n    opacity: 30%;\n    background-color: black;\n}\n\n/* Animations */\n.slideRight\n{\n    animation: slideRight .2s ease-in-out;\n}\n@keyframes slideRight\n{\n    0%\n    {\n        transform: translateX(-100%);\n    }\n    100%\n    {\n        transform: translateX(0%);\n    }\n}\n.slideLeft\n{\n    animation: slideLeft .2s ease-in-out;\n}\n@keyframes slideLeft\n{\n    0%\n    {\n        transform: translateX(0%);\n    }\n    100%\n    {\n        transform: translateX(-100%);\n    }\n} \n.slideDown\n{\n    animation: slideDown .2s ease-in;\n    transform-origin: top center;\n}\n@keyframes slideDown\n{\n    0%\n    {\n        transform: rotateX(90deg);\n    }\n    100%\n    {\n        transform: rotateX(0deg);\n    }\n} \n.slideUp\n{\n    animation: slideUp .2s ease-in;\n    transform-origin: top center;\n}\n@keyframes slideUp\n{\n    0%\n    {\n        transform: rotateX(0deg);\n    }\n    100%\n    {\n        transform: rotateX(90deg);\n    }\n} \n.opIn\n{\n    animation: opIn .2s ease-in-out;\n}\n@keyframes opIn \n{\n    0% \n    {\n        opacity: 0%;\n    }\n    100%\n    {\n        opacity: 30%;\n    }\n}\n.opOut\n{\n    animation: opOut .2s ease-in-out;\n\n}\n@keyframes opOut\n{\n    0% \n    {\n        opacity: 30%;\n    }\n    100%\n    {\n        opacity: 0%;\n    }\n}\n"],"sourceRoot":""}]);
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
/* harmony export */   "createAddForm": () => (/* binding */ createAddForm),
/* harmony export */   "createElement": () => (/* binding */ createElement),
/* harmony export */   "createList": () => (/* binding */ createList),
/* harmony export */   "createTask": () => (/* binding */ createTask),
/* harmony export */   "tabSwitch": () => (/* binding */ tabSwitch)
/* harmony export */ });
/* harmony import */ var _Logic_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Logic/user */ "./src/Logic/user.js");


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
    __webpack_require__("./src/DOM lazy recursive ^\\.\\/.*\\/.*$ include: \\.js$")(`./${name}/${name}`).then(({ default: loadTab})=>{loadTab()});
}
function createList(list)
{
    const listContainer = createElement('div', 'list', '');
    list.tasks.forEach(task => {listContainer.appendChild(createTask(task))});
    return listContainer;
}
function createTask(task)
{
    const taskContainer = document.getElementById('task-container');
    const taskDiv = createElement('div', '', '', 'task');
    taskContainer.appendChild(taskDiv);
    const name = createElement('div', '', task.name);
    taskDiv.appendChild(name);
    const desc = createElement('div', '', task.desc);
    taskDiv.appendChild(desc);
    const date = createElement('div', '', task.date);
    taskDiv.appendChild(date);
    const prio = createElement('div', '', task.prio);
    taskDiv.appendChild(prio);
    const check = createElement('input', '', '', 'check');
    check.type = 'checkBox';
    check.checked = task.isComplete;
    taskDiv.appendChild(check);
    return taskDiv;
}
function createAddForm(listName)
{
    const addTaskDiv = createElement('form', 'add-task', '');

    const taskName = createElement('input', 'task-name', '');
    addTaskDiv.appendChild(taskName);
    const taskDesc = createElement('input', 'task-desc', '');
    addTaskDiv.appendChild(taskDesc);
    const taskDate = createElement('input', 'task-date', '');
    taskDate.type = 'date';
    taskDate.value = '2022-12-11';
    addTaskDiv.appendChild(taskDate);

    const taskPrioDiv = createElement('form', 'task-prio-div', '');
    addTaskDiv.appendChild(taskPrioDiv);

    const taskPrioLow = createElement('input', 'task-prio-low', '');
    taskPrioLow.type = 'radio';
    taskPrioLow.value = 'low';
    taskPrioLow.name = 'prio';
    taskPrioDiv.appendChild(taskPrioLow);
    const lowLabel = createElement('label', '', 'Low');
    lowLabel.for = 'task-prio-low';
    taskPrioDiv.appendChild(lowLabel);

    const taskPrioMed = createElement('input', 'task-prio-med', '');
    taskPrioMed.type = 'radio';
    taskPrioMed.value = 'med';
    taskPrioMed.name = 'prio';
    taskPrioDiv.appendChild(taskPrioMed);
    const medLabel = createElement('label', '', 'Medium');
    medLabel.for = 'task-prio-med';
    taskPrioDiv.appendChild(medLabel);

    const taskPrioHigh = createElement('input', 'task-prio-high', '');
    taskPrioHigh.type = 'radio';
    taskPrioHigh.value = 'high';
    taskPrioHigh.name = 'prio';
    taskPrioDiv.appendChild(taskPrioHigh);
    const highLabel = createElement('label', '', 'High');
    highLabel.for = 'task-prio-high';
    taskPrioDiv.appendChild(highLabel);

    const submit = createElement('button', 'task-submit', '+');
    submit.type = 'button';
    addTaskDiv.appendChild(submit);

    submit.addEventListener('click', () =>
    {
        let prio = taskPrioHigh.Checked ? taskPrioHigh.value : taskPrioMed.Checked ? taskPrioMed.value : taskPrioLow.value;
        let task = (0,_Logic_user__WEBPACK_IMPORTED_MODULE_0__.addTask)(listName, taskName.value, taskDesc.value, taskDate.value, prio);
        if(task)
            createTask(task);
    });
    return addTaskDiv;
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
/* harmony import */ var _Logic_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Logic/user */ "./src/Logic/user.js");





if (true) {
    console.log('Looks like we are in development mode!');
  }

(0,_Logic_user__WEBPACK_IMPORTED_MODULE_3__.loadDay)();
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
/* harmony import */ var _domManipulator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../domManipulator */ "./src/DOM/domManipulator.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() =>
{
    // Create Menu expending button
    const expandMenuButton = (0,_domManipulator__WEBPACK_IMPORTED_MODULE_1__.createElement)('button', 'expand-menu-btn', '☰');
    document.body.appendChild(expandMenuButton);

    //--------------------------Create left menu --------------------------------------//
    const leftMenu = (0,_domManipulator__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', 'left-menu','', '');

    // Horizontal div for menu button and name
    const topDivLeftMenu = (0,_domManipulator__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', 'top-div-left-menu','');
    leftMenu.appendChild(topDivLeftMenu);

    // Menu retract button
    const retractMenuButton = (0,_domManipulator__WEBPACK_IMPORTED_MODULE_1__.createElement)('button', 'retract-menu-btn', '☰');
    topDivLeftMenu.appendChild(retractMenuButton);

    // Name of site
    const credit = (0,_domManipulator__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', 'name-menu', '©Shay Shahal');
    topDivLeftMenu.appendChild(credit);

    // Create screen cover for rest of main screen when menu is open
    const screenCover = (0,_domManipulator__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', 'screen-cover', '');

    // Create button to go to current day tasks
    const dailyBtn = (0,_domManipulator__WEBPACK_IMPORTED_MODULE_1__.createElement)('button', 'dly-btn', 'My Day', 'menu-btn');
    leftMenu.appendChild(dailyBtn);

    // Create button to go to current day tasks
    const allBtn = (0,_domManipulator__WEBPACK_IMPORTED_MODULE_1__.createElement)('button', 'all-btn', 'All tasks', 'menu-btn');
    leftMenu.appendChild(allBtn);

    // Create button to go to current day tasks
    const listContainer = (0,_domManipulator__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', 'list-btn-container', '');
    leftMenu.appendChild(listContainer);
    const listsBtn = (0,_domManipulator__WEBPACK_IMPORTED_MODULE_1__.createElement)('button', 'list-btn', 'My Lists', 'menu-btn');
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
    dailyBtn.addEventListener('click', () =>
    {
        (0,_domManipulator__WEBPACK_IMPORTED_MODULE_1__.tabSwitch)('daily');
        retractMenuButton.click();
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
    while (classList.length > 0) 
    {
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
    const container = (0,_domManipulator__WEBPACK_IMPORTED_MODULE_1__.createElement)('div','lists-container', '');
    for (let i = 0; i < 5; i++) 
    {
        const list = (0,_domManipulator__WEBPACK_IMPORTED_MODULE_1__.createElement)('button', 'list-item' + i, 'List ' + i, 'listItem')
        container.appendChild(list);
    }
    return container;
}

/***/ }),

/***/ "./src/DOM lazy recursive ^\\.\\/.*\\/.*$ include: \\.js$":
/*!*****************************************************************************************!*\
  !*** ./src/DOM/ lazy ^\.\/.*\/.*$ include: \.js$ chunkName: [request] namespace object ***!
  \*****************************************************************************************/
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
webpackAsyncContext.id = "./src/DOM lazy recursive ^\\.\\/.*\\/.*$ include: \\.js$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/Logic/list.js":
/*!***************************!*\
  !*** ./src/Logic/list.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((name) => 
{
    const tasks = [];
    return {name, tasks};
});

/***/ }),

/***/ "./src/Logic/task.js":
/*!***************************!*\
  !*** ./src/Logic/task.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((name, desc, date, prio) => 
{
    const isComplete = false;
    return {name,desc,date,prio, isComplete};
});

/***/ }),

/***/ "./src/Logic/user.js":
/*!***************************!*\
  !*** ./src/Logic/user.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addList": () => (/* binding */ addList),
/* harmony export */   "addTask": () => (/* binding */ addTask),
/* harmony export */   "getList": () => (/* binding */ getList),
/* harmony export */   "loadDay": () => (/* binding */ loadDay),
/* harmony export */   "removeList": () => (/* binding */ removeList),
/* harmony export */   "removeTask": () => (/* binding */ removeTask)
/* harmony export */ });
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list */ "./src/Logic/list.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/Logic/task.js");



function loadDay()
{
    let day = (0,_list__WEBPACK_IMPORTED_MODULE_0__["default"])('My Day');
    let all = JSON.parse(localStorage.getItem('All Tasks'));
    console.log(all);
    if(all)
        all.tasks.forEach(task => {if(task.date === '2022-12-11') {addTask(day, task.name, task.desc, task.date, task.prio)}});
    else
        localStorage.setItem('All Tasks', JSON.stringify((0,_list__WEBPACK_IMPORTED_MODULE_0__["default"])('All Tasks')));
    localStorage.setItem('My Day', JSON.stringify(day));
}
function getList(name)
{
    if(typeof(localStorage) === 'undefined')
        return (0,_list__WEBPACK_IMPORTED_MODULE_0__["default"])('empty');
    return JSON.parse(localStorage.getItem(name));
}

function addList(name)
{
    if(typeof(localStorage) === 'undefined' || JSON.parse(localStorage.getItem(name)))
        return;
    
    localStorage.setItem(name, JSON.stringify((0,_list__WEBPACK_IMPORTED_MODULE_0__["default"])(name)));
}

function removeList(name)
{
    if(typeof(localStorage) === 'undefined' || !JSON.parse(localStorage.getItem(name)))
        return;
    
    localStorage.removeItem(name);
}
function addTask(listName, taskName, taskDesc, taskDate, taskPrio)
{
    let list = getList(listName);
    if(!list || list.tasks.includes(taskName))
        return false;
    let task = (0,_task__WEBPACK_IMPORTED_MODULE_1__["default"])(taskName, taskDesc, taskDate, taskPrio);
    list.tasks.shift(task);
    let all = getList('All Tasks');
    if(!all || all.tasks.includes(taskName))
        return task;
    getList('All Tasks').tasks.shift(task);
    return task;
}
function removeTask(listName, taskName)
{
    if(getList(listName).tasks.includes(taskName))
        return false;
    getList(listName).tasks.filter(task => task.name !== taskName)
    return true;
    
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3JDO1dBQ0EsbUdBQW1HLFlBQVk7V0FDL0c7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLG1FQUFtRSxpQ0FBaUM7V0FDcEc7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDeENBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDOztXQUVqQztXQUNBO1dBQ0E7V0FDQSxLQUFLO1dBQ0wsZUFBZTtXQUNmO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTTtXQUNOO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7V0FDQTtXQUNBOzs7OztXQ3JGQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvRE9NL2luZGV4L2luZGV4LmNzcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL0RPTS9tYWluL21haW4uY3NzIiwid2VicGFjazovL3RvZG8vLi9zcmMvRE9NL21lbnUvbWVudS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvRE9NL2luZGV4L2luZGV4LmNzcz85NmFkIiwid2VicGFjazovL3RvZG8vLi9zcmMvRE9NL21haW4vbWFpbi5jc3M/ZDE4YyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL0RPTS9tZW51L21lbnUuY3NzPzYwNmMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL0RPTS9kb21NYW5pcHVsYXRvci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL0RPTS9pbmRleC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL0RPTS9tYWluL21haW4uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9ET00vbWVudS9tZW51LmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvRE9NLyBsYXp5IF5cXC5cXC8uKlxcLy4qJCBpbmNsdWRlOiBcXC5qcyQgY2h1bmtOYW1lOiBbcmVxdWVzdF0gbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL0xvZ2ljL2xpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9Mb2dpYy90YXNrLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvTG9naWMvdXNlci5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZW5zdXJlIGNodW5rIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2dldCBqYXZhc2NyaXB0IGNodW5rIGZpbGVuYW1lIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbG9hZCBzY3JpcHQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqXFxue1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5odG1sLCBib2R5XFxue1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYigxNDYsIDcyLCA3MikgMyUsIHJnYigzOCwgMTIxLCAxODApIDEwMCUpO1xcbiAgICBmb250LXNpemU6IDF2bWF4O1xcbn1cXG5idXR0b25cXG57XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuI2NvbnRlbnRcXG57XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9ET00vaW5kZXgvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztJQUVJLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixpQkFBaUI7QUFDckI7QUFDQTs7SUFFSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLHNGQUFzRjtJQUN0RixnQkFBZ0I7QUFDcEI7QUFDQTs7SUFFSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCw2QkFBNkI7SUFDN0IsZUFBZTtBQUNuQjtBQUNBOztJQUVJLFlBQVk7SUFDWixXQUFXO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKlxcbntcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuaHRtbCwgYm9keVxcbntcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2IoMTQ2LCA3MiwgNzIpIDMlLCByZ2IoMzgsIDEyMSwgMTgwKSAxMDAlKTtcXG4gICAgZm9udC1zaXplOiAxdm1heDtcXG59XFxuYnV0dG9uXFxue1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbiNjb250ZW50XFxue1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIjY29udGVudFxcbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcXG4gICAgXFxufVxcbiN3ZWxjb21lXFxue1xcbiAgICBmb250LXNpemU6IDEydm1pbjtcXG4gICAgYW5pbWF0aW9uOiBlbnRyYW5jZSAycyBjdWJpYy1iZXppZXIoMCwxLC4zLDEpO1xcbn1cXG4jd2VsY29tZTJcXG57XFxuICAgIGZvbnQtc2l6ZTogNHZtaW47XFxuICAgIGFuaW1hdGlvbjogZW50cmFuY2UyIDIuNXMgY3ViaWMtYmV6aWVyKDAsMSwuNSwxKTtcXG59XFxuI2dvLXRvLWRhaWx5XFxue1xcbiAgICBwYWRkaW5nOiAxdmggMHZ3O1xcbiAgICBmb250LXNpemU6IDN2bWluO1xcbiAgICBjb2xvcjogbGluZWFyLWdyYWRpZW50KDkwZGVnLCBibGFjayAwJSwgd2hpdGUgMTAwJSk7XFxuICAgIGFuaW1hdGlvbjogZW50cmFuY2UzIDJzIGN1YmljLWJlemllcigwLDEsLjUsMSk7XFxufVxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqQU5JTUFUSU9OUyoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG5cXG5Aa2V5ZnJhbWVzIGVudHJhbmNlXFxue1xcbiAgICAwJVxcbiAgICB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwMCUpO1xcbiAgICB9XFxuICAgIDEwMCVcXG4gICAge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcXG4gICAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGVudHJhbmNlMlxcbntcXG4gICAgMCVcXG4gICAge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMDAlKTtcXG4gICAgfVxcbiAgICAxMDAlXFxuICAgIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XFxuICAgIH1cXG59XFxuQGtleWZyYW1lcyBlbnRyYW5jZTNcXG57XFxuICAgIDAlXFxuICAgIHtcXG4gICAgICAgIG9wYWNpdHk6IDAlO1xcbiAgICB9XFxuICAgIDEwMCVcXG4gICAge1xcbiAgICAgICAgb3BhY2l0eTogMTAwJTtcXG4gICAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvRE9NL21haW4vbWFpbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0lBRUksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsa0JBQWtCOztBQUV0QjtBQUNBOztJQUVJLGlCQUFpQjtJQUNqQiw2Q0FBNkM7QUFDakQ7QUFDQTs7SUFFSSxnQkFBZ0I7SUFDaEIsZ0RBQWdEO0FBQ3BEO0FBQ0E7O0lBRUksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixtREFBbUQ7SUFDbkQsOENBQThDO0FBQ2xEO0FBQ0EsK0RBQStEOztBQUUvRDs7SUFFSTs7UUFFSSw0QkFBNEI7SUFDaEM7SUFDQTs7UUFFSSx5QkFBeUI7SUFDN0I7QUFDSjtBQUNBOztJQUVJOztRQUVJLDRCQUE0QjtJQUNoQztJQUNBOztRQUVJLHlCQUF5QjtJQUM3QjtBQUNKO0FBQ0E7O0lBRUk7O1FBRUksV0FBVztJQUNmO0lBQ0E7O1FBRUksYUFBYTtJQUNqQjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiNjb250ZW50XFxue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xcbiAgICBcXG59XFxuI3dlbGNvbWVcXG57XFxuICAgIGZvbnQtc2l6ZTogMTJ2bWluO1xcbiAgICBhbmltYXRpb246IGVudHJhbmNlIDJzIGN1YmljLWJlemllcigwLDEsLjMsMSk7XFxufVxcbiN3ZWxjb21lMlxcbntcXG4gICAgZm9udC1zaXplOiA0dm1pbjtcXG4gICAgYW5pbWF0aW9uOiBlbnRyYW5jZTIgMi41cyBjdWJpYy1iZXppZXIoMCwxLC41LDEpO1xcbn1cXG4jZ28tdG8tZGFpbHlcXG57XFxuICAgIHBhZGRpbmc6IDF2aCAwdnc7XFxuICAgIGZvbnQtc2l6ZTogM3ZtaW47XFxuICAgIGNvbG9yOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIGJsYWNrIDAlLCB3aGl0ZSAxMDAlKTtcXG4gICAgYW5pbWF0aW9uOiBlbnRyYW5jZTMgMnMgY3ViaWMtYmV6aWVyKDAsMSwuNSwxKTtcXG59XFxuLyoqKioqKioqKioqKioqKioqKioqKioqKipBTklNQVRJT05TKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcblxcbkBrZXlmcmFtZXMgZW50cmFuY2VcXG57XFxuICAgIDAlXFxuICAgIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAwJSk7XFxuICAgIH1cXG4gICAgMTAwJVxcbiAgICB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xcbiAgICB9XFxufVxcbkBrZXlmcmFtZXMgZW50cmFuY2UyXFxue1xcbiAgICAwJVxcbiAgICB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwMCUpO1xcbiAgICB9XFxuICAgIDEwMCVcXG4gICAge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcXG4gICAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGVudHJhbmNlM1xcbntcXG4gICAgMCVcXG4gICAge1xcbiAgICAgICAgb3BhY2l0eTogMCU7XFxuICAgIH1cXG4gICAgMTAwJVxcbiAgICB7XFxuICAgICAgICBvcGFjaXR5OiAxMDAlO1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUhlYWRlci0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuI2V4cGFuZC1tZW51LWJ0blxcbntcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAxdmggMXZ3O1xcbiAgICBmb250LXNpemU6IDR2bWluO1xcbn1cXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1TbGlkaW5nIE1lbnUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcbiNsZWZ0LW1lbnVcXG57XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgICB0b3A6IDAlO1xcbiAgICBsZWZ0OiAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHdpZHRoOiAxMnZ3O1xcbiAgICB6LWluZGV4OiA5OTk7XFxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDVweCBibGFjaztcXG59XFxuI3RvcC1kaXYtbGVmdC1tZW51XFxue1xcbiAgICBoZWlnaHQ6IDZ2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBnYXA6IDF2dztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMCAxdnc7XFxufVxcbiNyZXRyYWN0LW1lbnUtYnRuXFxue1xcbiAgICBmb250LXNpemU6IDN2bWluO1xcbn1cXG4jbmFtZS1tZW51XFxue1xcbiAgICBmb250LXNpemU6IDJ2bWluO1xcbn1cXG4jbGlzdC1idG4tY29udGFpbmVyXFxue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbn1cXG4jbGlzdHMtY29udGFpbmVyXFxue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgICBmb250LXNpemU6IDEuNXZtaW47XFxufVxcbi5saXN0SXRlbVxcbntcXG4gICAgcGFkZGluZzogMXZoIDB2dztcXG59XFxuLm1lbnUtYnRuXFxue1xcbiAgICBib3JkZXItdG9wOiAuMXZoIHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG4gICAgYm9yZGVyLWJvdHRvbTogLjF2aCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxuICAgIHBhZGRpbmc6IDEuNXZoIDB2dztcXG4gICAgZm9udC1zaXplOiAyLjV2bWluO1xcbn1cXG4jc2NyZWVuLWNvdmVyXFxue1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgei1pbmRleDogOTk7XFxuICAgIG9wYWNpdHk6IDMwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi8qIEFuaW1hdGlvbnMgKi9cXG4uc2xpZGVSaWdodFxcbntcXG4gICAgYW5pbWF0aW9uOiBzbGlkZVJpZ2h0IC4ycyBlYXNlLWluLW91dDtcXG59XFxuQGtleWZyYW1lcyBzbGlkZVJpZ2h0XFxue1xcbiAgICAwJVxcbiAgICB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xcbiAgICB9XFxuICAgIDEwMCVcXG4gICAge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcXG4gICAgfVxcbn1cXG4uc2xpZGVMZWZ0XFxue1xcbiAgICBhbmltYXRpb246IHNsaWRlTGVmdCAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcbkBrZXlmcmFtZXMgc2xpZGVMZWZ0XFxue1xcbiAgICAwJVxcbiAgICB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xcbiAgICB9XFxuICAgIDEwMCVcXG4gICAge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcXG4gICAgfVxcbn0gXFxuLnNsaWRlRG93blxcbntcXG4gICAgYW5pbWF0aW9uOiBzbGlkZURvd24gLjJzIGVhc2UtaW47XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcCBjZW50ZXI7XFxufVxcbkBrZXlmcmFtZXMgc2xpZGVEb3duXFxue1xcbiAgICAwJVxcbiAgICB7XFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoOTBkZWcpO1xcbiAgICB9XFxuICAgIDEwMCVcXG4gICAge1xcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xcbiAgICB9XFxufSBcXG4uc2xpZGVVcFxcbntcXG4gICAgYW5pbWF0aW9uOiBzbGlkZVVwIC4ycyBlYXNlLWluO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgY2VudGVyO1xcbn1cXG5Aa2V5ZnJhbWVzIHNsaWRlVXBcXG57XFxuICAgIDAlXFxuICAgIHtcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTtcXG4gICAgfVxcbiAgICAxMDAlXFxuICAgIHtcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCg5MGRlZyk7XFxuICAgIH1cXG59IFxcbi5vcEluXFxue1xcbiAgICBhbmltYXRpb246IG9wSW4gLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5Aa2V5ZnJhbWVzIG9wSW4gXFxue1xcbiAgICAwJSBcXG4gICAge1xcbiAgICAgICAgb3BhY2l0eTogMCU7XFxuICAgIH1cXG4gICAgMTAwJVxcbiAgICB7XFxuICAgICAgICBvcGFjaXR5OiAzMCU7XFxuICAgIH1cXG59XFxuLm9wT3V0XFxue1xcbiAgICBhbmltYXRpb246IG9wT3V0IC4ycyBlYXNlLWluLW91dDtcXG5cXG59XFxuQGtleWZyYW1lcyBvcE91dFxcbntcXG4gICAgMCUgXFxuICAgIHtcXG4gICAgICAgIG9wYWNpdHk6IDMwJTtcXG4gICAgfVxcbiAgICAxMDAlXFxuICAgIHtcXG4gICAgICAgIG9wYWNpdHk6IDAlO1xcbiAgICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9ET00vbWVudS9tZW51LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSx5RUFBeUU7QUFDekU7O0lBRUksZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjtBQUNBLHlFQUF5RTtBQUN6RTs7SUFFSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLG9DQUFvQztJQUNwQyxzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLG9CQUFvQjtJQUNwQixPQUFPO0lBQ1AsUUFBUTtJQUNSLFlBQVk7SUFDWixZQUFZO0lBQ1osV0FBVztJQUNYLFlBQVk7SUFDWiwyQkFBMkI7QUFDL0I7QUFDQTs7SUFFSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsUUFBUTtJQUNSLG1CQUFtQjtJQUNuQixjQUFjO0FBQ2xCO0FBQ0E7O0lBRUksZ0JBQWdCO0FBQ3BCO0FBQ0E7O0lBRUksZ0JBQWdCO0FBQ3BCO0FBQ0E7O0lBRUksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsMkJBQTJCO0FBQy9CO0FBQ0E7O0lBRUksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0Isb0JBQW9CO0lBQ3BCLGtCQUFrQjtBQUN0QjtBQUNBOztJQUVJLGdCQUFnQjtBQUNwQjtBQUNBOztJQUVJLCtDQUErQztJQUMvQyxrREFBa0Q7SUFDbEQsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0QjtBQUNBOztJQUVJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87SUFDUCxhQUFhO0lBQ2IsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0lBQ1osdUJBQXVCO0FBQzNCOztBQUVBLGVBQWU7QUFDZjs7SUFFSSxxQ0FBcUM7QUFDekM7QUFDQTs7SUFFSTs7UUFFSSw0QkFBNEI7SUFDaEM7SUFDQTs7UUFFSSx5QkFBeUI7SUFDN0I7QUFDSjtBQUNBOztJQUVJLG9DQUFvQztBQUN4QztBQUNBOztJQUVJOztRQUVJLHlCQUF5QjtJQUM3QjtJQUNBOztRQUVJLDRCQUE0QjtJQUNoQztBQUNKO0FBQ0E7O0lBRUksZ0NBQWdDO0lBQ2hDLDRCQUE0QjtBQUNoQztBQUNBOztJQUVJOztRQUVJLHlCQUF5QjtJQUM3QjtJQUNBOztRQUVJLHdCQUF3QjtJQUM1QjtBQUNKO0FBQ0E7O0lBRUksOEJBQThCO0lBQzlCLDRCQUE0QjtBQUNoQztBQUNBOztJQUVJOztRQUVJLHdCQUF3QjtJQUM1QjtJQUNBOztRQUVJLHlCQUF5QjtJQUM3QjtBQUNKO0FBQ0E7O0lBRUksK0JBQStCO0FBQ25DO0FBQ0E7O0lBRUk7O1FBRUksV0FBVztJQUNmO0lBQ0E7O1FBRUksWUFBWTtJQUNoQjtBQUNKO0FBQ0E7O0lBRUksZ0NBQWdDOztBQUVwQztBQUNBOztJQUVJOztRQUVJLFlBQVk7SUFDaEI7SUFDQTs7UUFFSSxXQUFXO0lBQ2Y7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1IZWFkZXItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcbiNleHBhbmQtbWVudS1idG5cXG57XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMXZoIDF2dztcXG4gICAgZm9udC1zaXplOiA0dm1pbjtcXG59XFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tU2xpZGluZyBNZW51LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG4jbGVmdC1tZW51XFxue1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gICAgdG9wOiAwJTtcXG4gICAgbGVmdDogMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB3aWR0aDogMTJ2dztcXG4gICAgei1pbmRleDogOTk5O1xcbiAgICBib3gtc2hhZG93OiAwIDNweCA1cHggYmxhY2s7XFxufVxcbiN0b3AtZGl2LWxlZnQtbWVudVxcbntcXG4gICAgaGVpZ2h0OiA2dmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZ2FwOiAxdnc7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAgMXZ3O1xcbn1cXG4jcmV0cmFjdC1tZW51LWJ0blxcbntcXG4gICAgZm9udC1zaXplOiAzdm1pbjtcXG59XFxuI25hbWUtbWVudVxcbntcXG4gICAgZm9udC1zaXplOiAydm1pbjtcXG59XFxuI2xpc3QtYnRuLWNvbnRhaW5lclxcbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG59XFxuI2xpc3RzLWNvbnRhaW5lclxcbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gICAgZm9udC1zaXplOiAxLjV2bWluO1xcbn1cXG4ubGlzdEl0ZW1cXG57XFxuICAgIHBhZGRpbmc6IDF2aCAwdnc7XFxufVxcbi5tZW51LWJ0blxcbntcXG4gICAgYm9yZGVyLXRvcDogLjF2aCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxuICAgIGJvcmRlci1ib3R0b206IC4xdmggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcbiAgICBwYWRkaW5nOiAxLjV2aCAwdnc7XFxuICAgIGZvbnQtc2l6ZTogMi41dm1pbjtcXG59XFxuI3NjcmVlbi1jb3ZlclxcbntcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIHotaW5kZXg6IDk5O1xcbiAgICBvcGFjaXR5OiAzMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4vKiBBbmltYXRpb25zICovXFxuLnNsaWRlUmlnaHRcXG57XFxuICAgIGFuaW1hdGlvbjogc2xpZGVSaWdodCAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcbkBrZXlmcmFtZXMgc2xpZGVSaWdodFxcbntcXG4gICAgMCVcXG4gICAge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcXG4gICAgfVxcbiAgICAxMDAlXFxuICAgIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XFxuICAgIH1cXG59XFxuLnNsaWRlTGVmdFxcbntcXG4gICAgYW5pbWF0aW9uOiBzbGlkZUxlZnQgLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5Aa2V5ZnJhbWVzIHNsaWRlTGVmdFxcbntcXG4gICAgMCVcXG4gICAge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcXG4gICAgfVxcbiAgICAxMDAlXFxuICAgIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XFxuICAgIH1cXG59IFxcbi5zbGlkZURvd25cXG57XFxuICAgIGFuaW1hdGlvbjogc2xpZGVEb3duIC4ycyBlYXNlLWluO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgY2VudGVyO1xcbn1cXG5Aa2V5ZnJhbWVzIHNsaWRlRG93blxcbntcXG4gICAgMCVcXG4gICAge1xcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKDkwZGVnKTtcXG4gICAgfVxcbiAgICAxMDAlXFxuICAgIHtcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTtcXG4gICAgfVxcbn0gXFxuLnNsaWRlVXBcXG57XFxuICAgIGFuaW1hdGlvbjogc2xpZGVVcCAuMnMgZWFzZS1pbjtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIGNlbnRlcjtcXG59XFxuQGtleWZyYW1lcyBzbGlkZVVwXFxue1xcbiAgICAwJVxcbiAgICB7XFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XFxuICAgIH1cXG4gICAgMTAwJVxcbiAgICB7XFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoOTBkZWcpO1xcbiAgICB9XFxufSBcXG4ub3BJblxcbntcXG4gICAgYW5pbWF0aW9uOiBvcEluIC4ycyBlYXNlLWluLW91dDtcXG59XFxuQGtleWZyYW1lcyBvcEluIFxcbntcXG4gICAgMCUgXFxuICAgIHtcXG4gICAgICAgIG9wYWNpdHk6IDAlO1xcbiAgICB9XFxuICAgIDEwMCVcXG4gICAge1xcbiAgICAgICAgb3BhY2l0eTogMzAlO1xcbiAgICB9XFxufVxcbi5vcE91dFxcbntcXG4gICAgYW5pbWF0aW9uOiBvcE91dCAuMnMgZWFzZS1pbi1vdXQ7XFxuXFxufVxcbkBrZXlmcmFtZXMgb3BPdXRcXG57XFxuICAgIDAlIFxcbiAgICB7XFxuICAgICAgICBvcGFjaXR5OiAzMCU7XFxuICAgIH1cXG4gICAgMTAwJVxcbiAgICB7XFxuICAgICAgICBvcGFjaXR5OiAwJTtcXG4gICAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWVudS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21lbnUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7YWRkVGFza30gZnJvbSBcIi4uL0xvZ2ljL3VzZXJcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQoZVR5cGUsIGlkLCB0ZXh0Q29udGVudCwgY2xhc3NOYW1lID0gZmFsc2UpIFxue1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVUeXBlKTtcbiAgICBlbGVtZW50LnRleHRDb250ZW50ID0gdGV4dENvbnRlbnQ7XG4gICAgZWxlbWVudC5pZCA9IGlkO1xuICAgIGlmKGNsYXNzTmFtZSlcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIHRhYlN3aXRjaChuYW1lKVxue1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIHdoaWxlIChjb250ZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBpbXBvcnQoXG4gICAgLyp3ZWJwYWNrQ2h1bmtOYW1lOiBcIltyZXF1ZXN0XVwiKi8gXG4gICAgLyogd2VicGFja0luY2x1ZGU6IC9cXC5qcyQvKi9cbiAgICBgLi8ke25hbWV9LyR7bmFtZX1gKS50aGVuKCh7IGRlZmF1bHQ6IGxvYWRUYWJ9KT0+e2xvYWRUYWIoKX0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUxpc3QobGlzdClcbntcbiAgICBjb25zdCBsaXN0Q29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ2xpc3QnLCAnJyk7XG4gICAgbGlzdC50YXNrcy5mb3JFYWNoKHRhc2sgPT4ge2xpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlVGFzayh0YXNrKSl9KTtcbiAgICByZXR1cm4gbGlzdENvbnRhaW5lcjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUYXNrKHRhc2spXG57XG4gICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IHRhc2tEaXYgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnJywgJycsICd0YXNrJyk7XG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRGl2KTtcbiAgICBjb25zdCBuYW1lID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJycsIHRhc2submFtZSk7XG4gICAgdGFza0Rpdi5hcHBlbmRDaGlsZChuYW1lKTtcbiAgICBjb25zdCBkZXNjID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJycsIHRhc2suZGVzYyk7XG4gICAgdGFza0Rpdi5hcHBlbmRDaGlsZChkZXNjKTtcbiAgICBjb25zdCBkYXRlID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJycsIHRhc2suZGF0ZSk7XG4gICAgdGFza0Rpdi5hcHBlbmRDaGlsZChkYXRlKTtcbiAgICBjb25zdCBwcmlvID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJycsIHRhc2sucHJpbyk7XG4gICAgdGFza0Rpdi5hcHBlbmRDaGlsZChwcmlvKTtcbiAgICBjb25zdCBjaGVjayA9IGNyZWF0ZUVsZW1lbnQoJ2lucHV0JywgJycsICcnLCAnY2hlY2snKTtcbiAgICBjaGVjay50eXBlID0gJ2NoZWNrQm94JztcbiAgICBjaGVjay5jaGVja2VkID0gdGFzay5pc0NvbXBsZXRlO1xuICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQoY2hlY2spO1xuICAgIHJldHVybiB0YXNrRGl2O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUFkZEZvcm0obGlzdE5hbWUpXG57XG4gICAgY29uc3QgYWRkVGFza0RpdiA9IGNyZWF0ZUVsZW1lbnQoJ2Zvcm0nLCAnYWRkLXRhc2snLCAnJyk7XG5cbiAgICBjb25zdCB0YXNrTmFtZSA9IGNyZWF0ZUVsZW1lbnQoJ2lucHV0JywgJ3Rhc2stbmFtZScsICcnKTtcbiAgICBhZGRUYXNrRGl2LmFwcGVuZENoaWxkKHRhc2tOYW1lKTtcbiAgICBjb25zdCB0YXNrRGVzYyA9IGNyZWF0ZUVsZW1lbnQoJ2lucHV0JywgJ3Rhc2stZGVzYycsICcnKTtcbiAgICBhZGRUYXNrRGl2LmFwcGVuZENoaWxkKHRhc2tEZXNjKTtcbiAgICBjb25zdCB0YXNrRGF0ZSA9IGNyZWF0ZUVsZW1lbnQoJ2lucHV0JywgJ3Rhc2stZGF0ZScsICcnKTtcbiAgICB0YXNrRGF0ZS50eXBlID0gJ2RhdGUnO1xuICAgIHRhc2tEYXRlLnZhbHVlID0gJzIwMjItMTItMTEnO1xuICAgIGFkZFRhc2tEaXYuYXBwZW5kQ2hpbGQodGFza0RhdGUpO1xuXG4gICAgY29uc3QgdGFza1ByaW9EaXYgPSBjcmVhdGVFbGVtZW50KCdmb3JtJywgJ3Rhc2stcHJpby1kaXYnLCAnJyk7XG4gICAgYWRkVGFza0Rpdi5hcHBlbmRDaGlsZCh0YXNrUHJpb0Rpdik7XG5cbiAgICBjb25zdCB0YXNrUHJpb0xvdyA9IGNyZWF0ZUVsZW1lbnQoJ2lucHV0JywgJ3Rhc2stcHJpby1sb3cnLCAnJyk7XG4gICAgdGFza1ByaW9Mb3cudHlwZSA9ICdyYWRpbyc7XG4gICAgdGFza1ByaW9Mb3cudmFsdWUgPSAnbG93JztcbiAgICB0YXNrUHJpb0xvdy5uYW1lID0gJ3ByaW8nO1xuICAgIHRhc2tQcmlvRGl2LmFwcGVuZENoaWxkKHRhc2tQcmlvTG93KTtcbiAgICBjb25zdCBsb3dMYWJlbCA9IGNyZWF0ZUVsZW1lbnQoJ2xhYmVsJywgJycsICdMb3cnKTtcbiAgICBsb3dMYWJlbC5mb3IgPSAndGFzay1wcmlvLWxvdyc7XG4gICAgdGFza1ByaW9EaXYuYXBwZW5kQ2hpbGQobG93TGFiZWwpO1xuXG4gICAgY29uc3QgdGFza1ByaW9NZWQgPSBjcmVhdGVFbGVtZW50KCdpbnB1dCcsICd0YXNrLXByaW8tbWVkJywgJycpO1xuICAgIHRhc2tQcmlvTWVkLnR5cGUgPSAncmFkaW8nO1xuICAgIHRhc2tQcmlvTWVkLnZhbHVlID0gJ21lZCc7XG4gICAgdGFza1ByaW9NZWQubmFtZSA9ICdwcmlvJztcbiAgICB0YXNrUHJpb0Rpdi5hcHBlbmRDaGlsZCh0YXNrUHJpb01lZCk7XG4gICAgY29uc3QgbWVkTGFiZWwgPSBjcmVhdGVFbGVtZW50KCdsYWJlbCcsICcnLCAnTWVkaXVtJyk7XG4gICAgbWVkTGFiZWwuZm9yID0gJ3Rhc2stcHJpby1tZWQnO1xuICAgIHRhc2tQcmlvRGl2LmFwcGVuZENoaWxkKG1lZExhYmVsKTtcblxuICAgIGNvbnN0IHRhc2tQcmlvSGlnaCA9IGNyZWF0ZUVsZW1lbnQoJ2lucHV0JywgJ3Rhc2stcHJpby1oaWdoJywgJycpO1xuICAgIHRhc2tQcmlvSGlnaC50eXBlID0gJ3JhZGlvJztcbiAgICB0YXNrUHJpb0hpZ2gudmFsdWUgPSAnaGlnaCc7XG4gICAgdGFza1ByaW9IaWdoLm5hbWUgPSAncHJpbyc7XG4gICAgdGFza1ByaW9EaXYuYXBwZW5kQ2hpbGQodGFza1ByaW9IaWdoKTtcbiAgICBjb25zdCBoaWdoTGFiZWwgPSBjcmVhdGVFbGVtZW50KCdsYWJlbCcsICcnLCAnSGlnaCcpO1xuICAgIGhpZ2hMYWJlbC5mb3IgPSAndGFzay1wcmlvLWhpZ2gnO1xuICAgIHRhc2tQcmlvRGl2LmFwcGVuZENoaWxkKGhpZ2hMYWJlbCk7XG5cbiAgICBjb25zdCBzdWJtaXQgPSBjcmVhdGVFbGVtZW50KCdidXR0b24nLCAndGFzay1zdWJtaXQnLCAnKycpO1xuICAgIHN1Ym1pdC50eXBlID0gJ2J1dHRvbic7XG4gICAgYWRkVGFza0Rpdi5hcHBlbmRDaGlsZChzdWJtaXQpO1xuXG4gICAgc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT5cbiAgICB7XG4gICAgICAgIGxldCBwcmlvID0gdGFza1ByaW9IaWdoLkNoZWNrZWQgPyB0YXNrUHJpb0hpZ2gudmFsdWUgOiB0YXNrUHJpb01lZC5DaGVja2VkID8gdGFza1ByaW9NZWQudmFsdWUgOiB0YXNrUHJpb0xvdy52YWx1ZTtcbiAgICAgICAgbGV0IHRhc2sgPSBhZGRUYXNrKGxpc3ROYW1lLCB0YXNrTmFtZS52YWx1ZSwgdGFza0Rlc2MudmFsdWUsIHRhc2tEYXRlLnZhbHVlLCBwcmlvKTtcbiAgICAgICAgaWYodGFzaylcbiAgICAgICAgICAgIGNyZWF0ZVRhc2sodGFzayk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGFkZFRhc2tEaXY7XG59XG5cbiIsImltcG9ydCAnLi9pbmRleC5jc3MnXG5pbXBvcnQgbG9hZE1lbnUgZnJvbSAnL3NyYy9ET00vbWVudS9tZW51LmpzJztcbmltcG9ydCBsb2FkTWFpbiBmcm9tICcvc3JjL0RPTS9tYWluL21haW4uanMnO1xuaW1wb3J0IHsgbG9hZERheSB9IGZyb20gJy4uLy4uL0xvZ2ljL3VzZXInO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnNvbGUubG9nKCdMb29rcyBsaWtlIHdlIGFyZSBpbiBkZXZlbG9wbWVudCBtb2RlIScpO1xuICB9XG5cbmxvYWREYXkoKTtcbmxvYWRNZW51KCk7XG5sb2FkTWFpbigpOyIsImltcG9ydCAnLi9tYWluLmNzcyc7XG5pbXBvcnQgeyB0YWJTd2l0Y2gsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuLi9kb21NYW5pcHVsYXRvcic7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+XG57XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgY29uc3Qgd2VsY29tZSA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICd3ZWxjb21lJywgJ1dlbGNvbWUgdG8gVG9EbycpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQod2VsY29tZSk7XG4gICAgY29uc3Qgd2VsY29tZTIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnd2VsY29tZTInLCAnWW91ciBTb3VyY2Ugb2YgUHJvZHVjdGl2aXR5LicpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQod2VsY29tZTIpO1xuICAgIGNvbnN0IGJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsICdnby10by1kYWlseScsICdHbyB0byBkYWlseSB0YXNrcyDihpInKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAgKCkgPT4geyB0YWJTd2l0Y2goJ2RhaWx5JykgfSk7XG59IiwiaW1wb3J0ICcuL21lbnUuY3NzJztcbmltcG9ydCB7dGFiU3dpdGNoLCBjcmVhdGVFbGVtZW50fSBmcm9tICcuLi9kb21NYW5pcHVsYXRvcic7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+XG57XG4gICAgLy8gQ3JlYXRlIE1lbnUgZXhwZW5kaW5nIGJ1dHRvblxuICAgIGNvbnN0IGV4cGFuZE1lbnVCdXR0b24gPSBjcmVhdGVFbGVtZW50KCdidXR0b24nLCAnZXhwYW5kLW1lbnUtYnRuJywgJ+KYsCcpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZXhwYW5kTWVudUJ1dHRvbik7XG5cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tQ3JlYXRlIGxlZnQgbWVudSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG4gICAgY29uc3QgbGVmdE1lbnUgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnbGVmdC1tZW51JywnJywgJycpO1xuXG4gICAgLy8gSG9yaXpvbnRhbCBkaXYgZm9yIG1lbnUgYnV0dG9uIGFuZCBuYW1lXG4gICAgY29uc3QgdG9wRGl2TGVmdE1lbnUgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAndG9wLWRpdi1sZWZ0LW1lbnUnLCcnKTtcbiAgICBsZWZ0TWVudS5hcHBlbmRDaGlsZCh0b3BEaXZMZWZ0TWVudSk7XG5cbiAgICAvLyBNZW51IHJldHJhY3QgYnV0dG9uXG4gICAgY29uc3QgcmV0cmFjdE1lbnVCdXR0b24gPSBjcmVhdGVFbGVtZW50KCdidXR0b24nLCAncmV0cmFjdC1tZW51LWJ0bicsICfimLAnKTtcbiAgICB0b3BEaXZMZWZ0TWVudS5hcHBlbmRDaGlsZChyZXRyYWN0TWVudUJ1dHRvbik7XG5cbiAgICAvLyBOYW1lIG9mIHNpdGVcbiAgICBjb25zdCBjcmVkaXQgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnbmFtZS1tZW51JywgJ8KpU2hheSBTaGFoYWwnKTtcbiAgICB0b3BEaXZMZWZ0TWVudS5hcHBlbmRDaGlsZChjcmVkaXQpO1xuXG4gICAgLy8gQ3JlYXRlIHNjcmVlbiBjb3ZlciBmb3IgcmVzdCBvZiBtYWluIHNjcmVlbiB3aGVuIG1lbnUgaXMgb3BlblxuICAgIGNvbnN0IHNjcmVlbkNvdmVyID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ3NjcmVlbi1jb3ZlcicsICcnKTtcblxuICAgIC8vIENyZWF0ZSBidXR0b24gdG8gZ28gdG8gY3VycmVudCBkYXkgdGFza3NcbiAgICBjb25zdCBkYWlseUJ0biA9IGNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsICdkbHktYnRuJywgJ015IERheScsICdtZW51LWJ0bicpO1xuICAgIGxlZnRNZW51LmFwcGVuZENoaWxkKGRhaWx5QnRuKTtcblxuICAgIC8vIENyZWF0ZSBidXR0b24gdG8gZ28gdG8gY3VycmVudCBkYXkgdGFza3NcbiAgICBjb25zdCBhbGxCdG4gPSBjcmVhdGVFbGVtZW50KCdidXR0b24nLCAnYWxsLWJ0bicsICdBbGwgdGFza3MnLCAnbWVudS1idG4nKTtcbiAgICBsZWZ0TWVudS5hcHBlbmRDaGlsZChhbGxCdG4pO1xuXG4gICAgLy8gQ3JlYXRlIGJ1dHRvbiB0byBnbyB0byBjdXJyZW50IGRheSB0YXNrc1xuICAgIGNvbnN0IGxpc3RDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnbGlzdC1idG4tY29udGFpbmVyJywgJycpO1xuICAgIGxlZnRNZW51LmFwcGVuZENoaWxkKGxpc3RDb250YWluZXIpO1xuICAgIGNvbnN0IGxpc3RzQnRuID0gY3JlYXRlRWxlbWVudCgnYnV0dG9uJywgJ2xpc3QtYnRuJywgJ015IExpc3RzJywgJ21lbnUtYnRuJyk7XG4gICAgbGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0c0J0bik7XG4gICAgbGV0IGlzT3BlbiA9IGZhbHNlO1xuICAgIGNvbnN0IGxpc3REaXYgPSBjcmVhdGVMaXN0RGl2KCk7XG5cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tRXZlbnRMaXN0ZW5lcnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuICAgIC8vIEV4cGFuZCBidXR0b25cbiAgICBleHBhbmRNZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKSA9PiBcbiAgICB7XG4gICAgICAgIGV4cGFuZFdpdGhBbmkoZG9jdW1lbnQuYm9keSwgbGVmdE1lbnUsICdzbGlkZVJpZ2h0Jyk7XG4gICAgICAgIGV4cGFuZFdpdGhBbmkoZG9jdW1lbnQuYm9keSwgc2NyZWVuQ292ZXIsICdvcEluJyk7XG4gICAgICAgIGV4cGFuZE1lbnVCdXR0b24udGV4dENvbnRlbnQgPSAnJztcbiAgICB9KTtcblxuICAgIC8vIEFuaW1hdGlvbnNcbiAgICBzY3JlZW5Db3Zlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBcbiAgICB7XG4gICAgICAgIHJldHJhY3RBbmltYXRpb24obGVmdE1lbnUsICdzbGlkZUxlZnQnKTtcbiAgICAgICAgcmV0cmFjdEFuaW1hdGlvbihlLnRhcmdldCwgJ29wT3V0Jyk7XG4gICAgfSk7XG4gICAgcmV0cmFjdE1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBcbiAgICB7XG4gICAgICAgIHJldHJhY3RBbmltYXRpb24obGVmdE1lbnUsICdzbGlkZUxlZnQnKTtcbiAgICAgICAgcmV0cmFjdEFuaW1hdGlvbihzY3JlZW5Db3ZlciwgJ29wT3V0Jyk7XG4gICAgfSk7XG5cbiAgICAvLyBFeHRyYWN0IGFmdGVyIGFuaW1hdGlvblxuICAgIGxlZnRNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsIChlKSA9PlxuICAgIHtcbiAgICAgICAgaWYoZS5hbmltYXRpb25OYW1lID09PSAnc2xpZGVMZWZ0JylcbiAgICAgICAge1xuICAgICAgICAgICAgcmVtb3ZlQWZ0ZXJBbmkoZG9jdW1lbnQuYm9keSwgZS50YXJnZXQsICdzbGlkZUxlZnQnKTtcbiAgICAgICAgICAgIHJlbW92ZUFmdGVyQW5pKGRvY3VtZW50LmJvZHksIHNjcmVlbkNvdmVyLCAnb3BPdXQnKTtcbiAgICAgICAgICAgIGV4cGFuZE1lbnVCdXR0b24udGV4dENvbnRlbnQgPSAn4piwJztcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGRhaWx5QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT5cbiAgICB7XG4gICAgICAgIHRhYlN3aXRjaCgnZGFpbHknKTtcbiAgICAgICAgcmV0cmFjdE1lbnVCdXR0b24uY2xpY2soKTtcbiAgICB9KTtcbiAgICBsaXN0c0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IFxuICAgIHtcbiAgICAgICAgaXNPcGVuID8gcmV0cmFjdEFuaW1hdGlvbihsaXN0RGl2LCAnc2xpZGVVcCcpIDogZXhwYW5kV2l0aEFuaShsaXN0Q29udGFpbmVyLCBsaXN0RGl2LCAnc2xpZGVEb3duJyk7XG4gICAgICAgIGlzT3BlbiA9ICFpc09wZW47XG4gICAgICAgIGNvbnNvbGUubG9nKGlzT3Blbik7XG4gICAgfSk7XG4gICAgbGlzdERpdi5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCAoZSkgPT4gXG4gICAge1xuICAgICAgICBpZihlLmFuaW1hdGlvbk5hbWUgPT09ICdzbGlkZVVwJylcbiAgICAgICAge1xuICAgICAgICAgICAgcmVtb3ZlQWZ0ZXJBbmkobGlzdENvbnRhaW5lciwgZS50YXJnZXQsICdzbGlkZVVwJyk7XG4gICAgICAgIH1cbiAgICB9ICk7XG59XG5cbmZ1bmN0aW9uIGV4cGFuZFdpdGhBbmkocGFyZW50LCBlbGVtZW50LCBhbmkpXG57XG4gICAgZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKGFuaSk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiByZXRyYWN0QW5pbWF0aW9uKGVsZW1lbnQsIGFuaSlcbntcbiAgICB2YXIgY2xhc3NMaXN0ID0gZWxlbWVudC5jbGFzc0xpc3Q7XG4gICAgd2hpbGUgKGNsYXNzTGlzdC5sZW5ndGggPiAwKSBcbiAgICB7XG4gICAgICAgIGNsYXNzTGlzdC5yZW1vdmUoY2xhc3NMaXN0Lml0ZW0oMCkpO1xuICAgIH1cbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoYW5pKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQWZ0ZXJBbmkocGFyZW50LCBlbGVtZW50LCBhbmkpXG57XG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGFuaSk7XG4gICAgcGFyZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaXN0RGl2KClcbntcbiAgICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCdsaXN0cy1jb250YWluZXInLCAnJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIFxuICAgIHtcbiAgICAgICAgY29uc3QgbGlzdCA9IGNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsICdsaXN0LWl0ZW0nICsgaSwgJ0xpc3QgJyArIGksICdsaXN0SXRlbScpXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0KTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn0iLCJ2YXIgbWFwID0ge1xuXHRcIi4vZGFpbHkvZGFpbHlcIjogW1xuXHRcdFwiLi9zcmMvRE9NL2RhaWx5L2RhaWx5LmpzXCIsXG5cdFx0XCJkYWlseS1kYWlseVwiXG5cdF0sXG5cdFwiLi9kYWlseS9kYWlseS5qc1wiOiBbXG5cdFx0XCIuL3NyYy9ET00vZGFpbHkvZGFpbHkuanNcIixcblx0XHRcImRhaWx5LWRhaWx5XCJcblx0XSxcblx0XCIuL2luZGV4L1wiOiBbXG5cdFx0XCIuL3NyYy9ET00vaW5kZXgvaW5kZXguanNcIlxuXHRdLFxuXHRcIi4vaW5kZXgvaW5kZXhcIjogW1xuXHRcdFwiLi9zcmMvRE9NL2luZGV4L2luZGV4LmpzXCJcblx0XSxcblx0XCIuL2luZGV4L2luZGV4LmpzXCI6IFtcblx0XHRcIi4vc3JjL0RPTS9pbmRleC9pbmRleC5qc1wiXG5cdF0sXG5cdFwiLi9tYWluL21haW5cIjogW1xuXHRcdFwiLi9zcmMvRE9NL21haW4vbWFpbi5qc1wiXG5cdF0sXG5cdFwiLi9tYWluL21haW4uanNcIjogW1xuXHRcdFwiLi9zcmMvRE9NL21haW4vbWFpbi5qc1wiXG5cdF0sXG5cdFwiLi9tZW51L21lbnVcIjogW1xuXHRcdFwiLi9zcmMvRE9NL21lbnUvbWVudS5qc1wiXG5cdF0sXG5cdFwiLi9tZW51L21lbnUuanNcIjogW1xuXHRcdFwiLi9zcmMvRE9NL21lbnUvbWVudS5qc1wiXG5cdF1cbn07XG5mdW5jdGlvbiB3ZWJwYWNrQXN5bmNDb250ZXh0KHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcblx0XHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHRcdHRocm93IGU7XG5cdFx0fSk7XG5cdH1cblxuXHR2YXIgaWRzID0gbWFwW3JlcV0sIGlkID0gaWRzWzBdO1xuXHRyZXR1cm4gUHJvbWlzZS5hbGwoaWRzLnNsaWNlKDEpLm1hcChfX3dlYnBhY2tfcmVxdWlyZV9fLmUpKS50aGVuKCgpID0+IHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG5cdH0pO1xufVxud2VicGFja0FzeW5jQ29udGV4dC5rZXlzID0gKCkgPT4gKE9iamVjdC5rZXlzKG1hcCkpO1xud2VicGFja0FzeW5jQ29udGV4dC5pZCA9IFwiLi9zcmMvRE9NIGxhenkgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLipcXFxcLy4qJCBpbmNsdWRlOiBcXFxcLmpzJFwiO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQXN5bmNDb250ZXh0OyIsImV4cG9ydCBkZWZhdWx0IChuYW1lKSA9PiBcbntcbiAgICBjb25zdCB0YXNrcyA9IFtdO1xuICAgIHJldHVybiB7bmFtZSwgdGFza3N9O1xufSIsImV4cG9ydCBkZWZhdWx0IChuYW1lLCBkZXNjLCBkYXRlLCBwcmlvKSA9PiBcbntcbiAgICBjb25zdCBpc0NvbXBsZXRlID0gZmFsc2U7XG4gICAgcmV0dXJuIHtuYW1lLGRlc2MsZGF0ZSxwcmlvLCBpc0NvbXBsZXRlfTtcbn07IiwiaW1wb3J0IGxpc3RGYWN0b3J5IGZyb20gJy4vbGlzdCc7XG5pbXBvcnQgdGFza0ZhY3RvcnkgZnJvbSAnLi90YXNrJztcblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWREYXkoKVxue1xuICAgIGxldCBkYXkgPSBsaXN0RmFjdG9yeSgnTXkgRGF5Jyk7XG4gICAgbGV0IGFsbCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ0FsbCBUYXNrcycpKTtcbiAgICBjb25zb2xlLmxvZyhhbGwpO1xuICAgIGlmKGFsbClcbiAgICAgICAgYWxsLnRhc2tzLmZvckVhY2godGFzayA9PiB7aWYodGFzay5kYXRlID09PSAnMjAyMi0xMi0xMScpIHthZGRUYXNrKGRheSwgdGFzay5uYW1lLCB0YXNrLmRlc2MsIHRhc2suZGF0ZSwgdGFzay5wcmlvKX19KTtcbiAgICBlbHNlXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdBbGwgVGFza3MnLCBKU09OLnN0cmluZ2lmeShsaXN0RmFjdG9yeSgnQWxsIFRhc2tzJykpKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnTXkgRGF5JywgSlNPTi5zdHJpbmdpZnkoZGF5KSk7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0TGlzdChuYW1lKVxue1xuICAgIGlmKHR5cGVvZihsb2NhbFN0b3JhZ2UpID09PSAndW5kZWZpbmVkJylcbiAgICAgICAgcmV0dXJuIGxpc3RGYWN0b3J5KCdlbXB0eScpO1xuICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKG5hbWUpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZExpc3QobmFtZSlcbntcbiAgICBpZih0eXBlb2YobG9jYWxTdG9yYWdlKSA9PT0gJ3VuZGVmaW5lZCcgfHwgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShuYW1lKSkpXG4gICAgICAgIHJldHVybjtcbiAgICBcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShuYW1lLCBKU09OLnN0cmluZ2lmeShsaXN0RmFjdG9yeShuYW1lKSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlTGlzdChuYW1lKVxue1xuICAgIGlmKHR5cGVvZihsb2NhbFN0b3JhZ2UpID09PSAndW5kZWZpbmVkJyB8fCAhSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShuYW1lKSkpXG4gICAgICAgIHJldHVybjtcbiAgICBcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShuYW1lKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBhZGRUYXNrKGxpc3ROYW1lLCB0YXNrTmFtZSwgdGFza0Rlc2MsIHRhc2tEYXRlLCB0YXNrUHJpbylcbntcbiAgICBsZXQgbGlzdCA9IGdldExpc3QobGlzdE5hbWUpO1xuICAgIGlmKCFsaXN0IHx8IGxpc3QudGFza3MuaW5jbHVkZXModGFza05hbWUpKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgbGV0IHRhc2sgPSB0YXNrRmFjdG9yeSh0YXNrTmFtZSwgdGFza0Rlc2MsIHRhc2tEYXRlLCB0YXNrUHJpbyk7XG4gICAgbGlzdC50YXNrcy5zaGlmdCh0YXNrKTtcbiAgICBsZXQgYWxsID0gZ2V0TGlzdCgnQWxsIFRhc2tzJyk7XG4gICAgaWYoIWFsbCB8fCBhbGwudGFza3MuaW5jbHVkZXModGFza05hbWUpKVxuICAgICAgICByZXR1cm4gdGFzaztcbiAgICBnZXRMaXN0KCdBbGwgVGFza3MnKS50YXNrcy5zaGlmdCh0YXNrKTtcbiAgICByZXR1cm4gdGFzaztcbn1cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVUYXNrKGxpc3ROYW1lLCB0YXNrTmFtZSlcbntcbiAgICBpZihnZXRMaXN0KGxpc3ROYW1lKS50YXNrcy5pbmNsdWRlcyh0YXNrTmFtZSkpXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICBnZXRMaXN0KGxpc3ROYW1lKS50YXNrcy5maWx0ZXIodGFzayA9PiB0YXNrLm5hbWUgIT09IHRhc2tOYW1lKVxuICAgIHJldHVybiB0cnVlO1xuICAgIFxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmYgPSB7fTtcbi8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbi8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5lID0gKGNodW5rSWQpID0+IHtcblx0cmV0dXJuIFByb21pc2UuYWxsKE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uZikucmVkdWNlKChwcm9taXNlcywga2V5KSA9PiB7XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5mW2tleV0oY2h1bmtJZCwgcHJvbWlzZXMpO1xuXHRcdHJldHVybiBwcm9taXNlcztcblx0fSwgW10pKTtcbn07IiwiLy8gVGhpcyBmdW5jdGlvbiBhbGxvdyB0byByZWZlcmVuY2UgYXN5bmMgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnUgPSAoY2h1bmtJZCkgPT4ge1xuXHQvLyByZXR1cm4gdXJsIGZvciBmaWxlbmFtZXMgYmFzZWQgb24gdGVtcGxhdGVcblx0cmV0dXJuIFwiXCIgKyBjaHVua0lkICsgXCIuanNcIjtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwidmFyIGluUHJvZ3Jlc3MgPSB7fTtcbnZhciBkYXRhV2VicGFja1ByZWZpeCA9IFwidG9kbzpcIjtcbi8vIGxvYWRTY3JpcHQgZnVuY3Rpb24gdG8gbG9hZCBhIHNjcmlwdCB2aWEgc2NyaXB0IHRhZ1xuX193ZWJwYWNrX3JlcXVpcmVfXy5sID0gKHVybCwgZG9uZSwga2V5LCBjaHVua0lkKSA9PiB7XG5cdGlmKGluUHJvZ3Jlc3NbdXJsXSkgeyBpblByb2dyZXNzW3VybF0ucHVzaChkb25lKTsgcmV0dXJuOyB9XG5cdHZhciBzY3JpcHQsIG5lZWRBdHRhY2g7XG5cdGlmKGtleSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc2NyaXB0cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIHMgPSBzY3JpcHRzW2ldO1xuXHRcdFx0aWYocy5nZXRBdHRyaWJ1dGUoXCJzcmNcIikgPT0gdXJsIHx8IHMuZ2V0QXR0cmlidXRlKFwiZGF0YS13ZWJwYWNrXCIpID09IGRhdGFXZWJwYWNrUHJlZml4ICsga2V5KSB7IHNjcmlwdCA9IHM7IGJyZWFrOyB9XG5cdFx0fVxuXHR9XG5cdGlmKCFzY3JpcHQpIHtcblx0XHRuZWVkQXR0YWNoID0gdHJ1ZTtcblx0XHRzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcblxuXHRcdHNjcmlwdC5jaGFyc2V0ID0gJ3V0Zi04Jztcblx0XHRzY3JpcHQudGltZW91dCA9IDEyMDtcblx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5uYykge1xuXHRcdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIF9fd2VicGFja19yZXF1aXJlX18ubmMpO1xuXHRcdH1cblx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwiZGF0YS13ZWJwYWNrXCIsIGRhdGFXZWJwYWNrUHJlZml4ICsga2V5KTtcblx0XHRzY3JpcHQuc3JjID0gdXJsO1xuXHR9XG5cdGluUHJvZ3Jlc3NbdXJsXSA9IFtkb25lXTtcblx0dmFyIG9uU2NyaXB0Q29tcGxldGUgPSAocHJldiwgZXZlbnQpID0+IHtcblx0XHQvLyBhdm9pZCBtZW0gbGVha3MgaW4gSUUuXG5cdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gbnVsbDtcblx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG5cdFx0dmFyIGRvbmVGbnMgPSBpblByb2dyZXNzW3VybF07XG5cdFx0ZGVsZXRlIGluUHJvZ3Jlc3NbdXJsXTtcblx0XHRzY3JpcHQucGFyZW50Tm9kZSAmJiBzY3JpcHQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzY3JpcHQpO1xuXHRcdGRvbmVGbnMgJiYgZG9uZUZucy5mb3JFYWNoKChmbikgPT4gKGZuKGV2ZW50KSkpO1xuXHRcdGlmKHByZXYpIHJldHVybiBwcmV2KGV2ZW50KTtcblx0fTtcblx0dmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCB1bmRlZmluZWQsIHsgdHlwZTogJ3RpbWVvdXQnLCB0YXJnZXQ6IHNjcmlwdCB9KSwgMTIwMDAwKTtcblx0c2NyaXB0Lm9uZXJyb3IgPSBvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgc2NyaXB0Lm9uZXJyb3IpO1xuXHRzY3JpcHQub25sb2FkID0gb25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHNjcmlwdC5vbmxvYWQpO1xuXHRuZWVkQXR0YWNoICYmIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbn07IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbl9fd2VicGFja19yZXF1aXJlX18uZi5qID0gKGNodW5rSWQsIHByb21pc2VzKSA9PiB7XG5cdFx0Ly8gSlNPTlAgY2h1bmsgbG9hZGluZyBmb3IgamF2YXNjcmlwdFxuXHRcdHZhciBpbnN0YWxsZWRDaHVua0RhdGEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSA/IGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA6IHVuZGVmaW5lZDtcblx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIHsgLy8gMCBtZWFucyBcImFscmVhZHkgaW5zdGFsbGVkXCIuXG5cblx0XHRcdC8vIGEgUHJvbWlzZSBtZWFucyBcImN1cnJlbnRseSBsb2FkaW5nXCIuXG5cdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEpIHtcblx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYodHJ1ZSkgeyAvLyBhbGwgY2h1bmtzIGhhdmUgSlNcblx0XHRcdFx0XHQvLyBzZXR1cCBQcm9taXNlIGluIGNodW5rIGNhY2hlXG5cdFx0XHRcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiAoaW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gW3Jlc29sdmUsIHJlamVjdF0pKTtcblx0XHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSA9IHByb21pc2UpO1xuXG5cdFx0XHRcdFx0Ly8gc3RhcnQgY2h1bmsgbG9hZGluZ1xuXHRcdFx0XHRcdHZhciB1cmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLnUoY2h1bmtJZCk7XG5cdFx0XHRcdFx0Ly8gY3JlYXRlIGVycm9yIGJlZm9yZSBzdGFjayB1bndvdW5kIHRvIGdldCB1c2VmdWwgc3RhY2t0cmFjZSBsYXRlclxuXHRcdFx0XHRcdHZhciBlcnJvciA9IG5ldyBFcnJvcigpO1xuXHRcdFx0XHRcdHZhciBsb2FkaW5nRW5kZWQgPSAoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpKSB7XG5cdFx0XHRcdFx0XHRcdGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcblx0XHRcdFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhICE9PSAwKSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSB1bmRlZmluZWQ7XG5cdFx0XHRcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuXHRcdFx0XHRcdFx0XHRcdHZhciBlcnJvclR5cGUgPSBldmVudCAmJiAoZXZlbnQudHlwZSA9PT0gJ2xvYWQnID8gJ21pc3NpbmcnIDogZXZlbnQudHlwZSk7XG5cdFx0XHRcdFx0XHRcdFx0dmFyIHJlYWxTcmMgPSBldmVudCAmJiBldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LnNyYztcblx0XHRcdFx0XHRcdFx0XHRlcnJvci5tZXNzYWdlID0gJ0xvYWRpbmcgY2h1bmsgJyArIGNodW5rSWQgKyAnIGZhaWxlZC5cXG4oJyArIGVycm9yVHlwZSArICc6ICcgKyByZWFsU3JjICsgJyknO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLm5hbWUgPSAnQ2h1bmtMb2FkRXJyb3InO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLnR5cGUgPSBlcnJvclR5cGU7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IucmVxdWVzdCA9IHJlYWxTcmM7XG5cdFx0XHRcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhWzFdKGVycm9yKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5sKHVybCwgbG9hZGluZ0VuZGVkLCBcImNodW5rLVwiICsgY2h1bmtJZCwgY2h1bmtJZCk7XG5cdFx0XHRcdH0gZWxzZSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHRcdFx0fVxuXHRcdH1cbn07XG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmt0b2RvXCJdID0gc2VsZltcIndlYnBhY2tDaHVua3RvZG9cIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvRE9NL2luZGV4L2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9