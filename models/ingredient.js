module.exports = (sequelize, DataTypes) => {
    var Example = sequelize.define("Example", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });
    return Example;
};
