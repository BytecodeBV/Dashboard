const mongoose = require('mongoose');

const OrganisationSchema = new mongoose.Schema({
    users: [
        {
            username: {
                type: String,
                required: true,
            },
            email: {
                type: String,
                required: true,
            },
            firstName: {
                type: String,
                required: true,
            },
            lastName: {
                type: String,
                required: true,
            },
            password: {
                type: String,
                required: true,
            },
            lastLogIn: {
                type: Date,
                required: false,
            },
        },
    ],
    moneybirdId: {
        type: Number,
        required: true,
    },
    contactDetails: {
        companyName: {
            type: String,
            required: true,
        },
        street: {
            type: String,
            required: true,
        },
        number: {
            type: Number,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        country: {
            type: String,
            required: true,
        },
        kvk: Number,
        btw: String,
    },
    projects: [
        {
            projectId: {
                type: Number,
                required: true,
            },
            status: {
                type: String,
                required: true,
            },
            updates: [
                {
                    placedBy: {
                        type: String,
                        required: true,
                    },
                    fileLink: {
                        type: String,
                        required: true,
                    },
                    message: {
                        type: String,
                        required: true,
                    },
                },
            ],
        },
    ],
    meetings: [
        {
            type: {
                type: Number,
                required: true,
            },
            date: {
                type: Date,
                required: true,
            },
            location: {
                type: String,
                required: true,
            },
            attendees: {
                type: [String],
                required: true,
            },
            status: {
                type: String,
                required: true,
            },
        },
    ],
});

// Create collection and add schema
module.exports = mongoose.model('Organisation', OrganisationSchema);
