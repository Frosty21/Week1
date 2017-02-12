// was missing mid variable for when the string is odd length

function isPalindrome(s) {
  var noSpaces = s.split(" ").join("").toLowerCase();
  var mid = Math.floor(noSpaces.length / 2);
  var last = noSpaces.length - 1;

  for (var i = 0; i < mid; i++) {
    //console.log(i.toString(), noSpaces,": ", noSpaces[i], noSpaces[last - i]);
    if (noSpaces[i] !== noSpaces[last - i]) {
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;