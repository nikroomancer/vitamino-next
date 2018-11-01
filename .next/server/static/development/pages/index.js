module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/components/Header.js":
/*!*************************************!*\
  !*** ./client/components/Header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Navbar_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Navbar/Navbar */ "./client/components/Navbar/Navbar.js");
var _jsxFileName = "/Users/nimanikroo/Desktop/vitamino-next/client/components/Header.js";




var linkStyle = {
  marginRight: 15
};

var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2388037310" + " " + 'header-wrapper',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2388037310" + " " + 'background-filter',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2388037310",
    css: "*.jsx-2388037310{box-sizing:border-box;}.header-wrapper.jsx-2388037310{background:url('static/images/space-background.jpg') no-repeat;height:30vh;min-height:350px;position:relative;}.background-filter.jsx-2388037310{position:absolute;height:100%;width:100%;top:0;background:rgba(0,0,0,0);background:-moz-linear-gradient(top,rgba(0,0,0,0) 0%,rgba(0,0,0,0) 26%,rgba(0,0,0,0.32) 50%,rgba(0,0,0,0.98) 100%);background:-webkit-gradient(left top,left bottom,color-stop(0%,rgba(0,0,0,0)),color-stop(26%,rgba(0,0,0,0)),color-stop(50%,rgba(0,0,0,0.32)),color-stop(100%,rgba(0,0,0,0.98)));background:-webkit-linear-gradient(top,rgba(0,0,0,0) 0%,rgba(0,0,0,0) 26%,rgba(0,0,0,0.32) 50%,rgba(0,0,0,0.98) 100%);background:-o-linear-gradient(top,rgba(0,0,0,0) 0%,rgba(0,0,0,0) 26%,rgba(0,0,0,0.32) 50%,rgba(0,0,0,0.98) 100%);background:-ms-linear-gradient(top,rgba(0,0,0,0) 0%,rgba(0,0,0,0) 26%,rgba(0,0,0,0.32) 50%,rgba(0,0,0,0.98) 100%);background:linear-gradient(to bottom,rgba(0,0,0,0) 0%,rgba(0,0,0,0) 26%,rgba(0,0,0,0.32) 50%,rgba(0,0,0,0.98) 100%);-webkit-filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#000000',endColorstr='#000000',GradientType=0 );filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#000000',endColorstr='#000000',GradientType=0 );}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uaW1hbmlrcm9vL0Rlc2t0b3Avdml0YW1pbm8tbmV4dC9jbGllbnQvY29tcG9uZW50cy9IZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWWEsQUFHMkMsQUFJeUMsQUFPN0Msa0JBQ04sSUFYaEIsUUFZZSxXQUNMLE1BRW1CLGdCQVhiLFNBWTJHLEdBWHRHLGlCQUNDLGtCQUN0Qiw2RUFVNkwsZ0xBQy9ELHNIQUNMLGlIQUNDLGtIQUNFLG9IQUNKLDRPQUN4SCIsImZpbGUiOiIvVXNlcnMvbmltYW5pa3Jvby9EZXNrdG9wL3ZpdGFtaW5vLW5leHQvY2xpZW50L2NvbXBvbmVudHMvSGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IE5hdmJhciBmcm9tICcuL05hdmJhci9OYXZiYXInXG5jb25zdCBsaW5rU3R5bGUgPSB7XG4gICAgbWFyZ2luUmlnaHQ6IDE1XG59O1xuXG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IChcbiAgICA8ZGl2IGNsYXNzTmFtZT17J2hlYWRlci13cmFwcGVyJ30+XG4gICAgICAgIDxOYXZiYXIvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2JhY2tncm91bmQtZmlsdGVyJ30vPlxuICAgICAgICA8c3R5bGUganN4PVwidHJ1ZVwiPlxuICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICAqIHtcbiAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuaGVhZGVyLXdyYXBwZXJ7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnc3RhdGljL2ltYWdlcy9zcGFjZS1iYWNrZ3JvdW5kLmpwZycpIG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHZoO1xuICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAzNTBweDtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5iYWNrZ3JvdW5kLWZpbHRlcntcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwKTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDAsMCwwLDApIDAlLCByZ2JhKDAsMCwwLDApIDI2JSwgcmdiYSgwLDAsMCwwLjMyKSA1MCUsIHJnYmEoMCwwLDAsMC45OCkgMTAwJSk7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDAlLCByZ2JhKDAsMCwwLDApKSwgY29sb3Itc3RvcCgyNiUsIHJnYmEoMCwwLDAsMCkpLCBjb2xvci1zdG9wKDUwJSwgcmdiYSgwLDAsMCwwLjMyKSksIGNvbG9yLXN0b3AoMTAwJSwgcmdiYSgwLDAsMCwwLjk4KSkpO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoMCwwLDAsMCkgMCUsIHJnYmEoMCwwLDAsMCkgMjYlLCByZ2JhKDAsMCwwLDAuMzIpIDUwJSwgcmdiYSgwLDAsMCwwLjk4KSAxMDAlKTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgwLDAsMCwwKSAwJSwgcmdiYSgwLDAsMCwwKSAyNiUsIHJnYmEoMCwwLDAsMC4zMikgNTAlLCByZ2JhKDAsMCwwLDAuOTgpIDEwMCUpO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgwLDAsMCwwKSAwJSwgcmdiYSgwLDAsMCwwKSAyNiUsIHJnYmEoMCwwLDAsMC4zMikgNTAlLCByZ2JhKDAsMCwwLDAuOTgpIDEwMCUpO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDAsMCwwLDApIDAlLCByZ2JhKDAsMCwwLDApIDI2JSwgcmdiYSgwLDAsMCwwLjMyKSA1MCUsIHJnYmEoMCwwLDAsMC45OCkgMTAwJSk7XG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPScjMDAwMDAwJywgZW5kQ29sb3JzdHI9JyMwMDAwMDAnLCBHcmFkaWVudFR5cGU9MCApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXX0= */\n/*@ sourceURL=/Users/nimanikroo/Desktop/vitamino-next/client/components/Header.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./client/components/Layout.js":
