var express = require("express");
var router = express.Router();
// var path = require("path");


// READ THIS:
// https://expressjs.com/en/guide/routing.html

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

//var app = express();

var FRIENDS = require("../data/friends");  
var friends = new FRIENDS();
var friendsList = friends.getFriends();

// console.log("apiRoutes -> friendsList[1].name = " + friendsList[1].name);

// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
router.get("/api/friends", function(req, res) 
{
    // var operation = req.params.action.toLowerCase();
    // res.send(result.toString());
    // res.sendFile(path.resolve("app/public/survey.html"));

    res.json(friendsList);

    // console.log("apiRouts -? /api/friends -> GET");
});
    
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
router.post("/api/friends", function(req, res) 
{
    // var operation = req.params.action.toLowerCase();
    // res.send(result.toString());
    // res.sendFile(path.resolve("app/public/home.html"));

    //var newFriend = req.body;
    // friends.push(newFriend);
    // res.json(newFriend);
    // console.log("apiRouts -? /api/friends -> POST");

    var newFriend = req.body;
    console.log(newFriend);
    friends.addFriend(newFriend);
    res.json(newFriend);

/*
// Create New Characters - takes in JSON input
app.post("/api/characters", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newcharacter = req.body;

  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();

  console.log(newcharacter);

  characters.push(newcharacter);

  res.json(newcharacter);
});

*/







});

module.exports = router;



/*
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
*/

