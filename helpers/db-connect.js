const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.info('MongoDB Connected'))
    .catch(err => {
        console.error(`MongoDB connection error:\n ${err}`);
    });

// Import models
require('../models/Admin');
