const Sequelize = require('sequelize')

module.exports = sequelize.define('todos', {
    id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING(300),
        allowNull: false
    },
    content: Sequelize.STRING(300),
    finished: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    }
})