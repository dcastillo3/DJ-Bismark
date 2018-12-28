const express = require('express');
const morgan = require('morgan');
const compression = require('compression');
// const session = require('express-session');
// const db = require('./db');
const PORT = process.env.PORT || 8080;
const app = express();
module.exports = app;

//Require secrets file in all modes except production
if (process.env.NODE_ENV !== 'production') require('../secrets');

const createApp = () => {
  // logging middleware
  app.use(morgan('dev'));

  // body parsing middleware
  app.use(express.json());
  app.use(express.urlencoded({extended: true}));

  // compression middleware
  app.use(compression());

  // session middleware with passport
  // app.use(
  //   session({
  //     secret: process.env.SESSION_SECRET,
  //     store: sessionStore,
  //     resave: false,
  //     saveUninitialized: false
  //   })
  // )

  // routes
  app.use('/api', require('./api'));

  // error handling endware
  app.use((err, req, res, next) => {
    console.error(err);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'Internal server error.');
  })
}

const startListening = () => {
  // start listening (and create a 'server' object representing our server)
  const server = app.listen(PORT, () =>
    console.log(`Listening on port ${PORT}`)
  )
}

async function bootApp() {
  await createApp();
  await startListening();
}

// This evaluates as true when this file is run directly from the command line,
// i.e. when we say 'node server/index.js' (or 'nodemon server/index.js', or 'nodemon server', etc)
// It will evaluate false when this module is required by another module - for example,
// if we wanted to require our app in a test spec
if (require.main === module) {
  bootApp();
} else {
  createApp();
}