
let empty = ".",
    animal = '@';
const brash = "*";

let matrix = [
    [empty, empty, empty, empty, empty, empty, empty, empty, brash, empty, empty, empty, empty, empty, empty, brash],
    [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, brash, empty, empty],
    [empty, empty, empty, empty, empty, empty, empty, brash, empty, empty, empty, empty, empty, empty, empty, empty],
    [empty, empty, empty, empty, empty, animal, empty, empty, empty, empty, empty, brash, empty, empty, empty, empty],
    [empty, empty, empty, empty, brash, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
    [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
    [empty, empty, empty, brash, empty, empty, empty, empty, empty, empty, brash, empty, empty, empty, empty, empty],
    [brash, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, brash, empty],
    [empty, empty, empty, empty, empty, empty, brash, empty, empty, empty, empty, empty, empty, empty, empty, empty],
    [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
    [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, brash, empty, empty, empty],
    [empty, empty, brash, empty, empty, empty, empty, empty, brash, empty, empty, empty, empty, empty, empty, empty],
    [empty, brash, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
    [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, brash, empty],
    [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
];
// it logs matrix
function showMap (matrix) {
    let outPut = "";
    const length = matrix.length;
    for (let i = 0; i < length; i++) {
        let l = matrix[i].length;
        for (let j = 0; j < l; j++) {
            outPut += matrix[i][j] + " ";
        }
        outPut += "\n";
    }
    console.log(outPut);
    return matrix;
}
showMap(matrix);
// find animal coordinates
let nextPos,
    currentPos;
function getAnimalPos(arr, animal) {
    for (let i = 0; i < arr.length; i++) {
        let index = arr[i].indexOf(animal);
        if (index > -1) {
            return [i, index];
        }
    }
}
function getNextPos(y, x) {
    let direction = chooseDirection();
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

function animalMove(matrix, animal) {
    currentPos = getAnimalPos(matrix, animal);
    nextPos = getNextPos(currentPos[0],currentPos[1]);
    let nextPosY = nextPos[0],
        nextPosX = nextPos[1],
        currentPosX = currentPos[1],
        currentPosY = currentPos[0];
    if (matrix[nextPosY][nextPosX] === brash) {
        return matrix;
    } else if (nextPosY < 0 || nextPosY > 14 || nextPosX < 0 || nextPosX > 14){
        return matrix;
    } else {
        matrix[nextPosY][nextPosX] = animal;
        matrix[currentPosY][currentPosX] = empty;
        return matrix;
    }
}
function rand(){
    return Math.random() * getSign();
}
function getSign(){
    return Math.random() < 0.5 ? -1 : 1;
}

function chooseDirection() {
    return (rand() < -0.25) ? 'up-left' : (-0.25 < rand() < -0.5) ? 'up-right' : (-0.5 < rand() < -0.75) ? 'down-right' : (-0.75 < rand() < 0) ? 'down-left' : (0 < rand() < 0.25) ? 'right' : (0.5 > rand() > 0.25) ? 'left' : (0.5 < rand() < 0.75) ? 'up' : 'down';
}
setInterval(function () {
    console.clear();
    let newMatrix = animalMove(matrix, animal);
    showMap(newMatrix);
}, 500);