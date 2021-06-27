module.exports = (sequelize, DataTypes) => {
    let alias = 'User';
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
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
            type: DataTypes.STRING(150)
        },
        image: {
            type: DataTypes.STRING(100)
        },
    }
    const User = sequelize.define(alias, cols, {
        tableName: "Users",
        timestamps: false,
    });

    User.associate = function(models){
        User.belongsToMany(models.Serial_Numbers, {
            as: "Products",
            through: "Sale", 
            foreignKey: "id_user", 
            otherKey: "id_serial_number", 
            timesTamp: false
        })
}
return User
}