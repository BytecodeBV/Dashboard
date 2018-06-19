const mongoose = require('mongoose');
const logger = require('./logger');

mongoose.Promise = global.Promise;
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => logger.info('MongoDB Connected'))
    .catch(err => {
        logger.error(`MongoDB connection error:\n ${err}`);
    });

// Import models
require('../models/Admin');
