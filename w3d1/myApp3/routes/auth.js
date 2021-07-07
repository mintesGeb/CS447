var express = require("express");
var router = express.Router();
const jwtManager = require("../jwt/jwtManager.js");

/* GET users listing. */

router.post("/", function (req, res, next) {
  const username = "mintes";
  const password = "123456";

  if (req.body.username == username && req.body.password == password) {
    let data = {};
    data.id = 1;
    data.username = username;
    data.createdAt = Date.now();
    let token = jwtManager.generate(data);
    res.json({ token });
  } else {
    res.json({ status: "fail", msg: "wrong username or password" });
  }
});

module.exports = router;
