module.exports = (sequelize, DataTypes) => {
    let alias = 'Sales';
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        id_user: {
            type: DataTypes.INTEGER
        },
        id_serialNumber: {
            type: DataTypes.INTEGER
        },
        
    }
    const Sale = sequelize.define(alias, cols);
    return Sale
}