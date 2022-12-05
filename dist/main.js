/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/DOM/Index/page.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/DOM/Index/page.css ***!
  \**********************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "*\n{\n    box-sizing: border-box;\n    margin: 0;\n    overflow: hidden;\n    padding: 0;\n    user-select: none;\n}\nhtml, body\n{\n    height: 100vh;\n    width: 100vw;\n    background-image: linear-gradient(180deg, rgb(146, 72, 72) 3%, rgb(38, 121, 180) 100%);\n    font-size: 1vmax;\n}\nbutton\n{\n    border: none;\n    font-size: inherit;\n    color: inherit;\n    background-color: transparent;\n    cursor: pointer;\n}", "",{"version":3,"sources":["webpack://./src/DOM/Index/page.css"],"names":[],"mappings":"AAAA;;IAEI,sBAAsB;IACtB,SAAS;IACT,gBAAgB;IAChB,UAAU;IACV,iBAAiB;AACrB;AACA;;IAEI,aAAa;IACb,YAAY;IACZ,sFAAsF;IACtF,gBAAgB;AACpB;AACA;;IAEI,YAAY;IACZ,kBAAkB;IAClB,cAAc;IACd,6BAA6B;IAC7B,eAAe;AACnB","sourcesContent":["*\n{\n    box-sizing: border-box;\n    margin: 0;\n    overflow: hidden;\n    padding: 0;\n    user-select: none;\n}\nhtml, body\n{\n    height: 100vh;\n    width: 100vw;\n    background-image: linear-gradient(180deg, rgb(146, 72, 72) 3%, rgb(38, 121, 180) 100%);\n    font-size: 1vmax;\n}\nbutton\n{\n    border: none;\n    font-size: inherit;\n    color: inherit;\n    background-color: transparent;\n    cursor: pointer;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/DOM/MainTab/main.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/DOM/MainTab/main.css ***!
  \************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "#content\n{\n    height: 100%;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items:center;\n    \n}\n#welcome\n{\n    font-size: 12vmin;\n    animation: entrance 2s cubic-bezier(0,1,.3,1);\n}\n#welcome2\n{\n    font-size: 4vmin;\n    animation: entrance2 2.5s cubic-bezier(0,1,.5,1);\n}\n#go-to-daily\n{\n    padding: 1vh 0vw;\n    font-size: 3vmin;\n    color: linear-gradient(90deg, black 0%, white 100%);\n    animation: entrance3 2s cubic-bezier(0,1,.5,1);\n}\n/*************************ANIMATIONS***************************/\n\n@keyframes entrance\n{\n    0%\n    {\n        transform: translateX(-500%);\n    }\n    100%\n    {\n        transform: translateX(0%);\n    }\n}\n@keyframes entrance2\n{\n    0%\n    {\n        transform: translateX(1000%);\n    }\n    100%\n    {\n        transform: translateX(0%);\n    }\n}\n@keyframes entrance3\n{\n    0%\n    {\n        opacity: 0%;\n    }\n    100%\n    {\n        opacity: 100%;\n    }\n}", "",{"version":3,"sources":["webpack://./src/DOM/MainTab/main.css"],"names":[],"mappings":"AAAA;;IAEI,YAAY;IACZ,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,kBAAkB;;AAEtB;AACA;;IAEI,iBAAiB;IACjB,6CAA6C;AACjD;AACA;;IAEI,gBAAgB;IAChB,gDAAgD;AACpD;AACA;;IAEI,gBAAgB;IAChB,gBAAgB;IAChB,mDAAmD;IACnD,8CAA8C;AAClD;AACA,+DAA+D;;AAE/D;;IAEI;;QAEI,4BAA4B;IAChC;IACA;;QAEI,yBAAyB;IAC7B;AACJ;AACA;;IAEI;;QAEI,4BAA4B;IAChC;IACA;;QAEI,yBAAyB;IAC7B;AACJ;AACA;;IAEI;;QAEI,WAAW;IACf;IACA;;QAEI,aAAa;IACjB;AACJ","sourcesContent":["#content\n{\n    height: 100%;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items:center;\n    \n}\n#welcome\n{\n    font-size: 12vmin;\n    animation: entrance 2s cubic-bezier(0,1,.3,1);\n}\n#welcome2\n{\n    font-size: 4vmin;\n    animation: entrance2 2.5s cubic-bezier(0,1,.5,1);\n}\n#go-to-daily\n{\n    padding: 1vh 0vw;\n    font-size: 3vmin;\n    color: linear-gradient(90deg, black 0%, white 100%);\n    animation: entrance3 2s cubic-bezier(0,1,.5,1);\n}\n/*************************ANIMATIONS***************************/\n\n@keyframes entrance\n{\n    0%\n    {\n        transform: translateX(-500%);\n    }\n    100%\n    {\n        transform: translateX(0%);\n    }\n}\n@keyframes entrance2\n{\n    0%\n    {\n        transform: translateX(1000%);\n    }\n    100%\n    {\n        transform: translateX(0%);\n    }\n}\n@keyframes entrance3\n{\n    0%\n    {\n        opacity: 0%;\n    }\n    100%\n    {\n        opacity: 100%;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/DOM/Menu/menu.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/DOM/Menu/menu.css ***!
  \*********************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "/*-------------------------Header---------------------------------*/\n#expand-menu-btn\n{\n  position: fixed;\n  top: 0;\n  left: 0;\n  display: flex;\n  border-radius: 50%;\n  color: white;\n  padding: 1vh 1vw;\n  font-size: 4vmin;\n}\n/*-------------------------Sliding Menu---------------------------------*/\n#left-menu\n{\n    position: fixed;\n    display: flex;\n    background-color: rgba(0, 0, 0, 0.5);\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: stretch;\n    top: 0%;\n    left: 0%;\n    height: 100%;\n    color: white;\n    width: 12vw;\n    z-index: 999;\n    box-shadow: 0 3px 5px black;\n}\n#top-div-left-menu\n{\n    height: 6vh;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    gap: 1vw;\n    align-items: center;\n    padding: 0 1vw;\n}\n#retract-menu-btn\n{\n    font-size: 3vmin;\n}\n#name-menu\n{\n    font-size: 2vmin;\n}\n#list-btn-container\n{\n    display: flex;\n    flex-direction: column;\n    align-items: stretch;\n    justify-content: flex-start;\n    border-bottom: .05vh solid rgba(0, 0, 0, 0.5);\n}\n#lists-container\n{\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: stretch;\n    font-size: 1.5vmin;\n}\n.listItem\n{\n    border-top: .05vh solid rgba(0, 0, 0);\n    border-bottom: .05vh solid rgba(0, 0, 0, 0.5);\n    padding: 1vh 0vw;\n}\n.menu-btn\n{\n    border-top: .1vh solid rgba(255, 255, 255, 0.5);\n    border-bottom: .1vh solid rgba(255, 255, 255, 0.5);\n    padding: 1.5vh 0vw;\n    font-size: 2.5vmin;\n}\n#screen-cover\n{\n    display: block;\n    position: fixed;\n    top: 0;\n    left: 0;\n    height: 100vh;\n    width: 100vw;\n    z-index: 99;\n    opacity: 30%;\n    background-color: black;\n}\n\n/* Animations */\n.slideRight\n{\n    animation: slideRight .2s ease-in-out;\n}\n@keyframes slideRight\n{\n    0%\n    {\n        transform: translateX(-100%);\n    }\n    100%\n    {\n        transform: translateX(0%);\n    }\n}\n.slideLeft\n{\n    animation: slideLeft .2s ease-in-out;\n}\n@keyframes slideLeft\n{\n    0%\n    {\n        transform: translateX(0%);\n    }\n    100%\n    {\n        transform: translateX(-100%);\n    }\n} \n.slideDown\n{\n    animation: slideDown .2s ease-in;\n    transform-origin: top center;\n}\n@keyframes slideDown\n{\n    0%\n    {\n        transform: rotateX(90deg);\n    }\n    100%\n    {\n        transform: rotateX(0deg);\n    }\n} \n.slideUp\n{\n    animation: slideUp .2s ease-in;\n    transform-origin: top center;\n}\n@keyframes slideUp\n{\n    0%\n    {\n        transform: rotateX(0deg);\n    }\n    100%\n    {\n        transform: rotateX(90deg);\n    }\n} \n.opIn\n{\n    animation: opIn .2s ease-in-out;\n}\n@keyframes opIn \n{\n    0% \n    {\n        opacity: 0%;\n    }\n    100%\n    {\n        opacity: 30%;\n    }\n}\n.opOut\n{\n    animation: opOut .2s ease-in-out;\n\n}\n@keyframes opOut\n{\n    0% \n    {\n        opacity: 30%;\n    }\n    100%\n    {\n        opacity: 0%;\n    }\n}\n", "",{"version":3,"sources":["webpack://./src/DOM/Menu/menu.css"],"names":[],"mappings":"AAAA,mEAAmE;AACnE;;EAEE,eAAe;EACf,MAAM;EACN,OAAO;EACP,aAAa;EACb,kBAAkB;EAClB,YAAY;EACZ,gBAAgB;EAChB,gBAAgB;AAClB;AACA,yEAAyE;AACzE;;IAEI,eAAe;IACf,aAAa;IACb,oCAAoC;IACpC,sBAAsB;IACtB,2BAA2B;IAC3B,oBAAoB;IACpB,OAAO;IACP,QAAQ;IACR,YAAY;IACZ,YAAY;IACZ,WAAW;IACX,YAAY;IACZ,2BAA2B;AAC/B;AACA;;IAEI,WAAW;IACX,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,QAAQ;IACR,mBAAmB;IACnB,cAAc;AAClB;AACA;;IAEI,gBAAgB;AACpB;AACA;;IAEI,gBAAgB;AACpB;AACA;;IAEI,aAAa;IACb,sBAAsB;IACtB,oBAAoB;IACpB,2BAA2B;IAC3B,6CAA6C;AACjD;AACA;;IAEI,aAAa;IACb,sBAAsB;IACtB,2BAA2B;IAC3B,oBAAoB;IACpB,kBAAkB;AACtB;AACA;;IAEI,qCAAqC;IACrC,6CAA6C;IAC7C,gBAAgB;AACpB;AACA;;IAEI,+CAA+C;IAC/C,kDAAkD;IAClD,kBAAkB;IAClB,kBAAkB;AACtB;AACA;;IAEI,cAAc;IACd,eAAe;IACf,MAAM;IACN,OAAO;IACP,aAAa;IACb,YAAY;IACZ,WAAW;IACX,YAAY;IACZ,uBAAuB;AAC3B;;AAEA,eAAe;AACf;;IAEI,qCAAqC;AACzC;AACA;;IAEI;;QAEI,4BAA4B;IAChC;IACA;;QAEI,yBAAyB;IAC7B;AACJ;AACA;;IAEI,oCAAoC;AACxC;AACA;;IAEI;;QAEI,yBAAyB;IAC7B;IACA;;QAEI,4BAA4B;IAChC;AACJ;AACA;;IAEI,gCAAgC;IAChC,4BAA4B;AAChC;AACA;;IAEI;;QAEI,yBAAyB;IAC7B;IACA;;QAEI,wBAAwB;IAC5B;AACJ;AACA;;IAEI,8BAA8B;IAC9B,4BAA4B;AAChC;AACA;;IAEI;;QAEI,wBAAwB;IAC5B;IACA;;QAEI,yBAAyB;IAC7B;AACJ;AACA;;IAEI,+BAA+B;AACnC;AACA;;IAEI;;QAEI,WAAW;IACf;IACA;;QAEI,YAAY;IAChB;AACJ;AACA;;IAEI,gCAAgC;;AAEpC;AACA;;IAEI;;QAEI,YAAY;IAChB;IACA;;QAEI,WAAW;IACf;AACJ","sourcesContent":["/*-------------------------Header---------------------------------*/\n#expand-menu-btn\n{\n  position: fixed;\n  top: 0;\n  left: 0;\n  display: flex;\n  border-radius: 50%;\n  color: white;\n  padding: 1vh 1vw;\n  font-size: 4vmin;\n}\n/*-------------------------Sliding Menu---------------------------------*/\n#left-menu\n{\n    position: fixed;\n    display: flex;\n    background-color: rgba(0, 0, 0, 0.5);\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: stretch;\n    top: 0%;\n    left: 0%;\n    height: 100%;\n    color: white;\n    width: 12vw;\n    z-index: 999;\n    box-shadow: 0 3px 5px black;\n}\n#top-div-left-menu\n{\n    height: 6vh;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    gap: 1vw;\n    align-items: center;\n    padding: 0 1vw;\n}\n#retract-menu-btn\n{\n    font-size: 3vmin;\n}\n#name-menu\n{\n    font-size: 2vmin;\n}\n#list-btn-container\n{\n    display: flex;\n    flex-direction: column;\n    align-items: stretch;\n    justify-content: flex-start;\n    border-bottom: .05vh solid rgba(0, 0, 0, 0.5);\n}\n#lists-container\n{\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: stretch;\n    font-size: 1.5vmin;\n}\n.listItem\n{\n    border-top: .05vh solid rgba(0, 0, 0);\n    border-bottom: .05vh solid rgba(0, 0, 0, 0.5);\n    padding: 1vh 0vw;\n}\n.menu-btn\n{\n    border-top: .1vh solid rgba(255, 255, 255, 0.5);\n    border-bottom: .1vh solid rgba(255, 255, 255, 0.5);\n    padding: 1.5vh 0vw;\n    font-size: 2.5vmin;\n}\n#screen-cover\n{\n    display: block;\n    position: fixed;\n    top: 0;\n    left: 0;\n    height: 100vh;\n    width: 100vw;\n    z-index: 99;\n    opacity: 30%;\n    background-color: black;\n}\n\n/* Animations */\n.slideRight\n{\n    animation: slideRight .2s ease-in-out;\n}\n@keyframes slideRight\n{\n    0%\n    {\n        transform: translateX(-100%);\n    }\n    100%\n    {\n        transform: translateX(0%);\n    }\n}\n.slideLeft\n{\n    animation: slideLeft .2s ease-in-out;\n}\n@keyframes slideLeft\n{\n    0%\n    {\n        transform: translateX(0%);\n    }\n    100%\n    {\n        transform: translateX(-100%);\n    }\n} \n.slideDown\n{\n    animation: slideDown .2s ease-in;\n    transform-origin: top center;\n}\n@keyframes slideDown\n{\n    0%\n    {\n        transform: rotateX(90deg);\n    }\n    100%\n    {\n        transform: rotateX(0deg);\n    }\n} \n.slideUp\n{\n    animation: slideUp .2s ease-in;\n    transform-origin: top center;\n}\n@keyframes slideUp\n{\n    0%\n    {\n        transform: rotateX(0deg);\n    }\n    100%\n    {\n        transform: rotateX(90deg);\n    }\n} \n.opIn\n{\n    animation: opIn .2s ease-in-out;\n}\n@keyframes opIn \n{\n    0% \n    {\n        opacity: 0%;\n    }\n    100%\n    {\n        opacity: 30%;\n    }\n}\n.opOut\n{\n    animation: opOut .2s ease-in-out;\n\n}\n@keyframes opOut\n{\n    0% \n    {\n        opacity: 30%;\n    }\n    100%\n    {\n        opacity: 0%;\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



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

/***/ "./src/DOM/Index/page.css":
/*!********************************!*\
  !*** ./src/DOM/Index/page.css ***!
  \********************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_page_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./page.css */ "./node_modules/css-loader/dist/cjs.js!./src/DOM/Index/page.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_page_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_page_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_page_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_page_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/DOM/MainTab/main.css":
/*!**********************************!*\
  !*** ./src/DOM/MainTab/main.css ***!
  \**********************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/DOM/MainTab/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/DOM/Menu/menu.css":
/*!*******************************!*\
  !*** ./src/DOM/Menu/menu.css ***!
  \*******************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./menu.css */ "./node_modules/css-loader/dist/cjs.js!./src/DOM/Menu/menu.css");

      
      
      
      
      
      
      
      
      

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

/***/ "./src/DOM/MainTab/main.js":
/*!*********************************!*\
  !*** ./src/DOM/MainTab/main.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.css */ "./src/DOM/MainTab/main.css");
/* harmony import */ var _src_DOM_elementCreator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/DOM/elementCreator.js */ "./src/DOM/elementCreator.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() =>
{
    const content = document.getElementById('content');
    const welcome = (0,_src_DOM_elementCreator_js__WEBPACK_IMPORTED_MODULE_1__["default"])('div', 'welcome', 'Welcome to ToDo');
    content.appendChild(welcome);
    const welcome2 = (0,_src_DOM_elementCreator_js__WEBPACK_IMPORTED_MODULE_1__["default"])('div', 'welcome2', 'Your Source of Productivity.');
    content.appendChild(welcome2);
    const button = (0,_src_DOM_elementCreator_js__WEBPACK_IMPORTED_MODULE_1__["default"])('button', 'go-to-daily', 'Go to daily tasks →');
    content.appendChild(button);

    button.addEventListener('click',  () =>
    {
        __webpack_require__.e(/*! import() | daily */ "daily").then(__webpack_require__.bind(__webpack_require__, /*! ../../../../src/DOM/DailyTab/daily.js */ "./src/DOM/DailyTab/daily.js")).then(({ default: loadTab})=>{loadTab()} );
    })
});

/***/ }),

/***/ "./src/DOM/Menu/menu.js":
/*!******************************!*\
  !*** ./src/DOM/Menu/menu.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _menu_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.css */ "./src/DOM/Menu/menu.css");
