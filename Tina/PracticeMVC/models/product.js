const getDB = require("../utils/database").getDB;
let products = [];

class Product {
  constructor(id, title, price, description) {
    this._id = id;
    this.title = title;
    this.price = price;
    this.description = description;
  }

  static getAll() {
    return products;
  }
  save() {
    return getDB().collection("teachers").insertOne(this);
    // this.id = Math.random();
    // products.push(this);
    // return this;
  }
  static getProductById(productID) {
    return products.find((prod) => prod.id == productID);
  }
}
module.exports = Product;
