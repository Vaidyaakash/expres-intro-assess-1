// Express application

const express = require("express") // import express
const student = require("./data") // import json data from data file

const app = express() //creating express server

// creating routes
app.get("/api/main", function (req, res) {
    res.json(student)
})

// Home route
app.get("/", function (req, res) {
    res.send("<h1>hello, how are you</h1>")
})

app.get("/fun1", function (req, res) {
    res.json(student.fun1(5, 25))
})

app.get("/string", function (req, res) {
    res.write("this is function 3")
    res.end()
})

app.listen(4001) // browser port(4001)
