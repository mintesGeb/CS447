window.onload = pageload;
//input variables
const username = document.getElementById("username");
const password = document.getElementById("password");
const prodID = document.getElementById("prod-id");
const prodName = document.getElementById("prod-name");
const prodPrice = document.getElementById("prod-price");

//buttons

const loginBtn = document.getElementById("login-btn");
const addProd = document.getElementById("add-prod");
const getData = document.getElementById("get-data-btn");
const toCoursesPage = document.getElementById("to-courses-page");
const toProductsPage = document.getElementById("to-products-page");

//div-pages
const productsPage = document.getElementById("products-page");
const coursesPage = document.getElementById("courses-page");
const loginPage = document.getElementById("log-in-page");

function pageload() {
  displayLoginOnly();
  mainMenu();
  productsPage.style.display = "block";
  //   toProductsPage.addEventListener("click", () => {
  //     coursesPage.style.display = "none";
  //     // toProductsPage.style.display = "none";
  //   });
  coursesPage.style.display = "block";
  //   toCoursesPage.addEventListener("click", () => {
  //     // toCoursesPage.style.display = "none";
  //     productsPage.style.display = "none";
  //   });
  loginBtn.addEventListener("click", loginRequest);
  addProd.addEventListener("click", postProductRequest);
  getData.addEventListener("click", getProductRequest);
}
function displayLoginOnly() {
  productsPage.style.display = "none";
  coursesPage.style.display = "none";
  toProductsPage.style.display = "none";
  toCoursesPage.style.display = "none";
}
function mainMenu() {
  if (sessionStorage.getItem("token")) {
    loginPage.style.display = "none";
    toProductsPage.style.display = "block";
    toCoursesPage.style.display = "block";
  }
}

async function loginRequest() {
  const url = "http://localhost:3000/auth";

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "Application/json",
    },

    body: JSON.stringify({
      username: username.value,
      password: password.value,
    }),
  });
  const data = await response.json();
  const token = data.token;

  sessionStorage.setItem("token", token);
  mainMenu();
}

async function postProductRequest() {
  //   console.log(document.getElementById("prod-ID"));

  const url = "http://localhost:3000/products";
  const requestBody = JSON.stringify({
    id: prodID.value,
    name: prodName.value,
    price: prodPrice.value,
  });
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "Application/json",
      authorization: "Bearer " + sessionStorage.getItem("token"),
    },
    body: requestBody,
  });

  const data = await response.json();
  console.log(data);
}
async function getProductRequest() {
  const response = await fetch("http://localhost:3000/products", {
    headers: {
      authorization: "Bearer " + sessionStorage.getItem("token"),
    },
  });
  const data = await response.json();
  document.getElementById("get-div").innerHTML = "";
  data.data.forEach((prod) => {
    const p = document.createElement("p");
    p.innerHTML = `${prod.id}-${prod.name}-${prod.price}\n`;

    document.getElementById("get-div").appendChild(p);
  });
}
