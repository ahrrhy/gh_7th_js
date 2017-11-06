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
		DAY = 500,
		livingTime;

	// animal properties
	this.age = 0;
    this.health = health;
    this.speed = 0;
    this.stamina = stamina;
    this.name = name;

    //privite methods
    function grows () {
    	return animal.age++;
    }
    this.doGrows = function () {
    	livingTime = setInterval(function(){
    		grows();
   			console.log(animal.age);
    	}, DAY);
    	if (animal.age == 10) {
    		clearInterval(livingTime);
    	} 
    }
    
    // animal methods
    this.walk = function () {
    	return animal.speed = 10;
    }
    this.run = function () {
    	return animal.speed = 30;
    }
    this.sleep = function () {

    }

}
var maus = new Animal ('Mickey', 50, 50);


document.addEventListener('DOMContentLoaded', function () {
	maus.doGrows();
})