module.exports = (sequelize, DataTypes) => {
    let alias = 'Product';
    let cols = {
        id : {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        name : {
            type: DataTypes.STRING(50)
        },
        continent: {
            type: DataTypes.STRING(50)
        },
        description: {
            type: DataTypes.STRING(1500)
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
        // id_serial_number: {
        //     type: DataTypes.INTEGER
        // }
    }
    const Product = sequelize.define(alias, cols,
        {
            tableName : "Products",
            timestamps: false,
        });

    Product.associate = function(models){
        Product.hasMany (models.Serial_Numbers, {
            foreignkey: "id_product" ,
            as : "Serial_number"
        })
}
return Product

}