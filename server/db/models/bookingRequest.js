const mongoose = require('mongoose');

//research mongoose schema validation for objects
const BookingRequest = new mongoose.Schema({
    First: {
        type: String,
        required: true
    },
    Last: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Phone: {
        type: String,
        required: true
    },
    Organization: {
        type: String,
        required: true
    },
    Venue: {
        type: String,
        required: true
    },
    Location: {
        type: String,
        required: true
    },
    Date: {
        type: Date,
        required: true,
    },
    Comments: {
        type: String
    },
    Status: {
        type: String,
        required: true,
        enum: ['Confirmed', 'Unconfirmed'],
        default: 'Unconfirmed'
    }
})

module.exports = mongoose.model('Booking Request', BookingRequest);