module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define(
    "User",
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isAlphanumeric: true
        }
      }
    },
    {
      freezeTableName: true
    }
  );

  User.associate = models => {
    User.hasMany(models.Ingredient, {
      onDelete: "cascade"
    });
  };
  return User;
};
