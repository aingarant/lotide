const eqArrays = require('./eqArrays');

const eqObjects = (object1, object2) => {

  if (Object.keys(object1).length !== Object.keys(object2).length) return false;

  for (let key in object1) {

    // console.log(object1[key],object2[key])


    if (Array.isArray(object1[key]) || Array.isArray(object2[key])) {
      return (eqArrays(object1[key], object2[key])) ? true : false;
    }

    if (object1[key] !== object2[key]) return false;
  }

  return true;
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, dc)) // => true
console.log(eqObjects(cd, cd2))

module.exports = eqObjects;