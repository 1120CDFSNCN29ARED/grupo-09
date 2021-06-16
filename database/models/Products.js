const Sequelize = require('sequelize');
// const sequelize = require('database');

module.exports = (Sequelize, DataTypes) => {
    let alias = 'Product';
    let cols = {
        id : {
            type: DataTypes.INTEGER
        },
        name : {
            type: DataTypes.STRING(50)
        },
        continent: {
            type: DataTypes.STRING(50)
        },
        description: {
            type: DataTypes.STRING(500)
        },
        unitPrice: {
            type: DataTypes.DECIMAL(2)
        },
        image: {
            type: DataTypes.STRING(100)
        },
        stock: {
            type: DataTypes.INTEGER
        }
    }
    const Product = sequelize.define(alias, cols);
}