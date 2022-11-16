const eqArrays = (array1, array2) => {

  if (array1.length !== array2.length) return false;

  for (let index in array1) {
    if (array1[index] !== array2[index]) return false;
  }

  return true;
};


const assertArraysEqual = (actual, expected) => {

  if (eqArrays(actual, expected) === true) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertArraysEqual([1, 2, 3], [1, 2, 3])
assertArraysEqual([1, 2, 3], [3, 2, 1])
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"])
assertArraysEqual(["1", "2", "3"], ["1", "2", 3])