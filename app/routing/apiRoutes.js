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
    +
    console.log("Friends = " + friendsList.length);

    for (var i = 0; i < friendsList.length; i++)
    {
        console.log("friendsList["+i+"]" + "\n" + JSON.stringify(friendsList[i]));
    }

    // Step 1: get number of current friends
    // step 2: need array that will hold final score for each friend
    // step 3: loop through the friendsList
    // step 4: loop through the scores array
    // step 5: compate score for each question, calculate difference, add to tally var
    // step 6: add tally var to final score array
    // step 7: once all friends have been evaluated find friend with smallest difference

    // step 8: add newFriend: friends.addFriend(newFriend);

    
    console.log(newFriend);
    friends.addFriend(newFriend);
    res.json(newFriend);

    

});

module.exports = router;




