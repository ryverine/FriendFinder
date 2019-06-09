var express = require("express");
var path = require("path");

//var app = express();

var HTMLROUTE = function()
{
    this.getPage = function(theApp)
    {
        //console.log("htmlRoutes -> getPage(" + page + ")");
        console.log("htmlRoutes -> getPage()");

        // A GET Route to /survey which should display the survey page.
        theApp.get("/survey", function(req, res) 
        {
            // var operation = req.params.action.toLowerCase();
            // res.send(result.toString());
            res.sendFile(path.resolve("app/public/survey.html"));
        });
    
        // A default, catch-all route that leads to home.html which displays the home page.
        theApp.get("*", function(req, res) 
        {
            // var operation = req.params.action.toLowerCase();
            // res.send(result.toString());
            res.sendFile(path.resolve("app/public/home.html"));
        });
    };
}

module.exports = HTMLROUTE;

