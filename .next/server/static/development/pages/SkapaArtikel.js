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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/components/HeaderUser/HeaderUser.js":
/*!****************************************************!*\
  !*** ./client/components/HeaderUser/HeaderUser.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_components_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styled-components/grid */ "./client/styled-components/grid.js");
/* harmony import */ var _styled_components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styled-components/Header */ "./client/styled-components/Header.js");
/* harmony import */ var _Navbar_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Navbar/Navbar */ "./client/components/Navbar/Navbar.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/nimanikroo/Desktop/vitamino-next/client/components/HeaderUser/HeaderUser.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 //import {NavLink} from 'react-router-dom'


 //import {setHoverLocation} from "../actions";




var HeaderUser =
/*#__PURE__*/
function (_Component) {
  _inherits(HeaderUser, _Component);

  function HeaderUser() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, HeaderUser);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(HeaderUser)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setHoverLocation", function (stuff) {
      console.log('stuff', stuff);
    });

    return _this;
  }

  _createClass(HeaderUser, [{
    key: "render",
    value: function render() {
      //const {setHover} = this.props;
      var setHover = this.setHoverLocation;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled_components_grid__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled_components_grid__WEBPACK_IMPORTED_MODULE_2__["Column"], {
        xs: 12,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      })));
    }
  }]);

  return HeaderUser;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

function mapStateToProps(_ref) {
  var hoverReducer = _ref.hoverReducer;
  return {
    hoverReducer: hoverReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setHover: function setHover(location) {
      return dispatch(setHoverLocation(location));
    }
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(null, null)(HeaderUser));

/***/ }),

/***/ "./client/components/LayoutUser.js":
/*!*****************************************!*\
  !*** ./client/components/LayoutUser.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _HeaderUser_HeaderUser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeaderUser/HeaderUser */ "./client/components/HeaderUser/HeaderUser.js");
/* harmony import */ var _styled_components_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styled-components/grid */ "./client/styled-components/grid.js");
var _jsxFileName = "/Users/nimanikroo/Desktop/vitamino-next/client/components/LayoutUser.js";




var Layout = function Layout(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_HeaderUser_HeaderUser__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled_components_grid__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled_components_grid__WEBPACK_IMPORTED_MODULE_2__["Column"], {
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, props.children)));
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Navbar_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar.less */ "./client/components/Navbar/Navbar.less");
/* harmony import */ var _Navbar_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Navbar_less__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/constants */ "./client/config/constants.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styled_components_UserNav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styled-components/UserNav */ "./client/styled-components/UserNav.js");
var _jsxFileName = "/Users/nimanikroo/Desktop/vitamino-next/client/components/Navbar/Navbar.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







 // create a simple reducer

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    foo: ''
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'FOO':
      return _objectSpread({}, state, {
        foo: action.payload
      });

    default:
      return state;
  }
}; // create a store creator


var makeStore = function makeStore(initialState) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_4__["createStore"])(reducer, initialState);
};

var linkStyle = {
  marginRight: 15
};

var Navbar =
/*#__PURE__*/
function (_Component) {
  _inherits(Navbar, _Component);

  function Navbar() {
    _classCallCheck(this, Navbar);

    return _possibleConstructorReturn(this, _getPrototypeOf(Navbar).apply(this, arguments));
  }

  _createClass(Navbar, [{
    key: "render",
    value: function render() {
      var NavBar = function NavBar(props) {
        return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
          href: "/post?title=".concat(props.title),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          },
          __self: this
        }, props.title));
      };

      var _this$props = this.props,
          foo = _this$props.foo,
          custom = _this$props.custom;
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_styled_components_UserNav__WEBPACK_IMPORTED_MODULE_6__["Nav"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, _config_constants__WEBPACK_IMPORTED_MODULE_2__["USER_TABS"].map(function (tab, index) {
        return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
          key: index,
          href: tab.route,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_styled_components_UserNav__WEBPACK_IMPORTED_MODULE_6__["NavItem"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_styled_components_UserNav__WEBPACK_IMPORTED_MODULE_6__["NavLink"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          },
          __self: this
        }, tab.name)));
      }));
    }
  }]);

  return Navbar;
}(react__WEBPACK_IMPORTED_MODULE_3__["Component"]);

