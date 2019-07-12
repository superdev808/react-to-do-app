module.exports = async () => {
    const Todo = require('./models/todos')

    const errHandler = (err) => {
        console.error("Error: ", err)
    }

    await Todo.create(
        {
            title: 'First Todo',
            content: '123456789',
            createdAt: new Date(),
            updatedAt: new Date()
        })
        .then(todo => {
            console.log(todo.dataValues)
        }).catch(errHandler)
}