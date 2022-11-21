const flatten = function (input) {
  let output = [];


  if (Array.isArray(input)) {
    input.forEach(item => {
      if (Array.isArray(item)) {
        item.forEach(subItem => {
          output.push(subItem);
        });
      } else {
        output.push(item);
      }
    });
  }
  return output;
}
console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6])