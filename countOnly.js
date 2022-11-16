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

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

const countOnly = (allItems, itemsToCount) => {
  let countResult = {};

  for (let item of allItems) {
    // console.log(item);

    if (itemsToCount[item]) {
      if (countResult[item]) {
        countResult[item]++;
      } else {
        countResult[item] = 1;
      }
    }
  }
  return countResult;
};

// console.log(
//   countOnly(firstNames, {
//     Jason: true,
//     Karima: true,
//     Fang: true,
//     Agouhanna: false,
//   })
// );

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

console.log(assertEqual(result1["Jason"], 1));
console.log(assertEqual(result1["Karima"], undefined));
console.log(assertEqual(result1["Fang"], 2));
console.log(assertEqual(result1["Agouhanna"], undefined));
