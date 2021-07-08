// const MongoClient = require("mongodb").MongoClient;

// MongoClient.connect("mongodb://localhost:27017", {
//   useUnifiedTopology: true,
// })
//   .then((client) => {
//     console.log("connected");
//     client
//       .db("testDB2")
//       .collection("teachers")
//       .find()
//       .each((err, doc) => {
//         if (err) throw err;
//         console.log(doc);
//         client.close();
//       });
//   })
//   .catch((err) => console.log("err: " + err));

const MongoClient = require("mongodb").MongoClient;
MongoClient.connect("mongodb://localhost:27017", {
  useUnifiedTopology: true,
})
  .then((client) => {
    console.log("Connected");
    const db = client.db("testDB2");
    db.collection("students")
      .find()
      .each((err, doc) => {
        if (err) throw err;
        console.log(doc);
        client.close();
      });
  })
  .catch((err) => console.log(err));
