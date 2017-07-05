var express = require('express');
var router = express.Router();
var Users = require("../models/users.js");

//Get All
router.get("/", function(req,res){
  Users.find().populate("preferences").lean().exec(function(err,users){
    if(err)
      res.send(err);

    res.json(users);
  });
});

// Get By Id
router.get("/:user_id", function(req,res){

  Users.find({_id:req.params.user_id}).populate("preferences").lean().exec(function(err,user){
    if(err)
      res.send(err);

    res.json(user);
  })
});


// Create
router.post("/", function(req,res){
  var users = new Users(req.body);
    users.save(function(err){

    if(err)
      res.send(err);

    res.send(200);
  });
});


// Delete
router.delete('/:user_id', function(req,res){
    Users.remove({_id:req.params.user_id}, function(err){
        if(err)
            res.send(err);
        res.sendStatus(200);
    });
});

// Edit
router.put("/:user_id", function(req,res){
    Users.findById(req.params.user_id, function(err,result) {
        if(err)
            res.send(err);

        if(req.body.email)
            result.email = req.body.email;

        if(req.body.phone)
            result.phone = req.body.phone;

        if(req.body.username)
            result.username = req.body.username;

        if(req.body.password)
            result.password = req.body.password;

        result.save(function(err){
            if(err)
                res.send(err);

            res.json(result);
        });
    });
});

//Add A preference to user id
router.put("/addpref/:user_id/:category_id", function(req,res){

  Users.findById(req.params.user_id, function(err,result){
    if(err)
      res.send(err);

      result.preferences.push(req.params.category_id);

      result.save(function(err){
          if(err)
              res.send(err);

          res.json(result);
      });
  });
});

router.put("/removepref/:user_id/:category_id" ,function(req,res){
    Users.findById(req.params.user_id, function(err,result){
        if(err)
            res.send(err);

        result.preferences.splice(
            result.preferences.indexOf(req.params.category_id),1);

        result.save(function(err){
            if(err)
                res.send(err);

            res.json(result);
        });
    });
});


module.exports = router;
