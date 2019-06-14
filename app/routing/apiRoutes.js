var express = require("express");
var router = express.Router();

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

var FRIENDS = require("../data/friends");  
var friends = new FRIENDS();
var friendsList = friends.getFriends();

router.get("/api/friends", function(req, res) 
{
    res.json(friendsList);
});

router.post("/api/friends", function(req, res) 
{
    var newFriend = req.body;

    for (var i = 0; i < friendsList.length; i++)
    {
        console.log("friendsList["+i+"]" + "\n" + JSON.stringify(friendsList[i]));
    }

    for ( var j = 0; j < newFriend.scores.length; j++)
    {
        var tmpInt = Number.parseInt(newFriend.scores[j]);
        newFriend.scores[j] = tmpInt;
    }

    friends.addFriend(newFriend);
    res.json(newFriend);
});

module.exports = router;




