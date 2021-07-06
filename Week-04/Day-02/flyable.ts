"use strict";

export interface Flyable {
    land(): void;
    takeOff(): void;
    fly(): void;
}


class Vehicle {

    color: string | undefined;
    parts: string[] | undefined;
    weight: number | undefined;

    constructor(color?: string, parts?: string[], weight?: number) {
        this.color = color;
        this.parts = parts;
        this.weight = weight;
    }
}


class Helicopter extends Vehicle implements Flyable {

    land(): void {
        console.log("I have just landed.");
    }

    takeOff(): void {
        console.log("I took off to begin my journey.");
    }

    fly(): void {
        console.log("I can fly!");
    }
}


let boeing = new Helicopter();
boeing.takeOff();
boeing.fly();
boeing.land();