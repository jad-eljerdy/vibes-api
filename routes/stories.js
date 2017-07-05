var express = require('express');
var router = express.Router();
var Stories = require("../models/stories.js");

//Get All
router.get("/", function(req,res){
    Stories.find().lean().exec(function(err,stories){
        if(err)
            res.send(err);

        res.json(stories);
    });
});

// Get By Id
router.get("/:stories_id", function(req,res){

    Stories.find({_id:req.params.stories_id}).lean().exec(function(err,story){
        if(err)
            res.send(err);

        res.json(story);
    })
});


// Create
router.post("/", function(req,res){
    var stories = new Stories(req.body);
    stories.save(function(err){

        if(err)
            res.send(err);

        res.send(200);
    });
});


// Delete
router.delete('/:stories_id', function(req,res){
    Stories.remove({_id:req.params.stories_id}, function(err){
        if(err)
            res.send(err);
        res.sendStatus(200);
    });
});

// Edit
router.put("/:stories_id", function(req,res){

    Stories.findById(req.params.stories_id, function(err,result) {
        if(err)
            res.send(err);

        if(req.body.content && req.body.content.contentype)
            result.content.contentype = req.body.content.contentype;

        if(req.body.content && req.body.content.url)
            result.content.url = req.body.content.url;

        if(req.body.user)
            result.user = req.body.user;

        if(req.body.timestamp)
            result.timestamp = req.body.timestamp;


        result.save(function(err){
            if(err)
                res.send(err);

            res.json(result);
        });
    });
});

module.exports = router;
