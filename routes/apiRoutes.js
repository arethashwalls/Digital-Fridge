var db = require("../models");

module.exports = function (app) {
  // Get all examples
<<<<<<< HEAD
  app.get("/api/examples", function (req, res) {
    db.Example.findAll({}).then(function (dbExamples) {
      res.json(dbExamples);
=======
  app.get("/api/users", function(req, res) {
    db.User.findAll({
      attributes: ["username"]
    }).then(function(data) {
      res.json(data);
>>>>>>> master
    });
    // db.Ingredient.findAll({
    //   include: [db.User]
    // }).then(function (result) {
    //   console.log(result);
    // });
  });

<<<<<<< HEAD
  // Create a new example
  app.post("/api/examples", function (req, res) {
    db.Example.create(req.body).then(function (dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function (req, res) {
    db.Example.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbExample) {
      res.json(dbExample);
    });
  });
};
=======
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
>>>>>>> master
