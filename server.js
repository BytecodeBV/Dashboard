// Set NodeJS process environment variables
require('dotenv').config();

// Dependency imports
const express = require('express');
const middleware = require('./middleware');

// File variables
const app = express();
const port = process.env.PORT;

// Register middleware
middleware.register(app);

app.get('/', (req, res) => {
    res.send('hello world');
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`); // eslint-disable-line
});
