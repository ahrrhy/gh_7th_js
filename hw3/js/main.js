var testObj = {
    count : 0,
    first: 0,
    second: "1",
    third: function () {
        return this.second;
    }
};
// Object.defineProperty(testObj, 'count', {
//     enumerable : false
// });
function makeLog (obj) {
    var tempObj = {};
    for (let key in obj) {
        tempObj[key] = obj[key];
        Object.defineProperty(obj, key, {
            get : function () {
                tempObj.count++;
                console.log('Get, property: ('+key+'), object: ('+obj+')');
                return tempObj[key];
            },
            set: function(value) {

                tempObj[key] = value;
                console.log('Set, property: ('+key+'), object: ('+obj+') = '+ tempObj[key]);
            }
        });
    }
}

makeLog(testObj);
testObj.third();
testObj.second = 3;
console.log(testObj.count);

