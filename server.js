
// require("dotenv").config();
var express = require("express");
//var path = require("path");

//var OMDB = require("./omdb");
//var apiRoutes = require("./app/routing/apiRoutes");
var PAGE = require("./app/routing/htmlRoutes");
var API = require("./app/routing/apiRoutes");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var htmlRoute = new PAGE();
var apiRoute = new API();

/*
app.get("*", function(req, res) 
{
    // var operation = req.params.action.toLowerCase();
    // res.send(result.toString());
    // res.sendFile(path.resolve("app/public/home.html"));
    
    //console.log("SERVER JS -> ANY PAGE");
});
*/

app.listen(PORT, function() 
{
    console.log("App listening on PORT " + PORT);
    apiRoute.processAPI(app); // do this before htmlRoute?
    htmlRoute.getPage(app);
});


  

