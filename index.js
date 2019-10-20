const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const config = require('./src/config/AppConfigs');
const Router = require('./src/routes');


mongoose.connect(config.mongo.uri, config.mongo.options);
mongoose.connection
  .on('error', () => {
    process.exit(1);
  });

app.use(bodyParser.json());
app.use('/api', Router);

app.listen(config.port);

module.exports = app;
