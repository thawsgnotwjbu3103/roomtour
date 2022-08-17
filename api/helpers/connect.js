const mysql = require("mysql")

const db = mysql.createConnection({
  host: "192.168.80.4:22",
  user: "mrjung",
  port: "3306",
  password: "mrjung@123!!!",
  database: "dev_amante",
});

db.connect(function(err) {
  if (err) throw err;
});

module.exports = db;
