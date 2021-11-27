/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCurrentWeather": () => (/* binding */ getCurrentWeather),
/* harmony export */   "getTomorrowWeather": () => (/* binding */ getTomorrowWeather),
/* harmony export */   "INIT": () => (/* binding */ INIT)
/* harmony export */ });
const API_KEY = '2f4e2896474473f4a6adb72e072b96f4';
const INIT = {
    method: 'POST',
};

/**
 * @param {string} city
 */
async function getCurrentWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
    const response = await fetch(url, INIT);
    const jsonData = await response.json();
    if (jsonData.cod !== 200) throw jsonData;
    return jsonData;
}

/**
 * @param {string} city
 */
async function getTomorrowWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`;
    const response = await fetch(url, INIT);
    const jsonData = await response.json();
    if (jsonData.cod !== '200') throw jsonData;
    return jsonData;
}




/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "updateCard": () => (/* binding */ updateCard)
/* harmony export */ });
const ICON_PREFIX = 'https://openweathermap.org/img/wn/';
const ICON_POSTFIX = '@2x.png';
const degreeCelsius = '&#8451;';

/**
 * @param {HTMLDivElement} card
 * @param {*} weatherData
 */
function updateCard(card, weatherData) {
    card.querySelector('.card__icon').src = ICON_PREFIX + weatherData.weather[0].icon + ICON_POSTFIX;
    card.querySelector('.card__city').innerHTML = weatherData.name;
    card.querySelector('.card__temp').innerHTML = weatherData.main.temp + degreeCelsius;
    card.querySelector('.card__description').innerHTML = weatherData.weather[0].description;
}




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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./src/api.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/utils.js");



const form = document.getElementById('form');
const cardToday = document.getElementById('today');

form.addEventListener('submit', async event => {
    event.preventDefault();
    const city = form.elements['city'].value;
    let todayWeather;
    let tomorrowWeather;
    try {
        todayWeather = await (0,_api__WEBPACK_IMPORTED_MODULE_0__.getCurrentWeather)(city);
        tomorrowWeather = await (0,_api__WEBPACK_IMPORTED_MODULE_0__.getTomorrowWeather)(city);
    } catch (error) {
        console.error(error);
        return;
    }

    console.log(tomorrowWeather);
    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.updateCard)(cardToday, todayWeather);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQSxxRUFBcUUsS0FBSyxzQkFBc0IsUUFBUTtBQUN4RztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQSxzRUFBc0UsS0FBSyxzQkFBc0IsUUFBUTtBQUN6RztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUV1RDs7Ozs7Ozs7Ozs7Ozs7O0FDM0J2RDtBQUNBO0FBQ0EsOEJBQThCOztBQUU5QjtBQUNBLFdBQVcsZ0JBQWdCO0FBQzNCLFdBQVcsR0FBRztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVzQjs7Ozs7OztVQ2Z0QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ044RDtBQUN6Qjs7QUFFckM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsdURBQWlCO0FBQzlDLGdDQUFnQyx3REFBa0I7QUFDbEQsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksa0RBQVU7QUFDZCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9wLXdlYXRoZXIvLi9zcmMvYXBpLmpzIiwid2VicGFjazovL3RvcC13ZWF0aGVyLy4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovL3RvcC13ZWF0aGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvcC13ZWF0aGVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b3Atd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvcC13ZWF0aGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9wLXdlYXRoZXIvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQVBJX0tFWSA9ICcyZjRlMjg5NjQ3NDQ3M2Y0YTZhZGI3MmUwNzJiOTZmNCc7XG5jb25zdCBJTklUID0ge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxufTtcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gY2l0eVxuICovXG5hc3luYyBmdW5jdGlvbiBnZXRDdXJyZW50V2VhdGhlcihjaXR5KSB7XG4gICAgY29uc3QgdXJsID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5fSZ1bml0cz1tZXRyaWMmYXBwaWQ9JHtBUElfS0VZfWA7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIElOSVQpO1xuICAgIGNvbnN0IGpzb25EYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGlmIChqc29uRGF0YS5jb2QgIT09IDIwMCkgdGhyb3cganNvbkRhdGE7XG4gICAgcmV0dXJuIGpzb25EYXRhO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBjaXR5XG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGdldFRvbW9ycm93V2VhdGhlcihjaXR5KSB7XG4gICAgY29uc3QgdXJsID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9mb3JlY2FzdD9xPSR7Y2l0eX0mdW5pdHM9bWV0cmljJmFwcGlkPSR7QVBJX0tFWX1gO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCBJTklUKTtcbiAgICBjb25zdCBqc29uRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBpZiAoanNvbkRhdGEuY29kICE9PSAnMjAwJykgdGhyb3cganNvbkRhdGE7XG4gICAgcmV0dXJuIGpzb25EYXRhO1xufVxuXG5leHBvcnQgeyBnZXRDdXJyZW50V2VhdGhlciwgZ2V0VG9tb3Jyb3dXZWF0aGVyLCBJTklUIH07XG4iLCJjb25zdCBJQ09OX1BSRUZJWCA9ICdodHRwczovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJztcbmNvbnN0IElDT05fUE9TVEZJWCA9ICdAMngucG5nJztcbmNvbnN0IGRlZ3JlZUNlbHNpdXMgPSAnJiM4NDUxOyc7XG5cbi8qKlxuICogQHBhcmFtIHtIVE1MRGl2RWxlbWVudH0gY2FyZFxuICogQHBhcmFtIHsqfSB3ZWF0aGVyRGF0YVxuICovXG5mdW5jdGlvbiB1cGRhdGVDYXJkKGNhcmQsIHdlYXRoZXJEYXRhKSB7XG4gICAgY2FyZC5xdWVyeVNlbGVjdG9yKCcuY2FyZF9faWNvbicpLnNyYyA9IElDT05fUFJFRklYICsgd2VhdGhlckRhdGEud2VhdGhlclswXS5pY29uICsgSUNPTl9QT1NURklYO1xuICAgIGNhcmQucXVlcnlTZWxlY3RvcignLmNhcmRfX2NpdHknKS5pbm5lckhUTUwgPSB3ZWF0aGVyRGF0YS5uYW1lO1xuICAgIGNhcmQucXVlcnlTZWxlY3RvcignLmNhcmRfX3RlbXAnKS5pbm5lckhUTUwgPSB3ZWF0aGVyRGF0YS5tYWluLnRlbXAgKyBkZWdyZWVDZWxzaXVzO1xuICAgIGNhcmQucXVlcnlTZWxlY3RvcignLmNhcmRfX2Rlc2NyaXB0aW9uJykuaW5uZXJIVE1MID0gd2VhdGhlckRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcbn1cblxuZXhwb3J0IHsgdXBkYXRlQ2FyZCB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBnZXRDdXJyZW50V2VhdGhlciwgZ2V0VG9tb3Jyb3dXZWF0aGVyIH0gZnJvbSAnLi9hcGknO1xuaW1wb3J0IHsgdXBkYXRlQ2FyZCB9IGZyb20gJy4vdXRpbHMnO1xuXG5jb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0nKTtcbmNvbnN0IGNhcmRUb2RheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RheScpO1xuXG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGFzeW5jIGV2ZW50ID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGNpdHkgPSBmb3JtLmVsZW1lbnRzWydjaXR5J10udmFsdWU7XG4gICAgbGV0IHRvZGF5V2VhdGhlcjtcbiAgICBsZXQgdG9tb3Jyb3dXZWF0aGVyO1xuICAgIHRyeSB7XG4gICAgICAgIHRvZGF5V2VhdGhlciA9IGF3YWl0IGdldEN1cnJlbnRXZWF0aGVyKGNpdHkpO1xuICAgICAgICB0b21vcnJvd1dlYXRoZXIgPSBhd2FpdCBnZXRUb21vcnJvd1dlYXRoZXIoY2l0eSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyh0b21vcnJvd1dlYXRoZXIpO1xuICAgIHVwZGF0ZUNhcmQoY2FyZFRvZGF5LCB0b2RheVdlYXRoZXIpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=