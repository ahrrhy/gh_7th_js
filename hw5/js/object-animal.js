class Animal {
    constructor(name, view, speed) {
        this.name = name;
        this.view = view;
        this.speed = speed;
    }

    getAnimalPosition(arr, animal) {
        for (let i = 0; i < arr.length; i++) {
            let index = arr[i].indexOf(animal);
            if (index > -1) {
                return [i, index];
            }
        }
    }

    chooseDirection() {
        function rand(){
            return Math.random() * getSign();
        }
        function getSign(){
            return Math.random() < 0.5 ? -1 : 1;
        }
        return (rand() < -0.25) ? 'up-left' : (-0.25 < rand() < -0.5) ? 'up-right' : (-0.5 < rand() < -0.75) ? 'down-right' : (-0.75 < rand() < 0) ? 'down-left' : (0 < rand() < 0.25) ? 'right' : (0.5 > rand() > 0.25) ? 'left' : (0.5 < rand() < 0.75) ? 'up' : 'down';
    }

    getNextPosition(y, x) {
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

    animalMove(matrix, animal) {
        let currentPos = this.getAnimalPosition(matrix, animal);
        let nextPos = this.getNextPosition(currentPos[0],currentPos[1]);
        let nextPosY = nextPos[0],
            nextPosX = nextPos[1],
            currentPosX = currentPos[1],
            currentPosY = currentPos[0];
        if ((nextPosY < 0 || nextPosY > 14 || nextPosX < 0 || nextPosX > 14) || (matrix[nextPosY][nextPosX] === brash)) {
            return matrix;
        } else {
            matrix[nextPosY][nextPosX] = this.view;
            matrix[currentPosY][currentPosX] = empty;
            return matrix;
        }
    }
}
let dog = new Animal('dog', '@', 400);
let empty = ".",
    animal = dog.view;
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

function htmlWrite(arr) {
    let outPut = "";
    let length = arr.length;
    for (let i = 0; i < length; i++) {
        let l = arr[i].length;
        for (let j = 0; j < l; j++) {
            outPut += arr[i][j] + " ";
        }
        outPut += '</br>';
    }
    document.write(outPut);
    document.querySelector('html').style.fontFamily = "monospace";
}
htmlWrite(matrix);
setInterval(function () {
    matrix = dog.animalMove(matrix, animal);
    htmlWrite(matrix);
}, dog.speed);