// main variables i used

let empty = ".",
    animal = '@';
const brash = "*";

let matrix = [
    [empty, empty, empty, empty, empty, empty, empty, empty, brash, empty, empty, empty, empty, empty, empty, brash],
    [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, brash, empty, empty],
    [empty, empty, empty, empty, empty, empty, empty, brash, empty, empty, empty, empty, empty, empty, empty, empty],
    [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, brash, empty, empty, empty, empty],
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
matrix[3][4] = animal;
let animalPos = getAnimalPos(matrix, animal),
    animalPosX = animalPos[1],
    animalPosY = animalPos[0];
function getAnimalPos(arr, animal) {
    for (let i = 0; i < arr.length; i++) {
        let index = arr[i].indexOf(animal);
        if (index > -1) {
            return [i, index];
        }
    }
}
function getNextPos() {
    let direction = chooseDirection();
    if (direction === 'up') {
        animalPosY += 1;
    }
    if (direction === 'down') {
        animalPosY -= 1;
    }
    if (direction === 'left') {
        animalPosX -= 1;
    }
    if (direction === 'right') {
        animalPosX += 1;
    }
    return animalPos = [animalPosY, animalPosX];
}
console.log(animalPos);
console.log(getNextPos());
console.log(animalPosY, animalPosX);
    //debug

// console.log(animalPosX);
// console.log(animalPosY);
// console.log(animalPos);

function animalMove(arr, animal) {
    let currentPos = animalPos(arr, animal),
        nextPos;
}
showMap(matrix);

function rand(){
    return Math.random();
}

function chooseDirection() {
    return (rand() < 0.25) ? 'right' : (0.5 > rand() > 0.25) ? 'left' : (0.5 < rand() < 0.75) ? 'up' : 'down';
}

// let mat = [empty, empty, empty, empty, animal, empty, empty, empty, empty, empty, empty, brash, empty, empty, empty, empty];
// console.log(mat);
// let matAnimalPos = getAnimalPos(mat, animal),
//     matAnimalPosX = matAnimalPos[0];
// //console.log(matAnimalPosX);
// mat = move(mat, matAnimalPosX, (matAnimalPosX - 5));
// console.log(mat);