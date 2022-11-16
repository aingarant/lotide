const eqArrays = (array1, array2) => {
  if (array1.length !== array2.length) return false;

  for (let index in array1) {
    if (array1[index] !== array2[index]) return false;
  }

  return true;
};

const assertArraysEqual = (actual, expected) => {
  let response = "";

  if (eqArrays(actual, expected) === true) {
    response = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  } else {
    response = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  }
  return response;
};

const without = (array1, array2) => {
  let newArray = [];
  for (let item of array1) {
    if (!array2.includes(item)) {
      newArray.push(item);
    }
  }
  return newArray;
};
// console.log(without([1, 2, 3], [1]))
// without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// // // Make sure the original array was not altered by the without function
console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"]))
