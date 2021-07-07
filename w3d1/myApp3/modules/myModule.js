module.exports = function strToArrofObj(str) {
  let list = [];
  str.split("\n").forEach((book) => {
    let forObj = book.split("-");

    let obj = {
      id: forObj[0],
      name: forObj[1],
      price: forObj[2],
    };
    if (obj.id) {
      list.push(obj);
    }
  });
  return list;
};
