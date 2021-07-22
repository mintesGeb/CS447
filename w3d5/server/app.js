const express = require("express");
const app = express();

const authRouter = require("./Routes/authRouter");
const productRouter = require("./Routes/productRouter");

app.use(express.json());

app.use("/", authRouter);
app.use("/products", productRouter);

app.use((err, req, res, next) => {
  console.log(err);
  if (err.message == "Not Found") {
    res.status(404).json({ error: err.message });
  } else {
    res.status(500).json({ error: "Something is wrong! Try Again later." });
  }
});

app.listen(3000, () => {
  console.log("server Started at port 3000");
});
