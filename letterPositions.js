
const letterPositions = (sentence) => {
  const results = {};
  for (let index in sentence) {
    const letter = sentence[index];
    (results[letter]) ? results[letter].push(index) : results[letter] = [index];
  }
  return results;
};

