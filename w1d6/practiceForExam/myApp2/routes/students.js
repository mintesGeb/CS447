const express = require("express");
const router = express.Router();
const fs = require("fs");

router.get("/", (req, res) => {
  console.log(req.params);
  console.log(req.query);
  res.json({ stuGet: 3 });
});
router.get("/:major", (req, res) => {
  console.log(req.params);
  console.log(req.query);
  res.json({ 3: 3 });
});
router.post("/", (req, res) => {
  console.log(req.body);
  res.json({ 4: 4 });
});

module.exports = router;
