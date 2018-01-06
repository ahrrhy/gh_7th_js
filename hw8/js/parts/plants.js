import LiveNature from "./live-nature.js";
import Fruit from "./fruit.js";

export default class Plant extends LiveNature{
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
        this.fruit = Fruit;
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
