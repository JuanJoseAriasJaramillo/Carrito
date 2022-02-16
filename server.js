const express = require('express');
const path =  require('path')

const app = express();

const publicDirectory = path.join(__dirname, './public');
app.use(express.static(publicDirectory));

app.get("/", (req, res) => {
    res.send("Welcome to my shop")
})

app.get("/contact", (req, res) => {
    res.send("Welcome to the contact page")
})

app.listen(5000, ()=> {
    console.log("Server is runnning on port 5000")
})