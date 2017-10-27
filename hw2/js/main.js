// getting data from form
document.addEventListener('DOMContentLoaded', function(){

    //stop submiting form

    var createUserForm = document.getElementById("createUserForm");
    createUserForm.addEventListener('submit', function(e){

        e.preventDefault();


        function UserBirthday () {
        var birthYear = document.getElementById("birthYear").value,
            birthMonth = document.getElementById("birthMonth").value,
            birthDay = document.getElementById("birthDay").value;
            return new Date(birthYear, birthMonth, birthDay);
        }
        
    })
    
});



//console.log(UserBirthday());


//Create the User constructor

function User (fullName, birthday) {
    User.count++;
    this.id = User.count;
    this.fullName = fullName;
    this.birthday;

    // this descriptor gets value from birthday and defines User's age
      Object.defineProperty (this, "age", {
        get: function () {
          var todayYear = new Date().getFullYear();
          return todayYear - this.birthday.getFullYear();
        }
      });


    // these will return the value methods
    this.valueOf = function () { // Number Value
      return this.id;
    };
    this.toString =function () { // String Value
        return this.fullName;
    };
    this.toJSON = function () {
        return [this.id, this.fullName, this.age, this.birthday];
    }
}
User.count = 0;


    // DEBAGS
var vasya = new User("Василий Попкин");
//console.log(vasya);
console.log(vasya + ' a');

var igor = new User('Igor Kulev');
//console.log(misha);
console.log(igor + ' a');
console.log(Number(igor));
console.log(String(igor));
console.log(JSON.stringify(igor));

// trying Date;
function showDate(a, b, c){
	var birthDate = new Date(a, b, c);
	console.log(birthDate);
}
showDate(1990,8,8);
