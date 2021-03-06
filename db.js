const mongoose = require("mongoose");

const dbUrl =
  "mongodb+srv://admin:mPPbX1qykmBgckVw@cluster0.dg8ze.mongodb.net/bank?retryWrites=true&w=majority";

const connectDb = async () => {
  try {
    await mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
    console.log("database running.....");
  } catch (err) {
    console.log(err.message, "cann't connect to database");
    process.exit(1);
  }
};

mongoose.set("useFindAndModify", false);

module.exports = connectDb;
