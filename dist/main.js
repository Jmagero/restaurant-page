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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createContact = () => {\n  const contactDiv = document.createElement('div');\n  const title = document.createElement('h3');\n  contactDiv.setAttribute('id', 'contact');\n  title.classList.add('contact-title');\n  const para = document.createElement('p');\n  para.classList.add('contact-description');\n  title.innerHTML = 'CONTACT US';\n  para.innerHTML = 'Question Not Yet Answered? We are here to help!';\n  const input = document.createElement('input');\n  input.setAttribute('type', 'text');\n  contactDiv.append(title, para, input);\n  return contactDiv;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContact);\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createHome = () => {\n  const about = document.createElement('div');\n  const title = document.createElement('h3');\n  about.setAttribute('id', 'tabcontent');\n  title.classList.add('title');\n  const para = document.createElement('p');\n  para.classList.add('description');\n  title.innerHTML = 'Indulge yourself';\n  para.innerHTML = ' Eat, Drink Be Merry';\n  about.append(title, para);\n  return about;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHome);\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\nconst content = document.getElementById('content');\nconst aboutus = (0,_home__WEBPACK_IMPORTED_MODULE_0__.default)();\nconst aboutMenu = (0,_menu__WEBPACK_IMPORTED_MODULE_1__.default)();\nconst aboutContact = (0,_contact__WEBPACK_IMPORTED_MODULE_2__.default)();\n\n// create button\nfunction createBtn(id, text) {\n  const tablink = document.createElement('button');\n  tablink.classList.add('tablinks');\n  tablink.setAttribute('id', id);\n  tablink.innerText = text;\n  return tablink;\n}\n\n// create nav\nfunction createNav() {\n  const nav = document.createElement('nav');\n  nav.classList.add('tabs');\n  const home = createBtn('home', 'home');\n  const menu = createBtn('menu', 'menu');\n  const contact = createBtn('contact', 'contact');\n\n  nav.append(home, menu, contact);\n  return nav;\n}\n\n// Append tabs\ncontent.appendChild(createNav());\n\n// Append home page\ncontent.appendChild(aboutus);\n\n// Add event listeners\nconst homebtn = document.getElementById('home');\nhomebtn.addEventListener('click', () => {\n  content.replaceChild(aboutus, content.childNodes[1]);\n});\n\nconst menubtn = document.getElementById('menu');\nmenubtn.addEventListener('click', () => {\n  content.replaceChild(aboutMenu, content.childNodes[1]);\n});\n\nconst contactBtn = document.getElementById('contact');\ncontactBtn.addEventListener('click', () => {\n  content.replaceChild(aboutContact, content.childNodes[1]);\n});\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createFood = (name, description) => {\n  const foodItem = document.createElement('div');\n  const foodName = document.createElement('h4');\n  foodName.innerText = name;\n  const foodDescr = document.createElement('p');\n  foodDescr.innerText = description;\n  foodItem.appendChild(foodName);\n  foodItem.appendChild(foodDescr);\n  return foodItem;\n};\n\nconst createMenu = () => {\n  const foods = document.createElement('div');\n  foods.className = 'foods';\n\n  foods.appendChild(\n    createFood('Pizza', 'Helo pizza'),\n  );\n  foods.appendChild(createFood('Pizza', 'Helo pizza'));\n  return foods;\n};\n\nconst loadMenu = () => {\n  const menuContent = document.createElement('div');\n  menuContent.setAttribute('id', 'menucontent');\n  menuContent.innerHTML = createMenu().innerHTML;\n  return menuContent;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

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