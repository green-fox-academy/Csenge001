"use strict"

import express from "express"
import path from "path"


const app = express()
const port = 3000
const router = express.Router()


app.use("/", router)
app.use(express.static("assets"))
app.use(express.json());


router.get("/", (req, res) => res.sendFile(path.join(path.resolve(), "/index.html")))

router.get("/doubling", (req, res) => {
    if (!req.query.input) {
        let errorObject = {
            error: "Please provide an input!",
        }
        res.status(200).json(errorObject)
    } else {
        let input = Number(req.query.input)
        let resultObject = {
            received: input,
            result: 2 * input
        }
        res.status(200).json(resultObject)
    }
})

router.get("/greeter", (req, res) => {
    if (!req.query.name && !req.query.title) {
        let errorObject3 = {
            error: "Please provide a name and a title!",
        }
        res.status(400).json(errorObject3)
    }
    if (!req.query.name) {
        let errorObject1 = {
            error: "Please provide a name!",
        }
        res.status(400).json(errorObject1)
    }
    if (!req.query.title) {
        let errorObject2 = {
            error: "Please provide a title!",
        }
        res.status(400).json(errorObject2)
    }
    if (req.query.name && req.query.title) {
        let welcomeObject = {
            "welcome_message": `Oh, hi there ${req.query.name}, my dear ${req.query.title}!`
        }
        res.status(200).json(welcomeObject)
    }
})

router.get("/appenda/:appendable", (req, res) => {
    if (!req.params.appendable) {
        res.status(404)
    }
    if (req.params.appendable) {
        let toBeAppended = req.params.appendable
        let appendedObject = {
            appended: toBeAppended + "a"
        }
        res.status(200).json(appendedObject) 
    }
})

app.post("/dountil/:operation", (req, res) => {
    let givenNumber = req.body.until
    let resultObject = {}
    if (givenNumber === undefined) {
        resultObject = {
            error: "Please provide a number!"
        }
    } else {
        if (req.params.operation === "sum") {
            let counter = 0
            for (let i = 0; i <= givenNumber; i++) {
                counter += i
            }
            resultObject = {
                result: counter,
            }
        } else if (req.params.operation === "factor") {
            let counter2 = 1
            for (let j = 1; j <= givenNumber; j++) {
                counter2 *= j
            }
            resultObject = {
                result: counter2,
            }
        }
        res.status(200).json(resultObject) 
    }
})


app.listen(port, () => console.log(`I am listening on port ${port}.`))