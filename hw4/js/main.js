//we need to create one constructor Animal with 4 different instances one of which will have two lower instances using
//Animal <- Mouse
// Animal <- Eagle
// Animal <- Deer
// Animal <- Human
// Animal <- Human <- Hunter
// Animal <- Human <- Aborigine




function Animal(name, health, stamina) {
    var reloadStamina = stamina,
        reloadHealth = health;
	//privite properties
	var animal = this,
		DAY = 1000,
        age = 0,
        maxAge = 50,
		livingTime;

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
        }else {
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
    };
    this.getAge = function () {
        return age;
    };
}
function Mouse() {
    Animal.apply(this, arguments);
    this.say = 'pee-pee';

    //rename parents methods to better reading;
}
var Mickey = new Mouse('Mickey', 100, 100);


document.addEventListener('DOMContentLoaded', function () {
    Mickey.lives();
    console.log(Mickey.name);
    Mickey.move();
    console.log(Mickey.stamina);
    console.log(Mickey.speed);
    Mickey.stop();
    console.log(Mickey.speed);
    Mickey.move();
    console.log(Mickey.stamina);
    Mickey.move();
    console.log(Mickey.stamina);
    Mickey.move();
    console.log(Mickey.stamina);
    console.log(Mickey.health);
    Mickey.move();
    console.log(Mickey.stamina);
    console.log(Mickey.health);
    Mickey.eat();
    console.log(Mickey.health);
    console.log(Mickey.say);
});