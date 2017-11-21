import Human from "./human.js";

export default class Aborigine extends Human{
    constructor(name, health, stamina) {
        super(name, health, stamina);
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