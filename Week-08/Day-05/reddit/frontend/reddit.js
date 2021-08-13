"use strict"


function convertTimestamp(timestamp) {
    let time = ((Math.floor(Date.now() / 1000)) - timestamp)
    let d = Math.floor(time / 86400);
    let h = Math.floor(time / 3600);
    let m = Math.floor(time % 3600 / 60);

    let dDisplay = d > 0 ? d + (h == 1 ? " day, " : " days, ") : "";
    let hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
    let mDisplay = m > 0 ? m + (m == 1 ? " minute " : " minutes ") : "";
    return "submitted " + dDisplay + hDisplay + mDisplay + "ago by anonymous"
}


window.onload = () => {
    fetch("http://localhost:3000/posts")
    .then(responseJSON => responseJSON.json())
    .then(response => {
        const responseObject = response.posts

        responseObject.forEach(post => {
            const section = document.getElementsByTagName("section")[0]
            const newDiv = document.createElement("div")

            const newScore = document.createElement("p")
            const newTitle = document.createElement("h2")
            const newUrl = document.createElement("a")
            const newTime = document.createElement("p")
            const newModifyLink = document.createElement("a")
            const newRemoveLink = document.createElement("a")

            newScore.innerHTML = post.score
            newTitle.innerHTML = post.title
            newUrl.innerHTML = post.url
            newTime.innerHTML = convertTimestamp(post.timestamp)
            newModifyLink.innerHTML = "modify"
            newRemoveLink.innerHTML = "remove"

            newDiv.appendChild(newScore)
            newDiv.appendChild(newTitle)
            newDiv.appendChild(newUrl)
            newDiv.appendChild(newTime)
            newDiv.appendChild(newModifyLink)
            newDiv.appendChild(newRemoveLink)
            section.appendChild(newDiv)
        })
    })
    .catch(error => console.log(error))
}

