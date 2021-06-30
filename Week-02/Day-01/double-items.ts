"use strict";

// - Create an array variable named `drinks` with the following content:
//   `['Gin', 'Whiskey', 'Wine', 'Beer']`
// - Double all the strings in the array, use a built in array method instead of
//   a loop
// - It should print: ['GinGin', 'WhiskeyWhiskey', 'WineWine', 'BeerBeer']`

let drinks = ["Gin", "Whiskey", "Wine", "Beer"];


// first solution
function duplicate1(arr: string[]) {
    for(let i: number = 0; i < arr.length; i++) {
        arr[i] = arr[i] + arr[i];
    }
    console.log(arr);
}


//second solution
function duplicate2(arr: string[]) {
    for(let i: number = 0; i < arr.length; i++) {
        arr[i] = arr[i].repeat(1);
    }
    console.log(arr);
}


duplicate1(drinks);
duplicate2(drinks);
