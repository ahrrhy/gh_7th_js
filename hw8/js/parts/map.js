import {randomInteger} from "./functions.js";

export default class Map {
    constructor(mapElements) {
        // matrix sizes
        this.xSize = mapElements.xSize;
        this.ySize = mapElements.ySize;
        //map elements
        this.empty = mapElements.empty;
        this.fruit = mapElements.fruit;
        this.deer = mapElements.deer;
        this.mouse = mapElements.mouse;
        // the quantity of decorations. i think it will help to create new instances of Plant;
        this.startTreesQuantity = mapElements.startTreesQuantity;
        this.startBushQuantity = mapElements.startBushQuantity;
        // the matrix map
        this.map = [];
        this.self = this;
    }

    // i need to generate random map which will be empty
    mapGenerate() {
        for (let i = 0; i < this.ySize; i++) {
            this.map[i] = [];
            for (let j = 0; j < this.xSize; j++) {
                let mapValue = this.empty;
                this.map[i].push(mapValue);
            }
        }
    }

    getItemConstructorName(item) {
        return item.constructor.name;
    }
    getRandomEmpty() {
        let randY = randomInteger(0, this.ySize-1),
            randX = randomInteger(0, this.xSize-1),
            mapHasRandX = (randX !== -0 && randX !== -1),
            mapHasRandY = (randY !== -0 && randX !== -1),
            map = this.map;
        if (mapHasRandX && mapHasRandY && map[randY][randX] === this.empty) {
            return [randY, randX];
        }
        return this.getRandomEmpty();
    }
    getClosestEmpty(arr) {
        let X = arr[1],
            Y = arr[0],
            map = this.map,
            changeX = randomInteger(-1, 1),
            changeY = randomInteger(-1, 1);
        if (map[Y+changeY][X+changeX] === this.empty) {
            return [Y+changeY, X+changeX];
        }
        return this.getClosestEmpty([Y,X]);

    }
    // make new instance of element
    mapElementNewInstance(Element, elementParameters) {
        return new Element(elementParameters);
    }

    // add new instances of decoration elements in the beginning
    mapAddDecorations(element, elementParameters, elementQuantity) {
        for (let i = 0; i < elementQuantity; i++) {
            //console.log(this.mapGetRandomEmpty());
            let randCoord = this.getRandomEmpty();
            let decorElement = this.mapElementNewInstance(element, elementParameters),
                map = this.map,
                X = randCoord[1],
                Y = randCoord[0];
            // this sets the coordination of element into element.Position
            decorElement.Position[0] = Y;
            decorElement.Position[1] = X;
            map[Y][X] = decorElement;
        }
    }

    // i try to make every plant live
    mapLive() {
        let map = this.map,
            empty = this.empty,
            fruit;
        for (let item of map) {
            for (let mapItem of item) {
                let mapItemProto = this.getItemConstructorName(mapItem);
                if (mapItem.constructor.name !== 'String') {
                    console.log(mapItem.constructor.name);
                }
                if (mapItemProto === 'Plant') {
                    mapItem.live();
                    console.log(mapItem.Position);
                    let posX = mapItem.Position[1],
                        posY = mapItem.Position[0],
                        closestEmpty;

                    closestEmpty = this.getClosestEmpty([posY, posX]);
                    if (mapItem.timeToFruit()) {
                        mapItem.getFruitSize();
                        fruit = this.mapElementNewInstance(mapItem.fruit, mapItem.fruitParams);

                        if (closestEmpty !== undefined) {
                            map[closestEmpty[0]][closestEmpty[1]] = fruit;
                            fruit.Position[1] = closestEmpty[1];
                            fruit.Position[0] = closestEmpty[0];
                        }
                    }

                }
                if (mapItemProto === 'Fruit') {
                    mapItem.live();
                    console.log(mapItem.Position);
                    if (mapItem.makePlant) {
                        // newPlant.Position[0] = mapItem.Position[0];
                        // newPlant.Position[1] = mapItem.Position[1];
                        let newPlant = this.mapElementNewInstance(mapItem.plant, mapItem.childParams);
                        newPlant.Position = mapItem.Position;
                        console.log(newPlant.Position);
                        mapItem.isAlive = false;
                        this.mapClearElement(mapItem);
                        map[newPlant.Position[0]][newPlant.Position[1]] = newPlant;
                    }
                }
                if (mapItem.wasEaten) {
                    this.mapClearElement(mapItem);
                }
            }
        }
    }
    mapDraw(htmlNode) {
        let map = this.map,
            output = ``;
        for (let mapElem of map) {
            output += `<p>`;
            for (let mapElemDepth of mapElem) {
                let className;
                if (mapElemDepth === this.empty) {
                    className = `${this.empty}`;
                }
                if (mapElemDepth !== this.empty) {
                    className = `${mapElemDepth.view()}`;
                }
                output += `<span class = "${className}"></span>`;
            }
            output += `</p>`;
        }
        htmlNode.innerHTML = output;
    }

    mapClearElement(mapElement) {
        if (mapElement.isAlive === false) {
            let map = this.map,
                empty = this.empty,
                posX = mapElement.Position[1],
                posY = mapElement.Position[0];
            map[posY][posX] = empty;
        }
    }
}
