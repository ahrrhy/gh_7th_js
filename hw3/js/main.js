var testObj = {

    first: 0,
    second: "1",
    third: function () {
        return this.second;
    }
};

function makeLog (obj) {
    for (var key in obj) {
        Object.defineProperties.bind(obj, key, {
            get : function () {
                console.log(key);
                return key;
            },
            set: function(value) {
                console.log(value);
            }
        });
    }
    return obj;
}
var test = makeLog(testObj);
test.first = 2;
console.log(test.third());
console.log(test.first);
console.log(testObj.first);
test.third();
