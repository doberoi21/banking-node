const express = require("express");
const cors = require("cors");
const mongodb = require("./db");
const path = require("path");
const Users = require("./models/user");
const Transactions = require("./models/transactions");

mongodb();
const app = express();

app.use(cors());
app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: true }));

app.get("/api/v1/users", async (req, res) => {
  const users = await Users.find();
  res.send(users);
});

app.get("/api/v1/transactions", async (req, res) => {
  const transactions = await Transactions.find();
  res.send(transactions);
});

app.post("/api/v1/transfer", async (req, res) => {
  try {
    const { fromAccount, fromId, toAccount, toId, amount } = req.body;
    if (!fromId || !toId || !fromAccount || !toAccount || !amount) {
      return res.status(400).send({ message: "Fields cannot be empty" });
    }
    let fromUser = await Users.findOne({ _id: fromId });
    if (fromUser.accNo != fromAccount)
      return res
        .status(400)
        .send({ message: "User Id and Account Numbers of sender don't match" });

    let toUser = await Users.findOne({ _id: toId });
    if (toUser.accNo != toAccount)
      return res.status(400).send({
        message: "User Id and Account Numbers of recepient don't match",
      });

    if (Number(fromUser.balance) < Number(amount))
      return res.status(400).send({ message: "Insufficient Balance" });

    fromUser.balance = Number(fromUser.balance) - Number(amount);
    toUser.balance = Number(toUser.balance) + Number(amount);

    const transaction = await Transactions.create({
      fromAcc: fromAccount,
      toAcc: toAccount,
      amount: amount,
    });

    transaction.save();
    fromUser.save();
    toUser.save();
    res.status(201).send({ success: "true" });
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: "Invalid Format" });
  }
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
