import {bushParams, treeParams} from "./parameters.js";
import Plant from "./plants.js";
import LiveNature from "./live-nature.js";

export default class Fruit extends LiveNature {
    constructor(parameters) {
        super(parameters);
        this.size = parameters.size;
        this.timeToLive = parameters.timeToLive;
        this.wasEaten = false;
        this.makePlant = false;
        this.plant = Plant;
        this.childParams = {};
        this.cssClass = parameters.cssClass;
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
            return `${this.cssClass} fruit`;
        }
    }
}