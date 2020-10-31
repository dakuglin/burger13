// Dependencies
// ===========================================================
var express = require("express");
var exphbs = require("express-handlebars");
  
var app = express(); //create express app instance.
var PORT = process.env.PORT || 3000; //process.env.PORT lets the port be set by Heroku

//always need, sets up the express app to handle data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

//set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" })); //set up handlebars
app.set("view engine", "handlebars");  //Tell express to use handlebars

// var route = require("./controllers/burgers_controllers");
// app.use(route);

//start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    //log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});




// var animals = [
//     {
//       animalType: "tttttttttttttt",
//       pet: true,
//       fierceness: 4
//     }, {
//       animalType: "cat",
//       pet: true,
//       fierceness: 10
//     },
//   ];

app.get("/", function(req, res) {
    res.render("index");
});