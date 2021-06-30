const http = require("http");
const fs = require("fs");
const server = http
  .createServer((req, res) => {
    if (req.method === "GET") {
      if (req.url === "/users") {
        const readUsers = fs.readFileSync("./users.txt", "utf-8");
        // const readUsers = fs.createReadStream("./users.txt");

        let totalUsersList = strToArrOfObj(readUsers);
        console.log(totalUsersList);

        // readUsers.split("\n");
        totalUsersList.forEach((user) => {
          res.write(JSON.stringify(user) + "\n");
        });
      } else if (req.url === "/products") {
        const readProducts = fs.readFileSync("./products.txt", "utf-8");
        const totalProductsList = strToArrOfObj(readProducts);
        totalProductsList.forEach((product) => {
          res.write(JSON.stringify(product) + "\n");
        });
      }
      res.end();
    } else if (req.method === "POST") {
      if (req.url === "/users") {
        const readUsers = fs.readFileSync("./users.txt", "utf-8");
        const totalUsersList = strToArrOfObj(readUsers);

        const randomUser = {
          id: 4,
          firstname: "mintesinot",
          lastname: "tadesse",
        };

        const writeUser = fs.createWriteStream("./users.txt", { flags: "a" });

        if (
          totalUsersList.filter((user) => randomUser.id == user.id).length == 0
        ) {
          writeUser.write(
            `\n${randomUser.id}-${randomUser.firstname}-${randomUser.lastname}`
          );
        } else {
          res.write("User already exists\n");
        }
      } else if (req.url === "/products") {
        const randomProduct = { id: 4, price: 500, name: "Keyboard" };

        const readProducts = fs.readFileSync("./products.txt", "utf-8");
        const totalProductsList = strToArrOfObj(readProducts);

        if (
          totalProductsList.filter((prod) => prod.id == randomProduct.id)
            .length == 0
        ) {
          const writeProductStream = fs.createWriteStream("./products.txt", {
            flags: "a",
          });
          console.log("writing");
          writeProductStream.write(
            `\n${randomProduct.id}-${randomProduct.price}-${randomProduct.name}`
          );
        } else {
          res.write("Product already Exists\n");
        }
      }

      res.end("done");
    }
  })
  .listen(5000);

function strToArrOfObj(str) {
  let objList = [];
  let usersList = str.split("\n");
  usersList.forEach((user) => {
    let userObj = {};
    let eachUser = user.split("-");
    userObj.id = eachUser[0];
    userObj.firstname = eachUser[1];
    userObj.lastname = eachUser[2];
    objList.push(userObj);
  });
  return objList;
}
