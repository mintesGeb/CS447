class User {
  constructor(username, password, role) {
    this.username = username;
    this.password = password;
    this.role = role;
  }
  login() {
    return users.find(
      (user) =>
        user.username === this.username && user.password === this.password
    );
  }
}
const users = [
  new User("john", "admin123", "admin"),
  new User("edward", "edward567", "user"),
];

module.exports = User;
