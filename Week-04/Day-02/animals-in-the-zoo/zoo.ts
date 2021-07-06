"use strict";

abstract class Animal {

    name: string;
    age: number | undefined;
    gender: string | undefined;

    constructor(name: string, age?: number, gender?: string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    getName(): string {
        return this.name;
    }

    abstract breed(): string;
}


class LiveBearerAnimal extends Animal {
    
    breed(): string {
        return "pushing miniature versions out";
    }
}


class Mammal extends LiveBearerAnimal {}


class EggLayingAnimal extends Animal {
    
    breed(): string {
        return "laying eggs"
    }
}


class Reptile extends EggLayingAnimal {}

class Bird extends EggLayingAnimal {}


export { Mammal, Reptile, Bird};