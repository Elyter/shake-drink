const express = require('express');
const app = express();

const ping = require('./routes/ping.js');
const login = require('./login/login.js');

app.use('/ping', ping);
app.use('/login', login);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
