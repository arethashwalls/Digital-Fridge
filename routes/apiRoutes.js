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


  // create route for the inventory via shopping list
  app.post("/api/ingredients", function (req, res) {
    db.Ingredient.create(req.body).then(function (data) {
      res.json(data);
    });
  });

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