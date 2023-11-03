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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ceremony.js":
/*!*************************!*\
  !*** ./src/ceremony.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Ceremony {\n    constructor(ctx, graduates, currentStudent = 0) {\n        this.ctx = ctx;\n        this.graduates = graduates;\n        this.currentStudent = currentStudent;\n        this.potatSpriteSheet = new Image();\n        this.megamanSpriteSheet = new Image();\n        this.stage = new Image();\n        this.audienceChairs = new Image();\n        this.diploma = new Image();\n        this.aalogo = new Image();\n\n        this.potatSpriteSheet.src = \"./dist/assets/potat-sprite-sheet.png\";\n        this.megamanSpriteSheet.src = \"./dist/assets/megaman_sprite_sheet.png\";\n        this.stage.src = './dist/assets/pixel_art_stage.png';\n        this.stage.src = './dist/assets/new_stage.png';\n        this.audienceChairs.src = \"./dist/assets/theatre_chairs.png\";\n        this.diploma.src = \"./dist/assets/diploma.png\";\n        this.aalogo.src = \"./dist/assets/logo.png\";\n    }\n\n    constructStage() {\n        // potat below\n        // let waitingSprite = [750, 0];\n        // let spriteSize = [375, 500]\n\n        // megaman below\n        let waitingSprite = [100, 100];\n        let spriteSize = [50, 50]\n\n        this.interval = setInterval(() => {\n            this.ctx.drawImage(this.stage, 20, 50, 850, 300);\n            this.ctx.drawImage(this.audienceChairs, 20, 349, 850, 70)\n            this.ctx.drawImage(this.audienceChairs, 20, 349, 850, 130)\n            // this.ctx.drawImage(this.potatSpriteSheet,\n            this.ctx.drawImage(this.megamanSpriteSheet,\n                waitingSprite[0], waitingSprite[1],\n                spriteSize[0], spriteSize[1],\n                80, 245,\n                // spriteSize[0], spriteSize[1])\n                80, 80)\n                // clearInterval(this.interval)\n        },100)\n    }\n\n    nextStudentMoves(button) {\n        button.disabled = true\n        this.graduates[this.currentStudent].moveAcrossScreen(this, button)\n        this.currentStudent += 1\n    }\n\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Ceremony);\n\n//# sourceURL=webpack:///./src/ceremony.js?");

/***/ }),

/***/ "./src/graduate.js":
/*!*************************!*\
  !*** ./src/graduate.js ***!
  \*************************/
