"use strict"


// 1) Subscribe to keyup events on the global window object
// 2) Console log the event object and peek inside
// 3) Display the last pressed key's code as "Last pressed key code is: __"


const message = document.getElementsByTagName("h1")[0]

window.addEventListener("keyup", handleKeyUp)

function handleKeyUp(e) {
    message.innerHTML = "Last pressed key code is: " + e.keyCode
}

