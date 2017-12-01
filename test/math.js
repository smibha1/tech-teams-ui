const add = (a, b) => {
  console.log('hello');
  return a + b;
};

const multiply = (a, b) => {
  return a * b
}

const subtract = (a, b) => a - b;

exports.add = add;
exports.subtract = subtract;
exports.multiply = multiply;
