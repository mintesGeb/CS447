const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ method: req.method, url: req.url });
});
router.post("/", (req, res) => {
  res.json({ method: req.method, url: req.url });
});

module.exports = router;
