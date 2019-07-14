const express = require('express')
const bodyParser = require('body-parser')
const todo_route = require('./src/routes/todo.route')

const PORT = 4000

let app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

//DB CONNECTION

require('./src/bootstrap')()

app.use('/', todo_route)

app.listen(PORT, function () {
    console.log("Server is running on Port:" + PORT)
})