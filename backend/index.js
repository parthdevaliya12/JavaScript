import express from "express";
import dotenv from "dotenv"
import mongoose from "mongoose";
import { dbConnect } from "./src/db/db.js";

// import cors from "cors"


const app = express()
const port = 5000;

dotenv.config()

app.use(express.static('dist'))

// app.use(cors())

// app.get('/', (req, res) => {
//     res.send("Hello,World")
// })

app.get('/api/student', (req, res) => {
    const std = [
        {
            id: 101,
            name: "John",
            age: 20
        },
        {
            id: 102,
            name: "Aai",
            age: 22
        },
        {
            id: 103,
            name: "Phoe",
            age: 23
        },
        {
            id: 104,
            name: "Nick",
            age: 21
        },
        {
            id: 105,
            name: "Ish",
            age: 25
        }
    ]
    res.send(std)
})


dbConnect()


app.listen(process.env.PORT, () => {
    console.log(`App is running on ${port}`);

})
