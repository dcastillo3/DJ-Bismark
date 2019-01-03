//Express utility files


//Add trailing slash to path
const trailingSlash = (path) => path[path.length - 1] !== '/' ? `${path}/` : path;

//Get AWS S3 prefix for media files
const getPrefix = (apiPath) => apiPath.includes('/api/') ? trailingSlash(apiPath.slice(5)) : trailingSlash(apiPath);

//Prepare AWS S3 data for front end render
const cleanS3Data = (s3Data, s3Client) => {
    const cleanData = [];

      s3Data.Contents.forEach(s3Item => {
        if(s3Item.Key !== s3Data.Prefix) {
          const cleanItem = {};
          const params = {
            Bucket: s3Data.Name, 
            Key: s3Item.Key,
            //One session is 30 minutes
            Expires: 1800
          }

          cleanItem.name = s3Item.name || 'image';
          cleanItem.url = s3Client.getSignedUrl('getObject', params);
          cleanData.push(cleanItem);
        }
      })

    return cleanData;
}

//Object to export
const Utilities = {
  trailingSlash,
  getPrefix,
  cleanS3Data
}

module.exports = Utilities;
