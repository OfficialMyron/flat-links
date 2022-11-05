var express = require('express')
  , http = require('http');
var app = express();

// all environments
app.set('port', process.env.PORT || 3000);

app.get('/user/portal/', function(req, res){
  res.redirect('https://roblox.com');
});
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
