"use strict";


const toBeChanged = document.getElementsByTagName("p");

if (toBeChanged[3].classList.value === "dolphin") {
    toBeChanged[0].innerHTML = "pear";
}

if (toBeChanged[0].classList.contains("apple")) {
    toBeChanged[2].innerHTML = "dog";
}

toBeChanged[0].classList.add("red");

toBeChanged[1].style.borderRadius = 0;