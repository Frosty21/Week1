function countLetterPostions(str) {
  var obj = {};

  for (var x = 0; x < str.length; x++) {
    var l = str.charAt(x);
    if (l === " ") {
      continue;
    }
    if (!obj[l]) {
      obj[l] = [];
    }
    obj[l].push(x);
  }
  return obj;
}
console.log(countLetterPostions("light house"));


/* // counts the first duplicated letter in that array
var re = /([a-z])(?:.*)(\1)+/g;
var str = ['hello', 'here', 'happiness', 'pupil'];
var m;
var result = new Array();

for(var i = 0; i < str.length; i++) {
  result[i] = str[i] + "->";
  while ((m = re.exec(str[i])) !== null) {
      if (m.index === re.lastIndex) {
          re.lastIndex++;
      }
      // View your result using the m-variable.
      // eg m[0] etc.
    result[i] += m[1];
    result[i] += m[2] + ",";
  }
}
console.log(result);
*/