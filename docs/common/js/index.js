/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/dark.js":
/*!************************!*
  !*** ./src/js/dark.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "darkFunc": function() { return /* binding */ darkFunc; }
/* harmony export */ });


var darkFunc = function darkFunc() {
  var darkCheck = document.querySelector('[data-dark="dark"]');
  var localTheme = localStorage.getItem('colormode');

  var darkOn = function darkOn() {
    document.documentElement.setAttribute('data-colormode', 'dark');
    localStorage.setItem('colormode', 'dark');
    darkCheck.checked = true;
  };

  var darkOff = function darkOff() {
    document.documentElement.removeAttribute('data-colormode', 'dark');
    localStorage.setItem('colormode', 'light');
    darkCheck.checked = false;
  }; //ダークモード自動切り替え


  switch (localTheme) {
    case 'dark':
      darkOn();
      break;

    case 'light':
      darkOff();
      break;

    default:
      var darkMode = matchMedia('(prefers-color-scheme:dark)').matches;
      darkMode ? darkOn() : darkOff();
      break;
  } //ダークモード手動切り替え


  darkCheck.addEventListener('change', function () {
    return darkCheck.checked ? darkOn() : darkOff();
  });
};

/***/ }),

/***/ "./src/js/gauge.js":
/*!*************************!*
  !*** ./src/js/gauge.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gaugeFunc": function() { return /* binding */ gaugeFunc; },
/* harmony export */   "delayGaugeFunc": function() { return /* binding */ delayGaugeFunc; }
/* harmony export */ });


function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var gaugeFunc = function gaugeFunc() {
  var datas = document.querySelectorAll('.c-gauge');

  var _iterator = _createForOfIteratorHelper(datas),
      _step;

  try {
    var _loop = function _loop() {
      var data = _step.value;
      //valueの表示
      var val = data.querySelector('[data-gauge-val]');
      var valNum = Number(val.getAttribute('data-gauge-val'));

      if (valNum) {
        var i = 0;
        var aaa = setInterval(function () {
          val.innerHTML = "".concat(i, "%");
          i < valNum ? i++ : clearInterval(aaa);
        }, 20);
      } //gaugeの表示


      var bar = data.querySelector('[data-gauge-inc]');
      var barNum = Number(bar.getAttribute('data-gauge-inc'));

      if (barNum) {
        var sheets = document.styleSheets,
            sheet = sheets[sheets.length - 1];
        var _i = 0;

        var _aaa = setInterval(function () {
          bar.style.width = "".concat(_i, "%");
          _i < barNum ? _i++ : clearInterval(_aaa);
        }, 20);
      }
    };

    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
};
var delayGaugeFunc = function delayGaugeFunc() {
  var options = {
    root: null,
    rootMargin: '0% 0px',
    threshold: 1
  };

  var intersect = function intersect(entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        gaugeFunc();
        observer.disconnect();
      }
    });
  };

  var observer = new IntersectionObserver(intersect, options);
  var boxes = document.querySelectorAll('.c-gauge');

  var observeStart = function observeStart() {
    boxes.forEach(function (box) {
      observer.observe(box); //引数boxと関数intersectのコールバック引数elmsは同じもの
    });
  };

  observeStart();
};

/***/ }),

/***/ "./src/js/gnav-menu.js":
/*!*****************************!*
  !*** ./src/js/gnav-menu.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gnavMenuFunc": function() { return /* binding */ gnavMenuFunc; }
/* harmony export */ });


var gnavMenuFunc = function gnavMenuFunc() {
  var menuButton = document.getElementById('gnav__menu-button__icon');
  var gnav = document.getElementById('gnav');
  var gnavItem = document.getElementsByClassName('gnav__item'); //メニューの開閉

  menuButton.addEventListener('click', function () {
    gnav.classList.add('gnav__open');
  });

  for (var i = 0; i < gnavItem.length; i++) {
    gnavItem[i].addEventListener('click', function () {
      gnav.classList.remove('gnav__open');
    });
  }
};

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*
  !*** ./src/js/index.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scroll_load_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scroll-load.js */ "./src/js/scroll-load.js");
/* harmony import */ var _smooth_scroll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./smooth-scroll.js */ "./src/js/smooth-scroll.js");
/* harmony import */ var _gnav_menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gnav-menu.js */ "./src/js/gnav-menu.js");
/* harmony import */ var _scroll_section_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scroll-section.js */ "./src/js/scroll-section.js");
/* harmony import */ var _dark_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dark.js */ "./src/js/dark.js");
/* harmony import */ var _gauge_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gauge.js */ "./src/js/gauge.js");








