export class Counter {
    counter: number = 0;
    originalCounter: number;


    constructor(counter?: number) {
        this.counter = counter || this.counter;
        this.originalCounter = this.counter;
    }


    add(number?: number) {
        if (number === undefined) {
            ++this.counter;
        } else {
            this.counter = this.counter + number;
        }
        console.log(`The number was increased: ${this.counter}`);
    }

    get() {
        console.log(`The current value is: ${this.counter}`);
        return this.counter;
        
    }

    reset() {
        this.counter = this.originalCounter;
        console.log(`The number was reset to the initial value: ${this.counter}`);
    }

}


let number1 = new Counter(5);
let number2 = new Counter(undefined);
let number3 = new Counter(-3);
let number4 = new Counter(0.5);


number3.add(5);
number2.add();
number1.reset();
number4.get();
