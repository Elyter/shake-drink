const express = require('express');
const app = express();

const ping = require('./routes/ping.js');

app.use('/', ping);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
