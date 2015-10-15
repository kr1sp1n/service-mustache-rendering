var express = require('express');
var bodyParser = require('body-parser');
var rendering = require(__dirname + '/index.js');

var router = express.Router();
router.use(bodyParser.json());
router.use(rendering);
router.post('/', function(req, res) {
  res.send(req.result);
});

module.exports = router;
