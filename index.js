const express = require("express")
const student = require("./data")

const app = express()

app.get("/student", function (req, res) {
    res.json(student)
})
app.get("/fun1", function (req, res) {
    res.json(student.fun1(5, 25))
})
app.get("/fun3", function (req, res) {
    // res.json(student.fun2(50, 25))
    res.write("this is function 3")
    res.end()
})
app.get("/fun2", function (req, res) {
    res.json(student.fun3(105, 25))
})

app.listen(5)