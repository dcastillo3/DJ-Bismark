const router = require('express').Router();
const s3Client = require('../s3Client');
const {getPrefix, cleanS3Data} = require('../utilities');

//AWS S3 get all images of type
router.get('/:type', (req, res, next) => {
  console.log('getting images');
  const params = {
    Bucket: `${process.env.AWS_S3_BUCKET}`,
    Prefix: getPrefix(req.originalUrl)
  }
  console.log('PARAMS ARE:', params);

  s3Client.listObjects(params, (err, data) => {
    if (err) {
      console.log('ERROR IS: ', err, err.stack);
    } else {
      console.log('DATA IS: ', cleanS3Data(data, s3Client));
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