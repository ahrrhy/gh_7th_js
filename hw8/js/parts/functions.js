function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    return rand;
}

function getClosestEmpty(matrix, coordinates) {
    let X = coordinates[1],
        Y = coordinates[0],
        map = matrix,
        changeX = randomInteger(-1, 1),
        changeY = randomInteger(-1, 1);
    if (map[Y+changeY][X+changeX] === 'empty') {
        return [Y+changeY, X+changeX];
    }
    return getClosestEmpty(matrix, [Y,X]);
}

export {randomInteger, getClosestEmpty};