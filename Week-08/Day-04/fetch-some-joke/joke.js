"use strict"

const button = document.getElementsByTagName("button")[0]
const container = document.getElementById("jokeContainer")
const url = "http://api.icndb.com/jokes/random"

button.addEventListener("click", (e) => {
    fetch(url)
        .then(response => response.json())
        .then(jsonResponse => {
            const joke = document.createElement("p")
            joke.innerHTML = jsonResponse.value.joke
            container.appendChild(joke)
        })
        .catch(error => console.log(error))
})



