/**
 * Created by jadeljerdy1 on 7/5/17.
 */
var express = require('express');
var router = express.Router();
var s3upload = require("./s3upload.js");

router.post('/', s3upload.upload.single('photoid'), function(req,res){ //Callback
    //The image is req.file.location
    res.send(req.file);
});


module.exports = router;