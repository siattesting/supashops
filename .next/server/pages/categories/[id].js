"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/categories/[id]";
exports.ids = ["pages/categories/[id]"];
exports.modules = {

/***/ "./api.js":
/*!****************!*\
  !*** ./api.js ***!
  \****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"supabase\": () => (/* binding */ supabase)\n/* harmony export */ });\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @supabase/supabase-js */ \"@supabase/supabase-js\");\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__);\n\nconst supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__.createClient)(\"https://rlhdfmwlgenbwprhuzzc.supabase.co\", \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJsaGRmbXdsZ2VuYndwcmh1enpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjMxODc5OTAsImV4cCI6MTk3ODc2Mzk5MH0.hfER8NOy6RLctxrN2MSQsJ2Chdl0fbtCm4UA-7R6Jhc\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcGkuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFTyxNQUFNQyxRQUFRLEdBQUdELG1FQUFZLENBQ2xDRSwwQ0FEa0MsRUFFbENBLGtOQUZrQyxDQUE3QiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtYXBwLy4vYXBpLmpzPzg3ZmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ2xpZW50IH0gZnJvbSAnQHN1cGFiYXNlL3N1cGFiYXNlLWpzJztcblxuZXhwb3J0IGNvbnN0IHN1cGFiYXNlID0gY3JlYXRlQ2xpZW50KFxuICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVVBBQkFTRV9VUkwsXG4gIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NVUEFCQVNFX0FOT05fS0VZXG4pO1xuIl0sIm5hbWVzIjpbImNyZWF0ZUNsaWVudCIsInN1cGFiYXNlIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1NVUEFCQVNFX1VSTCIsIk5FWFRfUFVCTElDX1NVUEFCQVNFX0FOT05fS0VZIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./api.js\n");

/***/ }),

