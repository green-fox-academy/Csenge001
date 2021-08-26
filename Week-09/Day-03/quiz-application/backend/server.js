"use strict"

import express from "express"
import mysql from "mysql2"
import cors from "cors"
import path from "path"


const app = express()
const port = 3000

app.use(express.json())
app.use(cors())
app.use("/questions", express.static("frontend/questions.html"))
app.use("/game", express.static("frontend/game.html"));
app.use("/", express.static("frontend"))


const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Soksikert",
    database: "quiz"
})

conn.connect((err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("Connection successful.")
    }
})


const __dirname = path.resolve()

app.get("/game", (req, res) => {
    res.status(200).sendFile(__dirname + "/frontend/game.html")
})


app.get("/questions", (req, res) => {
    res.status(200).sendFile(__dirname + "/frontend/questions.html")
})


app.get("/api/questions", (req, res) => {
    conn.query("SELECT * FROM questions", (err, result) => {
        if (err) {
            console.log(err)
            res.sendStatus(500)
        } else {
            res.status(200).json(result)
        }
    })
})


app.get("/api/game", (req, res) => {
    conn.query("SELECT * FROM questions", (err, questionRows) => {
        if (err) {
            console.log(err)
            res.sendStatus(500)
        } else {
            let questionCount = questionRows.length
            function randomizer() {
                return Math.floor(Math.random() * (questionCount - 1 + 1) + 1)
            }
            conn.query("SELECT * FROM questions WHERE id = ?", [randomizer()], (err, questionResult) => {
                if (err) {
                    console.log(err)
                    res.sendStatus(500)
                } else {
                    const questionData = questionResult.map(v => Object.assign({}, v))
                    conn.query("SELECT * FROM answers WHERE question_id = ?", [questionData[0].id], (err, answerResult) => {
                        if (err) {
                            console.log(err)
                            res.sendStatus(500)
                        } else {
                            const answerData = answerResult.map(v => Object.assign({}, v))
                            let answers = []
                            for (let i = 0; i < 4; i++) {
                                let answerObject = {
                                    question_id: answerData[i].question_id,
                                    id: answerData[i].id,
                                    answer: answerData[i].answer,
                                    is_correct: answerData[i].is_correct
                                }
                                answers.push(answerObject)
                            }
                            res.status(200).json({
                                id: questionData[0].id,
                                question: questionData[0].question,
                                answers: answers
                            })
                        }
                    })
                }
            })
        }
    })
})


app.delete("/api/questions/:id", (req, res) => {
    conn.query("DELETE FROM questions WHERE id = ?", [req.params.id], (err, result) => {
        if (err) {
            console.log(err)
            res.sendStatus(500)
        } else {
            conn.query("DELETE FROM answers WHERE question_id = ?", [req.params.id], (err, result) => {
                if (err) {
                    console.log(err)
                    res.sendStatus(500)
                } else {
                    res.sendStatus(204)
                }
            })
        }
    })
})


app.post("/api/questions", (req, res) => {
    conn.query("INSERT INTO questions (question) VALUES (?)", [req.body.question], (err, result) => {
        if (err) {
            console.log(err)
            res.sendStatus(500)
        } else {
            const answers = req.body.answers
            answers.forEach(async (answer, index) => {
                try {
                    const answerString = `answer_${index + 1}`
                    await conn.promise().query("INSERT INTO answers (question_id, answer, is_correct) VALUES (?, ?, ?)", [result.insertId, answer[answerString], answer.is_correct])
                } catch (err) {
                    console.log(err)
                    res.sendStatus(500)
                }
            })
            res.sendStatus(200)
        }
    })
})


app.listen(port, () => console.log(`I am listening on port ${port}`))