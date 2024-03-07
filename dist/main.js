/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/Components/Footer.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/Components/Footer.css ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `footer {
  height: var(--footer-height);
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  padding: 12px;
  background-color: var(--footer-color);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.credit {
  text-align: center;
  font-size: .95rem;
}

.credit-a {
  display: flex;
  justify-content: center;
  align-items: center;
}

.credit-a > img {
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
}`, "",{"version":3,"sources":["webpack://./src/Components/Footer.css"],"names":[],"mappings":"AAAA;EACE,4BAA4B;EAC5B,kBAAkB;EAClB,SAAS;EACT,QAAQ;EACR,OAAO;EACP,aAAa;EACb,qCAAqC;EACrC,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,QAAQ;AACV;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,cAAc;EACd,kBAAkB;AACpB","sourcesContent":["footer {\n  height: var(--footer-height);\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  padding: 12px;\n  background-color: var(--footer-color);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n\n.credit {\n  text-align: center;\n  font-size: .95rem;\n}\n\n.credit-a {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.credit-a > img {\n  width: 1.5rem;\n  height: 1.5rem;\n  border-radius: 50%;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/Components/Sidebar.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/Components/Sidebar.css ***!
  \**************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `nav {
  height: 100%;
  width: var(--nav-width);
  background-color: var(--side-color);
  padding: 4px;

  display: flex;
  justify-content: space-between;
  flex-direction: column;
}

hr {
  color: var(--hr-color);
  margin: 4px 0;
}

#addProject {
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 6px 10px;
}

#addProject::before {
  content: "+";
  font-size: 1.5rem;
}

/* Default Projects */

#defaultProjects {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 4px;
}

/* Projects */

.project {
  display: flex;
  justify-content: space-between;
  transition: 100ms ease-out;
}

.project:active {
  transform: scale(.98);
}

/* Icon Styling */

.fa-regular, .fa-solid {
  padding-right: 12px;
}

.fa-sun {
  color: orange;
}

.project .fa-star {
  color: yellow;
}

.fa-list-check {
  color: cyan;
}

.fa-house {
  color: aliceblue;
}`, "",{"version":3,"sources":["webpack://./src/Components/Sidebar.css"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,uBAAuB;EACvB,mCAAmC;EACnC,YAAY;;EAEZ,aAAa;EACb,8BAA8B;EAC9B,sBAAsB;AACxB;;AAEA;EACE,sBAAsB;EACtB,aAAa;AACf;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,iBAAiB;AACnB;;AAEA,qBAAqB;;AAErB;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,sBAAsB;EACtB,QAAQ;AACV;;AAEA,aAAa;;AAEb;EACE,aAAa;EACb,8BAA8B;EAC9B,0BAA0B;AAC5B;;AAEA;EACE,qBAAqB;AACvB;;AAEA,iBAAiB;;AAEjB;EACE,mBAAmB;AACrB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,gBAAgB;AAClB","sourcesContent":["nav {\n  height: 100%;\n  width: var(--nav-width);\n  background-color: var(--side-color);\n  padding: 4px;\n\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n}\n\nhr {\n  color: var(--hr-color);\n  margin: 4px 0;\n}\n\n#addProject {\n  display: flex;\n  align-items: center;\n  gap: 18px;\n  padding: 6px 10px;\n}\n\n#addProject::before {\n  content: \"+\";\n  font-size: 1.5rem;\n}\n\n/* Default Projects */\n\n#defaultProjects {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  gap: 4px;\n}\n\n/* Projects */\n\n.project {\n  display: flex;\n  justify-content: space-between;\n  transition: 100ms ease-out;\n}\n\n.project:active {\n  transform: scale(.98);\n}\n\n/* Icon Styling */\n\n.fa-regular, .fa-solid {\n  padding-right: 12px;\n}\n\n.fa-sun {\n  color: orange;\n}\n\n.project .fa-star {\n  color: yellow;\n}\n\n.fa-list-check {\n  color: cyan;\n}\n\n.fa-house {\n  color: aliceblue;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/Components/pages/Default.css":
/*!********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/Components/pages/Default.css ***!
  \********************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `main {
  height: 100%;
  width: var(--main-width);
}

.main {
  background: var(--main-gradient);
}`, "",{"version":3,"sources":["webpack://./src/Components/pages/Default.css"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,wBAAwB;AAC1B;;AAEA;EACE,gCAAgC;AAClC","sourcesContent":["main {\n  height: 100%;\n  width: var(--main-width);\n}\n\n.main {\n  background: var(--main-gradient);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/Components/pages/Users.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/Components/pages/Users.css ***!
  \******************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `main {
	height: 100%;
	width: var(--main-width);
	padding: 32px;
	
	display: flex;
	gap: 12px;
	flex-direction: column;
	justify-content: space-between;
}

.user {
	background: var(--user-gradient);
}

input {
	background: none;
	outline: none;
	caret-color: white;
	color: white;
	border: none;
	border-radius: 8px;
	font-family: "Nunito";
	text-overflow: ellipsis;
}

.title-container {
	display: flex;
}

#titleInput {
	font-size: 2.5rem;
	cursor: default;
	width: 100%;
	padding: 0 2px;
}

#titleInput:hover,
#delete:hover {
	background-color: #4141411c;
}

#titleInput:focus {
	background-color: #4141411c;
	border-bottom: 2px solid var(--block-before-color);
}

#delete {
	width: 50px;
	text-align: center;
	color: red;
	font-weight: bold;
	font-size: 1.5rem;
}

#todoList {
	display: flex;
	align-items: start;
	flex-direction: column;
	gap: 2px;
	overflow-y: auto;
	height: 100%;
	width: 100%;
}

.todo {
	display: flex;
	justify-content: space-between;
	background-color: var(--side-color);
	padding: 18px 20px;
}

.fa-circle,
.fa-star {
	font-size: 1.2rem;
}

.fa-circle:hover {
	padding-right: 1.5px;
}

.fa-circle:hover::after {
	content: "\\f00c";
	font-family: FontAwesome;
	position: relative;
	font-size: 0.75rem;
	right: 50%;
	bottom: 2px;
	border-radius: 50%;
}

#addTodo {
	background-color: var(--side-color);
	height: 3rem;
	width: 100%;
	padding: 22px 20px;
	display: flex;
	align-items: center;
}

#addTodo:hover {
	background-color: var(--button-hover);
}

#addTodo:focus {
	background-color: var(--button-hover);
}
`, "",{"version":3,"sources":["webpack://./src/Components/pages/Users.css"],"names":[],"mappings":"AAAA;CACC,YAAY;CACZ,wBAAwB;CACxB,aAAa;;CAEb,aAAa;CACb,SAAS;CACT,sBAAsB;CACtB,8BAA8B;AAC/B;;AAEA;CACC,gCAAgC;AACjC;;AAEA;CACC,gBAAgB;CAChB,aAAa;CACb,kBAAkB;CAClB,YAAY;CACZ,YAAY;CACZ,kBAAkB;CAClB,qBAAqB;CACrB,uBAAuB;AACxB;;AAEA;CACC,aAAa;AACd;;AAEA;CACC,iBAAiB;CACjB,eAAe;CACf,WAAW;CACX,cAAc;AACf;;AAEA;;CAEC,2BAA2B;AAC5B;;AAEA;CACC,2BAA2B;CAC3B,kDAAkD;AACnD;;AAEA;CACC,WAAW;CACX,kBAAkB;CAClB,UAAU;CACV,iBAAiB;CACjB,iBAAiB;AAClB;;AAEA;CACC,aAAa;CACb,kBAAkB;CAClB,sBAAsB;CACtB,QAAQ;CACR,gBAAgB;CAChB,YAAY;CACZ,WAAW;AACZ;;AAEA;CACC,aAAa;CACb,8BAA8B;CAC9B,mCAAmC;CACnC,kBAAkB;AACnB;;AAEA;;CAEC,iBAAiB;AAClB;;AAEA;CACC,oBAAoB;AACrB;;AAEA;CACC,gBAAgB;CAChB,wBAAwB;CACxB,kBAAkB;CAClB,kBAAkB;CAClB,UAAU;CACV,WAAW;CACX,kBAAkB;AACnB;;AAEA;CACC,mCAAmC;CACnC,YAAY;CACZ,WAAW;CACX,kBAAkB;CAClB,aAAa;CACb,mBAAmB;AACpB;;AAEA;CACC,qCAAqC;AACtC;;AAEA;CACC,qCAAqC;AACtC","sourcesContent":["main {\n\theight: 100%;\n\twidth: var(--main-width);\n\tpadding: 32px;\n\t\n\tdisplay: flex;\n\tgap: 12px;\n\tflex-direction: column;\n\tjustify-content: space-between;\n}\n\n.user {\n\tbackground: var(--user-gradient);\n}\n\ninput {\n\tbackground: none;\n\toutline: none;\n\tcaret-color: white;\n\tcolor: white;\n\tborder: none;\n\tborder-radius: 8px;\n\tfont-family: \"Nunito\";\n\ttext-overflow: ellipsis;\n}\n\n.title-container {\n\tdisplay: flex;\n}\n\n#titleInput {\n\tfont-size: 2.5rem;\n\tcursor: default;\n\twidth: 100%;\n\tpadding: 0 2px;\n}\n\n#titleInput:hover,\n#delete:hover {\n\tbackground-color: #4141411c;\n}\n\n#titleInput:focus {\n\tbackground-color: #4141411c;\n\tborder-bottom: 2px solid var(--block-before-color);\n}\n\n#delete {\n\twidth: 50px;\n\ttext-align: center;\n\tcolor: red;\n\tfont-weight: bold;\n\tfont-size: 1.5rem;\n}\n\n#todoList {\n\tdisplay: flex;\n\talign-items: start;\n\tflex-direction: column;\n\tgap: 2px;\n\toverflow-y: auto;\n\theight: 100%;\n\twidth: 100%;\n}\n\n.todo {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tbackground-color: var(--side-color);\n\tpadding: 18px 20px;\n}\n\n.fa-circle,\n.fa-star {\n\tfont-size: 1.2rem;\n}\n\n.fa-circle:hover {\n\tpadding-right: 1.5px;\n}\n\n.fa-circle:hover::after {\n\tcontent: \"\\f00c\";\n\tfont-family: FontAwesome;\n\tposition: relative;\n\tfont-size: 0.75rem;\n\tright: 50%;\n\tbottom: 2px;\n\tborder-radius: 50%;\n}\n\n#addTodo {\n\tbackground-color: var(--side-color);\n\theight: 3rem;\n\twidth: 100%;\n\tpadding: 22px 20px;\n\tdisplay: flex;\n\talign-items: center;\n}\n\n#addTodo:hover {\n\tbackground-color: var(--button-hover);\n}\n\n#addTodo:focus {\n\tbackground-color: var(--button-hover);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/Nunito-Medium.ttf */ "./src/assets/fonts/Nunito-Medium.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/Nunito-MediumItalic.ttf */ "./src/assets/fonts/Nunito-MediumItalic.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/Nunito-Bold.ttf */ "./src/assets/fonts/Nunito-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/Nunito-BoldItalic.ttf */ "./src/assets/fonts/Nunito-BoldItalic.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/Nunito-Light.ttf */ "./src/assets/fonts/Nunito-Light.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: 'Nunito';
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('truetype'),
   url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format('truetype'),
   url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format('truetype'),
   url(${___CSS_LOADER_URL_REPLACEMENT_3___}) format('truetype'),
   url(${___CSS_LOADER_URL_REPLACEMENT_4___}) format('truetype');
  font-weight: normal;
  font-style: normal;
}

:root {
  --main-gradient: linear-gradient(45deg, rgba(34,193,195,1) 0%, rgba(255,203,92,1) 100%);
  --user-gradient: linear-gradient(45deg, rgba(34,193,195,1) 0%, rgb(92, 255, 141) 100%);
  --side-color: #202020;
  --footer-color: #101010;
  --content-height: 95vh;
  --footer-height: 5vh;
  --nav-width: 17rem;
  --side-info-width: 12vw;
  --main-width: calc(100vw - var(--nav-width) + var(--side-info-width));
  --button-hover: #353535;
  --block-before-color: #76b9ed;
  --hr-color: #414141;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

button {
  background: none;
  border: none;
  color: white; 
  text-align: start;
  font-size: .9rem;
  padding: 12px 16px;
  width: 100%;
  border-radius: 8px;
  position: relative;
  font-family: 'Nunito';
}

.active {
  background-color: var(--button-hover);
}

button.active::before {
  content: '';
  background-color: var(--block-before-color);
  width: 3px;
  height: 18px;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 50px;
  left: 2px;
  position: absolute;
}

button:hover {
  background-color: var(--button-hover);
}

body {
  width: 100vw;
  height: 100vh;
  font-family: 'Nunito';
  color: white; 
}

#content {
  height: var(--content-height);
  display: flex;
  align-items: center;
  justify-content: center;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,qBAAqB;EACrB;;;;6DAI0D;EAC1D,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,uFAAuF;EACvF,sFAAsF;EACtF,qBAAqB;EACrB,uBAAuB;EACvB,sBAAsB;EACtB,oBAAoB;EACpB,kBAAkB;EAClB,uBAAuB;EACvB,qEAAqE;EACrE,uBAAuB;EACvB,6BAA6B;EAC7B,mBAAmB;AACrB;;AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,YAAY;EACZ,iBAAiB;EACjB,gBAAgB;EAChB,kBAAkB;EAClB,WAAW;EACX,kBAAkB;EAClB,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;EACE,qCAAqC;AACvC;;AAEA;EACE,WAAW;EACX,2CAA2C;EAC3C,UAAU;EACV,YAAY;EACZ,QAAQ;EACR,2BAA2B;EAC3B,mBAAmB;EACnB,SAAS;EACT,kBAAkB;AACpB;;AAEA;EACE,qCAAqC;AACvC;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,qBAAqB;EACrB,YAAY;AACd;;AAEA;EACE,6BAA6B;EAC7B,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB","sourcesContent":["@font-face {\n  font-family: 'Nunito';\n  src: url('./assets/fonts/Nunito-Medium.ttf') format('truetype'),\n   url('./assets/fonts/Nunito-MediumItalic.ttf') format('truetype'),\n   url('./assets/fonts/Nunito-Bold.ttf') format('truetype'),\n   url('./assets/fonts/Nunito-BoldItalic.ttf') format('truetype'),\n   url('./assets/fonts/Nunito-Light.ttf') format('truetype');\n  font-weight: normal;\n  font-style: normal;\n}\n\n:root {\n  --main-gradient: linear-gradient(45deg, rgba(34,193,195,1) 0%, rgba(255,203,92,1) 100%);\n  --user-gradient: linear-gradient(45deg, rgba(34,193,195,1) 0%, rgb(92, 255, 141) 100%);\n  --side-color: #202020;\n  --footer-color: #101010;\n  --content-height: 95vh;\n  --footer-height: 5vh;\n  --nav-width: 17rem;\n  --side-info-width: 12vw;\n  --main-width: calc(100vw - var(--nav-width) + var(--side-info-width));\n  --button-hover: #353535;\n  --block-before-color: #76b9ed;\n  --hr-color: #414141;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbutton {\n  background: none;\n  border: none;\n  color: white; \n  text-align: start;\n  font-size: .9rem;\n  padding: 12px 16px;\n  width: 100%;\n  border-radius: 8px;\n  position: relative;\n  font-family: 'Nunito';\n}\n\n.active {\n  background-color: var(--button-hover);\n}\n\nbutton.active::before {\n  content: '';\n  background-color: var(--block-before-color);\n  width: 3px;\n  height: 18px;\n  top: 50%;\n  transform: translateY(-50%);\n  border-radius: 50px;\n  left: 2px;\n  position: absolute;\n}\n\nbutton:hover {\n  background-color: var(--button-hover);\n}\n\nbody {\n  width: 100vw;\n  height: 100vh;\n  font-family: 'Nunito';\n  color: white; \n}\n\n#content {\n  height: var(--content-height);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/Components/Footer.css":
/*!***********************************!*\
  !*** ./src/Components/Footer.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_Footer_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./Footer.css */ "./node_modules/css-loader/dist/cjs.js!./src/Components/Footer.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_Footer_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_Footer_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_Footer_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_Footer_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/Components/Sidebar.css":
/*!************************************!*\
  !*** ./src/Components/Sidebar.css ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_Sidebar_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./Sidebar.css */ "./node_modules/css-loader/dist/cjs.js!./src/Components/Sidebar.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_Sidebar_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_Sidebar_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_Sidebar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_Sidebar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/Components/pages/Default.css":
/*!******************************************!*\
  !*** ./src/Components/pages/Default.css ***!
  \******************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_Default_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./Default.css */ "./node_modules/css-loader/dist/cjs.js!./src/Components/pages/Default.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_Default_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_Default_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_Default_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_Default_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/Components/pages/Users.css":
/*!****************************************!*\
  !*** ./src/Components/pages/Users.css ***!
  \****************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_Users_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./Users.css */ "./node_modules/css-loader/dist/cjs.js!./src/Components/pages/Users.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_Users_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_Users_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_Users_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_Users_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/Components/Footer.js":
/*!**********************************!*\
  !*** ./src/Components/Footer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Footer_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Footer.css */ "./src/Components/Footer.css");
{/* <footer>
  <span>Another day, Another project</span>
  <a href="https://github.com/peetzaecksdee">
    <img src="./assets/images/pizza.jpg" alt="my profile" />
  </a>
</footer> */}



function loadFooter() {
  const footer = document.createElement('footer');

  const text = document.createElement('i');
  text.textContent = 'Another day, Another project';
  text.classList.add('credit')

  const githubPage = document.createElement('a');
  githubPage.href = 'https://github.com/peetzaecksdee';
  githubPage.classList.add('credit-a')

  const githubImage = document.createElement('img');
  githubImage.src = './assets/images/pizza.jpg';
  githubImage.alt = 'my profile';

  githubPage.appendChild(githubImage);

  footer.appendChild(text);
  footer.appendChild(githubPage);

  return footer
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadFooter);

/***/ }),

/***/ "./src/Components/Sidebar.js":
/*!***********************************!*\
  !*** ./src/Components/Sidebar.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Sidebar_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sidebar.css */ "./src/Components/Sidebar.css");
/* harmony import */ var _Controllers_ProjectController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Controllers/ProjectController */ "./src/Controllers/ProjectController.js");
/* harmony import */ var _Controllers_RenderController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Controllers/RenderController */ "./src/Controllers/RenderController.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
{
	/* <nav>
  <div id="projects">
    <div id="defaultProjects">
      <button id="project" class="active">
        <div><i class="fa-regular fa-sun"></i>My Day</div>
        <span data-count></span>
      </button>
      <button id="project">
        <div><i class="fa-regular fa-star"></i>Starred</div>
        <span data-count></span>
      </button>
      <button id="project">
        <div><i class="fa-solid fa-list-check"></i>Planned</div>
        <span data-count></span>
      </button>
      <button id="project">
        <div><i class="fa-solid fa-house"></i>Tasks</div>
        <span data-count></span>
      </button>
    </div>
    <hr>
    <div id="userProjects"></div>
  </div>
  <button id="addProject">New list</button>
</nav> */
}






