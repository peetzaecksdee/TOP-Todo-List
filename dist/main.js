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
  transition: 75ms ease-out;
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
}`, "",{"version":3,"sources":["webpack://./src/Components/Sidebar.css"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,uBAAuB;EACvB,mCAAmC;EACnC,YAAY;;EAEZ,aAAa;EACb,8BAA8B;EAC9B,sBAAsB;AACxB;;AAEA;EACE,sBAAsB;EACtB,aAAa;AACf;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,iBAAiB;AACnB;;AAEA,qBAAqB;;AAErB;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,sBAAsB;EACtB,QAAQ;AACV;;AAEA,aAAa;;AAEb;EACE,aAAa;EACb,8BAA8B;EAC9B,yBAAyB;AAC3B;;AAEA,iBAAiB;;AAEjB;EACE,mBAAmB;AACrB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,gBAAgB;AAClB","sourcesContent":["nav {\n  height: 100%;\n  width: var(--nav-width);\n  background-color: var(--side-color);\n  padding: 4px;\n\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n}\n\nhr {\n  color: var(--hr-color);\n  margin: 4px 0;\n}\n\n#addProject {\n  display: flex;\n  align-items: center;\n  gap: 18px;\n  padding: 6px 10px;\n}\n\n#addProject::before {\n  content: \"+\";\n  font-size: 1.5rem;\n}\n\n/* Default Projects */\n\n#defaultProjects {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  gap: 4px;\n}\n\n/* Projects */\n\n.project {\n  display: flex;\n  justify-content: space-between;\n  transition: 75ms ease-out;\n}\n\n/* Icon Styling */\n\n.fa-regular, .fa-solid {\n  padding-right: 12px;\n}\n\n.fa-sun {\n  color: orange;\n}\n\n.project .fa-star {\n  color: yellow;\n}\n\n.fa-list-check {\n  color: cyan;\n}\n\n.fa-house {\n  color: aliceblue;\n}"],"sourceRoot":""}]);
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
	color: var(--page-color);
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
	align-items: center;
	background-color: var(--side-color);
	padding: 18px 20px;
  transition: 75ms ease-out;
}

/* The abomination of styling */

#titleInput:focus,
#titleInput:hover,
#delete:hover {
	background-color: #4141411c;
}

#titleInput:focus {
	border-bottom: 2px solid var(--block-before-color);
}

.todo:has(.done) span {
	font-style: italic;
	text-decoration: line-through;
	filter: brightness(50%);
}

.fa-circle,
.fa-star {
	font-size: 1.2rem;
}

.done.fa-circle::after,
.fa-circle:not(.done):hover::after {
	content: "\\f00c";
	font-family: FontAwesome;
	position: relative;
	font-size: 0.75rem;
	right: 50%;
	bottom: 2px;
	border-radius: 50%;
}

.done.fa-circle::after {
	color: var(--side-color);
}

.done.fa-circle:focus::after {
	content: "";
	padding-right: 10.5px;
}

:not(.done).fa-circle.fa-solid:hover::after {
	color: var(--side-color);
}

.fa-star:not(.fa-regular):focus,
.fa-star:not(.fa-solid):focus {
	color: white;
}

.done.fa-circle,
.fa-star:not(.fa-solid):hover,
.fa-star:not(.fa-regular) {
	color: var(--page-color);
}

:not(.done).fa-circle:hover,
.done.fa-circle {
	padding-right: 1.5px;
}

/* ----------------------------------------- */

#addTodo {
	background-color: var(--side-color);
	color: var(--page-color);
	height: 3rem;
	width: 100%;
	padding: 22px 20px;
	display: flex;
	align-items: center;
}

#addTodo:hover,
#addTodo:focus {
	background-color: var(--button-hover);
}`, "",{"version":3,"sources":["webpack://./src/Components/pages/Users.css"],"names":[],"mappings":"AAAA;CACC,YAAY;CACZ,wBAAwB;CACxB,aAAa;;CAEb,aAAa;CACb,SAAS;CACT,sBAAsB;CACtB,8BAA8B;AAC/B;;AAEA;CACC,gCAAgC;AACjC;;AAEA;CACC,gBAAgB;CAChB,aAAa;CACb,kBAAkB;CAClB,YAAY;CACZ,YAAY;CACZ,kBAAkB;CAClB,qBAAqB;CACrB,uBAAuB;AACxB;;AAEA;CACC,aAAa;AACd;;AAEA;CACC,iBAAiB;CACjB,eAAe;CACf,WAAW;CACX,cAAc;CACd,wBAAwB;AACzB;;AAEA;CACC,WAAW;CACX,kBAAkB;CAClB,UAAU;CACV,iBAAiB;CACjB,iBAAiB;AAClB;;AAEA;CACC,aAAa;CACb,kBAAkB;CAClB,sBAAsB;CACtB,QAAQ;CACR,gBAAgB;CAChB,YAAY;CACZ,WAAW;AACZ;;AAEA;CACC,aAAa;CACb,8BAA8B;CAC9B,mBAAmB;CACnB,mCAAmC;CACnC,kBAAkB;EACjB,yBAAyB;AAC3B;;AAEA,+BAA+B;;AAE/B;;;CAGC,2BAA2B;AAC5B;;AAEA;CACC,kDAAkD;AACnD;;AAEA;CACC,kBAAkB;CAClB,6BAA6B;CAC7B,uBAAuB;AACxB;;AAEA;;CAEC,iBAAiB;AAClB;;AAEA;;CAEC,gBAAgB;CAChB,wBAAwB;CACxB,kBAAkB;CAClB,kBAAkB;CAClB,UAAU;CACV,WAAW;CACX,kBAAkB;AACnB;;AAEA;CACC,wBAAwB;AACzB;;AAEA;CACC,WAAW;CACX,qBAAqB;AACtB;;AAEA;CACC,wBAAwB;AACzB;;AAEA;;CAEC,YAAY;AACb;;AAEA;;;CAGC,wBAAwB;AACzB;;AAEA;;CAEC,oBAAoB;AACrB;;AAEA,8CAA8C;;AAE9C;CACC,mCAAmC;CACnC,wBAAwB;CACxB,YAAY;CACZ,WAAW;CACX,kBAAkB;CAClB,aAAa;CACb,mBAAmB;AACpB;;AAEA;;CAEC,qCAAqC;AACtC","sourcesContent":["main {\n\theight: 100%;\n\twidth: var(--main-width);\n\tpadding: 32px;\n\t\n\tdisplay: flex;\n\tgap: 12px;\n\tflex-direction: column;\n\tjustify-content: space-between;\n}\n\n.user {\n\tbackground: var(--user-gradient);\n}\n\ninput {\n\tbackground: none;\n\toutline: none;\n\tcaret-color: white;\n\tcolor: white;\n\tborder: none;\n\tborder-radius: 8px;\n\tfont-family: \"Nunito\";\n\ttext-overflow: ellipsis;\n}\n\n.title-container {\n\tdisplay: flex;\n}\n\n#titleInput {\n\tfont-size: 2.5rem;\n\tcursor: default;\n\twidth: 100%;\n\tpadding: 0 2px;\n\tcolor: var(--page-color);\n}\n\n#delete {\n\twidth: 50px;\n\ttext-align: center;\n\tcolor: red;\n\tfont-weight: bold;\n\tfont-size: 1.5rem;\n}\n\n#todoList {\n\tdisplay: flex;\n\talign-items: start;\n\tflex-direction: column;\n\tgap: 2px;\n\toverflow-y: auto;\n\theight: 100%;\n\twidth: 100%;\n}\n\n.todo {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\tbackground-color: var(--side-color);\n\tpadding: 18px 20px;\n  transition: 75ms ease-out;\n}\n\n/* The abomination of styling */\n\n#titleInput:focus,\n#titleInput:hover,\n#delete:hover {\n\tbackground-color: #4141411c;\n}\n\n#titleInput:focus {\n\tborder-bottom: 2px solid var(--block-before-color);\n}\n\n.todo:has(.done) span {\n\tfont-style: italic;\n\ttext-decoration: line-through;\n\tfilter: brightness(50%);\n}\n\n.fa-circle,\n.fa-star {\n\tfont-size: 1.2rem;\n}\n\n.done.fa-circle::after,\n.fa-circle:not(.done):hover::after {\n\tcontent: \"\\f00c\";\n\tfont-family: FontAwesome;\n\tposition: relative;\n\tfont-size: 0.75rem;\n\tright: 50%;\n\tbottom: 2px;\n\tborder-radius: 50%;\n}\n\n.done.fa-circle::after {\n\tcolor: var(--side-color);\n}\n\n.done.fa-circle:focus::after {\n\tcontent: \"\";\n\tpadding-right: 10.5px;\n}\n\n:not(.done).fa-circle.fa-solid:hover::after {\n\tcolor: var(--side-color);\n}\n\n.fa-star:not(.fa-regular):focus,\n.fa-star:not(.fa-solid):focus {\n\tcolor: white;\n}\n\n.done.fa-circle,\n.fa-star:not(.fa-solid):hover,\n.fa-star:not(.fa-regular) {\n\tcolor: var(--page-color);\n}\n\n:not(.done).fa-circle:hover,\n.done.fa-circle {\n\tpadding-right: 1.5px;\n}\n\n/* ----------------------------------------- */\n\n#addTodo {\n\tbackground-color: var(--side-color);\n\tcolor: var(--page-color);\n\theight: 3rem;\n\twidth: 100%;\n\tpadding: 22px 20px;\n\tdisplay: flex;\n\talign-items: center;\n}\n\n#addTodo:hover,\n#addTodo:focus {\n\tbackground-color: var(--button-hover);\n}"],"sourceRoot":""}]);
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
  --page-color: #8976cc;
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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,qBAAqB;EACrB;;;;6DAI0D;EAC1D,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,uFAAuF;EACvF,sFAAsF;EACtF,qBAAqB;EACrB,uBAAuB;EACvB,sBAAsB;EACtB,oBAAoB;EACpB,kBAAkB;EAClB,uBAAuB;EACvB,qEAAqE;EACrE,uBAAuB;EACvB,6BAA6B;EAC7B,mBAAmB;EACnB,qBAAqB;AACvB;;AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,YAAY;EACZ,iBAAiB;EACjB,gBAAgB;EAChB,kBAAkB;EAClB,WAAW;EACX,kBAAkB;EAClB,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;EACE,qCAAqC;AACvC;;AAEA;EACE,WAAW;EACX,2CAA2C;EAC3C,UAAU;EACV,YAAY;EACZ,QAAQ;EACR,2BAA2B;EAC3B,mBAAmB;EACnB,SAAS;EACT,kBAAkB;AACpB;;AAEA;EACE,qCAAqC;AACvC;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,qBAAqB;EACrB,YAAY;AACd;;AAEA;EACE,6BAA6B;EAC7B,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB","sourcesContent":["@font-face {\n  font-family: 'Nunito';\n  src: url('./assets/fonts/Nunito-Medium.ttf') format('truetype'),\n   url('./assets/fonts/Nunito-MediumItalic.ttf') format('truetype'),\n   url('./assets/fonts/Nunito-Bold.ttf') format('truetype'),\n   url('./assets/fonts/Nunito-BoldItalic.ttf') format('truetype'),\n   url('./assets/fonts/Nunito-Light.ttf') format('truetype');\n  font-weight: normal;\n  font-style: normal;\n}\n\n:root {\n  --main-gradient: linear-gradient(45deg, rgba(34,193,195,1) 0%, rgba(255,203,92,1) 100%);\n  --user-gradient: linear-gradient(45deg, rgba(34,193,195,1) 0%, rgb(92, 255, 141) 100%);\n  --side-color: #202020;\n  --footer-color: #101010;\n  --content-height: 95vh;\n  --footer-height: 5vh;\n  --nav-width: 17rem;\n  --side-info-width: 12vw;\n  --main-width: calc(100vw - var(--nav-width) + var(--side-info-width));\n  --button-hover: #353535;\n  --block-before-color: #76b9ed;\n  --hr-color: #414141;\n  --page-color: #8976cc;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbutton {\n  background: none;\n  border: none;\n  color: white; \n  text-align: start;\n  font-size: .9rem;\n  padding: 12px 16px;\n  width: 100%;\n  border-radius: 8px;\n  position: relative;\n  font-family: 'Nunito';\n}\n\n.active {\n  background-color: var(--button-hover);\n}\n\nbutton.active::before {\n  content: '';\n  background-color: var(--block-before-color);\n  width: 3px;\n  height: 18px;\n  top: 50%;\n  transform: translateY(-50%);\n  border-radius: 50px;\n  left: 2px;\n  position: absolute;\n}\n\nbutton:hover {\n  background-color: var(--button-hover);\n}\n\nbody {\n  width: 100vw;\n  height: 100vh;\n  font-family: 'Nunito';\n  color: white; \n}\n\n#content {\n  height: var(--content-height);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}"],"sourceRoot":""}]);
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
{
	/* <footer>
  <span>Another day, Another project</span>
  <a href="https://github.com/peetzaecksdee">
    <img src="./assets/images/pizza.jpg" alt="my profile" />
  </a>
</footer> */
}



function loadFooter() {
	const footer = document.createElement("footer");

	const text = document.createElement("i");
	text.textContent = "Another day, Another project";
	text.classList.add("credit");

	const githubPage = document.createElement("a");
	githubPage.href = "https://github.com/peetzaecksdee";
	githubPage.classList.add("credit-a");
  githubPage.target = "_blank";

	const githubImage = new Image();
	githubImage.src = __webpack_require__.e(/*! import() */ "src_assets_images_pizza_jpg").then(__webpack_require__.t.bind(__webpack_require__, /*! ../assets/images/pizza.jpg */ "./src/assets/images/pizza.jpg", 17));
	githubImage.alt = "my profile";

	githubPage.appendChild(githubImage);

	footer.appendChild(text);
	footer.appendChild(githubPage);

	return footer;
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

		const newProjectbtn = document.querySelector(
			`[data-id="${newProject.id}"]`
		);
		(0,_Controllers_RenderController__WEBPACK_IMPORTED_MODULE_2__.renderUserProjectPage)(newProject);
		(0,_Controllers_RenderController__WEBPACK_IMPORTED_MODULE_2__.setActive)(newProjectbtn);

		const titleInput = document.querySelector('#titleInput');
		titleInput.focus();
		titleInput.select();
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
/* harmony import */ var _Controllers_RenderController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Controllers/RenderController */ "./src/Controllers/RenderController.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");







function TodoButton(todo) {
	const Todo = document.createElement("button");
	let starred = todo.isStarred();
	let done = todo.isDone();
	Todo.classList.add("todo");
	Todo.dataset.Tid = todo.id;
	Todo.dataset.done = done;
	Todo.dataset.starred = starred;

	const starAnimation =
		([{ fontSize: ".75rem" }, { fontSize: "1.25rem" }],
		{
			duration: 125,
			iterations: 1,
		});

	function toggleStarred() {
		if (starred) {
			star.classList.remove("fa-solid");
			star.classList.add("fa-regular");
			starred = false;
		} else {
			star.animate(starAnimation);
			star.classList.remove("fa-regular");
			star.classList.add("fa-solid");
			starred = true;
		}
		Todo.dataset.starred = starred;
		todo.setStarred(starred);
		(0,_Controllers_ProjectController__WEBPACK_IMPORTED_MODULE_1__.editTodo)(todo);
	}

	const div = document.createElement("div");

	const circle = document.createElement("i");
	if (done) {
		circle.classList.add("done");
	}
	circle.classList.add(done ? "fa-solid" : "fa-regular", "fa-circle");
	circle.addEventListener("mousedown", () => {
		if (done) {
			circle.classList.remove("fa-solid");
			circle.classList.add("fa-regular");
			return;
		}

		circle.classList.remove("fa-regular");
		circle.classList.add("fa-solid");
	});
	circle.addEventListener("mouseout", () => {
		if (done) {
			circle.classList.add("fa-solid");
			circle.classList.remove("fa-regular");
			return;
		}

		circle.classList.add("fa-regular");
		circle.classList.remove("fa-solid");
	});
	circle.addEventListener("click", () => {
		done = !done;
		if (done) {
			circle.classList.add("done");
		} else {
			circle.classList.remove("done");
		}
		Todo.dataset.done = done;
		todo.setDone(done);
		(0,_Controllers_ProjectController__WEBPACK_IMPORTED_MODULE_1__.editTodo)(todo);
	});

	const textSpan = document.createElement("span");
	textSpan.textContent = todo.getTitle();

	const star = document.createElement("i");
	star.classList.add(starred ? "fa-solid" : "fa-regular", "fa-star");
	star.addEventListener("click", () => toggleStarred());

	function isBtnElem(elem) {
		return (elem.target === textSpan || elem.target === Todo) ? true : false;
	}

	Todo.addEventListener("mousedown", (elem) => (0,_utils__WEBPACK_IMPORTED_MODULE_4__.ButtonAnimation)(Todo, 0.99, isBtnElem(elem)));
	Todo.addEventListener("mouseout", () => (0,_utils__WEBPACK_IMPORTED_MODULE_4__.ButtonAnimation)(Todo, 1));
	Todo.addEventListener("click", () => (0,_utils__WEBPACK_IMPORTED_MODULE_4__.ButtonAnimation)(Todo, 1));

	div.appendChild(circle);
	div.appendChild(textSpan);

	Todo.appendChild(div);
	Todo.appendChild(star);

	return Todo;
}

function createUserPage(project) {
	const projectText = document
		.querySelector(`[data-id="${project.id}"]`)
		.querySelector("span");

	const main = document.querySelector("main");

	const titleContainer = document.createElement("div");
	titleContainer.classList.add("title-container");

	const title = document.createElement("input");
	title.type = "text";
	title.value = project.getTitle();
	title.id = "titleInput";
	title.addEventListener("keypress", (event) => {
		if (event.key === "Enter") {
			title.blur();
			project.changeTitle(title.value);
			projectText.textContent = (0,_Validator__WEBPACK_IMPORTED_MODULE_2__.textLengthValidator)(title.value);
			(0,_Controllers_ProjectController__WEBPACK_IMPORTED_MODULE_1__.editProject)(project);
		}
	});
	title.addEventListener("blur", () => {
		project.changeTitle(title.value);
		projectText.textContent = (0,_Validator__WEBPACK_IMPORTED_MODULE_2__.textLengthValidator)(title.value);
		(0,_Controllers_ProjectController__WEBPACK_IMPORTED_MODULE_1__.editProject)(project);
	});
	const removeButton = document.createElement("button");
	removeButton.id = "delete";
	removeButton.textContent = "X";

	let count = 0;
	removeButton.addEventListener("click", () => {
		count++;
		setTimeout(() => {
			count--;
		}, 750);
		if (count === 2) {
			(0,_Controllers_ProjectController__WEBPACK_IMPORTED_MODULE_1__.removeProject)(project.id);
			(0,_Controllers_RenderController__WEBPACK_IMPORTED_MODULE_3__.renderProjects)();
			(0,_Controllers_RenderController__WEBPACK_IMPORTED_MODULE_3__.renderMainProjectPage)();
			(0,_Controllers_RenderController__WEBPACK_IMPORTED_MODULE_3__.setActive)(document.querySelector(".project"));
		}
	});

	const todoList = document.createElement("div");
	todoList.id = "todoList";
	project.getTodos().forEach((todo) => {
		const TodoBtn = TodoButton(todo);
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
			if (!addTodoBtn.value) {
				return;
			}
			todoList.appendChild(
				TodoButton((0,_Controllers_ProjectController__WEBPACK_IMPORTED_MODULE_1__.createTodo)(project.id, [addTodoBtn.value, Date.now()]))
			);
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
				todo.pid,
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
	let projectTodos = project.getTodos();
	let projectLength = projectTodos.length;

	let newTodo = (0,_Objects_Todo_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
		projectLength > 0 ? projectTodos[projectLength - 1].id + 1 : 1,
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

function editTodo(newTodo) {
	let LoadedProjects = loadProjects();

	let project = LoadedProjects.find((proj) => proj.id === newTodo.pid);

	let todos = project.getTodos();
	let idx = todos.findIndex((todo) => todo.id === newTodo.id);
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
	const pid = projectId;
	const getTitle = () => title;
	const getDate = () => date;
	const getDueDate = () => dueDate;
	const getNotes = () => notes;
	const isStarred = () => starred;
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
		id, pid, title, date, dueDate, notes, starred, done,
	});

	return Object.assign(
		{},
		{
			id,
			pid,
			getTitle,
			getDate,
			getDueDate,
			getNotes,
			isStarred,
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
/* harmony export */   ButtonAnimation: () => (/* binding */ ButtonAnimation),
/* harmony export */   ProjectButton: () => (/* binding */ ProjectButton)
/* harmony export */ });
function ProjectButton(opac, icon, text, id) {
	const Project = document.createElement("button");
	Project.classList.add("project");
	Project.dataset.id = id;

	Project.addEventListener("mousedown", () => ButtonAnimation(Project, 0.98));
	Project.addEventListener("click", () => ButtonAnimation(Project, 1));
	Project.addEventListener("mouseout", () => ButtonAnimation(Project, 1));

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

function ButtonAnimation(btn, scale, condition) {
	console.log(condition);
	if (condition === false) {
		return;
	}

	if (scale === 1) {
		btn.style = "";
	} else {
		btn.style = `transform: scale(${scale})`;
	}
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
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
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
/******/ 			return "" + chunkId + ".main.js";
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
/******/ 		var dataWebpackPrefix = "top-todo-list:";
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
/******/ 		
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
/******/ 			}
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
/******/ 						}
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
/******/ 		var chunkLoadingGlobal = self["webpackChunktop_todo_list"] = self["webpackChunktop_todo_list"] || [];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1dDckZBOzs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ29DOztBQUV6RCxzRUFBSSxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy9Db21wb25lbnRzL0Zvb3Rlci5jc3MiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy9Db21wb25lbnRzL1NpZGViYXIuY3NzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvQ29tcG9uZW50cy9wYWdlcy9EZWZhdWx0LmNzcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL0NvbXBvbmVudHMvcGFnZXMvVXNlcnMuY3NzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL0NvbXBvbmVudHMvRm9vdGVyLmNzcz8xNTI5Iiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvQ29tcG9uZW50cy9TaWRlYmFyLmNzcz9jY2I0Iiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvQ29tcG9uZW50cy9wYWdlcy9EZWZhdWx0LmNzcz9iMDFhIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvQ29tcG9uZW50cy9wYWdlcy9Vc2Vycy5jc3M/NDI2OCIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy9Db21wb25lbnRzL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL0NvbXBvbmVudHMvU2lkZWJhci5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL0NvbXBvbmVudHMvcGFnZXMvRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL0NvbXBvbmVudHMvcGFnZXMvVXNlcnMuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy9Db250cm9sbGVycy9Qcm9qZWN0Q29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL0NvbnRyb2xsZXJzL1JlbmRlckNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy9Db250cm9sbGVycy9TdG9yYWdlQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL09iamVjdHMvUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL09iamVjdHMvVG9kby5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL1ZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jcmVhdGUgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvcC10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2Vuc3VyZSBjaHVuayIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nZXQgamF2YXNjcmlwdCBjaHVuayBmaWxlbmFtZSIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvcC10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2xvYWQgc2NyaXB0Iiwid2VicGFjazovL3RvcC10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvcC10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgZm9vdGVyIHtcbiAgaGVpZ2h0OiB2YXIoLS1mb290ZXItaGVpZ2h0KTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiAwO1xuICBwYWRkaW5nOiAxMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb290ZXItY29sb3IpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG59XG5cbi5jcmVkaXQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogLjk1cmVtO1xufVxuXG4uY3JlZGl0LWEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNyZWRpdC1hID4gaW1nIHtcbiAgd2lkdGg6IDEuNXJlbTtcbiAgaGVpZ2h0OiAxLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9Db21wb25lbnRzL0Zvb3Rlci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSw0QkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxRQUFRO0VBQ1IsT0FBTztFQUNQLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsUUFBUTtBQUNWOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiZm9vdGVyIHtcXG4gIGhlaWdodDogdmFyKC0tZm9vdGVyLWhlaWdodCk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDA7XFxuICByaWdodDogMDtcXG4gIGxlZnQ6IDA7XFxuICBwYWRkaW5nOiAxMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9vdGVyLWNvbG9yKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDhweDtcXG59XFxuXFxuLmNyZWRpdCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IC45NXJlbTtcXG59XFxuXFxuLmNyZWRpdC1hIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jcmVkaXQtYSA+IGltZyB7XFxuICB3aWR0aDogMS41cmVtO1xcbiAgaGVpZ2h0OiAxLjVyZW07XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgbmF2IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogdmFyKC0tbmF2LXdpZHRoKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZS1jb2xvcik7XG4gIHBhZGRpbmc6IDRweDtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbmhyIHtcbiAgY29sb3I6IHZhcigtLWhyLWNvbG9yKTtcbiAgbWFyZ2luOiA0cHggMDtcbn1cblxuI2FkZFByb2plY3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDE4cHg7XG4gIHBhZGRpbmc6IDZweCAxMHB4O1xufVxuXG4jYWRkUHJvamVjdDo6YmVmb3JlIHtcbiAgY29udGVudDogXCIrXCI7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4vKiBEZWZhdWx0IFByb2plY3RzICovXG5cbiNkZWZhdWx0UHJvamVjdHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA0cHg7XG59XG5cbi8qIFByb2plY3RzICovXG5cbi5wcm9qZWN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB0cmFuc2l0aW9uOiA3NW1zIGVhc2Utb3V0O1xufVxuXG4vKiBJY29uIFN0eWxpbmcgKi9cblxuLmZhLXJlZ3VsYXIsIC5mYS1zb2xpZCB7XG4gIHBhZGRpbmctcmlnaHQ6IDEycHg7XG59XG5cbi5mYS1zdW4ge1xuICBjb2xvcjogb3JhbmdlO1xufVxuXG4ucHJvamVjdCAuZmEtc3RhciB7XG4gIGNvbG9yOiB5ZWxsb3c7XG59XG5cbi5mYS1saXN0LWNoZWNrIHtcbiAgY29sb3I6IGN5YW47XG59XG5cbi5mYS1ob3VzZSB7XG4gIGNvbG9yOiBhbGljZWJsdWU7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvQ29tcG9uZW50cy9TaWRlYmFyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsbUNBQW1DO0VBQ25DLFlBQVk7O0VBRVosYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQSxxQkFBcUI7O0FBRXJCO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLFFBQVE7QUFDVjs7QUFFQSxhQUFhOztBQUViO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5Qix5QkFBeUI7QUFDM0I7O0FBRUEsaUJBQWlCOztBQUVqQjtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJuYXYge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IHZhcigtLW5hdi13aWR0aCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlLWNvbG9yKTtcXG4gIHBhZGRpbmc6IDRweDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5ociB7XFxuICBjb2xvcjogdmFyKC0taHItY29sb3IpO1xcbiAgbWFyZ2luOiA0cHggMDtcXG59XFxuXFxuI2FkZFByb2plY3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDE4cHg7XFxuICBwYWRkaW5nOiA2cHggMTBweDtcXG59XFxuXFxuI2FkZFByb2plY3Q6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiK1xcXCI7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLyogRGVmYXVsdCBQcm9qZWN0cyAqL1xcblxcbiNkZWZhdWx0UHJvamVjdHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDRweDtcXG59XFxuXFxuLyogUHJvamVjdHMgKi9cXG5cXG4ucHJvamVjdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgdHJhbnNpdGlvbjogNzVtcyBlYXNlLW91dDtcXG59XFxuXFxuLyogSWNvbiBTdHlsaW5nICovXFxuXFxuLmZhLXJlZ3VsYXIsIC5mYS1zb2xpZCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xcbn1cXG5cXG4uZmEtc3VuIHtcXG4gIGNvbG9yOiBvcmFuZ2U7XFxufVxcblxcbi5wcm9qZWN0IC5mYS1zdGFyIHtcXG4gIGNvbG9yOiB5ZWxsb3c7XFxufVxcblxcbi5mYS1saXN0LWNoZWNrIHtcXG4gIGNvbG9yOiBjeWFuO1xcbn1cXG5cXG4uZmEtaG91c2Uge1xcbiAgY29sb3I6IGFsaWNlYmx1ZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBtYWluIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogdmFyKC0tbWFpbi13aWR0aCk7XG59XG5cbi5tYWluIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tbWFpbi1ncmFkaWVudCk7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvQ29tcG9uZW50cy9wYWdlcy9EZWZhdWx0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFlBQVk7RUFDWix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbENcIixcInNvdXJjZXNDb250ZW50XCI6W1wibWFpbiB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogdmFyKC0tbWFpbi13aWR0aCk7XFxufVxcblxcbi5tYWluIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLW1haW4tZ3JhZGllbnQpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYG1haW4ge1xuXHRoZWlnaHQ6IDEwMCU7XG5cdHdpZHRoOiB2YXIoLS1tYWluLXdpZHRoKTtcblx0cGFkZGluZzogMzJweDtcblx0XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGdhcDogMTJweDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4udXNlciB7XG5cdGJhY2tncm91bmQ6IHZhcigtLXVzZXItZ3JhZGllbnQpO1xufVxuXG5pbnB1dCB7XG5cdGJhY2tncm91bmQ6IG5vbmU7XG5cdG91dGxpbmU6IG5vbmU7XG5cdGNhcmV0LWNvbG9yOiB3aGl0ZTtcblx0Y29sb3I6IHdoaXRlO1xuXHRib3JkZXI6IG5vbmU7XG5cdGJvcmRlci1yYWRpdXM6IDhweDtcblx0Zm9udC1mYW1pbHk6IFwiTnVuaXRvXCI7XG5cdHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4udGl0bGUtY29udGFpbmVyIHtcblx0ZGlzcGxheTogZmxleDtcbn1cblxuI3RpdGxlSW5wdXQge1xuXHRmb250LXNpemU6IDIuNXJlbTtcblx0Y3Vyc29yOiBkZWZhdWx0O1xuXHR3aWR0aDogMTAwJTtcblx0cGFkZGluZzogMCAycHg7XG5cdGNvbG9yOiB2YXIoLS1wYWdlLWNvbG9yKTtcbn1cblxuI2RlbGV0ZSB7XG5cdHdpZHRoOiA1MHB4O1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGNvbG9yOiByZWQ7XG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRmb250LXNpemU6IDEuNXJlbTtcbn1cblxuI3RvZG9MaXN0IHtcblx0ZGlzcGxheTogZmxleDtcblx0YWxpZ24taXRlbXM6IHN0YXJ0O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRnYXA6IDJweDtcblx0b3ZlcmZsb3cteTogYXV0bztcblx0aGVpZ2h0OiAxMDAlO1xuXHR3aWR0aDogMTAwJTtcbn1cblxuLnRvZG8ge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGUtY29sb3IpO1xuXHRwYWRkaW5nOiAxOHB4IDIwcHg7XG4gIHRyYW5zaXRpb246IDc1bXMgZWFzZS1vdXQ7XG59XG5cbi8qIFRoZSBhYm9taW5hdGlvbiBvZiBzdHlsaW5nICovXG5cbiN0aXRsZUlucHV0OmZvY3VzLFxuI3RpdGxlSW5wdXQ6aG92ZXIsXG4jZGVsZXRlOmhvdmVyIHtcblx0YmFja2dyb3VuZC1jb2xvcjogIzQxNDE0MTFjO1xufVxuXG4jdGl0bGVJbnB1dDpmb2N1cyB7XG5cdGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1ibG9jay1iZWZvcmUtY29sb3IpO1xufVxuXG4udG9kbzpoYXMoLmRvbmUpIHNwYW4ge1xuXHRmb250LXN0eWxlOiBpdGFsaWM7XG5cdHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuXHRmaWx0ZXI6IGJyaWdodG5lc3MoNTAlKTtcbn1cblxuLmZhLWNpcmNsZSxcbi5mYS1zdGFyIHtcblx0Zm9udC1zaXplOiAxLjJyZW07XG59XG5cbi5kb25lLmZhLWNpcmNsZTo6YWZ0ZXIsXG4uZmEtY2lyY2xlOm5vdCguZG9uZSk6aG92ZXI6OmFmdGVyIHtcblx0Y29udGVudDogXCJcXFxcZjAwY1wiO1xuXHRmb250LWZhbWlseTogRm9udEF3ZXNvbWU7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0Zm9udC1zaXplOiAwLjc1cmVtO1xuXHRyaWdodDogNTAlO1xuXHRib3R0b206IDJweDtcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uZG9uZS5mYS1jaXJjbGU6OmFmdGVyIHtcblx0Y29sb3I6IHZhcigtLXNpZGUtY29sb3IpO1xufVxuXG4uZG9uZS5mYS1jaXJjbGU6Zm9jdXM6OmFmdGVyIHtcblx0Y29udGVudDogXCJcIjtcblx0cGFkZGluZy1yaWdodDogMTAuNXB4O1xufVxuXG46bm90KC5kb25lKS5mYS1jaXJjbGUuZmEtc29saWQ6aG92ZXI6OmFmdGVyIHtcblx0Y29sb3I6IHZhcigtLXNpZGUtY29sb3IpO1xufVxuXG4uZmEtc3Rhcjpub3QoLmZhLXJlZ3VsYXIpOmZvY3VzLFxuLmZhLXN0YXI6bm90KC5mYS1zb2xpZCk6Zm9jdXMge1xuXHRjb2xvcjogd2hpdGU7XG59XG5cbi5kb25lLmZhLWNpcmNsZSxcbi5mYS1zdGFyOm5vdCguZmEtc29saWQpOmhvdmVyLFxuLmZhLXN0YXI6bm90KC5mYS1yZWd1bGFyKSB7XG5cdGNvbG9yOiB2YXIoLS1wYWdlLWNvbG9yKTtcbn1cblxuOm5vdCguZG9uZSkuZmEtY2lyY2xlOmhvdmVyLFxuLmRvbmUuZmEtY2lyY2xlIHtcblx0cGFkZGluZy1yaWdodDogMS41cHg7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiNhZGRUb2RvIHtcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZS1jb2xvcik7XG5cdGNvbG9yOiB2YXIoLS1wYWdlLWNvbG9yKTtcblx0aGVpZ2h0OiAzcmVtO1xuXHR3aWR0aDogMTAwJTtcblx0cGFkZGluZzogMjJweCAyMHB4O1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4jYWRkVG9kbzpob3ZlcixcbiNhZGRUb2RvOmZvY3VzIHtcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWhvdmVyKTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9Db21wb25lbnRzL3BhZ2VzL1VzZXJzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtDQUNDLFlBQVk7Q0FDWix3QkFBd0I7Q0FDeEIsYUFBYTs7Q0FFYixhQUFhO0NBQ2IsU0FBUztDQUNULHNCQUFzQjtDQUN0Qiw4QkFBOEI7QUFDL0I7O0FBRUE7Q0FDQyxnQ0FBZ0M7QUFDakM7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsYUFBYTtDQUNiLGtCQUFrQjtDQUNsQixZQUFZO0NBQ1osWUFBWTtDQUNaLGtCQUFrQjtDQUNsQixxQkFBcUI7Q0FDckIsdUJBQXVCO0FBQ3hCOztBQUVBO0NBQ0MsYUFBYTtBQUNkOztBQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCLGVBQWU7Q0FDZixXQUFXO0NBQ1gsY0FBYztDQUNkLHdCQUF3QjtBQUN6Qjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxrQkFBa0I7Q0FDbEIsVUFBVTtDQUNWLGlCQUFpQjtDQUNqQixpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2Isa0JBQWtCO0NBQ2xCLHNCQUFzQjtDQUN0QixRQUFRO0NBQ1IsZ0JBQWdCO0NBQ2hCLFlBQVk7Q0FDWixXQUFXO0FBQ1o7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsOEJBQThCO0NBQzlCLG1CQUFtQjtDQUNuQixtQ0FBbUM7Q0FDbkMsa0JBQWtCO0VBQ2pCLHlCQUF5QjtBQUMzQjs7QUFFQSwrQkFBK0I7O0FBRS9COzs7Q0FHQywyQkFBMkI7QUFDNUI7O0FBRUE7Q0FDQyxrREFBa0Q7QUFDbkQ7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsNkJBQTZCO0NBQzdCLHVCQUF1QjtBQUN4Qjs7QUFFQTs7Q0FFQyxpQkFBaUI7QUFDbEI7O0FBRUE7O0NBRUMsZ0JBQWdCO0NBQ2hCLHdCQUF3QjtDQUN4QixrQkFBa0I7Q0FDbEIsa0JBQWtCO0NBQ2xCLFVBQVU7Q0FDVixXQUFXO0NBQ1gsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0Msd0JBQXdCO0FBQ3pCOztBQUVBO0NBQ0MsV0FBVztDQUNYLHFCQUFxQjtBQUN0Qjs7QUFFQTtDQUNDLHdCQUF3QjtBQUN6Qjs7QUFFQTs7Q0FFQyxZQUFZO0FBQ2I7O0FBRUE7OztDQUdDLHdCQUF3QjtBQUN6Qjs7QUFFQTs7Q0FFQyxvQkFBb0I7QUFDckI7O0FBRUEsOENBQThDOztBQUU5QztDQUNDLG1DQUFtQztDQUNuQyx3QkFBd0I7Q0FDeEIsWUFBWTtDQUNaLFdBQVc7Q0FDWCxrQkFBa0I7Q0FDbEIsYUFBYTtDQUNiLG1CQUFtQjtBQUNwQjs7QUFFQTs7Q0FFQyxxQ0FBcUM7QUFDdENcIixcInNvdXJjZXNDb250ZW50XCI6W1wibWFpbiB7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdHdpZHRoOiB2YXIoLS1tYWluLXdpZHRoKTtcXG5cXHRwYWRkaW5nOiAzMnB4O1xcblxcdFxcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0Z2FwOiAxMnB4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4udXNlciB7XFxuXFx0YmFja2dyb3VuZDogdmFyKC0tdXNlci1ncmFkaWVudCk7XFxufVxcblxcbmlucHV0IHtcXG5cXHRiYWNrZ3JvdW5kOiBub25lO1xcblxcdG91dGxpbmU6IG5vbmU7XFxuXFx0Y2FyZXQtY29sb3I6IHdoaXRlO1xcblxcdGNvbG9yOiB3aGl0ZTtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0Ym9yZGVyLXJhZGl1czogOHB4O1xcblxcdGZvbnQtZmFtaWx5OiBcXFwiTnVuaXRvXFxcIjtcXG5cXHR0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG59XFxuXFxuLnRpdGxlLWNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG59XFxuXFxuI3RpdGxlSW5wdXQge1xcblxcdGZvbnQtc2l6ZTogMi41cmVtO1xcblxcdGN1cnNvcjogZGVmYXVsdDtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRwYWRkaW5nOiAwIDJweDtcXG5cXHRjb2xvcjogdmFyKC0tcGFnZS1jb2xvcik7XFxufVxcblxcbiNkZWxldGUge1xcblxcdHdpZHRoOiA1MHB4O1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRjb2xvcjogcmVkO1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcdGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4jdG9kb0xpc3Qge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IHN0YXJ0O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Z2FwOiAycHg7XFxuXFx0b3ZlcmZsb3cteTogYXV0bztcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0d2lkdGg6IDEwMCU7XFxufVxcblxcbi50b2RvIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGUtY29sb3IpO1xcblxcdHBhZGRpbmc6IDE4cHggMjBweDtcXG4gIHRyYW5zaXRpb246IDc1bXMgZWFzZS1vdXQ7XFxufVxcblxcbi8qIFRoZSBhYm9taW5hdGlvbiBvZiBzdHlsaW5nICovXFxuXFxuI3RpdGxlSW5wdXQ6Zm9jdXMsXFxuI3RpdGxlSW5wdXQ6aG92ZXIsXFxuI2RlbGV0ZTpob3ZlciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzQxNDE0MTFjO1xcbn1cXG5cXG4jdGl0bGVJbnB1dDpmb2N1cyB7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWJsb2NrLWJlZm9yZS1jb2xvcik7XFxufVxcblxcbi50b2RvOmhhcyguZG9uZSkgc3BhbiB7XFxuXFx0Zm9udC1zdHlsZTogaXRhbGljO1xcblxcdHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcblxcdGZpbHRlcjogYnJpZ2h0bmVzcyg1MCUpO1xcbn1cXG5cXG4uZmEtY2lyY2xlLFxcbi5mYS1zdGFyIHtcXG5cXHRmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLmRvbmUuZmEtY2lyY2xlOjphZnRlcixcXG4uZmEtY2lyY2xlOm5vdCguZG9uZSk6aG92ZXI6OmFmdGVyIHtcXG5cXHRjb250ZW50OiBcXFwiXFxcXGYwMGNcXFwiO1xcblxcdGZvbnQtZmFtaWx5OiBGb250QXdlc29tZTtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0Zm9udC1zaXplOiAwLjc1cmVtO1xcblxcdHJpZ2h0OiA1MCU7XFxuXFx0Ym90dG9tOiAycHg7XFxuXFx0Ym9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4uZG9uZS5mYS1jaXJjbGU6OmFmdGVyIHtcXG5cXHRjb2xvcjogdmFyKC0tc2lkZS1jb2xvcik7XFxufVxcblxcbi5kb25lLmZhLWNpcmNsZTpmb2N1czo6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6IFxcXCJcXFwiO1xcblxcdHBhZGRpbmctcmlnaHQ6IDEwLjVweDtcXG59XFxuXFxuOm5vdCguZG9uZSkuZmEtY2lyY2xlLmZhLXNvbGlkOmhvdmVyOjphZnRlciB7XFxuXFx0Y29sb3I6IHZhcigtLXNpZGUtY29sb3IpO1xcbn1cXG5cXG4uZmEtc3Rhcjpub3QoLmZhLXJlZ3VsYXIpOmZvY3VzLFxcbi5mYS1zdGFyOm5vdCguZmEtc29saWQpOmZvY3VzIHtcXG5cXHRjb2xvcjogd2hpdGU7XFxufVxcblxcbi5kb25lLmZhLWNpcmNsZSxcXG4uZmEtc3Rhcjpub3QoLmZhLXNvbGlkKTpob3ZlcixcXG4uZmEtc3Rhcjpub3QoLmZhLXJlZ3VsYXIpIHtcXG5cXHRjb2xvcjogdmFyKC0tcGFnZS1jb2xvcik7XFxufVxcblxcbjpub3QoLmRvbmUpLmZhLWNpcmNsZTpob3ZlcixcXG4uZG9uZS5mYS1jaXJjbGUge1xcblxcdHBhZGRpbmctcmlnaHQ6IDEuNXB4O1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbiNhZGRUb2RvIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlLWNvbG9yKTtcXG5cXHRjb2xvcjogdmFyKC0tcGFnZS1jb2xvcik7XFxuXFx0aGVpZ2h0OiAzcmVtO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdHBhZGRpbmc6IDIycHggMjBweDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNhZGRUb2RvOmhvdmVyLFxcbiNhZGRUb2RvOmZvY3VzIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24taG92ZXIpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ZvbnRzL051bml0by1NZWRpdW0udHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvZm9udHMvTnVuaXRvLU1lZGl1bUl0YWxpYy50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9mb250cy9OdW5pdG8tQm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9mb250cy9OdW5pdG8tQm9sZEl0YWxpYy50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9mb250cy9OdW5pdG8tTGlnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnTnVuaXRvJztcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KCd0cnVldHlwZScpLFxuICAgdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pIGZvcm1hdCgndHJ1ZXR5cGUnKSxcbiAgIHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KSBmb3JtYXQoJ3RydWV0eXBlJyksXG4gICB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19ffSkgZm9ybWF0KCd0cnVldHlwZScpLFxuICAgdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fX30pIGZvcm1hdCgndHJ1ZXR5cGUnKTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG46cm9vdCB7XG4gIC0tbWFpbi1ncmFkaWVudDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2JhKDM0LDE5MywxOTUsMSkgMCUsIHJnYmEoMjU1LDIwMyw5MiwxKSAxMDAlKTtcbiAgLS11c2VyLWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYmEoMzQsMTkzLDE5NSwxKSAwJSwgcmdiKDkyLCAyNTUsIDE0MSkgMTAwJSk7XG4gIC0tc2lkZS1jb2xvcjogIzIwMjAyMDtcbiAgLS1mb290ZXItY29sb3I6ICMxMDEwMTA7XG4gIC0tY29udGVudC1oZWlnaHQ6IDk1dmg7XG4gIC0tZm9vdGVyLWhlaWdodDogNXZoO1xuICAtLW5hdi13aWR0aDogMTdyZW07XG4gIC0tc2lkZS1pbmZvLXdpZHRoOiAxMnZ3O1xuICAtLW1haW4td2lkdGg6IGNhbGMoMTAwdncgLSB2YXIoLS1uYXYtd2lkdGgpICsgdmFyKC0tc2lkZS1pbmZvLXdpZHRoKSk7XG4gIC0tYnV0dG9uLWhvdmVyOiAjMzUzNTM1O1xuICAtLWJsb2NrLWJlZm9yZS1jb2xvcjogIzc2YjllZDtcbiAgLS1oci1jb2xvcjogIzQxNDE0MTtcbiAgLS1wYWdlLWNvbG9yOiAjODk3NmNjO1xufVxuXG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5idXR0b24ge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTsgXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICBmb250LXNpemU6IC45cmVtO1xuICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1mYW1pbHk6ICdOdW5pdG8nO1xufVxuXG4uYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWhvdmVyKTtcbn1cblxuYnV0dG9uLmFjdGl2ZTo6YmVmb3JlIHtcbiAgY29udGVudDogJyc7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsb2NrLWJlZm9yZS1jb2xvcik7XG4gIHdpZHRoOiAzcHg7XG4gIGhlaWdodDogMThweDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgbGVmdDogMnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1ob3Zlcik7XG59XG5cbmJvZHkge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIGZvbnQtZmFtaWx5OiAnTnVuaXRvJztcbiAgY29sb3I6IHdoaXRlOyBcbn1cblxuI2NvbnRlbnQge1xuICBoZWlnaHQ6IHZhcigtLWNvbnRlbnQtaGVpZ2h0KTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCOzs7OzZEQUkwRDtFQUMxRCxtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsdUZBQXVGO0VBQ3ZGLHNGQUFzRjtFQUN0RixxQkFBcUI7RUFDckIsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixxRUFBcUU7RUFDckUsdUJBQXVCO0VBQ3ZCLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsMkNBQTJDO0VBQzNDLFVBQVU7RUFDVixZQUFZO0VBQ1osUUFBUTtFQUNSLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsU0FBUztFQUNULGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnTnVuaXRvJztcXG4gIHNyYzogdXJsKCcuL2Fzc2V0cy9mb250cy9OdW5pdG8tTWVkaXVtLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKSxcXG4gICB1cmwoJy4vYXNzZXRzL2ZvbnRzL051bml0by1NZWRpdW1JdGFsaWMudHRmJykgZm9ybWF0KCd0cnVldHlwZScpLFxcbiAgIHVybCgnLi9hc3NldHMvZm9udHMvTnVuaXRvLUJvbGQudHRmJykgZm9ybWF0KCd0cnVldHlwZScpLFxcbiAgIHVybCgnLi9hc3NldHMvZm9udHMvTnVuaXRvLUJvbGRJdGFsaWMudHRmJykgZm9ybWF0KCd0cnVldHlwZScpLFxcbiAgIHVybCgnLi9hc3NldHMvZm9udHMvTnVuaXRvLUxpZ2h0LnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbjpyb290IHtcXG4gIC0tbWFpbi1ncmFkaWVudDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2JhKDM0LDE5MywxOTUsMSkgMCUsIHJnYmEoMjU1LDIwMyw5MiwxKSAxMDAlKTtcXG4gIC0tdXNlci1ncmFkaWVudDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2JhKDM0LDE5MywxOTUsMSkgMCUsIHJnYig5MiwgMjU1LCAxNDEpIDEwMCUpO1xcbiAgLS1zaWRlLWNvbG9yOiAjMjAyMDIwO1xcbiAgLS1mb290ZXItY29sb3I6ICMxMDEwMTA7XFxuICAtLWNvbnRlbnQtaGVpZ2h0OiA5NXZoO1xcbiAgLS1mb290ZXItaGVpZ2h0OiA1dmg7XFxuICAtLW5hdi13aWR0aDogMTdyZW07XFxuICAtLXNpZGUtaW5mby13aWR0aDogMTJ2dztcXG4gIC0tbWFpbi13aWR0aDogY2FsYygxMDB2dyAtIHZhcigtLW5hdi13aWR0aCkgKyB2YXIoLS1zaWRlLWluZm8td2lkdGgpKTtcXG4gIC0tYnV0dG9uLWhvdmVyOiAjMzUzNTM1O1xcbiAgLS1ibG9jay1iZWZvcmUtY29sb3I6ICM3NmI5ZWQ7XFxuICAtLWhyLWNvbG9yOiAjNDE0MTQxO1xcbiAgLS1wYWdlLWNvbG9yOiAjODk3NmNjO1xcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiB3aGl0ZTsgXFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXG4gIGZvbnQtc2l6ZTogLjlyZW07XFxuICBwYWRkaW5nOiAxMnB4IDE2cHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGZvbnQtZmFtaWx5OiAnTnVuaXRvJztcXG59XFxuXFxuLmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24taG92ZXIpO1xcbn1cXG5cXG5idXR0b24uYWN0aXZlOjpiZWZvcmUge1xcbiAgY29udGVudDogJyc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibG9jay1iZWZvcmUtY29sb3IpO1xcbiAgd2lkdGg6IDNweDtcXG4gIGhlaWdodDogMThweDtcXG4gIHRvcDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gIGxlZnQ6IDJweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1ob3Zlcik7XFxufVxcblxcbmJvZHkge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGZvbnQtZmFtaWx5OiAnTnVuaXRvJztcXG4gIGNvbG9yOiB3aGl0ZTsgXFxufVxcblxcbiNjb250ZW50IHtcXG4gIGhlaWdodDogdmFyKC0tY29udGVudC1oZWlnaHQpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0Zvb3Rlci5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0Zvb3Rlci5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vU2lkZWJhci5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1NpZGViYXIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0RlZmF1bHQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9EZWZhdWx0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9Vc2Vycy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1VzZXJzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07Iiwie1xuXHQvKiA8Zm9vdGVyPlxuICA8c3Bhbj5Bbm90aGVyIGRheSwgQW5vdGhlciBwcm9qZWN0PC9zcGFuPlxuICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3BlZXR6YWVja3NkZWVcIj5cbiAgICA8aW1nIHNyYz1cIi4vYXNzZXRzL2ltYWdlcy9waXp6YS5qcGdcIiBhbHQ9XCJteSBwcm9maWxlXCIgLz5cbiAgPC9hPlxuPC9mb290ZXI+ICovXG59XG5cbmltcG9ydCBcIi4vRm9vdGVyLmNzc1wiO1xuXG5mdW5jdGlvbiBsb2FkRm9vdGVyKCkge1xuXHRjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xuXG5cdGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcblx0dGV4dC50ZXh0Q29udGVudCA9IFwiQW5vdGhlciBkYXksIEFub3RoZXIgcHJvamVjdFwiO1xuXHR0ZXh0LmNsYXNzTGlzdC5hZGQoXCJjcmVkaXRcIik7XG5cblx0Y29uc3QgZ2l0aHViUGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuXHRnaXRodWJQYWdlLmhyZWYgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS9wZWV0emFlY2tzZGVlXCI7XG5cdGdpdGh1YlBhZ2UuY2xhc3NMaXN0LmFkZChcImNyZWRpdC1hXCIpO1xuICBnaXRodWJQYWdlLnRhcmdldCA9IFwiX2JsYW5rXCI7XG5cblx0Y29uc3QgZ2l0aHViSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcblx0Z2l0aHViSW1hZ2Uuc3JjID0gaW1wb3J0KFwiLi4vYXNzZXRzL2ltYWdlcy9waXp6YS5qcGdcIik7XG5cdGdpdGh1YkltYWdlLmFsdCA9IFwibXkgcHJvZmlsZVwiO1xuXG5cdGdpdGh1YlBhZ2UuYXBwZW5kQ2hpbGQoZ2l0aHViSW1hZ2UpO1xuXG5cdGZvb3Rlci5hcHBlbmRDaGlsZCh0ZXh0KTtcblx0Zm9vdGVyLmFwcGVuZENoaWxkKGdpdGh1YlBhZ2UpO1xuXG5cdHJldHVybiBmb290ZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRGb290ZXI7XG4iLCJ7XG5cdC8qIDxuYXY+XG4gIDxkaXYgaWQ9XCJwcm9qZWN0c1wiPlxuICAgIDxkaXYgaWQ9XCJkZWZhdWx0UHJvamVjdHNcIj5cbiAgICAgIDxidXR0b24gaWQ9XCJwcm9qZWN0XCIgY2xhc3M9XCJhY3RpdmVcIj5cbiAgICAgICAgPGRpdj48aSBjbGFzcz1cImZhLXJlZ3VsYXIgZmEtc3VuXCI+PC9pPk15IERheTwvZGl2PlxuICAgICAgICA8c3BhbiBkYXRhLWNvdW50Pjwvc3Bhbj5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBpZD1cInByb2plY3RcIj5cbiAgICAgICAgPGRpdj48aSBjbGFzcz1cImZhLXJlZ3VsYXIgZmEtc3RhclwiPjwvaT5TdGFycmVkPC9kaXY+XG4gICAgICAgIDxzcGFuIGRhdGEtY291bnQ+PC9zcGFuPlxuICAgICAgPC9idXR0b24+XG4gICAgICA8YnV0dG9uIGlkPVwicHJvamVjdFwiPlxuICAgICAgICA8ZGl2PjxpIGNsYXNzPVwiZmEtc29saWQgZmEtbGlzdC1jaGVja1wiPjwvaT5QbGFubmVkPC9kaXY+XG4gICAgICAgIDxzcGFuIGRhdGEtY291bnQ+PC9zcGFuPlxuICAgICAgPC9idXR0b24+XG4gICAgICA8YnV0dG9uIGlkPVwicHJvamVjdFwiPlxuICAgICAgICA8ZGl2PjxpIGNsYXNzPVwiZmEtc29saWQgZmEtaG91c2VcIj48L2k+VGFza3M8L2Rpdj5cbiAgICAgICAgPHNwYW4gZGF0YS1jb3VudD48L3NwYW4+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICA8aHI+XG4gICAgPGRpdiBpZD1cInVzZXJQcm9qZWN0c1wiPjwvZGl2PlxuICA8L2Rpdj5cbiAgPGJ1dHRvbiBpZD1cImFkZFByb2plY3RcIj5OZXcgbGlzdDwvYnV0dG9uPlxuPC9uYXY+ICovXG59XG5cbmltcG9ydCBcIi4vU2lkZWJhci5jc3NcIjtcbmltcG9ydCB7IGFkZFByb2plY3QgfSBmcm9tIFwiLi4vQ29udHJvbGxlcnMvUHJvamVjdENvbnRyb2xsZXJcIjtcbmltcG9ydCB7XG5cdHJlbmRlclByb2plY3RzLFxuXHRyZW5kZXJNYWluUHJvamVjdFBhZ2UsXG5cdHJlbmRlclVzZXJQcm9qZWN0UGFnZSxcblx0c2V0QWN0aXZlLFxufSBmcm9tIFwiLi4vQ29udHJvbGxlcnMvUmVuZGVyQ29udHJvbGxlclwiO1xuaW1wb3J0IHsgUHJvamVjdEJ1dHRvbiB9IGZyb20gXCIuLi91dGlsc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG5cdGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG5cblx0Y29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRwcm9qZWN0cy5pZCA9IFwicHJvamVjdHNcIjtcblxuXHRjb25zdCBkZWZhdWx0UHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRkZWZhdWx0UHJvamVjdHMuaWQgPSBcImRlZmF1bHRQcm9qZWN0c1wiO1xuXG5cdGNvbnN0IG15RGF5ID0gUHJvamVjdEJ1dHRvbihcImZhLXJlZ3VsYXJcIiwgXCJmYS1zdW5cIiwgXCJNeSBEYXlcIiwgLTEpO1xuXHRteURheS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuXHRjb25zdCBzdGFycmVkID0gUHJvamVjdEJ1dHRvbihcImZhLXJlZ3VsYXJcIiwgXCJmYS1zdGFyXCIsIFwiU3RhcnJlZFwiLCAtMik7XG5cdGNvbnN0IHBsYW5uZWQgPSBQcm9qZWN0QnV0dG9uKFwiZmEtc29saWRcIiwgXCJmYS1saXN0LWNoZWNrXCIsIFwiUGxhbm5lZFwiLCAtMyk7XG5cblx0bXlEYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHJlbmRlck1haW5Qcm9qZWN0UGFnZSgpKTtcblx0c3RhcnJlZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gcmVuZGVyTWFpblByb2plY3RQYWdlKCkpO1xuXHRwbGFubmVkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiByZW5kZXJNYWluUHJvamVjdFBhZ2UoKSk7XG5cblx0Y29uc3QgaHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaHJcIik7XG5cblx0Y29uc3QgdXNlclByb2plY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0dXNlclByb2plY3RzLmlkID0gXCJ1c2VyUHJvamVjdHNcIjtcblxuXHRjb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblx0YWRkUHJvamVjdEJ0bi5pZCA9IFwiYWRkUHJvamVjdFwiO1xuXHRhZGRQcm9qZWN0QnRuLnRleHRDb250ZW50ID0gXCJOZXcgTGlzdFwiO1xuXHRhZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0Y29uc3QgbmV3UHJvamVjdCA9IGFkZFByb2plY3QoXCJVbnRpdGxlZCBMaXN0XCIpO1xuXHRcdHJlbmRlclByb2plY3RzKCk7XG5cblx0XHRjb25zdCBuZXdQcm9qZWN0YnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihcblx0XHRcdGBbZGF0YS1pZD1cIiR7bmV3UHJvamVjdC5pZH1cIl1gXG5cdFx0KTtcblx0XHRyZW5kZXJVc2VyUHJvamVjdFBhZ2UobmV3UHJvamVjdCk7XG5cdFx0c2V0QWN0aXZlKG5ld1Byb2plY3RidG4pO1xuXG5cdFx0Y29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZUlucHV0Jyk7XG5cdFx0dGl0bGVJbnB1dC5mb2N1cygpO1xuXHRcdHRpdGxlSW5wdXQuc2VsZWN0KCk7XG5cdH0pO1xuXG5cdGRlZmF1bHRQcm9qZWN0cy5hcHBlbmRDaGlsZChteURheSk7XG5cdGRlZmF1bHRQcm9qZWN0cy5hcHBlbmRDaGlsZChzdGFycmVkKTtcblx0ZGVmYXVsdFByb2plY3RzLmFwcGVuZENoaWxkKHBsYW5uZWQpO1xuXG5cdHByb2plY3RzLmFwcGVuZENoaWxkKGRlZmF1bHRQcm9qZWN0cyk7XG5cdHByb2plY3RzLmFwcGVuZENoaWxkKGhyKTtcblx0cHJvamVjdHMuYXBwZW5kQ2hpbGQodXNlclByb2plY3RzKTtcblxuXHRuYXYuYXBwZW5kQ2hpbGQocHJvamVjdHMpO1xuXHRuYXYuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdEJ0bik7XG5cblx0cmV0dXJuIG5hdjtcbn1cbiIsImltcG9ydCBcIi4vRGVmYXVsdC5jc3NcIjtcblxuZnVuY3Rpb24gY3JlYXRlRGVmYXVsdFBhZ2UoKSB7XG5cdGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcblxuXHRyZXR1cm4gbWFpbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRGVmYXVsdFBhZ2U7XG4iLCJpbXBvcnQgXCIuL1VzZXJzLmNzc1wiO1xuXG5pbXBvcnQge1xuXHRlZGl0UHJvamVjdCxcblx0Y3JlYXRlVG9kbyxcblx0cmVtb3ZlUHJvamVjdCxcblx0ZWRpdFRvZG8sXG59IGZyb20gXCIuLi8uLi9Db250cm9sbGVycy9Qcm9qZWN0Q29udHJvbGxlclwiO1xuaW1wb3J0IHsgdGV4dExlbmd0aFZhbGlkYXRvciB9IGZyb20gXCIuLi8uLi9WYWxpZGF0b3JcIjtcbmltcG9ydCB7XG5cdHJlbmRlclByb2plY3RzLFxuXHRyZW5kZXJNYWluUHJvamVjdFBhZ2UsXG5cdHNldEFjdGl2ZSxcbn0gZnJvbSBcIi4uLy4uL0NvbnRyb2xsZXJzL1JlbmRlckNvbnRyb2xsZXJcIjtcbmltcG9ydCB7IEJ1dHRvbkFuaW1hdGlvbiB9IGZyb20gXCIuLi8uLi91dGlsc1wiO1xuXG5mdW5jdGlvbiBUb2RvQnV0dG9uKHRvZG8pIHtcblx0Y29uc3QgVG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cdGxldCBzdGFycmVkID0gdG9kby5pc1N0YXJyZWQoKTtcblx0bGV0IGRvbmUgPSB0b2RvLmlzRG9uZSgpO1xuXHRUb2RvLmNsYXNzTGlzdC5hZGQoXCJ0b2RvXCIpO1xuXHRUb2RvLmRhdGFzZXQuVGlkID0gdG9kby5pZDtcblx0VG9kby5kYXRhc2V0LmRvbmUgPSBkb25lO1xuXHRUb2RvLmRhdGFzZXQuc3RhcnJlZCA9IHN0YXJyZWQ7XG5cblx0Y29uc3Qgc3RhckFuaW1hdGlvbiA9XG5cdFx0KFt7IGZvbnRTaXplOiBcIi43NXJlbVwiIH0sIHsgZm9udFNpemU6IFwiMS4yNXJlbVwiIH1dLFxuXHRcdHtcblx0XHRcdGR1cmF0aW9uOiAxMjUsXG5cdFx0XHRpdGVyYXRpb25zOiAxLFxuXHRcdH0pO1xuXG5cdGZ1bmN0aW9uIHRvZ2dsZVN0YXJyZWQoKSB7XG5cdFx0aWYgKHN0YXJyZWQpIHtcblx0XHRcdHN0YXIuY2xhc3NMaXN0LnJlbW92ZShcImZhLXNvbGlkXCIpO1xuXHRcdFx0c3Rhci5jbGFzc0xpc3QuYWRkKFwiZmEtcmVndWxhclwiKTtcblx0XHRcdHN0YXJyZWQgPSBmYWxzZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3Rhci5hbmltYXRlKHN0YXJBbmltYXRpb24pO1xuXHRcdFx0c3Rhci5jbGFzc0xpc3QucmVtb3ZlKFwiZmEtcmVndWxhclwiKTtcblx0XHRcdHN0YXIuY2xhc3NMaXN0LmFkZChcImZhLXNvbGlkXCIpO1xuXHRcdFx0c3RhcnJlZCA9IHRydWU7XG5cdFx0fVxuXHRcdFRvZG8uZGF0YXNldC5zdGFycmVkID0gc3RhcnJlZDtcblx0XHR0b2RvLnNldFN0YXJyZWQoc3RhcnJlZCk7XG5cdFx0ZWRpdFRvZG8odG9kbyk7XG5cdH1cblxuXHRjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG5cdGNvbnN0IGNpcmNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuXHRpZiAoZG9uZSkge1xuXHRcdGNpcmNsZS5jbGFzc0xpc3QuYWRkKFwiZG9uZVwiKTtcblx0fVxuXHRjaXJjbGUuY2xhc3NMaXN0LmFkZChkb25lID8gXCJmYS1zb2xpZFwiIDogXCJmYS1yZWd1bGFyXCIsIFwiZmEtY2lyY2xlXCIpO1xuXHRjaXJjbGUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoKSA9PiB7XG5cdFx0aWYgKGRvbmUpIHtcblx0XHRcdGNpcmNsZS5jbGFzc0xpc3QucmVtb3ZlKFwiZmEtc29saWRcIik7XG5cdFx0XHRjaXJjbGUuY2xhc3NMaXN0LmFkZChcImZhLXJlZ3VsYXJcIik7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y2lyY2xlLmNsYXNzTGlzdC5yZW1vdmUoXCJmYS1yZWd1bGFyXCIpO1xuXHRcdGNpcmNsZS5jbGFzc0xpc3QuYWRkKFwiZmEtc29saWRcIik7XG5cdH0pO1xuXHRjaXJjbGUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsICgpID0+IHtcblx0XHRpZiAoZG9uZSkge1xuXHRcdFx0Y2lyY2xlLmNsYXNzTGlzdC5hZGQoXCJmYS1zb2xpZFwiKTtcblx0XHRcdGNpcmNsZS5jbGFzc0xpc3QucmVtb3ZlKFwiZmEtcmVndWxhclwiKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjaXJjbGUuY2xhc3NMaXN0LmFkZChcImZhLXJlZ3VsYXJcIik7XG5cdFx0Y2lyY2xlLmNsYXNzTGlzdC5yZW1vdmUoXCJmYS1zb2xpZFwiKTtcblx0fSk7XG5cdGNpcmNsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdGRvbmUgPSAhZG9uZTtcblx0XHRpZiAoZG9uZSkge1xuXHRcdFx0Y2lyY2xlLmNsYXNzTGlzdC5hZGQoXCJkb25lXCIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjaXJjbGUuY2xhc3NMaXN0LnJlbW92ZShcImRvbmVcIik7XG5cdFx0fVxuXHRcdFRvZG8uZGF0YXNldC5kb25lID0gZG9uZTtcblx0XHR0b2RvLnNldERvbmUoZG9uZSk7XG5cdFx0ZWRpdFRvZG8odG9kbyk7XG5cdH0pO1xuXG5cdGNvbnN0IHRleHRTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cdHRleHRTcGFuLnRleHRDb250ZW50ID0gdG9kby5nZXRUaXRsZSgpO1xuXG5cdGNvbnN0IHN0YXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcblx0c3Rhci5jbGFzc0xpc3QuYWRkKHN0YXJyZWQgPyBcImZhLXNvbGlkXCIgOiBcImZhLXJlZ3VsYXJcIiwgXCJmYS1zdGFyXCIpO1xuXHRzdGFyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0b2dnbGVTdGFycmVkKCkpO1xuXG5cdGZ1bmN0aW9uIGlzQnRuRWxlbShlbGVtKSB7XG5cdFx0cmV0dXJuIChlbGVtLnRhcmdldCA9PT0gdGV4dFNwYW4gfHwgZWxlbS50YXJnZXQgPT09IFRvZG8pID8gdHJ1ZSA6IGZhbHNlO1xuXHR9XG5cblx0VG9kby5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIChlbGVtKSA9PiBCdXR0b25BbmltYXRpb24oVG9kbywgMC45OSwgaXNCdG5FbGVtKGVsZW0pKSk7XG5cdFRvZG8uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsICgpID0+IEJ1dHRvbkFuaW1hdGlvbihUb2RvLCAxKSk7XG5cdFRvZG8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IEJ1dHRvbkFuaW1hdGlvbihUb2RvLCAxKSk7XG5cblx0ZGl2LmFwcGVuZENoaWxkKGNpcmNsZSk7XG5cdGRpdi5hcHBlbmRDaGlsZCh0ZXh0U3Bhbik7XG5cblx0VG9kby5hcHBlbmRDaGlsZChkaXYpO1xuXHRUb2RvLmFwcGVuZENoaWxkKHN0YXIpO1xuXG5cdHJldHVybiBUb2RvO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVVc2VyUGFnZShwcm9qZWN0KSB7XG5cdGNvbnN0IHByb2plY3RUZXh0ID0gZG9jdW1lbnRcblx0XHQucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQ9XCIke3Byb2plY3QuaWR9XCJdYClcblx0XHQucXVlcnlTZWxlY3RvcihcInNwYW5cIik7XG5cblx0Y29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xuXG5cdGNvbnN0IHRpdGxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0dGl0bGVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRpdGxlLWNvbnRhaW5lclwiKTtcblxuXHRjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblx0dGl0bGUudHlwZSA9IFwidGV4dFwiO1xuXHR0aXRsZS52YWx1ZSA9IHByb2plY3QuZ2V0VGl0bGUoKTtcblx0dGl0bGUuaWQgPSBcInRpdGxlSW5wdXRcIjtcblx0dGl0bGUuYWRkRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsIChldmVudCkgPT4ge1xuXHRcdGlmIChldmVudC5rZXkgPT09IFwiRW50ZXJcIikge1xuXHRcdFx0dGl0bGUuYmx1cigpO1xuXHRcdFx0cHJvamVjdC5jaGFuZ2VUaXRsZSh0aXRsZS52YWx1ZSk7XG5cdFx0XHRwcm9qZWN0VGV4dC50ZXh0Q29udGVudCA9IHRleHRMZW5ndGhWYWxpZGF0b3IodGl0bGUudmFsdWUpO1xuXHRcdFx0ZWRpdFByb2plY3QocHJvamVjdCk7XG5cdFx0fVxuXHR9KTtcblx0dGl0bGUuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgKCkgPT4ge1xuXHRcdHByb2plY3QuY2hhbmdlVGl0bGUodGl0bGUudmFsdWUpO1xuXHRcdHByb2plY3RUZXh0LnRleHRDb250ZW50ID0gdGV4dExlbmd0aFZhbGlkYXRvcih0aXRsZS52YWx1ZSk7XG5cdFx0ZWRpdFByb2plY3QocHJvamVjdCk7XG5cdH0pO1xuXHRjb25zdCByZW1vdmVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXHRyZW1vdmVCdXR0b24uaWQgPSBcImRlbGV0ZVwiO1xuXHRyZW1vdmVCdXR0b24udGV4dENvbnRlbnQgPSBcIlhcIjtcblxuXHRsZXQgY291bnQgPSAwO1xuXHRyZW1vdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRjb3VudCsrO1xuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0Y291bnQtLTtcblx0XHR9LCA3NTApO1xuXHRcdGlmIChjb3VudCA9PT0gMikge1xuXHRcdFx0cmVtb3ZlUHJvamVjdChwcm9qZWN0LmlkKTtcblx0XHRcdHJlbmRlclByb2plY3RzKCk7XG5cdFx0XHRyZW5kZXJNYWluUHJvamVjdFBhZ2UoKTtcblx0XHRcdHNldEFjdGl2ZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RcIikpO1xuXHRcdH1cblx0fSk7XG5cblx0Y29uc3QgdG9kb0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHR0b2RvTGlzdC5pZCA9IFwidG9kb0xpc3RcIjtcblx0cHJvamVjdC5nZXRUb2RvcygpLmZvckVhY2goKHRvZG8pID0+IHtcblx0XHRjb25zdCBUb2RvQnRuID0gVG9kb0J1dHRvbih0b2RvKTtcblx0XHR0b2RvTGlzdC5hcHBlbmRDaGlsZChUb2RvQnRuKTtcblx0fSk7XG5cblx0Y29uc3QgYWRkVG9kb0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblx0YWRkVG9kb0J0bi50eXBlID0gXCJ0ZXh0XCI7XG5cdGFkZFRvZG9CdG4uaWQgPSBcImFkZFRvZG9cIjtcblx0YWRkVG9kb0J0bi5wbGFjZWhvbGRlciA9IFwiQWRkIGEgdGFza1wiO1xuXHRhZGRUb2RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCAoKSA9PiB7XG5cdFx0YWRkVG9kb0J0bi5wbGFjZWhvbGRlciA9IFwiXCI7XG5cdH0pO1xuXHRhZGRUb2RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCAoKSA9PiB7XG5cdFx0YWRkVG9kb0J0bi5wbGFjZWhvbGRlciA9IGFkZFRvZG9CdG4udmFsdWUgfHwgXCJBZGQgYSB0YXNrXCI7XG5cdH0pO1xuXHRhZGRUb2RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCAoZXZlbnQpID0+IHtcblx0XHRpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcblx0XHRcdGlmICghYWRkVG9kb0J0bi52YWx1ZSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHR0b2RvTGlzdC5hcHBlbmRDaGlsZChcblx0XHRcdFx0VG9kb0J1dHRvbihjcmVhdGVUb2RvKHByb2plY3QuaWQsIFthZGRUb2RvQnRuLnZhbHVlLCBEYXRlLm5vdygpXSkpXG5cdFx0XHQpO1xuXHRcdFx0YWRkVG9kb0J0bi52YWx1ZSA9IFwiXCI7XG5cdFx0fVxuXHR9KTtcblxuXHR0aXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cdHRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKHJlbW92ZUJ1dHRvbik7XG5cblx0bWFpbi5hcHBlbmRDaGlsZCh0aXRsZUNvbnRhaW5lcik7XG5cdG1haW4uYXBwZW5kQ2hpbGQodG9kb0xpc3QpO1xuXHRtYWluLmFwcGVuZENoaWxkKGFkZFRvZG9CdG4pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVVc2VyUGFnZTtcbiIsImltcG9ydCBQcm9qZWN0IGZyb20gXCIuLi9PYmplY3RzL1Byb2plY3QuanNcIjtcbmltcG9ydCBUb2RvIGZyb20gXCIuLi9PYmplY3RzL1RvZG8uanNcIjtcbmltcG9ydCB7IHNhdmVEYXRhLCBsb2FkRGF0YSB9IGZyb20gXCIuL1N0b3JhZ2VDb250cm9sbGVyLmpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkUHJvamVjdHMoKSB7XG5cdGxldCBwcm9qZWN0c0RhdGEgPSBKU09OLnBhcnNlKGxvYWREYXRhKFwicHJvamVjdHNcIikpIHx8IFtdO1xuXG5cdHJldHVybiBwcm9qZWN0c0RhdGEubWFwKChkYXRhKSA9PiB7XG5cdFx0Y29uc3QgcHJvamVjdCA9IFByb2plY3QoZGF0YS5pZCwgZGF0YS50aXRsZSk7XG5cblx0XHRsb2FkVG9kb3MocHJvamVjdCwgZGF0YS50b2Rvcyk7XG5cdFx0cmV0dXJuIHByb2plY3Q7XG5cdH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZFRvZG9zKHByb2plY3QsIHRvZG9zKSB7XG5cdHRvZG9zLmZvckVhY2goKHRvZG8pID0+IHtcblx0XHRwcm9qZWN0LmFkZFRvZG8oXG5cdFx0XHRUb2RvKFxuXHRcdFx0XHR0b2RvLmlkLFxuXHRcdFx0XHR0b2RvLnBpZCxcblx0XHRcdFx0dG9kby50aXRsZSxcblx0XHRcdFx0dG9kby5kYXRlLFxuXHRcdFx0XHR0b2RvLmR1ZURhdGUsXG5cdFx0XHRcdHRvZG8uc3RhcnJlZCxcblx0XHRcdFx0dG9kby5kb25lXG5cdFx0XHQpXG5cdFx0KTtcblx0fSk7XG59XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7W1Byb2plY3RdfSBwcm9qZWN0c1xuICovXG5leHBvcnQgZnVuY3Rpb24gc2F2ZVByb2plY3RzKHByb2plY3RzKSB7XG5cdGNvbnN0IG9iamVjdFByb2plY3RzID0gcHJvamVjdHMubWFwKChwcm9qZWN0KSA9PiBwcm9qZWN0LnRvT2JqZWN0KCkpO1xuXG5cdHNhdmVEYXRhKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkob2JqZWN0UHJvamVjdHMpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFByb2plY3QobmFtZSkge1xuXHRjb25zdCBMb2FkZWRQcm9qZWN0cyA9IGxvYWRQcm9qZWN0cygpO1xuXHRjb25zdCBQcm9qZWN0c0xlbmd0aCA9IExvYWRlZFByb2plY3RzLmxlbmd0aDtcblxuXHRsZXQgbmV3UHJvamVjdCA9IFByb2plY3QoXG5cdFx0UHJvamVjdHNMZW5ndGggPiAwID8gTG9hZGVkUHJvamVjdHNbTG9hZGVkUHJvamVjdHMubGVuZ3RoIC0gMV0uaWQgKyAxIDogMSxcblx0XHRuYW1lXG5cdCk7XG5cblx0TG9hZGVkUHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcblxuXHRzYXZlUHJvamVjdHMoTG9hZGVkUHJvamVjdHMpO1xuXG5cdHJldHVybiBuZXdQcm9qZWN0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWRpdFByb2plY3QobmV3UHJvamVjdCkge1xuXHRsZXQgTG9hZGVkUHJvamVjdHMgPSBsb2FkUHJvamVjdHMoKTtcblxuXHRsZXQgaWR4ID0gTG9hZGVkUHJvamVjdHMuZmluZEluZGV4KChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkID09PSBuZXdQcm9qZWN0LmlkKTtcblx0TG9hZGVkUHJvamVjdHNbaWR4XSA9IG5ld1Byb2plY3Q7XG5cblx0c2F2ZVByb2plY3RzKExvYWRlZFByb2plY3RzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVByb2plY3QocHJvamVjdElkKSB7XG5cdGxldCBMb2FkZWRQcm9qZWN0cyA9IGxvYWRQcm9qZWN0cygpO1xuXG5cdHNhdmVQcm9qZWN0cyhMb2FkZWRQcm9qZWN0cy5maWx0ZXIoKHByb2plY3QpID0+IHByb2plY3QuaWQgIT09IHByb2plY3RJZCkpO1xufVxuXG4vKipcbiAqXG4gKiBAcGFyYW0geyp9IHByb2plY3RJZFxuICogQHBhcmFtICB7W3N0cmluZywgRGF0ZT8sIHN0cmluZz8sIGJvb2xlYW4/LCBib29sZWFuP119IGluZm8gW3RpdGxlLCBkdWVkYXRlLCBub3Rlcywgc3RhcnJlZCwgZG9uZV1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRvZG8ocHJvamVjdElkLCBpbmZvKSB7XG5cdGxldCBMb2FkZWRQcm9qZWN0cyA9IGxvYWRQcm9qZWN0cygpO1xuXG5cdGxldCBwcm9qZWN0ID0gTG9hZGVkUHJvamVjdHMuZmluZCgocHJvaikgPT4gcHJvai5pZCA9PT0gcHJvamVjdElkKTtcblx0bGV0IHByb2plY3RUb2RvcyA9IHByb2plY3QuZ2V0VG9kb3MoKTtcblx0bGV0IHByb2plY3RMZW5ndGggPSBwcm9qZWN0VG9kb3MubGVuZ3RoO1xuXG5cdGxldCBuZXdUb2RvID0gVG9kbyhcblx0XHRwcm9qZWN0TGVuZ3RoID4gMCA/IHByb2plY3RUb2Rvc1twcm9qZWN0TGVuZ3RoIC0gMV0uaWQgKyAxIDogMSxcblx0XHRwcm9qZWN0SWQsXG5cdFx0Li4uaW5mb1xuXHQpO1xuXG5cdHByb2plY3QuYWRkVG9kbyhuZXdUb2RvKTtcblxuXHRzYXZlUHJvamVjdHMoTG9hZGVkUHJvamVjdHMpO1xuXG5cdHJldHVybiBuZXdUb2RvO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlVG9kbyhwcm9qZWN0SWQsIHRvZG9JZCkge1xuXHRsZXQgTG9hZGVkUHJvamVjdHMgPSBsb2FkUHJvamVjdHMoKTtcblxuXHRsZXQgcHJvamVjdCA9IExvYWRlZFByb2plY3RzLmZpbmQoKHByb2opID0+IHByb2ouaWQgPT09IHByb2plY3RJZCk7XG5cblx0cHJvamVjdC5yZW1vdmVUb2RvKHRvZG9JZCk7XG5cblx0c2F2ZVByb2plY3RzKExvYWRlZFByb2plY3RzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVkaXRUb2RvKG5ld1RvZG8pIHtcblx0bGV0IExvYWRlZFByb2plY3RzID0gbG9hZFByb2plY3RzKCk7XG5cblx0bGV0IHByb2plY3QgPSBMb2FkZWRQcm9qZWN0cy5maW5kKChwcm9qKSA9PiBwcm9qLmlkID09PSBuZXdUb2RvLnBpZCk7XG5cblx0bGV0IHRvZG9zID0gcHJvamVjdC5nZXRUb2RvcygpO1xuXHRsZXQgaWR4ID0gdG9kb3MuZmluZEluZGV4KCh0b2RvKSA9PiB0b2RvLmlkID09PSBuZXdUb2RvLmlkKTtcblx0dG9kb3NbaWR4XSA9IG5ld1RvZG87XG5cblx0c2F2ZVByb2plY3RzKExvYWRlZFByb2plY3RzKTtcbn1cbiIsImltcG9ydCBGb290ZXIgZnJvbSBcIi4uL0NvbXBvbmVudHMvRm9vdGVyLmpzXCI7XG5pbXBvcnQgU2lkZWJhciBmcm9tIFwiLi4vQ29tcG9uZW50cy9TaWRlYmFyLmpzXCI7XG5pbXBvcnQgRGVmYXVsdFBhZ2UgZnJvbSBcIi4uL0NvbXBvbmVudHMvcGFnZXMvRGVmYXVsdC5qc1wiO1xuaW1wb3J0IFVzZXJQYWdlIGZyb20gXCIuLi9Db21wb25lbnRzL3BhZ2VzL1VzZXJzLmpzXCI7XG5cbmltcG9ydCB7IGxvYWRQcm9qZWN0cyB9IGZyb20gXCIuL1Byb2plY3RDb250cm9sbGVyLmpzXCI7XG5pbXBvcnQgeyBQcm9qZWN0QnV0dG9uIH0gZnJvbSBcIi4uL3V0aWxzXCI7XG5pbXBvcnQgeyB0ZXh0TGVuZ3RoVmFsaWRhdG9yIH0gZnJvbSBcIi4uL1ZhbGlkYXRvci5qc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0QWN0aXZlKGJ1dHRvbikge1xuXHRjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0XCIpO1xuXHRidXR0b25zLmZvckVhY2goKGJ0bikgPT4ge1xuXHRcdGlmIChidG4gIT09IGJ1dHRvbikge1xuXHRcdFx0YnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG5cdFx0fVxuXHRcdGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuXHR9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclVzZXJQcm9qZWN0UGFnZShwcm9qZWN0KSB7XG5cdGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcblx0bWFpbi5jbGFzc0xpc3QuYWRkKFwidXNlclwiKTtcblx0bWFpbi5jbGFzc0xpc3QucmVtb3ZlKFwibWFpblwiKTtcblx0bWFpbi50ZXh0Q29udGVudCA9IFwiXCI7XG5cblx0VXNlclBhZ2UocHJvamVjdCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJNYWluUHJvamVjdFBhZ2UoKSB7XG5cdGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcblx0bWFpbi5jbGFzc0xpc3QuYWRkKFwibWFpblwiKTtcblx0bWFpbi5jbGFzc0xpc3QucmVtb3ZlKFwidXNlclwiKTtcblx0bWFpbi50ZXh0Q29udGVudCA9IFwiXCI7XG5cblx0RGVmYXVsdFBhZ2UoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclByb2plY3RzKCkge1xuXHRjb25zdCBQcm9qZWN0cyA9IGxvYWRQcm9qZWN0cygpO1xuXHRjb25zdCB1c2VyUHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3VzZXJQcm9qZWN0c1wiKTtcblx0dXNlclByb2plY3RzLnRleHRDb250ZW50ID0gXCJcIjtcblxuXHRQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG5cdFx0Y29uc3QgYnRuID0gUHJvamVjdEJ1dHRvbihcblx0XHRcdFwiZmEtc29saWRcIixcblx0XHRcdFwiZmEtYmFyc1wiLFxuXHRcdFx0dGV4dExlbmd0aFZhbGlkYXRvcihwcm9qZWN0LmdldFRpdGxlKCkpLFxuXHRcdFx0cHJvamVjdC5pZFxuXHRcdCk7XG5cdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0XHRyZW5kZXJVc2VyUHJvamVjdFBhZ2UocHJvamVjdCk7XG5cdFx0fSk7XG5cdFx0dXNlclByb2plY3RzLmFwcGVuZENoaWxkKGJ0bik7XG5cdH0pO1xuXG5cdGNvbnN0IHByb2plY3RCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0XCIpO1xuXHRwcm9qZWN0QnV0dG9ucy5mb3JFYWNoKChidG4pID0+IHtcblx0XHRidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRcdGlmIChidG4uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0c2V0QWN0aXZlKGJ0bik7XG5cdFx0fSk7XG5cdH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdCgpIHtcblx0Y29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcblx0Y29udGVudC5hcHBlbmRDaGlsZChTaWRlYmFyKCkpO1xuXHRjb250ZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKSk7XG5cdGNvbnRlbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSk7XG5cdGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcblx0Ym9keS5hcHBlbmRDaGlsZChGb290ZXIoKSk7XG5cbiAgcmVuZGVyTWFpblByb2plY3RQYWdlKCk7XG5cdHJlbmRlclByb2plY3RzKCk7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gc2F2ZURhdGEoa2V5LCBkYXRhKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgZGF0YSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkRGF0YShrZXkpIHtcbiAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XG59IiwiLyoqXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGlkXG4gKiBAcGFyYW0ge3N0cmluZ30gdGl0bGVcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAodWlkLCB0aXRsZSkge1xuXHRsZXQgdG9kb3MgPSBbXTtcblxuXHRjb25zdCBpZCA9IHVpZDtcblx0Y29uc3QgZ2V0VGl0bGUgPSAoKSA9PiB0aXRsZTtcblx0Y29uc3QgZ2V0VG9kb3MgPSAoKSA9PiB0b2RvcztcblxuXHRjb25zdCBjaGFuZ2VUaXRsZSA9IChuZXdUaXRsZSkgPT4ge1xuXHRcdHRpdGxlID0gbmV3VGl0bGU7XG5cdH07XG5cdGNvbnN0IGFkZFRvZG8gPSAodG9kbykgPT4ge1xuXHRcdHRvZG9zLnB1c2godG9kbyk7XG5cdH07XG5cdGNvbnN0IHJlbW92ZVRvZG8gPSAodG9kb0lkKSA9PiB7XG5cdFx0dG9kb3MuZmlsdGVyKCh0b2RvKSA9PiB7XG5cdFx0XHR0b2RvLmdldElkICE9PSB0b2RvSWQ7XG5cdFx0fSk7XG5cdH07XG5cblx0Y29uc3QgdG9PYmplY3QgPSAoKSA9PiAoe1xuXHRcdGlkLFxuXHRcdHRpdGxlLFxuXHRcdHRvZG9zOiB0b2Rvcy5tYXAoKHRvZG8pID0+IHtcblx0XHRcdHJldHVybiB0b2RvLnRvT2JqZWN0KCk7XG5cdFx0fSksXG5cdH0pO1xuXG5cdHJldHVybiBPYmplY3QuYXNzaWduKFxuXHRcdHt9LFxuXHRcdHsgaWQsIGdldFRpdGxlLCBnZXRUb2RvcywgY2hhbmdlVGl0bGUsIGFkZFRvZG8sIHJlbW92ZVRvZG8sIHRvT2JqZWN0IH1cblx0KTtcbn1cbiIsIi8qKlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBpZFxuICogQHBhcmFtIHtudW1iZXJ9IHByb2plY3RJZFxuICogQHBhcmFtIHtzdHJpbmd9IHRpdGxlXG4gKiBAcGFyYW0ge0RhdGU/fSBkYXRlXG4gKiBAcGFyYW0ge3N0cmluZz99IG5vdGVzXG4gKiBAcGFyYW0ge2Jvb2xlYW4/fSBzdGFycmVkXG4gKiBAcGFyYW0ge2Jvb2xlYW4/fSBkb25lXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKFxuXHR1aWQgPSAxLFxuXHRwcm9qZWN0SWQsXG5cdHRpdGxlLFxuXHRkYXRlLFxuXHRub3RlcyA9IFwiXCIsXG5cdHN0YXJyZWQgPSBmYWxzZSxcblx0ZG9uZSA9IGZhbHNlXG4pIHtcblx0Y29uc3QgZHVlRGF0ZSA9IERhdGUubm93KCk7XG5cblx0Y29uc3QgaWQgPSB1aWQ7XG5cdGNvbnN0IHBpZCA9IHByb2plY3RJZDtcblx0Y29uc3QgZ2V0VGl0bGUgPSAoKSA9PiB0aXRsZTtcblx0Y29uc3QgZ2V0RGF0ZSA9ICgpID0+IGRhdGU7XG5cdGNvbnN0IGdldER1ZURhdGUgPSAoKSA9PiBkdWVEYXRlO1xuXHRjb25zdCBnZXROb3RlcyA9ICgpID0+IG5vdGVzO1xuXHRjb25zdCBpc1N0YXJyZWQgPSAoKSA9PiBzdGFycmVkO1xuXHRjb25zdCBpc0RvbmUgPSAoKSA9PiBkb25lO1xuXG5cdGNvbnN0IHNldFRpdGxlID0gKG5ld1RpdGxlKSA9PiB7XG5cdFx0dGl0bGUgPSBuZXdUaXRsZTtcblx0fTtcblx0Y29uc3Qgc2V0RHVlRGF0ZSA9IChuZXdEdWVEYXRlKSA9PiB7XG5cdFx0ZHVlRGF0ZSA9IG5ld0R1ZURhdGU7XG5cdH07XG5cdGNvbnN0IHNldE5vdGVzID0gKG5ld05vdGUpID0+IHtcblx0XHRub3RlcyA9IG5ld05vdGU7XG5cdH07XG5cdGNvbnN0IHNldFN0YXJyZWQgPSAobmV3U3RhdGUpID0+IHtcblx0XHRzdGFycmVkID0gbmV3U3RhdGU7XG5cdH07XG5cdGNvbnN0IHNldERvbmUgPSAobmV3U3RhdGUpID0+IHtcblx0XHRkb25lID0gbmV3U3RhdGU7XG5cdH07XG5cblx0Y29uc3QgdG9PYmplY3QgPSAoKSA9PiAoe1xuXHRcdGlkLCBwaWQsIHRpdGxlLCBkYXRlLCBkdWVEYXRlLCBub3Rlcywgc3RhcnJlZCwgZG9uZSxcblx0fSk7XG5cblx0cmV0dXJuIE9iamVjdC5hc3NpZ24oXG5cdFx0e30sXG5cdFx0e1xuXHRcdFx0aWQsXG5cdFx0XHRwaWQsXG5cdFx0XHRnZXRUaXRsZSxcblx0XHRcdGdldERhdGUsXG5cdFx0XHRnZXREdWVEYXRlLFxuXHRcdFx0Z2V0Tm90ZXMsXG5cdFx0XHRpc1N0YXJyZWQsXG5cdFx0XHRpc0RvbmUsXG5cdFx0XHRzZXRUaXRsZSxcblx0XHRcdHNldER1ZURhdGUsXG5cdFx0XHRzZXROb3Rlcyxcblx0XHRcdHNldFN0YXJyZWQsXG5cdFx0XHRzZXREb25lLFxuXHRcdFx0dG9PYmplY3QsXG5cdFx0fVxuXHQpO1xufVxuIiwiLyoqXG4gKiBcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IFxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRleHRMZW5ndGhWYWxpZGF0b3IodGV4dCkge1xuICBpZiAodGV4dC5sZW5ndGggPiAxNikge1xuICAgIHJldHVybiB0ZXh0LnN1YnN0cmluZygwLCAxNikgKyBcIi4uLlwiO1xuICB9XG5cbiAgcmV0dXJuIHRleHQ7XG59IiwiZXhwb3J0IGZ1bmN0aW9uIFByb2plY3RCdXR0b24ob3BhYywgaWNvbiwgdGV4dCwgaWQpIHtcblx0Y29uc3QgUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cdFByb2plY3QuY2xhc3NMaXN0LmFkZChcInByb2plY3RcIik7XG5cdFByb2plY3QuZGF0YXNldC5pZCA9IGlkO1xuXG5cdFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoKSA9PiBCdXR0b25BbmltYXRpb24oUHJvamVjdCwgMC45OCkpO1xuXHRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBCdXR0b25BbmltYXRpb24oUHJvamVjdCwgMSkpO1xuXHRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCAoKSA9PiBCdXR0b25BbmltYXRpb24oUHJvamVjdCwgMSkpO1xuXG5cdGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cblx0Y29uc3QgaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuXHRpLmNsYXNzTGlzdC5hZGQob3BhYywgaWNvbik7XG5cblx0Y29uc3QgdGV4dFNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblx0dGV4dFNwYW4udGV4dENvbnRlbnQgPSB0ZXh0O1xuXG5cdGNvbnN0IGNvdW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cdGNvdW50LmRhdGFzZXQuY291bnQgPSAwO1xuXG5cdGRpdi5hcHBlbmRDaGlsZChpKTtcblx0ZGl2LmFwcGVuZENoaWxkKHRleHRTcGFuKTtcblxuXHRQcm9qZWN0LmFwcGVuZENoaWxkKGRpdik7XG5cdFByb2plY3QuYXBwZW5kQ2hpbGQoY291bnQpO1xuXG5cdHJldHVybiBQcm9qZWN0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQnV0dG9uQW5pbWF0aW9uKGJ0biwgc2NhbGUsIGNvbmRpdGlvbikge1xuXHRjb25zb2xlLmxvZyhjb25kaXRpb24pO1xuXHRpZiAoY29uZGl0aW9uID09PSBmYWxzZSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGlmIChzY2FsZSA9PT0gMSkge1xuXHRcdGJ0bi5zdHlsZSA9IFwiXCI7XG5cdH0gZWxzZSB7XG5cdFx0YnRuLnN0eWxlID0gYHRyYW5zZm9ybTogc2NhbGUoJHtzY2FsZX0pYDtcblx0fVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCJ2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgPyAob2JqKSA9PiAoT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iaikpIDogKG9iaikgPT4gKG9iai5fX3Byb3RvX18pO1xudmFyIGxlYWZQcm90b3R5cGVzO1xuLy8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4vLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbi8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuLy8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4vLyBtb2RlICYgMTY6IHJldHVybiB2YWx1ZSB3aGVuIGl0J3MgUHJvbWlzZS1saWtlXG4vLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuXHRpZihtb2RlICYgMSkgdmFsdWUgPSB0aGlzKHZhbHVlKTtcblx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcblx0aWYodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSkge1xuXHRcdGlmKChtb2RlICYgNCkgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuXHRcdGlmKChtb2RlICYgMTYpICYmIHR5cGVvZiB2YWx1ZS50aGVuID09PSAnZnVuY3Rpb24nKSByZXR1cm4gdmFsdWU7XG5cdH1cblx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcblx0dmFyIGRlZiA9IHt9O1xuXHRsZWFmUHJvdG90eXBlcyA9IGxlYWZQcm90b3R5cGVzIHx8IFtudWxsLCBnZXRQcm90byh7fSksIGdldFByb3RvKFtdKSwgZ2V0UHJvdG8oZ2V0UHJvdG8pXTtcblx0Zm9yKHZhciBjdXJyZW50ID0gbW9kZSAmIDIgJiYgdmFsdWU7IHR5cGVvZiBjdXJyZW50ID09ICdvYmplY3QnICYmICF+bGVhZlByb3RvdHlwZXMuaW5kZXhPZihjdXJyZW50KTsgY3VycmVudCA9IGdldFByb3RvKGN1cnJlbnQpKSB7XG5cdFx0T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoY3VycmVudCkuZm9yRWFjaCgoa2V5KSA9PiAoZGVmW2tleV0gPSAoKSA9PiAodmFsdWVba2V5XSkpKTtcblx0fVxuXHRkZWZbJ2RlZmF1bHQnXSA9ICgpID0+ICh2YWx1ZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChucywgZGVmKTtcblx0cmV0dXJuIG5zO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmYgPSB7fTtcbi8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbi8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5lID0gKGNodW5rSWQpID0+IHtcblx0cmV0dXJuIFByb21pc2UuYWxsKE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uZikucmVkdWNlKChwcm9taXNlcywga2V5KSA9PiB7XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5mW2tleV0oY2h1bmtJZCwgcHJvbWlzZXMpO1xuXHRcdHJldHVybiBwcm9taXNlcztcblx0fSwgW10pKTtcbn07IiwiLy8gVGhpcyBmdW5jdGlvbiBhbGxvdyB0byByZWZlcmVuY2UgYXN5bmMgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnUgPSAoY2h1bmtJZCkgPT4ge1xuXHQvLyByZXR1cm4gdXJsIGZvciBmaWxlbmFtZXMgYmFzZWQgb24gdGVtcGxhdGVcblx0cmV0dXJuIFwiXCIgKyBjaHVua0lkICsgXCIubWFpbi5qc1wiO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCJ2YXIgaW5Qcm9ncmVzcyA9IHt9O1xudmFyIGRhdGFXZWJwYWNrUHJlZml4ID0gXCJ0b3AtdG9kby1saXN0OlwiO1xuLy8gbG9hZFNjcmlwdCBmdW5jdGlvbiB0byBsb2FkIGEgc2NyaXB0IHZpYSBzY3JpcHQgdGFnXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmwgPSAodXJsLCBkb25lLCBrZXksIGNodW5rSWQpID0+IHtcblx0aWYoaW5Qcm9ncmVzc1t1cmxdKSB7IGluUHJvZ3Jlc3NbdXJsXS5wdXNoKGRvbmUpOyByZXR1cm47IH1cblx0dmFyIHNjcmlwdCwgbmVlZEF0dGFjaDtcblx0aWYoa2V5ICE9PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBzY3JpcHRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgcyA9IHNjcmlwdHNbaV07XG5cdFx0XHRpZihzLmdldEF0dHJpYnV0ZShcInNyY1wiKSA9PSB1cmwgfHwgcy5nZXRBdHRyaWJ1dGUoXCJkYXRhLXdlYnBhY2tcIikgPT0gZGF0YVdlYnBhY2tQcmVmaXggKyBrZXkpIHsgc2NyaXB0ID0gczsgYnJlYWs7IH1cblx0XHR9XG5cdH1cblx0aWYoIXNjcmlwdCkge1xuXHRcdG5lZWRBdHRhY2ggPSB0cnVlO1xuXHRcdHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuXG5cdFx0c2NyaXB0LmNoYXJzZXQgPSAndXRmLTgnO1xuXHRcdHNjcmlwdC50aW1lb3V0ID0gMTIwO1xuXHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKSB7XG5cdFx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgX193ZWJwYWNrX3JlcXVpcmVfXy5uYyk7XG5cdFx0fVxuXHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXdlYnBhY2tcIiwgZGF0YVdlYnBhY2tQcmVmaXggKyBrZXkpO1xuXG5cdFx0c2NyaXB0LnNyYyA9IHVybDtcblx0fVxuXHRpblByb2dyZXNzW3VybF0gPSBbZG9uZV07XG5cdHZhciBvblNjcmlwdENvbXBsZXRlID0gKHByZXYsIGV2ZW50KSA9PiB7XG5cdFx0Ly8gYXZvaWQgbWVtIGxlYWtzIGluIElFLlxuXHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG51bGw7XG5cdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuXHRcdHZhciBkb25lRm5zID0gaW5Qcm9ncmVzc1t1cmxdO1xuXHRcdGRlbGV0ZSBpblByb2dyZXNzW3VybF07XG5cdFx0c2NyaXB0LnBhcmVudE5vZGUgJiYgc2NyaXB0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcblx0XHRkb25lRm5zICYmIGRvbmVGbnMuZm9yRWFjaCgoZm4pID0+IChmbihldmVudCkpKTtcblx0XHRpZihwcmV2KSByZXR1cm4gcHJldihldmVudCk7XG5cdH1cblx0dmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCB1bmRlZmluZWQsIHsgdHlwZTogJ3RpbWVvdXQnLCB0YXJnZXQ6IHNjcmlwdCB9KSwgMTIwMDAwKTtcblx0c2NyaXB0Lm9uZXJyb3IgPSBvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgc2NyaXB0Lm9uZXJyb3IpO1xuXHRzY3JpcHQub25sb2FkID0gb25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHNjcmlwdC5vbmxvYWQpO1xuXHRuZWVkQXR0YWNoICYmIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbn07IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5mLmogPSAoY2h1bmtJZCwgcHJvbWlzZXMpID0+IHtcblx0XHQvLyBKU09OUCBjaHVuayBsb2FkaW5nIGZvciBqYXZhc2NyaXB0XG5cdFx0dmFyIGluc3RhbGxlZENodW5rRGF0YSA9IF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpID8gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdIDogdW5kZWZpbmVkO1xuXHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSAhPT0gMCkgeyAvLyAwIG1lYW5zIFwiYWxyZWFkeSBpbnN0YWxsZWRcIi5cblxuXHRcdFx0Ly8gYSBQcm9taXNlIG1lYW5zIFwiY3VycmVudGx5IGxvYWRpbmdcIi5cblx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuXHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZih0cnVlKSB7IC8vIGFsbCBjaHVua3MgaGF2ZSBKU1xuXHRcdFx0XHRcdC8vIHNldHVwIFByb21pc2UgaW4gY2h1bmsgY2FjaGVcblx0XHRcdFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IChpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSBbcmVzb2x2ZSwgcmVqZWN0XSkpO1xuXHRcdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdID0gcHJvbWlzZSk7XG5cblx0XHRcdFx0XHQvLyBzdGFydCBjaHVuayBsb2FkaW5nXG5cdFx0XHRcdFx0dmFyIHVybCA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIF9fd2VicGFja19yZXF1aXJlX18udShjaHVua0lkKTtcblx0XHRcdFx0XHQvLyBjcmVhdGUgZXJyb3IgYmVmb3JlIHN0YWNrIHVud291bmQgdG8gZ2V0IHVzZWZ1bCBzdGFja3RyYWNlIGxhdGVyXG5cdFx0XHRcdFx0dmFyIGVycm9yID0gbmV3IEVycm9yKCk7XG5cdFx0XHRcdFx0dmFyIGxvYWRpbmdFbmRlZCA9IChldmVudCkgPT4ge1xuXHRcdFx0XHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkpIHtcblx0XHRcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuXHRcdFx0XHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IHVuZGVmaW5lZDtcblx0XHRcdFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhKSB7XG5cdFx0XHRcdFx0XHRcdFx0dmFyIGVycm9yVHlwZSA9IGV2ZW50ICYmIChldmVudC50eXBlID09PSAnbG9hZCcgPyAnbWlzc2luZycgOiBldmVudC50eXBlKTtcblx0XHRcdFx0XHRcdFx0XHR2YXIgcmVhbFNyYyA9IGV2ZW50ICYmIGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQuc3JjO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLm1lc3NhZ2UgPSAnTG9hZGluZyBjaHVuayAnICsgY2h1bmtJZCArICcgZmFpbGVkLlxcbignICsgZXJyb3JUeXBlICsgJzogJyArIHJlYWxTcmMgKyAnKSc7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IubmFtZSA9ICdDaHVua0xvYWRFcnJvcic7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IudHlwZSA9IGVycm9yVHlwZTtcblx0XHRcdFx0XHRcdFx0XHRlcnJvci5yZXF1ZXN0ID0gcmVhbFNyYztcblx0XHRcdFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGFbMV0oZXJyb3IpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmwodXJsLCBsb2FkaW5nRW5kZWQsIFwiY2h1bmstXCIgKyBjaHVua0lkLCBjaHVua0lkKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cbn07XG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmt0b3BfdG9kb19saXN0XCJdID0gc2VsZltcIndlYnBhY2tDaHVua3RvcF90b2RvX2xpc3RcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBpbml0IH0gZnJvbSAnLi9Db250cm9sbGVycy9SZW5kZXJDb250cm9sbGVyLmpzJztcblxuaW5pdCgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==