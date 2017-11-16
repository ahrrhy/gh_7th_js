// main variables i used

let outPut = "",
    empty = ".",
    animal = '@';
const brash = "*";

let matrix = [
    [empty, empty, empty, empty, empty, empty, empty, empty, brash, empty, empty, empty, empty, empty, empty, brash],
    [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, brash, empty, empty],
    [empty, empty, empty, empty, empty, empty, empty, brash, empty, empty, empty, empty, empty, empty, empty, empty],
    [empty, empty, empty, empty, animal, empty, empty, empty, empty, empty, empty, brash, empty, empty, empty, empty],
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
    [empty, empty, empty, empty, empty, brash, empty, empty, empty, empty, brash, empty, empty, empty, empty, empty],
    [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
];
// it logs matrix
const length = matrix.length;
for (let i = 0; i < length; i++) {
    let l = matrix[i].length;
    for (let j = 0; j < l; j++) {
        outPut += matrix[i][j] + " ";
    }
    outPut += "\n";
}
console.log(outPut);

// find animal coordinates

let animalPos = getAnimalPos(matrix, animal),
    animalPosX = animalPos[0],
    animalPosY = animalPos[1];
function getAnimalPos(arr, animal) {
    for (let i = 0; i < arr.length; i++) {
        let index = arr[i].indexOf(animal);
        if (index > -1) {
            return [i, index];
        }
    }
}
    //debug
console.log(animalPos);
console.log(animalPosX);
console.log(animalPosY);



const rand = function getRand(){
    return Math.random();
};

const chooseDirection = function () {
    return (rand() < 0.25) ? 'right' : (0.5 > rand() > 0.25) ? 'left' : (0.5 < rand() < 0.75) ? 'up' : 'down';
};

function move (arr, old_index, new_index) {
    while (old_index < 0) {
        old_index += arr.length;
    }
    while (new_index < 0) {
        new_index += arr.length;
    }
    if (new_index >= arr.length) {
        let k = new_index - arr.length;
        while ((k--) + 1) {
            this.push(undefined);
        }
    }
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
    return arr; // for testing purposes
}
let mat = [empty, empty, empty, empty, animal, empty, empty, empty, empty, empty, empty, brash, empty, empty, empty, empty];
console.log(mat);
let matAnimalPos = getAnimalPos(mat, animal),
    matAnimalPosX = matAnimalPos[0];
//console.log(matAnimalPosX);
mat = move(mat, matAnimalPosX, (matAnimalPosX + 1));
console.log(mat);