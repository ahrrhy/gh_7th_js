import Animal from "./animal.js";

export default class Human extends Animal{

    constructor() {
        super(name, health, stamina);
        this.say = 'and i even can\'t imagine what else i can use here';
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
}