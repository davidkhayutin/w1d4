function findWaldo(arr, found) {
  arr.forEach(function(item, i){
    if(item === "Waldo") {
      found(i);   // execute callback
    }
  });
}

function actionWhenFound(i) {
  console.log("Found him! " +i);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);



