"use strict"


window.onload = () => {
    fetch("http://localhost:3000/api/questions")
    .then(response => response.json())
    .then(jsonResponse => {
        jsonResponse.forEach(question => {

            const questionHolder = document.getElementById("questionHolder")
            const oneQuestion = document.createElement("p")
            const deleteButton = document.createElement("button")

            oneQuestion.innerHTML = question.question
            deleteButton.innerHTML = "delete"

            questionHolder.appendChild(oneQuestion)
            questionHolder.appendChild(deleteButton)

            deleteButton.addEventListener("click", (event) => {
                event.preventDefault()

                fetch(`http://localhost:3000/api/questions/${question.id}`, {
                    method: "DELETE"
                })
                    .then(response => response.json())
                    .then(location.reload())
            })
        })
    })
    .catch(error => console.log(error))
}


const form = document.getElementsByTagName("form")[0]

form.addEventListener("submit", (event) => {
    event.preventDefault()
    const newQuestion = {
        question: form.elements.question.value,
        answers: [
            {
                answer_1: form.elements.answer1.value,
                is_correct: (form.elements.radioanswer1.checked) ? 1 : 0
            },
            {
                answer_2: form.elements.answer2.value,
                is_correct: (form.elements.radioanswer2.checked) ? 1 : 0
            },
            {
                answer_3: form.elements.answer3.value,
                is_correct: (form.elements.radioanswer3.checked) ? 1 : 0
            },
            {
                answer_4: form.elements.answer4.value,
                is_correct: (form.elements.radioanswer4.checked) ? 1 : 0
            },
        ]
    }

    const requestOptions = {
        method: "POST",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify(newQuestion)
    }

    fetch("http://localhost:3000/api/questions", requestOptions)
        .then(response => response.json())
        .then(location.reload())
        .catch(error => console.log(error))
        
})
