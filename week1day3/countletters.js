function countletters(str) {
  var obj = {};
  var repeats = [];
  var noSpaces = str.split(" ").join("").toLowerCase();

  for (var x = 0, length = noSpaces.length; x < length; x++) {
    var l = noSpaces.charAt(x);
    obj[l] = (isNaN(obj[l]) ? 1 : obj[l] + 1);
  }
  return obj;
}
console.log(countletters("light house"));

// Another way to count letters using the reduce function
// \/s+ removes all empty space characters or asci space in the array via one go
// /g is defined as global and pull the global function
// lettertally is an empty object {} with letter as the index
// ant the end lettertally will return the value
/*
function countLetters(str) {
  return Array.from(str.replace(/\s+/g, '')).reduce((letterTally, letter) => {
    if (!letterTally[letter]) {
      letterTally[letter] = 0;
    }
    letterTally[letter]++;
    return letterTally;
  }, {});
}

console.log(countLetters("lighthouse in the house"));
 */