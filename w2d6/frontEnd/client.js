const bookList = document.getElementById("book-list");
const listBooks = document.getElementById("list-books");

window.onload = () => {
  bookList.style.display = "none";
  listBooks.addEventListener("click", getBooks);
};

async function getToken() {
  let response = await fetch("http://localhost:3000/auth", {
    method: "POST",
    headers: {
      "Content-Type": "Application/json",
    },
    body: JSON.stringify({ email: "mintes4@gmail.com", password: "123456" }),
  });
  let data = await response.json();
  sessionStorage.setItem("token", data.data);
}
getToken();

async function getBooks() {
  const response = await fetch("http://localhost:3000/books", {
    headers: {
      "Content-Type": "Application/json",
      authorization: "bearer " + sessionStorage.getItem("token"),
    },
  });

  const data = await response.json();
  bookList.style.display = "block";

  data.data.forEach((element) => {
    let p = document.createElement("p");
    p.innerHTML = `${element.title} by ${element.author}`;
    bookList.appendChild(p);
  });
}
