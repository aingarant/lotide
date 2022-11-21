const middle = (array) => {
  if (array.length < 3) return [];
  if (array.length % 2 !== 0) return array[Math.floor(array.length / 2)];
  if (array.length % 2 === 0) return [array[Math.floor(array.length / 2) - 1], array[Math.floor(array.length / 2)]];
};

module.exports = middle;
