const module1 = require("./greeting.js");
const http = require("http");
const fs = require("fs");

// const data = fs.readFileSync("./test.txt", "utf-8");

// console.log(data);
// const server = http.createServer();

// server.on("request", function (req, res) {
//   res.write("my first web server");
//   res.write("<h1>This is mintes<h1>");
//   res.end();
// });

// server.listen(3000, function () {
//   console.log("server started");
// });

// let mintes = new module1("Mintes");
// mintes.sayHello();

// const buffer = Buffer.from("Node JS");

// console.log(buffer.toString());
const server = http.createServer((req, res) => {
  res.write("mintes ");
  res.write("geb");
  res.end();
});

server.listen(3000);
