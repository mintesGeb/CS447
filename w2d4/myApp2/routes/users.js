var express = require("express");
var router = express.Router();
const fs = require("fs");

/* GET users listing. */
router.get("/", function (req, res) {
  const readUsers = fs.readFileSync("./users.txt", "utf-8");
  const userList = [];
  readUsers.split("\n").forEach((user) => {
    const forObj = user.split("-");
    const obj = { id: forObj[0], firstname: forObj[1], lastname: forObj[2] };
    if (obj.id) {
      userList.push(obj);
    }
  });
  res.json({ status: "success", data: userList });
});
router.get("/:id", (req, res) => {
  const readUsers = fs.readFileSync("./users.txt", "utf-8");

  readUsers.split("\n").forEach((user) => {
    const forObj = user.split("-");
    const obj = { id: forObj[0], firstname: forObj[1], lastname: forObj[2] };
    if (obj.id) {
      if (obj.id === req.params.id) {
        res.json({ status: "success", data: obj });
      }
    }
  });
});
router.post("/", function (req, res) {
  const writeUsers = fs.createWriteStream("./users.txt", { flags: "a" });

  const readUsers = fs.readFileSync("./users.txt", "utf-8");
  const userList = [];
  readUsers.split("\n").forEach((user) => {
    const forObj = user.split("-");
    const obj = { id: forObj[0], firstname: forObj[1], lastname: forObj[2] };
    if (obj.id) {
      userList.push(obj);
    }
  });

  if (userList.filter((user) => user.id == req.body.id).length > 0) {
    res.json({ status: "fail", msg: "user id already exists" });
  } else {
    writeUsers.write(
      `${req.body.id}-${req.body.firstname}-${req.body.lastname}\n`
    );
    res.json({ status: "success" });
  }
});

router.delete("/:id", (req, res) => {
  const writeUsers = fs.createWriteStream("./users.txt");
  const readUsers = fs.readFileSync("./users.txt", "utf-8");
  const userList = [];
  readUsers.split("\n").forEach((user) => {
    const forObj = user.split("-");
    const obj = { id: forObj[0], firstname: forObj[1], lastname: forObj[2] };
    if (obj.id) {
      if (obj.id !== req.params.id) {
        userList.push(obj);
      }
    }
  });
  userList.forEach((user) => {
    writeUsers.write(`${user.id}-${user.firstname}-${user.lastname}\n`);
  });
  res.json({ status: "success" });
});

router.put("/:id", (req, res) => {
  const writeUsers = fs.createWriteStream("./users.txt");
  const readUsers = fs.readFileSync("./users.txt", "utf-8");
  const usersList = [];
  readUsers.split("\n").forEach((user) => {
    const forObj = user.split("-");
    const obj = { id: forObj[0], firstname: forObj[1], lastname: forObj[2] };
    if (obj.id) {
      if (obj.id == req.params.id) {
        usersList.push(req.body);
      } else {
        usersList.push(obj);
      }
    }
    console.log(usersList);
  });

  usersList.forEach((user) => {
    writeUsers.write(`${user.id}-${user.firstname}-${user.lastname}\n`);
  });
  res.json({ status: "success" });
});

module.exports = router;
