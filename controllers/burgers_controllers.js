var express = require("express");
// Middleware, using express router to run inside our controller 
var router = require('express').Router();
//import the model (burger.js) to use the database functions, separation of concerns 
var burger = require("../models/burger.js"); 


//routes with logic
router.get("/", function(req, res) {
    //call our orm to get the data we need
    burger.selectAll(function(data) {
        var hbsObject = {
            burger: data
        };
        console.log(hbsObject)
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res) {

    burger.insertOne([
        "burger_name", "devoured"
    ], [
        req.body.burger_name, req.body.devoured
    ], function(result) {
        //send back the ID of the new burger
        res.json({id:result.insertId})
    })
});

router.put("/api/burgers/:id", function(req, res) {

    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.updateOne({
        devoured: req.body.devoured
    }, condition, function(result) {
        if (result.changedRows === 0) {
            return res.status(404).end();
        }
        else {
            res.status(200).end();
        }
    });
});

//export routes for server.js to use
module.exports = router;