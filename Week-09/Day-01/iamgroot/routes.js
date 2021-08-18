"use strict"

const express = require('express')
const app = express()


app.get("/groot", (req, res) => {
    if (req.query.message === "somemessage") {
        let resultObject = {
            received: "somemessage",
            translated: "I am Groot!"
        }
        res.status(200).json(resultObject)
    } else if (!req.query.input) {
        let errorObject = {
            error: "I am Groot!",
        }
        res.status(400).json(errorObject)
    }
})


module.exports = app