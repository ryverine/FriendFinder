

var friends = [
    {
        "name":"Ruky Chookie",
        "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores":[5,1,4,2,5,1,3,2,1,1]
    },
    {
        "name":"Bert Scrambles",
        "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores":[2,5,1,3,2,1,5,1,4,3]
    },
    {
        "name":"Tanky BoomBoom",
        "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores":[3,2,1,5,1,4,2,5,1,5]
    }
];


var FRIENDS = function()
{
    this.getFriends = function()
    {
        return friends;
    };

    this.addFriend = function(theFriend)
    {
        
        friends.push(theFriend);
    };
}

module.exports = FRIENDS;

