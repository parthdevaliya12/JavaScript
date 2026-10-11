import express from "express"
import dotenv from "dotenv"
import { dbConnect } from "./config/db.js"
import authRouter from "./routes/user.route.js"

const app = express()

dotenv.config()

const port = process.env.PORT || 5000

app.use(express.json())


app.use("/api/auth", authRouter)
// app.get('/', (req, res) => {
//     res.send("Hello < World")
// })

dbConnect()


app.listen(port, () => {
    console.log(`App is running on port ${port}`);

})

