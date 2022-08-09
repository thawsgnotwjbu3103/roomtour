const mysql = require("mysql");

const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  port: "3306",
  password: "",
  database: "dev_amante",
});

module.exports = { mysql, db };
