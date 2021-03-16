const mongoose = require("mongoose");

const transactionSchema = mongoose.Schema({
  fromAcc: Number,
  toAcc: Number,
  amount: Number,
});

module.exports = mongoose.model("transactions", transactionSchema);
