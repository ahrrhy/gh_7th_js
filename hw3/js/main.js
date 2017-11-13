var testObj = {

    first: 0,
    second: "1",
    third: function () {
        return this.second;
    }
};

// function makeLog (obj) {
//     for (let key in obj) (function (key) {
//         return function () {
//             Object.defineProperties(obj, key.bind(this), {
//                 get : function () {
//                     console.log(key);
//                     return key;
//                 },
//                 set: function(value) {
//                     console.log(value);
//                 }
//             });
//             return obj;
//         }
//     })(key);



// }
// var test = makeLog(testObj);
// test.first = 2;
// console.log(test.third());
// console.log(test.first);
// console.log(testObj.first);
// test.third();


function inject(obj, beforeFn) {
    for (let propName of Object.getOwnPropertyNames(obj)) {
        let prop = obj[propName];
        // if (Object.prototype.toString.call(prop) === '[object Function]') {
            obj[propName] = (function(fnName) {
                return function() {
                    beforeFn.call(this, fnName, arguments);
                    return prop.apply(this, arguments);
                }
            })(propName);
        // }
    }
}

function logFnCall(name, args) {
    let s = name + '(';
    for (let i = 0; i < args.length; i++) {
        if (i > 0)
            s += ', ';
        s += String(args[i]);
    }
    s += ')';
    console.log(s);
}

inject(testObj, logFnCall);
testObj.third();


