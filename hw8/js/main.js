// importing functions
import {randomInteger} from "./parts/functions.js";

// importing parameters
import {mapElements} from "./parts/parameters.js";
import {treeParams} from "./parts/parameters.js";
import {bushParams} from "./parts/parameters.js";


// importing classes
import Map from "./parts/map.js";
import Plant from "./parts/plants.js";
import Fruit from "./parts/fruit.js";

let matrix = new Map(mapElements);

matrix.mapGenerate();
// creating new instances of plants
matrix.mapAddDecorations(Plant, treeParams, matrix.startTreesQuantity);
matrix.mapAddDecorations(Plant, bushParams, matrix.startBushQuantity);
export {matrix};

let div = document.createElement('div');
div.setAttribute('class', 'container');
document.addEventListener('DOMContentLoaded', function () {
    document.body.appendChild(div);
    matrix.mapDraw(div);
    setInterval(function () {
        console.log(matrix.map);
        matrix.mapPlantsLive();
        matrix.mapDraw(div);
    }, 2000);
});