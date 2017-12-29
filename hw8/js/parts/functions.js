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
        newX = X+changeX,
        newY = Y+changeY;
    if (newX < 0 || newX > matrix.xSize-1) {
        changeX = getRandomOne();
    }
    if (newY < 0 || newY > matrix.ySize-1) {
        changeY = getRandomOne();
    }
    if (map[newY][newX] === 'empty') {
        return [newY, newX];
    }
    return getClosestEmpty(matrix, [Y,X]);
}

export {randomInteger, getClosestEmpty, getRandomOne};