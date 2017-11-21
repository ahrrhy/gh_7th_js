import Mouse from "./parts/mouse.js";
import Eagle from "./parts/eagle.js";
import Deer from "./parts/deer.js";
import Hunter from "./parts/hunter.js";
import Aborigine from "./parts/aborigine.js";

let ChuckNorris = new Hunter('Chuck Norris', 200, 200);
let JimCarrey = new Aborigine('Jim Carrey', 150, 150);
let Mickey = new Mouse('Mickey', 50, 50);
let AngryBird = new Eagle('AngryBird', 100, 100);
let Bamby = new Deer('Bamby', 100, 150);

console.log(ChuckNorris.say);
console.log(JimCarrey.say);
console.log(Mickey.say);
console.log(AngryBird.say);
console.log(Bamby.say);
