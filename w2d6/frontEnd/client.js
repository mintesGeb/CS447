async function getData() {
  let response = await fetch("http://localhost:3000/books");
  let data = await response.json();
  console.log(data.data);
}
getData();
