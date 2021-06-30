"use strict";

// Write a function called `sum()` that returns the sum of numbers from zero to the given parameter


function sum(endPoint: number) {
    let result = 0;
    for (let i = 0; i <= endPoint; i++) {
      result = result + i;        
    }
    console.log(result);
}


sum(5);