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
/******/ 	return __webpack_require__(__webpack_require__.s = "./templates/profnastil-redesign/components/bitrix/catalog.smart.filter/profnastil/src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

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

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit/index.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! @babel/runtime/helpers/arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles/index.js");

var iterableToArrayLimit = __webpack_require__(/*! @babel/runtime/helpers/iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit/index.js");

var unsupportedIterableToArray = __webpack_require__(/*! @babel/runtime/helpers/unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray/index.js");

var nonIterableRest = __webpack_require__(/*! @babel/runtime/helpers/nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest/index.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }

  return _typeof(obj);
}

module.exports = _typeof;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray/index.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! @babel/runtime/helpers/arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray/index.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./templates/profnastil-redesign/components/bitrix/catalog.smart.filter/profnastil/src/js/app.js":
/*!*******************************************************************************************************!*\
  !*** ./templates/profnastil-redesign/components/bitrix/catalog.smart.filter/profnastil/src/js/app.js ***!
  \*******************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof/index.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _range_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./range-input */ "./templates/profnastil-redesign/components/bitrix/catalog.smart.filter/profnastil/src/js/range-input.js");


document.addEventListener("DOMContentLoaded", function () {// new RangeInput(`.js-range-filter`).init();
}); // Bitrix scripts

window.JCSmartFilter = function (ajaxURL, viewMode, params) {
  this.ajaxURL = ajaxURL;
  this.form = null;
  this.timer = null;
  this.cacheKey = "";
  this.cache = [];
  this.popups = [];
  this.viewMode = viewMode;

  if (params && params.SEF_SET_FILTER_URL) {
    this.bindUrlToButton("set_filter", params.SEF_SET_FILTER_URL);
    this.sef = true;
  }

  if (params && params.SEF_DEL_FILTER_URL) {
    this.bindUrlToButton("del_filter", params.SEF_DEL_FILTER_URL);
  }
};

JCSmartFilter.prototype.keyup = function (input) {
  if (!!this.timer) {
    clearTimeout(this.timer);
  }

  this.timer = setTimeout(BX.delegate(function () {
    this.reload(input);
  }, this), 500);
};

JCSmartFilter.prototype.click = function (checkbox) {
  if (!!this.timer) {
    clearTimeout(this.timer);
  }

  this.timer = setTimeout(BX.delegate(function () {
    this.reload(checkbox);
  }, this), 500);
};

JCSmartFilter.prototype.reload = function (input) {
  if (this.cacheKey !== "") {
    //Postprone backend query
    if (!!this.timer) {
      clearTimeout(this.timer);
    }

    this.timer = setTimeout(BX.delegate(function () {
      this.reload(input);
    }, this), 1000);
    return;
  }

  this.cacheKey = "|";
  this.position = BX.pos(input, true);
  this.form = BX.findParent(input, {
    tag: "form"
  });

  if (this.form) {
    var values = [];
    values[0] = {
      name: "ajax",
      value: "y"
    };
    this.gatherInputsValues(values, BX.findChildren(this.form, {
      tag: new RegExp("^(input|select)$", "i")
    }, true));

    for (var i = 0; i < values.length; i++) {
      this.cacheKey += values[i].name + ":" + values[i].value + "|";
    }

    if (this.cache[this.cacheKey]) {
      this.curFilterinput = input;
      this.postHandler(this.cache[this.cacheKey], true);
    } else {
      if (this.sef) {
        var set_filter = BX("set_filter");
        set_filter.disabled = true;
      }

      this.curFilterinput = input;
      BX.ajax.loadJSON(this.ajaxURL, this.values2post(values), BX.delegate(this.postHandler, this));
    }
  }
};

JCSmartFilter.prototype.updateItem = function (PID, arItem) {
  if (arItem.PROPERTY_TYPE === "N" || arItem.PRICE) {
    var trackBar = window["trackBar" + PID];
    if (!trackBar && arItem.ENCODED_ID) trackBar = window["trackBar" + arItem.ENCODED_ID];

    if (trackBar && arItem.VALUES) {
      if (arItem.VALUES.MIN) {
        if (arItem.VALUES.MIN.FILTERED_VALUE) trackBar.setMinFilteredValue(arItem.VALUES.MIN.FILTERED_VALUE);else trackBar.setMinFilteredValue(arItem.VALUES.MIN.VALUE);
      }

      if (arItem.VALUES.MAX) {
        if (arItem.VALUES.MAX.FILTERED_VALUE) trackBar.setMaxFilteredValue(arItem.VALUES.MAX.FILTERED_VALUE);else trackBar.setMaxFilteredValue(arItem.VALUES.MAX.VALUE);
      }
    }
  } else if (arItem.VALUES) {
    for (var i in arItem.VALUES) {
      if (arItem.VALUES.hasOwnProperty(i)) {
        var value = arItem.VALUES[i];
        var control = BX(value.CONTROL_ID);

        if (!!control) {
          var label = document.querySelector('[data-role="label_' + value.CONTROL_ID + '"]');

          if (value.DISABLED) {
            if (label) BX.addClass(label, "disabled");else BX.addClass(control.parentNode, "disabled");
          } else {
            if (label) BX.removeClass(label, "disabled");else BX.removeClass(control.parentNode, "disabled");
          }

          if (value.hasOwnProperty("ELEMENT_COUNT")) {
            label = document.querySelector('[data-role="count_' + value.CONTROL_ID + '"]');
            if (label) label.innerHTML = value.ELEMENT_COUNT;
          }
        }
      }
    }
  }
};

JCSmartFilter.prototype.postHandler = function (result, fromCache) {
  var hrefFILTER, url, curProp;
  var modef = BX("modef");
  var modef_num = BX("modef_num");

  if (!!result && !!result.ITEMS) {
    for (var popupId in this.popups) {
      if (this.popups.hasOwnProperty(popupId)) {
        this.popups[popupId].destroy();
      }
    }

    this.popups = [];

    for (var PID in result.ITEMS) {
      if (result.ITEMS.hasOwnProperty(PID)) {
        this.updateItem(PID, result.ITEMS[PID]);
      }
    }

    if (!!modef && !!modef_num) {
      modef_num.innerHTML = result.ELEMENT_COUNT;
      hrefFILTER = BX.findChildren(modef, {
        tag: "A"
      }, true);

      if (result.FILTER_URL && hrefFILTER) {
        hrefFILTER[0].href = BX.util.htmlspecialcharsback(result.FILTER_URL);
      }

      if (result.FILTER_AJAX_URL && result.COMPONENT_CONTAINER_ID) {
        BX.unbindAll(hrefFILTER[0]);
        BX.bind(hrefFILTER[0], "click", function (e) {
          url = BX.util.htmlspecialcharsback(result.FILTER_AJAX_URL);
          BX.ajax.insertToNode(url, result.COMPONENT_CONTAINER_ID);
          return BX.PreventDefault(e);
        });
      }

      if (result.INSTANT_RELOAD && result.COMPONENT_CONTAINER_ID) {
        url = BX.util.htmlspecialcharsback(result.FILTER_AJAX_URL);
        BX.ajax.insertToNode(url, result.COMPONENT_CONTAINER_ID);
      } else {
        if (modef.style.display === "none") {
          modef.style.display = "inline-block";
        }

        if (this.viewMode == "VERTICAL") {
          curProp = BX.findChild(BX.findParent(this.curFilterinput, {
            class: "bx-filter-parameters-box"
          }), {
            class: "bx-filter-container-modef"
          }, true, false);
          curProp.appendChild(modef);
        }

        if (result.SEF_SET_FILTER_URL) {
          this.bindUrlToButton("set_filter", result.SEF_SET_FILTER_URL);
        }
      }
    }
  }

  if (this.sef) {
    var set_filter = BX("set_filter");
    set_filter.disabled = false;
  }

  if (!fromCache && this.cacheKey !== "") {
    this.cache[this.cacheKey] = result;
  }

  this.cacheKey = "";
};

JCSmartFilter.prototype.bindUrlToButton = function (buttonId, url) {
  var button = BX(buttonId);

  if (button) {
    var proxy = function proxy(j, func) {
      return function () {
        return func(j);
      };
    };

    if (button.type == "submit") button.type = "button";
    BX.bind(button, "click", proxy(url, function (url) {
      window.location.href = url;
      return false;
    }));
  }
};

JCSmartFilter.prototype.gatherInputsValues = function (values, elements) {
  if (elements) {
    for (var i = 0; i < elements.length; i++) {
      var el = elements[i];
      if (el.disabled || !el.type) continue;

      switch (el.type.toLowerCase()) {
        case "text":
        case "textarea":
        case "password":
        case "hidden":
        case "select-one":
          if (el.value.length) values[values.length] = {
            name: el.name,
            value: el.value
          };
          break;

        case "radio":
        case "checkbox":
          if (el.checked) values[values.length] = {
            name: el.name,
            value: el.value
          };
          break;

        case "select-multiple":
          for (var j = 0; j < el.options.length; j++) {
            if (el.options[j].selected) values[values.length] = {
              name: el.name,
              value: el.options[j].value
            };
          }

          break;

        default:
          break;
      }
    }
  }
};

JCSmartFilter.prototype.values2post = function (values) {
  var post = [];
  var current = post;
  var i = 0;

  while (i < values.length) {
    var p = values[i].name.indexOf("[");

    if (p == -1) {
      current[values[i].name] = values[i].value;
      current = post;
      i++;
    } else {
      var name = values[i].name.substring(0, p);
      var rest = values[i].name.substring(p + 1);
      if (!current[name]) current[name] = [];
      var pp = rest.indexOf("]");

      if (pp == -1) {
        //Error - not balanced brackets
        current = post;
        i++;
      } else if (pp == 0) {
        //No index specified - so take the next integer
        current = current[name];
        values[i].name = "" + current.length;
      } else {
        //Now index name becomes and name and we go deeper into the array
        current = current[name];
        values[i].name = rest.substring(0, pp) + rest.substring(pp + 1);
      }
    }
  }

  return post;
};

JCSmartFilter.prototype.hideFilterProps = function (element) {
  var obj = element.parentNode,
      filterBlock = obj.querySelector("[data-role='bx_filter_block']"),
      propAngle = obj.querySelector("[data-role='prop_angle']");

  if (BX.hasClass(obj, "bx-active")) {
    new BX.easing({
      duration: 300,
      start: {
        opacity: 1,
        height: filterBlock.offsetHeight
      },
      finish: {
        opacity: 0,
        height: 0
      },
      transition: BX.easing.transitions.quart,
      step: function step(state) {
        filterBlock.style.opacity = state.opacity;
        filterBlock.style.height = state.height + "px";
      },
      complete: function complete() {
        filterBlock.setAttribute("style", "");
        BX.removeClass(obj, "bx-active");
      }
    }).animate();
    BX.addClass(propAngle, "fa-angle-down");
    BX.removeClass(propAngle, "fa-angle-up");
  } else {
    filterBlock.style.display = "block";
    filterBlock.style.opacity = 0;
    filterBlock.style.height = "auto";
    var obj_children_height = filterBlock.offsetHeight;
    filterBlock.style.height = 0;
    new BX.easing({
      duration: 300,
      start: {
        opacity: 0,
        height: 0
      },
      finish: {
        opacity: 1,
        height: obj_children_height
      },
      transition: BX.easing.transitions.quart,
      step: function step(state) {
        filterBlock.style.opacity = state.opacity;
        filterBlock.style.height = state.height + "px";
      },
      complete: function complete() {}
    }).animate();
    BX.addClass(obj, "bx-active");
    BX.removeClass(propAngle, "fa-angle-down");
    BX.addClass(propAngle, "fa-angle-up");
  }
};

JCSmartFilter.prototype.showDropDownPopup = function (element, popupId) {
  var contentNode = element.querySelector('[data-role="dropdownContent"]');
  this.popups["smartFilterDropDown" + popupId] = BX.PopupWindowManager.create("smartFilterDropDown" + popupId, element, {
    autoHide: true,
    offsetLeft: 0,
    offsetTop: 3,
    overlay: false,
    draggable: {
      restrict: true
    },
    closeByEsc: true,
    content: BX.clone(contentNode)
  });
  this.popups["smartFilterDropDown" + popupId].show();
};

JCSmartFilter.prototype.selectDropDownItem = function (element, controlId) {
  this.keyup(BX(controlId));
  var wrapContainer = BX.findParent(BX(controlId), {
    className: "bx-filter-select-container"
  }, false);
  var currentOption = wrapContainer.querySelector('[data-role="currentOption"]');
  currentOption.innerHTML = element.innerHTML;
  BX.PopupWindowManager.getCurrentPopup().close();
};

BX.namespace("BX.Iblock.SmartFilter");

BX.Iblock.SmartFilter = function () {
  /** @param {{
  	leftSlider: string,
  	rightSlider: string,
  	tracker: string,
  	trackerWrap: string,
  	minInputId: string,
  	maxInputId: string,
  	minPrice: float|int|string,
  	maxPrice: float|int|string,
  	curMinPrice: float|int|string,
  	curMaxPrice: float|int|string,
  	fltMinPrice: float|int|string|null,
  	fltMaxPrice: float|int|string|null,
  	precision: int|null,
  	colorUnavailableActive: string,
  	colorAvailableActive: string,
  	colorAvailableInactive: string
  }} arParams
     */
  var SmartFilter = function SmartFilter(arParams) {
    if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(arParams) === "object") {
      this.leftSlider = BX(arParams.leftSlider);
      this.rightSlider = BX(arParams.rightSlider);
      this.tracker = BX(arParams.tracker);
      this.trackerWrap = BX(arParams.trackerWrap);
      this.minInput = BX(arParams.minInputId);
      this.maxInput = BX(arParams.maxInputId);
      this.minPrice = parseFloat(arParams.minPrice);
      this.maxPrice = parseFloat(arParams.maxPrice);
      this.curMinPrice = parseFloat(arParams.curMinPrice);
      this.curMaxPrice = parseFloat(arParams.curMaxPrice);
      this.fltMinPrice = arParams.fltMinPrice ? parseFloat(arParams.fltMinPrice) : parseFloat(arParams.curMinPrice);
      this.fltMaxPrice = arParams.fltMaxPrice ? parseFloat(arParams.fltMaxPrice) : parseFloat(arParams.curMaxPrice);
      this.precision = arParams.precision || 0;
      this.priceDiff = this.maxPrice - this.minPrice;
      this.leftPercent = 0;
      this.rightPercent = 0;
      this.fltMinPercent = 0;
      this.fltMaxPercent = 0;
      this.colorUnavailableActive = BX(arParams.colorUnavailableActive); //gray

      this.colorAvailableActive = BX(arParams.colorAvailableActive); //blue

      this.colorAvailableInactive = BX(arParams.colorAvailableInactive); //light blue

      this.isTouch = false;
      this.init();

      if ("ontouchstart" in document.documentElement) {
        this.isTouch = true;
        BX.bind(this.leftSlider, "touchstart", BX.proxy(function (event) {
          this.onMoveLeftSlider(event);
        }, this));
        BX.bind(this.rightSlider, "touchstart", BX.proxy(function (event) {
          this.onMoveRightSlider(event);
        }, this));
      } else {
        BX.bind(this.leftSlider, "mousedown", BX.proxy(function (event) {
          this.onMoveLeftSlider(event);
        }, this));
        BX.bind(this.rightSlider, "mousedown", BX.proxy(function (event) {
          this.onMoveRightSlider(event);
        }, this));
      }

      BX.bind(this.minInput, "keyup", BX.proxy(function (event) {
        this.onInputChange();
      }, this));
      BX.bind(this.maxInput, "keyup", BX.proxy(function (event) {
        this.onInputChange();
      }, this));
    }
  };

  SmartFilter.prototype.init = function () {
    var priceDiff;

    if (this.curMinPrice > this.minPrice) {
      priceDiff = this.curMinPrice - this.minPrice;
      this.leftPercent = priceDiff * 100 / this.priceDiff;
      this.leftSlider.style.left = this.leftPercent + "%";
      this.colorUnavailableActive.style.left = this.leftPercent + "%";
    }

    this.setMinFilteredValue(this.fltMinPrice);

    if (this.curMaxPrice < this.maxPrice) {
      priceDiff = this.maxPrice - this.curMaxPrice;
      this.rightPercent = priceDiff * 100 / this.priceDiff;
      this.rightSlider.style.right = this.rightPercent + "%";
      this.colorUnavailableActive.style.right = this.rightPercent + "%";
    }

    this.setMaxFilteredValue(this.fltMaxPrice);
  };

  SmartFilter.prototype.setMinFilteredValue = function (fltMinPrice) {
    this.fltMinPrice = parseFloat(fltMinPrice);

    if (this.fltMinPrice >= this.minPrice) {
      var priceDiff = this.fltMinPrice - this.minPrice;
      this.fltMinPercent = priceDiff * 100 / this.priceDiff;

      if (this.colorAvailableActive) {
        if (this.leftPercent > this.fltMinPercent) this.colorAvailableActive.style.left = this.leftPercent + "%";else this.colorAvailableActive.style.left = this.fltMinPercent + "%";
      }

      if (this.colorAvailableInactive) this.colorAvailableInactive.style.left = this.fltMinPercent + "%";
    } else {
      if (this.colorAvailableActive) {
        this.colorAvailableActive.style.left = "0%";
        this.colorAvailableInactive.style.left = "0%";
      }
    }
  };

  SmartFilter.prototype.setMaxFilteredValue = function (fltMaxPrice) {
    this.fltMaxPrice = parseFloat(fltMaxPrice);

    if (this.fltMaxPrice <= this.maxPrice) {
      var priceDiff = this.maxPrice - this.fltMaxPrice;
      this.fltMaxPercent = priceDiff * 100 / this.priceDiff;

      if (this.colorAvailableActive) {
        if (this.rightPercent > this.fltMaxPercent) this.colorAvailableActive.style.right = this.rightPercent + "%";else this.colorAvailableActive.style.right = this.fltMaxPercent + "%";
      }

      if (this.colorAvailableInactive) this.colorAvailableInactive.style.right = this.fltMaxPercent + "%";
    } else {
      if (this.colorAvailableActive) {
        this.colorAvailableActive.style.right = "0%";
        this.colorAvailableInactive.style.right = "0%";
      }
    }
  };

  SmartFilter.prototype.getXCoord = function (elem) {
    var box = elem.getBoundingClientRect();
    var body = document.body;
    var docElem = document.documentElement;
    var scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft;
    var clientLeft = docElem.clientLeft || body.clientLeft || 0;
    var left = box.left + scrollLeft - clientLeft;
    return Math.round(left);
  };

  SmartFilter.prototype.getPageX = function (e) {
    e = e || window.event;
    var pageX = null;

    if (this.isTouch && event.targetTouches[0] != null) {
      pageX = e.targetTouches[0].pageX;
    } else if (e.pageX != null) {
      pageX = e.pageX;
    } else if (e.clientX != null) {
      var html = document.documentElement;
      var body = document.body;
      pageX = e.clientX + (html.scrollLeft || body && body.scrollLeft || 0);
      pageX -= html.clientLeft || 0;
    }

    return pageX;
  };

  SmartFilter.prototype.recountMinPrice = function () {
    var newMinPrice = this.priceDiff * this.leftPercent / 100;
    newMinPrice = (this.minPrice + newMinPrice).toFixed(this.precision);
    if (newMinPrice != this.minPrice) this.minInput.value = newMinPrice;else this.minInput.value = "";
    /** @global JCSmartFilter smartFilter */

    smartFilter.keyup(this.minInput);
  };

  SmartFilter.prototype.recountMaxPrice = function () {
    var newMaxPrice = this.priceDiff * this.rightPercent / 100;
    newMaxPrice = (this.maxPrice - newMaxPrice).toFixed(this.precision);
    if (newMaxPrice != this.maxPrice) this.maxInput.value = newMaxPrice;else this.maxInput.value = "";
    /** @global JCSmartFilter smartFilter */

    smartFilter.keyup(this.maxInput);
  };

  SmartFilter.prototype.onInputChange = function () {
    var priceDiff;

    if (this.minInput.value) {
      var leftInputValue = this.minInput.value;
      if (leftInputValue < this.minPrice) leftInputValue = this.minPrice;
      if (leftInputValue > this.maxPrice) leftInputValue = this.maxPrice;
      priceDiff = leftInputValue - this.minPrice;
      this.leftPercent = priceDiff * 100 / this.priceDiff;
      this.makeLeftSliderMove(false);
    }

    if (this.maxInput.value) {
      var rightInputValue = this.maxInput.value;
      if (rightInputValue < this.minPrice) rightInputValue = this.minPrice;
      if (rightInputValue > this.maxPrice) rightInputValue = this.maxPrice;
      priceDiff = this.maxPrice - rightInputValue;
      this.rightPercent = priceDiff * 100 / this.priceDiff;
      this.makeRightSliderMove(false);
    }
  };

  SmartFilter.prototype.makeLeftSliderMove = function (recountPrice) {
    recountPrice = recountPrice !== false;
    this.leftSlider.style.left = this.leftPercent + "%";
    this.colorUnavailableActive.style.left = this.leftPercent + "%";
    var areBothSlidersMoving = false;

    if (this.leftPercent + this.rightPercent >= 100) {
      areBothSlidersMoving = true;
      this.rightPercent = 100 - this.leftPercent;
      this.rightSlider.style.right = this.rightPercent + "%";
      this.colorUnavailableActive.style.right = this.rightPercent + "%";
    }

    if (this.leftPercent >= this.fltMinPercent && this.leftPercent <= 100 - this.fltMaxPercent) {
      this.colorAvailableActive.style.left = this.leftPercent + "%";

      if (areBothSlidersMoving) {
        this.colorAvailableActive.style.right = 100 - this.leftPercent + "%";
      }
    } else if (this.leftPercent <= this.fltMinPercent) {
      this.colorAvailableActive.style.left = this.fltMinPercent + "%";

      if (areBothSlidersMoving) {
        this.colorAvailableActive.style.right = 100 - this.fltMinPercent + "%";
      }
    } else if (this.leftPercent >= this.fltMaxPercent) {
      this.colorAvailableActive.style.left = 100 - this.fltMaxPercent + "%";

      if (areBothSlidersMoving) {
        this.colorAvailableActive.style.right = this.fltMaxPercent + "%";
      }
    }

    if (recountPrice) {
      this.recountMinPrice();
      if (areBothSlidersMoving) this.recountMaxPrice();
    }
  };

  SmartFilter.prototype.countNewLeft = function (event) {
    var pageX = this.getPageX(event);
    var trackerXCoord = this.getXCoord(this.trackerWrap);
    var rightEdge = this.trackerWrap.offsetWidth;
    var newLeft = pageX - trackerXCoord;
    if (newLeft < 0) newLeft = 0;else if (newLeft > rightEdge) newLeft = rightEdge;
    return newLeft;
  };

  SmartFilter.prototype.onMoveLeftSlider = function (e) {
    if (!this.isTouch) {
      this.leftSlider.ondragstart = function () {
        return false;
      };
    }

    if (!this.isTouch) {
      document.onmousemove = BX.proxy(function (event) {
        this.leftPercent = this.countNewLeft(event) * 100 / this.trackerWrap.offsetWidth;
        this.makeLeftSliderMove();
      }, this);

      document.onmouseup = function () {
        document.onmousemove = document.onmouseup = null;
      };
    } else {
      document.ontouchmove = BX.proxy(function (event) {
        this.leftPercent = this.countNewLeft(event) * 100 / this.trackerWrap.offsetWidth;
        this.makeLeftSliderMove();
      }, this);

      document.ontouchend = function () {
        document.ontouchmove = document.touchend = null;
      };
    }

    return false;
  };

  SmartFilter.prototype.makeRightSliderMove = function (recountPrice) {
    recountPrice = recountPrice !== false;
    this.rightSlider.style.right = this.rightPercent + "%";
    this.colorUnavailableActive.style.right = this.rightPercent + "%";
    var areBothSlidersMoving = false;

    if (this.leftPercent + this.rightPercent >= 100) {
      areBothSlidersMoving = true;
      this.leftPercent = 100 - this.rightPercent;
      this.leftSlider.style.left = this.leftPercent + "%";
      this.colorUnavailableActive.style.left = this.leftPercent + "%";
    }

    if (100 - this.rightPercent >= this.fltMinPercent && this.rightPercent >= this.fltMaxPercent) {
      this.colorAvailableActive.style.right = this.rightPercent + "%";

      if (areBothSlidersMoving) {
        this.colorAvailableActive.style.left = 100 - this.rightPercent + "%";
      }
    } else if (this.rightPercent <= this.fltMaxPercent) {
      this.colorAvailableActive.style.right = this.fltMaxPercent + "%";

      if (areBothSlidersMoving) {
        this.colorAvailableActive.style.left = 100 - this.fltMaxPercent + "%";
      }
    } else if (100 - this.rightPercent <= this.fltMinPercent) {
      this.colorAvailableActive.style.right = 100 - this.fltMinPercent + "%";

      if (areBothSlidersMoving) {
        this.colorAvailableActive.style.left = this.fltMinPercent + "%";
      }
    }

    if (recountPrice) {
      this.recountMaxPrice();
      if (areBothSlidersMoving) this.recountMinPrice();
    }
  };

  SmartFilter.prototype.onMoveRightSlider = function (e) {
    if (!this.isTouch) {
      this.rightSlider.ondragstart = function () {
        return false;
      };
    }

    if (!this.isTouch) {
      document.onmousemove = BX.proxy(function (event) {
        this.rightPercent = 100 - this.countNewLeft(event) * 100 / this.trackerWrap.offsetWidth;
        this.makeRightSliderMove();
      }, this);

      document.onmouseup = function () {
        document.onmousemove = document.onmouseup = null;
      };
    } else {
      document.ontouchmove = BX.proxy(function (event) {
        this.rightPercent = 100 - this.countNewLeft(event) * 100 / this.trackerWrap.offsetWidth;
        this.makeRightSliderMove();
      }, this);

      document.ontouchend = function () {
        document.ontouchmove = document.ontouchend = null;
      };
    }

    return false;
  };

  return SmartFilter;
}();

