webpackHotUpdate("static/development/pages/index.js",{

/***/ "../../node_modules/common/src/containers/SaasThree/UpdateScreen/index.js":
/*!************************************************************************************************************************!*\
  !*** /Users/jamesclark/Documents/react_project_1v2/node_modules/common/src/containers/SaasThree/UpdateScreen/index.js ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "../../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rc_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rc-tabs */ "../../node_modules/rc-tabs/es/index.js");
/* harmony import */ var rc_tabs_lib_TabContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rc-tabs/lib/TabContent */ "../../node_modules/rc-tabs/lib/TabContent.js");
/* harmony import */ var rc_tabs_lib_TabContent__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rc_tabs_lib_TabContent__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rc_tabs_lib_ScrollableInkTabBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rc-tabs/lib/ScrollableInkTabBar */ "../../node_modules/rc-tabs/lib/ScrollableInkTabBar.js");
/* harmony import */ var rc_tabs_lib_ScrollableInkTabBar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rc_tabs_lib_ScrollableInkTabBar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rc_tabs_assets_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rc-tabs/assets/index.css */ "../../node_modules/rc-tabs/assets/index.css");
/* harmony import */ var rc_tabs_assets_index_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rc_tabs_assets_index_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reusecore/src/elements/Box */ "../../node_modules/reusecore/src/elements/Box/index.js");
/* harmony import */ var reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reusecore/src/elements/Text */ "../../node_modules/reusecore/src/elements/Text/index.js");
/* harmony import */ var reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reusecore/src/elements/Heading */ "../../node_modules/reusecore/src/elements/Heading/index.js");
/* harmony import */ var _components_UI_Container__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/UI/Container */ "../../node_modules/common/src/components/UI/Container/index.js");
/* harmony import */ var _components_Charts_ChartCurrentRates__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/Charts/ChartCurrentRates */ "../../node_modules/common/src/components/Charts/ChartCurrentRates.js");
/* harmony import */ var _components_Charts_ChartJPYLine__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../components/Charts/ChartJPYLine */ "../../node_modules/common/src/components/Charts/ChartJPYLine.js");
/* harmony import */ var _components_Charts_ChartJPY__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../components/Charts/ChartJPY */ "../../node_modules/common/src/components/Charts/ChartJPY.js");
/* harmony import */ var _updateScreen_style__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./updateScreen.style */ "../../node_modules/common/src/containers/SaasThree/UpdateScreen/updateScreen.style.js");

var _jsxFileName = "/Users/jamesclark/Documents/react_project_1v2/node_modules/common/src/containers/SaasThree/UpdateScreen/index.js";















var UpdateScreen = function UpdateScreen(_ref) {
  var secTitleWrapper = _ref.secTitleWrapper,
      secText = _ref.secText,
      secHeading = _ref.secHeading;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_updateScreen_style__WEBPACK_IMPORTED_MODULE_14__["default"], {
    id: "screenshot_section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_UI_Container__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, secTitleWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_8__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, secText, {
    content: "Currency Rates",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_9__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, secHeading, {
    content: "Currency rates with actual data",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rc_tabs__WEBPACK_IMPORTED_MODULE_3__["default"], {
    renderTabBar: function renderTabBar() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rc_tabs_lib_ScrollableInkTabBar__WEBPACK_IMPORTED_MODULE_5___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      });
    },
    renderTabContent: function renderTabContent() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rc_tabs_lib_TabContent__WEBPACK_IMPORTED_MODULE_4___default.a, {
        animated: false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      });
    },
    className: "update-screen-tab",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rc_tabs__WEBPACK_IMPORTED_MODULE_3__["TabPane"], {
    tab: "East Asia (Today)",
    key: "1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Charts_ChartCurrentRates__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rc_tabs__WEBPACK_IMPORTED_MODULE_3__["TabPane"], {
    tab: "Japan (Today)",
    key: "2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_UI_Container__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Charts_ChartJPY__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rc_tabs__WEBPACK_IMPORTED_MODULE_3__["TabPane"], {
    tab: "Japan (Past 5 days)",
    key: "3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Charts_ChartJPYLine__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  })))));
};

UpdateScreen.propTypes = {
  secTitleWrapper: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  secText: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  secHeading: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
UpdateScreen.defaultProps = {
  secTitleWrapper: {
    mb: ['60px', '80px']
  },
  secText: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#ff4362',
    mb: '12px'
  },
  secHeading: {
    textAlign: 'center',
    fontSize: ['20px', '24px', '36px', '36px'],
    fontWeight: '700',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0',
    ml: 'auto',
    mr: 'auto',
    lineHeight: '1.12',
    width: '540px',
    maxWidth: '100%'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (UpdateScreen);

/***/ })

})
//# sourceMappingURL=index.js.437e876a93ef857e92a0.hot-update.js.map