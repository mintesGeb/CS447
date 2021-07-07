var express = require("express");
var router = express.Router();
const fs = require("fs");
const getMyArray = require("../modules/myModule.js");
/* GET users listing. */
router.get("/", function (req, res, next) {
  const readProducts = fs.readFileSync("./products.txt", "utf-8");
  console.log(getMyArray(readProducts));

  res.json({ status: "success", data: getMyArray(readProducts) });
});
router.get("/:id", function (req, res, next) {
  res.json({ status: "success", method: "GET with param" });
});
router.post("/", function (req, res, next) {
  const readProd = fs.readFileSync("./products.txt", "utf-8");
  const writeProd = fs.createWriteStream("./products.txt", { flags: "a" });

  const myNewArr = getMyArray(readProd);
  const filtered = myNewArr.filter((prod) => prod.id == req.body.id);
  console.log(filtered);
  if (filtered.length > 0) {
    res.json({ status: "fail", msg: "Product already exists" });
  } else {
    writeProd.write(
      req.body.id + "-" + req.body.name + "-" + req.body.price + "\n"
    );
    res.json({ status: "success", msg: "Product added to list" });
  }
});
router.put("/:id", function (req, res, next) {
  res.json({ status: "success", method: "PUT" });
});
router.delete("/:id", function (req, res, next) {
  res.json({ status: "success", method: "Delete" });
});
module.exports = router;
