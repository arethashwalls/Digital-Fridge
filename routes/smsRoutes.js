const accountSid = process.env.SMS_SID;
const authToken = process.env.SMS_TOKEN;
const client = require("twilio")(accountSid, authToken);
const db = require("../models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

module.exports = function(app) {
  app.post("/api/sms", function(req, res) {
    db.Ingredient.findAll({
      where: {
        userId: req.body.userid,
        quantityNeeded: {
          [Op.gt]: 0
        }
      },
      attributes: ["name", "quantityNeeded"]
    }).then(function(data) {
      const ingredients = data.map(datum => datum.dataValues);
      let textBody = "\nYour DigitalFridge Shopping List:\n";
      ingredients.forEach(function(ingredient) {
        textBody += `\n* ${ingredient.quantityNeeded} ${ingredient.name}(s)`;
      });
      textBody += "\n\nHappy Shopping! 😋";
      client.messages
        .create({
          body: textBody,
          from: "+15208294463",
          to: "+1" + req.body.recipient
        })
        .then(function(message) {
          res.json(message);
        });
      res.json(data);
    });
  });

  //SMS ROUTE FOR TESTING -- DELETE LATER
  app.get("/:userid/smsform", function(req, res) {
    res.render("testsms", { userid: req.params.userid });
  });
};
