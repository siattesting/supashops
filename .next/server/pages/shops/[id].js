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
exports.id = "pages/shops/[id]";
exports.ids = ["pages/shops/[id]"];
exports.modules = {

/***/ "./api.js":
/*!****************!*\
  !*** ./api.js ***!
  \****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"supabase\": () => (/* binding */ supabase)\n/* harmony export */ });\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @supabase/supabase-js */ \"@supabase/supabase-js\");\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__);\n\nconst supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__.createClient)(\"https://rlhdfmwlgenbwprhuzzc.supabase.co\", \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJsaGRmbXdsZ2VuYndwcmh1enpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjMxODc5OTAsImV4cCI6MTk3ODc2Mzk5MH0.hfER8NOy6RLctxrN2MSQsJ2Chdl0fbtCm4UA-7R6Jhc\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcGkuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFTyxNQUFNQyxRQUFRLEdBQUdELG1FQUFZLENBQ2xDRSwwQ0FEa0MsRUFFbENBLGtOQUZrQyxDQUE3QiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtYXBwLy4vYXBpLmpzPzg3ZmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ2xpZW50IH0gZnJvbSAnQHN1cGFiYXNlL3N1cGFiYXNlLWpzJztcblxuZXhwb3J0IGNvbnN0IHN1cGFiYXNlID0gY3JlYXRlQ2xpZW50KFxuICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVVBBQkFTRV9VUkwsXG4gIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NVUEFCQVNFX0FOT05fS0VZXG4pO1xuIl0sIm5hbWVzIjpbImNyZWF0ZUNsaWVudCIsInN1cGFiYXNlIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1NVUEFCQVNFX1VSTCIsIk5FWFRfUFVCTElDX1NVUEFCQVNFX0FOT05fS0VZIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./api.js\n");

/***/ }),

