var fs = require("fs");
var express = require("express");
var router = express.Router();

/* GET users listing. */
// router.get("/", function (req, res, next) {
//   res.send("respond with a resource");
// });
router.get("/", function (req, res) {
  const readable = fs.readFileSync("./re.txt", "utf-8");

  res.write(readable);
  res.end();
});

router.post("/", (req, res) => {
  console.log(req.body);
  const writable = fs.createWriteStream("./re2.txt");
  writable.write(req.body);
  res.end("thanks");
});

module.exports = router;
