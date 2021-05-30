/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/api */ \"./src/models/api.js\");\n/* harmony import */ var _models_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/interface */ \"./src/models/interface.js\");\n\n\n\nconst searchForm = document.getElementById('searchForm');\nconst searchInput = document.getElementById('input-value');\nconst searchBtn = document.getElementById('searchBtn');\n\nsearchForm.addEventListener('submit', (e) => {\n  e.preventDefault();\n});\n\nsearchBtn.addEventListener('click', async () => {\n  if (searchInput.value === '') return;\n  const apiData = await _models_api__WEBPACK_IMPORTED_MODULE_0__.default.getData(searchInput.value);\n  _models_interface__WEBPACK_IMPORTED_MODULE_1__.default.setSearchData(apiData);\n  searchInput.textContent = '';\n  searchForm.reset();\n  searchInput.focus();\n});\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/models/api.js":
/*!***************************!*\
  !*** ./src/models/api.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst api = (() => {\n  function convertData(data) {\n    const {\n      main,\n      name,\n      sys,\n      weather,\n    } = data;\n    return {\n      main, name, sys, weather,\n    };\n  }\n\n  async function getData(city) {\n    const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=46d2f9067286bed0c31920c03211021a`;\n    try {\n      const response = await fetch(endpoint, { mode: 'cors' });\n      if (!response.ok) throw new Error(`City ${city} not found`);\n      const data = convertData(await response.json());\n      return data;\n    } catch (error) {\n      Error(error);\n      return null;\n    }\n  }\n  return { getData };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (api);\n\n//# sourceURL=webpack://weather-app/./src/models/api.js?");

/***/ }),

/***/ "./src/models/interface.js":
/*!*********************************!*\
  !*** ./src/models/interface.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst UI = (() => {\n  function setSearchData(apiData) {\n    if (!apiData) return;\n\n    const icon = `https://openweathermap.org/img/wn/${\n      apiData.weather[0].icon\n    }@2x.png`;\n    const list = document.querySelector('.weather-section .cities');\n    const li = document.createElement('li');\n    li.classList.add('city');\n    const weatherDetails = `\n      <h2 class=\"city-name\" data-name=\"${apiData.name},${apiData.sys.country}\">\n        <span>${apiData.name}</span>\n        <sup>${apiData.sys.country}</sup>\n      </h2>\n      <div class=\"city-temp\">${Math.round(apiData.main.temp)}<sup>°C</sup>\n      </div>\n      <figure>\n        <img class=\"city-icon\" src=${icon} alt=${apiData.weather[0]['apiData.main']}>\n        <figcaption>${apiData.weather[0].description}</figcaption>\n      </figure>\n    `;\n    li.innerHTML = weatherDetails;\n    list.appendChild(li);\n  }\n\n  return { setSearchData };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UI);\n\n//# sourceURL=webpack://weather-app/./src/models/interface.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;