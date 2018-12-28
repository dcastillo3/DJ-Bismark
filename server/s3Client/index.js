const AWS = require('aws-sdk');

//New instance of AWS S3 client
const s3Client = new AWS.S3({
  accessKeyId: process.env.AWS_IAM_ACCESS_KEY,
  secretAccessKey: process.env.AWS_IAM_SECRET_ACCESS_KEY,
  region: process.env.AWS_S3_REGION
});

module.exports = s3Client;