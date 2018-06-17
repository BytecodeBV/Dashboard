const morgan = require('./modules/morgan');

module.exports = app => {
    morgan(app);
};
