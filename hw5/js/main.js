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

