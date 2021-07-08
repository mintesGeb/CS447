const jwt = require("jsonwebtoken");
const secret = "top-secret";

class JwtManager {
  generate(data) {
    let token = jwt.sign(data, secret);
    return token;
  }
  verify(token) {
    let data = jwt.verify(token, secret);
    return data;
  }
}

module.exports = new JwtManager();
