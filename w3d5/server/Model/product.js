let products = [];

class Product {
  constructor(id, name, price, description) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.describe = description;
  }
  save() {
    this.id = Math.random();
    products.push(this);
    return this;
  }
  static fetchAll() {
    return products;
  }

  static fetchByID(prodID) {
    return products.find((prod) => prod.id == prodID);
  }

  static deleteByID(prodID) {
    let deleted = this.fetchByID(prodID);
    if (deleted) {
      products = products.filter((prod) => prod.id != prodID);
      return deleted;
    } else {
      throw new Error("Not Found");
    }
  }
  update(prodID) {
    let index = products.findIndex((prod) => prod.id == prodID);
    if (index > -1) {
      products.splice(index, 1, this);
      return this;
    } else {
      throw new Error("Not Found");
    }
  }
}

module.exports = Product;
