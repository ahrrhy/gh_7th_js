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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class LiveNature {
    constructor(parameters) {
        this.age = 0;
        this.cssClass = parameters.cssClass;
        this.isAlive = true;
        this.Position = [];
        this.isDamaged = false;
        this.health = parameters.health;
        this._fullHealth = parameters.health;
    }

    isDead() {
        return this.isAlive = false;
    }

    damaged() {
        if (this.health < this._fullHealth && this.health > 0) {
            return this.isDamaged = true;
        }
    }

    isBitten(damage) {
        this.health -= damage;
        this.damaged();
        if (this.health <= 0) {
            this.wasEaten = true;
            this.isDead();
        }
    }

    live() {
        if (this.isAlive === true) {
            this.age++;
        }
        if (this.isDamaged) {
            this.age = -1;
        }
        //else this.isDead();
    }

    showHealth() {
        if (this.isAlive) {
            return this.health;
        }
    }

    view() {
        if (this.isAlive) {
            return this.cssClass;
        }
        if (!this.isAlive) {
            return 'empty';
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = LiveNature;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return mapElements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return treeParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return bushParams; });
/* unused harmony export fruitParams */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return deerParams; });
/* unused harmony export mouseParams */
// map parameters fo class Map constructor
let fruitParams = {
    timeToLive : 4,
    cssClass : 'fruit',
    size : 0,
    _fullHealth : 100,
    health : 100
};
let treeParams = {
    // constructor's set
    size : 3,
    growthAge : 2,
    makeFruitPeriod : 4,
    // classes for different types of plants
    treeClass : 'tree',
    bushClass : 'bush',
    springClass: 'spring',
    fruitParams : fruitParams,
    health : 100
};
let bushParams = {
    size : 2,
    growthAge : 2,
    makeFruitPeriod : 4,
    treeClass : 'tree',
    bushClass : 'bush',
    springClass: 'spring',
    fruitParams : fruitParams,
    health : 100
};

let mapElements = {
    xSize : 30,
    ySize : 30,
    empty : 'empty',
    startTreesQuantity: 4,
    startBushQuantity: 4,
};

let deerParams = {
    health : 100,
    satiety : 100,
    cssClass : 'deer',
    food : ['Plant', 'Fruit'],
    satietyDecrease : 100*10/100
};

let mouseParams = {
    health : 50,
    satiety : 50,
    cssClass : 'mouse',
    food : ['Fruit']
};



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return randomInteger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getClosestEmpty; });
/* unused harmony export getRandomOne */
function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    return rand;
}

function getRandomOne() {
    return Math.random() < 0.5 ? -1 : 1;
}

function getClosestEmpty(matrix, coordinates) {
    let X = coordinates[1],
        Y = coordinates[0],
        map = matrix,
        changeX = getRandomOne(),
        changeY = getRandomOne(),
        newX = X+changeX,
        newY = Y+changeY;
    if (newX < 0 || newX > matrix.xSize-1) {
        changeX = getRandomOne();
        newX = X + changeX;
    }
    if (newY < 0 || newY > matrix.ySize-1) {
        changeY = getRandomOne();
        newY = Y + changeY;
    }
    if (map[newY][newX] === 'empty') {
        return [newY, newX];
    }
    //return getClosestEmpty(matrix, [Y,X]);
}




/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__live_nature_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fruit_js__ = __webpack_require__(5);



class Plant extends __WEBPACK_IMPORTED_MODULE_0__live_nature_js__["a" /* default */]{
    constructor(plantParams) {
        super(plantParams);
        this.growthAge = plantParams.growthAge;
        this.isGrowth = false;
        this.size = plantParams.size;
        this.wasEaten = false;
        this.makeFruitPeriod = plantParams.makeFruitPeriod;
        this.bushClass = plantParams.bushClass;
        this.treeClass = plantParams.treeClass;
        this.springClass = plantParams.springClass;
        // fruitParams
        this.fruit = __WEBPACK_IMPORTED_MODULE_1__fruit_js__["a" /* default */];
        this.fruitParams = plantParams.fruitParams;

        this.self = this;
    }

    getGrowth() {
        if (this.age >= this.growthAge) {
            return this.isGrowth = true;
        } else return this.isGrowth = false;
    }

