import express from "express"
import path from "path"


const app = express()
const port = 3001
const router = express.Router()


app.use("/", router)


router.get("/", (req, res) => res.sendFile(path.join(path.resolve(), "/index.html")))


app.listen(port, () => console.log(`The application is started on port ${port}`))