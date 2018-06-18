const morgan = require('./modules/morgan');
const exphbs = require ('./modules/express-handlebars');

module.exports = app => {
    morgan(app);
    exphbs(app);
};