/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
	const nav = document.createElement("nav");

	const projects = document.createElement("div");
	projects.id = "projects";

	const defaultProjects = document.createElement("div");
	defaultProjects.id = "defaultProjects";

	const myDay = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.ProjectButton)("fa-regular", "fa-sun", "My Day", -1);
	myDay.classList.add("active");
	const starred = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.ProjectButton)("fa-regular", "fa-star", "Starred", -2);
	const planned = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.ProjectButton)("fa-solid", "fa-list-check", "Planned", -3);

	myDay.addEventListener("click", () => (0,_Controllers_RenderController__WEBPACK_IMPORTED_MODULE_2__.renderMainProjectPage)());
	starred.addEventListener("click", () => (0,_Controllers_RenderController__WEBPACK_IMPORTED_MODULE_2__.renderMainProjectPage)());
	planned.addEventListener("click", () => (0,_Controllers_RenderController__WEBPACK_IMPORTED_MODULE_2__.renderMainProjectPage)());

	const hr = document.createElement("hr");

	const userProjects = document.createElement("div");
	userProjects.id = "userProjects";

	const addProjectBtn = document.createElement("button");
	addProjectBtn.id = "addProject";
	addProjectBtn.textContent = "New List";
	addProjectBtn.addEventListener("click", () => {
		const newProject = (0,_Controllers_ProjectController__WEBPACK_IMPORTED_MODULE_1__.addProject)("Untitled List");
		(0,_Controllers_RenderController__WEBPACK_IMPORTED_MODULE_2__.renderProjects)();
		
		(0,_Controllers_RenderController__WEBPACK_IMPORTED_MODULE_2__.renderUserProjectPage)(newProject);
		(0,_Controllers_RenderController__WEBPACK_IMPORTED_MODULE_2__.setActive)(document.querySelector(`[data-id="${newProject.id}"]`))
	});

	defaultProjects.appendChild(myDay);
	defaultProjects.appendChild(starred);
	defaultProjects.appendChild(planned);

	projects.appendChild(defaultProjects);
	projects.appendChild(hr);
	projects.appendChild(userProjects);

	nav.appendChild(projects);
	nav.appendChild(addProjectBtn);

	return nav;
}


/***/ }),

/***/ "./src/Components/pages/Default.js":
/*!*****************************************!*\
  !*** ./src/Components/pages/Default.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Default_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Default.css */ "./src/Components/pages/Default.css");


function createDefaultPage() {
	const main = document.querySelector("main");

	return main;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createDefaultPage);


/***/ }),

/***/ "./src/Components/pages/Users.js":
/*!***************************************!*\
  !*** ./src/Components/pages/Users.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Users_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Users.css */ "./src/Components/pages/Users.css");
/* harmony import */ var _Controllers_ProjectController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Controllers/ProjectController */ "./src/Controllers/ProjectController.js");
/* harmony import */ var _Validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Validator */ "./src/Validator.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");
/* harmony import */ var _Controllers_RenderController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Controllers/RenderController */ "./src/Controllers/RenderController.js");







function createUserPage(project) {
	const projectText = document
		.querySelector(`[data-id="${project.id}"]`)
		.querySelector("span");

	const main = document.querySelector("main");

	const titleContainer = document.createElement("div");
  titleContainer.classList.add('title-container');

	const title = document.createElement("input");
	title.type = "text";
	title.value = project.getTitle();
	title.id = "titleInput";
	title.addEventListener("keypress", (event) => {
		if (event.key === "Enter") {
			project.changeTitle(title.value);
			projectText.textContent = (0,_Validator__WEBPACK_IMPORTED_MODULE_2__.textLengthValidator)(title.value);
			(0,_Controllers_ProjectController__WEBPACK_IMPORTED_MODULE_1__.editProject)(project);
		}
	});
	const removeButton = document.createElement("button");
  removeButton.id = "delete";
  removeButton.textContent = "X";

  let count = 0
  removeButton.addEventListener("click", () => {
    count++;
    setTimeout(() => {
      count--;
    }, 1000);
    if (count === 2) {
      (0,_Controllers_ProjectController__WEBPACK_IMPORTED_MODULE_1__.removeProject)(project.id);
      (0,_Controllers_RenderController__WEBPACK_IMPORTED_MODULE_4__.renderProjects)();
      (0,_Controllers_RenderController__WEBPACK_IMPORTED_MODULE_4__.renderMainProjectPage)();
      (0,_Controllers_RenderController__WEBPACK_IMPORTED_MODULE_4__.setActive)(document.querySelector(".project"))
    }
  });

	const todoList = document.createElement("div");
	todoList.id = "todoList";
	project.getTodos().forEach((todo) => {
		const TodoBtn = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.TodoButton)(
			todo.getTitle(),
			todo.isDone(),
			todo.isStarred(),
			todo.id
		);
		todoList.appendChild(TodoBtn);
	});

	const addTodoBtn = document.createElement("input");
	addTodoBtn.type = "text";
	addTodoBtn.id = "addTodo";
	addTodoBtn.placeholder = "Add a task";
	addTodoBtn.addEventListener("focus", () => {
		addTodoBtn.placeholder = "";
	});
	addTodoBtn.addEventListener("focusout", () => {
		addTodoBtn.placeholder = addTodoBtn.value || "Add a task";
	});
	addTodoBtn.addEventListener("keypress", (event) => {
		if (event.key === "Enter") {
			(0,_Controllers_ProjectController__WEBPACK_IMPORTED_MODULE_1__.createTodo)(project.id, [addTodoBtn.value, Date.now()]);
			todoList.appendChild((0,_utils__WEBPACK_IMPORTED_MODULE_3__.TodoButton)(addTodoBtn.value, false, false));
			addTodoBtn.value = "";
		}
	});

  titleContainer.appendChild(title);
  titleContainer.appendChild(removeButton);

	main.appendChild(titleContainer);
	main.appendChild(todoList);
	main.appendChild(addTodoBtn);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createUserPage);


