"use strict";

let lineCount: number = 4;
// Write a program that draws a triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is
let asterisk: string = "";
for (let a: number = 0; a < lineCount; a++) {
    asterisk = asterisk + "*"
    console.log(asterisk);
} 