/* harmony import */ var _src_DOM_elementCreator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/DOM/elementCreator.js */ "./src/DOM/elementCreator.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() =>
{
    // Create Menu expending button
    const expandMenuButton = (0,_src_DOM_elementCreator_js__WEBPACK_IMPORTED_MODULE_1__["default"])('button', 'expand-menu-btn', '☰');
    document.body.appendChild(expandMenuButton);

    //--------------------------Create left menu --------------------------------------//
    const leftMenu = (0,_src_DOM_elementCreator_js__WEBPACK_IMPORTED_MODULE_1__["default"])('div', 'left-menu','', '');

    // Horizontal div for menu button and name
    const topDivLeftMenu = (0,_src_DOM_elementCreator_js__WEBPACK_IMPORTED_MODULE_1__["default"])('div', 'top-div-left-menu','');
    leftMenu.appendChild(topDivLeftMenu);

    // Menu retract button
    const retractMenuButton = (0,_src_DOM_elementCreator_js__WEBPACK_IMPORTED_MODULE_1__["default"])('button', 'retract-menu-btn', '☰');
    topDivLeftMenu.appendChild(retractMenuButton);

    // Name of site
    const credit = (0,_src_DOM_elementCreator_js__WEBPACK_IMPORTED_MODULE_1__["default"])('div', 'name-menu', '©Shay Shahal');
    topDivLeftMenu.appendChild(credit);

    // Create screen cover for rest of main screen when menu is open
    const screenCover = (0,_src_DOM_elementCreator_js__WEBPACK_IMPORTED_MODULE_1__["default"])('div', 'screen-cover', '');

    // Create button to go to current day tasks
    const dailyBtn = (0,_src_DOM_elementCreator_js__WEBPACK_IMPORTED_MODULE_1__["default"])('button', 'dly-btn', 'My Day', 'menu-btn');
    leftMenu.appendChild(dailyBtn);

    // Create button to go to current day tasks
    const allBtn = (0,_src_DOM_elementCreator_js__WEBPACK_IMPORTED_MODULE_1__["default"])('button', 'all-btn', 'All tasks', 'menu-btn');
    leftMenu.appendChild(allBtn);

    // Create button to go to current day tasks
    const listContainer = (0,_src_DOM_elementCreator_js__WEBPACK_IMPORTED_MODULE_1__["default"])('div', 'list-btn-container', '');
    leftMenu.appendChild(listContainer);
    const listsBtn = (0,_src_DOM_elementCreator_js__WEBPACK_IMPORTED_MODULE_1__["default"])('button', 'list-btn', 'My Lists', 'menu-btn');
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
    const container = (0,_src_DOM_elementCreator_js__WEBPACK_IMPORTED_MODULE_1__["default"])('div','lists-container', '');
    for (let i = 0; i < 5; i++) 
    {
        const list = (0,_src_DOM_elementCreator_js__WEBPACK_IMPORTED_MODULE_1__["default"])('button', 'list-item' + i, 'List ' + i, 'listItem')
        container.appendChild(list);
    }
    return container;
}

