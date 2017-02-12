/* Question 0
 *
 *  Implement the functions defined below
 *
 */

/* ===========================================================================
 * COUNT - the number of numbers in a list
 *
 * For example:
 *
 *    count([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    9
 */
function count(arr) {
  var countNum = arr.length;
  return countNum;
}

/* ===========================================================================
 * SUM - the sum of the numbers in a list
 *
 * For example:
 *
 *    sum([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    36
 */
function sum(arr) {
  var sumNum = 0;
  for (var i in arr) {
    sumNum += arr[i];
  }
  return sumNum;
}
/* ===========================================================================
 * MEAN - the average value of numbers in a list
 *      - use the provided 'round' function when returning your value
 *
 * For example:
 *
 *    mean([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    4
 */
function mean(arr) {
  var meanNum = sum(arr) / count(arr);
  if (isNaN(meanNum)) {
    meanNum = null;
  }
  return meanNum;
}

function round(number) {
  return Math.round(number * 100) / 100;
}

// Don't change below:

module.exports = {
  count: count,
  sum: sum,
  mean: mean
};