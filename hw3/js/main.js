var testObj = {
    first: 0,
    second: "1",
    third: function () {
        console.log(this.first);
    }
};



function observDeco(fn, args) {
    return function () {
        console.log(fn());
        return fn.apply(this, arguments);
    }
}
testObj.third = observDeco(testObj.third);

testObj.third();
