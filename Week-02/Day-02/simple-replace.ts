"use strict";

// I would like to replace "dishwasher" with "galaxy" in this example variable, but it has a problem
// Please fix it for me!
// Expected ouput: In a galaxy far far away

let example: string = "In a dishwasher far far away";
let oldWord: string = "dishwasher";
let newString: string = example.replace(oldWord, "galaxy");

console.log(newString);