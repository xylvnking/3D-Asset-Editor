exports.id = "component---src-pages-index-js";
exports.ids = ["component---src-pages-index-js"];
exports.modules = {

/***/ "./src/Components/DefaultItems.module.css":
/*!************************************************!*\
  !*** ./src/Components/DefaultItems.module.css ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "productCard": () => (/* binding */ productCard),
/* harmony export */   "productCardDescription": () => (/* binding */ productCardDescription),
/* harmony export */   "productCardTitle": () => (/* binding */ productCardTitle),
/* harmony export */   "productCards": () => (/* binding */ productCards)
/* harmony export */ });
// Exports
var productCards = "DefaultItems-module--productCards--wmVvX";
var productCard = "DefaultItems-module--productCard--WMbRd";
var productCardTitle = "DefaultItems-module--productCardTitle--yluVd";
var productCardDescription = "DefaultItems-module--productCardDescription--pzIIO";


/***/ }),

/***/ "./src/Components/Hero.module.css":
/*!****************************************!*\
  !*** ./src/Components/Hero.module.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bigType": () => (/* binding */ bigType),
/* harmony export */   "bigType2": () => (/* binding */ bigType2),
/* harmony export */   "heroContent": () => (/* binding */ heroContent),
/* harmony export */   "heroImage": () => (/* binding */ heroImage),
/* harmony export */   "heroMain": () => (/* binding */ heroMain)
/* harmony export */ });
// Exports
var heroMain = "Hero-module--heroMain--Tj68J";
var heroImage = "Hero-module--heroImage--o9XM-";
var heroContent = "Hero-module--heroContent--nsVlj";
var bigType = "Hero-module--bigType--2mmiQ";
var bigType2 = "Hero-module--bigType2--f9Tn4";


/***/ }),

/***/ "./src/Components/Nav.module.css":
/*!***************************************!*\
  !*** ./src/Components/Nav.module.css ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "navIcon": () => (/* binding */ navIcon),
/* harmony export */   "navstyles": () => (/* binding */ navstyles)
/* harmony export */ });
// Exports
var navstyles = "Nav-module--navstyles--6+g8k";
var navIcon = "Nav-module--navIcon--knfXq";


/***/ }),

/***/ "./src/Components/DefaultItems.js":
/*!****************************************!*\
  !*** ./src/Components/DefaultItems.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DefaultItems)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DefaultItems_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DefaultItems.module.css */ "./src/Components/DefaultItems.module.css");
/* harmony import */ var _ProductCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductCard */ "./src/Components/ProductCard.js");




function DefaultItems() {
  return (
    /*#__PURE__*/
    // <div className={productCards}> 
    //     <div className={productCard}>
    //         <h1 className={productCardTitle}>cyberWear Ring 1</h1>
    //         <StaticImage 
    //             src="../images/Ring1.jpg"
    //             alt="A cyberpunk ring"
    //             placeholder="blurred"
    //         />
    //         <p className={productCardDescription}>Cronut affogato hella heirloom snackwave seitan thundercats chicharrones salvia offal forage church-key. Coloring book DSA jianbing green juice brunch street art four loko.</p>
    //     </div>
    // </div>
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ProductCard__WEBPACK_IMPORTED_MODULE_2__["default"], null)
  );
}

/***/ }),

/***/ "./src/Components/Hero.js":
/*!********************************!*\
  !*** ./src/Components/Hero.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Hero)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Hero_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Hero.module.css */ "./src/Components/Hero.module.css");


function Hero() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _Hero_module_css__WEBPACK_IMPORTED_MODULE_1__.heroMain
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _Hero_module_css__WEBPACK_IMPORTED_MODULE_1__.heroImage
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: _Hero_module_css__WEBPACK_IMPORTED_MODULE_1__.bigType
  }, "///////"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: _Hero_module_css__WEBPACK_IMPORTED_MODULE_1__.bigType2
  }, "///////"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _Hero_module_css__WEBPACK_IMPORTED_MODULE_1__.heroContent
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "cyberWear jewelry"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Embrace an opulent future"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", null, "Shop Now"))));
}

/***/ }),

/***/ "./src/Components/Nav.js":
/*!*******************************!*\
  !*** ./src/Components/Nav.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Nav)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Nav_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Nav.module.css */ "./src/Components/Nav.module.css");


function Nav() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _Nav_module_css__WEBPACK_IMPORTED_MODULE_1__.navstyles
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Home"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "About"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Reviews"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Connect"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    className: _Nav_module_css__WEBPACK_IMPORTED_MODULE_1__.navIcon,
    xmlns: "http://www.w3.org/2000/svg",
    height: "48",
    width: "48"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M6 36V33H42V36ZM6 25.5V22.5H42V25.5ZM6 15V12H42V15Z"
  }))));
}

/***/ }),

/***/ "./src/Components/ProductCard.js":
/*!***************************************!*\
  !*** ./src/Components/ProductCard.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProductCard)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DefaultItems_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DefaultItems.module.css */ "./src/Components/DefaultItems.module.css");


function ProductCard() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _DefaultItems_module_css__WEBPACK_IMPORTED_MODULE_1__.productCards
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _DefaultItems_module_css__WEBPACK_IMPORTED_MODULE_1__.productCard
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: _DefaultItems_module_css__WEBPACK_IMPORTED_MODULE_1__.productCardTitle
  }, "cyberWear Ring 1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StaticImage, {
    src: "../images/Ring1.jpg",
    alt: "A cyberpunk ring",
    placeholder: "blurred"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: _DefaultItems_module_css__WEBPACK_IMPORTED_MODULE_1__.productCardDescription
  }, "Cronut affogato hella heirloom snackwave seitan thundercats chicharrones salvia offal forage church-key. Coloring book DSA jianbing green juice brunch street art four loko.")));
}

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_Hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/Hero */ "./src/Components/Hero.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style.css */ "./src/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Components_Nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/Nav */ "./src/Components/Nav.js");
/* harmony import */ var _Components_DefaultItems__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Components/DefaultItems */ "./src/Components/DefaultItems.js");






const IndexPage = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Components_Nav__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Components_Hero__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Components_DefaultItems__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("footer", null));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IndexPage);

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ (() => {



/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-js.js.map