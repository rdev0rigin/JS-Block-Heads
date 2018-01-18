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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_block_head_decorator__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

console.log('Test');
var Cat = /** @class */ (function () {
    function Cat() {
        this.name = 'default';
    }
    Cat.prototype.meow = function () {
        return this.name + " says Meow!";
    };
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0__lib_block_head_decorator__["b" /* blockHead */],
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Cat.prototype, "meow", null);
    Cat = __decorate([
        __WEBPACK_IMPORTED_MODULE_0__lib_block_head_decorator__["a" /* BlockHead */]
    ], Cat);
    return Cat;
}());
var Betty = new Cat();
Betty.foo = 'Bat Metal';
Betty.name = 'Betty';
Betty.addLink();
console.log('cat', Betty.meow());
Betty.name = 'Ninja';
console.log('cat', Betty.meow());
console.log('cat', Betty.getChain());


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = blockHead;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlockHead; });
/**
 * A property mixin.
 * @param target
 * @param key
 * @param descriptor
 * @returns {any}
 */
function blockHead(target, key, descriptor) {
    console.log('target', target);
    console.log('key', key);
    console.log('descriptor', descriptor);
    descriptor.writable = false;
    return descriptor;
}
var BlockHead = blockChainMixin();
function blockChainMixin() {
    var blockChain = [];
    // used to mixin behavior
    var BlockChainBehavior = {
        addLink: function () {
            console.log('Adding link!');
        },
        getHashes: function () {
        },
        getChain: function () {
            return blockChain;
        }
    };
    // create a Genesis block
    function genBlock(initTarget) {
        return {
            hash: checkSum(initTarget.toString()),
            hashHistory: [],
        };
    }
    // create hash
    // add link
    var bKeys = Reflect.ownKeys(BlockChainBehavior);
    function _mixin(clazz) {
        return new Proxy(clazz, {
            construct: function (target, args, newTarget) {
                var instance = new (target.bind.apply(target, [void 0].concat(args)))();
                blockChain = [genBlock(instance)];
                for (var _i = 0, bKeys_1 = bKeys; _i < bKeys_1.length; _i++) {
                    var key = bKeys_1[_i];
                    Object.defineProperty(instance, key, {
                        value: BlockChainBehavior[key]
                    });
                }
                var instanceProxy = new Proxy(instance, {
                    set: function (target, prop, value, receiver) {
                        blockChain = blockChain.slice();
                        target[prop] = value;
                        console.log("property set: " + prop + "  =  " + value);
                        return true;
                    }
                });
                return instanceProxy;
            },
        });
    }
    return _mixin;
}
// https://gist.github.com/nblackburn/17530c05520a33a4e872dbcc4f258261
function checkSum(string) {
    var index;
    var checksum = 0x1235235;
    for (index = 0; index < string.length; index++) {
        checksum += (string.charCodeAt(index) * (index + 1));
    }
    return checksum;
}


/***/ })
/******/ ]);
//# sourceMappingURL=main.map