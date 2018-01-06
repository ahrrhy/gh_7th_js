// map parameters fo class Map constructor
let fruitParams = {
    timeToLive : 4,
    cssClass : 'fruit',
    size : 0,
    _fullHealth : 100,
    health : 100
};
let treeParams = {
    // constructor's set
    size : 3,
    growthAge : 2,
    makeFruitPeriod : 4,
    // classes for different types of plants
    treeClass : 'tree',
    bushClass : 'bush',
    springClass: 'spring',
    fruitParams : fruitParams,
    health : 100
};
let bushParams = {
    size : 2,
    growthAge : 2,
    makeFruitPeriod : 4,
    treeClass : 'tree',
    bushClass : 'bush',
    springClass: 'spring',
    fruitParams : fruitParams,
    health : 100
};

let mapElements = {
    xSize : 30,
    ySize : 30,
    empty : 'empty',
    startTreesQuantity: 4,
    startBushQuantity: 4,
};

let deerParams = {
    health : 100,
    satiety : 100,
    cssClass : 'deer',
    food : ['Plant', 'Fruit']
};

let mouseParams = {
    health : 50,
    satiety : 50,
    cssClass : 'mouse',
    food : ['Fruit']
};

export {mapElements, treeParams, bushParams, fruitParams, deerParams, mouseParams};