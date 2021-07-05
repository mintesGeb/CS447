var express = require("express");
var router = express.Router();
const fs = require("fs");
/* GET users listing. */

function parseData() {
  let arr = [];
  const readBooks = fs.readFileSync("./books.txt", "UTF-8");
  console.log(readBooks);
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

module.exports = router;