/***/ "./pages/shops/[id].js":
/*!*****************************!*\
  !*** ./pages/shops/[id].js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Shop),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-markdown */ \"react-markdown\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api */ \"./api.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/dembadembele/supashops/pages/shops/[id].js\";\n\n\n\n\nfunction Shop({\n  shop\n}) {\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();\n\n  if (router.isFallback) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      children: \"Loading...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 13\n    }, this);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"h1\", {\n      className: \"text-5l mt-4 font-semibold tarcking-wide\",\n      children: shop.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n      className: \"text-sm font-light my-4\",\n      children: [\" by \", shop.user_email]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      className: \"mt-8\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((react_markdown__WEBPACK_IMPORTED_MODULE_1___default()), {\n        className: \"prose\",\n        children: shop.content\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 5\n  }, this);\n}\nasync function getStaticPaths() {\n  const {\n    data,\n    error\n  } = await _api__WEBPACK_IMPORTED_MODULE_2__.supabase.from('shops').select('id');\n  const paths = data.map(shop => ({\n    params: {\n      id: JSON.stringify(shop.id)\n    }\n  }));\n  return {\n    paths,\n    fallback: true\n  };\n}\nasync function getStaticProps({\n  params\n}) {\n  const {\n    id\n  } = params;\n  const {\n    data\n  } = await _api__WEBPACK_IMPORTED_MODULE_2__.supabase.from('shops').select().filter('id', 'eq', id).single();\n  return {\n    props: {\n      shop: data\n    }\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zaG9wcy9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVlLFNBQVNHLElBQVQsQ0FBYztBQUFFQyxFQUFBQTtBQUFGLENBQWQsRUFBd0I7QUFDckMsUUFBTUMsTUFBTSxHQUFHTCxzREFBUyxFQUF4Qjs7QUFDQSxNQUFJSyxNQUFNLENBQUNDLFVBQVgsRUFBdUI7QUFDckIsd0JBQVE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBUjtBQUNEOztBQUVELHNCQUNFO0FBQUEsNEJBQ0U7QUFBSSxlQUFTLEVBQUMsMENBQWQ7QUFBQSxnQkFBMERGLElBQUksQ0FBQ0c7QUFBL0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUU7QUFBRyxlQUFTLEVBQUMseUJBQWI7QUFBQSx5QkFBNENILElBQUksQ0FBQ0ksVUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsZUFHRTtBQUFLLGVBQVMsRUFBQyxNQUFmO0FBQUEsNkJBQ0UsOERBQUMsdURBQUQ7QUFBZSxpQkFBUyxFQUFDLE9BQXpCO0FBQWlDLGdCQUFRLEVBQUVKLElBQUksQ0FBQ0s7QUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVNEO0FBRU0sZUFBZUMsY0FBZixHQUFnQztBQUNyQyxRQUFNO0FBQUVDLElBQUFBLElBQUY7QUFBUUMsSUFBQUE7QUFBUixNQUFrQixNQUFNViwrQ0FBQSxDQUFjLE9BQWQsRUFBdUJZLE1BQXZCLENBQThCLElBQTlCLENBQTlCO0FBRUEsUUFBTUMsS0FBSyxHQUFHSixJQUFJLENBQUNLLEdBQUwsQ0FBU1osSUFBSSxLQUFLO0FBQUVhLElBQUFBLE1BQU0sRUFBRTtBQUFFQyxNQUFBQSxFQUFFLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlaEIsSUFBSSxDQUFDYyxFQUFwQjtBQUFOO0FBQVYsR0FBTCxDQUFiLENBQWQ7QUFDQSxTQUFPO0FBQ0hILElBQUFBLEtBREc7QUFFSE0sSUFBQUEsUUFBUSxFQUFFO0FBRlAsR0FBUDtBQUlEO0FBRU0sZUFBZUMsY0FBZixDQUE4QjtBQUFFTCxFQUFBQTtBQUFGLENBQTlCLEVBQTBDO0FBQy9DLFFBQU07QUFBRUMsSUFBQUE7QUFBRixNQUFTRCxNQUFmO0FBQ0EsUUFBTTtBQUFFTixJQUFBQTtBQUFGLE1BQVcsTUFBTVQsK0NBQUEsQ0FBYyxPQUFkLEVBQXVCWSxNQUF2QixHQUFnQ1MsTUFBaEMsQ0FBdUMsSUFBdkMsRUFBNkMsSUFBN0MsRUFBbURMLEVBQW5ELEVBQXVETSxNQUF2RCxFQUF2QjtBQUVBLFNBQU87QUFDTEMsSUFBQUEsS0FBSyxFQUFFO0FBQ0xyQixNQUFBQSxJQUFJLEVBQUVPO0FBREQ7QUFERixHQUFQO0FBS0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWFwcC8uL3BhZ2VzL3Nob3BzL1tpZF0uanM/Y2U3ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBSZWFjdE1hcmtkb3duIGZyb20gJ3JlYWN0LW1hcmtkb3duJ1xuaW1wb3J0IHsgc3VwYWJhc2UgfSBmcm9tICcuLi8uLi9hcGknXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNob3AoeyBzaG9wIH0pIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgaWYgKHJvdXRlci5pc0ZhbGxiYWNrKSB7XG4gICAgcmV0dXJuICg8ZGl2PkxvYWRpbmcuLi48L2Rpdj4pXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC01bCBtdC00IGZvbnQtc2VtaWJvbGQgdGFyY2tpbmctd2lkZVwiPntzaG9wLnRpdGxlfTwvaDE+XG4gICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbGlnaHQgbXktNFwiPiBieSB7c2hvcC51c2VyX2VtYWlsfTwvcD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtOFwiPlxuICAgICAgICA8UmVhY3RNYXJrZG93biBjbGFzc05hbWU9XCJwcm9zZVwiIGNoaWxkcmVuPXtzaG9wLmNvbnRlbnR9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2UuZnJvbSgnc2hvcHMnKS5zZWxlY3QoJ2lkJylcblxuICBjb25zdCBwYXRocyA9IGRhdGEubWFwKHNob3AgPT4gKHsgcGFyYW1zOiB7IGlkOiBKU09OLnN0cmluZ2lmeShzaG9wLmlkKSB9fSkpXG4gIHJldHVybiB7XG4gICAgICBwYXRocyxcbiAgICAgIGZhbGxiYWNrOiB0cnVlXG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcbiAgY29uc3QgeyBpZCB9ID0gcGFyYW1zXG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgc3VwYWJhc2UuZnJvbSgnc2hvcHMnKS5zZWxlY3QoKS5maWx0ZXIoJ2lkJywgJ2VxJywgaWQpLnNpbmdsZSgpXG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgc2hvcDogZGF0YVxuICAgIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIlJlYWN0TWFya2Rvd24iLCJzdXBhYmFzZSIsIlNob3AiLCJzaG9wIiwicm91dGVyIiwiaXNGYWxsYmFjayIsInRpdGxlIiwidXNlcl9lbWFpbCIsImNvbnRlbnQiLCJnZXRTdGF0aWNQYXRocyIsImRhdGEiLCJlcnJvciIsImZyb20iLCJzZWxlY3QiLCJwYXRocyIsIm1hcCIsInBhcmFtcyIsImlkIiwiSlNPTiIsInN0cmluZ2lmeSIsImZhbGxiYWNrIiwiZ2V0U3RhdGljUHJvcHMiLCJmaWx0ZXIiLCJzaW5nbGUiLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/shops/[id].js\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/shops/[id].js"));
module.exports = __webpack_exports__;

})();