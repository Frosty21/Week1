/* Question 2
 *
 *  Implement the functions defined below
 *
 */

/* ===========================================================================
 * MEDIAN - the middle number of a list (when sorted)
 *        - if the list length is even, then the median is the average of the two middle values
 *        - use the provided 'round' function before returning your value
 *
 * For example:
 *
 *    median([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    4
 */

function median(arr) {
  var arg = arr;
  arg.sort((a, b) => a - b);
  let medianNum = (arg[(arg.length - 1) >> 1] + arg[arg.length >> 1]) / 2;
  return medianNum;
}

function round(number) {
  return Math.round(number * 100) / 100;
}

// Don't change below:

module.exports = {
  median: median
};