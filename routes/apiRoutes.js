var db = require("../models");

module.exports = function (app) {
  // Get all examples
  app.post("/api/examples", function (req, res) {
    db.Example.create(req.body).then(function (dbExample) {
      res.json(dbExample);
    });
  });
  app.get("/api/use", function (req, res) {
    db.User.findAll({
      attributes: ["username"]
    }).then(function (data) {
      res.json(data);
    });
  });
  app.get("/api/shoping", function (req, res) {
    db.User.findAll({
      attributes: ["user"]
    }).then(function (data) {
      res.json(data);
    });
  });

  // Create a new example
  app.post("/api/", function (req, res) {
    db.ingredient.create(req.body).then(function (dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function (req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function (dbExample) {
      res.json(dbExample);
    });
  });
};
