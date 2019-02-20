const accountSid = process.env.SMS_SID;
const authToken = process.env.SMS_TOKEN;
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
