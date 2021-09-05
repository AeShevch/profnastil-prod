/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "/Users/aleksandrsevcenko/Sites/localhost/profnastil-prod/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./templates/.default/components/bitrix/menu/menu.catalog/src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./templates/.default/components/bitrix/menu/menu.catalog/src/js/app.js":
/*!******************************************************************************!*\
  !*** ./templates/.default/components/bitrix/menu/menu.catalog/src/js/app.js ***!
  \******************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _profnastil_redesign_src_js_catalog_dropdown_catalog_dropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../profnastil-redesign/src/js/catalog-dropdown/catalog-dropdown */ "./templates/profnastil-redesign/src/js/catalog-dropdown/catalog-dropdown.js");

document.addEventListener("DOMContentLoaded", function () {
  new _profnastil_redesign_src_js_catalog_dropdown_catalog_dropdown__WEBPACK_IMPORTED_MODULE_0__["default"](".js-catalog-dropdown-wrapper", "#dropdownMenuButton").init();
});

/***/ }),

/***/ "./templates/profnastil-redesign/src/js/catalog-dropdown/catalog-dropdown.js":
/*!***********************************************************************************!*\
  !*** ./templates/profnastil-redesign/src/js/catalog-dropdown/catalog-dropdown.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CatalogDropdown; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck/index.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass/index.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);


var BODY_OVERLAY_CLASSNAME = "menu-is-opened";

var CatalogDropdown = /*#__PURE__*/function () {
  function CatalogDropdown(containerSelector, togglerSelector) {
    var onShowCallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
    var onHideCallback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {};

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, CatalogDropdown);

    this._containerElement = document.querySelector(containerSelector);
    this._openButtonElement = this._containerElement.querySelector(togglerSelector);
    this._dropdownElement = this._containerElement.querySelector(".js-catalog-dropdown");
    this._onShowCallback = onShowCallback;
    this._onHideCallback = onHideCallback;
    this._onShow = this._onShow.bind(this);
    this._onHide = this._onHide.bind(this);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(CatalogDropdown, [{
    key: "_onShow",
    value: function _onShow() {
      document.body.classList.add(BODY_OVERLAY_CLASSNAME);

      this._onShowCallback();
    }
  }, {
    key: "_onHide",
    value: function _onHide() {
      document.body.classList.remove(BODY_OVERLAY_CLASSNAME);

      this._onHideCallback();
    }
  }, {
    key: "toggle",
    value: function toggle() {
      this._openButtonElement.click();
    }
  }, {
    key: "_setHandlers",
    value: function _setHandlers() {
      this._containerElement.addEventListener("shown.bs.dropdown", this._onShow);

      this._containerElement.addEventListener("hidden.bs.dropdown", this._onHide);
    }
  }, {
    key: "init",
    value: function init() {
      this._setHandlers();
    }
  }]);

  return CatalogDropdown;
}();



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2svaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vdGVtcGxhdGVzLy5kZWZhdWx0L2NvbXBvbmVudHMvYml0cml4L21lbnUvbWVudS5jYXRhbG9nL3NyYy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vdGVtcGxhdGVzL3Byb2ZuYXN0aWwtcmVkZXNpZ24vc3JjL2pzL2NhdGFsb2ctZHJvcGRvd24vY2F0YWxvZy1kcm9wZG93bi5qcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJDYXRhbG9nRHJvcGRvd24iLCJpbml0IiwiQk9EWV9PVkVSTEFZX0NMQVNTTkFNRSIsImNvbnRhaW5lclNlbGVjdG9yIiwidG9nZ2xlclNlbGVjdG9yIiwib25TaG93Q2FsbGJhY2siLCJvbkhpZGVDYWxsYmFjayIsIl9jb250YWluZXJFbGVtZW50IiwicXVlcnlTZWxlY3RvciIsIl9vcGVuQnV0dG9uRWxlbWVudCIsIl9kcm9wZG93bkVsZW1lbnQiLCJfb25TaG93Q2FsbGJhY2siLCJfb25IaWRlQ2FsbGJhY2siLCJfb25TaG93IiwiYmluZCIsIl9vbkhpZGUiLCJib2R5IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiY2xpY2siLCJfc2V0SGFuZGxlcnMiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkU7Ozs7Ozs7Ozs7O0FDUEE7QUFDQSxpQkFBaUIsa0JBQWtCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2RTs7Ozs7Ozs7Ozs7O0FDakJBO0FBQUE7QUFBQTtBQUVBQSxRQUFRLENBQUNDLGdCQUFULHFCQUE4QyxZQUFNO0FBQ2xELE1BQUlDLHFHQUFKLHdEQUdFQyxJQUhGO0FBSUQsQ0FMRCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBLElBQU1DLHNCQUFzQixtQkFBNUI7O0lBRXFCRixlO0FBQ25CLDJCQUNFRyxpQkFERixFQUVFQyxlQUZGLEVBS0U7QUFBQSxRQUZBQyxjQUVBLHVFQUZpQixZQUFNLENBQUUsQ0FFekI7QUFBQSxRQURBQyxjQUNBLHVFQURpQixZQUFNLENBQUUsQ0FDekI7O0FBQUE7O0FBQ0EsU0FBS0MsaUJBQUwsR0FBeUJULFFBQVEsQ0FBQ1UsYUFBVCxDQUF1QkwsaUJBQXZCLENBQXpCO0FBQ0EsU0FBS00sa0JBQUwsR0FBMEIsS0FBS0YsaUJBQUwsQ0FBdUJDLGFBQXZCLENBQ3hCSixlQUR3QixDQUExQjtBQUdBLFNBQUtNLGdCQUFMLEdBQXdCLEtBQUtILGlCQUFMLENBQXVCQyxhQUF2Qix3QkFBeEI7QUFHQSxTQUFLRyxlQUFMLEdBQXVCTixjQUF2QjtBQUNBLFNBQUtPLGVBQUwsR0FBdUJOLGNBQXZCO0FBRUEsU0FBS08sT0FBTCxHQUFlLEtBQUtBLE9BQUwsQ0FBYUMsSUFBYixDQUFrQixJQUFsQixDQUFmO0FBQ0EsU0FBS0MsT0FBTCxHQUFlLEtBQUtBLE9BQUwsQ0FBYUQsSUFBYixDQUFrQixJQUFsQixDQUFmO0FBQ0Q7Ozs7V0FFRCxtQkFBVTtBQUNSaEIsY0FBUSxDQUFDa0IsSUFBVCxDQUFjQyxTQUFkLENBQXdCQyxHQUF4QixDQUE0QmhCLHNCQUE1Qjs7QUFFQSxXQUFLUyxlQUFMO0FBQ0Q7OztXQUVELG1CQUFVO0FBQ1JiLGNBQVEsQ0FBQ2tCLElBQVQsQ0FBY0MsU0FBZCxDQUF3QkUsTUFBeEIsQ0FBK0JqQixzQkFBL0I7O0FBRUEsV0FBS1UsZUFBTDtBQUNEOzs7V0FFRCxrQkFBUztBQUNQLFdBQUtILGtCQUFMLENBQXdCVyxLQUF4QjtBQUNEOzs7V0FFRCx3QkFBZTtBQUNiLFdBQUtiLGlCQUFMLENBQXVCUixnQkFBdkIsc0JBQTZELEtBQUtjLE9BQWxFOztBQUNBLFdBQUtOLGlCQUFMLENBQXVCUixnQkFBdkIsdUJBQThELEtBQUtnQixPQUFuRTtBQUNEOzs7V0FFRCxnQkFBTztBQUNMLFdBQUtNLFlBQUw7QUFFRCIsImZpbGUiOiJsb2NhbC90ZW1wbGF0ZXMvLmRlZmF1bHQvY29tcG9uZW50cy9iaXRyaXgvbWVudS9tZW51LmNhdGFsb2cvc2NyaXB0LXZ1ZS1uYXZpZ2F0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvVXNlcnMvYWxla3NhbmRyc2V2Y2Vua28vU2l0ZXMvbG9jYWxob3N0L3Byb2ZuYXN0aWwtcHJvZC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi90ZW1wbGF0ZXMvLmRlZmF1bHQvY29tcG9uZW50cy9iaXRyaXgvbWVudS9tZW51LmNhdGFsb2cvc3JjL2pzL2FwcC5qc1wiKTtcbiIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3M7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiaW1wb3J0IENhdGFsb2dEcm9wZG93biBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvZm5hc3RpbC1yZWRlc2lnbi9zcmMvanMvY2F0YWxvZy1kcm9wZG93bi9jYXRhbG9nLWRyb3Bkb3duXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoYERPTUNvbnRlbnRMb2FkZWRgLCAoKSA9PiB7XG4gIG5ldyBDYXRhbG9nRHJvcGRvd24oXG4gICAgYC5qcy1jYXRhbG9nLWRyb3Bkb3duLXdyYXBwZXJgLFxuICAgIGAjZHJvcGRvd25NZW51QnV0dG9uYFxuICApLmluaXQoKTtcbn0pO1xuIiwiY29uc3QgQk9EWV9PVkVSTEFZX0NMQVNTTkFNRSA9IGBtZW51LWlzLW9wZW5lZGA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhdGFsb2dEcm9wZG93biB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIGNvbnRhaW5lclNlbGVjdG9yLFxuICAgIHRvZ2dsZXJTZWxlY3RvcixcbiAgICBvblNob3dDYWxsYmFjayA9ICgpID0+IHt9LFxuICAgIG9uSGlkZUNhbGxiYWNrID0gKCkgPT4ge31cbiAgKSB7XG4gICAgdGhpcy5fY29udGFpbmVyRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29udGFpbmVyU2VsZWN0b3IpO1xuICAgIHRoaXMuX29wZW5CdXR0b25FbGVtZW50ID0gdGhpcy5fY29udGFpbmVyRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgdG9nZ2xlclNlbGVjdG9yXG4gICAgKTtcbiAgICB0aGlzLl9kcm9wZG93bkVsZW1lbnQgPSB0aGlzLl9jb250YWluZXJFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgLmpzLWNhdGFsb2ctZHJvcGRvd25gXG4gICAgKTtcbiAgICB0aGlzLl9vblNob3dDYWxsYmFjayA9IG9uU2hvd0NhbGxiYWNrO1xuICAgIHRoaXMuX29uSGlkZUNhbGxiYWNrID0gb25IaWRlQ2FsbGJhY2s7XG5cbiAgICB0aGlzLl9vblNob3cgPSB0aGlzLl9vblNob3cuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9vbkhpZGUgPSB0aGlzLl9vbkhpZGUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIF9vblNob3coKSB7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKEJPRFlfT1ZFUkxBWV9DTEFTU05BTUUpO1xuXG4gICAgdGhpcy5fb25TaG93Q2FsbGJhY2soKTtcbiAgfVxuXG4gIF9vbkhpZGUoKSB7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKEJPRFlfT1ZFUkxBWV9DTEFTU05BTUUpO1xuXG4gICAgdGhpcy5fb25IaWRlQ2FsbGJhY2soKTtcbiAgfVxuXG4gIHRvZ2dsZSgpIHtcbiAgICB0aGlzLl9vcGVuQnV0dG9uRWxlbWVudC5jbGljaygpO1xuICB9XG5cbiAgX3NldEhhbmRsZXJzKCkge1xuICAgIHRoaXMuX2NvbnRhaW5lckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihgc2hvd24uYnMuZHJvcGRvd25gLCB0aGlzLl9vblNob3cpO1xuICAgIHRoaXMuX2NvbnRhaW5lckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihgaGlkZGVuLmJzLmRyb3Bkb3duYCwgdGhpcy5fb25IaWRlKTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5fc2V0SGFuZGxlcnMoKTtcblxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9