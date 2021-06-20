const Sequelize = require('sequelize');
// const sequelize = require('database'); 

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
    const User = sequelize.define(alias, cols);
}
User.asscoiate = function(models){
    User.belongsToMany (models.Serial_Number, {
        as: "Products",
        through: "Sale", 
        foreignKey: "id_user", 
        otherKey: "id_serial_number", 
        timesTamp: false
    })
}