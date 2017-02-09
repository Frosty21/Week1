// this will define the number of times rolling a dice from 1-6
// another way would be to put if else case where i > 0 put the ", " otherwise keep it out at the start
var dicerolled = process.argv.slice(2).toString();
var dicenumrolled = [];
function rolldice (dicerolled) {
  var min = 1;
  var max = 6;
  for (var i = 0; i < dicerolled; i++) {

      dicenumrolled += ", " + Math.floor(Math.random() * (max - min + 1) + min);

  }
return dicenumrolled.slice(2).toString();
}
console.log("Rolled ", dicerolled, " dice: ", rolldice(dicerolled));