const exphbs = require('express-handlebars');

module.exports = app => {
    app.engine(
        'hbs',
        exphbs({
            defaultLayout: 'main',
            extname: 'hbs',
        }),
    );
    app.set('view engine', 'hbs');
};
