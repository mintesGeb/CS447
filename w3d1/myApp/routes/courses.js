const express = require("express");
const router = express.Router();
const fs = require("fs");

router.get("/", (res, req) => {
  console.log(req);
  res.json({ status: "success" });
});
router.get("/:id", (res, req) => {});
router.post("/", (res, req) => {});
router.put("/:id", (res, req) => {});
router.delete("/:id", (res, req) => {});

module.exports = router;