    getTheType() {
        if (this.size === 2) { return this.type = 'bush'; }
        if (this.size === 3) { return this.type = 'tree'; }
    }

    getFruitSize() {
        let type = this.getTheType();
        if (type === 'bush') { return this.fruitParams.size = 4; }
        if (type === 'tree') { return this.fruitParams.size = 6; }
    }

    timeToFruit() {
        if (this.isAlive) {
            let condition = (this.age - this.growthAge);
            if (condition === 0) {
                condition += 1;
            }
            let productAge = (condition % this.makeFruitPeriod === 0);
            if (productAge) {
                return productAge;
            }
            else return false;
        }
    }

    view() {
        super.view();
        let isGrowth = this.isGrowth === true,
            isAlive = this.isAlive === true,
            type = this.getTheType();
        if (!isAlive) {
            return 'empty';
        }
        if (!isGrowth && isAlive) {
            return `${this.springClass}`;
        }
        if (isGrowth && isAlive){
            if (type === 'bush') { return this.cssClass = 'bush'; }
            if (type === 'tree') { return this.cssClass = 'tree'; }
        }
    }

    live() {
        super.live();

        this.view();
        if (this.isAlive === true) {
            this.getFruitSize();
            this.getGrowth();
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Plant;



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__parameters_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__plants_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__live_nature_js__ = __webpack_require__(1);




class Fruit extends __WEBPACK_IMPORTED_MODULE_2__live_nature_js__["a" /* default */] {
    constructor(parameters) {
        super(parameters);
        this.size = parameters.size;
        this.timeToLive = parameters.timeToLive;
        this.wasEaten = false;
        this.makePlant = false;
        this.plant = __WEBPACK_IMPORTED_MODULE_1__plants_js__["a" /* default */];
        this.childParams = {};
        this.cssClass = parameters.cssClass;
    }
    isEaten() {
        this.wasEaten = true;
        return this.isAlive = false;
    }
    chooseChild() {
        if (this.size === 4) { return this.childParams = __WEBPACK_IMPORTED_MODULE_0__parameters_js__["a" /* bushParams */]; }
        if (this.size === 6) { return this.childParams = __WEBPACK_IMPORTED_MODULE_0__parameters_js__["d" /* treeParams */]; }
    }
    live() {
        super.live();
        this.view();
        if (this.isAlive === true) {
            let ageCheck = this.age === this.timeToLive;
            if (ageCheck) {
                let childSize = this.chooseChild();
                this.makePlant = true;
            }
        }
    }

    view() {
        super.view();
        if (this.isAlive === true && this.timeToLive > 0) {
            return `${this.cssClass}`;
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Fruit;


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_main_css__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_main_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__css_main_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__parts_parameters_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__parts_map_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__parts_plants_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__parts_fruit_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__parts_deer_js__ = __webpack_require__(8);

// importing parameters


// importing classes





let matrix = new __WEBPACK_IMPORTED_MODULE_2__parts_map_js__["a" /* default */](__WEBPACK_IMPORTED_MODULE_1__parts_parameters_js__["c" /* mapElements */]);

matrix.mapGenerate();
// creating new instances of plants
matrix.mapAddDecorations(__WEBPACK_IMPORTED_MODULE_3__parts_plants_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__parts_parameters_js__["d" /* treeParams */], matrix.startTreesQuantity);
matrix.mapAddDecorations(__WEBPACK_IMPORTED_MODULE_3__parts_plants_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__parts_parameters_js__["a" /* bushParams */], matrix.startBushQuantity);
matrix.mapAddDecorations(__WEBPACK_IMPORTED_MODULE_5__parts_deer_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__parts_parameters_js__["b" /* deerParams */], 1);

let div = document.createElement('div');
div.setAttribute('class', 'container');
document.addEventListener('DOMContentLoaded', function () {
    document.body.appendChild(div);
    matrix.mapDraw(div);
    setInterval(() => {

        console.log(matrix.map);
        matrix.mapLive();
        matrix.mapDraw(div);
    }, 2000);
});

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__functions_js__ = __webpack_require__(3);


class Map {
    constructor(mapElements) {
        // matrix sizes
        this.xSize = mapElements.xSize;
        this.ySize = mapElements.ySize;
        //map elements
        this.empty = mapElements.empty;
        // the quantity of decorations. i think it will help to create new instances of Plant;
        this.startTreesQuantity = mapElements.startTreesQuantity;
        this.startBushQuantity = mapElements.startBushQuantity;
        // the matrix map
        this.map = [];
        this.self = this;
    }

    // i need to generate random map which will be empty
    mapGenerate() {
        for (let i = 0; i < this.ySize; i++) {
            this.map[i] = [];
            for (let j = 0; j < this.xSize; j++) {
                let mapValue = this.empty;
                this.map[i].push(mapValue);
            }
        }
    }

    getItemConstructorName(item) {
        return item.constructor.name;
    }
    getRandomEmpty() {
        let randY = Object(__WEBPACK_IMPORTED_MODULE_0__functions_js__["b" /* randomInteger */])(0, this.ySize-1),
            randX = Object(__WEBPACK_IMPORTED_MODULE_0__functions_js__["b" /* randomInteger */])(0, this.xSize-1),
            mapHasRandX = (randX !== -0 && randX !== -1),
            mapHasRandY = (randY !== -0 && randX !== -1),
            map = this.map;
        if (mapHasRandX && mapHasRandY && map[randY][randX] === this.empty) {
            return [randY, randX];
        }
        return this.getRandomEmpty();
    }

    // make new instance of element
    mapElementNewInstance(Element, elementParameters) {
        return new Element(elementParameters);
    }

    // add new instances of decoration elements in the beginning
    mapAddDecorations(element, elementParameters, elementQuantity) {
        for (let i = 0; i < elementQuantity; i++) {
            let randCoord = this.getRandomEmpty();
            let decorElement = this.mapElementNewInstance(element, elementParameters),
                map = this.map,
                X = randCoord[1],
                Y = randCoord[0];
            // this sets the coordination of element into element.Position
            decorElement.Position[0] = Y;
            decorElement.Position[1] = X;
            map[Y][X] = decorElement;
        }
    }

    // i try to make every plant live
    mapLive() {
        let map = this.map,
            empty = this.empty,
            fruit;
        for (let item of map) {
            for (let mapItem of item) {
                let mapItemProto = this.getItemConstructorName(mapItem);

                if (mapItemProto === 'Deer') {
                    mapItem.live(map, mapItem);
                    console.log(mapItem.satiety);
                }

                if (mapItemProto === 'Plant') {
                    mapItem.live();
                    let posX = mapItem.Position[1],
                        posY = mapItem.Position[0],
                        closestEmpty;


                    if (mapItem.timeToFruit()) {
                        closestEmpty = Object(__WEBPACK_IMPORTED_MODULE_0__functions_js__["a" /* getClosestEmpty */])(this.map, [posY, posX]);
                        console.log(closestEmpty);
                        mapItem.getFruitSize();
                        fruit = this.mapElementNewInstance(mapItem.fruit, mapItem.fruitParams);

                        if (closestEmpty !== undefined) {
                            map[closestEmpty[0]][closestEmpty[1]] = fruit;
                            fruit.Position[1] = closestEmpty[1];
                            fruit.Position[0] = closestEmpty[0];
                        }
                    }
                }
                if (mapItemProto === 'Fruit') {
                    mapItem.live();
                    if (mapItem.makePlant) {
                        let newPlant = this.mapElementNewInstance(mapItem.plant, mapItem.childParams);
                        newPlant.Position = mapItem.Position;
                        mapItem.isAlive = false;
                        this.mapClearElement(mapItem);
                        map[newPlant.Position[0]][newPlant.Position[1]] = newPlant;
                    }
                }
                if (mapItem.wasEaten) {
                    this.mapClearElement(mapItem);
                }
            }
        }
    }
    mapDraw(htmlNode) {
        let map = this.map,
            output = ``;
        for (let mapElem of map) {
            output += `<ul>`;
            for (let mapElemDepth of mapElem) {
                let className,
                    satiety ='',
                    health = '',
                    isEmpty = mapElemDepth === this.empty,
                    notEmpty = mapElemDepth !== this.empty;
                if (isEmpty) {
                    className = `${this.empty}`;
                }
                if (notEmpty) {
                    className = `${mapElemDepth.view()}`;
                    if (mapElemDepth.satiety) {
                        satiety = `<progress class="progress-satiety" value="${mapElemDepth.showSatiety()}" max="${mapElemDepth._fullSatiety}"></progress>`
                    }
                    if (mapElemDepth.health) {
                        health = `<progress class="progress-health" value="${mapElemDepth.showHealth()}" max="${mapElemDepth._fullHealth}"></progress>`
                    }
                }
                output += `<li class = "${className}"><span>${satiety}</span><span>${health}</span></li>`;
            }
            output += `</ul>`;
        }
        htmlNode.innerHTML = output;
    }

    mapClearElement(mapElement) {
        if (mapElement.isAlive === false) {
            let map = this.map,
                empty = this.empty,
                posX = mapElement.Position[1],
                posY = mapElement.Position[0];
            map[posY][posX] = empty;
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Map;



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__animal_js__ = __webpack_require__(9);


class Deer extends __WEBPACK_IMPORTED_MODULE_0__animal_js__["a" /* default */] {
    constructor(parameters) {
        super(parameters);
    }
    eat(food) {
        super.eat(food);
        let damage = food._fullHealth/food.size;
        if (food.constructor.name === 'Fruit') {
            damage = 100;
        }
        food.isBitten(damage);
        food.damaged();
        console.log(food.health);
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Deer;


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__functions_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__live_nature_js__ = __webpack_require__(1);



class Animal extends __WEBPACK_IMPORTED_MODULE_1__live_nature_js__["a" /* default */] {
    constructor(parameters) {
        super(parameters);
        this.satiety = parameters.satiety;
        this._fullSatiety = parameters.satiety;
        this.satietyDecrease = parameters.satietyDecrease;
        this.food = parameters.food;
    }

    healthReduce(value) {
        this.health -= value;
        if (this.health <= 0) {
            this.isDead();
        }
    }

    starvation() {
        if (this.isAlive) {
            this.satiety -= this.satietyDecrease;
            if (this.satiety <= 0) {
                this.satiety = 0;
                this.healthReduce(this.satietyDecrease);
            }
        }
    }

    see(matrix, animal) {
        let X = this.Position[1],
            Y = this.Position[0],
            leftUp = matrix[Y-1][ X-1],
            up = matrix[Y-1][X],
            upRight = matrix[Y-1][X+1],
            right = matrix[Y][X+1],
            downRight = matrix[Y+1][X+1],
            down = matrix[Y+1][X],
            downLeft = matrix[Y+1][X-1],
            left = matrix[Y][X-1],
            itemConstructor,
            closestElements = [leftUp, up, upRight, right, downRight, down, downLeft, left];
        let checkAllEmpty = closestElements.every((item) => {
            if (item !== undefined) {
                itemConstructor = item.constructor.name;
                return itemConstructor === 'String';
            }
            if (item === undefined) {
                return true;
            }
        });

        let food = closestElements.find((item) => {
            if (item !== undefined) {
                itemConstructor = item.constructor.name;
                let foodItem = this.food.find((foodElement) => {
                    if (itemConstructor === foodElement) {
                        return true;
                    }
                });
                if (foodItem) {
                    return item;
                }
            }
        });
        // it is the ending of method see();
        let seenFood = food !== undefined;
        if (this.satiety < this._fullSatiety && seenFood) {
            this.eat(food);
        }
        else if (checkAllEmpty) {
            this.move(matrix, animal);
        }
    }

    eat(food) {
        let damage = food._fullHealth/food.size;
        food.isBitten(damage);
        food.damaged();
        console.log(food.health);
    }

    move(matrix, animal) {
        let currentPos = this.Position;
        let nextPos = Object(__WEBPACK_IMPORTED_MODULE_0__functions_js__["a" /* getClosestEmpty */])(matrix, currentPos);
        let nextPosYCheck;
        let nextPosY = nextPos[0],
            nextPosX = nextPos[1],
            currentPosX = currentPos[1],
            currentPosY = currentPos[0];
        matrix[nextPosY][nextPosX] = animal;
        this.Position[0] = nextPosY;
        this.Position[1] = nextPosX;
        console.log(this.Position);
        matrix[currentPosY][currentPosX] = 'empty';
        return matrix;
    }

    live(matrix, animal) {
        super.live();
        if (this.isAlive) {
            this.starvation();
            this.see(matrix, animal);
        }
    }

    showSatiety() {
        if (this.isAlive) {
            return this.satiety;
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Animal;


/***/ })
/******/ ]);