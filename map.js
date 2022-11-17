

const eqArrays = (array1, array2) => {


  if (array1.length !== array2.length) return false;

  for (let index in array1) {
    if (array1[index] !== array2[index]) return false;
  }

  return true;
};

const assertArraysEqual = (actual, expected) => {
  return eqArrays(actual, expected) === true
    ? `✅✅✅ Assertion Passed: ${actual} === ${expected}`
    : `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
};

const words = ["ground", "control", "to", "major", "tom"];

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

// console.log(map(words, function(word) {
//   return word;
// }));
// const testExpected = ["ground", "control", "to", "major", "tom"];
// console.log(
//   assertArraysEqual(
//     map(words, function (word) {
//       return word;
//     }), testExpected
//   ));


console.log(map(words, function (word) {
  return word.toUpperCase();
}));

const testExpected = ['GROUND', 'CONTROL', 'TO', 'MAJOR', 'TOM'];

console.log(
  assertArraysEqual(
    map(words, function (word) {
      return word.toUpperCase();
    }), testExpected
  ));






