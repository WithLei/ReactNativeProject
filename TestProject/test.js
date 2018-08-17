'use strict';
function asyncF(name){
  return new Promise(function(resolve){
    setTimeout(function(){
      resolve('my name is ' + name);
    });
  });
}

function* fn(){
  console.log('test');
  console.log('return' + (yield asyncF('leo')));
}

let gf = fn();

function exec(gf, value){
  console.log(gf + " " + value);
  let result = gf.next(value);
  if(!result.done){
    if(result.value instanceof Promise){
      result.value.then(function(v){
        exec(gf,v);
      });
    }else{
      exec(gf,result.value);
    }
  }

}

exec(gf);
