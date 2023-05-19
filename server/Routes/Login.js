const express = require("express");
const LoginRoute = express.Router();
const client = require("../db/Connecttoserver");
LoginRoute.post("/", (req, res, next) => {
  let { name, email } = req.body;
  client
    .connect()
    .then(() => {})
    .catch((error) => {
      console.log(error);
      next({ error: error.name });
    });
  res.json(body);
});

module.exports = LoginRoute;
