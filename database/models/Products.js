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
        },
        id_serial_number: {
            type: DataTypes.INTEGER
        }
    }
    let config = {
        tableName : "product",
        timestamps: false
    }
    const Product = sequelize.define(alias, cols);
}

Product.associate = function(models){
    Product.hasMany (models.Serial_Numbers, {
        foreignkey: "id_product" ,
        as : "Serial_number"
    })
}