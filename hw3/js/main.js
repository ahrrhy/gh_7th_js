var testObj = {
    first: 0,
    second: "1",
    third: function () {
        return this.second;
    }
};


function makeLogging(f, log) {

  function wrapper() {
      log.push(f.apply(this));
      return f.call(this);
    }

  return wrapper;
}

var log = [];
testObj.third = makeLogging(testObj.third, log);
testObj.second = makeLogging(testObj.second, log);
testObj.third();
console.log(log);
console.log(log[0]);
testObj.second;
console.log(testObj.second);