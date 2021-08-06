"use strict";


// Exercise 1:

const mapWith = (array, callback) => {
    let output = []
    for (let element of array) {
        output.push(callback(element))
    }
    return output
}

const addOne = (number) => {
  return number + 1;
}

console.log(mapWith([1, 2, 3], addOne))


// Exercise 2:

const removeSecondLetter = (text) => {
    let newText = ""
    for (let i = 0; i < text.length; i++) {
        if (i % 2 === 0) {
            newText += text[i]
        }
    }
    return newText
}


const words = ["map", "reduce", "filter"]

console.log(mapWith(words, removeSecondLetter));






