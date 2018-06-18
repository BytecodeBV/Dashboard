// Set NodeJS process environment variables
require('dotenv').config();

// NPM Dependency imports
const express = require('express');
const path = require('path');

// Project dependency imports
const middleware = require('./middleware');
const controllers = require('./controllers');

// File variables
const app = express();
const port = process.env.PORT;

// Register middleware
middleware.register(app);

// Set static directory
app.use('/public', express.static(path.join(__dirname, 'public/dist')));

// Register controllers
app.use('/', controllers);

// Run Express server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`); // eslint-disable-line
});
