const tail = (inputArray) => {
  return inputArray.length > 2 ? inputArray.slice(1) : [];
};

module.exports = tail;