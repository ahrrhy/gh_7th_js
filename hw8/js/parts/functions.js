// get position of element on map
function getPosition(arr, thing) {
    for (let i = 0; i < arr.length; i++) {
        let index = arr[i].indexOf(thing);
        if (index > -1) {
            return [i, index];
        }
    }
}

// chose direction
function chooseDirection() {
    let value = randomInteger(1, 8);
    return (value === 1) ? 'up-left' : (value === 2) ? 'up-right' : (value === 3) ? 'down-right' : (value === 4) ? 'down-left' : (value === 5) ? 'right' : (value === 6) ? 'left' : (value === 7) ? 'up' : 'down';
}

function getNextPosition(y, x) {
    let direction = this.chooseDirection();
    var y = y,
        x = x;
    if (direction === 'up') {
        y += 1;
    }
    if (direction === 'down') {
        y -= 1;
    }
    if (direction === 'left') {
        x -= 1;
    }
    if (direction === 'right') {
        x += 1;
    }
    if (direction === 'up-left'){
        y -= 1;
        x -= 1;
    }
    if (direction === 'up-right'){
        y -= 1;
        x += 1;
    }
    if (direction === 'down-right'){
        y += 1;
        x += 1;
    }
    if (direction === 'down-left'){
        y += 1;
        x -= 1;
    }
    return [y, x];
}

// to move in random position or to generate random map I need to use random integers
function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    return rand;
}

// to make map
function generateMap(mapParams) {
    let ySize = mapParams.ySize,
        xSize = mapParams.xSize,
        empty = mapParams.empty,
        tree = mapParams.tree,
        bush = mapParams.bush,
        map = mapParams.map;
    for (let i = 0; i < ySize; i++) {
        map[i] = [];
        for (let j = 0; j < xSize; j++) {
            let rand = randomInteger(1, 150);
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
    return map;
}

// to make string with html nodes
function drawMap(map, mapParams, elemClasses, htmlElem) {
    let empty = mapParams.empty,
        tree = mapParams.tree,
        bush = mapParams.bush,
        something = mapParams.something,
        bushClass = elemClasses.bush,
        treeClass = elemClasses.tree,
        somethingClass = elemClasses.something,
        emptyClass = elemClasses.empty,
        output = ``;
    for (let mapElem of map) {
        output += `<p>`;
        for (let mapElemDepth of mapElem) {
            let className;
            if (mapElemDepth === empty) {
                className = `${emptyClass}`;
            }
            if (mapElemDepth === bush) {
                className = `${bushClass}`;
            }
            if (mapElemDepth === tree) {
                className = `${treeClass}`;
            }
            if (mapElemDepth === something) {
                className = `${somethingClass}`;
            }
            output += `<span class = "${className}"></span>`;
        }
        output += `</p>`;
    }
    htmlElem.innerHTML = output;
}

export {getPosition, randomInteger, generateMap, drawMap, getNextPosition};