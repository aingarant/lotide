const eqObjects = require('./eqObjects.js');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  return (eqObjects(actual, expected) === true) ? `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}` : `🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;
};

module.exports = "assertObjectsEqual";

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(assertObjectsEqual(cd,dc))