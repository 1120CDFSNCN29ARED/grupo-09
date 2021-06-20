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
Serial_Number.associate = function(models){
    Serial_Number.BelongTo (models.Products, {
        foreignkey: "id_serial_number" ,
        as : "Products"
    })
    Serial_Number.asscoiate = function(models){
        Serial_Number.belongsToMany (models.User, {
            as: "Serial_Number",
            through: "Sale", 
            foreignKey: "id_serial_number", 
            otherKey: "id_user", 
            timesTamp: false
        })
    }
}
