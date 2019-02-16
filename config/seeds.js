var db = require("../models");

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
  quantityNeeded: 2,
  UserId: 1
});
db.Ingredient.create({
  name: "pizza",
  quantityOwned: 2,
  quantityNeeded: 0,
  UserId: 1
});
db.Ingredient.create({
  name: "cookies",
  quantityOwned: 5,
  quantityNeeded: 2,
  UserId: 2
});
db.Ingredient.create({
  name: "salmon",
  quantityOwned: 2,
  quantityNeeded: 1,
  UserId: 2
});
db.Ingredient.create({
  name: "milk",
  quantityOwned: 2,
  quantityNeeded: 0,
  UserId: 3
});
