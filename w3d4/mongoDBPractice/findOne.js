// const MongoDBClient = require("mongodb").MongoClient;

// MongoDBClient.connect("mongodb://localhost:27017", {
//   useUnifiedTopology: true,
// })
//   .then((client) => {
//     console.log("connected ... ");
//     client
//       .db("testDB2")
//       .collection("teachers")
//       .findOne({ name: "umur" }, (err, doc) => {
//         if (err) throw err;
//         console.log(doc);
//         client.close();
//       });
//   })
//   .catch((err) => console.log(err));

const MongoClient = require("mongodb").MongoClient;
MongoClient.connect("mongodb://localhost:27017", {
  useUnifiedTopology: true,
})
  .then((client) => {
    client
      .db("testDB2")
      .collection("teachers")
      .findOne({ name: "Jossi" }, (err, doc) => {
        if (err) throw err;
        console.log(doc);
        client.close();
      });
  })
  .catch((err) => console.log(err));
