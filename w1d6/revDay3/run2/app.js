const http = require("http");
const fs = require("fs");

const server = http
  .createServer((req, res) => {
    if (req.method === "GET") {
      //   fs.readFile("./content.txt", "utf-8", (err, data) => {
      //     if (err) throw err;
      //     console.log(data);
      const readContent = fs.createReadStream("./content.txt");
      readContent.pipe(res);
      //   console.log(readContent.toString());
      //   res.end();
    } else if (req.method === "POST") {
      const writeContent = fs.createWriteStream("./content.txt", {
        flags: "a",
      });

      writeContent.write("Practicing fs" + "\n");
      res.end("done");
    }
  })
  .listen(3000);
