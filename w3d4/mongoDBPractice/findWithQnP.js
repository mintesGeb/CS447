const MongoClient = require("mongodb").MongoClient;
const { ObjectID } = require("mongodb");

async function fundwithQnP() {
  const client = await MongoClient.connect("mongodb://localhost:27017", {
    useUnifiedTopology: true,
  });
  const db = client.db("testDB2");
  const query = { _id: new ObjectID("60e60c61d323dc916ab8fa33") };
  const projection = { _id: 0 };
  const items = await db
    .collection("teachers")
    .find(query)
    .project(projection)
    .toArray();
  console.log(items);
  client.close();
}
fundwithQnP();
