const express = require('express')
const dotenv = require('dotenv')

const app = express()
const port = 5000;

dotenv.config()

app.get('/', (req, res) => {
    res.send("Hello,World")
})


app.listen(process.env.PORT, () => {
    console.log(`App is running on ${port}`);

})
