// function will then return the printed items of name="sum"
// then the character within the arguments
// and with => will denote what the arguments will be
// using the apply higher function to callback the arguments
// before the sum function
var wrapLog = function(callback, name) {
  return function() {
    console.log(name +"("+arguments[0]+", "+arguments[1]+") => "+callback.apply(this, arguments));
  }
};

var sum = function(a, b) {
  return a + b;
};
// this will set wraplog with the sum of a+b and the string "sum"
var logSum = wrapLog(sum, "sum");

logSum(5, 3); // sum(5,3) => 8
logSum(3, 2); // sum(3,2) => 5