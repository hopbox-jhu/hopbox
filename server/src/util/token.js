import jsonWebToken from "jsonwebtoken";

export const createToken = ({ user, expiresIn }) => {
  //const secret = process.env.REACT_APP_JWT_SECRET;
  const secret = "d41d8cd98f00b204e9800998ecf8427f";
  return jsonWebToken.sign(user, secret, {
    algorithm: "HS256",
    expiresIn: expiresIn || "2h",
  });
};

export const decodeToken = (token) => {
  //const secret = process.env.REACT_APP_JWT_SECRET;
  const secret = "d41d8cd98f00b204e9800998ecf8427f";
  return jsonWebToken.verify(token, secret, {
    algorithm: "HS256",
    ignoreNotBefore: true,
  });
};

//module.exports = { createToken, decodeToken };
