const http = require("http");
const server = http.createServer();

server.on("request", (req, res) => {
  res.write("fromGet: I'm learning NodeJS");
  res.end();
});

server.listen(3000, () => {
  console.log("server started on port 3000");
});

// setInterval(() => {
//   http.get("http://localhost:3000", (res) => {
//     res.on("data", (data) => {
//       console.log("haha");
//     });
//   });
// }, 5000);
