const mongoose = require('mongoose');
const logger = require('./logger');

mongoose.Promise = global.Promise;
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => logger.info('MongoDB Connected'))
    .catch(err => {
        logger.error(`MongoDB connection error:\n ${err}`);
    });

if (process.env.NODE_ENV === 'development') {
    mongoose.set('debug', true);
}

// Import models
require('../models');
