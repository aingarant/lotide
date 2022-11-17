const eqArrays = (array1, array2) => {

  if (array1.length !== array2.length) return false;

  for (let index in array1) {
    if (array1[index] !== array2[index]) return false;
  }

  return true;
};
const assertArraysEqual = (actual, expected) => {
  return (eqArrays(actual, expected) === true) ? `✅✅✅ Assertion Passed: ${actual} === ${expected}` : `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
};