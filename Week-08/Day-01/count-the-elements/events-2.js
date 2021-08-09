"use strict"


// On the click of the button
// Count the items in the list
// And display the result in the result element


const list = document.getElementsByTagName("ul")[0]
const button = document.querySelector("button")
const result = document.getElementsByClassName("result")[0]

button.onclick = () => {
    result.innerHTML = list.childElementCount
}

