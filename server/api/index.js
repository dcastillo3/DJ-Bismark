const router = require('express').Router();
module.exports = router;

//Images route
router.use('/images', require('./images'));

//Videos route
router.use('/videos', require('./videos'));

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
