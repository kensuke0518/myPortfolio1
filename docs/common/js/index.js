/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/dark.js":
/*!************************!*
  !*** ./src/js/dark.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"darkFunc\": function() { return /* binding */ darkFunc; }\n/* harmony export */ });\n\n\nvar darkFunc = function darkFunc() {\n  var darkCheck = document.querySelector('[data-dark=\"dark\"]');\n  var localTheme = localStorage.getItem('colormode');\n\n  var darkOn = function darkOn() {\n    document.documentElement.setAttribute('data-colormode', 'dark');\n    localStorage.setItem('colormode', 'dark');\n    darkCheck.checked = true;\n  };\n\n  var darkOff = function darkOff() {\n    document.documentElement.removeAttribute('data-colormode', 'dark');\n    localStorage.setItem('colormode', 'light');\n    darkCheck.checked = false;\n  }; //ダークモード自動切り替え\n\n\n  switch (localTheme) {\n    case 'dark':\n      darkOn();\n      break;\n\n    case 'light':\n      darkOff();\n      break;\n\n    default:\n      var darkMode = matchMedia('(prefers-color-scheme:dark)').matches;\n      darkMode ? darkOn() : darkOff();\n      break;\n  } //ダークモード手動切り替え\n\n\n  darkCheck.addEventListener('change', function () {\n    return darkCheck.checked ? darkOn() : darkOff();\n  });\n};\n\n//# sourceURL=webpack://app_20201127_myPortfolio/./src/js/dark.js?");

/***/ }),

/***/ "./src/js/gauge.js":
/*!*************************!*
  !*** ./src/js/gauge.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"gaugeFunc\": function() { return /* binding */ gaugeFunc; },\n/* harmony export */   \"delayGaugeFunc\": function() { return /* binding */ delayGaugeFunc; }\n/* harmony export */ });\n\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar gaugeFunc = function gaugeFunc() {\n  var datas = document.querySelectorAll('.c-gauge');\n\n  var _iterator = _createForOfIteratorHelper(datas),\n      _step;\n\n  try {\n    var _loop = function _loop() {\n      var data = _step.value;\n      //valueの表示\n      var val = data.querySelector('[data-gauge-val]');\n      var valNum = Number(val.getAttribute('data-gauge-val'));\n\n      if (valNum) {\n        var i = 0;\n        var aaa = setInterval(function () {\n          val.innerHTML = \"\".concat(i, \"%\");\n          i < valNum ? i++ : clearInterval(aaa);\n        }, 20);\n      } //gaugeの表示\n\n\n      var bar = data.querySelector('[data-gauge-inc]');\n      var barNum = Number(bar.getAttribute('data-gauge-inc'));\n\n      if (barNum) {\n        var sheets = document.styleSheets,\n            sheet = sheets[sheets.length - 1];\n        var _i = 0;\n\n        var _aaa = setInterval(function () {\n          bar.style.width = \"\".concat(_i, \"%\");\n          _i < barNum ? _i++ : clearInterval(_aaa);\n        }, 20);\n      }\n    };\n\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      _loop();\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n};\nvar delayGaugeFunc = function delayGaugeFunc() {\n  var options = {\n    root: null,\n    rootMargin: '0% 0px',\n    threshold: 1\n  };\n\n  var intersect = function intersect(entries, observer) {\n    entries.forEach(function (entry) {\n      if (entry.isIntersecting) {\n        gaugeFunc();\n        observer.disconnect();\n      }\n    });\n  };\n\n  var observer = new IntersectionObserver(intersect, options);\n  var boxes = document.querySelectorAll('.c-gauge');\n\n  var observeStart = function observeStart() {\n    boxes.forEach(function (box) {\n      observer.observe(box); //引数boxと関数intersectのコールバック引数elmsは同じもの\n    });\n  };\n\n  observeStart();\n};\n\n//# sourceURL=webpack://app_20201127_myPortfolio/./src/js/gauge.js?");

/***/ }),

/***/ "./src/js/gnav-menu.js":
/*!*****************************!*
  !*** ./src/js/gnav-menu.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"gnavMenuFunc\": function() { return /* binding */ gnavMenuFunc; }\n/* harmony export */ });\n\n\nvar gnavMenuFunc = function gnavMenuFunc() {\n  var menuButton = document.getElementById('gnav__menu-button__icon');\n  var gnav = document.getElementById('gnav');\n  var gnavItem = document.getElementsByClassName('gnav__item'); //メニューの開閉\n\n  menuButton.addEventListener('click', function () {\n    gnav.classList.add('gnav__open');\n  });\n\n  for (var i = 0; i < gnavItem.length; i++) {\n    gnavItem[i].addEventListener('click', function () {\n      gnav.classList.remove('gnav__open');\n    });\n  }\n};\n\n//# sourceURL=webpack://app_20201127_myPortfolio/./src/js/gnav-menu.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*
  !*** ./src/js/index.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scroll_load_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scroll-load.js */ \"./src/js/scroll-load.js\");\n/* harmony import */ var _smooth_scroll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./smooth-scroll.js */ \"./src/js/smooth-scroll.js\");\n/* harmony import */ var _gnav_menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gnav-menu.js */ \"./src/js/gnav-menu.js\");\n/* harmony import */ var _scroll_section_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scroll-section.js */ \"./src/js/scroll-section.js\");\n/* harmony import */ var _dark_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dark.js */ \"./src/js/dark.js\");\n/* harmony import */ var _gauge_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gauge.js */ \"./src/js/gauge.js\");\n\n\n\n\n\n\n\n\n(0,_scroll_load_js__WEBPACK_IMPORTED_MODULE_0__.scrollLoadFunc)();\n(0,_gnav_menu_js__WEBPACK_IMPORTED_MODULE_2__.gnavMenuFunc)(); //scrollSectionFunc();\n\n(0,_smooth_scroll_js__WEBPACK_IMPORTED_MODULE_1__.smoothScrollFunc)();\n(0,_dark_js__WEBPACK_IMPORTED_MODULE_4__.darkFunc)();\n(0,_gauge_js__WEBPACK_IMPORTED_MODULE_5__.delayGaugeFunc)();\n\n//# sourceURL=webpack://app_20201127_myPortfolio/./src/js/index.js?");

