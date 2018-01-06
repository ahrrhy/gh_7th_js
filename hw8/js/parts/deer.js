import Animal from "./animal.js";

export default class Deer extends Animal {
    constructor(parameters) {
        super(parameters);
    }
    eat(food) {
        super.eat(food);
        let damage = food._fullHealth/food.size;
        if (food.constructor.name === 'Fruit') {
            damage = 100;
        }
        food.isBitten(damage);
        food.damaged();
        console.log(food.health);
    }

}