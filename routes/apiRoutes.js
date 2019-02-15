var db = require("../models");

module.exports = function (app) {
  // Get all examples
  app.get("/api/users", function (req, res) {
    db.User.findAll({
      attributes: ["username"]
    }).then(function (data) {
      res.json(data);
    });
  });
  // find all ingredients for all users
  // app.get("/api/ingredients", function (req, res) {
  //   db.Ingredient.findAll({
  //     // include: [db.User]
  //   }).then(function (data) {
  //     res.json(data);
  //   });
  // });

  // find all ingredients for a certain user 
  app.get("/api/ingredients", function (req, res) {
    db.Ingredient.findAll({
      where: {
        userId: 2
      },
      include: [db.User]
    }).then(function (data) {
      for (var i = 0; i < data.length; i++) {
        console.log(
          data[i].dataValues.name + " and user: " + data[i].dataValues.User.dataValues.username
        );
      }
    });
  })

  // This code was checking to see if the right user was being assign to the ingredients
  //   db.Ingredient.findAll({
  //     include: [db.User]
  //   }).then(function (result) {
  //     console.log(result[0].dataValues.User);
  //   });
  // });

  // // Create a new example
  // app.post("/api/examples", function(req, res) {
  //   db.Example.create(req.body).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });

  // // Delete an example by id
  // app.delete("/api/examples/:id", function(req, res) {
  //   db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });
};