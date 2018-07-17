// Set NodeJS process environment variables
require('dotenv').config();

// Use Sqreen
if (process.env.SQREEN_ENABLE) {
    require('sqreen');
    require('./helpers/logger').info('Sqreen enabled');
}

// NPM Dependency imports
const express = require('express');
const path = require('path');

// Mongoose setup
require('./helpers/db-connect');

// Project dependency imports
const middleware = require('./middleware');
const routes = require('./routes');
const logger = require('./helpers/logger');

// File variables
const app = express();
const port = process.env.PORT;

// Register middleware
middleware.register(app);

// Set static directories
app.use('/public', express.static(path.join(__dirname, 'public/dist')));
app.use('/public/img', express.static(path.join(__dirname, 'public/img')));

// Register routes
app.use('/', routes);

// Run Express server
app.listen(port, () => {
    logger.info(`Server listening on port ${port}`); // eslint-disable-line
});
