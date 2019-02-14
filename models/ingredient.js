module.exports = (sequelize, DataTypes) => {
    var Ingredient = sequelize.define("Example", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        quantityOwned: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        quantityNeeded: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        }
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
