"use strict";

const image = document.querySelector("img");
console.log(image.getAttribute("src"));
image.setAttribute("src", "https://www.nhm.ac.uk/content/dam/nhmwww/discover/frog-eyes-evolution/frog-eyes-chubby-frog-flower-full-width.jpg.thumb.1160.1160.jpg");

const link = document.querySelector("a");
link.setAttribute("href", "https://www.greenfoxacademy.com/");

const button = document.querySelector(".this-one");
button.innerHTML = "Don't click me!";