/***/ }),

/***/ "./src/Controllers/ProjectController.js":
/*!**********************************************!*\
  !*** ./src/Controllers/ProjectController.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addProject: () => (/* binding */ addProject),
/* harmony export */   createTodo: () => (/* binding */ createTodo),
/* harmony export */   editProject: () => (/* binding */ editProject),
/* harmony export */   editTodo: () => (/* binding */ editTodo),
/* harmony export */   loadProjects: () => (/* binding */ loadProjects),
/* harmony export */   loadTodos: () => (/* binding */ loadTodos),
/* harmony export */   removeProject: () => (/* binding */ removeProject),
/* harmony export */   removeTodo: () => (/* binding */ removeTodo),
/* harmony export */   saveProjects: () => (/* binding */ saveProjects)
/* harmony export */ });
/* harmony import */ var _Objects_Project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Objects/Project.js */ "./src/Objects/Project.js");
/* harmony import */ var _Objects_Todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Objects/Todo.js */ "./src/Objects/Todo.js");
/* harmony import */ var _StorageController_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StorageController.js */ "./src/Controllers/StorageController.js");




function loadProjects() {
	let projectsData = JSON.parse((0,_StorageController_js__WEBPACK_IMPORTED_MODULE_2__.loadData)("projects")) || [];

	return projectsData.map((data) => {
		const project = (0,_Objects_Project_js__WEBPACK_IMPORTED_MODULE_0__["default"])(data.id, data.title);

		loadTodos(project, data.todos);
		return project;
	});
}

function loadTodos(project, todos) {
	todos.forEach((todo) => {
		project.addTodo(
			(0,_Objects_Todo_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
				todo.id,
				todo.projectId,
				todo.title,
				todo.date,
				todo.dueDate,
				todo.starred,
				todo.done
			)
		);
	});
}

/**
 *
 * @param {[Project]} projects
 */
function saveProjects(projects) {
	const objectProjects = projects.map((project) => project.toObject());

	(0,_StorageController_js__WEBPACK_IMPORTED_MODULE_2__.saveData)("projects", JSON.stringify(objectProjects));
}

function addProject(name) {
	const LoadedProjects = loadProjects();
	const ProjectsLength = LoadedProjects.length;

	let newProject = (0,_Objects_Project_js__WEBPACK_IMPORTED_MODULE_0__["default"])(
		ProjectsLength > 0 ? LoadedProjects[LoadedProjects.length - 1].id + 1 : 1,
		name
	);

	LoadedProjects.push(newProject);

	saveProjects(LoadedProjects);

	return newProject;
}

function editProject(newProject) {
	let LoadedProjects = loadProjects();

	let idx = LoadedProjects.findIndex((project) => project.id === newProject.id);
	LoadedProjects[idx] = newProject;

	saveProjects(LoadedProjects);
}

function removeProject(projectId) {
	let LoadedProjects = loadProjects();

	saveProjects(LoadedProjects.filter((project) => project.id !== projectId));
}

/**
 *
 * @param {*} projectId
 * @param  {[string, Date?, string?, boolean?, boolean?]} info [title, duedate, notes, starred, done]
 */
function createTodo(projectId, info) {
	let LoadedProjects = loadProjects();

	let project = LoadedProjects.find((proj) => proj.id === projectId);

	let newTodo = (0,_Objects_Todo_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
		project.length > 0 ? project[project.length - 1].id + 1 : 1,
		projectId,
		...info
	);

	project.addTodo(newTodo);

	saveProjects(LoadedProjects);

	return newTodo;
}

function removeTodo(projectId, todoId) {
	let LoadedProjects = loadProjects();

	let project = LoadedProjects.find((proj) => proj.id === projectId);

	project.removeTodo(todoId);

	saveProjects(LoadedProjects);
}

function editTodo(projectId, todoId, info) {
	let LoadedProjects = loadProjects();

	let project = LoadedProjects.find((proj) => proj.id === projectId);
	let newTodo = (0,_Objects_Todo_js__WEBPACK_IMPORTED_MODULE_1__["default"])(todoId, ...info);

	let todos = project.getTodos();
	let idx = todos.findIndex((todo) => todo.id === todoId);
	todos[idx] = newTodo;

	saveProjects(LoadedProjects);
}


/***/ }),

/***/ "./src/Controllers/RenderController.js":
/*!*********************************************!*\
  !*** ./src/Controllers/RenderController.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   init: () => (/* binding */ init),
/* harmony export */   renderMainProjectPage: () => (/* binding */ renderMainProjectPage),
/* harmony export */   renderProjects: () => (/* binding */ renderProjects),
/* harmony export */   renderUserProjectPage: () => (/* binding */ renderUserProjectPage),
/* harmony export */   setActive: () => (/* binding */ setActive)
/* harmony export */ });
/* harmony import */ var _Components_Footer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Components/Footer.js */ "./src/Components/Footer.js");
/* harmony import */ var _Components_Sidebar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/Sidebar.js */ "./src/Components/Sidebar.js");
/* harmony import */ var _Components_pages_Default_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/pages/Default.js */ "./src/Components/pages/Default.js");
/* harmony import */ var _Components_pages_Users_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/pages/Users.js */ "./src/Components/pages/Users.js");
/* harmony import */ var _ProjectController_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProjectController.js */ "./src/Controllers/ProjectController.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
/* harmony import */ var _Validator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Validator.js */ "./src/Validator.js");









function setActive(button) {
	const buttons = document.querySelectorAll(".project");
	buttons.forEach((btn) => {
		if (btn !== button) {
			btn.classList.remove("active");
		}
		button.classList.add("active");
	});
}

function renderUserProjectPage(project) {
	const main = document.querySelector("main");
	main.classList.add("user");
	main.classList.remove("main");
	main.textContent = "";

	(0,_Components_pages_Users_js__WEBPACK_IMPORTED_MODULE_3__["default"])(project);
}

function renderMainProjectPage() {
	const main = document.querySelector("main");
	main.classList.add("main");
	main.classList.remove("user");
	main.textContent = "";

	(0,_Components_pages_Default_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

function renderProjects() {
	const Projects = (0,_ProjectController_js__WEBPACK_IMPORTED_MODULE_4__.loadProjects)();
	const userProjects = document.querySelector("#userProjects");
	userProjects.textContent = "";

	Projects.forEach((project) => {
		const btn = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.ProjectButton)(
			"fa-solid",
			"fa-bars",
			(0,_Validator_js__WEBPACK_IMPORTED_MODULE_6__.textLengthValidator)(project.getTitle()),
			project.id
		);
		btn.addEventListener("click", () => {
			renderUserProjectPage(project);
		});
		userProjects.appendChild(btn);
	});

	const projectButtons = document.querySelectorAll(".project");
	projectButtons.forEach((btn) => {
		btn.addEventListener("click", () => {
			if (btn.classList.contains("active")) {
				return;
			}

			setActive(btn);
		});
	});
}

function init() {
	const content = document.querySelector("#content");
	content.appendChild((0,_Components_Sidebar_js__WEBPACK_IMPORTED_MODULE_1__["default"])());
	content.appendChild(document.createElement('main'));
	content.appendChild(document.createElement("div"));
	const body = document.querySelector("body");
	body.appendChild((0,_Components_Footer_js__WEBPACK_IMPORTED_MODULE_0__["default"])());

  renderMainProjectPage();
	renderProjects();
}


/***/ }),

/***/ "./src/Controllers/StorageController.js":
/*!**********************************************!*\
  !*** ./src/Controllers/StorageController.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadData: () => (/* binding */ loadData),
/* harmony export */   saveData: () => (/* binding */ saveData)
/* harmony export */ });
function saveData(key, data) {
  localStorage.setItem(key, data);
}

function loadData(key) {
  return localStorage.getItem(key);
}

/***/ }),

/***/ "./src/Objects/Project.js":
/*!********************************!*\
  !*** ./src/Objects/Project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 *
 * @param {number} id
 * @param {string} title
 */

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(uid, title) {
	let todos = [];

	const id = uid;
	const getTitle = () => title;
	const getTodos = () => todos;

	const changeTitle = (newTitle) => {
		title = newTitle;
	};
	const addTodo = (todo) => {
		todos.push(todo);
	};
	const removeTodo = (todoId) => {
		todos.filter((todo) => {
			todo.getId !== todoId;
		});
	};

	const toObject = () => ({
		id,
		title,
		todos: todos.map((todo) => {
			return todo.toObject();
		}),
	});

	return Object.assign(
		{},
		{ id, getTitle, getTodos, changeTitle, addTodo, removeTodo, toObject }
	);
}


/***/ }),

/***/ "./src/Objects/Todo.js":
/*!*****************************!*\
  !*** ./src/Objects/Todo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 *
 * @param {number} id
 * @param {number} projectId
 * @param {string} title
 * @param {Date?} date
 * @param {string?} notes
 * @param {boolean?} starred
 * @param {boolean?} done
 */

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(uid = 1,
	projectId,
	title,
	date,
	notes = "",
	starred = false,
	done = false
) {
	const dueDate = Date.now();

	const id = uid;
	const getTitle = () => title;
	const getDate = () => date;
	const getDueDate = () => dueDate;
	const getNotes = () => notes;
	const isStarred = () => starred;
	const getProjectId = () => projectId;
	const isDone = () => done;

	const setTitle = (newTitle) => {
		title = newTitle;
	};
	const setDueDate = (newDueDate) => {
		dueDate = newDueDate;
	};
	const setNotes = (newNote) => {
		notes = newNote;
	};
	const setStarred = (newState) => {
		starred = newState;
	};
	const setDone = (newState) => {
		done = newState;
	};

	const toObject = () => ({
		id, title, date, dueDate, notes, starred, projectId, done,
	});

	return Object.assign(
		{},
		{
			id,
			getTitle,
			getDate,
			getDueDate,
			getNotes,
			isStarred,
			getProjectId,
			isDone,
			setTitle,
			setDueDate,
			setNotes,
			setStarred,
			setDone,
			toObject,
		}
	);
}


/***/ }),

/***/ "./src/Validator.js":
/*!**************************!*\
  !*** ./src/Validator.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   textLengthValidator: () => (/* binding */ textLengthValidator)
/* harmony export */ });
/**
 * 
 * @param {string} text 
 * @returns {string}
 */
function textLengthValidator(text) {
  if (text.length > 16) {
    return text.substring(0, 16) + "...";
  }

  return text;
}

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectButton: () => (/* binding */ ProjectButton),
/* harmony export */   TodoButton: () => (/* binding */ TodoButton)
/* harmony export */ });
function ProjectButton(opac, icon, text, id) {
	const Project = document.createElement("button");
	Project.classList.add("project");
	Project.dataset.id = id;

	const div = document.createElement("div");

	const i = document.createElement("i");
	i.classList.add(opac, icon);

	const textSpan = document.createElement("span");
	textSpan.textContent = text;

	const count = document.createElement("span");
	count.dataset.count = 0;

	div.appendChild(i);
	div.appendChild(textSpan);

	Project.appendChild(div);
	Project.appendChild(count);

	return Project;
}

function TodoButton(title, done, starred, id) {
	const Todo = document.createElement("button");
	Todo.classList.add("todo");
	Todo.dataset.Tid = id;
	Todo.dataset.done = done;
	Todo.dataset.starred = starred;

	const div = document.createElement("div");

	const circle = document.createElement("i");
  circle.classList.add("fa-regular", "fa-circle");

	const textSpan = document.createElement("span");
	textSpan.textContent = title;

	const star = document.createElement("i");
	star.classList.add("fa-regular", "fa-star");

	div.appendChild(circle);
	div.appendChild(textSpan);

	Todo.appendChild(div);
	Todo.appendChild(star);

	return Todo;
}


/***/ }),

