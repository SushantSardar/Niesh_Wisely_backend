const mongoose = require("mongoose");
require("dotenv").config();

const mongo_uri = process.env.MONGODB_URI;

const connectDatabase = () => {
  mongoose.set("strictQuery", false);
  return mongoose
    .connect(mongo_uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log("database connected successfully");
    });
};

module.exports = connectDatabase;
