// create class Plant for game;
// foliageSize means how long Deer will it this plant
import {getPosition} from "./functions.js";
import {Fruit} from "./fruit-class.js";
import {map} from "./map.js";

class Plant {

    constructor(foliageSize) {
        this.age = 0;
        this.foliageSize = foliageSize;
        this.isAlive = true;
        this.timeToFruits = 0;
    }

    getGrowth() {
        if (this.age >= 2) {
            return this.canBeEatten = true;
        } else return this.canBeEatten = false;
    }
    getTheType() {
        if (this.foliageSize === 2) { return this.type = 'bush'}
        if (this.foliageSize === 3) { return this.type = 'tree'}
    }
    getFruitSize() {
        let type = this.getTheType();
        if (type === 'bush') { return this.fruitSize = 4 }
        if (type === 'tree') { return this.fruitSize = 6 }
    }
    makeFruit() {
        let curPos = getPosition(map, thing),
            curPosY = curPos[0],
            curPosX = curPos[1];
        if (map[curPosY][curPosX] === empty) {
            let someFruit = new Fruit(this.fruitSize);
            map[curPosY][curPosX] = someFruit;
        }
    }
    view() {
        let type = this.getTheType();
        return type;
    }
}

export {Plant};