export default class LiveNature {
    constructor(parameters) {
        this.age = 0;
        this.cssClasses = parameters.cssClass;
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
            return this.cssClasses;
        }
        if (!this.isAlive) {
            return 'empty';
        }
    }
}