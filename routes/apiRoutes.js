var db = require("../models");

module.exports = function(app) {
  app.get("/api/users", function(req, res) {
    db.User.findAll({
      attributes: ["username"]
    }).then(function(data) {
      res.json(data);
    });
  });

  // // Create a new example
  // app.post("/api/examples", function(req, res) {
  //   db.Example.create(req.body).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });

  app.put("api/ingredients/owned/:id", function(req, res) {
    db.Ingredient.update(
      { quantityOwned: req.body.quantityOwned },
      { where: { id: req.params.id } }
    ).then(function(response) {
      res.json(response);
    });
  });

  app.put("api/ingredients/needed/:id", function(req, res) {
    db.Ingredient.update(
      { quantityNeeded: req.body.quantityNeeded },
      { where: { id: req.params.id } }
    ).then(function(response) {
      res.json(response);
    });
  });

  app.delete("api/ingredients/:id", function(req, res) {
    db.Ingredient.destroy({ where: { id: req.params.id } }).then(function(response) {
      res.json(response);
    });
  });
};
