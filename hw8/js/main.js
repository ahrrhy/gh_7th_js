import {Plant} from "./parts/plants-class.js";
import {generateMap} from "./parts/functions.js";
import {drawMap} from "./parts/functions.js";


let mapTree = new Plant(3, 2, 10),
    mapBush = new Plant(2, 2, 5);
console.log(mapTree);

let mapParams = {
    map : [],
    xSize : 30,
    ySize : 30,
    empty : 'empty',
    tree : 'tree',
    bush : 'bush',
    something : 'something'
};

export let map = generateMap(mapParams);
console.log(map);

// pasting div.container
let div = document.createElement('div');
div.setAttribute('class', 'container');
document.body.appendChild(div);


document.addEventListener('DOMContentLoaded', function () {
    setInterval(function () {
        let elemClasses = {
            bush : mapBush.view(),
            tree : mapTree.view(),
            something : 'something',
            empty : 'empty'
        };
        drawMap(map, mapParams, elemClasses, div);
        console.log(mapBush.age);
        mapBush.live();
    }, 1000);

});


