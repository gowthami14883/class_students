// db.js
const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "company"
});

db.connect((err) => {
  if (err) {
    console.log("Database NOT connected", err);
  } else {
    console.log("Database Connected");
  }
});

module.exports = db;
