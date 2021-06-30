var express = require("express");
var router = express.Router();
const fs = require("fs");

/* GET users listing. */
router.get("/", function (req, res) {
  const fname = req.query.fname;
  const lname = req.query.lname;

  if (req.query.fname || req.query.lname) {
    let userObj = { name: fname, lastname: lname, zip: "52556" };
    res.write(JSON.stringify(userObj));
  } else {
    res.write("--enter fname or lname to search--" + "\n");
    const readUsers = fs.readFileSync("./users.txt", "utf-8");
    const totalUsersList = readUsers.split("\n");
    totalUsersList.forEach((user) => {
      res.write(user + "\n");
    });
  }
  res.end();
});
router.post("/", (req, res) => {
  const writeUser = fs.createWriteStream("./users.txt", { flags: "a" });

  let userToWrite = JSON.stringify(req.body);
  writeUser.write(userToWrite + "\n");
  res.end("thanks");
});
module.exports = router;
