"use strict";

// -  Create an array named `numbers` with the following content: `[1, 2, 3, 8, 5, 6]`
// -  Change the value of the fourth element (8) to 4 with the `.map` method 
// -  Print the fourth element as a test


let numbers = [1, 2, 3, 8, 5, 6];

//first solution
function changeValue(element: number, index: number, arr: number[]) {
    arr[index] = element;
    if(index === 3) {
      arr[index] = 4;
    }
}

numbers.map(changeValue);
console.log(numbers);


//second solution
numbers.map(function(){
       numbers[3] = 4;
});

console.log(numbers);