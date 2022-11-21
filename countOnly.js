const countOnly = (allItems, itemsToCount) => {
  let countResult = {};

  for (let item of allItems) {
    if (itemsToCount[item]) {
      (countResult[item]) ? countResult[item]++ : countResult[item] = 1;
    }
  }
  return countResult;
};

module.exports = countOnly;

// console.log(
//   countOnly(firstNames, {
//     Jason: true,
//     Karima: true,
//     Fang: true,
//     Agouhanna: false,
//   })
// );

// // const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

// // console.log(assertEqual(result1["Jason"], 1));
// // console.log(assertEqual(result1["Karima"], undefined));
// // console.log(assertEqual(result1["Fang"], 2));
// // console.log(assertEqual(result1["Agouhanna"], undefined));
