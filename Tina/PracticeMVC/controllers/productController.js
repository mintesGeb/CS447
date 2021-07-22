const Product = require("../models/product");

module.exports.getAllProducts = async (req, res, next) => {
  try {
    let products = await Product.getAll();
    res.status(200).json(products);
  } catch (err) {
    next(err);
  }
};

module.exports.save = async (req, res, next) => {
  try {
    const prod = await new Product(
      null,
      req.body.title,
      req.body.price,
      req.body.description
    ).save();

    res.status(200).json(prod.ops[0]);
  } catch (err) {
    next(err);
  }
};

module.exports.findByProductId = async (req, res, next) => {
  try {
    console.log(req.params.id);
    let product = await Product.getProductById(req.params.id);

    res.json({ result: product });
  } catch (err) {
    next(err);
  }
};
module.exports.deleteById = async (req, res, next) => {
  try {
    let product = await Product.deleteById(req.params.id);
    res.json({ productDeleted: product });
  } catch (err) {
    next(err);
  }
};
module.exports.updateById = async (req, res, next) => {
  try {
    let prod = req.body;
    const updatedProd = await new Product(
      req.params.id,
      prod.title,
      prod.price,
      prod.description
    );
    updatedProd.update();
    res.status(200).json(updatedProd);
  } catch (err) {
    next(err);
  }
};
