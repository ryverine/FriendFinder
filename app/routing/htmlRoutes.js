var express = require("express");

var router = express.Router();

var path = require("path");

// READ THIS:
// https://expressjs.com/en/guide/routing.html

//var app = express();


router.get('/survey', function (req, res) 
{
    // console.log("ROUTER: htmlRoutes -> /survey");
    res.sendFile(path.resolve("app/public/survey.html"));
});


router.get("*", function(req, res) 
{
    // console.log("ROUTER: htmlRoutes -> /home");
    res.sendFile(path.resolve("app/public/home.html"));
});

module.exports = router;

/*
var HTMLROUTE = function()
{
    this.getPage = function(theApp)
    {
        // console.log("htmlRoutes -> getPage(" + page + ")");
        // console.log("htmlRoutes -> getPage()");
        // console.log("APP.path: " + "\n" + theApp.path);

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
*/

