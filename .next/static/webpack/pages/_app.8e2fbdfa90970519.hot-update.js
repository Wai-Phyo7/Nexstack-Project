"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/GlobalStyle/GlobalStyle.js":
/*!***********************************************!*\
  !*** ./components/GlobalStyle/GlobalStyle.js ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/react */ \"./node_modules/@emotion/react/dist/emotion-react.browser.esm.js\");\n\n\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nvar _this = undefined;\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n                    * {\\n                        margin: 0;\\n                        padding: 0;\\n                        box-sizing: border-box;\\n                    }\\n\\n                    html {\\n                        height: 100%;\\n                        background-color: #172b4d;\\n                        overflow: hidden; \\n                    }\\n\\n                    body {\\n                        font-family: -apple-system, BlinkMacSystemFont, Segoe UI,\\n                            Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans,\\n                            Droid Sans, Helvetica Neue, sans-serif;\\n                        width: 100%;\\n                        height: 100vh;\\n                        background: linear-gradient(\\n                            90deg,\\n                            #825ee4 0%,\\n                            #e6a355 100%\\n                        );\\n                        background-repeat: no-repeat;\\n                        background-size: 100% 50%;\\n                    }\\n\\n                    .fp-left-container, .snwp-left-container {\\n                        width: 420px;\\n                        height: 350px;\\n                        margin-top: 22%;\\n                        margin-bottom: 5%;\\n                    }\\n\\n                    .snwp-left-container {\\n                        \\n                    }\\n\\n                    .ufp-img {\\n                        width: 100%;\\n                    }\\n\\n                    .fp-right-container {\\n                        box-sizing: border-box;\\n                        background-color: #f3f4f6;\\n                        margin-top: 2.5%;\\n                        margin-bottom: 5%;\\n                        border: 3px solid #f3f4f6;\\n                        border-radius: 10px;\\n                    }\\n\\n                    .logo , .snwp-logo {\\n                        text-align: center;\\n                        margin-top: 100px;\\n                        margin-bottom: 15px;\\n                    }\\n\\n                    .snwp-logo {\\n                        margin-top: 70px;\\n                    }\\n\\n                    .wp-img {\\n                        width: 45px;\\n                    }\\n\\n                    .fp-text {\\n                        display: flex;\\n                        flex-direction: column;\\n                        align-items: center;\\n                        color: #172b4d;\\n                        font-size: 18px;\\n                        margin-bottom: 20px;\\n                    }\\n\\n                    .nw-text {\\n                        font-style: normal;\\n                        font-weight: 300;\\n                        font-size: 14px;\\n                        display: flex;\\n                        flex-direction: column;\\n                        align-items: center;\\n                        color: #01282b;\\n                        margin-bottom: 15px;\\n                    }\\n\\n                    .form-control {\\n                        margin: 20px 20px;\\n                    }\\n\\n                    .form-control label {\\n                        display: block;\\n                        font-size: 14px;\\n                        color: #172b4d;\\n\\n                        /* margin: 10px; */\\n                    }\\n\\n                    .fp-text,\\n                    .nw-text,\\n                    .form-control label {\\n                        user-select: none;\\n                    }\\n\\n                    .form-control input {\\n                        width: 335px;\\n                        height: 40px;\\n                        margin: 10px 0px;\\n                        padding-bottom: 2px;\\n                        font-size: 13px;\\n                        border: 3px solid #ffffff;\\n                        outline: none;\\n                        border-radius: 5px;\\n                        background-color: #ffffff;\\n                    }\\n\\n                    .input-with-icon input[type=\\\"email\\\"] , input[type=\\\"password\\\"] {\\n                        padding-left: 40px;\\n                    }\\n\\n                    .input-with-icon {\\n                        position: relative;\\n                    }\\n\\n                    .input-with-icon .fa-env-icon , .fa-unlock-icon {\\n                        position: absolute;\\n                        left: 0px;\\n                        top: 15px;\\n                        padding-left: 15px;\\n                        font-size: 30px;\\n                        color: #adb5bd;\\n                    }\\n\\n                    .input-with-icon .fa-unlock-icon {\\n                        top: 15px;\\n                        font-size: 28px;\\n                    }\\n\\n                    .btn-reset {\\n                        width: 100%;\\n                        height: 35px;\\n                        border: 2px solid #5e72e4;\\n                        border-radius: 5px;\\n                        background-color: #5e72e4;\\n                        color: #ffffff;\\n                        margin-top: 8px;\\n                        cursor: pointer;\\n                    }\\n\\n                    .rq-new-one,\\n                    .footer-container, .footer-container-snpw {\\n                        text-align: center;\\n                        font-size: 11px;\\n                        color: #172B4D;\\n                    }\\n\\n                    .rq-new-one a,\\n                    .footer-container a, .footer-container-snpw a {\\n                        color: #5e72e4;\\n                        text-decoration: none;\\n                    }\\n\\n                    a:active {\\n                        color: blue;\\n                    }\\n\\n                    .footer-container {\\n                        margin-top: 70px;\\n                        margin-bottom: 40px;\\n                    }\\n\\n                    /* test code*/\\n                    \\n                    \\n                \"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nvar GlobalStyle = function() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_emotion_react__WEBPACK_IMPORTED_MODULE_1__.Global, {\n            styles: (0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.css)(_templateObject())\n        }, void 0, false, {\n            fileName: \"/home/wai/nexstack-app/components/GlobalStyle/GlobalStyle.js\",\n            lineNumber: 8,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false));\n};\n_c = GlobalStyle;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GlobalStyle);\nvar _c;\n$RefreshReg$(_c, \"GlobalStyle\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0dsb2JhbFN0eWxlL0dsb2JhbFN0eWxlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTRDOzs7Ozs7Ozs7Ozs7OztRQVFoQixDQThLWjs7Ozs7OztBQXBMaEIsR0FBSyxDQUFDRSxXQUFXLEdBQUcsUUFDcEIsR0FEMEIsQ0FBQztJQUN2QixNQUFNOzhGQUlHRixrREFBTTtZQUNIRyxNQUFNLEVBQUVGLG1EQUFHOzs7Ozs7O0FBa0wzQixDQUFDO0tBeExLQyxXQUFXO0FBMExqQiwrREFBZUEsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvR2xvYmFsU3R5bGUvR2xvYmFsU3R5bGUuanM/Yjg3NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHbG9iYWwsIGNzcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuXG5jb25zdCBHbG9iYWxTdHlsZSA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgIFxuICAgICAgICA8PlxuICAgICAgICBcbiAgICAgICAgICAgIDxHbG9iYWxcbiAgICAgICAgICAgICAgICBzdHlsZXM9e2Nzc2BcbiAgICAgICAgICAgICAgICAgICAgKiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGh0bWwge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE3MmI0ZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47IFxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBTZWdvZSBVSSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIEZpcmEgU2FucyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBEcm9pZCBTYW5zLCBIZWx2ZXRpY2EgTmV1ZSwgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA5MGRlZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAjODI1ZWU0IDAlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICNlNmEzNTUgMTAwJVxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgNTAlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmZwLWxlZnQtY29udGFpbmVyLCAuc253cC1sZWZ0LWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjIlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNSU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuc253cC1sZWZ0LWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC51ZnAtaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmZwLXJpZ2h0LWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjRmNjtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIuNSU7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1JTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICNmM2Y0ZjY7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmxvZ28gLCAuc253cC1sb2dvIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5zbndwLWxvZ28ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNzBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC53cC1pbWcge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQ1cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuZnAtdGV4dCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzE3MmI0ZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAubnctdGV4dCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMTI4MmI7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmZvcm0tY29udHJvbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDIwcHggMjBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5mb3JtLWNvbnRyb2wgbGFiZWwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzE3MmI0ZDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLyogbWFyZ2luOiAxMHB4OyAqL1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmZwLXRleHQsXG4gICAgICAgICAgICAgICAgICAgIC5udy10ZXh0LFxuICAgICAgICAgICAgICAgICAgICAuZm9ybS1jb250cm9sIGxhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmZvcm0tY29udHJvbCBpbnB1dCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzM1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDJweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICNmZmZmZmY7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5pbnB1dC13aXRoLWljb24gaW5wdXRbdHlwZT1cImVtYWlsXCJdICwgaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNDBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5pbnB1dC13aXRoLWljb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmlucHV0LXdpdGgtaWNvbiAuZmEtZW52LWljb24gLCAuZmEtdW5sb2NrLWljb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNhZGI1YmQ7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuaW5wdXQtd2l0aC1pY29uIC5mYS11bmxvY2staWNvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuYnRuLXJlc2V0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzVlNzJlNDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1ZTcyZTQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5ycS1uZXctb25lLFxuICAgICAgICAgICAgICAgICAgICAuZm9vdGVyLWNvbnRhaW5lciwgLmZvb3Rlci1jb250YWluZXItc25wdyB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzE3MkI0RDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5ycS1uZXctb25lIGEsXG4gICAgICAgICAgICAgICAgICAgIC5mb290ZXItY29udGFpbmVyIGEsIC5mb290ZXItY29udGFpbmVyLXNucHcgYSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzVlNzJlNDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGE6YWN0aXZlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmZvb3Rlci1jb250YWluZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNzBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvKiB0ZXN0IGNvZGUqL1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHbG9iYWxTdHlsZTtcbiJdLCJuYW1lcyI6WyJHbG9iYWwiLCJjc3MiLCJHbG9iYWxTdHlsZSIsInN0eWxlcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/GlobalStyle/GlobalStyle.js\n");

/***/ })

});