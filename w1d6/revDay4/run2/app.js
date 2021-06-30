const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    function getArrOfJson(str, type = "user") {
      let listOfUsers = [];
      let rawList = str.split("\n");
      rawList.forEach((user) => {
        let userObj = {};
        let forObj = user.split("-");
        if (type === user) {
          userObj.id = forObj[0];
          userObj.fname = forObj[1];
          userObj.lname = forObj[2];
        } else {
          userObj.id = forObj[0];
          userObj.price = forObj[1];
          userObj.name = forObj[2];
        }
        if (userObj.id) {
          listOfUsers.push(userObj);
        }
      });
      return listOfUsers;
    }

    let verb = req.method;
    let url = req.url;

    if (verb === "GET") {
      if (url === "/users") {
        let readUsers = fs.readFileSync("./users.txt", "utf-8");
        const usersList = getArrOfJson(readUsers);
        usersList.forEach((user) => {
          res.write(JSON.stringify(user) + "\n");
        });
        res.end();
      } else if (url === "/products") {
        let readProducts = fs.readFileSync("./products.txt", "utf-8");
        const productsList = getArrOfJson(readProducts);
        productsList.forEach((prod) => {
          res.write(JSON.stringify(prod));
        });
        res.end();
      }
    } else if (verb === "POST") {
      if (url === "/users") {
        let user1 = {
          id: "004",
          fname: "aman",
          lname: "abdi",
        };
        const readUsers = fs.readFileSync("./users.txt", "utf-8");
        const usersList = getArrOfJson(readUsers);
        const filtered = usersList.filter((user) => user.id == user1.id);
        if (filtered.length > 0) {
          res.write("Already exists\n");
        } else {
          let writeUsers = fs.createWriteStream("./users.txt", { flags: "a" });
          writeUsers.write(
            user1.id + "-" + user1.fname + "-" + user1.lname + "\n"
          );
        }
      } else if (url === "/products") {
        const product1 = { id: 2, price: 200, name: "table" };
        const readProducts = fs.readFileSync("./products.txt", "utf-8");
        const productsList = getArrOfJson(readProducts, "products");
        const filtered = productsList.filter((prod) => prod.id == product1.id);
        if (filtered.length > 0) {
          res.write("PRoduct exists");
        } else {
          const writeProducts = fs.createWriteStream("./products.txt", {
            flags: "a",
          });
          writeProducts.write(
            `${product1.id}-${product1.price}-${product1.name}\n`
          );
        }
      }
      res.end("done");
    }
  })
  .listen(3000);
