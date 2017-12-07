// create class Plant for game;
// foliageSize means how long Deer will it this plant
import {getPosition} from "./functions.js";
import {Fruit} from "./fruit-class.js";
import {getNextPosition} from "./functions.js";
import {map} from "/"


let bushClass = 'flaticon-big-plant-like-a-small-tree',
    treeClass = 'flaticon-tree-shape-of-thin-trunk-with-small-leaves-circles-outlines';

// can take Size 2 if it is a bush and 3 if it is a tree
class Plant {
    constructor(size, growthAge, deathAge) {
        this.age = 0;
        this.growthAge = growthAge;
        this.size = size;
        this.isAlive = true;
        this.timeToFruits = 0;
        this.deathAge = deathAge;
    }

    isEatten() {
        return this.isAlive = false;
    }
    getGrowth() {
        if (this.age >= this.growthAge) {
            return this.canBeEatten = true;
        } else return this.canBeEatten = false;
    }

    getTheType() {
        if (this.size === 2) { return this.type = 'bush'; }
        if (this.size === 3) { return this.type = 'tree'; }
    }

    getFruitSize() {
        let type = this.getTheType();
        if (type === 'bush') { return this.fruitSize = 4; }
        if (type === 'tree') { return this.fruitSize = 6; }
    }

    makeFruit() {
        let curPos = getPosition(map, thing),
            nextPos = getNextPosition(curPos[0],curPos[1]),
            nextPosY = nextPos[0],
            nextPosX = nextPos[1];
        if (map[nextPosY][nextPosX] === empty) {
            let someFruit = new Fruit(this.fruitSize);
            map[nextPosY][nextPosX] = someFruit.view();
        }

    }

    view() {
        if (this.isAlive === false) {
            return 'empty';
        } else {
            let type = this.getTheType();
            if (type === 'bush') { return `${bushClass} bush`; }
            if (type === 'tree') { return `${treeClass} tree`; }
        }
    }

    live() {
        this.age++;
        if (this.age === this.deathAge) {
            this.isAlive = false;
        }
        if (this.age % 4 === 0) {
            this.makeFruit();
        }
    }
}

export {Plant};