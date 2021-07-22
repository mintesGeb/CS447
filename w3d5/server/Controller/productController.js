const Product = require("../Model/product");

const save = (req, res, next) => {
  let newProduct = new Product(
    null,
    req.body.name,
    req.body.price,
    req.body.description
  );
  res.json({ result: newProduct.save() });
};
const getAllProducts = (req, res, next) => {
  res.json({ result: Product.fetchAll() });
};
const getByProductId = (req, res, next) => {
  console.log(req.params.id);
  res.json({ result: Product.fetchByID(req.params.id) });
};
const deleteProductByID = (req, res, next) => {
  return res.json({ result: Product.deleteByID(req.params.id) });
};

const updateByID = (req, res, next) => {
  let updatedObj = new Product(
    req.params.id,
    req.body.name,
    req.body.price,
    req.body.description
  );
  updatedObj.update(req.params.id);
  res.json({ result: updatedObj });
};

module.exports = {
  save,
  getAllProducts,
  getByProductId,
  deleteProductByID,
  updateByID,
};
