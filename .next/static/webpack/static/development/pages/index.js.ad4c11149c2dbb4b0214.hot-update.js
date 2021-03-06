webpackHotUpdate("static/development/pages/index.js",{

/***/ "./client/components/Header.js":
/*!*************************************!*\
  !*** ./client/components/Header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Navbar_Navbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Navbar/Navbar */ "./client/components/Navbar/Navbar.js");
var _jsxFileName = "/Users/nimanikroo/Desktop/vitamino-next/client/components/Header.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var linkStyle = {
  marginRight: 15
};

var mapStateToProps = function mapStateToProps(state) {
  return state;
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    test: function test() {
      return dispatch({
        type: "FOO",
        payload: 'blabla'
      });
    }
  };
};

var Header =
/*#__PURE__*/
function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, _getPrototypeOf(Header).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log(this.props);
      console.log('component header mount');
      this.props.test();
    }
  }, {
    key: "render",
    value: function render() {
      console.log(this.props);
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-3047285822" + " " + 'header-wrapper',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-3047285822" + " " + 'background-filter',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3047285822",
        css: "*.jsx-3047285822{box-sizing:border-box;}.header-wrapper.jsx-3047285822{background:url('static/images/space-background.jpg') no-repeat;height:30vh;min-height:350px;position:relative;}.background-filter.jsx-3047285822{z-index:-1;position:absolute;height:100%;width:100%;top:0;background:rgba(0,0,0,0);background:-moz-linear-gradient(top,rgba(0,0,0,0) 0%,rgba(0,0,0,0) 26%,rgba(0,0,0,0.32) 50%,rgba(0,0,0,0.98) 100%);background:-webkit-gradient(left top,left bottom,color-stop(0%,rgba(0,0,0,0)),color-stop(26%,rgba(0,0,0,0)),color-stop(50%,rgba(0,0,0,0.32)),color-stop(100%,rgba(0,0,0,0.98)));background:-webkit-linear-gradient(top,rgba(0,0,0,0) 0%,rgba(0,0,0,0) 26%,rgba(0,0,0,0.32) 50%,rgba(0,0,0,0.98) 100%);background:-o-linear-gradient(top,rgba(0,0,0,0) 0%,rgba(0,0,0,0) 26%,rgba(0,0,0,0.32) 50%,rgba(0,0,0,0.98) 100%);background:-ms-linear-gradient(top,rgba(0,0,0,0) 0%,rgba(0,0,0,0) 26%,rgba(0,0,0,0.32) 50%,rgba(0,0,0,0.98) 100%);background:linear-gradient(to bottom,rgba(0,0,0,0) 0%,rgba(0,0,0,0) 26%,rgba(0,0,0,0.32) 50%,rgba(0,0,0,0.98) 100%);-webkit-filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#000000',endColorstr='#000000',GradientType=0 );filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#000000',endColorstr='#000000',GradientType=0 );}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uaW1hbmlrcm9vL0Rlc2t0b3Avdml0YW1pbm8tbmV4dC9jbGllbnQvY29tcG9uZW50cy9IZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaURxQixBQUcyQyxBQUl5QyxBQU9wRCxXQUNPLFdBWHRCLE9BWWdCLFlBQ0QsV0FDTCxNQUVtQixLQVpiLFlBQ0ssUUFZc0csU0FYckcsa0JBQ3RCLHdGQVc2TCxnTEFDL0Qsc0hBQ0wsaUhBQ0Msa0hBQ0Usb0hBQ0osNE9BQ3hIIiwiZmlsZSI6Ii9Vc2Vycy9uaW1hbmlrcm9vL0Rlc2t0b3Avdml0YW1pbm8tbmV4dC9jbGllbnQvY29tcG9uZW50cy9IZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5pbXBvcnQgTmF2YmFyIGZyb20gJy4vTmF2YmFyL05hdmJhcidcbmNvbnN0IGxpbmtTdHlsZSA9IHtcbiAgICBtYXJnaW5SaWdodDogMTVcbn07XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT57XG4gICAgcmV0dXJuIHN0YXRlO1xufTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PntcbiAgICByZXR1cm4ge1xuICAgICAgICB0ZXN0OiAoKSA9PiBkaXNwYXRjaCh7IHR5cGU6IFwiRk9PXCIsIHBheWxvYWQ6ICdibGFibGEnIH0pXG4gICAgfTtcbn07XG5cblxuY2xhc3MgSGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIHN0YXRpYyBnZXRJbml0aWFsUHJvcHMoeyBzdG9yZSwgaXNTZXJ2ZXIsIHBhdGhuYW1lLCBxdWVyeSB9KSB7XG4gICAgICAgIC8vIGNvbXBvbmVudCB3aWxsIGJlIGFibGUgdG8gcmVhZCBmcm9tIHN0b3JlJ3Mgc3RhdGUgd2hlbiByZW5kZXJlZFxuICAgICAgICAvLyBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zZWFyY2gvc2hvd3M/cT1iYXRtYW4nKVxuICAgICAgICAvLyBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coYFNob3cgZGF0YSBmZXRjaGVkZWRlZGVkLiBDb3VudDogJHtkYXRhLmxlbmd0aH1gKTtcbiAgICAgICAgLy8gc3RvcmUuZGlzcGF0Y2goeyB0eXBlOiBcIkZPT1wiLCBwYXlsb2FkOiAnYmxhYmxhJyB9KTtcblxuICAgICAgICAvLyByZXR1cm4ge1xuICAgICAgICAvLyAgICAgc2hvd3M6IGRhdGFcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyByZXR1cm4geyBjdXN0b206IFwiY3VzdG9tXCIgfTsgLy8geW91IGNhbiBwYXNzIHNvbWUgY3VzdG9tIHByb3BzIHRvIGNvbXBvbmVudCBmcm9tIGhlcmVcbiAgICAgICAgY29uc29sZS5sb2coJ2dldCBpbml0YWwgaGVhZGVyIHByb3BzJylcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzKVxuICAgICAgICBjb25zb2xlLmxvZygnY29tcG9uZW50IGhlYWRlciBtb3VudCcpXG4gICAgICAgIHRoaXMucHJvcHMudGVzdCgpXG4gICAgfVxuXG4gICAgcmVuZGVyKCl7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMpXG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnaGVhZGVyLXdyYXBwZXInfT5cbiAgICAgICAgICAgICAgICA8TmF2YmFyLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2JhY2tncm91bmQtZmlsdGVyJ30vPlxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgKiB7XG4gICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmhlYWRlci13cmFwcGVye1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJ3N0YXRpYy9pbWFnZXMvc3BhY2UtYmFja2dyb3VuZC5qcGcnKSBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzB2aDtcbiAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogMzUwcHg7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuYmFja2dyb3VuZC1maWx0ZXJ7XG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogMDtcblxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDApO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoMCwwLDAsMCkgMCUsIHJnYmEoMCwwLDAsMCkgMjYlLCByZ2JhKDAsMCwwLDAuMzIpIDUwJSwgcmdiYSgwLDAsMCwwLjk4KSAxMDAlKTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGNvbG9yLXN0b3AoMCUsIHJnYmEoMCwwLDAsMCkpLCBjb2xvci1zdG9wKDI2JSwgcmdiYSgwLDAsMCwwKSksIGNvbG9yLXN0b3AoNTAlLCByZ2JhKDAsMCwwLDAuMzIpKSwgY29sb3Itc3RvcCgxMDAlLCByZ2JhKDAsMCwwLDAuOTgpKSk7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgwLDAsMCwwKSAwJSwgcmdiYSgwLDAsMCwwKSAyNiUsIHJnYmEoMCwwLDAsMC4zMikgNTAlLCByZ2JhKDAsMCwwLDAuOTgpIDEwMCUpO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDAsMCwwLDApIDAlLCByZ2JhKDAsMCwwLDApIDI2JSwgcmdiYSgwLDAsMCwwLjMyKSA1MCUsIHJnYmEoMCwwLDAsMC45OCkgMTAwJSk7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDAsMCwwLDApIDAlLCByZ2JhKDAsMCwwLDApIDI2JSwgcmdiYSgwLDAsMCwwLjMyKSA1MCUsIHJnYmEoMCwwLDAsMC45OCkgMTAwJSk7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMCwwLDAsMCkgMCUsIHJnYmEoMCwwLDAsMCkgMjYlLCByZ2JhKDAsMCwwLDAuMzIpIDUwJSwgcmdiYSgwLDAsMCwwLjk4KSAxMDAlKTtcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyMwMDAwMDAnLCBlbmRDb2xvcnN0cj0nIzAwMDAwMCcsIEdyYWRpZW50VHlwZT0wICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsbWFwRGlzcGF0Y2hUb1Byb3BzKShIZWFkZXIpO1xuIl19 */\n/*@ sourceURL=/Users/nimanikroo/Desktop/vitamino-next/client/components/Header.js */",
        __self: this
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var store = _ref.store,
          isServer = _ref.isServer,
          pathname = _ref.pathname,
          query = _ref.query;
      // component will be able to read from store's state when rendered
      // const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
      // const data = await res.json();
      // console.log(`Show data fetchedededed. Count: ${data.length}`);
      // store.dispatch({ type: "FOO", payload: 'blabla' });
      // return {
      //     shows: data
      // }
      // return { custom: "custom" }; // you can pass some custom props to component from here
      console.log('get inital header props');
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(Header));

/***/ })

})
//# sourceMappingURL=index.js.ad4c11149c2dbb4b0214.hot-update.js.map