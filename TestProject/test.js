'use strict'

function Fn(){
  return 1989;
};
Fn.prototype.name = 'testName';
Fn.prototype.getYear = function(){
  return 1989;
};
var s=new Fn();

console.log(Fn(),s.name,s.getYear());





// console.log(obj.s1);
