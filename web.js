var express = require('express');
var fs = require('fs');
var app = express();

var buf = fs.readFile('index.html')


app.use(express.logger());

app.get('/', function(request, response) {
  response.send(buf.toString("utf-8"));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
