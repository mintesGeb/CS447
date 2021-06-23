function sayHi() {
  console.log(__dirname);
}
function sayHello() {
  console.log("hello");
}
module.exports = {
  sayHi: sayHi,
  f: sayHello,
};
