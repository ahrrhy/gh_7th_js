import {getPosition} from "./functions.js";
import {Plant} from "./class-plant.js";

class Fruit {
    constructor(fruitSize) {
        this.fruitSize = fruitSize;
        this.timeToLive = 4;
        this.isAlive = true;
    }
    isEatten() {
        return this.isAlive = false;
    }
    chooseChild() {
        if (this.fruitSize === 4) { return this.childSize = 2; }
        if (this.fruitSize === 6) { return this.childSize = 3; }
    }
    makeNewPlant() {
        let curPos = getPosition(map, fruit),
            curPosY = curPos[0],
            curPosX = curPos[1];

        map[curPosY][curPosX] = new Plant(this.childSize);
    }
}

export {Fruit};