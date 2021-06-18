"use strict";

// Write a program that calculates the sum and the average from 1 to a given number
// Example input: 5
// Example output: Sum: 15, Average: 3

let input = 5;
let sum = 0;
for (let x = 1; x <= input; x++) {
    sum += x;
}
console.log("Sum:", sum);
console.log("Average:", sum / input);
