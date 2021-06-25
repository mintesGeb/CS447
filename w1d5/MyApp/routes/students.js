const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log(req.query);
  const stuData = {
    id: 001,
    name: "mintes",
  };
  res.json(stuData);
});

module.exports = router;
