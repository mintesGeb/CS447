var express = require("express");
var router = express.Router();
const jwtManager = require("../jwt/jwtManager.js");

/* GET users listing. */
router.post("/", function (req, res, next) {
  const email = "mintes4@gmail.com";
  const password = "123456";

  if (req.body.email === email && req.body.password === "123456") {
    let data = {};
    data.id = "1";
    data.email = email;
    data.createdAt = Date.now();
    const token = jwtManager.generate(data);
    res.json({ status: "success", data: token });
  } else {
    res.json({ status: "invalid-user" });
  }
});

module.exports = router;
