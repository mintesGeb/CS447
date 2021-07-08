const MongoClient = require("mongodb").MongoClient;
const { ObjectId } = require("mongodb");

async function findWithQnP() {
  const client = await MongoClient.connect("mongodb://localhost:27017", {
    useUnifiedTopology: true,
  });
  const db = client.db("testDB2");
  const query = {};
  const projection = { _id: 0, age: 0 };
  const item = await db
    .collection("teachers")
    .find(query)
    .project(projection)
    .skip(1)
    .limit(3)
    .sort("age", 1)
    .toArray();
  console.log(item);
  client.close();
}
findWithQnP();
