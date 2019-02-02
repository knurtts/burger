const mysql = require("mysql");
const PORT = process.env.PORT || 8080;
const connection = mysql.createConnection({
    host: "localhost",
    port: PORT,
    user: "root",
    password: "root",
    database: "burgers_db"
});

module.exports = connection;