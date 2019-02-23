var db = require("../models");
var Sequelize = require("sequelize");
var Op = Sequelize.Op;

module.exports = function(app) {
// GET Routs for testing: ***************************************//
  //Find all users:
  app.get("/api/users", function(req, res) {
    db.User.findAll({
      attributes: ["username"]
    }).then(function(data) {
      res.json(data);
    });
  });
   //Find all owned ingredients for a certain user
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
  //Find all needed ingredients for a given user:
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

// POST routes *************************************************//
  //Add a new user:
  app.post("/api/users", function(req, res) {
    db.User.findOrCreate({
      where: {
        username: req.body.username
      }
    }).then(function(data) {
      res.json(data);
    });
  });
  //Add a new ingredient:
  app.post("/api/:userid/ingredients", function(req, res) {
    //First, check whether an identical ingredient exists:
    db.Ingredient.findOne({
      where: {
        name: req.body.name,
        UserId: req.params.userid
      }
    }).then(function(data) {
      //If a duplicate exists:
      if (data) {
        //Update the existing ingredient:
        data.update({
          quantityNeeded:
            parseInt(data.quantityNeeded) + parseInt(req.body.quantityNeeded)
        });
      //Else create a new one:
      } else {
        db.Ingredient.create({
          name: req.body.name,
          quantityNeeded: req.body.quantityNeeded,
          UserId: req.params.userid
        });
      }
      res.json(data);
    });
  });

// PUT routes **************************************************//
  //Update quantity owned
  app.put("/api/:userid/ingredients", function(req, res) {
    //Find the ingredient's current state:
    db.Ingredient.findOne({
      where: {
        id: req.body.id
      }
    }).then(function(data) {
      //Grab current values:
      const currentOwned = parseInt(data.quantityOwned);
      const currentNeeded = parseInt(data.quantityNeeded);
      //Update the ingredient based on the values:
      data.update({
        quantityOwned: currentOwned + currentNeeded,
        quantityNeeded: 0
      });
      res.json(data);
    });
  });
  //Set quantityNeeded to 0 for ingredients that need to be removed from the shopping list:
  app.put("/api/:userid/ingredients/:ingredientid", function(req, res) {
    db.Ingredient.update({
      quantityNeeded: 0
    }, {
      where: {
        id: req.params.ingredientid
      }
    }).then(function(data) {
      res.json(data);
    });
  });

// DELETE route ************************************************//
  app.delete("/api/:userid/ingredients/:ingredientid", function(req, res) {
    db.Ingredient.destroy({
      where: {
        id: req.params.ingredientid
      }
    }).then(function(response) {
      res.json(response);
    });
  });
};
