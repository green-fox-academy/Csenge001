"use strict";

const toBeAppended = document.getElementsByTagName("p");
const contentToAdd = document.getElementsByClassName("animals")[0];


for (let i = 0; i < 3; i++) {
    toBeAppended[i].innerHTML = toBeAppended[i].textContent + " " + contentToAdd.textContent;
}


for (let i = 0; i < 3; i++) {
    toBeAppended[i].innerHTML = toBeAppended[i].textContent + " " + contentToAdd.innerHTML;
}