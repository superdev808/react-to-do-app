const Sequelize = require('sequelize')

const sequelize = new Sequelize('todoDatabase', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
})

module.exports = sequelize
// global.sequelize = sequelize
