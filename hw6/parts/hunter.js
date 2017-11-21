import Human from "./human.js";

export default class Hunter extends Human{

    constructor(name, health, stamina) {
        super(name, health, stamina);
        this.hasWeapon = false;
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