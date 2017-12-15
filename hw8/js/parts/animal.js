import {randomInteger, getClosestEmpty} from "./functions.js";

export default class Animal {
    constructor(animalParam) {
        this.age = 0;
        this.health = animalParam.health;
        this._fullHealth = animalParam.health;
        this.satiety = animalParam.satiety;
        this._fullSatiety = animalParam.satiety;
        this.satietyDecrease = this.satiety/100;
        this.isAlive = true;
        this.Position = [];
        this.cssClass = animalParam.cssClass;
        this.food = animalParam.food;
    }

    isDead() {
        return this.isAlive = false;
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

    see(matrix, coordinates) {
        let closestEmpty = getClosestEmpty(matrix, coordinates);
        return closestEmpty;
    }

    eat(food) {
        if (this.satiety !== this._fullSatiety) {

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