/***/ "./pages/categories/[id].js":
/*!**********************************!*\
  !*** ./pages/categories/[id].js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-markdown */ \"react-markdown\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api */ \"./api.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/dembadembele/supashops/pages/categories/[id].js\";\n\n\n\n\n\n\nconst Home = ({\n  category\n}) => {\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n\n  if (router.isFallback) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n      children: \"Loading...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 12\n    }, undefined);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"h1\", {\n      className: \"text-5xl mt-4 font-semibold tracking-wide\",\n      children: category.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n      className: \"text-sm font-light my-4\",\n      children: [\"by \", category.id]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n      className: \"mt-8\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((react_markdown__WEBPACK_IMPORTED_MODULE_2___default()), {\n        className: \"prose\",\n        children: category.content\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\nasync function getStaticPaths() {\n  const {\n    data,\n    error\n  } = await _api__WEBPACK_IMPORTED_MODULE_3__.supabase.from(\"categories\").select(\"id\");\n  const paths = data.map(category => ({\n    params: {\n      id: JSON.stringify(category.id)\n    }\n  }));\n  return {\n    paths,\n    fallback: true\n  };\n}\nasync function getStaticProps({\n  params\n}) {\n  const {\n    id\n  } = params;\n  const {\n    data\n  } = await _api__WEBPACK_IMPORTED_MODULE_3__.supabase.from(\"categories\").select().filter(\"id\", \"eq\", id).single();\n  return {\n    props: {\n      category: data\n    }\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYXRlZ29yaWVzL1tpZF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxNQUFNSSxJQUFJLEdBQUcsQ0FBQztBQUFFQyxFQUFBQTtBQUFGLENBQUQsS0FBa0I7QUFDN0IsUUFBTUMsTUFBTSxHQUFHTCxzREFBUyxFQUF4Qjs7QUFDQSxNQUFJSyxNQUFNLENBQUNDLFVBQVgsRUFBdUI7QUFDckIsd0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQVA7QUFDRDs7QUFDRCxzQkFDRTtBQUFBLDRCQUNFO0FBQUksZUFBUyxFQUFDLDJDQUFkO0FBQUEsZ0JBQ0dGLFFBQVEsQ0FBQ0c7QUFEWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBSUU7QUFBRyxlQUFTLEVBQUMseUJBQWI7QUFBQSx3QkFBMkNILFFBQVEsQ0FBQ0ksRUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGLGVBS0U7QUFBSyxlQUFTLEVBQUMsTUFBZjtBQUFBLDZCQUNFLDhEQUFDLHVEQUFEO0FBQWUsaUJBQVMsRUFBQyxPQUF6QjtBQUFpQyxnQkFBUSxFQUFFSixRQUFRLENBQUNLO0FBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBV0QsQ0FoQkQ7O0FBa0JBLGlFQUFlTixJQUFmO0FBRU8sZUFBZU8sY0FBZixHQUFnQztBQUNyQyxRQUFNO0FBQUVDLElBQUFBLElBQUY7QUFBUUMsSUFBQUE7QUFBUixNQUFrQixNQUFNViwrQ0FBQSxDQUFjLFlBQWQsRUFBNEJZLE1BQTVCLENBQW1DLElBQW5DLENBQTlCO0FBRUEsUUFBTUMsS0FBSyxHQUFHSixJQUFJLENBQUNLLEdBQUwsQ0FBVVosUUFBRCxLQUFlO0FBQ3BDYSxJQUFBQSxNQUFNLEVBQUU7QUFBRVQsTUFBQUEsRUFBRSxFQUFFVSxJQUFJLENBQUNDLFNBQUwsQ0FBZWYsUUFBUSxDQUFDSSxFQUF4QjtBQUFOO0FBRDRCLEdBQWYsQ0FBVCxDQUFkO0FBSUEsU0FBTztBQUNMTyxJQUFBQSxLQURLO0FBRUxLLElBQUFBLFFBQVEsRUFBRTtBQUZMLEdBQVA7QUFJRDtBQUVNLGVBQWVDLGNBQWYsQ0FBOEI7QUFBRUosRUFBQUE7QUFBRixDQUE5QixFQUEwQztBQUMvQyxRQUFNO0FBQUVULElBQUFBO0FBQUYsTUFBU1MsTUFBZjtBQUNBLFFBQU07QUFBRU4sSUFBQUE7QUFBRixNQUFXLE1BQU1ULCtDQUFBLENBQ2YsWUFEZSxFQUVwQlksTUFGb0IsR0FHcEJRLE1BSG9CLENBR2IsSUFIYSxFQUdQLElBSE8sRUFHRGQsRUFIQyxFQUlwQmUsTUFKb0IsRUFBdkI7QUFLQSxTQUFPO0FBQ0xDLElBQUFBLEtBQUssRUFBRTtBQUNMcEIsTUFBQUEsUUFBUSxFQUFFTztBQURMO0FBREYsR0FBUDtBQUtEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1hcHAvLi9wYWdlcy9jYXRlZ29yaWVzL1tpZF0uanM/M2JkYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBSZWFjdE1hcmtkb3duIGZyb20gXCJyZWFjdC1tYXJrZG93blwiO1xuaW1wb3J0IHsgc3VwYWJhc2UgfSBmcm9tIFwiLi4vLi4vYXBpXCI7XG5cbmNvbnN0IEhvbWUgPSAoeyBjYXRlZ29yeSB9KSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBpZiAocm91dGVyLmlzRmFsbGJhY2spIHtcbiAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTV4bCBtdC00IGZvbnQtc2VtaWJvbGQgdHJhY2tpbmctd2lkZVwiPlxuICAgICAgICB7Y2F0ZWdvcnkudGl0bGV9XG4gICAgICA8L2gxPlxuICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LWxpZ2h0IG15LTRcIj5ieSB7Y2F0ZWdvcnkuaWR9PC9wPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC04XCI+XG4gICAgICAgIDxSZWFjdE1hcmtkb3duIGNsYXNzTmFtZT1cInByb3NlXCIgY2hpbGRyZW49e2NhdGVnb3J5LmNvbnRlbnR9IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2UuZnJvbShcImNhdGVnb3JpZXNcIikuc2VsZWN0KFwiaWRcIik7XG5cbiAgY29uc3QgcGF0aHMgPSBkYXRhLm1hcCgoY2F0ZWdvcnkpID0+ICh7XG4gICAgcGFyYW1zOiB7IGlkOiBKU09OLnN0cmluZ2lmeShjYXRlZ29yeS5pZCkgfSxcbiAgfSkpO1xuXG4gIHJldHVybiB7XG4gICAgcGF0aHMsXG4gICAgZmFsbGJhY2s6IHRydWUsXG4gIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XG4gIGNvbnN0IHsgaWQgfSA9IHBhcmFtcztcbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgIC5mcm9tKFwiY2F0ZWdvcmllc1wiKVxuICAgIC5zZWxlY3QoKVxuICAgIC5maWx0ZXIoXCJpZFwiLCBcImVxXCIsIGlkKVxuICAgIC5zaW5nbGUoKTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgY2F0ZWdvcnk6IGRhdGEsXG4gICAgfSxcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJvdXRlciIsIlJlYWN0TWFya2Rvd24iLCJzdXBhYmFzZSIsIkhvbWUiLCJjYXRlZ29yeSIsInJvdXRlciIsImlzRmFsbGJhY2siLCJ0aXRsZSIsImlkIiwiY29udGVudCIsImdldFN0YXRpY1BhdGhzIiwiZGF0YSIsImVycm9yIiwiZnJvbSIsInNlbGVjdCIsInBhdGhzIiwibWFwIiwicGFyYW1zIiwiSlNPTiIsInN0cmluZ2lmeSIsImZhbGxiYWNrIiwiZ2V0U3RhdGljUHJvcHMiLCJmaWx0ZXIiLCJzaW5nbGUiLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/categories/[id].js\n");

/***/ }),

/***/ "@supabase/supabase-js":
/*!****************************************!*\
  !*** external "@supabase/supabase-js" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@supabase/supabase-js");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-markdown":
/*!*********************************!*\
  !*** external "react-markdown" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("react-markdown");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/categories/[id].js"));
module.exports = __webpack_exports__;

})();