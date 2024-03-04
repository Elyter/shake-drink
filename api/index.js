const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const ping = require('./routes/ping.js');
const alcools = require('./routes/alcools.js');
const softs = require('./routes/softs.js');
const cocktails = require('./routes/cocktails.js')
const addCocktail = require('./routes/addCocktail.js')

app.use(express.json());

app.use('/', ping);
app.use('/', alcools);
app.use('/', softs);
app.use('/', cocktails)
app.use('/', addCocktail)


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
