const jsonWebToken = require("jsonwebtoken");

const createToken = ({ user, expiresIn }) => {
  const secret = process.env.REACT_APP_JWT_SECRET;
  return jsonWebToken.sign(user, secret, {
    algorithm: "HS256",
    expiresIn: expiresIn || "2h",
  });
};

const decodeToken = (token) => {
  const secret = process.env.REACT_APP_JWT_SECRET;
  return jsonWebToken.verify(token, secret, {
    algorithm: "HS256",
    ignoreNotBefore: true,
  });
};

module.exports = { createToken, decodeToken };
