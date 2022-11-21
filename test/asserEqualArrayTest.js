const eqArrays = require("../eqArrays");
const assertArrayEqual = (array1, array2) => {
  if (eqArrays(array1, array2)) return (array1 === array2) ? `✅✅✅ Assertion Passed: ${array1} === ${array2}` : `🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`;
};

module.exports = assertArrayEqual;