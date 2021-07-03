var express = require("express");
var router = express.Router();
const fs = require("fs");
const { route } = require(".");
const strToArrofObj = require("./myModule");
/* GET users listing. */

router.get("/", function (req, res, next) {
  res.json({ status: "enter Resource" });
});

module.exports = router;
