var words = ["ground", "control", "to", "major", "tom"];


function map(words, cb) {
  var newArray = [];

  for(var i = 0; i < words.length; i++) {
    newArray.push(cb(words[i]));
  }

  return newArray;
}


console.log(map(words, function(word) {
  return word.length;
}))

console.log(map(words, function(word) {
  return word.toUpperCase();
}))

console.log(map(words, function(word) {
  return word.split('').reverse().join('');
}))
