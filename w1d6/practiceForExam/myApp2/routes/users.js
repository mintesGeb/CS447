var express = require("express");
var router = express.Router();
const jsonList = require("./strToJsonArr");

const fs = require("fs");
const strToJsonArr = require("./strToJsonArr");
/* GET users listing. */
router.get("/", function (req, res) {
  const readUsers = fs.readFileSync("./users.txt", "utf-8");
  const usersList = jsonList(readUsers);
  usersList.forEach((user) => {
    res.write(JSON.stringify(user) + "\n");
  });
  res.end();
});
router.post("/", (req, res) => {
  const readUsers = fs.readFileSync("./users.txt", "utf-8");
  const usersList = jsonList(readUsers);
  const filtered = usersList.filter((user) => user.id == req.body.id);
  if (filtered.length > 0) {
    res.write("User Already exists\n");
  } else {
    const writeUser = fs.createWriteStream("./users.txt", { flags: "a" });
    writeUser.write(
      `${req.body.id}-${req.body.firstname}-${req.body.lastname}\n`
    );
    res.write("Added\n");
  }
  res.end("Done");
});

module.exports = router;
