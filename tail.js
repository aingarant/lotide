const assertEqual = require('./test/assertEqualTest');

const tail = (inputArray) => {
  return inputArray.length > 2 ? inputArray.slice(1) : [];
};

// const words = [];
const words = ["Yo Yo", "Lighthouse", "Labs"];
// const words = ["Labs"];

tail(words); // no need to capture the return value since we are not checking it
console.log(assertEqual(words.length, 3));