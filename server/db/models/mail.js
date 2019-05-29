const mongoose = require('mongoose');

//research mongoose schema validation for objects
const emailSchema = new mongoose.Schema({
    First: {
        value: String,
        type: String,
        required: Number
    },
    Last: {
        value: String,
        type: String,
        required: Number
    },
    Email: {
        value: String,
        type: String,
        required: Number
    },
    Phone: {
        value: String,
        type: String,
        required: Number
    },
    Organization: {
        value: String,
        type: String,
        required: Number
    },
    Venue: {
        value: String,
        type: String,
        required: Number
    },
    Location: {
        value: String,
        type: String,
        required: Number
    },
    Date: {
        value: String,
        type: Date,
        required: Number
    },
    Comments: {
        value: String,
        type: String,
        required: Number
    }
})

module.exports = mongoose.model('Mail', emailSchema);