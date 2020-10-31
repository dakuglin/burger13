var express = require("express");
//var router = require('express').Router();
var burger = require("../models/burger"); //sending me an object
var server = require("../server")

var animals = [
    {
      animalType: "tttttttttttttt",
      pet: true,
      fierceness: 4
    }, {
      animalType: "cat",
      pet: true,
      fierceness: 10
    },
  ];

app.get("/", function(req, res) {
    res.render("index", animals[0]);

    //res.send("please work");
});