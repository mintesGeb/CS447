var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.json({ status: "success" });
});
router.get("/:id", (res, req) => {});
router.post("/", (res, req) => {});
router.put("/:id", (res, req) => {});
router.delete("/:id", (res, req) => {});

module.exports = router;
