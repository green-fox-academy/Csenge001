"use strict";


const newContent = ["apple", "banana", "cat", "dog"];
const oldContent = document.getElementsByTagName("li");


for (let i = 0; i < oldContent.length; i++) {
    oldContent[i].innerHTML = newContent[i];
}


const toBeChanged = document.getElementsByTagName("ul")[0];

//first solution:
//toBeChanged.style.backgroundColor = "limegreen";

//second solution:
toBeChanged.classList.add("highlighted");