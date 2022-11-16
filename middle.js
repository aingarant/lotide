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

const middle = (array) => {
  if (array.length < 3) return [];
  if (array.length % 2 !== 0) return array[Math.floor(array.length / 2)];
  if (array.length % 2 === 0) return [array[Math.floor(array.length / 2) - 1], array[Math.floor(array.length / 2)]];
};
console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2, 3, 4, 5, 6]));