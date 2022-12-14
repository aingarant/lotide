// index.js
const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');
const countOnly = require("./countOnly");
const letterPositions = require("./letterPositions");
const findKeyByValue = require("./findByKeyValue");
const eqObjects = require("./eqObjects");
const eqArrays = require("./eqArrays");
const flatten = require("./flatten");


module.exports = {
  head,
  tail,
  middle,
  countOnly,
  flatten,
  letterPositions,
  findKeyByValue,
  eqObjects,
  eqArrays
};