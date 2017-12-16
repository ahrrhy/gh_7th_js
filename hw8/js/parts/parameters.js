// map parameters fo class Map constructor
let fruitParams = {
    timeToLive : 4,
    cssClass : 'flaticon-nature',
    size : 0
};
let treeParams = {
    // constructor's set
    size : 3,
    growthAge : 2,
    makeFruitPeriod : 4,
    // classes for different types of plants
    treeClass : 'flaticon-tree-shape-of-thin-trunk-with-small-leaves-circles-outlines',
    bushClass : 'flaticon-big-plant-like-a-small-tree',
    springClass: 'flaticon-tree-trunk-growing-from-soil',
    fruitParams : fruitParams
};
let bushParams = {
    size : 2,
    growthAge : 2,
    makeFruitPeriod : 4,
    treeClass : 'flaticon-tree-shape-of-thin-trunk-with-small-leaves-circles-outlines',
    bushClass : 'flaticon-big-plant-like-a-small-tree',
    springClass: 'flaticon-tree-trunk-growing-from-soil',
    fruitParams : fruitParams
};

let mapElements = {
    xSize : 30,
    ySize : 30,
    empty : 'empty',
    startTreesQuantity: 6,
    startBushQuantity: 6,
};

let deerParams = {
    health : 100,
    satiety : 100,
    cssClass : 'flaticon-animal',
    food : ['Plant', 'Fruit']
};

let mouseParams = {
    health : 50,
    satiety : 50,
    cssClass : 'flaticon-mouse',
    food : ['Fruit']
};

export {mapElements, treeParams, bushParams, fruitParams, deerParams, mouseParams};