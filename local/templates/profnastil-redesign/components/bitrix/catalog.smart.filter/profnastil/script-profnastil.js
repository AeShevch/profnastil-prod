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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhIb2xlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pdGVyYWJsZVRvQXJyYXlMaW1pdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9ub25JdGVyYWJsZVJlc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vdGVtcGxhdGVzL3Byb2ZuYXN0aWwtcmVkZXNpZ24vY29tcG9uZW50cy9iaXRyaXgvY2F0YWxvZy5zbWFydC5maWx0ZXIvcHJvZm5hc3RpbC9zcmMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL3RlbXBsYXRlcy9wcm9mbmFzdGlsLXJlZGVzaWduL2NvbXBvbmVudHMvYml0cml4L2NhdGFsb2cuc21hcnQuZmlsdGVyL3Byb2ZuYXN0aWwvc3JjL2pzL3JhbmdlLWlucHV0LmpzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIndpbmRvdyIsIkpDU21hcnRGaWx0ZXIiLCJhamF4VVJMIiwidmlld01vZGUiLCJwYXJhbXMiLCJmb3JtIiwidGltZXIiLCJjYWNoZUtleSIsImNhY2hlIiwicG9wdXBzIiwiU0VGX1NFVF9GSUxURVJfVVJMIiwiYmluZFVybFRvQnV0dG9uIiwic2VmIiwiU0VGX0RFTF9GSUxURVJfVVJMIiwicHJvdG90eXBlIiwia2V5dXAiLCJpbnB1dCIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJCWCIsImRlbGVnYXRlIiwicmVsb2FkIiwiY2xpY2siLCJjaGVja2JveCIsInBvc2l0aW9uIiwicG9zIiwiZmluZFBhcmVudCIsInRhZyIsInZhbHVlcyIsIm5hbWUiLCJ2YWx1ZSIsImdhdGhlcklucHV0c1ZhbHVlcyIsImZpbmRDaGlsZHJlbiIsIlJlZ0V4cCIsImkiLCJsZW5ndGgiLCJjdXJGaWx0ZXJpbnB1dCIsInBvc3RIYW5kbGVyIiwic2V0X2ZpbHRlciIsImRpc2FibGVkIiwiYWpheCIsImxvYWRKU09OIiwidmFsdWVzMnBvc3QiLCJ1cGRhdGVJdGVtIiwiUElEIiwiYXJJdGVtIiwiUFJPUEVSVFlfVFlQRSIsIlBSSUNFIiwidHJhY2tCYXIiLCJFTkNPREVEX0lEIiwiVkFMVUVTIiwiTUlOIiwiRklMVEVSRURfVkFMVUUiLCJzZXRNaW5GaWx0ZXJlZFZhbHVlIiwiVkFMVUUiLCJNQVgiLCJzZXRNYXhGaWx0ZXJlZFZhbHVlIiwiaGFzT3duUHJvcGVydHkiLCJjb250cm9sIiwiQ09OVFJPTF9JRCIsImxhYmVsIiwicXVlcnlTZWxlY3RvciIsIkRJU0FCTEVEIiwiYWRkQ2xhc3MiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2xhc3MiLCJpbm5lckhUTUwiLCJFTEVNRU5UX0NPVU5UIiwicmVzdWx0IiwiZnJvbUNhY2hlIiwiaHJlZkZJTFRFUiIsInVybCIsImN1clByb3AiLCJtb2RlZiIsIm1vZGVmX251bSIsIklURU1TIiwicG9wdXBJZCIsImRlc3Ryb3kiLCJGSUxURVJfVVJMIiwiaHJlZiIsInV0aWwiLCJodG1sc3BlY2lhbGNoYXJzYmFjayIsIkZJTFRFUl9BSkFYX1VSTCIsIkNPTVBPTkVOVF9DT05UQUlORVJfSUQiLCJ1bmJpbmRBbGwiLCJiaW5kIiwiZSIsImluc2VydFRvTm9kZSIsIlByZXZlbnREZWZhdWx0IiwiSU5TVEFOVF9SRUxPQUQiLCJzdHlsZSIsImRpc3BsYXkiLCJmaW5kQ2hpbGQiLCJjbGFzcyIsImFwcGVuZENoaWxkIiwiYnV0dG9uSWQiLCJidXR0b24iLCJwcm94eSIsImoiLCJmdW5jIiwidHlwZSIsImxvY2F0aW9uIiwiZWxlbWVudHMiLCJlbCIsInRvTG93ZXJDYXNlIiwiY2hlY2tlZCIsIm9wdGlvbnMiLCJzZWxlY3RlZCIsInBvc3QiLCJjdXJyZW50IiwicCIsImluZGV4T2YiLCJzdWJzdHJpbmciLCJyZXN0IiwicHAiLCJoaWRlRmlsdGVyUHJvcHMiLCJlbGVtZW50Iiwib2JqIiwiZmlsdGVyQmxvY2siLCJwcm9wQW5nbGUiLCJoYXNDbGFzcyIsImVhc2luZyIsImR1cmF0aW9uIiwic3RhcnQiLCJvcGFjaXR5IiwiaGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiZmluaXNoIiwidHJhbnNpdGlvbiIsInRyYW5zaXRpb25zIiwicXVhcnQiLCJzdGVwIiwic3RhdGUiLCJjb21wbGV0ZSIsInNldEF0dHJpYnV0ZSIsImFuaW1hdGUiLCJvYmpfY2hpbGRyZW5faGVpZ2h0Iiwic2hvd0Ryb3BEb3duUG9wdXAiLCJjb250ZW50Tm9kZSIsIlBvcHVwV2luZG93TWFuYWdlciIsImNyZWF0ZSIsImF1dG9IaWRlIiwib2Zmc2V0TGVmdCIsIm9mZnNldFRvcCIsIm92ZXJsYXkiLCJkcmFnZ2FibGUiLCJyZXN0cmljdCIsImNsb3NlQnlFc2MiLCJjb250ZW50IiwiY2xvbmUiLCJzaG93Iiwic2VsZWN0RHJvcERvd25JdGVtIiwiY29udHJvbElkIiwid3JhcENvbnRhaW5lciIsImNsYXNzTmFtZSIsImN1cnJlbnRPcHRpb24iLCJnZXRDdXJyZW50UG9wdXAiLCJjbG9zZSIsIm5hbWVzcGFjZSIsIklibG9jayIsIlNtYXJ0RmlsdGVyIiwiYXJQYXJhbXMiLCJsZWZ0U2xpZGVyIiwicmlnaHRTbGlkZXIiLCJ0cmFja2VyIiwidHJhY2tlcldyYXAiLCJtaW5JbnB1dCIsIm1pbklucHV0SWQiLCJtYXhJbnB1dCIsIm1heElucHV0SWQiLCJtaW5QcmljZSIsInBhcnNlRmxvYXQiLCJtYXhQcmljZSIsImN1ck1pblByaWNlIiwiY3VyTWF4UHJpY2UiLCJmbHRNaW5QcmljZSIsImZsdE1heFByaWNlIiwicHJlY2lzaW9uIiwicHJpY2VEaWZmIiwibGVmdFBlcmNlbnQiLCJyaWdodFBlcmNlbnQiLCJmbHRNaW5QZXJjZW50IiwiZmx0TWF4UGVyY2VudCIsImNvbG9yVW5hdmFpbGFibGVBY3RpdmUiLCJjb2xvckF2YWlsYWJsZUFjdGl2ZSIsImNvbG9yQXZhaWxhYmxlSW5hY3RpdmUiLCJpc1RvdWNoIiwiaW5pdCIsImRvY3VtZW50RWxlbWVudCIsImV2ZW50Iiwib25Nb3ZlTGVmdFNsaWRlciIsIm9uTW92ZVJpZ2h0U2xpZGVyIiwib25JbnB1dENoYW5nZSIsImxlZnQiLCJyaWdodCIsImdldFhDb29yZCIsImVsZW0iLCJib3giLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJib2R5IiwiZG9jRWxlbSIsInNjcm9sbExlZnQiLCJwYWdlWE9mZnNldCIsImNsaWVudExlZnQiLCJNYXRoIiwicm91bmQiLCJnZXRQYWdlWCIsInBhZ2VYIiwidGFyZ2V0VG91Y2hlcyIsImNsaWVudFgiLCJodG1sIiwicmVjb3VudE1pblByaWNlIiwibmV3TWluUHJpY2UiLCJ0b0ZpeGVkIiwic21hcnRGaWx0ZXIiLCJyZWNvdW50TWF4UHJpY2UiLCJuZXdNYXhQcmljZSIsImxlZnRJbnB1dFZhbHVlIiwibWFrZUxlZnRTbGlkZXJNb3ZlIiwicmlnaHRJbnB1dFZhbHVlIiwibWFrZVJpZ2h0U2xpZGVyTW92ZSIsInJlY291bnRQcmljZSIsImFyZUJvdGhTbGlkZXJzTW92aW5nIiwiY291bnROZXdMZWZ0IiwidHJhY2tlclhDb29yZCIsInJpZ2h0RWRnZSIsIm9mZnNldFdpZHRoIiwibmV3TGVmdCIsIm9uZHJhZ3N0YXJ0Iiwib25tb3VzZW1vdmUiLCJvbm1vdXNldXAiLCJvbnRvdWNobW92ZSIsIm9udG91Y2hlbmQiLCJ0b3VjaGVuZCIsIlJhbmdlSW5wdXQiLCJzbGlkZXJTZWxlY3RvciIsIl9jb250YWluZXJFbGVtZW50IiwiX2lucHV0TWluRWxlbWVudCIsIl9pbnB1dE1heEVsZW1lbnQiLCJfc2xpZGVyRWxlbWVudCIsIl9taW5WYWx1ZSIsImRhdGFzZXQiLCJtaW4iLCJfbWF4VmFsdWUiLCJtYXgiLCJfc3RlcCIsIl9vblNsaWRlckNoYW5nZSIsIl9vbk1pbkNoYW5nZSIsIl9vbk1heENoYW5nZSIsInRydW5jIiwiZXZ0IiwidGFyZ2V0Iiwibm9VaVNsaWRlciIsInNldCIsIm9uIiwiY29ubmVjdCIsInJhbmdlIiwidG9vbHRpcHMiLCJmb3JtYXQiLCJ0byIsImZyb20iLCJfc2V0SGFuZGxlcnMiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FB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QjtBQVFyQ1ksZ0JBQVEsRUFBRSxJQVIyQjtBQVNyQ0MsY0FBTSxFQUFFO0FBQ05DLFlBQUUsRUFBRSxZQUFDck8sS0FBRDtBQUFBLG1CQUFXOEssSUFBSSxDQUFDNkMsS0FBTCxDQUFXM04sS0FBWCxDQUFYO0FBQUEsV0FERTtBQUVOc08sY0FBSSxFQUFFLGNBQUN0TyxLQUFEO0FBQUEsbUJBQVc4SyxJQUFJLENBQUM2QyxLQUFMLENBQVczTixLQUFYLENBQVg7QUFBQTtBQUZBO0FBVDZCLE9BQXZDOztBQWVBLFdBQUt1TyxZQUFMO0FBQ0QiLCJmaWxlIjoibG9jYWwvdGVtcGxhdGVzL3Byb2ZuYXN0aWwtcmVkZXNpZ24vY29tcG9uZW50cy9iaXRyaXgvY2F0YWxvZy5zbWFydC5maWx0ZXIvcHJvZm5hc3RpbC9zY3JpcHQtcHJvZm5hc3RpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL0FwcGxpY2F0aW9ucy9NQU1QL2h0ZG9jcy9wcm9mbmFzdGlsLXByb2QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vdGVtcGxhdGVzL3Byb2ZuYXN0aWwtcmVkZXNpZ24vY29tcG9uZW50cy9iaXRyaXgvY2F0YWxvZy5zbWFydC5maWx0ZXIvcHJvZm5hc3RpbC9zcmMvanMvYXBwLmpzXCIpO1xuIiwiZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYXJyMltpXSA9IGFycltpXTtcbiAgfVxuXG4gIHJldHVybiBhcnIyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheUxpa2VUb0FycmF5O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlXaXRoSG9sZXM7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2s7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzcztcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuO1xuICB2YXIgX2FyciA9IFtdO1xuICB2YXIgX24gPSB0cnVlO1xuICB2YXIgX2QgPSBmYWxzZTtcbiAgdmFyIF9lID0gdW5kZWZpbmVkO1xuXG4gIHRyeSB7XG4gICAgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkge1xuICAgICAgX2Fyci5wdXNoKF9zLnZhbHVlKTtcblxuICAgICAgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgX2QgPSB0cnVlO1xuICAgIF9lID0gZXJyO1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChfZCkgdGhyb3cgX2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIF9hcnI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheUxpbWl0O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX25vbkl0ZXJhYmxlUmVzdDtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJ2YXIgYXJyYXlXaXRoSG9sZXMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhIb2xlc1wiKTtcblxudmFyIGl0ZXJhYmxlVG9BcnJheUxpbWl0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaXRlcmFibGVUb0FycmF5TGltaXRcIik7XG5cbnZhciB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5XCIpO1xuXG52YXIgbm9uSXRlcmFibGVSZXN0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvbm9uSXRlcmFibGVSZXN0XCIpO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHtcbiAgcmV0dXJuIGFycmF5V2l0aEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IG5vbkl0ZXJhYmxlUmVzdCgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zbGljZWRUb0FycmF5O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcblxuICAgIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcblxuICAgIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2FycmF5TGlrZVRvQXJyYXlcIik7XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImltcG9ydCBSYW5nZUlucHV0IGZyb20gXCIuL3JhbmdlLWlucHV0XCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoYERPTUNvbnRlbnRMb2FkZWRgLCAoKSA9PiB7XG4gIC8vIG5ldyBSYW5nZUlucHV0KGAuanMtcmFuZ2UtZmlsdGVyYCkuaW5pdCgpO1xufSk7XG5cbi8vIEJpdHJpeCBzY3JpcHRzXG53aW5kb3cuSkNTbWFydEZpbHRlciA9IGZ1bmN0aW9uIChhamF4VVJMLCB2aWV3TW9kZSwgcGFyYW1zKSB7XG4gIHRoaXMuYWpheFVSTCA9IGFqYXhVUkw7XG4gIHRoaXMuZm9ybSA9IG51bGw7XG4gIHRoaXMudGltZXIgPSBudWxsO1xuICB0aGlzLmNhY2hlS2V5ID0gXCJcIjtcbiAgdGhpcy5jYWNoZSA9IFtdO1xuICB0aGlzLnBvcHVwcyA9IFtdO1xuICB0aGlzLnZpZXdNb2RlID0gdmlld01vZGU7XG4gIGlmIChwYXJhbXMgJiYgcGFyYW1zLlNFRl9TRVRfRklMVEVSX1VSTCkge1xuICAgIHRoaXMuYmluZFVybFRvQnV0dG9uKFwic2V0X2ZpbHRlclwiLCBwYXJhbXMuU0VGX1NFVF9GSUxURVJfVVJMKTtcbiAgICB0aGlzLnNlZiA9IHRydWU7XG4gIH1cbiAgaWYgKHBhcmFtcyAmJiBwYXJhbXMuU0VGX0RFTF9GSUxURVJfVVJMKSB7XG4gICAgdGhpcy5iaW5kVXJsVG9CdXR0b24oXCJkZWxfZmlsdGVyXCIsIHBhcmFtcy5TRUZfREVMX0ZJTFRFUl9VUkwpO1xuICB9XG59O1xuXG5KQ1NtYXJ0RmlsdGVyLnByb3RvdHlwZS5rZXl1cCA9IGZ1bmN0aW9uIChpbnB1dCkge1xuICBpZiAoISF0aGlzLnRpbWVyKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpO1xuICB9XG4gIHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KFxuICAgIEJYLmRlbGVnYXRlKGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMucmVsb2FkKGlucHV0KTtcbiAgICB9LCB0aGlzKSxcbiAgICA1MDBcbiAgKTtcbn07XG5cbkpDU21hcnRGaWx0ZXIucHJvdG90eXBlLmNsaWNrID0gZnVuY3Rpb24gKGNoZWNrYm94KSB7XG4gIGlmICghIXRoaXMudGltZXIpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lcik7XG4gIH1cblxuICB0aGlzLnRpbWVyID0gc2V0VGltZW91dChcbiAgICBCWC5kZWxlZ2F0ZShmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLnJlbG9hZChjaGVja2JveCk7XG4gICAgfSwgdGhpcyksXG4gICAgNTAwXG4gICk7XG59O1xuXG5KQ1NtYXJ0RmlsdGVyLnByb3RvdHlwZS5yZWxvYWQgPSBmdW5jdGlvbiAoaW5wdXQpIHtcbiAgaWYgKHRoaXMuY2FjaGVLZXkgIT09IFwiXCIpIHtcbiAgICAvL1Bvc3Rwcm9uZSBiYWNrZW5kIHF1ZXJ5XG4gICAgaWYgKCEhdGhpcy50aW1lcikge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpO1xuICAgIH1cbiAgICB0aGlzLnRpbWVyID0gc2V0VGltZW91dChcbiAgICAgIEJYLmRlbGVnYXRlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5yZWxvYWQoaW5wdXQpO1xuICAgICAgfSwgdGhpcyksXG4gICAgICAxMDAwXG4gICAgKTtcbiAgICByZXR1cm47XG4gIH1cbiAgdGhpcy5jYWNoZUtleSA9IFwifFwiO1xuXG4gIHRoaXMucG9zaXRpb24gPSBCWC5wb3MoaW5wdXQsIHRydWUpO1xuICB0aGlzLmZvcm0gPSBCWC5maW5kUGFyZW50KGlucHV0LCB7IHRhZzogXCJmb3JtXCIgfSk7XG4gIGlmICh0aGlzLmZvcm0pIHtcbiAgICB2YXIgdmFsdWVzID0gW107XG4gICAgdmFsdWVzWzBdID0geyBuYW1lOiBcImFqYXhcIiwgdmFsdWU6IFwieVwiIH07XG4gICAgdGhpcy5nYXRoZXJJbnB1dHNWYWx1ZXMoXG4gICAgICB2YWx1ZXMsXG4gICAgICBCWC5maW5kQ2hpbGRyZW4oXG4gICAgICAgIHRoaXMuZm9ybSxcbiAgICAgICAgeyB0YWc6IG5ldyBSZWdFeHAoXCJeKGlucHV0fHNlbGVjdCkkXCIsIFwiaVwiKSB9LFxuICAgICAgICB0cnVlXG4gICAgICApXG4gICAgKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmFsdWVzLmxlbmd0aDsgaSsrKVxuICAgICAgdGhpcy5jYWNoZUtleSArPSB2YWx1ZXNbaV0ubmFtZSArIFwiOlwiICsgdmFsdWVzW2ldLnZhbHVlICsgXCJ8XCI7XG5cbiAgICBpZiAodGhpcy5jYWNoZVt0aGlzLmNhY2hlS2V5XSkge1xuICAgICAgdGhpcy5jdXJGaWx0ZXJpbnB1dCA9IGlucHV0O1xuICAgICAgdGhpcy5wb3N0SGFuZGxlcih0aGlzLmNhY2hlW3RoaXMuY2FjaGVLZXldLCB0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuc2VmKSB7XG4gICAgICAgIHZhciBzZXRfZmlsdGVyID0gQlgoXCJzZXRfZmlsdGVyXCIpO1xuICAgICAgICBzZXRfZmlsdGVyLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5jdXJGaWx0ZXJpbnB1dCA9IGlucHV0O1xuICAgICAgQlguYWpheC5sb2FkSlNPTihcbiAgICAgICAgdGhpcy5hamF4VVJMLFxuICAgICAgICB0aGlzLnZhbHVlczJwb3N0KHZhbHVlcyksXG4gICAgICAgIEJYLmRlbGVnYXRlKHRoaXMucG9zdEhhbmRsZXIsIHRoaXMpXG4gICAgICApO1xuICAgIH1cbiAgfVxufTtcblxuSkNTbWFydEZpbHRlci5wcm90b3R5cGUudXBkYXRlSXRlbSA9IGZ1bmN0aW9uIChQSUQsIGFySXRlbSkge1xuICBpZiAoYXJJdGVtLlBST1BFUlRZX1RZUEUgPT09IFwiTlwiIHx8IGFySXRlbS5QUklDRSkge1xuICAgIHZhciB0cmFja0JhciA9IHdpbmRvd1tcInRyYWNrQmFyXCIgKyBQSURdO1xuICAgIGlmICghdHJhY2tCYXIgJiYgYXJJdGVtLkVOQ09ERURfSUQpXG4gICAgICB0cmFja0JhciA9IHdpbmRvd1tcInRyYWNrQmFyXCIgKyBhckl0ZW0uRU5DT0RFRF9JRF07XG5cbiAgICBpZiAodHJhY2tCYXIgJiYgYXJJdGVtLlZBTFVFUykge1xuICAgICAgaWYgKGFySXRlbS5WQUxVRVMuTUlOKSB7XG4gICAgICAgIGlmIChhckl0ZW0uVkFMVUVTLk1JTi5GSUxURVJFRF9WQUxVRSlcbiAgICAgICAgICB0cmFja0Jhci5zZXRNaW5GaWx0ZXJlZFZhbHVlKGFySXRlbS5WQUxVRVMuTUlOLkZJTFRFUkVEX1ZBTFVFKTtcbiAgICAgICAgZWxzZSB0cmFja0Jhci5zZXRNaW5GaWx0ZXJlZFZhbHVlKGFySXRlbS5WQUxVRVMuTUlOLlZBTFVFKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGFySXRlbS5WQUxVRVMuTUFYKSB7XG4gICAgICAgIGlmIChhckl0ZW0uVkFMVUVTLk1BWC5GSUxURVJFRF9WQUxVRSlcbiAgICAgICAgICB0cmFja0Jhci5zZXRNYXhGaWx0ZXJlZFZhbHVlKGFySXRlbS5WQUxVRVMuTUFYLkZJTFRFUkVEX1ZBTFVFKTtcbiAgICAgICAgZWxzZSB0cmFja0Jhci5zZXRNYXhGaWx0ZXJlZFZhbHVlKGFySXRlbS5WQUxVRVMuTUFYLlZBTFVFKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAoYXJJdGVtLlZBTFVFUykge1xuICAgIGZvciAodmFyIGkgaW4gYXJJdGVtLlZBTFVFUykge1xuICAgICAgaWYgKGFySXRlbS5WQUxVRVMuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gYXJJdGVtLlZBTFVFU1tpXTtcbiAgICAgICAgdmFyIGNvbnRyb2wgPSBCWCh2YWx1ZS5DT05UUk9MX0lEKTtcblxuICAgICAgICBpZiAoISFjb250cm9sKSB7XG4gICAgICAgICAgdmFyIGxhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICdbZGF0YS1yb2xlPVwibGFiZWxfJyArIHZhbHVlLkNPTlRST0xfSUQgKyAnXCJdJ1xuICAgICAgICAgICk7XG4gICAgICAgICAgaWYgKHZhbHVlLkRJU0FCTEVEKSB7XG4gICAgICAgICAgICBpZiAobGFiZWwpIEJYLmFkZENsYXNzKGxhYmVsLCBcImRpc2FibGVkXCIpO1xuICAgICAgICAgICAgZWxzZSBCWC5hZGRDbGFzcyhjb250cm9sLnBhcmVudE5vZGUsIFwiZGlzYWJsZWRcIik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChsYWJlbCkgQlgucmVtb3ZlQ2xhc3MobGFiZWwsIFwiZGlzYWJsZWRcIik7XG4gICAgICAgICAgICBlbHNlIEJYLnJlbW92ZUNsYXNzKGNvbnRyb2wucGFyZW50Tm9kZSwgXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodmFsdWUuaGFzT3duUHJvcGVydHkoXCJFTEVNRU5UX0NPVU5UXCIpKSB7XG4gICAgICAgICAgICBsYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICdbZGF0YS1yb2xlPVwiY291bnRfJyArIHZhbHVlLkNPTlRST0xfSUQgKyAnXCJdJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmIChsYWJlbCkgbGFiZWwuaW5uZXJIVE1MID0gdmFsdWUuRUxFTUVOVF9DT1VOVDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbkpDU21hcnRGaWx0ZXIucHJvdG90eXBlLnBvc3RIYW5kbGVyID0gZnVuY3Rpb24gKHJlc3VsdCwgZnJvbUNhY2hlKSB7XG4gIHZhciBocmVmRklMVEVSLCB1cmwsIGN1clByb3A7XG4gIHZhciBtb2RlZiA9IEJYKFwibW9kZWZcIik7XG4gIHZhciBtb2RlZl9udW0gPSBCWChcIm1vZGVmX251bVwiKTtcblxuICBpZiAoISFyZXN1bHQgJiYgISFyZXN1bHQuSVRFTVMpIHtcbiAgICBmb3IgKHZhciBwb3B1cElkIGluIHRoaXMucG9wdXBzKSB7XG4gICAgICBpZiAodGhpcy5wb3B1cHMuaGFzT3duUHJvcGVydHkocG9wdXBJZCkpIHtcbiAgICAgICAgdGhpcy5wb3B1cHNbcG9wdXBJZF0uZGVzdHJveSgpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnBvcHVwcyA9IFtdO1xuXG4gICAgZm9yICh2YXIgUElEIGluIHJlc3VsdC5JVEVNUykge1xuICAgICAgaWYgKHJlc3VsdC5JVEVNUy5oYXNPd25Qcm9wZXJ0eShQSUQpKSB7XG4gICAgICAgIHRoaXMudXBkYXRlSXRlbShQSUQsIHJlc3VsdC5JVEVNU1tQSURdKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoISFtb2RlZiAmJiAhIW1vZGVmX251bSkge1xuICAgICAgbW9kZWZfbnVtLmlubmVySFRNTCA9IHJlc3VsdC5FTEVNRU5UX0NPVU5UO1xuICAgICAgaHJlZkZJTFRFUiA9IEJYLmZpbmRDaGlsZHJlbihtb2RlZiwgeyB0YWc6IFwiQVwiIH0sIHRydWUpO1xuXG4gICAgICBpZiAocmVzdWx0LkZJTFRFUl9VUkwgJiYgaHJlZkZJTFRFUikge1xuICAgICAgICBocmVmRklMVEVSWzBdLmhyZWYgPSBCWC51dGlsLmh0bWxzcGVjaWFsY2hhcnNiYWNrKHJlc3VsdC5GSUxURVJfVVJMKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlc3VsdC5GSUxURVJfQUpBWF9VUkwgJiYgcmVzdWx0LkNPTVBPTkVOVF9DT05UQUlORVJfSUQpIHtcbiAgICAgICAgQlgudW5iaW5kQWxsKGhyZWZGSUxURVJbMF0pO1xuICAgICAgICBCWC5iaW5kKGhyZWZGSUxURVJbMF0sIFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICB1cmwgPSBCWC51dGlsLmh0bWxzcGVjaWFsY2hhcnNiYWNrKHJlc3VsdC5GSUxURVJfQUpBWF9VUkwpO1xuICAgICAgICAgIEJYLmFqYXguaW5zZXJ0VG9Ob2RlKHVybCwgcmVzdWx0LkNPTVBPTkVOVF9DT05UQUlORVJfSUQpO1xuICAgICAgICAgIHJldHVybiBCWC5QcmV2ZW50RGVmYXVsdChlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZXN1bHQuSU5TVEFOVF9SRUxPQUQgJiYgcmVzdWx0LkNPTVBPTkVOVF9DT05UQUlORVJfSUQpIHtcbiAgICAgICAgdXJsID0gQlgudXRpbC5odG1sc3BlY2lhbGNoYXJzYmFjayhyZXN1bHQuRklMVEVSX0FKQVhfVVJMKTtcbiAgICAgICAgQlguYWpheC5pbnNlcnRUb05vZGUodXJsLCByZXN1bHQuQ09NUE9ORU5UX0NPTlRBSU5FUl9JRCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAobW9kZWYuc3R5bGUuZGlzcGxheSA9PT0gXCJub25lXCIpIHtcbiAgICAgICAgICBtb2RlZi5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnZpZXdNb2RlID09IFwiVkVSVElDQUxcIikge1xuICAgICAgICAgIGN1clByb3AgPSBCWC5maW5kQ2hpbGQoXG4gICAgICAgICAgICBCWC5maW5kUGFyZW50KHRoaXMuY3VyRmlsdGVyaW5wdXQsIHtcbiAgICAgICAgICAgICAgY2xhc3M6IFwiYngtZmlsdGVyLXBhcmFtZXRlcnMtYm94XCIsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHsgY2xhc3M6IFwiYngtZmlsdGVyLWNvbnRhaW5lci1tb2RlZlwiIH0sXG4gICAgICAgICAgICB0cnVlLFxuICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICApO1xuICAgICAgICAgIGN1clByb3AuYXBwZW5kQ2hpbGQobW9kZWYpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlc3VsdC5TRUZfU0VUX0ZJTFRFUl9VUkwpIHtcbiAgICAgICAgICB0aGlzLmJpbmRVcmxUb0J1dHRvbihcInNldF9maWx0ZXJcIiwgcmVzdWx0LlNFRl9TRVRfRklMVEVSX1VSTCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAodGhpcy5zZWYpIHtcbiAgICB2YXIgc2V0X2ZpbHRlciA9IEJYKFwic2V0X2ZpbHRlclwiKTtcbiAgICBzZXRfZmlsdGVyLmRpc2FibGVkID0gZmFsc2U7XG4gIH1cblxuICBpZiAoIWZyb21DYWNoZSAmJiB0aGlzLmNhY2hlS2V5ICE9PSBcIlwiKSB7XG4gICAgdGhpcy5jYWNoZVt0aGlzLmNhY2hlS2V5XSA9IHJlc3VsdDtcbiAgfVxuICB0aGlzLmNhY2hlS2V5ID0gXCJcIjtcbn07XG5cbkpDU21hcnRGaWx0ZXIucHJvdG90eXBlLmJpbmRVcmxUb0J1dHRvbiA9IGZ1bmN0aW9uIChidXR0b25JZCwgdXJsKSB7XG4gIHZhciBidXR0b24gPSBCWChidXR0b25JZCk7XG4gIGlmIChidXR0b24pIHtcbiAgICB2YXIgcHJveHkgPSBmdW5jdGlvbiAoaiwgZnVuYykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmMoaik7XG4gICAgICB9O1xuICAgIH07XG5cbiAgICBpZiAoYnV0dG9uLnR5cGUgPT0gXCJzdWJtaXRcIikgYnV0dG9uLnR5cGUgPSBcImJ1dHRvblwiO1xuXG4gICAgQlguYmluZChcbiAgICAgIGJ1dHRvbixcbiAgICAgIFwiY2xpY2tcIixcbiAgICAgIHByb3h5KHVybCwgZnVuY3Rpb24gKHVybCkge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSlcbiAgICApO1xuICB9XG59O1xuXG5KQ1NtYXJ0RmlsdGVyLnByb3RvdHlwZS5nYXRoZXJJbnB1dHNWYWx1ZXMgPSBmdW5jdGlvbiAodmFsdWVzLCBlbGVtZW50cykge1xuICBpZiAoZWxlbWVudHMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZWwgPSBlbGVtZW50c1tpXTtcbiAgICAgIGlmIChlbC5kaXNhYmxlZCB8fCAhZWwudHlwZSkgY29udGludWU7XG5cbiAgICAgIHN3aXRjaCAoZWwudHlwZS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgIGNhc2UgXCJ0ZXh0XCI6XG4gICAgICAgIGNhc2UgXCJ0ZXh0YXJlYVwiOlxuICAgICAgICBjYXNlIFwicGFzc3dvcmRcIjpcbiAgICAgICAgY2FzZSBcImhpZGRlblwiOlxuICAgICAgICBjYXNlIFwic2VsZWN0LW9uZVwiOlxuICAgICAgICAgIGlmIChlbC52YWx1ZS5sZW5ndGgpXG4gICAgICAgICAgICB2YWx1ZXNbdmFsdWVzLmxlbmd0aF0gPSB7IG5hbWU6IGVsLm5hbWUsIHZhbHVlOiBlbC52YWx1ZSB9O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwicmFkaW9cIjpcbiAgICAgICAgY2FzZSBcImNoZWNrYm94XCI6XG4gICAgICAgICAgaWYgKGVsLmNoZWNrZWQpXG4gICAgICAgICAgICB2YWx1ZXNbdmFsdWVzLmxlbmd0aF0gPSB7IG5hbWU6IGVsLm5hbWUsIHZhbHVlOiBlbC52YWx1ZSB9O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwic2VsZWN0LW11bHRpcGxlXCI6XG4gICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBlbC5vcHRpb25zLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBpZiAoZWwub3B0aW9uc1tqXS5zZWxlY3RlZClcbiAgICAgICAgICAgICAgdmFsdWVzW3ZhbHVlcy5sZW5ndGhdID0ge1xuICAgICAgICAgICAgICAgIG5hbWU6IGVsLm5hbWUsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGVsLm9wdGlvbnNbal0udmFsdWUsXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuSkNTbWFydEZpbHRlci5wcm90b3R5cGUudmFsdWVzMnBvc3QgPSBmdW5jdGlvbiAodmFsdWVzKSB7XG4gIHZhciBwb3N0ID0gW107XG4gIHZhciBjdXJyZW50ID0gcG9zdDtcbiAgdmFyIGkgPSAwO1xuXG4gIHdoaWxlIChpIDwgdmFsdWVzLmxlbmd0aCkge1xuICAgIHZhciBwID0gdmFsdWVzW2ldLm5hbWUuaW5kZXhPZihcIltcIik7XG4gICAgaWYgKHAgPT0gLTEpIHtcbiAgICAgIGN1cnJlbnRbdmFsdWVzW2ldLm5hbWVdID0gdmFsdWVzW2ldLnZhbHVlO1xuICAgICAgY3VycmVudCA9IHBvc3Q7XG4gICAgICBpKys7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBuYW1lID0gdmFsdWVzW2ldLm5hbWUuc3Vic3RyaW5nKDAsIHApO1xuICAgICAgdmFyIHJlc3QgPSB2YWx1ZXNbaV0ubmFtZS5zdWJzdHJpbmcocCArIDEpO1xuICAgICAgaWYgKCFjdXJyZW50W25hbWVdKSBjdXJyZW50W25hbWVdID0gW107XG5cbiAgICAgIHZhciBwcCA9IHJlc3QuaW5kZXhPZihcIl1cIik7XG4gICAgICBpZiAocHAgPT0gLTEpIHtcbiAgICAgICAgLy9FcnJvciAtIG5vdCBiYWxhbmNlZCBicmFja2V0c1xuICAgICAgICBjdXJyZW50ID0gcG9zdDtcbiAgICAgICAgaSsrO1xuICAgICAgfSBlbHNlIGlmIChwcCA9PSAwKSB7XG4gICAgICAgIC8vTm8gaW5kZXggc3BlY2lmaWVkIC0gc28gdGFrZSB0aGUgbmV4dCBpbnRlZ2VyXG4gICAgICAgIGN1cnJlbnQgPSBjdXJyZW50W25hbWVdO1xuICAgICAgICB2YWx1ZXNbaV0ubmFtZSA9IFwiXCIgKyBjdXJyZW50Lmxlbmd0aDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vTm93IGluZGV4IG5hbWUgYmVjb21lcyBhbmQgbmFtZSBhbmQgd2UgZ28gZGVlcGVyIGludG8gdGhlIGFycmF5XG4gICAgICAgIGN1cnJlbnQgPSBjdXJyZW50W25hbWVdO1xuICAgICAgICB2YWx1ZXNbaV0ubmFtZSA9IHJlc3Quc3Vic3RyaW5nKDAsIHBwKSArIHJlc3Quc3Vic3RyaW5nKHBwICsgMSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBwb3N0O1xufTtcblxuSkNTbWFydEZpbHRlci5wcm90b3R5cGUuaGlkZUZpbHRlclByb3BzID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgdmFyIG9iaiA9IGVsZW1lbnQucGFyZW50Tm9kZSxcbiAgICBmaWx0ZXJCbG9jayA9IG9iai5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtcm9sZT0nYnhfZmlsdGVyX2Jsb2NrJ11cIiksXG4gICAgcHJvcEFuZ2xlID0gb2JqLnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1yb2xlPSdwcm9wX2FuZ2xlJ11cIik7XG5cbiAgaWYgKEJYLmhhc0NsYXNzKG9iaiwgXCJieC1hY3RpdmVcIikpIHtcbiAgICBuZXcgQlguZWFzaW5nKHtcbiAgICAgIGR1cmF0aW9uOiAzMDAsXG4gICAgICBzdGFydDogeyBvcGFjaXR5OiAxLCBoZWlnaHQ6IGZpbHRlckJsb2NrLm9mZnNldEhlaWdodCB9LFxuICAgICAgZmluaXNoOiB7IG9wYWNpdHk6IDAsIGhlaWdodDogMCB9LFxuICAgICAgdHJhbnNpdGlvbjogQlguZWFzaW5nLnRyYW5zaXRpb25zLnF1YXJ0LFxuICAgICAgc3RlcDogZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICAgIGZpbHRlckJsb2NrLnN0eWxlLm9wYWNpdHkgPSBzdGF0ZS5vcGFjaXR5O1xuICAgICAgICBmaWx0ZXJCbG9jay5zdHlsZS5oZWlnaHQgPSBzdGF0ZS5oZWlnaHQgKyBcInB4XCI7XG4gICAgICB9LFxuICAgICAgY29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZmlsdGVyQmxvY2suc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJcIik7XG4gICAgICAgIEJYLnJlbW92ZUNsYXNzKG9iaiwgXCJieC1hY3RpdmVcIik7XG4gICAgICB9LFxuICAgIH0pLmFuaW1hdGUoKTtcblxuICAgIEJYLmFkZENsYXNzKHByb3BBbmdsZSwgXCJmYS1hbmdsZS1kb3duXCIpO1xuICAgIEJYLnJlbW92ZUNsYXNzKHByb3BBbmdsZSwgXCJmYS1hbmdsZS11cFwiKTtcbiAgfSBlbHNlIHtcbiAgICBmaWx0ZXJCbG9jay5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIGZpbHRlckJsb2NrLnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgIGZpbHRlckJsb2NrLnN0eWxlLmhlaWdodCA9IFwiYXV0b1wiO1xuXG4gICAgdmFyIG9ial9jaGlsZHJlbl9oZWlnaHQgPSBmaWx0ZXJCbG9jay5vZmZzZXRIZWlnaHQ7XG4gICAgZmlsdGVyQmxvY2suc3R5bGUuaGVpZ2h0ID0gMDtcblxuICAgIG5ldyBCWC5lYXNpbmcoe1xuICAgICAgZHVyYXRpb246IDMwMCxcbiAgICAgIHN0YXJ0OiB7IG9wYWNpdHk6IDAsIGhlaWdodDogMCB9LFxuICAgICAgZmluaXNoOiB7IG9wYWNpdHk6IDEsIGhlaWdodDogb2JqX2NoaWxkcmVuX2hlaWdodCB9LFxuICAgICAgdHJhbnNpdGlvbjogQlguZWFzaW5nLnRyYW5zaXRpb25zLnF1YXJ0LFxuICAgICAgc3RlcDogZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICAgIGZpbHRlckJsb2NrLnN0eWxlLm9wYWNpdHkgPSBzdGF0ZS5vcGFjaXR5O1xuICAgICAgICBmaWx0ZXJCbG9jay5zdHlsZS5oZWlnaHQgPSBzdGF0ZS5oZWlnaHQgKyBcInB4XCI7XG4gICAgICB9LFxuICAgICAgY29tcGxldGU6IGZ1bmN0aW9uICgpIHt9LFxuICAgIH0pLmFuaW1hdGUoKTtcblxuICAgIEJYLmFkZENsYXNzKG9iaiwgXCJieC1hY3RpdmVcIik7XG4gICAgQlgucmVtb3ZlQ2xhc3MocHJvcEFuZ2xlLCBcImZhLWFuZ2xlLWRvd25cIik7XG4gICAgQlguYWRkQ2xhc3MocHJvcEFuZ2xlLCBcImZhLWFuZ2xlLXVwXCIpO1xuICB9XG59O1xuXG5KQ1NtYXJ0RmlsdGVyLnByb3RvdHlwZS5zaG93RHJvcERvd25Qb3B1cCA9IGZ1bmN0aW9uIChlbGVtZW50LCBwb3B1cElkKSB7XG4gIHZhciBjb250ZW50Tm9kZSA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcm9sZT1cImRyb3Bkb3duQ29udGVudFwiXScpO1xuICB0aGlzLnBvcHVwc1tcInNtYXJ0RmlsdGVyRHJvcERvd25cIiArIHBvcHVwSWRdID0gQlguUG9wdXBXaW5kb3dNYW5hZ2VyLmNyZWF0ZShcbiAgICBcInNtYXJ0RmlsdGVyRHJvcERvd25cIiArIHBvcHVwSWQsXG4gICAgZWxlbWVudCxcbiAgICB7XG4gICAgICBhdXRvSGlkZTogdHJ1ZSxcbiAgICAgIG9mZnNldExlZnQ6IDAsXG4gICAgICBvZmZzZXRUb3A6IDMsXG4gICAgICBvdmVybGF5OiBmYWxzZSxcbiAgICAgIGRyYWdnYWJsZTogeyByZXN0cmljdDogdHJ1ZSB9LFxuICAgICAgY2xvc2VCeUVzYzogdHJ1ZSxcbiAgICAgIGNvbnRlbnQ6IEJYLmNsb25lKGNvbnRlbnROb2RlKSxcbiAgICB9XG4gICk7XG4gIHRoaXMucG9wdXBzW1wic21hcnRGaWx0ZXJEcm9wRG93blwiICsgcG9wdXBJZF0uc2hvdygpO1xufTtcblxuSkNTbWFydEZpbHRlci5wcm90b3R5cGUuc2VsZWN0RHJvcERvd25JdGVtID0gZnVuY3Rpb24gKGVsZW1lbnQsIGNvbnRyb2xJZCkge1xuICB0aGlzLmtleXVwKEJYKGNvbnRyb2xJZCkpO1xuXG4gIHZhciB3cmFwQ29udGFpbmVyID0gQlguZmluZFBhcmVudChcbiAgICBCWChjb250cm9sSWQpLFxuICAgIHsgY2xhc3NOYW1lOiBcImJ4LWZpbHRlci1zZWxlY3QtY29udGFpbmVyXCIgfSxcbiAgICBmYWxzZVxuICApO1xuXG4gIHZhciBjdXJyZW50T3B0aW9uID0gd3JhcENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxuICAgICdbZGF0YS1yb2xlPVwiY3VycmVudE9wdGlvblwiXSdcbiAgKTtcbiAgY3VycmVudE9wdGlvbi5pbm5lckhUTUwgPSBlbGVtZW50LmlubmVySFRNTDtcbiAgQlguUG9wdXBXaW5kb3dNYW5hZ2VyLmdldEN1cnJlbnRQb3B1cCgpLmNsb3NlKCk7XG59O1xuXG5CWC5uYW1lc3BhY2UoXCJCWC5JYmxvY2suU21hcnRGaWx0ZXJcIik7XG5CWC5JYmxvY2suU21hcnRGaWx0ZXIgPSAoZnVuY3Rpb24gKCkge1xuICAvKiogQHBhcmFtIHt7XG5cdFx0XHRsZWZ0U2xpZGVyOiBzdHJpbmcsXG5cdFx0XHRyaWdodFNsaWRlcjogc3RyaW5nLFxuXHRcdFx0dHJhY2tlcjogc3RyaW5nLFxuXHRcdFx0dHJhY2tlcldyYXA6IHN0cmluZyxcblx0XHRcdG1pbklucHV0SWQ6IHN0cmluZyxcblx0XHRcdG1heElucHV0SWQ6IHN0cmluZyxcblx0XHRcdG1pblByaWNlOiBmbG9hdHxpbnR8c3RyaW5nLFxuXHRcdFx0bWF4UHJpY2U6IGZsb2F0fGludHxzdHJpbmcsXG5cdFx0XHRjdXJNaW5QcmljZTogZmxvYXR8aW50fHN0cmluZyxcblx0XHRcdGN1ck1heFByaWNlOiBmbG9hdHxpbnR8c3RyaW5nLFxuXHRcdFx0Zmx0TWluUHJpY2U6IGZsb2F0fGludHxzdHJpbmd8bnVsbCxcblx0XHRcdGZsdE1heFByaWNlOiBmbG9hdHxpbnR8c3RyaW5nfG51bGwsXG5cdFx0XHRwcmVjaXNpb246IGludHxudWxsLFxuXHRcdFx0Y29sb3JVbmF2YWlsYWJsZUFjdGl2ZTogc3RyaW5nLFxuXHRcdFx0Y29sb3JBdmFpbGFibGVBY3RpdmU6IHN0cmluZyxcblx0XHRcdGNvbG9yQXZhaWxhYmxlSW5hY3RpdmU6IHN0cmluZ1xuXHRcdH19IGFyUGFyYW1zXG4gICAgICovXG4gIHZhciBTbWFydEZpbHRlciA9IGZ1bmN0aW9uIChhclBhcmFtcykge1xuICAgIGlmICh0eXBlb2YgYXJQYXJhbXMgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgIHRoaXMubGVmdFNsaWRlciA9IEJYKGFyUGFyYW1zLmxlZnRTbGlkZXIpO1xuICAgICAgdGhpcy5yaWdodFNsaWRlciA9IEJYKGFyUGFyYW1zLnJpZ2h0U2xpZGVyKTtcbiAgICAgIHRoaXMudHJhY2tlciA9IEJYKGFyUGFyYW1zLnRyYWNrZXIpO1xuICAgICAgdGhpcy50cmFja2VyV3JhcCA9IEJYKGFyUGFyYW1zLnRyYWNrZXJXcmFwKTtcblxuICAgICAgdGhpcy5taW5JbnB1dCA9IEJYKGFyUGFyYW1zLm1pbklucHV0SWQpO1xuICAgICAgdGhpcy5tYXhJbnB1dCA9IEJYKGFyUGFyYW1zLm1heElucHV0SWQpO1xuXG4gICAgICB0aGlzLm1pblByaWNlID0gcGFyc2VGbG9hdChhclBhcmFtcy5taW5QcmljZSk7XG4gICAgICB0aGlzLm1heFByaWNlID0gcGFyc2VGbG9hdChhclBhcmFtcy5tYXhQcmljZSk7XG5cbiAgICAgIHRoaXMuY3VyTWluUHJpY2UgPSBwYXJzZUZsb2F0KGFyUGFyYW1zLmN1ck1pblByaWNlKTtcbiAgICAgIHRoaXMuY3VyTWF4UHJpY2UgPSBwYXJzZUZsb2F0KGFyUGFyYW1zLmN1ck1heFByaWNlKTtcblxuICAgICAgdGhpcy5mbHRNaW5QcmljZSA9IGFyUGFyYW1zLmZsdE1pblByaWNlXG4gICAgICAgID8gcGFyc2VGbG9hdChhclBhcmFtcy5mbHRNaW5QcmljZSlcbiAgICAgICAgOiBwYXJzZUZsb2F0KGFyUGFyYW1zLmN1ck1pblByaWNlKTtcbiAgICAgIHRoaXMuZmx0TWF4UHJpY2UgPSBhclBhcmFtcy5mbHRNYXhQcmljZVxuICAgICAgICA/IHBhcnNlRmxvYXQoYXJQYXJhbXMuZmx0TWF4UHJpY2UpXG4gICAgICAgIDogcGFyc2VGbG9hdChhclBhcmFtcy5jdXJNYXhQcmljZSk7XG5cbiAgICAgIHRoaXMucHJlY2lzaW9uID0gYXJQYXJhbXMucHJlY2lzaW9uIHx8IDA7XG5cbiAgICAgIHRoaXMucHJpY2VEaWZmID0gdGhpcy5tYXhQcmljZSAtIHRoaXMubWluUHJpY2U7XG5cbiAgICAgIHRoaXMubGVmdFBlcmNlbnQgPSAwO1xuICAgICAgdGhpcy5yaWdodFBlcmNlbnQgPSAwO1xuXG4gICAgICB0aGlzLmZsdE1pblBlcmNlbnQgPSAwO1xuICAgICAgdGhpcy5mbHRNYXhQZXJjZW50ID0gMDtcblxuICAgICAgdGhpcy5jb2xvclVuYXZhaWxhYmxlQWN0aXZlID0gQlgoYXJQYXJhbXMuY29sb3JVbmF2YWlsYWJsZUFjdGl2ZSk7IC8vZ3JheVxuICAgICAgdGhpcy5jb2xvckF2YWlsYWJsZUFjdGl2ZSA9IEJYKGFyUGFyYW1zLmNvbG9yQXZhaWxhYmxlQWN0aXZlKTsgLy9ibHVlXG4gICAgICB0aGlzLmNvbG9yQXZhaWxhYmxlSW5hY3RpdmUgPSBCWChhclBhcmFtcy5jb2xvckF2YWlsYWJsZUluYWN0aXZlKTsgLy9saWdodCBibHVlXG5cbiAgICAgIHRoaXMuaXNUb3VjaCA9IGZhbHNlO1xuXG4gICAgICB0aGlzLmluaXQoKTtcblxuICAgICAgaWYgKFwib250b3VjaHN0YXJ0XCIgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuaXNUb3VjaCA9IHRydWU7XG5cbiAgICAgICAgQlguYmluZChcbiAgICAgICAgICB0aGlzLmxlZnRTbGlkZXIsXG4gICAgICAgICAgXCJ0b3VjaHN0YXJ0XCIsXG4gICAgICAgICAgQlgucHJveHkoZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLm9uTW92ZUxlZnRTbGlkZXIoZXZlbnQpO1xuICAgICAgICAgIH0sIHRoaXMpXG4gICAgICAgICk7XG5cbiAgICAgICAgQlguYmluZChcbiAgICAgICAgICB0aGlzLnJpZ2h0U2xpZGVyLFxuICAgICAgICAgIFwidG91Y2hzdGFydFwiLFxuICAgICAgICAgIEJYLnByb3h5KGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgdGhpcy5vbk1vdmVSaWdodFNsaWRlcihldmVudCk7XG4gICAgICAgICAgfSwgdGhpcylcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIEJYLmJpbmQoXG4gICAgICAgICAgdGhpcy5sZWZ0U2xpZGVyLFxuICAgICAgICAgIFwibW91c2Vkb3duXCIsXG4gICAgICAgICAgQlgucHJveHkoZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLm9uTW92ZUxlZnRTbGlkZXIoZXZlbnQpO1xuICAgICAgICAgIH0sIHRoaXMpXG4gICAgICAgICk7XG5cbiAgICAgICAgQlguYmluZChcbiAgICAgICAgICB0aGlzLnJpZ2h0U2xpZGVyLFxuICAgICAgICAgIFwibW91c2Vkb3duXCIsXG4gICAgICAgICAgQlgucHJveHkoZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLm9uTW92ZVJpZ2h0U2xpZGVyKGV2ZW50KTtcbiAgICAgICAgICB9LCB0aGlzKVxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBCWC5iaW5kKFxuICAgICAgICB0aGlzLm1pbklucHV0LFxuICAgICAgICBcImtleXVwXCIsXG4gICAgICAgIEJYLnByb3h5KGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIHRoaXMub25JbnB1dENoYW5nZSgpO1xuICAgICAgICB9LCB0aGlzKVxuICAgICAgKTtcblxuICAgICAgQlguYmluZChcbiAgICAgICAgdGhpcy5tYXhJbnB1dCxcbiAgICAgICAgXCJrZXl1cFwiLFxuICAgICAgICBCWC5wcm94eShmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICB0aGlzLm9uSW5wdXRDaGFuZ2UoKTtcbiAgICAgICAgfSwgdGhpcylcbiAgICAgICk7XG4gICAgfVxuICB9O1xuXG4gIFNtYXJ0RmlsdGVyLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBwcmljZURpZmY7XG5cbiAgICBpZiAodGhpcy5jdXJNaW5QcmljZSA+IHRoaXMubWluUHJpY2UpIHtcbiAgICAgIHByaWNlRGlmZiA9IHRoaXMuY3VyTWluUHJpY2UgLSB0aGlzLm1pblByaWNlO1xuICAgICAgdGhpcy5sZWZ0UGVyY2VudCA9IChwcmljZURpZmYgKiAxMDApIC8gdGhpcy5wcmljZURpZmY7XG5cbiAgICAgIHRoaXMubGVmdFNsaWRlci5zdHlsZS5sZWZ0ID0gdGhpcy5sZWZ0UGVyY2VudCArIFwiJVwiO1xuICAgICAgdGhpcy5jb2xvclVuYXZhaWxhYmxlQWN0aXZlLnN0eWxlLmxlZnQgPSB0aGlzLmxlZnRQZXJjZW50ICsgXCIlXCI7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRNaW5GaWx0ZXJlZFZhbHVlKHRoaXMuZmx0TWluUHJpY2UpO1xuXG4gICAgaWYgKHRoaXMuY3VyTWF4UHJpY2UgPCB0aGlzLm1heFByaWNlKSB7XG4gICAgICBwcmljZURpZmYgPSB0aGlzLm1heFByaWNlIC0gdGhpcy5jdXJNYXhQcmljZTtcbiAgICAgIHRoaXMucmlnaHRQZXJjZW50ID0gKHByaWNlRGlmZiAqIDEwMCkgLyB0aGlzLnByaWNlRGlmZjtcblxuICAgICAgdGhpcy5yaWdodFNsaWRlci5zdHlsZS5yaWdodCA9IHRoaXMucmlnaHRQZXJjZW50ICsgXCIlXCI7XG4gICAgICB0aGlzLmNvbG9yVW5hdmFpbGFibGVBY3RpdmUuc3R5bGUucmlnaHQgPSB0aGlzLnJpZ2h0UGVyY2VudCArIFwiJVwiO1xuICAgIH1cblxuICAgIHRoaXMuc2V0TWF4RmlsdGVyZWRWYWx1ZSh0aGlzLmZsdE1heFByaWNlKTtcbiAgfTtcblxuICBTbWFydEZpbHRlci5wcm90b3R5cGUuc2V0TWluRmlsdGVyZWRWYWx1ZSA9IGZ1bmN0aW9uIChmbHRNaW5QcmljZSkge1xuICAgIHRoaXMuZmx0TWluUHJpY2UgPSBwYXJzZUZsb2F0KGZsdE1pblByaWNlKTtcbiAgICBpZiAodGhpcy5mbHRNaW5QcmljZSA+PSB0aGlzLm1pblByaWNlKSB7XG4gICAgICB2YXIgcHJpY2VEaWZmID0gdGhpcy5mbHRNaW5QcmljZSAtIHRoaXMubWluUHJpY2U7XG4gICAgICB0aGlzLmZsdE1pblBlcmNlbnQgPSAocHJpY2VEaWZmICogMTAwKSAvIHRoaXMucHJpY2VEaWZmO1xuICAgICAgaWYgKHRoaXMuY29sb3JBdmFpbGFibGVBY3RpdmUpIHtcbiAgICAgICAgaWYgKHRoaXMubGVmdFBlcmNlbnQgPiB0aGlzLmZsdE1pblBlcmNlbnQpXG4gICAgICAgICAgdGhpcy5jb2xvckF2YWlsYWJsZUFjdGl2ZS5zdHlsZS5sZWZ0ID0gdGhpcy5sZWZ0UGVyY2VudCArIFwiJVwiO1xuICAgICAgICBlbHNlIHRoaXMuY29sb3JBdmFpbGFibGVBY3RpdmUuc3R5bGUubGVmdCA9IHRoaXMuZmx0TWluUGVyY2VudCArIFwiJVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5jb2xvckF2YWlsYWJsZUluYWN0aXZlKVxuICAgICAgICB0aGlzLmNvbG9yQXZhaWxhYmxlSW5hY3RpdmUuc3R5bGUubGVmdCA9IHRoaXMuZmx0TWluUGVyY2VudCArIFwiJVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5jb2xvckF2YWlsYWJsZUFjdGl2ZSkge1xuICAgICAgICB0aGlzLmNvbG9yQXZhaWxhYmxlQWN0aXZlLnN0eWxlLmxlZnQgPSBcIjAlXCI7XG4gICAgICAgIHRoaXMuY29sb3JBdmFpbGFibGVJbmFjdGl2ZS5zdHlsZS5sZWZ0ID0gXCIwJVwiO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBTbWFydEZpbHRlci5wcm90b3R5cGUuc2V0TWF4RmlsdGVyZWRWYWx1ZSA9IGZ1bmN0aW9uIChmbHRNYXhQcmljZSkge1xuICAgIHRoaXMuZmx0TWF4UHJpY2UgPSBwYXJzZUZsb2F0KGZsdE1heFByaWNlKTtcbiAgICBpZiAodGhpcy5mbHRNYXhQcmljZSA8PSB0aGlzLm1heFByaWNlKSB7XG4gICAgICB2YXIgcHJpY2VEaWZmID0gdGhpcy5tYXhQcmljZSAtIHRoaXMuZmx0TWF4UHJpY2U7XG4gICAgICB0aGlzLmZsdE1heFBlcmNlbnQgPSAocHJpY2VEaWZmICogMTAwKSAvIHRoaXMucHJpY2VEaWZmO1xuXG4gICAgICBpZiAodGhpcy5jb2xvckF2YWlsYWJsZUFjdGl2ZSkge1xuICAgICAgICBpZiAodGhpcy5yaWdodFBlcmNlbnQgPiB0aGlzLmZsdE1heFBlcmNlbnQpXG4gICAgICAgICAgdGhpcy5jb2xvckF2YWlsYWJsZUFjdGl2ZS5zdHlsZS5yaWdodCA9IHRoaXMucmlnaHRQZXJjZW50ICsgXCIlXCI7XG4gICAgICAgIGVsc2UgdGhpcy5jb2xvckF2YWlsYWJsZUFjdGl2ZS5zdHlsZS5yaWdodCA9IHRoaXMuZmx0TWF4UGVyY2VudCArIFwiJVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5jb2xvckF2YWlsYWJsZUluYWN0aXZlKVxuICAgICAgICB0aGlzLmNvbG9yQXZhaWxhYmxlSW5hY3RpdmUuc3R5bGUucmlnaHQgPSB0aGlzLmZsdE1heFBlcmNlbnQgKyBcIiVcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuY29sb3JBdmFpbGFibGVBY3RpdmUpIHtcbiAgICAgICAgdGhpcy5jb2xvckF2YWlsYWJsZUFjdGl2ZS5zdHlsZS5yaWdodCA9IFwiMCVcIjtcbiAgICAgICAgdGhpcy5jb2xvckF2YWlsYWJsZUluYWN0aXZlLnN0eWxlLnJpZ2h0ID0gXCIwJVwiO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBTbWFydEZpbHRlci5wcm90b3R5cGUuZ2V0WENvb3JkID0gZnVuY3Rpb24gKGVsZW0pIHtcbiAgICB2YXIgYm94ID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB2YXIgYm9keSA9IGRvY3VtZW50LmJvZHk7XG4gICAgdmFyIGRvY0VsZW0gPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cbiAgICB2YXIgc2Nyb2xsTGVmdCA9XG4gICAgICB3aW5kb3cucGFnZVhPZmZzZXQgfHwgZG9jRWxlbS5zY3JvbGxMZWZ0IHx8IGJvZHkuc2Nyb2xsTGVmdDtcbiAgICB2YXIgY2xpZW50TGVmdCA9IGRvY0VsZW0uY2xpZW50TGVmdCB8fCBib2R5LmNsaWVudExlZnQgfHwgMDtcbiAgICB2YXIgbGVmdCA9IGJveC5sZWZ0ICsgc2Nyb2xsTGVmdCAtIGNsaWVudExlZnQ7XG5cbiAgICByZXR1cm4gTWF0aC5yb3VuZChsZWZ0KTtcbiAgfTtcblxuICBTbWFydEZpbHRlci5wcm90b3R5cGUuZ2V0UGFnZVggPSBmdW5jdGlvbiAoZSkge1xuICAgIGUgPSBlIHx8IHdpbmRvdy5ldmVudDtcbiAgICB2YXIgcGFnZVggPSBudWxsO1xuXG4gICAgaWYgKHRoaXMuaXNUb3VjaCAmJiBldmVudC50YXJnZXRUb3VjaGVzWzBdICE9IG51bGwpIHtcbiAgICAgIHBhZ2VYID0gZS50YXJnZXRUb3VjaGVzWzBdLnBhZ2VYO1xuICAgIH0gZWxzZSBpZiAoZS5wYWdlWCAhPSBudWxsKSB7XG4gICAgICBwYWdlWCA9IGUucGFnZVg7XG4gICAgfSBlbHNlIGlmIChlLmNsaWVudFggIT0gbnVsbCkge1xuICAgICAgdmFyIGh0bWwgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICB2YXIgYm9keSA9IGRvY3VtZW50LmJvZHk7XG5cbiAgICAgIHBhZ2VYID0gZS5jbGllbnRYICsgKGh0bWwuc2Nyb2xsTGVmdCB8fCAoYm9keSAmJiBib2R5LnNjcm9sbExlZnQpIHx8IDApO1xuICAgICAgcGFnZVggLT0gaHRtbC5jbGllbnRMZWZ0IHx8IDA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhZ2VYO1xuICB9O1xuXG4gIFNtYXJ0RmlsdGVyLnByb3RvdHlwZS5yZWNvdW50TWluUHJpY2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG5ld01pblByaWNlID0gKHRoaXMucHJpY2VEaWZmICogdGhpcy5sZWZ0UGVyY2VudCkgLyAxMDA7XG4gICAgbmV3TWluUHJpY2UgPSAodGhpcy5taW5QcmljZSArIG5ld01pblByaWNlKS50b0ZpeGVkKHRoaXMucHJlY2lzaW9uKTtcblxuICAgIGlmIChuZXdNaW5QcmljZSAhPSB0aGlzLm1pblByaWNlKSB0aGlzLm1pbklucHV0LnZhbHVlID0gbmV3TWluUHJpY2U7XG4gICAgZWxzZSB0aGlzLm1pbklucHV0LnZhbHVlID0gXCJcIjtcbiAgICAvKiogQGdsb2JhbCBKQ1NtYXJ0RmlsdGVyIHNtYXJ0RmlsdGVyICovXG4gICAgc21hcnRGaWx0ZXIua2V5dXAodGhpcy5taW5JbnB1dCk7XG4gIH07XG5cbiAgU21hcnRGaWx0ZXIucHJvdG90eXBlLnJlY291bnRNYXhQcmljZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbmV3TWF4UHJpY2UgPSAodGhpcy5wcmljZURpZmYgKiB0aGlzLnJpZ2h0UGVyY2VudCkgLyAxMDA7XG4gICAgbmV3TWF4UHJpY2UgPSAodGhpcy5tYXhQcmljZSAtIG5ld01heFByaWNlKS50b0ZpeGVkKHRoaXMucHJlY2lzaW9uKTtcblxuICAgIGlmIChuZXdNYXhQcmljZSAhPSB0aGlzLm1heFByaWNlKSB0aGlzLm1heElucHV0LnZhbHVlID0gbmV3TWF4UHJpY2U7XG4gICAgZWxzZSB0aGlzLm1heElucHV0LnZhbHVlID0gXCJcIjtcbiAgICAvKiogQGdsb2JhbCBKQ1NtYXJ0RmlsdGVyIHNtYXJ0RmlsdGVyICovXG4gICAgc21hcnRGaWx0ZXIua2V5dXAodGhpcy5tYXhJbnB1dCk7XG4gIH07XG5cbiAgU21hcnRGaWx0ZXIucHJvdG90eXBlLm9uSW5wdXRDaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHByaWNlRGlmZjtcbiAgICBpZiAodGhpcy5taW5JbnB1dC52YWx1ZSkge1xuICAgICAgdmFyIGxlZnRJbnB1dFZhbHVlID0gdGhpcy5taW5JbnB1dC52YWx1ZTtcbiAgICAgIGlmIChsZWZ0SW5wdXRWYWx1ZSA8IHRoaXMubWluUHJpY2UpIGxlZnRJbnB1dFZhbHVlID0gdGhpcy5taW5QcmljZTtcblxuICAgICAgaWYgKGxlZnRJbnB1dFZhbHVlID4gdGhpcy5tYXhQcmljZSkgbGVmdElucHV0VmFsdWUgPSB0aGlzLm1heFByaWNlO1xuXG4gICAgICBwcmljZURpZmYgPSBsZWZ0SW5wdXRWYWx1ZSAtIHRoaXMubWluUHJpY2U7XG4gICAgICB0aGlzLmxlZnRQZXJjZW50ID0gKHByaWNlRGlmZiAqIDEwMCkgLyB0aGlzLnByaWNlRGlmZjtcblxuICAgICAgdGhpcy5tYWtlTGVmdFNsaWRlck1vdmUoZmFsc2UpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm1heElucHV0LnZhbHVlKSB7XG4gICAgICB2YXIgcmlnaHRJbnB1dFZhbHVlID0gdGhpcy5tYXhJbnB1dC52YWx1ZTtcbiAgICAgIGlmIChyaWdodElucHV0VmFsdWUgPCB0aGlzLm1pblByaWNlKSByaWdodElucHV0VmFsdWUgPSB0aGlzLm1pblByaWNlO1xuXG4gICAgICBpZiAocmlnaHRJbnB1dFZhbHVlID4gdGhpcy5tYXhQcmljZSkgcmlnaHRJbnB1dFZhbHVlID0gdGhpcy5tYXhQcmljZTtcblxuICAgICAgcHJpY2VEaWZmID0gdGhpcy5tYXhQcmljZSAtIHJpZ2h0SW5wdXRWYWx1ZTtcbiAgICAgIHRoaXMucmlnaHRQZXJjZW50ID0gKHByaWNlRGlmZiAqIDEwMCkgLyB0aGlzLnByaWNlRGlmZjtcblxuICAgICAgdGhpcy5tYWtlUmlnaHRTbGlkZXJNb3ZlKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgU21hcnRGaWx0ZXIucHJvdG90eXBlLm1ha2VMZWZ0U2xpZGVyTW92ZSA9IGZ1bmN0aW9uIChyZWNvdW50UHJpY2UpIHtcbiAgICByZWNvdW50UHJpY2UgPSByZWNvdW50UHJpY2UgIT09IGZhbHNlO1xuXG4gICAgdGhpcy5sZWZ0U2xpZGVyLnN0eWxlLmxlZnQgPSB0aGlzLmxlZnRQZXJjZW50ICsgXCIlXCI7XG4gICAgdGhpcy5jb2xvclVuYXZhaWxhYmxlQWN0aXZlLnN0eWxlLmxlZnQgPSB0aGlzLmxlZnRQZXJjZW50ICsgXCIlXCI7XG5cbiAgICB2YXIgYXJlQm90aFNsaWRlcnNNb3ZpbmcgPSBmYWxzZTtcbiAgICBpZiAodGhpcy5sZWZ0UGVyY2VudCArIHRoaXMucmlnaHRQZXJjZW50ID49IDEwMCkge1xuICAgICAgYXJlQm90aFNsaWRlcnNNb3ZpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5yaWdodFBlcmNlbnQgPSAxMDAgLSB0aGlzLmxlZnRQZXJjZW50O1xuICAgICAgdGhpcy5yaWdodFNsaWRlci5zdHlsZS5yaWdodCA9IHRoaXMucmlnaHRQZXJjZW50ICsgXCIlXCI7XG4gICAgICB0aGlzLmNvbG9yVW5hdmFpbGFibGVBY3RpdmUuc3R5bGUucmlnaHQgPSB0aGlzLnJpZ2h0UGVyY2VudCArIFwiJVwiO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgIHRoaXMubGVmdFBlcmNlbnQgPj0gdGhpcy5mbHRNaW5QZXJjZW50ICYmXG4gICAgICB0aGlzLmxlZnRQZXJjZW50IDw9IDEwMCAtIHRoaXMuZmx0TWF4UGVyY2VudFxuICAgICkge1xuICAgICAgdGhpcy5jb2xvckF2YWlsYWJsZUFjdGl2ZS5zdHlsZS5sZWZ0ID0gdGhpcy5sZWZ0UGVyY2VudCArIFwiJVwiO1xuICAgICAgaWYgKGFyZUJvdGhTbGlkZXJzTW92aW5nKSB7XG4gICAgICAgIHRoaXMuY29sb3JBdmFpbGFibGVBY3RpdmUuc3R5bGUucmlnaHQgPSAxMDAgLSB0aGlzLmxlZnRQZXJjZW50ICsgXCIlXCI7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLmxlZnRQZXJjZW50IDw9IHRoaXMuZmx0TWluUGVyY2VudCkge1xuICAgICAgdGhpcy5jb2xvckF2YWlsYWJsZUFjdGl2ZS5zdHlsZS5sZWZ0ID0gdGhpcy5mbHRNaW5QZXJjZW50ICsgXCIlXCI7XG4gICAgICBpZiAoYXJlQm90aFNsaWRlcnNNb3ZpbmcpIHtcbiAgICAgICAgdGhpcy5jb2xvckF2YWlsYWJsZUFjdGl2ZS5zdHlsZS5yaWdodCA9IDEwMCAtIHRoaXMuZmx0TWluUGVyY2VudCArIFwiJVwiO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5sZWZ0UGVyY2VudCA+PSB0aGlzLmZsdE1heFBlcmNlbnQpIHtcbiAgICAgIHRoaXMuY29sb3JBdmFpbGFibGVBY3RpdmUuc3R5bGUubGVmdCA9IDEwMCAtIHRoaXMuZmx0TWF4UGVyY2VudCArIFwiJVwiO1xuICAgICAgaWYgKGFyZUJvdGhTbGlkZXJzTW92aW5nKSB7XG4gICAgICAgIHRoaXMuY29sb3JBdmFpbGFibGVBY3RpdmUuc3R5bGUucmlnaHQgPSB0aGlzLmZsdE1heFBlcmNlbnQgKyBcIiVcIjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocmVjb3VudFByaWNlKSB7XG4gICAgICB0aGlzLnJlY291bnRNaW5QcmljZSgpO1xuICAgICAgaWYgKGFyZUJvdGhTbGlkZXJzTW92aW5nKSB0aGlzLnJlY291bnRNYXhQcmljZSgpO1xuICAgIH1cbiAgfTtcblxuICBTbWFydEZpbHRlci5wcm90b3R5cGUuY291bnROZXdMZWZ0ID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgdmFyIHBhZ2VYID0gdGhpcy5nZXRQYWdlWChldmVudCk7XG5cbiAgICB2YXIgdHJhY2tlclhDb29yZCA9IHRoaXMuZ2V0WENvb3JkKHRoaXMudHJhY2tlcldyYXApO1xuICAgIHZhciByaWdodEVkZ2UgPSB0aGlzLnRyYWNrZXJXcmFwLm9mZnNldFdpZHRoO1xuXG4gICAgdmFyIG5ld0xlZnQgPSBwYWdlWCAtIHRyYWNrZXJYQ29vcmQ7XG5cbiAgICBpZiAobmV3TGVmdCA8IDApIG5ld0xlZnQgPSAwO1xuICAgIGVsc2UgaWYgKG5ld0xlZnQgPiByaWdodEVkZ2UpIG5ld0xlZnQgPSByaWdodEVkZ2U7XG5cbiAgICByZXR1cm4gbmV3TGVmdDtcbiAgfTtcblxuICBTbWFydEZpbHRlci5wcm90b3R5cGUub25Nb3ZlTGVmdFNsaWRlciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKCF0aGlzLmlzVG91Y2gpIHtcbiAgICAgIHRoaXMubGVmdFNsaWRlci5vbmRyYWdzdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuaXNUb3VjaCkge1xuICAgICAgZG9jdW1lbnQub25tb3VzZW1vdmUgPSBCWC5wcm94eShmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5sZWZ0UGVyY2VudCA9XG4gICAgICAgICAgKHRoaXMuY291bnROZXdMZWZ0KGV2ZW50KSAqIDEwMCkgLyB0aGlzLnRyYWNrZXJXcmFwLm9mZnNldFdpZHRoO1xuICAgICAgICB0aGlzLm1ha2VMZWZ0U2xpZGVyTW92ZSgpO1xuICAgICAgfSwgdGhpcyk7XG5cbiAgICAgIGRvY3VtZW50Lm9ubW91c2V1cCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZG9jdW1lbnQub25tb3VzZW1vdmUgPSBkb2N1bWVudC5vbm1vdXNldXAgPSBudWxsO1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQub250b3VjaG1vdmUgPSBCWC5wcm94eShmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5sZWZ0UGVyY2VudCA9XG4gICAgICAgICAgKHRoaXMuY291bnROZXdMZWZ0KGV2ZW50KSAqIDEwMCkgLyB0aGlzLnRyYWNrZXJXcmFwLm9mZnNldFdpZHRoO1xuICAgICAgICB0aGlzLm1ha2VMZWZ0U2xpZGVyTW92ZSgpO1xuICAgICAgfSwgdGhpcyk7XG5cbiAgICAgIGRvY3VtZW50Lm9udG91Y2hlbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRvY3VtZW50Lm9udG91Y2htb3ZlID0gZG9jdW1lbnQudG91Y2hlbmQgPSBudWxsO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgU21hcnRGaWx0ZXIucHJvdG90eXBlLm1ha2VSaWdodFNsaWRlck1vdmUgPSBmdW5jdGlvbiAocmVjb3VudFByaWNlKSB7XG4gICAgcmVjb3VudFByaWNlID0gcmVjb3VudFByaWNlICE9PSBmYWxzZTtcblxuICAgIHRoaXMucmlnaHRTbGlkZXIuc3R5bGUucmlnaHQgPSB0aGlzLnJpZ2h0UGVyY2VudCArIFwiJVwiO1xuICAgIHRoaXMuY29sb3JVbmF2YWlsYWJsZUFjdGl2ZS5zdHlsZS5yaWdodCA9IHRoaXMucmlnaHRQZXJjZW50ICsgXCIlXCI7XG5cbiAgICB2YXIgYXJlQm90aFNsaWRlcnNNb3ZpbmcgPSBmYWxzZTtcbiAgICBpZiAodGhpcy5sZWZ0UGVyY2VudCArIHRoaXMucmlnaHRQZXJjZW50ID49IDEwMCkge1xuICAgICAgYXJlQm90aFNsaWRlcnNNb3ZpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5sZWZ0UGVyY2VudCA9IDEwMCAtIHRoaXMucmlnaHRQZXJjZW50O1xuICAgICAgdGhpcy5sZWZ0U2xpZGVyLnN0eWxlLmxlZnQgPSB0aGlzLmxlZnRQZXJjZW50ICsgXCIlXCI7XG4gICAgICB0aGlzLmNvbG9yVW5hdmFpbGFibGVBY3RpdmUuc3R5bGUubGVmdCA9IHRoaXMubGVmdFBlcmNlbnQgKyBcIiVcIjtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICAxMDAgLSB0aGlzLnJpZ2h0UGVyY2VudCA+PSB0aGlzLmZsdE1pblBlcmNlbnQgJiZcbiAgICAgIHRoaXMucmlnaHRQZXJjZW50ID49IHRoaXMuZmx0TWF4UGVyY2VudFxuICAgICkge1xuICAgICAgdGhpcy5jb2xvckF2YWlsYWJsZUFjdGl2ZS5zdHlsZS5yaWdodCA9IHRoaXMucmlnaHRQZXJjZW50ICsgXCIlXCI7XG4gICAgICBpZiAoYXJlQm90aFNsaWRlcnNNb3ZpbmcpIHtcbiAgICAgICAgdGhpcy5jb2xvckF2YWlsYWJsZUFjdGl2ZS5zdHlsZS5sZWZ0ID0gMTAwIC0gdGhpcy5yaWdodFBlcmNlbnQgKyBcIiVcIjtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMucmlnaHRQZXJjZW50IDw9IHRoaXMuZmx0TWF4UGVyY2VudCkge1xuICAgICAgdGhpcy5jb2xvckF2YWlsYWJsZUFjdGl2ZS5zdHlsZS5yaWdodCA9IHRoaXMuZmx0TWF4UGVyY2VudCArIFwiJVwiO1xuICAgICAgaWYgKGFyZUJvdGhTbGlkZXJzTW92aW5nKSB7XG4gICAgICAgIHRoaXMuY29sb3JBdmFpbGFibGVBY3RpdmUuc3R5bGUubGVmdCA9IDEwMCAtIHRoaXMuZmx0TWF4UGVyY2VudCArIFwiJVwiO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoMTAwIC0gdGhpcy5yaWdodFBlcmNlbnQgPD0gdGhpcy5mbHRNaW5QZXJjZW50KSB7XG4gICAgICB0aGlzLmNvbG9yQXZhaWxhYmxlQWN0aXZlLnN0eWxlLnJpZ2h0ID0gMTAwIC0gdGhpcy5mbHRNaW5QZXJjZW50ICsgXCIlXCI7XG4gICAgICBpZiAoYXJlQm90aFNsaWRlcnNNb3ZpbmcpIHtcbiAgICAgICAgdGhpcy5jb2xvckF2YWlsYWJsZUFjdGl2ZS5zdHlsZS5sZWZ0ID0gdGhpcy5mbHRNaW5QZXJjZW50ICsgXCIlXCI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHJlY291bnRQcmljZSkge1xuICAgICAgdGhpcy5yZWNvdW50TWF4UHJpY2UoKTtcbiAgICAgIGlmIChhcmVCb3RoU2xpZGVyc01vdmluZykgdGhpcy5yZWNvdW50TWluUHJpY2UoKTtcbiAgICB9XG4gIH07XG5cbiAgU21hcnRGaWx0ZXIucHJvdG90eXBlLm9uTW92ZVJpZ2h0U2xpZGVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoIXRoaXMuaXNUb3VjaCkge1xuICAgICAgdGhpcy5yaWdodFNsaWRlci5vbmRyYWdzdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuaXNUb3VjaCkge1xuICAgICAgZG9jdW1lbnQub25tb3VzZW1vdmUgPSBCWC5wcm94eShmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5yaWdodFBlcmNlbnQgPVxuICAgICAgICAgIDEwMCAtICh0aGlzLmNvdW50TmV3TGVmdChldmVudCkgKiAxMDApIC8gdGhpcy50cmFja2VyV3JhcC5vZmZzZXRXaWR0aDtcbiAgICAgICAgdGhpcy5tYWtlUmlnaHRTbGlkZXJNb3ZlKCk7XG4gICAgICB9LCB0aGlzKTtcblxuICAgICAgZG9jdW1lbnQub25tb3VzZXVwID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBkb2N1bWVudC5vbm1vdXNlbW92ZSA9IGRvY3VtZW50Lm9ubW91c2V1cCA9IG51bGw7XG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5vbnRvdWNobW92ZSA9IEJYLnByb3h5KGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB0aGlzLnJpZ2h0UGVyY2VudCA9XG4gICAgICAgICAgMTAwIC0gKHRoaXMuY291bnROZXdMZWZ0KGV2ZW50KSAqIDEwMCkgLyB0aGlzLnRyYWNrZXJXcmFwLm9mZnNldFdpZHRoO1xuICAgICAgICB0aGlzLm1ha2VSaWdodFNsaWRlck1vdmUoKTtcbiAgICAgIH0sIHRoaXMpO1xuXG4gICAgICBkb2N1bWVudC5vbnRvdWNoZW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBkb2N1bWVudC5vbnRvdWNobW92ZSA9IGRvY3VtZW50Lm9udG91Y2hlbmQgPSBudWxsO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgcmV0dXJuIFNtYXJ0RmlsdGVyO1xufSkoKTtcbiIsImltcG9ydCBub1VpU2xpZGVyIGZyb20gXCJub3Vpc2xpZGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJhbmdlSW5wdXQge1xuICBjb25zdHJ1Y3RvcihzbGlkZXJTZWxlY3Rvcikge1xuICAgIHRoaXMuX2NvbnRhaW5lckVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNsaWRlclNlbGVjdG9yKTtcbiAgICB0aGlzLl9pbnB1dE1pbkVsZW1lbnQgPSB0aGlzLl9jb250YWluZXJFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgLmpzLXJhbmdlLW1pbmBcbiAgICApO1xuICAgIHRoaXMuX2lucHV0TWF4RWxlbWVudCA9IHRoaXMuX2NvbnRhaW5lckVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGAuanMtcmFuZ2UtbWF4YFxuICAgICk7XG4gICAgdGhpcy5fc2xpZGVyRWxlbWVudCA9IHRoaXMuX2NvbnRhaW5lckVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGAuanMtcmFuZ2Utc2xpZGVyYFxuICAgICk7XG5cbiAgICB0aGlzLl9taW5WYWx1ZSA9ICt0aGlzLl9zbGlkZXJFbGVtZW50LmRhdGFzZXQubWluO1xuICAgIHRoaXMuX21heFZhbHVlID0gK3RoaXMuX3NsaWRlckVsZW1lbnQuZGF0YXNldC5tYXg7XG4gICAgdGhpcy5fc3RlcCA9ICt0aGlzLl9zbGlkZXJFbGVtZW50LmRhdGFzZXQuc3RlcDtcblxuICAgIHRoaXMuX29uU2xpZGVyQ2hhbmdlID0gdGhpcy5fb25TbGlkZXJDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9vbk1pbkNoYW5nZSA9IHRoaXMuX29uTWluQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fb25NYXhDaGFuZ2UgPSB0aGlzLl9vbk1heENoYW5nZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgX29uU2xpZGVyQ2hhbmdlKHZhbHVlcykge1xuICAgIGNvbnN0IFttaW4sIG1heF0gPSB2YWx1ZXM7XG4gICAgdGhpcy5faW5wdXRNaW5FbGVtZW50LnZhbHVlID0gTWF0aC50cnVuYyhtaW4pO1xuICAgIHRoaXMuX2lucHV0TWF4RWxlbWVudC52YWx1ZSA9IE1hdGgudHJ1bmMobWF4KTtcbiAgfVxuXG4gIF9vbk1pbkNoYW5nZShldnQpIHtcbiAgICBjb25zdCB7IHZhbHVlIH0gPSBldnQudGFyZ2V0O1xuICAgIHRoaXMuX3NsaWRlckVsZW1lbnQubm9VaVNsaWRlci5zZXQoW01hdGgucm91bmQodmFsdWUpLCBudWxsXSk7XG4gIH1cblxuICBfb25NYXhDaGFuZ2UoZXZ0KSB7XG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gZXZ0LnRhcmdldDtcbiAgICB0aGlzLl9zbGlkZXJFbGVtZW50Lm5vVWlTbGlkZXIuc2V0KFtudWxsLCBNYXRoLnJvdW5kKHZhbHVlKV0pO1xuICB9XG5cbiAgX3NldEhhbmRsZXJzKCkge1xuICAgIHRoaXMuX3NsaWRlckVsZW1lbnQubm9VaVNsaWRlci5vbihgdXBkYXRlYCwgdGhpcy5fb25TbGlkZXJDaGFuZ2UpO1xuICAgIHRoaXMuX2lucHV0TWluRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGBjaGFuZ2VgLCB0aGlzLl9vbk1pbkNoYW5nZSk7XG4gICAgdGhpcy5faW5wdXRNYXhFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoYGNoYW5nZWAsIHRoaXMuX29uTWF4Q2hhbmdlKTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgbm9VaVNsaWRlci5jcmVhdGUodGhpcy5fc2xpZGVyRWxlbWVudCwge1xuICAgICAgc3RhcnQ6IFt0aGlzLl9taW5WYWx1ZSwgdGhpcy5fbWF4VmFsdWVdLFxuICAgICAgY29ubmVjdDogdHJ1ZSxcbiAgICAgIHJhbmdlOiB7XG4gICAgICAgIG1pbjogdGhpcy5fbWluVmFsdWUsXG4gICAgICAgIG1heDogdGhpcy5fbWF4VmFsdWUsXG4gICAgICB9LFxuICAgICAgc3RlcDogdGhpcy5fc3RlcCxcbiAgICAgIHRvb2x0aXBzOiB0cnVlLFxuICAgICAgZm9ybWF0OiB7XG4gICAgICAgIHRvOiAodmFsdWUpID0+IE1hdGgudHJ1bmModmFsdWUpLFxuICAgICAgICBmcm9tOiAodmFsdWUpID0+IE1hdGgudHJ1bmModmFsdWUpLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIHRoaXMuX3NldEhhbmRsZXJzKCk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=