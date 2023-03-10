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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createContactContent\": () => (/* binding */ createContactContent)\n/* harmony export */ });\nfunction createContactContent() {\n  const contactContent = document.createElement('div');\n  contactContent.classList.add('page-content');\n  contactContent.innerHTML = `<section class=\"contact\">\n  <h2>Contact Us</h2>\n  <form action=\"#\" method=\"post\">\n    <label for=\"name\">Name</label>\n    <input type=\"text\" id=\"name\" name=\"name\" required>\n\n    <label for=\"email\">Email</label>\n    <input type=\"email\" id=\"email\" name=\"email\" required>\n\n    <label for=\"message\">Message</label>\n    <textarea id=\"message\" name=\"message\" required></textarea>\n\n    <button type=\"submit\" class=\"btn\">Send Message</button>\n  </form>\n\n  <div class=\"contact-info\">\n    <h3>Our Location</h3>\n    <p>123 Main Street<br>Anytown, USA</p>\n\n    <h3>Phone</h3>\n    <p>(123) 456-7890</p>\n\n    <h3>Email</h3>\n    <p>info@deliciousrestaurant.com</p>\n  </div>\n</section>`;\n    \n  return contactContent;\n}\n// eslint-disable-next-line import/prefer-default-export    \n\n\n//# sourceURL=webpack://restaurant-webpage/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createHomeContent\": () => (/* binding */ createHomeContent)\n/* harmony export */ });\nfunction createHomeContent() {\n  const homeContent = document.createElement('div');\n  homeContent.classList.add('page-content');\n  homeContent.innerHTML = `<section class=\"home\">\n  <p>Welcome to our restaurant, where we serve the most delicious food in town.</p>\n  <a href=\"#\" class=\"btn\">See Our Menu</a>\n</section>`;\n\n  return homeContent;\n}\n// eslint-disable-next-line import/prefer-default-export\n\n\n\n//# sourceURL=webpack://restaurant-webpage/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\nconst content = document.getElementById('content');\nconst pages = document.querySelectorAll('.headerBtn');\nlet sectionContent = (0,_home__WEBPACK_IMPORTED_MODULE_0__.createHomeContent)();\n\nfunction createHeader() {\n  const header = document.createElement('div');\n  header.innerHTML = `<header>\n  <h1>The Odin Restaurant</h1>\n  <div>\n    <button class=\"headerBtn\">Home</button>\n    <button class=\"headerBtn\">Menu</button>\n    <button class=\"headerBtn\">Contact</button>\n  </div>\n  </header>`\n\n  return header;\n}\n\nfunction displayContent() {\n  content.appendChild(createHeader());\n  content.appendChild(sectionContent);\n}\n\ndisplayContent();\n\npages.forEach(page =>{\n  page.addEventListener('click', () =>{\n    // eslint-disable-next-line no-alert\n    alert(\"success\")\n    content.removeChild(content.lastChild)\n    // eslint-disable-next-line no-nested-ternary\n    sectionContent = page.textContent===\"Menu\" ? (0,_menu__WEBPACK_IMPORTED_MODULE_1__.createMenuContent)() :\n      page.textContent===\"Contact\" ? (0,_contact__WEBPACK_IMPORTED_MODULE_2__.createContactContent)() : (0,_home__WEBPACK_IMPORTED_MODULE_0__.createHomeContent)()\n    content.appendChild(sectionContent);\n    \n  })\n})\n\n\n//# sourceURL=webpack://restaurant-webpage/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createMenuContent\": () => (/* binding */ createMenuContent)\n/* harmony export */ });\nfunction createMenuContent() {\n  const menuContent = document.createElement('div');\n  menuContent.classList.add('page-content');\n  menuContent.innerHTML = `<section class=\"menu\">\n  <h2>Featured Dishes</h2>\n  <div class=\"menu-items\">\n    <div class=\"menu-item\">\n      <img src=\"dish1.jpg\" alt=\"Dish 1\">\n      <h3>Dish 1</h3>\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n      <a href=\"#\" class=\"btn\">Order Now</a>\n    </div>\n    <div class=\"menu-item\">\n      <img src=\"dish2.jpg\" alt=\"Dish 2\">\n      <h3>Dish 2</h3>\n      <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>\n      <a href=\"#\" class=\"btn\">Order Now</a>\n    </div>\n    <div class=\"menu-item\">\n      <img src=\"dish3.jpg\" alt=\"Dish 3\">\n      <h3>Dish 3</h3>\n      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>\n      <a href=\"#\" class=\"btn\">Order Now</a>\n    </div>\n  </div>\n  </section>`;\n  \n  return menuContent;\n}\n\n// eslint-disable-next-line import/prefer-default-export\n\n  \n\n//# sourceURL=webpack://restaurant-webpage/./src/menu.js?");

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