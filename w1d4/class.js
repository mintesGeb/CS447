const http = require("http");
const server = http
  .createServer((req, res) => {
    if (req.method === "GET") {
      res.writeHead(200, { "Content-Type": "text/html" });

      let html = fs.readFileSync("./index.html", "utf-8");
      html = html.replace("{Message}", "Hello");
      res.end(html);
    } else if (req.method === "POST") {
      res.write("thanks");
      res.end();
    }
  })
  .listen(5000);
// const server = http
//   .createServer((req, res) => {
//     if (req.method === "GET") {
//       res.writeHead(200, { "Content-Type": "application/json" });

//       const person = {
//         firstname: "josh",
//         lastname: "gebre",
//       };
//       res.end(JSON.stringify(person));
//     } else if (req.method === "POST") {
//       res.write("thanks");
//       res.end();
//     }
//   })
//   .listen(5000);
const fs = require("fs");
const path = require("path");
const { Writable } = require("stream");
const zlib = require("zlib");

// server.on("request", (req, res) => {
//     res.writeHead(200, {"Content-Type":"application/json"})

//     const person={
//         firstname: 'josh',
//         lastname: "gebre"
//     }
//     res.end(JSON.stringify(person))

//   if (req.method === "GET") {
//     res.write("Happy");
//     res.end();
//   } else if (req.method === "POST") {
//     fs.writeFile("student.txt", "Loved us all", (err) => {
//       if (err) throw err;
//       console.log("done");
//     });
//     const readable = fs.createReadStream("./student.txt");
//     const writable = fs.createWriteStream("./teacher.txt");
//     readable.pipe(writable);
//     res.write("done");
//     res.end();
//   }

//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.write("Hello, World!");
//   res.end();
// });

// server.listen(5000, () => {
//   console.log("server started at port 5000");
// });

// console.log(__dirname);

// const greet = fs.readFileSync(path.join("./", "test.txt"), "utf-8");

// console.log(greet);
// const greet2 = fs.readFile(
//   path.join("./", "test.txt"),
//   "utf-8",
//   (err, data) => {
//     console.log(data);
//   }
// );

// fs.readFile("test.txt", { encoding: "utf-8" }, (err, data) => {
//   console.log(data);
// });

// fs.writeFile("./student.txt", "I am the student", (err) => {
//   if (err) throw err;
//   console.log("done");
// });
// const gzip = zlib.createGzip();

// const readable = fs.createReadStream("./student.txt");

// const writable = fs.createWriteStream("teacher.txt");
// readable.pipe(gzip).pipe(writable);
// readable.on("data", (chunk) => {
//   console.log(chunk);
//   writable.write(chunk + "happy");
// });
