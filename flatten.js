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


module.exports = flatten;