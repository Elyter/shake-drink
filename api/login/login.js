const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 3000;

// Create a connection to the database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'mydatabase'
});

// Connect to the database
connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to the database!');
});

// Use body-parser middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Define a login endpoint
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Query the database for the user with the given username and password
    const query = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;
    connection.query(query, (err, results) => {
        if (err) throw err;

        // If a user was found, return a success response
        if (results.length > 0) {
            res.status(200).json({ message: 'Login successful!' });
        } else {
            // Otherwise, return an error response
            res.status(401).json({ message: 'Invalid username or password.' });
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
