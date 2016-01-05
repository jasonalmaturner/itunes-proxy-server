var express = require('express');
var app = express();
var rp = require('request-promise');
var cors = require('cors');
var bodyParser = require('body-parser');
var port = process.env.EXPRESS_PORT || 9001;

app.use(bodyParser.json(), cors());

app.get('/api/itunes', function(req, res) {
  rp({
    method: 'GET',
    uri: 'https://itunes.apple.com/search',
    qs: req.query
  }).then(function(response) {
    return res.send(response);
  }).catch(function(err) {
    return res.status(500).json(err);
  });
});

app.listen(port, function() {
  console.log('listening on port:', port);
});
