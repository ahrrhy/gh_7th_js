//we need to create one constructor Animal with 4 different instances one of which will have two lower instances using
//Animal <- Mouse
// Animal <- Eagle
// Animal <- Deer
// Animal <- Human
// Animal <- Human <- Hunter
// Animal <- Human <- Aborigine


// function toLive () {

// }

function Animal(name, health, stamina) {
	var animal = this;
	// animal properties
    animal.health = health;
    animal.speed = 0;
    animal.stamina = stamina;
    animal.age = 0;
    animal.name = name;
    function growig () {
    	return age++;
    }
    // animal methods
    animal.walk = function () {
    	return animal.speed = 10;
    }
    animal.run = function () {
    	return animal.speed = 30;
    }
    // this.sleep = function () {

    // }

}