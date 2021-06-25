const http = require("http");
const fs = require("fs");
const server = http.createServer();
const path = require("path");

server.on("request", (req, res) => {
  if (req.method === "GET") {
    res.write("fromGet: I'm learning NodeJS");
  } else if (req.method === "POST") {
    const writable = fs.createWriteStream(path.join(__dirname, "/text.txt"));
    writable.write("Practicing fs");
  }
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
