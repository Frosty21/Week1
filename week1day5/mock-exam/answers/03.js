/* Question 3
 *
 *  Implement the 'mode' function defined below
 *
 * MODE - the most frequently occuring number
 *      - for this test, the provided lists will only have a single value for the mode
 *
 * For example:
 *
 *    mode([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    6
 */
// copied from http://stackoverflow.com/questions/1053843/get-the-element-with-the-highest-occurrence-in-an-array
// only works on the 1st run but not the 2nd run

// function mode(arr) {
//   var array = arr;
//   var modeMap = {};
//   var maxEl = array[0];
//   var maxCount = 1;
//   if (array.length === 0) {
//     return null;
//   }
//   for (var i = 0; i < array.length; i++) {
//     var el = array[i];
//     if (modeMap[el] === null) {
//       modeMap[el] = 1;
//     } else {
//       modeMap[el]++;
//     }
//     if (modeMap[el] > maxCount) {
//       maxEl = el;
//       maxCount = modeMap[el];
//     }
//   }
//   return maxEl;
// }

// copied from http://stackoverflow.com/questions/1053843/get-the-element-with-the-highest-occurrence-in-an-array
// this uses the filter numbers matching to sort the numbers from most repeated up top us
function mode(arr) {
  var modeNum = arr.sort((a, b) => arr.filter(v => v === a).length - arr.filter(v => v === b).length).pop();
  return modeNum;
}

// Don't change below:

module.exports = {
  mode: mode
};