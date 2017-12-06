// get position of element on map
function getPosition(arr, thing) {
    for (let i = 0; i < arr.length; i++) {
        let index = arr[i].indexOf(thing);
        if (index > -1) {
            return [i, index];
        }
    }
}

// to move in random position or to generate random map I need to use random integers
function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    return rand;
}

export {getPosition, randomInteger};