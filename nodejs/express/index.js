const express = require('express')
var app = express()

app.get("/", (req, res) => {
    // res.write("hello World")
    // res.end()
    res.send("hello world")
})

app.listen(8080, () => {
    console.log("server started")
})