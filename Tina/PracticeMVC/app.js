const express = require("express");
const app = express();
const mongoConnect = require("./utils/database").mongoConnect;

const productRouter = require("./routes/productRouter");
const authRouter = require("./routes/auth");

app.use(express.json());

app.use((req, res, next) => {
  console.log("mw1");
  console.log(req.url, req.method);
  next();
});

app.use("/login", authRouter);
app.use("/products", productRouter);

app.use((err, req, res, next) => {
  if (err.message == "not found") {
    res.status(404).json({ error: err.message });
  } else {
    res.status(500).json({ error: "something is wrong! try again!" });
  }
});

mongoConnect(() => {
  app.listen(5000, () => {
    console.log("Server started on port 5000");
  });
});
