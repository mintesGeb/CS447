var express = require("express");
var router = express.Router();
const fs = require("fs");

/* GET users listing. */
router.get("/", function (req, res, next) {
  const readable = fs.readFileSync("./users.txt", "utf-8");
  res.write(readable);
  res.end();
});
router.post("/", (req, res) => {
  let toWrite = req.body;
  console.log(JSON.stringify(toWrite));
  const write = fs.writeFile(
    "./users.txt",
    `${JSON.stringify(toWrite)}`,
    (err, data) => {
      if (err) throw err;
      console.log("done");
    }
  );
  res.write("thanks");
  res.end();
});

module.exports = router;
