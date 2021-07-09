const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/products", productController.getAllProducts);
router.post("/products", productController.save);
router.get("/products/:id", productController.findByProductId);
module.exports = router;
