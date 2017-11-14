var testObj = {

    first: 0,
    second: "1",
    third: function () {
        return this.second;
    }
};

function makeLog (obj) {
    var tempObj = {};
    for (let key in obj) {
        tempObj[key] = obj[key];
        Object.defineProperty(obj, key, {
            get : function () {
                console.log('Get, property: ('+key+'), object: ('+obj+')');
                return tempObj[key];;
            },
            set: function(value) {
                tempObj[key] = value;
                console.log('Set, property: ('+key+'), object: ('+obj+')');
            }
        });
    }
}

makeLog(testObj);
testObj.third();
testObj.second = 3;


