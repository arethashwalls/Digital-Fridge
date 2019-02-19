const accountSid = "ACdb2882f4576a912b65f11e5507412e5a";
const authToken = "8d2a712fe7bb963cdbab9c1072aafd39";
const client = require("twilio")(accountSid, authToken);

module.exports = function(app) {
  app.post("/api/sms", function(req, res) {
    let textBody = "\nYour DigitalFridge Shopping List:\n";
    req.body.ingredients.forEach(function(ingredient) {
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
  });
};
