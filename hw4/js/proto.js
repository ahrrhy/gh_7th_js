//we need to create one constructor Animal with 4 different instances one of which will have two lower instances using
//Animal <- Mouse
// Animal <- Eagle
// Animal <- Deer
// Animal <- Human
// Animal <- Human <- Hunter
// Animal <- Human <- Aborigine

function Animal(name, health, stamina) {
    this._reloadStamina = stamina;
    this._reloadHealth = health;
    this._DAY = 1000;
    this._age = 0;
    this._maxAge = 50;
    this._isAlive = true;

    // animal properties
    this.health = health;
    this.speed = 0;
    this.stamina = stamina;
    this.name = name;
}
    //privite methods
Animal.prototype.fastMove = function () {
    return this.speed = 30;
};
Animal.prototype.grows = function () {
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
};
Animal.prototype.time = function () {
    this.livingTime = setInterval(function () {
        this.grows();
    }, this._DAY);
};
    // animal methods
Animal.prototype.size = function (size) {
    if (!arguments.length) {
        return this.animalSize;
    }
    this.animalSize = size;
};
Animal.prototype.move = function () {
    this.fastMove();
    this.stamina -= this.speed;
    if (this.stamina <= 0) {
        this.health += this.stamina;
        this.stamina = 0;
    }
    return this.stamina;
};
Animal.prototype.stop = function () {
    this.speed = 0;
    return this.speed;
};
Animal.prototype.sleep = function () {
    return this.stamina = this._reloadStamina;
};
Animal.prototype.eat = function () {
    return this.health = this._reloadHealth;
};
Animal.prototype.lives = function () {
    this.time();
};
Animal.prototype.death = function () {
    clearInterval(this.livingTime);
    return this._isAlive = false;
};
Animal.prototype.getAge = function () {
    return this._age;
};
Animal.prototype.getStatus = function () {
    return this._isAlive;
};

function Mouse() {
    Animal.apply(this, arguments);
    this.say = 'pee-pee';
}
Mouse.prototype = Object.create(Animal.prototype);
Mouse.prototype.constructor = Mouse;

var Mickey = new Mouse('Mickey', 100, 100);


function Predator () {
    Animal.apply(this, arguments);
}
Predator.prototype = Object.create(Animal.prototype);
Predator.prototype.constructor = Predator;

Predator.prototype.hunt = function (victim) {
    this.move();
    if (this.size() >= victim.size()){
        victim.death();
        this.eat();
        return this.stamina += 20;
    }
};

function Eagle () {
    Animal.apply(this, arguments);
    Predator.apply(this, arguments);
    this.say = 'cruue';
    this.height = 0;
}
Eagle.prototype = Object.create(Predator.prototype);
Eagle.prototype.constructor = Eagle;

//Make it fly
Eagle.prototype.fly = function () {
    return this.height = 30;
};
Eagle.prototype.landed = function () {
    return this.height = 0;
};
Eagle.prototype.move = function () {
    Predator.prototype.move.apply(this, arguments);
    this.fly();
};
var AngryBird = new Eagle('AngryBird', 100, 150);


function Deer() {
    Animal.apply(this, arguments);
     this.horns = {
            size: '',
            color: '',
            branched: ''
        };
    this.say = 'moo';
}
Deer.prototype = Object.create(Animal.prototype);
Deer.prototype.constructor = Deer;

Deer.prototype.setHorns = function (size, color, branched) {
    this.horns.size = size;
    this.horns.color = color;
    this.horns.branched = branched;
};
Deer.prototype.showHorns = function () {
    return this.horns;
};
var Bamby = new Deer('Bamby', 150, 200);
Bamby.setHorns(34, 'grey', 'branched');

function Human () {
    Animal.apply(this, arguments);

    this.say = 'and i even can\'t imagine what else i can use here';
}
Human.prototype = Object.create(Animal.prototype);
Human.prototype.constructor = Human;

function Hunter() {
    Human.apply(this, arguments);
    //food;
    this.hasWeapon = false;
}
Hunter.prototype = Object.create(Human.prototype);
Hunter.prototype.constructor = Hunter;

Hunter.prototype.showWeapon = function () {
    return this.hasWeapon = true;
};
Hunter.prototype.feed = function (family) {
    if (this.food) {
        this.eat();
        family.eat();
    }
};
Hunter.prototype.hunt = function (victim) {
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
};

function Aborigine() {
    Human.apply(this, arguments);
}
Aborigine.prototype = Object.create(Human.prototype);
Aborigine.prototype.constructor = Aborigine;

Aborigine.prototype.makeFire = function () {
    if (!arguments.length) {
        return this.stamina += 20;
    }else {
        for (let i = 0; i <arguments.length; i++) {
            arguments[i].stamina += 20;
        }
        return this.stamina += 20;
    }
};
Aborigine.prototype.makeWeapon = function () {
    return this.weapon = true;
};
Aborigine.prototype.giveWeapon = function (hunter) {
    if (this.weapon) {
        return hunter.hasWeapon = true;
    }
};
var ChuckNorris = new Hunter('Chuck Norris', 200, 200);
var JimCarrey = new Aborigine('Jim Carrey', 150, 150);
