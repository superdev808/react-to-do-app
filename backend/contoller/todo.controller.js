exports.newTodo = (req, res) => {
    const Todo = require('./models/todos')

    const errHandler = (err) => {
        console.error("Error: ", err)
    }

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
            console.log("Error", err)
            res.status(522).send(err)
        })
}