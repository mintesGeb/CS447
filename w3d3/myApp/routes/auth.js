var express = require("express");
var router = express.Router();
const jwtManager = require("../jwt/jwtManager.js");

/* GET users listing. */
router.post("/", function (req, res, next) {
  const username = "mintes4";
  const password = "123456";
  if (req.body.username == username && req.body.password == password) {
    let data = {};
    data.createdAt = Date.now();
    data.username = username;
    let token = jwtManager.generate(data);
    res.json({ status: "success", token });
  } else {
    res.json({ status: "fail", msg: "username or password is wrong" });
  }
});

module.exports = router;
