"use strict";

abstract class Instrument {

    abstract play(): void;
    
}


abstract class StringedInstrument extends Instrument {
    numberOfStrings: number;

    constructor(numberOfStrings: number) {
        super();
        this.numberOfStrings = numberOfStrings;
    }

    abstract sound(): string;

}


class ElectricGuitar extends StringedInstrument {
     
    constructor(numberOfStrings: number = 6) {
        super(numberOfStrings);
    }

    sound(): string {
        return "Twang";
    }

    play(): void {
        console.log(`Electric Guitar, a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}.`)
    }
    
}


class BassGuitar extends StringedInstrument {
     
    constructor(numberOfStrings: number = 4) {
        super(numberOfStrings);
    }

    sound(): string {
        return "Duum-duum-duum";
    }

    play(): void {
        console.log(`Bass Guitar, a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}.`)
    }
    
}


class Violin extends StringedInstrument {
     
    constructor(numberOfStrings: number = 4) {
        super(numberOfStrings);
    }

    sound(): string {
        return "Screech";
    }

    play(): void {
        console.log(`Violin, a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}.`)
    }
    
}

export {Violin, BassGuitar, ElectricGuitar};