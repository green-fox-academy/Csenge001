"use strict"

// Create a timeout that will set the display to "Bomb exploded" in 10 seconds
// If you click on the button set the display to "Bomb defused" and stop the timeout
// Extra: create an interval which will update the remaining seconds in the display


const button = document.querySelector("button")
const display = document.getElementsByClassName("display")[0]
let countingStopped = false


window.onload = () => {
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            display.innerHTML = countingStopped ? "Bomb defused" : i
        }, 10000 - (i * 1000))
    }
    setTimeout(() => {
        display.innerHTML = countingStopped ? "Bomb defused" : "Bomb exploded"
    }, 10000)
    
}

button.onclick = () => {
    countingStopped = true
}

