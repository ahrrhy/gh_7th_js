import Animal from "./animal.js";

export default class Deer extends Animal{
    constructor(name, health, stamina) {
        super(name, health, stamina);

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