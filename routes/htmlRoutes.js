var db = require("../models");
var Sequelize = require("sequelize");
var Op = Sequelize.Op;

module.exports = function(app) {
  app.get("/", function(req, res) {
    db.User.findAll({ attribute: ["username"] }).then(function(data) {
      var obj = {
        usernames: data
      };

      res.render("login", obj);
    });
  });
  // Load index page
  // app.get("/", function(req, res) {
  //   db.Example.findAll({}).then(function(dbExamples) {
  //     res.render("index", {
  //       msg: "Welcome!",
  //       examples: dbExamples
  //     });
  //   });
  // });

  // // Load example page and pass in an example by id
  // app.get("/example/:id", function(req, res) {
  //   db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.render("example", {
  //       example: dbExample
  //     });
  //   });
  // });
  app.get("/:userid/ingredients", function(req, res) {
    db.Ingredient.findAll({
      where: {
        userId: req.params.userid,
        quantityOwned: {
          [Op.gt]: 0
        }
      },
      include: [db.User]
    }).then(function(data) {
      var obj = {
        ingredient: data
      };
      res.render("inventory", obj);
    });
  });
  // // Render 404 page for any unmatched routes
  // app.get("*", function(req, res) {
  //   res.render("404");
  // });
};
