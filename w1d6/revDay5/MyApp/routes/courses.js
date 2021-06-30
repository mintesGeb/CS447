const express = require("express");
const router = express.Router();
const fs = require("fs");

router.get("/:major", (req, res) => {
  console.log(req.params.major);
  const readCourses = fs.readFileSync("./courses.txt", "utf-8");
  const courseListJson = readCourses.split("\n");
  console.log(courseListJson);
  courseListJson.forEach((course) => {
    res.write(course + "\n");
  });
  res.end();
});
router.post("/:major", (req, res) => {
  console.log(req.body);
  console.log(req.params.major);
  console.log(req.query);
  const writeCoursesStream = fs.createWriteStream("./courses.txt", {
    flags: "a",
  });
  writeCoursesStream.write("\n" + JSON.stringify(req.body));

  res.json({ method: "POST" });
});

module.exports = router;
