"use strict"


const button = document.querySelector("button")
const view = document.getElementsByTagName("div")[0]


button.onclick = function() {
    if (view.classList.contains("party")) {
        view.classList.remove("party")
        view.style.height = 0
        view.style.width = 0
    } else {
        view.classList.add("party")
        view.style.height = "100vh"
        view.style.width = "100vw"
    }
}

