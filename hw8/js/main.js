// importing functions
import {randomInteger, getClosestEmpty} from "./parts/functions.js";

// importing parameters
import {mapElements, treeParams, bushParams, deerParams, mouseParams} from "./parts/parameters.js";

// importing classes
import Map from "./parts/map.js";
import Plant from "./parts/plants.js";
import Fruit from "./parts/fruit.js";
import Animal from "./parts/animal.js";

let matrix = new Map(mapElements);

matrix.mapGenerate();
// creating new instances of plants
matrix.mapAddDecorations(Plant, treeParams, matrix.startTreesQuantity);
matrix.mapAddDecorations(Plant, bushParams, matrix.startBushQuantity);
//matrix.mapAddDecorations(Animal, deerParams, 1);

let div = document.createElement('div');
div.setAttribute('class', 'container');
document.addEventListener('DOMContentLoaded', function () {
    document.body.appendChild(div);
    matrix.mapDraw(div);
    setInterval(() => {

        console.log(matrix.map);
        matrix.mapLive();
        matrix.mapDraw(div);
    }, 2000);
});