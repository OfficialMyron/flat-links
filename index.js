const bodyParser = require('body-parser');
var express = require('express');
var app = express();
app.get('/portal', function(req, res) {
    res.redirect(`https://discord.com`);
});
