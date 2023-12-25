const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let ExpoTokenSchema = new Schema({
  tokens: { type: String, trim: true },
});

module.exports = mongoose.model("ExpoToken", ExpoTokenSchema);
