"use strict";

// -  Create a variable named `names` with the following content:
//   `["Arthur", "Boe", "Chloe"]`
// -  Swap the first and the third element of `names`

let names = ["Arthur", "Boe", "Chloe"];
names.splice(0 , 1, "Chloe");
names.splice(2, 1, "Arthur");
console.log(names);