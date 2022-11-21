# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @aingarant/lotide`

**Require it:**

`const _ = require('@aingarant/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head`: Accepts and array and returns the first element of the array
* `middle`: Accepts an array as input and returns the middle element(s)
* `tail`: Accepts an array as input and returns a new array with the first element removed
* `countOnly`: Accepts an array as input and returns an object with a count of each element of the array
* `flatten`: Accepts an array as input and returns flattened into a single array.
* `letterPositions`: Accepts a string returns an object and returns each letter as a key and the index 
* `findKeyByValue`: Accepts ab object and returns the first key that matches a given value.
* `eqObjects`: Compares two objects and returns true if equal, or false.
* `eqArray`: Compares two arrays and returns true if equal, or false.

Instruction
