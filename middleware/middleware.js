const morgan = require('./modules/morgan');
const exphbs = require('./modules/express-handlebars');
const helmet = require('./modules/helmet');

module.exports = app => {
    morgan(app);
    exphbs(app);
    helmet(app);
};
