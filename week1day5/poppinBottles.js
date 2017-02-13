// copied from https://github.com/amccrodan/poppin-bottles/blob/master/poppin-bottles.js
// was missing Math.floor on inital value for fullBottles

// the value of how much your going to spend is initally passed through argv, with inital bottleDeport values of 0
// and then through poppinBottles dividing the amount you can buy by 2
// if no bottles then exit out of function
// else fullbottles is going to keep adding recursively the full bottles, back from empties and back from caps
// then will return to the start of the function until initial bottles === 0 is met (like a for loop)
// this will give the final amount of bottles and caps collected and also recycled amount as well.

input = process.argv.slice(2);

function poppinBottles(initBottles, currentEmpties, currentCaps) {
  if (initBottles === 0) {
    console.log(initBottles);
    return;
  }
  poppinBottles.bottleDepot.fullBottles += Math.floor(initBottles);
  poppinBottles.bottleDepot.backFromEmpties += Math.floor(initBottles / 2);
  poppinBottles.bottleDepot.backFromCaps += Math.floor(initBottles / 4);

  poppinBottles.bottleDepot.leftEmpties = initBottles % 2;
  poppinBottles.bottleDepot.leftCaps = initBottles % 4;
  console.log(initBottles);
  poppinBottles(Math.floor(initBottles / 2) + Math.floor(initBottles / 4),
    initBottles % 2, initBottles % 4);
}

poppinBottles.bottleDepot = {
  fullBottles: 0,
  backFromEmpties: 0,
  backFromCaps: 0,
  currentEmpties: 0,
  currentCaps: 0,
  leftEmpties: 0,
  leftCaps: 0
};

// $20
poppinBottles(Number(input) / 2);
console.log("You will get " + poppinBottles.bottleDepot.fullBottles + " bottles total.");
console.log("This includes " + poppinBottles.bottleDepot.backFromEmpties + " bottles from empties, and " +
  poppinBottles.bottleDepot.backFromCaps + " from caps.");
console.log("You have " + poppinBottles.bottleDepot.leftEmpties + " empty bottle(s) and " +
  poppinBottles.bottleDepot.leftCaps + " cap(s) left.");

// 10 bottles - 5 + 2 bottles - 3 + 1 bottles - 2 + 1 bottles - 1 bottle