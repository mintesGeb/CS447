const MongoClient = require("mongodb").MongoClient;

async function deleteOne() {
  const client = await MongoClient.connect("mongodb://localhost:27017", {
    useUnifiedTopology: true,
  });
  const db = client.db("testDB2");
  const query = { name: "assad" };
  db.collection("teachers").deleteOne(query, (err, result) => {
    if (err) throw err;
    console.log(result.result);
    client.close();
  });
}
deleteOne();

async function deleteAge25() {
  const client = await MongoClient.connect("mongodb://localhost:27017", {
    useUnifiedTopology: true,
  });
  client
    .db("testDB2")
    .collection("teachers")
    .deleteMany({ age: 25 }, (err, result) => {
      if (err) throw err;
      console.log(result.result);
      client.close();
    });
}
deleteAge25();
