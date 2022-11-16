// FUNCTION IMPLEMENTATION
const assertEqual = (actual, expected) => {
  let response = "";

  if (actual === expected) {
    response = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  } else {
    response = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  }
  return response;
};

const countLetters = (stringToCount) => {
  let result = {};

  for (let letter of stringToCount) {
    if (letter !== " ") {
      (result[letter]) ? result[letter]++ : result[letter] = 1;
    }

  }

  return result;
};

console.log(countLetters("lighthouse in the house"));
