function User(fullName, age) {
    User.count++;
    this.id = User.count;
    this.fullName = fullName;
    this.age = age;
    this.birthday;


    this.valueOf = function () { // Number Value
      return this.id;
    };
    this.toString =function(){ // String Value
        return this.fullName;
    };
    this.toJSON = function () {
        return [this.id, this.fullName, this.age, this.birthday];
    }
}
User.count = 0;

var vasya = new User("Василий Попкин");
//console.log(vasya);
console.log(vasya + ' a');

var igor = new User('Igor Kulev');
//console.log(misha);
console.log(igor + ' a');
console.log(Number(igor));
console.log(String(igor));