"use strict";

// While saving this quote, a disk error has occured. Please fix it!
// Insert the words "always takes longer than" between the words "It" and "you"!
 
let quote: string = "Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law.";
let toAdd: string = "always takes longer than";
let newQuote: string = [quote.slice(0, 21), toAdd, " ", quote.slice(21)].join("");

console.log(newQuote);