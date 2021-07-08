const MongoClient = require("mongodb").MongoClient;

async function insertOne() {
  const client = await MongoClient.connect("mongodb://localhost:27017", {
    useUnifiedTopology: true,
  });
  const db = client.db("testDB2");
  const doc = { name: "aman", age: 25 };
  db.collection("teachers").insertOne(doc, (err, docInserted) => {
    if (err) throw err;
    console.log(`success: ${JSON.stringify(docInserted)} `);
    return client.close();
  });
}
insertOne();