(0,_scroll_load_js__WEBPACK_IMPORTED_MODULE_0__.scrollLoadFunc)();
(0,_gnav_menu_js__WEBPACK_IMPORTED_MODULE_2__.gnavMenuFunc)();
(0,_scroll_section_js__WEBPACK_IMPORTED_MODULE_3__.scrollSectionFunc)();
(0,_smooth_scroll_js__WEBPACK_IMPORTED_MODULE_1__.smoothScrollFunc)();
(0,_dark_js__WEBPACK_IMPORTED_MODULE_4__.darkFunc)();
(0,_gauge_js__WEBPACK_IMPORTED_MODULE_5__.delayGaugeFunc)();

/***/ }),

/***/ "./src/js/scroll-load.js":
/*!*******************************!*
  !*** ./src/js/scroll-load.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "scrollLoadFunc": function() { return /* binding */ scrollLoadFunc; }
/* harmony export */ });


var scrollLoadFunc = function scrollLoadFunc() {
  window.addEventListener('scroll', function () {
    var triggerClass = document.querySelectorAll('.scroll-trigger');
    var animateClass = 'is-show';

    for (var i = 0; i < triggerClass.length; i++) {
      var scroll = window.pageYOffset || document.documentElement.scrollTop;
      var triggerTop = triggerClass[i].getBoundingClientRect().top;
      var offset = triggerTop + scroll;
      var windowHeight = window.innerHeight;

      if (scroll > offset - windowHeight + 150) {
        triggerClass[i].classList.add(animateClass);
      }
    }
  });
};

/***/ }),

/***/ "./src/js/scroll-section.js":
/*!**********************************!*
  !*** ./src/js/scroll-section.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "scrollSectionFunc": function() { return /* binding */ scrollSectionFunc; }
/* harmony export */ });


var scrollSectionFunc = function scrollSectionFunc() {
  var secHeight = function secHeight() {
    var sec = document.querySelectorAll('[data-scrlsec]');
    sec.forEach(function (data) {
      data.style.minHeight = window.innerHeight + 'px';
    });
  };

  var options = {
    root: null,
    rootMargin: '0% 0px',
    threshold: 0.05
  };

  var intersect = function intersect(entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        window.scroll({
          top: entry.target.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  };

  var observer = new IntersectionObserver(intersect, options);
  var boxes = document.querySelectorAll('[data-scrlsec]');

  var observeStart = function observeStart() {
    boxes.forEach(function (box) {
      observer.observe(box); //引数boxと関数intersectのコールバック引数elmsは同じもの
    });
  };

  observeStart();
  var pageLinks = document.querySelectorAll('a[href^="#"');

  var pageLinksOut = function pageLinksOut() {
    pageLinks.forEach(function (pageLink) {
      pageLink.addEventListener('click', function (e) {
        observer.disconnect();
        setTimeout(observeStart, 2000); //改善したい
      });
    });
  };

  pageLinksOut();
  window.addEventListener('load', secHeight);
  window.addEventListener('resize', secHeight);
};

/***/ }),

/***/ "./src/js/smooth-scroll.js":
/*!*********************************!*
  !*** ./src/js/smooth-scroll.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "smoothScrollFunc": function() { return /* binding */ smoothScrollFunc; }
/* harmony export */ });


var smoothScrollFunc = function smoothScrollFunc() {
  var a = document.getElementsByTagName('a');

  var _loop = function _loop(i) {
    a[i].addEventListener('click', function (e) {
      var href = a[i].getAttribute('href');
      var pagename = window.location.href;
      pagename = pagename.replace(/#.*/, '');
      href = href.replace(pagename, '');

      if (href.search(/^#/) >= 0) {
        e.preventDefault();
        var target = e.target;
        var targetId = target.hash;
        document.querySelector(targetId).scrollIntoView({
          behavior: "smooth"
        });
        return false;
      }
    });
  };

  for (var i = 0; i < a.length; i++) {
    _loop(i);
  }
};
/*module.exports.func = () => {
    const a = document.querySelectorAll('a[href^="#"]');
    for (let i = 0; i < a.length; i++) {
        a[i].addEventListener('click', e => {
            e.preventDefault();
            const target = e.target;
            const targetId = target.hash
            document.querySelector(targetId).scrollIntoView({
                behavior: "smooth",
                block: "start"
            })
        })
        return false;
    }
}*/

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
//# sourceMappingURL=index.js.map