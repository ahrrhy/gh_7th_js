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

    see(matrix) {
        let X = this.Position[1],
            Y = this.Position[0],
            elemenPosition = matrix[Y][X],
            leftUp = matrix[Y-1][X-1],
            up = matrix[Y-1][X],
            upRight = matrix[Y-1][X+1],
            right = matrix[Y][X+1],
            downRight = matrix[Y+1][X+1],
            down = matrix[Y+1][X],
            downLeft = matrix[Y+1][X-1],
            left = matrix[Y][X-1];
        let closestElements = [elemenPosition, leftUp, up, upRight, right, downRight, down, downLeft, left];
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