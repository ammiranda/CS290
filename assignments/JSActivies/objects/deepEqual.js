var deepEqual = function(obj_a, obj_b) {
  for (var key in obj_a) {
     if (obj_b[key] === undefined) {
       return false;
     } 

     if (obj_b[key] instanceof Object && obj_a[key] instanceof Object) {
        if (!deepEqual(obj_b[key], obj_a[key])) {
          return false;
        } 
     } else if (obj_b[key] !== obj_a[key]) {
        return false;
     }    
  }
  return true;
}

var objC = {a: 5, b: 4};
var objD = {a: 5, b: 4};

console.log(deepEqual(objC, objD));

var objA = {a: [["abba"], 4], b: 4};
var objB = {a: [["abba"], 4], b: 4};

console.log(deepEqual(objA, objB));

var objE = {b: {c: {a: 5, b: 6}}, c: [{a: 5}, 4]};
var objF = {b: {c: {a: 5, b: 6}}, c: [{a: 5}, 4]};

console.log(deepEqual(objE, objF));

var objX = {b: {c: 4}, c: 5};
var objY = {b: {c: 4}, c: 5};

console.log(deepEqual(objY, objX));
