var express = require('express');
var router = express.Router();
var Categories = require("../models/categories.js");

//Get All
router.get("/", function(req,res){
    Categories.find().lean().exec(function(err,categories){
        if(err)
            res.send(err);

        res.json(categories);
    });
});

// Get By Id
router.get("/:categories_id", function(req,res){

    Categories.find({_id:req.params.categories_id}).lean().exec(function(err,category){
        if(err)
            res.send(err);

        res.json(category);
    })
});


// Create
router.post("/", function(req,res){
    var categories = new Categories(req.body);
    categories.save(function(err){

        if(err)
            res.send(err);

        res.send(200);
    });
});


// Delete
router.delete('/:categories_id', function(req,res){
    Categories.remove({_id:req.params.categories_id}, function(err){
        if(err)
            res.send(err);
        res.sendStatus(200);
    });
});

// Edit
router.put("/:categories_id", function(req,res){

    Categories.findById(req.params.categories_id, function(err,result) {
        if(err)
            res.send(err);

        if(req.body.title)
            result.title = req.body.title;

        if(req.body.image)
            result.image = req.body.image;


        result.save(function(err){
            if(err)
                res.send(err);

            res.json(result);
        });
    });
});

module.exports = router;
