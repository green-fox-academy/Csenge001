import express from "express"

const app = express()
const port = 3000
const router = express.Router()

app.set("view engine", "ejs")
app.use("/", router)

router.get("/", (req, res) => {
    const todos = ['get up', 'survive', 'go back to bed']
    res.render("home", {todos})
})

app.listen(port, () => console.log(`The application is started on port ${port}`))