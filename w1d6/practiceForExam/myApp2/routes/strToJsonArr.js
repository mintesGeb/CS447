module.exports = function getArrOfJson(str, type = "user") {
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
};
