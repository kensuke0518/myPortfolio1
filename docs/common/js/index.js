/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/scroll-load.js":
/*!*******************************!*
  !*** ./src/js/scroll-load.js ***!
  \*******************************/
/***/ (function(module) {

eval("module.exports.func = function () {\n  window.addEventListener('scroll', function () {\n    var triggerClass = document.querySelectorAll('.scroll-trigger');\n    var animateClass = 'is-show';\n\n    for (var i = 0; i < triggerClass.length; i++) {\n      var scroll = window.pageYOffset;\n      var triggerTop = triggerClass[i].getBoundingClientRect().top;\n      var windowHeight = window.outerHeight;\n\n      if (scroll > triggerTop - windowHeight / 2) {\n        triggerClass[i].classList.add(animateClass);\n      }\n    }\n  });\n};\n\n//# sourceURL=webpack://app_20201127_myPortfolio/./src/js/scroll-load.js?");

/***/ }),

/***/ "./src/js/smooth-scroll.js":
/*!*********************************!*
  !*** ./src/js/smooth-scroll.js ***!
  \*********************************/
/***/ (function(module) {

eval("module.exports.func = function () {\n  var a = document.getElementsByTagName('a');\n\n  var _loop = function _loop(i) {\n    a[i].addEventListener('click', function (e) {\n      var href = a[i].getAttribute('href');\n      var pagename = window.location.href;\n      pagename = pagename.replace(/#.*/, '');\n      href = href.replace(pagename, '');\n\n      if (href.search(/^#/) >= 0) {\n        e.preventDefault();\n        var target = e.target;\n        var targetId = target.hash;\n        document.querySelector(targetId).scrollIntoView({\n          behavior: \"smooth\",\n          block: \"start\"\n        });\n        return false;\n      }\n    });\n  };\n\n  for (var i = 0; i < a.length; i++) {\n    _loop(i);\n  }\n};\n/*module.exports.func = () => {\n    const a = document.querySelectorAll('a[href^=\"#\"]');\n    for (let i = 0; i < a.length; i++) {\n        a[i].addEventListener('click', e => {\n            e.preventDefault();\n            const target = e.target;\n            const targetId = target.hash\n            document.querySelector(targetId).scrollIntoView({\n                behavior: \"smooth\",\n                block: \"start\"\n            })\n        })\n        return false;\n    }\n}*/\n\n//# sourceURL=webpack://app_20201127_myPortfolio/./src/js/smooth-scroll.js?");

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
!function() {
/*!*************************!*
  !*** ./src/js/index.js ***!
  \*************************/
eval("var scrollLoad = __webpack_require__(/*! ./scroll-load */ \"./src/js/scroll-load.js\");\n\nvar smoothScroll = __webpack_require__(/*! ./smooth-scroll */ \"./src/js/smooth-scroll.js\");\n\nscrollLoad.func();\nsmoothScroll.func();\n\n//# sourceURL=webpack://app_20201127_myPortfolio/./src/js/index.js?");
}();
/******/ })()
;