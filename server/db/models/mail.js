const mongoose = require('mongoose');

//research mongoose schema validation for objects
const bookingRequest = new mongoose.Schema({
    First: {
        value: String,
        formType: String,
        required: Number
    },
    Last: {
        value: String,
        formType: String,
        required: Number
    },
    Email: {
        value: String,
        formType: String,
        required: Number
    },
    Phone: {
        value: String,
        formType: String,
        required: Number
    },
    Organization: {
        value: String,
        formType: String,
        required: Number
    },
    Venue: {
        value: String,
        formType: String,
        required: Number
    },
    Location: {
        value: String,
        formType: String,
        required: Number
    },
    Date: {
        value: Date,
        formType: String,
        required: Number
    },
    Comments: {
        value: String,
        formType: String,
        required: Number
    }
})

module.exports = mongoose.model('Booking Request', bookingRequest);