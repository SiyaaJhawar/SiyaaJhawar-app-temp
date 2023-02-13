const fs = require("fs");
const jwt = require("jsonwebtoken");

async function authenticate() {
  const appId = 292855;
  const apiUrl = "https://api.github.com";

  const privateKey = fs.readFileSync("private.key.enc", "utf-8");

  const header = {
    alg: "RS256",
    typ: "JWT"
  };
  const payload = {
    iat: Math.floor(Date.now() / 1000),
    exp: Math.floor(Date.now() / 1000) + (10 * 60), 
    iss: appId
  };
  const jwtToken = jwt.sign(payload, privateKey, { algorithm: "RS256", header });
  process.env.ACCESS_TOKEN = jwtToken;
}

authenticate();















