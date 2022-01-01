const User = require("../model/User");
const bcrypt = require("bcryptjs");
const jwt=require('jsonwebtoken')

exports.signin = async (req, res) => {
  const { email, password } = req.body;
  if (await User.findOne({ email })) {
    const user = await User.findOne({ email });
    if (user.role != "admin") {
      res.status(400).json({ message: "Unauthorized route" });
    } else {
      if (await bcrypt.compare(password, user.hashed_password)) {

        const id = user._id;
        const token = jwt.sign(
          { id, username: user.username },
          process.env.JWT_SECRET,
          {
            expiresIn: 60 * 60 * 24,
          }
        );
        req.session.token = token;
        res.status(200).json({ message: "Authenticated" });
      } else {
        res.status(400).json({ message: "Not Authneticated" });
      }
    }
  } else {
    res.status(400).json({ message: "No such user found" });
  }
};
