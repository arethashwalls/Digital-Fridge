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
        }
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
    
    return Ingredient;
};
