//we need to create one constructor Animal with 4 different instances one of which will have two lower instances using
//Animal <- Mouse
// Animal <- Eagle
// Animal <- Deer
// Animal <- Human
// Animal <- Human <- Hunter
// Animal <- Human <- Aborigine




function Animal(name, health, stamina) {
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
    function grows () {
        if (age === maxAge) {
            clearInterval(livingTime);
        }else {
            age++;
            console.log(age);
        }
    }
    function time() {
        livingTime = setInterval(function () {
            grows();
        }, DAY);
    }


    // animal methods
    this.walk = function () {
    	return animal.speed = 10;
    };
    this.run = function () {
    	return animal.speed = 30;
    };
    this.sleep = function () {

    };
    this.lives = function () {
        time();
    };
    this.death = function () {
        clearInterval(livingTime);
    };
}
var maus = new Animal ('Mickey', 50, 50);


document.addEventListener('DOMContentLoaded', function () {
    maus.lives();
});