
import Fruit from "./fruit.js";

export default class Plant {
    constructor(plantParams) {
        this.age = 0;
        this.growthAge = plantParams.growthAge;
        this.isGrowth = false;
        this.size = plantParams.size;
        this.isAlive = true;
        this.makeFruitPeriod = plantParams.makeFruitPeriod;
        this.bushClass = plantParams.bushClass;
        this.treeClass = plantParams.treeClass;
        this.springClass = plantParams.springClass;
        this.Position = [];
        // fruitParams
        this.fruit = Fruit;
        this.fruitParams = plantParams.fruitParams;
        this.self = this;
    }

    isEaten() {
        return this.isAlive = false;
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
        if (type === 'bush') { return this.fruitParams.fruitSize = 4; }
        if (type === 'tree') { return this.fruitParams.fruitSize = 6; }
        console.log();
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
            if (type === 'bush') { return `${this.bushClass} bush`; }
            if (type === 'tree') { return `${this.treeClass} tree`; }
        }
    }

    live() {
        if (this.isAlive === true) {
            this.age++;
            this.getGrowth();
        }
    }
}
