class Person {
  constructor(name) {
    this.name = name;
  }
  getName() {
    console.log(this.name);
  }
  sayHello() {
    console.log("hello, " + this.name);
  }
}

module.exports = Person;