/*! exports provided: Graduate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Graduate\", function() { return Graduate; });\nclass Graduate {\n    constructor(ctx, name, superlative, img_url) {\n        this.ctx = ctx;\n        this.name = name;\n        this.superlative = superlative;\n        this.img_url = new Image();\n        this.img_url.src = img_url;\n    }\n\n    drawGraduate(ceremony, i, startingPosition, jumpHeight){\n        // potat\n        // let spriteSize = [375, 500]\n        // let runningSprites = [[0, 0], [375, 0], [0, 0]];\n        // let dashSprites = [[0, 0], [375, 0], [0, 0]];\n        // let jumpSprite = [1125, 0];\n        let grabSprite = [0, 500];\n\n        // megaman\n        let spriteSize = [50, 50]\n        let runningSprites = [[150, 0], [200, 0], [250, 0]];\n        let dashSprites = [[350, 250], [400, 250], [450, 250]];\n        let jumpSprite = [300, 150]\n\n\n        this.ctx.clearRect(0, 0, 1000, 1000)\n\n        this.ctx.drawImage(ceremony.stage, 20, 50, 850, 300);\n        this.ctx.drawImage(ceremony.audienceChairs, 20, 349, 850, 70)\n        this.ctx.drawImage(ceremony.audienceChairs, 20, 349, 850, 130)\n\n        // this.scaleGraduateImg();\n\n        if (startingPosition[0] >= 390 && startingPosition[0] <= 490) { // grabbing diploma\n            if (startingPosition[0] <= 420) {\n                jumpHeight[0] = jumpHeight[0] + 11; // +5 for potat (instead of 11)\n            } else {\n                jumpHeight[0] = jumpHeight[0] - 11; // -5 for potat\n            }\n\n            this.ctx.drawImage(ceremony.megamanSpriteSheet,\n                // grabSprite[0], grabSprite[1], // potat\n                jumpSprite[0], jumpSprite[1], // megaman\n                spriteSize[0], spriteSize[1],\n                startingPosition[0], startingPosition[1] - jumpHeight,\n                80, 80)\n        } else if (startingPosition[0] >= 350 && startingPosition[0] <= 490) {\n            if (startingPosition[0] <= 420) {\n                jumpHeight[0] = jumpHeight[0] + 11;\n            } else {\n                jumpHeight[0] = jumpHeight[0] - 11;\n            }\n\n            this.ctx.drawImage(ceremony.megamanSpriteSheet,\n                // runningSprites[i % runningSprites.length][0], runningSprites[i % runningSprites.length][1],\n                jumpSprite[0], jumpSprite[1],\n                spriteSize[0], spriteSize[1],\n                startingPosition[0], startingPosition[1] - jumpHeight,\n                80, 80)\n        } else if (startingPosition[0] > 490) { // after landing from diploma catch\n            this.ctx.drawImage(ceremony.megamanSpriteSheet,\n                dashSprites[i % dashSprites.length][0], dashSprites[i % runningSprites.length][1],\n                spriteSize[0], spriteSize[1],\n                startingPosition[0], startingPosition[1],\n                80, 80)\n        } else {\n            this.ctx.drawImage(ceremony.megamanSpriteSheet,\n                runningSprites[i % runningSprites.length][0], runningSprites[i % runningSprites.length][1],\n                spriteSize[0], spriteSize[1],\n                startingPosition[0], startingPosition[1],\n                80, 80)\n        }\n\n        if (startingPosition[0] < 440) {\n            this.ctx.drawImage(ceremony.diploma, 440, 235, 20, 20); //draw diploma\n        } else if (startingPosition[0] === 440) {\n            ceremony.sound.play();\n        } else {\n            this.ctx.drawImage(ceremony.aalogo, 365, 55, 170, 150);\n        }\n    }\n\n    moveAcrossScreen(ceremony,button) {\n        clearInterval(ceremony.interval);\n        let startingPosition = [80, 245];\n        let jumpSprite = [300, 100]; //might get to use this later\n        let studentName = document.querySelector(\"#student\");\n        let superlative = document.querySelector(\"#superlative\")\n        studentName.innerHTML = this.name;\n        superlative.innerHTML = this.superlative;\n        let i = 0;\n        let jumpHeight = [0];\n\n        let interval = setInterval(() => {\n            startingPosition[0] += 15;\n            i++;\n\n            this.drawGraduate(ceremony,i, startingPosition, jumpHeight);\n\n            if (startingPosition[0] >= 740) {\n                clearInterval(interval);\n                this.ctx.clearRect(0, 0, 1000, 1000);\n                ceremony.constructStage();\n                button.disabled = false;\n                // studentName.innerHTML  = \"\";\n            }\n        }, 100);\n    }\n\n    scaleGraduateImg() {\n        let scale = Math.max(150 / this.img_url.width, 170 / this.img_url.height);\n        let x = 450 - ((this.img_url.width / 2) * scale);\n        let y = 140 - ((this.img_url.height / 2) * scale);\n        this.ctx.drawImage(this.img_url, x, y, this.img_url.width * scale, this.img_url.height * scale);\n    }\n\n    jumpAndGrabDiploma(ceremony, i, startingPosition) {\n\n    }\n}\n\n\n\n//# sourceURL=webpack:///./src/graduate.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _graduate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./graduate */ \"./src/graduate.js\");\n/* harmony import */ var _ceremony__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ceremony */ \"./src/ceremony.js\");\n/* harmony import */ var _students_2023_07_17__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./students/2023-07-17 */ \"./src/students/2023-07-17.js\");\n/* harmony import */ var _superlatives_2023_07_17__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./superlatives/2023-07-17 */ \"./src/superlatives/2023-07-17.js\");\n\n //there is no reason that these two imports are different. I was messing around with how you can import files\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    let canvas = document.getElementById(\"canvas\");\n    let nextStudentButton = document.getElementById(\"next-student\");\n    let ctx = canvas.getContext(\"2d\");\n    let ol1 = document.getElementById(\"ol1\");\n    let ol2 = document.getElementById(\"ol2\");\n    let punch = document.getElementById(\"punch\");\n    let submitButton = document.querySelector(\"#current-student-button\");\n\n    let graduates = [] \n    _students_2023_07_17__WEBPACK_IMPORTED_MODULE_2__[\"default\"].forEach((student, i) => {\n        let graduate = new _graduate__WEBPACK_IMPORTED_MODULE_0__[\"Graduate\"](ctx,student.name, _superlatives_2023_07_17__WEBPACK_IMPORTED_MODULE_3__[\"default\"][i].body, student.imageUrl)\n        graduates.push(graduate)\n    })\n\n    let mid = Math.floor(graduates.length/2)\n    ol2.start = mid + 1\n\n    for (let i = 0; i < mid;i++) {\n        let listItem = document.createElement(\"li\")\n        listItem.textContent = graduates[i].name\n        ol1.appendChild(listItem)\n    }\n\n    for (let i = mid; i < graduates.length;i++) {\n        let listItem = document.createElement(\"li\")\n        listItem.textContent = graduates[i].name\n        ol2.appendChild(listItem)\n    }\n\n    let ceremony = new _ceremony__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ctx, graduates)\n    ceremony.sound = punch; // give sound to ceremony instance\n\n    submitButton.addEventListener(\"click\", () => {\n        let input = document.querySelector(\"input\");\n        ceremony.currentStudent = parseInt(input.value) - 1\n    })\n\n    ceremony.constructStage()\n\n\n    nextStudentButton.addEventListener(\"click\", (e) => {\n        ceremony.nextStudentMoves(e.target)\n    })\n\n\n})\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/students/2023-07-17.js":
/*!************************************!*\
  !*** ./src/students/2023-07-17.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst students = [\n  {\n    \"id\": 1,\n    \"name\": \"Brittiny Filbert\",\n    \"imageUrl\": \"\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 2,\n    \"name\": \"David Pollack\",\n    \"imageUrl\": \"https://files.slack.com/files-tmb/T3BTYDL2V-F0645DX4YKX-766b200677/image_480.png\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 3,\n    \"name\": \"Davis Lucky\",\n    \"imageUrl\": \"\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4,\n    \"name\": \"Eric Mai\",\n    \"imageUrl\": \"https://files.slack.com/files-tmb/T3BTYDL2V-F064AR4GJLU-41840b952d/image_360.png\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 5,\n    \"name\": \"Julia Kahn\",\n    \"imageUrl\": \"https://files.slack.com/files-tmb/T3BTYDL2V-F0641NG3346-cbef4da787/image_720.png\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6,\n    \"name\": \"Krikor Andonian\",\n    \"imageUrl\": \"https://files.slack.com/files-tmb/T3BTYDL2V-F0645E389KP-1ece530233/image_360.png\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 7,\n    \"name\": \"Mitchell Chan\",\n    \"imageUrl\": \"https://files.slack.com/files-tmb/T3BTYDL2V-F064M1FKPPB-195876b627/image_720.png\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 8,\n    \"name\": \"Queen Belle Dela Cruz\",\n    \"imageUrl\": \"https://files.slack.com/files-tmb/T3BTYDL2V-F063TRV3WDD-a0bff6ac0d/image_360.png\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 9,\n    \"name\": \"Raymond Tan\",\n    \"imageUrl\": \"\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 10,\n    \"name\": \"Shannon Millar\",\n    \"imageUrl\": \"https://files.slack.com/files-tmb/T3BTYDL2V-F0645EE1BHB-cd1a5a4906/image_480.png\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 11,\n    \"name\": \"Swathi Balasubramanyam\",\n    \"imageUrl\": \"https://files.slack.com/files-tmb/T3BTYDL2V-F0641NW97SS-93a4e8094d/image_480.png\",\n    \"occup\": \"student\"\n  }\n]\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (students);\n\n//# sourceURL=webpack:///./src/students/2023-07-17.js?");

/***/ }),

