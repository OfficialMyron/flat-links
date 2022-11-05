var express = require('express');
const bodyParser = require('body-parser');
var app = express();
app.get('/portal', function(req, res) {
    res.redirect(`https://discord.com`);
});
