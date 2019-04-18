const express = require('express');
const app = express();

const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

const router = require('./routes');

process.setMaxListeners(Infinity);

app.use('/', router);

app.listen(3000);