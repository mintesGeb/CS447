const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ method: "get" });
});
router.post("/", (req, res) => {
  console.log(req.body);
  res.json({ method: "Post" });
});

module.exports = router;
