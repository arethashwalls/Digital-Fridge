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

  app.delete("api/ingredients/:id", function(req, res) {
    db.Ingredient.destroy({ where: { id: req.params.id } }).then(function(response) {
      res.json(response);
    });
  });
};
