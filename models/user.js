const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: String,
  balance: Number,
  accNo: { type: Number, unique: true },
});

module.exports = mongoose.model("user", userSchema);
