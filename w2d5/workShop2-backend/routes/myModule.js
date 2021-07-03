module.exports = function strToArrofObj(str) {
  let booksList = [];
  str.split("\n").forEach((book) => {
    let forObj = book.split("_");

    let obj = {
      id: forObj[0],
      title: forObj[1],
      ISBN: forObj[2],
      publishedDate: forObj[3],
      author: forObj[4],
    };
    if (obj.id) {
      booksList.push(obj);
    }
  });
  return booksList;
};
