var express = require('express');
var router = express.Router();
var Users = require("../models/users");

router.get("/getUsersByCategory/:category_id", function(req,res){
    Users.find({"preferences": req.params.category_id}).lean().exec(function(err,users){
       if(err)
           res.send(err);

       res.json(users);
    });
});


module.exports = router;
