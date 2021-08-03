import express from "express"


const app = express()
const port = 3000
const router = express.Router()


app.set("view engine", "ejs")
app.use("/", router)


router.get("/", (req, res) => res.render("home", {name: req.query.name}))


app.listen(port, () => console.log(`the application is started on port ${port}`))