module.exports = app => {
    if (process.env.NODE_ENV === 'development') {
        const responseTime = require('response-time');
        app.use(responseTime());
    }
};
