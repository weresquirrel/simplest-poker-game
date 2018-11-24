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

/***/ "./src/game/game_logic.js":
/*!********************************!*\
  !*** ./src/game/game_logic.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Player {\n  constructor(name) {\n    this.name = name;\n    this.cards = [];\n    this.score = 0;\n  }\n}\n\nconst deck = {\n  suits: ['spades', 'diamonds', 'hearts', 'clubs'],\n  value: { min: 1, max: 13 },\n  quantity: 52\n};\n\nfunction getCards(cardsNum) {\n  const cards = [];\n\n  for (let i = 0; i < cardsNum; i++) {\n\n    const currentValue = (Math.floor(Math.random() * 13)) + 1;\n    const currentSuit = deck.suits[(Math.floor(Math.random() * deck.suits.length))];\n    const currentCard = { suit: currentSuit, value: currentValue};\n\n    // without this check below, I can get the correct amount of cards, but\n    //   cards may be repeated\n    // with the chek I can't get enough cards :(\n\n    // if(i > 0) {\n    //   const check = cards.find(card => card.suit == currentSuit);\n    //   if(!check) {\n    //     cards.push(currentCard);\n    //   }\n    // }\n    // else {\n    //   console.log('first');\n    //   cards.push(currentCard);\n    // }\n\n    cards.push(currentCard);\n\n  }\n\n  // I tried this below insted of the fo loop\n  // NEGATIVE - my computer found this far too overwhelming + it doesn't work either\n\n  // while(cards.length < cardsNum) {\n  //\n  //   const currentValue = (Math.floor(Math.random() * 13)) + 1;\n  //   const currentSuit = deck.suits[(Math.floor(Math.random() * deck.suits.length))];\n  //   const currentCard = { suit: currentSuit, value: currentValue};\n  //\n  //\n  //   const check = cards.find(card => card.suit == currentSuit);\n  //   if(!check) {\n  //       cards.push(currentCard);\n  //   }\n\n  return cards;\n}\n\nfunction createPlayers(playersNum) {\n  const players = [];\n\n  for (let i = 1; i < (playersNum + 1); i++) {\n    players.push(new Player('Player' + i));\n  }\n\n  return players;\n}\n\n\nfunction calculateScore(players) {\n\n  players.map(player => {\n    const cardValues = [];\n    player.cards.map(card => cardValues.push(card.value));\n\n    const cardsSum = cardValues.reduce((a, b) => a + b, 0);\n    player.score = player.score + cardsSum;\n  });\n  return players;\n}\n\n\nfunction checkTheWinner(players) {\n  const scores = [];\n  const winners = [];\n\n  players.map(player => scores.push(player.score));\n\n  const winnerScore = Math.max(...scores);\n\n  players.map(player => {\n    if(player.score == winnerScore) {\n      winners.push(player);\n    }\n  });\n\n  return winners;\n}\n\nfunction startGame(playersNum, cardsNum) {\n  console.log(cardsNum + ' ' + playersNum);\n}\n\n\nmodule.exports.checkTheWinner = checkTheWinner;\nmodule.exports.calculateScore = calculateScore;\nmodule.exports.Player = Player;\nmodule.exports.createPlayers = createPlayers;\nmodule.exports.deck = deck;\nmodule.exports.getCards = getCards;\nmodule.exports.startGame = startGame;\n\n\n//# sourceURL=webpack:///./src/game/game_logic.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_game_logic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game/game_logic.js */ \"./src/game/game_logic.js\");\n/* harmony import */ var _game_game_logic_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_game_game_logic_js__WEBPACK_IMPORTED_MODULE_0__);\nconsole.log('up N ...');\n\n\n\n\nfunction callback() {\n  console.log('... running');\n\n  // require('/game_logic').startGame;\n\n  // let\n\n  let playersNum = 2;\n  let cardsNum = 5;\n\n\n  const playersForm = document.getElementById('players');\n  const cardsForm = document.getElementById('cards');\n  const startBtn = document.getElementsByTagName('button')[0];\n\n  playersForm.addEventListener('change', () => {\n    playersNum = playersForm.value;\n    // console.log(playersNum);\n  });\n\n  cardsForm.addEventListener('change', () => {\n    cardsNum = cardsForm.value;\n    // console.log(cardsNum);\n  });\n\n  startBtn.addEventListener('click', () => {\n    // console.log(cardsNum + ' ' + playersNum);\n    Object(_game_game_logic_js__WEBPACK_IMPORTED_MODULE_0__[\"startGame\"])(playersNum, cardsNum);\n  })\n}\n\nif (\n    document.readyState == \"complete\" ||\n    (document.readyState !== \"loading\" && !document.documentElement.doScroll)\n) {\n  callback();\n} else {\n  document.addEventListener(\"DOMContentLoaded\", callback);\n}\n\n\n// 1. get the info hom many players (playersNum), and cards (cardsNum) user want\n  //  - check if it's even possible!\n// 2. create <playersNum> players\n// 3. give every players <cardsNum> cards\n// 4. calculate scores for every player\n// 5. based on the scores decide who won.\n// 6. inform the user about the result.\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });