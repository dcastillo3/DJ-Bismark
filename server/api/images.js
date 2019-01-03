const router = require('express').Router();
const s3Client = require('../s3Client');
const {getPrefix, cleanS3Data} = require('../utilities').utility;


//AWS S3 get all images of type
router.get('/:type', (req, res, next) => {
  const params = {
    Bucket: `${process.env.AWS_S3_BUCKET}`,
    Prefix: getPrefix(req.originalUrl)
  }

  s3Client.listObjects(params, (err, data) => {
    if (err) {
    } else {
      res.send(cleanS3Data(data, s3Client))
    }
  })
})


//AWS S3 get single image
// router.get('/:fileName', (req, res, next) => {
//   const params = {
//     Bucket: `${process.env.AWS_S3_BUCKET}/images/venues`,
//     Key: req.params.fileName
//   }

//   const url = s3Client.getSignedUrl('getObject', params);
//   res.json(url);
// })

module.exports = router;