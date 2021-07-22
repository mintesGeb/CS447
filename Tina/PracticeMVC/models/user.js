const getDB = require("../utils/database").getDB;

module.exports = class User {
  constructor(_id, username, password, role) {
    this._id = _id;
    this.username = username;
    this.password = password;
    this.role = role;
  }
  login() {
    return getDB()
      .collection("users")
      .findOne({ username: this.username, password: this.password });
  }
};
