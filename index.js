var Mustache = require('mustache');

module.exports = function(req, res, next) {
  var template = req.body.template || "";
  var data = req.body.data || {};
  req.result = Mustache.render(template, data);
  next();
};
