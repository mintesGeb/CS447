const jwt = require("jsonwebtoken");

const User = require("../models/user");

const secret = "topSecret";

exports.login = async (req, res, next) => {
  try {
    const user = await new User(
      null,
      req.body.username,
      req.body.password,
      null
    ).login();
    if (user) {
      const token = jwt.sign(
        { username: user.username, role: user.role },
        secret
      );
      res.json({ token });
    } else {
      res.status(200).json({ error: "invalid username or password" });
    }
  } catch (error) {
    next(error);
  }
};

exports.authorize = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, secret, (err, user) => {
      if (err) {
        return res.status(403).json({ error: "forbidden" });
      }
      req.user = user;
    });
  } else {
    res.status(401).json({ error: "unauthorized" });
  }
};

exports.authorizeAdmin = (req, res, next) => {
  if (req.body.role === "admin") {
    next();
  } else {
    return res.status(403).json({ error: "forbidden" });
  }
};
