const assertEqual = (actual, expected) => {
  let response = "";

  if (actual === expected) {
    response = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  } else {
    response = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  }
  return response;
};


const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};


const findKeyByValue = (allShows, oneShow) => {
  for (let i in allShows) {
    if (oneShow === allShows[i]) return i;
  }
};




console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"));
console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined));


// console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"))
// console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show")))