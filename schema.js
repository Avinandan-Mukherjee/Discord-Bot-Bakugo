const mongo = require("mongoose");

module.exports = mongo.model(
  'coins',

  new mongo.Schema({
    id: String,
    coins: Number
  })
)