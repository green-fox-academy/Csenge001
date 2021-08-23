"use strict"

const form = document.getElementsByTagName("form")[0]

form.addEventListener("submit", (event) => {
    event.preventDefault()
    const newPost = {
        title: form.elements.title.value,
        url: form.elements.url.value
    }

    const requestOptions = {
        method: "POST",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify(newPost)
    }

    fetch("http://localhost:3000/posts", requestOptions)
        .then(response => response.json())
        .then(jsonResponse => window.history.back())
        .catch(error => console.log(error))

})