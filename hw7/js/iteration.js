// elements of Map

let empty = 'empty',
    animal = "dog",
    bush = 'bush',
    div = document.createElement('div');
div.setAttribute('class', 'container');

function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    return rand;
}

// this is object which sets matrix sizes and fills it with elements
const xAce = 20,
    yAce = 20;
let matrix = [];

matrix[Symbol.iterator] = function (){
    return {
        next(){
            for (let i = 0; i < yAce; i++){
                matrix[i] = [];
                for (let j = 0; j < xAce; j++){
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
    }
};

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
    console.log(matrix);
    return matrix;
}

document.addEventListener('DOMContentLoaded', function () {
    document.body.appendChild(div);
    drawMap(matrix);
    console.log(matrix);
    drawMap(matrix);
});
