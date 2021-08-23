"use strict"

const express = require('express')

const app = express()
const port = 3000

app.get("/yondu", (req, res) => {
    if (req.query.distance && req.query.time) {
        if (req.query.distance == 0 || req.query.time == 0) {
            let responseObject = {
                distance: 0,
                time: 0,
                speed: 0
            }
            res.status(200).json(responseObject)
        } else {
            let distanceVariable = Number(req.query.distance)
            let timeVariable = Number(req.query.time)
            let responseObject = {
                distance: distanceVariable,
                time: timeVariable,
                speed: distanceVariable / timeVariable
            }
            res.status(200).json(responseObject)
        }
    } else {
        let errorObject = {
            error: "Please provide distance and time!",
        }
        res.status(400).json(errorObject)
    }
})


app.listen(port, () => console.log(`The application is started on port ${port}`))


module.exports = app