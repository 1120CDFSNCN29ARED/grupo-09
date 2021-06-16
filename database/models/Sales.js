const Sequelize = require('sequelize');
// const sequelize = require('database');

module.exports = (Sequelize, DataTypes) => {
    let alias = 'Sales';
    let cols = {
        id: {
            type: DataTypes.INTEGER
        },
        id_user: {
            type: DataTypes.INTEGER
        },
        id_serialNumber: {
            type: DataTypes.INTEGER
        },
        
    }
    const Sale = sequelize.define(alias, cols);
}