/***/ }),

/***/ "./src/js/scroll-load.js":
/*!*******************************!*
  !*** ./src/js/scroll-load.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"scrollLoadFunc\": function() { return /* binding */ scrollLoadFunc; }\n/* harmony export */ });\n\n\nvar scrollLoadFunc = function scrollLoadFunc() {\n  window.addEventListener('scroll', function () {\n    var triggerClass = document.querySelectorAll('.scroll-trigger');\n    var animateClass = 'is-show';\n\n    for (var i = 0; i < triggerClass.length; i++) {\n      var scroll = window.pageYOffset || document.documentElement.scrollTop;\n      var triggerTop = triggerClass[i].getBoundingClientRect().top;\n      var offset = triggerTop + scroll;\n      var windowHeight = window.innerHeight;\n\n      if (scroll > offset - windowHeight + 150) {\n        triggerClass[i].classList.add(animateClass);\n      }\n    }\n  });\n};\n\n//# sourceURL=webpack://app_20201127_myPortfolio/./src/js/scroll-load.js?");

/***/ }),

/***/ "./src/js/scroll-section.js":
/*!**********************************!*
  !*** ./src/js/scroll-section.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"scrollSectionFunc\": function() { return /* binding */ scrollSectionFunc; }\n/* harmony export */ });\n\n\nvar scrollSectionFunc = function scrollSectionFunc() {\n  var secHeight = function secHeight() {\n    var sec = document.querySelectorAll('[data-scrlsec]');\n    sec.forEach(function (data) {\n      data.style.minHeight = window.innerHeight + 'px';\n    });\n  };\n  /*const options = {\n      root: null,\n      rootMargin: '0% 0px',\n      threshold: 0.05\n  }\n  const intersect = (entries,observer) => {\n      entries.forEach(entry => {\n          if (entry.isIntersecting) {\n              window.scroll({ top: entry.target.offsetTop, behavior: 'smooth' });\n          }\n      })\n  }\n   const observer = new IntersectionObserver(intersect, options);\n  const boxes = document.querySelectorAll('[data-scrlsec]');\n  const observeStart = () => {\n      boxes.forEach(box => {\n          observer.observe(box); //引数boxと関数intersectのコールバック引数elmsは同じもの\n      })\n  }\n  observeStart();\n   const pageLinks = document.querySelectorAll('a[href^=\"#\"');\n  const pageLinksOut = () => {\n      pageLinks.forEach(pageLink => {\n          pageLink.addEventListener('click', e => {\n              observer.disconnect();\n              setTimeout(observeStart, 2000); //改善したい\n          })\n      })\n  }\n  pageLinksOut();*/\n\n\n  window.addEventListener('load', secHeight);\n  window.addEventListener('resize', secHeight);\n};\n\n//# sourceURL=webpack://app_20201127_myPortfolio/./src/js/scroll-section.js?");

/***/ }),

/***/ "./src/js/smooth-scroll.js":
/*!*********************************!*
  !*** ./src/js/smooth-scroll.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"smoothScrollFunc\": function() { return /* binding */ smoothScrollFunc; }\n/* harmony export */ });\n\n\nvar smoothScrollFunc = function smoothScrollFunc() {\n  var a = document.getElementsByTagName('a');\n\n  var _loop = function _loop(i) {\n    a[i].addEventListener('click', function (e) {\n      var href = a[i].getAttribute('href');\n      var pagename = window.location.href;\n      pagename = pagename.replace(/#.*/, '');\n      href = href.replace(pagename, '');\n\n      if (href.search(/^#/) >= 0) {\n        e.preventDefault();\n        var target = e.target;\n        var targetId = target.hash;\n        document.querySelector(targetId).scrollIntoView({\n          behavior: \"smooth\"\n        });\n        return false;\n      }\n    });\n  };\n\n  for (var i = 0; i < a.length; i++) {\n    _loop(i);\n  }\n};\n/*module.exports.func = () => {\n    const a = document.querySelectorAll('a[href^=\"#\"]');\n    for (let i = 0; i < a.length; i++) {\n        a[i].addEventListener('click', e => {\n            e.preventDefault();\n            const target = e.target;\n            const targetId = target.hash\n            document.querySelector(targetId).scrollIntoView({\n                behavior: \"smooth\",\n                block: \"start\"\n            })\n        })\n        return false;\n    }\n}*/\n\n//# sourceURL=webpack://app_20201127_myPortfolio/./src/js/smooth-scroll.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/js/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;