const findKey = (object, callback) => {
  for (const item in object) {
    if (callback(object[item])) return item;
  }
  return undefined;
};