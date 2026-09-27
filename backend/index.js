import express from "express";
import dotenv from "dotenv"

const app = express()
const port = 5000;

dotenv.config()

// app.get('/', (req, res) => {
//     res.send("Hello,World")
// })

app.get('/student',(req,res)=>{
    const std = [
        {
            id:101,
            name:"John",
            age:20
        },
        {
            id:102,
            name:"Aai",
            age:22
        },
        {
            id:101,
            name:"Phoe",
            age:23
        },
        {
            id:101,
            name:"Nick",
            age:21
        },
        {
            id:101,
            name:"Ish",
            age:25
        }
    ]
    res.send(std)
})

app.listen(process.env.PORT, () => {
    console.log(`App is running on ${port}`);

})
