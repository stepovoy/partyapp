const express = require('express');
const app = express();

const router = require('./routes');

process.setMaxListeners(Infinity);

app.use('/', router);

app.listen(3000);