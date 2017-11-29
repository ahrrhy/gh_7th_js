// first part
function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    return rand;
}

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
let empty,
    animal = dog.view;
const bush = ``;

// let matrix = [
//     [empty, empty, empty, empty, empty, empty, empty, empty, brash, empty, empty, empty, empty, empty, empty, brash, empty, empty, empty, brash],
//     [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, brash, empty, empty, empty, empty, empty, empty],
//     [empty, empty, empty, empty, empty, empty, empty, brash, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
//     [empty, empty, empty, empty, empty, animal, empty, empty, empty, empty, empty, brash, empty, empty, empty, empty, empty, empty, empty, empty],
//     [empty, empty, empty, empty, brash, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
//     [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, brash, empty, empty, brash],
//     [empty, empty, empty, brash, empty, empty, empty, empty, empty, empty, brash, empty, empty, empty, empty, empty, empty, empty, empty, empty],
//     [brash, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, brash, empty, brash, empty, empty, empty],
//     [empty, empty, empty, empty, empty, empty, brash, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
//     [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
//     [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, brash, empty, empty, brash, empty, empty, brash, empty],
//     [empty, empty, brash, empty, empty, empty, empty, empty, brash, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
//     [empty, brash, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
//     [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, brash, empty, empty, empty, empty, brash],
//     [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
//     [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, brash, empty, empty, empty, empty, empty, empty, empty],
//     [empty, empty, brash, empty, empty, empty, empty, empty, brash, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
//     [empty, brash, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, brash, empty, empty, empty],
//     [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, brash, empty, empty, empty, brash, empty],
//     [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
// ];
let matrix = [];
let matrixSize = {
    xCurrent: 0,
    yCurrent: 0,
    xAce: 20,
    yAce: 20,
    [Symbol.iterator](){return this;},
    next(){
        if (this.yCurrent < this.yAce) {
            matrix[this.yCurrent] = [];
            return {
                done: false,
                value: this.current++,
            }
        }
        // if (this.current < this.yAce) {
        //    // matrix.push(this.xMatrix);
        //
        //     if (this.current <= this.xAce) {
        //        // let rand = randomInteger(1, 10);
        //        //  if (rand === 1) {
        //        //      this.xMatrix.push(empty);
        //        //  } else {this.xMatrix.push(bush);}
        //
        //         return {
        //             done: false,
        //             value: this.current++,
        //         };
        //     }
        //
        else {
            delete this.current;
            return {
                done: true
            };
        }
    }
};

for (let num of matrixSize) {

}
console.log(matrix);

// create div tag to innerHTML of Map

// let div = document.createElement('div');
// div.setAttribute('class', 'container');

function drawMap(arr) {
    let output = ``;
    for (let arrElem of arr) {
        output += `<p>`;
        for (let arrElemDepth of arrElem) {
            if (arrElemDepth === empty) {
                output += `<span class="empty">${arrElemDepth}</span>`;
            }
            if (arrElemDepth === bush) {
                output += `<span class="bush">${arrElemDepth}</span>`;
            }
            if (arrElemDepth === animal) {
                output += `<span class="animal">${arrElemDepth}</span>`;
            }
        }
        output += `</p>`;
    }
    div.innerHTML = output;
}

// document.addEventListener('DOMContentLoaded', function () {
//     document.body.appendChild(div);
//     setInterval(function () {
//         matrix = dog.animalMove(matrix, animal);
//         drawMap(matrix);
//     }, dog.speed);
// });
