const express = require("express");
const LoginRoute = express.Router();
const client = require("../db/Connecttoserver");
LoginRoute.post("/", (req, res, next) => {
  let { name, email } = req.body;
  client
    .connect()
    .then(() => {
      client.query(
        `SELECT name, email FROM todousers where name =$1 AND email = $2`,
        [name, email],
        (error, result) => {
          client.end();
          if (error) {
            next({ error: error.name });
          }
          if (result.rowCount === 1) {
            res.json({ message: "1" });
          } else {
            res.json({ message: "0" });
          }
        }
      );
    })
    .catch((error) => {
      console.log(error);
      next({ error: error.name });
    });
});

module.exports = LoginRoute;
