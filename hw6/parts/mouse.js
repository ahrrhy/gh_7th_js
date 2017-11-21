import Animal from "./animal.js";

export default class Mouse extends Animal {
    constructor(name, health, stamina) {
        super(name, health, stamina);
        this.say = 'pee-pee';
    }
}

