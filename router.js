var express = require('express');
var bodyParser = require('body-parser');
var rendering = require(__dirname + '/index.js');

var router = express.Router();
router.use(bodyParser.json());
router.use(function(req, res, next) {
  try {
    req.body.template = JSON.stringify(req.body.template);
  } catch(e) {
    console.log(e);
  }
  next();
});
router.use(function(req, res, next) {
  var options = req.body;
  rendering(options, function(err, result) {
    if (err) { res.send(err) } else {
      res.result = result;
      next();
    }
  });
});
router.post('/', function(req, res) {
  var contentType = 'text/plain';
  try {
    res.result = JSON.parse(res.result);
    contentType = 'application/json';
  } catch(e) {
    console.log('NO');
    console.log(e);
  } finally {
    res.set('Content-Type', contentType);
    res.send(res.result);
  }

});

module.exports = router;
