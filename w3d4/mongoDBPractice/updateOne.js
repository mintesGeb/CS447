const MongoClient = require("mongodb").MongoClient;
const { ObjectId } = require("mongodb");

async function updateOne() {
  const client = await MongoClient.connect("mongodb://localhost:27017", {
    useUnifiedTopology: true,
  });
  const db = client.db("testDB2");

  db.collection("teachers").updateOne(
    { _id: new ObjectId("60e6d5cbad300e1741dc9c69") },
    { $set: { name: "assad", age: 40 } },
    (err, result) => {
      if (err) throw err;
      console.log(result.result);
      client.close();
    }
  );
}
updateOne();
