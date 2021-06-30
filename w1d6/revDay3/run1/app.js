const http = require("http");
const fs = require("fs");
const server = http.createServer();
server.on("request", (req, res) => {
  if (req.method === "GET" && req.url === "/") {
    const readStream = fs.readFileSync("./content.txt", "utf-8");
    console.log(readStream);
    res.write(readStream);
    res.end();
  } else if (req.method === "POST" && req.url === "/") {
    // fs.writeFile("./content.txt", "Practicing fs", (err) => {
    //   if (err) throw err;
    // });
    // fs.writeFileSync("./content.txt", "Practicing fs with writeSync", "utf-8", {
    //   flags: "a",
    // });
    // fs.appendFileSync("./content.txt", "My Text \n", "UTF-8", { flags: "a+" });
    const writeContentStream = fs.createWriteStream("./content.txt", {
      flags: "a",
    });
    writeContentStream.write("Practicing with fs write stream \n");
    res.end("done");
  }
});
server.listen(3000);
