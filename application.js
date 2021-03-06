var express = require('express');
var app = express();
var path = require('path');

app.set('port', process.env.PORT);

app.get('/', function(req, res) {
    console.log('Get the homepage');
    res.status(404);
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/json', function(req, res) {
    console.log('Get the json');
    res.status(200);
    res.json({"jsonData" : true});
});

app.get('/file', function(req, res) {
    console.log('Get the file');
    res.status(200);
    res.sendFile(path.join(__dirname, 'application.js'));
});

var server = app.listen(app.get('port'), function() {
    var port = server.address().port;
    console.log('Magic happens on port ' + port);
});

