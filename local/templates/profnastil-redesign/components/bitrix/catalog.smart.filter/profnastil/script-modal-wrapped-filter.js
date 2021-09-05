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

/***/ "./node_modules/nouislider/dist/nouislider.js":
/*!****************************************************!*\
  !*** ./node_modules/nouislider/dist/nouislider.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
     true ? factory(exports) :
    undefined;
}(this, (function (exports) { 'use strict';

    exports.PipsMode = void 0;
    (function (PipsMode) {
        PipsMode["Range"] = "range";
        PipsMode["Steps"] = "steps";
        PipsMode["Positions"] = "positions";
        PipsMode["Count"] = "count";
        PipsMode["Values"] = "values";
    })(exports.PipsMode || (exports.PipsMode = {}));
    exports.PipsType = void 0;
    (function (PipsType) {
        PipsType[PipsType["None"] = -1] = "None";
        PipsType[PipsType["NoValue"] = 0] = "NoValue";
        PipsType[PipsType["LargeValue"] = 1] = "LargeValue";
        PipsType[PipsType["SmallValue"] = 2] = "SmallValue";
    })(exports.PipsType || (exports.PipsType = {}));
    //region Helper Methods
    function isValidFormatter(entry) {
        return isValidPartialFormatter(entry) && typeof entry.from === "function";
    }
    function isValidPartialFormatter(entry) {
        // partial formatters only need a to function and not a from function
        return typeof entry === "object" && typeof entry.to === "function";
    }
    function removeElement(el) {
        el.parentElement.removeChild(el);
    }
    function isSet(value) {
        return value !== null && value !== undefined;
    }
    // Bindable version
    function preventDefault(e) {
        e.preventDefault();
    }
    // Removes duplicates from an array.
    function unique(array) {
        return array.filter(function (a) {
            return !this[a] ? (this[a] = true) : false;
        }, {});
    }
    // Round a value to the closest 'to'.
    function closest(value, to) {
        return Math.round(value / to) * to;
    }
    // Current position of an element relative to the document.
    function offset(elem, orientation) {
        var rect = elem.getBoundingClientRect();
        var doc = elem.ownerDocument;
        var docElem = doc.documentElement;
        var pageOffset = getPageOffset(doc);
        // getBoundingClientRect contains left scroll in Chrome on Android.
        // I haven't found a feature detection that proves this. Worst case
        // scenario on mis-match: the 'tap' feature on horizontal sliders breaks.
        if (/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)) {
            pageOffset.x = 0;
        }
        return orientation ? rect.top + pageOffset.y - docElem.clientTop : rect.left + pageOffset.x - docElem.clientLeft;
    }
    // Checks whether a value is numerical.
    function isNumeric(a) {
        return typeof a === "number" && !isNaN(a) && isFinite(a);
    }
    // Sets a class and removes it after [duration] ms.
    function addClassFor(element, className, duration) {
        if (duration > 0) {
            addClass(element, className);
            setTimeout(function () {
                removeClass(element, className);
            }, duration);
        }
    }
    // Limits a value to 0 - 100
    function limit(a) {
        return Math.max(Math.min(a, 100), 0);
    }
    // Wraps a variable as an array, if it isn't one yet.
    // Note that an input array is returned by reference!
    function asArray(a) {
        return Array.isArray(a) ? a : [a];
    }
    // Counts decimals
    function countDecimals(numStr) {
        numStr = String(numStr);
        var pieces = numStr.split(".");
        return pieces.length > 1 ? pieces[1].length : 0;
    }
    // http://youmightnotneedjquery.com/#add_class
    function addClass(el, className) {
        if (el.classList && !/\s/.test(className)) {
            el.classList.add(className);
        }
        else {
            el.className += " " + className;
        }
    }
    // http://youmightnotneedjquery.com/#remove_class
    function removeClass(el, className) {
        if (el.classList && !/\s/.test(className)) {
            el.classList.remove(className);
        }
        else {
            el.className = el.className.replace(new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " ");
        }
    }
    // https://plainjs.com/javascript/attributes/adding-removing-and-testing-for-classes-9/
    function hasClass(el, className) {
        return el.classList ? el.classList.contains(className) : new RegExp("\\b" + className + "\\b").test(el.className);
    }
    // https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY#Notes
    function getPageOffset(doc) {
        var supportPageOffset = window.pageXOffset !== undefined;
        var isCSS1Compat = (doc.compatMode || "") === "CSS1Compat";
        var x = supportPageOffset
            ? window.pageXOffset
            : isCSS1Compat
                ? doc.documentElement.scrollLeft
                : doc.body.scrollLeft;
        var y = supportPageOffset
            ? window.pageYOffset
            : isCSS1Compat
                ? doc.documentElement.scrollTop
                : doc.body.scrollTop;
        return {
            x: x,
            y: y
        };
    }
    // we provide a function to compute constants instead
    // of accessing window.* as soon as the module needs it
    // so that we do not compute anything if not needed
    function getActions() {
        // Determine the events to bind. IE11 implements pointerEvents without
        // a prefix, which breaks compatibility with the IE10 implementation.
        return window.navigator.pointerEnabled
            ? {
                start: "pointerdown",
                move: "pointermove",
                end: "pointerup"
            }
            : window.navigator.msPointerEnabled
                ? {
                    start: "MSPointerDown",
                    move: "MSPointerMove",
                    end: "MSPointerUp"
                }
                : {
                    start: "mousedown touchstart",
                    move: "mousemove touchmove",
                    end: "mouseup touchend"
                };
    }
    // https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
    // Issue #785
    function getSupportsPassive() {
        var supportsPassive = false;
        /* eslint-disable */
        try {
            var opts = Object.defineProperty({}, "passive", {
                get: function () {
                    supportsPassive = true;
                }
            });
            // @ts-ignore
            window.addEventListener("test", null, opts);
        }
        catch (e) { }
        /* eslint-enable */
        return supportsPassive;
    }
    function getSupportsTouchActionNone() {
        return window.CSS && CSS.supports && CSS.supports("touch-action", "none");
    }
    //endregion
    //region Range Calculation
    // Determine the size of a sub-range in relation to a full range.
    function subRangeRatio(pa, pb) {
        return 100 / (pb - pa);
    }
    // (percentage) How many percent is this value of this range?
    function fromPercentage(range, value, startRange) {
        return (value * 100) / (range[startRange + 1] - range[startRange]);
    }
    // (percentage) Where is this value on this range?
    function toPercentage(range, value) {
        return fromPercentage(range, range[0] < 0 ? value + Math.abs(range[0]) : value - range[0], 0);
    }
    // (value) How much is this percentage on this range?
    function isPercentage(range, value) {
        return (value * (range[1] - range[0])) / 100 + range[0];
    }
    function getJ(value, arr) {
        var j = 1;
        while (value >= arr[j]) {
            j += 1;
        }
        return j;
    }
    // (percentage) Input a value, find where, on a scale of 0-100, it applies.
    function toStepping(xVal, xPct, value) {
        if (value >= xVal.slice(-1)[0]) {
            return 100;
        }
        var j = getJ(value, xVal);
        var va = xVal[j - 1];
        var vb = xVal[j];
        var pa = xPct[j - 1];
        var pb = xPct[j];
        return pa + toPercentage([va, vb], value) / subRangeRatio(pa, pb);
    }
    // (value) Input a percentage, find where it is on the specified range.
    function fromStepping(xVal, xPct, value) {
        // There is no range group that fits 100
        if (value >= 100) {
            return xVal.slice(-1)[0];
        }
        var j = getJ(value, xPct);
        var va = xVal[j - 1];
        var vb = xVal[j];
        var pa = xPct[j - 1];
        var pb = xPct[j];
        return isPercentage([va, vb], (value - pa) * subRangeRatio(pa, pb));
    }
    // (percentage) Get the step that applies at a certain value.
    function getStep(xPct, xSteps, snap, value) {
        if (value === 100) {
            return value;
        }
        var j = getJ(value, xPct);
        var a = xPct[j - 1];
        var b = xPct[j];
        // If 'snap' is set, steps are used as fixed points on the slider.
        if (snap) {
            // Find the closest position, a or b.
            if (value - a > (b - a) / 2) {
                return b;
            }
            return a;
        }
        if (!xSteps[j - 1]) {
            return value;
        }
        return xPct[j - 1] + closest(value - xPct[j - 1], xSteps[j - 1]);
    }
    //endregion
    //region Spectrum
    var Spectrum = /** @class */ (function () {
        function Spectrum(entry, snap, singleStep) {
            this.xPct = [];
            this.xVal = [];
            this.xSteps = [];
            this.xNumSteps = [];
            this.xHighestCompleteStep = [];
            this.xSteps = [singleStep || false];
            this.xNumSteps = [false];
            this.snap = snap;
            var index;
            var ordered = [];
            // Map the object keys to an array.
            Object.keys(entry).forEach(function (index) {
                ordered.push([asArray(entry[index]), index]);
            });
            // Sort all entries by value (numeric sort).
            ordered.sort(function (a, b) {
                return a[0][0] - b[0][0];
            });
            // Convert all entries to subranges.
            for (index = 0; index < ordered.length; index++) {
                this.handleEntryPoint(ordered[index][1], ordered[index][0]);
            }
            // Store the actual step values.
            // xSteps is sorted in the same order as xPct and xVal.
            this.xNumSteps = this.xSteps.slice(0);
            // Convert all numeric steps to the percentage of the subrange they represent.
            for (index = 0; index < this.xNumSteps.length; index++) {
                this.handleStepPoint(index, this.xNumSteps[index]);
            }
        }
        Spectrum.prototype.getDistance = function (value) {
            var index;
            var distances = [];
            for (index = 0; index < this.xNumSteps.length - 1; index++) {
                // last "range" can't contain step size as it is purely an endpoint.
                var step = this.xNumSteps[index];
                if (step && (value / step) % 1 !== 0) {
                    throw new Error("noUiSlider: 'limit', 'margin' and 'padding' of " +
                        this.xPct[index] +
                        "% range must be divisible by step.");
                }
                // Calculate percentual distance in current range of limit, margin or padding
                distances[index] = fromPercentage(this.xVal, value, index);
            }
            return distances;
        };
        // Calculate the percentual distance over the whole scale of ranges.
        // direction: 0 = backwards / 1 = forwards
        Spectrum.prototype.getAbsoluteDistance = function (value, distances, direction) {
            var xPct_index = 0;
            // Calculate range where to start calculation
            if (value < this.xPct[this.xPct.length - 1]) {
                while (value > this.xPct[xPct_index + 1]) {
                    xPct_index++;
                }
            }
            else if (value === this.xPct[this.xPct.length - 1]) {
                xPct_index = this.xPct.length - 2;
            }
            // If looking backwards and the value is exactly at a range separator then look one range further
            if (!direction && value === this.xPct[xPct_index + 1]) {
                xPct_index++;
            }
            if (distances === null) {
                distances = [];
            }
            var start_factor;
            var rest_factor = 1;
            var rest_rel_distance = distances[xPct_index];
            var range_pct = 0;
            var rel_range_distance = 0;
            var abs_distance_counter = 0;
            var range_counter = 0;
            // Calculate what part of the start range the value is
            if (direction) {
                start_factor = (value - this.xPct[xPct_index]) / (this.xPct[xPct_index + 1] - this.xPct[xPct_index]);
            }
            else {
                start_factor = (this.xPct[xPct_index + 1] - value) / (this.xPct[xPct_index + 1] - this.xPct[xPct_index]);
            }
            // Do until the complete distance across ranges is calculated
            while (rest_rel_distance > 0) {
                // Calculate the percentage of total range
                range_pct = this.xPct[xPct_index + 1 + range_counter] - this.xPct[xPct_index + range_counter];
                // Detect if the margin, padding or limit is larger then the current range and calculate
                if (distances[xPct_index + range_counter] * rest_factor + 100 - start_factor * 100 > 100) {
                    // If larger then take the percentual distance of the whole range
                    rel_range_distance = range_pct * start_factor;
                    // Rest factor of relative percentual distance still to be calculated
                    rest_factor = (rest_rel_distance - 100 * start_factor) / distances[xPct_index + range_counter];
                    // Set start factor to 1 as for next range it does not apply.
                    start_factor = 1;
                }
                else {
                    // If smaller or equal then take the percentual distance of the calculate percentual part of that range
                    rel_range_distance = ((distances[xPct_index + range_counter] * range_pct) / 100) * rest_factor;
                    // No rest left as the rest fits in current range
                    rest_factor = 0;
                }
                if (direction) {
                    abs_distance_counter = abs_distance_counter - rel_range_distance;
                    // Limit range to first range when distance becomes outside of minimum range
                    if (this.xPct.length + range_counter >= 1) {
                        range_counter--;
                    }
                }
                else {
                    abs_distance_counter = abs_distance_counter + rel_range_distance;
                    // Limit range to last range when distance becomes outside of maximum range
                    if (this.xPct.length - range_counter >= 1) {
                        range_counter++;
                    }
                }
                // Rest of relative percentual distance still to be calculated
                rest_rel_distance = distances[xPct_index + range_counter] * rest_factor;
            }
            return value + abs_distance_counter;
        };
        Spectrum.prototype.toStepping = function (value) {
            value = toStepping(this.xVal, this.xPct, value);
            return value;
        };
        Spectrum.prototype.fromStepping = function (value) {
            return fromStepping(this.xVal, this.xPct, value);
        };
        Spectrum.prototype.getStep = function (value) {
            value = getStep(this.xPct, this.xSteps, this.snap, value);
            return value;
        };
        Spectrum.prototype.getDefaultStep = function (value, isDown, size) {
            var j = getJ(value, this.xPct);
            // When at the top or stepping down, look at the previous sub-range
            if (value === 100 || (isDown && value === this.xPct[j - 1])) {
                j = Math.max(j - 1, 1);
            }
            return (this.xVal[j] - this.xVal[j - 1]) / size;
        };
        Spectrum.prototype.getNearbySteps = function (value) {
            var j = getJ(value, this.xPct);
            return {
                stepBefore: {
                    startValue: this.xVal[j - 2],
                    step: this.xNumSteps[j - 2],
                    highestStep: this.xHighestCompleteStep[j - 2]
                },
                thisStep: {
                    startValue: this.xVal[j - 1],
                    step: this.xNumSteps[j - 1],
                    highestStep: this.xHighestCompleteStep[j - 1]
                },
                stepAfter: {
                    startValue: this.xVal[j],
                    step: this.xNumSteps[j],
                    highestStep: this.xHighestCompleteStep[j]
                }
            };
        };
        Spectrum.prototype.countStepDecimals = function () {
            var stepDecimals = this.xNumSteps.map(countDecimals);
            return Math.max.apply(null, stepDecimals);
        };
        Spectrum.prototype.hasNoSize = function () {
            return this.xVal[0] === this.xVal[this.xVal.length - 1];
        };
        // Outside testing
        Spectrum.prototype.convert = function (value) {
            return this.getStep(this.toStepping(value));
        };
        Spectrum.prototype.handleEntryPoint = function (index, value) {
            var percentage;
            // Covert min/max syntax to 0 and 100.
            if (index === "min") {
                percentage = 0;
            }
            else if (index === "max") {
                percentage = 100;
            }
            else {
                percentage = parseFloat(index);
            }
            // Check for correct input.
            if (!isNumeric(percentage) || !isNumeric(value[0])) {
                throw new Error("noUiSlider: 'range' value isn't numeric.");
            }
            // Store values.
            this.xPct.push(percentage);
            this.xVal.push(value[0]);
            var value1 = Number(value[1]);
            // NaN will evaluate to false too, but to keep
            // logging clear, set step explicitly. Make sure
            // not to override the 'step' setting with false.
            if (!percentage) {
                if (!isNaN(value1)) {
                    this.xSteps[0] = value1;
                }
            }
            else {
                this.xSteps.push(isNaN(value1) ? false : value1);
            }
            this.xHighestCompleteStep.push(0);
        };
        Spectrum.prototype.handleStepPoint = function (i, n) {
            // Ignore 'false' stepping.
            if (!n) {
                return;
            }
            // Step over zero-length ranges (#948);
            if (this.xVal[i] === this.xVal[i + 1]) {
                this.xSteps[i] = this.xHighestCompleteStep[i] = this.xVal[i];
                return;
            }
            // Factor to range ratio
            this.xSteps[i] =
                fromPercentage([this.xVal[i], this.xVal[i + 1]], n, 0) / subRangeRatio(this.xPct[i], this.xPct[i + 1]);
            var totalSteps = (this.xVal[i + 1] - this.xVal[i]) / this.xNumSteps[i];
            var highestStep = Math.ceil(Number(totalSteps.toFixed(3)) - 1);
            var step = this.xVal[i] + this.xNumSteps[i] * highestStep;
            this.xHighestCompleteStep[i] = step;
        };
        return Spectrum;
    }());
    //endregion
    //region Options
    /*	Every input option is tested and parsed. This will prevent
        endless validation in internal methods. These tests are
        structured with an item for every option available. An
        option can be marked as required by setting the 'r' flag.
        The testing function is provided with three arguments:
            - The provided value for the option;
            - A reference to the options object;
            - The name for the option;

        The testing function returns false when an error is detected,
        or true when everything is OK. It can also modify the option
        object, to make sure all values can be correctly looped elsewhere. */
    //region Defaults
    var defaultFormatter = {
        to: function (value) {
            return value === undefined ? "" : value.toFixed(2);
        },
        from: Number
    };
    var cssClasses = {
        target: "target",
        base: "base",
        origin: "origin",
        handle: "handle",
        handleLower: "handle-lower",
        handleUpper: "handle-upper",
        touchArea: "touch-area",
        horizontal: "horizontal",
        vertical: "vertical",
        background: "background",
        connect: "connect",
        connects: "connects",
        ltr: "ltr",
        rtl: "rtl",
        textDirectionLtr: "txt-dir-ltr",
        textDirectionRtl: "txt-dir-rtl",
        draggable: "draggable",
        drag: "state-drag",
        tap: "state-tap",
        active: "active",
        tooltip: "tooltip",
        pips: "pips",
        pipsHorizontal: "pips-horizontal",
        pipsVertical: "pips-vertical",
        marker: "marker",
        markerHorizontal: "marker-horizontal",
        markerVertical: "marker-vertical",
        markerNormal: "marker-normal",
        markerLarge: "marker-large",
        markerSub: "marker-sub",
        value: "value",
        valueHorizontal: "value-horizontal",
        valueVertical: "value-vertical",
        valueNormal: "value-normal",
        valueLarge: "value-large",
        valueSub: "value-sub"
    };
    // Namespaces of internal event listeners
    var INTERNAL_EVENT_NS = {
        tooltips: ".__tooltips",
        aria: ".__aria"
    };
    //endregion
    function testStep(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider: 'step' is not numeric.");
        }
        // The step option can still be used to set stepping
        // for linear sliders. Overwritten if set in 'range'.
        parsed.singleStep = entry;
    }
    function testKeyboardPageMultiplier(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");
        }
        parsed.keyboardPageMultiplier = entry;
    }
    function testKeyboardMultiplier(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");
        }
        parsed.keyboardMultiplier = entry;
    }
    function testKeyboardDefaultStep(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");
        }
        parsed.keyboardDefaultStep = entry;
    }
    function testRange(parsed, entry) {
        // Filter incorrect input.
        if (typeof entry !== "object" || Array.isArray(entry)) {
            throw new Error("noUiSlider: 'range' is not an object.");
        }
        // Catch missing start or end.
        if (entry.min === undefined || entry.max === undefined) {
            throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
        }
        parsed.spectrum = new Spectrum(entry, parsed.snap || false, parsed.singleStep);
    }
    function testStart(parsed, entry) {
        entry = asArray(entry);
        // Validate input. Values aren't tested, as the public .val method
        // will always provide a valid location.
        if (!Array.isArray(entry) || !entry.length) {
            throw new Error("noUiSlider: 'start' option is incorrect.");
        }
        // Store the number of handles.
        parsed.handles = entry.length;
        // When the slider is initialized, the .val method will
        // be called with the start options.
        parsed.start = entry;
    }
    function testSnap(parsed, entry) {
        if (typeof entry !== "boolean") {
            throw new Error("noUiSlider: 'snap' option must be a boolean.");
        }
        // Enforce 100% stepping within subranges.
        parsed.snap = entry;
    }
    function testAnimate(parsed, entry) {
        if (typeof entry !== "boolean") {
            throw new Error("noUiSlider: 'animate' option must be a boolean.");
        }
        // Enforce 100% stepping within subranges.
        parsed.animate = entry;
    }
    function testAnimationDuration(parsed, entry) {
        if (typeof entry !== "number") {
            throw new Error("noUiSlider: 'animationDuration' option must be a number.");
        }
        parsed.animationDuration = entry;
    }
    function testConnect(parsed, entry) {
        var connect = [false];
        var i;
        // Map legacy options
        if (entry === "lower") {
            entry = [true, false];
        }
        else if (entry === "upper") {
            entry = [false, true];
        }
        // Handle boolean options
        if (entry === true || entry === false) {
            for (i = 1; i < parsed.handles; i++) {
                connect.push(entry);
            }
            connect.push(false);
        }
        // Reject invalid input
        else if (!Array.isArray(entry) || !entry.length || entry.length !== parsed.handles + 1) {
            throw new Error("noUiSlider: 'connect' option doesn't match handle count.");
        }
        else {
            connect = entry;
        }
        parsed.connect = connect;
    }
    function testOrientation(parsed, entry) {
        // Set orientation to an a numerical value for easy
        // array selection.
        switch (entry) {
            case "horizontal":
                parsed.ort = 0;
                break;
            case "vertical":
                parsed.ort = 1;
                break;
            default:
                throw new Error("noUiSlider: 'orientation' option is invalid.");
        }
    }
    function testMargin(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider: 'margin' option must be numeric.");
        }
        // Issue #582
        if (entry === 0) {
            return;
        }
        parsed.margin = parsed.spectrum.getDistance(entry);
    }
    function testLimit(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider: 'limit' option must be numeric.");
        }
        parsed.limit = parsed.spectrum.getDistance(entry);
        if (!parsed.limit || parsed.handles < 2) {
            throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.");
        }
    }
    function testPadding(parsed, entry) {
        var index;
        if (!isNumeric(entry) && !Array.isArray(entry)) {
            throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
        }
        if (Array.isArray(entry) && !(entry.length === 2 || isNumeric(entry[0]) || isNumeric(entry[1]))) {
            throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
        }
        if (entry === 0) {
            return;
        }
        if (!Array.isArray(entry)) {
            entry = [entry, entry];
        }
        // 'getDistance' returns false for invalid values.
        parsed.padding = [parsed.spectrum.getDistance(entry[0]), parsed.spectrum.getDistance(entry[1])];
        for (index = 0; index < parsed.spectrum.xNumSteps.length - 1; index++) {
            // last "range" can't contain step size as it is purely an endpoint.
            if (parsed.padding[0][index] < 0 || parsed.padding[1][index] < 0) {
                throw new Error("noUiSlider: 'padding' option must be a positive number(s).");
            }
        }
        var totalPadding = entry[0] + entry[1];
        var firstValue = parsed.spectrum.xVal[0];
        var lastValue = parsed.spectrum.xVal[parsed.spectrum.xVal.length - 1];
        if (totalPadding / (lastValue - firstValue) > 1) {
            throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.");
        }
    }
    function testDirection(parsed, entry) {
        // Set direction as a numerical value for easy parsing.
        // Invert connection for RTL sliders, so that the proper
        // handles get the connect/background classes.
        switch (entry) {
            case "ltr":
                parsed.dir = 0;
                break;
            case "rtl":
                parsed.dir = 1;
                break;
            default:
                throw new Error("noUiSlider: 'direction' option was not recognized.");
        }
    }
    function testBehaviour(parsed, entry) {
        // Make sure the input is a string.
        if (typeof entry !== "string") {
            throw new Error("noUiSlider: 'behaviour' must be a string containing options.");
        }
        // Check if the string contains any keywords.
        // None are required.
        var tap = entry.indexOf("tap") >= 0;
        var drag = entry.indexOf("drag") >= 0;
        var fixed = entry.indexOf("fixed") >= 0;
        var snap = entry.indexOf("snap") >= 0;
        var hover = entry.indexOf("hover") >= 0;
        var unconstrained = entry.indexOf("unconstrained") >= 0;
        var dragAll = entry.indexOf("drag-all") >= 0;
        if (fixed) {
            if (parsed.handles !== 2) {
                throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");
            }
            // Use margin to enforce fixed state
            testMargin(parsed, parsed.start[1] - parsed.start[0]);
        }
        if (unconstrained && (parsed.margin || parsed.limit)) {
            throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");
        }
        parsed.events = {
            tap: tap || snap,
            drag: drag,
            dragAll: dragAll,
            fixed: fixed,
            snap: snap,
            hover: hover,
            unconstrained: unconstrained
        };
    }
    function testTooltips(parsed, entry) {
        if (entry === false) {
            return;
        }
        if (entry === true || isValidPartialFormatter(entry)) {
            parsed.tooltips = [];
            for (var i = 0; i < parsed.handles; i++) {
                parsed.tooltips.push(entry);
            }
        }
        else {
            entry = asArray(entry);
            if (entry.length !== parsed.handles) {
                throw new Error("noUiSlider: must pass a formatter for all handles.");
            }
            entry.forEach(function (formatter) {
                if (typeof formatter !== "boolean" && !isValidPartialFormatter(formatter)) {
                    throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.");
                }
            });
            parsed.tooltips = entry;
        }
    }
    function testHandleAttributes(parsed, entry) {
        if (entry.length !== parsed.handles) {
            throw new Error("noUiSlider: must pass a attributes for all handles.");
        }
        parsed.handleAttributes = entry;
    }
    function testAriaFormat(parsed, entry) {
        if (!isValidPartialFormatter(entry)) {
            throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");
        }
        parsed.ariaFormat = entry;
    }
    function testFormat(parsed, entry) {
        if (!isValidFormatter(entry)) {
            throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");
        }
        parsed.format = entry;
    }
    function testKeyboardSupport(parsed, entry) {
        if (typeof entry !== "boolean") {
            throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");
        }
        parsed.keyboardSupport = entry;
    }
    function testDocumentElement(parsed, entry) {
        // This is an advanced option. Passed values are used without validation.
        parsed.documentElement = entry;
    }
    function testCssPrefix(parsed, entry) {
        if (typeof entry !== "string" && entry !== false) {
            throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");
        }
        parsed.cssPrefix = entry;
    }
    function testCssClasses(parsed, entry) {
        if (typeof entry !== "object") {
            throw new Error("noUiSlider: 'cssClasses' must be an object.");
        }
        if (typeof parsed.cssPrefix === "string") {
            parsed.cssClasses = {};
            Object.keys(entry).forEach(function (key) {
                parsed.cssClasses[key] = parsed.cssPrefix + entry[key];
            });
        }
        else {
            parsed.cssClasses = entry;
        }
    }
    // Test all developer settings and parse to assumption-safe values.
    function testOptions(options) {
        // To prove a fix for #537, freeze options here.
        // If the object is modified, an error will be thrown.
        // Object.freeze(options);
        var parsed = {
            margin: null,
            limit: null,
            padding: null,
            animate: true,
            animationDuration: 300,
            ariaFormat: defaultFormatter,
            format: defaultFormatter
        };
        // Tests are executed in the order they are presented here.
        var tests = {
            step: { r: false, t: testStep },
            keyboardPageMultiplier: { r: false, t: testKeyboardPageMultiplier },
            keyboardMultiplier: { r: false, t: testKeyboardMultiplier },
            keyboardDefaultStep: { r: false, t: testKeyboardDefaultStep },
            start: { r: true, t: testStart },
            connect: { r: true, t: testConnect },
            direction: { r: true, t: testDirection },
            snap: { r: false, t: testSnap },
            animate: { r: false, t: testAnimate },
            animationDuration: { r: false, t: testAnimationDuration },
            range: { r: true, t: testRange },
            orientation: { r: false, t: testOrientation },
            margin: { r: false, t: testMargin },
            limit: { r: false, t: testLimit },
            padding: { r: false, t: testPadding },
            behaviour: { r: true, t: testBehaviour },
            ariaFormat: { r: false, t: testAriaFormat },
            format: { r: false, t: testFormat },
            tooltips: { r: false, t: testTooltips },
            keyboardSupport: { r: true, t: testKeyboardSupport },
            documentElement: { r: false, t: testDocumentElement },
            cssPrefix: { r: true, t: testCssPrefix },
            cssClasses: { r: true, t: testCssClasses },
            handleAttributes: { r: false, t: testHandleAttributes }
        };
        var defaults = {
            connect: false,
            direction: "ltr",
            behaviour: "tap",
            orientation: "horizontal",
            keyboardSupport: true,
            cssPrefix: "noUi-",
            cssClasses: cssClasses,
            keyboardPageMultiplier: 5,
            keyboardMultiplier: 1,
            keyboardDefaultStep: 10
        };
        // AriaFormat defaults to regular format, if any.
        if (options.format && !options.ariaFormat) {
            options.ariaFormat = options.format;
        }
        // Run all options through a testing mechanism to ensure correct
        // input. It should be noted that options might get modified to
        // be handled properly. E.g. wrapping integers in arrays.
        Object.keys(tests).forEach(function (name) {
            // If the option isn't set, but it is required, throw an error.
            if (!isSet(options[name]) && defaults[name] === undefined) {
                if (tests[name].r) {
                    throw new Error("noUiSlider: '" + name + "' is required.");
                }
                return;
            }
            tests[name].t(parsed, !isSet(options[name]) ? defaults[name] : options[name]);
        });
        // Forward pips options
        parsed.pips = options.pips;
        // All recent browsers accept unprefixed transform.
        // We need -ms- for IE9 and -webkit- for older Android;
        // Assume use of -webkit- if unprefixed and -ms- are not supported.
        // https://caniuse.com/#feat=transforms2d
        var d = document.createElement("div");
        var msPrefix = d.style.msTransform !== undefined;
        var noPrefix = d.style.transform !== undefined;
        parsed.transformRule = noPrefix ? "transform" : msPrefix ? "msTransform" : "webkitTransform";
        // Pips don't move, so we can place them using left/top.
        var styles = [
            ["left", "top"],
            ["right", "bottom"]
        ];
        parsed.style = styles[parsed.dir][parsed.ort];
        return parsed;
    }
    //endregion
    function scope(target, options, originalOptions) {
        var actions = getActions();
        var supportsTouchActionNone = getSupportsTouchActionNone();
        var supportsPassive = supportsTouchActionNone && getSupportsPassive();
        // All variables local to 'scope' are prefixed with 'scope_'
        // Slider DOM Nodes
        var scope_Target = target;
        var scope_Base;
        var scope_Handles;
        var scope_Connects;
        var scope_Pips;
        var scope_Tooltips;
        // Slider state values
        var scope_Spectrum = options.spectrum;
        var scope_Values = [];
        var scope_Locations = [];
        var scope_HandleNumbers = [];
        var scope_ActiveHandlesCount = 0;
        var scope_Events = {};
        // Document Nodes
        var scope_Document = target.ownerDocument;
        var scope_DocumentElement = options.documentElement || scope_Document.documentElement;
        var scope_Body = scope_Document.body;
        // For horizontal sliders in standard ltr documents,
        // make .noUi-origin overflow to the left so the document doesn't scroll.
        var scope_DirOffset = scope_Document.dir === "rtl" || options.ort === 1 ? 0 : 100;
        // Creates a node, adds it to target, returns the new node.
        function addNodeTo(addTarget, className) {
            var div = scope_Document.createElement("div");
            if (className) {
                addClass(div, className);
            }
            addTarget.appendChild(div);
            return div;
        }
        // Append a origin to the base
        function addOrigin(base, handleNumber) {
            var origin = addNodeTo(base, options.cssClasses.origin);
            var handle = addNodeTo(origin, options.cssClasses.handle);
            addNodeTo(handle, options.cssClasses.touchArea);
            handle.setAttribute("data-handle", String(handleNumber));
            if (options.keyboardSupport) {
                // https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex
                // 0 = focusable and reachable
                handle.setAttribute("tabindex", "0");
                handle.addEventListener("keydown", function (event) {
                    return eventKeydown(event, handleNumber);
                });
            }
            if (options.handleAttributes !== undefined) {
                var attributes_1 = options.handleAttributes[handleNumber];
                Object.keys(attributes_1).forEach(function (attribute) {
                    handle.setAttribute(attribute, attributes_1[attribute]);
                });
            }
            handle.setAttribute("role", "slider");
            handle.setAttribute("aria-orientation", options.ort ? "vertical" : "horizontal");
            if (handleNumber === 0) {
                addClass(handle, options.cssClasses.handleLower);
            }
            else if (handleNumber === options.handles - 1) {
                addClass(handle, options.cssClasses.handleUpper);
            }
            return origin;
        }
        // Insert nodes for connect elements
        function addConnect(base, add) {
            if (!add) {
                return false;
            }
            return addNodeTo(base, options.cssClasses.connect);
        }
        // Add handles to the slider base.
        function addElements(connectOptions, base) {
            var connectBase = addNodeTo(base, options.cssClasses.connects);
            scope_Handles = [];
            scope_Connects = [];
            scope_Connects.push(addConnect(connectBase, connectOptions[0]));
            // [::::O====O====O====]
            // connectOptions = [0, 1, 1, 1]
            for (var i = 0; i < options.handles; i++) {
                // Keep a list of all added handles.
                scope_Handles.push(addOrigin(base, i));
                scope_HandleNumbers[i] = i;
                scope_Connects.push(addConnect(connectBase, connectOptions[i + 1]));
            }
        }
        // Initialize a single slider.
        function addSlider(addTarget) {
            // Apply classes and data to the target.
            addClass(addTarget, options.cssClasses.target);
            if (options.dir === 0) {
                addClass(addTarget, options.cssClasses.ltr);
            }
            else {
                addClass(addTarget, options.cssClasses.rtl);
            }
            if (options.ort === 0) {
                addClass(addTarget, options.cssClasses.horizontal);
            }
            else {
                addClass(addTarget, options.cssClasses.vertical);
            }
            var textDirection = getComputedStyle(addTarget).direction;
            if (textDirection === "rtl") {
                addClass(addTarget, options.cssClasses.textDirectionRtl);
            }
            else {
                addClass(addTarget, options.cssClasses.textDirectionLtr);
            }
            return addNodeTo(addTarget, options.cssClasses.base);
        }
        function addTooltip(handle, handleNumber) {
            if (!options.tooltips || !options.tooltips[handleNumber]) {
                return false;
            }
            return addNodeTo(handle.firstChild, options.cssClasses.tooltip);
        }
        function isSliderDisabled() {
            return scope_Target.hasAttribute("disabled");
        }
        // Disable the slider dragging if any handle is disabled
        function isHandleDisabled(handleNumber) {
            var handleOrigin = scope_Handles[handleNumber];
            return handleOrigin.hasAttribute("disabled");
        }
        function removeTooltips() {
            if (scope_Tooltips) {
                removeEvent("update" + INTERNAL_EVENT_NS.tooltips);
                scope_Tooltips.forEach(function (tooltip) {
                    if (tooltip) {
                        removeElement(tooltip);
                    }
                });
                scope_Tooltips = null;
            }
        }
        // The tooltips option is a shorthand for using the 'update' event.
        function tooltips() {
            removeTooltips();
            // Tooltips are added with options.tooltips in original order.
            scope_Tooltips = scope_Handles.map(addTooltip);
            bindEvent("update" + INTERNAL_EVENT_NS.tooltips, function (values, handleNumber, unencoded) {
                if (!scope_Tooltips || !options.tooltips) {
                    return;
                }
                if (scope_Tooltips[handleNumber] === false) {
                    return;
                }
                var formattedValue = values[handleNumber];
                if (options.tooltips[handleNumber] !== true) {
                    formattedValue = options.tooltips[handleNumber].to(unencoded[handleNumber]);
                }
                scope_Tooltips[handleNumber].innerHTML = formattedValue;
            });
        }
        function aria() {
            removeEvent("update" + INTERNAL_EVENT_NS.aria);
            bindEvent("update" + INTERNAL_EVENT_NS.aria, function (values, handleNumber, unencoded, tap, positions) {
                // Update Aria Values for all handles, as a change in one changes min and max values for the next.
                scope_HandleNumbers.forEach(function (index) {
                    var handle = scope_Handles[index];
                    var min = checkHandlePosition(scope_Locations, index, 0, true, true, true);
                    var max = checkHandlePosition(scope_Locations, index, 100, true, true, true);
                    var now = positions[index];
                    // Formatted value for display
                    var text = String(options.ariaFormat.to(unencoded[index]));
                    // Map to slider range values
                    min = scope_Spectrum.fromStepping(min).toFixed(1);
                    max = scope_Spectrum.fromStepping(max).toFixed(1);
                    now = scope_Spectrum.fromStepping(now).toFixed(1);
                    handle.children[0].setAttribute("aria-valuemin", min);
                    handle.children[0].setAttribute("aria-valuemax", max);
                    handle.children[0].setAttribute("aria-valuenow", now);
                    handle.children[0].setAttribute("aria-valuetext", text);
                });
            });
        }
        function getGroup(pips) {
            // Use the range.
            if (pips.mode === exports.PipsMode.Range || pips.mode === exports.PipsMode.Steps) {
                return scope_Spectrum.xVal;
            }
            if (pips.mode === exports.PipsMode.Count) {
                if (pips.values < 2) {
                    throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");
                }
                // Divide 0 - 100 in 'count' parts.
                var interval = pips.values - 1;
                var spread = 100 / interval;
                var values = [];
                // List these parts and have them handled as 'positions'.
                while (interval--) {
                    values[interval] = interval * spread;
                }
                values.push(100);
                return mapToRange(values, pips.stepped);
            }
            if (pips.mode === exports.PipsMode.Positions) {
                // Map all percentages to on-range values.
                return mapToRange(pips.values, pips.stepped);
            }
            if (pips.mode === exports.PipsMode.Values) {
                // If the value must be stepped, it needs to be converted to a percentage first.
                if (pips.stepped) {
                    return pips.values.map(function (value) {
                        // Convert to percentage, apply step, return to value.
                        return scope_Spectrum.fromStepping(scope_Spectrum.getStep(scope_Spectrum.toStepping(value)));
                    });
                }
                // Otherwise, we can simply use the values.
                return pips.values;
            }
            return []; // pips.mode = never
        }
        function mapToRange(values, stepped) {
            return values.map(function (value) {
                return scope_Spectrum.fromStepping(stepped ? scope_Spectrum.getStep(value) : value);
            });
        }
        function generateSpread(pips) {
            function safeIncrement(value, increment) {
                // Avoid floating point variance by dropping the smallest decimal places.
                return Number((value + increment).toFixed(7));
            }
            var group = getGroup(pips);
            var indexes = {};
            var firstInRange = scope_Spectrum.xVal[0];
            var lastInRange = scope_Spectrum.xVal[scope_Spectrum.xVal.length - 1];
            var ignoreFirst = false;
            var ignoreLast = false;
            var prevPct = 0;
            // Create a copy of the group, sort it and filter away all duplicates.
            group = unique(group.slice().sort(function (a, b) {
                return a - b;
            }));
            // Make sure the range starts with the first element.
            if (group[0] !== firstInRange) {
                group.unshift(firstInRange);
                ignoreFirst = true;
            }
            // Likewise for the last one.
            if (group[group.length - 1] !== lastInRange) {
                group.push(lastInRange);
                ignoreLast = true;
            }
            group.forEach(function (current, index) {
                // Get the current step and the lower + upper positions.
                var step;
                var i;
                var q;
                var low = current;
                var high = group[index + 1];
                var newPct;
                var pctDifference;
                var pctPos;
                var type;
                var steps;
                var realSteps;
                var stepSize;
                var isSteps = pips.mode === exports.PipsMode.Steps;
                // When using 'steps' mode, use the provided steps.
                // Otherwise, we'll step on to the next subrange.
                if (isSteps) {
                    step = scope_Spectrum.xNumSteps[index];
                }
                // Default to a 'full' step.
                if (!step) {
                    step = high - low;
                }
                // If high is undefined we are at the last subrange. Make sure it iterates once (#1088)
                if (high === undefined) {
                    high = low;
                }
                // Make sure step isn't 0, which would cause an infinite loop (#654)
                step = Math.max(step, 0.0000001);
                // Find all steps in the subrange.
                for (i = low; i <= high; i = safeIncrement(i, step)) {
                    // Get the percentage value for the current step,
                    // calculate the size for the subrange.
                    newPct = scope_Spectrum.toStepping(i);
                    pctDifference = newPct - prevPct;
                    steps = pctDifference / (pips.density || 1);
                    realSteps = Math.round(steps);
                    // This ratio represents the amount of percentage-space a point indicates.
                    // For a density 1 the points/percentage = 1. For density 2, that percentage needs to be re-divided.
                    // Round the percentage offset to an even number, then divide by two
                    // to spread the offset on both sides of the range.
                    stepSize = pctDifference / realSteps;
                    // Divide all points evenly, adding the correct number to this subrange.
                    // Run up to <= so that 100% gets a point, event if ignoreLast is set.
                    for (q = 1; q <= realSteps; q += 1) {
                        // The ratio between the rounded value and the actual size might be ~1% off.
                        // Correct the percentage offset by the number of points
                        // per subrange. density = 1 will result in 100 points on the
                        // full range, 2 for 50, 4 for 25, etc.
                        pctPos = prevPct + q * stepSize;
                        indexes[pctPos.toFixed(5)] = [scope_Spectrum.fromStepping(pctPos), 0];
                    }
                    // Determine the point type.
                    type = group.indexOf(i) > -1 ? exports.PipsType.LargeValue : isSteps ? exports.PipsType.SmallValue : exports.PipsType.NoValue;
                    // Enforce the 'ignoreFirst' option by overwriting the type for 0.
                    if (!index && ignoreFirst && i !== high) {
                        type = 0;
                    }
                    if (!(i === high && ignoreLast)) {
                        // Mark the 'type' of this point. 0 = plain, 1 = real value, 2 = step value.
                        indexes[newPct.toFixed(5)] = [i, type];
                    }
                    // Update the percentage count.
                    prevPct = newPct;
                }
            });
            return indexes;
        }
        function addMarking(spread, filterFunc, formatter) {
            var _a, _b;
            var element = scope_Document.createElement("div");
            var valueSizeClasses = (_a = {},
                _a[exports.PipsType.None] = "",
                _a[exports.PipsType.NoValue] = options.cssClasses.valueNormal,
                _a[exports.PipsType.LargeValue] = options.cssClasses.valueLarge,
                _a[exports.PipsType.SmallValue] = options.cssClasses.valueSub,
                _a);
            var markerSizeClasses = (_b = {},
                _b[exports.PipsType.None] = "",
                _b[exports.PipsType.NoValue] = options.cssClasses.markerNormal,
                _b[exports.PipsType.LargeValue] = options.cssClasses.markerLarge,
                _b[exports.PipsType.SmallValue] = options.cssClasses.markerSub,
                _b);
            var valueOrientationClasses = [options.cssClasses.valueHorizontal, options.cssClasses.valueVertical];
            var markerOrientationClasses = [options.cssClasses.markerHorizontal, options.cssClasses.markerVertical];
            addClass(element, options.cssClasses.pips);
            addClass(element, options.ort === 0 ? options.cssClasses.pipsHorizontal : options.cssClasses.pipsVertical);
            function getClasses(type, source) {
                var a = source === options.cssClasses.value;
                var orientationClasses = a ? valueOrientationClasses : markerOrientationClasses;
                var sizeClasses = a ? valueSizeClasses : markerSizeClasses;
                return source + " " + orientationClasses[options.ort] + " " + sizeClasses[type];
            }
            function addSpread(offset, value, type) {
                // Apply the filter function, if it is set.
                type = filterFunc ? filterFunc(value, type) : type;
                if (type === exports.PipsType.None) {
                    return;
                }
                // Add a marker for every point
                var node = addNodeTo(element, false);
                node.className = getClasses(type, options.cssClasses.marker);
                node.style[options.style] = offset + "%";
                // Values are only appended for points marked '1' or '2'.
                if (type > exports.PipsType.NoValue) {
                    node = addNodeTo(element, false);
                    node.className = getClasses(type, options.cssClasses.value);
                    node.setAttribute("data-value", String(value));
                    node.style[options.style] = offset + "%";
                    node.innerHTML = String(formatter.to(value));
                }
            }
            // Append all points.
            Object.keys(spread).forEach(function (offset) {
                addSpread(offset, spread[offset][0], spread[offset][1]);
            });
            return element;
        }
        function removePips() {
            if (scope_Pips) {
                removeElement(scope_Pips);
                scope_Pips = null;
            }
        }
        function pips(pips) {
            // Fix #669
            removePips();
            var spread = generateSpread(pips);
            var filter = pips.filter;
            var format = pips.format || {
                to: function (value) {
                    return String(Math.round(value));
                }
            };
            scope_Pips = scope_Target.appendChild(addMarking(spread, filter, format));
            return scope_Pips;
        }
        // Shorthand for base dimensions.
        function baseSize() {
            var rect = scope_Base.getBoundingClientRect();
            var alt = ("offset" + ["Width", "Height"][options.ort]);
            return options.ort === 0 ? rect.width || scope_Base[alt] : rect.height || scope_Base[alt];
        }
        // Handler for attaching events trough a proxy.
        function attachEvent(events, element, callback, data) {
            // This function can be used to 'filter' events to the slider.
            // element is a node, not a nodeList
            var method = function (event) {
                var e = fixEvent(event, data.pageOffset, data.target || element);
                // fixEvent returns false if this event has a different target
                // when handling (multi-) touch events;
                if (!e) {
                    return false;
                }
                // doNotReject is passed by all end events to make sure released touches
                // are not rejected, leaving the slider "stuck" to the cursor;
                if (isSliderDisabled() && !data.doNotReject) {
                    return false;
                }
                // Stop if an active 'tap' transition is taking place.
                if (hasClass(scope_Target, options.cssClasses.tap) && !data.doNotReject) {
                    return false;
                }
                // Ignore right or middle clicks on start #454
                if (events === actions.start && e.buttons !== undefined && e.buttons > 1) {
                    return false;
                }
                // Ignore right or middle clicks on start #454
                if (data.hover && e.buttons) {
                    return false;
                }
                // 'supportsPassive' is only true if a browser also supports touch-action: none in CSS.
                // iOS safari does not, so it doesn't get to benefit from passive scrolling. iOS does support
                // touch-action: manipulation, but that allows panning, which breaks
                // sliders after zooming/on non-responsive pages.
                // See: https://bugs.webkit.org/show_bug.cgi?id=133112
                if (!supportsPassive) {
                    e.preventDefault();
                }
                e.calcPoint = e.points[options.ort];
                // Call the event handler with the event [ and additional data ].
                callback(e, data);
                return;
            };
            var methods = [];
            // Bind a closure on the target for every event type.
            events.split(" ").forEach(function (eventName) {
                element.addEventListener(eventName, method, supportsPassive ? { passive: true } : false);
                methods.push([eventName, method]);
            });
            return methods;
        }
        // Provide a clean event with standardized offset values.
        function fixEvent(e, pageOffset, eventTarget) {
            // Filter the event to register the type, which can be
            // touch, mouse or pointer. Offset changes need to be
            // made on an event specific basis.
            var touch = e.type.indexOf("touch") === 0;
            var mouse = e.type.indexOf("mouse") === 0;
            var pointer = e.type.indexOf("pointer") === 0;
            var x = 0;
            var y = 0;
            // IE10 implemented pointer events with a prefix;
            if (e.type.indexOf("MSPointer") === 0) {
                pointer = true;
            }
            // Erroneous events seem to be passed in occasionally on iOS/iPadOS after user finishes interacting with
            // the slider. They appear to be of type MouseEvent, yet they don't have usual properties set. Ignore
            // events that have no touches or buttons associated with them. (#1057, #1079, #1095)
            if (e.type === "mousedown" && !e.buttons && !e.touches) {
                return false;
            }
            // The only thing one handle should be concerned about is the touches that originated on top of it.
            if (touch) {
                // Returns true if a touch originated on the target.
                var isTouchOnTarget = function (checkTouch) {
                    var target = checkTouch.target;
                    return (target === eventTarget ||
                        eventTarget.contains(target) ||
                        (e.composed && e.composedPath().shift() === eventTarget));
                };
                // In the case of touchstart events, we need to make sure there is still no more than one
                // touch on the target so we look amongst all touches.
                if (e.type === "touchstart") {
                    var targetTouches = Array.prototype.filter.call(e.touches, isTouchOnTarget);
                    // Do not support more than one touch per handle.
                    if (targetTouches.length > 1) {
                        return false;
                    }
                    x = targetTouches[0].pageX;
                    y = targetTouches[0].pageY;
                }
                else {
                    // In the other cases, find on changedTouches is enough.
                    var targetTouch = Array.prototype.find.call(e.changedTouches, isTouchOnTarget);
                    // Cancel if the target touch has not moved.
                    if (!targetTouch) {
                        return false;
                    }
                    x = targetTouch.pageX;
                    y = targetTouch.pageY;
                }
            }
            pageOffset = pageOffset || getPageOffset(scope_Document);
            if (mouse || pointer) {
                x = e.clientX + pageOffset.x;
                y = e.clientY + pageOffset.y;
            }
            e.pageOffset = pageOffset;
            e.points = [x, y];
            e.cursor = mouse || pointer; // Fix #435
            return e;
        }
        // Translate a coordinate in the document to a percentage on the slider
        function calcPointToPercentage(calcPoint) {
            var location = calcPoint - offset(scope_Base, options.ort);
            var proposal = (location * 100) / baseSize();
            // Clamp proposal between 0% and 100%
            // Out-of-bound coordinates may occur when .noUi-base pseudo-elements
            // are used (e.g. contained handles feature)
            proposal = limit(proposal);
            return options.dir ? 100 - proposal : proposal;
        }
        // Find handle closest to a certain percentage on the slider
        function getClosestHandle(clickedPosition) {
            var smallestDifference = 100;
            var handleNumber = false;
            scope_Handles.forEach(function (handle, index) {
                // Disabled handles are ignored
                if (isHandleDisabled(index)) {
                    return;
                }
                var handlePosition = scope_Locations[index];
                var differenceWithThisHandle = Math.abs(handlePosition - clickedPosition);
                // Initial state
                var clickAtEdge = differenceWithThisHandle === 100 && smallestDifference === 100;
                // Difference with this handle is smaller than the previously checked handle
                var isCloser = differenceWithThisHandle < smallestDifference;
                var isCloserAfter = differenceWithThisHandle <= smallestDifference && clickedPosition > handlePosition;
                if (isCloser || isCloserAfter || clickAtEdge) {
                    handleNumber = index;
                    smallestDifference = differenceWithThisHandle;
                }
            });
            return handleNumber;
        }
        // Fire 'end' when a mouse or pen leaves the document.
        function documentLeave(event, data) {
            if (event.type === "mouseout" &&
                event.target.nodeName === "HTML" &&
                event.relatedTarget === null) {
                eventEnd(event, data);
            }
        }
        // Handle movement on document for handle and range drag.
        function eventMove(event, data) {
            // Fix #498
            // Check value of .buttons in 'start' to work around a bug in IE10 mobile (data.buttonsProperty).
            // https://connect.microsoft.com/IE/feedback/details/927005/mobile-ie10-windows-phone-buttons-property-of-pointermove-event-always-zero
            // IE9 has .buttons and .which zero on mousemove.
            // Firefox breaks the spec MDN defines.
            if (navigator.appVersion.indexOf("MSIE 9") === -1 && event.buttons === 0 && data.buttonsProperty !== 0) {
                return eventEnd(event, data);
            }
            // Check if we are moving up or down
            var movement = (options.dir ? -1 : 1) * (event.calcPoint - data.startCalcPoint);
            // Convert the movement into a percentage of the slider width/height
            var proposal = (movement * 100) / data.baseSize;
            moveHandles(movement > 0, proposal, data.locations, data.handleNumbers, data.connect);
        }
        // Unbind move events on document, call callbacks.
        function eventEnd(event, data) {
            // The handle is no longer active, so remove the class.
            if (data.handle) {
                removeClass(data.handle, options.cssClasses.active);
                scope_ActiveHandlesCount -= 1;
            }
            // Unbind the move and end events, which are added on 'start'.
            data.listeners.forEach(function (c) {
                scope_DocumentElement.removeEventListener(c[0], c[1]);
            });
            if (scope_ActiveHandlesCount === 0) {
                // Remove dragging class.
                removeClass(scope_Target, options.cssClasses.drag);
                setZindex();
                // Remove cursor styles and text-selection events bound to the body.
                if (event.cursor) {
                    scope_Body.style.cursor = "";
                    scope_Body.removeEventListener("selectstart", preventDefault);
                }
            }
            data.handleNumbers.forEach(function (handleNumber) {
                fireEvent("change", handleNumber);
                fireEvent("set", handleNumber);
                fireEvent("end", handleNumber);
            });
        }
        // Bind move events on document.
        function eventStart(event, data) {
            // Ignore event if any handle is disabled
            if (data.handleNumbers.some(isHandleDisabled)) {
                return;
            }
            var handle;
            if (data.handleNumbers.length === 1) {
                var handleOrigin = scope_Handles[data.handleNumbers[0]];
                handle = handleOrigin.children[0];
                scope_ActiveHandlesCount += 1;
                // Mark the handle as 'active' so it can be styled.
                addClass(handle, options.cssClasses.active);
            }
            // A drag should never propagate up to the 'tap' event.
            event.stopPropagation();
            // Record the event listeners.
            var listeners = [];
            // Attach the move and end events.
            var moveEvent = attachEvent(actions.move, scope_DocumentElement, eventMove, {
                // The event target has changed so we need to propagate the original one so that we keep
                // relying on it to extract target touches.
                target: event.target,
                handle: handle,
                connect: data.connect,
                listeners: listeners,
                startCalcPoint: event.calcPoint,
                baseSize: baseSize(),
                pageOffset: event.pageOffset,
                handleNumbers: data.handleNumbers,
                buttonsProperty: event.buttons,
                locations: scope_Locations.slice()
            });
            var endEvent = attachEvent(actions.end, scope_DocumentElement, eventEnd, {
                target: event.target,
                handle: handle,
                listeners: listeners,
                doNotReject: true,
                handleNumbers: data.handleNumbers
            });
            var outEvent = attachEvent("mouseout", scope_DocumentElement, documentLeave, {
                target: event.target,
                handle: handle,
                listeners: listeners,
                doNotReject: true,
                handleNumbers: data.handleNumbers
            });
            // We want to make sure we pushed the listeners in the listener list rather than creating
            // a new one as it has already been passed to the event handlers.
            listeners.push.apply(listeners, moveEvent.concat(endEvent, outEvent));
            // Text selection isn't an issue on touch devices,
            // so adding cursor styles can be skipped.
            if (event.cursor) {
                // Prevent the 'I' cursor and extend the range-drag cursor.
                scope_Body.style.cursor = getComputedStyle(event.target).cursor;
                // Mark the target with a dragging state.
                if (scope_Handles.length > 1) {
                    addClass(scope_Target, options.cssClasses.drag);
                }
                // Prevent text selection when dragging the handles.
                // In noUiSlider <= 9.2.0, this was handled by calling preventDefault on mouse/touch start/move,
                // which is scroll blocking. The selectstart event is supported by FireFox starting from version 52,
                // meaning the only holdout is iOS Safari. This doesn't matter: text selection isn't triggered there.
                // The 'cursor' flag is false.
                // See: http://caniuse.com/#search=selectstart
                scope_Body.addEventListener("selectstart", preventDefault, false);
            }
            data.handleNumbers.forEach(function (handleNumber) {
                fireEvent("start", handleNumber);
            });
        }
        // Move closest handle to tapped location.
        function eventTap(event) {
            // The tap event shouldn't propagate up
            event.stopPropagation();
            var proposal = calcPointToPercentage(event.calcPoint);
            var handleNumber = getClosestHandle(proposal);
            // Tackle the case that all handles are 'disabled'.
            if (handleNumber === false) {
                return;
            }
            // Flag the slider as it is now in a transitional state.
            // Transition takes a configurable amount of ms (default 300). Re-enable the slider after that.
            if (!options.events.snap) {
                addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
            }
            setHandle(handleNumber, proposal, true, true);
            setZindex();
            fireEvent("slide", handleNumber, true);
            fireEvent("update", handleNumber, true);
            if (!options.events.snap) {
                fireEvent("change", handleNumber, true);
                fireEvent("set", handleNumber, true);
            }
            else {
                eventStart(event, { handleNumbers: [handleNumber] });
            }
        }
        // Fires a 'hover' event for a hovered mouse/pen position.
        function eventHover(event) {
            var proposal = calcPointToPercentage(event.calcPoint);
            var to = scope_Spectrum.getStep(proposal);
            var value = scope_Spectrum.fromStepping(to);
            Object.keys(scope_Events).forEach(function (targetEvent) {
                if ("hover" === targetEvent.split(".")[0]) {
                    scope_Events[targetEvent].forEach(function (callback) {
                        callback.call(scope_Self, value);
                    });
                }
            });
        }
        // Handles keydown on focused handles
        // Don't move the document when pressing arrow keys on focused handles
        function eventKeydown(event, handleNumber) {
            if (isSliderDisabled() || isHandleDisabled(handleNumber)) {
                return false;
            }
            var horizontalKeys = ["Left", "Right"];
            var verticalKeys = ["Down", "Up"];
            var largeStepKeys = ["PageDown", "PageUp"];
            var edgeKeys = ["Home", "End"];
            if (options.dir && !options.ort) {
                // On an right-to-left slider, the left and right keys act inverted
                horizontalKeys.reverse();
            }
            else if (options.ort && !options.dir) {
                // On a top-to-bottom slider, the up and down keys act inverted
                verticalKeys.reverse();
                largeStepKeys.reverse();
            }
            // Strip "Arrow" for IE compatibility. https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key
            var key = event.key.replace("Arrow", "");
            var isLargeDown = key === largeStepKeys[0];
            var isLargeUp = key === largeStepKeys[1];
            var isDown = key === verticalKeys[0] || key === horizontalKeys[0] || isLargeDown;
            var isUp = key === verticalKeys[1] || key === horizontalKeys[1] || isLargeUp;
            var isMin = key === edgeKeys[0];
            var isMax = key === edgeKeys[1];
            if (!isDown && !isUp && !isMin && !isMax) {
                return true;
            }
            event.preventDefault();
            var to;
            if (isUp || isDown) {
                var direction = isDown ? 0 : 1;
                var steps = getNextStepsForHandle(handleNumber);
                var step = steps[direction];
                // At the edge of a slider, do nothing
                if (step === null) {
                    return false;
                }
                // No step set, use the default of 10% of the sub-range
                if (step === false) {
                    step = scope_Spectrum.getDefaultStep(scope_Locations[handleNumber], isDown, options.keyboardDefaultStep);
                }
                if (isLargeUp || isLargeDown) {
                    step *= options.keyboardPageMultiplier;
                }
                else {
                    step *= options.keyboardMultiplier;
                }
                // Step over zero-length ranges (#948);
                step = Math.max(step, 0.0000001);
                // Decrement for down steps
                step = (isDown ? -1 : 1) * step;
                to = scope_Values[handleNumber] + step;
            }
            else if (isMax) {
                // End key
                to = options.spectrum.xVal[options.spectrum.xVal.length - 1];
            }
            else {
                // Home key
                to = options.spectrum.xVal[0];
            }
            setHandle(handleNumber, scope_Spectrum.toStepping(to), true, true);
            fireEvent("slide", handleNumber);
            fireEvent("update", handleNumber);
            fireEvent("change", handleNumber);
            fireEvent("set", handleNumber);
            return false;
        }
        // Attach events to several slider parts.
        function bindSliderEvents(behaviour) {
            // Attach the standard drag event to the handles.
            if (!behaviour.fixed) {
                scope_Handles.forEach(function (handle, index) {
                    // These events are only bound to the visual handle
                    // element, not the 'real' origin element.
                    attachEvent(actions.start, handle.children[0], eventStart, {
                        handleNumbers: [index]
                    });
                });
            }
            // Attach the tap event to the slider base.
            if (behaviour.tap) {
                attachEvent(actions.start, scope_Base, eventTap, {});
            }
            // Fire hover events
            if (behaviour.hover) {
                attachEvent(actions.move, scope_Base, eventHover, {
                    hover: true
                });
            }
            // Make the range draggable.
            if (behaviour.drag) {
                scope_Connects.forEach(function (connect, index) {
                    if (connect === false || index === 0 || index === scope_Connects.length - 1) {
                        return;
                    }
                    var handleBefore = scope_Handles[index - 1];
                    var handleAfter = scope_Handles[index];
                    var eventHolders = [connect];
                    var handlesToDrag = [handleBefore, handleAfter];
                    var handleNumbersToDrag = [index - 1, index];
                    addClass(connect, options.cssClasses.draggable);
                    // When the range is fixed, the entire range can
                    // be dragged by the handles. The handle in the first
                    // origin will propagate the start event upward,
                    // but it needs to be bound manually on the other.
                    if (behaviour.fixed) {
                        eventHolders.push(handleBefore.children[0]);
                        eventHolders.push(handleAfter.children[0]);
                    }
                    if (behaviour.dragAll) {
                        handlesToDrag = scope_Handles;
                        handleNumbersToDrag = scope_HandleNumbers;
                    }
                    eventHolders.forEach(function (eventHolder) {
                        attachEvent(actions.start, eventHolder, eventStart, {
                            handles: handlesToDrag,
                            handleNumbers: handleNumbersToDrag,
                            connect: connect
                        });
                    });
                });
            }
        }
        // Attach an event to this slider, possibly including a namespace
        function bindEvent(namespacedEvent, callback) {
            scope_Events[namespacedEvent] = scope_Events[namespacedEvent] || [];
            scope_Events[namespacedEvent].push(callback);
            // If the event bound is 'update,' fire it immediately for all handles.
            if (namespacedEvent.split(".")[0] === "update") {
                scope_Handles.forEach(function (a, index) {
                    fireEvent("update", index);
                });
            }
        }
        function isInternalNamespace(namespace) {
            return namespace === INTERNAL_EVENT_NS.aria || namespace === INTERNAL_EVENT_NS.tooltips;
        }
        // Undo attachment of event
        function removeEvent(namespacedEvent) {
            var event = namespacedEvent && namespacedEvent.split(".")[0];
            var namespace = event ? namespacedEvent.substring(event.length) : namespacedEvent;
            Object.keys(scope_Events).forEach(function (bind) {
                var tEvent = bind.split(".")[0];
                var tNamespace = bind.substring(tEvent.length);
                if ((!event || event === tEvent) && (!namespace || namespace === tNamespace)) {
                    // only delete protected internal event if intentional
                    if (!isInternalNamespace(tNamespace) || namespace === tNamespace) {
                        delete scope_Events[bind];
                    }
                }
            });
        }
        // External event handling
        function fireEvent(eventName, handleNumber, tap) {
            Object.keys(scope_Events).forEach(function (targetEvent) {
                var eventType = targetEvent.split(".")[0];
                if (eventName === eventType) {
                    scope_Events[targetEvent].forEach(function (callback) {
                        callback.call(
                        // Use the slider public API as the scope ('this')
                        scope_Self, 
                        // Return values as array, so arg_1[arg_2] is always valid.
                        scope_Values.map(options.format.to), 
                        // Handle index, 0 or 1
                        handleNumber, 
                        // Un-formatted slider values
                        scope_Values.slice(), 
                        // Event is fired by tap, true or false
                        tap || false, 
                        // Left offset of the handle, in relation to the slider
                        scope_Locations.slice(), 
                        // add the slider public API to an accessible parameter when this is unavailable
                        scope_Self);
                    });
                }
            });
        }
        // Split out the handle positioning logic so the Move event can use it, too
        function checkHandlePosition(reference, handleNumber, to, lookBackward, lookForward, getValue) {
            var distance;
            // For sliders with multiple handles, limit movement to the other handle.
            // Apply the margin option by adding it to the handle positions.
            if (scope_Handles.length > 1 && !options.events.unconstrained) {
                if (lookBackward && handleNumber > 0) {
                    distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber - 1], options.margin, false);
                    to = Math.max(to, distance);
                }
                if (lookForward && handleNumber < scope_Handles.length - 1) {
                    distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber + 1], options.margin, true);
                    to = Math.min(to, distance);
                }
            }
            // The limit option has the opposite effect, limiting handles to a
            // maximum distance from another. Limit must be > 0, as otherwise
            // handles would be unmovable.
            if (scope_Handles.length > 1 && options.limit) {
                if (lookBackward && handleNumber > 0) {
                    distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber - 1], options.limit, false);
                    to = Math.min(to, distance);
                }
                if (lookForward && handleNumber < scope_Handles.length - 1) {
                    distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber + 1], options.limit, true);
                    to = Math.max(to, distance);
                }
            }
            // The padding option keeps the handles a certain distance from the
            // edges of the slider. Padding must be > 0.
            if (options.padding) {
                if (handleNumber === 0) {
                    distance = scope_Spectrum.getAbsoluteDistance(0, options.padding[0], false);
                    to = Math.max(to, distance);
                }
                if (handleNumber === scope_Handles.length - 1) {
                    distance = scope_Spectrum.getAbsoluteDistance(100, options.padding[1], true);
                    to = Math.min(to, distance);
                }
            }
            to = scope_Spectrum.getStep(to);
            // Limit percentage to the 0 - 100 range
            to = limit(to);
            // Return false if handle can't move
            if (to === reference[handleNumber] && !getValue) {
                return false;
            }
            return to;
        }
        // Uses slider orientation to create CSS rules. a = base value;
        function inRuleOrder(v, a) {
            var o = options.ort;
            return (o ? a : v) + ", " + (o ? v : a);
        }
        // Moves handle(s) by a percentage
        // (bool, % to move, [% where handle started, ...], [index in scope_Handles, ...])
        function moveHandles(upward, proposal, locations, handleNumbers, connect) {
            var proposals = locations.slice();
            // Store first handle now, so we still have it in case handleNumbers is reversed
            var firstHandle = handleNumbers[0];
            var b = [!upward, upward];
            var f = [upward, !upward];
            // Copy handleNumbers so we don't change the dataset
            handleNumbers = handleNumbers.slice();
            // Check to see which handle is 'leading'.
            // If that one can't move the second can't either.
            if (upward) {
                handleNumbers.reverse();
            }
            // Step 1: get the maximum percentage that any of the handles can move
            if (handleNumbers.length > 1) {
                handleNumbers.forEach(function (handleNumber, o) {
                    var to = checkHandlePosition(proposals, handleNumber, proposals[handleNumber] + proposal, b[o], f[o], false);
                    // Stop if one of the handles can't move.
                    if (to === false) {
                        proposal = 0;
                    }
                    else {
                        proposal = to - proposals[handleNumber];
                        proposals[handleNumber] = to;
                    }
                });
            }
            // If using one handle, check backward AND forward
            else {
                b = f = [true];
            }
            var state = false;
            // Step 2: Try to set the handles with the found percentage
            handleNumbers.forEach(function (handleNumber, o) {
                state = setHandle(handleNumber, locations[handleNumber] + proposal, b[o], f[o]) || state;
            });
            // Step 3: If a handle moved, fire events
            if (state) {
                handleNumbers.forEach(function (handleNumber) {
                    fireEvent("update", handleNumber);
                    fireEvent("slide", handleNumber);
                });
                // If target is a connect, then fire drag event
                if (connect != undefined) {
                    fireEvent("drag", firstHandle);
                }
            }
        }
        // Takes a base value and an offset. This offset is used for the connect bar size.
        // In the initial design for this feature, the origin element was 1% wide.
        // Unfortunately, a rounding bug in Chrome makes it impossible to implement this feature
        // in this manner: https://bugs.chromium.org/p/chromium/issues/detail?id=798223
        function transformDirection(a, b) {
            return options.dir ? 100 - a - b : a;
        }
        // Updates scope_Locations and scope_Values, updates visual state
        function updateHandlePosition(handleNumber, to) {
            // Update locations.
            scope_Locations[handleNumber] = to;
            // Convert the value to the slider stepping/range.
            scope_Values[handleNumber] = scope_Spectrum.fromStepping(to);
            var translation = 10 * (transformDirection(to, 0) - scope_DirOffset);
            var translateRule = "translate(" + inRuleOrder(translation + "%", "0") + ")";
            scope_Handles[handleNumber].style[options.transformRule] = translateRule;
            updateConnect(handleNumber);
            updateConnect(handleNumber + 1);
        }
        // Handles before the slider middle are stacked later = higher,
        // Handles after the middle later is lower
        // [[7] [8] .......... | .......... [5] [4]
        function setZindex() {
            scope_HandleNumbers.forEach(function (handleNumber) {
                var dir = scope_Locations[handleNumber] > 50 ? -1 : 1;
                var zIndex = 3 + (scope_Handles.length + dir * handleNumber);
                scope_Handles[handleNumber].style.zIndex = String(zIndex);
            });
        }
        // Test suggested values and apply margin, step.
        // if exactInput is true, don't run checkHandlePosition, then the handle can be placed in between steps (#436)
        function setHandle(handleNumber, to, lookBackward, lookForward, exactInput) {
            if (!exactInput) {
                to = checkHandlePosition(scope_Locations, handleNumber, to, lookBackward, lookForward, false);
            }
            if (to === false) {
                return false;
            }
            updateHandlePosition(handleNumber, to);
            return true;
        }
        // Updates style attribute for connect nodes
        function updateConnect(index) {
            // Skip connects set to false
            if (!scope_Connects[index]) {
                return;
            }
            var l = 0;
            var h = 100;
            if (index !== 0) {
                l = scope_Locations[index - 1];
            }
            if (index !== scope_Connects.length - 1) {
                h = scope_Locations[index];
            }
            // We use two rules:
            // 'translate' to change the left/top offset;
            // 'scale' to change the width of the element;
            // As the element has a width of 100%, a translation of 100% is equal to 100% of the parent (.noUi-base)
            var connectWidth = h - l;
            var translateRule = "translate(" + inRuleOrder(transformDirection(l, connectWidth) + "%", "0") + ")";
            var scaleRule = "scale(" + inRuleOrder(connectWidth / 100, "1") + ")";
            scope_Connects[index].style[options.transformRule] =
                translateRule + " " + scaleRule;
        }
        // Parses value passed to .set method. Returns current value if not parse-able.
        function resolveToValue(to, handleNumber) {
            // Setting with null indicates an 'ignore'.
            // Inputting 'false' is invalid.
            if (to === null || to === false || to === undefined) {
                return scope_Locations[handleNumber];
            }
            // If a formatted number was passed, attempt to decode it.
            if (typeof to === "number") {
                to = String(to);
            }
            to = options.format.from(to);
            if (to !== false) {
                to = scope_Spectrum.toStepping(to);
            }
            // If parsing the number failed, use the current value.
            if (to === false || isNaN(to)) {
                return scope_Locations[handleNumber];
            }
            return to;
        }
        // Set the slider value.
        function valueSet(input, fireSetEvent, exactInput) {
            var values = asArray(input);
            var isInit = scope_Locations[0] === undefined;
            // Event fires by default
            fireSetEvent = fireSetEvent === undefined ? true : fireSetEvent;
            // Animation is optional.
            // Make sure the initial values were set before using animated placement.
            if (options.animate && !isInit) {
                addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
            }
            // First pass, without lookAhead but with lookBackward. Values are set from left to right.
            scope_HandleNumbers.forEach(function (handleNumber) {
                setHandle(handleNumber, resolveToValue(values[handleNumber], handleNumber), true, false, exactInput);
            });
            var i = scope_HandleNumbers.length === 1 ? 0 : 1;
            // Spread handles evenly across the slider if the range has no size (min=max)
            if (isInit && scope_Spectrum.hasNoSize()) {
                exactInput = true;
                scope_Locations[0] = 0;
                if (scope_HandleNumbers.length > 1) {
                    var space_1 = 100 / (scope_HandleNumbers.length - 1);
                    scope_HandleNumbers.forEach(function (handleNumber) {
                        scope_Locations[handleNumber] = handleNumber * space_1;
                    });
                }
            }
            // Secondary passes. Now that all base values are set, apply constraints.
            // Iterate all handles to ensure constraints are applied for the entire slider (Issue #1009)
            for (; i < scope_HandleNumbers.length; ++i) {
                scope_HandleNumbers.forEach(function (handleNumber) {
                    setHandle(handleNumber, scope_Locations[handleNumber], true, true, exactInput);
                });
            }
            setZindex();
            scope_HandleNumbers.forEach(function (handleNumber) {
                fireEvent("update", handleNumber);
                // Fire the event only for handles that received a new value, as per #579
                if (values[handleNumber] !== null && fireSetEvent) {
                    fireEvent("set", handleNumber);
                }
            });
        }
        // Reset slider to initial values
        function valueReset(fireSetEvent) {
            valueSet(options.start, fireSetEvent);
        }
        // Set value for a single handle
        function valueSetHandle(handleNumber, value, fireSetEvent, exactInput) {
            // Ensure numeric input
            handleNumber = Number(handleNumber);
            if (!(handleNumber >= 0 && handleNumber < scope_HandleNumbers.length)) {
                throw new Error("noUiSlider: invalid handle number, got: " + handleNumber);
            }
            // Look both backward and forward, since we don't want this handle to "push" other handles (#960);
            // The exactInput argument can be used to ignore slider stepping (#436)
            setHandle(handleNumber, resolveToValue(value, handleNumber), true, true, exactInput);
            fireEvent("update", handleNumber);
            if (fireSetEvent) {
                fireEvent("set", handleNumber);
            }
        }
        // Get the slider value.
        function valueGet(unencoded) {
            if (unencoded === void 0) { unencoded = false; }
            if (unencoded) {
                // return a copy of the raw values
                return scope_Values.length === 1 ? scope_Values[0] : scope_Values.slice(0);
            }
            var values = scope_Values.map(options.format.to);
            // If only one handle is used, return a single value.
            if (values.length === 1) {
                return values[0];
            }
            return values;
        }
        // Removes classes from the root and empties it.
        function destroy() {
            // remove protected internal listeners
            removeEvent(INTERNAL_EVENT_NS.aria);
            removeEvent(INTERNAL_EVENT_NS.tooltips);
            Object.keys(options.cssClasses).forEach(function (key) {
                removeClass(scope_Target, options.cssClasses[key]);
            });
            while (scope_Target.firstChild) {
                scope_Target.removeChild(scope_Target.firstChild);
            }
            delete scope_Target.noUiSlider;
        }
        function getNextStepsForHandle(handleNumber) {
            var location = scope_Locations[handleNumber];
            var nearbySteps = scope_Spectrum.getNearbySteps(location);
            var value = scope_Values[handleNumber];
            var increment = nearbySteps.thisStep.step;
            var decrement = null;
            // If snapped, directly use defined step value
            if (options.snap) {
                return [
                    value - nearbySteps.stepBefore.startValue || null,
                    nearbySteps.stepAfter.startValue - value || null
                ];
            }
            // If the next value in this step moves into the next step,
            // the increment is the start of the next step - the current value
            if (increment !== false) {
                if (value + increment > nearbySteps.stepAfter.startValue) {
                    increment = nearbySteps.stepAfter.startValue - value;
                }
            }
            // If the value is beyond the starting point
            if (value > nearbySteps.thisStep.startValue) {
                decrement = nearbySteps.thisStep.step;
            }
            else if (nearbySteps.stepBefore.step === false) {
                decrement = false;
            }
            // If a handle is at the start of a step, it always steps back into the previous step first
            else {
                decrement = value - nearbySteps.stepBefore.highestStep;
            }
            // Now, if at the slider edges, there is no in/decrement
            if (location === 100) {
                increment = null;
            }
            else if (location === 0) {
                decrement = null;
            }
            // As per #391, the comparison for the decrement step can have some rounding issues.
            var stepDecimals = scope_Spectrum.countStepDecimals();
            // Round per #391
            if (increment !== null && increment !== false) {
                increment = Number(increment.toFixed(stepDecimals));
            }
            if (decrement !== null && decrement !== false) {
                decrement = Number(decrement.toFixed(stepDecimals));
            }
            return [decrement, increment];
        }
        // Get the current step size for the slider.
        function getNextSteps() {
            return scope_HandleNumbers.map(getNextStepsForHandle);
        }
        // Updatable: margin, limit, padding, step, range, animate, snap
        function updateOptions(optionsToUpdate, fireSetEvent) {
            // Spectrum is created using the range, snap, direction and step options.
            // 'snap' and 'step' can be updated.
            // If 'snap' and 'step' are not passed, they should remain unchanged.
            var v = valueGet();
            var updateAble = [
                "margin",
                "limit",
                "padding",
                "range",
                "animate",
                "snap",
                "step",
                "format",
                "pips",
                "tooltips"
            ];
            // Only change options that we're actually passed to update.
            updateAble.forEach(function (name) {
                // Check for undefined. null removes the value.
                if (optionsToUpdate[name] !== undefined) {
                    originalOptions[name] = optionsToUpdate[name];
                }
            });
            var newOptions = testOptions(originalOptions);
            // Load new options into the slider state
            updateAble.forEach(function (name) {
                if (optionsToUpdate[name] !== undefined) {
                    options[name] = newOptions[name];
                }
            });
            scope_Spectrum = newOptions.spectrum;
            // Limit, margin and padding depend on the spectrum but are stored outside of it. (#677)
            options.margin = newOptions.margin;
            options.limit = newOptions.limit;
            options.padding = newOptions.padding;
            // Update pips, removes existing.
            if (options.pips) {
                pips(options.pips);
            }
            else {
                removePips();
            }
            // Update tooltips, removes existing.
            if (options.tooltips) {
                tooltips();
            }
            else {
                removeTooltips();
            }
            // Invalidate the current positioning so valueSet forces an update.
            scope_Locations = [];
            valueSet(isSet(optionsToUpdate.start) ? optionsToUpdate.start : v, fireSetEvent);
        }
        // Initialization steps
        function setupSlider() {
            // Create the base element, initialize HTML and set classes.
            // Add handles and connect elements.
            scope_Base = addSlider(scope_Target);
            addElements(options.connect, scope_Base);
            // Attach user events.
            bindSliderEvents(options.events);
            // Use the public value method to set the start values.
            valueSet(options.start);
            if (options.pips) {
                pips(options.pips);
            }
            if (options.tooltips) {
                tooltips();
            }
            aria();
        }
        setupSlider();
        var scope_Self = {
            destroy: destroy,
            steps: getNextSteps,
            on: bindEvent,
            off: removeEvent,
            get: valueGet,
            set: valueSet,
            setHandle: valueSetHandle,
            reset: valueReset,
            // Exposed for unit testing, don't use this in your application.
            __moveHandles: function (upward, proposal, handleNumbers) {
                moveHandles(upward, proposal, scope_Locations, handleNumbers);
            },
            options: originalOptions,
            updateOptions: updateOptions,
            target: scope_Target,
            removePips: removePips,
            removeTooltips: removeTooltips,
            getPositions: function () {
                return scope_Locations.slice();
            },
            getTooltips: function () {
                return scope_Tooltips;
            },
            getOrigins: function () {
                return scope_Handles;
            },
            pips: pips // Issue #594
        };
        return scope_Self;
    }
    // Run the standard initializer
    function initialize(target, originalOptions) {
        if (!target || !target.nodeName) {
            throw new Error("noUiSlider: create requires a single element, got: " + target);
        }
        // Throw an error if the slider was already initialized.
        if (target.noUiSlider) {
            throw new Error("noUiSlider: Slider was already initialized.");
        }
        // Test the options and create the slider environment;
        var options = testOptions(originalOptions);
        var api = scope(target, options, originalOptions);
        target.noUiSlider = api;
        return api;
    }
    var nouislider = {
        // Exposed for unit testing, don't use this in your application.
        __spectrum: Spectrum,
        // A reference to the default classes, allows global changes.
        // Use the cssClasses option for changes to one slider.
        cssClasses: cssClasses,
        create: initialize
    };

    exports.create = initialize;
    exports.cssClasses = cssClasses;
    exports['default'] = nouislider;

    Object.defineProperty(exports, '__esModule', { value: true });

})));


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
        //No index.php specified - so take the next integer
        current = current[name];
        values[i].name = "" + current.length;
      } else {
        //Now index.php name becomes and name and we go deeper into the array
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
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nouislider */ "./node_modules/nouislider/dist/nouislider.js");
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nouislider__WEBPACK_IMPORTED_MODULE_3__);





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
      nouislider__WEBPACK_IMPORTED_MODULE_3___default.a.create(this._sliderElement, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhIb2xlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pdGVyYWJsZVRvQXJyYXlMaW1pdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9ub25JdGVyYWJsZVJlc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25vdWlzbGlkZXIvZGlzdC9ub3Vpc2xpZGVyLmpzIiwid2VicGFjazovLy8uL3RlbXBsYXRlcy9wcm9mbmFzdGlsLXJlZGVzaWduL2NvbXBvbmVudHMvYml0cml4L2NhdGFsb2cuc21hcnQuZmlsdGVyL3Byb2ZuYXN0aWwvc3JjL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi90ZW1wbGF0ZXMvcHJvZm5hc3RpbC1yZWRlc2lnbi9jb21wb25lbnRzL2JpdHJpeC9jYXRhbG9nLnNtYXJ0LmZpbHRlci9wcm9mbmFzdGlsL3NyYy9qcy9yYW5nZS1pbnB1dC5qcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ3aW5kb3ciLCJKQ1NtYXJ0RmlsdGVyIiwiYWpheFVSTCIsInZpZXdNb2RlIiwicGFyYW1zIiwiZm9ybSIsInRpbWVyIiwiY2FjaGVLZXkiLCJjYWNoZSIsInBvcHVwcyIsIlNFRl9TRVRfRklMVEVSX1VSTCIsImJpbmRVcmxUb0J1dHRvbiIsInNlZiIsIlNFRl9ERUxfRklMVEVSX1VSTCIsInByb3RvdHlwZSIsImtleXVwIiwiaW5wdXQiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiQlgiLCJkZWxlZ2F0ZSIsInJlbG9hZCIsImNsaWNrIiwiY2hlY2tib3giLCJwb3NpdGlvbiIsInBvcyIsImZpbmRQYXJlbnQiLCJ0YWciLCJ2YWx1ZXMiLCJuYW1lIiwidmFsdWUiLCJnYXRoZXJJbnB1dHNWYWx1ZXMiLCJmaW5kQ2hpbGRyZW4iLCJSZWdFeHAiLCJpIiwibGVuZ3RoIiwiY3VyRmlsdGVyaW5wdXQiLCJwb3N0SGFuZGxlciIsInNldF9maWx0ZXIiLCJkaXNhYmxlZCIsImFqYXgiLCJsb2FkSlNPTiIsInZhbHVlczJwb3N0IiwidXBkYXRlSXRlbSIsIlBJRCIsImFySXRlbSIsIlBST1BFUlRZX1RZUEUiLCJQUklDRSIsInRyYWNrQmFyIiwiRU5DT0RFRF9JRCIsIlZBTFVFUyIsIk1JTiIsIkZJTFRFUkVEX1ZBTFVFIiwic2V0TWluRmlsdGVyZWRWYWx1ZSIsIlZBTFVFIiwiTUFYIiwic2V0TWF4RmlsdGVyZWRWYWx1ZSIsImhhc093blByb3BlcnR5IiwiY29udHJvbCIsIkNPTlRST0xfSUQiLCJsYWJlbCIsInF1ZXJ5U2VsZWN0b3IiLCJESVNBQkxFRCIsImFkZENsYXNzIiwicGFyZW50Tm9kZSIsInJlbW92ZUNsYXNzIiwiaW5uZXJIVE1MIiwiRUxFTUVOVF9DT1VOVCIsInJlc3VsdCIsImZyb21DYWNoZSIsImhyZWZGSUxURVIiLCJ1cmwiLCJjdXJQcm9wIiwibW9kZWYiLCJtb2RlZl9udW0iLCJJVEVNUyIsInBvcHVwSWQiLCJkZXN0cm95IiwiRklMVEVSX1VSTCIsImhyZWYiLCJ1dGlsIiwiaHRtbHNwZWNpYWxjaGFyc2JhY2siLCJGSUxURVJfQUpBWF9VUkwiLCJDT01QT05FTlRfQ09OVEFJTkVSX0lEIiwidW5iaW5kQWxsIiwiYmluZCIsImUiLCJpbnNlcnRUb05vZGUiLCJQcmV2ZW50RGVmYXVsdCIsIklOU1RBTlRfUkVMT0FEIiwic3R5bGUiLCJkaXNwbGF5IiwiZmluZENoaWxkIiwiY2xhc3MiLCJhcHBlbmRDaGlsZCIsImJ1dHRvbklkIiwiYnV0dG9uIiwicHJveHkiLCJqIiwiZnVuYyIsInR5cGUiLCJsb2NhdGlvbiIsImVsZW1lbnRzIiwiZWwiLCJ0b0xvd2VyQ2FzZSIsImNoZWNrZWQiLCJvcHRpb25zIiwic2VsZWN0ZWQiLCJwb3N0IiwiY3VycmVudCIsInAiLCJpbmRleE9mIiwic3Vic3RyaW5nIiwicmVzdCIsInBwIiwiaGlkZUZpbHRlclByb3BzIiwiZWxlbWVudCIsIm9iaiIsImZpbHRlckJsb2NrIiwicHJvcEFuZ2xlIiwiaGFzQ2xhc3MiLCJlYXNpbmciLCJkdXJhdGlvbiIsInN0YXJ0Iiwib3BhY2l0eSIsImhlaWdodCIsIm9mZnNldEhlaWdodCIsImZpbmlzaCIsInRyYW5zaXRpb24iLCJ0cmFuc2l0aW9ucyIsInF1YXJ0Iiwic3RlcCIsInN0YXRlIiwiY29tcGxldGUiLCJzZXRBdHRyaWJ1dGUiLCJhbmltYXRlIiwib2JqX2NoaWxkcmVuX2hlaWdodCIsInNob3dEcm9wRG93blBvcHVwIiwiY29udGVudE5vZGUiLCJQb3B1cFdpbmRvd01hbmFnZXIiLCJjcmVhdGUiLCJhdXRvSGlkZSIsIm9mZnNldExlZnQiLCJvZmZzZXRUb3AiLCJvdmVybGF5IiwiZHJhZ2dhYmxlIiwicmVzdHJpY3QiLCJjbG9zZUJ5RXNjIiwiY29udGVudCIsImNsb25lIiwic2hvdyIsInNlbGVjdERyb3BEb3duSXRlbSIsImNvbnRyb2xJZCIsIndyYXBDb250YWluZXIiLCJjbGFzc05hbWUiLCJjdXJyZW50T3B0aW9uIiwiZ2V0Q3VycmVudFBvcHVwIiwiY2xvc2UiLCJuYW1lc3BhY2UiLCJJYmxvY2siLCJTbWFydEZpbHRlciIsImFyUGFyYW1zIiwibGVmdFNsaWRlciIsInJpZ2h0U2xpZGVyIiwidHJhY2tlciIsInRyYWNrZXJXcmFwIiwibWluSW5wdXQiLCJtaW5JbnB1dElkIiwibWF4SW5wdXQiLCJtYXhJbnB1dElkIiwibWluUHJpY2UiLCJwYXJzZUZsb2F0IiwibWF4UHJpY2UiLCJjdXJNaW5QcmljZSIsImN1ck1heFByaWNlIiwiZmx0TWluUHJpY2UiLCJmbHRNYXhQcmljZSIsInByZWNpc2lvbiIsInByaWNlRGlmZiIsImxlZnRQZXJjZW50IiwicmlnaHRQZXJjZW50IiwiZmx0TWluUGVyY2VudCIsImZsdE1heFBlcmNlbnQiLCJjb2xvclVuYXZhaWxhYmxlQWN0aXZlIiwiY29sb3JBdmFpbGFibGVBY3RpdmUiLCJjb2xvckF2YWlsYWJsZUluYWN0aXZlIiwiaXNUb3VjaCIsImluaXQiLCJkb2N1bWVudEVsZW1lbnQiLCJldmVudCIsIm9uTW92ZUxlZnRTbGlkZXIiLCJvbk1vdmVSaWdodFNsaWRlciIsIm9uSW5wdXRDaGFuZ2UiLCJsZWZ0IiwicmlnaHQiLCJnZXRYQ29vcmQiLCJlbGVtIiwiYm94IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiYm9keSIsImRvY0VsZW0iLCJzY3JvbGxMZWZ0IiwicGFnZVhPZmZzZXQiLCJjbGllbnRMZWZ0IiwiTWF0aCIsInJvdW5kIiwiZ2V0UGFnZVgiLCJwYWdlWCIsInRhcmdldFRvdWNoZXMiLCJjbGllbnRYIiwiaHRtbCIsInJlY291bnRNaW5QcmljZSIsIm5ld01pblByaWNlIiwidG9GaXhlZCIsInNtYXJ0RmlsdGVyIiwicmVjb3VudE1heFByaWNlIiwibmV3TWF4UHJpY2UiLCJsZWZ0SW5wdXRWYWx1ZSIsIm1ha2VMZWZ0U2xpZGVyTW92ZSIsInJpZ2h0SW5wdXRWYWx1ZSIsIm1ha2VSaWdodFNsaWRlck1vdmUiLCJyZWNvdW50UHJpY2UiLCJhcmVCb3RoU2xpZGVyc01vdmluZyIsImNvdW50TmV3TGVmdCIsInRyYWNrZXJYQ29vcmQiLCJyaWdodEVkZ2UiLCJvZmZzZXRXaWR0aCIsIm5ld0xlZnQiLCJvbmRyYWdzdGFydCIsIm9ubW91c2Vtb3ZlIiwib25tb3VzZXVwIiwib250b3VjaG1vdmUiLCJvbnRvdWNoZW5kIiwidG91Y2hlbmQiLCJSYW5nZUlucHV0Iiwic2xpZGVyU2VsZWN0b3IiLCJfY29udGFpbmVyRWxlbWVudCIsIl9pbnB1dE1pbkVsZW1lbnQiLCJfaW5wdXRNYXhFbGVtZW50IiwiX3NsaWRlckVsZW1lbnQiLCJfbWluVmFsdWUiLCJkYXRhc2V0IiwibWluIiwiX21heFZhbHVlIiwibWF4IiwiX3N0ZXAiLCJfb25TbGlkZXJDaGFuZ2UiLCJfb25NaW5DaGFuZ2UiLCJfb25NYXhDaGFuZ2UiLCJ0cnVuYyIsImV2dCIsInRhcmdldCIsIm5vVWlTbGlkZXIiLCJzZXQiLCJvbiIsImNvbm5lY3QiLCJyYW5nZSIsInRvb2x0aXBzIiwiZm9ybWF0IiwidG8iLCJmcm9tIiwiX3NldEhhbmRsZXJzIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFD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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSwyQkFBMkIsd0JBQXdCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiwrQkFBK0I7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLG1DQUFtQztBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsb0JBQW9CO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsOENBQThDO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLG9CQUFvQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQix3QkFBd0I7QUFDM0MscUNBQXFDLDBDQUEwQztBQUMvRSxpQ0FBaUMsc0NBQXNDO0FBQ3ZFLGtDQUFrQyx1Q0FBdUM7QUFDekUsb0JBQW9CLHdCQUF3QjtBQUM1QyxzQkFBc0IsMEJBQTBCO0FBQ2hELHdCQUF3Qiw0QkFBNEI7QUFDcEQsbUJBQW1CLHdCQUF3QjtBQUMzQyxzQkFBc0IsMkJBQTJCO0FBQ2pELGdDQUFnQyxxQ0FBcUM7QUFDckUsb0JBQW9CLHdCQUF3QjtBQUM1QywwQkFBMEIsK0JBQStCO0FBQ3pELHFCQUFxQiwwQkFBMEI7QUFDL0Msb0JBQW9CLHlCQUF5QjtBQUM3QyxzQkFBc0IsMkJBQTJCO0FBQ2pELHdCQUF3Qiw0QkFBNEI7QUFDcEQseUJBQXlCLDhCQUE4QjtBQUN2RCxxQkFBcUIsMEJBQTBCO0FBQy9DLHVCQUF1Qiw0QkFBNEI7QUFDbkQsOEJBQThCLGtDQUFrQztBQUNoRSw4QkFBOEIsbUNBQW1DO0FBQ2pFLHdCQUF3Qiw0QkFBNEI7QUFDcEQseUJBQXlCLDZCQUE2QjtBQUN0RCwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHFCQUFxQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsV0FBVztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixnQkFBZ0I7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRSxnQkFBZ0I7QUFDL0Y7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsZ0NBQWdDO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxtRUFBbUU7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsZ0NBQWdDO0FBQ2xEO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxtQkFBbUI7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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dGVzL3Byb2ZuYXN0aWwtcmVkZXNpZ24vY29tcG9uZW50cy9iaXRyaXgvY2F0YWxvZy5zbWFydC5maWx0ZXIvcHJvZm5hc3RpbC9zY3JpcHQtbW9kYWwtd3JhcHBlZC1maWx0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9Vc2Vycy9hbGVrc2FuZHJzZXZjZW5rby9TaXRlcy9sb2NhbGhvc3QvcHJvZm5hc3RpbC1wcm9kL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3RlbXBsYXRlcy9wcm9mbmFzdGlsLXJlZGVzaWduL2NvbXBvbmVudHMvYml0cml4L2NhdGFsb2cuc21hcnQuZmlsdGVyL3Byb2ZuYXN0aWwvc3JjL2pzL2FwcC5qc1wiKTtcbiIsImZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykge1xuICAgIGFycjJbaV0gPSBhcnJbaV07XG4gIH1cblxuICByZXR1cm4gYXJyMjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlMaWtlVG9BcnJheTtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aEhvbGVzO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3M7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkge1xuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjtcbiAgdmFyIF9hcnIgPSBbXTtcbiAgdmFyIF9uID0gdHJ1ZTtcbiAgdmFyIF9kID0gZmFsc2U7XG4gIHZhciBfZSA9IHVuZGVmaW5lZDtcblxuICB0cnkge1xuICAgIGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcbiAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG5cbiAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kID0gdHJ1ZTtcbiAgICBfZSA9IGVycjtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBfYXJyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXlMaW1pdDtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVJlc3Q7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwidmFyIGFycmF5V2l0aEhvbGVzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRoSG9sZXNcIik7XG5cbnZhciBpdGVyYWJsZVRvQXJyYXlMaW1pdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheUxpbWl0XCIpO1xuXG52YXIgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheVwiKTtcblxudmFyIG5vbkl0ZXJhYmxlUmVzdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlUmVzdFwiKTtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7XG4gIHJldHVybiBhcnJheVdpdGhIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBub25JdGVyYWJsZVJlc3QoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc2xpY2VkVG9BcnJheTtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG5cbiAgICBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG5cbiAgICBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwidmFyIGFycmF5TGlrZVRvQXJyYXkgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheUxpa2VUb0FycmF5XCIpO1xuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheTtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCIoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICAgIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IGZhY3RvcnkoZXhwb3J0cykgOlxuICAgIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbJ2V4cG9ydHMnXSwgZmFjdG9yeSkgOlxuICAgIChnbG9iYWwgPSB0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWxUaGlzIDogZ2xvYmFsIHx8IHNlbGYsIGZhY3RvcnkoZ2xvYmFsLm5vVWlTbGlkZXIgPSB7fSkpO1xufSh0aGlzLCAoZnVuY3Rpb24gKGV4cG9ydHMpIHsgJ3VzZSBzdHJpY3QnO1xuXG4gICAgZXhwb3J0cy5QaXBzTW9kZSA9IHZvaWQgMDtcbiAgICAoZnVuY3Rpb24gKFBpcHNNb2RlKSB7XG4gICAgICAgIFBpcHNNb2RlW1wiUmFuZ2VcIl0gPSBcInJhbmdlXCI7XG4gICAgICAgIFBpcHNNb2RlW1wiU3RlcHNcIl0gPSBcInN0ZXBzXCI7XG4gICAgICAgIFBpcHNNb2RlW1wiUG9zaXRpb25zXCJdID0gXCJwb3NpdGlvbnNcIjtcbiAgICAgICAgUGlwc01vZGVbXCJDb3VudFwiXSA9IFwiY291bnRcIjtcbiAgICAgICAgUGlwc01vZGVbXCJWYWx1ZXNcIl0gPSBcInZhbHVlc1wiO1xuICAgIH0pKGV4cG9ydHMuUGlwc01vZGUgfHwgKGV4cG9ydHMuUGlwc01vZGUgPSB7fSkpO1xuICAgIGV4cG9ydHMuUGlwc1R5cGUgPSB2b2lkIDA7XG4gICAgKGZ1bmN0aW9uIChQaXBzVHlwZSkge1xuICAgICAgICBQaXBzVHlwZVtQaXBzVHlwZVtcIk5vbmVcIl0gPSAtMV0gPSBcIk5vbmVcIjtcbiAgICAgICAgUGlwc1R5cGVbUGlwc1R5cGVbXCJOb1ZhbHVlXCJdID0gMF0gPSBcIk5vVmFsdWVcIjtcbiAgICAgICAgUGlwc1R5cGVbUGlwc1R5cGVbXCJMYXJnZVZhbHVlXCJdID0gMV0gPSBcIkxhcmdlVmFsdWVcIjtcbiAgICAgICAgUGlwc1R5cGVbUGlwc1R5cGVbXCJTbWFsbFZhbHVlXCJdID0gMl0gPSBcIlNtYWxsVmFsdWVcIjtcbiAgICB9KShleHBvcnRzLlBpcHNUeXBlIHx8IChleHBvcnRzLlBpcHNUeXBlID0ge30pKTtcbiAgICAvL3JlZ2lvbiBIZWxwZXIgTWV0aG9kc1xuICAgIGZ1bmN0aW9uIGlzVmFsaWRGb3JtYXR0ZXIoZW50cnkpIHtcbiAgICAgICAgcmV0dXJuIGlzVmFsaWRQYXJ0aWFsRm9ybWF0dGVyKGVudHJ5KSAmJiB0eXBlb2YgZW50cnkuZnJvbSA9PT0gXCJmdW5jdGlvblwiO1xuICAgIH1cbiAgICBmdW5jdGlvbiBpc1ZhbGlkUGFydGlhbEZvcm1hdHRlcihlbnRyeSkge1xuICAgICAgICAvLyBwYXJ0aWFsIGZvcm1hdHRlcnMgb25seSBuZWVkIGEgdG8gZnVuY3Rpb24gYW5kIG5vdCBhIGZyb20gZnVuY3Rpb25cbiAgICAgICAgcmV0dXJuIHR5cGVvZiBlbnRyeSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgZW50cnkudG8gPT09IFwiZnVuY3Rpb25cIjtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVtb3ZlRWxlbWVudChlbCkge1xuICAgICAgICBlbC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGVsKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gaXNTZXQodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlICE9PSBudWxsICYmIHZhbHVlICE9PSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIC8vIEJpbmRhYmxlIHZlcnNpb25cbiAgICBmdW5jdGlvbiBwcmV2ZW50RGVmYXVsdChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gICAgLy8gUmVtb3ZlcyBkdXBsaWNhdGVzIGZyb20gYW4gYXJyYXkuXG4gICAgZnVuY3Rpb24gdW5pcXVlKGFycmF5KSB7XG4gICAgICAgIHJldHVybiBhcnJheS5maWx0ZXIoZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgICAgIHJldHVybiAhdGhpc1thXSA/ICh0aGlzW2FdID0gdHJ1ZSkgOiBmYWxzZTtcbiAgICAgICAgfSwge30pO1xuICAgIH1cbiAgICAvLyBSb3VuZCBhIHZhbHVlIHRvIHRoZSBjbG9zZXN0ICd0bycuXG4gICAgZnVuY3Rpb24gY2xvc2VzdCh2YWx1ZSwgdG8pIHtcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQodmFsdWUgLyB0bykgKiB0bztcbiAgICB9XG4gICAgLy8gQ3VycmVudCBwb3NpdGlvbiBvZiBhbiBlbGVtZW50IHJlbGF0aXZlIHRvIHRoZSBkb2N1bWVudC5cbiAgICBmdW5jdGlvbiBvZmZzZXQoZWxlbSwgb3JpZW50YXRpb24pIHtcbiAgICAgICAgdmFyIHJlY3QgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICB2YXIgZG9jID0gZWxlbS5vd25lckRvY3VtZW50O1xuICAgICAgICB2YXIgZG9jRWxlbSA9IGRvYy5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgIHZhciBwYWdlT2Zmc2V0ID0gZ2V0UGFnZU9mZnNldChkb2MpO1xuICAgICAgICAvLyBnZXRCb3VuZGluZ0NsaWVudFJlY3QgY29udGFpbnMgbGVmdCBzY3JvbGwgaW4gQ2hyb21lIG9uIEFuZHJvaWQuXG4gICAgICAgIC8vIEkgaGF2ZW4ndCBmb3VuZCBhIGZlYXR1cmUgZGV0ZWN0aW9uIHRoYXQgcHJvdmVzIHRoaXMuIFdvcnN0IGNhc2VcbiAgICAgICAgLy8gc2NlbmFyaW8gb24gbWlzLW1hdGNoOiB0aGUgJ3RhcCcgZmVhdHVyZSBvbiBob3Jpem9udGFsIHNsaWRlcnMgYnJlYWtzLlxuICAgICAgICBpZiAoL3dlYmtpdC4qQ2hyb21lLipNb2JpbGUvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpKSB7XG4gICAgICAgICAgICBwYWdlT2Zmc2V0LnggPSAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvcmllbnRhdGlvbiA/IHJlY3QudG9wICsgcGFnZU9mZnNldC55IC0gZG9jRWxlbS5jbGllbnRUb3AgOiByZWN0LmxlZnQgKyBwYWdlT2Zmc2V0LnggLSBkb2NFbGVtLmNsaWVudExlZnQ7XG4gICAgfVxuICAgIC8vIENoZWNrcyB3aGV0aGVyIGEgdmFsdWUgaXMgbnVtZXJpY2FsLlxuICAgIGZ1bmN0aW9uIGlzTnVtZXJpYyhhKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgYSA9PT0gXCJudW1iZXJcIiAmJiAhaXNOYU4oYSkgJiYgaXNGaW5pdGUoYSk7XG4gICAgfVxuICAgIC8vIFNldHMgYSBjbGFzcyBhbmQgcmVtb3ZlcyBpdCBhZnRlciBbZHVyYXRpb25dIG1zLlxuICAgIGZ1bmN0aW9uIGFkZENsYXNzRm9yKGVsZW1lbnQsIGNsYXNzTmFtZSwgZHVyYXRpb24pIHtcbiAgICAgICAgaWYgKGR1cmF0aW9uID4gMCkge1xuICAgICAgICAgICAgYWRkQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJlbW92ZUNsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSk7XG4gICAgICAgICAgICB9LCBkdXJhdGlvbik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gTGltaXRzIGEgdmFsdWUgdG8gMCAtIDEwMFxuICAgIGZ1bmN0aW9uIGxpbWl0KGEpIHtcbiAgICAgICAgcmV0dXJuIE1hdGgubWF4KE1hdGgubWluKGEsIDEwMCksIDApO1xuICAgIH1cbiAgICAvLyBXcmFwcyBhIHZhcmlhYmxlIGFzIGFuIGFycmF5LCBpZiBpdCBpc24ndCBvbmUgeWV0LlxuICAgIC8vIE5vdGUgdGhhdCBhbiBpbnB1dCBhcnJheSBpcyByZXR1cm5lZCBieSByZWZlcmVuY2UhXG4gICAgZnVuY3Rpb24gYXNBcnJheShhKSB7XG4gICAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KGEpID8gYSA6IFthXTtcbiAgICB9XG4gICAgLy8gQ291bnRzIGRlY2ltYWxzXG4gICAgZnVuY3Rpb24gY291bnREZWNpbWFscyhudW1TdHIpIHtcbiAgICAgICAgbnVtU3RyID0gU3RyaW5nKG51bVN0cik7XG4gICAgICAgIHZhciBwaWVjZXMgPSBudW1TdHIuc3BsaXQoXCIuXCIpO1xuICAgICAgICByZXR1cm4gcGllY2VzLmxlbmd0aCA+IDEgPyBwaWVjZXNbMV0ubGVuZ3RoIDogMDtcbiAgICB9XG4gICAgLy8gaHR0cDovL3lvdW1pZ2h0bm90bmVlZGpxdWVyeS5jb20vI2FkZF9jbGFzc1xuICAgIGZ1bmN0aW9uIGFkZENsYXNzKGVsLCBjbGFzc05hbWUpIHtcbiAgICAgICAgaWYgKGVsLmNsYXNzTGlzdCAmJiAhL1xccy8udGVzdChjbGFzc05hbWUpKSB7XG4gICAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBlbC5jbGFzc05hbWUgKz0gXCIgXCIgKyBjbGFzc05hbWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gaHR0cDovL3lvdW1pZ2h0bm90bmVlZGpxdWVyeS5jb20vI3JlbW92ZV9jbGFzc1xuICAgIGZ1bmN0aW9uIHJlbW92ZUNsYXNzKGVsLCBjbGFzc05hbWUpIHtcbiAgICAgICAgaWYgKGVsLmNsYXNzTGlzdCAmJiAhL1xccy8udGVzdChjbGFzc05hbWUpKSB7XG4gICAgICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBlbC5jbGFzc05hbWUgPSBlbC5jbGFzc05hbWUucmVwbGFjZShuZXcgUmVnRXhwKFwiKF58XFxcXGIpXCIgKyBjbGFzc05hbWUuc3BsaXQoXCIgXCIpLmpvaW4oXCJ8XCIpICsgXCIoXFxcXGJ8JClcIiwgXCJnaVwiKSwgXCIgXCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIGh0dHBzOi8vcGxhaW5qcy5jb20vamF2YXNjcmlwdC9hdHRyaWJ1dGVzL2FkZGluZy1yZW1vdmluZy1hbmQtdGVzdGluZy1mb3ItY2xhc3Nlcy05L1xuICAgIGZ1bmN0aW9uIGhhc0NsYXNzKGVsLCBjbGFzc05hbWUpIHtcbiAgICAgICAgcmV0dXJuIGVsLmNsYXNzTGlzdCA/IGVsLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpIDogbmV3IFJlZ0V4cChcIlxcXFxiXCIgKyBjbGFzc05hbWUgKyBcIlxcXFxiXCIpLnRlc3QoZWwuY2xhc3NOYW1lKTtcbiAgICB9XG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1dpbmRvdy9zY3JvbGxZI05vdGVzXG4gICAgZnVuY3Rpb24gZ2V0UGFnZU9mZnNldChkb2MpIHtcbiAgICAgICAgdmFyIHN1cHBvcnRQYWdlT2Zmc2V0ID0gd2luZG93LnBhZ2VYT2Zmc2V0ICE9PSB1bmRlZmluZWQ7XG4gICAgICAgIHZhciBpc0NTUzFDb21wYXQgPSAoZG9jLmNvbXBhdE1vZGUgfHwgXCJcIikgPT09IFwiQ1NTMUNvbXBhdFwiO1xuICAgICAgICB2YXIgeCA9IHN1cHBvcnRQYWdlT2Zmc2V0XG4gICAgICAgICAgICA/IHdpbmRvdy5wYWdlWE9mZnNldFxuICAgICAgICAgICAgOiBpc0NTUzFDb21wYXRcbiAgICAgICAgICAgICAgICA/IGRvYy5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdFxuICAgICAgICAgICAgICAgIDogZG9jLmJvZHkuc2Nyb2xsTGVmdDtcbiAgICAgICAgdmFyIHkgPSBzdXBwb3J0UGFnZU9mZnNldFxuICAgICAgICAgICAgPyB3aW5kb3cucGFnZVlPZmZzZXRcbiAgICAgICAgICAgIDogaXNDU1MxQ29tcGF0XG4gICAgICAgICAgICAgICAgPyBkb2MuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcFxuICAgICAgICAgICAgICAgIDogZG9jLmJvZHkuc2Nyb2xsVG9wO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeDogeCxcbiAgICAgICAgICAgIHk6IHlcbiAgICAgICAgfTtcbiAgICB9XG4gICAgLy8gd2UgcHJvdmlkZSBhIGZ1bmN0aW9uIHRvIGNvbXB1dGUgY29uc3RhbnRzIGluc3RlYWRcbiAgICAvLyBvZiBhY2Nlc3Npbmcgd2luZG93LiogYXMgc29vbiBhcyB0aGUgbW9kdWxlIG5lZWRzIGl0XG4gICAgLy8gc28gdGhhdCB3ZSBkbyBub3QgY29tcHV0ZSBhbnl0aGluZyBpZiBub3QgbmVlZGVkXG4gICAgZnVuY3Rpb24gZ2V0QWN0aW9ucygpIHtcbiAgICAgICAgLy8gRGV0ZXJtaW5lIHRoZSBldmVudHMgdG8gYmluZC4gSUUxMSBpbXBsZW1lbnRzIHBvaW50ZXJFdmVudHMgd2l0aG91dFxuICAgICAgICAvLyBhIHByZWZpeCwgd2hpY2ggYnJlYWtzIGNvbXBhdGliaWxpdHkgd2l0aCB0aGUgSUUxMCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgcmV0dXJuIHdpbmRvdy5uYXZpZ2F0b3IucG9pbnRlckVuYWJsZWRcbiAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgIHN0YXJ0OiBcInBvaW50ZXJkb3duXCIsXG4gICAgICAgICAgICAgICAgbW92ZTogXCJwb2ludGVybW92ZVwiLFxuICAgICAgICAgICAgICAgIGVuZDogXCJwb2ludGVydXBcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgOiB3aW5kb3cubmF2aWdhdG9yLm1zUG9pbnRlckVuYWJsZWRcbiAgICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IFwiTVNQb2ludGVyRG93blwiLFxuICAgICAgICAgICAgICAgICAgICBtb3ZlOiBcIk1TUG9pbnRlck1vdmVcIixcbiAgICAgICAgICAgICAgICAgICAgZW5kOiBcIk1TUG9pbnRlclVwXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgOiB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBcIm1vdXNlZG93biB0b3VjaHN0YXJ0XCIsXG4gICAgICAgICAgICAgICAgICAgIG1vdmU6IFwibW91c2Vtb3ZlIHRvdWNobW92ZVwiLFxuICAgICAgICAgICAgICAgICAgICBlbmQ6IFwibW91c2V1cCB0b3VjaGVuZFwiXG4gICAgICAgICAgICAgICAgfTtcbiAgICB9XG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL1dJQ0cvRXZlbnRMaXN0ZW5lck9wdGlvbnMvYmxvYi9naC1wYWdlcy9leHBsYWluZXIubWRcbiAgICAvLyBJc3N1ZSAjNzg1XG4gICAgZnVuY3Rpb24gZ2V0U3VwcG9ydHNQYXNzaXZlKCkge1xuICAgICAgICB2YXIgc3VwcG9ydHNQYXNzaXZlID0gZmFsc2U7XG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlICovXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgb3B0cyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgXCJwYXNzaXZlXCIsIHtcbiAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgc3VwcG9ydHNQYXNzaXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwidGVzdFwiLCBudWxsLCBvcHRzKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkgeyB9XG4gICAgICAgIC8qIGVzbGludC1lbmFibGUgKi9cbiAgICAgICAgcmV0dXJuIHN1cHBvcnRzUGFzc2l2ZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0U3VwcG9ydHNUb3VjaEFjdGlvbk5vbmUoKSB7XG4gICAgICAgIHJldHVybiB3aW5kb3cuQ1NTICYmIENTUy5zdXBwb3J0cyAmJiBDU1Muc3VwcG9ydHMoXCJ0b3VjaC1hY3Rpb25cIiwgXCJub25lXCIpO1xuICAgIH1cbiAgICAvL2VuZHJlZ2lvblxuICAgIC8vcmVnaW9uIFJhbmdlIENhbGN1bGF0aW9uXG4gICAgLy8gRGV0ZXJtaW5lIHRoZSBzaXplIG9mIGEgc3ViLXJhbmdlIGluIHJlbGF0aW9uIHRvIGEgZnVsbCByYW5nZS5cbiAgICBmdW5jdGlvbiBzdWJSYW5nZVJhdGlvKHBhLCBwYikge1xuICAgICAgICByZXR1cm4gMTAwIC8gKHBiIC0gcGEpO1xuICAgIH1cbiAgICAvLyAocGVyY2VudGFnZSkgSG93IG1hbnkgcGVyY2VudCBpcyB0aGlzIHZhbHVlIG9mIHRoaXMgcmFuZ2U/XG4gICAgZnVuY3Rpb24gZnJvbVBlcmNlbnRhZ2UocmFuZ2UsIHZhbHVlLCBzdGFydFJhbmdlKSB7XG4gICAgICAgIHJldHVybiAodmFsdWUgKiAxMDApIC8gKHJhbmdlW3N0YXJ0UmFuZ2UgKyAxXSAtIHJhbmdlW3N0YXJ0UmFuZ2VdKTtcbiAgICB9XG4gICAgLy8gKHBlcmNlbnRhZ2UpIFdoZXJlIGlzIHRoaXMgdmFsdWUgb24gdGhpcyByYW5nZT9cbiAgICBmdW5jdGlvbiB0b1BlcmNlbnRhZ2UocmFuZ2UsIHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBmcm9tUGVyY2VudGFnZShyYW5nZSwgcmFuZ2VbMF0gPCAwID8gdmFsdWUgKyBNYXRoLmFicyhyYW5nZVswXSkgOiB2YWx1ZSAtIHJhbmdlWzBdLCAwKTtcbiAgICB9XG4gICAgLy8gKHZhbHVlKSBIb3cgbXVjaCBpcyB0aGlzIHBlcmNlbnRhZ2Ugb24gdGhpcyByYW5nZT9cbiAgICBmdW5jdGlvbiBpc1BlcmNlbnRhZ2UocmFuZ2UsIHZhbHVlKSB7XG4gICAgICAgIHJldHVybiAodmFsdWUgKiAocmFuZ2VbMV0gLSByYW5nZVswXSkpIC8gMTAwICsgcmFuZ2VbMF07XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldEoodmFsdWUsIGFycikge1xuICAgICAgICB2YXIgaiA9IDE7XG4gICAgICAgIHdoaWxlICh2YWx1ZSA+PSBhcnJbal0pIHtcbiAgICAgICAgICAgIGogKz0gMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gajtcbiAgICB9XG4gICAgLy8gKHBlcmNlbnRhZ2UpIElucHV0IGEgdmFsdWUsIGZpbmQgd2hlcmUsIG9uIGEgc2NhbGUgb2YgMC0xMDAsIGl0IGFwcGxpZXMuXG4gICAgZnVuY3Rpb24gdG9TdGVwcGluZyh4VmFsLCB4UGN0LCB2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUgPj0geFZhbC5zbGljZSgtMSlbMF0pIHtcbiAgICAgICAgICAgIHJldHVybiAxMDA7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGogPSBnZXRKKHZhbHVlLCB4VmFsKTtcbiAgICAgICAgdmFyIHZhID0geFZhbFtqIC0gMV07XG4gICAgICAgIHZhciB2YiA9IHhWYWxbal07XG4gICAgICAgIHZhciBwYSA9IHhQY3RbaiAtIDFdO1xuICAgICAgICB2YXIgcGIgPSB4UGN0W2pdO1xuICAgICAgICByZXR1cm4gcGEgKyB0b1BlcmNlbnRhZ2UoW3ZhLCB2Yl0sIHZhbHVlKSAvIHN1YlJhbmdlUmF0aW8ocGEsIHBiKTtcbiAgICB9XG4gICAgLy8gKHZhbHVlKSBJbnB1dCBhIHBlcmNlbnRhZ2UsIGZpbmQgd2hlcmUgaXQgaXMgb24gdGhlIHNwZWNpZmllZCByYW5nZS5cbiAgICBmdW5jdGlvbiBmcm9tU3RlcHBpbmcoeFZhbCwgeFBjdCwgdmFsdWUpIHtcbiAgICAgICAgLy8gVGhlcmUgaXMgbm8gcmFuZ2UgZ3JvdXAgdGhhdCBmaXRzIDEwMFxuICAgICAgICBpZiAodmFsdWUgPj0gMTAwKSB7XG4gICAgICAgICAgICByZXR1cm4geFZhbC5zbGljZSgtMSlbMF07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGogPSBnZXRKKHZhbHVlLCB4UGN0KTtcbiAgICAgICAgdmFyIHZhID0geFZhbFtqIC0gMV07XG4gICAgICAgIHZhciB2YiA9IHhWYWxbal07XG4gICAgICAgIHZhciBwYSA9IHhQY3RbaiAtIDFdO1xuICAgICAgICB2YXIgcGIgPSB4UGN0W2pdO1xuICAgICAgICByZXR1cm4gaXNQZXJjZW50YWdlKFt2YSwgdmJdLCAodmFsdWUgLSBwYSkgKiBzdWJSYW5nZVJhdGlvKHBhLCBwYikpO1xuICAgIH1cbiAgICAvLyAocGVyY2VudGFnZSkgR2V0IHRoZSBzdGVwIHRoYXQgYXBwbGllcyBhdCBhIGNlcnRhaW4gdmFsdWUuXG4gICAgZnVuY3Rpb24gZ2V0U3RlcCh4UGN0LCB4U3RlcHMsIHNuYXAsIHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gMTAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGogPSBnZXRKKHZhbHVlLCB4UGN0KTtcbiAgICAgICAgdmFyIGEgPSB4UGN0W2ogLSAxXTtcbiAgICAgICAgdmFyIGIgPSB4UGN0W2pdO1xuICAgICAgICAvLyBJZiAnc25hcCcgaXMgc2V0LCBzdGVwcyBhcmUgdXNlZCBhcyBmaXhlZCBwb2ludHMgb24gdGhlIHNsaWRlci5cbiAgICAgICAgaWYgKHNuYXApIHtcbiAgICAgICAgICAgIC8vIEZpbmQgdGhlIGNsb3Nlc3QgcG9zaXRpb24sIGEgb3IgYi5cbiAgICAgICAgICAgIGlmICh2YWx1ZSAtIGEgPiAoYiAtIGEpIC8gMikge1xuICAgICAgICAgICAgICAgIHJldHVybiBiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF4U3RlcHNbaiAtIDFdKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHhQY3RbaiAtIDFdICsgY2xvc2VzdCh2YWx1ZSAtIHhQY3RbaiAtIDFdLCB4U3RlcHNbaiAtIDFdKTtcbiAgICB9XG4gICAgLy9lbmRyZWdpb25cbiAgICAvL3JlZ2lvbiBTcGVjdHJ1bVxuICAgIHZhciBTcGVjdHJ1bSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gU3BlY3RydW0oZW50cnksIHNuYXAsIHNpbmdsZVN0ZXApIHtcbiAgICAgICAgICAgIHRoaXMueFBjdCA9IFtdO1xuICAgICAgICAgICAgdGhpcy54VmFsID0gW107XG4gICAgICAgICAgICB0aGlzLnhTdGVwcyA9IFtdO1xuICAgICAgICAgICAgdGhpcy54TnVtU3RlcHMgPSBbXTtcbiAgICAgICAgICAgIHRoaXMueEhpZ2hlc3RDb21wbGV0ZVN0ZXAgPSBbXTtcbiAgICAgICAgICAgIHRoaXMueFN0ZXBzID0gW3NpbmdsZVN0ZXAgfHwgZmFsc2VdO1xuICAgICAgICAgICAgdGhpcy54TnVtU3RlcHMgPSBbZmFsc2VdO1xuICAgICAgICAgICAgdGhpcy5zbmFwID0gc25hcDtcbiAgICAgICAgICAgIHZhciBpbmRleDtcbiAgICAgICAgICAgIHZhciBvcmRlcmVkID0gW107XG4gICAgICAgICAgICAvLyBNYXAgdGhlIG9iamVjdCBrZXlzIHRvIGFuIGFycmF5LlxuICAgICAgICAgICAgT2JqZWN0LmtleXMoZW50cnkpLmZvckVhY2goZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgICAgICAgICAgb3JkZXJlZC5wdXNoKFthc0FycmF5KGVudHJ5W2luZGV4XSksIGluZGV4XSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIFNvcnQgYWxsIGVudHJpZXMgYnkgdmFsdWUgKG51bWVyaWMgc29ydCkuXG4gICAgICAgICAgICBvcmRlcmVkLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYVswXVswXSAtIGJbMF1bMF07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIENvbnZlcnQgYWxsIGVudHJpZXMgdG8gc3VicmFuZ2VzLlxuICAgICAgICAgICAgZm9yIChpbmRleCA9IDA7IGluZGV4IDwgb3JkZXJlZC5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUVudHJ5UG9pbnQob3JkZXJlZFtpbmRleF1bMV0sIG9yZGVyZWRbaW5kZXhdWzBdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFN0b3JlIHRoZSBhY3R1YWwgc3RlcCB2YWx1ZXMuXG4gICAgICAgICAgICAvLyB4U3RlcHMgaXMgc29ydGVkIGluIHRoZSBzYW1lIG9yZGVyIGFzIHhQY3QgYW5kIHhWYWwuXG4gICAgICAgICAgICB0aGlzLnhOdW1TdGVwcyA9IHRoaXMueFN0ZXBzLnNsaWNlKDApO1xuICAgICAgICAgICAgLy8gQ29udmVydCBhbGwgbnVtZXJpYyBzdGVwcyB0byB0aGUgcGVyY2VudGFnZSBvZiB0aGUgc3VicmFuZ2UgdGhleSByZXByZXNlbnQuXG4gICAgICAgICAgICBmb3IgKGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLnhOdW1TdGVwcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVN0ZXBQb2ludChpbmRleCwgdGhpcy54TnVtU3RlcHNbaW5kZXhdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBTcGVjdHJ1bS5wcm90b3R5cGUuZ2V0RGlzdGFuY2UgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBpbmRleDtcbiAgICAgICAgICAgIHZhciBkaXN0YW5jZXMgPSBbXTtcbiAgICAgICAgICAgIGZvciAoaW5kZXggPSAwOyBpbmRleCA8IHRoaXMueE51bVN0ZXBzLmxlbmd0aCAtIDE7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICAvLyBsYXN0IFwicmFuZ2VcIiBjYW4ndCBjb250YWluIHN0ZXAgc2l6ZSBhcyBpdCBpcyBwdXJlbHkgYW4gZW5kcG9pbnQuXG4gICAgICAgICAgICAgICAgdmFyIHN0ZXAgPSB0aGlzLnhOdW1TdGVwc1tpbmRleF07XG4gICAgICAgICAgICAgICAgaWYgKHN0ZXAgJiYgKHZhbHVlIC8gc3RlcCkgJSAxICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdsaW1pdCcsICdtYXJnaW4nIGFuZCAncGFkZGluZycgb2YgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy54UGN0W2luZGV4XSArXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiUgcmFuZ2UgbXVzdCBiZSBkaXZpc2libGUgYnkgc3RlcC5cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIENhbGN1bGF0ZSBwZXJjZW50dWFsIGRpc3RhbmNlIGluIGN1cnJlbnQgcmFuZ2Ugb2YgbGltaXQsIG1hcmdpbiBvciBwYWRkaW5nXG4gICAgICAgICAgICAgICAgZGlzdGFuY2VzW2luZGV4XSA9IGZyb21QZXJjZW50YWdlKHRoaXMueFZhbCwgdmFsdWUsIGluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkaXN0YW5jZXM7XG4gICAgICAgIH07XG4gICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgcGVyY2VudHVhbCBkaXN0YW5jZSBvdmVyIHRoZSB3aG9sZSBzY2FsZSBvZiByYW5nZXMuXG4gICAgICAgIC8vIGRpcmVjdGlvbjogMCA9IGJhY2t3YXJkcyAvIDEgPSBmb3J3YXJkc1xuICAgICAgICBTcGVjdHJ1bS5wcm90b3R5cGUuZ2V0QWJzb2x1dGVEaXN0YW5jZSA9IGZ1bmN0aW9uICh2YWx1ZSwgZGlzdGFuY2VzLCBkaXJlY3Rpb24pIHtcbiAgICAgICAgICAgIHZhciB4UGN0X2luZGV4ID0gMDtcbiAgICAgICAgICAgIC8vIENhbGN1bGF0ZSByYW5nZSB3aGVyZSB0byBzdGFydCBjYWxjdWxhdGlvblxuICAgICAgICAgICAgaWYgKHZhbHVlIDwgdGhpcy54UGN0W3RoaXMueFBjdC5sZW5ndGggLSAxXSkge1xuICAgICAgICAgICAgICAgIHdoaWxlICh2YWx1ZSA+IHRoaXMueFBjdFt4UGN0X2luZGV4ICsgMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgeFBjdF9pbmRleCsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHZhbHVlID09PSB0aGlzLnhQY3RbdGhpcy54UGN0Lmxlbmd0aCAtIDFdKSB7XG4gICAgICAgICAgICAgICAgeFBjdF9pbmRleCA9IHRoaXMueFBjdC5sZW5ndGggLSAyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgbG9va2luZyBiYWNrd2FyZHMgYW5kIHRoZSB2YWx1ZSBpcyBleGFjdGx5IGF0IGEgcmFuZ2Ugc2VwYXJhdG9yIHRoZW4gbG9vayBvbmUgcmFuZ2UgZnVydGhlclxuICAgICAgICAgICAgaWYgKCFkaXJlY3Rpb24gJiYgdmFsdWUgPT09IHRoaXMueFBjdFt4UGN0X2luZGV4ICsgMV0pIHtcbiAgICAgICAgICAgICAgICB4UGN0X2luZGV4Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGlzdGFuY2VzID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgZGlzdGFuY2VzID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgc3RhcnRfZmFjdG9yO1xuICAgICAgICAgICAgdmFyIHJlc3RfZmFjdG9yID0gMTtcbiAgICAgICAgICAgIHZhciByZXN0X3JlbF9kaXN0YW5jZSA9IGRpc3RhbmNlc1t4UGN0X2luZGV4XTtcbiAgICAgICAgICAgIHZhciByYW5nZV9wY3QgPSAwO1xuICAgICAgICAgICAgdmFyIHJlbF9yYW5nZV9kaXN0YW5jZSA9IDA7XG4gICAgICAgICAgICB2YXIgYWJzX2Rpc3RhbmNlX2NvdW50ZXIgPSAwO1xuICAgICAgICAgICAgdmFyIHJhbmdlX2NvdW50ZXIgPSAwO1xuICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIHdoYXQgcGFydCBvZiB0aGUgc3RhcnQgcmFuZ2UgdGhlIHZhbHVlIGlzXG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgc3RhcnRfZmFjdG9yID0gKHZhbHVlIC0gdGhpcy54UGN0W3hQY3RfaW5kZXhdKSAvICh0aGlzLnhQY3RbeFBjdF9pbmRleCArIDFdIC0gdGhpcy54UGN0W3hQY3RfaW5kZXhdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHN0YXJ0X2ZhY3RvciA9ICh0aGlzLnhQY3RbeFBjdF9pbmRleCArIDFdIC0gdmFsdWUpIC8gKHRoaXMueFBjdFt4UGN0X2luZGV4ICsgMV0gLSB0aGlzLnhQY3RbeFBjdF9pbmRleF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gRG8gdW50aWwgdGhlIGNvbXBsZXRlIGRpc3RhbmNlIGFjcm9zcyByYW5nZXMgaXMgY2FsY3VsYXRlZFxuICAgICAgICAgICAgd2hpbGUgKHJlc3RfcmVsX2Rpc3RhbmNlID4gMCkge1xuICAgICAgICAgICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgcGVyY2VudGFnZSBvZiB0b3RhbCByYW5nZVxuICAgICAgICAgICAgICAgIHJhbmdlX3BjdCA9IHRoaXMueFBjdFt4UGN0X2luZGV4ICsgMSArIHJhbmdlX2NvdW50ZXJdIC0gdGhpcy54UGN0W3hQY3RfaW5kZXggKyByYW5nZV9jb3VudGVyXTtcbiAgICAgICAgICAgICAgICAvLyBEZXRlY3QgaWYgdGhlIG1hcmdpbiwgcGFkZGluZyBvciBsaW1pdCBpcyBsYXJnZXIgdGhlbiB0aGUgY3VycmVudCByYW5nZSBhbmQgY2FsY3VsYXRlXG4gICAgICAgICAgICAgICAgaWYgKGRpc3RhbmNlc1t4UGN0X2luZGV4ICsgcmFuZ2VfY291bnRlcl0gKiByZXN0X2ZhY3RvciArIDEwMCAtIHN0YXJ0X2ZhY3RvciAqIDEwMCA+IDEwMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiBsYXJnZXIgdGhlbiB0YWtlIHRoZSBwZXJjZW50dWFsIGRpc3RhbmNlIG9mIHRoZSB3aG9sZSByYW5nZVxuICAgICAgICAgICAgICAgICAgICByZWxfcmFuZ2VfZGlzdGFuY2UgPSByYW5nZV9wY3QgKiBzdGFydF9mYWN0b3I7XG4gICAgICAgICAgICAgICAgICAgIC8vIFJlc3QgZmFjdG9yIG9mIHJlbGF0aXZlIHBlcmNlbnR1YWwgZGlzdGFuY2Ugc3RpbGwgdG8gYmUgY2FsY3VsYXRlZFxuICAgICAgICAgICAgICAgICAgICByZXN0X2ZhY3RvciA9IChyZXN0X3JlbF9kaXN0YW5jZSAtIDEwMCAqIHN0YXJ0X2ZhY3RvcikgLyBkaXN0YW5jZXNbeFBjdF9pbmRleCArIHJhbmdlX2NvdW50ZXJdO1xuICAgICAgICAgICAgICAgICAgICAvLyBTZXQgc3RhcnQgZmFjdG9yIHRvIDEgYXMgZm9yIG5leHQgcmFuZ2UgaXQgZG9lcyBub3QgYXBwbHkuXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0X2ZhY3RvciA9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiBzbWFsbGVyIG9yIGVxdWFsIHRoZW4gdGFrZSB0aGUgcGVyY2VudHVhbCBkaXN0YW5jZSBvZiB0aGUgY2FsY3VsYXRlIHBlcmNlbnR1YWwgcGFydCBvZiB0aGF0IHJhbmdlXG4gICAgICAgICAgICAgICAgICAgIHJlbF9yYW5nZV9kaXN0YW5jZSA9ICgoZGlzdGFuY2VzW3hQY3RfaW5kZXggKyByYW5nZV9jb3VudGVyXSAqIHJhbmdlX3BjdCkgLyAxMDApICogcmVzdF9mYWN0b3I7XG4gICAgICAgICAgICAgICAgICAgIC8vIE5vIHJlc3QgbGVmdCBhcyB0aGUgcmVzdCBmaXRzIGluIGN1cnJlbnQgcmFuZ2VcbiAgICAgICAgICAgICAgICAgICAgcmVzdF9mYWN0b3IgPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGFic19kaXN0YW5jZV9jb3VudGVyID0gYWJzX2Rpc3RhbmNlX2NvdW50ZXIgLSByZWxfcmFuZ2VfZGlzdGFuY2U7XG4gICAgICAgICAgICAgICAgICAgIC8vIExpbWl0IHJhbmdlIHRvIGZpcnN0IHJhbmdlIHdoZW4gZGlzdGFuY2UgYmVjb21lcyBvdXRzaWRlIG9mIG1pbmltdW0gcmFuZ2VcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMueFBjdC5sZW5ndGggKyByYW5nZV9jb3VudGVyID49IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhbmdlX2NvdW50ZXItLTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYWJzX2Rpc3RhbmNlX2NvdW50ZXIgPSBhYnNfZGlzdGFuY2VfY291bnRlciArIHJlbF9yYW5nZV9kaXN0YW5jZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gTGltaXQgcmFuZ2UgdG8gbGFzdCByYW5nZSB3aGVuIGRpc3RhbmNlIGJlY29tZXMgb3V0c2lkZSBvZiBtYXhpbXVtIHJhbmdlXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnhQY3QubGVuZ3RoIC0gcmFuZ2VfY291bnRlciA+PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByYW5nZV9jb3VudGVyKys7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gUmVzdCBvZiByZWxhdGl2ZSBwZXJjZW50dWFsIGRpc3RhbmNlIHN0aWxsIHRvIGJlIGNhbGN1bGF0ZWRcbiAgICAgICAgICAgICAgICByZXN0X3JlbF9kaXN0YW5jZSA9IGRpc3RhbmNlc1t4UGN0X2luZGV4ICsgcmFuZ2VfY291bnRlcl0gKiByZXN0X2ZhY3RvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB2YWx1ZSArIGFic19kaXN0YW5jZV9jb3VudGVyO1xuICAgICAgICB9O1xuICAgICAgICBTcGVjdHJ1bS5wcm90b3R5cGUudG9TdGVwcGluZyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdmFsdWUgPSB0b1N0ZXBwaW5nKHRoaXMueFZhbCwgdGhpcy54UGN0LCB2YWx1ZSk7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH07XG4gICAgICAgIFNwZWN0cnVtLnByb3RvdHlwZS5mcm9tU3RlcHBpbmcgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBmcm9tU3RlcHBpbmcodGhpcy54VmFsLCB0aGlzLnhQY3QsIHZhbHVlKTtcbiAgICAgICAgfTtcbiAgICAgICAgU3BlY3RydW0ucHJvdG90eXBlLmdldFN0ZXAgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHZhbHVlID0gZ2V0U3RlcCh0aGlzLnhQY3QsIHRoaXMueFN0ZXBzLCB0aGlzLnNuYXAsIHZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgU3BlY3RydW0ucHJvdG90eXBlLmdldERlZmF1bHRTdGVwID0gZnVuY3Rpb24gKHZhbHVlLCBpc0Rvd24sIHNpemUpIHtcbiAgICAgICAgICAgIHZhciBqID0gZ2V0Sih2YWx1ZSwgdGhpcy54UGN0KTtcbiAgICAgICAgICAgIC8vIFdoZW4gYXQgdGhlIHRvcCBvciBzdGVwcGluZyBkb3duLCBsb29rIGF0IHRoZSBwcmV2aW91cyBzdWItcmFuZ2VcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gMTAwIHx8IChpc0Rvd24gJiYgdmFsdWUgPT09IHRoaXMueFBjdFtqIC0gMV0pKSB7XG4gICAgICAgICAgICAgICAgaiA9IE1hdGgubWF4KGogLSAxLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAodGhpcy54VmFsW2pdIC0gdGhpcy54VmFsW2ogLSAxXSkgLyBzaXplO1xuICAgICAgICB9O1xuICAgICAgICBTcGVjdHJ1bS5wcm90b3R5cGUuZ2V0TmVhcmJ5U3RlcHMgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBqID0gZ2V0Sih2YWx1ZSwgdGhpcy54UGN0KTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgc3RlcEJlZm9yZToge1xuICAgICAgICAgICAgICAgICAgICBzdGFydFZhbHVlOiB0aGlzLnhWYWxbaiAtIDJdLFxuICAgICAgICAgICAgICAgICAgICBzdGVwOiB0aGlzLnhOdW1TdGVwc1tqIC0gMl0sXG4gICAgICAgICAgICAgICAgICAgIGhpZ2hlc3RTdGVwOiB0aGlzLnhIaWdoZXN0Q29tcGxldGVTdGVwW2ogLSAyXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGhpc1N0ZXA6IHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRWYWx1ZTogdGhpcy54VmFsW2ogLSAxXSxcbiAgICAgICAgICAgICAgICAgICAgc3RlcDogdGhpcy54TnVtU3RlcHNbaiAtIDFdLFxuICAgICAgICAgICAgICAgICAgICBoaWdoZXN0U3RlcDogdGhpcy54SGlnaGVzdENvbXBsZXRlU3RlcFtqIC0gMV1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHN0ZXBBZnRlcjoge1xuICAgICAgICAgICAgICAgICAgICBzdGFydFZhbHVlOiB0aGlzLnhWYWxbal0sXG4gICAgICAgICAgICAgICAgICAgIHN0ZXA6IHRoaXMueE51bVN0ZXBzW2pdLFxuICAgICAgICAgICAgICAgICAgICBoaWdoZXN0U3RlcDogdGhpcy54SGlnaGVzdENvbXBsZXRlU3RlcFtqXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIFNwZWN0cnVtLnByb3RvdHlwZS5jb3VudFN0ZXBEZWNpbWFscyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBzdGVwRGVjaW1hbHMgPSB0aGlzLnhOdW1TdGVwcy5tYXAoY291bnREZWNpbWFscyk7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5tYXguYXBwbHkobnVsbCwgc3RlcERlY2ltYWxzKTtcbiAgICAgICAgfTtcbiAgICAgICAgU3BlY3RydW0ucHJvdG90eXBlLmhhc05vU2l6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnhWYWxbMF0gPT09IHRoaXMueFZhbFt0aGlzLnhWYWwubGVuZ3RoIC0gMV07XG4gICAgICAgIH07XG4gICAgICAgIC8vIE91dHNpZGUgdGVzdGluZ1xuICAgICAgICBTcGVjdHJ1bS5wcm90b3R5cGUuY29udmVydCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U3RlcCh0aGlzLnRvU3RlcHBpbmcodmFsdWUpKTtcbiAgICAgICAgfTtcbiAgICAgICAgU3BlY3RydW0ucHJvdG90eXBlLmhhbmRsZUVudHJ5UG9pbnQgPSBmdW5jdGlvbiAoaW5kZXgsIHZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgcGVyY2VudGFnZTtcbiAgICAgICAgICAgIC8vIENvdmVydCBtaW4vbWF4IHN5bnRheCB0byAwIGFuZCAxMDAuXG4gICAgICAgICAgICBpZiAoaW5kZXggPT09IFwibWluXCIpIHtcbiAgICAgICAgICAgICAgICBwZXJjZW50YWdlID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGluZGV4ID09PSBcIm1heFwiKSB7XG4gICAgICAgICAgICAgICAgcGVyY2VudGFnZSA9IDEwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHBlcmNlbnRhZ2UgPSBwYXJzZUZsb2F0KGluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIENoZWNrIGZvciBjb3JyZWN0IGlucHV0LlxuICAgICAgICAgICAgaWYgKCFpc051bWVyaWMocGVyY2VudGFnZSkgfHwgIWlzTnVtZXJpYyh2YWx1ZVswXSkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAncmFuZ2UnIHZhbHVlIGlzbid0IG51bWVyaWMuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gU3RvcmUgdmFsdWVzLlxuICAgICAgICAgICAgdGhpcy54UGN0LnB1c2gocGVyY2VudGFnZSk7XG4gICAgICAgICAgICB0aGlzLnhWYWwucHVzaCh2YWx1ZVswXSk7XG4gICAgICAgICAgICB2YXIgdmFsdWUxID0gTnVtYmVyKHZhbHVlWzFdKTtcbiAgICAgICAgICAgIC8vIE5hTiB3aWxsIGV2YWx1YXRlIHRvIGZhbHNlIHRvbywgYnV0IHRvIGtlZXBcbiAgICAgICAgICAgIC8vIGxvZ2dpbmcgY2xlYXIsIHNldCBzdGVwIGV4cGxpY2l0bHkuIE1ha2Ugc3VyZVxuICAgICAgICAgICAgLy8gbm90IHRvIG92ZXJyaWRlIHRoZSAnc3RlcCcgc2V0dGluZyB3aXRoIGZhbHNlLlxuICAgICAgICAgICAgaWYgKCFwZXJjZW50YWdlKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc05hTih2YWx1ZTEpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMueFN0ZXBzWzBdID0gdmFsdWUxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMueFN0ZXBzLnB1c2goaXNOYU4odmFsdWUxKSA/IGZhbHNlIDogdmFsdWUxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMueEhpZ2hlc3RDb21wbGV0ZVN0ZXAucHVzaCgwKTtcbiAgICAgICAgfTtcbiAgICAgICAgU3BlY3RydW0ucHJvdG90eXBlLmhhbmRsZVN0ZXBQb2ludCA9IGZ1bmN0aW9uIChpLCBuKSB7XG4gICAgICAgICAgICAvLyBJZ25vcmUgJ2ZhbHNlJyBzdGVwcGluZy5cbiAgICAgICAgICAgIGlmICghbikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFN0ZXAgb3ZlciB6ZXJvLWxlbmd0aCByYW5nZXMgKCM5NDgpO1xuICAgICAgICAgICAgaWYgKHRoaXMueFZhbFtpXSA9PT0gdGhpcy54VmFsW2kgKyAxXSkge1xuICAgICAgICAgICAgICAgIHRoaXMueFN0ZXBzW2ldID0gdGhpcy54SGlnaGVzdENvbXBsZXRlU3RlcFtpXSA9IHRoaXMueFZhbFtpXTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBGYWN0b3IgdG8gcmFuZ2UgcmF0aW9cbiAgICAgICAgICAgIHRoaXMueFN0ZXBzW2ldID1cbiAgICAgICAgICAgICAgICBmcm9tUGVyY2VudGFnZShbdGhpcy54VmFsW2ldLCB0aGlzLnhWYWxbaSArIDFdXSwgbiwgMCkgLyBzdWJSYW5nZVJhdGlvKHRoaXMueFBjdFtpXSwgdGhpcy54UGN0W2kgKyAxXSk7XG4gICAgICAgICAgICB2YXIgdG90YWxTdGVwcyA9ICh0aGlzLnhWYWxbaSArIDFdIC0gdGhpcy54VmFsW2ldKSAvIHRoaXMueE51bVN0ZXBzW2ldO1xuICAgICAgICAgICAgdmFyIGhpZ2hlc3RTdGVwID0gTWF0aC5jZWlsKE51bWJlcih0b3RhbFN0ZXBzLnRvRml4ZWQoMykpIC0gMSk7XG4gICAgICAgICAgICB2YXIgc3RlcCA9IHRoaXMueFZhbFtpXSArIHRoaXMueE51bVN0ZXBzW2ldICogaGlnaGVzdFN0ZXA7XG4gICAgICAgICAgICB0aGlzLnhIaWdoZXN0Q29tcGxldGVTdGVwW2ldID0gc3RlcDtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIFNwZWN0cnVtO1xuICAgIH0oKSk7XG4gICAgLy9lbmRyZWdpb25cbiAgICAvL3JlZ2lvbiBPcHRpb25zXG4gICAgLypcdEV2ZXJ5IGlucHV0IG9wdGlvbiBpcyB0ZXN0ZWQgYW5kIHBhcnNlZC4gVGhpcyB3aWxsIHByZXZlbnRcbiAgICAgICAgZW5kbGVzcyB2YWxpZGF0aW9uIGluIGludGVybmFsIG1ldGhvZHMuIFRoZXNlIHRlc3RzIGFyZVxuICAgICAgICBzdHJ1Y3R1cmVkIHdpdGggYW4gaXRlbSBmb3IgZXZlcnkgb3B0aW9uIGF2YWlsYWJsZS4gQW5cbiAgICAgICAgb3B0aW9uIGNhbiBiZSBtYXJrZWQgYXMgcmVxdWlyZWQgYnkgc2V0dGluZyB0aGUgJ3InIGZsYWcuXG4gICAgICAgIFRoZSB0ZXN0aW5nIGZ1bmN0aW9uIGlzIHByb3ZpZGVkIHdpdGggdGhyZWUgYXJndW1lbnRzOlxuICAgICAgICAgICAgLSBUaGUgcHJvdmlkZWQgdmFsdWUgZm9yIHRoZSBvcHRpb247XG4gICAgICAgICAgICAtIEEgcmVmZXJlbmNlIHRvIHRoZSBvcHRpb25zIG9iamVjdDtcbiAgICAgICAgICAgIC0gVGhlIG5hbWUgZm9yIHRoZSBvcHRpb247XG5cbiAgICAgICAgVGhlIHRlc3RpbmcgZnVuY3Rpb24gcmV0dXJucyBmYWxzZSB3aGVuIGFuIGVycm9yIGlzIGRldGVjdGVkLFxuICAgICAgICBvciB0cnVlIHdoZW4gZXZlcnl0aGluZyBpcyBPSy4gSXQgY2FuIGFsc28gbW9kaWZ5IHRoZSBvcHRpb25cbiAgICAgICAgb2JqZWN0LCB0byBtYWtlIHN1cmUgYWxsIHZhbHVlcyBjYW4gYmUgY29ycmVjdGx5IGxvb3BlZCBlbHNld2hlcmUuICovXG4gICAgLy9yZWdpb24gRGVmYXVsdHNcbiAgICB2YXIgZGVmYXVsdEZvcm1hdHRlciA9IHtcbiAgICAgICAgdG86IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyBcIlwiIDogdmFsdWUudG9GaXhlZCgyKTtcbiAgICAgICAgfSxcbiAgICAgICAgZnJvbTogTnVtYmVyXG4gICAgfTtcbiAgICB2YXIgY3NzQ2xhc3NlcyA9IHtcbiAgICAgICAgdGFyZ2V0OiBcInRhcmdldFwiLFxuICAgICAgICBiYXNlOiBcImJhc2VcIixcbiAgICAgICAgb3JpZ2luOiBcIm9yaWdpblwiLFxuICAgICAgICBoYW5kbGU6IFwiaGFuZGxlXCIsXG4gICAgICAgIGhhbmRsZUxvd2VyOiBcImhhbmRsZS1sb3dlclwiLFxuICAgICAgICBoYW5kbGVVcHBlcjogXCJoYW5kbGUtdXBwZXJcIixcbiAgICAgICAgdG91Y2hBcmVhOiBcInRvdWNoLWFyZWFcIixcbiAgICAgICAgaG9yaXpvbnRhbDogXCJob3Jpem9udGFsXCIsXG4gICAgICAgIHZlcnRpY2FsOiBcInZlcnRpY2FsXCIsXG4gICAgICAgIGJhY2tncm91bmQ6IFwiYmFja2dyb3VuZFwiLFxuICAgICAgICBjb25uZWN0OiBcImNvbm5lY3RcIixcbiAgICAgICAgY29ubmVjdHM6IFwiY29ubmVjdHNcIixcbiAgICAgICAgbHRyOiBcImx0clwiLFxuICAgICAgICBydGw6IFwicnRsXCIsXG4gICAgICAgIHRleHREaXJlY3Rpb25MdHI6IFwidHh0LWRpci1sdHJcIixcbiAgICAgICAgdGV4dERpcmVjdGlvblJ0bDogXCJ0eHQtZGlyLXJ0bFwiLFxuICAgICAgICBkcmFnZ2FibGU6IFwiZHJhZ2dhYmxlXCIsXG4gICAgICAgIGRyYWc6IFwic3RhdGUtZHJhZ1wiLFxuICAgICAgICB0YXA6IFwic3RhdGUtdGFwXCIsXG4gICAgICAgIGFjdGl2ZTogXCJhY3RpdmVcIixcbiAgICAgICAgdG9vbHRpcDogXCJ0b29sdGlwXCIsXG4gICAgICAgIHBpcHM6IFwicGlwc1wiLFxuICAgICAgICBwaXBzSG9yaXpvbnRhbDogXCJwaXBzLWhvcml6b250YWxcIixcbiAgICAgICAgcGlwc1ZlcnRpY2FsOiBcInBpcHMtdmVydGljYWxcIixcbiAgICAgICAgbWFya2VyOiBcIm1hcmtlclwiLFxuICAgICAgICBtYXJrZXJIb3Jpem9udGFsOiBcIm1hcmtlci1ob3Jpem9udGFsXCIsXG4gICAgICAgIG1hcmtlclZlcnRpY2FsOiBcIm1hcmtlci12ZXJ0aWNhbFwiLFxuICAgICAgICBtYXJrZXJOb3JtYWw6IFwibWFya2VyLW5vcm1hbFwiLFxuICAgICAgICBtYXJrZXJMYXJnZTogXCJtYXJrZXItbGFyZ2VcIixcbiAgICAgICAgbWFya2VyU3ViOiBcIm1hcmtlci1zdWJcIixcbiAgICAgICAgdmFsdWU6IFwidmFsdWVcIixcbiAgICAgICAgdmFsdWVIb3Jpem9udGFsOiBcInZhbHVlLWhvcml6b250YWxcIixcbiAgICAgICAgdmFsdWVWZXJ0aWNhbDogXCJ2YWx1ZS12ZXJ0aWNhbFwiLFxuICAgICAgICB2YWx1ZU5vcm1hbDogXCJ2YWx1ZS1ub3JtYWxcIixcbiAgICAgICAgdmFsdWVMYXJnZTogXCJ2YWx1ZS1sYXJnZVwiLFxuICAgICAgICB2YWx1ZVN1YjogXCJ2YWx1ZS1zdWJcIlxuICAgIH07XG4gICAgLy8gTmFtZXNwYWNlcyBvZiBpbnRlcm5hbCBldmVudCBsaXN0ZW5lcnNcbiAgICB2YXIgSU5URVJOQUxfRVZFTlRfTlMgPSB7XG4gICAgICAgIHRvb2x0aXBzOiBcIi5fX3Rvb2x0aXBzXCIsXG4gICAgICAgIGFyaWE6IFwiLl9fYXJpYVwiXG4gICAgfTtcbiAgICAvL2VuZHJlZ2lvblxuICAgIGZ1bmN0aW9uIHRlc3RTdGVwKHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgaWYgKCFpc051bWVyaWMoZW50cnkpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAnc3RlcCcgaXMgbm90IG51bWVyaWMuXCIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFRoZSBzdGVwIG9wdGlvbiBjYW4gc3RpbGwgYmUgdXNlZCB0byBzZXQgc3RlcHBpbmdcbiAgICAgICAgLy8gZm9yIGxpbmVhciBzbGlkZXJzLiBPdmVyd3JpdHRlbiBpZiBzZXQgaW4gJ3JhbmdlJy5cbiAgICAgICAgcGFyc2VkLnNpbmdsZVN0ZXAgPSBlbnRyeTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdEtleWJvYXJkUGFnZU11bHRpcGxpZXIocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICBpZiAoIWlzTnVtZXJpYyhlbnRyeSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdrZXlib2FyZFBhZ2VNdWx0aXBsaWVyJyBpcyBub3QgbnVtZXJpYy5cIik7XG4gICAgICAgIH1cbiAgICAgICAgcGFyc2VkLmtleWJvYXJkUGFnZU11bHRpcGxpZXIgPSBlbnRyeTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdEtleWJvYXJkTXVsdGlwbGllcihwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIGlmICghaXNOdW1lcmljKGVudHJ5KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ2tleWJvYXJkTXVsdGlwbGllcicgaXMgbm90IG51bWVyaWMuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHBhcnNlZC5rZXlib2FyZE11bHRpcGxpZXIgPSBlbnRyeTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdEtleWJvYXJkRGVmYXVsdFN0ZXAocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICBpZiAoIWlzTnVtZXJpYyhlbnRyeSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdrZXlib2FyZERlZmF1bHRTdGVwJyBpcyBub3QgbnVtZXJpYy5cIik7XG4gICAgICAgIH1cbiAgICAgICAgcGFyc2VkLmtleWJvYXJkRGVmYXVsdFN0ZXAgPSBlbnRyeTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdFJhbmdlKHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgLy8gRmlsdGVyIGluY29ycmVjdCBpbnB1dC5cbiAgICAgICAgaWYgKHR5cGVvZiBlbnRyeSAhPT0gXCJvYmplY3RcIiB8fCBBcnJheS5pc0FycmF5KGVudHJ5KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ3JhbmdlJyBpcyBub3QgYW4gb2JqZWN0LlwiKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBDYXRjaCBtaXNzaW5nIHN0YXJ0IG9yIGVuZC5cbiAgICAgICAgaWYgKGVudHJ5Lm1pbiA9PT0gdW5kZWZpbmVkIHx8IGVudHJ5Lm1heCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiBNaXNzaW5nICdtaW4nIG9yICdtYXgnIGluICdyYW5nZScuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHBhcnNlZC5zcGVjdHJ1bSA9IG5ldyBTcGVjdHJ1bShlbnRyeSwgcGFyc2VkLnNuYXAgfHwgZmFsc2UsIHBhcnNlZC5zaW5nbGVTdGVwKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdFN0YXJ0KHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgZW50cnkgPSBhc0FycmF5KGVudHJ5KTtcbiAgICAgICAgLy8gVmFsaWRhdGUgaW5wdXQuIFZhbHVlcyBhcmVuJ3QgdGVzdGVkLCBhcyB0aGUgcHVibGljIC52YWwgbWV0aG9kXG4gICAgICAgIC8vIHdpbGwgYWx3YXlzIHByb3ZpZGUgYSB2YWxpZCBsb2NhdGlvbi5cbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGVudHJ5KSB8fCAhZW50cnkubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAnc3RhcnQnIG9wdGlvbiBpcyBpbmNvcnJlY3QuXCIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFN0b3JlIHRoZSBudW1iZXIgb2YgaGFuZGxlcy5cbiAgICAgICAgcGFyc2VkLmhhbmRsZXMgPSBlbnRyeS5sZW5ndGg7XG4gICAgICAgIC8vIFdoZW4gdGhlIHNsaWRlciBpcyBpbml0aWFsaXplZCwgdGhlIC52YWwgbWV0aG9kIHdpbGxcbiAgICAgICAgLy8gYmUgY2FsbGVkIHdpdGggdGhlIHN0YXJ0IG9wdGlvbnMuXG4gICAgICAgIHBhcnNlZC5zdGFydCA9IGVudHJ5O1xuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0U25hcChwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIGlmICh0eXBlb2YgZW50cnkgIT09IFwiYm9vbGVhblwiKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAnc25hcCcgb3B0aW9uIG11c3QgYmUgYSBib29sZWFuLlwiKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBFbmZvcmNlIDEwMCUgc3RlcHBpbmcgd2l0aGluIHN1YnJhbmdlcy5cbiAgICAgICAgcGFyc2VkLnNuYXAgPSBlbnRyeTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdEFuaW1hdGUocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICBpZiAodHlwZW9mIGVudHJ5ICE9PSBcImJvb2xlYW5cIikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ2FuaW1hdGUnIG9wdGlvbiBtdXN0IGJlIGEgYm9vbGVhbi5cIik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRW5mb3JjZSAxMDAlIHN0ZXBwaW5nIHdpdGhpbiBzdWJyYW5nZXMuXG4gICAgICAgIHBhcnNlZC5hbmltYXRlID0gZW50cnk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3RBbmltYXRpb25EdXJhdGlvbihwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIGlmICh0eXBlb2YgZW50cnkgIT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdhbmltYXRpb25EdXJhdGlvbicgb3B0aW9uIG11c3QgYmUgYSBudW1iZXIuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHBhcnNlZC5hbmltYXRpb25EdXJhdGlvbiA9IGVudHJ5O1xuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0Q29ubmVjdChwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIHZhciBjb25uZWN0ID0gW2ZhbHNlXTtcbiAgICAgICAgdmFyIGk7XG4gICAgICAgIC8vIE1hcCBsZWdhY3kgb3B0aW9uc1xuICAgICAgICBpZiAoZW50cnkgPT09IFwibG93ZXJcIikge1xuICAgICAgICAgICAgZW50cnkgPSBbdHJ1ZSwgZmFsc2VdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGVudHJ5ID09PSBcInVwcGVyXCIpIHtcbiAgICAgICAgICAgIGVudHJ5ID0gW2ZhbHNlLCB0cnVlXTtcbiAgICAgICAgfVxuICAgICAgICAvLyBIYW5kbGUgYm9vbGVhbiBvcHRpb25zXG4gICAgICAgIGlmIChlbnRyeSA9PT0gdHJ1ZSB8fCBlbnRyeSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGZvciAoaSA9IDE7IGkgPCBwYXJzZWQuaGFuZGxlczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29ubmVjdC5wdXNoKGVudHJ5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbm5lY3QucHVzaChmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gUmVqZWN0IGludmFsaWQgaW5wdXRcbiAgICAgICAgZWxzZSBpZiAoIUFycmF5LmlzQXJyYXkoZW50cnkpIHx8ICFlbnRyeS5sZW5ndGggfHwgZW50cnkubGVuZ3RoICE9PSBwYXJzZWQuaGFuZGxlcyArIDEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdjb25uZWN0JyBvcHRpb24gZG9lc24ndCBtYXRjaCBoYW5kbGUgY291bnQuXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29ubmVjdCA9IGVudHJ5O1xuICAgICAgICB9XG4gICAgICAgIHBhcnNlZC5jb25uZWN0ID0gY29ubmVjdDtcbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdE9yaWVudGF0aW9uKHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgLy8gU2V0IG9yaWVudGF0aW9uIHRvIGFuIGEgbnVtZXJpY2FsIHZhbHVlIGZvciBlYXN5XG4gICAgICAgIC8vIGFycmF5IHNlbGVjdGlvbi5cbiAgICAgICAgc3dpdGNoIChlbnRyeSkge1xuICAgICAgICAgICAgY2FzZSBcImhvcml6b250YWxcIjpcbiAgICAgICAgICAgICAgICBwYXJzZWQub3J0ID0gMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ2ZXJ0aWNhbFwiOlxuICAgICAgICAgICAgICAgIHBhcnNlZC5vcnQgPSAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAnb3JpZW50YXRpb24nIG9wdGlvbiBpcyBpbnZhbGlkLlwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0TWFyZ2luKHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgaWYgKCFpc051bWVyaWMoZW50cnkpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAnbWFyZ2luJyBvcHRpb24gbXVzdCBiZSBudW1lcmljLlwiKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJc3N1ZSAjNTgyXG4gICAgICAgIGlmIChlbnRyeSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHBhcnNlZC5tYXJnaW4gPSBwYXJzZWQuc3BlY3RydW0uZ2V0RGlzdGFuY2UoZW50cnkpO1xuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0TGltaXQocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICBpZiAoIWlzTnVtZXJpYyhlbnRyeSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdsaW1pdCcgb3B0aW9uIG11c3QgYmUgbnVtZXJpYy5cIik7XG4gICAgICAgIH1cbiAgICAgICAgcGFyc2VkLmxpbWl0ID0gcGFyc2VkLnNwZWN0cnVtLmdldERpc3RhbmNlKGVudHJ5KTtcbiAgICAgICAgaWYgKCFwYXJzZWQubGltaXQgfHwgcGFyc2VkLmhhbmRsZXMgPCAyKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAnbGltaXQnIG9wdGlvbiBpcyBvbmx5IHN1cHBvcnRlZCBvbiBsaW5lYXIgc2xpZGVycyB3aXRoIDIgb3IgbW9yZSBoYW5kbGVzLlwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0UGFkZGluZyhwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIHZhciBpbmRleDtcbiAgICAgICAgaWYgKCFpc051bWVyaWMoZW50cnkpICYmICFBcnJheS5pc0FycmF5KGVudHJ5KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ3BhZGRpbmcnIG9wdGlvbiBtdXN0IGJlIG51bWVyaWMgb3IgYXJyYXkgb2YgZXhhY3RseSAyIG51bWJlcnMuXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGVudHJ5KSAmJiAhKGVudHJ5Lmxlbmd0aCA9PT0gMiB8fCBpc051bWVyaWMoZW50cnlbMF0pIHx8IGlzTnVtZXJpYyhlbnRyeVsxXSkpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAncGFkZGluZycgb3B0aW9uIG11c3QgYmUgbnVtZXJpYyBvciBhcnJheSBvZiBleGFjdGx5IDIgbnVtYmVycy5cIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVudHJ5ID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGVudHJ5KSkge1xuICAgICAgICAgICAgZW50cnkgPSBbZW50cnksIGVudHJ5XTtcbiAgICAgICAgfVxuICAgICAgICAvLyAnZ2V0RGlzdGFuY2UnIHJldHVybnMgZmFsc2UgZm9yIGludmFsaWQgdmFsdWVzLlxuICAgICAgICBwYXJzZWQucGFkZGluZyA9IFtwYXJzZWQuc3BlY3RydW0uZ2V0RGlzdGFuY2UoZW50cnlbMF0pLCBwYXJzZWQuc3BlY3RydW0uZ2V0RGlzdGFuY2UoZW50cnlbMV0pXTtcbiAgICAgICAgZm9yIChpbmRleCA9IDA7IGluZGV4IDwgcGFyc2VkLnNwZWN0cnVtLnhOdW1TdGVwcy5sZW5ndGggLSAxOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAvLyBsYXN0IFwicmFuZ2VcIiBjYW4ndCBjb250YWluIHN0ZXAgc2l6ZSBhcyBpdCBpcyBwdXJlbHkgYW4gZW5kcG9pbnQuXG4gICAgICAgICAgICBpZiAocGFyc2VkLnBhZGRpbmdbMF1baW5kZXhdIDwgMCB8fCBwYXJzZWQucGFkZGluZ1sxXVtpbmRleF0gPCAwKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ3BhZGRpbmcnIG9wdGlvbiBtdXN0IGJlIGEgcG9zaXRpdmUgbnVtYmVyKHMpLlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgdG90YWxQYWRkaW5nID0gZW50cnlbMF0gKyBlbnRyeVsxXTtcbiAgICAgICAgdmFyIGZpcnN0VmFsdWUgPSBwYXJzZWQuc3BlY3RydW0ueFZhbFswXTtcbiAgICAgICAgdmFyIGxhc3RWYWx1ZSA9IHBhcnNlZC5zcGVjdHJ1bS54VmFsW3BhcnNlZC5zcGVjdHJ1bS54VmFsLmxlbmd0aCAtIDFdO1xuICAgICAgICBpZiAodG90YWxQYWRkaW5nIC8gKGxhc3RWYWx1ZSAtIGZpcnN0VmFsdWUpID4gMSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ3BhZGRpbmcnIG9wdGlvbiBtdXN0IG5vdCBleGNlZWQgMTAwJSBvZiB0aGUgcmFuZ2UuXCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3REaXJlY3Rpb24ocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICAvLyBTZXQgZGlyZWN0aW9uIGFzIGEgbnVtZXJpY2FsIHZhbHVlIGZvciBlYXN5IHBhcnNpbmcuXG4gICAgICAgIC8vIEludmVydCBjb25uZWN0aW9uIGZvciBSVEwgc2xpZGVycywgc28gdGhhdCB0aGUgcHJvcGVyXG4gICAgICAgIC8vIGhhbmRsZXMgZ2V0IHRoZSBjb25uZWN0L2JhY2tncm91bmQgY2xhc3Nlcy5cbiAgICAgICAgc3dpdGNoIChlbnRyeSkge1xuICAgICAgICAgICAgY2FzZSBcImx0clwiOlxuICAgICAgICAgICAgICAgIHBhcnNlZC5kaXIgPSAwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInJ0bFwiOlxuICAgICAgICAgICAgICAgIHBhcnNlZC5kaXIgPSAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAnZGlyZWN0aW9uJyBvcHRpb24gd2FzIG5vdCByZWNvZ25pemVkLlwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0QmVoYXZpb3VyKHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgLy8gTWFrZSBzdXJlIHRoZSBpbnB1dCBpcyBhIHN0cmluZy5cbiAgICAgICAgaWYgKHR5cGVvZiBlbnRyeSAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ2JlaGF2aW91cicgbXVzdCBiZSBhIHN0cmluZyBjb250YWluaW5nIG9wdGlvbnMuXCIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIENoZWNrIGlmIHRoZSBzdHJpbmcgY29udGFpbnMgYW55IGtleXdvcmRzLlxuICAgICAgICAvLyBOb25lIGFyZSByZXF1aXJlZC5cbiAgICAgICAgdmFyIHRhcCA9IGVudHJ5LmluZGV4T2YoXCJ0YXBcIikgPj0gMDtcbiAgICAgICAgdmFyIGRyYWcgPSBlbnRyeS5pbmRleE9mKFwiZHJhZ1wiKSA+PSAwO1xuICAgICAgICB2YXIgZml4ZWQgPSBlbnRyeS5pbmRleE9mKFwiZml4ZWRcIikgPj0gMDtcbiAgICAgICAgdmFyIHNuYXAgPSBlbnRyeS5pbmRleE9mKFwic25hcFwiKSA+PSAwO1xuICAgICAgICB2YXIgaG92ZXIgPSBlbnRyeS5pbmRleE9mKFwiaG92ZXJcIikgPj0gMDtcbiAgICAgICAgdmFyIHVuY29uc3RyYWluZWQgPSBlbnRyeS5pbmRleE9mKFwidW5jb25zdHJhaW5lZFwiKSA+PSAwO1xuICAgICAgICB2YXIgZHJhZ0FsbCA9IGVudHJ5LmluZGV4T2YoXCJkcmFnLWFsbFwiKSA+PSAwO1xuICAgICAgICBpZiAoZml4ZWQpIHtcbiAgICAgICAgICAgIGlmIChwYXJzZWQuaGFuZGxlcyAhPT0gMikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdmaXhlZCcgYmVoYXZpb3VyIG11c3QgYmUgdXNlZCB3aXRoIDIgaGFuZGxlc1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFVzZSBtYXJnaW4gdG8gZW5mb3JjZSBmaXhlZCBzdGF0ZVxuICAgICAgICAgICAgdGVzdE1hcmdpbihwYXJzZWQsIHBhcnNlZC5zdGFydFsxXSAtIHBhcnNlZC5zdGFydFswXSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHVuY29uc3RyYWluZWQgJiYgKHBhcnNlZC5tYXJnaW4gfHwgcGFyc2VkLmxpbWl0KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ3VuY29uc3RyYWluZWQnIGJlaGF2aW91ciBjYW5ub3QgYmUgdXNlZCB3aXRoIG1hcmdpbiBvciBsaW1pdFwiKTtcbiAgICAgICAgfVxuICAgICAgICBwYXJzZWQuZXZlbnRzID0ge1xuICAgICAgICAgICAgdGFwOiB0YXAgfHwgc25hcCxcbiAgICAgICAgICAgIGRyYWc6IGRyYWcsXG4gICAgICAgICAgICBkcmFnQWxsOiBkcmFnQWxsLFxuICAgICAgICAgICAgZml4ZWQ6IGZpeGVkLFxuICAgICAgICAgICAgc25hcDogc25hcCxcbiAgICAgICAgICAgIGhvdmVyOiBob3ZlcixcbiAgICAgICAgICAgIHVuY29uc3RyYWluZWQ6IHVuY29uc3RyYWluZWRcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdFRvb2x0aXBzKHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgaWYgKGVudHJ5ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbnRyeSA9PT0gdHJ1ZSB8fCBpc1ZhbGlkUGFydGlhbEZvcm1hdHRlcihlbnRyeSkpIHtcbiAgICAgICAgICAgIHBhcnNlZC50b29sdGlwcyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXJzZWQuaGFuZGxlczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnRvb2x0aXBzLnB1c2goZW50cnkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZW50cnkgPSBhc0FycmF5KGVudHJ5KTtcbiAgICAgICAgICAgIGlmIChlbnRyeS5sZW5ndGggIT09IHBhcnNlZC5oYW5kbGVzKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogbXVzdCBwYXNzIGEgZm9ybWF0dGVyIGZvciBhbGwgaGFuZGxlcy5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbnRyeS5mb3JFYWNoKGZ1bmN0aW9uIChmb3JtYXR0ZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGZvcm1hdHRlciAhPT0gXCJib29sZWFuXCIgJiYgIWlzVmFsaWRQYXJ0aWFsRm9ybWF0dGVyKGZvcm1hdHRlcikpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ3Rvb2x0aXBzJyBtdXN0IGJlIHBhc3NlZCBhIGZvcm1hdHRlciBvciAnZmFsc2UnLlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHBhcnNlZC50b29sdGlwcyA9IGVudHJ5O1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3RIYW5kbGVBdHRyaWJ1dGVzKHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgaWYgKGVudHJ5Lmxlbmd0aCAhPT0gcGFyc2VkLmhhbmRsZXMpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6IG11c3QgcGFzcyBhIGF0dHJpYnV0ZXMgZm9yIGFsbCBoYW5kbGVzLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBwYXJzZWQuaGFuZGxlQXR0cmlidXRlcyA9IGVudHJ5O1xuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0QXJpYUZvcm1hdChwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIGlmICghaXNWYWxpZFBhcnRpYWxGb3JtYXR0ZXIoZW50cnkpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAnYXJpYUZvcm1hdCcgcmVxdWlyZXMgJ3RvJyBtZXRob2QuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHBhcnNlZC5hcmlhRm9ybWF0ID0gZW50cnk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3RGb3JtYXQocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICBpZiAoIWlzVmFsaWRGb3JtYXR0ZXIoZW50cnkpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAnZm9ybWF0JyByZXF1aXJlcyAndG8nIGFuZCAnZnJvbScgbWV0aG9kcy5cIik7XG4gICAgICAgIH1cbiAgICAgICAgcGFyc2VkLmZvcm1hdCA9IGVudHJ5O1xuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0S2V5Ym9hcmRTdXBwb3J0KHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBlbnRyeSAhPT0gXCJib29sZWFuXCIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdrZXlib2FyZFN1cHBvcnQnIG9wdGlvbiBtdXN0IGJlIGEgYm9vbGVhbi5cIik7XG4gICAgICAgIH1cbiAgICAgICAgcGFyc2VkLmtleWJvYXJkU3VwcG9ydCA9IGVudHJ5O1xuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0RG9jdW1lbnRFbGVtZW50KHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgLy8gVGhpcyBpcyBhbiBhZHZhbmNlZCBvcHRpb24uIFBhc3NlZCB2YWx1ZXMgYXJlIHVzZWQgd2l0aG91dCB2YWxpZGF0aW9uLlxuICAgICAgICBwYXJzZWQuZG9jdW1lbnRFbGVtZW50ID0gZW50cnk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3RDc3NQcmVmaXgocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICBpZiAodHlwZW9mIGVudHJ5ICE9PSBcInN0cmluZ1wiICYmIGVudHJ5ICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ2Nzc1ByZWZpeCcgbXVzdCBiZSBhIHN0cmluZyBvciBgZmFsc2VgLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBwYXJzZWQuY3NzUHJlZml4ID0gZW50cnk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3RDc3NDbGFzc2VzKHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBlbnRyeSAhPT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ2Nzc0NsYXNzZXMnIG11c3QgYmUgYW4gb2JqZWN0LlwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHBhcnNlZC5jc3NQcmVmaXggPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHBhcnNlZC5jc3NDbGFzc2VzID0ge307XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhlbnRyeSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgcGFyc2VkLmNzc0NsYXNzZXNba2V5XSA9IHBhcnNlZC5jc3NQcmVmaXggKyBlbnRyeVtrZXldO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwYXJzZWQuY3NzQ2xhc3NlcyA9IGVudHJ5O1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIFRlc3QgYWxsIGRldmVsb3BlciBzZXR0aW5ncyBhbmQgcGFyc2UgdG8gYXNzdW1wdGlvbi1zYWZlIHZhbHVlcy5cbiAgICBmdW5jdGlvbiB0ZXN0T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgICAgIC8vIFRvIHByb3ZlIGEgZml4IGZvciAjNTM3LCBmcmVlemUgb3B0aW9ucyBoZXJlLlxuICAgICAgICAvLyBJZiB0aGUgb2JqZWN0IGlzIG1vZGlmaWVkLCBhbiBlcnJvciB3aWxsIGJlIHRocm93bi5cbiAgICAgICAgLy8gT2JqZWN0LmZyZWV6ZShvcHRpb25zKTtcbiAgICAgICAgdmFyIHBhcnNlZCA9IHtcbiAgICAgICAgICAgIG1hcmdpbjogbnVsbCxcbiAgICAgICAgICAgIGxpbWl0OiBudWxsLFxuICAgICAgICAgICAgcGFkZGluZzogbnVsbCxcbiAgICAgICAgICAgIGFuaW1hdGU6IHRydWUsXG4gICAgICAgICAgICBhbmltYXRpb25EdXJhdGlvbjogMzAwLFxuICAgICAgICAgICAgYXJpYUZvcm1hdDogZGVmYXVsdEZvcm1hdHRlcixcbiAgICAgICAgICAgIGZvcm1hdDogZGVmYXVsdEZvcm1hdHRlclxuICAgICAgICB9O1xuICAgICAgICAvLyBUZXN0cyBhcmUgZXhlY3V0ZWQgaW4gdGhlIG9yZGVyIHRoZXkgYXJlIHByZXNlbnRlZCBoZXJlLlxuICAgICAgICB2YXIgdGVzdHMgPSB7XG4gICAgICAgICAgICBzdGVwOiB7IHI6IGZhbHNlLCB0OiB0ZXN0U3RlcCB9LFxuICAgICAgICAgICAga2V5Ym9hcmRQYWdlTXVsdGlwbGllcjogeyByOiBmYWxzZSwgdDogdGVzdEtleWJvYXJkUGFnZU11bHRpcGxpZXIgfSxcbiAgICAgICAgICAgIGtleWJvYXJkTXVsdGlwbGllcjogeyByOiBmYWxzZSwgdDogdGVzdEtleWJvYXJkTXVsdGlwbGllciB9LFxuICAgICAgICAgICAga2V5Ym9hcmREZWZhdWx0U3RlcDogeyByOiBmYWxzZSwgdDogdGVzdEtleWJvYXJkRGVmYXVsdFN0ZXAgfSxcbiAgICAgICAgICAgIHN0YXJ0OiB7IHI6IHRydWUsIHQ6IHRlc3RTdGFydCB9LFxuICAgICAgICAgICAgY29ubmVjdDogeyByOiB0cnVlLCB0OiB0ZXN0Q29ubmVjdCB9LFxuICAgICAgICAgICAgZGlyZWN0aW9uOiB7IHI6IHRydWUsIHQ6IHRlc3REaXJlY3Rpb24gfSxcbiAgICAgICAgICAgIHNuYXA6IHsgcjogZmFsc2UsIHQ6IHRlc3RTbmFwIH0sXG4gICAgICAgICAgICBhbmltYXRlOiB7IHI6IGZhbHNlLCB0OiB0ZXN0QW5pbWF0ZSB9LFxuICAgICAgICAgICAgYW5pbWF0aW9uRHVyYXRpb246IHsgcjogZmFsc2UsIHQ6IHRlc3RBbmltYXRpb25EdXJhdGlvbiB9LFxuICAgICAgICAgICAgcmFuZ2U6IHsgcjogdHJ1ZSwgdDogdGVzdFJhbmdlIH0sXG4gICAgICAgICAgICBvcmllbnRhdGlvbjogeyByOiBmYWxzZSwgdDogdGVzdE9yaWVudGF0aW9uIH0sXG4gICAgICAgICAgICBtYXJnaW46IHsgcjogZmFsc2UsIHQ6IHRlc3RNYXJnaW4gfSxcbiAgICAgICAgICAgIGxpbWl0OiB7IHI6IGZhbHNlLCB0OiB0ZXN0TGltaXQgfSxcbiAgICAgICAgICAgIHBhZGRpbmc6IHsgcjogZmFsc2UsIHQ6IHRlc3RQYWRkaW5nIH0sXG4gICAgICAgICAgICBiZWhhdmlvdXI6IHsgcjogdHJ1ZSwgdDogdGVzdEJlaGF2aW91ciB9LFxuICAgICAgICAgICAgYXJpYUZvcm1hdDogeyByOiBmYWxzZSwgdDogdGVzdEFyaWFGb3JtYXQgfSxcbiAgICAgICAgICAgIGZvcm1hdDogeyByOiBmYWxzZSwgdDogdGVzdEZvcm1hdCB9LFxuICAgICAgICAgICAgdG9vbHRpcHM6IHsgcjogZmFsc2UsIHQ6IHRlc3RUb29sdGlwcyB9LFxuICAgICAgICAgICAga2V5Ym9hcmRTdXBwb3J0OiB7IHI6IHRydWUsIHQ6IHRlc3RLZXlib2FyZFN1cHBvcnQgfSxcbiAgICAgICAgICAgIGRvY3VtZW50RWxlbWVudDogeyByOiBmYWxzZSwgdDogdGVzdERvY3VtZW50RWxlbWVudCB9LFxuICAgICAgICAgICAgY3NzUHJlZml4OiB7IHI6IHRydWUsIHQ6IHRlc3RDc3NQcmVmaXggfSxcbiAgICAgICAgICAgIGNzc0NsYXNzZXM6IHsgcjogdHJ1ZSwgdDogdGVzdENzc0NsYXNzZXMgfSxcbiAgICAgICAgICAgIGhhbmRsZUF0dHJpYnV0ZXM6IHsgcjogZmFsc2UsIHQ6IHRlc3RIYW5kbGVBdHRyaWJ1dGVzIH1cbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGRlZmF1bHRzID0ge1xuICAgICAgICAgICAgY29ubmVjdDogZmFsc2UsXG4gICAgICAgICAgICBkaXJlY3Rpb246IFwibHRyXCIsXG4gICAgICAgICAgICBiZWhhdmlvdXI6IFwidGFwXCIsXG4gICAgICAgICAgICBvcmllbnRhdGlvbjogXCJob3Jpem9udGFsXCIsXG4gICAgICAgICAgICBrZXlib2FyZFN1cHBvcnQ6IHRydWUsXG4gICAgICAgICAgICBjc3NQcmVmaXg6IFwibm9VaS1cIixcbiAgICAgICAgICAgIGNzc0NsYXNzZXM6IGNzc0NsYXNzZXMsXG4gICAgICAgICAgICBrZXlib2FyZFBhZ2VNdWx0aXBsaWVyOiA1LFxuICAgICAgICAgICAga2V5Ym9hcmRNdWx0aXBsaWVyOiAxLFxuICAgICAgICAgICAga2V5Ym9hcmREZWZhdWx0U3RlcDogMTBcbiAgICAgICAgfTtcbiAgICAgICAgLy8gQXJpYUZvcm1hdCBkZWZhdWx0cyB0byByZWd1bGFyIGZvcm1hdCwgaWYgYW55LlxuICAgICAgICBpZiAob3B0aW9ucy5mb3JtYXQgJiYgIW9wdGlvbnMuYXJpYUZvcm1hdCkge1xuICAgICAgICAgICAgb3B0aW9ucy5hcmlhRm9ybWF0ID0gb3B0aW9ucy5mb3JtYXQ7XG4gICAgICAgIH1cbiAgICAgICAgLy8gUnVuIGFsbCBvcHRpb25zIHRocm91Z2ggYSB0ZXN0aW5nIG1lY2hhbmlzbSB0byBlbnN1cmUgY29ycmVjdFxuICAgICAgICAvLyBpbnB1dC4gSXQgc2hvdWxkIGJlIG5vdGVkIHRoYXQgb3B0aW9ucyBtaWdodCBnZXQgbW9kaWZpZWQgdG9cbiAgICAgICAgLy8gYmUgaGFuZGxlZCBwcm9wZXJseS4gRS5nLiB3cmFwcGluZyBpbnRlZ2VycyBpbiBhcnJheXMuXG4gICAgICAgIE9iamVjdC5rZXlzKHRlc3RzKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICAvLyBJZiB0aGUgb3B0aW9uIGlzbid0IHNldCwgYnV0IGl0IGlzIHJlcXVpcmVkLCB0aHJvdyBhbiBlcnJvci5cbiAgICAgICAgICAgIGlmICghaXNTZXQob3B0aW9uc1tuYW1lXSkgJiYgZGVmYXVsdHNbbmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGlmICh0ZXN0c1tuYW1lXS5yKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdcIiArIG5hbWUgKyBcIicgaXMgcmVxdWlyZWQuXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0ZXN0c1tuYW1lXS50KHBhcnNlZCwgIWlzU2V0KG9wdGlvbnNbbmFtZV0pID8gZGVmYXVsdHNbbmFtZV0gOiBvcHRpb25zW25hbWVdKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIEZvcndhcmQgcGlwcyBvcHRpb25zXG4gICAgICAgIHBhcnNlZC5waXBzID0gb3B0aW9ucy5waXBzO1xuICAgICAgICAvLyBBbGwgcmVjZW50IGJyb3dzZXJzIGFjY2VwdCB1bnByZWZpeGVkIHRyYW5zZm9ybS5cbiAgICAgICAgLy8gV2UgbmVlZCAtbXMtIGZvciBJRTkgYW5kIC13ZWJraXQtIGZvciBvbGRlciBBbmRyb2lkO1xuICAgICAgICAvLyBBc3N1bWUgdXNlIG9mIC13ZWJraXQtIGlmIHVucHJlZml4ZWQgYW5kIC1tcy0gYXJlIG5vdCBzdXBwb3J0ZWQuXG4gICAgICAgIC8vIGh0dHBzOi8vY2FuaXVzZS5jb20vI2ZlYXQ9dHJhbnNmb3JtczJkXG4gICAgICAgIHZhciBkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdmFyIG1zUHJlZml4ID0gZC5zdHlsZS5tc1RyYW5zZm9ybSAhPT0gdW5kZWZpbmVkO1xuICAgICAgICB2YXIgbm9QcmVmaXggPSBkLnN0eWxlLnRyYW5zZm9ybSAhPT0gdW5kZWZpbmVkO1xuICAgICAgICBwYXJzZWQudHJhbnNmb3JtUnVsZSA9IG5vUHJlZml4ID8gXCJ0cmFuc2Zvcm1cIiA6IG1zUHJlZml4ID8gXCJtc1RyYW5zZm9ybVwiIDogXCJ3ZWJraXRUcmFuc2Zvcm1cIjtcbiAgICAgICAgLy8gUGlwcyBkb24ndCBtb3ZlLCBzbyB3ZSBjYW4gcGxhY2UgdGhlbSB1c2luZyBsZWZ0L3RvcC5cbiAgICAgICAgdmFyIHN0eWxlcyA9IFtcbiAgICAgICAgICAgIFtcImxlZnRcIiwgXCJ0b3BcIl0sXG4gICAgICAgICAgICBbXCJyaWdodFwiLCBcImJvdHRvbVwiXVxuICAgICAgICBdO1xuICAgICAgICBwYXJzZWQuc3R5bGUgPSBzdHlsZXNbcGFyc2VkLmRpcl1bcGFyc2VkLm9ydF07XG4gICAgICAgIHJldHVybiBwYXJzZWQ7XG4gICAgfVxuICAgIC8vZW5kcmVnaW9uXG4gICAgZnVuY3Rpb24gc2NvcGUodGFyZ2V0LCBvcHRpb25zLCBvcmlnaW5hbE9wdGlvbnMpIHtcbiAgICAgICAgdmFyIGFjdGlvbnMgPSBnZXRBY3Rpb25zKCk7XG4gICAgICAgIHZhciBzdXBwb3J0c1RvdWNoQWN0aW9uTm9uZSA9IGdldFN1cHBvcnRzVG91Y2hBY3Rpb25Ob25lKCk7XG4gICAgICAgIHZhciBzdXBwb3J0c1Bhc3NpdmUgPSBzdXBwb3J0c1RvdWNoQWN0aW9uTm9uZSAmJiBnZXRTdXBwb3J0c1Bhc3NpdmUoKTtcbiAgICAgICAgLy8gQWxsIHZhcmlhYmxlcyBsb2NhbCB0byAnc2NvcGUnIGFyZSBwcmVmaXhlZCB3aXRoICdzY29wZV8nXG4gICAgICAgIC8vIFNsaWRlciBET00gTm9kZXNcbiAgICAgICAgdmFyIHNjb3BlX1RhcmdldCA9IHRhcmdldDtcbiAgICAgICAgdmFyIHNjb3BlX0Jhc2U7XG4gICAgICAgIHZhciBzY29wZV9IYW5kbGVzO1xuICAgICAgICB2YXIgc2NvcGVfQ29ubmVjdHM7XG4gICAgICAgIHZhciBzY29wZV9QaXBzO1xuICAgICAgICB2YXIgc2NvcGVfVG9vbHRpcHM7XG4gICAgICAgIC8vIFNsaWRlciBzdGF0ZSB2YWx1ZXNcbiAgICAgICAgdmFyIHNjb3BlX1NwZWN0cnVtID0gb3B0aW9ucy5zcGVjdHJ1bTtcbiAgICAgICAgdmFyIHNjb3BlX1ZhbHVlcyA9IFtdO1xuICAgICAgICB2YXIgc2NvcGVfTG9jYXRpb25zID0gW107XG4gICAgICAgIHZhciBzY29wZV9IYW5kbGVOdW1iZXJzID0gW107XG4gICAgICAgIHZhciBzY29wZV9BY3RpdmVIYW5kbGVzQ291bnQgPSAwO1xuICAgICAgICB2YXIgc2NvcGVfRXZlbnRzID0ge307XG4gICAgICAgIC8vIERvY3VtZW50IE5vZGVzXG4gICAgICAgIHZhciBzY29wZV9Eb2N1bWVudCA9IHRhcmdldC5vd25lckRvY3VtZW50O1xuICAgICAgICB2YXIgc2NvcGVfRG9jdW1lbnRFbGVtZW50ID0gb3B0aW9ucy5kb2N1bWVudEVsZW1lbnQgfHwgc2NvcGVfRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICB2YXIgc2NvcGVfQm9keSA9IHNjb3BlX0RvY3VtZW50LmJvZHk7XG4gICAgICAgIC8vIEZvciBob3Jpem9udGFsIHNsaWRlcnMgaW4gc3RhbmRhcmQgbHRyIGRvY3VtZW50cyxcbiAgICAgICAgLy8gbWFrZSAubm9VaS1vcmlnaW4gb3ZlcmZsb3cgdG8gdGhlIGxlZnQgc28gdGhlIGRvY3VtZW50IGRvZXNuJ3Qgc2Nyb2xsLlxuICAgICAgICB2YXIgc2NvcGVfRGlyT2Zmc2V0ID0gc2NvcGVfRG9jdW1lbnQuZGlyID09PSBcInJ0bFwiIHx8IG9wdGlvbnMub3J0ID09PSAxID8gMCA6IDEwMDtcbiAgICAgICAgLy8gQ3JlYXRlcyBhIG5vZGUsIGFkZHMgaXQgdG8gdGFyZ2V0LCByZXR1cm5zIHRoZSBuZXcgbm9kZS5cbiAgICAgICAgZnVuY3Rpb24gYWRkTm9kZVRvKGFkZFRhcmdldCwgY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICB2YXIgZGl2ID0gc2NvcGVfRG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGlmIChjbGFzc05hbWUpIHtcbiAgICAgICAgICAgICAgICBhZGRDbGFzcyhkaXYsIGNsYXNzTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhZGRUYXJnZXQuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgICAgICAgIHJldHVybiBkaXY7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQXBwZW5kIGEgb3JpZ2luIHRvIHRoZSBiYXNlXG4gICAgICAgIGZ1bmN0aW9uIGFkZE9yaWdpbihiYXNlLCBoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgICAgIHZhciBvcmlnaW4gPSBhZGROb2RlVG8oYmFzZSwgb3B0aW9ucy5jc3NDbGFzc2VzLm9yaWdpbik7XG4gICAgICAgICAgICB2YXIgaGFuZGxlID0gYWRkTm9kZVRvKG9yaWdpbiwgb3B0aW9ucy5jc3NDbGFzc2VzLmhhbmRsZSk7XG4gICAgICAgICAgICBhZGROb2RlVG8oaGFuZGxlLCBvcHRpb25zLmNzc0NsYXNzZXMudG91Y2hBcmVhKTtcbiAgICAgICAgICAgIGhhbmRsZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWhhbmRsZVwiLCBTdHJpbmcoaGFuZGxlTnVtYmVyKSk7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5rZXlib2FyZFN1cHBvcnQpIHtcbiAgICAgICAgICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVE1ML0dsb2JhbF9hdHRyaWJ1dGVzL3RhYmluZGV4XG4gICAgICAgICAgICAgICAgLy8gMCA9IGZvY3VzYWJsZSBhbmQgcmVhY2hhYmxlXG4gICAgICAgICAgICAgICAgaGFuZGxlLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIFwiMFwiKTtcbiAgICAgICAgICAgICAgICBoYW5kbGUuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBldmVudEtleWRvd24oZXZlbnQsIGhhbmRsZU51bWJlcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5oYW5kbGVBdHRyaWJ1dGVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB2YXIgYXR0cmlidXRlc18xID0gb3B0aW9ucy5oYW5kbGVBdHRyaWJ1dGVzW2hhbmRsZU51bWJlcl07XG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoYXR0cmlidXRlc18xKS5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyaWJ1dGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUsIGF0dHJpYnV0ZXNfMVthdHRyaWJ1dGVdKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGhhbmRsZS5zZXRBdHRyaWJ1dGUoXCJyb2xlXCIsIFwic2xpZGVyXCIpO1xuICAgICAgICAgICAgaGFuZGxlLnNldEF0dHJpYnV0ZShcImFyaWEtb3JpZW50YXRpb25cIiwgb3B0aW9ucy5vcnQgPyBcInZlcnRpY2FsXCIgOiBcImhvcml6b250YWxcIik7XG4gICAgICAgICAgICBpZiAoaGFuZGxlTnVtYmVyID09PSAwKSB7XG4gICAgICAgICAgICAgICAgYWRkQ2xhc3MoaGFuZGxlLCBvcHRpb25zLmNzc0NsYXNzZXMuaGFuZGxlTG93ZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoaGFuZGxlTnVtYmVyID09PSBvcHRpb25zLmhhbmRsZXMgLSAxKSB7XG4gICAgICAgICAgICAgICAgYWRkQ2xhc3MoaGFuZGxlLCBvcHRpb25zLmNzc0NsYXNzZXMuaGFuZGxlVXBwZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG9yaWdpbjtcbiAgICAgICAgfVxuICAgICAgICAvLyBJbnNlcnQgbm9kZXMgZm9yIGNvbm5lY3QgZWxlbWVudHNcbiAgICAgICAgZnVuY3Rpb24gYWRkQ29ubmVjdChiYXNlLCBhZGQpIHtcbiAgICAgICAgICAgIGlmICghYWRkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGFkZE5vZGVUbyhiYXNlLCBvcHRpb25zLmNzc0NsYXNzZXMuY29ubmVjdCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQWRkIGhhbmRsZXMgdG8gdGhlIHNsaWRlciBiYXNlLlxuICAgICAgICBmdW5jdGlvbiBhZGRFbGVtZW50cyhjb25uZWN0T3B0aW9ucywgYmFzZSkge1xuICAgICAgICAgICAgdmFyIGNvbm5lY3RCYXNlID0gYWRkTm9kZVRvKGJhc2UsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5jb25uZWN0cyk7XG4gICAgICAgICAgICBzY29wZV9IYW5kbGVzID0gW107XG4gICAgICAgICAgICBzY29wZV9Db25uZWN0cyA9IFtdO1xuICAgICAgICAgICAgc2NvcGVfQ29ubmVjdHMucHVzaChhZGRDb25uZWN0KGNvbm5lY3RCYXNlLCBjb25uZWN0T3B0aW9uc1swXSkpO1xuICAgICAgICAgICAgLy8gWzo6OjpPPT09PU89PT09Tz09PT1dXG4gICAgICAgICAgICAvLyBjb25uZWN0T3B0aW9ucyA9IFswLCAxLCAxLCAxXVxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvcHRpb25zLmhhbmRsZXM7IGkrKykge1xuICAgICAgICAgICAgICAgIC8vIEtlZXAgYSBsaXN0IG9mIGFsbCBhZGRlZCBoYW5kbGVzLlxuICAgICAgICAgICAgICAgIHNjb3BlX0hhbmRsZXMucHVzaChhZGRPcmlnaW4oYmFzZSwgaSkpO1xuICAgICAgICAgICAgICAgIHNjb3BlX0hhbmRsZU51bWJlcnNbaV0gPSBpO1xuICAgICAgICAgICAgICAgIHNjb3BlX0Nvbm5lY3RzLnB1c2goYWRkQ29ubmVjdChjb25uZWN0QmFzZSwgY29ubmVjdE9wdGlvbnNbaSArIDFdKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gSW5pdGlhbGl6ZSBhIHNpbmdsZSBzbGlkZXIuXG4gICAgICAgIGZ1bmN0aW9uIGFkZFNsaWRlcihhZGRUYXJnZXQpIHtcbiAgICAgICAgICAgIC8vIEFwcGx5IGNsYXNzZXMgYW5kIGRhdGEgdG8gdGhlIHRhcmdldC5cbiAgICAgICAgICAgIGFkZENsYXNzKGFkZFRhcmdldCwgb3B0aW9ucy5jc3NDbGFzc2VzLnRhcmdldCk7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5kaXIgPT09IDApIHtcbiAgICAgICAgICAgICAgICBhZGRDbGFzcyhhZGRUYXJnZXQsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5sdHIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYWRkQ2xhc3MoYWRkVGFyZ2V0LCBvcHRpb25zLmNzc0NsYXNzZXMucnRsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb25zLm9ydCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGFkZENsYXNzKGFkZFRhcmdldCwgb3B0aW9ucy5jc3NDbGFzc2VzLmhvcml6b250YWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYWRkQ2xhc3MoYWRkVGFyZ2V0LCBvcHRpb25zLmNzc0NsYXNzZXMudmVydGljYWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHRleHREaXJlY3Rpb24gPSBnZXRDb21wdXRlZFN0eWxlKGFkZFRhcmdldCkuZGlyZWN0aW9uO1xuICAgICAgICAgICAgaWYgKHRleHREaXJlY3Rpb24gPT09IFwicnRsXCIpIHtcbiAgICAgICAgICAgICAgICBhZGRDbGFzcyhhZGRUYXJnZXQsIG9wdGlvbnMuY3NzQ2xhc3Nlcy50ZXh0RGlyZWN0aW9uUnRsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGFkZENsYXNzKGFkZFRhcmdldCwgb3B0aW9ucy5jc3NDbGFzc2VzLnRleHREaXJlY3Rpb25MdHIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGFkZE5vZGVUbyhhZGRUYXJnZXQsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5iYXNlKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBhZGRUb29sdGlwKGhhbmRsZSwgaGFuZGxlTnVtYmVyKSB7XG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMudG9vbHRpcHMgfHwgIW9wdGlvbnMudG9vbHRpcHNbaGFuZGxlTnVtYmVyXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhZGROb2RlVG8oaGFuZGxlLmZpcnN0Q2hpbGQsIG9wdGlvbnMuY3NzQ2xhc3Nlcy50b29sdGlwKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBpc1NsaWRlckRpc2FibGVkKCkge1xuICAgICAgICAgICAgcmV0dXJuIHNjb3BlX1RhcmdldC5oYXNBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBEaXNhYmxlIHRoZSBzbGlkZXIgZHJhZ2dpbmcgaWYgYW55IGhhbmRsZSBpcyBkaXNhYmxlZFxuICAgICAgICBmdW5jdGlvbiBpc0hhbmRsZURpc2FibGVkKGhhbmRsZU51bWJlcikge1xuICAgICAgICAgICAgdmFyIGhhbmRsZU9yaWdpbiA9IHNjb3BlX0hhbmRsZXNbaGFuZGxlTnVtYmVyXTtcbiAgICAgICAgICAgIHJldHVybiBoYW5kbGVPcmlnaW4uaGFzQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gcmVtb3ZlVG9vbHRpcHMoKSB7XG4gICAgICAgICAgICBpZiAoc2NvcGVfVG9vbHRpcHMpIHtcbiAgICAgICAgICAgICAgICByZW1vdmVFdmVudChcInVwZGF0ZVwiICsgSU5URVJOQUxfRVZFTlRfTlMudG9vbHRpcHMpO1xuICAgICAgICAgICAgICAgIHNjb3BlX1Rvb2x0aXBzLmZvckVhY2goZnVuY3Rpb24gKHRvb2x0aXApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRvb2x0aXApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZUVsZW1lbnQodG9vbHRpcCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBzY29wZV9Ub29sdGlwcyA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gVGhlIHRvb2x0aXBzIG9wdGlvbiBpcyBhIHNob3J0aGFuZCBmb3IgdXNpbmcgdGhlICd1cGRhdGUnIGV2ZW50LlxuICAgICAgICBmdW5jdGlvbiB0b29sdGlwcygpIHtcbiAgICAgICAgICAgIHJlbW92ZVRvb2x0aXBzKCk7XG4gICAgICAgICAgICAvLyBUb29sdGlwcyBhcmUgYWRkZWQgd2l0aCBvcHRpb25zLnRvb2x0aXBzIGluIG9yaWdpbmFsIG9yZGVyLlxuICAgICAgICAgICAgc2NvcGVfVG9vbHRpcHMgPSBzY29wZV9IYW5kbGVzLm1hcChhZGRUb29sdGlwKTtcbiAgICAgICAgICAgIGJpbmRFdmVudChcInVwZGF0ZVwiICsgSU5URVJOQUxfRVZFTlRfTlMudG9vbHRpcHMsIGZ1bmN0aW9uICh2YWx1ZXMsIGhhbmRsZU51bWJlciwgdW5lbmNvZGVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFzY29wZV9Ub29sdGlwcyB8fCAhb3B0aW9ucy50b29sdGlwcykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzY29wZV9Ub29sdGlwc1toYW5kbGVOdW1iZXJdID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBmb3JtYXR0ZWRWYWx1ZSA9IHZhbHVlc1toYW5kbGVOdW1iZXJdO1xuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLnRvb2x0aXBzW2hhbmRsZU51bWJlcl0gIT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVkVmFsdWUgPSBvcHRpb25zLnRvb2x0aXBzW2hhbmRsZU51bWJlcl0udG8odW5lbmNvZGVkW2hhbmRsZU51bWJlcl0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzY29wZV9Ub29sdGlwc1toYW5kbGVOdW1iZXJdLmlubmVySFRNTCA9IGZvcm1hdHRlZFZhbHVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gYXJpYSgpIHtcbiAgICAgICAgICAgIHJlbW92ZUV2ZW50KFwidXBkYXRlXCIgKyBJTlRFUk5BTF9FVkVOVF9OUy5hcmlhKTtcbiAgICAgICAgICAgIGJpbmRFdmVudChcInVwZGF0ZVwiICsgSU5URVJOQUxfRVZFTlRfTlMuYXJpYSwgZnVuY3Rpb24gKHZhbHVlcywgaGFuZGxlTnVtYmVyLCB1bmVuY29kZWQsIHRhcCwgcG9zaXRpb25zKSB7XG4gICAgICAgICAgICAgICAgLy8gVXBkYXRlIEFyaWEgVmFsdWVzIGZvciBhbGwgaGFuZGxlcywgYXMgYSBjaGFuZ2UgaW4gb25lIGNoYW5nZXMgbWluIGFuZCBtYXggdmFsdWVzIGZvciB0aGUgbmV4dC5cbiAgICAgICAgICAgICAgICBzY29wZV9IYW5kbGVOdW1iZXJzLmZvckVhY2goZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBoYW5kbGUgPSBzY29wZV9IYW5kbGVzW2luZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1pbiA9IGNoZWNrSGFuZGxlUG9zaXRpb24oc2NvcGVfTG9jYXRpb25zLCBpbmRleCwgMCwgdHJ1ZSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXggPSBjaGVja0hhbmRsZVBvc2l0aW9uKHNjb3BlX0xvY2F0aW9ucywgaW5kZXgsIDEwMCwgdHJ1ZSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBub3cgPSBwb3NpdGlvbnNbaW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICAvLyBGb3JtYXR0ZWQgdmFsdWUgZm9yIGRpc3BsYXlcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRleHQgPSBTdHJpbmcob3B0aW9ucy5hcmlhRm9ybWF0LnRvKHVuZW5jb2RlZFtpbmRleF0pKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gTWFwIHRvIHNsaWRlciByYW5nZSB2YWx1ZXNcbiAgICAgICAgICAgICAgICAgICAgbWluID0gc2NvcGVfU3BlY3RydW0uZnJvbVN0ZXBwaW5nKG1pbikudG9GaXhlZCgxKTtcbiAgICAgICAgICAgICAgICAgICAgbWF4ID0gc2NvcGVfU3BlY3RydW0uZnJvbVN0ZXBwaW5nKG1heCkudG9GaXhlZCgxKTtcbiAgICAgICAgICAgICAgICAgICAgbm93ID0gc2NvcGVfU3BlY3RydW0uZnJvbVN0ZXBwaW5nKG5vdykudG9GaXhlZCgxKTtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlLmNoaWxkcmVuWzBdLnNldEF0dHJpYnV0ZShcImFyaWEtdmFsdWVtaW5cIiwgbWluKTtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlLmNoaWxkcmVuWzBdLnNldEF0dHJpYnV0ZShcImFyaWEtdmFsdWVtYXhcIiwgbWF4KTtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlLmNoaWxkcmVuWzBdLnNldEF0dHJpYnV0ZShcImFyaWEtdmFsdWVub3dcIiwgbm93KTtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlLmNoaWxkcmVuWzBdLnNldEF0dHJpYnV0ZShcImFyaWEtdmFsdWV0ZXh0XCIsIHRleHQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gZ2V0R3JvdXAocGlwcykge1xuICAgICAgICAgICAgLy8gVXNlIHRoZSByYW5nZS5cbiAgICAgICAgICAgIGlmIChwaXBzLm1vZGUgPT09IGV4cG9ydHMuUGlwc01vZGUuUmFuZ2UgfHwgcGlwcy5tb2RlID09PSBleHBvcnRzLlBpcHNNb2RlLlN0ZXBzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNjb3BlX1NwZWN0cnVtLnhWYWw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGlwcy5tb2RlID09PSBleHBvcnRzLlBpcHNNb2RlLkNvdW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKHBpcHMudmFsdWVzIDwgMikge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAndmFsdWVzJyAoPj0gMikgcmVxdWlyZWQgZm9yIG1vZGUgJ2NvdW50Jy5cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIERpdmlkZSAwIC0gMTAwIGluICdjb3VudCcgcGFydHMuXG4gICAgICAgICAgICAgICAgdmFyIGludGVydmFsID0gcGlwcy52YWx1ZXMgLSAxO1xuICAgICAgICAgICAgICAgIHZhciBzcHJlYWQgPSAxMDAgLyBpbnRlcnZhbDtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWVzID0gW107XG4gICAgICAgICAgICAgICAgLy8gTGlzdCB0aGVzZSBwYXJ0cyBhbmQgaGF2ZSB0aGVtIGhhbmRsZWQgYXMgJ3Bvc2l0aW9ucycuXG4gICAgICAgICAgICAgICAgd2hpbGUgKGludGVydmFsLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzW2ludGVydmFsXSA9IGludGVydmFsICogc3ByZWFkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YWx1ZXMucHVzaCgxMDApO1xuICAgICAgICAgICAgICAgIHJldHVybiBtYXBUb1JhbmdlKHZhbHVlcywgcGlwcy5zdGVwcGVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwaXBzLm1vZGUgPT09IGV4cG9ydHMuUGlwc01vZGUuUG9zaXRpb25zKSB7XG4gICAgICAgICAgICAgICAgLy8gTWFwIGFsbCBwZXJjZW50YWdlcyB0byBvbi1yYW5nZSB2YWx1ZXMuXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1hcFRvUmFuZ2UocGlwcy52YWx1ZXMsIHBpcHMuc3RlcHBlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGlwcy5tb2RlID09PSBleHBvcnRzLlBpcHNNb2RlLlZhbHVlcykge1xuICAgICAgICAgICAgICAgIC8vIElmIHRoZSB2YWx1ZSBtdXN0IGJlIHN0ZXBwZWQsIGl0IG5lZWRzIHRvIGJlIGNvbnZlcnRlZCB0byBhIHBlcmNlbnRhZ2UgZmlyc3QuXG4gICAgICAgICAgICAgICAgaWYgKHBpcHMuc3RlcHBlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGlwcy52YWx1ZXMubWFwKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ29udmVydCB0byBwZXJjZW50YWdlLCBhcHBseSBzdGVwLCByZXR1cm4gdG8gdmFsdWUuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2NvcGVfU3BlY3RydW0uZnJvbVN0ZXBwaW5nKHNjb3BlX1NwZWN0cnVtLmdldFN0ZXAoc2NvcGVfU3BlY3RydW0udG9TdGVwcGluZyh2YWx1ZSkpKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIE90aGVyd2lzZSwgd2UgY2FuIHNpbXBseSB1c2UgdGhlIHZhbHVlcy5cbiAgICAgICAgICAgICAgICByZXR1cm4gcGlwcy52YWx1ZXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gW107IC8vIHBpcHMubW9kZSA9IG5ldmVyXG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gbWFwVG9SYW5nZSh2YWx1ZXMsIHN0ZXBwZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZXMubWFwKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzY29wZV9TcGVjdHJ1bS5mcm9tU3RlcHBpbmcoc3RlcHBlZCA/IHNjb3BlX1NwZWN0cnVtLmdldFN0ZXAodmFsdWUpIDogdmFsdWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gZ2VuZXJhdGVTcHJlYWQocGlwcykge1xuICAgICAgICAgICAgZnVuY3Rpb24gc2FmZUluY3JlbWVudCh2YWx1ZSwgaW5jcmVtZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gQXZvaWQgZmxvYXRpbmcgcG9pbnQgdmFyaWFuY2UgYnkgZHJvcHBpbmcgdGhlIHNtYWxsZXN0IGRlY2ltYWwgcGxhY2VzLlxuICAgICAgICAgICAgICAgIHJldHVybiBOdW1iZXIoKHZhbHVlICsgaW5jcmVtZW50KS50b0ZpeGVkKDcpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBncm91cCA9IGdldEdyb3VwKHBpcHMpO1xuICAgICAgICAgICAgdmFyIGluZGV4ZXMgPSB7fTtcbiAgICAgICAgICAgIHZhciBmaXJzdEluUmFuZ2UgPSBzY29wZV9TcGVjdHJ1bS54VmFsWzBdO1xuICAgICAgICAgICAgdmFyIGxhc3RJblJhbmdlID0gc2NvcGVfU3BlY3RydW0ueFZhbFtzY29wZV9TcGVjdHJ1bS54VmFsLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgdmFyIGlnbm9yZUZpcnN0ID0gZmFsc2U7XG4gICAgICAgICAgICB2YXIgaWdub3JlTGFzdCA9IGZhbHNlO1xuICAgICAgICAgICAgdmFyIHByZXZQY3QgPSAwO1xuICAgICAgICAgICAgLy8gQ3JlYXRlIGEgY29weSBvZiB0aGUgZ3JvdXAsIHNvcnQgaXQgYW5kIGZpbHRlciBhd2F5IGFsbCBkdXBsaWNhdGVzLlxuICAgICAgICAgICAgZ3JvdXAgPSB1bmlxdWUoZ3JvdXAuc2xpY2UoKS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGEgLSBiO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHRoZSByYW5nZSBzdGFydHMgd2l0aCB0aGUgZmlyc3QgZWxlbWVudC5cbiAgICAgICAgICAgIGlmIChncm91cFswXSAhPT0gZmlyc3RJblJhbmdlKSB7XG4gICAgICAgICAgICAgICAgZ3JvdXAudW5zaGlmdChmaXJzdEluUmFuZ2UpO1xuICAgICAgICAgICAgICAgIGlnbm9yZUZpcnN0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIExpa2V3aXNlIGZvciB0aGUgbGFzdCBvbmUuXG4gICAgICAgICAgICBpZiAoZ3JvdXBbZ3JvdXAubGVuZ3RoIC0gMV0gIT09IGxhc3RJblJhbmdlKSB7XG4gICAgICAgICAgICAgICAgZ3JvdXAucHVzaChsYXN0SW5SYW5nZSk7XG4gICAgICAgICAgICAgICAgaWdub3JlTGFzdCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBncm91cC5mb3JFYWNoKGZ1bmN0aW9uIChjdXJyZW50LCBpbmRleCkge1xuICAgICAgICAgICAgICAgIC8vIEdldCB0aGUgY3VycmVudCBzdGVwIGFuZCB0aGUgbG93ZXIgKyB1cHBlciBwb3NpdGlvbnMuXG4gICAgICAgICAgICAgICAgdmFyIHN0ZXA7XG4gICAgICAgICAgICAgICAgdmFyIGk7XG4gICAgICAgICAgICAgICAgdmFyIHE7XG4gICAgICAgICAgICAgICAgdmFyIGxvdyA9IGN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgdmFyIGhpZ2ggPSBncm91cFtpbmRleCArIDFdO1xuICAgICAgICAgICAgICAgIHZhciBuZXdQY3Q7XG4gICAgICAgICAgICAgICAgdmFyIHBjdERpZmZlcmVuY2U7XG4gICAgICAgICAgICAgICAgdmFyIHBjdFBvcztcbiAgICAgICAgICAgICAgICB2YXIgdHlwZTtcbiAgICAgICAgICAgICAgICB2YXIgc3RlcHM7XG4gICAgICAgICAgICAgICAgdmFyIHJlYWxTdGVwcztcbiAgICAgICAgICAgICAgICB2YXIgc3RlcFNpemU7XG4gICAgICAgICAgICAgICAgdmFyIGlzU3RlcHMgPSBwaXBzLm1vZGUgPT09IGV4cG9ydHMuUGlwc01vZGUuU3RlcHM7XG4gICAgICAgICAgICAgICAgLy8gV2hlbiB1c2luZyAnc3RlcHMnIG1vZGUsIHVzZSB0aGUgcHJvdmlkZWQgc3RlcHMuXG4gICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlLCB3ZSdsbCBzdGVwIG9uIHRvIHRoZSBuZXh0IHN1YnJhbmdlLlxuICAgICAgICAgICAgICAgIGlmIChpc1N0ZXBzKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0ZXAgPSBzY29wZV9TcGVjdHJ1bS54TnVtU3RlcHNbaW5kZXhdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBEZWZhdWx0IHRvIGEgJ2Z1bGwnIHN0ZXAuXG4gICAgICAgICAgICAgICAgaWYgKCFzdGVwKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0ZXAgPSBoaWdoIC0gbG93O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBJZiBoaWdoIGlzIHVuZGVmaW5lZCB3ZSBhcmUgYXQgdGhlIGxhc3Qgc3VicmFuZ2UuIE1ha2Ugc3VyZSBpdCBpdGVyYXRlcyBvbmNlICgjMTA4OClcbiAgICAgICAgICAgICAgICBpZiAoaGlnaCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGhpZ2ggPSBsb3c7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSBzdGVwIGlzbid0IDAsIHdoaWNoIHdvdWxkIGNhdXNlIGFuIGluZmluaXRlIGxvb3AgKCM2NTQpXG4gICAgICAgICAgICAgICAgc3RlcCA9IE1hdGgubWF4KHN0ZXAsIDAuMDAwMDAwMSk7XG4gICAgICAgICAgICAgICAgLy8gRmluZCBhbGwgc3RlcHMgaW4gdGhlIHN1YnJhbmdlLlxuICAgICAgICAgICAgICAgIGZvciAoaSA9IGxvdzsgaSA8PSBoaWdoOyBpID0gc2FmZUluY3JlbWVudChpLCBzdGVwKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBHZXQgdGhlIHBlcmNlbnRhZ2UgdmFsdWUgZm9yIHRoZSBjdXJyZW50IHN0ZXAsXG4gICAgICAgICAgICAgICAgICAgIC8vIGNhbGN1bGF0ZSB0aGUgc2l6ZSBmb3IgdGhlIHN1YnJhbmdlLlxuICAgICAgICAgICAgICAgICAgICBuZXdQY3QgPSBzY29wZV9TcGVjdHJ1bS50b1N0ZXBwaW5nKGkpO1xuICAgICAgICAgICAgICAgICAgICBwY3REaWZmZXJlbmNlID0gbmV3UGN0IC0gcHJldlBjdDtcbiAgICAgICAgICAgICAgICAgICAgc3RlcHMgPSBwY3REaWZmZXJlbmNlIC8gKHBpcHMuZGVuc2l0eSB8fCAxKTtcbiAgICAgICAgICAgICAgICAgICAgcmVhbFN0ZXBzID0gTWF0aC5yb3VuZChzdGVwcyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgcmF0aW8gcmVwcmVzZW50cyB0aGUgYW1vdW50IG9mIHBlcmNlbnRhZ2Utc3BhY2UgYSBwb2ludCBpbmRpY2F0ZXMuXG4gICAgICAgICAgICAgICAgICAgIC8vIEZvciBhIGRlbnNpdHkgMSB0aGUgcG9pbnRzL3BlcmNlbnRhZ2UgPSAxLiBGb3IgZGVuc2l0eSAyLCB0aGF0IHBlcmNlbnRhZ2UgbmVlZHMgdG8gYmUgcmUtZGl2aWRlZC5cbiAgICAgICAgICAgICAgICAgICAgLy8gUm91bmQgdGhlIHBlcmNlbnRhZ2Ugb2Zmc2V0IHRvIGFuIGV2ZW4gbnVtYmVyLCB0aGVuIGRpdmlkZSBieSB0d29cbiAgICAgICAgICAgICAgICAgICAgLy8gdG8gc3ByZWFkIHRoZSBvZmZzZXQgb24gYm90aCBzaWRlcyBvZiB0aGUgcmFuZ2UuXG4gICAgICAgICAgICAgICAgICAgIHN0ZXBTaXplID0gcGN0RGlmZmVyZW5jZSAvIHJlYWxTdGVwcztcbiAgICAgICAgICAgICAgICAgICAgLy8gRGl2aWRlIGFsbCBwb2ludHMgZXZlbmx5LCBhZGRpbmcgdGhlIGNvcnJlY3QgbnVtYmVyIHRvIHRoaXMgc3VicmFuZ2UuXG4gICAgICAgICAgICAgICAgICAgIC8vIFJ1biB1cCB0byA8PSBzbyB0aGF0IDEwMCUgZ2V0cyBhIHBvaW50LCBldmVudCBpZiBpZ25vcmVMYXN0IGlzIHNldC5cbiAgICAgICAgICAgICAgICAgICAgZm9yIChxID0gMTsgcSA8PSByZWFsU3RlcHM7IHEgKz0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhlIHJhdGlvIGJldHdlZW4gdGhlIHJvdW5kZWQgdmFsdWUgYW5kIHRoZSBhY3R1YWwgc2l6ZSBtaWdodCBiZSB+MSUgb2ZmLlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ29ycmVjdCB0aGUgcGVyY2VudGFnZSBvZmZzZXQgYnkgdGhlIG51bWJlciBvZiBwb2ludHNcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHBlciBzdWJyYW5nZS4gZGVuc2l0eSA9IDEgd2lsbCByZXN1bHQgaW4gMTAwIHBvaW50cyBvbiB0aGVcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZ1bGwgcmFuZ2UsIDIgZm9yIDUwLCA0IGZvciAyNSwgZXRjLlxuICAgICAgICAgICAgICAgICAgICAgICAgcGN0UG9zID0gcHJldlBjdCArIHEgKiBzdGVwU2l6ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4ZXNbcGN0UG9zLnRvRml4ZWQoNSldID0gW3Njb3BlX1NwZWN0cnVtLmZyb21TdGVwcGluZyhwY3RQb3MpLCAwXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBEZXRlcm1pbmUgdGhlIHBvaW50IHR5cGUuXG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPSBncm91cC5pbmRleE9mKGkpID4gLTEgPyBleHBvcnRzLlBpcHNUeXBlLkxhcmdlVmFsdWUgOiBpc1N0ZXBzID8gZXhwb3J0cy5QaXBzVHlwZS5TbWFsbFZhbHVlIDogZXhwb3J0cy5QaXBzVHlwZS5Ob1ZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAvLyBFbmZvcmNlIHRoZSAnaWdub3JlRmlyc3QnIG9wdGlvbiBieSBvdmVyd3JpdGluZyB0aGUgdHlwZSBmb3IgMC5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpbmRleCAmJiBpZ25vcmVGaXJzdCAmJiBpICE9PSBoaWdoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlID0gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoIShpID09PSBoaWdoICYmIGlnbm9yZUxhc3QpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBNYXJrIHRoZSAndHlwZScgb2YgdGhpcyBwb2ludC4gMCA9IHBsYWluLCAxID0gcmVhbCB2YWx1ZSwgMiA9IHN0ZXAgdmFsdWUuXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleGVzW25ld1BjdC50b0ZpeGVkKDUpXSA9IFtpLCB0eXBlXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBVcGRhdGUgdGhlIHBlcmNlbnRhZ2UgY291bnQuXG4gICAgICAgICAgICAgICAgICAgIHByZXZQY3QgPSBuZXdQY3Q7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gaW5kZXhlcztcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBhZGRNYXJraW5nKHNwcmVhZCwgZmlsdGVyRnVuYywgZm9ybWF0dGVyKSB7XG4gICAgICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSBzY29wZV9Eb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgdmFyIHZhbHVlU2l6ZUNsYXNzZXMgPSAoX2EgPSB7fSxcbiAgICAgICAgICAgICAgICBfYVtleHBvcnRzLlBpcHNUeXBlLk5vbmVdID0gXCJcIixcbiAgICAgICAgICAgICAgICBfYVtleHBvcnRzLlBpcHNUeXBlLk5vVmFsdWVdID0gb3B0aW9ucy5jc3NDbGFzc2VzLnZhbHVlTm9ybWFsLFxuICAgICAgICAgICAgICAgIF9hW2V4cG9ydHMuUGlwc1R5cGUuTGFyZ2VWYWx1ZV0gPSBvcHRpb25zLmNzc0NsYXNzZXMudmFsdWVMYXJnZSxcbiAgICAgICAgICAgICAgICBfYVtleHBvcnRzLlBpcHNUeXBlLlNtYWxsVmFsdWVdID0gb3B0aW9ucy5jc3NDbGFzc2VzLnZhbHVlU3ViLFxuICAgICAgICAgICAgICAgIF9hKTtcbiAgICAgICAgICAgIHZhciBtYXJrZXJTaXplQ2xhc3NlcyA9IChfYiA9IHt9LFxuICAgICAgICAgICAgICAgIF9iW2V4cG9ydHMuUGlwc1R5cGUuTm9uZV0gPSBcIlwiLFxuICAgICAgICAgICAgICAgIF9iW2V4cG9ydHMuUGlwc1R5cGUuTm9WYWx1ZV0gPSBvcHRpb25zLmNzc0NsYXNzZXMubWFya2VyTm9ybWFsLFxuICAgICAgICAgICAgICAgIF9iW2V4cG9ydHMuUGlwc1R5cGUuTGFyZ2VWYWx1ZV0gPSBvcHRpb25zLmNzc0NsYXNzZXMubWFya2VyTGFyZ2UsXG4gICAgICAgICAgICAgICAgX2JbZXhwb3J0cy5QaXBzVHlwZS5TbWFsbFZhbHVlXSA9IG9wdGlvbnMuY3NzQ2xhc3Nlcy5tYXJrZXJTdWIsXG4gICAgICAgICAgICAgICAgX2IpO1xuICAgICAgICAgICAgdmFyIHZhbHVlT3JpZW50YXRpb25DbGFzc2VzID0gW29wdGlvbnMuY3NzQ2xhc3Nlcy52YWx1ZUhvcml6b250YWwsIG9wdGlvbnMuY3NzQ2xhc3Nlcy52YWx1ZVZlcnRpY2FsXTtcbiAgICAgICAgICAgIHZhciBtYXJrZXJPcmllbnRhdGlvbkNsYXNzZXMgPSBbb3B0aW9ucy5jc3NDbGFzc2VzLm1hcmtlckhvcml6b250YWwsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5tYXJrZXJWZXJ0aWNhbF07XG4gICAgICAgICAgICBhZGRDbGFzcyhlbGVtZW50LCBvcHRpb25zLmNzc0NsYXNzZXMucGlwcyk7XG4gICAgICAgICAgICBhZGRDbGFzcyhlbGVtZW50LCBvcHRpb25zLm9ydCA9PT0gMCA/IG9wdGlvbnMuY3NzQ2xhc3Nlcy5waXBzSG9yaXpvbnRhbCA6IG9wdGlvbnMuY3NzQ2xhc3Nlcy5waXBzVmVydGljYWwpO1xuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0Q2xhc3Nlcyh0eXBlLCBzb3VyY2UpIHtcbiAgICAgICAgICAgICAgICB2YXIgYSA9IHNvdXJjZSA9PT0gb3B0aW9ucy5jc3NDbGFzc2VzLnZhbHVlO1xuICAgICAgICAgICAgICAgIHZhciBvcmllbnRhdGlvbkNsYXNzZXMgPSBhID8gdmFsdWVPcmllbnRhdGlvbkNsYXNzZXMgOiBtYXJrZXJPcmllbnRhdGlvbkNsYXNzZXM7XG4gICAgICAgICAgICAgICAgdmFyIHNpemVDbGFzc2VzID0gYSA/IHZhbHVlU2l6ZUNsYXNzZXMgOiBtYXJrZXJTaXplQ2xhc3NlcztcbiAgICAgICAgICAgICAgICByZXR1cm4gc291cmNlICsgXCIgXCIgKyBvcmllbnRhdGlvbkNsYXNzZXNbb3B0aW9ucy5vcnRdICsgXCIgXCIgKyBzaXplQ2xhc3Nlc1t0eXBlXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIGFkZFNwcmVhZChvZmZzZXQsIHZhbHVlLCB0eXBlKSB7XG4gICAgICAgICAgICAgICAgLy8gQXBwbHkgdGhlIGZpbHRlciBmdW5jdGlvbiwgaWYgaXQgaXMgc2V0LlxuICAgICAgICAgICAgICAgIHR5cGUgPSBmaWx0ZXJGdW5jID8gZmlsdGVyRnVuYyh2YWx1ZSwgdHlwZSkgOiB0eXBlO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSBleHBvcnRzLlBpcHNUeXBlLk5vbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBBZGQgYSBtYXJrZXIgZm9yIGV2ZXJ5IHBvaW50XG4gICAgICAgICAgICAgICAgdmFyIG5vZGUgPSBhZGROb2RlVG8oZWxlbWVudCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIG5vZGUuY2xhc3NOYW1lID0gZ2V0Q2xhc3Nlcyh0eXBlLCBvcHRpb25zLmNzc0NsYXNzZXMubWFya2VyKTtcbiAgICAgICAgICAgICAgICBub2RlLnN0eWxlW29wdGlvbnMuc3R5bGVdID0gb2Zmc2V0ICsgXCIlXCI7XG4gICAgICAgICAgICAgICAgLy8gVmFsdWVzIGFyZSBvbmx5IGFwcGVuZGVkIGZvciBwb2ludHMgbWFya2VkICcxJyBvciAnMicuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGUgPiBleHBvcnRzLlBpcHNUeXBlLk5vVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZSA9IGFkZE5vZGVUbyhlbGVtZW50LCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuY2xhc3NOYW1lID0gZ2V0Q2xhc3Nlcyh0eXBlLCBvcHRpb25zLmNzc0NsYXNzZXMudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShcImRhdGEtdmFsdWVcIiwgU3RyaW5nKHZhbHVlKSk7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuc3R5bGVbb3B0aW9ucy5zdHlsZV0gPSBvZmZzZXQgKyBcIiVcIjtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5pbm5lckhUTUwgPSBTdHJpbmcoZm9ybWF0dGVyLnRvKHZhbHVlKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQXBwZW5kIGFsbCBwb2ludHMuXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhzcHJlYWQpLmZvckVhY2goZnVuY3Rpb24gKG9mZnNldCkge1xuICAgICAgICAgICAgICAgIGFkZFNwcmVhZChvZmZzZXQsIHNwcmVhZFtvZmZzZXRdWzBdLCBzcHJlYWRbb2Zmc2V0XVsxXSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHJlbW92ZVBpcHMoKSB7XG4gICAgICAgICAgICBpZiAoc2NvcGVfUGlwcykge1xuICAgICAgICAgICAgICAgIHJlbW92ZUVsZW1lbnQoc2NvcGVfUGlwcyk7XG4gICAgICAgICAgICAgICAgc2NvcGVfUGlwcyA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gcGlwcyhwaXBzKSB7XG4gICAgICAgICAgICAvLyBGaXggIzY2OVxuICAgICAgICAgICAgcmVtb3ZlUGlwcygpO1xuICAgICAgICAgICAgdmFyIHNwcmVhZCA9IGdlbmVyYXRlU3ByZWFkKHBpcHMpO1xuICAgICAgICAgICAgdmFyIGZpbHRlciA9IHBpcHMuZmlsdGVyO1xuICAgICAgICAgICAgdmFyIGZvcm1hdCA9IHBpcHMuZm9ybWF0IHx8IHtcbiAgICAgICAgICAgICAgICB0bzogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBTdHJpbmcoTWF0aC5yb3VuZCh2YWx1ZSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBzY29wZV9QaXBzID0gc2NvcGVfVGFyZ2V0LmFwcGVuZENoaWxkKGFkZE1hcmtpbmcoc3ByZWFkLCBmaWx0ZXIsIGZvcm1hdCkpO1xuICAgICAgICAgICAgcmV0dXJuIHNjb3BlX1BpcHM7XG4gICAgICAgIH1cbiAgICAgICAgLy8gU2hvcnRoYW5kIGZvciBiYXNlIGRpbWVuc2lvbnMuXG4gICAgICAgIGZ1bmN0aW9uIGJhc2VTaXplKCkge1xuICAgICAgICAgICAgdmFyIHJlY3QgPSBzY29wZV9CYXNlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgdmFyIGFsdCA9IChcIm9mZnNldFwiICsgW1wiV2lkdGhcIiwgXCJIZWlnaHRcIl1bb3B0aW9ucy5vcnRdKTtcbiAgICAgICAgICAgIHJldHVybiBvcHRpb25zLm9ydCA9PT0gMCA/IHJlY3Qud2lkdGggfHwgc2NvcGVfQmFzZVthbHRdIDogcmVjdC5oZWlnaHQgfHwgc2NvcGVfQmFzZVthbHRdO1xuICAgICAgICB9XG4gICAgICAgIC8vIEhhbmRsZXIgZm9yIGF0dGFjaGluZyBldmVudHMgdHJvdWdoIGEgcHJveHkuXG4gICAgICAgIGZ1bmN0aW9uIGF0dGFjaEV2ZW50KGV2ZW50cywgZWxlbWVudCwgY2FsbGJhY2ssIGRhdGEpIHtcbiAgICAgICAgICAgIC8vIFRoaXMgZnVuY3Rpb24gY2FuIGJlIHVzZWQgdG8gJ2ZpbHRlcicgZXZlbnRzIHRvIHRoZSBzbGlkZXIuXG4gICAgICAgICAgICAvLyBlbGVtZW50IGlzIGEgbm9kZSwgbm90IGEgbm9kZUxpc3RcbiAgICAgICAgICAgIHZhciBtZXRob2QgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICB2YXIgZSA9IGZpeEV2ZW50KGV2ZW50LCBkYXRhLnBhZ2VPZmZzZXQsIGRhdGEudGFyZ2V0IHx8IGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIC8vIGZpeEV2ZW50IHJldHVybnMgZmFsc2UgaWYgdGhpcyBldmVudCBoYXMgYSBkaWZmZXJlbnQgdGFyZ2V0XG4gICAgICAgICAgICAgICAgLy8gd2hlbiBoYW5kbGluZyAobXVsdGktKSB0b3VjaCBldmVudHM7XG4gICAgICAgICAgICAgICAgaWYgKCFlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gZG9Ob3RSZWplY3QgaXMgcGFzc2VkIGJ5IGFsbCBlbmQgZXZlbnRzIHRvIG1ha2Ugc3VyZSByZWxlYXNlZCB0b3VjaGVzXG4gICAgICAgICAgICAgICAgLy8gYXJlIG5vdCByZWplY3RlZCwgbGVhdmluZyB0aGUgc2xpZGVyIFwic3R1Y2tcIiB0byB0aGUgY3Vyc29yO1xuICAgICAgICAgICAgICAgIGlmIChpc1NsaWRlckRpc2FibGVkKCkgJiYgIWRhdGEuZG9Ob3RSZWplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBTdG9wIGlmIGFuIGFjdGl2ZSAndGFwJyB0cmFuc2l0aW9uIGlzIHRha2luZyBwbGFjZS5cbiAgICAgICAgICAgICAgICBpZiAoaGFzQ2xhc3Moc2NvcGVfVGFyZ2V0LCBvcHRpb25zLmNzc0NsYXNzZXMudGFwKSAmJiAhZGF0YS5kb05vdFJlamVjdCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIElnbm9yZSByaWdodCBvciBtaWRkbGUgY2xpY2tzIG9uIHN0YXJ0ICM0NTRcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnRzID09PSBhY3Rpb25zLnN0YXJ0ICYmIGUuYnV0dG9ucyAhPT0gdW5kZWZpbmVkICYmIGUuYnV0dG9ucyA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBJZ25vcmUgcmlnaHQgb3IgbWlkZGxlIGNsaWNrcyBvbiBzdGFydCAjNDU0XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuaG92ZXIgJiYgZS5idXR0b25zKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gJ3N1cHBvcnRzUGFzc2l2ZScgaXMgb25seSB0cnVlIGlmIGEgYnJvd3NlciBhbHNvIHN1cHBvcnRzIHRvdWNoLWFjdGlvbjogbm9uZSBpbiBDU1MuXG4gICAgICAgICAgICAgICAgLy8gaU9TIHNhZmFyaSBkb2VzIG5vdCwgc28gaXQgZG9lc24ndCBnZXQgdG8gYmVuZWZpdCBmcm9tIHBhc3NpdmUgc2Nyb2xsaW5nLiBpT1MgZG9lcyBzdXBwb3J0XG4gICAgICAgICAgICAgICAgLy8gdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb24sIGJ1dCB0aGF0IGFsbG93cyBwYW5uaW5nLCB3aGljaCBicmVha3NcbiAgICAgICAgICAgICAgICAvLyBzbGlkZXJzIGFmdGVyIHpvb21pbmcvb24gbm9uLXJlc3BvbnNpdmUgcGFnZXMuXG4gICAgICAgICAgICAgICAgLy8gU2VlOiBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTMzMTEyXG4gICAgICAgICAgICAgICAgaWYgKCFzdXBwb3J0c1Bhc3NpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlLmNhbGNQb2ludCA9IGUucG9pbnRzW29wdGlvbnMub3J0XTtcbiAgICAgICAgICAgICAgICAvLyBDYWxsIHRoZSBldmVudCBoYW5kbGVyIHdpdGggdGhlIGV2ZW50IFsgYW5kIGFkZGl0aW9uYWwgZGF0YSBdLlxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGUsIGRhdGEpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgbWV0aG9kcyA9IFtdO1xuICAgICAgICAgICAgLy8gQmluZCBhIGNsb3N1cmUgb24gdGhlIHRhcmdldCBmb3IgZXZlcnkgZXZlbnQgdHlwZS5cbiAgICAgICAgICAgIGV2ZW50cy5zcGxpdChcIiBcIikuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnROYW1lKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgbWV0aG9kLCBzdXBwb3J0c1Bhc3NpdmUgPyB7IHBhc3NpdmU6IHRydWUgfSA6IGZhbHNlKTtcbiAgICAgICAgICAgICAgICBtZXRob2RzLnB1c2goW2V2ZW50TmFtZSwgbWV0aG9kXSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBtZXRob2RzO1xuICAgICAgICB9XG4gICAgICAgIC8vIFByb3ZpZGUgYSBjbGVhbiBldmVudCB3aXRoIHN0YW5kYXJkaXplZCBvZmZzZXQgdmFsdWVzLlxuICAgICAgICBmdW5jdGlvbiBmaXhFdmVudChlLCBwYWdlT2Zmc2V0LCBldmVudFRhcmdldCkge1xuICAgICAgICAgICAgLy8gRmlsdGVyIHRoZSBldmVudCB0byByZWdpc3RlciB0aGUgdHlwZSwgd2hpY2ggY2FuIGJlXG4gICAgICAgICAgICAvLyB0b3VjaCwgbW91c2Ugb3IgcG9pbnRlci4gT2Zmc2V0IGNoYW5nZXMgbmVlZCB0byBiZVxuICAgICAgICAgICAgLy8gbWFkZSBvbiBhbiBldmVudCBzcGVjaWZpYyBiYXNpcy5cbiAgICAgICAgICAgIHZhciB0b3VjaCA9IGUudHlwZS5pbmRleE9mKFwidG91Y2hcIikgPT09IDA7XG4gICAgICAgICAgICB2YXIgbW91c2UgPSBlLnR5cGUuaW5kZXhPZihcIm1vdXNlXCIpID09PSAwO1xuICAgICAgICAgICAgdmFyIHBvaW50ZXIgPSBlLnR5cGUuaW5kZXhPZihcInBvaW50ZXJcIikgPT09IDA7XG4gICAgICAgICAgICB2YXIgeCA9IDA7XG4gICAgICAgICAgICB2YXIgeSA9IDA7XG4gICAgICAgICAgICAvLyBJRTEwIGltcGxlbWVudGVkIHBvaW50ZXIgZXZlbnRzIHdpdGggYSBwcmVmaXg7XG4gICAgICAgICAgICBpZiAoZS50eXBlLmluZGV4T2YoXCJNU1BvaW50ZXJcIikgPT09IDApIHtcbiAgICAgICAgICAgICAgICBwb2ludGVyID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEVycm9uZW91cyBldmVudHMgc2VlbSB0byBiZSBwYXNzZWQgaW4gb2NjYXNpb25hbGx5IG9uIGlPUy9pUGFkT1MgYWZ0ZXIgdXNlciBmaW5pc2hlcyBpbnRlcmFjdGluZyB3aXRoXG4gICAgICAgICAgICAvLyB0aGUgc2xpZGVyLiBUaGV5IGFwcGVhciB0byBiZSBvZiB0eXBlIE1vdXNlRXZlbnQsIHlldCB0aGV5IGRvbid0IGhhdmUgdXN1YWwgcHJvcGVydGllcyBzZXQuIElnbm9yZVxuICAgICAgICAgICAgLy8gZXZlbnRzIHRoYXQgaGF2ZSBubyB0b3VjaGVzIG9yIGJ1dHRvbnMgYXNzb2NpYXRlZCB3aXRoIHRoZW0uICgjMTA1NywgIzEwNzksICMxMDk1KVxuICAgICAgICAgICAgaWYgKGUudHlwZSA9PT0gXCJtb3VzZWRvd25cIiAmJiAhZS5idXR0b25zICYmICFlLnRvdWNoZXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBUaGUgb25seSB0aGluZyBvbmUgaGFuZGxlIHNob3VsZCBiZSBjb25jZXJuZWQgYWJvdXQgaXMgdGhlIHRvdWNoZXMgdGhhdCBvcmlnaW5hdGVkIG9uIHRvcCBvZiBpdC5cbiAgICAgICAgICAgIGlmICh0b3VjaCkge1xuICAgICAgICAgICAgICAgIC8vIFJldHVybnMgdHJ1ZSBpZiBhIHRvdWNoIG9yaWdpbmF0ZWQgb24gdGhlIHRhcmdldC5cbiAgICAgICAgICAgICAgICB2YXIgaXNUb3VjaE9uVGFyZ2V0ID0gZnVuY3Rpb24gKGNoZWNrVG91Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IGNoZWNrVG91Y2gudGFyZ2V0O1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKHRhcmdldCA9PT0gZXZlbnRUYXJnZXQgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50VGFyZ2V0LmNvbnRhaW5zKHRhcmdldCkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIChlLmNvbXBvc2VkICYmIGUuY29tcG9zZWRQYXRoKCkuc2hpZnQoKSA9PT0gZXZlbnRUYXJnZXQpKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIC8vIEluIHRoZSBjYXNlIG9mIHRvdWNoc3RhcnQgZXZlbnRzLCB3ZSBuZWVkIHRvIG1ha2Ugc3VyZSB0aGVyZSBpcyBzdGlsbCBubyBtb3JlIHRoYW4gb25lXG4gICAgICAgICAgICAgICAgLy8gdG91Y2ggb24gdGhlIHRhcmdldCBzbyB3ZSBsb29rIGFtb25nc3QgYWxsIHRvdWNoZXMuXG4gICAgICAgICAgICAgICAgaWYgKGUudHlwZSA9PT0gXCJ0b3VjaHN0YXJ0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRhcmdldFRvdWNoZXMgPSBBcnJheS5wcm90b3R5cGUuZmlsdGVyLmNhbGwoZS50b3VjaGVzLCBpc1RvdWNoT25UYXJnZXQpO1xuICAgICAgICAgICAgICAgICAgICAvLyBEbyBub3Qgc3VwcG9ydCBtb3JlIHRoYW4gb25lIHRvdWNoIHBlciBoYW5kbGUuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXRUb3VjaGVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB4ID0gdGFyZ2V0VG91Y2hlc1swXS5wYWdlWDtcbiAgICAgICAgICAgICAgICAgICAgeSA9IHRhcmdldFRvdWNoZXNbMF0ucGFnZVk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBJbiB0aGUgb3RoZXIgY2FzZXMsIGZpbmQgb24gY2hhbmdlZFRvdWNoZXMgaXMgZW5vdWdoLlxuICAgICAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0VG91Y2ggPSBBcnJheS5wcm90b3R5cGUuZmluZC5jYWxsKGUuY2hhbmdlZFRvdWNoZXMsIGlzVG91Y2hPblRhcmdldCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIENhbmNlbCBpZiB0aGUgdGFyZ2V0IHRvdWNoIGhhcyBub3QgbW92ZWQuXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGFyZ2V0VG91Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB4ID0gdGFyZ2V0VG91Y2gucGFnZVg7XG4gICAgICAgICAgICAgICAgICAgIHkgPSB0YXJnZXRUb3VjaC5wYWdlWTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwYWdlT2Zmc2V0ID0gcGFnZU9mZnNldCB8fCBnZXRQYWdlT2Zmc2V0KHNjb3BlX0RvY3VtZW50KTtcbiAgICAgICAgICAgIGlmIChtb3VzZSB8fCBwb2ludGVyKSB7XG4gICAgICAgICAgICAgICAgeCA9IGUuY2xpZW50WCArIHBhZ2VPZmZzZXQueDtcbiAgICAgICAgICAgICAgICB5ID0gZS5jbGllbnRZICsgcGFnZU9mZnNldC55O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZS5wYWdlT2Zmc2V0ID0gcGFnZU9mZnNldDtcbiAgICAgICAgICAgIGUucG9pbnRzID0gW3gsIHldO1xuICAgICAgICAgICAgZS5jdXJzb3IgPSBtb3VzZSB8fCBwb2ludGVyOyAvLyBGaXggIzQzNVxuICAgICAgICAgICAgcmV0dXJuIGU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVHJhbnNsYXRlIGEgY29vcmRpbmF0ZSBpbiB0aGUgZG9jdW1lbnQgdG8gYSBwZXJjZW50YWdlIG9uIHRoZSBzbGlkZXJcbiAgICAgICAgZnVuY3Rpb24gY2FsY1BvaW50VG9QZXJjZW50YWdlKGNhbGNQb2ludCkge1xuICAgICAgICAgICAgdmFyIGxvY2F0aW9uID0gY2FsY1BvaW50IC0gb2Zmc2V0KHNjb3BlX0Jhc2UsIG9wdGlvbnMub3J0KTtcbiAgICAgICAgICAgIHZhciBwcm9wb3NhbCA9IChsb2NhdGlvbiAqIDEwMCkgLyBiYXNlU2l6ZSgpO1xuICAgICAgICAgICAgLy8gQ2xhbXAgcHJvcG9zYWwgYmV0d2VlbiAwJSBhbmQgMTAwJVxuICAgICAgICAgICAgLy8gT3V0LW9mLWJvdW5kIGNvb3JkaW5hdGVzIG1heSBvY2N1ciB3aGVuIC5ub1VpLWJhc2UgcHNldWRvLWVsZW1lbnRzXG4gICAgICAgICAgICAvLyBhcmUgdXNlZCAoZS5nLiBjb250YWluZWQgaGFuZGxlcyBmZWF0dXJlKVxuICAgICAgICAgICAgcHJvcG9zYWwgPSBsaW1pdChwcm9wb3NhbCk7XG4gICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5kaXIgPyAxMDAgLSBwcm9wb3NhbCA6IHByb3Bvc2FsO1xuICAgICAgICB9XG4gICAgICAgIC8vIEZpbmQgaGFuZGxlIGNsb3Nlc3QgdG8gYSBjZXJ0YWluIHBlcmNlbnRhZ2Ugb24gdGhlIHNsaWRlclxuICAgICAgICBmdW5jdGlvbiBnZXRDbG9zZXN0SGFuZGxlKGNsaWNrZWRQb3NpdGlvbikge1xuICAgICAgICAgICAgdmFyIHNtYWxsZXN0RGlmZmVyZW5jZSA9IDEwMDtcbiAgICAgICAgICAgIHZhciBoYW5kbGVOdW1iZXIgPSBmYWxzZTtcbiAgICAgICAgICAgIHNjb3BlX0hhbmRsZXMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlLCBpbmRleCkge1xuICAgICAgICAgICAgICAgIC8vIERpc2FibGVkIGhhbmRsZXMgYXJlIGlnbm9yZWRcbiAgICAgICAgICAgICAgICBpZiAoaXNIYW5kbGVEaXNhYmxlZChpbmRleCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgaGFuZGxlUG9zaXRpb24gPSBzY29wZV9Mb2NhdGlvbnNbaW5kZXhdO1xuICAgICAgICAgICAgICAgIHZhciBkaWZmZXJlbmNlV2l0aFRoaXNIYW5kbGUgPSBNYXRoLmFicyhoYW5kbGVQb3NpdGlvbiAtIGNsaWNrZWRQb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgLy8gSW5pdGlhbCBzdGF0ZVxuICAgICAgICAgICAgICAgIHZhciBjbGlja0F0RWRnZSA9IGRpZmZlcmVuY2VXaXRoVGhpc0hhbmRsZSA9PT0gMTAwICYmIHNtYWxsZXN0RGlmZmVyZW5jZSA9PT0gMTAwO1xuICAgICAgICAgICAgICAgIC8vIERpZmZlcmVuY2Ugd2l0aCB0aGlzIGhhbmRsZSBpcyBzbWFsbGVyIHRoYW4gdGhlIHByZXZpb3VzbHkgY2hlY2tlZCBoYW5kbGVcbiAgICAgICAgICAgICAgICB2YXIgaXNDbG9zZXIgPSBkaWZmZXJlbmNlV2l0aFRoaXNIYW5kbGUgPCBzbWFsbGVzdERpZmZlcmVuY2U7XG4gICAgICAgICAgICAgICAgdmFyIGlzQ2xvc2VyQWZ0ZXIgPSBkaWZmZXJlbmNlV2l0aFRoaXNIYW5kbGUgPD0gc21hbGxlc3REaWZmZXJlbmNlICYmIGNsaWNrZWRQb3NpdGlvbiA+IGhhbmRsZVBvc2l0aW9uO1xuICAgICAgICAgICAgICAgIGlmIChpc0Nsb3NlciB8fCBpc0Nsb3NlckFmdGVyIHx8IGNsaWNrQXRFZGdlKSB7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZU51bWJlciA9IGluZGV4O1xuICAgICAgICAgICAgICAgICAgICBzbWFsbGVzdERpZmZlcmVuY2UgPSBkaWZmZXJlbmNlV2l0aFRoaXNIYW5kbGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gaGFuZGxlTnVtYmVyO1xuICAgICAgICB9XG4gICAgICAgIC8vIEZpcmUgJ2VuZCcgd2hlbiBhIG1vdXNlIG9yIHBlbiBsZWF2ZXMgdGhlIGRvY3VtZW50LlxuICAgICAgICBmdW5jdGlvbiBkb2N1bWVudExlYXZlKGV2ZW50LCBkYXRhKSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQudHlwZSA9PT0gXCJtb3VzZW91dFwiICYmXG4gICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0Lm5vZGVOYW1lID09PSBcIkhUTUxcIiAmJlxuICAgICAgICAgICAgICAgIGV2ZW50LnJlbGF0ZWRUYXJnZXQgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBldmVudEVuZChldmVudCwgZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gSGFuZGxlIG1vdmVtZW50IG9uIGRvY3VtZW50IGZvciBoYW5kbGUgYW5kIHJhbmdlIGRyYWcuXG4gICAgICAgIGZ1bmN0aW9uIGV2ZW50TW92ZShldmVudCwgZGF0YSkge1xuICAgICAgICAgICAgLy8gRml4ICM0OThcbiAgICAgICAgICAgIC8vIENoZWNrIHZhbHVlIG9mIC5idXR0b25zIGluICdzdGFydCcgdG8gd29yayBhcm91bmQgYSBidWcgaW4gSUUxMCBtb2JpbGUgKGRhdGEuYnV0dG9uc1Byb3BlcnR5KS5cbiAgICAgICAgICAgIC8vIGh0dHBzOi8vY29ubmVjdC5taWNyb3NvZnQuY29tL0lFL2ZlZWRiYWNrL2RldGFpbHMvOTI3MDA1L21vYmlsZS1pZTEwLXdpbmRvd3MtcGhvbmUtYnV0dG9ucy1wcm9wZXJ0eS1vZi1wb2ludGVybW92ZS1ldmVudC1hbHdheXMtemVyb1xuICAgICAgICAgICAgLy8gSUU5IGhhcyAuYnV0dG9ucyBhbmQgLndoaWNoIHplcm8gb24gbW91c2Vtb3ZlLlxuICAgICAgICAgICAgLy8gRmlyZWZveCBicmVha3MgdGhlIHNwZWMgTUROIGRlZmluZXMuXG4gICAgICAgICAgICBpZiAobmF2aWdhdG9yLmFwcFZlcnNpb24uaW5kZXhPZihcIk1TSUUgOVwiKSA9PT0gLTEgJiYgZXZlbnQuYnV0dG9ucyA9PT0gMCAmJiBkYXRhLmJ1dHRvbnNQcm9wZXJ0eSAhPT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBldmVudEVuZChldmVudCwgZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBDaGVjayBpZiB3ZSBhcmUgbW92aW5nIHVwIG9yIGRvd25cbiAgICAgICAgICAgIHZhciBtb3ZlbWVudCA9IChvcHRpb25zLmRpciA/IC0xIDogMSkgKiAoZXZlbnQuY2FsY1BvaW50IC0gZGF0YS5zdGFydENhbGNQb2ludCk7XG4gICAgICAgICAgICAvLyBDb252ZXJ0IHRoZSBtb3ZlbWVudCBpbnRvIGEgcGVyY2VudGFnZSBvZiB0aGUgc2xpZGVyIHdpZHRoL2hlaWdodFxuICAgICAgICAgICAgdmFyIHByb3Bvc2FsID0gKG1vdmVtZW50ICogMTAwKSAvIGRhdGEuYmFzZVNpemU7XG4gICAgICAgICAgICBtb3ZlSGFuZGxlcyhtb3ZlbWVudCA+IDAsIHByb3Bvc2FsLCBkYXRhLmxvY2F0aW9ucywgZGF0YS5oYW5kbGVOdW1iZXJzLCBkYXRhLmNvbm5lY3QpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFVuYmluZCBtb3ZlIGV2ZW50cyBvbiBkb2N1bWVudCwgY2FsbCBjYWxsYmFja3MuXG4gICAgICAgIGZ1bmN0aW9uIGV2ZW50RW5kKGV2ZW50LCBkYXRhKSB7XG4gICAgICAgICAgICAvLyBUaGUgaGFuZGxlIGlzIG5vIGxvbmdlciBhY3RpdmUsIHNvIHJlbW92ZSB0aGUgY2xhc3MuXG4gICAgICAgICAgICBpZiAoZGF0YS5oYW5kbGUpIHtcbiAgICAgICAgICAgICAgICByZW1vdmVDbGFzcyhkYXRhLmhhbmRsZSwgb3B0aW9ucy5jc3NDbGFzc2VzLmFjdGl2ZSk7XG4gICAgICAgICAgICAgICAgc2NvcGVfQWN0aXZlSGFuZGxlc0NvdW50IC09IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBVbmJpbmQgdGhlIG1vdmUgYW5kIGVuZCBldmVudHMsIHdoaWNoIGFyZSBhZGRlZCBvbiAnc3RhcnQnLlxuICAgICAgICAgICAgZGF0YS5saXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgICAgIHNjb3BlX0RvY3VtZW50RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGNbMF0sIGNbMV0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoc2NvcGVfQWN0aXZlSGFuZGxlc0NvdW50ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIGRyYWdnaW5nIGNsYXNzLlxuICAgICAgICAgICAgICAgIHJlbW92ZUNsYXNzKHNjb3BlX1RhcmdldCwgb3B0aW9ucy5jc3NDbGFzc2VzLmRyYWcpO1xuICAgICAgICAgICAgICAgIHNldFppbmRleCgpO1xuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBjdXJzb3Igc3R5bGVzIGFuZCB0ZXh0LXNlbGVjdGlvbiBldmVudHMgYm91bmQgdG8gdGhlIGJvZHkuXG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LmN1cnNvcikge1xuICAgICAgICAgICAgICAgICAgICBzY29wZV9Cb2R5LnN0eWxlLmN1cnNvciA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIHNjb3BlX0JvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNlbGVjdHN0YXJ0XCIsIHByZXZlbnREZWZhdWx0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkYXRhLmhhbmRsZU51bWJlcnMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlTnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgZmlyZUV2ZW50KFwiY2hhbmdlXCIsIGhhbmRsZU51bWJlcik7XG4gICAgICAgICAgICAgICAgZmlyZUV2ZW50KFwic2V0XCIsIGhhbmRsZU51bWJlcik7XG4gICAgICAgICAgICAgICAgZmlyZUV2ZW50KFwiZW5kXCIsIGhhbmRsZU51bWJlcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBCaW5kIG1vdmUgZXZlbnRzIG9uIGRvY3VtZW50LlxuICAgICAgICBmdW5jdGlvbiBldmVudFN0YXJ0KGV2ZW50LCBkYXRhKSB7XG4gICAgICAgICAgICAvLyBJZ25vcmUgZXZlbnQgaWYgYW55IGhhbmRsZSBpcyBkaXNhYmxlZFxuICAgICAgICAgICAgaWYgKGRhdGEuaGFuZGxlTnVtYmVycy5zb21lKGlzSGFuZGxlRGlzYWJsZWQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGhhbmRsZTtcbiAgICAgICAgICAgIGlmIChkYXRhLmhhbmRsZU51bWJlcnMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgdmFyIGhhbmRsZU9yaWdpbiA9IHNjb3BlX0hhbmRsZXNbZGF0YS5oYW5kbGVOdW1iZXJzWzBdXTtcbiAgICAgICAgICAgICAgICBoYW5kbGUgPSBoYW5kbGVPcmlnaW4uY2hpbGRyZW5bMF07XG4gICAgICAgICAgICAgICAgc2NvcGVfQWN0aXZlSGFuZGxlc0NvdW50ICs9IDE7XG4gICAgICAgICAgICAgICAgLy8gTWFyayB0aGUgaGFuZGxlIGFzICdhY3RpdmUnIHNvIGl0IGNhbiBiZSBzdHlsZWQuXG4gICAgICAgICAgICAgICAgYWRkQ2xhc3MoaGFuZGxlLCBvcHRpb25zLmNzc0NsYXNzZXMuYWN0aXZlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEEgZHJhZyBzaG91bGQgbmV2ZXIgcHJvcGFnYXRlIHVwIHRvIHRoZSAndGFwJyBldmVudC5cbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgLy8gUmVjb3JkIHRoZSBldmVudCBsaXN0ZW5lcnMuXG4gICAgICAgICAgICB2YXIgbGlzdGVuZXJzID0gW107XG4gICAgICAgICAgICAvLyBBdHRhY2ggdGhlIG1vdmUgYW5kIGVuZCBldmVudHMuXG4gICAgICAgICAgICB2YXIgbW92ZUV2ZW50ID0gYXR0YWNoRXZlbnQoYWN0aW9ucy5tb3ZlLCBzY29wZV9Eb2N1bWVudEVsZW1lbnQsIGV2ZW50TW92ZSwge1xuICAgICAgICAgICAgICAgIC8vIFRoZSBldmVudCB0YXJnZXQgaGFzIGNoYW5nZWQgc28gd2UgbmVlZCB0byBwcm9wYWdhdGUgdGhlIG9yaWdpbmFsIG9uZSBzbyB0aGF0IHdlIGtlZXBcbiAgICAgICAgICAgICAgICAvLyByZWx5aW5nIG9uIGl0IHRvIGV4dHJhY3QgdGFyZ2V0IHRvdWNoZXMuXG4gICAgICAgICAgICAgICAgdGFyZ2V0OiBldmVudC50YXJnZXQsXG4gICAgICAgICAgICAgICAgaGFuZGxlOiBoYW5kbGUsXG4gICAgICAgICAgICAgICAgY29ubmVjdDogZGF0YS5jb25uZWN0LFxuICAgICAgICAgICAgICAgIGxpc3RlbmVyczogbGlzdGVuZXJzLFxuICAgICAgICAgICAgICAgIHN0YXJ0Q2FsY1BvaW50OiBldmVudC5jYWxjUG9pbnQsXG4gICAgICAgICAgICAgICAgYmFzZVNpemU6IGJhc2VTaXplKCksXG4gICAgICAgICAgICAgICAgcGFnZU9mZnNldDogZXZlbnQucGFnZU9mZnNldCxcbiAgICAgICAgICAgICAgICBoYW5kbGVOdW1iZXJzOiBkYXRhLmhhbmRsZU51bWJlcnMsXG4gICAgICAgICAgICAgICAgYnV0dG9uc1Byb3BlcnR5OiBldmVudC5idXR0b25zLFxuICAgICAgICAgICAgICAgIGxvY2F0aW9uczogc2NvcGVfTG9jYXRpb25zLnNsaWNlKClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFyIGVuZEV2ZW50ID0gYXR0YWNoRXZlbnQoYWN0aW9ucy5lbmQsIHNjb3BlX0RvY3VtZW50RWxlbWVudCwgZXZlbnRFbmQsIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IGV2ZW50LnRhcmdldCxcbiAgICAgICAgICAgICAgICBoYW5kbGU6IGhhbmRsZSxcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcnM6IGxpc3RlbmVycyxcbiAgICAgICAgICAgICAgICBkb05vdFJlamVjdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBoYW5kbGVOdW1iZXJzOiBkYXRhLmhhbmRsZU51bWJlcnNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFyIG91dEV2ZW50ID0gYXR0YWNoRXZlbnQoXCJtb3VzZW91dFwiLCBzY29wZV9Eb2N1bWVudEVsZW1lbnQsIGRvY3VtZW50TGVhdmUsIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IGV2ZW50LnRhcmdldCxcbiAgICAgICAgICAgICAgICBoYW5kbGU6IGhhbmRsZSxcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcnM6IGxpc3RlbmVycyxcbiAgICAgICAgICAgICAgICBkb05vdFJlamVjdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBoYW5kbGVOdW1iZXJzOiBkYXRhLmhhbmRsZU51bWJlcnNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gV2Ugd2FudCB0byBtYWtlIHN1cmUgd2UgcHVzaGVkIHRoZSBsaXN0ZW5lcnMgaW4gdGhlIGxpc3RlbmVyIGxpc3QgcmF0aGVyIHRoYW4gY3JlYXRpbmdcbiAgICAgICAgICAgIC8vIGEgbmV3IG9uZSBhcyBpdCBoYXMgYWxyZWFkeSBiZWVuIHBhc3NlZCB0byB0aGUgZXZlbnQgaGFuZGxlcnMuXG4gICAgICAgICAgICBsaXN0ZW5lcnMucHVzaC5hcHBseShsaXN0ZW5lcnMsIG1vdmVFdmVudC5jb25jYXQoZW5kRXZlbnQsIG91dEV2ZW50KSk7XG4gICAgICAgICAgICAvLyBUZXh0IHNlbGVjdGlvbiBpc24ndCBhbiBpc3N1ZSBvbiB0b3VjaCBkZXZpY2VzLFxuICAgICAgICAgICAgLy8gc28gYWRkaW5nIGN1cnNvciBzdHlsZXMgY2FuIGJlIHNraXBwZWQuXG4gICAgICAgICAgICBpZiAoZXZlbnQuY3Vyc29yKSB7XG4gICAgICAgICAgICAgICAgLy8gUHJldmVudCB0aGUgJ0knIGN1cnNvciBhbmQgZXh0ZW5kIHRoZSByYW5nZS1kcmFnIGN1cnNvci5cbiAgICAgICAgICAgICAgICBzY29wZV9Cb2R5LnN0eWxlLmN1cnNvciA9IGdldENvbXB1dGVkU3R5bGUoZXZlbnQudGFyZ2V0KS5jdXJzb3I7XG4gICAgICAgICAgICAgICAgLy8gTWFyayB0aGUgdGFyZ2V0IHdpdGggYSBkcmFnZ2luZyBzdGF0ZS5cbiAgICAgICAgICAgICAgICBpZiAoc2NvcGVfSGFuZGxlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGFkZENsYXNzKHNjb3BlX1RhcmdldCwgb3B0aW9ucy5jc3NDbGFzc2VzLmRyYWcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBQcmV2ZW50IHRleHQgc2VsZWN0aW9uIHdoZW4gZHJhZ2dpbmcgdGhlIGhhbmRsZXMuXG4gICAgICAgICAgICAgICAgLy8gSW4gbm9VaVNsaWRlciA8PSA5LjIuMCwgdGhpcyB3YXMgaGFuZGxlZCBieSBjYWxsaW5nIHByZXZlbnREZWZhdWx0IG9uIG1vdXNlL3RvdWNoIHN0YXJ0L21vdmUsXG4gICAgICAgICAgICAgICAgLy8gd2hpY2ggaXMgc2Nyb2xsIGJsb2NraW5nLiBUaGUgc2VsZWN0c3RhcnQgZXZlbnQgaXMgc3VwcG9ydGVkIGJ5IEZpcmVGb3ggc3RhcnRpbmcgZnJvbSB2ZXJzaW9uIDUyLFxuICAgICAgICAgICAgICAgIC8vIG1lYW5pbmcgdGhlIG9ubHkgaG9sZG91dCBpcyBpT1MgU2FmYXJpLiBUaGlzIGRvZXNuJ3QgbWF0dGVyOiB0ZXh0IHNlbGVjdGlvbiBpc24ndCB0cmlnZ2VyZWQgdGhlcmUuXG4gICAgICAgICAgICAgICAgLy8gVGhlICdjdXJzb3InIGZsYWcgaXMgZmFsc2UuXG4gICAgICAgICAgICAgICAgLy8gU2VlOiBodHRwOi8vY2FuaXVzZS5jb20vI3NlYXJjaD1zZWxlY3RzdGFydFxuICAgICAgICAgICAgICAgIHNjb3BlX0JvZHkuYWRkRXZlbnRMaXN0ZW5lcihcInNlbGVjdHN0YXJ0XCIsIHByZXZlbnREZWZhdWx0LCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkYXRhLmhhbmRsZU51bWJlcnMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlTnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgZmlyZUV2ZW50KFwic3RhcnRcIiwgaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIE1vdmUgY2xvc2VzdCBoYW5kbGUgdG8gdGFwcGVkIGxvY2F0aW9uLlxuICAgICAgICBmdW5jdGlvbiBldmVudFRhcChldmVudCkge1xuICAgICAgICAgICAgLy8gVGhlIHRhcCBldmVudCBzaG91bGRuJ3QgcHJvcGFnYXRlIHVwXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIHZhciBwcm9wb3NhbCA9IGNhbGNQb2ludFRvUGVyY2VudGFnZShldmVudC5jYWxjUG9pbnQpO1xuICAgICAgICAgICAgdmFyIGhhbmRsZU51bWJlciA9IGdldENsb3Nlc3RIYW5kbGUocHJvcG9zYWwpO1xuICAgICAgICAgICAgLy8gVGFja2xlIHRoZSBjYXNlIHRoYXQgYWxsIGhhbmRsZXMgYXJlICdkaXNhYmxlZCcuXG4gICAgICAgICAgICBpZiAoaGFuZGxlTnVtYmVyID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEZsYWcgdGhlIHNsaWRlciBhcyBpdCBpcyBub3cgaW4gYSB0cmFuc2l0aW9uYWwgc3RhdGUuXG4gICAgICAgICAgICAvLyBUcmFuc2l0aW9uIHRha2VzIGEgY29uZmlndXJhYmxlIGFtb3VudCBvZiBtcyAoZGVmYXVsdCAzMDApLiBSZS1lbmFibGUgdGhlIHNsaWRlciBhZnRlciB0aGF0LlxuICAgICAgICAgICAgaWYgKCFvcHRpb25zLmV2ZW50cy5zbmFwKSB7XG4gICAgICAgICAgICAgICAgYWRkQ2xhc3NGb3Ioc2NvcGVfVGFyZ2V0LCBvcHRpb25zLmNzc0NsYXNzZXMudGFwLCBvcHRpb25zLmFuaW1hdGlvbkR1cmF0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldEhhbmRsZShoYW5kbGVOdW1iZXIsIHByb3Bvc2FsLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgICAgIHNldFppbmRleCgpO1xuICAgICAgICAgICAgZmlyZUV2ZW50KFwic2xpZGVcIiwgaGFuZGxlTnVtYmVyLCB0cnVlKTtcbiAgICAgICAgICAgIGZpcmVFdmVudChcInVwZGF0ZVwiLCBoYW5kbGVOdW1iZXIsIHRydWUpO1xuICAgICAgICAgICAgaWYgKCFvcHRpb25zLmV2ZW50cy5zbmFwKSB7XG4gICAgICAgICAgICAgICAgZmlyZUV2ZW50KFwiY2hhbmdlXCIsIGhhbmRsZU51bWJlciwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgZmlyZUV2ZW50KFwic2V0XCIsIGhhbmRsZU51bWJlciwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBldmVudFN0YXJ0KGV2ZW50LCB7IGhhbmRsZU51bWJlcnM6IFtoYW5kbGVOdW1iZXJdIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIEZpcmVzIGEgJ2hvdmVyJyBldmVudCBmb3IgYSBob3ZlcmVkIG1vdXNlL3BlbiBwb3NpdGlvbi5cbiAgICAgICAgZnVuY3Rpb24gZXZlbnRIb3ZlcihldmVudCkge1xuICAgICAgICAgICAgdmFyIHByb3Bvc2FsID0gY2FsY1BvaW50VG9QZXJjZW50YWdlKGV2ZW50LmNhbGNQb2ludCk7XG4gICAgICAgICAgICB2YXIgdG8gPSBzY29wZV9TcGVjdHJ1bS5nZXRTdGVwKHByb3Bvc2FsKTtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHNjb3BlX1NwZWN0cnVtLmZyb21TdGVwcGluZyh0byk7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhzY29wZV9FdmVudHMpLmZvckVhY2goZnVuY3Rpb24gKHRhcmdldEV2ZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKFwiaG92ZXJcIiA9PT0gdGFyZ2V0RXZlbnQuc3BsaXQoXCIuXCIpWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgIHNjb3BlX0V2ZW50c1t0YXJnZXRFdmVudF0uZm9yRWFjaChmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoc2NvcGVfU2VsZiwgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBIYW5kbGVzIGtleWRvd24gb24gZm9jdXNlZCBoYW5kbGVzXG4gICAgICAgIC8vIERvbid0IG1vdmUgdGhlIGRvY3VtZW50IHdoZW4gcHJlc3NpbmcgYXJyb3cga2V5cyBvbiBmb2N1c2VkIGhhbmRsZXNcbiAgICAgICAgZnVuY3Rpb24gZXZlbnRLZXlkb3duKGV2ZW50LCBoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgICAgIGlmIChpc1NsaWRlckRpc2FibGVkKCkgfHwgaXNIYW5kbGVEaXNhYmxlZChoYW5kbGVOdW1iZXIpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGhvcml6b250YWxLZXlzID0gW1wiTGVmdFwiLCBcIlJpZ2h0XCJdO1xuICAgICAgICAgICAgdmFyIHZlcnRpY2FsS2V5cyA9IFtcIkRvd25cIiwgXCJVcFwiXTtcbiAgICAgICAgICAgIHZhciBsYXJnZVN0ZXBLZXlzID0gW1wiUGFnZURvd25cIiwgXCJQYWdlVXBcIl07XG4gICAgICAgICAgICB2YXIgZWRnZUtleXMgPSBbXCJIb21lXCIsIFwiRW5kXCJdO1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMuZGlyICYmICFvcHRpb25zLm9ydCkge1xuICAgICAgICAgICAgICAgIC8vIE9uIGFuIHJpZ2h0LXRvLWxlZnQgc2xpZGVyLCB0aGUgbGVmdCBhbmQgcmlnaHQga2V5cyBhY3QgaW52ZXJ0ZWRcbiAgICAgICAgICAgICAgICBob3Jpem9udGFsS2V5cy5yZXZlcnNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChvcHRpb25zLm9ydCAmJiAhb3B0aW9ucy5kaXIpIHtcbiAgICAgICAgICAgICAgICAvLyBPbiBhIHRvcC10by1ib3R0b20gc2xpZGVyLCB0aGUgdXAgYW5kIGRvd24ga2V5cyBhY3QgaW52ZXJ0ZWRcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbEtleXMucmV2ZXJzZSgpO1xuICAgICAgICAgICAgICAgIGxhcmdlU3RlcEtleXMucmV2ZXJzZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gU3RyaXAgXCJBcnJvd1wiIGZvciBJRSBjb21wYXRpYmlsaXR5LiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvS2V5Ym9hcmRFdmVudC9rZXlcbiAgICAgICAgICAgIHZhciBrZXkgPSBldmVudC5rZXkucmVwbGFjZShcIkFycm93XCIsIFwiXCIpO1xuICAgICAgICAgICAgdmFyIGlzTGFyZ2VEb3duID0ga2V5ID09PSBsYXJnZVN0ZXBLZXlzWzBdO1xuICAgICAgICAgICAgdmFyIGlzTGFyZ2VVcCA9IGtleSA9PT0gbGFyZ2VTdGVwS2V5c1sxXTtcbiAgICAgICAgICAgIHZhciBpc0Rvd24gPSBrZXkgPT09IHZlcnRpY2FsS2V5c1swXSB8fCBrZXkgPT09IGhvcml6b250YWxLZXlzWzBdIHx8IGlzTGFyZ2VEb3duO1xuICAgICAgICAgICAgdmFyIGlzVXAgPSBrZXkgPT09IHZlcnRpY2FsS2V5c1sxXSB8fCBrZXkgPT09IGhvcml6b250YWxLZXlzWzFdIHx8IGlzTGFyZ2VVcDtcbiAgICAgICAgICAgIHZhciBpc01pbiA9IGtleSA9PT0gZWRnZUtleXNbMF07XG4gICAgICAgICAgICB2YXIgaXNNYXggPSBrZXkgPT09IGVkZ2VLZXlzWzFdO1xuICAgICAgICAgICAgaWYgKCFpc0Rvd24gJiYgIWlzVXAgJiYgIWlzTWluICYmICFpc01heCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHZhciB0bztcbiAgICAgICAgICAgIGlmIChpc1VwIHx8IGlzRG93bikge1xuICAgICAgICAgICAgICAgIHZhciBkaXJlY3Rpb24gPSBpc0Rvd24gPyAwIDogMTtcbiAgICAgICAgICAgICAgICB2YXIgc3RlcHMgPSBnZXROZXh0U3RlcHNGb3JIYW5kbGUoaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgICAgICB2YXIgc3RlcCA9IHN0ZXBzW2RpcmVjdGlvbl07XG4gICAgICAgICAgICAgICAgLy8gQXQgdGhlIGVkZ2Ugb2YgYSBzbGlkZXIsIGRvIG5vdGhpbmdcbiAgICAgICAgICAgICAgICBpZiAoc3RlcCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIE5vIHN0ZXAgc2V0LCB1c2UgdGhlIGRlZmF1bHQgb2YgMTAlIG9mIHRoZSBzdWItcmFuZ2VcbiAgICAgICAgICAgICAgICBpZiAoc3RlcCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RlcCA9IHNjb3BlX1NwZWN0cnVtLmdldERlZmF1bHRTdGVwKHNjb3BlX0xvY2F0aW9uc1toYW5kbGVOdW1iZXJdLCBpc0Rvd24sIG9wdGlvbnMua2V5Ym9hcmREZWZhdWx0U3RlcCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChpc0xhcmdlVXAgfHwgaXNMYXJnZURvd24pIHtcbiAgICAgICAgICAgICAgICAgICAgc3RlcCAqPSBvcHRpb25zLmtleWJvYXJkUGFnZU11bHRpcGxpZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzdGVwICo9IG9wdGlvbnMua2V5Ym9hcmRNdWx0aXBsaWVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBTdGVwIG92ZXIgemVyby1sZW5ndGggcmFuZ2VzICgjOTQ4KTtcbiAgICAgICAgICAgICAgICBzdGVwID0gTWF0aC5tYXgoc3RlcCwgMC4wMDAwMDAxKTtcbiAgICAgICAgICAgICAgICAvLyBEZWNyZW1lbnQgZm9yIGRvd24gc3RlcHNcbiAgICAgICAgICAgICAgICBzdGVwID0gKGlzRG93biA/IC0xIDogMSkgKiBzdGVwO1xuICAgICAgICAgICAgICAgIHRvID0gc2NvcGVfVmFsdWVzW2hhbmRsZU51bWJlcl0gKyBzdGVwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoaXNNYXgpIHtcbiAgICAgICAgICAgICAgICAvLyBFbmQga2V5XG4gICAgICAgICAgICAgICAgdG8gPSBvcHRpb25zLnNwZWN0cnVtLnhWYWxbb3B0aW9ucy5zcGVjdHJ1bS54VmFsLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gSG9tZSBrZXlcbiAgICAgICAgICAgICAgICB0byA9IG9wdGlvbnMuc3BlY3RydW0ueFZhbFswXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldEhhbmRsZShoYW5kbGVOdW1iZXIsIHNjb3BlX1NwZWN0cnVtLnRvU3RlcHBpbmcodG8pLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgICAgIGZpcmVFdmVudChcInNsaWRlXCIsIGhhbmRsZU51bWJlcik7XG4gICAgICAgICAgICBmaXJlRXZlbnQoXCJ1cGRhdGVcIiwgaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgIGZpcmVFdmVudChcImNoYW5nZVwiLCBoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgZmlyZUV2ZW50KFwic2V0XCIsIGhhbmRsZU51bWJlcik7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQXR0YWNoIGV2ZW50cyB0byBzZXZlcmFsIHNsaWRlciBwYXJ0cy5cbiAgICAgICAgZnVuY3Rpb24gYmluZFNsaWRlckV2ZW50cyhiZWhhdmlvdXIpIHtcbiAgICAgICAgICAgIC8vIEF0dGFjaCB0aGUgc3RhbmRhcmQgZHJhZyBldmVudCB0byB0aGUgaGFuZGxlcy5cbiAgICAgICAgICAgIGlmICghYmVoYXZpb3VyLmZpeGVkKSB7XG4gICAgICAgICAgICAgICAgc2NvcGVfSGFuZGxlcy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGUsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRoZXNlIGV2ZW50cyBhcmUgb25seSBib3VuZCB0byB0aGUgdmlzdWFsIGhhbmRsZVxuICAgICAgICAgICAgICAgICAgICAvLyBlbGVtZW50LCBub3QgdGhlICdyZWFsJyBvcmlnaW4gZWxlbWVudC5cbiAgICAgICAgICAgICAgICAgICAgYXR0YWNoRXZlbnQoYWN0aW9ucy5zdGFydCwgaGFuZGxlLmNoaWxkcmVuWzBdLCBldmVudFN0YXJ0LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVOdW1iZXJzOiBbaW5kZXhdXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQXR0YWNoIHRoZSB0YXAgZXZlbnQgdG8gdGhlIHNsaWRlciBiYXNlLlxuICAgICAgICAgICAgaWYgKGJlaGF2aW91ci50YXApIHtcbiAgICAgICAgICAgICAgICBhdHRhY2hFdmVudChhY3Rpb25zLnN0YXJ0LCBzY29wZV9CYXNlLCBldmVudFRhcCwge30pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gRmlyZSBob3ZlciBldmVudHNcbiAgICAgICAgICAgIGlmIChiZWhhdmlvdXIuaG92ZXIpIHtcbiAgICAgICAgICAgICAgICBhdHRhY2hFdmVudChhY3Rpb25zLm1vdmUsIHNjb3BlX0Jhc2UsIGV2ZW50SG92ZXIsIHtcbiAgICAgICAgICAgICAgICAgICAgaG92ZXI6IHRydWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIE1ha2UgdGhlIHJhbmdlIGRyYWdnYWJsZS5cbiAgICAgICAgICAgIGlmIChiZWhhdmlvdXIuZHJhZykge1xuICAgICAgICAgICAgICAgIHNjb3BlX0Nvbm5lY3RzLmZvckVhY2goZnVuY3Rpb24gKGNvbm5lY3QsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb25uZWN0ID09PSBmYWxzZSB8fCBpbmRleCA9PT0gMCB8fCBpbmRleCA9PT0gc2NvcGVfQ29ubmVjdHMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciBoYW5kbGVCZWZvcmUgPSBzY29wZV9IYW5kbGVzW2luZGV4IC0gMV07XG4gICAgICAgICAgICAgICAgICAgIHZhciBoYW5kbGVBZnRlciA9IHNjb3BlX0hhbmRsZXNbaW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZXZlbnRIb2xkZXJzID0gW2Nvbm5lY3RdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgaGFuZGxlc1RvRHJhZyA9IFtoYW5kbGVCZWZvcmUsIGhhbmRsZUFmdGVyXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGhhbmRsZU51bWJlcnNUb0RyYWcgPSBbaW5kZXggLSAxLCBpbmRleF07XG4gICAgICAgICAgICAgICAgICAgIGFkZENsYXNzKGNvbm5lY3QsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5kcmFnZ2FibGUpO1xuICAgICAgICAgICAgICAgICAgICAvLyBXaGVuIHRoZSByYW5nZSBpcyBmaXhlZCwgdGhlIGVudGlyZSByYW5nZSBjYW5cbiAgICAgICAgICAgICAgICAgICAgLy8gYmUgZHJhZ2dlZCBieSB0aGUgaGFuZGxlcy4gVGhlIGhhbmRsZSBpbiB0aGUgZmlyc3RcbiAgICAgICAgICAgICAgICAgICAgLy8gb3JpZ2luIHdpbGwgcHJvcGFnYXRlIHRoZSBzdGFydCBldmVudCB1cHdhcmQsXG4gICAgICAgICAgICAgICAgICAgIC8vIGJ1dCBpdCBuZWVkcyB0byBiZSBib3VuZCBtYW51YWxseSBvbiB0aGUgb3RoZXIuXG4gICAgICAgICAgICAgICAgICAgIGlmIChiZWhhdmlvdXIuZml4ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50SG9sZGVycy5wdXNoKGhhbmRsZUJlZm9yZS5jaGlsZHJlblswXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudEhvbGRlcnMucHVzaChoYW5kbGVBZnRlci5jaGlsZHJlblswXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGJlaGF2aW91ci5kcmFnQWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVzVG9EcmFnID0gc2NvcGVfSGFuZGxlcztcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZU51bWJlcnNUb0RyYWcgPSBzY29wZV9IYW5kbGVOdW1iZXJzO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50SG9sZGVycy5mb3JFYWNoKGZ1bmN0aW9uIChldmVudEhvbGRlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0YWNoRXZlbnQoYWN0aW9ucy5zdGFydCwgZXZlbnRIb2xkZXIsIGV2ZW50U3RhcnQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVzOiBoYW5kbGVzVG9EcmFnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZU51bWJlcnM6IGhhbmRsZU51bWJlcnNUb0RyYWcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29ubmVjdDogY29ubmVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIEF0dGFjaCBhbiBldmVudCB0byB0aGlzIHNsaWRlciwgcG9zc2libHkgaW5jbHVkaW5nIGEgbmFtZXNwYWNlXG4gICAgICAgIGZ1bmN0aW9uIGJpbmRFdmVudChuYW1lc3BhY2VkRXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBzY29wZV9FdmVudHNbbmFtZXNwYWNlZEV2ZW50XSA9IHNjb3BlX0V2ZW50c1tuYW1lc3BhY2VkRXZlbnRdIHx8IFtdO1xuICAgICAgICAgICAgc2NvcGVfRXZlbnRzW25hbWVzcGFjZWRFdmVudF0ucHVzaChjYWxsYmFjayk7XG4gICAgICAgICAgICAvLyBJZiB0aGUgZXZlbnQgYm91bmQgaXMgJ3VwZGF0ZSwnIGZpcmUgaXQgaW1tZWRpYXRlbHkgZm9yIGFsbCBoYW5kbGVzLlxuICAgICAgICAgICAgaWYgKG5hbWVzcGFjZWRFdmVudC5zcGxpdChcIi5cIilbMF0gPT09IFwidXBkYXRlXCIpIHtcbiAgICAgICAgICAgICAgICBzY29wZV9IYW5kbGVzLmZvckVhY2goZnVuY3Rpb24gKGEsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIGZpcmVFdmVudChcInVwZGF0ZVwiLCBpbmRleCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gaXNJbnRlcm5hbE5hbWVzcGFjZShuYW1lc3BhY2UpIHtcbiAgICAgICAgICAgIHJldHVybiBuYW1lc3BhY2UgPT09IElOVEVSTkFMX0VWRU5UX05TLmFyaWEgfHwgbmFtZXNwYWNlID09PSBJTlRFUk5BTF9FVkVOVF9OUy50b29sdGlwcztcbiAgICAgICAgfVxuICAgICAgICAvLyBVbmRvIGF0dGFjaG1lbnQgb2YgZXZlbnRcbiAgICAgICAgZnVuY3Rpb24gcmVtb3ZlRXZlbnQobmFtZXNwYWNlZEV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgZXZlbnQgPSBuYW1lc3BhY2VkRXZlbnQgJiYgbmFtZXNwYWNlZEV2ZW50LnNwbGl0KFwiLlwiKVswXTtcbiAgICAgICAgICAgIHZhciBuYW1lc3BhY2UgPSBldmVudCA/IG5hbWVzcGFjZWRFdmVudC5zdWJzdHJpbmcoZXZlbnQubGVuZ3RoKSA6IG5hbWVzcGFjZWRFdmVudDtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHNjb3BlX0V2ZW50cykuZm9yRWFjaChmdW5jdGlvbiAoYmluZCkge1xuICAgICAgICAgICAgICAgIHZhciB0RXZlbnQgPSBiaW5kLnNwbGl0KFwiLlwiKVswXTtcbiAgICAgICAgICAgICAgICB2YXIgdE5hbWVzcGFjZSA9IGJpbmQuc3Vic3RyaW5nKHRFdmVudC5sZW5ndGgpO1xuICAgICAgICAgICAgICAgIGlmICgoIWV2ZW50IHx8IGV2ZW50ID09PSB0RXZlbnQpICYmICghbmFtZXNwYWNlIHx8IG5hbWVzcGFjZSA9PT0gdE5hbWVzcGFjZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gb25seSBkZWxldGUgcHJvdGVjdGVkIGludGVybmFsIGV2ZW50IGlmIGludGVudGlvbmFsXG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNJbnRlcm5hbE5hbWVzcGFjZSh0TmFtZXNwYWNlKSB8fCBuYW1lc3BhY2UgPT09IHROYW1lc3BhY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBzY29wZV9FdmVudHNbYmluZF07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBFeHRlcm5hbCBldmVudCBoYW5kbGluZ1xuICAgICAgICBmdW5jdGlvbiBmaXJlRXZlbnQoZXZlbnROYW1lLCBoYW5kbGVOdW1iZXIsIHRhcCkge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoc2NvcGVfRXZlbnRzKS5mb3JFYWNoKGZ1bmN0aW9uICh0YXJnZXRFdmVudCkge1xuICAgICAgICAgICAgICAgIHZhciBldmVudFR5cGUgPSB0YXJnZXRFdmVudC5zcGxpdChcIi5cIilbMF07XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50TmFtZSA9PT0gZXZlbnRUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIHNjb3BlX0V2ZW50c1t0YXJnZXRFdmVudF0uZm9yRWFjaChmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBVc2UgdGhlIHNsaWRlciBwdWJsaWMgQVBJIGFzIHRoZSBzY29wZSAoJ3RoaXMnKVxuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGVfU2VsZiwgXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBSZXR1cm4gdmFsdWVzIGFzIGFycmF5LCBzbyBhcmdfMVthcmdfMl0gaXMgYWx3YXlzIHZhbGlkLlxuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGVfVmFsdWVzLm1hcChvcHRpb25zLmZvcm1hdC50byksIFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSGFuZGxlIGluZGV4LCAwIG9yIDFcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZU51bWJlciwgXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBVbi1mb3JtYXR0ZWQgc2xpZGVyIHZhbHVlc1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGVfVmFsdWVzLnNsaWNlKCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRXZlbnQgaXMgZmlyZWQgYnkgdGFwLCB0cnVlIG9yIGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXAgfHwgZmFsc2UsIFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTGVmdCBvZmZzZXQgb2YgdGhlIGhhbmRsZSwgaW4gcmVsYXRpb24gdG8gdGhlIHNsaWRlclxuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGVfTG9jYXRpb25zLnNsaWNlKCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYWRkIHRoZSBzbGlkZXIgcHVibGljIEFQSSB0byBhbiBhY2Nlc3NpYmxlIHBhcmFtZXRlciB3aGVuIHRoaXMgaXMgdW5hdmFpbGFibGVcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlX1NlbGYpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBTcGxpdCBvdXQgdGhlIGhhbmRsZSBwb3NpdGlvbmluZyBsb2dpYyBzbyB0aGUgTW92ZSBldmVudCBjYW4gdXNlIGl0LCB0b29cbiAgICAgICAgZnVuY3Rpb24gY2hlY2tIYW5kbGVQb3NpdGlvbihyZWZlcmVuY2UsIGhhbmRsZU51bWJlciwgdG8sIGxvb2tCYWNrd2FyZCwgbG9va0ZvcndhcmQsIGdldFZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgZGlzdGFuY2U7XG4gICAgICAgICAgICAvLyBGb3Igc2xpZGVycyB3aXRoIG11bHRpcGxlIGhhbmRsZXMsIGxpbWl0IG1vdmVtZW50IHRvIHRoZSBvdGhlciBoYW5kbGUuXG4gICAgICAgICAgICAvLyBBcHBseSB0aGUgbWFyZ2luIG9wdGlvbiBieSBhZGRpbmcgaXQgdG8gdGhlIGhhbmRsZSBwb3NpdGlvbnMuXG4gICAgICAgICAgICBpZiAoc2NvcGVfSGFuZGxlcy5sZW5ndGggPiAxICYmICFvcHRpb25zLmV2ZW50cy51bmNvbnN0cmFpbmVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKGxvb2tCYWNrd2FyZCAmJiBoYW5kbGVOdW1iZXIgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlID0gc2NvcGVfU3BlY3RydW0uZ2V0QWJzb2x1dGVEaXN0YW5jZShyZWZlcmVuY2VbaGFuZGxlTnVtYmVyIC0gMV0sIG9wdGlvbnMubWFyZ2luLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIHRvID0gTWF0aC5tYXgodG8sIGRpc3RhbmNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGxvb2tGb3J3YXJkICYmIGhhbmRsZU51bWJlciA8IHNjb3BlX0hhbmRsZXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICBkaXN0YW5jZSA9IHNjb3BlX1NwZWN0cnVtLmdldEFic29sdXRlRGlzdGFuY2UocmVmZXJlbmNlW2hhbmRsZU51bWJlciArIDFdLCBvcHRpb25zLm1hcmdpbiwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHRvID0gTWF0aC5taW4odG8sIGRpc3RhbmNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBUaGUgbGltaXQgb3B0aW9uIGhhcyB0aGUgb3Bwb3NpdGUgZWZmZWN0LCBsaW1pdGluZyBoYW5kbGVzIHRvIGFcbiAgICAgICAgICAgIC8vIG1heGltdW0gZGlzdGFuY2UgZnJvbSBhbm90aGVyLiBMaW1pdCBtdXN0IGJlID4gMCwgYXMgb3RoZXJ3aXNlXG4gICAgICAgICAgICAvLyBoYW5kbGVzIHdvdWxkIGJlIHVubW92YWJsZS5cbiAgICAgICAgICAgIGlmIChzY29wZV9IYW5kbGVzLmxlbmd0aCA+IDEgJiYgb3B0aW9ucy5saW1pdCkge1xuICAgICAgICAgICAgICAgIGlmIChsb29rQmFja3dhcmQgJiYgaGFuZGxlTnVtYmVyID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBkaXN0YW5jZSA9IHNjb3BlX1NwZWN0cnVtLmdldEFic29sdXRlRGlzdGFuY2UocmVmZXJlbmNlW2hhbmRsZU51bWJlciAtIDFdLCBvcHRpb25zLmxpbWl0LCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIHRvID0gTWF0aC5taW4odG8sIGRpc3RhbmNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGxvb2tGb3J3YXJkICYmIGhhbmRsZU51bWJlciA8IHNjb3BlX0hhbmRsZXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICBkaXN0YW5jZSA9IHNjb3BlX1NwZWN0cnVtLmdldEFic29sdXRlRGlzdGFuY2UocmVmZXJlbmNlW2hhbmRsZU51bWJlciArIDFdLCBvcHRpb25zLmxpbWl0LCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgdG8gPSBNYXRoLm1heCh0bywgZGlzdGFuY2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFRoZSBwYWRkaW5nIG9wdGlvbiBrZWVwcyB0aGUgaGFuZGxlcyBhIGNlcnRhaW4gZGlzdGFuY2UgZnJvbSB0aGVcbiAgICAgICAgICAgIC8vIGVkZ2VzIG9mIHRoZSBzbGlkZXIuIFBhZGRpbmcgbXVzdCBiZSA+IDAuXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5wYWRkaW5nKSB7XG4gICAgICAgICAgICAgICAgaWYgKGhhbmRsZU51bWJlciA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBkaXN0YW5jZSA9IHNjb3BlX1NwZWN0cnVtLmdldEFic29sdXRlRGlzdGFuY2UoMCwgb3B0aW9ucy5wYWRkaW5nWzBdLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIHRvID0gTWF0aC5tYXgodG8sIGRpc3RhbmNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGhhbmRsZU51bWJlciA9PT0gc2NvcGVfSGFuZGxlcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlID0gc2NvcGVfU3BlY3RydW0uZ2V0QWJzb2x1dGVEaXN0YW5jZSgxMDAsIG9wdGlvbnMucGFkZGluZ1sxXSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHRvID0gTWF0aC5taW4odG8sIGRpc3RhbmNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0byA9IHNjb3BlX1NwZWN0cnVtLmdldFN0ZXAodG8pO1xuICAgICAgICAgICAgLy8gTGltaXQgcGVyY2VudGFnZSB0byB0aGUgMCAtIDEwMCByYW5nZVxuICAgICAgICAgICAgdG8gPSBsaW1pdCh0byk7XG4gICAgICAgICAgICAvLyBSZXR1cm4gZmFsc2UgaWYgaGFuZGxlIGNhbid0IG1vdmVcbiAgICAgICAgICAgIGlmICh0byA9PT0gcmVmZXJlbmNlW2hhbmRsZU51bWJlcl0gJiYgIWdldFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRvO1xuICAgICAgICB9XG4gICAgICAgIC8vIFVzZXMgc2xpZGVyIG9yaWVudGF0aW9uIHRvIGNyZWF0ZSBDU1MgcnVsZXMuIGEgPSBiYXNlIHZhbHVlO1xuICAgICAgICBmdW5jdGlvbiBpblJ1bGVPcmRlcih2LCBhKSB7XG4gICAgICAgICAgICB2YXIgbyA9IG9wdGlvbnMub3J0O1xuICAgICAgICAgICAgcmV0dXJuIChvID8gYSA6IHYpICsgXCIsIFwiICsgKG8gPyB2IDogYSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gTW92ZXMgaGFuZGxlKHMpIGJ5IGEgcGVyY2VudGFnZVxuICAgICAgICAvLyAoYm9vbCwgJSB0byBtb3ZlLCBbJSB3aGVyZSBoYW5kbGUgc3RhcnRlZCwgLi4uXSwgW2luZGV4IGluIHNjb3BlX0hhbmRsZXMsIC4uLl0pXG4gICAgICAgIGZ1bmN0aW9uIG1vdmVIYW5kbGVzKHVwd2FyZCwgcHJvcG9zYWwsIGxvY2F0aW9ucywgaGFuZGxlTnVtYmVycywgY29ubmVjdCkge1xuICAgICAgICAgICAgdmFyIHByb3Bvc2FscyA9IGxvY2F0aW9ucy5zbGljZSgpO1xuICAgICAgICAgICAgLy8gU3RvcmUgZmlyc3QgaGFuZGxlIG5vdywgc28gd2Ugc3RpbGwgaGF2ZSBpdCBpbiBjYXNlIGhhbmRsZU51bWJlcnMgaXMgcmV2ZXJzZWRcbiAgICAgICAgICAgIHZhciBmaXJzdEhhbmRsZSA9IGhhbmRsZU51bWJlcnNbMF07XG4gICAgICAgICAgICB2YXIgYiA9IFshdXB3YXJkLCB1cHdhcmRdO1xuICAgICAgICAgICAgdmFyIGYgPSBbdXB3YXJkLCAhdXB3YXJkXTtcbiAgICAgICAgICAgIC8vIENvcHkgaGFuZGxlTnVtYmVycyBzbyB3ZSBkb24ndCBjaGFuZ2UgdGhlIGRhdGFzZXRcbiAgICAgICAgICAgIGhhbmRsZU51bWJlcnMgPSBoYW5kbGVOdW1iZXJzLnNsaWNlKCk7XG4gICAgICAgICAgICAvLyBDaGVjayB0byBzZWUgd2hpY2ggaGFuZGxlIGlzICdsZWFkaW5nJy5cbiAgICAgICAgICAgIC8vIElmIHRoYXQgb25lIGNhbid0IG1vdmUgdGhlIHNlY29uZCBjYW4ndCBlaXRoZXIuXG4gICAgICAgICAgICBpZiAodXB3YXJkKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlTnVtYmVycy5yZXZlcnNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBTdGVwIDE6IGdldCB0aGUgbWF4aW11bSBwZXJjZW50YWdlIHRoYXQgYW55IG9mIHRoZSBoYW5kbGVzIGNhbiBtb3ZlXG4gICAgICAgICAgICBpZiAoaGFuZGxlTnVtYmVycy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlTnVtYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGVOdW1iZXIsIG8pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRvID0gY2hlY2tIYW5kbGVQb3NpdGlvbihwcm9wb3NhbHMsIGhhbmRsZU51bWJlciwgcHJvcG9zYWxzW2hhbmRsZU51bWJlcl0gKyBwcm9wb3NhbCwgYltvXSwgZltvXSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAvLyBTdG9wIGlmIG9uZSBvZiB0aGUgaGFuZGxlcyBjYW4ndCBtb3ZlLlxuICAgICAgICAgICAgICAgICAgICBpZiAodG8gPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wb3NhbCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wb3NhbCA9IHRvIC0gcHJvcG9zYWxzW2hhbmRsZU51bWJlcl07XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wb3NhbHNbaGFuZGxlTnVtYmVyXSA9IHRvO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB1c2luZyBvbmUgaGFuZGxlLCBjaGVjayBiYWNrd2FyZCBBTkQgZm9yd2FyZFxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYiA9IGYgPSBbdHJ1ZV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgc3RhdGUgPSBmYWxzZTtcbiAgICAgICAgICAgIC8vIFN0ZXAgMjogVHJ5IHRvIHNldCB0aGUgaGFuZGxlcyB3aXRoIHRoZSBmb3VuZCBwZXJjZW50YWdlXG4gICAgICAgICAgICBoYW5kbGVOdW1iZXJzLmZvckVhY2goZnVuY3Rpb24gKGhhbmRsZU51bWJlciwgbykge1xuICAgICAgICAgICAgICAgIHN0YXRlID0gc2V0SGFuZGxlKGhhbmRsZU51bWJlciwgbG9jYXRpb25zW2hhbmRsZU51bWJlcl0gKyBwcm9wb3NhbCwgYltvXSwgZltvXSkgfHwgc3RhdGU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIFN0ZXAgMzogSWYgYSBoYW5kbGUgbW92ZWQsIGZpcmUgZXZlbnRzXG4gICAgICAgICAgICBpZiAoc3RhdGUpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVOdW1iZXJzLmZvckVhY2goZnVuY3Rpb24gKGhhbmRsZU51bWJlcikge1xuICAgICAgICAgICAgICAgICAgICBmaXJlRXZlbnQoXCJ1cGRhdGVcIiwgaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgICAgICAgICAgZmlyZUV2ZW50KFwic2xpZGVcIiwgaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAvLyBJZiB0YXJnZXQgaXMgYSBjb25uZWN0LCB0aGVuIGZpcmUgZHJhZyBldmVudFxuICAgICAgICAgICAgICAgIGlmIChjb25uZWN0ICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBmaXJlRXZlbnQoXCJkcmFnXCIsIGZpcnN0SGFuZGxlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gVGFrZXMgYSBiYXNlIHZhbHVlIGFuZCBhbiBvZmZzZXQuIFRoaXMgb2Zmc2V0IGlzIHVzZWQgZm9yIHRoZSBjb25uZWN0IGJhciBzaXplLlxuICAgICAgICAvLyBJbiB0aGUgaW5pdGlhbCBkZXNpZ24gZm9yIHRoaXMgZmVhdHVyZSwgdGhlIG9yaWdpbiBlbGVtZW50IHdhcyAxJSB3aWRlLlxuICAgICAgICAvLyBVbmZvcnR1bmF0ZWx5LCBhIHJvdW5kaW5nIGJ1ZyBpbiBDaHJvbWUgbWFrZXMgaXQgaW1wb3NzaWJsZSB0byBpbXBsZW1lbnQgdGhpcyBmZWF0dXJlXG4gICAgICAgIC8vIGluIHRoaXMgbWFubmVyOiBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD03OTgyMjNcbiAgICAgICAgZnVuY3Rpb24gdHJhbnNmb3JtRGlyZWN0aW9uKGEsIGIpIHtcbiAgICAgICAgICAgIHJldHVybiBvcHRpb25zLmRpciA/IDEwMCAtIGEgLSBiIDogYTtcbiAgICAgICAgfVxuICAgICAgICAvLyBVcGRhdGVzIHNjb3BlX0xvY2F0aW9ucyBhbmQgc2NvcGVfVmFsdWVzLCB1cGRhdGVzIHZpc3VhbCBzdGF0ZVxuICAgICAgICBmdW5jdGlvbiB1cGRhdGVIYW5kbGVQb3NpdGlvbihoYW5kbGVOdW1iZXIsIHRvKSB7XG4gICAgICAgICAgICAvLyBVcGRhdGUgbG9jYXRpb25zLlxuICAgICAgICAgICAgc2NvcGVfTG9jYXRpb25zW2hhbmRsZU51bWJlcl0gPSB0bztcbiAgICAgICAgICAgIC8vIENvbnZlcnQgdGhlIHZhbHVlIHRvIHRoZSBzbGlkZXIgc3RlcHBpbmcvcmFuZ2UuXG4gICAgICAgICAgICBzY29wZV9WYWx1ZXNbaGFuZGxlTnVtYmVyXSA9IHNjb3BlX1NwZWN0cnVtLmZyb21TdGVwcGluZyh0byk7XG4gICAgICAgICAgICB2YXIgdHJhbnNsYXRpb24gPSAxMCAqICh0cmFuc2Zvcm1EaXJlY3Rpb24odG8sIDApIC0gc2NvcGVfRGlyT2Zmc2V0KTtcbiAgICAgICAgICAgIHZhciB0cmFuc2xhdGVSdWxlID0gXCJ0cmFuc2xhdGUoXCIgKyBpblJ1bGVPcmRlcih0cmFuc2xhdGlvbiArIFwiJVwiLCBcIjBcIikgKyBcIilcIjtcbiAgICAgICAgICAgIHNjb3BlX0hhbmRsZXNbaGFuZGxlTnVtYmVyXS5zdHlsZVtvcHRpb25zLnRyYW5zZm9ybVJ1bGVdID0gdHJhbnNsYXRlUnVsZTtcbiAgICAgICAgICAgIHVwZGF0ZUNvbm5lY3QoaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgIHVwZGF0ZUNvbm5lY3QoaGFuZGxlTnVtYmVyICsgMSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSGFuZGxlcyBiZWZvcmUgdGhlIHNsaWRlciBtaWRkbGUgYXJlIHN0YWNrZWQgbGF0ZXIgPSBoaWdoZXIsXG4gICAgICAgIC8vIEhhbmRsZXMgYWZ0ZXIgdGhlIG1pZGRsZSBsYXRlciBpcyBsb3dlclxuICAgICAgICAvLyBbWzddIFs4XSAuLi4uLi4uLi4uIHwgLi4uLi4uLi4uLiBbNV0gWzRdXG4gICAgICAgIGZ1bmN0aW9uIHNldFppbmRleCgpIHtcbiAgICAgICAgICAgIHNjb3BlX0hhbmRsZU51bWJlcnMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlTnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRpciA9IHNjb3BlX0xvY2F0aW9uc1toYW5kbGVOdW1iZXJdID4gNTAgPyAtMSA6IDE7XG4gICAgICAgICAgICAgICAgdmFyIHpJbmRleCA9IDMgKyAoc2NvcGVfSGFuZGxlcy5sZW5ndGggKyBkaXIgKiBoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgICAgIHNjb3BlX0hhbmRsZXNbaGFuZGxlTnVtYmVyXS5zdHlsZS56SW5kZXggPSBTdHJpbmcoekluZGV4KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIFRlc3Qgc3VnZ2VzdGVkIHZhbHVlcyBhbmQgYXBwbHkgbWFyZ2luLCBzdGVwLlxuICAgICAgICAvLyBpZiBleGFjdElucHV0IGlzIHRydWUsIGRvbid0IHJ1biBjaGVja0hhbmRsZVBvc2l0aW9uLCB0aGVuIHRoZSBoYW5kbGUgY2FuIGJlIHBsYWNlZCBpbiBiZXR3ZWVuIHN0ZXBzICgjNDM2KVxuICAgICAgICBmdW5jdGlvbiBzZXRIYW5kbGUoaGFuZGxlTnVtYmVyLCB0bywgbG9va0JhY2t3YXJkLCBsb29rRm9yd2FyZCwgZXhhY3RJbnB1dCkge1xuICAgICAgICAgICAgaWYgKCFleGFjdElucHV0KSB7XG4gICAgICAgICAgICAgICAgdG8gPSBjaGVja0hhbmRsZVBvc2l0aW9uKHNjb3BlX0xvY2F0aW9ucywgaGFuZGxlTnVtYmVyLCB0bywgbG9va0JhY2t3YXJkLCBsb29rRm9yd2FyZCwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRvID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHVwZGF0ZUhhbmRsZVBvc2l0aW9uKGhhbmRsZU51bWJlciwgdG8pO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVXBkYXRlcyBzdHlsZSBhdHRyaWJ1dGUgZm9yIGNvbm5lY3Qgbm9kZXNcbiAgICAgICAgZnVuY3Rpb24gdXBkYXRlQ29ubmVjdChpbmRleCkge1xuICAgICAgICAgICAgLy8gU2tpcCBjb25uZWN0cyBzZXQgdG8gZmFsc2VcbiAgICAgICAgICAgIGlmICghc2NvcGVfQ29ubmVjdHNbaW5kZXhdKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGwgPSAwO1xuICAgICAgICAgICAgdmFyIGggPSAxMDA7XG4gICAgICAgICAgICBpZiAoaW5kZXggIT09IDApIHtcbiAgICAgICAgICAgICAgICBsID0gc2NvcGVfTG9jYXRpb25zW2luZGV4IC0gMV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaW5kZXggIT09IHNjb3BlX0Nvbm5lY3RzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICBoID0gc2NvcGVfTG9jYXRpb25zW2luZGV4XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFdlIHVzZSB0d28gcnVsZXM6XG4gICAgICAgICAgICAvLyAndHJhbnNsYXRlJyB0byBjaGFuZ2UgdGhlIGxlZnQvdG9wIG9mZnNldDtcbiAgICAgICAgICAgIC8vICdzY2FsZScgdG8gY2hhbmdlIHRoZSB3aWR0aCBvZiB0aGUgZWxlbWVudDtcbiAgICAgICAgICAgIC8vIEFzIHRoZSBlbGVtZW50IGhhcyBhIHdpZHRoIG9mIDEwMCUsIGEgdHJhbnNsYXRpb24gb2YgMTAwJSBpcyBlcXVhbCB0byAxMDAlIG9mIHRoZSBwYXJlbnQgKC5ub1VpLWJhc2UpXG4gICAgICAgICAgICB2YXIgY29ubmVjdFdpZHRoID0gaCAtIGw7XG4gICAgICAgICAgICB2YXIgdHJhbnNsYXRlUnVsZSA9IFwidHJhbnNsYXRlKFwiICsgaW5SdWxlT3JkZXIodHJhbnNmb3JtRGlyZWN0aW9uKGwsIGNvbm5lY3RXaWR0aCkgKyBcIiVcIiwgXCIwXCIpICsgXCIpXCI7XG4gICAgICAgICAgICB2YXIgc2NhbGVSdWxlID0gXCJzY2FsZShcIiArIGluUnVsZU9yZGVyKGNvbm5lY3RXaWR0aCAvIDEwMCwgXCIxXCIpICsgXCIpXCI7XG4gICAgICAgICAgICBzY29wZV9Db25uZWN0c1tpbmRleF0uc3R5bGVbb3B0aW9ucy50cmFuc2Zvcm1SdWxlXSA9XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlUnVsZSArIFwiIFwiICsgc2NhbGVSdWxlO1xuICAgICAgICB9XG4gICAgICAgIC8vIFBhcnNlcyB2YWx1ZSBwYXNzZWQgdG8gLnNldCBtZXRob2QuIFJldHVybnMgY3VycmVudCB2YWx1ZSBpZiBub3QgcGFyc2UtYWJsZS5cbiAgICAgICAgZnVuY3Rpb24gcmVzb2x2ZVRvVmFsdWUodG8sIGhhbmRsZU51bWJlcikge1xuICAgICAgICAgICAgLy8gU2V0dGluZyB3aXRoIG51bGwgaW5kaWNhdGVzIGFuICdpZ25vcmUnLlxuICAgICAgICAgICAgLy8gSW5wdXR0aW5nICdmYWxzZScgaXMgaW52YWxpZC5cbiAgICAgICAgICAgIGlmICh0byA9PT0gbnVsbCB8fCB0byA9PT0gZmFsc2UgfHwgdG8gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzY29wZV9Mb2NhdGlvbnNbaGFuZGxlTnVtYmVyXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIGEgZm9ybWF0dGVkIG51bWJlciB3YXMgcGFzc2VkLCBhdHRlbXB0IHRvIGRlY29kZSBpdC5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdG8gPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICB0byA9IFN0cmluZyh0byk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0byA9IG9wdGlvbnMuZm9ybWF0LmZyb20odG8pO1xuICAgICAgICAgICAgaWYgKHRvICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHRvID0gc2NvcGVfU3BlY3RydW0udG9TdGVwcGluZyh0byk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiBwYXJzaW5nIHRoZSBudW1iZXIgZmFpbGVkLCB1c2UgdGhlIGN1cnJlbnQgdmFsdWUuXG4gICAgICAgICAgICBpZiAodG8gPT09IGZhbHNlIHx8IGlzTmFOKHRvKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzY29wZV9Mb2NhdGlvbnNbaGFuZGxlTnVtYmVyXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0bztcbiAgICAgICAgfVxuICAgICAgICAvLyBTZXQgdGhlIHNsaWRlciB2YWx1ZS5cbiAgICAgICAgZnVuY3Rpb24gdmFsdWVTZXQoaW5wdXQsIGZpcmVTZXRFdmVudCwgZXhhY3RJbnB1dCkge1xuICAgICAgICAgICAgdmFyIHZhbHVlcyA9IGFzQXJyYXkoaW5wdXQpO1xuICAgICAgICAgICAgdmFyIGlzSW5pdCA9IHNjb3BlX0xvY2F0aW9uc1swXSA9PT0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgLy8gRXZlbnQgZmlyZXMgYnkgZGVmYXVsdFxuICAgICAgICAgICAgZmlyZVNldEV2ZW50ID0gZmlyZVNldEV2ZW50ID09PSB1bmRlZmluZWQgPyB0cnVlIDogZmlyZVNldEV2ZW50O1xuICAgICAgICAgICAgLy8gQW5pbWF0aW9uIGlzIG9wdGlvbmFsLlxuICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHRoZSBpbml0aWFsIHZhbHVlcyB3ZXJlIHNldCBiZWZvcmUgdXNpbmcgYW5pbWF0ZWQgcGxhY2VtZW50LlxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuYW5pbWF0ZSAmJiAhaXNJbml0KSB7XG4gICAgICAgICAgICAgICAgYWRkQ2xhc3NGb3Ioc2NvcGVfVGFyZ2V0LCBvcHRpb25zLmNzc0NsYXNzZXMudGFwLCBvcHRpb25zLmFuaW1hdGlvbkR1cmF0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEZpcnN0IHBhc3MsIHdpdGhvdXQgbG9va0FoZWFkIGJ1dCB3aXRoIGxvb2tCYWNrd2FyZC4gVmFsdWVzIGFyZSBzZXQgZnJvbSBsZWZ0IHRvIHJpZ2h0LlxuICAgICAgICAgICAgc2NvcGVfSGFuZGxlTnVtYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgICAgICAgICBzZXRIYW5kbGUoaGFuZGxlTnVtYmVyLCByZXNvbHZlVG9WYWx1ZSh2YWx1ZXNbaGFuZGxlTnVtYmVyXSwgaGFuZGxlTnVtYmVyKSwgdHJ1ZSwgZmFsc2UsIGV4YWN0SW5wdXQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YXIgaSA9IHNjb3BlX0hhbmRsZU51bWJlcnMubGVuZ3RoID09PSAxID8gMCA6IDE7XG4gICAgICAgICAgICAvLyBTcHJlYWQgaGFuZGxlcyBldmVubHkgYWNyb3NzIHRoZSBzbGlkZXIgaWYgdGhlIHJhbmdlIGhhcyBubyBzaXplIChtaW49bWF4KVxuICAgICAgICAgICAgaWYgKGlzSW5pdCAmJiBzY29wZV9TcGVjdHJ1bS5oYXNOb1NpemUoKSkge1xuICAgICAgICAgICAgICAgIGV4YWN0SW5wdXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNjb3BlX0xvY2F0aW9uc1swXSA9IDA7XG4gICAgICAgICAgICAgICAgaWYgKHNjb3BlX0hhbmRsZU51bWJlcnMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3BhY2VfMSA9IDEwMCAvIChzY29wZV9IYW5kbGVOdW1iZXJzLmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgICAgICAgICBzY29wZV9IYW5kbGVOdW1iZXJzLmZvckVhY2goZnVuY3Rpb24gKGhhbmRsZU51bWJlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGVfTG9jYXRpb25zW2hhbmRsZU51bWJlcl0gPSBoYW5kbGVOdW1iZXIgKiBzcGFjZV8xO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBTZWNvbmRhcnkgcGFzc2VzLiBOb3cgdGhhdCBhbGwgYmFzZSB2YWx1ZXMgYXJlIHNldCwgYXBwbHkgY29uc3RyYWludHMuXG4gICAgICAgICAgICAvLyBJdGVyYXRlIGFsbCBoYW5kbGVzIHRvIGVuc3VyZSBjb25zdHJhaW50cyBhcmUgYXBwbGllZCBmb3IgdGhlIGVudGlyZSBzbGlkZXIgKElzc3VlICMxMDA5KVxuICAgICAgICAgICAgZm9yICg7IGkgPCBzY29wZV9IYW5kbGVOdW1iZXJzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgc2NvcGVfSGFuZGxlTnVtYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0SGFuZGxlKGhhbmRsZU51bWJlciwgc2NvcGVfTG9jYXRpb25zW2hhbmRsZU51bWJlcl0sIHRydWUsIHRydWUsIGV4YWN0SW5wdXQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0WmluZGV4KCk7XG4gICAgICAgICAgICBzY29wZV9IYW5kbGVOdW1iZXJzLmZvckVhY2goZnVuY3Rpb24gKGhhbmRsZU51bWJlcikge1xuICAgICAgICAgICAgICAgIGZpcmVFdmVudChcInVwZGF0ZVwiLCBoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgICAgIC8vIEZpcmUgdGhlIGV2ZW50IG9ubHkgZm9yIGhhbmRsZXMgdGhhdCByZWNlaXZlZCBhIG5ldyB2YWx1ZSwgYXMgcGVyICM1NzlcbiAgICAgICAgICAgICAgICBpZiAodmFsdWVzW2hhbmRsZU51bWJlcl0gIT09IG51bGwgJiYgZmlyZVNldEV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGZpcmVFdmVudChcInNldFwiLCBoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIFJlc2V0IHNsaWRlciB0byBpbml0aWFsIHZhbHVlc1xuICAgICAgICBmdW5jdGlvbiB2YWx1ZVJlc2V0KGZpcmVTZXRFdmVudCkge1xuICAgICAgICAgICAgdmFsdWVTZXQob3B0aW9ucy5zdGFydCwgZmlyZVNldEV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBTZXQgdmFsdWUgZm9yIGEgc2luZ2xlIGhhbmRsZVxuICAgICAgICBmdW5jdGlvbiB2YWx1ZVNldEhhbmRsZShoYW5kbGVOdW1iZXIsIHZhbHVlLCBmaXJlU2V0RXZlbnQsIGV4YWN0SW5wdXQpIHtcbiAgICAgICAgICAgIC8vIEVuc3VyZSBudW1lcmljIGlucHV0XG4gICAgICAgICAgICBoYW5kbGVOdW1iZXIgPSBOdW1iZXIoaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgIGlmICghKGhhbmRsZU51bWJlciA+PSAwICYmIGhhbmRsZU51bWJlciA8IHNjb3BlX0hhbmRsZU51bWJlcnMubGVuZ3RoKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6IGludmFsaWQgaGFuZGxlIG51bWJlciwgZ290OiBcIiArIGhhbmRsZU51bWJlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBMb29rIGJvdGggYmFja3dhcmQgYW5kIGZvcndhcmQsIHNpbmNlIHdlIGRvbid0IHdhbnQgdGhpcyBoYW5kbGUgdG8gXCJwdXNoXCIgb3RoZXIgaGFuZGxlcyAoIzk2MCk7XG4gICAgICAgICAgICAvLyBUaGUgZXhhY3RJbnB1dCBhcmd1bWVudCBjYW4gYmUgdXNlZCB0byBpZ25vcmUgc2xpZGVyIHN0ZXBwaW5nICgjNDM2KVxuICAgICAgICAgICAgc2V0SGFuZGxlKGhhbmRsZU51bWJlciwgcmVzb2x2ZVRvVmFsdWUodmFsdWUsIGhhbmRsZU51bWJlciksIHRydWUsIHRydWUsIGV4YWN0SW5wdXQpO1xuICAgICAgICAgICAgZmlyZUV2ZW50KFwidXBkYXRlXCIsIGhhbmRsZU51bWJlcik7XG4gICAgICAgICAgICBpZiAoZmlyZVNldEV2ZW50KSB7XG4gICAgICAgICAgICAgICAgZmlyZUV2ZW50KFwic2V0XCIsIGhhbmRsZU51bWJlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gR2V0IHRoZSBzbGlkZXIgdmFsdWUuXG4gICAgICAgIGZ1bmN0aW9uIHZhbHVlR2V0KHVuZW5jb2RlZCkge1xuICAgICAgICAgICAgaWYgKHVuZW5jb2RlZCA9PT0gdm9pZCAwKSB7IHVuZW5jb2RlZCA9IGZhbHNlOyB9XG4gICAgICAgICAgICBpZiAodW5lbmNvZGVkKSB7XG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuIGEgY29weSBvZiB0aGUgcmF3IHZhbHVlc1xuICAgICAgICAgICAgICAgIHJldHVybiBzY29wZV9WYWx1ZXMubGVuZ3RoID09PSAxID8gc2NvcGVfVmFsdWVzWzBdIDogc2NvcGVfVmFsdWVzLnNsaWNlKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHZhbHVlcyA9IHNjb3BlX1ZhbHVlcy5tYXAob3B0aW9ucy5mb3JtYXQudG8pO1xuICAgICAgICAgICAgLy8gSWYgb25seSBvbmUgaGFuZGxlIGlzIHVzZWQsIHJldHVybiBhIHNpbmdsZSB2YWx1ZS5cbiAgICAgICAgICAgIGlmICh2YWx1ZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlc1swXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB2YWx1ZXM7XG4gICAgICAgIH1cbiAgICAgICAgLy8gUmVtb3ZlcyBjbGFzc2VzIGZyb20gdGhlIHJvb3QgYW5kIGVtcHRpZXMgaXQuXG4gICAgICAgIGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICAgICAgICAvLyByZW1vdmUgcHJvdGVjdGVkIGludGVybmFsIGxpc3RlbmVyc1xuICAgICAgICAgICAgcmVtb3ZlRXZlbnQoSU5URVJOQUxfRVZFTlRfTlMuYXJpYSk7XG4gICAgICAgICAgICByZW1vdmVFdmVudChJTlRFUk5BTF9FVkVOVF9OUy50b29sdGlwcyk7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhvcHRpb25zLmNzc0NsYXNzZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgICAgIHJlbW92ZUNsYXNzKHNjb3BlX1RhcmdldCwgb3B0aW9ucy5jc3NDbGFzc2VzW2tleV0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB3aGlsZSAoc2NvcGVfVGFyZ2V0LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICBzY29wZV9UYXJnZXQucmVtb3ZlQ2hpbGQoc2NvcGVfVGFyZ2V0LmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVsZXRlIHNjb3BlX1RhcmdldC5ub1VpU2xpZGVyO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGdldE5leHRTdGVwc0ZvckhhbmRsZShoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgICAgIHZhciBsb2NhdGlvbiA9IHNjb3BlX0xvY2F0aW9uc1toYW5kbGVOdW1iZXJdO1xuICAgICAgICAgICAgdmFyIG5lYXJieVN0ZXBzID0gc2NvcGVfU3BlY3RydW0uZ2V0TmVhcmJ5U3RlcHMobG9jYXRpb24pO1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gc2NvcGVfVmFsdWVzW2hhbmRsZU51bWJlcl07XG4gICAgICAgICAgICB2YXIgaW5jcmVtZW50ID0gbmVhcmJ5U3RlcHMudGhpc1N0ZXAuc3RlcDtcbiAgICAgICAgICAgIHZhciBkZWNyZW1lbnQgPSBudWxsO1xuICAgICAgICAgICAgLy8gSWYgc25hcHBlZCwgZGlyZWN0bHkgdXNlIGRlZmluZWQgc3RlcCB2YWx1ZVxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuc25hcCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlIC0gbmVhcmJ5U3RlcHMuc3RlcEJlZm9yZS5zdGFydFZhbHVlIHx8IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIG5lYXJieVN0ZXBzLnN0ZXBBZnRlci5zdGFydFZhbHVlIC0gdmFsdWUgfHwgbnVsbFxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB0aGUgbmV4dCB2YWx1ZSBpbiB0aGlzIHN0ZXAgbW92ZXMgaW50byB0aGUgbmV4dCBzdGVwLFxuICAgICAgICAgICAgLy8gdGhlIGluY3JlbWVudCBpcyB0aGUgc3RhcnQgb2YgdGhlIG5leHQgc3RlcCAtIHRoZSBjdXJyZW50IHZhbHVlXG4gICAgICAgICAgICBpZiAoaW5jcmVtZW50ICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSArIGluY3JlbWVudCA+IG5lYXJieVN0ZXBzLnN0ZXBBZnRlci5zdGFydFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGluY3JlbWVudCA9IG5lYXJieVN0ZXBzLnN0ZXBBZnRlci5zdGFydFZhbHVlIC0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgdGhlIHZhbHVlIGlzIGJleW9uZCB0aGUgc3RhcnRpbmcgcG9pbnRcbiAgICAgICAgICAgIGlmICh2YWx1ZSA+IG5lYXJieVN0ZXBzLnRoaXNTdGVwLnN0YXJ0VmFsdWUpIHtcbiAgICAgICAgICAgICAgICBkZWNyZW1lbnQgPSBuZWFyYnlTdGVwcy50aGlzU3RlcC5zdGVwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAobmVhcmJ5U3RlcHMuc3RlcEJlZm9yZS5zdGVwID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGRlY3JlbWVudCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgYSBoYW5kbGUgaXMgYXQgdGhlIHN0YXJ0IG9mIGEgc3RlcCwgaXQgYWx3YXlzIHN0ZXBzIGJhY2sgaW50byB0aGUgcHJldmlvdXMgc3RlcCBmaXJzdFxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZGVjcmVtZW50ID0gdmFsdWUgLSBuZWFyYnlTdGVwcy5zdGVwQmVmb3JlLmhpZ2hlc3RTdGVwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gTm93LCBpZiBhdCB0aGUgc2xpZGVyIGVkZ2VzLCB0aGVyZSBpcyBubyBpbi9kZWNyZW1lbnRcbiAgICAgICAgICAgIGlmIChsb2NhdGlvbiA9PT0gMTAwKSB7XG4gICAgICAgICAgICAgICAgaW5jcmVtZW50ID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGxvY2F0aW9uID09PSAwKSB7XG4gICAgICAgICAgICAgICAgZGVjcmVtZW50ID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEFzIHBlciAjMzkxLCB0aGUgY29tcGFyaXNvbiBmb3IgdGhlIGRlY3JlbWVudCBzdGVwIGNhbiBoYXZlIHNvbWUgcm91bmRpbmcgaXNzdWVzLlxuICAgICAgICAgICAgdmFyIHN0ZXBEZWNpbWFscyA9IHNjb3BlX1NwZWN0cnVtLmNvdW50U3RlcERlY2ltYWxzKCk7XG4gICAgICAgICAgICAvLyBSb3VuZCBwZXIgIzM5MVxuICAgICAgICAgICAgaWYgKGluY3JlbWVudCAhPT0gbnVsbCAmJiBpbmNyZW1lbnQgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgaW5jcmVtZW50ID0gTnVtYmVyKGluY3JlbWVudC50b0ZpeGVkKHN0ZXBEZWNpbWFscykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRlY3JlbWVudCAhPT0gbnVsbCAmJiBkZWNyZW1lbnQgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgZGVjcmVtZW50ID0gTnVtYmVyKGRlY3JlbWVudC50b0ZpeGVkKHN0ZXBEZWNpbWFscykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFtkZWNyZW1lbnQsIGluY3JlbWVudF07XG4gICAgICAgIH1cbiAgICAgICAgLy8gR2V0IHRoZSBjdXJyZW50IHN0ZXAgc2l6ZSBmb3IgdGhlIHNsaWRlci5cbiAgICAgICAgZnVuY3Rpb24gZ2V0TmV4dFN0ZXBzKCkge1xuICAgICAgICAgICAgcmV0dXJuIHNjb3BlX0hhbmRsZU51bWJlcnMubWFwKGdldE5leHRTdGVwc0ZvckhhbmRsZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVXBkYXRhYmxlOiBtYXJnaW4sIGxpbWl0LCBwYWRkaW5nLCBzdGVwLCByYW5nZSwgYW5pbWF0ZSwgc25hcFxuICAgICAgICBmdW5jdGlvbiB1cGRhdGVPcHRpb25zKG9wdGlvbnNUb1VwZGF0ZSwgZmlyZVNldEV2ZW50KSB7XG4gICAgICAgICAgICAvLyBTcGVjdHJ1bSBpcyBjcmVhdGVkIHVzaW5nIHRoZSByYW5nZSwgc25hcCwgZGlyZWN0aW9uIGFuZCBzdGVwIG9wdGlvbnMuXG4gICAgICAgICAgICAvLyAnc25hcCcgYW5kICdzdGVwJyBjYW4gYmUgdXBkYXRlZC5cbiAgICAgICAgICAgIC8vIElmICdzbmFwJyBhbmQgJ3N0ZXAnIGFyZSBub3QgcGFzc2VkLCB0aGV5IHNob3VsZCByZW1haW4gdW5jaGFuZ2VkLlxuICAgICAgICAgICAgdmFyIHYgPSB2YWx1ZUdldCgpO1xuICAgICAgICAgICAgdmFyIHVwZGF0ZUFibGUgPSBbXG4gICAgICAgICAgICAgICAgXCJtYXJnaW5cIixcbiAgICAgICAgICAgICAgICBcImxpbWl0XCIsXG4gICAgICAgICAgICAgICAgXCJwYWRkaW5nXCIsXG4gICAgICAgICAgICAgICAgXCJyYW5nZVwiLFxuICAgICAgICAgICAgICAgIFwiYW5pbWF0ZVwiLFxuICAgICAgICAgICAgICAgIFwic25hcFwiLFxuICAgICAgICAgICAgICAgIFwic3RlcFwiLFxuICAgICAgICAgICAgICAgIFwiZm9ybWF0XCIsXG4gICAgICAgICAgICAgICAgXCJwaXBzXCIsXG4gICAgICAgICAgICAgICAgXCJ0b29sdGlwc1wiXG4gICAgICAgICAgICBdO1xuICAgICAgICAgICAgLy8gT25seSBjaGFuZ2Ugb3B0aW9ucyB0aGF0IHdlJ3JlIGFjdHVhbGx5IHBhc3NlZCB0byB1cGRhdGUuXG4gICAgICAgICAgICB1cGRhdGVBYmxlLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgICAgICAvLyBDaGVjayBmb3IgdW5kZWZpbmVkLiBudWxsIHJlbW92ZXMgdGhlIHZhbHVlLlxuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zVG9VcGRhdGVbbmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBvcmlnaW5hbE9wdGlvbnNbbmFtZV0gPSBvcHRpb25zVG9VcGRhdGVbbmFtZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YXIgbmV3T3B0aW9ucyA9IHRlc3RPcHRpb25zKG9yaWdpbmFsT3B0aW9ucyk7XG4gICAgICAgICAgICAvLyBMb2FkIG5ldyBvcHRpb25zIGludG8gdGhlIHNsaWRlciBzdGF0ZVxuICAgICAgICAgICAgdXBkYXRlQWJsZS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnNUb1VwZGF0ZVtuYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnNbbmFtZV0gPSBuZXdPcHRpb25zW25hbWVdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc2NvcGVfU3BlY3RydW0gPSBuZXdPcHRpb25zLnNwZWN0cnVtO1xuICAgICAgICAgICAgLy8gTGltaXQsIG1hcmdpbiBhbmQgcGFkZGluZyBkZXBlbmQgb24gdGhlIHNwZWN0cnVtIGJ1dCBhcmUgc3RvcmVkIG91dHNpZGUgb2YgaXQuICgjNjc3KVxuICAgICAgICAgICAgb3B0aW9ucy5tYXJnaW4gPSBuZXdPcHRpb25zLm1hcmdpbjtcbiAgICAgICAgICAgIG9wdGlvbnMubGltaXQgPSBuZXdPcHRpb25zLmxpbWl0O1xuICAgICAgICAgICAgb3B0aW9ucy5wYWRkaW5nID0gbmV3T3B0aW9ucy5wYWRkaW5nO1xuICAgICAgICAgICAgLy8gVXBkYXRlIHBpcHMsIHJlbW92ZXMgZXhpc3RpbmcuXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5waXBzKSB7XG4gICAgICAgICAgICAgICAgcGlwcyhvcHRpb25zLnBpcHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlUGlwcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gVXBkYXRlIHRvb2x0aXBzLCByZW1vdmVzIGV4aXN0aW5nLlxuICAgICAgICAgICAgaWYgKG9wdGlvbnMudG9vbHRpcHMpIHtcbiAgICAgICAgICAgICAgICB0b29sdGlwcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlVG9vbHRpcHMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEludmFsaWRhdGUgdGhlIGN1cnJlbnQgcG9zaXRpb25pbmcgc28gdmFsdWVTZXQgZm9yY2VzIGFuIHVwZGF0ZS5cbiAgICAgICAgICAgIHNjb3BlX0xvY2F0aW9ucyA9IFtdO1xuICAgICAgICAgICAgdmFsdWVTZXQoaXNTZXQob3B0aW9uc1RvVXBkYXRlLnN0YXJ0KSA/IG9wdGlvbnNUb1VwZGF0ZS5zdGFydCA6IHYsIGZpcmVTZXRFdmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSW5pdGlhbGl6YXRpb24gc3RlcHNcbiAgICAgICAgZnVuY3Rpb24gc2V0dXBTbGlkZXIoKSB7XG4gICAgICAgICAgICAvLyBDcmVhdGUgdGhlIGJhc2UgZWxlbWVudCwgaW5pdGlhbGl6ZSBIVE1MIGFuZCBzZXQgY2xhc3Nlcy5cbiAgICAgICAgICAgIC8vIEFkZCBoYW5kbGVzIGFuZCBjb25uZWN0IGVsZW1lbnRzLlxuICAgICAgICAgICAgc2NvcGVfQmFzZSA9IGFkZFNsaWRlcihzY29wZV9UYXJnZXQpO1xuICAgICAgICAgICAgYWRkRWxlbWVudHMob3B0aW9ucy5jb25uZWN0LCBzY29wZV9CYXNlKTtcbiAgICAgICAgICAgIC8vIEF0dGFjaCB1c2VyIGV2ZW50cy5cbiAgICAgICAgICAgIGJpbmRTbGlkZXJFdmVudHMob3B0aW9ucy5ldmVudHMpO1xuICAgICAgICAgICAgLy8gVXNlIHRoZSBwdWJsaWMgdmFsdWUgbWV0aG9kIHRvIHNldCB0aGUgc3RhcnQgdmFsdWVzLlxuICAgICAgICAgICAgdmFsdWVTZXQob3B0aW9ucy5zdGFydCk7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5waXBzKSB7XG4gICAgICAgICAgICAgICAgcGlwcyhvcHRpb25zLnBpcHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbnMudG9vbHRpcHMpIHtcbiAgICAgICAgICAgICAgICB0b29sdGlwcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXJpYSgpO1xuICAgICAgICB9XG4gICAgICAgIHNldHVwU2xpZGVyKCk7XG4gICAgICAgIHZhciBzY29wZV9TZWxmID0ge1xuICAgICAgICAgICAgZGVzdHJveTogZGVzdHJveSxcbiAgICAgICAgICAgIHN0ZXBzOiBnZXROZXh0U3RlcHMsXG4gICAgICAgICAgICBvbjogYmluZEV2ZW50LFxuICAgICAgICAgICAgb2ZmOiByZW1vdmVFdmVudCxcbiAgICAgICAgICAgIGdldDogdmFsdWVHZXQsXG4gICAgICAgICAgICBzZXQ6IHZhbHVlU2V0LFxuICAgICAgICAgICAgc2V0SGFuZGxlOiB2YWx1ZVNldEhhbmRsZSxcbiAgICAgICAgICAgIHJlc2V0OiB2YWx1ZVJlc2V0LFxuICAgICAgICAgICAgLy8gRXhwb3NlZCBmb3IgdW5pdCB0ZXN0aW5nLCBkb24ndCB1c2UgdGhpcyBpbiB5b3VyIGFwcGxpY2F0aW9uLlxuICAgICAgICAgICAgX19tb3ZlSGFuZGxlczogZnVuY3Rpb24gKHVwd2FyZCwgcHJvcG9zYWwsIGhhbmRsZU51bWJlcnMpIHtcbiAgICAgICAgICAgICAgICBtb3ZlSGFuZGxlcyh1cHdhcmQsIHByb3Bvc2FsLCBzY29wZV9Mb2NhdGlvbnMsIGhhbmRsZU51bWJlcnMpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9wdGlvbnM6IG9yaWdpbmFsT3B0aW9ucyxcbiAgICAgICAgICAgIHVwZGF0ZU9wdGlvbnM6IHVwZGF0ZU9wdGlvbnMsXG4gICAgICAgICAgICB0YXJnZXQ6IHNjb3BlX1RhcmdldCxcbiAgICAgICAgICAgIHJlbW92ZVBpcHM6IHJlbW92ZVBpcHMsXG4gICAgICAgICAgICByZW1vdmVUb29sdGlwczogcmVtb3ZlVG9vbHRpcHMsXG4gICAgICAgICAgICBnZXRQb3NpdGlvbnM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2NvcGVfTG9jYXRpb25zLnNsaWNlKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2V0VG9vbHRpcHM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2NvcGVfVG9vbHRpcHM7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2V0T3JpZ2luczogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzY29wZV9IYW5kbGVzO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBpcHM6IHBpcHMgLy8gSXNzdWUgIzU5NFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gc2NvcGVfU2VsZjtcbiAgICB9XG4gICAgLy8gUnVuIHRoZSBzdGFuZGFyZCBpbml0aWFsaXplclxuICAgIGZ1bmN0aW9uIGluaXRpYWxpemUodGFyZ2V0LCBvcmlnaW5hbE9wdGlvbnMpIHtcbiAgICAgICAgaWYgKCF0YXJnZXQgfHwgIXRhcmdldC5ub2RlTmFtZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogY3JlYXRlIHJlcXVpcmVzIGEgc2luZ2xlIGVsZW1lbnQsIGdvdDogXCIgKyB0YXJnZXQpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFRocm93IGFuIGVycm9yIGlmIHRoZSBzbGlkZXIgd2FzIGFscmVhZHkgaW5pdGlhbGl6ZWQuXG4gICAgICAgIGlmICh0YXJnZXQubm9VaVNsaWRlcikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogU2xpZGVyIHdhcyBhbHJlYWR5IGluaXRpYWxpemVkLlwiKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBUZXN0IHRoZSBvcHRpb25zIGFuZCBjcmVhdGUgdGhlIHNsaWRlciBlbnZpcm9ubWVudDtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB0ZXN0T3B0aW9ucyhvcmlnaW5hbE9wdGlvbnMpO1xuICAgICAgICB2YXIgYXBpID0gc2NvcGUodGFyZ2V0LCBvcHRpb25zLCBvcmlnaW5hbE9wdGlvbnMpO1xuICAgICAgICB0YXJnZXQubm9VaVNsaWRlciA9IGFwaTtcbiAgICAgICAgcmV0dXJuIGFwaTtcbiAgICB9XG4gICAgdmFyIG5vdWlzbGlkZXIgPSB7XG4gICAgICAgIC8vIEV4cG9zZWQgZm9yIHVuaXQgdGVzdGluZywgZG9uJ3QgdXNlIHRoaXMgaW4geW91ciBhcHBsaWNhdGlvbi5cbiAgICAgICAgX19zcGVjdHJ1bTogU3BlY3RydW0sXG4gICAgICAgIC8vIEEgcmVmZXJlbmNlIHRvIHRoZSBkZWZhdWx0IGNsYXNzZXMsIGFsbG93cyBnbG9iYWwgY2hhbmdlcy5cbiAgICAgICAgLy8gVXNlIHRoZSBjc3NDbGFzc2VzIG9wdGlvbiBmb3IgY2hhbmdlcyB0byBvbmUgc2xpZGVyLlxuICAgICAgICBjc3NDbGFzc2VzOiBjc3NDbGFzc2VzLFxuICAgICAgICBjcmVhdGU6IGluaXRpYWxpemVcbiAgICB9O1xuXG4gICAgZXhwb3J0cy5jcmVhdGUgPSBpbml0aWFsaXplO1xuICAgIGV4cG9ydHMuY3NzQ2xhc3NlcyA9IGNzc0NsYXNzZXM7XG4gICAgZXhwb3J0c1snZGVmYXVsdCddID0gbm91aXNsaWRlcjtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbn0pKSk7XG4iLCJpbXBvcnQgUmFuZ2VJbnB1dCBmcm9tIFwiLi9yYW5nZS1pbnB1dFwiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKGBET01Db250ZW50TG9hZGVkYCwgKCkgPT4ge1xuICAvLyBuZXcgUmFuZ2VJbnB1dChgLmpzLXJhbmdlLWZpbHRlcmApLmluaXQoKTtcbn0pO1xuXG4vLyBCaXRyaXggc2NyaXB0c1xud2luZG93LkpDU21hcnRGaWx0ZXIgPSBmdW5jdGlvbiAoYWpheFVSTCwgdmlld01vZGUsIHBhcmFtcykge1xuICB0aGlzLmFqYXhVUkwgPSBhamF4VVJMO1xuICB0aGlzLmZvcm0gPSBudWxsO1xuICB0aGlzLnRpbWVyID0gbnVsbDtcbiAgdGhpcy5jYWNoZUtleSA9IFwiXCI7XG4gIHRoaXMuY2FjaGUgPSBbXTtcbiAgdGhpcy5wb3B1cHMgPSBbXTtcbiAgdGhpcy52aWV3TW9kZSA9IHZpZXdNb2RlO1xuICBpZiAocGFyYW1zICYmIHBhcmFtcy5TRUZfU0VUX0ZJTFRFUl9VUkwpIHtcbiAgICB0aGlzLmJpbmRVcmxUb0J1dHRvbihcInNldF9maWx0ZXJcIiwgcGFyYW1zLlNFRl9TRVRfRklMVEVSX1VSTCk7XG4gICAgdGhpcy5zZWYgPSB0cnVlO1xuICB9XG4gIGlmIChwYXJhbXMgJiYgcGFyYW1zLlNFRl9ERUxfRklMVEVSX1VSTCkge1xuICAgIHRoaXMuYmluZFVybFRvQnV0dG9uKFwiZGVsX2ZpbHRlclwiLCBwYXJhbXMuU0VGX0RFTF9GSUxURVJfVVJMKTtcbiAgfVxufTtcblxuSkNTbWFydEZpbHRlci5wcm90b3R5cGUua2V5dXAgPSBmdW5jdGlvbiAoaW5wdXQpIHtcbiAgaWYgKCEhdGhpcy50aW1lcikge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKTtcbiAgfVxuICB0aGlzLnRpbWVyID0gc2V0VGltZW91dChcbiAgICBCWC5kZWxlZ2F0ZShmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLnJlbG9hZChpbnB1dCk7XG4gICAgfSwgdGhpcyksXG4gICAgNTAwXG4gICk7XG59O1xuXG5KQ1NtYXJ0RmlsdGVyLnByb3RvdHlwZS5jbGljayA9IGZ1bmN0aW9uIChjaGVja2JveCkge1xuICBpZiAoISF0aGlzLnRpbWVyKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpO1xuICB9XG5cbiAgdGhpcy50aW1lciA9IHNldFRpbWVvdXQoXG4gICAgQlguZGVsZWdhdGUoZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5yZWxvYWQoY2hlY2tib3gpO1xuICAgIH0sIHRoaXMpLFxuICAgIDUwMFxuICApO1xufTtcblxuSkNTbWFydEZpbHRlci5wcm90b3R5cGUucmVsb2FkID0gZnVuY3Rpb24gKGlucHV0KSB7XG4gIGlmICh0aGlzLmNhY2hlS2V5ICE9PSBcIlwiKSB7XG4gICAgLy9Qb3N0cHJvbmUgYmFja2VuZCBxdWVyeVxuICAgIGlmICghIXRoaXMudGltZXIpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKTtcbiAgICB9XG4gICAgdGhpcy50aW1lciA9IHNldFRpbWVvdXQoXG4gICAgICBCWC5kZWxlZ2F0ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucmVsb2FkKGlucHV0KTtcbiAgICAgIH0sIHRoaXMpLFxuICAgICAgMTAwMFxuICAgICk7XG4gICAgcmV0dXJuO1xuICB9XG4gIHRoaXMuY2FjaGVLZXkgPSBcInxcIjtcblxuICB0aGlzLnBvc2l0aW9uID0gQlgucG9zKGlucHV0LCB0cnVlKTtcbiAgdGhpcy5mb3JtID0gQlguZmluZFBhcmVudChpbnB1dCwgeyB0YWc6IFwiZm9ybVwiIH0pO1xuICBpZiAodGhpcy5mb3JtKSB7XG4gICAgdmFyIHZhbHVlcyA9IFtdO1xuICAgIHZhbHVlc1swXSA9IHsgbmFtZTogXCJhamF4XCIsIHZhbHVlOiBcInlcIiB9O1xuICAgIHRoaXMuZ2F0aGVySW5wdXRzVmFsdWVzKFxuICAgICAgdmFsdWVzLFxuICAgICAgQlguZmluZENoaWxkcmVuKFxuICAgICAgICB0aGlzLmZvcm0sXG4gICAgICAgIHsgdGFnOiBuZXcgUmVnRXhwKFwiXihpbnB1dHxzZWxlY3QpJFwiLCBcImlcIikgfSxcbiAgICAgICAgdHJ1ZVxuICAgICAgKVxuICAgICk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZhbHVlcy5sZW5ndGg7IGkrKylcbiAgICAgIHRoaXMuY2FjaGVLZXkgKz0gdmFsdWVzW2ldLm5hbWUgKyBcIjpcIiArIHZhbHVlc1tpXS52YWx1ZSArIFwifFwiO1xuXG4gICAgaWYgKHRoaXMuY2FjaGVbdGhpcy5jYWNoZUtleV0pIHtcbiAgICAgIHRoaXMuY3VyRmlsdGVyaW5wdXQgPSBpbnB1dDtcbiAgICAgIHRoaXMucG9zdEhhbmRsZXIodGhpcy5jYWNoZVt0aGlzLmNhY2hlS2V5XSwgdHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLnNlZikge1xuICAgICAgICB2YXIgc2V0X2ZpbHRlciA9IEJYKFwic2V0X2ZpbHRlclwiKTtcbiAgICAgICAgc2V0X2ZpbHRlci5kaXNhYmxlZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY3VyRmlsdGVyaW5wdXQgPSBpbnB1dDtcbiAgICAgIEJYLmFqYXgubG9hZEpTT04oXG4gICAgICAgIHRoaXMuYWpheFVSTCxcbiAgICAgICAgdGhpcy52YWx1ZXMycG9zdCh2YWx1ZXMpLFxuICAgICAgICBCWC5kZWxlZ2F0ZSh0aGlzLnBvc3RIYW5kbGVyLCB0aGlzKVxuICAgICAgKTtcbiAgICB9XG4gIH1cbn07XG5cbkpDU21hcnRGaWx0ZXIucHJvdG90eXBlLnVwZGF0ZUl0ZW0gPSBmdW5jdGlvbiAoUElELCBhckl0ZW0pIHtcbiAgaWYgKGFySXRlbS5QUk9QRVJUWV9UWVBFID09PSBcIk5cIiB8fCBhckl0ZW0uUFJJQ0UpIHtcbiAgICB2YXIgdHJhY2tCYXIgPSB3aW5kb3dbXCJ0cmFja0JhclwiICsgUElEXTtcbiAgICBpZiAoIXRyYWNrQmFyICYmIGFySXRlbS5FTkNPREVEX0lEKVxuICAgICAgdHJhY2tCYXIgPSB3aW5kb3dbXCJ0cmFja0JhclwiICsgYXJJdGVtLkVOQ09ERURfSURdO1xuXG4gICAgaWYgKHRyYWNrQmFyICYmIGFySXRlbS5WQUxVRVMpIHtcbiAgICAgIGlmIChhckl0ZW0uVkFMVUVTLk1JTikge1xuICAgICAgICBpZiAoYXJJdGVtLlZBTFVFUy5NSU4uRklMVEVSRURfVkFMVUUpXG4gICAgICAgICAgdHJhY2tCYXIuc2V0TWluRmlsdGVyZWRWYWx1ZShhckl0ZW0uVkFMVUVTLk1JTi5GSUxURVJFRF9WQUxVRSk7XG4gICAgICAgIGVsc2UgdHJhY2tCYXIuc2V0TWluRmlsdGVyZWRWYWx1ZShhckl0ZW0uVkFMVUVTLk1JTi5WQUxVRSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChhckl0ZW0uVkFMVUVTLk1BWCkge1xuICAgICAgICBpZiAoYXJJdGVtLlZBTFVFUy5NQVguRklMVEVSRURfVkFMVUUpXG4gICAgICAgICAgdHJhY2tCYXIuc2V0TWF4RmlsdGVyZWRWYWx1ZShhckl0ZW0uVkFMVUVTLk1BWC5GSUxURVJFRF9WQUxVRSk7XG4gICAgICAgIGVsc2UgdHJhY2tCYXIuc2V0TWF4RmlsdGVyZWRWYWx1ZShhckl0ZW0uVkFMVUVTLk1BWC5WQUxVRSk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKGFySXRlbS5WQUxVRVMpIHtcbiAgICBmb3IgKHZhciBpIGluIGFySXRlbS5WQUxVRVMpIHtcbiAgICAgIGlmIChhckl0ZW0uVkFMVUVTLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IGFySXRlbS5WQUxVRVNbaV07XG4gICAgICAgIHZhciBjb250cm9sID0gQlgodmFsdWUuQ09OVFJPTF9JRCk7XG5cbiAgICAgICAgaWYgKCEhY29udHJvbCkge1xuICAgICAgICAgIHZhciBsYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAnW2RhdGEtcm9sZT1cImxhYmVsXycgKyB2YWx1ZS5DT05UUk9MX0lEICsgJ1wiXSdcbiAgICAgICAgICApO1xuICAgICAgICAgIGlmICh2YWx1ZS5ESVNBQkxFRCkge1xuICAgICAgICAgICAgaWYgKGxhYmVsKSBCWC5hZGRDbGFzcyhsYWJlbCwgXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgICAgIGVsc2UgQlguYWRkQ2xhc3MoY29udHJvbC5wYXJlbnROb2RlLCBcImRpc2FibGVkXCIpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAobGFiZWwpIEJYLnJlbW92ZUNsYXNzKGxhYmVsLCBcImRpc2FibGVkXCIpO1xuICAgICAgICAgICAgZWxzZSBCWC5yZW1vdmVDbGFzcyhjb250cm9sLnBhcmVudE5vZGUsIFwiZGlzYWJsZWRcIik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHZhbHVlLmhhc093blByb3BlcnR5KFwiRUxFTUVOVF9DT1VOVFwiKSkge1xuICAgICAgICAgICAgbGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAnW2RhdGEtcm9sZT1cImNvdW50XycgKyB2YWx1ZS5DT05UUk9MX0lEICsgJ1wiXSdcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAobGFiZWwpIGxhYmVsLmlubmVySFRNTCA9IHZhbHVlLkVMRU1FTlRfQ09VTlQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5KQ1NtYXJ0RmlsdGVyLnByb3RvdHlwZS5wb3N0SGFuZGxlciA9IGZ1bmN0aW9uIChyZXN1bHQsIGZyb21DYWNoZSkge1xuICB2YXIgaHJlZkZJTFRFUiwgdXJsLCBjdXJQcm9wO1xuICB2YXIgbW9kZWYgPSBCWChcIm1vZGVmXCIpO1xuICB2YXIgbW9kZWZfbnVtID0gQlgoXCJtb2RlZl9udW1cIik7XG5cbiAgaWYgKCEhcmVzdWx0ICYmICEhcmVzdWx0LklURU1TKSB7XG4gICAgZm9yICh2YXIgcG9wdXBJZCBpbiB0aGlzLnBvcHVwcykge1xuICAgICAgaWYgKHRoaXMucG9wdXBzLmhhc093blByb3BlcnR5KHBvcHVwSWQpKSB7XG4gICAgICAgIHRoaXMucG9wdXBzW3BvcHVwSWRdLmRlc3Ryb3koKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5wb3B1cHMgPSBbXTtcblxuICAgIGZvciAodmFyIFBJRCBpbiByZXN1bHQuSVRFTVMpIHtcbiAgICAgIGlmIChyZXN1bHQuSVRFTVMuaGFzT3duUHJvcGVydHkoUElEKSkge1xuICAgICAgICB0aGlzLnVwZGF0ZUl0ZW0oUElELCByZXN1bHQuSVRFTVNbUElEXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCEhbW9kZWYgJiYgISFtb2RlZl9udW0pIHtcbiAgICAgIG1vZGVmX251bS5pbm5lckhUTUwgPSByZXN1bHQuRUxFTUVOVF9DT1VOVDtcbiAgICAgIGhyZWZGSUxURVIgPSBCWC5maW5kQ2hpbGRyZW4obW9kZWYsIHsgdGFnOiBcIkFcIiB9LCB0cnVlKTtcblxuICAgICAgaWYgKHJlc3VsdC5GSUxURVJfVVJMICYmIGhyZWZGSUxURVIpIHtcbiAgICAgICAgaHJlZkZJTFRFUlswXS5ocmVmID0gQlgudXRpbC5odG1sc3BlY2lhbGNoYXJzYmFjayhyZXN1bHQuRklMVEVSX1VSTCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZXN1bHQuRklMVEVSX0FKQVhfVVJMICYmIHJlc3VsdC5DT01QT05FTlRfQ09OVEFJTkVSX0lEKSB7XG4gICAgICAgIEJYLnVuYmluZEFsbChocmVmRklMVEVSWzBdKTtcbiAgICAgICAgQlguYmluZChocmVmRklMVEVSWzBdLCBcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgdXJsID0gQlgudXRpbC5odG1sc3BlY2lhbGNoYXJzYmFjayhyZXN1bHQuRklMVEVSX0FKQVhfVVJMKTtcbiAgICAgICAgICBCWC5hamF4Lmluc2VydFRvTm9kZSh1cmwsIHJlc3VsdC5DT01QT05FTlRfQ09OVEFJTkVSX0lEKTtcbiAgICAgICAgICByZXR1cm4gQlguUHJldmVudERlZmF1bHQoZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVzdWx0LklOU1RBTlRfUkVMT0FEICYmIHJlc3VsdC5DT01QT05FTlRfQ09OVEFJTkVSX0lEKSB7XG4gICAgICAgIHVybCA9IEJYLnV0aWwuaHRtbHNwZWNpYWxjaGFyc2JhY2socmVzdWx0LkZJTFRFUl9BSkFYX1VSTCk7XG4gICAgICAgIEJYLmFqYXguaW5zZXJ0VG9Ob2RlKHVybCwgcmVzdWx0LkNPTVBPTkVOVF9DT05UQUlORVJfSUQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKG1vZGVmLnN0eWxlLmRpc3BsYXkgPT09IFwibm9uZVwiKSB7XG4gICAgICAgICAgbW9kZWYuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy52aWV3TW9kZSA9PSBcIlZFUlRJQ0FMXCIpIHtcbiAgICAgICAgICBjdXJQcm9wID0gQlguZmluZENoaWxkKFxuICAgICAgICAgICAgQlguZmluZFBhcmVudCh0aGlzLmN1ckZpbHRlcmlucHV0LCB7XG4gICAgICAgICAgICAgIGNsYXNzOiBcImJ4LWZpbHRlci1wYXJhbWV0ZXJzLWJveFwiLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICB7IGNsYXNzOiBcImJ4LWZpbHRlci1jb250YWluZXItbW9kZWZcIiB9LFxuICAgICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgKTtcbiAgICAgICAgICBjdXJQcm9wLmFwcGVuZENoaWxkKG1vZGVmKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZXN1bHQuU0VGX1NFVF9GSUxURVJfVVJMKSB7XG4gICAgICAgICAgdGhpcy5iaW5kVXJsVG9CdXR0b24oXCJzZXRfZmlsdGVyXCIsIHJlc3VsdC5TRUZfU0VUX0ZJTFRFUl9VUkwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKHRoaXMuc2VmKSB7XG4gICAgdmFyIHNldF9maWx0ZXIgPSBCWChcInNldF9maWx0ZXJcIik7XG4gICAgc2V0X2ZpbHRlci5kaXNhYmxlZCA9IGZhbHNlO1xuICB9XG5cbiAgaWYgKCFmcm9tQ2FjaGUgJiYgdGhpcy5jYWNoZUtleSAhPT0gXCJcIikge1xuICAgIHRoaXMuY2FjaGVbdGhpcy5jYWNoZUtleV0gPSByZXN1bHQ7XG4gIH1cbiAgdGhpcy5jYWNoZUtleSA9IFwiXCI7XG59O1xuXG5KQ1NtYXJ0RmlsdGVyLnByb3RvdHlwZS5iaW5kVXJsVG9CdXR0b24gPSBmdW5jdGlvbiAoYnV0dG9uSWQsIHVybCkge1xuICB2YXIgYnV0dG9uID0gQlgoYnV0dG9uSWQpO1xuICBpZiAoYnV0dG9uKSB7XG4gICAgdmFyIHByb3h5ID0gZnVuY3Rpb24gKGosIGZ1bmMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBmdW5jKGopO1xuICAgICAgfTtcbiAgICB9O1xuXG4gICAgaWYgKGJ1dHRvbi50eXBlID09IFwic3VibWl0XCIpIGJ1dHRvbi50eXBlID0gXCJidXR0b25cIjtcblxuICAgIEJYLmJpbmQoXG4gICAgICBidXR0b24sXG4gICAgICBcImNsaWNrXCIsXG4gICAgICBwcm94eSh1cmwsIGZ1bmN0aW9uICh1cmwpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxufTtcblxuSkNTbWFydEZpbHRlci5wcm90b3R5cGUuZ2F0aGVySW5wdXRzVmFsdWVzID0gZnVuY3Rpb24gKHZhbHVlcywgZWxlbWVudHMpIHtcbiAgaWYgKGVsZW1lbnRzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGVsID0gZWxlbWVudHNbaV07XG4gICAgICBpZiAoZWwuZGlzYWJsZWQgfHwgIWVsLnR5cGUpIGNvbnRpbnVlO1xuXG4gICAgICBzd2l0Y2ggKGVsLnR5cGUudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICBjYXNlIFwidGV4dFwiOlxuICAgICAgICBjYXNlIFwidGV4dGFyZWFcIjpcbiAgICAgICAgY2FzZSBcInBhc3N3b3JkXCI6XG4gICAgICAgIGNhc2UgXCJoaWRkZW5cIjpcbiAgICAgICAgY2FzZSBcInNlbGVjdC1vbmVcIjpcbiAgICAgICAgICBpZiAoZWwudmFsdWUubGVuZ3RoKVxuICAgICAgICAgICAgdmFsdWVzW3ZhbHVlcy5sZW5ndGhdID0geyBuYW1lOiBlbC5uYW1lLCB2YWx1ZTogZWwudmFsdWUgfTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcInJhZGlvXCI6XG4gICAgICAgIGNhc2UgXCJjaGVja2JveFwiOlxuICAgICAgICAgIGlmIChlbC5jaGVja2VkKVxuICAgICAgICAgICAgdmFsdWVzW3ZhbHVlcy5sZW5ndGhdID0geyBuYW1lOiBlbC5uYW1lLCB2YWx1ZTogZWwudmFsdWUgfTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcInNlbGVjdC1tdWx0aXBsZVwiOlxuICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZWwub3B0aW9ucy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgaWYgKGVsLm9wdGlvbnNbal0uc2VsZWN0ZWQpXG4gICAgICAgICAgICAgIHZhbHVlc1t2YWx1ZXMubGVuZ3RoXSA9IHtcbiAgICAgICAgICAgICAgICBuYW1lOiBlbC5uYW1lLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBlbC5vcHRpb25zW2pdLnZhbHVlLFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbkpDU21hcnRGaWx0ZXIucHJvdG90eXBlLnZhbHVlczJwb3N0ID0gZnVuY3Rpb24gKHZhbHVlcykge1xuICB2YXIgcG9zdCA9IFtdO1xuICB2YXIgY3VycmVudCA9IHBvc3Q7XG4gIHZhciBpID0gMDtcblxuICB3aGlsZSAoaSA8IHZhbHVlcy5sZW5ndGgpIHtcbiAgICB2YXIgcCA9IHZhbHVlc1tpXS5uYW1lLmluZGV4T2YoXCJbXCIpO1xuICAgIGlmIChwID09IC0xKSB7XG4gICAgICBjdXJyZW50W3ZhbHVlc1tpXS5uYW1lXSA9IHZhbHVlc1tpXS52YWx1ZTtcbiAgICAgIGN1cnJlbnQgPSBwb3N0O1xuICAgICAgaSsrO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgbmFtZSA9IHZhbHVlc1tpXS5uYW1lLnN1YnN0cmluZygwLCBwKTtcbiAgICAgIHZhciByZXN0ID0gdmFsdWVzW2ldLm5hbWUuc3Vic3RyaW5nKHAgKyAxKTtcbiAgICAgIGlmICghY3VycmVudFtuYW1lXSkgY3VycmVudFtuYW1lXSA9IFtdO1xuXG4gICAgICB2YXIgcHAgPSByZXN0LmluZGV4T2YoXCJdXCIpO1xuICAgICAgaWYgKHBwID09IC0xKSB7XG4gICAgICAgIC8vRXJyb3IgLSBub3QgYmFsYW5jZWQgYnJhY2tldHNcbiAgICAgICAgY3VycmVudCA9IHBvc3Q7XG4gICAgICAgIGkrKztcbiAgICAgIH0gZWxzZSBpZiAocHAgPT0gMCkge1xuICAgICAgICAvL05vIGluZGV4LnBocCBzcGVjaWZpZWQgLSBzbyB0YWtlIHRoZSBuZXh0IGludGVnZXJcbiAgICAgICAgY3VycmVudCA9IGN1cnJlbnRbbmFtZV07XG4gICAgICAgIHZhbHVlc1tpXS5uYW1lID0gXCJcIiArIGN1cnJlbnQubGVuZ3RoO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy9Ob3cgaW5kZXgucGhwIG5hbWUgYmVjb21lcyBhbmQgbmFtZSBhbmQgd2UgZ28gZGVlcGVyIGludG8gdGhlIGFycmF5XG4gICAgICAgIGN1cnJlbnQgPSBjdXJyZW50W25hbWVdO1xuICAgICAgICB2YWx1ZXNbaV0ubmFtZSA9IHJlc3Quc3Vic3RyaW5nKDAsIHBwKSArIHJlc3Quc3Vic3RyaW5nKHBwICsgMSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBwb3N0O1xufTtcblxuSkNTbWFydEZpbHRlci5wcm90b3R5cGUuaGlkZUZpbHRlclByb3BzID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgdmFyIG9iaiA9IGVsZW1lbnQucGFyZW50Tm9kZSxcbiAgICBmaWx0ZXJCbG9jayA9IG9iai5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtcm9sZT0nYnhfZmlsdGVyX2Jsb2NrJ11cIiksXG4gICAgcHJvcEFuZ2xlID0gb2JqLnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1yb2xlPSdwcm9wX2FuZ2xlJ11cIik7XG5cbiAgaWYgKEJYLmhhc0NsYXNzKG9iaiwgXCJieC1hY3RpdmVcIikpIHtcbiAgICBuZXcgQlguZWFzaW5nKHtcbiAgICAgIGR1cmF0aW9uOiAzMDAsXG4gICAgICBzdGFydDogeyBvcGFjaXR5OiAxLCBoZWlnaHQ6IGZpbHRlckJsb2NrLm9mZnNldEhlaWdodCB9LFxuICAgICAgZmluaXNoOiB7IG9wYWNpdHk6IDAsIGhlaWdodDogMCB9LFxuICAgICAgdHJhbnNpdGlvbjogQlguZWFzaW5nLnRyYW5zaXRpb25zLnF1YXJ0LFxuICAgICAgc3RlcDogZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICAgIGZpbHRlckJsb2NrLnN0eWxlLm9wYWNpdHkgPSBzdGF0ZS5vcGFjaXR5O1xuICAgICAgICBmaWx0ZXJCbG9jay5zdHlsZS5oZWlnaHQgPSBzdGF0ZS5oZWlnaHQgKyBcInB4XCI7XG4gICAgICB9LFxuICAgICAgY29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZmlsdGVyQmxvY2suc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJcIik7XG4gICAgICAgIEJYLnJlbW92ZUNsYXNzKG9iaiwgXCJieC1hY3RpdmVcIik7XG4gICAgICB9LFxuICAgIH0pLmFuaW1hdGUoKTtcblxuICAgIEJYLmFkZENsYXNzKHByb3BBbmdsZSwgXCJmYS1hbmdsZS1kb3duXCIpO1xuICAgIEJYLnJlbW92ZUNsYXNzKHByb3BBbmdsZSwgXCJmYS1hbmdsZS11cFwiKTtcbiAgfSBlbHNlIHtcbiAgICBmaWx0ZXJCbG9jay5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIGZpbHRlckJsb2NrLnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgIGZpbHRlckJsb2NrLnN0eWxlLmhlaWdodCA9IFwiYXV0b1wiO1xuXG4gICAgdmFyIG9ial9jaGlsZHJlbl9oZWlnaHQgPSBmaWx0ZXJCbG9jay5vZmZzZXRIZWlnaHQ7XG4gICAgZmlsdGVyQmxvY2suc3R5bGUuaGVpZ2h0ID0gMDtcblxuICAgIG5ldyBCWC5lYXNpbmcoe1xuICAgICAgZHVyYXRpb246IDMwMCxcbiAgICAgIHN0YXJ0OiB7IG9wYWNpdHk6IDAsIGhlaWdodDogMCB9LFxuICAgICAgZmluaXNoOiB7IG9wYWNpdHk6IDEsIGhlaWdodDogb2JqX2NoaWxkcmVuX2hlaWdodCB9LFxuICAgICAgdHJhbnNpdGlvbjogQlguZWFzaW5nLnRyYW5zaXRpb25zLnF1YXJ0LFxuICAgICAgc3RlcDogZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICAgIGZpbHRlckJsb2NrLnN0eWxlLm9wYWNpdHkgPSBzdGF0ZS5vcGFjaXR5O1xuICAgICAgICBmaWx0ZXJCbG9jay5zdHlsZS5oZWlnaHQgPSBzdGF0ZS5oZWlnaHQgKyBcInB4XCI7XG4gICAgICB9LFxuICAgICAgY29tcGxldGU6IGZ1bmN0aW9uICgpIHt9LFxuICAgIH0pLmFuaW1hdGUoKTtcblxuICAgIEJYLmFkZENsYXNzKG9iaiwgXCJieC1hY3RpdmVcIik7XG4gICAgQlgucmVtb3ZlQ2xhc3MocHJvcEFuZ2xlLCBcImZhLWFuZ2xlLWRvd25cIik7XG4gICAgQlguYWRkQ2xhc3MocHJvcEFuZ2xlLCBcImZhLWFuZ2xlLXVwXCIpO1xuICB9XG59O1xuXG5KQ1NtYXJ0RmlsdGVyLnByb3RvdHlwZS5zaG93RHJvcERvd25Qb3B1cCA9IGZ1bmN0aW9uIChlbGVtZW50LCBwb3B1cElkKSB7XG4gIHZhciBjb250ZW50Tm9kZSA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcm9sZT1cImRyb3Bkb3duQ29udGVudFwiXScpO1xuICB0aGlzLnBvcHVwc1tcInNtYXJ0RmlsdGVyRHJvcERvd25cIiArIHBvcHVwSWRdID0gQlguUG9wdXBXaW5kb3dNYW5hZ2VyLmNyZWF0ZShcbiAgICBcInNtYXJ0RmlsdGVyRHJvcERvd25cIiArIHBvcHVwSWQsXG4gICAgZWxlbWVudCxcbiAgICB7XG4gICAgICBhdXRvSGlkZTogdHJ1ZSxcbiAgICAgIG9mZnNldExlZnQ6IDAsXG4gICAgICBvZmZzZXRUb3A6IDMsXG4gICAgICBvdmVybGF5OiBmYWxzZSxcbiAgICAgIGRyYWdnYWJsZTogeyByZXN0cmljdDogdHJ1ZSB9LFxuICAgICAgY2xvc2VCeUVzYzogdHJ1ZSxcbiAgICAgIGNvbnRlbnQ6IEJYLmNsb25lKGNvbnRlbnROb2RlKSxcbiAgICB9XG4gICk7XG4gIHRoaXMucG9wdXBzW1wic21hcnRGaWx0ZXJEcm9wRG93blwiICsgcG9wdXBJZF0uc2hvdygpO1xufTtcblxuSkNTbWFydEZpbHRlci5wcm90b3R5cGUuc2VsZWN0RHJvcERvd25JdGVtID0gZnVuY3Rpb24gKGVsZW1lbnQsIGNvbnRyb2xJZCkge1xuICB0aGlzLmtleXVwKEJYKGNvbnRyb2xJZCkpO1xuXG4gIHZhciB3cmFwQ29udGFpbmVyID0gQlguZmluZFBhcmVudChcbiAgICBCWChjb250cm9sSWQpLFxuICAgIHsgY2xhc3NOYW1lOiBcImJ4LWZpbHRlci1zZWxlY3QtY29udGFpbmVyXCIgfSxcbiAgICBmYWxzZVxuICApO1xuXG4gIHZhciBjdXJyZW50T3B0aW9uID0gd3JhcENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxuICAgICdbZGF0YS1yb2xlPVwiY3VycmVudE9wdGlvblwiXSdcbiAgKTtcbiAgY3VycmVudE9wdGlvbi5pbm5lckhUTUwgPSBlbGVtZW50LmlubmVySFRNTDtcbiAgQlguUG9wdXBXaW5kb3dNYW5hZ2VyLmdldEN1cnJlbnRQb3B1cCgpLmNsb3NlKCk7XG59O1xuXG5CWC5uYW1lc3BhY2UoXCJCWC5JYmxvY2suU21hcnRGaWx0ZXJcIik7XG5CWC5JYmxvY2suU21hcnRGaWx0ZXIgPSAoZnVuY3Rpb24gKCkge1xuICAvKiogQHBhcmFtIHt7XG5cdFx0XHRsZWZ0U2xpZGVyOiBzdHJpbmcsXG5cdFx0XHRyaWdodFNsaWRlcjogc3RyaW5nLFxuXHRcdFx0dHJhY2tlcjogc3RyaW5nLFxuXHRcdFx0dHJhY2tlcldyYXA6IHN0cmluZyxcblx0XHRcdG1pbklucHV0SWQ6IHN0cmluZyxcblx0XHRcdG1heElucHV0SWQ6IHN0cmluZyxcblx0XHRcdG1pblByaWNlOiBmbG9hdHxpbnR8c3RyaW5nLFxuXHRcdFx0bWF4UHJpY2U6IGZsb2F0fGludHxzdHJpbmcsXG5cdFx0XHRjdXJNaW5QcmljZTogZmxvYXR8aW50fHN0cmluZyxcblx0XHRcdGN1ck1heFByaWNlOiBmbG9hdHxpbnR8c3RyaW5nLFxuXHRcdFx0Zmx0TWluUHJpY2U6IGZsb2F0fGludHxzdHJpbmd8bnVsbCxcblx0XHRcdGZsdE1heFByaWNlOiBmbG9hdHxpbnR8c3RyaW5nfG51bGwsXG5cdFx0XHRwcmVjaXNpb246IGludHxudWxsLFxuXHRcdFx0Y29sb3JVbmF2YWlsYWJsZUFjdGl2ZTogc3RyaW5nLFxuXHRcdFx0Y29sb3JBdmFpbGFibGVBY3RpdmU6IHN0cmluZyxcblx0XHRcdGNvbG9yQXZhaWxhYmxlSW5hY3RpdmU6IHN0cmluZ1xuXHRcdH19IGFyUGFyYW1zXG4gICAgICovXG4gIHZhciBTbWFydEZpbHRlciA9IGZ1bmN0aW9uIChhclBhcmFtcykge1xuICAgIGlmICh0eXBlb2YgYXJQYXJhbXMgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgIHRoaXMubGVmdFNsaWRlciA9IEJYKGFyUGFyYW1zLmxlZnRTbGlkZXIpO1xuICAgICAgdGhpcy5yaWdodFNsaWRlciA9IEJYKGFyUGFyYW1zLnJpZ2h0U2xpZGVyKTtcbiAgICAgIHRoaXMudHJhY2tlciA9IEJYKGFyUGFyYW1zLnRyYWNrZXIpO1xuICAgICAgdGhpcy50cmFja2VyV3JhcCA9IEJYKGFyUGFyYW1zLnRyYWNrZXJXcmFwKTtcblxuICAgICAgdGhpcy5taW5JbnB1dCA9IEJYKGFyUGFyYW1zLm1pbklucHV0SWQpO1xuICAgICAgdGhpcy5tYXhJbnB1dCA9IEJYKGFyUGFyYW1zLm1heElucHV0SWQpO1xuXG4gICAgICB0aGlzLm1pblByaWNlID0gcGFyc2VGbG9hdChhclBhcmFtcy5taW5QcmljZSk7XG4gICAgICB0aGlzLm1heFByaWNlID0gcGFyc2VGbG9hdChhclBhcmFtcy5tYXhQcmljZSk7XG5cbiAgICAgIHRoaXMuY3VyTWluUHJpY2UgPSBwYXJzZUZsb2F0KGFyUGFyYW1zLmN1ck1pblByaWNlKTtcbiAgICAgIHRoaXMuY3VyTWF4UHJpY2UgPSBwYXJzZUZsb2F0KGFyUGFyYW1zLmN1ck1heFByaWNlKTtcblxuICAgICAgdGhpcy5mbHRNaW5QcmljZSA9IGFyUGFyYW1zLmZsdE1pblByaWNlXG4gICAgICAgID8gcGFyc2VGbG9hdChhclBhcmFtcy5mbHRNaW5QcmljZSlcbiAgICAgICAgOiBwYXJzZUZsb2F0KGFyUGFyYW1zLmN1ck1pblByaWNlKTtcbiAgICAgIHRoaXMuZmx0TWF4UHJpY2UgPSBhclBhcmFtcy5mbHRNYXhQcmljZVxuICAgICAgICA/IHBhcnNlRmxvYXQoYXJQYXJhbXMuZmx0TWF4UHJpY2UpXG4gICAgICAgIDogcGFyc2VGbG9hdChhclBhcmFtcy5jdXJNYXhQcmljZSk7XG5cbiAgICAgIHRoaXMucHJlY2lzaW9uID0gYXJQYXJhbXMucHJlY2lzaW9uIHx8IDA7XG5cbiAgICAgIHRoaXMucHJpY2VEaWZmID0gdGhpcy5tYXhQcmljZSAtIHRoaXMubWluUHJpY2U7XG5cbiAgICAgIHRoaXMubGVmdFBlcmNlbnQgPSAwO1xuICAgICAgdGhpcy5yaWdodFBlcmNlbnQgPSAwO1xuXG4gICAgICB0aGlzLmZsdE1pblBlcmNlbnQgPSAwO1xuICAgICAgdGhpcy5mbHRNYXhQZXJjZW50ID0gMDtcblxuICAgICAgdGhpcy5jb2xvclVuYXZhaWxhYmxlQWN0aXZlID0gQlgoYXJQYXJhbXMuY29sb3JVbmF2YWlsYWJsZUFjdGl2ZSk7IC8vZ3JheVxuICAgICAgdGhpcy5jb2xvckF2YWlsYWJsZUFjdGl2ZSA9IEJYKGFyUGFyYW1zLmNvbG9yQXZhaWxhYmxlQWN0aXZlKTsgLy9ibHVlXG4gICAgICB0aGlzLmNvbG9yQXZhaWxhYmxlSW5hY3RpdmUgPSBCWChhclBhcmFtcy5jb2xvckF2YWlsYWJsZUluYWN0aXZlKTsgLy9saWdodCBibHVlXG5cbiAgICAgIHRoaXMuaXNUb3VjaCA9IGZhbHNlO1xuXG4gICAgICB0aGlzLmluaXQoKTtcblxuICAgICAgaWYgKFwib250b3VjaHN0YXJ0XCIgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuaXNUb3VjaCA9IHRydWU7XG5cbiAgICAgICAgQlguYmluZChcbiAgICAgICAgICB0aGlzLmxlZnRTbGlkZXIsXG4gICAgICAgICAgXCJ0b3VjaHN0YXJ0XCIsXG4gICAgICAgICAgQlgucHJveHkoZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLm9uTW92ZUxlZnRTbGlkZXIoZXZlbnQpO1xuICAgICAgICAgIH0sIHRoaXMpXG4gICAgICAgICk7XG5cbiAgICAgICAgQlguYmluZChcbiAgICAgICAgICB0aGlzLnJpZ2h0U2xpZGVyLFxuICAgICAgICAgIFwidG91Y2hzdGFydFwiLFxuICAgICAgICAgIEJYLnByb3h5KGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgdGhpcy5vbk1vdmVSaWdodFNsaWRlcihldmVudCk7XG4gICAgICAgICAgfSwgdGhpcylcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIEJYLmJpbmQoXG4gICAgICAgICAgdGhpcy5sZWZ0U2xpZGVyLFxuICAgICAgICAgIFwibW91c2Vkb3duXCIsXG4gICAgICAgICAgQlgucHJveHkoZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLm9uTW92ZUxlZnRTbGlkZXIoZXZlbnQpO1xuICAgICAgICAgIH0sIHRoaXMpXG4gICAgICAgICk7XG5cbiAgICAgICAgQlguYmluZChcbiAgICAgICAgICB0aGlzLnJpZ2h0U2xpZGVyLFxuICAgICAgICAgIFwibW91c2Vkb3duXCIsXG4gICAgICAgICAgQlgucHJveHkoZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLm9uTW92ZVJpZ2h0U2xpZGVyKGV2ZW50KTtcbiAgICAgICAgICB9LCB0aGlzKVxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBCWC5iaW5kKFxuICAgICAgICB0aGlzLm1pbklucHV0LFxuICAgICAgICBcImtleXVwXCIsXG4gICAgICAgIEJYLnByb3h5KGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIHRoaXMub25JbnB1dENoYW5nZSgpO1xuICAgICAgICB9LCB0aGlzKVxuICAgICAgKTtcblxuICAgICAgQlguYmluZChcbiAgICAgICAgdGhpcy5tYXhJbnB1dCxcbiAgICAgICAgXCJrZXl1cFwiLFxuICAgICAgICBCWC5wcm94eShmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICB0aGlzLm9uSW5wdXRDaGFuZ2UoKTtcbiAgICAgICAgfSwgdGhpcylcbiAgICAgICk7XG4gICAgfVxuICB9O1xuXG4gIFNtYXJ0RmlsdGVyLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBwcmljZURpZmY7XG5cbiAgICBpZiAodGhpcy5jdXJNaW5QcmljZSA+IHRoaXMubWluUHJpY2UpIHtcbiAgICAgIHByaWNlRGlmZiA9IHRoaXMuY3VyTWluUHJpY2UgLSB0aGlzLm1pblByaWNlO1xuICAgICAgdGhpcy5sZWZ0UGVyY2VudCA9IChwcmljZURpZmYgKiAxMDApIC8gdGhpcy5wcmljZURpZmY7XG5cbiAgICAgIHRoaXMubGVmdFNsaWRlci5zdHlsZS5sZWZ0ID0gdGhpcy5sZWZ0UGVyY2VudCArIFwiJVwiO1xuICAgICAgdGhpcy5jb2xvclVuYXZhaWxhYmxlQWN0aXZlLnN0eWxlLmxlZnQgPSB0aGlzLmxlZnRQZXJjZW50ICsgXCIlXCI7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRNaW5GaWx0ZXJlZFZhbHVlKHRoaXMuZmx0TWluUHJpY2UpO1xuXG4gICAgaWYgKHRoaXMuY3VyTWF4UHJpY2UgPCB0aGlzLm1heFByaWNlKSB7XG4gICAgICBwcmljZURpZmYgPSB0aGlzLm1heFByaWNlIC0gdGhpcy5jdXJNYXhQcmljZTtcbiAgICAgIHRoaXMucmlnaHRQZXJjZW50ID0gKHByaWNlRGlmZiAqIDEwMCkgLyB0aGlzLnByaWNlRGlmZjtcblxuICAgICAgdGhpcy5yaWdodFNsaWRlci5zdHlsZS5yaWdodCA9IHRoaXMucmlnaHRQZXJjZW50ICsgXCIlXCI7XG4gICAgICB0aGlzLmNvbG9yVW5hdmFpbGFibGVBY3RpdmUuc3R5bGUucmlnaHQgPSB0aGlzLnJpZ2h0UGVyY2VudCArIFwiJVwiO1xuICAgIH1cblxuICAgIHRoaXMuc2V0TWF4RmlsdGVyZWRWYWx1ZSh0aGlzLmZsdE1heFByaWNlKTtcbiAgfTtcblxuICBTbWFydEZpbHRlci5wcm90b3R5cGUuc2V0TWluRmlsdGVyZWRWYWx1ZSA9IGZ1bmN0aW9uIChmbHRNaW5QcmljZSkge1xuICAgIHRoaXMuZmx0TWluUHJpY2UgPSBwYXJzZUZsb2F0KGZsdE1pblByaWNlKTtcbiAgICBpZiAodGhpcy5mbHRNaW5QcmljZSA+PSB0aGlzLm1pblByaWNlKSB7XG4gICAgICB2YXIgcHJpY2VEaWZmID0gdGhpcy5mbHRNaW5QcmljZSAtIHRoaXMubWluUHJpY2U7XG4gICAgICB0aGlzLmZsdE1pblBlcmNlbnQgPSAocHJpY2VEaWZmICogMTAwKSAvIHRoaXMucHJpY2VEaWZmO1xuICAgICAgaWYgKHRoaXMuY29sb3JBdmFpbGFibGVBY3RpdmUpIHtcbiAgICAgICAgaWYgKHRoaXMubGVmdFBlcmNlbnQgPiB0aGlzLmZsdE1pblBlcmNlbnQpXG4gICAgICAgICAgdGhpcy5jb2xvckF2YWlsYWJsZUFjdGl2ZS5zdHlsZS5sZWZ0ID0gdGhpcy5sZWZ0UGVyY2VudCArIFwiJVwiO1xuICAgICAgICBlbHNlIHRoaXMuY29sb3JBdmFpbGFibGVBY3RpdmUuc3R5bGUubGVmdCA9IHRoaXMuZmx0TWluUGVyY2VudCArIFwiJVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5jb2xvckF2YWlsYWJsZUluYWN0aXZlKVxuICAgICAgICB0aGlzLmNvbG9yQXZhaWxhYmxlSW5hY3RpdmUuc3R5bGUubGVmdCA9IHRoaXMuZmx0TWluUGVyY2VudCArIFwiJVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5jb2xvckF2YWlsYWJsZUFjdGl2ZSkge1xuICAgICAgICB0aGlzLmNvbG9yQXZhaWxhYmxlQWN0aXZlLnN0eWxlLmxlZnQgPSBcIjAlXCI7XG4gICAgICAgIHRoaXMuY29sb3JBdmFpbGFibGVJbmFjdGl2ZS5zdHlsZS5sZWZ0ID0gXCIwJVwiO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBTbWFydEZpbHRlci5wcm90b3R5cGUuc2V0TWF4RmlsdGVyZWRWYWx1ZSA9IGZ1bmN0aW9uIChmbHRNYXhQcmljZSkge1xuICAgIHRoaXMuZmx0TWF4UHJpY2UgPSBwYXJzZUZsb2F0KGZsdE1heFByaWNlKTtcbiAgICBpZiAodGhpcy5mbHRNYXhQcmljZSA8PSB0aGlzLm1heFByaWNlKSB7XG4gICAgICB2YXIgcHJpY2VEaWZmID0gdGhpcy5tYXhQcmljZSAtIHRoaXMuZmx0TWF4UHJpY2U7XG4gICAgICB0aGlzLmZsdE1heFBlcmNlbnQgPSAocHJpY2VEaWZmICogMTAwKSAvIHRoaXMucHJpY2VEaWZmO1xuXG4gICAgICBpZiAodGhpcy5jb2xvckF2YWlsYWJsZUFjdGl2ZSkge1xuICAgICAgICBpZiAodGhpcy5yaWdodFBlcmNlbnQgPiB0aGlzLmZsdE1heFBlcmNlbnQpXG4gICAgICAgICAgdGhpcy5jb2xvckF2YWlsYWJsZUFjdGl2ZS5zdHlsZS5yaWdodCA9IHRoaXMucmlnaHRQZXJjZW50ICsgXCIlXCI7XG4gICAgICAgIGVsc2UgdGhpcy5jb2xvckF2YWlsYWJsZUFjdGl2ZS5zdHlsZS5yaWdodCA9IHRoaXMuZmx0TWF4UGVyY2VudCArIFwiJVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5jb2xvckF2YWlsYWJsZUluYWN0aXZlKVxuICAgICAgICB0aGlzLmNvbG9yQXZhaWxhYmxlSW5hY3RpdmUuc3R5bGUucmlnaHQgPSB0aGlzLmZsdE1heFBlcmNlbnQgKyBcIiVcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuY29sb3JBdmFpbGFibGVBY3RpdmUpIHtcbiAgICAgICAgdGhpcy5jb2xvckF2YWlsYWJsZUFjdGl2ZS5zdHlsZS5yaWdodCA9IFwiMCVcIjtcbiAgICAgICAgdGhpcy5jb2xvckF2YWlsYWJsZUluYWN0aXZlLnN0eWxlLnJpZ2h0ID0gXCIwJVwiO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBTbWFydEZpbHRlci5wcm90b3R5cGUuZ2V0WENvb3JkID0gZnVuY3Rpb24gKGVsZW0pIHtcbiAgICB2YXIgYm94ID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB2YXIgYm9keSA9IGRvY3VtZW50LmJvZHk7XG4gICAgdmFyIGRvY0VsZW0gPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cbiAgICB2YXIgc2Nyb2xsTGVmdCA9XG4gICAgICB3aW5kb3cucGFnZVhPZmZzZXQgfHwgZG9jRWxlbS5zY3JvbGxMZWZ0IHx8IGJvZHkuc2Nyb2xsTGVmdDtcbiAgICB2YXIgY2xpZW50TGVmdCA9IGRvY0VsZW0uY2xpZW50TGVmdCB8fCBib2R5LmNsaWVudExlZnQgfHwgMDtcbiAgICB2YXIgbGVmdCA9IGJveC5sZWZ0ICsgc2Nyb2xsTGVmdCAtIGNsaWVudExlZnQ7XG5cbiAgICByZXR1cm4gTWF0aC5yb3VuZChsZWZ0KTtcbiAgfTtcblxuICBTbWFydEZpbHRlci5wcm90b3R5cGUuZ2V0UGFnZVggPSBmdW5jdGlvbiAoZSkge1xuICAgIGUgPSBlIHx8IHdpbmRvdy5ldmVudDtcbiAgICB2YXIgcGFnZVggPSBudWxsO1xuXG4gICAgaWYgKHRoaXMuaXNUb3VjaCAmJiBldmVudC50YXJnZXRUb3VjaGVzWzBdICE9IG51bGwpIHtcbiAgICAgIHBhZ2VYID0gZS50YXJnZXRUb3VjaGVzWzBdLnBhZ2VYO1xuICAgIH0gZWxzZSBpZiAoZS5wYWdlWCAhPSBudWxsKSB7XG4gICAgICBwYWdlWCA9IGUucGFnZVg7XG4gICAgfSBlbHNlIGlmIChlLmNsaWVudFggIT0gbnVsbCkge1xuICAgICAgdmFyIGh0bWwgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICB2YXIgYm9keSA9IGRvY3VtZW50LmJvZHk7XG5cbiAgICAgIHBhZ2VYID0gZS5jbGllbnRYICsgKGh0bWwuc2Nyb2xsTGVmdCB8fCAoYm9keSAmJiBib2R5LnNjcm9sbExlZnQpIHx8IDApO1xuICAgICAgcGFnZVggLT0gaHRtbC5jbGllbnRMZWZ0IHx8IDA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhZ2VYO1xuICB9O1xuXG4gIFNtYXJ0RmlsdGVyLnByb3RvdHlwZS5yZWNvdW50TWluUHJpY2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG5ld01pblByaWNlID0gKHRoaXMucHJpY2VEaWZmICogdGhpcy5sZWZ0UGVyY2VudCkgLyAxMDA7XG4gICAgbmV3TWluUHJpY2UgPSAodGhpcy5taW5QcmljZSArIG5ld01pblByaWNlKS50b0ZpeGVkKHRoaXMucHJlY2lzaW9uKTtcblxuICAgIGlmIChuZXdNaW5QcmljZSAhPSB0aGlzLm1pblByaWNlKSB0aGlzLm1pbklucHV0LnZhbHVlID0gbmV3TWluUHJpY2U7XG4gICAgZWxzZSB0aGlzLm1pbklucHV0LnZhbHVlID0gXCJcIjtcbiAgICAvKiogQGdsb2JhbCBKQ1NtYXJ0RmlsdGVyIHNtYXJ0RmlsdGVyICovXG4gICAgc21hcnRGaWx0ZXIua2V5dXAodGhpcy5taW5JbnB1dCk7XG4gIH07XG5cbiAgU21hcnRGaWx0ZXIucHJvdG90eXBlLnJlY291bnRNYXhQcmljZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbmV3TWF4UHJpY2UgPSAodGhpcy5wcmljZURpZmYgKiB0aGlzLnJpZ2h0UGVyY2VudCkgLyAxMDA7XG4gICAgbmV3TWF4UHJpY2UgPSAodGhpcy5tYXhQcmljZSAtIG5ld01heFByaWNlKS50b0ZpeGVkKHRoaXMucHJlY2lzaW9uKTtcblxuICAgIGlmIChuZXdNYXhQcmljZSAhPSB0aGlzLm1heFByaWNlKSB0aGlzLm1heElucHV0LnZhbHVlID0gbmV3TWF4UHJpY2U7XG4gICAgZWxzZSB0aGlzLm1heElucHV0LnZhbHVlID0gXCJcIjtcbiAgICAvKiogQGdsb2JhbCBKQ1NtYXJ0RmlsdGVyIHNtYXJ0RmlsdGVyICovXG4gICAgc21hcnRGaWx0ZXIua2V5dXAodGhpcy5tYXhJbnB1dCk7XG4gIH07XG5cbiAgU21hcnRGaWx0ZXIucHJvdG90eXBlLm9uSW5wdXRDaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHByaWNlRGlmZjtcbiAgICBpZiAodGhpcy5taW5JbnB1dC52YWx1ZSkge1xuICAgICAgdmFyIGxlZnRJbnB1dFZhbHVlID0gdGhpcy5taW5JbnB1dC52YWx1ZTtcbiAgICAgIGlmIChsZWZ0SW5wdXRWYWx1ZSA8IHRoaXMubWluUHJpY2UpIGxlZnRJbnB1dFZhbHVlID0gdGhpcy5taW5QcmljZTtcblxuICAgICAgaWYgKGxlZnRJbnB1dFZhbHVlID4gdGhpcy5tYXhQcmljZSkgbGVmdElucHV0VmFsdWUgPSB0aGlzLm1heFByaWNlO1xuXG4gICAgICBwcmljZURpZmYgPSBsZWZ0SW5wdXRWYWx1ZSAtIHRoaXMubWluUHJpY2U7XG4gICAgICB0aGlzLmxlZnRQZXJjZW50ID0gKHByaWNlRGlmZiAqIDEwMCkgLyB0aGlzLnByaWNlRGlmZjtcblxuICAgICAgdGhpcy5tYWtlTGVmdFNsaWRlck1vdmUoZmFsc2UpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm1heElucHV0LnZhbHVlKSB7XG4gICAgICB2YXIgcmlnaHRJbnB1dFZhbHVlID0gdGhpcy5tYXhJbnB1dC52YWx1ZTtcbiAgICAgIGlmIChyaWdodElucHV0VmFsdWUgPCB0aGlzLm1pblByaWNlKSByaWdodElucHV0VmFsdWUgPSB0aGlzLm1pblByaWNlO1xuXG4gICAgICBpZiAocmlnaHRJbnB1dFZhbHVlID4gdGhpcy5tYXhQcmljZSkgcmlnaHRJbnB1dFZhbHVlID0gdGhpcy5tYXhQcmljZTtcblxuICAgICAgcHJpY2VEaWZmID0gdGhpcy5tYXhQcmljZSAtIHJpZ2h0SW5wdXRWYWx1ZTtcbiAgICAgIHRoaXMucmlnaHRQZXJjZW50ID0gKHByaWNlRGlmZiAqIDEwMCkgLyB0aGlzLnByaWNlRGlmZjtcblxuICAgICAgdGhpcy5tYWtlUmlnaHRTbGlkZXJNb3ZlKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgU21hcnRGaWx0ZXIucHJvdG90eXBlLm1ha2VMZWZ0U2xpZGVyTW92ZSA9IGZ1bmN0aW9uIChyZWNvdW50UHJpY2UpIHtcbiAgICByZWNvdW50UHJpY2UgPSByZWNvdW50UHJpY2UgIT09IGZhbHNlO1xuXG4gICAgdGhpcy5sZWZ0U2xpZGVyLnN0eWxlLmxlZnQgPSB0aGlzLmxlZnRQZXJjZW50ICsgXCIlXCI7XG4gICAgdGhpcy5jb2xvclVuYXZhaWxhYmxlQWN0aXZlLnN0eWxlLmxlZnQgPSB0aGlzLmxlZnRQZXJjZW50ICsgXCIlXCI7XG5cbiAgICB2YXIgYXJlQm90aFNsaWRlcnNNb3ZpbmcgPSBmYWxzZTtcbiAgICBpZiAodGhpcy5sZWZ0UGVyY2VudCArIHRoaXMucmlnaHRQZXJjZW50ID49IDEwMCkge1xuICAgICAgYXJlQm90aFNsaWRlcnNNb3ZpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5yaWdodFBlcmNlbnQgPSAxMDAgLSB0aGlzLmxlZnRQZXJjZW50O1xuICAgICAgdGhpcy5yaWdodFNsaWRlci5zdHlsZS5yaWdodCA9IHRoaXMucmlnaHRQZXJjZW50ICsgXCIlXCI7XG4gICAgICB0aGlzLmNvbG9yVW5hdmFpbGFibGVBY3RpdmUuc3R5bGUucmlnaHQgPSB0aGlzLnJpZ2h0UGVyY2VudCArIFwiJVwiO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgIHRoaXMubGVmdFBlcmNlbnQgPj0gdGhpcy5mbHRNaW5QZXJjZW50ICYmXG4gICAgICB0aGlzLmxlZnRQZXJjZW50IDw9IDEwMCAtIHRoaXMuZmx0TWF4UGVyY2VudFxuICAgICkge1xuICAgICAgdGhpcy5jb2xvckF2YWlsYWJsZUFjdGl2ZS5zdHlsZS5sZWZ0ID0gdGhpcy5sZWZ0UGVyY2VudCArIFwiJVwiO1xuICAgICAgaWYgKGFyZUJvdGhTbGlkZXJzTW92aW5nKSB7XG4gICAgICAgIHRoaXMuY29sb3JBdmFpbGFibGVBY3RpdmUuc3R5bGUucmlnaHQgPSAxMDAgLSB0aGlzLmxlZnRQZXJjZW50ICsgXCIlXCI7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLmxlZnRQZXJjZW50IDw9IHRoaXMuZmx0TWluUGVyY2VudCkge1xuICAgICAgdGhpcy5jb2xvckF2YWlsYWJsZUFjdGl2ZS5zdHlsZS5sZWZ0ID0gdGhpcy5mbHRNaW5QZXJjZW50ICsgXCIlXCI7XG4gICAgICBpZiAoYXJlQm90aFNsaWRlcnNNb3ZpbmcpIHtcbiAgICAgICAgdGhpcy5jb2xvckF2YWlsYWJsZUFjdGl2ZS5zdHlsZS5yaWdodCA9IDEwMCAtIHRoaXMuZmx0TWluUGVyY2VudCArIFwiJVwiO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5sZWZ0UGVyY2VudCA+PSB0aGlzLmZsdE1heFBlcmNlbnQpIHtcbiAgICAgIHRoaXMuY29sb3JBdmFpbGFibGVBY3RpdmUuc3R5bGUubGVmdCA9IDEwMCAtIHRoaXMuZmx0TWF4UGVyY2VudCArIFwiJVwiO1xuICAgICAgaWYgKGFyZUJvdGhTbGlkZXJzTW92aW5nKSB7XG4gICAgICAgIHRoaXMuY29sb3JBdmFpbGFibGVBY3RpdmUuc3R5bGUucmlnaHQgPSB0aGlzLmZsdE1heFBlcmNlbnQgKyBcIiVcIjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocmVjb3VudFByaWNlKSB7XG4gICAgICB0aGlzLnJlY291bnRNaW5QcmljZSgpO1xuICAgICAgaWYgKGFyZUJvdGhTbGlkZXJzTW92aW5nKSB0aGlzLnJlY291bnRNYXhQcmljZSgpO1xuICAgIH1cbiAgfTtcblxuICBTbWFydEZpbHRlci5wcm90b3R5cGUuY291bnROZXdMZWZ0ID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgdmFyIHBhZ2VYID0gdGhpcy5nZXRQYWdlWChldmVudCk7XG5cbiAgICB2YXIgdHJhY2tlclhDb29yZCA9IHRoaXMuZ2V0WENvb3JkKHRoaXMudHJhY2tlcldyYXApO1xuICAgIHZhciByaWdodEVkZ2UgPSB0aGlzLnRyYWNrZXJXcmFwLm9mZnNldFdpZHRoO1xuXG4gICAgdmFyIG5ld0xlZnQgPSBwYWdlWCAtIHRyYWNrZXJYQ29vcmQ7XG5cbiAgICBpZiAobmV3TGVmdCA8IDApIG5ld0xlZnQgPSAwO1xuICAgIGVsc2UgaWYgKG5ld0xlZnQgPiByaWdodEVkZ2UpIG5ld0xlZnQgPSByaWdodEVkZ2U7XG5cbiAgICByZXR1cm4gbmV3TGVmdDtcbiAgfTtcblxuICBTbWFydEZpbHRlci5wcm90b3R5cGUub25Nb3ZlTGVmdFNsaWRlciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKCF0aGlzLmlzVG91Y2gpIHtcbiAgICAgIHRoaXMubGVmdFNsaWRlci5vbmRyYWdzdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuaXNUb3VjaCkge1xuICAgICAgZG9jdW1lbnQub25tb3VzZW1vdmUgPSBCWC5wcm94eShmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5sZWZ0UGVyY2VudCA9XG4gICAgICAgICAgKHRoaXMuY291bnROZXdMZWZ0KGV2ZW50KSAqIDEwMCkgLyB0aGlzLnRyYWNrZXJXcmFwLm9mZnNldFdpZHRoO1xuICAgICAgICB0aGlzLm1ha2VMZWZ0U2xpZGVyTW92ZSgpO1xuICAgICAgfSwgdGhpcyk7XG5cbiAgICAgIGRvY3VtZW50Lm9ubW91c2V1cCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZG9jdW1lbnQub25tb3VzZW1vdmUgPSBkb2N1bWVudC5vbm1vdXNldXAgPSBudWxsO1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQub250b3VjaG1vdmUgPSBCWC5wcm94eShmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5sZWZ0UGVyY2VudCA9XG4gICAgICAgICAgKHRoaXMuY291bnROZXdMZWZ0KGV2ZW50KSAqIDEwMCkgLyB0aGlzLnRyYWNrZXJXcmFwLm9mZnNldFdpZHRoO1xuICAgICAgICB0aGlzLm1ha2VMZWZ0U2xpZGVyTW92ZSgpO1xuICAgICAgfSwgdGhpcyk7XG5cbiAgICAgIGRvY3VtZW50Lm9udG91Y2hlbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRvY3VtZW50Lm9udG91Y2htb3ZlID0gZG9jdW1lbnQudG91Y2hlbmQgPSBudWxsO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgU21hcnRGaWx0ZXIucHJvdG90eXBlLm1ha2VSaWdodFNsaWRlck1vdmUgPSBmdW5jdGlvbiAocmVjb3VudFByaWNlKSB7XG4gICAgcmVjb3VudFByaWNlID0gcmVjb3VudFByaWNlICE9PSBmYWxzZTtcblxuICAgIHRoaXMucmlnaHRTbGlkZXIuc3R5bGUucmlnaHQgPSB0aGlzLnJpZ2h0UGVyY2VudCArIFwiJVwiO1xuICAgIHRoaXMuY29sb3JVbmF2YWlsYWJsZUFjdGl2ZS5zdHlsZS5yaWdodCA9IHRoaXMucmlnaHRQZXJjZW50ICsgXCIlXCI7XG5cbiAgICB2YXIgYXJlQm90aFNsaWRlcnNNb3ZpbmcgPSBmYWxzZTtcbiAgICBpZiAodGhpcy5sZWZ0UGVyY2VudCArIHRoaXMucmlnaHRQZXJjZW50ID49IDEwMCkge1xuICAgICAgYXJlQm90aFNsaWRlcnNNb3ZpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5sZWZ0UGVyY2VudCA9IDEwMCAtIHRoaXMucmlnaHRQZXJjZW50O1xuICAgICAgdGhpcy5sZWZ0U2xpZGVyLnN0eWxlLmxlZnQgPSB0aGlzLmxlZnRQZXJjZW50ICsgXCIlXCI7XG4gICAgICB0aGlzLmNvbG9yVW5hdmFpbGFibGVBY3RpdmUuc3R5bGUubGVmdCA9IHRoaXMubGVmdFBlcmNlbnQgKyBcIiVcIjtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICAxMDAgLSB0aGlzLnJpZ2h0UGVyY2VudCA+PSB0aGlzLmZsdE1pblBlcmNlbnQgJiZcbiAgICAgIHRoaXMucmlnaHRQZXJjZW50ID49IHRoaXMuZmx0TWF4UGVyY2VudFxuICAgICkge1xuICAgICAgdGhpcy5jb2xvckF2YWlsYWJsZUFjdGl2ZS5zdHlsZS5yaWdodCA9IHRoaXMucmlnaHRQZXJjZW50ICsgXCIlXCI7XG4gICAgICBpZiAoYXJlQm90aFNsaWRlcnNNb3ZpbmcpIHtcbiAgICAgICAgdGhpcy5jb2xvckF2YWlsYWJsZUFjdGl2ZS5zdHlsZS5sZWZ0ID0gMTAwIC0gdGhpcy5yaWdodFBlcmNlbnQgKyBcIiVcIjtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMucmlnaHRQZXJjZW50IDw9IHRoaXMuZmx0TWF4UGVyY2VudCkge1xuICAgICAgdGhpcy5jb2xvckF2YWlsYWJsZUFjdGl2ZS5zdHlsZS5yaWdodCA9IHRoaXMuZmx0TWF4UGVyY2VudCArIFwiJVwiO1xuICAgICAgaWYgKGFyZUJvdGhTbGlkZXJzTW92aW5nKSB7XG4gICAgICAgIHRoaXMuY29sb3JBdmFpbGFibGVBY3RpdmUuc3R5bGUubGVmdCA9IDEwMCAtIHRoaXMuZmx0TWF4UGVyY2VudCArIFwiJVwiO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoMTAwIC0gdGhpcy5yaWdodFBlcmNlbnQgPD0gdGhpcy5mbHRNaW5QZXJjZW50KSB7XG4gICAgICB0aGlzLmNvbG9yQXZhaWxhYmxlQWN0aXZlLnN0eWxlLnJpZ2h0ID0gMTAwIC0gdGhpcy5mbHRNaW5QZXJjZW50ICsgXCIlXCI7XG4gICAgICBpZiAoYXJlQm90aFNsaWRlcnNNb3ZpbmcpIHtcbiAgICAgICAgdGhpcy5jb2xvckF2YWlsYWJsZUFjdGl2ZS5zdHlsZS5sZWZ0ID0gdGhpcy5mbHRNaW5QZXJjZW50ICsgXCIlXCI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHJlY291bnRQcmljZSkge1xuICAgICAgdGhpcy5yZWNvdW50TWF4UHJpY2UoKTtcbiAgICAgIGlmIChhcmVCb3RoU2xpZGVyc01vdmluZykgdGhpcy5yZWNvdW50TWluUHJpY2UoKTtcbiAgICB9XG4gIH07XG5cbiAgU21hcnRGaWx0ZXIucHJvdG90eXBlLm9uTW92ZVJpZ2h0U2xpZGVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoIXRoaXMuaXNUb3VjaCkge1xuICAgICAgdGhpcy5yaWdodFNsaWRlci5vbmRyYWdzdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuaXNUb3VjaCkge1xuICAgICAgZG9jdW1lbnQub25tb3VzZW1vdmUgPSBCWC5wcm94eShmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5yaWdodFBlcmNlbnQgPVxuICAgICAgICAgIDEwMCAtICh0aGlzLmNvdW50TmV3TGVmdChldmVudCkgKiAxMDApIC8gdGhpcy50cmFja2VyV3JhcC5vZmZzZXRXaWR0aDtcbiAgICAgICAgdGhpcy5tYWtlUmlnaHRTbGlkZXJNb3ZlKCk7XG4gICAgICB9LCB0aGlzKTtcblxuICAgICAgZG9jdW1lbnQub25tb3VzZXVwID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBkb2N1bWVudC5vbm1vdXNlbW92ZSA9IGRvY3VtZW50Lm9ubW91c2V1cCA9IG51bGw7XG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5vbnRvdWNobW92ZSA9IEJYLnByb3h5KGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB0aGlzLnJpZ2h0UGVyY2VudCA9XG4gICAgICAgICAgMTAwIC0gKHRoaXMuY291bnROZXdMZWZ0KGV2ZW50KSAqIDEwMCkgLyB0aGlzLnRyYWNrZXJXcmFwLm9mZnNldFdpZHRoO1xuICAgICAgICB0aGlzLm1ha2VSaWdodFNsaWRlck1vdmUoKTtcbiAgICAgIH0sIHRoaXMpO1xuXG4gICAgICBkb2N1bWVudC5vbnRvdWNoZW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBkb2N1bWVudC5vbnRvdWNobW92ZSA9IGRvY3VtZW50Lm9udG91Y2hlbmQgPSBudWxsO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgcmV0dXJuIFNtYXJ0RmlsdGVyO1xufSkoKTtcbiIsImltcG9ydCBub1VpU2xpZGVyIGZyb20gXCJub3Vpc2xpZGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJhbmdlSW5wdXQge1xuICBjb25zdHJ1Y3RvcihzbGlkZXJTZWxlY3Rvcikge1xuICAgIHRoaXMuX2NvbnRhaW5lckVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNsaWRlclNlbGVjdG9yKTtcbiAgICB0aGlzLl9pbnB1dE1pbkVsZW1lbnQgPSB0aGlzLl9jb250YWluZXJFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgLmpzLXJhbmdlLW1pbmBcbiAgICApO1xuICAgIHRoaXMuX2lucHV0TWF4RWxlbWVudCA9IHRoaXMuX2NvbnRhaW5lckVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGAuanMtcmFuZ2UtbWF4YFxuICAgICk7XG4gICAgdGhpcy5fc2xpZGVyRWxlbWVudCA9IHRoaXMuX2NvbnRhaW5lckVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGAuanMtcmFuZ2Utc2xpZGVyYFxuICAgICk7XG5cbiAgICB0aGlzLl9taW5WYWx1ZSA9ICt0aGlzLl9zbGlkZXJFbGVtZW50LmRhdGFzZXQubWluO1xuICAgIHRoaXMuX21heFZhbHVlID0gK3RoaXMuX3NsaWRlckVsZW1lbnQuZGF0YXNldC5tYXg7XG4gICAgdGhpcy5fc3RlcCA9ICt0aGlzLl9zbGlkZXJFbGVtZW50LmRhdGFzZXQuc3RlcDtcblxuICAgIHRoaXMuX29uU2xpZGVyQ2hhbmdlID0gdGhpcy5fb25TbGlkZXJDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9vbk1pbkNoYW5nZSA9IHRoaXMuX29uTWluQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fb25NYXhDaGFuZ2UgPSB0aGlzLl9vbk1heENoYW5nZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgX29uU2xpZGVyQ2hhbmdlKHZhbHVlcykge1xuICAgIGNvbnN0IFttaW4sIG1heF0gPSB2YWx1ZXM7XG4gICAgdGhpcy5faW5wdXRNaW5FbGVtZW50LnZhbHVlID0gTWF0aC50cnVuYyhtaW4pO1xuICAgIHRoaXMuX2lucHV0TWF4RWxlbWVudC52YWx1ZSA9IE1hdGgudHJ1bmMobWF4KTtcbiAgfVxuXG4gIF9vbk1pbkNoYW5nZShldnQpIHtcbiAgICBjb25zdCB7IHZhbHVlIH0gPSBldnQudGFyZ2V0O1xuICAgIHRoaXMuX3NsaWRlckVsZW1lbnQubm9VaVNsaWRlci5zZXQoW01hdGgucm91bmQodmFsdWUpLCBudWxsXSk7XG4gIH1cblxuICBfb25NYXhDaGFuZ2UoZXZ0KSB7XG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gZXZ0LnRhcmdldDtcbiAgICB0aGlzLl9zbGlkZXJFbGVtZW50Lm5vVWlTbGlkZXIuc2V0KFtudWxsLCBNYXRoLnJvdW5kKHZhbHVlKV0pO1xuICB9XG5cbiAgX3NldEhhbmRsZXJzKCkge1xuICAgIHRoaXMuX3NsaWRlckVsZW1lbnQubm9VaVNsaWRlci5vbihgdXBkYXRlYCwgdGhpcy5fb25TbGlkZXJDaGFuZ2UpO1xuICAgIHRoaXMuX2lucHV0TWluRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGBjaGFuZ2VgLCB0aGlzLl9vbk1pbkNoYW5nZSk7XG4gICAgdGhpcy5faW5wdXRNYXhFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoYGNoYW5nZWAsIHRoaXMuX29uTWF4Q2hhbmdlKTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgbm9VaVNsaWRlci5jcmVhdGUodGhpcy5fc2xpZGVyRWxlbWVudCwge1xuICAgICAgc3RhcnQ6IFt0aGlzLl9taW5WYWx1ZSwgdGhpcy5fbWF4VmFsdWVdLFxuICAgICAgY29ubmVjdDogdHJ1ZSxcbiAgICAgIHJhbmdlOiB7XG4gICAgICAgIG1pbjogdGhpcy5fbWluVmFsdWUsXG4gICAgICAgIG1heDogdGhpcy5fbWF4VmFsdWUsXG4gICAgICB9LFxuICAgICAgc3RlcDogdGhpcy5fc3RlcCxcbiAgICAgIHRvb2x0aXBzOiB0cnVlLFxuICAgICAgZm9ybWF0OiB7XG4gICAgICAgIHRvOiAodmFsdWUpID0+IE1hdGgudHJ1bmModmFsdWUpLFxuICAgICAgICBmcm9tOiAodmFsdWUpID0+IE1hdGgudHJ1bmModmFsdWUpLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIHRoaXMuX3NldEhhbmRsZXJzKCk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=