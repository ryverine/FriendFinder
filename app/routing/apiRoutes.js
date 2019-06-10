var express = require("express");
var path = require("path");

//var app = express();

var FRIENDS = require("./data/friends");  
var friends = new FRIENDS();
var friendsList = friends.getFriends();

var APIROUTE = function()
{
    this.processAPI = function(theApp)
    {
        // console.log("htmlRoutes -> getPage(" + page + ")");
        // console.log("htmlRoutes -> getPage()");
        // console.log("APP.path: " + "\n" + theApp.path);

        // A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
        theApp.get("/api/friends", function(req, res) 
        {
            // var operation = req.params.action.toLowerCase();
            // res.send(result.toString());
            // res.sendFile(path.resolve("app/public/survey.html"));
            console.log("friendsList: " + "\n" + friendsList)
            res.json(friendsList);
        });
    
        // A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
        theApp.post("/api/friends", function(req, res) 
        {
            // var operation = req.params.action.toLowerCase();
            // res.send(result.toString());
            // res.sendFile(path.resolve("app/public/home.html"));

            var newFriend = req.body;
            // friends.push(newFriend);
            // res.json(newFriend);

        });
    };
}

module.exports = APIROUTE;

