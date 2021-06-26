const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ id: 1 });
});
router.post("/", (req, res) => {
  res.json({ id: 3 });
});

module.exports = router;
