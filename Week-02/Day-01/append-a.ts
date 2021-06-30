"use strict";

// -  Create an array variable named `animals`
//    with the following content:
//    `["koal", "pand", "zebr", "anacond", "bo", "chinchill", "cobr", "gorill",
//      "hyen", "hydr", "iguan", "impal", "pum", "tarantul", "pirahn"]`
//
// -  Add all elements an `"a"` at the end


let animals = ["koal", "pand", "zebr", "anacond", "bo", "chinchill", "cobr", "gorill", "hyen", "hydr", "iguan", "impal", "pum", "tarantul", "pirahn"];
let character = "a";

//first solution
animals.forEach(function(addA) {
    console.log(addA + character); 
});


//second solution
for (let i = 0; i < animals.length; i++) {
    let fullAnimal = animals[i].concat(character);
    console.log(fullAnimal);
}
