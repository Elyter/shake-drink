const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "mysql-db",
    user: "root",
    password: "root_password",
    database: "shake_db"
});

connection.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to the database.");
});

module.exports = connection;