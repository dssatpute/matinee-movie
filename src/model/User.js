const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const userSchema = new mongoose.Schema(
  {
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    firstname: {
      type: String,
      required: [true, "Please provide the user name"],
    },
    lastname: {
      type: String,
      required: [true, "Please provide the user name"],
    },
    username: {
      type: String,
    },
    email: {
      type: String,
      required: [true, "Please enter the email address"],
    },
    hashed_password:
    {
      type:String,
      required:[true]
    },
    imageUrl:
    {
      type:String
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("users", userSchema);
