// first part
function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    return rand;
}

let matrix = [];

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
        let value = randomInteger(1, 8);
        console.log(value);
        return (value === 1) ? 'up-left' : (value === 2) ? 'up-right' : (value === 3) ? 'down-right' : (value === 4) ? 'down-left' : (value === 5) ? 'right' : (value === 6) ? 'left' : (value === 7) ? 'up' : 'down';
    }

    getNextPosition(y, x) {
        let direction = this.chooseDirection();
        console.log(direction);
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
let dog = new Animal('dog', '@', 800);

// elements of Map
let empty = 'empty',
    animal = dog.view,
    bush = 'bush';
// this is object which sets matrix sizes and fills it with elements
let matrixSize = {
    xAce: 20,
    yAce: 20,
    [Symbol.iterator](){
        return this;
    },
    next(){
       
        for (let i = 0; i < this.yAce; i++) {
            matrix[i] = [];
            for (let j = 0; j < this.xAce; j++) {
                let rand = randomInteger(1, 20);
                let matrixValue = empty;
                if (rand === 4) {
                    matrixValue = bush;
                }
                matrix[i][j] = matrixValue;
            }
        }
        return {
            done: true
        }

    }
};


// create div tag to innerHTML of Map

let div = document.createElement('div');
div.setAttribute('class', 'container');

function generateMatrix() {
    // it creates matrix
    for (let num of matrixSize) {

    }
    console.log(matrix);
}

function drawMap(arr) {
    let output = ``;
    for (let arrElem of arr) {
        output += `<p>`;
        for (let arrElemDepth of arrElem) {
            let className;
            if (arrElemDepth === empty) {
                className = 'empty';
            }
            if (arrElemDepth === bush) {
                className = 'bush fa fa-tree';
            }
            if (arrElemDepth === animal) {
                className = 'animal';
            }
            output += `<span class = "${className}"></span>`;
        }
        output += `</p>`;
    }
    div.innerHTML = output;
    console.log(output);
}

document.addEventListener('DOMContentLoaded', function () {
    document.body.appendChild(div);
    generateMatrix();
    drawMap(matrix);
    // setInterval(function () {
    //     matrix = dog.animalMove(matrix, animal);
        
    // }, dog.speed);
});
