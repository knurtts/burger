const mysql = require("mysql");
// const PORT = process.env.PORT || 8080;
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "burgers_db"
});
}

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;