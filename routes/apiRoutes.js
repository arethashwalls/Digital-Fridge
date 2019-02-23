var db = require("../models");
var Sequelize = require("sequelize");
var Op = Sequelize.Op;

module.exports = function(app) {
  app.get("/api/users", function(req, res) {
    db.User.findAll({
      attributes: ["username"]
    }).then(function(data) {
      res.json(data);
    });
  });
  app.post("/api/users", function(req, res) {
    db.User.findOrCreate({
      where: {
        username: req.body.username
      }
    }).then(function(data) {
      res.json(data);
    });
  });

  // find all ingredients for a certain user
  app.get("/api/:userid/ingredients", function(req, res) {
    db.Ingredient.findAll({
      where: {
        userId: req.params.userid,
        quantityOwned: { [Op.gt]: 0 }
      },
      include: [db.User]
    }).then(function(data) {
      res.json(data);
    });
  });

  app.get("/api/:userid/ingredients/shoppinglist", function(req, res) {
    db.Ingredient.findAll({
      where: {
        userId: req.params.userid,
        quantityNeeded: {
          [Op.gt]: 0
        }
      },
      include: [db.User]
    }).then(function(data) {
      res.json(data);
    });
  });

  app.post("/api/:userid/ingredients", function(req, res) {
    console.log(req.params.userid);
    db.Ingredient.create({
      name: req.body.name,
      quantityNeeded: req.body.quantityNeeded,
      UserId: req.params.userid
    }).then(function(data) {
      res.json(data);
    });
  });

  // update quantity owned
  app.put("/api/:userid/ingredients", function(req, res) {
    db.Ingredient.update(
      {
        quantityOwned: Sequelize.col("quantityNeeded"),
        quantityNeeded: 0
      },
      {
        where: {
          id: req.body.id
        }
      }
    ).then(function(data) {
      res.json(data);
    });
  });

  // delete route
  app.delete("/api/:userid/ingredients/:ingredientid", function(req, res) {
    // console.log(req.params.ingredientid);
    db.Ingredient.destroy({
      where: {
        name: "pizza"
      }
    }).then(function(response) {
      res.json(response);
    });
  });
};
