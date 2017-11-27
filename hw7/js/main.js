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
        return (-0.00000001< rand() < -0.25) ? 'up-left' : (-0.25 < rand() < -0.5) ? 'up-right' : (-0.5 < rand() < -0.75) ? 'down-right' : (-0.75 < rand() < 0) ? 'down-left' : (0 < rand() < 0.25) ? 'right' : (0.5 > rand() > 0.25) ? 'left' : (0.5 < rand() < 0.75) ? 'up' : 'down';
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
let dog = new Animal('dog', '@', 800);

// elements of Map
let empty = ".",
    animal = dog.view;
const brash = "*";

let matrix = [
    [empty, empty, empty, empty, empty, empty, empty, empty, brash, empty, empty, empty, empty, empty, empty, brash, empty, empty, empty, brash],
    [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, brash, empty, empty, empty, empty, empty, empty],
    [empty, empty, empty, empty, empty, empty, empty, brash, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
    [empty, empty, empty, empty, empty, animal, empty, empty, empty, empty, empty, brash, empty, empty, empty, empty, empty, empty, empty, empty],
    [empty, empty, empty, empty, brash, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
    [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, brash, empty, empty, brash],
    [empty, empty, empty, brash, empty, empty, empty, empty, empty, empty, brash, empty, empty, empty, empty, empty, empty, empty, empty, empty],
    [brash, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, brash, empty, brash, empty, empty, empty],
    [empty, empty, empty, empty, empty, empty, brash, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
    [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
    [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, brash, empty, empty, brash, empty, empty, brash, empty],
    [empty, empty, brash, empty, empty, empty, empty, empty, brash, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
    [empty, brash, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
    [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, brash, empty, empty, empty, empty, brash],
    [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
    [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, brash, empty, empty, empty, empty, empty, empty, empty],
    [empty, empty, brash, empty, empty, empty, empty, empty, brash, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
    [empty, brash, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, brash, empty, empty, empty],
    [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, brash, empty, empty, empty, brash, empty],
    [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
];
// create div tag to innerHTML of Map
let div = document.createElement('div');
div.setAttribute('class', 'container');

function drawMap(arr) {
    let output = ``;
    //let length = arr.length;
    for (let arrElem of arr) {
        output += `<p>`;
        for (let arrElemDepth of arrElem) {
            if (arrElemDepth === empty) {
                output += `<span class="empty">${arrElemDepth}</span>`;
            }
            if (arrElemDepth === brash) {
                output += `<span class="brash">${arrElemDepth}</span>`;
            }
            if (arrElemDepth === animal) {
                output += `<span class="animal">${arrElemDepth}</span>`;
            }
        }
        output += `</p>`;
    }
    div.innerHTML = output;
}
document.addEventListener('DOMContentLoaded', function () {

    document.body.appendChild(div);
    setInterval(function () {
        matrix = dog.animalMove(matrix, animal);
        drawMap(matrix);
    }, dog.speed);
});