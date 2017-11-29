class Animal {
    constructor(name, view, speed) {
        this.name = name;
        this.view = view;
        this.speed = speed;
    }
}
let weakM = new WeakMap();

function setToMap(target, weakMap){
    // create new object that will be returned
    let handler = {
        // construct is a default Proxy event catcher
        construct: (target, argumentsList) => {
            // here i take the call new Animal
            let targetClass = new target(...argumentsList);
            // here i take new Animal's arguments
            let args = argumentsList;
            // setting animal and it's arguments to weakMap
            weakMap.set(targetClass, args);
            return targetClass;
        }
    };
    return new Proxy(target, handler);
}
Animal = setToMap(Animal, weakM);

let cat = new Animal('sussy', 'cat', 100);
let dog  = new Animal('scooby', '@', 300);

console.log(weakM.get(cat));
console.log(weakM.get(dog));
