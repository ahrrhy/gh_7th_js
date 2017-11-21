import Human from "./human.js";

export default class Aborigine extends Human{
    constructor() {
        super(name, health, stamina);
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

    makeFire() {
        if (!arguments.length) {
            return this.stamina += 20;
        }else {
            for (let i = 0; i <arguments.length; i++) {
                arguments[i].stamina += 20;
            }
            return this.stamina += 20;
        }
    }

    makeWeapon() {
        return this.weapon = true;
    }

    giveWeapon(hunter) {
        if (this.weapon) {
            return hunter.hasWeapon = true;
        }
    }
}