import Human from "./human.js";

export default class Hunter extends Human{

    constructor() {
        super(name, health, stamina);
        this.hasWeapon = false;
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

    showWeapon() {
        return this.hasWeapon = true;
    }

    feed(family) {
        if (this.food) {
            this.eat();
            family.eat();
        }
    }

    hunt(victim) {
        this.move();
        if (!this.hasWeapon) {
            if (this.size() >= victim.size()){
                victim.death();
                return this.food = true;
            }
        } else if (this.hasWeapon) {
            victim.death();
            return this.food = true;
        } else {
            return this.food = false;
        }
    }
}