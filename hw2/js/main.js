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

        Object.defineProperty (this, "age", {// descriptor makes new User's property - User.age
            enumerable: true,
            get: function () {
                var todayYear = new Date().getFullYear();
                return todayYear - this.dayOfBirth.getFullYear(); // descriptor get returns age value
            }
        });
        // this descriptor gets value from dayOfBirth and defines User's birthday
        Object.defineProperty(this, "birthday", {
            enumerable: true,
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

    User.createFromForm = function(name, UserDayOfBirth) { // fabric method which will create a known user

        var user = new User; // create new instance of User
        user.fullName = name; // User's fullName
        user.dayOfBirth = UserDayOfBirth; // User's date of birth

        return user;
    };

    User.createEmpty = function() { // fabric method which will create an unknown user
        var user = new User;
            user.fullName = 'Hobbit';
            user.dayOfBirth = new Date;

    return user;
    };
    User.count = 0; //starts User.count

// this will get names from users array and put it to new array
    function takeNames(arr) {
        var namedUsers = [];
        for (var i = 0; i < arr.length; i++) {
            namedUsers.push(arr[i].fullName);
        }
        return namedUsers;
    }

    function displayUserData(namesArr, dataArr) {//namesArr - array with strings names, dataArr - array with User objects

        for (var i = 0; i < namesArr.length; i++) { //while we have names we will create dom elements
            var userDataWrap = document.createElement('div'),
            dataWrapHeading = document.createElement('h3');
            document.body.appendChild(userDataWrap);
            userDataWrap.appendChild(dataWrapHeading);
            dataWrapHeading.innerHTML = namesArr[i];
            for (var prop in dataArr[i]){ //finds all propertie's names in User and creates and appends dom elements in to dataWrap
                var spanPropName = document.createElement('span'),
                    spanPropVal = document.createElement('span');
                userDataWrap.appendChild(spanPropName);
                userDataWrap.appendChild(spanPropVal);
                spanPropName.innerHTML = prop + " ";
                spanPropVal.innerHTML = dataArr[i][prop] + " ";
            }
        }
    }
    // event on clicking showBtn
    var showBtn = document.getElementById('showBtn');
    showBtn.addEventListener('click', function () {
        var userNames = takeNames(users); // getting users and return user's names
        //debug
        console.log(userNames);
        console.log(users);
        displayUserData(userNames, users);
    });
});

function saySomeWords() {
    var sentence = "";
    for (var i = 0; i<arguments.length; i++){
        sentence += arguments[i] + " ";
    }
    return sentence;
}


function checkTypeDecorator(fn, args) {
    return function () {
        var sentence = 'The sentence consist of ',
            type = '';
        for (var i = 0; i < arguments.length; i++) {
           type += typeof arguments[i] + ' ';
        }
        console.log(sentence + type);
        return fn.apply(this, arguments);
    }
}
saySomeWords = checkTypeDecorator(saySomeWords);

function makeArrArgs(fn, args) {
    return function () {
        var saySomeWordsArr = [];
        for (var i = 0; i < arguments.length; i++) {
            saySomeWordsArr.push(arguments[i]);
        }
        console.log(saySomeWordsArr);
        return fn.apply(this, arguments);
    }
}
saySomeWords = makeArrArgs(saySomeWords);

console.log(saySomeWords('sdffd', 532, 'wrrw', 'wrtrfk'));