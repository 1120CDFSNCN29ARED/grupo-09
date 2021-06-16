const Sequelize = require('sequelize');
// const sequelize = require('database');

module.exports = (Sequelize, DataTypes) => {
    let alias = 'Serial_Numbers';
    let cols = {
        id: {
            type: DataTypes.INTEGER
        },
        id_product: {
            type: DataTypes.INTEGER
        },
    }
    const Serial_Number = sequelize.define(alias, cols);
}