
const findKeyByValue = (allShows, oneShow) => {
  for (let i in allShows) {
    if (oneShow === allShows[i]) return i;
  }
};

module.exports = findKeyByValue;