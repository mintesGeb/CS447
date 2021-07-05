const express = require("express");
const router = express.Router();
const fs = require("fs");

router.get("/", (res, req) => {
  const readProd = fs.readFileSync("./products.txt", "utf-8");
  res.json({ status: "success", data: readProd });
});
router.get("/:id", (res, req) => {});
router.post("/", (res, req) => {});
router.put("/:id", (res, req) => {});
router.delete("/:id", (res, req) => {});

module.exports = router;
