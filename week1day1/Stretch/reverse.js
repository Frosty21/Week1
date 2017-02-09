// var word = process.argv.slice(2);

var word = "hello world" ;
function reverseword (word) {
var newword = "";
for (var i = 0; i < word.length; i++) {
  if (word[i] === " ") {
    newword += "\n";
  }
  else {
    newword += word[(word.length - (i+1))];
  }
}

return newword;
}
console.log(reverseword(word));