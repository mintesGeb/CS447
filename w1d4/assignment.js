const http = require("http");
const fs = require("fs");
const path = require("path");
const { Readable } = require("stream");

const server = http
  .createServer((req, res) => {
    console.log(req.url);
    if (req.method === "GET") {
      if (req.url === "/users") {
        // const readable = fs.createReadStream("./users/users.txt");
        // readable.pipe(res);
        let text = fs.readFileSync("./users/users.txt", "utf-8");
        res.write(text);
        res.end();
      } else if (req.url == "/products") {
        const readable = fs.readFileSync("./products/products.txt", "utf-8");
        console.log(readable);
        res.write(readable);
        res.end();
      }
    } else if (req.method === "POST") {
      if (req.url === "/users") {
        res.writeHead(200, { "Content-Type": "application/json" });
        let user1 = {
          id: 1,
          fName: "mintes",
          lName: "gebre",
          age: 30,
          wife: "robbie",
        };
        // console.log(req.body);
        const writable = fs.createWriteStream("./users/users.txt");
        writable.write(JSON.stringify(user1));
        res.end("thanks");
      } else if (req.url === "/products") {
        res.writeHead(200, { "Content-Type": "application/json" });
        let prod2 = { id: 1, price: 500, name: "Keyboard" };
        let prod3 = { id: 3, price: 600, name: "guitar" };
        let products = [prod2, prod3];
        products.forEach((prod) => {
          fs.appendFile(
            "./products/products.txt",
            "," + JSON.stringify(prod),
            function (err) {
              if (err) throw err;
              console.log("IS WRITTEN");
            }
          );
        });

        // const writable = fs.createWriteStream("./products/products.txt");
        // writable.write(JSON.stringify(prod2));
        res.end("done");
      }
    }
  })
  .listen(5000);
