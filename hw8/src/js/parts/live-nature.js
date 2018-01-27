export default class LiveNature {
    constructor(parameters) {
        this.age = 0;
        this.cssClass = parameters.cssClass;
        this.isAlive = true;
        this.Position = [];
        this.isDamaged = false;
        this.health = parameters.health;
        this._fullHealth = parameters.health;
    }

    isDead() {
        return this.isAlive = false;
    }

    damaged() {
        if (this.health < this._fullHealth && this.health > 0) {
            return this.isDamaged = true;
        }
    }

    isBitten(damage) {
        this.health -= damage;
        this.damaged();
        if (this.health <= 0) {
            this.wasEaten = true;
            this.isDead();
        }
    }

    live() {
        if (this.isAlive === true) {
            this.age++;
        }
        if (this.isDamaged) {
            this.age = -1;
        }
        //else this.isDead();
    }

    showHealth() {
        if (this.isAlive) {
            return this.health;
        }
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