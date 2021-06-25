const fs = require("fs");
const http = require("http");
// const { read } = require("node:fs");
const server = http.createServer();

server
  .on("request", (req, res) => {
    if (req.method == "GET") {
      //   const readable = fs.createReadStream("./users.txt");
      //   readable.pipe(res);
      const readable = fs.readFileSync("./users.txt", "utf-8");
      res.write(readable);
      res.end();
    } else if (req.method === "POST") {
      let user1 = {
        id: 1,
        fName: "mintes",
        lName: "gebre",
        age: 30,
      };

      let writable = fs.writeFile(
        "./users.txt",
        JSON.stringify(user1),
        (err, data) => {
          if (err) throw err;
          console.log("done");
        }
      );

      //   let writable = fs.createWriteStream("./users.txt");
      //   writable.write(JSON.stringify(user1));
      res.write("post done");
      res.end();
    }
  })
  .listen(5000);
