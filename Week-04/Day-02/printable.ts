"use strict";


class Domino implements Printable {
    aSide: number;
    bSide: number;

    constructor(aSide: number, bSide: number) {
        this.aSide = aSide;
        this.bSide = bSide;
    }

    printAllFields(): void {
        console.log(`Domino A side: ${this.aSide}, B side: ${this.bSide}`)
    }
}


class ToDo implements Printable {
    task: string;
    priority: string;
    done: boolean;

    constructor(task: string, priority: string, done: boolean) {
        this.task = task;
        this.priority = priority;
        this.done = done;
    }

    printAllFields(): void {
        console.log(`Task: ${this.task} | Priority: ${this.priority} | Done: ${this.done}`)
    }
}


interface Printable {
    printAllFields(): void;
}


let domino = new Domino(3, 2);
let todo = new ToDo("buy milk", "high", true);

domino.printAllFields();
todo.printAllFields();
