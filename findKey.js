const assertEqual = (actual, expected) => {
  return actual === expected
    ? `✅✅✅ Assertion Passed: ${actual} === ${expected}`
    : `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
};

const findKey = (object, callback) => {
  for (const item in object) {
    if (callback(object[item])) return item;
  }
  return undefined;
};

// expected output "noma"
const testExpected = "Blue Hill";
const gitErDone = findKey(
  {
    "Blue Hill": { stars: 1 },
    "Akaleri": { stars: 3 },
    "noma": { stars: 2 },
    "elBulli": { stars: 3 },
    "Ora": { stars: 2 },
    "Akelarre": { stars: 3 },
  },
  (x) => x.stars === 1
);

console.log(assertEqual(gitErDone, testExpected));
