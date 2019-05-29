const mongoose = require('mongoose');

//research mongoose schema validation for objects
const BookingRequest = new mongoose.Schema({
    First: String,
    Last: String,
    Email: String,
    Phone: String,
    Organization: String,
    Venue: String,
    Location: String,
    Date: Date,
    Comments: String
})

module.exports = mongoose.model('Booking Request', BookingRequest);