import {randomInteger, getClosestEmpty} from "./functions.js";
import LiveNature from "./live-nature.js";

export default class Animal extends LiveNature {
    constructor(parameters) {
        super(parameters);
        this.satiety = parameters.satiety;
        this._fullSatiety = parameters.satiety;
        this.satietyDecrease = this.satiety/100;
        this.food = parameters.food;
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
            leftUp = matrix[Y-1][X-1],
            up = matrix[Y-1][X],
            upRight = matrix[Y-1][X+1],
            right = matrix[Y][X+1],
            downRight = matrix[Y+1][X+1],
            down = matrix[Y+1][X],
            downLeft = matrix[Y+1][X-1],
            left = matrix[Y][X-1],
            itemConstructor;
        let closestElements = [leftUp, up, upRight, right, downRight, down, downLeft, left];
        let checkAllEmpty = closestElements.every((item) => {
            if (item !== undefined) {
                itemConstructor = item.constructor.name;
                return itemConstructor === 'String';
            }
            if (item === undefined) {
                return true;
            }
        });

        let food = closestElements.find((item) => {
            let food;
            if (item !== undefined) {
                itemConstructor = item.constructor.name;
                for (let i =0; i < this.food.length; i++) {
                    if (itemConstructor === this.food[i]) {
                        console.log(item);
                        food = item;
                    }
                }
            }
            return food === item;
        });
        // it is the ending of method see();
        if (this.satiety < this._fullSatiety) {
            this.eat(food);
        }
        // else if (checkAllEmpty) {
        //     this.move();
        // }
    }
    eat(food) {

    }

    // move(matrix) {
    //     let currentPos = this.Position;
    //     let nextPos = getClosestEmpty(matrix, currentPos);
    //     let nextPosY = nextPos[0],
    //         nextPosX = nextPos[1],
    //         currentPosX = currentPos[1],
    //         currentPosY = currentPos[0];
    //     matrix[nextPosY][nextPosX] = this;
    //     matrix[currentPosY][currentPosX] = empty;
    //     return matrix;
    // }
}