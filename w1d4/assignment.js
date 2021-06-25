const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http
  .createServer((req, res) => {
    if (req.method === "GET") {
      // const readable = fs.createReadStream("test.txt");
      // console.log(readable.toString());
      // res.end(readable.toString());
      let text = fs.readFileSync("./users/users.txt", "utf-8");
      res.write(text);
      res.end();
    } else if (req.method === "POST") {
      res.writeHead(200, { "Content-Type": "application/json" });
      let user1 = {
        id: 1,
        fName: "mintes",
        lName: "gebre",
      };
      const writable = fs.createWriteStream("./users/users.txt");
      writable.write(JSON.stringify(user1));
      res.end("thanks");
    }
  })
  .listen(5000);
