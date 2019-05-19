webpackHotUpdate("static/development/pages/index.js",{

/***/ "../../node_modules/common/src/components/Charts/ChartJPYLine.js":
/*!***************************************************************************************************************!*\
  !*** /Users/jamesclark/Documents/react_project_1v2/node_modules/common/src/components/Charts/ChartJPYLine.js ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "../../node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-chartjs-2 */ "../../node_modules/react-chartjs-2/es/index.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! isomorphic-fetch */ "../../node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_10__);








var _jsxFileName = "/Users/jamesclark/Documents/react_project_1v2/node_modules/common/src/components/Charts/ChartJPYLine.js";


 //current date plus 4 days before

var dateOne = new Date().getDate(); //Current Date

var dateTwo = new Date().getDate() - 1;
var dateThree = new Date().getDate() - 2;
var dateFour = new Date().getDate() - 3;
var dateFive = new Date().getDate() - 4;
var month = new Date().getMonth() + 1; //Current Month

var year = new Date().getFullYear(); //Current Year
//dates formatted for endpoint param

var NOW = year + '-' + month + '-' + dateOne;
var DAY_2 = year + '-' + month + '-' + dateTwo;
var DAY_3 = year + '-' + month + '-' + dateThree;
var DAY_4 = year + '-' + month + '-' + dateFour;
var DAY_5 = year + '-' + month + '-' + dateFive; //api key from http://fixer.io

var API_KEY = 'ca9302a9f734543d577a146054788064';
var ENDPOINT = 'latest';

var ChartJPYLine =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(ChartJPYLine, _Component);

  function ChartJPYLine(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, ChartJPYLine);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(ChartJPYLine).call(this, props));
    _this.state = {
      chartDataLinear: {}
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(ChartJPYLine, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.getChartData();
    }
  }, {
    key: "getChartData",
    value: function getChartData() {
      var _this2 = this;

      // API Calls have a limit of 1000 (based on the subscription free plan from fixer.io)
      _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a.all([fetch("http://data.fixer.io/api/".concat(ENDPOINT, "?access_key=").concat(API_KEY)), fetch("https://api.exchangeratesapi.io/".concat(DAY_2)), fetch("https://api.exchangeratesapi.io/".concat(DAY_3)), fetch("https://api.exchangeratesapi.io/".concat(DAY_4)), fetch("https://api.exchangeratesapi.io/".concat(DAY_5))]).then(function (_ref) {
        var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, 5),
            res1 = _ref2[0],
            res2 = _ref2[1],
            res3 = _ref2[2],
            res4 = _ref2[3],
            res5 = _ref2[4];

        return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a.all([res1.json(), res2.json(), res3.json(), res4.json(), res5.json()]);
      }).then(function (_ref3) {
        var _ref4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref3, 5),
            data1 = _ref4[0],
            data2 = _ref4[1],
            data3 = _ref4[2],
            data4 = _ref4[3],
            data5 = _ref4[4];

        return _this2.setState({
          //Chart data controllers
          chartDataLinear: {
            labels: [DAY_5, DAY_4, DAY_3, DAY_2, NOW],
            datasets: [{
              data: [data5.rates.JPY, data4.rates.JPY, data3.rates.JPY, data2.rates.JPY, data1.rates.JPY],
              backgroundColor: ['rgba(255, 99, 132, 0.0)']
            }]
          }
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "ChartJPYLine",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_9__["Line"], {
        data: this.state.chartDataLinear,
        options: {
          title: {
            display: this.props.displayTitle,
            text: this.props.textTitle,
            fontSize: 25
          },
          legend: {
            display: this.props.displayLegend,
            position: this.props.legendPosition
          },
          color: {}
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }));
    }
  }]);

  return ChartJPYLine;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(ChartJPYLine, "defaultProps", {
  displayTitle: true,
  textTitle: '5 day rates for JPY',
  displayLegend: false,
  legendPosition: 'bottom'
});

/* harmony default export */ __webpack_exports__["default"] = (ChartJPYLine);

/***/ })

})
//# sourceMappingURL=index.js.557fd744ea39a6beed04.hot-update.js.map