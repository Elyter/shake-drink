const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const ping = require('./routes/ping.js');
const alcools = require('./routes/alcools.js');
const softs = require('./routes/softs.js');

app.use('/', ping);
app.use('/', alcools);
app.use('/', softs);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
