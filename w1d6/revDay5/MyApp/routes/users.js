const express = require("express");
const router = express.Router();
const fs = require("fs");
/* GET users listing. */
router.get("/", function (req, res) {
  const readUsers = fs.readFileSync("./users.txt", "utf-8");
  const totalUsersList = readUsers.split("\n");
  console.log(totalUsersList);

  totalUsersList.forEach((user) => {
    res.write(user + "\n");
  });

  res.end();
});

router.post("/", (req, res) => {
  const readUsers = fs.readFileSync("./users.txt", "utf-8");

  const totalUsersList = readUsers.split("\n");

  const parsedArr = [];
  totalUsersList.forEach((user) => {
    if (user) {
      const newObj = {};
      const parsed = JSON.parse(user);
      parsedArr.push(parsed);
    }
  });
  console.log(parsedArr);
  const filtered = parsedArr.filter((user) => user.id == req.body.id);

  if (filtered.length == 0) {
    const writeUsersStream = fs.createWriteStream("./users.txt", {
      flags: "a",
    });

    writeUsersStream.write(JSON.stringify(req.body) + "\n");
  } else {
    res.write("Duplicate ID: please try again\n");
  }
  res.end("Done");
});

module.exports = router;
