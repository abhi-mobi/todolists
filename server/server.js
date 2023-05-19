const express = require("express");
const app = express();
const LoginRoute = require("./Routes/Login");
const SingUP = require("./Routes/SingUP");
const cros = require("cors");

app.use(
  cros({
    origin: "*",
  })
);

app.use(express.json());

app.use("/Login", LoginRoute);
app.use("/singup", SingUP);

app.use((err, req, res, next) => {
  res.json(err);
});

app.listen(3001, () => {
  console.log("Listining on PORT 3001");
});
