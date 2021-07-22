const getDB = require("../utils/database").getDB;
const { ObjectId } = require("mongodb");
let products = [];

class Product {
  constructor(id, title, price, description) {
    this._id = id;
    this.title = title;
    this.price = price;
    this.description = description;
  }

  static getAll() {
    return getDB().collection("products").find().toArray();
  }
  save() {
    return getDB().collection("products").insertOne(this);
    // this.id = Math.random();
    // products.push(this);
    // return this;
  }
  static getProductById(productID) {
    return getDB()
      .collection("products")
      .findOne({ _id: ObjectId(productID) });
    // return products.find((prod) => prod.id == productID);
  }
  static deleteById(productID) {
    return getDB()
      .collection("products")
      .deleteOne({ _id: ObjectId(productID) });
  }
  update() {
    return getDB()
      .collection("products")
      .updateOne(
        { _id: new ObjectId(this._id) },
        {
          $set: {
            title: this.title,
            price: this.price,
            description: this.description,
          },
        }
      );
  }
}
module.exports = Product;
