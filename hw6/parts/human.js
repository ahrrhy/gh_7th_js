import Animal from "./animal.js";

export default class Human extends Animal{

    constructor(name, health, stamina) {
        super(name, health, stamina);
        this.say = 'and i even can\'t imagine what else i can use here';

    }
}