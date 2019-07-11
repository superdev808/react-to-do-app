const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const todo_route = require('./routes/todo.route')
const mysql = require('mysql')

const app = express();
const PORT = 4000

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'todoschema'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
});

app.use('/todo', todo_route)
app.listen(PORT, function () {
    console.log("Server is running on Port " + PORT)
})