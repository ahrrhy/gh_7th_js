// //task number 2


var someOblect = {
  propp1: "abc",
  propp2: "def",
  propp3:{
    a:1,
    b:2,
    c:{
        e:'s'
    }
  }
};
function clone(obj) {
    var clone1 = {};
    if(obj.prototype !==undefined){
        clone1.prototype = obj.prototype;
    }
    for (var property in obj){
        clone1[property] = obj[property];
    }
    return clone1;
}
var newObj = clone(someOblect);
console.log(someOblect);
console.log(newObj);
newObj.propp1="fed";
console.log(newObj);


// //task number 3


function arrGenerate(n) {
    var newArr = [];
    for (var i = 0; i < n; i++) {
        newArr[i]= i;
    }
    return newArr;
}
var arrQueue = arrGenerate(100000);

function objGeneratorQueue(n) {
    var obj = {};
    for (var i = 0; i < n; i++){
        obj[i]=i;
    }
    return obj;
}
var objQueue = objGeneratorQueue(100000);


function objGeneratorRand(n) {
    var obj = {},
        propName = 'a';
    for(var i = 1; i < n; i++){
        propName += i;
        obj[propName] = i;
    }
    return obj;
}
var objRand = objGeneratorRand(10000);
console.log(objRand);

function benchmarkObj(obj) {
    for (var prop in obj){
        console.log(prop);
    }
}

console.time('arrQueue');
benchmarkObj(arrQueue);
console.timeEnd('arrQueue');

console.time('arrQueue');
benchmarkObj(arrQueue);
console.timeEnd('arrQueue');

console.time('randObj');
benchmarkObj(objRand);
console.timeEnd('randObj');

function benchmarkArr(obj) {
    var len = Object.getOwnPropertyNames(obj).length;
    for(var i = 0; i<len; i++){
        console.log(obj[i]);
    }
}

console.time('arrQueue');
benchmarkArr(arrQueue);
console.timeEnd('arrQueue');

console.time('arrQueue');
benchmarkArr(arrQueue);
console.timeEnd('arrQueue');

console.time('randObj');
benchmarkArr(objRand);
console.timeEnd('randObj');





//************Task 1***************//
var list = [];
function primeList(N) {
    function isPrime(i) {
        for (var c = 2; c <= Math.sqrt(i); ++c)
            if (i % c === 0) {
                return false;
            }
        return i;
    }
    if (N<=2){
        return false;
    }
    if (isPrime(N)){
        list.push(N);
    }
        primeList(N-1);


}
primeList(50);
console.log(list);