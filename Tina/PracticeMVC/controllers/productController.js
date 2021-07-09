const Product = require("../models/product");

module.exports.getAllProducts = (req, res, next) => {
  res.status(200).json(Product.getAll());
};

module.exports.save = async (req, res, next) => {
  try {
    const prod = await new Product(
      null,
      req.body.title,
      req.body.price,
      req.body.description
    ).save();

    res.status(200).json({ prod });
  } catch (err) {
    next(err);
  }
};

module.exports.findByProductId = (req, res, next) => {
  console.log(req.params.id);

  res.json({ result: Product.getProductById(req.params.id) });
};
