const MongoClient = require("mongodb").MongoClient;
let _db;

const mongoConnect = (callback) => {
  MongoClient.connect("mongodb://localhost:27017", {
    useUnifiedTopology: true,
  })
    .then((client) => {
      console.log("Connected");
      _db = client.db("testDB2");
      callback();
    })
    .catch((err) => {
      throw new Error("Connect failed");
    });
};

const getDB = () => {
  if (_db) {
    return _db;
  } else {
    throw new Error("Cannot get DB");
  }
};

exports.mongoConnect = mongoConnect;
exports.getDB = getDB;
