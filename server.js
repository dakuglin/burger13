var express = require("express");

var PORT = process.env.PORT || 3000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import and register routes and give the server access to them.
var routes = require("./controllers/burgers_controllers.js");
// Starts process of app actually listening on routes
app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});


/*

  server - load up our routes
  route listener = controller

  -- a given route is recieved/hit by the server ("/")
  -- the controller is listening and dectects a request on that route
     - controller call the cat mode, and requests all data from burgers, it renders all the burgers to the view (via handlebars)


*/