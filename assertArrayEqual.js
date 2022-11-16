const eqArrays = require('./eqArrays');

const assertArraysEqual = (actual, expected) => {
  return (eqArrays(actual, expected) === true) ? `✅✅✅ Assertion Passed: ${actual} === ${expected}` : `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
};

module.exports = assertArraysEqual;