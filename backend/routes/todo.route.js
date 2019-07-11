const express = require('express');
const router = express.Router();

const todo_controller = require('../controller/todo.controller');

router.post('/new', todo_controller.newTodo);

module.exports = router;