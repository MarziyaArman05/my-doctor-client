import cred from "../fixtures/example.json";

var base64 = require("base-64");

class Decryption {
  static decoderdData(string) {
    return base64.decode(cred[string]);
  }
}
module.exports = Decryption;
