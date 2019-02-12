module.exports = (sequelize, DataTypes) => {
  var Example = sequelize.define("Example", {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isAlphanumeric: true
        }
    }
  });
  return Example;
};
