const router = require('express').Router();
module.exports = router;

//Images route
router.use('/images', require('./images'));

//Videos route
router.use('/videos', require('./videos'));

//Bookings route
router.use('/bookings', require('./bookings'));

//Mail route
router.use('/mail', require('./mail'));

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
