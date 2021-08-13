"use strict"

import express from "express"
import mysql from "mysql2"
import cors from "cors"

const app = express()
const port = 3000

app.use(express.json())
app.use(cors())

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Soksikert",
    database: "reddit"
})

conn.connect((err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("Connection successful.")
    }
})

app.get("/hello", (req, res) => res.send("Hello World!"))

app.get("/posts", (req, res) => {
    conn.query("SELECT * FROM posts;", (err, posts) => {
        if (err) {
            console.log(err)
            res.send(500)
        } else {
            res.status(200).json({ posts })
        }
    })
})

app.post("/posts", (req, res) => {
    let currentTimestamp = Math.floor(Date.now() / 1000)
    conn.query("INSERT INTO posts (title, url, timestamp) VALUES (?, ?, ?)", [req.body.title, req.body.url, currentTimestamp], (err, newPost) => {
        if (err) {
            console.log(err)
            res.send(500)
        } else {
            conn.query("SELECT * FROM posts WHERE id = ?", [newPost.insertId], (err, result) => {
                if (err) {
                    console.log(err);
                    res.send(500)
                } else {
                    res.status(200).send(JSON.stringify(result))
                }
            })
        }
    })
})

app.put("/posts/:id/upvote", (req, res) => {
    conn.query("UPDATE posts SET score = score + 1 WHERE id = ?;", [req.params.id], (err, result) => {
        if (err) {
            console.log(err)
            res.send(500)
        } else {
            res.status(200).send(result)
        }
    })
})

app.put("/posts/:id/downvote", (req, res) => {
    conn.query("UPDATE posts SET score = score - 1 WHERE id = ?;", [req.params.id], (err, result) => {
        if (err) {
            console.log(err)
            res.send(500)
        } else {
            res.status(200).send(result)
        }
    })
})

app.listen(port, () => console.log(`I am listening on port ${port}`))