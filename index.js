var Careless = require('careless/main');

module.exports = function(content){
  var self = this;
  self.cacheable && self.cacheable();
  var value = Careless.transform(content);
  return value;
}