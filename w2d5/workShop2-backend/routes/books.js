var express = require("express");
var router = express.Router();
const fs = require("fs");
const { route } = require(".");
const strToArrofObj = require("./myModule");
/* GET users listing. */

router.get("/", function (req, res, next) {
  const readBooks = fs.readFileSync("./books.txt", "utf-8");

  res.json({ status: "success", data: strToArrofObj(readBooks) });
});

router.get("/:id", function (req, res, next) {
  const readBooks = fs.readFileSync("./books.txt", "utf-8");
  const filtered = strToArrofObj(readBooks).filter(
    (book) => book.id == req.params.id
  );
  res.json({ status: "success", data: filtered });
});

router.post("/", (req, res) => {
  const writeBooks = fs.createWriteStream("./books.txt", { flags: "a" });

  const readBooks = fs.readFileSync("./books.txt", "utf-8");

  const filtered = strToArrofObj(readBooks).filter(
    (book) => book.id == req.body.id
  );
  if (filtered.length > 0) {
    res.json({ status: "fail" });
  } else {
    writeBooks.write(
      `${req.body.id}_${req.body.title}_${req.body.ISBN}_${req.body.publishedDate}_${req.body.author}\n`
    );
    res.json({ status: "success" });
  }
});

router.put("/:id", (req, res) => {
  const readBooks = fs.readFileSync("./books.txt", "utf-8");
  const writeBooks = fs.createWriteStream("./books.txt");
  const newBookList = strToArrofObj(readBooks).filter((book) => {
    return book.id != req.params.id;
  });
  newBookList.push(req.body);

  newBookList.forEach((book) => {
    writeBooks.write(
      `${book.id}_${book.title}_${book.ISBN}_${book.publishedDate}_${book.author}\n`
    );
  });

  res.json({ status: "success" });
});

router.delete("/:id", (req, res) => {
  const readBooks = fs.readFileSync("./books.txt", "utf-8");
  const writeBooks = fs.createWriteStream("./books.txt");
  const newBookList = strToArrofObj(readBooks).filter((book) => {
    return book.id != req.params.id;
  });

  newBookList.forEach((book) => {
    writeBooks.write(
      `${book.id}_${book.title}_${book.ISBN}_${book.publishedDate}_${book.author}\n`
    );
  });

  res.json({ status: "success" });
});
module.exports = router;