/***/ "./src/assets/fonts/Nunito-Bold.ttf":
/*!******************************************!*\
  !*** ./src/assets/fonts/Nunito-Bold.ttf ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "275dd55e10ba966bcb9b.ttf";

/***/ }),

/***/ "./src/assets/fonts/Nunito-BoldItalic.ttf":
/*!************************************************!*\
  !*** ./src/assets/fonts/Nunito-BoldItalic.ttf ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2ec81cb007530188a403.ttf";

/***/ }),

/***/ "./src/assets/fonts/Nunito-Light.ttf":
/*!*******************************************!*\
  !*** ./src/assets/fonts/Nunito-Light.ttf ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "677d4143aa9440e30cad.ttf";

/***/ }),

/***/ "./src/assets/fonts/Nunito-Medium.ttf":
/*!********************************************!*\
  !*** ./src/assets/fonts/Nunito-Medium.ttf ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "06740446a9f13288701b.ttf";

/***/ }),

/***/ "./src/assets/fonts/Nunito-MediumItalic.ttf":
/*!**************************************************!*\
  !*** ./src/assets/fonts/Nunito-MediumItalic.ttf ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3241228fab2414cc8e11.ttf";

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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
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
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
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
/******/ 		// no jsonp function
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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _Controllers_RenderController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Controllers/RenderController.js */ "./src/Controllers/RenderController.js");



