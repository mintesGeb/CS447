var express = require("express");
var router = express.Router();
const fs = require("fs");

/* GET users listing. */
router.get("/", function (req, res, next) {
  const readUser = fs.readFileSync("./user.txt", "utf-8");
  readUser.split("\n").forEach((user) => {
    res.write(`${user}\n`);
  });
  res.json();
});
router.get("/:id", function (req, res, next) {
  const readUser = fs.readFileSync("./user.txt", "utf-8");
  readUser.split("\n").forEach((user) => {
    if (JSON.parse(user).id === req.params.id) {
      res.write(user + "\n");
    }
  });

  res.json();
});

router.post("/", function (req, res, next) {
  const writeUser = fs.createWriteStream("./user.txt", { flags: "a" });
  writeUser.write(JSON.stringify(req.body) + "\n");
  res.json("Done");
});

router.put("/:id", function (req, res, next) {
  const readUser = fs.readFileSync("./user.txt", "utf-8");
  const writeUser = fs.createWriteStream("./user.txt");
  let usersList = [];

  readUser.split("\n").forEach((user) => {
    let userObj = JSON.parse(user);

    if (userObj.id === req.params.id) {
      userObj = req.body;
    }

    writeUser.write(JSON.stringify(userObj) + "\n");
    usersList.push(userObj);
  });
  res.end("updated");
});

router.delete("/:id", function (req, res, next) {
  const readUsers = fs.readFileSync("./user.txt", "utf-8");

  const writeUsers = fs.createWriteStream("./user.txt");
  readUsers.split("\n").forEach((user) => {
    const userObj = JSON.parse(user);

    if (userObj.id !== req.params.id) {
      writeUsers.write(JSON.stringify(userObj) + "\n");
    }
  });
  res.end("deleted");
});

module.exports = router;