Navbar.getInitialProps = function (_ref) {
  var store = _ref.store,
      isServer = _ref.isServer,
      pathname = _ref.pathname,
      query = _ref.query;
  // component will read from store's state when rendered
  store.dispatch({
    type: 'FOO',
    payload: 'foo'
  });
  console.log('hejfrånnavbar'); // pass some custom props to component from here

  return {
    custom: 'custom'
  };
};

Navbar = next_redux_wrapper__WEBPACK_IMPORTED_MODULE_5___default()(makeStore, function (state) {
  return {
    foo: state.foo
  };
})(Navbar);
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

/***/ "./client/config/constants.js":
/*!************************************!*\
  !*** ./client/config/constants.js ***!
  \************************************/
/*! exports provided: BASE_URL_DEV, BASE_URL_PROD, TABS, USER_TABS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE_URL_DEV", function() { return BASE_URL_DEV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE_URL_PROD", function() { return BASE_URL_PROD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABS", function() { return TABS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_TABS", function() { return USER_TABS; });
var BASE_URL_DEV = 'http://localhost:3000';
var BASE_URL_PROD = 'http://localhost:5000';
var TABS = [{
  name: 'Hem',
  route: '/'
}, {
  name: 'Artiklar',
  route: '/artiklar'
}, {
  name: 'Vitamanus',
  route: 'vitamanus'
}, {
  name: 'Annat',
  route: 'annat'
}];
var USER_TABS = [{
  name: 'Hem',
  route: '/'
}, {
  name: 'Artiklar',
  route: '/artiklar'
}, {
  name: 'Vitamanus',
  route: 'vitamanus'
}, {
  name: 'Annat',
  route: 'annat'
}];

/***/ }),

/***/ "./client/styled-components/Header.js":
/*!********************************************!*\
  !*** ./client/styled-components/Header.js ***!
  \********************************************/
/*! exports provided: HeroBackground, HeroContent, SpinningLogo, Navigation, TextPreview */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroBackground", function() { return HeroBackground; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroContent", function() { return HeroContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinningLogo", function() { return SpinningLogo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Navigation", function() { return Navigation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextPreview", function() { return TextPreview; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_1__);
 //import heroBackground from '../../static/images/hero-background.jpeg';
//import spinningLogo from '../../static/images/spinning-logo.gif';


var HeroBackground = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Header__HeroBackground",
  componentId: "sc-402d0s-0"
})(["background-image:url(", ");background-repeat:", ";background-position:", ";background-size:", ";width:", ";height:", ";position:", ";color:white;filter:blur(0.3px);&:before{content:'';position:absolute;top:0;right:0;bottom:0;left:0;background-image:linear-gradient(to bottom right,rgba(0,0,0,0.31),rgba(255,255,255,0.41));opacity:.6;}"], '../../static/images/hero-background.jpeg', function (props) {
  return props.theme.Hero.backgroundRepeat;
}, function (props) {
  return props.theme.Hero.backgroundPosition;
}, function (props) {
  return props.theme.Hero.backgroundSize;
}, function (props) {
  return props.theme.Hero.width;
}, function (props) {
  return props.theme.Hero.height;
}, function (props) {
  return props.theme.Hero.position;
});
var HeroContent = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Header__HeroContent",
  componentId: "sc-402d0s-1"
})(["position:relative;height:100%;"]);
var SpinningLogo = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Header__SpinningLogo",
  componentId: "sc-402d0s-2"
})(["background-image:url(", ");width:", ";height:", ";background-repeat:", ";background-position:", ";background-size:", ";"], '../../static/images/spinning-logo.gif', function (props) {
  return props.theme.SpinningLogo.width;
}, function (props) {
  return props.theme.SpinningLogo.height;
}, function (props) {
  return props.theme.SpinningLogo.backgroundRepeat;
}, function (props) {
  return props.theme.SpinningLogo.backgroundPosition;
}, function (props) {
  return props.theme.SpinningLogo.backgroundSize;
});
var Navigation = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.ul.withConfig({
  displayName: "Header__Navigation",
  componentId: "sc-402d0s-3"
})(["font-family:'Orbitron',sans-serif;text-align:center;font-size:18px;font-weight:bold;display:flex;list-style:none;flex-direction:row;margin:", ";li{flex:1;display:inline-block;a{color:", ";&.active{color:#ffffff;}}}"], function (props) {
  return props.theme.Navigation.margin;
}, Object(polished__WEBPACK_IMPORTED_MODULE_1__["darken"])(0.3, '#ffffff'));
var TextPreview = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Header__TextPreview",
  componentId: "sc-402d0s-4"
})(["font-family:'Orbitron',sans-serif;text-align:center;font-size:14px;height:100%;padding:20px 7%;max-width:700px;margin:0 auto;color:#b3b3b3;"]);

