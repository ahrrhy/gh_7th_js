export default class LiveNature {
    constructor(parameters) {
        this.age = 0;
        this.cssClass = parameters.cssClass;
        this.isAlive = true;
        this.Position = [];
    }

    isDead() {
        return this.isAlive = false;
    }

    live() {
        if (this.isAlive === true) {
            this.age++;
        }
        else this.isDead();
    }

    view() {
        if (this.isAlive) {
            return this.cssClass;
        }
        if (!this.isAlive) {
            return 'empty';
        }
    }
}