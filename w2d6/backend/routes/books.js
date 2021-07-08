var express = require("express");
var router = express.Router();
const fs = require("fs");
/* GET users listing. */

function parseData() {
  let arr = [];
  const readBooks = fs.readFileSync("./books.txt", "UTF-8");
  readBooks.split("\n").forEach((book) => {
    let forObj = book.split("-");
    let obj = { id: forObj[0], title: forObj[1], author: forObj[2] };
    arr.push(obj);
  });
  return arr;
}

router.get("/", function (req, res, next) {
  let data = parseData();
  res.json({ status: "success", data: data });
});

router.post("/", function (req, res) {
  let data = parseData();
  const writeBooks = fs.createWriteStream("./booksList.txt", { flags: "a" });
  const strToWrite = `${req.body.id}-${req.body.title}-${req.body.author}`;
  console.log(strToWrite);
  writeBooks.write = `${strToWrite}\n`;
  res.json({ status: "success" });
  // const filtered = data.filter((book) => book.id == req.body.id);
  // if (filtered.length > 0) {
  //   res.json({ status: "fail", msg: "Book ID already exists" });
  // } else {
  //   console.log("writing");
  //   writeBooks.write = `${req.body.id}-${req.body.title}-${req.body.author}\n`;
  //   res.json({ status: "success" });
  // }
});

module.exports = router;
