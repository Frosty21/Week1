/* Question 4
 *
 *  Implement the 'stdev' function defined below
 *
 * STDEV  - the square root of the average of the squared deviations of the values from their average value
 *        - you are allowed to look at Wikipedia's example calculation:
 *            https://en.wikipedia.org/wiki/Standard_deviation#Basic_examples
 *
 *        - use the provided 'round' function before returning your final value
 *        - you can take a square root using `Math.sqrt(number)`
 *
 * For example:
 *
 *    stdev([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    2.67
 */

var _00 = require("./00");

function round(number) {
  return Math.round(number * 100) / 100;
}

function stdev(arr) {
  var mean = _00.mean;
  var sum = _00.sum;
  var squareDiffs = arr.map(function(value) {
    var diff = value - mean(arr);
    var sqrDiff = diff * diff;
    return sqrDiff;
  });

  var avgSquareDiff = mean(squareDiffs);
  var stDevNum = round(Math.sqrt(avgSquareDiff));

  return stDevNum;
}

// Don't change below:

module.exports = {
  stdev: stdev
};