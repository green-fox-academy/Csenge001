"use strict";

// Write a program that prints the numbers from 1 to 100
// but for multiples of three print “Fizz” instead of the number
// and for the multiples of five print “Buzz”
// For numbers which are multiples of both three and five print “FizzBuzz”

for (let a: number = 1; a <= 100; a++) {
    if (a % 3 === 0 && a % 5 !== 0) {
        console.log("Fizz");
    }
    if (a % 5 === 0 && a % 3 !== 0) {
        console.log("Buzz");
    }
    if (a % 3 === 0 && a % 5 === 0) {
        console.log("FizzBuzz");
    }
    if (a % 3 !== 0 && a % 5 !== 0) {
        console.log(a);
    }
}