const express = require("express");
const clinet = require("../db/Connecttoserver");
const SingUPRoutes = express.Router();

SingUPRoutes.post("/", (req, res, next) => {
  let { name, email } = req.body;
  console.log(req.body);
  console.log({ name, email });
  clinet
    .connect()
    .then(() => {
      clinet.query(
        `INSERT INTO todousers (name,email) VALUES ($1,$2)`,
        [name, email],
        (error, result) => {
          clinet.end((err) => {
            console.log("client has disconnected");
            if (err) {
              console.log("error during disconnection", err.stack);
            }
          });
          if (error) {
            next({ error: error.name });
          }
          console.log(result);
          res.json({ message: "Data insert succefully" });
        }
      );
    })
    .catch((error) => {
      console.log(error);
      next({ error: "db faild" });
    });
});

module.exports = SingUPRoutes;
