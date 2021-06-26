var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

app.get("/courses", (req, res) => {
  res.json({ body: "10" });
});
app.get("/courses/:major", (req, res) => {
  console.log(req.params.major);
  res.json({ body: "10" });
});
app.post("/courses", (req, res) => {
  console.log(req.body);
  res.json({ body: "100" });
});

// app.get("/products", (res, req) => {
//   // res.json({ age: 20 });
//   res.json({ api: "Rest" });
// });
// app.get("/products", (res, req) => {
//   res.json({ age: 20 });
//   // res.write("Rest");
// });
// app.get("/courses", (req, res) => {
//   console.log(req.query.color);
//   // res.json({ status: "success" });
//   res.write("thanks");
//   res.send();
// });
// app.post("/courses", (req, res) => {
//   console.log(req.body);
//   res.json({ status: "success" });
// });

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app.listen(5000);
