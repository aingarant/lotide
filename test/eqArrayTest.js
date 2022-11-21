const assertEqual = require('./assertEqualTest');
const eqArrays = require("../eqArrays");

const eqArrayTest = (input, expected) => {
  assertEqual(eqArrays(input, expected));
};

console.log(eqArrayTest(["Hello", "Lighthouse", "Labs"]), "Hello");
