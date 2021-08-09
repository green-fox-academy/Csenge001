"use strict"

// Create an event listener which logs the current timestamp to the console once the button is clicked.
// When the button is clicked for the second or any other times no event listener should be called.
//Try to solve this two different ways.


const button = document.querySelector("button")
const currentTimestamp = Math.floor(Date.now() / 1000)


//with onclick event
button.onclick = () => {
    if (!button.classList.contains("clicked")) {
        console.log(currentTimestamp)
        button.classList.add("clicked")
    }
}


//with eventlistener
button.addEventListener("click", showTimestamp)

function showTimestamp() {
    if (!button.classList.contains("clicked")) {
        console.log(currentTimestamp)
        button.classList.add("clicked")
    }
}