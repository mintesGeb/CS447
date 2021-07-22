const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/", productController.getAllProducts);
router.post("/", productController.save);
router.get("/:id", productController.findByProductId);
router.delete("/:id", productController.deleteById);
router.put("/:id", productController.updateById);
module.exports = router;
