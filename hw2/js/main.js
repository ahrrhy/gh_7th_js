// getting data from form
document.addEventListener('DOMContentLoaded', function(){ // eventListener works when page is loaded

    var users = [];

    var createUserForm = document.getElementById("createUserForm"),
        createBtn = document.getElementById("createUserSubmit"); // get the var from Form
    createUserForm.addEventListener('submit', function(e){ // make eventListener that works on form submit
        e.preventDefault(); // stop submit form
    });
        createBtn.addEventListener('click', function(){
            var userName = document.getElementById("name").value;
            if (userName !== '') {
                var knownUser = User.createFromForm(nameUser(), UserDayOfBirth());
                users.push(knownUser);
                console.log(users);
            }else{
                var unknownUser = User.createEmpty();
                users.push(unknownUser);
                console.log(users);
            }
            return users;
        });

    // taking data from form
    function UserDayOfBirth () {       
        var birthYear = document.getElementById("birthYear").value, //get birthYear input value
            birthMonth = document.getElementById("birthMonth").value, //get birthMonth input value
            birthDay = document.getElementById("birthDay").value; //get birthDay input value
            return new Date(birthYear, birthMonth-1, birthDay);
    }
    // taking data from form

    function nameUser () {
        return document.getElementById("name").value
    }

    //Create the User constructor

    function User () {
        User.count++; // static property which will count the number of User's instances
        this.id = User.count; // User id

        // this descriptor gets value from dayOfBirth and defines User's age

        Object.defineProperty (this, "age", { // descriptor makes new User's property - User.age
            get: function () {
                var todayYear = new Date().getFullYear();
                return todayYear - this.dayOfBirth.getFullYear(); // descriptor get returns age value
            }
        });
        // this descriptor gets value from dayOfBirth and defines User's birthday
        Object.defineProperty(this, "birthday", {
            get: function () {
                return this.dayOfBirth.toLocaleString().split(',')[0].slice(0, 5);
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
            return { "id" : this.id, "name" : this.fullName, "age" : this.age, "birthday" : this.birthday };
        };

        Object.defineProperties(this, {
                valueOf : {enumerable: false},
                toString : {enumerable: false},
                toJSON : {enumerable: false}
            }
        );
    }

    User.createFromForm = function (name, UserDayOfBirth) { // fabric method which will create a known user

        var user = new User; // create new instance of User
        user.fullName = name; // User's fullName
        user.dayOfBirth = UserDayOfBirth; // User's date of birth  

        return user;
    };

    User.createEmpty = function () { // fabric method which will create an unknown user
        var user = new User;
            user.fullName = 'Hobbit';
            user.dayOfBirth = new Date;

    return user;
    };
    User.count = 0; //starts User.count

    function takeNames (arr) {
        var namedUsers = [];
        for (var i = 0; i < arr.length; i++) {
            namedUsers.push(arr[i].fullName);
        }
        return namedUsers;
    }

    var showBtn = document.getElementById('showBtn');
    showBtn.addEventListener('click', function () {
        var userNames = takeNames(users);
        console.log(userNames);
    });


});


