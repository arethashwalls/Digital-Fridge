module.exports = (sequelize, DataTypes) => {
    var User = sequelize.define("Example", {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isAlphanumeric: true
            }
        }
    });
    User.hasMany(models.Ingredient, {
        onDelete: "cascade"
      });
    return User;
};
