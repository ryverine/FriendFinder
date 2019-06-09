
// require("dotenv").config();
var express = require("express");
//var path = require("path");

//var OMDB = require("./omdb");
//var apiRoutes = require("./app/routing/apiRoutes");
var PAGE = require("./app/routing/htmlRoutes");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var htmlRoute = new PAGE();

app.listen(PORT, function() 
{
    console.log("App listening on PORT " + PORT);
    htmlRoute.getPage(app);
});
  