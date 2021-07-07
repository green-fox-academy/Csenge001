"use strict";


export class Sum {
    arrayOfNumbers: number[] = [];

    constructor(arrayOfNumbers: number[]) {
        this.arrayOfNumbers = arrayOfNumbers;
    }


    sum() {
        let startPoint: number = 0;
        for (let i = 0; i < this.arrayOfNumbers.length; i++) {
            startPoint = startPoint + this.arrayOfNumbers[i];
        }
        return startPoint;
    }
} 
