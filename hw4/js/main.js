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
    this._health = health;
    this._speed = 0;
    this._stamina = stamina;
    this._name = name;

    //privite methods
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
    this.sleep = function () {

    };
    this.lives = function () {
        time();
    };
    this.death = function () {
        clearInterval(livingTime);
    };
    this.getAge = function () {
        return age;
    }
}
function Mouse() {
    Animal.apply(this, arguments);
}
var Mickey = new Mouse('Mickey', 100, 100);


document.addEventListener('DOMContentLoaded', function () {
    Mickey.lives();
});