var express = require('express');

var app = express.createServer(express.logger());
var fs = require('fs');
 
var page = fs.readFileSync('./index.html');

app.get('/', function(request, response) {
    response.send(page.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
