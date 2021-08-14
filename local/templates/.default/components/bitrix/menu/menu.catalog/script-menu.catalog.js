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
/******/ 	__webpack_require__.p = "/Applications/MAMP/htdocs/profnastil-prod/";
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

    console.log(containerSelector);
    this._containerElement = document.querySelector(containerSelector);
    console.log(this._containerElement);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2svaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vdGVtcGxhdGVzLy5kZWZhdWx0L2NvbXBvbmVudHMvYml0cml4L21lbnUvbWVudS5jYXRhbG9nL3NyYy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vdGVtcGxhdGVzL3Byb2ZuYXN0aWwtcmVkZXNpZ24vc3JjL2pzL2NhdGFsb2ctZHJvcGRvd24vY2F0YWxvZy1kcm9wZG93bi5qcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJDYXRhbG9nRHJvcGRvd24iLCJpbml0IiwiQk9EWV9PVkVSTEFZX0NMQVNTTkFNRSIsImNvbnRhaW5lclNlbGVjdG9yIiwidG9nZ2xlclNlbGVjdG9yIiwib25TaG93Q2FsbGJhY2siLCJvbkhpZGVDYWxsYmFjayIsImNvbnNvbGUiLCJsb2ciLCJfY29udGFpbmVyRWxlbWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJfb3BlbkJ1dHRvbkVsZW1lbnQiLCJfZHJvcGRvd25FbGVtZW50IiwiX29uU2hvd0NhbGxiYWNrIiwiX29uSGlkZUNhbGxiYWNrIiwiX29uU2hvdyIsImJpbmQiLCJfb25IaWRlIiwiYm9keSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImNsaWNrIiwiX3NldEhhbmRsZXJzIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZFOzs7Ozs7Ozs7OztBQ1BBO0FBQ0EsaUJBQWlCLGtCQUFrQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkU7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUFBO0FBQUE7QUFFQUEsUUFBUSxDQUFDQyxnQkFBVCxxQkFBOEMsWUFBTTtBQUNsRCxNQUFJQyxxR0FBSix3REFHRUMsSUFIRjtBQUlELENBTEQsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQSxJQUFNQyxzQkFBc0IsbUJBQTVCOztJQUVxQkYsZTtBQUNuQiwyQkFDRUcsaUJBREYsRUFFRUMsZUFGRixFQUtFO0FBQUEsUUFGQUMsY0FFQSx1RUFGaUIsWUFBTSxDQUFFLENBRXpCO0FBQUEsUUFEQUMsY0FDQSx1RUFEaUIsWUFBTSxDQUFFLENBQ3pCOztBQUFBOztBQUNBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUwsaUJBQVo7QUFDQSxTQUFLTSxpQkFBTCxHQUF5QlgsUUFBUSxDQUFDWSxhQUFULENBQXVCUCxpQkFBdkIsQ0FBekI7QUFDQUksV0FBTyxDQUFDQyxHQUFSLENBQVksS0FBS0MsaUJBQWpCO0FBQ0EsU0FBS0Usa0JBQUwsR0FBMEIsS0FBS0YsaUJBQUwsQ0FBdUJDLGFBQXZCLENBQ3hCTixlQUR3QixDQUExQjtBQUdBLFNBQUtRLGdCQUFMLEdBQXdCLEtBQUtILGlCQUFMLENBQXVCQyxhQUF2Qix3QkFBeEI7QUFHQSxTQUFLRyxlQUFMLEdBQXVCUixjQUF2QjtBQUNBLFNBQUtTLGVBQUwsR0FBdUJSLGNBQXZCO0FBRUEsU0FBS1MsT0FBTCxHQUFlLEtBQUtBLE9BQUwsQ0FBYUMsSUFBYixDQUFrQixJQUFsQixDQUFmO0FBQ0EsU0FBS0MsT0FBTCxHQUFlLEtBQUtBLE9BQUwsQ0FBYUQsSUFBYixDQUFrQixJQUFsQixDQUFmO0FBQ0Q7Ozs7V0FFRCxtQkFBVTtBQUNSbEIsY0FBUSxDQUFDb0IsSUFBVCxDQUFjQyxTQUFkLENBQXdCQyxHQUF4QixDQUE0QmxCLHNCQUE1Qjs7QUFFQSxXQUFLVyxlQUFMO0FBQ0Q7OztXQUVELG1CQUFVO0FBQ1JmLGNBQVEsQ0FBQ29CLElBQVQsQ0FBY0MsU0FBZCxDQUF3QkUsTUFBeEIsQ0FBK0JuQixzQkFBL0I7O0FBRUEsV0FBS1ksZUFBTDtBQUNEOzs7V0FFRCxrQkFBUztBQUNQLFdBQUtILGtCQUFMLENBQXdCVyxLQUF4QjtBQUNEOzs7V0FFRCx3QkFBZTtBQUNiLFdBQUtiLGlCQUFMLENBQXVCVixnQkFBdkIsc0JBQTZELEtBQUtnQixPQUFsRTs7QUFDQSxXQUFLTixpQkFBTCxDQUF1QlYsZ0JBQXZCLHVCQUE4RCxLQUFLa0IsT0FBbkU7QUFDRDs7O1dBRUQsZ0JBQU87QUFDTCxXQUFLTSxZQUFMO0FBRUQiLCJmaWxlIjoibG9jYWwvdGVtcGxhdGVzLy5kZWZhdWx0L2NvbXBvbmVudHMvYml0cml4L21lbnUvbWVudS5jYXRhbG9nL3NjcmlwdC1tZW51LmNhdGFsb2cuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvcHJvZm5hc3RpbC1wcm9kL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3RlbXBsYXRlcy8uZGVmYXVsdC9jb21wb25lbnRzL2JpdHJpeC9tZW51L21lbnUuY2F0YWxvZy9zcmMvanMvYXBwLmpzXCIpO1xuIiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2s7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzcztcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJpbXBvcnQgQ2F0YWxvZ0Ryb3Bkb3duIGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9mbmFzdGlsLXJlZGVzaWduL3NyYy9qcy9jYXRhbG9nLWRyb3Bkb3duL2NhdGFsb2ctZHJvcGRvd25cIjtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihgRE9NQ29udGVudExvYWRlZGAsICgpID0+IHtcbiAgbmV3IENhdGFsb2dEcm9wZG93bihcbiAgICBgLmpzLWNhdGFsb2ctZHJvcGRvd24td3JhcHBlcmAsXG4gICAgYCNkcm9wZG93bk1lbnVCdXR0b25gXG4gICkuaW5pdCgpO1xufSk7XG4iLCJjb25zdCBCT0RZX09WRVJMQVlfQ0xBU1NOQU1FID0gYG1lbnUtaXMtb3BlbmVkYDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2F0YWxvZ0Ryb3Bkb3duIHtcbiAgY29uc3RydWN0b3IoXG4gICAgY29udGFpbmVyU2VsZWN0b3IsXG4gICAgdG9nZ2xlclNlbGVjdG9yLFxuICAgIG9uU2hvd0NhbGxiYWNrID0gKCkgPT4ge30sXG4gICAgb25IaWRlQ2FsbGJhY2sgPSAoKSA9PiB7fVxuICApIHtcbiAgICBjb25zb2xlLmxvZyhjb250YWluZXJTZWxlY3Rvcik7XG4gICAgdGhpcy5fY29udGFpbmVyRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29udGFpbmVyU2VsZWN0b3IpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuX2NvbnRhaW5lckVsZW1lbnQpO1xuICAgIHRoaXMuX29wZW5CdXR0b25FbGVtZW50ID0gdGhpcy5fY29udGFpbmVyRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgdG9nZ2xlclNlbGVjdG9yXG4gICAgKTtcbiAgICB0aGlzLl9kcm9wZG93bkVsZW1lbnQgPSB0aGlzLl9jb250YWluZXJFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgLmpzLWNhdGFsb2ctZHJvcGRvd25gXG4gICAgKTtcbiAgICB0aGlzLl9vblNob3dDYWxsYmFjayA9IG9uU2hvd0NhbGxiYWNrO1xuICAgIHRoaXMuX29uSGlkZUNhbGxiYWNrID0gb25IaWRlQ2FsbGJhY2s7XG5cbiAgICB0aGlzLl9vblNob3cgPSB0aGlzLl9vblNob3cuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9vbkhpZGUgPSB0aGlzLl9vbkhpZGUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIF9vblNob3coKSB7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKEJPRFlfT1ZFUkxBWV9DTEFTU05BTUUpO1xuXG4gICAgdGhpcy5fb25TaG93Q2FsbGJhY2soKTtcbiAgfVxuXG4gIF9vbkhpZGUoKSB7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKEJPRFlfT1ZFUkxBWV9DTEFTU05BTUUpO1xuXG4gICAgdGhpcy5fb25IaWRlQ2FsbGJhY2soKTtcbiAgfVxuXG4gIHRvZ2dsZSgpIHtcbiAgICB0aGlzLl9vcGVuQnV0dG9uRWxlbWVudC5jbGljaygpO1xuICB9XG5cbiAgX3NldEhhbmRsZXJzKCkge1xuICAgIHRoaXMuX2NvbnRhaW5lckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihgc2hvd24uYnMuZHJvcGRvd25gLCB0aGlzLl9vblNob3cpO1xuICAgIHRoaXMuX2NvbnRhaW5lckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihgaGlkZGVuLmJzLmRyb3Bkb3duYCwgdGhpcy5fb25IaWRlKTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5fc2V0SGFuZGxlcnMoKTtcblxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9