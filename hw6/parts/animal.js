export default class Animal {
    constructor(name, health, stamina) {
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

    showName() {
        return this.name;
    }
    fastMove() {
        return this.speed = 30;
    }

    grows() {
        if (this._age === this._maxAge) {
            this.death();
        } else if (this.health <= 0){
            this.death();
        }
        else {
            this._age++;
            console.log(this._age);
            return this._age;
        }
    }

    time() {
        this.livingTime = setInterval(function () {
            this.grows();
        }, this._DAY);
    }

    size(size) {
        if (!arguments.length) {
            return this.animalSize;
        }
        this.animalSize = size;
    }

    move() {
        this.fastMove();
        this.stamina -= this.speed;
        if (this.stamina <= 0) {
            this.health += this.stamina;
            this.stamina = 0;
        }
        return this.stamina;
    }

    stop() {
        this.speed = 0;
        return this.speed;
    }

    sleep() {
        return this.stamina = this._reloadStamina;
    }

    eat() {
        return this.health = this._reloadHealth;
    }

    lives() {
        this.time();
    }

    death() {
        clearInterval(this.livingTime);
        return this._isAlive = false;
    }

    getAge() {
        return this._age;
    }

    getStatus() {
        return this._isAlive;
    }
}

