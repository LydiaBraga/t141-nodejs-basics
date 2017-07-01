const {host, port} = require('./config.js');
const express = require('express');
const bodyParser = require('body-parser');

// setup
const app = express();
app.use(bodyParser.json());
app.use(express.static('public'));

// Subscriber API
app.use('/api/subscribers', require('./subscriberAPI'));

// server startup
app.listen(port, () => console.log(`Server started at http://${host}:${port}`));