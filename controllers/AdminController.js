const Admin = require('../models/Admin');

const show = (req, res) => {
    Admin.find({ username: req.params.username }).then(admins => {
        res.render('index/admin', {
            admins,
        });
    });
};

module.exports = {
    show,
};
