import { Client } from "pg";
import express from "express";
import dotenv from "dotenv"

dotenv.config()

const app = express()

const port = process.env.PORT || 7673
app.use(express.json())

const con = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "gre",
    database: "test"
})

con.connect().then(() => console.log("connected..."))

// app.get('/', (req, res) => {
//     res.send("PG")
// })

app.post('/add', (req, res) => {
    const { name, id } = req.body
    const insert = "INSERT INTO demo(name,id) VALUES ($1,$2)"
    con.query(insert, [name, id], (err, result) => {
        if (err) {
            res.send(err)
        } else {
            console.log(result);
            res.send("Inserted")
        }
    })
})

app.get('/fetch', (req, res) => {
    const fetch = "SELECT * FROM demo"
    con.query(fetch, (err, result) => {
        if (err) {
            res.send(err)
        } else {
            console.log(result.rows);
            res.send("Fetched")
        }
    })
})
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

