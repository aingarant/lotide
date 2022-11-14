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

const tail = (inputArray) => {
  return inputArray.length > 2 ? inputArray.slice(1) : [];
};

// TEST CODE
// const result = tail(["Hello", "Lighthouse", "Labs"]);
// console.log(assertEqual(JSON.stringify(result), JSON.stringify(["Lighthouse", "Labs"])))


const words = [];
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// const words = ["Labs"];

tail(words); // no need to capture the return value since we are not checking it
console.log(assertEqual(words.length, 3));