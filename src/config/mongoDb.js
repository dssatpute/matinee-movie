const mongoose = require("mongoose");
require("dotenv").config({ path: "./src/.env" });

const connectDb = async () => {

  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log("Database connected");
};

module.exports = connectDb;
