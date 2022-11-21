const assertEqual = require('./test/assertEqualTest');

const head = (inputArray) => {
  return inputArray[0] ? inputArray[0] : undefined;
};


console.log(assertEqual(head([5, 6, 7]), 5));
console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));
console.log(assertEqual(head([]), 5));