/***/ }),

/***/ "./client/styled-components/UserNav.js":
/*!*********************************************!*\
  !*** ./client/styled-components/UserNav.js ***!
  \*********************************************/
/*! exports provided: Nav, NavLink, NavLogo, NavItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nav", function() { return Nav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavLink", function() { return NavLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavLogo", function() { return NavLogo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavItem", function() { return NavItem; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
 // export const BoxInner = styled.div`
//     background: lightskyblue;
//     width: 100%;
//     height: 100%;
//     border: 2px solid #9b9797;
//     border-radius: 4px;
//     padding: 20px;
//     ${props => props.alternateColor && css`
//         background: salmon;
//     `};
//     ${props => props.alternatePadding && css`
//         padding: 30px;
//     `};
// `;

var Nav = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.ul.withConfig({
  displayName: "UserNav__Nav",
  componentId: "sc-1l1n07w-0"
})(["list-style-type:none;margin:0;padding:0;overflow:hidden;background-color:#333;"]);
var NavLink = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.a.withConfig({
  displayName: "UserNav__NavLink",
  componentId: "sc-1l1n07w-1"
})(["display:block;color:white;text-align:center;padding:14px 16px;text-decoration:none;:hover{background-color:#111;}", ";"], function (props) {
  return props.active && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["background-color:#4CAF50;"]);
});
var NavLogo = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.a.withConfig({
  displayName: "UserNav__NavLogo",
  componentId: "sc-1l1n07w-2"
})(["font-family:'Hind',sans-serif;font-size:30px;letter-spacing:-2px;text-shadow:1px 1px 2px #c4c4c4;float:left;padding-left:20px;padding-right:40px;margin-right:10px;margin-top:-20px;"]);
var NavItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.li.withConfig({
  displayName: "UserNav__NavItem",
  componentId: "sc-1l1n07w-3"
})(["float:left;"]);

/***/ }),

/***/ "./client/styled-components/grid.js":
/*!******************************************!*\
  !*** ./client/styled-components/grid.js ***!
  \******************************************/
