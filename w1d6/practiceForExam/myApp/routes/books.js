const express = require("express");
const router = express.Router();
const fs = require("fs");

router.get("/", (req, res) => {
  const readBooks = fs.readFileSync("./books.txt", "utf-8");
  const listofBooks = readBooks.split("\n");
  console.log(listofBooks);

  listofBooks.forEach((book) => {
    res.write(book + "\n");
  });
  res.end();
});

router.get("/:major", (req, res) => {
  console.log(req.params.major);
  const readTopSellers = fs.readFileSync("./topSellers.txt", "utf-8");
  const listOfTopSellers = readTopSellers.split("\n");
  listOfTopSellers.forEach((topseller) => {
    res.write(topseller + "\n");
  });
  res.end();
});

module.exports = router;
