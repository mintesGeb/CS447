window.onload = pageload;
const getAllBooksBtn = document.getElementById("get-all-books");
const getBookByIDBtn = document.getElementById("get-book-by-id");
const submitBookBtn = document.getElementById("submit-book");
const deleteBookBtn = document.getElementById("delete-book");
const editBookInfoBtn = document.getElementById("edit-book");
const resultDiv = document.querySelector(".result");

const getBookId = document.getElementById("get-book-ID");
const deleteBookId = document.getElementById("delete-book-ID");
const editBookId = document.getElementById("edit-book-ID");

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
      li.innerHTML = `<b>${book.title}</b> by <i><b>${book.author}</b></i>`;
      ul.appendChild(li);
    });
    resultDiv.appendChild(ul);
  }
  sendRequest();
}

function getBookByID() {
  resultDiv.innerHTML = "";

  console.log(getBookId.value);
  async function sendRequest() {
    const response = await fetch(
      `http://localhost:3000/books/${getBookId.value}`
    );
    const data = await response.json();
    console.log(data);

    let p = document.createElement("p");
    p.style.marginLeft = "20px";
    p.style.fontSize = "1rem";
    p.innerHTML = `<h3>${data.data[0].title}</h3> \nby <i><b>${data.data[0].author}</b></i>`;
    resultDiv.appendChild(p);
  }
  if (getBookId.value) {
    sendRequest();
  } else {
    sendMsg(`Please Enter an ID`);
  }
}

const submitID = document.getElementById("id");
const submitTitle = document.getElementById("title");
const submitIsbn = document.getElementById("isbn");
const submitPubDate = document.getElementById("pub-date");
const submitAuthor = document.getElementById("author");

function submitBook() {
  resultDiv.innerHTML = "";

  async function sendRequest() {
    let newBook = {
      id: submitID.value,
      title: submitTitle.value,
      isbn: submitIsbn.value,
      publishedDate: submitPubDate.value,
      author: submitAuthor.value,
    };
    // let newBook = {
    //   id: "5",
    //   title: "God is Everything",
    //   ISBN: "546-654-654-654-123",
    //   publishedDate: "11/11/96",
    //   author: "Matt McArthur",
    // };
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
    p.innerHTML = `The request is a <i><b>${data.status}</b></i>`;
    p.style.marginLeft = "20px";
    p.style.color = data.status === "success" ? "green" : "red";
    p.style.fontSize = "1.75rem";
    resultDiv.appendChild(p);
  }
  if (
    !submitID.value ||
    !submitTitle.value ||
    !submitIsbn.value ||
    !submitPubDate.value ||
    !submitAuthor.value
  ) {
    sendMsg(`Please Enter all info.`);
  } else {
    sendRequest();
  }
}

function deleteBook() {
  async function sendRequest() {
    const response = await fetch(
      `http://localhost:3000/books/${deleteBookId.value}`,
      { method: "DELETE" }
    );
    const data = await response.json();
    console.log(data);
  }
  if (deleteBookId.value) {
    sendRequest();
  } else {
    sendMsg(`Please Enter an ID`);
  }
}
function editBookInfo() {
  resultDiv.innerHTML = "";

  async function sendRequest() {
    let newBook = {
      id: "5",
      title: "God is Mine",
      ISBN: "546-654-654-654-123",
      publishedDate: "11/11/96",
      author: "Bill Smith",
    };
    let options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBook),
    };
    let response = await fetch(
      `http://localhost:3000/books/${editBookId.value}`,
      options
    );
    let data = await response.json();
    console.log(data);

    let p = document.createElement("p");
    p.innerHTML = `The request is a <i><b>${data.status}</b></i>`;
    p.style.marginLeft = "20px";
    p.style.color = data.status === "success" ? "green" : "red";
    p.style.fontSize = "1.75rem";
    resultDiv.appendChild(p);
    resultDiv.style.backgroundColor = "green";
  }
  if (editBookId.value) {
    sendRequest();
  } else {
    sendMsg(`Please Enter an ID`);
  }
}

function sendMsg(msg) {
  let p = document.createElement("p");
  p.style.marginLeft = "20px";
  p.style.fontSize = "1rem";
  p.innerHTML = msg;
  resultDiv.appendChild(p);
}
