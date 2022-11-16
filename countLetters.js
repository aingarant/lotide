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
    if (result[letter]) {
      result[letter]++;
    } else {
      result[letter] = 1;
    }
  }

  return result;
};

console.log(countLetters("Aingaran hates snow...Is it summer yet?"));
