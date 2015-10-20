var Mustache = require('mustache');

module.exports = function(options, done) {
  var template = options.template || "";
  var data = options.data || {};
  var result = Mustache.render(template, data);
  return done(null, result);
};
