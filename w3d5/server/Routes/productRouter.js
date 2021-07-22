const express = require("express");
const router = express.Router();
const productController = require("../Controller/productController");
const userController = require("../Controller/userController");

router.get("/", productController.getAllProducts);

router.get("/:id", productController.getByProductId);
router.post("/", userController.authorizeAdmin, productController.save);
router.delete(
  "/:id",
  userController.authorizeAdmin,
  productController.deleteProductByID
);
router.put("/:id", userController.authorizeAdmin, productController.updateByID);

module.exports = router;
