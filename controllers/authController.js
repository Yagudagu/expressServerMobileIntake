const jwt = require("jsonwebtoken");

const User2 = require("../models/userModel");

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const decodeToken = (header) => {
  console.log("in decodeToken");
  if (header && header.startsWith("Bearer")) {
    token = header.split(" ")[1];
    console.log(token);
  }

  // Check if not token
  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  return jwt.verify(token, process.env.JWT_SECRET);
};

exports.newUser = async (req, res) => {
  try {
    const user = await User2.create({
      username: req.body.username,
      password: req.body.password,
      passwordConfirm: req.body.passwordConfirm,
    });

    res.status(200).json({
      status: "success",
      message: "A new user has been created",
      data: {
        user,
      },
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.login = async (req, res, next) => {
  const { username, password } = req.body;

  // 1. Check if username and password exist
  if (!username || !password) {
    res.status(400).json({ message: "Provide username and password" });
    return;
  }

  // 2. Check if username and password combination is correct
  const user = await User2.findOne({ username }).select("+password");

  if (!user || !(await user.correctPassword(password, user.password))) {
    res.status(401).json({ message: "Incorrect username or password" });
    return;
  }

  // 3. If everything ok, send JWT
  const token = signToken(user._id);

  res.status(200).json({
    status: "success",
    token,
  });
};

exports.checkToken = async (req, res) => {
  console.log("started checktoken");
  try {
    // Verify token
    const decoded = await decodeToken(req.headers.authorization);
    console.log(decoded);
    decoded && res.status(201).json({ message: "Token is valid" });
  } catch (err) {
    res.status(401).json({ message: "Token is not valid" });
  }
};

exports.protect = async (req, res, next) => {
  try {
    // Verify token
    const decoded = await decodeToken(req.headers.authorization);

    console.log(decoded);

    decoded && next();
  } catch (err) {
    res.status(401).json({ message: "Token is not valid" });
  }
};
