const { Client } = require("pg");

const client = new Client({
  host: "localhost",
  port: 5432,
  database: "Mobitrail",
  user: "postgres",
  password: "ab$Y@2022",
});

module.exports = client;
