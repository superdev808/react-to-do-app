const express = require('express')
const router = express.Router()

const todo_controller = require('../contoller/todo.controller')

// a simple test url to check that all of our files are communicating correctly.
router.post('/create', todo_controller.createTodo)
router.post('/update', todo_controller.createTodo)
router.delete('/delete', todo_controller.deleteTodo)

module.exports = router