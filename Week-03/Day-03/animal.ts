class Animal {
    hunger: number = 50;
    thirst: number = 50;
    animal: string;


    constructor (hunger: number, thirst: number, animal: string) {
        this.hunger = hunger || this.hunger;
        this.thirst = thirst || this.thirst;
        this.animal = animal;
    }


    eat() {
        --this.hunger;
        console.log(`The ${this.animal} has a hunger level of ${this.hunger} and thirst level of ${this.thirst} due to eating.`);
    }

    drink() {
        --this.thirst;
        console.log(`The ${this.animal} has a hunger level of ${this.hunger} and thirst level of ${this.thirst} due to drinking.`);
    }

    play() {
        ++this.hunger && ++this.thirst;
        console.log(`The ${this.animal} has a hunger level of ${this.hunger} and thirst level of ${this.thirst} due to playing.`);
    }

}

let wolf = new Animal(70, 80, "wolf");
let deer = new Animal (0, 0, "deer");
let fox = new Animal (85, 0, "fox");

deer.play();
fox.eat();
wolf.drink();