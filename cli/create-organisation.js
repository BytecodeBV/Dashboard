/* eslint-disable arrow-body-style,no-console */

const Organisation = require('../models/Organisation');

const createOrganisation = answers => {
    const organisation = {
        moneybirdId: answers.moneybirdId,
        contactDetails: {
            companyName: answers.companyName,
            street: answers.street,
            number: answers.number,
            city: answers.city,
            country: answers.country,
            kvk: answers.kvk,
            btw: answers.btw,
        },
    };
    Organisation.create(organisation, err => {
        if (err) console.error(err);
        console.info('New contact added');
        process.exit();
    });
};

const fields = [
    'moneybirdId',
    'companyName',
    'street',
    'number',
    'city',
    'country',
    'kvk',
    'btw',
];

const questions = fields.map(field => {
    return {
        type: 'input',
        name: field,
        message: `Enter ${field}...`,
    };
});

module.exports = {
    createOrganisation,
    questions,
};
