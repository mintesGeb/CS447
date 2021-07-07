var express = require("express");
var router = express.Router();
const fs = require("fs");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.json({ status: "success" });
});
router.get("/:id", (res, req) => {});
router.post("/", (res, req) => {
  const writeProd = fs.createWriteStream("./products.txt");
  console.log(req.body);
  writeProd.write(JSON.stringify(req.body));
  res.json({ status: "success" });
});
router.put("/:id", (res, req) => {});
router.delete("/:id", (res, req) => {});

module.exports = router;
