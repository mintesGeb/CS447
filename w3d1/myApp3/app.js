var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const jwtManager = require("./jwt/jwtManager.js");
const cors = require("cors");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const productsRouter = require("./routes/products.js");
const coursesRouter = require("./routes/courses.js");
const authRouter = require("./routes/auth.js");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", (req, res, next) => {
  if (req.url === "/auth") {
    next();
    return;
  }
  const header = req.headers.authorization;

  if (!header) {
    return res.json({ status: "auth_error" });
  } else {
    const data = jwtManager.verify(header.split(" ")[1]);
    if (!data) {
      return res.json({ status: "auth_error" });
    }
    next();
  }
});

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/courses", coursesRouter);
app.use("/products", productsRouter);
app.use("/auth", authRouter);

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

// module.exports = app;
app.listen(3000);
