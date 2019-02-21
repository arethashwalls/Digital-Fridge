var db = require("../models");

module.exports = function(app) {
  // Get list of users for login page
  app.get("/", function(req, res) {
    db.User.findAll({ attribute: ["username"] }).then(function(data) {
      var obj = {
        usernames: data
      };

      res.render("login", obj);
    });
  });

  app.get("/api/:userid/shoppinglist", function(req, res) {
    db.Ingredient.findAll({
      where: { userId: req.params.userid },
      include: [db.User]
    }).then(function(data) {
      var obj = {
        ingredients: data
      };

      res.render("shopping_list", obj);
    });
  });

  // Renders list with ingredients
  // app.get("/api/:userID/ingredients", function(req, res) {
  //   db.Ingredients.findAll({
  //     where: {userId: req.params.userID},
  //     include: [db.User]
  //   }).then(function(data) {
  //     var obj = {
  //       ingredients: data
  //     };

  //     res.render("shopping_list", obj);
  //     console.log(obj);
  //   });
  // });
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
  app.get("/", function(req, res) {
    res.render("shoping");
  });
  // // Render 404 page for any unmatched routes
  // app.get("*", function(req, res) {
  //   res.render("404");
  // });
};
