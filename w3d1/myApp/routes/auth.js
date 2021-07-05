const express = require("express");
const router = express.Router();
const jwtManager = require("../jwt/jwtManager.js");

router.post("/", (res, req) => {
  //   let email = "mintes4@gmail.com";
  //   let password = "123456";
  //   console.log(req.body);
  //   if (req.body.email == email && req.body.password == password) {
  //     const data = {};
  //     data.id = 1;
  //     data.email = email;
  //     data.createdAt = Date.now();
  //     console.log(data);
  //     const token = jwtManager(generate(data));
  //     res.json({ status: "success", result: token });
  //   } else {
  //     res.json({ status: "invalid_user" });
  //   }
});

module.exports = router;
