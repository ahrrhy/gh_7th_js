import Animal from "./animal.js";

export default class Deer extends Animal{
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
        this.say = 'moo';
        this.horns = {
            size: '',
            color: '',
            branched: ''
        };
    }

    setHorns(size, color, branched) {
        this.horns.size = size;
        this.horns.color = color;
        this.horns.branched = branched;
    }

    showHorns() {
        return this.horns;
    }
}