/*! exports provided: Row, Column */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Row", function() { return Row; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Column", function() { return Column; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mediaTemplates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mediaTemplates */ "./client/styled-components/mediaTemplates.js");
function _templateObject3() {
  var data = _taggedTemplateLiteral(["", ";"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["", ";"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["", ";"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var Row = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "grid__Row",
  componentId: "f2texr-0"
})(["", ";", ";&::after{content:'';clear:both;display:table;}"], function (_ref) {
  var height = _ref.height;
  return height && "height: ".concat(height);
}, function (_ref2) {
  var position = _ref2.position;
  return position && "position: ".concat(position);
});

function getWidthString(span) {
  if (!span) return;
  var width = span / 12 * 100;
  return "width: ".concat(width, "%;");
}

var Column = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "grid__Column",
  componentId: "f2texr-1"
})(["float:left;height:100%;", ";", ";", ";", ";", ";"], function (_ref3) {
  var padding = _ref3.padding;
  return padding && "padding: ".concat(padding);
}, function (_ref4) {
  var xs = _ref4.xs;
  return xs ? getWidthString(xs) : 'width: 100%';
}, _mediaTemplates__WEBPACK_IMPORTED_MODULE_1__["default"].sm(_templateObject(), function (_ref5) {
  var sm = _ref5.sm;
  return sm && getWidthString(sm);
}), _mediaTemplates__WEBPACK_IMPORTED_MODULE_1__["default"].md(_templateObject2(), function (_ref6) {
  var md = _ref6.md;
  return md && getWidthString(md);
}), _mediaTemplates__WEBPACK_IMPORTED_MODULE_1__["default"].lg(_templateObject3(), function (_ref7) {
  var lg = _ref7.lg;
  return lg && getWidthString(lg);
}));

/***/ }),

/***/ "./client/styled-components/mediaTemplates.js":
/*!****************************************************!*\
  !*** ./client/styled-components/mediaTemplates.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var sizes = {
  lg: 1200,
  md: 992,
  sm: 768,
  xs: 0
};
/* harmony default export */ __webpack_exports__["default"] = (Object.keys(sizes).reduce(function (acc, label) {
  acc[label] = function () {
    return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["@media (min-width:", "em){", ";}"], sizes[label] / 16, styled_components__WEBPACK_IMPORTED_MODULE_0__["css"].apply(void 0, arguments));
  };

  return acc;
}, {}));

/***/ }),

/***/ "./pages/SkapaArtikel.js":
/*!*******************************!*\
  !*** ./pages/SkapaArtikel.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _client_components_LayoutUser_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../client/components/LayoutUser.js */ "./client/components/LayoutUser.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _client_styled_components_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../client/styled-components/grid */ "./client/styled-components/grid.js");

var _jsxFileName = "/Users/nimanikroo/Desktop/vitamino-next/pages/SkapaArtikel.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var mapStateToProps = function mapStateToProps(state) {
  return state;
};

