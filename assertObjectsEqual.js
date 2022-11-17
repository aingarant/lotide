const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  return (eqObjects(actual, expected) === true) ? `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}` : `🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;
};
