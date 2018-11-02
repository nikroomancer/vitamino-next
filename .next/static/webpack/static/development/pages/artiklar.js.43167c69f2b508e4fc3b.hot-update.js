webpackHotUpdate("static/development/pages/artiklar.js",{

/***/ "./client/components/Header.js":
/*!*************************************!*\
  !*** ./client/components/Header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Navbar_Navbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Navbar/Navbar */ "./client/components/Navbar/Navbar.js");

var _jsxFileName = "/Users/nimanikroo/Desktop/vitamino-next/client/components/Header.js";


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






var linkStyle = {
  marginRight: 15
};

var mapStateToProps = function mapStateToProps(state) {
  return state;
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
    }
  }, {
    key: "render",
    value: function render() {
      console.log(this.props);
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "jsx-3047285822" + " " + 'header-wrapper',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "jsx-3047285822" + " " + 'background-filter',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        styleId: "3047285822",
        css: "*.jsx-3047285822{box-sizing:border-box;}.header-wrapper.jsx-3047285822{background:url('static/images/space-background.jpg') no-repeat;height:30vh;min-height:350px;position:relative;}.background-filter.jsx-3047285822{z-index:-1;position:absolute;height:100%;width:100%;top:0;background:rgba(0,0,0,0);background:-moz-linear-gradient(top,rgba(0,0,0,0) 0%,rgba(0,0,0,0) 26%,rgba(0,0,0,0.32) 50%,rgba(0,0,0,0.98) 100%);background:-webkit-gradient(left top,left bottom,color-stop(0%,rgba(0,0,0,0)),color-stop(26%,rgba(0,0,0,0)),color-stop(50%,rgba(0,0,0,0.32)),color-stop(100%,rgba(0,0,0,0.98)));background:-webkit-linear-gradient(top,rgba(0,0,0,0) 0%,rgba(0,0,0,0) 26%,rgba(0,0,0,0.32) 50%,rgba(0,0,0,0.98) 100%);background:-o-linear-gradient(top,rgba(0,0,0,0) 0%,rgba(0,0,0,0) 26%,rgba(0,0,0,0.32) 50%,rgba(0,0,0,0.98) 100%);background:-ms-linear-gradient(top,rgba(0,0,0,0) 0%,rgba(0,0,0,0) 26%,rgba(0,0,0,0.32) 50%,rgba(0,0,0,0.98) 100%);background:linear-gradient(to bottom,rgba(0,0,0,0) 0%,rgba(0,0,0,0) 26%,rgba(0,0,0,0.32) 50%,rgba(0,0,0,0.98) 100%);-webkit-filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#000000',endColorstr='#000000',GradientType=0 );filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#000000',endColorstr='#000000',GradientType=0 );}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uaW1hbmlrcm9vL0Rlc2t0b3Avdml0YW1pbm8tbmV4dC9jbGllbnQvY29tcG9uZW50cy9IZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMENxQixBQUcyQyxBQUl5QyxBQU9wRCxXQUNPLFdBWHRCLE9BWWdCLFlBQ0QsV0FDTCxNQUVtQixLQVpiLFlBQ0ssUUFZc0csU0FYckcsa0JBQ3RCLHdGQVc2TCxnTEFDL0Qsc0hBQ0wsaUhBQ0Msa0hBQ0Usb0hBQ0osNE9BQ3hIIiwiZmlsZSI6Ii9Vc2Vycy9uaW1hbmlrcm9vL0Rlc2t0b3Avdml0YW1pbm8tbmV4dC9jbGllbnQvY29tcG9uZW50cy9IZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5pbXBvcnQgTmF2YmFyIGZyb20gJy4vTmF2YmFyL05hdmJhcidcbmNvbnN0IGxpbmtTdHlsZSA9IHtcbiAgICBtYXJnaW5SaWdodDogMTVcbn07XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT57XG4gICAgcmV0dXJuIHN0YXRlO1xufTtcblxuXG5jbGFzcyBIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IHN0b3JlLCBpc1NlcnZlciwgcGF0aG5hbWUsIHF1ZXJ5IH0pIHtcbiAgICAgICAgLy8gY29tcG9uZW50IHdpbGwgYmUgYWJsZSB0byByZWFkIGZyb20gc3RvcmUncyBzdGF0ZSB3aGVuIHJlbmRlcmVkXG4gICAgICAgIC8vIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS50dm1hemUuY29tL3NlYXJjaC9zaG93cz9xPWJhdG1hbicpXG4gICAgICAgIC8vIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhgU2hvdyBkYXRhIGZldGNoZWRlZGVkZWQuIENvdW50OiAke2RhdGEubGVuZ3RofWApO1xuICAgICAgICAvLyBzdG9yZS5kaXNwYXRjaCh7IHR5cGU6IFwiRk9PXCIsIHBheWxvYWQ6ICdibGFibGEnIH0pO1xuXG4gICAgICAgIC8vIHJldHVybiB7XG4gICAgICAgIC8vICAgICBzaG93czogZGF0YVxuICAgICAgICAvLyB9XG4gICAgICAgIC8vIHJldHVybiB7IGN1c3RvbTogXCJjdXN0b21cIiB9OyAvLyB5b3UgY2FuIHBhc3Mgc29tZSBjdXN0b20gcHJvcHMgdG8gY29tcG9uZW50IGZyb20gaGVyZVxuICAgICAgICBjb25zb2xlLmxvZygnZ2V0IGluaXRhbCBoZWFkZXIgcHJvcHMnKVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMpXG4gICAgICAgIGNvbnNvbGUubG9nKCdjb21wb25lbnQgaGVhZGVyIG1vdW50JylcbiAgICB9XG5cbiAgICByZW5kZXIoKXtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wcm9wcylcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydoZWFkZXItd3JhcHBlcid9PlxuICAgICAgICAgICAgICAgIDxOYXZiYXIvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnYmFja2dyb3VuZC1maWx0ZXInfS8+XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICAqIHtcbiAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuaGVhZGVyLXdyYXBwZXJ7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnc3RhdGljL2ltYWdlcy9zcGFjZS1iYWNrZ3JvdW5kLmpwZycpIG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHZoO1xuICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAzNTBweDtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5iYWNrZ3JvdW5kLWZpbHRlcntcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xuXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMCk7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgwLDAsMCwwKSAwJSwgcmdiYSgwLDAsMCwwKSAyNiUsIHJnYmEoMCwwLDAsMC4zMikgNTAlLCByZ2JhKDAsMCwwLDAuOTgpIDEwMCUpO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgY29sb3Itc3RvcCgwJSwgcmdiYSgwLDAsMCwwKSksIGNvbG9yLXN0b3AoMjYlLCByZ2JhKDAsMCwwLDApKSwgY29sb3Itc3RvcCg1MCUsIHJnYmEoMCwwLDAsMC4zMikpLCBjb2xvci1zdG9wKDEwMCUsIHJnYmEoMCwwLDAsMC45OCkpKTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDAsMCwwLDApIDAlLCByZ2JhKDAsMCwwLDApIDI2JSwgcmdiYSgwLDAsMCwwLjMyKSA1MCUsIHJnYmEoMCwwLDAsMC45OCkgMTAwJSk7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoMCwwLDAsMCkgMCUsIHJnYmEoMCwwLDAsMCkgMjYlLCByZ2JhKDAsMCwwLDAuMzIpIDUwJSwgcmdiYSgwLDAsMCwwLjk4KSAxMDAlKTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoMCwwLDAsMCkgMCUsIHJnYmEoMCwwLDAsMCkgMjYlLCByZ2JhKDAsMCwwLDAuMzIpIDUwJSwgcmdiYSgwLDAsMCwwLjk4KSAxMDAlKTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgwLDAsMCwwKSAwJSwgcmdiYSgwLDAsMCwwKSAyNiUsIHJnYmEoMCwwLDAsMC4zMikgNTAlLCByZ2JhKDAsMCwwLDAuOTgpIDEwMCUpO1xuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nIzAwMDAwMCcsIGVuZENvbG9yc3RyPScjMDAwMDAwJywgR3JhZGllbnRUeXBlPTAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfVxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcyxudWxsKShIZWFkZXIpO1xuIl19 */\n/*@ sourceURL=/Users/nimanikroo/Desktop/vitamino-next/client/components/Header.js */",
        __self: this
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var store, isServer, pathname, query;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                store = _ref.store, isServer = _ref.isServer, pathname = _ref.pathname, query = _ref.query;
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

              case 2:
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

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_3__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, null)(Header));

/***/ })

})
//# sourceMappingURL=artiklar.js.43167c69f2b508e4fc3b.hot-update.js.map