(0,_Controllers_RenderController_js__WEBPACK_IMPORTED_MODULE_1__.init)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDb0M7O0FBRXpELHNFQUFJLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL0NvbXBvbmVudHMvRm9vdGVyLmNzcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL0NvbXBvbmVudHMvU2lkZWJhci5jc3MiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy9Db21wb25lbnRzL3BhZ2VzL0RlZmF1bHQuY3NzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvQ29tcG9uZW50cy9wYWdlcy9Vc2Vycy5jc3MiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvQ29tcG9uZW50cy9Gb290ZXIuY3NzPzE1MjkiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy9Db21wb25lbnRzL1NpZGViYXIuY3NzP2NjYjQiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy9Db21wb25lbnRzL3BhZ2VzL0RlZmF1bHQuY3NzP2IwMWEiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy9Db21wb25lbnRzL3BhZ2VzL1VzZXJzLmNzcz80MjY4Iiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL0NvbXBvbmVudHMvRm9vdGVyLmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvQ29tcG9uZW50cy9TaWRlYmFyLmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvQ29tcG9uZW50cy9wYWdlcy9EZWZhdWx0LmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvQ29tcG9uZW50cy9wYWdlcy9Vc2Vycy5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL0NvbnRyb2xsZXJzL1Byb2plY3RDb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvQ29udHJvbGxlcnMvUmVuZGVyQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL0NvbnRyb2xsZXJzL1N0b3JhZ2VDb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvT2JqZWN0cy9Qcm9qZWN0LmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvT2JqZWN0cy9Ub2RvLmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvVmFsaWRhdG9yLmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvcC10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvcC10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBmb290ZXIge1xuICBoZWlnaHQ6IHZhcigtLWZvb3Rlci1oZWlnaHQpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvb3Rlci1jb2xvcik7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDhweDtcbn1cblxuLmNyZWRpdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAuOTVyZW07XG59XG5cbi5jcmVkaXQtYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY3JlZGl0LWEgPiBpbWcge1xuICB3aWR0aDogMS41cmVtO1xuICBoZWlnaHQ6IDEuNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL0NvbXBvbmVudHMvRm9vdGVyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLDRCQUE0QjtFQUM1QixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFFBQVE7RUFDUixPQUFPO0VBQ1AsYUFBYTtFQUNiLHFDQUFxQztFQUNyQyxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsY0FBYztFQUNkLGtCQUFrQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJmb290ZXIge1xcbiAgaGVpZ2h0OiB2YXIoLS1mb290ZXItaGVpZ2h0KTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgbGVmdDogMDtcXG4gIHBhZGRpbmc6IDEycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb290ZXItY29sb3IpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogOHB4O1xcbn1cXG5cXG4uY3JlZGl0IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogLjk1cmVtO1xcbn1cXG5cXG4uY3JlZGl0LWEge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNyZWRpdC1hID4gaW1nIHtcXG4gIHdpZHRoOiAxLjVyZW07XFxuICBoZWlnaHQ6IDEuNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBuYXYge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiB2YXIoLS1uYXYtd2lkdGgpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlLWNvbG9yKTtcbiAgcGFkZGluZzogNHB4O1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuaHIge1xuICBjb2xvcjogdmFyKC0taHItY29sb3IpO1xuICBtYXJnaW46IDRweCAwO1xufVxuXG4jYWRkUHJvamVjdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMThweDtcbiAgcGFkZGluZzogNnB4IDEwcHg7XG59XG5cbiNhZGRQcm9qZWN0OjpiZWZvcmUge1xuICBjb250ZW50OiBcIitcIjtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi8qIERlZmF1bHQgUHJvamVjdHMgKi9cblxuI2RlZmF1bHRQcm9qZWN0cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDRweDtcbn1cblxuLyogUHJvamVjdHMgKi9cblxuLnByb2plY3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHRyYW5zaXRpb246IDEwMG1zIGVhc2Utb3V0O1xufVxuXG4ucHJvamVjdDphY3RpdmUge1xuICB0cmFuc2Zvcm06IHNjYWxlKC45OCk7XG59XG5cbi8qIEljb24gU3R5bGluZyAqL1xuXG4uZmEtcmVndWxhciwgLmZhLXNvbGlkIHtcbiAgcGFkZGluZy1yaWdodDogMTJweDtcbn1cblxuLmZhLXN1biB7XG4gIGNvbG9yOiBvcmFuZ2U7XG59XG5cbi5wcm9qZWN0IC5mYS1zdGFyIHtcbiAgY29sb3I6IHllbGxvdztcbn1cblxuLmZhLWxpc3QtY2hlY2sge1xuICBjb2xvcjogY3lhbjtcbn1cblxuLmZhLWhvdXNlIHtcbiAgY29sb3I6IGFsaWNlYmx1ZTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9Db21wb25lbnRzL1NpZGViYXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixtQ0FBbUM7RUFDbkMsWUFBWTs7RUFFWixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBLHFCQUFxQjs7QUFFckI7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsUUFBUTtBQUNWOztBQUVBLGFBQWE7O0FBRWI7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQSxpQkFBaUI7O0FBRWpCO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIm5hdiB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogdmFyKC0tbmF2LXdpZHRoKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGUtY29sb3IpO1xcbiAgcGFkZGluZzogNHB4O1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmhyIHtcXG4gIGNvbG9yOiB2YXIoLS1oci1jb2xvcik7XFxuICBtYXJnaW46IDRweCAwO1xcbn1cXG5cXG4jYWRkUHJvamVjdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMThweDtcXG4gIHBhZGRpbmc6IDZweCAxMHB4O1xcbn1cXG5cXG4jYWRkUHJvamVjdDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCIrXFxcIjtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4vKiBEZWZhdWx0IFByb2plY3RzICovXFxuXFxuI2RlZmF1bHRQcm9qZWN0cyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNHB4O1xcbn1cXG5cXG4vKiBQcm9qZWN0cyAqL1xcblxcbi5wcm9qZWN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB0cmFuc2l0aW9uOiAxMDBtcyBlYXNlLW91dDtcXG59XFxuXFxuLnByb2plY3Q6YWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoLjk4KTtcXG59XFxuXFxuLyogSWNvbiBTdHlsaW5nICovXFxuXFxuLmZhLXJlZ3VsYXIsIC5mYS1zb2xpZCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xcbn1cXG5cXG4uZmEtc3VuIHtcXG4gIGNvbG9yOiBvcmFuZ2U7XFxufVxcblxcbi5wcm9qZWN0IC5mYS1zdGFyIHtcXG4gIGNvbG9yOiB5ZWxsb3c7XFxufVxcblxcbi5mYS1saXN0LWNoZWNrIHtcXG4gIGNvbG9yOiBjeWFuO1xcbn1cXG5cXG4uZmEtaG91c2Uge1xcbiAgY29sb3I6IGFsaWNlYmx1ZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBtYWluIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogdmFyKC0tbWFpbi13aWR0aCk7XG59XG5cbi5tYWluIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tbWFpbi1ncmFkaWVudCk7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvQ29tcG9uZW50cy9wYWdlcy9EZWZhdWx0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFlBQVk7RUFDWix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbENcIixcInNvdXJjZXNDb250ZW50XCI6W1wibWFpbiB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogdmFyKC0tbWFpbi13aWR0aCk7XFxufVxcblxcbi5tYWluIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLW1haW4tZ3JhZGllbnQpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYG1haW4ge1xuXHRoZWlnaHQ6IDEwMCU7XG5cdHdpZHRoOiB2YXIoLS1tYWluLXdpZHRoKTtcblx0cGFkZGluZzogMzJweDtcblx0XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGdhcDogMTJweDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4udXNlciB7XG5cdGJhY2tncm91bmQ6IHZhcigtLXVzZXItZ3JhZGllbnQpO1xufVxuXG5pbnB1dCB7XG5cdGJhY2tncm91bmQ6IG5vbmU7XG5cdG91dGxpbmU6IG5vbmU7XG5cdGNhcmV0LWNvbG9yOiB3aGl0ZTtcblx0Y29sb3I6IHdoaXRlO1xuXHRib3JkZXI6IG5vbmU7XG5cdGJvcmRlci1yYWRpdXM6IDhweDtcblx0Zm9udC1mYW1pbHk6IFwiTnVuaXRvXCI7XG5cdHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4udGl0bGUtY29udGFpbmVyIHtcblx0ZGlzcGxheTogZmxleDtcbn1cblxuI3RpdGxlSW5wdXQge1xuXHRmb250LXNpemU6IDIuNXJlbTtcblx0Y3Vyc29yOiBkZWZhdWx0O1xuXHR3aWR0aDogMTAwJTtcblx0cGFkZGluZzogMCAycHg7XG59XG5cbiN0aXRsZUlucHV0OmhvdmVyLFxuI2RlbGV0ZTpob3ZlciB7XG5cdGJhY2tncm91bmQtY29sb3I6ICM0MTQxNDExYztcbn1cblxuI3RpdGxlSW5wdXQ6Zm9jdXMge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNDE0MTQxMWM7XG5cdGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1ibG9jay1iZWZvcmUtY29sb3IpO1xufVxuXG4jZGVsZXRlIHtcblx0d2lkdGg6IDUwcHg7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0Y29sb3I6IHJlZDtcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4jdG9kb0xpc3Qge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1pdGVtczogc3RhcnQ7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGdhcDogMnB4O1xuXHRvdmVyZmxvdy15OiBhdXRvO1xuXHRoZWlnaHQ6IDEwMCU7XG5cdHdpZHRoOiAxMDAlO1xufVxuXG4udG9kbyB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZS1jb2xvcik7XG5cdHBhZGRpbmc6IDE4cHggMjBweDtcbn1cblxuLmZhLWNpcmNsZSxcbi5mYS1zdGFyIHtcblx0Zm9udC1zaXplOiAxLjJyZW07XG59XG5cbi5mYS1jaXJjbGU6aG92ZXIge1xuXHRwYWRkaW5nLXJpZ2h0OiAxLjVweDtcbn1cblxuLmZhLWNpcmNsZTpob3Zlcjo6YWZ0ZXIge1xuXHRjb250ZW50OiBcIlxcXFxmMDBjXCI7XG5cdGZvbnQtZmFtaWx5OiBGb250QXdlc29tZTtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRmb250LXNpemU6IDAuNzVyZW07XG5cdHJpZ2h0OiA1MCU7XG5cdGJvdHRvbTogMnB4O1xuXHRib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbiNhZGRUb2RvIHtcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZS1jb2xvcik7XG5cdGhlaWdodDogM3JlbTtcblx0d2lkdGg6IDEwMCU7XG5cdHBhZGRpbmc6IDIycHggMjBweDtcblx0ZGlzcGxheTogZmxleDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuI2FkZFRvZG86aG92ZXIge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24taG92ZXIpO1xufVxuXG4jYWRkVG9kbzpmb2N1cyB7XG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1ob3Zlcik7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9Db21wb25lbnRzL3BhZ2VzL1VzZXJzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtDQUNDLFlBQVk7Q0FDWix3QkFBd0I7Q0FDeEIsYUFBYTs7Q0FFYixhQUFhO0NBQ2IsU0FBUztDQUNULHNCQUFzQjtDQUN0Qiw4QkFBOEI7QUFDL0I7O0FBRUE7Q0FDQyxnQ0FBZ0M7QUFDakM7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsYUFBYTtDQUNiLGtCQUFrQjtDQUNsQixZQUFZO0NBQ1osWUFBWTtDQUNaLGtCQUFrQjtDQUNsQixxQkFBcUI7Q0FDckIsdUJBQXVCO0FBQ3hCOztBQUVBO0NBQ0MsYUFBYTtBQUNkOztBQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCLGVBQWU7Q0FDZixXQUFXO0NBQ1gsY0FBYztBQUNmOztBQUVBOztDQUVDLDJCQUEyQjtBQUM1Qjs7QUFFQTtDQUNDLDJCQUEyQjtDQUMzQixrREFBa0Q7QUFDbkQ7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsa0JBQWtCO0NBQ2xCLFVBQVU7Q0FDVixpQkFBaUI7Q0FDakIsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLGtCQUFrQjtDQUNsQixzQkFBc0I7Q0FDdEIsUUFBUTtDQUNSLGdCQUFnQjtDQUNoQixZQUFZO0NBQ1osV0FBVztBQUNaOztBQUVBO0NBQ0MsYUFBYTtDQUNiLDhCQUE4QjtDQUM5QixtQ0FBbUM7Q0FDbkMsa0JBQWtCO0FBQ25COztBQUVBOztDQUVDLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLG9CQUFvQjtBQUNyQjs7QUFFQTtDQUNDLGdCQUFnQjtDQUNoQix3QkFBd0I7Q0FDeEIsa0JBQWtCO0NBQ2xCLGtCQUFrQjtDQUNsQixVQUFVO0NBQ1YsV0FBVztDQUNYLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLG1DQUFtQztDQUNuQyxZQUFZO0NBQ1osV0FBVztDQUNYLGtCQUFrQjtDQUNsQixhQUFhO0NBQ2IsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MscUNBQXFDO0FBQ3RDOztBQUVBO0NBQ0MscUNBQXFDO0FBQ3RDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIm1haW4ge1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHR3aWR0aDogdmFyKC0tbWFpbi13aWR0aCk7XFxuXFx0cGFkZGluZzogMzJweDtcXG5cXHRcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGdhcDogMTJweDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnVzZXIge1xcblxcdGJhY2tncm91bmQ6IHZhcigtLXVzZXItZ3JhZGllbnQpO1xcbn1cXG5cXG5pbnB1dCB7XFxuXFx0YmFja2dyb3VuZDogbm9uZTtcXG5cXHRvdXRsaW5lOiBub25lO1xcblxcdGNhcmV0LWNvbG9yOiB3aGl0ZTtcXG5cXHRjb2xvcjogd2hpdGU7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdGJvcmRlci1yYWRpdXM6IDhweDtcXG5cXHRmb250LWZhbWlseTogXFxcIk51bml0b1xcXCI7XFxuXFx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxufVxcblxcbi50aXRsZS1jb250YWluZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbiN0aXRsZUlucHV0IHtcXG5cXHRmb250LXNpemU6IDIuNXJlbTtcXG5cXHRjdXJzb3I6IGRlZmF1bHQ7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0cGFkZGluZzogMCAycHg7XFxufVxcblxcbiN0aXRsZUlucHV0OmhvdmVyLFxcbiNkZWxldGU6aG92ZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICM0MTQxNDExYztcXG59XFxuXFxuI3RpdGxlSW5wdXQ6Zm9jdXMge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICM0MTQxNDExYztcXG5cXHRib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tYmxvY2stYmVmb3JlLWNvbG9yKTtcXG59XFxuXFxuI2RlbGV0ZSB7XFxuXFx0d2lkdGg6IDUwcHg7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGNvbG9yOiByZWQ7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFx0Zm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbiN0b2RvTGlzdCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogc3RhcnQ7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRnYXA6IDJweDtcXG5cXHRvdmVyZmxvdy15OiBhdXRvO1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHR3aWR0aDogMTAwJTtcXG59XFxuXFxuLnRvZG8ge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGUtY29sb3IpO1xcblxcdHBhZGRpbmc6IDE4cHggMjBweDtcXG59XFxuXFxuLmZhLWNpcmNsZSxcXG4uZmEtc3RhciB7XFxuXFx0Zm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi5mYS1jaXJjbGU6aG92ZXIge1xcblxcdHBhZGRpbmctcmlnaHQ6IDEuNXB4O1xcbn1cXG5cXG4uZmEtY2lyY2xlOmhvdmVyOjphZnRlciB7XFxuXFx0Y29udGVudDogXFxcIlxcXFxmMDBjXFxcIjtcXG5cXHRmb250LWZhbWlseTogRm9udEF3ZXNvbWU7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGZvbnQtc2l6ZTogMC43NXJlbTtcXG5cXHRyaWdodDogNTAlO1xcblxcdGJvdHRvbTogMnB4O1xcblxcdGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuI2FkZFRvZG8ge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGUtY29sb3IpO1xcblxcdGhlaWdodDogM3JlbTtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRwYWRkaW5nOiAyMnB4IDIwcHg7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jYWRkVG9kbzpob3ZlciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWhvdmVyKTtcXG59XFxuXFxuI2FkZFRvZG86Zm9jdXMge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1ob3Zlcik7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvZm9udHMvTnVuaXRvLU1lZGl1bS50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9mb250cy9OdW5pdG8tTWVkaXVtSXRhbGljLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ZvbnRzL051bml0by1Cb2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ZvbnRzL051bml0by1Cb2xkSXRhbGljLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ZvbnRzL051bml0by1MaWdodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdOdW5pdG8nO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoJ3RydWV0eXBlJyksXG4gICB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSkgZm9ybWF0KCd0cnVldHlwZScpLFxuICAgdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pIGZvcm1hdCgndHJ1ZXR5cGUnKSxcbiAgIHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KSBmb3JtYXQoJ3RydWV0eXBlJyksXG4gICB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19ffSkgZm9ybWF0KCd0cnVldHlwZScpO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbjpyb290IHtcbiAgLS1tYWluLWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYmEoMzQsMTkzLDE5NSwxKSAwJSwgcmdiYSgyNTUsMjAzLDkyLDEpIDEwMCUpO1xuICAtLXVzZXItZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiYSgzNCwxOTMsMTk1LDEpIDAlLCByZ2IoOTIsIDI1NSwgMTQxKSAxMDAlKTtcbiAgLS1zaWRlLWNvbG9yOiAjMjAyMDIwO1xuICAtLWZvb3Rlci1jb2xvcjogIzEwMTAxMDtcbiAgLS1jb250ZW50LWhlaWdodDogOTV2aDtcbiAgLS1mb290ZXItaGVpZ2h0OiA1dmg7XG4gIC0tbmF2LXdpZHRoOiAxN3JlbTtcbiAgLS1zaWRlLWluZm8td2lkdGg6IDEydnc7XG4gIC0tbWFpbi13aWR0aDogY2FsYygxMDB2dyAtIHZhcigtLW5hdi13aWR0aCkgKyB2YXIoLS1zaWRlLWluZm8td2lkdGgpKTtcbiAgLS1idXR0b24taG92ZXI6ICMzNTM1MzU7XG4gIC0tYmxvY2stYmVmb3JlLWNvbG9yOiAjNzZiOWVkO1xuICAtLWhyLWNvbG9yOiAjNDE0MTQxO1xufVxuXG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5idXR0b24ge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTsgXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICBmb250LXNpemU6IC45cmVtO1xuICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1mYW1pbHk6ICdOdW5pdG8nO1xufVxuXG4uYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWhvdmVyKTtcbn1cblxuYnV0dG9uLmFjdGl2ZTo6YmVmb3JlIHtcbiAgY29udGVudDogJyc7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsb2NrLWJlZm9yZS1jb2xvcik7XG4gIHdpZHRoOiAzcHg7XG4gIGhlaWdodDogMThweDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgbGVmdDogMnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1ob3Zlcik7XG59XG5cbmJvZHkge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIGZvbnQtZmFtaWx5OiAnTnVuaXRvJztcbiAgY29sb3I6IHdoaXRlOyBcbn1cblxuI2NvbnRlbnQge1xuICBoZWlnaHQ6IHZhcigtLWNvbnRlbnQtaGVpZ2h0KTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCOzs7OzZEQUkwRDtFQUMxRCxtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsdUZBQXVGO0VBQ3ZGLHNGQUFzRjtFQUN0RixxQkFBcUI7RUFDckIsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixxRUFBcUU7RUFDckUsdUJBQXVCO0VBQ3ZCLDZCQUE2QjtFQUM3QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLFdBQVc7RUFDWCwyQ0FBMkM7RUFDM0MsVUFBVTtFQUNWLFlBQVk7RUFDWixRQUFRO0VBQ1IsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdOdW5pdG8nO1xcbiAgc3JjOiB1cmwoJy4vYXNzZXRzL2ZvbnRzL051bml0by1NZWRpdW0udHRmJykgZm9ybWF0KCd0cnVldHlwZScpLFxcbiAgIHVybCgnLi9hc3NldHMvZm9udHMvTnVuaXRvLU1lZGl1bUl0YWxpYy50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyksXFxuICAgdXJsKCcuL2Fzc2V0cy9mb250cy9OdW5pdG8tQm9sZC50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyksXFxuICAgdXJsKCcuL2Fzc2V0cy9mb250cy9OdW5pdG8tQm9sZEl0YWxpYy50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyksXFxuICAgdXJsKCcuL2Fzc2V0cy9mb250cy9OdW5pdG8tTGlnaHQudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1tYWluLWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYmEoMzQsMTkzLDE5NSwxKSAwJSwgcmdiYSgyNTUsMjAzLDkyLDEpIDEwMCUpO1xcbiAgLS11c2VyLWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYmEoMzQsMTkzLDE5NSwxKSAwJSwgcmdiKDkyLCAyNTUsIDE0MSkgMTAwJSk7XFxuICAtLXNpZGUtY29sb3I6ICMyMDIwMjA7XFxuICAtLWZvb3Rlci1jb2xvcjogIzEwMTAxMDtcXG4gIC0tY29udGVudC1oZWlnaHQ6IDk1dmg7XFxuICAtLWZvb3Rlci1oZWlnaHQ6IDV2aDtcXG4gIC0tbmF2LXdpZHRoOiAxN3JlbTtcXG4gIC0tc2lkZS1pbmZvLXdpZHRoOiAxMnZ3O1xcbiAgLS1tYWluLXdpZHRoOiBjYWxjKDEwMHZ3IC0gdmFyKC0tbmF2LXdpZHRoKSArIHZhcigtLXNpZGUtaW5mby13aWR0aCkpO1xcbiAgLS1idXR0b24taG92ZXI6ICMzNTM1MzU7XFxuICAtLWJsb2NrLWJlZm9yZS1jb2xvcjogIzc2YjllZDtcXG4gIC0taHItY29sb3I6ICM0MTQxNDE7XFxufVxcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IHdoaXRlOyBcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgZm9udC1zaXplOiAuOXJlbTtcXG4gIHBhZGRpbmc6IDEycHggMTZweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZm9udC1mYW1pbHk6ICdOdW5pdG8nO1xcbn1cXG5cXG4uYWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1ob3Zlcik7XFxufVxcblxcbmJ1dHRvbi5hY3RpdmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiAnJztcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsb2NrLWJlZm9yZS1jb2xvcik7XFxuICB3aWR0aDogM3B4O1xcbiAgaGVpZ2h0OiAxOHB4O1xcbiAgdG9wOiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgbGVmdDogMnB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWhvdmVyKTtcXG59XFxuXFxuYm9keSB7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZm9udC1mYW1pbHk6ICdOdW5pdG8nO1xcbiAgY29sb3I6IHdoaXRlOyBcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgaGVpZ2h0OiB2YXIoLS1jb250ZW50LWhlaWdodCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vRm9vdGVyLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vRm9vdGVyLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9TaWRlYmFyLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vU2lkZWJhci5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vRGVmYXVsdC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0RlZmF1bHQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1VzZXJzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vVXNlcnMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJ7LyogPGZvb3Rlcj5cbiAgPHNwYW4+QW5vdGhlciBkYXksIEFub3RoZXIgcHJvamVjdDwvc3Bhbj5cbiAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9wZWV0emFlY2tzZGVlXCI+XG4gICAgPGltZyBzcmM9XCIuL2Fzc2V0cy9pbWFnZXMvcGl6emEuanBnXCIgYWx0PVwibXkgcHJvZmlsZVwiIC8+XG4gIDwvYT5cbjwvZm9vdGVyPiAqL31cblxuaW1wb3J0ICcuL0Zvb3Rlci5jc3MnO1xuXG5mdW5jdGlvbiBsb2FkRm9vdGVyKCkge1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcblxuICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICB0ZXh0LnRleHRDb250ZW50ID0gJ0Fub3RoZXIgZGF5LCBBbm90aGVyIHByb2plY3QnO1xuICB0ZXh0LmNsYXNzTGlzdC5hZGQoJ2NyZWRpdCcpXG5cbiAgY29uc3QgZ2l0aHViUGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgZ2l0aHViUGFnZS5ocmVmID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS9wZWV0emFlY2tzZGVlJztcbiAgZ2l0aHViUGFnZS5jbGFzc0xpc3QuYWRkKCdjcmVkaXQtYScpXG5cbiAgY29uc3QgZ2l0aHViSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgZ2l0aHViSW1hZ2Uuc3JjID0gJy4vYXNzZXRzL2ltYWdlcy9waXp6YS5qcGcnO1xuICBnaXRodWJJbWFnZS5hbHQgPSAnbXkgcHJvZmlsZSc7XG5cbiAgZ2l0aHViUGFnZS5hcHBlbmRDaGlsZChnaXRodWJJbWFnZSk7XG5cbiAgZm9vdGVyLmFwcGVuZENoaWxkKHRleHQpO1xuICBmb290ZXIuYXBwZW5kQ2hpbGQoZ2l0aHViUGFnZSk7XG5cbiAgcmV0dXJuIGZvb3RlclxufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkRm9vdGVyOyIsIntcblx0LyogPG5hdj5cbiAgPGRpdiBpZD1cInByb2plY3RzXCI+XG4gICAgPGRpdiBpZD1cImRlZmF1bHRQcm9qZWN0c1wiPlxuICAgICAgPGJ1dHRvbiBpZD1cInByb2plY3RcIiBjbGFzcz1cImFjdGl2ZVwiPlxuICAgICAgICA8ZGl2PjxpIGNsYXNzPVwiZmEtcmVndWxhciBmYS1zdW5cIj48L2k+TXkgRGF5PC9kaXY+XG4gICAgICAgIDxzcGFuIGRhdGEtY291bnQ+PC9zcGFuPlxuICAgICAgPC9idXR0b24+XG4gICAgICA8YnV0dG9uIGlkPVwicHJvamVjdFwiPlxuICAgICAgICA8ZGl2PjxpIGNsYXNzPVwiZmEtcmVndWxhciBmYS1zdGFyXCI+PC9pPlN0YXJyZWQ8L2Rpdj5cbiAgICAgICAgPHNwYW4gZGF0YS1jb3VudD48L3NwYW4+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gaWQ9XCJwcm9qZWN0XCI+XG4gICAgICAgIDxkaXY+PGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1saXN0LWNoZWNrXCI+PC9pPlBsYW5uZWQ8L2Rpdj5cbiAgICAgICAgPHNwYW4gZGF0YS1jb3VudD48L3NwYW4+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gaWQ9XCJwcm9qZWN0XCI+XG4gICAgICAgIDxkaXY+PGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1ob3VzZVwiPjwvaT5UYXNrczwvZGl2PlxuICAgICAgICA8c3BhbiBkYXRhLWNvdW50Pjwvc3Bhbj5cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIDxocj5cbiAgICA8ZGl2IGlkPVwidXNlclByb2plY3RzXCI+PC9kaXY+XG4gIDwvZGl2PlxuICA8YnV0dG9uIGlkPVwiYWRkUHJvamVjdFwiPk5ldyBsaXN0PC9idXR0b24+XG48L25hdj4gKi9cbn1cblxuaW1wb3J0IFwiLi9TaWRlYmFyLmNzc1wiO1xuaW1wb3J0IHsgYWRkUHJvamVjdCB9IGZyb20gXCIuLi9Db250cm9sbGVycy9Qcm9qZWN0Q29udHJvbGxlclwiO1xuaW1wb3J0IHtcblx0cmVuZGVyUHJvamVjdHMsXG5cdHJlbmRlck1haW5Qcm9qZWN0UGFnZSxcblx0cmVuZGVyVXNlclByb2plY3RQYWdlLFxuXHRzZXRBY3RpdmUsXG59IGZyb20gXCIuLi9Db250cm9sbGVycy9SZW5kZXJDb250cm9sbGVyXCI7XG5pbXBvcnQgeyBQcm9qZWN0QnV0dG9uIH0gZnJvbSBcIi4uL3V0aWxzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcblx0Y29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcblxuXHRjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdHByb2plY3RzLmlkID0gXCJwcm9qZWN0c1wiO1xuXG5cdGNvbnN0IGRlZmF1bHRQcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGRlZmF1bHRQcm9qZWN0cy5pZCA9IFwiZGVmYXVsdFByb2plY3RzXCI7XG5cblx0Y29uc3QgbXlEYXkgPSBQcm9qZWN0QnV0dG9uKFwiZmEtcmVndWxhclwiLCBcImZhLXN1blwiLCBcIk15IERheVwiLCAtMSk7XG5cdG15RGF5LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG5cdGNvbnN0IHN0YXJyZWQgPSBQcm9qZWN0QnV0dG9uKFwiZmEtcmVndWxhclwiLCBcImZhLXN0YXJcIiwgXCJTdGFycmVkXCIsIC0yKTtcblx0Y29uc3QgcGxhbm5lZCA9IFByb2plY3RCdXR0b24oXCJmYS1zb2xpZFwiLCBcImZhLWxpc3QtY2hlY2tcIiwgXCJQbGFubmVkXCIsIC0zKTtcblxuXHRteURheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gcmVuZGVyTWFpblByb2plY3RQYWdlKCkpO1xuXHRzdGFycmVkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiByZW5kZXJNYWluUHJvamVjdFBhZ2UoKSk7XG5cdHBsYW5uZWQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHJlbmRlck1haW5Qcm9qZWN0UGFnZSgpKTtcblxuXHRjb25zdCBociA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoclwiKTtcblxuXHRjb25zdCB1c2VyUHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHR1c2VyUHJvamVjdHMuaWQgPSBcInVzZXJQcm9qZWN0c1wiO1xuXG5cdGNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXHRhZGRQcm9qZWN0QnRuLmlkID0gXCJhZGRQcm9qZWN0XCI7XG5cdGFkZFByb2plY3RCdG4udGV4dENvbnRlbnQgPSBcIk5ldyBMaXN0XCI7XG5cdGFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRjb25zdCBuZXdQcm9qZWN0ID0gYWRkUHJvamVjdChcIlVudGl0bGVkIExpc3RcIik7XG5cdFx0cmVuZGVyUHJvamVjdHMoKTtcblx0XHRcblx0XHRyZW5kZXJVc2VyUHJvamVjdFBhZ2UobmV3UHJvamVjdCk7XG5cdFx0c2V0QWN0aXZlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkPVwiJHtuZXdQcm9qZWN0LmlkfVwiXWApKVxuXHR9KTtcblxuXHRkZWZhdWx0UHJvamVjdHMuYXBwZW5kQ2hpbGQobXlEYXkpO1xuXHRkZWZhdWx0UHJvamVjdHMuYXBwZW5kQ2hpbGQoc3RhcnJlZCk7XG5cdGRlZmF1bHRQcm9qZWN0cy5hcHBlbmRDaGlsZChwbGFubmVkKTtcblxuXHRwcm9qZWN0cy5hcHBlbmRDaGlsZChkZWZhdWx0UHJvamVjdHMpO1xuXHRwcm9qZWN0cy5hcHBlbmRDaGlsZChocik7XG5cdHByb2plY3RzLmFwcGVuZENoaWxkKHVzZXJQcm9qZWN0cyk7XG5cblx0bmF2LmFwcGVuZENoaWxkKHByb2plY3RzKTtcblx0bmF2LmFwcGVuZENoaWxkKGFkZFByb2plY3RCdG4pO1xuXG5cdHJldHVybiBuYXY7XG59XG4iLCJpbXBvcnQgXCIuL0RlZmF1bHQuY3NzXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZURlZmF1bHRQYWdlKCkge1xuXHRjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG5cblx0cmV0dXJuIG1haW47XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZURlZmF1bHRQYWdlO1xuIiwiaW1wb3J0IFwiLi9Vc2Vycy5jc3NcIjtcblxuaW1wb3J0IHsgZWRpdFByb2plY3QsIGNyZWF0ZVRvZG8sIHJlbW92ZVByb2plY3QgfSBmcm9tIFwiLi4vLi4vQ29udHJvbGxlcnMvUHJvamVjdENvbnRyb2xsZXJcIjtcbmltcG9ydCB7IHRleHRMZW5ndGhWYWxpZGF0b3IgfSBmcm9tIFwiLi4vLi4vVmFsaWRhdG9yXCI7XG5pbXBvcnQgeyBUb2RvQnV0dG9uIH0gZnJvbSBcIi4uLy4uL3V0aWxzXCI7XG5pbXBvcnQgeyByZW5kZXJQcm9qZWN0cywgcmVuZGVyTWFpblByb2plY3RQYWdlLCBzZXRBY3RpdmUgfSBmcm9tIFwiLi4vLi4vQ29udHJvbGxlcnMvUmVuZGVyQ29udHJvbGxlclwiO1xuXG5mdW5jdGlvbiBjcmVhdGVVc2VyUGFnZShwcm9qZWN0KSB7XG5cdGNvbnN0IHByb2plY3RUZXh0ID0gZG9jdW1lbnRcblx0XHQucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQ9XCIke3Byb2plY3QuaWR9XCJdYClcblx0XHQucXVlcnlTZWxlY3RvcihcInNwYW5cIik7XG5cblx0Y29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xuXG5cdGNvbnN0IHRpdGxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGl0bGVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGl0bGUtY29udGFpbmVyJyk7XG5cblx0Y29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cdHRpdGxlLnR5cGUgPSBcInRleHRcIjtcblx0dGl0bGUudmFsdWUgPSBwcm9qZWN0LmdldFRpdGxlKCk7XG5cdHRpdGxlLmlkID0gXCJ0aXRsZUlucHV0XCI7XG5cdHRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCAoZXZlbnQpID0+IHtcblx0XHRpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcblx0XHRcdHByb2plY3QuY2hhbmdlVGl0bGUodGl0bGUudmFsdWUpO1xuXHRcdFx0cHJvamVjdFRleHQudGV4dENvbnRlbnQgPSB0ZXh0TGVuZ3RoVmFsaWRhdG9yKHRpdGxlLnZhbHVlKTtcblx0XHRcdGVkaXRQcm9qZWN0KHByb2plY3QpO1xuXHRcdH1cblx0fSk7XG5cdGNvbnN0IHJlbW92ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHJlbW92ZUJ1dHRvbi5pZCA9IFwiZGVsZXRlXCI7XG4gIHJlbW92ZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiWFwiO1xuXG4gIGxldCBjb3VudCA9IDBcbiAgcmVtb3ZlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY291bnQrKztcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvdW50LS07XG4gICAgfSwgMTAwMCk7XG4gICAgaWYgKGNvdW50ID09PSAyKSB7XG4gICAgICByZW1vdmVQcm9qZWN0KHByb2plY3QuaWQpO1xuICAgICAgcmVuZGVyUHJvamVjdHMoKTtcbiAgICAgIHJlbmRlck1haW5Qcm9qZWN0UGFnZSgpO1xuICAgICAgc2V0QWN0aXZlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdFwiKSlcbiAgICB9XG4gIH0pO1xuXG5cdGNvbnN0IHRvZG9MaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0dG9kb0xpc3QuaWQgPSBcInRvZG9MaXN0XCI7XG5cdHByb2plY3QuZ2V0VG9kb3MoKS5mb3JFYWNoKCh0b2RvKSA9PiB7XG5cdFx0Y29uc3QgVG9kb0J0biA9IFRvZG9CdXR0b24oXG5cdFx0XHR0b2RvLmdldFRpdGxlKCksXG5cdFx0XHR0b2RvLmlzRG9uZSgpLFxuXHRcdFx0dG9kby5pc1N0YXJyZWQoKSxcblx0XHRcdHRvZG8uaWRcblx0XHQpO1xuXHRcdHRvZG9MaXN0LmFwcGVuZENoaWxkKFRvZG9CdG4pO1xuXHR9KTtcblxuXHRjb25zdCBhZGRUb2RvQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXHRhZGRUb2RvQnRuLnR5cGUgPSBcInRleHRcIjtcblx0YWRkVG9kb0J0bi5pZCA9IFwiYWRkVG9kb1wiO1xuXHRhZGRUb2RvQnRuLnBsYWNlaG9sZGVyID0gXCJBZGQgYSB0YXNrXCI7XG5cdGFkZFRvZG9CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsICgpID0+IHtcblx0XHRhZGRUb2RvQnRuLnBsYWNlaG9sZGVyID0gXCJcIjtcblx0fSk7XG5cdGFkZFRvZG9CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsICgpID0+IHtcblx0XHRhZGRUb2RvQnRuLnBsYWNlaG9sZGVyID0gYWRkVG9kb0J0bi52YWx1ZSB8fCBcIkFkZCBhIHRhc2tcIjtcblx0fSk7XG5cdGFkZFRvZG9CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsIChldmVudCkgPT4ge1xuXHRcdGlmIChldmVudC5rZXkgPT09IFwiRW50ZXJcIikge1xuXHRcdFx0Y3JlYXRlVG9kbyhwcm9qZWN0LmlkLCBbYWRkVG9kb0J0bi52YWx1ZSwgRGF0ZS5ub3coKV0pO1xuXHRcdFx0dG9kb0xpc3QuYXBwZW5kQ2hpbGQoVG9kb0J1dHRvbihhZGRUb2RvQnRuLnZhbHVlLCBmYWxzZSwgZmFsc2UpKTtcblx0XHRcdGFkZFRvZG9CdG4udmFsdWUgPSBcIlwiO1xuXHRcdH1cblx0fSk7XG5cbiAgdGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICB0aXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChyZW1vdmVCdXR0b24pO1xuXG5cdG1haW4uYXBwZW5kQ2hpbGQodGl0bGVDb250YWluZXIpO1xuXHRtYWluLmFwcGVuZENoaWxkKHRvZG9MaXN0KTtcblx0bWFpbi5hcHBlbmRDaGlsZChhZGRUb2RvQnRuKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlVXNlclBhZ2U7XG4iLCJpbXBvcnQgUHJvamVjdCBmcm9tIFwiLi4vT2JqZWN0cy9Qcm9qZWN0LmpzXCI7XG5pbXBvcnQgVG9kbyBmcm9tIFwiLi4vT2JqZWN0cy9Ub2RvLmpzXCI7XG5pbXBvcnQgeyBzYXZlRGF0YSwgbG9hZERhdGEgfSBmcm9tIFwiLi9TdG9yYWdlQ29udHJvbGxlci5qc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gbG9hZFByb2plY3RzKCkge1xuXHRsZXQgcHJvamVjdHNEYXRhID0gSlNPTi5wYXJzZShsb2FkRGF0YShcInByb2plY3RzXCIpKSB8fCBbXTtcblxuXHRyZXR1cm4gcHJvamVjdHNEYXRhLm1hcCgoZGF0YSkgPT4ge1xuXHRcdGNvbnN0IHByb2plY3QgPSBQcm9qZWN0KGRhdGEuaWQsIGRhdGEudGl0bGUpO1xuXG5cdFx0bG9hZFRvZG9zKHByb2plY3QsIGRhdGEudG9kb3MpO1xuXHRcdHJldHVybiBwcm9qZWN0O1xuXHR9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRUb2Rvcyhwcm9qZWN0LCB0b2Rvcykge1xuXHR0b2Rvcy5mb3JFYWNoKCh0b2RvKSA9PiB7XG5cdFx0cHJvamVjdC5hZGRUb2RvKFxuXHRcdFx0VG9kbyhcblx0XHRcdFx0dG9kby5pZCxcblx0XHRcdFx0dG9kby5wcm9qZWN0SWQsXG5cdFx0XHRcdHRvZG8udGl0bGUsXG5cdFx0XHRcdHRvZG8uZGF0ZSxcblx0XHRcdFx0dG9kby5kdWVEYXRlLFxuXHRcdFx0XHR0b2RvLnN0YXJyZWQsXG5cdFx0XHRcdHRvZG8uZG9uZVxuXHRcdFx0KVxuXHRcdCk7XG5cdH0pO1xufVxuXG4vKipcbiAqXG4gKiBAcGFyYW0ge1tQcm9qZWN0XX0gcHJvamVjdHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNhdmVQcm9qZWN0cyhwcm9qZWN0cykge1xuXHRjb25zdCBvYmplY3RQcm9qZWN0cyA9IHByb2plY3RzLm1hcCgocHJvamVjdCkgPT4gcHJvamVjdC50b09iamVjdCgpKTtcblxuXHRzYXZlRGF0YShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KG9iamVjdFByb2plY3RzKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRQcm9qZWN0KG5hbWUpIHtcblx0Y29uc3QgTG9hZGVkUHJvamVjdHMgPSBsb2FkUHJvamVjdHMoKTtcblx0Y29uc3QgUHJvamVjdHNMZW5ndGggPSBMb2FkZWRQcm9qZWN0cy5sZW5ndGg7XG5cblx0bGV0IG5ld1Byb2plY3QgPSBQcm9qZWN0KFxuXHRcdFByb2plY3RzTGVuZ3RoID4gMCA/IExvYWRlZFByb2plY3RzW0xvYWRlZFByb2plY3RzLmxlbmd0aCAtIDFdLmlkICsgMSA6IDEsXG5cdFx0bmFtZVxuXHQpO1xuXG5cdExvYWRlZFByb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XG5cblx0c2F2ZVByb2plY3RzKExvYWRlZFByb2plY3RzKTtcblxuXHRyZXR1cm4gbmV3UHJvamVjdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVkaXRQcm9qZWN0KG5ld1Byb2plY3QpIHtcblx0bGV0IExvYWRlZFByb2plY3RzID0gbG9hZFByb2plY3RzKCk7XG5cblx0bGV0IGlkeCA9IExvYWRlZFByb2plY3RzLmZpbmRJbmRleCgocHJvamVjdCkgPT4gcHJvamVjdC5pZCA9PT0gbmV3UHJvamVjdC5pZCk7XG5cdExvYWRlZFByb2plY3RzW2lkeF0gPSBuZXdQcm9qZWN0O1xuXG5cdHNhdmVQcm9qZWN0cyhMb2FkZWRQcm9qZWN0cyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQcm9qZWN0KHByb2plY3RJZCkge1xuXHRsZXQgTG9hZGVkUHJvamVjdHMgPSBsb2FkUHJvamVjdHMoKTtcblxuXHRzYXZlUHJvamVjdHMoTG9hZGVkUHJvamVjdHMuZmlsdGVyKChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkICE9PSBwcm9qZWN0SWQpKTtcbn1cblxuLyoqXG4gKlxuICogQHBhcmFtIHsqfSBwcm9qZWN0SWRcbiAqIEBwYXJhbSAge1tzdHJpbmcsIERhdGU/LCBzdHJpbmc/LCBib29sZWFuPywgYm9vbGVhbj9dfSBpbmZvIFt0aXRsZSwgZHVlZGF0ZSwgbm90ZXMsIHN0YXJyZWQsIGRvbmVdXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUb2RvKHByb2plY3RJZCwgaW5mbykge1xuXHRsZXQgTG9hZGVkUHJvamVjdHMgPSBsb2FkUHJvamVjdHMoKTtcblxuXHRsZXQgcHJvamVjdCA9IExvYWRlZFByb2plY3RzLmZpbmQoKHByb2opID0+IHByb2ouaWQgPT09IHByb2plY3RJZCk7XG5cblx0bGV0IG5ld1RvZG8gPSBUb2RvKFxuXHRcdHByb2plY3QubGVuZ3RoID4gMCA/IHByb2plY3RbcHJvamVjdC5sZW5ndGggLSAxXS5pZCArIDEgOiAxLFxuXHRcdHByb2plY3RJZCxcblx0XHQuLi5pbmZvXG5cdCk7XG5cblx0cHJvamVjdC5hZGRUb2RvKG5ld1RvZG8pO1xuXG5cdHNhdmVQcm9qZWN0cyhMb2FkZWRQcm9qZWN0cyk7XG5cblx0cmV0dXJuIG5ld1RvZG87XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVUb2RvKHByb2plY3RJZCwgdG9kb0lkKSB7XG5cdGxldCBMb2FkZWRQcm9qZWN0cyA9IGxvYWRQcm9qZWN0cygpO1xuXG5cdGxldCBwcm9qZWN0ID0gTG9hZGVkUHJvamVjdHMuZmluZCgocHJvaikgPT4gcHJvai5pZCA9PT0gcHJvamVjdElkKTtcblxuXHRwcm9qZWN0LnJlbW92ZVRvZG8odG9kb0lkKTtcblxuXHRzYXZlUHJvamVjdHMoTG9hZGVkUHJvamVjdHMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWRpdFRvZG8ocHJvamVjdElkLCB0b2RvSWQsIGluZm8pIHtcblx0bGV0IExvYWRlZFByb2plY3RzID0gbG9hZFByb2plY3RzKCk7XG5cblx0bGV0IHByb2plY3QgPSBMb2FkZWRQcm9qZWN0cy5maW5kKChwcm9qKSA9PiBwcm9qLmlkID09PSBwcm9qZWN0SWQpO1xuXHRsZXQgbmV3VG9kbyA9IFRvZG8odG9kb0lkLCAuLi5pbmZvKTtcblxuXHRsZXQgdG9kb3MgPSBwcm9qZWN0LmdldFRvZG9zKCk7XG5cdGxldCBpZHggPSB0b2Rvcy5maW5kSW5kZXgoKHRvZG8pID0+IHRvZG8uaWQgPT09IHRvZG9JZCk7XG5cdHRvZG9zW2lkeF0gPSBuZXdUb2RvO1xuXG5cdHNhdmVQcm9qZWN0cyhMb2FkZWRQcm9qZWN0cyk7XG59XG4iLCJpbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9Db21wb25lbnRzL0Zvb3Rlci5qc1wiO1xuaW1wb3J0IFNpZGViYXIgZnJvbSBcIi4uL0NvbXBvbmVudHMvU2lkZWJhci5qc1wiO1xuaW1wb3J0IERlZmF1bHRQYWdlIGZyb20gXCIuLi9Db21wb25lbnRzL3BhZ2VzL0RlZmF1bHQuanNcIjtcbmltcG9ydCBVc2VyUGFnZSBmcm9tIFwiLi4vQ29tcG9uZW50cy9wYWdlcy9Vc2Vycy5qc1wiO1xuXG5pbXBvcnQgeyBsb2FkUHJvamVjdHMgfSBmcm9tIFwiLi9Qcm9qZWN0Q29udHJvbGxlci5qc1wiO1xuaW1wb3J0IHsgUHJvamVjdEJ1dHRvbiB9IGZyb20gXCIuLi91dGlsc1wiO1xuaW1wb3J0IHsgdGV4dExlbmd0aFZhbGlkYXRvciB9IGZyb20gXCIuLi9WYWxpZGF0b3IuanNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHNldEFjdGl2ZShidXR0b24pIHtcblx0Y29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdFwiKTtcblx0YnV0dG9ucy5mb3JFYWNoKChidG4pID0+IHtcblx0XHRpZiAoYnRuICE9PSBidXR0b24pIHtcblx0XHRcdGJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuXHRcdH1cblx0XHRidXR0b24uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcblx0fSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJVc2VyUHJvamVjdFBhZ2UocHJvamVjdCkge1xuXHRjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG5cdG1haW4uY2xhc3NMaXN0LmFkZChcInVzZXJcIik7XG5cdG1haW4uY2xhc3NMaXN0LnJlbW92ZShcIm1haW5cIik7XG5cdG1haW4udGV4dENvbnRlbnQgPSBcIlwiO1xuXG5cdFVzZXJQYWdlKHByb2plY3QpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyTWFpblByb2plY3RQYWdlKCkge1xuXHRjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG5cdG1haW4uY2xhc3NMaXN0LmFkZChcIm1haW5cIik7XG5cdG1haW4uY2xhc3NMaXN0LnJlbW92ZShcInVzZXJcIik7XG5cdG1haW4udGV4dENvbnRlbnQgPSBcIlwiO1xuXG5cdERlZmF1bHRQYWdlKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJQcm9qZWN0cygpIHtcblx0Y29uc3QgUHJvamVjdHMgPSBsb2FkUHJvamVjdHMoKTtcblx0Y29uc3QgdXNlclByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN1c2VyUHJvamVjdHNcIik7XG5cdHVzZXJQcm9qZWN0cy50ZXh0Q29udGVudCA9IFwiXCI7XG5cblx0UHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuXHRcdGNvbnN0IGJ0biA9IFByb2plY3RCdXR0b24oXG5cdFx0XHRcImZhLXNvbGlkXCIsXG5cdFx0XHRcImZhLWJhcnNcIixcblx0XHRcdHRleHRMZW5ndGhWYWxpZGF0b3IocHJvamVjdC5nZXRUaXRsZSgpKSxcblx0XHRcdHByb2plY3QuaWRcblx0XHQpO1xuXHRcdGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdFx0cmVuZGVyVXNlclByb2plY3RQYWdlKHByb2plY3QpO1xuXHRcdH0pO1xuXHRcdHVzZXJQcm9qZWN0cy5hcHBlbmRDaGlsZChidG4pO1xuXHR9KTtcblxuXHRjb25zdCBwcm9qZWN0QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdFwiKTtcblx0cHJvamVjdEJ1dHRvbnMuZm9yRWFjaCgoYnRuKSA9PiB7XG5cdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0XHRpZiAoYnRuLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHNldEFjdGl2ZShidG4pO1xuXHRcdH0pO1xuXHR9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXQoKSB7XG5cdGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cdGNvbnRlbnQuYXBwZW5kQ2hpbGQoU2lkZWJhcigpKTtcblx0Y29udGVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJykpO1xuXHRjb250ZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpO1xuXHRjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5cdGJvZHkuYXBwZW5kQ2hpbGQoRm9vdGVyKCkpO1xuXG4gIHJlbmRlck1haW5Qcm9qZWN0UGFnZSgpO1xuXHRyZW5kZXJQcm9qZWN0cygpO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHNhdmVEYXRhKGtleSwgZGF0YSkge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIGRhdGEpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZERhdGEoa2V5KSB7XG4gIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xufSIsIi8qKlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBpZFxuICogQHBhcmFtIHtzdHJpbmd9IHRpdGxlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHVpZCwgdGl0bGUpIHtcblx0bGV0IHRvZG9zID0gW107XG5cblx0Y29uc3QgaWQgPSB1aWQ7XG5cdGNvbnN0IGdldFRpdGxlID0gKCkgPT4gdGl0bGU7XG5cdGNvbnN0IGdldFRvZG9zID0gKCkgPT4gdG9kb3M7XG5cblx0Y29uc3QgY2hhbmdlVGl0bGUgPSAobmV3VGl0bGUpID0+IHtcblx0XHR0aXRsZSA9IG5ld1RpdGxlO1xuXHR9O1xuXHRjb25zdCBhZGRUb2RvID0gKHRvZG8pID0+IHtcblx0XHR0b2Rvcy5wdXNoKHRvZG8pO1xuXHR9O1xuXHRjb25zdCByZW1vdmVUb2RvID0gKHRvZG9JZCkgPT4ge1xuXHRcdHRvZG9zLmZpbHRlcigodG9kbykgPT4ge1xuXHRcdFx0dG9kby5nZXRJZCAhPT0gdG9kb0lkO1xuXHRcdH0pO1xuXHR9O1xuXG5cdGNvbnN0IHRvT2JqZWN0ID0gKCkgPT4gKHtcblx0XHRpZCxcblx0XHR0aXRsZSxcblx0XHR0b2RvczogdG9kb3MubWFwKCh0b2RvKSA9PiB7XG5cdFx0XHRyZXR1cm4gdG9kby50b09iamVjdCgpO1xuXHRcdH0pLFxuXHR9KTtcblxuXHRyZXR1cm4gT2JqZWN0LmFzc2lnbihcblx0XHR7fSxcblx0XHR7IGlkLCBnZXRUaXRsZSwgZ2V0VG9kb3MsIGNoYW5nZVRpdGxlLCBhZGRUb2RvLCByZW1vdmVUb2RvLCB0b09iamVjdCB9XG5cdCk7XG59XG4iLCIvKipcbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gaWRcbiAqIEBwYXJhbSB7bnVtYmVyfSBwcm9qZWN0SWRcbiAqIEBwYXJhbSB7c3RyaW5nfSB0aXRsZVxuICogQHBhcmFtIHtEYXRlP30gZGF0ZVxuICogQHBhcmFtIHtzdHJpbmc/fSBub3Rlc1xuICogQHBhcmFtIHtib29sZWFuP30gc3RhcnJlZFxuICogQHBhcmFtIHtib29sZWFuP30gZG9uZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChcblx0dWlkID0gMSxcblx0cHJvamVjdElkLFxuXHR0aXRsZSxcblx0ZGF0ZSxcblx0bm90ZXMgPSBcIlwiLFxuXHRzdGFycmVkID0gZmFsc2UsXG5cdGRvbmUgPSBmYWxzZVxuKSB7XG5cdGNvbnN0IGR1ZURhdGUgPSBEYXRlLm5vdygpO1xuXG5cdGNvbnN0IGlkID0gdWlkO1xuXHRjb25zdCBnZXRUaXRsZSA9ICgpID0+IHRpdGxlO1xuXHRjb25zdCBnZXREYXRlID0gKCkgPT4gZGF0ZTtcblx0Y29uc3QgZ2V0RHVlRGF0ZSA9ICgpID0+IGR1ZURhdGU7XG5cdGNvbnN0IGdldE5vdGVzID0gKCkgPT4gbm90ZXM7XG5cdGNvbnN0IGlzU3RhcnJlZCA9ICgpID0+IHN0YXJyZWQ7XG5cdGNvbnN0IGdldFByb2plY3RJZCA9ICgpID0+IHByb2plY3RJZDtcblx0Y29uc3QgaXNEb25lID0gKCkgPT4gZG9uZTtcblxuXHRjb25zdCBzZXRUaXRsZSA9IChuZXdUaXRsZSkgPT4ge1xuXHRcdHRpdGxlID0gbmV3VGl0bGU7XG5cdH07XG5cdGNvbnN0IHNldER1ZURhdGUgPSAobmV3RHVlRGF0ZSkgPT4ge1xuXHRcdGR1ZURhdGUgPSBuZXdEdWVEYXRlO1xuXHR9O1xuXHRjb25zdCBzZXROb3RlcyA9IChuZXdOb3RlKSA9PiB7XG5cdFx0bm90ZXMgPSBuZXdOb3RlO1xuXHR9O1xuXHRjb25zdCBzZXRTdGFycmVkID0gKG5ld1N0YXRlKSA9PiB7XG5cdFx0c3RhcnJlZCA9IG5ld1N0YXRlO1xuXHR9O1xuXHRjb25zdCBzZXREb25lID0gKG5ld1N0YXRlKSA9PiB7XG5cdFx0ZG9uZSA9IG5ld1N0YXRlO1xuXHR9O1xuXG5cdGNvbnN0IHRvT2JqZWN0ID0gKCkgPT4gKHtcblx0XHRpZCwgdGl0bGUsIGRhdGUsIGR1ZURhdGUsIG5vdGVzLCBzdGFycmVkLCBwcm9qZWN0SWQsIGRvbmUsXG5cdH0pO1xuXG5cdHJldHVybiBPYmplY3QuYXNzaWduKFxuXHRcdHt9LFxuXHRcdHtcblx0XHRcdGlkLFxuXHRcdFx0Z2V0VGl0bGUsXG5cdFx0XHRnZXREYXRlLFxuXHRcdFx0Z2V0RHVlRGF0ZSxcblx0XHRcdGdldE5vdGVzLFxuXHRcdFx0aXNTdGFycmVkLFxuXHRcdFx0Z2V0UHJvamVjdElkLFxuXHRcdFx0aXNEb25lLFxuXHRcdFx0c2V0VGl0bGUsXG5cdFx0XHRzZXREdWVEYXRlLFxuXHRcdFx0c2V0Tm90ZXMsXG5cdFx0XHRzZXRTdGFycmVkLFxuXHRcdFx0c2V0RG9uZSxcblx0XHRcdHRvT2JqZWN0LFxuXHRcdH1cblx0KTtcbn1cbiIsIi8qKlxuICogXG4gKiBAcGFyYW0ge3N0cmluZ30gdGV4dCBcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0ZXh0TGVuZ3RoVmFsaWRhdG9yKHRleHQpIHtcbiAgaWYgKHRleHQubGVuZ3RoID4gMTYpIHtcbiAgICByZXR1cm4gdGV4dC5zdWJzdHJpbmcoMCwgMTYpICsgXCIuLi5cIjtcbiAgfVxuXG4gIHJldHVybiB0ZXh0O1xufSIsImV4cG9ydCBmdW5jdGlvbiBQcm9qZWN0QnV0dG9uKG9wYWMsIGljb24sIHRleHQsIGlkKSB7XG5cdGNvbnN0IFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXHRQcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0XCIpO1xuXHRQcm9qZWN0LmRhdGFzZXQuaWQgPSBpZDtcblxuXHRjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG5cdGNvbnN0IGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcblx0aS5jbGFzc0xpc3QuYWRkKG9wYWMsIGljb24pO1xuXG5cdGNvbnN0IHRleHRTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cdHRleHRTcGFuLnRleHRDb250ZW50ID0gdGV4dDtcblxuXHRjb25zdCBjb3VudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXHRjb3VudC5kYXRhc2V0LmNvdW50ID0gMDtcblxuXHRkaXYuYXBwZW5kQ2hpbGQoaSk7XG5cdGRpdi5hcHBlbmRDaGlsZCh0ZXh0U3Bhbik7XG5cblx0UHJvamVjdC5hcHBlbmRDaGlsZChkaXYpO1xuXHRQcm9qZWN0LmFwcGVuZENoaWxkKGNvdW50KTtcblxuXHRyZXR1cm4gUHJvamVjdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFRvZG9CdXR0b24odGl0bGUsIGRvbmUsIHN0YXJyZWQsIGlkKSB7XG5cdGNvbnN0IFRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXHRUb2RvLmNsYXNzTGlzdC5hZGQoXCJ0b2RvXCIpO1xuXHRUb2RvLmRhdGFzZXQuVGlkID0gaWQ7XG5cdFRvZG8uZGF0YXNldC5kb25lID0gZG9uZTtcblx0VG9kby5kYXRhc2V0LnN0YXJyZWQgPSBzdGFycmVkO1xuXG5cdGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cblx0Y29uc3QgY2lyY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gIGNpcmNsZS5jbGFzc0xpc3QuYWRkKFwiZmEtcmVndWxhclwiLCBcImZhLWNpcmNsZVwiKTtcblxuXHRjb25zdCB0ZXh0U3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXHR0ZXh0U3Bhbi50ZXh0Q29udGVudCA9IHRpdGxlO1xuXG5cdGNvbnN0IHN0YXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcblx0c3Rhci5jbGFzc0xpc3QuYWRkKFwiZmEtcmVndWxhclwiLCBcImZhLXN0YXJcIik7XG5cblx0ZGl2LmFwcGVuZENoaWxkKGNpcmNsZSk7XG5cdGRpdi5hcHBlbmRDaGlsZCh0ZXh0U3Bhbik7XG5cblx0VG9kby5hcHBlbmRDaGlsZChkaXYpO1xuXHRUb2RvLmFwcGVuZENoaWxkKHN0YXIpO1xuXG5cdHJldHVybiBUb2RvO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgaW5pdCB9IGZyb20gJy4vQ29udHJvbGxlcnMvUmVuZGVyQ29udHJvbGxlci5qcyc7XG5cbmluaXQoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=