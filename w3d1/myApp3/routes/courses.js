var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.json({ status: "success", method: "GET" });
});
router.get("/:id", function (req, res, next) {
  res.json({ status: "success", method: "GET with param" });
});
router.post("/", function (req, res, next) {
  res.json({ status: "success", method: "POST" });
});
router.put("/:id", function (req, res, next) {
  res.json({ status: "success", method: "PUT" });
});
router.delete("/:id", function (req, res, next) {
  res.json({ status: "success", method: "Delete" });
});

module.exports = router;
