var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/:major", (req, res) => {
  const courseData = {
    id: 001,
    name: "oop",
  };
  //   console.log(req.params.major);
  //   console.log(req.query);
  res.json(courseData);
});
router.post("/:major", (req, res) => {
  console.log(req.body);
  res.json({ fName: "mintes" });
});

module.exports = router;
