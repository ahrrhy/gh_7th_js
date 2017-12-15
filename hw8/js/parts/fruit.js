import {bushParams, treeParams} from "./parameters.js";
import Plant from "./plants.js";

export default class Fruit {
    constructor(fruitParams) {
        this.size = fruitParams.size;
        this.timeToLive = fruitParams.timeToLive;
        this.fruitClass = fruitParams.fruitClass;
        this.isAlive = true;
        this.wasEaten = false;
        this.age = 0;
        this.makePlant = false;
        this.Position = [];
        this.plant = Plant;
        this.childParams = {};
    }
    isEaten() {
        this.wasEaten = true;
        return this.isAlive = false;
    }
    chooseChild() {
        if (this.size === 4) { return this.childParams = bushParams; }
        if (this.size === 6) { return this.childParams = treeParams; }
    }
    live() {
        if (this.isAlive === true) {
            this.age++;
            let ageCheck = this.age === this.timeToLive;
            if (ageCheck) {
                let childSize = this.chooseChild();
                this.makePlant = true;
            }
        }
    }


    // makeNewPlant() {
    //     let curPos = getPosition(map, fruit),
    //         curPosY = curPos[0],
    //         curPosX = curPos[1];
    //
    //     map[curPosY][curPosX] = new Plant(this.childSize);
    //     return this.isAlive = false;
    // }

    view() {
        if (this.isAlive === false) {
            return 'empty';
        }
        if (this.isAlive === true && this.timeToLive > 0) {
            return `${this.fruitClass} fruit`;
        }
    }
}