function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    return rand;
}

function getRandomOne() {
    return Math.random() < 0.5 ? -1 : 1;
}

function getClosestEmpty(matrix, coordinates) {
    let X = coordinates[1],
        Y = coordinates[0],
        map = matrix,
        changeX = getRandomOne(),
        changeY = getRandomOne(),
        checkX = changeX < 0 || matrix.xSize,
        checkY = changeY < 0 || matrix.ySize;
    if (!checkX && !checkY) {
        changeX = getRandomOne();
    }
    if (!checkX && !checkY) {
        changeY = getRandomOne();
    }
    if (map[Y+changeY][X+changeX] === 'empty') {
        return [Y+changeY, X+changeX];
    }
    return getClosestEmpty(matrix, [Y,X]);
}

export {randomInteger, getClosestEmpty, getRandomOne};