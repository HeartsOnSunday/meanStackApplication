var express = require('express');
var app = express();

app.set('port', process.env.PORT);


app.get('/', function(req, res) {
    console.log("Get the homepage");  //not logging to thr console
});

var server = app.listen(app.get('port'), function() {
    var port = server.address().port;
    console.log('Magic happens on port ' + port);
});


//localhost reffuses to connect
