import {getPosition} from "./functions.js";
import {Plant} from "./plants-class.js";

class Fruit {
    constructor(size) {
        this.size = size;
        this.timeToLive = 4;
        this.isAlive = true;
    }
    isEatten() {
        return this.isAlive = false;
    }
    chooseChild() {
        if (this.size === 4) { return this.childSize = 2; }
        if (this.size === 6) { return this.childSize = 3; }
    }
    makeNewPlant() {
        let curPos = getPosition(map, fruit),
            curPosY = curPos[0],
            curPosX = curPos[1];

        map[curPosY][curPosX] = new Plant(this.childSize);
    }
}

export {Fruit};