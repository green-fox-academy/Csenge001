"use strict"

const asteroidList = document.querySelector(".asteroids")
const newAsteroid1 = document.createElement("li")
const newAsteroid2 = document.createElement("li")
const container = document.querySelector(".container")
const newImage = document.createElement("img")

newAsteroid1.textContent = "The Green Fox"
asteroidList.appendChild(newAsteroid1)

newAsteroid2.textContent = "The Lamplighter"
asteroidList.appendChild(newAsteroid2)

container.innerHTML = "<h1>I can add elements to the DOM!</h1>"

newImage.setAttribute("src", "https://www.nhm.ac.uk/content/dam/nhmwww/discover/frog-eyes-evolution/frog-eyes-chubby-frog-flower-full-width.jpg.thumb.1160.1160.jpg")
container.appendChild(newImage)