//we need to create one constructor Animal with 4 different instances one of which will have two lower instances using
//Animal <- Mouse
// Animal <- Eagle
// Animal <- Deer
// Animal <- Human
// Animal <- Human <- Hunter
// Animal <- Human <- Aborigine
function Predator () {
    var predator = this;
    this.hunt = function (victim) {
        predator.move();
        if (predator.size() >= victim.size()){
            victim.death();
            predator.eat();
            return predator.stamina += 20;
        }
    };
}
function Animal(name, health, stamina) {
    var reloadStamina = stamina,
        reloadHealth = health;
	//privite properties
	var animal = this,
		DAY = 1000,
        age = 0,
        maxAge = 50,
		livingTime,
        animalSize,
	    isAlive = true;
	// animal properties
    this.health = health;
    this.speed = 0;
    this.stamina = stamina;
    this.name = name;
    //privite methods
    function fastMove () {
        return animal.speed = 30;
    }
    function grows () {
        if (age === maxAge) {
            animal.death();
        } else if (animal.health <= 0){
            animal.death();
        }
        else {
            age++;
            console.log(age);
            return age;
        }
    }
    function time() {
        livingTime = setInterval(function () {
            grows();
        }, DAY);
    }
    // animal methods
    this.size = function (size) {
        if (!arguments.length) {
            return animalSize;
        }
        animalSize = size;
    };
    this.move = function () {
        fastMove();
        animal.stamina -= animal.speed;
        if (animal.stamina <= 0) {
            animal.health += animal.stamina;
            animal.stamina = 0;
        }
        return animal.stamina;
    };
    this.stop = function () {
        animal.speed = 0;
        return animal.speed;
    };
    this.sleep = function () {
        return animal.stamina = reloadStamina;
    };
    this.eat = function () {
        return animal.health = reloadHealth;
    };
    this.lives = function () {
        time();
    };
    this.death = function () {
        clearInterval(livingTime);
        return isAlive = false;
    };
    this.getAge = function () {
        return age;
    };
    this.getStatus = function () {
        return isAlive;
    };
}
//Animal <- Mouse
function Mouse() {
    Animal.apply(this, arguments);
    this.say = 'pee-pee';
}
var Mickey = new Mouse('Mickey', 100, 100);

function Eagle () {
    Animal.apply(this, arguments);
    Predator.apply(this, arguments);
    var eagle = this;
    this.say = 'cruue';
    this.height = 0;
    //Make it fly
    this.fly = function () {
        return eagle.height = 30;
    };
    this.landed = function () {
        return eagle.height = 0;
    };
    var animalMove = this.move(); // i have a question. if i call animal move in new this.move it crashes. but this code works
    this.move = function () {
        eagle.fly();
    };
}

var AngryBird = new Eagle('AngryBird', 100, 150);

function Deer() {
    Animal.apply(this, arguments);
    var deer = this,
        horns = {
        size: '',
        color: '',
        branched: ''
    };
    this.say = 'moo';
    this.horns = function (size, color, branched) {
        horns.size = size;
        horns.color = color;
        horns.branched = branched;
    };
    this.showHorns = function () {
        return horns;
    }
}
var Bamby = new Deer('Bamby', 150, 200);

function Human () {
    Animal.apply(this, arguments);
    var walksOnTwoLegs = true,
        usesInstruments = true;
    //and i even can't imagine what else i can use here
    this.say = 'and i even can\'t imagine what else i can use here';
}
function Hunter() {
    Human.apply(this, arguments);
    var hunter = this,
        food;
    this.hasWeapon = false;
    this.showWeapon = function () {
        return hunter.hasWeapon = true;
    };
    this.feed = function (family) {
       if (food) {
           hunter.eat();
           family.eat();
       }
    };
    this.hunt = function (victim) {
        hunter.move();
        if (!hunter.hasWeapon) {
            if (hunter.size() >= victim.size()){
                victim.death();
                return food = true;
            }
        }else if (hunter.hasWeapon) {
            victim.death();
            return food = true;
        } else {
            return food = false;
        }
    };
}
function Aborigine() {
    Human.apply(this, arguments);
    var weapon,
        aborigine = this;

    this.makeFire = function () {
        if (!arguments.length) {
            return aborigine.stamina += 20;
        }else {
            for (var i = 0; i <arguments.length; i++) {
                arguments[i].stamina += 20;
            }
            return aborigine.stamina += 20;
        }
    };
    this.makeWeapon = function () {
        return weapon = true;
    };
    this.giveWeapon = function (hunter) {
        if (weapon) {
            return hunter.hasWeapon = true;
        }
    };
}
var ChuckNorris = new Hunter('Chuck Norris', 200, 200);
var JimCarrey = new Aborigine('Jim Carrey', 150, 150);
document.addEventListener('DOMContentLoaded', function () {
    //DEBUG
    
});