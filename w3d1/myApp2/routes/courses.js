var express = require("express");
var router = express.Router();
const fs = require("fs");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.json({ status: "success" });
});
router.get("/:id", (res, req) => {});

router.post("/", (res, req) => {
  // const writeCourses = fs.createWriteStream("./courses.txt");

  // writeCourses.write(JSON.stringify(req.body));
  res.json({ status: "success" });

  // res.json({ status: "fail" });
});

router.put("/:id", (res, req) => {});
router.delete("/:id", (res, req) => {});

module.exports = router;
