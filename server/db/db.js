const mongoose = require('mongoose');
//Require secrets file in all modes except production
if (process.env.NODE_ENV !== 'production') require('../../secrets');

const mongoURI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@dj-bismark-i7qna.mongodb.net/test?retryWrites=true`;
const mongoOptions = {
    useNewUrlParser: true,
};

mongoose.connect(mongoURI, mongoOptions, err => {
    err ? console.log(err) : console.log('Connected to the database');
})