/***/ }),

/***/ "./src/DOM/elementCreator.js":
/*!***********************************!*\
  !*** ./src/DOM/elementCreator.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((eType, id, textContent, className = false) =>
{
    const element = document.createElement(eType);
    element.textContent = textContent;
    element.id = id;
    if(className)
        element.classList.add(className);
    return element;
});

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************************!*\
  !*** ./src/DOM/Index/index.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page.css */ "./src/DOM/Index/page.css");
/* harmony import */ var _src_DOM_Menu_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/DOM/Menu/menu.js */ "./src/DOM/Menu/menu.js");
/* harmony import */ var _src_DOM_MainTab_main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/DOM/MainTab/main.js */ "./src/DOM/MainTab/main.js");




if (true) {
    console.log('Looks like we are in development mode!');
  }

(0,_src_DOM_Menu_menu_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_src_DOM_MainTab_main_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU07V0FDTjtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7V0NyRkE7Ozs7Ozs7Ozs7Ozs7O0FDQW1CO0FBQzBCO0FBQ0c7O0FBRWhELElBQUksSUFBcUM7QUFDekM7QUFDQTs7QUFFQSxpRUFBUTtBQUNSLG9FQUFRLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL0RPTS9JbmRleC9wYWdlLmNzcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL0RPTS9NYWluVGFiL21haW4uY3NzIiwid2VicGFjazovL3RvZG8vLi9zcmMvRE9NL01lbnUvbWVudS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvRE9NL0luZGV4L3BhZ2UuY3NzPzc1YmQiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9ET00vTWFpblRhYi9tYWluLmNzcz81YzJiIiwid2VicGFjazovL3RvZG8vLi9zcmMvRE9NL01lbnUvbWVudS5jc3M/MDc5ZSIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvRE9NL01haW5UYWIvbWFpbi5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL0RPTS9NZW51L21lbnUuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9ET00vZWxlbWVudENyZWF0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2Vuc3VyZSBjaHVuayIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9nZXQgamF2YXNjcmlwdCBjaHVuayBmaWxlbmFtZSIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2xvYWQgc2NyaXB0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9ET00vSW5kZXgvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqXFxue1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5odG1sLCBib2R5XFxue1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYigxNDYsIDcyLCA3MikgMyUsIHJnYigzOCwgMTIxLCAxODApIDEwMCUpO1xcbiAgICBmb250LXNpemU6IDF2bWF4O1xcbn1cXG5idXR0b25cXG57XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL0RPTS9JbmRleC9wYWdlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7SUFFSSxzQkFBc0I7SUFDdEIsU0FBUztJQUNULGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsaUJBQWlCO0FBQ3JCO0FBQ0E7O0lBRUksYUFBYTtJQUNiLFlBQVk7SUFDWixzRkFBc0Y7SUFDdEYsZ0JBQWdCO0FBQ3BCO0FBQ0E7O0lBRUksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsNkJBQTZCO0lBQzdCLGVBQWU7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKlxcbntcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuaHRtbCwgYm9keVxcbntcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2IoMTQ2LCA3MiwgNzIpIDMlLCByZ2IoMzgsIDEyMSwgMTgwKSAxMDAlKTtcXG4gICAgZm9udC1zaXplOiAxdm1heDtcXG59XFxuYnV0dG9uXFxue1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiNjb250ZW50XFxue1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xcbiAgICBcXG59XFxuI3dlbGNvbWVcXG57XFxuICAgIGZvbnQtc2l6ZTogMTJ2bWluO1xcbiAgICBhbmltYXRpb246IGVudHJhbmNlIDJzIGN1YmljLWJlemllcigwLDEsLjMsMSk7XFxufVxcbiN3ZWxjb21lMlxcbntcXG4gICAgZm9udC1zaXplOiA0dm1pbjtcXG4gICAgYW5pbWF0aW9uOiBlbnRyYW5jZTIgMi41cyBjdWJpYy1iZXppZXIoMCwxLC41LDEpO1xcbn1cXG4jZ28tdG8tZGFpbHlcXG57XFxuICAgIHBhZGRpbmc6IDF2aCAwdnc7XFxuICAgIGZvbnQtc2l6ZTogM3ZtaW47XFxuICAgIGNvbG9yOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIGJsYWNrIDAlLCB3aGl0ZSAxMDAlKTtcXG4gICAgYW5pbWF0aW9uOiBlbnRyYW5jZTMgMnMgY3ViaWMtYmV6aWVyKDAsMSwuNSwxKTtcXG59XFxuLyoqKioqKioqKioqKioqKioqKioqKioqKipBTklNQVRJT05TKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcblxcbkBrZXlmcmFtZXMgZW50cmFuY2VcXG57XFxuICAgIDAlXFxuICAgIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAwJSk7XFxuICAgIH1cXG4gICAgMTAwJVxcbiAgICB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xcbiAgICB9XFxufVxcbkBrZXlmcmFtZXMgZW50cmFuY2UyXFxue1xcbiAgICAwJVxcbiAgICB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwMCUpO1xcbiAgICB9XFxuICAgIDEwMCVcXG4gICAge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcXG4gICAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGVudHJhbmNlM1xcbntcXG4gICAgMCVcXG4gICAge1xcbiAgICAgICAgb3BhY2l0eTogMCU7XFxuICAgIH1cXG4gICAgMTAwJVxcbiAgICB7XFxuICAgICAgICBvcGFjaXR5OiAxMDAlO1xcbiAgICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9ET00vTWFpblRhYi9tYWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7SUFFSSxZQUFZO0lBQ1osV0FBVztJQUNYLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjs7QUFFdEI7QUFDQTs7SUFFSSxpQkFBaUI7SUFDakIsNkNBQTZDO0FBQ2pEO0FBQ0E7O0lBRUksZ0JBQWdCO0lBQ2hCLGdEQUFnRDtBQUNwRDtBQUNBOztJQUVJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsbURBQW1EO0lBQ25ELDhDQUE4QztBQUNsRDtBQUNBLCtEQUErRDs7QUFFL0Q7O0lBRUk7O1FBRUksNEJBQTRCO0lBQ2hDO0lBQ0E7O1FBRUkseUJBQXlCO0lBQzdCO0FBQ0o7QUFDQTs7SUFFSTs7UUFFSSw0QkFBNEI7SUFDaEM7SUFDQTs7UUFFSSx5QkFBeUI7SUFDN0I7QUFDSjtBQUNBOztJQUVJOztRQUVJLFdBQVc7SUFDZjtJQUNBOztRQUVJLGFBQWE7SUFDakI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIjY29udGVudFxcbntcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcXG4gICAgXFxufVxcbiN3ZWxjb21lXFxue1xcbiAgICBmb250LXNpemU6IDEydm1pbjtcXG4gICAgYW5pbWF0aW9uOiBlbnRyYW5jZSAycyBjdWJpYy1iZXppZXIoMCwxLC4zLDEpO1xcbn1cXG4jd2VsY29tZTJcXG57XFxuICAgIGZvbnQtc2l6ZTogNHZtaW47XFxuICAgIGFuaW1hdGlvbjogZW50cmFuY2UyIDIuNXMgY3ViaWMtYmV6aWVyKDAsMSwuNSwxKTtcXG59XFxuI2dvLXRvLWRhaWx5XFxue1xcbiAgICBwYWRkaW5nOiAxdmggMHZ3O1xcbiAgICBmb250LXNpemU6IDN2bWluO1xcbiAgICBjb2xvcjogbGluZWFyLWdyYWRpZW50KDkwZGVnLCBibGFjayAwJSwgd2hpdGUgMTAwJSk7XFxuICAgIGFuaW1hdGlvbjogZW50cmFuY2UzIDJzIGN1YmljLWJlemllcigwLDEsLjUsMSk7XFxufVxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqQU5JTUFUSU9OUyoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG5cXG5Aa2V5ZnJhbWVzIGVudHJhbmNlXFxue1xcbiAgICAwJVxcbiAgICB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwMCUpO1xcbiAgICB9XFxuICAgIDEwMCVcXG4gICAge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcXG4gICAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGVudHJhbmNlMlxcbntcXG4gICAgMCVcXG4gICAge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMDAlKTtcXG4gICAgfVxcbiAgICAxMDAlXFxuICAgIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XFxuICAgIH1cXG59XFxuQGtleWZyYW1lcyBlbnRyYW5jZTNcXG57XFxuICAgIDAlXFxuICAgIHtcXG4gICAgICAgIG9wYWNpdHk6IDAlO1xcbiAgICB9XFxuICAgIDEwMCVcXG4gICAge1xcbiAgICAgICAgb3BhY2l0eTogMTAwJTtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1IZWFkZXItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcbiNleHBhbmQtbWVudS1idG5cXG57XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDF2aCAxdnc7XFxuICBmb250LXNpemU6IDR2bWluO1xcbn1cXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1TbGlkaW5nIE1lbnUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcbiNsZWZ0LW1lbnVcXG57XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgICB0b3A6IDAlO1xcbiAgICBsZWZ0OiAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHdpZHRoOiAxMnZ3O1xcbiAgICB6LWluZGV4OiA5OTk7XFxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDVweCBibGFjaztcXG59XFxuI3RvcC1kaXYtbGVmdC1tZW51XFxue1xcbiAgICBoZWlnaHQ6IDZ2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBnYXA6IDF2dztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMCAxdnc7XFxufVxcbiNyZXRyYWN0LW1lbnUtYnRuXFxue1xcbiAgICBmb250LXNpemU6IDN2bWluO1xcbn1cXG4jbmFtZS1tZW51XFxue1xcbiAgICBmb250LXNpemU6IDJ2bWluO1xcbn1cXG4jbGlzdC1idG4tY29udGFpbmVyXFxue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBib3JkZXItYm90dG9tOiAuMDV2aCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxufVxcbiNsaXN0cy1jb250YWluZXJcXG57XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICAgIGZvbnQtc2l6ZTogMS41dm1pbjtcXG59XFxuLmxpc3RJdGVtXFxue1xcbiAgICBib3JkZXItdG9wOiAuMDV2aCBzb2xpZCByZ2JhKDAsIDAsIDApO1xcbiAgICBib3JkZXItYm90dG9tOiAuMDV2aCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICAgIHBhZGRpbmc6IDF2aCAwdnc7XFxufVxcbi5tZW51LWJ0blxcbntcXG4gICAgYm9yZGVyLXRvcDogLjF2aCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxuICAgIGJvcmRlci1ib3R0b206IC4xdmggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcbiAgICBwYWRkaW5nOiAxLjV2aCAwdnc7XFxuICAgIGZvbnQtc2l6ZTogMi41dm1pbjtcXG59XFxuI3NjcmVlbi1jb3ZlclxcbntcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIHotaW5kZXg6IDk5O1xcbiAgICBvcGFjaXR5OiAzMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4vKiBBbmltYXRpb25zICovXFxuLnNsaWRlUmlnaHRcXG57XFxuICAgIGFuaW1hdGlvbjogc2xpZGVSaWdodCAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcbkBrZXlmcmFtZXMgc2xpZGVSaWdodFxcbntcXG4gICAgMCVcXG4gICAge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcXG4gICAgfVxcbiAgICAxMDAlXFxuICAgIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XFxuICAgIH1cXG59XFxuLnNsaWRlTGVmdFxcbntcXG4gICAgYW5pbWF0aW9uOiBzbGlkZUxlZnQgLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5Aa2V5ZnJhbWVzIHNsaWRlTGVmdFxcbntcXG4gICAgMCVcXG4gICAge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcXG4gICAgfVxcbiAgICAxMDAlXFxuICAgIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XFxuICAgIH1cXG59IFxcbi5zbGlkZURvd25cXG57XFxuICAgIGFuaW1hdGlvbjogc2xpZGVEb3duIC4ycyBlYXNlLWluO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgY2VudGVyO1xcbn1cXG5Aa2V5ZnJhbWVzIHNsaWRlRG93blxcbntcXG4gICAgMCVcXG4gICAge1xcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKDkwZGVnKTtcXG4gICAgfVxcbiAgICAxMDAlXFxuICAgIHtcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTtcXG4gICAgfVxcbn0gXFxuLnNsaWRlVXBcXG57XFxuICAgIGFuaW1hdGlvbjogc2xpZGVVcCAuMnMgZWFzZS1pbjtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIGNlbnRlcjtcXG59XFxuQGtleWZyYW1lcyBzbGlkZVVwXFxue1xcbiAgICAwJVxcbiAgICB7XFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XFxuICAgIH1cXG4gICAgMTAwJVxcbiAgICB7XFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoOTBkZWcpO1xcbiAgICB9XFxufSBcXG4ub3BJblxcbntcXG4gICAgYW5pbWF0aW9uOiBvcEluIC4ycyBlYXNlLWluLW91dDtcXG59XFxuQGtleWZyYW1lcyBvcEluIFxcbntcXG4gICAgMCUgXFxuICAgIHtcXG4gICAgICAgIG9wYWNpdHk6IDAlO1xcbiAgICB9XFxuICAgIDEwMCVcXG4gICAge1xcbiAgICAgICAgb3BhY2l0eTogMzAlO1xcbiAgICB9XFxufVxcbi5vcE91dFxcbntcXG4gICAgYW5pbWF0aW9uOiBvcE91dCAuMnMgZWFzZS1pbi1vdXQ7XFxuXFxufVxcbkBrZXlmcmFtZXMgb3BPdXRcXG57XFxuICAgIDAlIFxcbiAgICB7XFxuICAgICAgICBvcGFjaXR5OiAzMCU7XFxuICAgIH1cXG4gICAgMTAwJVxcbiAgICB7XFxuICAgICAgICBvcGFjaXR5OiAwJTtcXG4gICAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvRE9NL01lbnUvbWVudS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsbUVBQW1FO0FBQ25FOztFQUVFLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7QUFDQSx5RUFBeUU7QUFDekU7O0lBRUksZUFBZTtJQUNmLGFBQWE7SUFDYixvQ0FBb0M7SUFDcEMsc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQixvQkFBb0I7SUFDcEIsT0FBTztJQUNQLFFBQVE7SUFDUixZQUFZO0lBQ1osWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0lBQ1osMkJBQTJCO0FBQy9CO0FBQ0E7O0lBRUksV0FBVztJQUNYLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLFFBQVE7SUFDUixtQkFBbUI7SUFDbkIsY0FBYztBQUNsQjtBQUNBOztJQUVJLGdCQUFnQjtBQUNwQjtBQUNBOztJQUVJLGdCQUFnQjtBQUNwQjtBQUNBOztJQUVJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsb0JBQW9CO0lBQ3BCLDJCQUEyQjtJQUMzQiw2Q0FBNkM7QUFDakQ7QUFDQTs7SUFFSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQixvQkFBb0I7SUFDcEIsa0JBQWtCO0FBQ3RCO0FBQ0E7O0lBRUkscUNBQXFDO0lBQ3JDLDZDQUE2QztJQUM3QyxnQkFBZ0I7QUFDcEI7QUFDQTs7SUFFSSwrQ0FBK0M7SUFDL0Msa0RBQWtEO0lBQ2xELGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7QUFDQTs7SUFFSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsYUFBYTtJQUNiLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtJQUNaLHVCQUF1QjtBQUMzQjs7QUFFQSxlQUFlO0FBQ2Y7O0lBRUkscUNBQXFDO0FBQ3pDO0FBQ0E7O0lBRUk7O1FBRUksNEJBQTRCO0lBQ2hDO0lBQ0E7O1FBRUkseUJBQXlCO0lBQzdCO0FBQ0o7QUFDQTs7SUFFSSxvQ0FBb0M7QUFDeEM7QUFDQTs7SUFFSTs7UUFFSSx5QkFBeUI7SUFDN0I7SUFDQTs7UUFFSSw0QkFBNEI7SUFDaEM7QUFDSjtBQUNBOztJQUVJLGdDQUFnQztJQUNoQyw0QkFBNEI7QUFDaEM7QUFDQTs7SUFFSTs7UUFFSSx5QkFBeUI7SUFDN0I7SUFDQTs7UUFFSSx3QkFBd0I7SUFDNUI7QUFDSjtBQUNBOztJQUVJLDhCQUE4QjtJQUM5Qiw0QkFBNEI7QUFDaEM7QUFDQTs7SUFFSTs7UUFFSSx3QkFBd0I7SUFDNUI7SUFDQTs7UUFFSSx5QkFBeUI7SUFDN0I7QUFDSjtBQUNBOztJQUVJLCtCQUErQjtBQUNuQztBQUNBOztJQUVJOztRQUVJLFdBQVc7SUFDZjtJQUNBOztRQUVJLFlBQVk7SUFDaEI7QUFDSjtBQUNBOztJQUVJLGdDQUFnQzs7QUFFcEM7QUFDQTs7SUFFSTs7UUFFSSxZQUFZO0lBQ2hCO0lBQ0E7O1FBRUksV0FBVztJQUNmO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tSGVhZGVyLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG4jZXhwYW5kLW1lbnUtYnRuXFxue1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAxdmggMXZ3O1xcbiAgZm9udC1zaXplOiA0dm1pbjtcXG59XFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tU2xpZGluZyBNZW51LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG4jbGVmdC1tZW51XFxue1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gICAgdG9wOiAwJTtcXG4gICAgbGVmdDogMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB3aWR0aDogMTJ2dztcXG4gICAgei1pbmRleDogOTk5O1xcbiAgICBib3gtc2hhZG93OiAwIDNweCA1cHggYmxhY2s7XFxufVxcbiN0b3AtZGl2LWxlZnQtbWVudVxcbntcXG4gICAgaGVpZ2h0OiA2dmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZ2FwOiAxdnc7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAgMXZ3O1xcbn1cXG4jcmV0cmFjdC1tZW51LWJ0blxcbntcXG4gICAgZm9udC1zaXplOiAzdm1pbjtcXG59XFxuI25hbWUtbWVudVxcbntcXG4gICAgZm9udC1zaXplOiAydm1pbjtcXG59XFxuI2xpc3QtYnRuLWNvbnRhaW5lclxcbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYm9yZGVyLWJvdHRvbTogLjA1dmggc29saWQgcmdiYSgwLCAwLCAwLCAwLjUpO1xcbn1cXG4jbGlzdHMtY29udGFpbmVyXFxue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgICBmb250LXNpemU6IDEuNXZtaW47XFxufVxcbi5saXN0SXRlbVxcbntcXG4gICAgYm9yZGVyLXRvcDogLjA1dmggc29saWQgcmdiYSgwLCAwLCAwKTtcXG4gICAgYm9yZGVyLWJvdHRvbTogLjA1dmggc29saWQgcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgICBwYWRkaW5nOiAxdmggMHZ3O1xcbn1cXG4ubWVudS1idG5cXG57XFxuICAgIGJvcmRlci10b3A6IC4xdmggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcbiAgICBib3JkZXItYm90dG9tOiAuMXZoIHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG4gICAgcGFkZGluZzogMS41dmggMHZ3O1xcbiAgICBmb250LXNpemU6IDIuNXZtaW47XFxufVxcbiNzY3JlZW4tY292ZXJcXG57XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICB6LWluZGV4OiA5OTtcXG4gICAgb3BhY2l0eTogMzAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuLyogQW5pbWF0aW9ucyAqL1xcbi5zbGlkZVJpZ2h0XFxue1xcbiAgICBhbmltYXRpb246IHNsaWRlUmlnaHQgLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5Aa2V5ZnJhbWVzIHNsaWRlUmlnaHRcXG57XFxuICAgIDAlXFxuICAgIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XFxuICAgIH1cXG4gICAgMTAwJVxcbiAgICB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xcbiAgICB9XFxufVxcbi5zbGlkZUxlZnRcXG57XFxuICAgIGFuaW1hdGlvbjogc2xpZGVMZWZ0IC4ycyBlYXNlLWluLW91dDtcXG59XFxuQGtleWZyYW1lcyBzbGlkZUxlZnRcXG57XFxuICAgIDAlXFxuICAgIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XFxuICAgIH1cXG4gICAgMTAwJVxcbiAgICB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xcbiAgICB9XFxufSBcXG4uc2xpZGVEb3duXFxue1xcbiAgICBhbmltYXRpb246IHNsaWRlRG93biAuMnMgZWFzZS1pbjtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIGNlbnRlcjtcXG59XFxuQGtleWZyYW1lcyBzbGlkZURvd25cXG57XFxuICAgIDAlXFxuICAgIHtcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCg5MGRlZyk7XFxuICAgIH1cXG4gICAgMTAwJVxcbiAgICB7XFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XFxuICAgIH1cXG59IFxcbi5zbGlkZVVwXFxue1xcbiAgICBhbmltYXRpb246IHNsaWRlVXAgLjJzIGVhc2UtaW47XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcCBjZW50ZXI7XFxufVxcbkBrZXlmcmFtZXMgc2xpZGVVcFxcbntcXG4gICAgMCVcXG4gICAge1xcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xcbiAgICB9XFxuICAgIDEwMCVcXG4gICAge1xcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKDkwZGVnKTtcXG4gICAgfVxcbn0gXFxuLm9wSW5cXG57XFxuICAgIGFuaW1hdGlvbjogb3BJbiAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcbkBrZXlmcmFtZXMgb3BJbiBcXG57XFxuICAgIDAlIFxcbiAgICB7XFxuICAgICAgICBvcGFjaXR5OiAwJTtcXG4gICAgfVxcbiAgICAxMDAlXFxuICAgIHtcXG4gICAgICAgIG9wYWNpdHk6IDMwJTtcXG4gICAgfVxcbn1cXG4ub3BPdXRcXG57XFxuICAgIGFuaW1hdGlvbjogb3BPdXQgLjJzIGVhc2UtaW4tb3V0O1xcblxcbn1cXG5Aa2V5ZnJhbWVzIG9wT3V0XFxue1xcbiAgICAwJSBcXG4gICAge1xcbiAgICAgICAgb3BhY2l0eTogMzAlO1xcbiAgICB9XFxuICAgIDEwMCVcXG4gICAge1xcbiAgICAgICAgb3BhY2l0eTogMCU7XFxuICAgIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcGFnZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3BhZ2UuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tZW51LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWVudS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL21haW4uY3NzJztcbmltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gJy9zcmMvRE9NL2VsZW1lbnRDcmVhdG9yLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT5cbntcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBjb25zdCB3ZWxjb21lID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ3dlbGNvbWUnLCAnV2VsY29tZSB0byBUb0RvJyk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh3ZWxjb21lKTtcbiAgICBjb25zdCB3ZWxjb21lMiA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICd3ZWxjb21lMicsICdZb3VyIFNvdXJjZSBvZiBQcm9kdWN0aXZpdHkuJyk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh3ZWxjb21lMik7XG4gICAgY29uc3QgYnV0dG9uID0gY3JlYXRlRWxlbWVudCgnYnV0dG9uJywgJ2dvLXRvLWRhaWx5JywgJ0dvIHRvIGRhaWx5IHRhc2tzIOKGkicpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICAoKSA9PlxuICAgIHtcbiAgICAgICAgaW1wb3J0KC8qd2VicGFja0NodW5rTmFtZTogXCJkYWlseVwiKi8nL3NyYy9ET00vRGFpbHlUYWIvZGFpbHkuanMnKS50aGVuKCh7IGRlZmF1bHQ6IGxvYWRUYWJ9KT0+e2xvYWRUYWIoKX0gKTtcbiAgICB9KVxufSIsImltcG9ydCAnLi9tZW51LmNzcyc7XG5pbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tICcvc3JjL0RPTS9lbGVtZW50Q3JlYXRvci5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+XG57XG4gICAgLy8gQ3JlYXRlIE1lbnUgZXhwZW5kaW5nIGJ1dHRvblxuICAgIGNvbnN0IGV4cGFuZE1lbnVCdXR0b24gPSBjcmVhdGVFbGVtZW50KCdidXR0b24nLCAnZXhwYW5kLW1lbnUtYnRuJywgJ+KYsCcpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZXhwYW5kTWVudUJ1dHRvbik7XG5cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tQ3JlYXRlIGxlZnQgbWVudSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG4gICAgY29uc3QgbGVmdE1lbnUgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnbGVmdC1tZW51JywnJywgJycpO1xuXG4gICAgLy8gSG9yaXpvbnRhbCBkaXYgZm9yIG1lbnUgYnV0dG9uIGFuZCBuYW1lXG4gICAgY29uc3QgdG9wRGl2TGVmdE1lbnUgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAndG9wLWRpdi1sZWZ0LW1lbnUnLCcnKTtcbiAgICBsZWZ0TWVudS5hcHBlbmRDaGlsZCh0b3BEaXZMZWZ0TWVudSk7XG5cbiAgICAvLyBNZW51IHJldHJhY3QgYnV0dG9uXG4gICAgY29uc3QgcmV0cmFjdE1lbnVCdXR0b24gPSBjcmVhdGVFbGVtZW50KCdidXR0b24nLCAncmV0cmFjdC1tZW51LWJ0bicsICfimLAnKTtcbiAgICB0b3BEaXZMZWZ0TWVudS5hcHBlbmRDaGlsZChyZXRyYWN0TWVudUJ1dHRvbik7XG5cbiAgICAvLyBOYW1lIG9mIHNpdGVcbiAgICBjb25zdCBjcmVkaXQgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnbmFtZS1tZW51JywgJ8KpU2hheSBTaGFoYWwnKTtcbiAgICB0b3BEaXZMZWZ0TWVudS5hcHBlbmRDaGlsZChjcmVkaXQpO1xuXG4gICAgLy8gQ3JlYXRlIHNjcmVlbiBjb3ZlciBmb3IgcmVzdCBvZiBtYWluIHNjcmVlbiB3aGVuIG1lbnUgaXMgb3BlblxuICAgIGNvbnN0IHNjcmVlbkNvdmVyID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ3NjcmVlbi1jb3ZlcicsICcnKTtcblxuICAgIC8vIENyZWF0ZSBidXR0b24gdG8gZ28gdG8gY3VycmVudCBkYXkgdGFza3NcbiAgICBjb25zdCBkYWlseUJ0biA9IGNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsICdkbHktYnRuJywgJ015IERheScsICdtZW51LWJ0bicpO1xuICAgIGxlZnRNZW51LmFwcGVuZENoaWxkKGRhaWx5QnRuKTtcblxuICAgIC8vIENyZWF0ZSBidXR0b24gdG8gZ28gdG8gY3VycmVudCBkYXkgdGFza3NcbiAgICBjb25zdCBhbGxCdG4gPSBjcmVhdGVFbGVtZW50KCdidXR0b24nLCAnYWxsLWJ0bicsICdBbGwgdGFza3MnLCAnbWVudS1idG4nKTtcbiAgICBsZWZ0TWVudS5hcHBlbmRDaGlsZChhbGxCdG4pO1xuXG4gICAgLy8gQ3JlYXRlIGJ1dHRvbiB0byBnbyB0byBjdXJyZW50IGRheSB0YXNrc1xuICAgIGNvbnN0IGxpc3RDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnbGlzdC1idG4tY29udGFpbmVyJywgJycpO1xuICAgIGxlZnRNZW51LmFwcGVuZENoaWxkKGxpc3RDb250YWluZXIpO1xuICAgIGNvbnN0IGxpc3RzQnRuID0gY3JlYXRlRWxlbWVudCgnYnV0dG9uJywgJ2xpc3QtYnRuJywgJ015IExpc3RzJywgJ21lbnUtYnRuJyk7XG4gICAgbGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0c0J0bik7XG4gICAgbGV0IGlzT3BlbiA9IGZhbHNlO1xuICAgIGNvbnN0IGxpc3REaXYgPSBjcmVhdGVMaXN0RGl2KCk7XG5cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tRXZlbnRMaXN0ZW5lcnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuICAgIC8vIEV4cGFuZCBidXR0b25cbiAgICBleHBhbmRNZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKSA9PiBcbiAgICB7XG4gICAgICAgIGV4cGFuZFdpdGhBbmkoZG9jdW1lbnQuYm9keSwgbGVmdE1lbnUsICdzbGlkZVJpZ2h0Jyk7XG4gICAgICAgIGV4cGFuZFdpdGhBbmkoZG9jdW1lbnQuYm9keSwgc2NyZWVuQ292ZXIsICdvcEluJyk7XG4gICAgICAgIGV4cGFuZE1lbnVCdXR0b24udGV4dENvbnRlbnQgPSAnJztcbiAgICB9KTtcblxuICAgIC8vIEFuaW1hdGlvbnNcbiAgICBzY3JlZW5Db3Zlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBcbiAgICB7XG4gICAgICAgIHJldHJhY3RBbmltYXRpb24obGVmdE1lbnUsICdzbGlkZUxlZnQnKTtcbiAgICAgICAgcmV0cmFjdEFuaW1hdGlvbihlLnRhcmdldCwgJ29wT3V0Jyk7XG4gICAgfSk7XG4gICAgcmV0cmFjdE1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBcbiAgICB7XG4gICAgICAgIHJldHJhY3RBbmltYXRpb24obGVmdE1lbnUsICdzbGlkZUxlZnQnKTtcbiAgICAgICAgcmV0cmFjdEFuaW1hdGlvbihzY3JlZW5Db3ZlciwgJ29wT3V0Jyk7XG4gICAgfSk7XG5cbiAgICAvLyBFeHRyYWN0IGFmdGVyIGFuaW1hdGlvblxuICAgIGxlZnRNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsIChlKSA9PlxuICAgIHtcbiAgICAgICAgaWYoZS5hbmltYXRpb25OYW1lID09PSAnc2xpZGVMZWZ0JylcbiAgICAgICAge1xuICAgICAgICAgICAgcmVtb3ZlQWZ0ZXJBbmkoZG9jdW1lbnQuYm9keSwgZS50YXJnZXQsICdzbGlkZUxlZnQnKTtcbiAgICAgICAgICAgIHJlbW92ZUFmdGVyQW5pKGRvY3VtZW50LmJvZHksIHNjcmVlbkNvdmVyLCAnb3BPdXQnKTtcbiAgICAgICAgICAgIGV4cGFuZE1lbnVCdXR0b24udGV4dENvbnRlbnQgPSAn4piwJztcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgbGlzdHNCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBcbiAgICB7XG4gICAgICAgIGlzT3BlbiA/IHJldHJhY3RBbmltYXRpb24obGlzdERpdiwgJ3NsaWRlVXAnKSA6IGV4cGFuZFdpdGhBbmkobGlzdENvbnRhaW5lciwgbGlzdERpdiwgJ3NsaWRlRG93bicpO1xuICAgICAgICBpc09wZW4gPSAhaXNPcGVuO1xuICAgICAgICBjb25zb2xlLmxvZyhpc09wZW4pO1xuICAgIH0pO1xuICAgIGxpc3REaXYuYWRkRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgKGUpID0+IFxuICAgIHtcbiAgICAgICAgaWYoZS5hbmltYXRpb25OYW1lID09PSAnc2xpZGVVcCcpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJlbW92ZUFmdGVyQW5pKGxpc3RDb250YWluZXIsIGUudGFyZ2V0LCAnc2xpZGVVcCcpO1xuICAgICAgICB9XG4gICAgfSApO1xufVxuXG5mdW5jdGlvbiBleHBhbmRXaXRoQW5pKHBhcmVudCwgZWxlbWVudCwgYW5pKVxue1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShhbmkpO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gcmV0cmFjdEFuaW1hdGlvbihlbGVtZW50LCBhbmkpXG57XG4gICAgdmFyIGNsYXNzTGlzdCA9IGVsZW1lbnQuY2xhc3NMaXN0O1xuICAgIHdoaWxlIChjbGFzc0xpc3QubGVuZ3RoID4gMCkge1xuICAgICAgIGNsYXNzTGlzdC5yZW1vdmUoY2xhc3NMaXN0Lml0ZW0oMCkpO1xuICAgIH1cbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoYW5pKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQWZ0ZXJBbmkocGFyZW50LCBlbGVtZW50LCBhbmkpXG57XG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGFuaSk7XG4gICAgcGFyZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaXN0RGl2KClcbntcbiAgICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCdsaXN0cy1jb250YWluZXInLCAnJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIFxuICAgIHtcbiAgICAgICAgY29uc3QgbGlzdCA9IGNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsICdsaXN0LWl0ZW0nICsgaSwgJ0xpc3QgJyArIGksICdsaXN0SXRlbScpXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0KTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn0iLCJleHBvcnQgZGVmYXVsdCAoZVR5cGUsIGlkLCB0ZXh0Q29udGVudCwgY2xhc3NOYW1lID0gZmFsc2UpID0+XG57XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZVR5cGUpO1xuICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0Q29udGVudDtcbiAgICBlbGVtZW50LmlkID0gaWQ7XG4gICAgaWYoY2xhc3NOYW1lKVxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICByZXR1cm4gZWxlbWVudDtcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZiA9IHt9O1xuLy8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuLy8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSAoY2h1bmtJZCkgPT4ge1xuXHRyZXR1cm4gUHJvbWlzZS5hbGwoT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5mKS5yZWR1Y2UoKHByb21pc2VzLCBrZXkpID0+IHtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmZba2V5XShjaHVua0lkLCBwcm9taXNlcyk7XG5cdFx0cmV0dXJuIHByb21pc2VzO1xuXHR9LCBbXSkpO1xufTsiLCIvLyBUaGlzIGZ1bmN0aW9uIGFsbG93IHRvIHJlZmVyZW5jZSBhc3luYyBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18udSA9IChjaHVua0lkKSA9PiB7XG5cdC8vIHJldHVybiB1cmwgZm9yIGZpbGVuYW1lcyBiYXNlZCBvbiB0ZW1wbGF0ZVxuXHRyZXR1cm4gXCJcIiArIGNodW5rSWQgKyBcIi5qc1wiO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCJ2YXIgaW5Qcm9ncmVzcyA9IHt9O1xudmFyIGRhdGFXZWJwYWNrUHJlZml4ID0gXCJ0b2RvOlwiO1xuLy8gbG9hZFNjcmlwdCBmdW5jdGlvbiB0byBsb2FkIGEgc2NyaXB0IHZpYSBzY3JpcHQgdGFnXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmwgPSAodXJsLCBkb25lLCBrZXksIGNodW5rSWQpID0+IHtcblx0aWYoaW5Qcm9ncmVzc1t1cmxdKSB7IGluUHJvZ3Jlc3NbdXJsXS5wdXNoKGRvbmUpOyByZXR1cm47IH1cblx0dmFyIHNjcmlwdCwgbmVlZEF0dGFjaDtcblx0aWYoa2V5ICE9PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBzY3JpcHRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgcyA9IHNjcmlwdHNbaV07XG5cdFx0XHRpZihzLmdldEF0dHJpYnV0ZShcInNyY1wiKSA9PSB1cmwgfHwgcy5nZXRBdHRyaWJ1dGUoXCJkYXRhLXdlYnBhY2tcIikgPT0gZGF0YVdlYnBhY2tQcmVmaXggKyBrZXkpIHsgc2NyaXB0ID0gczsgYnJlYWs7IH1cblx0XHR9XG5cdH1cblx0aWYoIXNjcmlwdCkge1xuXHRcdG5lZWRBdHRhY2ggPSB0cnVlO1xuXHRcdHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuXG5cdFx0c2NyaXB0LmNoYXJzZXQgPSAndXRmLTgnO1xuXHRcdHNjcmlwdC50aW1lb3V0ID0gMTIwO1xuXHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKSB7XG5cdFx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgX193ZWJwYWNrX3JlcXVpcmVfXy5uYyk7XG5cdFx0fVxuXHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXdlYnBhY2tcIiwgZGF0YVdlYnBhY2tQcmVmaXggKyBrZXkpO1xuXHRcdHNjcmlwdC5zcmMgPSB1cmw7XG5cdH1cblx0aW5Qcm9ncmVzc1t1cmxdID0gW2RvbmVdO1xuXHR2YXIgb25TY3JpcHRDb21wbGV0ZSA9IChwcmV2LCBldmVudCkgPT4ge1xuXHRcdC8vIGF2b2lkIG1lbSBsZWFrcyBpbiBJRS5cblx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBudWxsO1xuXHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcblx0XHR2YXIgZG9uZUZucyA9IGluUHJvZ3Jlc3NbdXJsXTtcblx0XHRkZWxldGUgaW5Qcm9ncmVzc1t1cmxdO1xuXHRcdHNjcmlwdC5wYXJlbnROb2RlICYmIHNjcmlwdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNjcmlwdCk7XG5cdFx0ZG9uZUZucyAmJiBkb25lRm5zLmZvckVhY2goKGZuKSA9PiAoZm4oZXZlbnQpKSk7XG5cdFx0aWYocHJldikgcmV0dXJuIHByZXYoZXZlbnQpO1xuXHR9O1xuXHR2YXIgdGltZW91dCA9IHNldFRpbWVvdXQob25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHVuZGVmaW5lZCwgeyB0eXBlOiAndGltZW91dCcsIHRhcmdldDogc2NyaXB0IH0pLCAxMjAwMDApO1xuXHRzY3JpcHQub25lcnJvciA9IG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCBzY3JpcHQub25lcnJvcik7XG5cdHNjcmlwdC5vbmxvYWQgPSBvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgc2NyaXB0Lm9ubG9hZCk7XG5cdG5lZWRBdHRhY2ggJiYgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xufTsiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5mLmogPSAoY2h1bmtJZCwgcHJvbWlzZXMpID0+IHtcblx0XHQvLyBKU09OUCBjaHVuayBsb2FkaW5nIGZvciBqYXZhc2NyaXB0XG5cdFx0dmFyIGluc3RhbGxlZENodW5rRGF0YSA9IF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpID8gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdIDogdW5kZWZpbmVkO1xuXHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSAhPT0gMCkgeyAvLyAwIG1lYW5zIFwiYWxyZWFkeSBpbnN0YWxsZWRcIi5cblxuXHRcdFx0Ly8gYSBQcm9taXNlIG1lYW5zIFwiY3VycmVudGx5IGxvYWRpbmdcIi5cblx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuXHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZih0cnVlKSB7IC8vIGFsbCBjaHVua3MgaGF2ZSBKU1xuXHRcdFx0XHRcdC8vIHNldHVwIFByb21pc2UgaW4gY2h1bmsgY2FjaGVcblx0XHRcdFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IChpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSBbcmVzb2x2ZSwgcmVqZWN0XSkpO1xuXHRcdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdID0gcHJvbWlzZSk7XG5cblx0XHRcdFx0XHQvLyBzdGFydCBjaHVuayBsb2FkaW5nXG5cdFx0XHRcdFx0dmFyIHVybCA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIF9fd2VicGFja19yZXF1aXJlX18udShjaHVua0lkKTtcblx0XHRcdFx0XHQvLyBjcmVhdGUgZXJyb3IgYmVmb3JlIHN0YWNrIHVud291bmQgdG8gZ2V0IHVzZWZ1bCBzdGFja3RyYWNlIGxhdGVyXG5cdFx0XHRcdFx0dmFyIGVycm9yID0gbmV3IEVycm9yKCk7XG5cdFx0XHRcdFx0dmFyIGxvYWRpbmdFbmRlZCA9IChldmVudCkgPT4ge1xuXHRcdFx0XHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkpIHtcblx0XHRcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuXHRcdFx0XHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IHVuZGVmaW5lZDtcblx0XHRcdFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhKSB7XG5cdFx0XHRcdFx0XHRcdFx0dmFyIGVycm9yVHlwZSA9IGV2ZW50ICYmIChldmVudC50eXBlID09PSAnbG9hZCcgPyAnbWlzc2luZycgOiBldmVudC50eXBlKTtcblx0XHRcdFx0XHRcdFx0XHR2YXIgcmVhbFNyYyA9IGV2ZW50ICYmIGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQuc3JjO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLm1lc3NhZ2UgPSAnTG9hZGluZyBjaHVuayAnICsgY2h1bmtJZCArICcgZmFpbGVkLlxcbignICsgZXJyb3JUeXBlICsgJzogJyArIHJlYWxTcmMgKyAnKSc7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IubmFtZSA9ICdDaHVua0xvYWRFcnJvcic7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IudHlwZSA9IGVycm9yVHlwZTtcblx0XHRcdFx0XHRcdFx0XHRlcnJvci5yZXF1ZXN0ID0gcmVhbFNyYztcblx0XHRcdFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGFbMV0oZXJyb3IpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmwodXJsLCBsb2FkaW5nRW5kZWQsIFwiY2h1bmstXCIgKyBjaHVua0lkLCBjaHVua0lkKTtcblx0XHRcdFx0fSBlbHNlIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdFx0XHR9XG5cdFx0fVxufTtcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblxufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua3RvZG9cIl0gPSBzZWxmW1wid2VicGFja0NodW5rdG9kb1wiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vcGFnZS5jc3MnXG5pbXBvcnQgbG9hZE1lbnUgZnJvbSAnL3NyYy9ET00vTWVudS9tZW51LmpzJztcbmltcG9ydCBsb2FkTWFpbiBmcm9tICcvc3JjL0RPTS9NYWluVGFiL21haW4uanMnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnNvbGUubG9nKCdMb29rcyBsaWtlIHdlIGFyZSBpbiBkZXZlbG9wbWVudCBtb2RlIScpO1xuICB9XG5cbmxvYWRNZW51KCk7XG5sb2FkTWFpbigpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==