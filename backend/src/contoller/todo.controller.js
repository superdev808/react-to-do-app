const Todo = require('../models/todos')

exports.createTodo = (req, res) => {
    Todo.create({
        title: 'First Todo',
        content: '123456789',
        createdAt: new Date(),
        updatedAt: new Date()
    })
        .then(todo => {
            res.status(200).send(todo.dataValue)
        })
        .catch((err) => {
            console.log("Create Error", err)
            res.status(404).send(err)
        })
}

exports.updateTodo = (req, res) => {
    Todo.find({ where: { id: req.todoId } })
        .on('success', function (todo) {
            if (todo) {
                todo.update({
                    title: req.title,
                    content: req.content,
                    updatedAt: new Date()
                }).success(() => {
                    res.status(200).send(todo)
                }).catch((err) => {
                    console.log("Update Error", err)
                    res.status(404).send("Update Error")
                })
            }
        })
}

exports.deleteTodo = (req, res) => {
    todo.destroy({
        where: { id: req.todoId }
    }).then((rowDeleted) => {
        if (rowDeleted === 1) {
            res.status(200).json({ message: "Deleted successfully" })
        } else {
            res.status(404).json({ message: "record not found" })
        }
    }).catch((err) => {
        res.status(500).json(error)
    })
}