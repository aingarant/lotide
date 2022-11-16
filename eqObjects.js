const assertEqual = require('./assertEqual');

const eqObjects = (object1, object2) => {

  if (Object.keys(object1).length !== Object.keys(object2).length) return false;

  for (let key in object1) {
    return (object1[key] !== object2[key]) ? false : true;
  }
};

module.exports = eqObjects;