/*!*************************************!*\
  !*** ./client/components/Layout.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./client/components/Header.js");
var _jsxFileName = "/Users/nimanikroo/Desktop/vitamino-next/client/components/Layout.js";

 // const layoutStyle = {
//     margin: 20,
//     padding: 20,
//     maxWidth: 1240,
//     border: '1px solid #DDD'
// }

var Layout = function Layout(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./client/components/Navbar/Navbar.js":
/*!********************************************!*\
  !*** ./client/components/Navbar/Navbar.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Navbar_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navbar.less */ "./client/components/Navbar/Navbar.less");
/* harmony import */ var _Navbar_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Navbar_less__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/nimanikroo/Desktop/vitamino-next/client/components/Navbar/Navbar.js";



var linkStyle = {
  marginRight: 15
};

var Navbar = function Navbar() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _Navbar_less__WEBPACK_IMPORTED_MODULE_2___default.a.example,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    style: linkStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Home")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    style: linkStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "About")));
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./client/components/Navbar/Navbar.less":
/*!**********************************************!*\
  !*** ./client/components/Navbar/Navbar.less ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"example": "example___i2T3R"
};

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _client_components_Layout_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../client/components/Layout.js */ "./client/components/Layout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "/Users/nimanikroo/Desktop/vitamino-next/pages/index.js";



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





var Index = function Index(props) {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_client_components_Layout_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    styleId: "2145948527",
    css: "body,html{padding:0 !important;margin:0;height:100%;width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uaW1hbmlrcm9vL0Rlc2t0b3Avdml0YW1pbm8tbmV4dC9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQnlDLEFBR2tDLHFCQUNaLFNBQ0csWUFDRCxXQUNmIiwiZmlsZSI6Ii9Vc2Vycy9uaW1hbmlrcm9vL0Rlc2t0b3Avdml0YW1pbm8tbmV4dC9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY2xpZW50L2NvbXBvbmVudHMvTGF5b3V0LmpzJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcblxuXG5jb25zdCBJbmRleCA9IChwcm9wcykgPT4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICAgIHsvKjxoMSBjbGFzc05hbWU9eyd0aXRsZSd9PkJhdG1hbiBUViBTaG93czwvaDE+Ki99XG4gICAgICAgIHsvKjxoMSBjbGFzc05hbWU9eyd0ZXN0J30+QmF0bWFuIFRWIFNob3dzPC9oMT4qL31cbiAgICAgICAgey8qPHVsPiovfVxuICAgICAgICAgICAgey8qe3Byb3BzLnNob3dzLm1hcCgoe3Nob3d9KSA9PiAoKi99XG4gICAgICAgICAgICAgICAgey8qPGxpIGtleT17c2hvdy5pZH0+Ki99XG4gICAgICAgICAgICAgICAgICAgIHsvKjxMaW5rIGFzPXtgL3AvJHtzaG93LmlkfWB9IGhyZWY9e2AvcG9zdD9pZD0ke3Nob3cuaWR9YH0+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICB7Lyo8YT57c2hvdy5uYW1lfTwvYT4qL31cbiAgICAgICAgICAgICAgICAgICAgey8qPC9MaW5rPiovfVxuICAgICAgICAgICAgICAgIHsvKjwvbGk+Ki99XG4gICAgICAgICAgICB7LyopKX0qL31cbiAgICAgICAgey8qPC91bD4qL31cbiAgICAgICAgPHN0eWxlIGpzeD1cInRydWVcIiBnbG9iYWw9XCJ0cnVlXCI+e2BcbiAgICAgICAgYm9keSxodG1se1xuICAgICAgICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgPC9MYXlvdXQ+XG4pXG5cbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS50dm1hemUuY29tL3NlYXJjaC9zaG93cz9xPWJhdG1hbicpXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcbiAgICBjb25zb2xlLmxvZyhgU2hvdyBkYXRhIGZldGNoZWQuIENvdW50OiAke2RhdGEubGVuZ3RofWApXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBzaG93czogZGF0YVxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4XG4iXX0= */\n/*@ sourceURL=/Users/nimanikroo/Desktop/vitamino-next/pages/index.js */",
    __self: this
  }));
};

Index.getInitialProps =
/*#__PURE__*/
_asyncToGenerator(
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var res, data;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()('https://api.tvmaze.com/search/shows?q=batman');

        case 2:
          res = _context.sent;
          _context.next = 5;
          return res.json();

        case 5:
          data = _context.sent;
          console.log("Show data fetched. Count: ".concat(data.length));
          return _context.abrupt("return", {
            shows: data
          });

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this);
}));
/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map