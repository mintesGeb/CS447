const express = require("express");
const router = express.Router();
const fs = require("fs");

router.get("/", (req, res) => {
  let method = req.method;
  res.json({ 1: 1 });
});
router.post("/", (req, res) => {
  let method = req.method;

  res.json({ 2: 2 });
});

module.exports = router;
