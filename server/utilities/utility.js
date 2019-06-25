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

const parseBookingRequest = (formData) => {
  let sanitizedObj = {};

  for(let field in formData) {
    sanitizedObj[field] = formData[field].value;
  }

  return sanitizedObj;
}

const parseBookingRequestEmail = (formData) => {
  let emailInfo = {
    replyTo: formData.Email.value,
    subject: '',
    html: ''
  }

  //fill subject
  let subject = 'DJ Bismark | New Booking Request'
  emailInfo.subject += subject;
  
  //fill header html
  let header = '<p>Hi DJ Bismark,</p><p>You have a new booking request, the details are below:</p>';
  emailInfo.html += header;
  
  //fill body html
  for (let field in formData) {
    emailInfo.html += `<p><strong>${field}: </strong>${formData[field].value}</p>`;
  }

  return emailInfo;
}

//Object to export
const Utilities = {
  trailingSlash,
  getPrefix,
  cleanS3Data,
  parseBookingRequest,
  parseBookingRequestEmail
}

module.exports = Utilities;
