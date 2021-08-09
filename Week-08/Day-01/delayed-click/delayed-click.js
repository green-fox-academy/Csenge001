"use strict"

//Create a simple HTML document with one button.
//If the user clicks the button it should wait 2 seconds and it should show a text under the button: 2 seconds elapsed.


const button = document.getElementsByTagName("button")[0]
const body = document.getElementsByTagName("body")[0]

button.addEventListener("click", showText)

function showText() {
    setTimeout(() => {
        let newElement = document.createElement("p")
        let text = document.createTextNode("2 seconds elapsed")
        newElement.appendChild(text)
        body.appendChild(newElement)
    }, 2000)
}