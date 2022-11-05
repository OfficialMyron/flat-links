const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
var express = require('express');
var app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/portal', function(req, res) {
    res.redirect(`https://discord.com`);
});

const listener = app.listen(port, () => {
    console.log(`App listening at port ${port}`);
});
