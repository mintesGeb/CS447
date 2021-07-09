const express = require("express");
const app = express();
const mongoConnect = require("./utils/database").mongoConnect;

const productRouter = require("./routes/productRouter");

app.use(express.json());
app.use((req, res, next) => {
  console.log("mw1");
  console.log(req.url, req.method);
  next();
});
app.use("/", productRouter);

mongoConnect(() => {
  app.listen(3000, () => {
    console.log("Server started on port 3000");
  });
});
