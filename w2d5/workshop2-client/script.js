window.onload = pageload;
const getAllBooksBtn = document.getElementById("get-all-books");
const getBookByIDBtn = document.getElementById("get-book-by-id");
const submitBookBtn = document.getElementById("submit-book");
const deleteBookBtn = document.getElementById("delete-book");
const editBookInfoBtn = document.getElementById("edit-book");
const resultDiv = document.querySelector(".result");
function pageload() {
  getAllBooksBtn.onclick = getAllBooks;
  getBookByIDBtn.onclick = getBookByID;
  submitBookBtn.onclick = submitBook;
  deleteBookBtn.onclick = deleteBook;
  editBookInfoBtn.onclick = editBookInfo;
}

function getAllBooks() {
  resultDiv.innerHTML = "";

  async function sendRequest() {
    let response = await fetch("http://localhost:3000/books/");
    let data = await response.json();
    console.log(data.data);

    let ul = document.createElement("ul");
    data.data.forEach((book) => {
      let li = document.createElement("li");
      li.innerHTML = `${book.title} by ${book.author}`;
      ul.appendChild(li);
    });
    resultDiv.appendChild(ul);
  }
  sendRequest();
}

function getBookByID() {
  document.querySelector(".result").style.backgroundColor = "magenta";
}

function submitBook() {
  resultDiv.innerHTML = "";

  async function sendRequest() {
    let newBook = {
      id: "5",
      title: "God is Everything",
      ISBN: "546-654-654-654-123",
      publishedDate: "11/11/96",
      author: "Matt McArthur",
    };
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBook),
    };
    let response = await fetch("http://localhost:3000/books", options);
    let data = await response.json();
    console.log(data);

    let p = document.createElement("p");
    p.innerHTML = `The request is a <h2>${data.status}</h2>`;
    p.style = "{left-margin: 20px }";

    resultDiv.appendChild(p);
  }
  sendRequest();
}

function deleteBook() {
  document.querySelector(".result").style.backgroundColor = "grey";
}
function editBookInfo() {
  document.querySelector(".result").style.backgroundColor = "orange";
}
