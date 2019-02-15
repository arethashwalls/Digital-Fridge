module.exports = (sequelize, DataTypes) => {
    var Ingredient = sequelize.define("Ingredient", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        quantityOwned: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        quantityNeeded: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        UserId: DataTypes.INTEGER
    }, {
        freezeTableName: true
    });
    Ingredient.associate = (models) => {
        Ingredient.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    // Ingredient.create({
    //     name: "tomato",
    //     quantityOwned: 10,
    //     quantityNeeded: 2,
    //     UserId: 1
    // });
    // Ingredient.create({
    //     name: "pizza",
    //     quantityOwned: 2,
    //     quantityNeeded: 0,
    //     UserId: 1
    // });
    // Ingredient.create({
    //     name: "cookies",
    //     quantityOwned: 5,
    //     quantityNeeded: 2,
    //     UserId: 2
    // });
    // Ingredient.create({
    //     name: "salmon",
    //     quantityOwned: 2,
    //     quantityNeeded: 1,
    //     UserId: 2
    // });
    // Ingredient.create({
    //     name: "milk",
    //     quantityOwned: 2,
    //     quantityNeeded: 0,
    //     UserId: 3
    // });


    return Ingredient;
};