

var express = require("express");

var PAGE = require("./app/routing/htmlRoutes");
var API = require("./app/routing/apiRoutes");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/api/friends', API);
app.post('/api/friends', API);

app.get('/survey', PAGE);
app.get('*', PAGE);

app.listen(PORT, function() 
{
    console.log("App listening on PORT " + PORT);
});
