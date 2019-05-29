const mongoose = require('mongoose');

const mongoURI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@dj-bismark-i7qna.mongodb.net/dj-bismark?retryWrites=true`;
const mongoOptions = {
    useNewUrlParser: true,
};

//left off here, check correct connection to export
const mongoDB = () => mongoose.connect(mongoURI, mongoOptions, err => {
    err ? console.log(err) : console.log('Connected to the database');
})

module.exports = mongoDB;