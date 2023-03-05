/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const content = document.getElementById(\"content\")\n\nfunction createHeader() {\n  const header = document.createElement(\"div\")\n  header.classList.add('header')\n\n  const restaurantName = document.createElement(\"h1\")\n  restaurantName.classList.add('restaurant-name')\n  restaurantName.textContent = 'The Odin Restaurant'\n\n  const home = document.createElement(\"a\")\n  home.href=\"home.js\"\n  home.classList.add('header-link')\n  home.textContent = 'Home'\n\n  const menu = document.createElement(\"a\")\n  menu.href=\"home.js\"\n  menu.classList.add('header-link')\n  menu.textContent = 'Menu'\n\n  const contact = document.createElement(\"a\")\n  contact.href=\"home.js\"\n  contact.classList.add('header-link')\n  contact.textContent = 'Contact'\n\n  header.appendChild(restaurantName)\n  header.appendChild(home)\n  header.appendChild(menu)\n  header.appendChild(contact)\n\n  return header\n}\n\ncontent.appendChild(createHeader())\n\n\n\n//# sourceURL=webpack://restaurant-webpage/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;