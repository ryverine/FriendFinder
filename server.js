
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

app.listen(PORT, function() 
{
    console.log("App listening on PORT " + PORT);
});

app.use('/survey', PAGE);

app.use('*', PAGE);



/*
// IDEA: use this and then direct to app.use based on 

router.get("*", function(req, res) 
{
    console.log("ROUTER: htmlRoutes -> /home");
    res.sendFile(path.resolve("app/public/home.html"));
});
*/


  

