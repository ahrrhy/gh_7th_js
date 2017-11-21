import Predator from "./predator.js";

export default class Eagle extends Predator{
    constructor(){
        super(name, health, stamina);
        this.height = 0;
        this.say = 'cruue';
        this.name = name;
        this.health = health;
        this.stamina = stamina;
        this._reloadStamina = stamina;
        this._reloadHealth = health;
        this._DAY = 1000;
        this._age = 0;
        this._maxAge = 50;
        this._isAlive = true;
        // animal properties
        this.speed = 0;
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