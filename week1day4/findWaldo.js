// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  arr.forEach(function(item, i) {
    if (arr[i] === "Waldo") {
      found(i);   // execute callback
    }
  });
}

function actionWhenFound(index) { //calback function actionwhenfound(i)
  console.log("Found him!");
  console.log("Found Waldo at index: "+ index);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);