/***/ }),

/***/ "./templates/profnastil-redesign/components/bitrix/catalog.smart.filter/profnastil/src/js/range-input.js":
/*!***************************************************************************************************************!*\
  !*** ./templates/profnastil-redesign/components/bitrix/catalog.smart.filter/profnastil/src/js/range-input.js ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RangeInput; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray/index.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck/index.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass/index.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'nouislider'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());





var RangeInput = /*#__PURE__*/function () {
  function RangeInput(sliderSelector) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, RangeInput);

    this._containerElement = document.querySelector(sliderSelector);
    this._inputMinElement = this._containerElement.querySelector(".js-range-min");
    this._inputMaxElement = this._containerElement.querySelector(".js-range-max");
    this._sliderElement = this._containerElement.querySelector(".js-range-slider");
    this._minValue = +this._sliderElement.dataset.min;
    this._maxValue = +this._sliderElement.dataset.max;
    this._step = +this._sliderElement.dataset.step;
    this._onSliderChange = this._onSliderChange.bind(this);
    this._onMinChange = this._onMinChange.bind(this);
    this._onMaxChange = this._onMaxChange.bind(this);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(RangeInput, [{
    key: "_onSliderChange",
    value: function _onSliderChange(values) {
      var _values = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(values, 2),
          min = _values[0],
          max = _values[1];

      this._inputMinElement.value = Math.trunc(min);
      this._inputMaxElement.value = Math.trunc(max);
    }
  }, {
    key: "_onMinChange",
    value: function _onMinChange(evt) {
      var value = evt.target.value;

      this._sliderElement.noUiSlider.set([Math.round(value), null]);
    }
  }, {
    key: "_onMaxChange",
    value: function _onMaxChange(evt) {
      var value = evt.target.value;

      this._sliderElement.noUiSlider.set([null, Math.round(value)]);
    }
  }, {
    key: "_setHandlers",
    value: function _setHandlers() {
      this._sliderElement.noUiSlider.on("update", this._onSliderChange);

      this._inputMinElement.addEventListener("change", this._onMinChange);

      this._inputMaxElement.addEventListener("change", this._onMaxChange);
    }
  }, {
    key: "init",
    value: function init() {
      !(function webpackMissingModule() { var e = new Error("Cannot find module 'nouislider'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).create(this._sliderElement, {
        start: [this._minValue, this._maxValue],
        connect: true,
        range: {
          min: this._minValue,
          max: this._maxValue
        },
        step: this._step,
        tooltips: true,
        format: {
          to: function to(value) {
            return Math.trunc(value);
          },
          from: function from(value) {
            return Math.trunc(value);
          }
        }
      });

      this._setHandlers();
    }
  }]);

  return RangeInput;
}();



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhIb2xlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pdGVyYWJsZVRvQXJyYXlMaW1pdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9ub25JdGVyYWJsZVJlc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vdGVtcGxhdGVzL3Byb2ZuYXN0aWwtcmVkZXNpZ24vY29tcG9uZW50cy9iaXRyaXgvY2F0YWxvZy5zbWFydC5maWx0ZXIvcHJvZm5hc3RpbC9zcmMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL3RlbXBsYXRlcy9wcm9mbmFzdGlsLXJlZGVzaWduL2NvbXBvbmVudHMvYml0cml4L2NhdGFsb2cuc21hcnQuZmlsdGVyL3Byb2ZuYXN0aWwvc3JjL2pzL3JhbmdlLWlucHV0LmpzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIndpbmRvdyIsIkpDU21hcnRGaWx0ZXIiLCJhamF4VVJMIiwidmlld01vZGUiLCJwYXJhbXMiLCJmb3JtIiwidGltZXIiLCJjYWNoZUtleSIsImNhY2hlIiwicG9wdXBzIiwiU0VGX1NFVF9GSUxURVJfVVJMIiwiYmluZFVybFRvQnV0dG9uIiwic2VmIiwiU0VGX0RFTF9GSUxURVJfVVJMIiwicHJvdG90eXBlIiwia2V5dXAiLCJpbnB1dCIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJCWCIsImRlbGVnYXRlIiwicmVsb2FkIiwiY2xpY2siLCJjaGVja2JveCIsInBvc2l0aW9uIiwicG9zIiwiZmluZFBhcmVudCIsInRhZyIsInZhbHVlcyIsIm5hbWUiLCJ2YWx1ZSIsImdhdGhlcklucHV0c1ZhbHVlcyIsImZpbmRDaGlsZHJlbiIsIlJlZ0V4cCIsImkiLCJsZW5ndGgiLCJjdXJGaWx0ZXJpbnB1dCIsInBvc3RIYW5kbGVyIiwic2V0X2ZpbHRlciIsImRpc2FibGVkIiwiYWpheCIsImxvYWRKU09OIiwidmFsdWVzMnBvc3QiLCJ1cGRhdGVJdGVtIiwiUElEIiwiYXJJdGVtIiwiUFJPUEVSVFlfVFlQRSIsIlBSSUNFIiwidHJhY2tCYXIiLCJFTkNPREVEX0lEIiwiVkFMVUVTIiwiTUlOIiwiRklMVEVSRURfVkFMVUUiLCJzZXRNaW5GaWx0ZXJlZFZhbHVlIiwiVkFMVUUiLCJNQVgiLCJzZXRNYXhGaWx0ZXJlZFZhbHVlIiwiaGFzT3duUHJvcGVydHkiLCJjb250cm9sIiwiQ09OVFJPTF9JRCIsImxhYmVsIiwicXVlcnlTZWxlY3RvciIsIkRJU0FCTEVEIiwiYWRkQ2xhc3MiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2xhc3MiLCJpbm5lckhUTUwiLCJFTEVNRU5UX0NPVU5UIiwicmVzdWx0IiwiZnJvbUNhY2hlIiwiaHJlZkZJTFRFUiIsInVybCIsImN1clByb3AiLCJtb2RlZiIsIm1vZGVmX251bSIsIklURU1TIiwicG9wdXBJZCIsImRlc3Ryb3kiLCJGSUxURVJfVVJMIiwiaHJlZiIsInV0aWwiLCJodG1sc3BlY2lhbGNoYXJzYmFjayIsIkZJTFRFUl9BSkFYX1VSTCIsIkNPTVBPTkVOVF9DT05UQUlORVJfSUQiLCJ1bmJpbmRBbGwiLCJiaW5kIiwiZSIsImluc2VydFRvTm9kZSIsIlByZXZlbnREZWZhdWx0IiwiSU5TVEFOVF9SRUxPQUQiLCJzdHlsZSIsImRpc3BsYXkiLCJmaW5kQ2hpbGQiLCJjbGFzcyIsImFwcGVuZENoaWxkIiwiYnV0dG9uSWQiLCJidXR0b24iLCJwcm94eSIsImoiLCJmdW5jIiwidHlwZSIsImxvY2F0aW9uIiwiZWxlbWVudHMiLCJlbCIsInRvTG93ZXJDYXNlIiwiY2hlY2tlZCIsIm9wdGlvbnMiLCJzZWxlY3RlZCIsInBvc3QiLCJjdXJyZW50IiwicCIsImluZGV4T2YiLCJzdWJzdHJpbmciLCJyZXN0IiwicHAiLCJoaWRlRmlsdGVyUHJvcHMiLCJlbGVtZW50Iiwib2JqIiwiZmlsdGVyQmxvY2siLCJwcm9wQW5nbGUiLCJoYXNDbGFzcyIsImVhc2luZyIsImR1cmF0aW9uIiwic3RhcnQiLCJvcGFjaXR5IiwiaGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiZmluaXNoIiwidHJhbnNpdGlvbiIsInRyYW5zaXRpb25zIiwicXVhcnQiLCJzdGVwIiwic3RhdGUiLCJjb21wbGV0ZSIsInNldEF0dHJpYnV0ZSIsImFuaW1hdGUiLCJvYmpfY2hpbGRyZW5faGVpZ2h0Iiwic2hvd0Ryb3BEb3duUG9wdXAiLCJjb250ZW50Tm9kZSIsIlBvcHVwV2luZG93TWFuYWdlciIsImNyZWF0ZSIsImF1dG9IaWRlIiwib2Zmc2V0TGVmdCIsIm9mZnNldFRvcCIsIm92ZXJsYXkiLCJkcmFnZ2FibGUiLCJyZXN0cmljdCIsImNsb3NlQnlFc2MiLCJjb250ZW50IiwiY2xvbmUiLCJzaG93Iiwic2VsZWN0RHJvcERvd25JdGVtIiwiY29udHJvbElkIiwid3JhcENvbnRhaW5lciIsImNsYXNzTmFtZSIsImN1cnJlbnRPcHRpb24iLCJnZXRDdXJyZW50UG9wdXAiLCJjbG9zZSIsIm5hbWVzcGFjZSIsIklibG9jayIsIlNtYXJ0RmlsdGVyIiwiYXJQYXJhbXMiLCJsZWZ0U2xpZGVyIiwicmlnaHRTbGlkZXIiLCJ0cmFja2VyIiwidHJhY2tlcldyYXAiLCJtaW5JbnB1dCIsIm1pbklucHV0SWQiLCJtYXhJbnB1dCIsIm1heElucHV0SWQiLCJtaW5QcmljZSIsInBhcnNlRmxvYXQiLCJtYXhQcmljZSIsImN1ck1pblByaWNlIiwiY3VyTWF4UHJpY2UiLCJmbHRNaW5QcmljZSIsImZsdE1heFByaWNlIiwicHJlY2lzaW9uIiwicHJpY2VEaWZmIiwibGVmdFBlcmNlbnQiLCJyaWdodFBlcmNlbnQiLCJmbHRNaW5QZXJjZW50IiwiZmx0TWF4UGVyY2VudCIsImNvbG9yVW5hdmFpbGFibGVBY3RpdmUiLCJjb2xvckF2YWlsYWJsZUFjdGl2ZSIsImNvbG9yQXZhaWxhYmxlSW5hY3RpdmUiLCJpc1RvdWNoIiwiaW5pdCIsImRvY3VtZW50RWxlbWVudCIsImV2ZW50Iiwib25Nb3ZlTGVmdFNsaWRlciIsIm9uTW92ZVJpZ2h0U2xpZGVyIiwib25JbnB1dENoYW5nZSIsImxlZnQiLCJyaWdodCIsImdldFhDb29yZCIsImVsZW0iLCJib3giLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJib2R5IiwiZG9jRWxlbSIsInNjcm9sbExlZnQiLCJwYWdlWE9mZnNldCIsImNsaWVudExlZnQiLCJNYXRoIiwicm91bmQiLCJnZXRQYWdlWCIsInBhZ2VYIiwidGFyZ2V0VG91Y2hlcyIsImNsaWVudFgiLCJodG1sIiwicmVjb3VudE1pblByaWNlIiwibmV3TWluUHJpY2UiLCJ0b0ZpeGVkIiwic21hcnRGaWx0ZXIiLCJyZWNvdW50TWF4UHJpY2UiLCJuZXdNYXhQcmljZSIsImxlZnRJbnB1dFZhbHVlIiwibWFrZUxlZnRTbGlkZXJNb3ZlIiwicmlnaHRJbnB1dFZhbHVlIiwibWFrZVJpZ2h0U2xpZGVyTW92ZSIsInJlY291bnRQcmljZSIsImFyZUJvdGhTbGlkZXJzTW92aW5nIiwiY291bnROZXdMZWZ0IiwidHJhY2tlclhDb29yZCIsInJpZ2h0RWRnZSIsIm9mZnNldFdpZHRoIiwibmV3TGVmdCIsIm9uZHJhZ3N0YXJ0Iiwib25tb3VzZW1vdmUiLCJvbm1vdXNldXAiLCJvbnRvdWNobW92ZSIsIm9udG91Y2hlbmQiLCJ0b3VjaGVuZCIsIlJhbmdlSW5wdXQiLCJzbGlkZXJTZWxlY3RvciIsIl9jb250YWluZXJFbGVtZW50IiwiX2lucHV0TWluRWxlbWVudCIsIl9pbnB1dE1heEVsZW1lbnQiLCJfc2xpZGVyRWxlbWVudCIsIl9taW5WYWx1ZSIsImRhdGFzZXQiLCJtaW4iLCJfbWF4VmFsdWUiLCJtYXgiLCJfc3RlcCIsIl9vblNsaWRlckNoYW5nZSIsIl9vbk1pbkNoYW5nZSIsIl9vbk1heENoYW5nZSIsInRydW5jIiwiZXZ0IiwidGFyZ2V0Iiwibm9VaVNsaWRlciIsInNldCIsIm9uIiwiY29ubmVjdCIsInJhbmdlIiwidG9vbHRpcHMiLCJmb3JtYXQiLCJ0byIsImZyb20iLCJfc2V0SGFuZGxlcnMiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FB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QjtBQVFyQ1ksZ0JBQVEsRUFBRSxJQVIyQjtBQVNyQ0MsY0FBTSxFQUFFO0FBQ05DLFlBQUUsRUFBRSxZQUFDck8sS0FBRDtBQUFBLG1CQUFXOEssSUFBSSxDQUFDNkMsS0FBTCxDQUFXM04sS0FBWCxDQUFYO0FBQUEsV0FERTtBQUVOc08sY0FBSSxFQUFFLGNBQUN0TyxLQUFEO0FBQUEsbUJBQVc4SyxJQUFJLENBQUM2QyxLQUFMLENBQVczTixLQUFYLENBQVg7QUFBQTtBQUZBO0FBVDZCLE9BQXZDOztBQWVBLFdBQUt1TyxZQUFMO0FBQ0QiLCJmaWxlIjoibG9jYWwvdGVtcGxhdGVzL3Byb2ZuYXN0aWwtcmVkZXNpZ24vY29tcG9uZW50cy9iaXRyaXgvY2F0YWxvZy5zbWFydC5maWx0ZXIvcHJvZm5hc3RpbC9zY3JpcHQtbW9kYWwtd3JhcHBlZC1maWx0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvcHJvZm5hc3RpbC1wcm9kL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3RlbXBsYXRlcy9wcm9mbmFzdGlsLXJlZGVzaWduL2NvbXBvbmVudHMvYml0cml4L2NhdGFsb2cuc21hcnQuZmlsdGVyL3Byb2ZuYXN0aWwvc3JjL2pzL2FwcC5qc1wiKTtcbiIsImZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykge1xuICAgIGFycjJbaV0gPSBhcnJbaV07XG4gIH1cblxuICByZXR1cm4gYXJyMjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlMaWtlVG9BcnJheTtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aEhvbGVzO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3M7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkge1xuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjtcbiAgdmFyIF9hcnIgPSBbXTtcbiAgdmFyIF9uID0gdHJ1ZTtcbiAgdmFyIF9kID0gZmFsc2U7XG4gIHZhciBfZSA9IHVuZGVmaW5lZDtcblxuICB0cnkge1xuICAgIGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcbiAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG5cbiAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kID0gdHJ1ZTtcbiAgICBfZSA9IGVycjtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBfYXJyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXlMaW1pdDtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVJlc3Q7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwidmFyIGFycmF5V2l0aEhvbGVzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRoSG9sZXNcIik7XG5cbnZhciBpdGVyYWJsZVRvQXJyYXlMaW1pdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheUxpbWl0XCIpO1xuXG52YXIgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheVwiKTtcblxudmFyIG5vbkl0ZXJhYmxlUmVzdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlUmVzdFwiKTtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7XG4gIHJldHVybiBhcnJheVdpdGhIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBub25JdGVyYWJsZVJlc3QoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc2xpY2VkVG9BcnJheTtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG5cbiAgICBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG5cbiAgICBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwidmFyIGFycmF5TGlrZVRvQXJyYXkgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheUxpa2VUb0FycmF5XCIpO1xuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheTtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJpbXBvcnQgUmFuZ2VJbnB1dCBmcm9tIFwiLi9yYW5nZS1pbnB1dFwiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKGBET01Db250ZW50TG9hZGVkYCwgKCkgPT4ge1xuICAvLyBuZXcgUmFuZ2VJbnB1dChgLmpzLXJhbmdlLWZpbHRlcmApLmluaXQoKTtcbn0pO1xuXG4vLyBCaXRyaXggc2NyaXB0c1xud2luZG93LkpDU21hcnRGaWx0ZXIgPSBmdW5jdGlvbiAoYWpheFVSTCwgdmlld01vZGUsIHBhcmFtcykge1xuICB0aGlzLmFqYXhVUkwgPSBhamF4VVJMO1xuICB0aGlzLmZvcm0gPSBudWxsO1xuICB0aGlzLnRpbWVyID0gbnVsbDtcbiAgdGhpcy5jYWNoZUtleSA9IFwiXCI7XG4gIHRoaXMuY2FjaGUgPSBbXTtcbiAgdGhpcy5wb3B1cHMgPSBbXTtcbiAgdGhpcy52aWV3TW9kZSA9IHZpZXdNb2RlO1xuICBpZiAocGFyYW1zICYmIHBhcmFtcy5TRUZfU0VUX0ZJTFRFUl9VUkwpIHtcbiAgICB0aGlzLmJpbmRVcmxUb0J1dHRvbihcInNldF9maWx0ZXJcIiwgcGFyYW1zLlNFRl9TRVRfRklMVEVSX1VSTCk7XG4gICAgdGhpcy5zZWYgPSB0cnVlO1xuICB9XG4gIGlmIChwYXJhbXMgJiYgcGFyYW1zLlNFRl9ERUxfRklMVEVSX1VSTCkge1xuICAgIHRoaXMuYmluZFVybFRvQnV0dG9uKFwiZGVsX2ZpbHRlclwiLCBwYXJhbXMuU0VGX0RFTF9GSUxURVJfVVJMKTtcbiAgfVxufTtcblxuSkNTbWFydEZpbHRlci5wcm90b3R5cGUua2V5dXAgPSBmdW5jdGlvbiAoaW5wdXQpIHtcbiAgaWYgKCEhdGhpcy50aW1lcikge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKTtcbiAgfVxuICB0aGlzLnRpbWVyID0gc2V0VGltZW91dChcbiAgICBCWC5kZWxlZ2F0ZShmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLnJlbG9hZChpbnB1dCk7XG4gICAgfSwgdGhpcyksXG4gICAgNTAwXG4gICk7XG59O1xuXG5KQ1NtYXJ0RmlsdGVyLnByb3RvdHlwZS5jbGljayA9IGZ1bmN0aW9uIChjaGVja2JveCkge1xuICBpZiAoISF0aGlzLnRpbWVyKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpO1xuICB9XG5cbiAgdGhpcy50aW1lciA9IHNldFRpbWVvdXQoXG4gICAgQlguZGVsZWdhdGUoZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5yZWxvYWQoY2hlY2tib3gpO1xuICAgIH0sIHRoaXMpLFxuICAgIDUwMFxuICApO1xufTtcblxuSkNTbWFydEZpbHRlci5wcm90b3R5cGUucmVsb2FkID0gZnVuY3Rpb24gKGlucHV0KSB7XG4gIGlmICh0aGlzLmNhY2hlS2V5ICE9PSBcIlwiKSB7XG4gICAgLy9Qb3N0cHJvbmUgYmFja2VuZCBxdWVyeVxuICAgIGlmICghIXRoaXMudGltZXIpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKTtcbiAgICB9XG4gICAgdGhpcy50aW1lciA9IHNldFRpbWVvdXQoXG4gICAgICBCWC5kZWxlZ2F0ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucmVsb2FkKGlucHV0KTtcbiAgICAgIH0sIHRoaXMpLFxuICAgICAgMTAwMFxuICAgICk7XG4gICAgcmV0dXJuO1xuICB9XG4gIHRoaXMuY2FjaGVLZXkgPSBcInxcIjtcblxuICB0aGlzLnBvc2l0aW9uID0gQlgucG9zKGlucHV0LCB0cnVlKTtcbiAgdGhpcy5mb3JtID0gQlguZmluZFBhcmVudChpbnB1dCwgeyB0YWc6IFwiZm9ybVwiIH0pO1xuICBpZiAodGhpcy5mb3JtKSB7XG4gICAgdmFyIHZhbHVlcyA9IFtdO1xuICAgIHZhbHVlc1swXSA9IHsgbmFtZTogXCJhamF4XCIsIHZhbHVlOiBcInlcIiB9O1xuICAgIHRoaXMuZ2F0aGVySW5wdXRzVmFsdWVzKFxuICAgICAgdmFsdWVzLFxuICAgICAgQlguZmluZENoaWxkcmVuKFxuICAgICAgICB0aGlzLmZvcm0sXG4gICAgICAgIHsgdGFnOiBuZXcgUmVnRXhwKFwiXihpbnB1dHxzZWxlY3QpJFwiLCBcImlcIikgfSxcbiAgICAgICAgdHJ1ZVxuICAgICAgKVxuICAgICk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZhbHVlcy5sZW5ndGg7IGkrKylcbiAgICAgIHRoaXMuY2FjaGVLZXkgKz0gdmFsdWVzW2ldLm5hbWUgKyBcIjpcIiArIHZhbHVlc1tpXS52YWx1ZSArIFwifFwiO1xuXG4gICAgaWYgKHRoaXMuY2FjaGVbdGhpcy5jYWNoZUtleV0pIHtcbiAgICAgIHRoaXMuY3VyRmlsdGVyaW5wdXQgPSBpbnB1dDtcbiAgICAgIHRoaXMucG9zdEhhbmRsZXIodGhpcy5jYWNoZVt0aGlzLmNhY2hlS2V5XSwgdHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLnNlZikge1xuICAgICAgICB2YXIgc2V0X2ZpbHRlciA9IEJYKFwic2V0X2ZpbHRlclwiKTtcbiAgICAgICAgc2V0X2ZpbHRlci5kaXNhYmxlZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY3VyRmlsdGVyaW5wdXQgPSBpbnB1dDtcbiAgICAgIEJYLmFqYXgubG9hZEpTT04oXG4gICAgICAgIHRoaXMuYWpheFVSTCxcbiAgICAgICAgdGhpcy52YWx1ZXMycG9zdCh2YWx1ZXMpLFxuICAgICAgICBCWC5kZWxlZ2F0ZSh0aGlzLnBvc3RIYW5kbGVyLCB0aGlzKVxuICAgICAgKTtcbiAgICB9XG4gIH1cbn07XG5cbkpDU21hcnRGaWx0ZXIucHJvdG90eXBlLnVwZGF0ZUl0ZW0gPSBmdW5jdGlvbiAoUElELCBhckl0ZW0pIHtcbiAgaWYgKGFySXRlbS5QUk9QRVJUWV9UWVBFID09PSBcIk5cIiB8fCBhckl0ZW0uUFJJQ0UpIHtcbiAgICB2YXIgdHJhY2tCYXIgPSB3aW5kb3dbXCJ0cmFja0JhclwiICsgUElEXTtcbiAgICBpZiAoIXRyYWNrQmFyICYmIGFySXRlbS5FTkNPREVEX0lEKVxuICAgICAgdHJhY2tCYXIgPSB3aW5kb3dbXCJ0cmFja0JhclwiICsgYXJJdGVtLkVOQ09ERURfSURdO1xuXG4gICAgaWYgKHRyYWNrQmFyICYmIGFySXRlbS5WQUxVRVMpIHtcbiAgICAgIGlmIChhckl0ZW0uVkFMVUVTLk1JTikge1xuICAgICAgICBpZiAoYXJJdGVtLlZBTFVFUy5NSU4uRklMVEVSRURfVkFMVUUpXG4gICAgICAgICAgdHJhY2tCYXIuc2V0TWluRmlsdGVyZWRWYWx1ZShhckl0ZW0uVkFMVUVTLk1JTi5GSUxURVJFRF9WQUxVRSk7XG4gICAgICAgIGVsc2UgdHJhY2tCYXIuc2V0TWluRmlsdGVyZWRWYWx1ZShhckl0ZW0uVkFMVUVTLk1JTi5WQUxVRSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChhckl0ZW0uVkFMVUVTLk1BWCkge1xuICAgICAgICBpZiAoYXJJdGVtLlZBTFVFUy5NQVguRklMVEVSRURfVkFMVUUpXG4gICAgICAgICAgdHJhY2tCYXIuc2V0TWF4RmlsdGVyZWRWYWx1ZShhckl0ZW0uVkFMVUVTLk1BWC5GSUxURVJFRF9WQUxVRSk7XG4gICAgICAgIGVsc2UgdHJhY2tCYXIuc2V0TWF4RmlsdGVyZWRWYWx1ZShhckl0ZW0uVkFMVUVTLk1BWC5WQUxVRSk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKGFySXRlbS5WQUxVRVMpIHtcbiAgICBmb3IgKHZhciBpIGluIGFySXRlbS5WQUxVRVMpIHtcbiAgICAgIGlmIChhckl0ZW0uVkFMVUVTLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IGFySXRlbS5WQUxVRVNbaV07XG4gICAgICAgIHZhciBjb250cm9sID0gQlgodmFsdWUuQ09OVFJPTF9JRCk7XG5cbiAgICAgICAgaWYgKCEhY29udHJvbCkge1xuICAgICAgICAgIHZhciBsYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAnW2RhdGEtcm9sZT1cImxhYmVsXycgKyB2YWx1ZS5DT05UUk9MX0lEICsgJ1wiXSdcbiAgICAgICAgICApO1xuICAgICAgICAgIGlmICh2YWx1ZS5ESVNBQkxFRCkge1xuICAgICAgICAgICAgaWYgKGxhYmVsKSBCWC5hZGRDbGFzcyhsYWJlbCwgXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgICAgIGVsc2UgQlguYWRkQ2xhc3MoY29udHJvbC5wYXJlbnROb2RlLCBcImRpc2FibGVkXCIpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAobGFiZWwpIEJYLnJlbW92ZUNsYXNzKGxhYmVsLCBcImRpc2FibGVkXCIpO1xuICAgICAgICAgICAgZWxzZSBCWC5yZW1vdmVDbGFzcyhjb250cm9sLnBhcmVudE5vZGUsIFwiZGlzYWJsZWRcIik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHZhbHVlLmhhc093blByb3BlcnR5KFwiRUxFTUVOVF9DT1VOVFwiKSkge1xuICAgICAgICAgICAgbGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAnW2RhdGEtcm9sZT1cImNvdW50XycgKyB2YWx1ZS5DT05UUk9MX0lEICsgJ1wiXSdcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAobGFiZWwpIGxhYmVsLmlubmVySFRNTCA9IHZhbHVlLkVMRU1FTlRfQ09VTlQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5KQ1NtYXJ0RmlsdGVyLnByb3RvdHlwZS5wb3N0SGFuZGxlciA9IGZ1bmN0aW9uIChyZXN1bHQsIGZyb21DYWNoZSkge1xuICB2YXIgaHJlZkZJTFRFUiwgdXJsLCBjdXJQcm9wO1xuICB2YXIgbW9kZWYgPSBCWChcIm1vZGVmXCIpO1xuICB2YXIgbW9kZWZfbnVtID0gQlgoXCJtb2RlZl9udW1cIik7XG5cbiAgaWYgKCEhcmVzdWx0ICYmICEhcmVzdWx0LklURU1TKSB7XG4gICAgZm9yICh2YXIgcG9wdXBJZCBpbiB0aGlzLnBvcHVwcykge1xuICAgICAgaWYgKHRoaXMucG9wdXBzLmhhc093blByb3BlcnR5KHBvcHVwSWQpKSB7XG4gICAgICAgIHRoaXMucG9wdXBzW3BvcHVwSWRdLmRlc3Ryb3koKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5wb3B1cHMgPSBbXTtcblxuICAgIGZvciAodmFyIFBJRCBpbiByZXN1bHQuSVRFTVMpIHtcbiAgICAgIGlmIChyZXN1bHQuSVRFTVMuaGFzT3duUHJvcGVydHkoUElEKSkge1xuICAgICAgICB0aGlzLnVwZGF0ZUl0ZW0oUElELCByZXN1bHQuSVRFTVNbUElEXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCEhbW9kZWYgJiYgISFtb2RlZl9udW0pIHtcbiAgICAgIG1vZGVmX251bS5pbm5lckhUTUwgPSByZXN1bHQuRUxFTUVOVF9DT1VOVDtcbiAgICAgIGhyZWZGSUxURVIgPSBCWC5maW5kQ2hpbGRyZW4obW9kZWYsIHsgdGFnOiBcIkFcIiB9LCB0cnVlKTtcblxuICAgICAgaWYgKHJlc3VsdC5GSUxURVJfVVJMICYmIGhyZWZGSUxURVIpIHtcbiAgICAgICAgaHJlZkZJTFRFUlswXS5ocmVmID0gQlgudXRpbC5odG1sc3BlY2lhbGNoYXJzYmFjayhyZXN1bHQuRklMVEVSX1VSTCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZXN1bHQuRklMVEVSX0FKQVhfVVJMICYmIHJlc3VsdC5DT01QT05FTlRfQ09OVEFJTkVSX0lEKSB7XG4gICAgICAgIEJYLnVuYmluZEFsbChocmVmRklMVEVSWzBdKTtcbiAgICAgICAgQlguYmluZChocmVmRklMVEVSWzBdLCBcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgdXJsID0gQlgudXRpbC5odG1sc3BlY2lhbGNoYXJzYmFjayhyZXN1bHQuRklMVEVSX0FKQVhfVVJMKTtcbiAgICAgICAgICBCWC5hamF4Lmluc2VydFRvTm9kZSh1cmwsIHJlc3VsdC5DT01QT05FTlRfQ09OVEFJTkVSX0lEKTtcbiAgICAgICAgICByZXR1cm4gQlguUHJldmVudERlZmF1bHQoZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVzdWx0LklOU1RBTlRfUkVMT0FEICYmIHJlc3VsdC5DT01QT05FTlRfQ09OVEFJTkVSX0lEKSB7XG4gICAgICAgIHVybCA9IEJYLnV0aWwuaHRtbHNwZWNpYWxjaGFyc2JhY2socmVzdWx0LkZJTFRFUl9BSkFYX1VSTCk7XG4gICAgICAgIEJYLmFqYXguaW5zZXJ0VG9Ob2RlKHVybCwgcmVzdWx0LkNPTVBPTkVOVF9DT05UQUlORVJfSUQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKG1vZGVmLnN0eWxlLmRpc3BsYXkgPT09IFwibm9uZVwiKSB7XG4gICAgICAgICAgbW9kZWYuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy52aWV3TW9kZSA9PSBcIlZFUlRJQ0FMXCIpIHtcbiAgICAgICAgICBjdXJQcm9wID0gQlguZmluZENoaWxkKFxuICAgICAgICAgICAgQlguZmluZFBhcmVudCh0aGlzLmN1ckZpbHRlcmlucHV0LCB7XG4gICAgICAgICAgICAgIGNsYXNzOiBcImJ4LWZpbHRlci1wYXJhbWV0ZXJzLWJveFwiLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICB7IGNsYXNzOiBcImJ4LWZpbHRlci1jb250YWluZXItbW9kZWZcIiB9LFxuICAgICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgKTtcbiAgICAgICAgICBjdXJQcm9wLmFwcGVuZENoaWxkKG1vZGVmKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZXN1bHQuU0VGX1NFVF9GSUxURVJfVVJMKSB7XG4gICAgICAgICAgdGhpcy5iaW5kVXJsVG9CdXR0b24oXCJzZXRfZmlsdGVyXCIsIHJlc3VsdC5TRUZfU0VUX0ZJTFRFUl9VUkwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKHRoaXMuc2VmKSB7XG4gICAgdmFyIHNldF9maWx0ZXIgPSBCWChcInNldF9maWx0ZXJcIik7XG4gICAgc2V0X2ZpbHRlci5kaXNhYmxlZCA9IGZhbHNlO1xuICB9XG5cbiAgaWYgKCFmcm9tQ2FjaGUgJiYgdGhpcy5jYWNoZUtleSAhPT0gXCJcIikge1xuICAgIHRoaXMuY2FjaGVbdGhpcy5jYWNoZUtleV0gPSByZXN1bHQ7XG4gIH1cbiAgdGhpcy5jYWNoZUtleSA9IFwiXCI7XG59O1xuXG5KQ1NtYXJ0RmlsdGVyLnByb3RvdHlwZS5iaW5kVXJsVG9CdXR0b24gPSBmdW5jdGlvbiAoYnV0dG9uSWQsIHVybCkge1xuICB2YXIgYnV0dG9uID0gQlgoYnV0dG9uSWQpO1xuICBpZiAoYnV0dG9uKSB7XG4gICAgdmFyIHByb3h5ID0gZnVuY3Rpb24gKGosIGZ1bmMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBmdW5jKGopO1xuICAgICAgfTtcbiAgICB9O1xuXG4gICAgaWYgKGJ1dHRvbi50eXBlID09IFwic3VibWl0XCIpIGJ1dHRvbi50eXBlID0gXCJidXR0b25cIjtcblxuICAgIEJYLmJpbmQoXG4gICAgICBidXR0b24sXG4gICAgICBcImNsaWNrXCIsXG4gICAgICBwcm94eSh1cmwsIGZ1bmN0aW9uICh1cmwpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxufTtcblxuSkNTbWFydEZpbHRlci5wcm90b3R5cGUuZ2F0aGVySW5wdXRzVmFsdWVzID0gZnVuY3Rpb24gKHZhbHVlcywgZWxlbWVudHMpIHtcbiAgaWYgKGVsZW1lbnRzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGVsID0gZWxlbWVudHNbaV07XG4gICAgICBpZiAoZWwuZGlzYWJsZWQgfHwgIWVsLnR5cGUpIGNvbnRpbnVlO1xuXG4gICAgICBzd2l0Y2ggKGVsLnR5cGUudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICBjYXNlIFwidGV4dFwiOlxuICAgICAgICBjYXNlIFwidGV4dGFyZWFcIjpcbiAgICAgICAgY2FzZSBcInBhc3N3b3JkXCI6XG4gICAgICAgIGNhc2UgXCJoaWRkZW5cIjpcbiAgICAgICAgY2FzZSBcInNlbGVjdC1vbmVcIjpcbiAgICAgICAgICBpZiAoZWwudmFsdWUubGVuZ3RoKVxuICAgICAgICAgICAgdmFsdWVzW3ZhbHVlcy5sZW5ndGhdID0geyBuYW1lOiBlbC5uYW1lLCB2YWx1ZTogZWwudmFsdWUgfTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcInJhZGlvXCI6XG4gICAgICAgIGNhc2UgXCJjaGVja2JveFwiOlxuICAgICAgICAgIGlmIChlbC5jaGVja2VkKVxuICAgICAgICAgICAgdmFsdWVzW3ZhbHVlcy5sZW5ndGhdID0geyBuYW1lOiBlbC5uYW1lLCB2YWx1ZTogZWwudmFsdWUgfTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcInNlbGVjdC1tdWx0aXBsZVwiOlxuICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZWwub3B0aW9ucy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgaWYgKGVsLm9wdGlvbnNbal0uc2VsZWN0ZWQpXG4gICAgICAgICAgICAgIHZhbHVlc1t2YWx1ZXMubGVuZ3RoXSA9IHtcbiAgICAgICAgICAgICAgICBuYW1lOiBlbC5uYW1lLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBlbC5vcHRpb25zW2pdLnZhbHVlLFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbkpDU21hcnRGaWx0ZXIucHJvdG90eXBlLnZhbHVlczJwb3N0ID0gZnVuY3Rpb24gKHZhbHVlcykge1xuICB2YXIgcG9zdCA9IFtdO1xuICB2YXIgY3VycmVudCA9IHBvc3Q7XG4gIHZhciBpID0gMDtcblxuICB3aGlsZSAoaSA8IHZhbHVlcy5sZW5ndGgpIHtcbiAgICB2YXIgcCA9IHZhbHVlc1tpXS5uYW1lLmluZGV4T2YoXCJbXCIpO1xuICAgIGlmIChwID09IC0xKSB7XG4gICAgICBjdXJyZW50W3ZhbHVlc1tpXS5uYW1lXSA9IHZhbHVlc1tpXS52YWx1ZTtcbiAgICAgIGN1cnJlbnQgPSBwb3N0O1xuICAgICAgaSsrO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgbmFtZSA9IHZhbHVlc1tpXS5uYW1lLnN1YnN0cmluZygwLCBwKTtcbiAgICAgIHZhciByZXN0ID0gdmFsdWVzW2ldLm5hbWUuc3Vic3RyaW5nKHAgKyAxKTtcbiAgICAgIGlmICghY3VycmVudFtuYW1lXSkgY3VycmVudFtuYW1lXSA9IFtdO1xuXG4gICAgICB2YXIgcHAgPSByZXN0LmluZGV4T2YoXCJdXCIpO1xuICAgICAgaWYgKHBwID09IC0xKSB7XG4gICAgICAgIC8vRXJyb3IgLSBub3QgYmFsYW5jZWQgYnJhY2tldHNcbiAgICAgICAgY3VycmVudCA9IHBvc3Q7XG4gICAgICAgIGkrKztcbiAgICAgIH0gZWxzZSBpZiAocHAgPT0gMCkge1xuICAgICAgICAvL05vIGluZGV4IHNwZWNpZmllZCAtIHNvIHRha2UgdGhlIG5leHQgaW50ZWdlclxuICAgICAgICBjdXJyZW50ID0gY3VycmVudFtuYW1lXTtcbiAgICAgICAgdmFsdWVzW2ldLm5hbWUgPSBcIlwiICsgY3VycmVudC5sZW5ndGg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvL05vdyBpbmRleCBuYW1lIGJlY29tZXMgYW5kIG5hbWUgYW5kIHdlIGdvIGRlZXBlciBpbnRvIHRoZSBhcnJheVxuICAgICAgICBjdXJyZW50ID0gY3VycmVudFtuYW1lXTtcbiAgICAgICAgdmFsdWVzW2ldLm5hbWUgPSByZXN0LnN1YnN0cmluZygwLCBwcCkgKyByZXN0LnN1YnN0cmluZyhwcCArIDEpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gcG9zdDtcbn07XG5cbkpDU21hcnRGaWx0ZXIucHJvdG90eXBlLmhpZGVGaWx0ZXJQcm9wcyA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gIHZhciBvYmogPSBlbGVtZW50LnBhcmVudE5vZGUsXG4gICAgZmlsdGVyQmxvY2sgPSBvYmoucXVlcnlTZWxlY3RvcihcIltkYXRhLXJvbGU9J2J4X2ZpbHRlcl9ibG9jayddXCIpLFxuICAgIHByb3BBbmdsZSA9IG9iai5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtcm9sZT0ncHJvcF9hbmdsZSddXCIpO1xuXG4gIGlmIChCWC5oYXNDbGFzcyhvYmosIFwiYngtYWN0aXZlXCIpKSB7XG4gICAgbmV3IEJYLmVhc2luZyh7XG4gICAgICBkdXJhdGlvbjogMzAwLFxuICAgICAgc3RhcnQ6IHsgb3BhY2l0eTogMSwgaGVpZ2h0OiBmaWx0ZXJCbG9jay5vZmZzZXRIZWlnaHQgfSxcbiAgICAgIGZpbmlzaDogeyBvcGFjaXR5OiAwLCBoZWlnaHQ6IDAgfSxcbiAgICAgIHRyYW5zaXRpb246IEJYLmVhc2luZy50cmFuc2l0aW9ucy5xdWFydCxcbiAgICAgIHN0ZXA6IGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgICBmaWx0ZXJCbG9jay5zdHlsZS5vcGFjaXR5ID0gc3RhdGUub3BhY2l0eTtcbiAgICAgICAgZmlsdGVyQmxvY2suc3R5bGUuaGVpZ2h0ID0gc3RhdGUuaGVpZ2h0ICsgXCJweFwiO1xuICAgICAgfSxcbiAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZpbHRlckJsb2NrLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiXCIpO1xuICAgICAgICBCWC5yZW1vdmVDbGFzcyhvYmosIFwiYngtYWN0aXZlXCIpO1xuICAgICAgfSxcbiAgICB9KS5hbmltYXRlKCk7XG5cbiAgICBCWC5hZGRDbGFzcyhwcm9wQW5nbGUsIFwiZmEtYW5nbGUtZG93blwiKTtcbiAgICBCWC5yZW1vdmVDbGFzcyhwcm9wQW5nbGUsIFwiZmEtYW5nbGUtdXBcIik7XG4gIH0gZWxzZSB7XG4gICAgZmlsdGVyQmxvY2suc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICBmaWx0ZXJCbG9jay5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICBmaWx0ZXJCbG9jay5zdHlsZS5oZWlnaHQgPSBcImF1dG9cIjtcblxuICAgIHZhciBvYmpfY2hpbGRyZW5faGVpZ2h0ID0gZmlsdGVyQmxvY2sub2Zmc2V0SGVpZ2h0O1xuICAgIGZpbHRlckJsb2NrLnN0eWxlLmhlaWdodCA9IDA7XG5cbiAgICBuZXcgQlguZWFzaW5nKHtcbiAgICAgIGR1cmF0aW9uOiAzMDAsXG4gICAgICBzdGFydDogeyBvcGFjaXR5OiAwLCBoZWlnaHQ6IDAgfSxcbiAgICAgIGZpbmlzaDogeyBvcGFjaXR5OiAxLCBoZWlnaHQ6IG9ial9jaGlsZHJlbl9oZWlnaHQgfSxcbiAgICAgIHRyYW5zaXRpb246IEJYLmVhc2luZy50cmFuc2l0aW9ucy5xdWFydCxcbiAgICAgIHN0ZXA6IGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgICBmaWx0ZXJCbG9jay5zdHlsZS5vcGFjaXR5ID0gc3RhdGUub3BhY2l0eTtcbiAgICAgICAgZmlsdGVyQmxvY2suc3R5bGUuaGVpZ2h0ID0gc3RhdGUuaGVpZ2h0ICsgXCJweFwiO1xuICAgICAgfSxcbiAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7fSxcbiAgICB9KS5hbmltYXRlKCk7XG5cbiAgICBCWC5hZGRDbGFzcyhvYmosIFwiYngtYWN0aXZlXCIpO1xuICAgIEJYLnJlbW92ZUNsYXNzKHByb3BBbmdsZSwgXCJmYS1hbmdsZS1kb3duXCIpO1xuICAgIEJYLmFkZENsYXNzKHByb3BBbmdsZSwgXCJmYS1hbmdsZS11cFwiKTtcbiAgfVxufTtcblxuSkNTbWFydEZpbHRlci5wcm90b3R5cGUuc2hvd0Ryb3BEb3duUG9wdXAgPSBmdW5jdGlvbiAoZWxlbWVudCwgcG9wdXBJZCkge1xuICB2YXIgY29udGVudE5vZGUgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXJvbGU9XCJkcm9wZG93bkNvbnRlbnRcIl0nKTtcbiAgdGhpcy5wb3B1cHNbXCJzbWFydEZpbHRlckRyb3BEb3duXCIgKyBwb3B1cElkXSA9IEJYLlBvcHVwV2luZG93TWFuYWdlci5jcmVhdGUoXG4gICAgXCJzbWFydEZpbHRlckRyb3BEb3duXCIgKyBwb3B1cElkLFxuICAgIGVsZW1lbnQsXG4gICAge1xuICAgICAgYXV0b0hpZGU6IHRydWUsXG4gICAgICBvZmZzZXRMZWZ0OiAwLFxuICAgICAgb2Zmc2V0VG9wOiAzLFxuICAgICAgb3ZlcmxheTogZmFsc2UsXG4gICAgICBkcmFnZ2FibGU6IHsgcmVzdHJpY3Q6IHRydWUgfSxcbiAgICAgIGNsb3NlQnlFc2M6IHRydWUsXG4gICAgICBjb250ZW50OiBCWC5jbG9uZShjb250ZW50Tm9kZSksXG4gICAgfVxuICApO1xuICB0aGlzLnBvcHVwc1tcInNtYXJ0RmlsdGVyRHJvcERvd25cIiArIHBvcHVwSWRdLnNob3coKTtcbn07XG5cbkpDU21hcnRGaWx0ZXIucHJvdG90eXBlLnNlbGVjdERyb3BEb3duSXRlbSA9IGZ1bmN0aW9uIChlbGVtZW50LCBjb250cm9sSWQpIHtcbiAgdGhpcy5rZXl1cChCWChjb250cm9sSWQpKTtcblxuICB2YXIgd3JhcENvbnRhaW5lciA9IEJYLmZpbmRQYXJlbnQoXG4gICAgQlgoY29udHJvbElkKSxcbiAgICB7IGNsYXNzTmFtZTogXCJieC1maWx0ZXItc2VsZWN0LWNvbnRhaW5lclwiIH0sXG4gICAgZmFsc2VcbiAgKTtcblxuICB2YXIgY3VycmVudE9wdGlvbiA9IHdyYXBDb250YWluZXIucXVlcnlTZWxlY3RvcihcbiAgICAnW2RhdGEtcm9sZT1cImN1cnJlbnRPcHRpb25cIl0nXG4gICk7XG4gIGN1cnJlbnRPcHRpb24uaW5uZXJIVE1MID0gZWxlbWVudC5pbm5lckhUTUw7XG4gIEJYLlBvcHVwV2luZG93TWFuYWdlci5nZXRDdXJyZW50UG9wdXAoKS5jbG9zZSgpO1xufTtcblxuQlgubmFtZXNwYWNlKFwiQlguSWJsb2NrLlNtYXJ0RmlsdGVyXCIpO1xuQlguSWJsb2NrLlNtYXJ0RmlsdGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgLyoqIEBwYXJhbSB7e1xuXHRcdFx0bGVmdFNsaWRlcjogc3RyaW5nLFxuXHRcdFx0cmlnaHRTbGlkZXI6IHN0cmluZyxcblx0XHRcdHRyYWNrZXI6IHN0cmluZyxcblx0XHRcdHRyYWNrZXJXcmFwOiBzdHJpbmcsXG5cdFx0XHRtaW5JbnB1dElkOiBzdHJpbmcsXG5cdFx0XHRtYXhJbnB1dElkOiBzdHJpbmcsXG5cdFx0XHRtaW5QcmljZTogZmxvYXR8aW50fHN0cmluZyxcblx0XHRcdG1heFByaWNlOiBmbG9hdHxpbnR8c3RyaW5nLFxuXHRcdFx0Y3VyTWluUHJpY2U6IGZsb2F0fGludHxzdHJpbmcsXG5cdFx0XHRjdXJNYXhQcmljZTogZmxvYXR8aW50fHN0cmluZyxcblx0XHRcdGZsdE1pblByaWNlOiBmbG9hdHxpbnR8c3RyaW5nfG51bGwsXG5cdFx0XHRmbHRNYXhQcmljZTogZmxvYXR8aW50fHN0cmluZ3xudWxsLFxuXHRcdFx0cHJlY2lzaW9uOiBpbnR8bnVsbCxcblx0XHRcdGNvbG9yVW5hdmFpbGFibGVBY3RpdmU6IHN0cmluZyxcblx0XHRcdGNvbG9yQXZhaWxhYmxlQWN0aXZlOiBzdHJpbmcsXG5cdFx0XHRjb2xvckF2YWlsYWJsZUluYWN0aXZlOiBzdHJpbmdcblx0XHR9fSBhclBhcmFtc1xuICAgICAqL1xuICB2YXIgU21hcnRGaWx0ZXIgPSBmdW5jdGlvbiAoYXJQYXJhbXMpIHtcbiAgICBpZiAodHlwZW9mIGFyUGFyYW1zID09PSBcIm9iamVjdFwiKSB7XG4gICAgICB0aGlzLmxlZnRTbGlkZXIgPSBCWChhclBhcmFtcy5sZWZ0U2xpZGVyKTtcbiAgICAgIHRoaXMucmlnaHRTbGlkZXIgPSBCWChhclBhcmFtcy5yaWdodFNsaWRlcik7XG4gICAgICB0aGlzLnRyYWNrZXIgPSBCWChhclBhcmFtcy50cmFja2VyKTtcbiAgICAgIHRoaXMudHJhY2tlcldyYXAgPSBCWChhclBhcmFtcy50cmFja2VyV3JhcCk7XG5cbiAgICAgIHRoaXMubWluSW5wdXQgPSBCWChhclBhcmFtcy5taW5JbnB1dElkKTtcbiAgICAgIHRoaXMubWF4SW5wdXQgPSBCWChhclBhcmFtcy5tYXhJbnB1dElkKTtcblxuICAgICAgdGhpcy5taW5QcmljZSA9IHBhcnNlRmxvYXQoYXJQYXJhbXMubWluUHJpY2UpO1xuICAgICAgdGhpcy5tYXhQcmljZSA9IHBhcnNlRmxvYXQoYXJQYXJhbXMubWF4UHJpY2UpO1xuXG4gICAgICB0aGlzLmN1ck1pblByaWNlID0gcGFyc2VGbG9hdChhclBhcmFtcy5jdXJNaW5QcmljZSk7XG4gICAgICB0aGlzLmN1ck1heFByaWNlID0gcGFyc2VGbG9hdChhclBhcmFtcy5jdXJNYXhQcmljZSk7XG5cbiAgICAgIHRoaXMuZmx0TWluUHJpY2UgPSBhclBhcmFtcy5mbHRNaW5QcmljZVxuICAgICAgICA/IHBhcnNlRmxvYXQoYXJQYXJhbXMuZmx0TWluUHJpY2UpXG4gICAgICAgIDogcGFyc2VGbG9hdChhclBhcmFtcy5jdXJNaW5QcmljZSk7XG4gICAgICB0aGlzLmZsdE1heFByaWNlID0gYXJQYXJhbXMuZmx0TWF4UHJpY2VcbiAgICAgICAgPyBwYXJzZUZsb2F0KGFyUGFyYW1zLmZsdE1heFByaWNlKVxuICAgICAgICA6IHBhcnNlRmxvYXQoYXJQYXJhbXMuY3VyTWF4UHJpY2UpO1xuXG4gICAgICB0aGlzLnByZWNpc2lvbiA9IGFyUGFyYW1zLnByZWNpc2lvbiB8fCAwO1xuXG4gICAgICB0aGlzLnByaWNlRGlmZiA9IHRoaXMubWF4UHJpY2UgLSB0aGlzLm1pblByaWNlO1xuXG4gICAgICB0aGlzLmxlZnRQZXJjZW50ID0gMDtcbiAgICAgIHRoaXMucmlnaHRQZXJjZW50ID0gMDtcblxuICAgICAgdGhpcy5mbHRNaW5QZXJjZW50ID0gMDtcbiAgICAgIHRoaXMuZmx0TWF4UGVyY2VudCA9IDA7XG5cbiAgICAgIHRoaXMuY29sb3JVbmF2YWlsYWJsZUFjdGl2ZSA9IEJYKGFyUGFyYW1zLmNvbG9yVW5hdmFpbGFibGVBY3RpdmUpOyAvL2dyYXlcbiAgICAgIHRoaXMuY29sb3JBdmFpbGFibGVBY3RpdmUgPSBCWChhclBhcmFtcy5jb2xvckF2YWlsYWJsZUFjdGl2ZSk7IC8vYmx1ZVxuICAgICAgdGhpcy5jb2xvckF2YWlsYWJsZUluYWN0aXZlID0gQlgoYXJQYXJhbXMuY29sb3JBdmFpbGFibGVJbmFjdGl2ZSk7IC8vbGlnaHQgYmx1ZVxuXG4gICAgICB0aGlzLmlzVG91Y2ggPSBmYWxzZTtcblxuICAgICAgdGhpcy5pbml0KCk7XG5cbiAgICAgIGlmIChcIm9udG91Y2hzdGFydFwiIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICAgICAgICB0aGlzLmlzVG91Y2ggPSB0cnVlO1xuXG4gICAgICAgIEJYLmJpbmQoXG4gICAgICAgICAgdGhpcy5sZWZ0U2xpZGVyLFxuICAgICAgICAgIFwidG91Y2hzdGFydFwiLFxuICAgICAgICAgIEJYLnByb3h5KGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgdGhpcy5vbk1vdmVMZWZ0U2xpZGVyKGV2ZW50KTtcbiAgICAgICAgICB9LCB0aGlzKVxuICAgICAgICApO1xuXG4gICAgICAgIEJYLmJpbmQoXG4gICAgICAgICAgdGhpcy5yaWdodFNsaWRlcixcbiAgICAgICAgICBcInRvdWNoc3RhcnRcIixcbiAgICAgICAgICBCWC5wcm94eShmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMub25Nb3ZlUmlnaHRTbGlkZXIoZXZlbnQpO1xuICAgICAgICAgIH0sIHRoaXMpXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBCWC5iaW5kKFxuICAgICAgICAgIHRoaXMubGVmdFNsaWRlcixcbiAgICAgICAgICBcIm1vdXNlZG93blwiLFxuICAgICAgICAgIEJYLnByb3h5KGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgdGhpcy5vbk1vdmVMZWZ0U2xpZGVyKGV2ZW50KTtcbiAgICAgICAgICB9LCB0aGlzKVxuICAgICAgICApO1xuXG4gICAgICAgIEJYLmJpbmQoXG4gICAgICAgICAgdGhpcy5yaWdodFNsaWRlcixcbiAgICAgICAgICBcIm1vdXNlZG93blwiLFxuICAgICAgICAgIEJYLnByb3h5KGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgdGhpcy5vbk1vdmVSaWdodFNsaWRlcihldmVudCk7XG4gICAgICAgICAgfSwgdGhpcylcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgQlguYmluZChcbiAgICAgICAgdGhpcy5taW5JbnB1dCxcbiAgICAgICAgXCJrZXl1cFwiLFxuICAgICAgICBCWC5wcm94eShmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICB0aGlzLm9uSW5wdXRDaGFuZ2UoKTtcbiAgICAgICAgfSwgdGhpcylcbiAgICAgICk7XG5cbiAgICAgIEJYLmJpbmQoXG4gICAgICAgIHRoaXMubWF4SW5wdXQsXG4gICAgICAgIFwia2V5dXBcIixcbiAgICAgICAgQlgucHJveHkoZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgdGhpcy5vbklucHV0Q2hhbmdlKCk7XG4gICAgICAgIH0sIHRoaXMpXG4gICAgICApO1xuICAgIH1cbiAgfTtcblxuICBTbWFydEZpbHRlci5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcHJpY2VEaWZmO1xuXG4gICAgaWYgKHRoaXMuY3VyTWluUHJpY2UgPiB0aGlzLm1pblByaWNlKSB7XG4gICAgICBwcmljZURpZmYgPSB0aGlzLmN1ck1pblByaWNlIC0gdGhpcy5taW5QcmljZTtcbiAgICAgIHRoaXMubGVmdFBlcmNlbnQgPSAocHJpY2VEaWZmICogMTAwKSAvIHRoaXMucHJpY2VEaWZmO1xuXG4gICAgICB0aGlzLmxlZnRTbGlkZXIuc3R5bGUubGVmdCA9IHRoaXMubGVmdFBlcmNlbnQgKyBcIiVcIjtcbiAgICAgIHRoaXMuY29sb3JVbmF2YWlsYWJsZUFjdGl2ZS5zdHlsZS5sZWZ0ID0gdGhpcy5sZWZ0UGVyY2VudCArIFwiJVwiO1xuICAgIH1cblxuICAgIHRoaXMuc2V0TWluRmlsdGVyZWRWYWx1ZSh0aGlzLmZsdE1pblByaWNlKTtcblxuICAgIGlmICh0aGlzLmN1ck1heFByaWNlIDwgdGhpcy5tYXhQcmljZSkge1xuICAgICAgcHJpY2VEaWZmID0gdGhpcy5tYXhQcmljZSAtIHRoaXMuY3VyTWF4UHJpY2U7XG4gICAgICB0aGlzLnJpZ2h0UGVyY2VudCA9IChwcmljZURpZmYgKiAxMDApIC8gdGhpcy5wcmljZURpZmY7XG5cbiAgICAgIHRoaXMucmlnaHRTbGlkZXIuc3R5bGUucmlnaHQgPSB0aGlzLnJpZ2h0UGVyY2VudCArIFwiJVwiO1xuICAgICAgdGhpcy5jb2xvclVuYXZhaWxhYmxlQWN0aXZlLnN0eWxlLnJpZ2h0ID0gdGhpcy5yaWdodFBlcmNlbnQgKyBcIiVcIjtcbiAgICB9XG5cbiAgICB0aGlzLnNldE1heEZpbHRlcmVkVmFsdWUodGhpcy5mbHRNYXhQcmljZSk7XG4gIH07XG5cbiAgU21hcnRGaWx0ZXIucHJvdG90eXBlLnNldE1pbkZpbHRlcmVkVmFsdWUgPSBmdW5jdGlvbiAoZmx0TWluUHJpY2UpIHtcbiAgICB0aGlzLmZsdE1pblByaWNlID0gcGFyc2VGbG9hdChmbHRNaW5QcmljZSk7XG4gICAgaWYgKHRoaXMuZmx0TWluUHJpY2UgPj0gdGhpcy5taW5QcmljZSkge1xuICAgICAgdmFyIHByaWNlRGlmZiA9IHRoaXMuZmx0TWluUHJpY2UgLSB0aGlzLm1pblByaWNlO1xuICAgICAgdGhpcy5mbHRNaW5QZXJjZW50ID0gKHByaWNlRGlmZiAqIDEwMCkgLyB0aGlzLnByaWNlRGlmZjtcbiAgICAgIGlmICh0aGlzLmNvbG9yQXZhaWxhYmxlQWN0aXZlKSB7XG4gICAgICAgIGlmICh0aGlzLmxlZnRQZXJjZW50ID4gdGhpcy5mbHRNaW5QZXJjZW50KVxuICAgICAgICAgIHRoaXMuY29sb3JBdmFpbGFibGVBY3RpdmUuc3R5bGUubGVmdCA9IHRoaXMubGVmdFBlcmNlbnQgKyBcIiVcIjtcbiAgICAgICAgZWxzZSB0aGlzLmNvbG9yQXZhaWxhYmxlQWN0aXZlLnN0eWxlLmxlZnQgPSB0aGlzLmZsdE1pblBlcmNlbnQgKyBcIiVcIjtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuY29sb3JBdmFpbGFibGVJbmFjdGl2ZSlcbiAgICAgICAgdGhpcy5jb2xvckF2YWlsYWJsZUluYWN0aXZlLnN0eWxlLmxlZnQgPSB0aGlzLmZsdE1pblBlcmNlbnQgKyBcIiVcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuY29sb3JBdmFpbGFibGVBY3RpdmUpIHtcbiAgICAgICAgdGhpcy5jb2xvckF2YWlsYWJsZUFjdGl2ZS5zdHlsZS5sZWZ0ID0gXCIwJVwiO1xuICAgICAgICB0aGlzLmNvbG9yQXZhaWxhYmxlSW5hY3RpdmUuc3R5bGUubGVmdCA9IFwiMCVcIjtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgU21hcnRGaWx0ZXIucHJvdG90eXBlLnNldE1heEZpbHRlcmVkVmFsdWUgPSBmdW5jdGlvbiAoZmx0TWF4UHJpY2UpIHtcbiAgICB0aGlzLmZsdE1heFByaWNlID0gcGFyc2VGbG9hdChmbHRNYXhQcmljZSk7XG4gICAgaWYgKHRoaXMuZmx0TWF4UHJpY2UgPD0gdGhpcy5tYXhQcmljZSkge1xuICAgICAgdmFyIHByaWNlRGlmZiA9IHRoaXMubWF4UHJpY2UgLSB0aGlzLmZsdE1heFByaWNlO1xuICAgICAgdGhpcy5mbHRNYXhQZXJjZW50ID0gKHByaWNlRGlmZiAqIDEwMCkgLyB0aGlzLnByaWNlRGlmZjtcblxuICAgICAgaWYgKHRoaXMuY29sb3JBdmFpbGFibGVBY3RpdmUpIHtcbiAgICAgICAgaWYgKHRoaXMucmlnaHRQZXJjZW50ID4gdGhpcy5mbHRNYXhQZXJjZW50KVxuICAgICAgICAgIHRoaXMuY29sb3JBdmFpbGFibGVBY3RpdmUuc3R5bGUucmlnaHQgPSB0aGlzLnJpZ2h0UGVyY2VudCArIFwiJVwiO1xuICAgICAgICBlbHNlIHRoaXMuY29sb3JBdmFpbGFibGVBY3RpdmUuc3R5bGUucmlnaHQgPSB0aGlzLmZsdE1heFBlcmNlbnQgKyBcIiVcIjtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuY29sb3JBdmFpbGFibGVJbmFjdGl2ZSlcbiAgICAgICAgdGhpcy5jb2xvckF2YWlsYWJsZUluYWN0aXZlLnN0eWxlLnJpZ2h0ID0gdGhpcy5mbHRNYXhQZXJjZW50ICsgXCIlXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLmNvbG9yQXZhaWxhYmxlQWN0aXZlKSB7XG4gICAgICAgIHRoaXMuY29sb3JBdmFpbGFibGVBY3RpdmUuc3R5bGUucmlnaHQgPSBcIjAlXCI7XG4gICAgICAgIHRoaXMuY29sb3JBdmFpbGFibGVJbmFjdGl2ZS5zdHlsZS5yaWdodCA9IFwiMCVcIjtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgU21hcnRGaWx0ZXIucHJvdG90eXBlLmdldFhDb29yZCA9IGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgdmFyIGJveCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgdmFyIGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuICAgIHZhciBkb2NFbGVtID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG4gICAgdmFyIHNjcm9sbExlZnQgPVxuICAgICAgd2luZG93LnBhZ2VYT2Zmc2V0IHx8IGRvY0VsZW0uc2Nyb2xsTGVmdCB8fCBib2R5LnNjcm9sbExlZnQ7XG4gICAgdmFyIGNsaWVudExlZnQgPSBkb2NFbGVtLmNsaWVudExlZnQgfHwgYm9keS5jbGllbnRMZWZ0IHx8IDA7XG4gICAgdmFyIGxlZnQgPSBib3gubGVmdCArIHNjcm9sbExlZnQgLSBjbGllbnRMZWZ0O1xuXG4gICAgcmV0dXJuIE1hdGgucm91bmQobGVmdCk7XG4gIH07XG5cbiAgU21hcnRGaWx0ZXIucHJvdG90eXBlLmdldFBhZ2VYID0gZnVuY3Rpb24gKGUpIHtcbiAgICBlID0gZSB8fCB3aW5kb3cuZXZlbnQ7XG4gICAgdmFyIHBhZ2VYID0gbnVsbDtcblxuICAgIGlmICh0aGlzLmlzVG91Y2ggJiYgZXZlbnQudGFyZ2V0VG91Y2hlc1swXSAhPSBudWxsKSB7XG4gICAgICBwYWdlWCA9IGUudGFyZ2V0VG91Y2hlc1swXS5wYWdlWDtcbiAgICB9IGVsc2UgaWYgKGUucGFnZVggIT0gbnVsbCkge1xuICAgICAgcGFnZVggPSBlLnBhZ2VYO1xuICAgIH0gZWxzZSBpZiAoZS5jbGllbnRYICE9IG51bGwpIHtcbiAgICAgIHZhciBodG1sID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgdmFyIGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuXG4gICAgICBwYWdlWCA9IGUuY2xpZW50WCArIChodG1sLnNjcm9sbExlZnQgfHwgKGJvZHkgJiYgYm9keS5zY3JvbGxMZWZ0KSB8fCAwKTtcbiAgICAgIHBhZ2VYIC09IGh0bWwuY2xpZW50TGVmdCB8fCAwO1xuICAgIH1cblxuICAgIHJldHVybiBwYWdlWDtcbiAgfTtcblxuICBTbWFydEZpbHRlci5wcm90b3R5cGUucmVjb3VudE1pblByaWNlID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBuZXdNaW5QcmljZSA9ICh0aGlzLnByaWNlRGlmZiAqIHRoaXMubGVmdFBlcmNlbnQpIC8gMTAwO1xuICAgIG5ld01pblByaWNlID0gKHRoaXMubWluUHJpY2UgKyBuZXdNaW5QcmljZSkudG9GaXhlZCh0aGlzLnByZWNpc2lvbik7XG5cbiAgICBpZiAobmV3TWluUHJpY2UgIT0gdGhpcy5taW5QcmljZSkgdGhpcy5taW5JbnB1dC52YWx1ZSA9IG5ld01pblByaWNlO1xuICAgIGVsc2UgdGhpcy5taW5JbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgLyoqIEBnbG9iYWwgSkNTbWFydEZpbHRlciBzbWFydEZpbHRlciAqL1xuICAgIHNtYXJ0RmlsdGVyLmtleXVwKHRoaXMubWluSW5wdXQpO1xuICB9O1xuXG4gIFNtYXJ0RmlsdGVyLnByb3RvdHlwZS5yZWNvdW50TWF4UHJpY2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG5ld01heFByaWNlID0gKHRoaXMucHJpY2VEaWZmICogdGhpcy5yaWdodFBlcmNlbnQpIC8gMTAwO1xuICAgIG5ld01heFByaWNlID0gKHRoaXMubWF4UHJpY2UgLSBuZXdNYXhQcmljZSkudG9GaXhlZCh0aGlzLnByZWNpc2lvbik7XG5cbiAgICBpZiAobmV3TWF4UHJpY2UgIT0gdGhpcy5tYXhQcmljZSkgdGhpcy5tYXhJbnB1dC52YWx1ZSA9IG5ld01heFByaWNlO1xuICAgIGVsc2UgdGhpcy5tYXhJbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgLyoqIEBnbG9iYWwgSkNTbWFydEZpbHRlciBzbWFydEZpbHRlciAqL1xuICAgIHNtYXJ0RmlsdGVyLmtleXVwKHRoaXMubWF4SW5wdXQpO1xuICB9O1xuXG4gIFNtYXJ0RmlsdGVyLnByb3RvdHlwZS5vbklucHV0Q2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBwcmljZURpZmY7XG4gICAgaWYgKHRoaXMubWluSW5wdXQudmFsdWUpIHtcbiAgICAgIHZhciBsZWZ0SW5wdXRWYWx1ZSA9IHRoaXMubWluSW5wdXQudmFsdWU7XG4gICAgICBpZiAobGVmdElucHV0VmFsdWUgPCB0aGlzLm1pblByaWNlKSBsZWZ0SW5wdXRWYWx1ZSA9IHRoaXMubWluUHJpY2U7XG5cbiAgICAgIGlmIChsZWZ0SW5wdXRWYWx1ZSA+IHRoaXMubWF4UHJpY2UpIGxlZnRJbnB1dFZhbHVlID0gdGhpcy5tYXhQcmljZTtcblxuICAgICAgcHJpY2VEaWZmID0gbGVmdElucHV0VmFsdWUgLSB0aGlzLm1pblByaWNlO1xuICAgICAgdGhpcy5sZWZ0UGVyY2VudCA9IChwcmljZURpZmYgKiAxMDApIC8gdGhpcy5wcmljZURpZmY7XG5cbiAgICAgIHRoaXMubWFrZUxlZnRTbGlkZXJNb3ZlKGZhbHNlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5tYXhJbnB1dC52YWx1ZSkge1xuICAgICAgdmFyIHJpZ2h0SW5wdXRWYWx1ZSA9IHRoaXMubWF4SW5wdXQudmFsdWU7XG4gICAgICBpZiAocmlnaHRJbnB1dFZhbHVlIDwgdGhpcy5taW5QcmljZSkgcmlnaHRJbnB1dFZhbHVlID0gdGhpcy5taW5QcmljZTtcblxuICAgICAgaWYgKHJpZ2h0SW5wdXRWYWx1ZSA+IHRoaXMubWF4UHJpY2UpIHJpZ2h0SW5wdXRWYWx1ZSA9IHRoaXMubWF4UHJpY2U7XG5cbiAgICAgIHByaWNlRGlmZiA9IHRoaXMubWF4UHJpY2UgLSByaWdodElucHV0VmFsdWU7XG4gICAgICB0aGlzLnJpZ2h0UGVyY2VudCA9IChwcmljZURpZmYgKiAxMDApIC8gdGhpcy5wcmljZURpZmY7XG5cbiAgICAgIHRoaXMubWFrZVJpZ2h0U2xpZGVyTW92ZShmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIFNtYXJ0RmlsdGVyLnByb3RvdHlwZS5tYWtlTGVmdFNsaWRlck1vdmUgPSBmdW5jdGlvbiAocmVjb3VudFByaWNlKSB7XG4gICAgcmVjb3VudFByaWNlID0gcmVjb3VudFByaWNlICE9PSBmYWxzZTtcblxuICAgIHRoaXMubGVmdFNsaWRlci5zdHlsZS5sZWZ0ID0gdGhpcy5sZWZ0UGVyY2VudCArIFwiJVwiO1xuICAgIHRoaXMuY29sb3JVbmF2YWlsYWJsZUFjdGl2ZS5zdHlsZS5sZWZ0ID0gdGhpcy5sZWZ0UGVyY2VudCArIFwiJVwiO1xuXG4gICAgdmFyIGFyZUJvdGhTbGlkZXJzTW92aW5nID0gZmFsc2U7XG4gICAgaWYgKHRoaXMubGVmdFBlcmNlbnQgKyB0aGlzLnJpZ2h0UGVyY2VudCA+PSAxMDApIHtcbiAgICAgIGFyZUJvdGhTbGlkZXJzTW92aW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMucmlnaHRQZXJjZW50ID0gMTAwIC0gdGhpcy5sZWZ0UGVyY2VudDtcbiAgICAgIHRoaXMucmlnaHRTbGlkZXIuc3R5bGUucmlnaHQgPSB0aGlzLnJpZ2h0UGVyY2VudCArIFwiJVwiO1xuICAgICAgdGhpcy5jb2xvclVuYXZhaWxhYmxlQWN0aXZlLnN0eWxlLnJpZ2h0ID0gdGhpcy5yaWdodFBlcmNlbnQgKyBcIiVcIjtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICB0aGlzLmxlZnRQZXJjZW50ID49IHRoaXMuZmx0TWluUGVyY2VudCAmJlxuICAgICAgdGhpcy5sZWZ0UGVyY2VudCA8PSAxMDAgLSB0aGlzLmZsdE1heFBlcmNlbnRcbiAgICApIHtcbiAgICAgIHRoaXMuY29sb3JBdmFpbGFibGVBY3RpdmUuc3R5bGUubGVmdCA9IHRoaXMubGVmdFBlcmNlbnQgKyBcIiVcIjtcbiAgICAgIGlmIChhcmVCb3RoU2xpZGVyc01vdmluZykge1xuICAgICAgICB0aGlzLmNvbG9yQXZhaWxhYmxlQWN0aXZlLnN0eWxlLnJpZ2h0ID0gMTAwIC0gdGhpcy5sZWZ0UGVyY2VudCArIFwiJVwiO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5sZWZ0UGVyY2VudCA8PSB0aGlzLmZsdE1pblBlcmNlbnQpIHtcbiAgICAgIHRoaXMuY29sb3JBdmFpbGFibGVBY3RpdmUuc3R5bGUubGVmdCA9IHRoaXMuZmx0TWluUGVyY2VudCArIFwiJVwiO1xuICAgICAgaWYgKGFyZUJvdGhTbGlkZXJzTW92aW5nKSB7XG4gICAgICAgIHRoaXMuY29sb3JBdmFpbGFibGVBY3RpdmUuc3R5bGUucmlnaHQgPSAxMDAgLSB0aGlzLmZsdE1pblBlcmNlbnQgKyBcIiVcIjtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMubGVmdFBlcmNlbnQgPj0gdGhpcy5mbHRNYXhQZXJjZW50KSB7XG4gICAgICB0aGlzLmNvbG9yQXZhaWxhYmxlQWN0aXZlLnN0eWxlLmxlZnQgPSAxMDAgLSB0aGlzLmZsdE1heFBlcmNlbnQgKyBcIiVcIjtcbiAgICAgIGlmIChhcmVCb3RoU2xpZGVyc01vdmluZykge1xuICAgICAgICB0aGlzLmNvbG9yQXZhaWxhYmxlQWN0aXZlLnN0eWxlLnJpZ2h0ID0gdGhpcy5mbHRNYXhQZXJjZW50ICsgXCIlXCI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHJlY291bnRQcmljZSkge1xuICAgICAgdGhpcy5yZWNvdW50TWluUHJpY2UoKTtcbiAgICAgIGlmIChhcmVCb3RoU2xpZGVyc01vdmluZykgdGhpcy5yZWNvdW50TWF4UHJpY2UoKTtcbiAgICB9XG4gIH07XG5cbiAgU21hcnRGaWx0ZXIucHJvdG90eXBlLmNvdW50TmV3TGVmdCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIHZhciBwYWdlWCA9IHRoaXMuZ2V0UGFnZVgoZXZlbnQpO1xuXG4gICAgdmFyIHRyYWNrZXJYQ29vcmQgPSB0aGlzLmdldFhDb29yZCh0aGlzLnRyYWNrZXJXcmFwKTtcbiAgICB2YXIgcmlnaHRFZGdlID0gdGhpcy50cmFja2VyV3JhcC5vZmZzZXRXaWR0aDtcblxuICAgIHZhciBuZXdMZWZ0ID0gcGFnZVggLSB0cmFja2VyWENvb3JkO1xuXG4gICAgaWYgKG5ld0xlZnQgPCAwKSBuZXdMZWZ0ID0gMDtcbiAgICBlbHNlIGlmIChuZXdMZWZ0ID4gcmlnaHRFZGdlKSBuZXdMZWZ0ID0gcmlnaHRFZGdlO1xuXG4gICAgcmV0dXJuIG5ld0xlZnQ7XG4gIH07XG5cbiAgU21hcnRGaWx0ZXIucHJvdG90eXBlLm9uTW92ZUxlZnRTbGlkZXIgPSBmdW5jdGlvbiAoZSkge1xuICAgIGlmICghdGhpcy5pc1RvdWNoKSB7XG4gICAgICB0aGlzLmxlZnRTbGlkZXIub25kcmFnc3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmlzVG91Y2gpIHtcbiAgICAgIGRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gQlgucHJveHkoZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHRoaXMubGVmdFBlcmNlbnQgPVxuICAgICAgICAgICh0aGlzLmNvdW50TmV3TGVmdChldmVudCkgKiAxMDApIC8gdGhpcy50cmFja2VyV3JhcC5vZmZzZXRXaWR0aDtcbiAgICAgICAgdGhpcy5tYWtlTGVmdFNsaWRlck1vdmUoKTtcbiAgICAgIH0sIHRoaXMpO1xuXG4gICAgICBkb2N1bWVudC5vbm1vdXNldXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gZG9jdW1lbnQub25tb3VzZXVwID0gbnVsbDtcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50Lm9udG91Y2htb3ZlID0gQlgucHJveHkoZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHRoaXMubGVmdFBlcmNlbnQgPVxuICAgICAgICAgICh0aGlzLmNvdW50TmV3TGVmdChldmVudCkgKiAxMDApIC8gdGhpcy50cmFja2VyV3JhcC5vZmZzZXRXaWR0aDtcbiAgICAgICAgdGhpcy5tYWtlTGVmdFNsaWRlck1vdmUoKTtcbiAgICAgIH0sIHRoaXMpO1xuXG4gICAgICBkb2N1bWVudC5vbnRvdWNoZW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBkb2N1bWVudC5vbnRvdWNobW92ZSA9IGRvY3VtZW50LnRvdWNoZW5kID0gbnVsbDtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIFNtYXJ0RmlsdGVyLnByb3RvdHlwZS5tYWtlUmlnaHRTbGlkZXJNb3ZlID0gZnVuY3Rpb24gKHJlY291bnRQcmljZSkge1xuICAgIHJlY291bnRQcmljZSA9IHJlY291bnRQcmljZSAhPT0gZmFsc2U7XG5cbiAgICB0aGlzLnJpZ2h0U2xpZGVyLnN0eWxlLnJpZ2h0ID0gdGhpcy5yaWdodFBlcmNlbnQgKyBcIiVcIjtcbiAgICB0aGlzLmNvbG9yVW5hdmFpbGFibGVBY3RpdmUuc3R5bGUucmlnaHQgPSB0aGlzLnJpZ2h0UGVyY2VudCArIFwiJVwiO1xuXG4gICAgdmFyIGFyZUJvdGhTbGlkZXJzTW92aW5nID0gZmFsc2U7XG4gICAgaWYgKHRoaXMubGVmdFBlcmNlbnQgKyB0aGlzLnJpZ2h0UGVyY2VudCA+PSAxMDApIHtcbiAgICAgIGFyZUJvdGhTbGlkZXJzTW92aW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMubGVmdFBlcmNlbnQgPSAxMDAgLSB0aGlzLnJpZ2h0UGVyY2VudDtcbiAgICAgIHRoaXMubGVmdFNsaWRlci5zdHlsZS5sZWZ0ID0gdGhpcy5sZWZ0UGVyY2VudCArIFwiJVwiO1xuICAgICAgdGhpcy5jb2xvclVuYXZhaWxhYmxlQWN0aXZlLnN0eWxlLmxlZnQgPSB0aGlzLmxlZnRQZXJjZW50ICsgXCIlXCI7XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgMTAwIC0gdGhpcy5yaWdodFBlcmNlbnQgPj0gdGhpcy5mbHRNaW5QZXJjZW50ICYmXG4gICAgICB0aGlzLnJpZ2h0UGVyY2VudCA+PSB0aGlzLmZsdE1heFBlcmNlbnRcbiAgICApIHtcbiAgICAgIHRoaXMuY29sb3JBdmFpbGFibGVBY3RpdmUuc3R5bGUucmlnaHQgPSB0aGlzLnJpZ2h0UGVyY2VudCArIFwiJVwiO1xuICAgICAgaWYgKGFyZUJvdGhTbGlkZXJzTW92aW5nKSB7XG4gICAgICAgIHRoaXMuY29sb3JBdmFpbGFibGVBY3RpdmUuc3R5bGUubGVmdCA9IDEwMCAtIHRoaXMucmlnaHRQZXJjZW50ICsgXCIlXCI7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLnJpZ2h0UGVyY2VudCA8PSB0aGlzLmZsdE1heFBlcmNlbnQpIHtcbiAgICAgIHRoaXMuY29sb3JBdmFpbGFibGVBY3RpdmUuc3R5bGUucmlnaHQgPSB0aGlzLmZsdE1heFBlcmNlbnQgKyBcIiVcIjtcbiAgICAgIGlmIChhcmVCb3RoU2xpZGVyc01vdmluZykge1xuICAgICAgICB0aGlzLmNvbG9yQXZhaWxhYmxlQWN0aXZlLnN0eWxlLmxlZnQgPSAxMDAgLSB0aGlzLmZsdE1heFBlcmNlbnQgKyBcIiVcIjtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKDEwMCAtIHRoaXMucmlnaHRQZXJjZW50IDw9IHRoaXMuZmx0TWluUGVyY2VudCkge1xuICAgICAgdGhpcy5jb2xvckF2YWlsYWJsZUFjdGl2ZS5zdHlsZS5yaWdodCA9IDEwMCAtIHRoaXMuZmx0TWluUGVyY2VudCArIFwiJVwiO1xuICAgICAgaWYgKGFyZUJvdGhTbGlkZXJzTW92aW5nKSB7XG4gICAgICAgIHRoaXMuY29sb3JBdmFpbGFibGVBY3RpdmUuc3R5bGUubGVmdCA9IHRoaXMuZmx0TWluUGVyY2VudCArIFwiJVwiO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChyZWNvdW50UHJpY2UpIHtcbiAgICAgIHRoaXMucmVjb3VudE1heFByaWNlKCk7XG4gICAgICBpZiAoYXJlQm90aFNsaWRlcnNNb3ZpbmcpIHRoaXMucmVjb3VudE1pblByaWNlKCk7XG4gICAgfVxuICB9O1xuXG4gIFNtYXJ0RmlsdGVyLnByb3RvdHlwZS5vbk1vdmVSaWdodFNsaWRlciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKCF0aGlzLmlzVG91Y2gpIHtcbiAgICAgIHRoaXMucmlnaHRTbGlkZXIub25kcmFnc3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmlzVG91Y2gpIHtcbiAgICAgIGRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gQlgucHJveHkoZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHRoaXMucmlnaHRQZXJjZW50ID1cbiAgICAgICAgICAxMDAgLSAodGhpcy5jb3VudE5ld0xlZnQoZXZlbnQpICogMTAwKSAvIHRoaXMudHJhY2tlcldyYXAub2Zmc2V0V2lkdGg7XG4gICAgICAgIHRoaXMubWFrZVJpZ2h0U2xpZGVyTW92ZSgpO1xuICAgICAgfSwgdGhpcyk7XG5cbiAgICAgIGRvY3VtZW50Lm9ubW91c2V1cCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZG9jdW1lbnQub25tb3VzZW1vdmUgPSBkb2N1bWVudC5vbm1vdXNldXAgPSBudWxsO1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQub250b3VjaG1vdmUgPSBCWC5wcm94eShmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5yaWdodFBlcmNlbnQgPVxuICAgICAgICAgIDEwMCAtICh0aGlzLmNvdW50TmV3TGVmdChldmVudCkgKiAxMDApIC8gdGhpcy50cmFja2VyV3JhcC5vZmZzZXRXaWR0aDtcbiAgICAgICAgdGhpcy5tYWtlUmlnaHRTbGlkZXJNb3ZlKCk7XG4gICAgICB9LCB0aGlzKTtcblxuICAgICAgZG9jdW1lbnQub250b3VjaGVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZG9jdW1lbnQub250b3VjaG1vdmUgPSBkb2N1bWVudC5vbnRvdWNoZW5kID0gbnVsbDtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIHJldHVybiBTbWFydEZpbHRlcjtcbn0pKCk7XG4iLCJpbXBvcnQgbm9VaVNsaWRlciBmcm9tIFwibm91aXNsaWRlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSYW5nZUlucHV0IHtcbiAgY29uc3RydWN0b3Ioc2xpZGVyU2VsZWN0b3IpIHtcbiAgICB0aGlzLl9jb250YWluZXJFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzbGlkZXJTZWxlY3Rvcik7XG4gICAgdGhpcy5faW5wdXRNaW5FbGVtZW50ID0gdGhpcy5fY29udGFpbmVyRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYC5qcy1yYW5nZS1taW5gXG4gICAgKTtcbiAgICB0aGlzLl9pbnB1dE1heEVsZW1lbnQgPSB0aGlzLl9jb250YWluZXJFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgLmpzLXJhbmdlLW1heGBcbiAgICApO1xuICAgIHRoaXMuX3NsaWRlckVsZW1lbnQgPSB0aGlzLl9jb250YWluZXJFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgLmpzLXJhbmdlLXNsaWRlcmBcbiAgICApO1xuXG4gICAgdGhpcy5fbWluVmFsdWUgPSArdGhpcy5fc2xpZGVyRWxlbWVudC5kYXRhc2V0Lm1pbjtcbiAgICB0aGlzLl9tYXhWYWx1ZSA9ICt0aGlzLl9zbGlkZXJFbGVtZW50LmRhdGFzZXQubWF4O1xuICAgIHRoaXMuX3N0ZXAgPSArdGhpcy5fc2xpZGVyRWxlbWVudC5kYXRhc2V0LnN0ZXA7XG5cbiAgICB0aGlzLl9vblNsaWRlckNoYW5nZSA9IHRoaXMuX29uU2xpZGVyQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fb25NaW5DaGFuZ2UgPSB0aGlzLl9vbk1pbkNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX29uTWF4Q2hhbmdlID0gdGhpcy5fb25NYXhDaGFuZ2UuYmluZCh0aGlzKTtcbiAgfVxuXG4gIF9vblNsaWRlckNoYW5nZSh2YWx1ZXMpIHtcbiAgICBjb25zdCBbbWluLCBtYXhdID0gdmFsdWVzO1xuICAgIHRoaXMuX2lucHV0TWluRWxlbWVudC52YWx1ZSA9IE1hdGgudHJ1bmMobWluKTtcbiAgICB0aGlzLl9pbnB1dE1heEVsZW1lbnQudmFsdWUgPSBNYXRoLnRydW5jKG1heCk7XG4gIH1cblxuICBfb25NaW5DaGFuZ2UoZXZ0KSB7XG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gZXZ0LnRhcmdldDtcbiAgICB0aGlzLl9zbGlkZXJFbGVtZW50Lm5vVWlTbGlkZXIuc2V0KFtNYXRoLnJvdW5kKHZhbHVlKSwgbnVsbF0pO1xuICB9XG5cbiAgX29uTWF4Q2hhbmdlKGV2dCkge1xuICAgIGNvbnN0IHsgdmFsdWUgfSA9IGV2dC50YXJnZXQ7XG4gICAgdGhpcy5fc2xpZGVyRWxlbWVudC5ub1VpU2xpZGVyLnNldChbbnVsbCwgTWF0aC5yb3VuZCh2YWx1ZSldKTtcbiAgfVxuXG4gIF9zZXRIYW5kbGVycygpIHtcbiAgICB0aGlzLl9zbGlkZXJFbGVtZW50Lm5vVWlTbGlkZXIub24oYHVwZGF0ZWAsIHRoaXMuX29uU2xpZGVyQ2hhbmdlKTtcbiAgICB0aGlzLl9pbnB1dE1pbkVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihgY2hhbmdlYCwgdGhpcy5fb25NaW5DaGFuZ2UpO1xuICAgIHRoaXMuX2lucHV0TWF4RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGBjaGFuZ2VgLCB0aGlzLl9vbk1heENoYW5nZSk7XG4gIH1cblxuICBpbml0KCkge1xuICAgIG5vVWlTbGlkZXIuY3JlYXRlKHRoaXMuX3NsaWRlckVsZW1lbnQsIHtcbiAgICAgIHN0YXJ0OiBbdGhpcy5fbWluVmFsdWUsIHRoaXMuX21heFZhbHVlXSxcbiAgICAgIGNvbm5lY3Q6IHRydWUsXG4gICAgICByYW5nZToge1xuICAgICAgICBtaW46IHRoaXMuX21pblZhbHVlLFxuICAgICAgICBtYXg6IHRoaXMuX21heFZhbHVlLFxuICAgICAgfSxcbiAgICAgIHN0ZXA6IHRoaXMuX3N0ZXAsXG4gICAgICB0b29sdGlwczogdHJ1ZSxcbiAgICAgIGZvcm1hdDoge1xuICAgICAgICB0bzogKHZhbHVlKSA9PiBNYXRoLnRydW5jKHZhbHVlKSxcbiAgICAgICAgZnJvbTogKHZhbHVlKSA9PiBNYXRoLnRydW5jKHZhbHVlKSxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICB0aGlzLl9zZXRIYW5kbGVycygpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9