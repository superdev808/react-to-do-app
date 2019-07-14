const Todo = require('../models/todos')

exports.createTodo = (req, res) => {
    const { title, content } = req.body
    Todo.create({
        title: title,
        content: content,
        createdAt: new Date(),
        updatedAt: new Date()
    })
        .then(todo => {
            res.status(200).send(todo.dataValues)
        })
        .catch((err) => {
            console.log("Create Error", err)
            res.status(404).send(err)
        })
}

exports.readTodo = (req, res) => {

    let retTodos = []

    Todo.findAll({ order: [['id', 'ASC']] }).then(todos => {
        for (todo of todos) {
            retTodos.push(todo.dataValues)
        }
        res.status(200).send(retTodos)
    })
}

exports.updateTodo = (req, res) => {

    const { id, title, content } = req.body

    Todo.findOne({
        where: {
            id: id
        }
    }).then(post => {
        if (!post) {
            console.log("Update Error", err)
            res.status(404).send("Update Error")
        }
        post.update({
            title: title,
            content: content,
            updatedAt: new Date()
        }).then(() => {
            res.status(200).send(post.dataValues)
        })
    })
}

exports.deleteTodo = (req, res) => {

    const { id } = req.body
    Todo.destroy({
        where: { id: id }
    }).then((rowDeleted) => {
        if (rowDeleted === 1) {
            res.status(200).send({ id })
        } else {
            res.status(404).json({ message: "record not found" })
        }
    }).catch((err) => {
        res.status(500).json(error)
    })
}