var SkapaArtikel =
/*#__PURE__*/
function (_Component) {
  _inherits(SkapaArtikel, _Component);

  function SkapaArtikel() {
    _classCallCheck(this, SkapaArtikel);

    return _possibleConstructorReturn(this, _getPrototypeOf(SkapaArtikel).apply(this, arguments));
  }

  _createClass(SkapaArtikel, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      console.log('component update index');
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log('component mount index');
    }
  }, {
    key: "render",
    value: function render() {
      var foo = this.props.foo;
      console.log('length:', foo);
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_client_components_LayoutUser_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        styleId: "2145948527",
        css: "body,html{padding:0 !important;margin:0;height:100%;width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uaW1hbmlrcm9vL0Rlc2t0b3Avdml0YW1pbm8tbmV4dC9wYWdlcy9Ta2FwYUFydGlrZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUNpRCxBQUdrQyxxQkFDWixTQUNHLFlBQ0QsV0FDZiIsImZpbGUiOiIvVXNlcnMvbmltYW5pa3Jvby9EZXNrdG9wL3ZpdGFtaW5vLW5leHQvcGFnZXMvU2thcGFBcnRpa2VsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dFVzZXIgZnJvbSAnLi4vY2xpZW50L2NvbXBvbmVudHMvTGF5b3V0VXNlci5qcyc7XG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5pbXBvcnQge1JvdywgQ29sdW1ufSBmcm9tICcuLi9jbGllbnQvc3R5bGVkLWNvbXBvbmVudHMvZ3JpZCc7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT57XG4gICAgcmV0dXJuIHN0YXRlO1xufTtcblxuY2xhc3MgU2thcGFBcnRpa2VsIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyBzdG9yZSwgaXNTZXJ2ZXIsIHBhdGhuYW1lLCBxdWVyeSB9KSB7XG4gICAgICAgIC8vY29tcG9uZW50IHdpbGwgYmUgYWJsZSB0byByZWFkIGZyb20gc3RvcmUncyBzdGF0ZSB3aGVuIHJlbmRlcmVkXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS50dm1hemUuY29tL3NlYXJjaC9zaG93cz9xPWJhdG1hbicpXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgICBjb25zb2xlLmxvZyhgU2hvdyBkYXRhIGZldGNoZWQuIENvdW50OiAke2RhdGEubGVuZ3RoKjN9YCk7XG4gICAgICAgIHN0b3JlLmRpc3BhdGNoKHsgdHlwZTogXCJGT09cIiwgcGF5bG9hZDogZGF0YS5sZW5ndGgqMiB9KTtcblxuICAgICAgICByZXR1cm4geyBjdXN0b206IFwiY3VzdG9tXCIgfTsgLy8geW91IGNhbiBwYXNzIHNvbWUgY3VzdG9tIHByb3BzIHRvIGNvbXBvbmVudCBmcm9tIGhlcmVcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUoKXtcbiAgICAgICAgY29uc29sZS5sb2coJ2NvbXBvbmVudCB1cGRhdGUgaW5kZXgnKVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgICAgIGNvbnNvbGUubG9nKCdjb21wb25lbnQgbW91bnQgaW5kZXgnKVxuICAgIH1cblxuICAgIHJlbmRlcigpe1xuICAgICAgICBjb25zdCB7Zm9vfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnNvbGUubG9nKCdsZW5ndGg6JywgZm9vKVxuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8TGF5b3V0VXNlcj5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PVwidHJ1ZVwiIGdsb2JhbD1cInRydWVcIj57YFxuICAgICAgICBib2R5LGh0bWx7XG4gICAgICAgICAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICA8Q29sdW1uIHBhZGRpbmc9eycyMHB4J30geHM9ezEyfT5cbiAgICAgICAgICAgICAgICAgIHNrYXBhQXJ0aWtlbFxuICAgICAgICAgICAgICAgIDwvQ29sdW1uPlxuICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgIDwvTGF5b3V0VXNlcj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsbnVsbCkoU2thcGFBcnRpa2VsKTtcbiJdfQ== */\n/*@ sourceURL=/Users/nimanikroo/Desktop/vitamino-next/pages/SkapaArtikel.js */",
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_client_styled_components_grid__WEBPACK_IMPORTED_MODULE_6__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_client_styled_components_grid__WEBPACK_IMPORTED_MODULE_6__["Column"], {
        padding: '20px',
        xs: 12,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, "skapaArtikel")));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var store, isServer, pathname, query, res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                store = _ref.store, isServer = _ref.isServer, pathname = _ref.pathname, query = _ref.query;
                _context.next = 3;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()('https://api.tvmaze.com/search/shows?q=batman');

              case 3:
                res = _context.sent;
                _context.next = 6;
                return res.json();

              case 6:
                data = _context.sent;
                console.log("Show data fetched. Count: ".concat(data.length * 3));
                store.dispatch({
                  type: "FOO",
                  payload: data.length * 2
                });
                return _context.abrupt("return", {
                  custom: "custom"
                });

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return SkapaArtikel;
}(react__WEBPACK_IMPORTED_MODULE_3__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, null)(SkapaArtikel));

/***/ }),

/***/ 4:
/*!*************************************!*\
  !*** multi ./pages/SkapaArtikel.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/SkapaArtikel.js */"./pages/SkapaArtikel.js");


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

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "polished":
/*!***************************!*\
  !*** external "polished" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("polished");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

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
//# sourceMappingURL=SkapaArtikel.js.map