var springmap = require("../index.js!./component.js");

var Careless = require("careless");
var obj = {
  a:1,b:2,c:3
};
console.log(Careless.renderToString(springmap.createSpringMap(obj)));