const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname');

class TodoModel extends Sequelize.Model {
}


/*
const TodoModel = (sequelize, Sequelize) => {
    const { INTEGER, STRING, FLOAT, BOOLEAN, DATE } = Sequelize
    const User = sequelize.define('User', {
        UserId: { type: INTEGER, primaryKey: true, autoIncrement: true },
        Username: { type: STRING, primaryKey: true, allowNull: false },
        Password: STRING
    })
    return User
}
*/