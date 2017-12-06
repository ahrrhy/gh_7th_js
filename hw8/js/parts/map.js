import {randomInteger} from "./functions.js";

const xSize = 30,
    ySize = 30;
let map = [],
    empty = 'empty',
    tree = 'tree',
    bush = 'bush';

for (let i = 0; i < ySize; i++) {
    map[i] = [];
    for (let j = 0; j < xSize; j++) {
        let rand = randomInteger(1, 40);
        let mapValue = empty;
        if (rand === 4) {
            mapValue = bush;
        }
        if (rand === 8) {
            mapValue = tree;
        }
        map[i].push(mapValue);
    }
}
export {map};
