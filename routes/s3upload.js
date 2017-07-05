/**
 * Created by jadeljerdy1 on 7/5/17.
 */

var AWS = require('aws-sdk');
var multer = require('multer');
var multerS3 = require('multer-s3');

AWS.config.update({
    accessKeyId: 'AKIAJDU6Z4SIKU5QUHPQ',
    secretAccessKey: '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',
    signatureVersion: 'v4',
    region: 'eu-central-1'
});

var s3 = new AWS.S3({params: {Bucket: 'vibes-s3'}});

var upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'vibes-s3',
        acl: 'public-read',
        contentType: multerS3.AUTO_CONTENT_TYPE,
        metadata: function (req, file, cb) {
            // console.log('test');
            cb(null, {fieldName: file.fieldname});
        },
        key: function (req, file, cb) {
            cb(null, Date.now().toString() + '.' + file.originalname.split(".")[file.originalname.split(".").length-1])
        }
    })
});


module.exports = {
    upload: upload
};