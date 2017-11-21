import Predator from "./predator.js";

export default class Eagle extends Predator{
    constructor(name, health, stamina){
        super(name, health, stamina);
        this.height = 0;
        this.say = 'cruue';
    }

    fly() {
        return this.height = 30;
    }

    landed() {
        return this.height = 0;
    }

    move() {
        super.move();
        this.fly();
    }
}