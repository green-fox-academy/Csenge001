"use strict"

const button = document.getElementsByTagName("button")



window.onload = () => {
    fetch('http://localhost:3000/posts')
    .then(responseJSON => responseJSON.json())
    .then(response => {
        console.log('fetch response:', response.posts)
        const responseObject = response.posts
        let firstPost = responseObject[0]
        const title = document.getElementsByClassName("title")[0]
        title.innerHTML = firstPost.title
        responseObject.forEach(post => {
            let newDiv = document.createElement("div")
            let newTitle = document.createElement("h2")
            newTitle.innerHTML = post.title
            newDiv.appendChild(newTitle)
            const section = document.getElementsByTagName("section")[0]
            section.appendChild(newDiv)
        })
    })
    .catch(error => console.log(error))
}

// button.addEventListener("submit", event => {
//     event.preventDefault()
//     const newPost = {
  
// }

// const requestOptions = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(newPost),
// }

// fetch('http://localhost:3000/posts', requestOptions)
//     .then(responseJSON => responseJSON.json())
//     .then(response => {
//         console.log('fetch response:', response)
//         responseObject = response
//     })
//     .catch(error => console.log(error))

// })
