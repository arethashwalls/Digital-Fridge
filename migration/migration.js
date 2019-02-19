const db = require("../models");

const seeding = () => {
  db.User.findAll({}).then(res => {
    if (res.length === 0) {
      db.User.create({
        username: "John"
      });
      db.User.create({
        username: "Candi"
      });
      db.User.create({
        username: "David"
      });
      db.Ingredient.create({
        name: "tomato",
        quantityOwned: 10,
        quantityNeeded: 0,
        UserId: 1
      });
      db.Ingredient.create({
        name: "pizza",
        quantityOwned: 2,
        quantityNeeded: 0,
        UserId: 1
      });
      db.Ingredient.create({
        name: "onion",
        quantityOwned: 0,
        quantityNeeded: 1,
        UserId: 1
      });
      db.Ingredient.create({
        name: "cookies",
        quantityOwned: 5,
        quantityNeeded: 0,
        UserId: 2
      });
      db.Ingredient.create({
        name: "ice cream",
        quantityOwned: 1,
        quantityNeeded: 0,
        UserId: 2
      });
      db.Ingredient.create({
        name: "salmon",
        quantityOwned: 0,
        quantityNeeded: 1,
        UserId: 2
      });
      db.Ingredient.create({
        name: "potato",
        quantityOwned: 6,
        quantityNeeded: 0,
        UserId: 3
      });
      db.Ingredient.create({
        name: "milk",
        quantityOwned: 2,
        quantityNeeded: 0,
        UserId: 3
      });
      db.Ingredient.create({
        name: "beer",
        quantityOwned: 0,
        quantityNeeded: 6,
        UserId: 3
      });
    }
  });
};

module.exports = seeding;
