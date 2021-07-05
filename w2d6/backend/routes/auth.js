const express = require("express");
const router = express.Router();

const jwtManager = require("../jwt/jwtManager.js");

router.post("/", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  if (email === "mintes4@gmail.com" && password === "123456") {
    const data = {};
    data.id = 1;
    data.email = "mintes4@gmail.com";
    data.createdAt = Date.now();
    const token = jwtManager.generate(data);
    res.json({ data: token, status: "success" });
  } else {
    res.json({ status: "invalid_user" });
  }
});

module.exports = router;
