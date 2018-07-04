const morgan = require('./modules/morgan');
const exphbs = require('./modules/express-handlebars');
const helmet = require('./modules/helmet');
const responseTimeHeader = require('./modules/response-time-header');


module.exports = app => {
    morgan(app);
    exphbs(app);
    helmet(app);
    responseTimeHeader(app);
};
