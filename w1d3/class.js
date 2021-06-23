const http = require("http");
const server = http.createServer();

server.on("request", function (req, res) {
  res.write("my first web server");
  res.write("<h1>This is mintes<h1>");
  res.end();
});

server.listen(3000, function () {
  console.log("server started");
});
