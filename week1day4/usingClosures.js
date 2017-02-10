function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  var trackNum = 0;
list[trackNum];
  return function() {
    return list[trackNum++]
  };
}

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4

var countdownGenerator = function(x) {
  var timer = x;
  return function() {
    if (timer >= 1) {
      console.log('T-minus ${timer}...')
      timer--;
      return timer;
    } else if (timer === 0) {
      console.log('Blast Off!')
      timer--;
      return timer;
    } else {
      console.log('Rockets already gone bub')
      return timer;
    }
  };
}

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!

