

var friends = [
    {
        "name":"Ruky Chookie",
        "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores":[5,1,4]
    },
    {
        "name":"Bert Scrambles",
        "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores":[2,5,1]
    },
    {
        "name":"Tanky BoomBoom",
        "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores":[3,2,1]
    }
];


var FRIENDS = function()
{
    this.getFriends = function()
    {
        // console.log("friends js -> getFriends()" + "\n" +
                    //"friends[0].name = " + friends[0].name);
        return friends;
    };

    this.addFriend = function(theFriend)
    {
        
        friends.push(theFriend);
    };
}

module.exports = FRIENDS;