/***/ "./src/superlatives/2023-07-17.js":
/*!****************************************!*\
  !*** ./src/superlatives/2023-07-17.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst superlatives = [\n  {\n    \"name\": \"Brittiny Filbert\",\n    \"body\": \"Most likely to be a secret agent\"\n  },\n  {\n    \"name\": \"David Pollack\",\n    \"body\": \"Master of the Spotlight\"\n  },\n  {\n    \"name\": \"Davis Lucky\",\n    \"body\": \"Most likely to lose to Julia at ping pong\"\n  },\n  {\n    \"name\": \"Eric Mai\",\n    \"body\": \"Best artist and visual explainer\"\n  },\n  {\n    \"name\": \"Julia Kahn\",\n    \"body\": \"Best ping pong player\"\n  },\n  {\n    \"name\": \"Krikor Andonian\",\n    \"body\": \"Most likely to 100% any game\"\n  },\n  {\n    \"name\": \"Mitchell Chan\",\n    \"body\": \"Best team player\"\n  },\n  {\n    \"name\": \"Queen Belle Dela Cruz\",\n    \"body\": \"Kindest person\"\n  },\n  {\n    \"name\": \"Raymond Tan\",\n    \"body\": \"Most likely to Irish exit during an event\"\n  },\n  {\n    \"name\": \"Shannon Millar\",\n    \"body\": \"Most likely to drop everything and travel the world\"\n  },\n  {\n    \"name\": \"Swathi Balasubramanyam\",\n    \"body\": \"Most Likely to be President\"\n  }\n]\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (superlatives);\n\n//# sourceURL=webpack:///./src/superlatives/2023-07-17.js?");

/***/ })

/******/ });