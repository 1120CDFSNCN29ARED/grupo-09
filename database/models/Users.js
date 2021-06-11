const Sequelize = require('sequelize');
const sequelize = require('database'); 

module.exports = (Sequelize, DataTypes) => {
    let alias = 'User';
    let cols = {
        id: {
            type: DataTypes.INTEGER
        },
        names: {
            type: DataTypes.STRING(50)
        },
        email: {
            type: DataTypes.STRING(50)
        },
        address: {
            type: DataTypes.STRING(50)
        },
        password: {
            type: DataTypes.STRING(50)
        },
        image: {
            type: DataTypes.STRING(100)
        },
    }
    const User = Sequelize.define(alias, cols);
}