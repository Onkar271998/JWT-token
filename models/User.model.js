const { Schema, model } = require("mongoose");

const User = new Schema({
  email: String,
  password: String,
  age: Number,
});
const UserModel = model("user", User);
module.exports = UserModel;
