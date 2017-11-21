import Animal from "./animal.js";

export default class Predator extends Animal {
    hunt(victim) {
        this.move();
        if (this.size() >= victim.size()){
            victim.death();
            this.eat();
            return this.stamina += 20;
        }
    }
}