const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

/**
 *
 * @param {array} arrayOfNumber
 * @returns
 */
const sum = function (arrayOfNumber) {
  return arrayOfNumber.reduce((prev, curr) => prev + curr, 0);
};

const multiply = function (arrayOfNumber) {
  return arrayOfNumber.reduce((prev, curr) => prev * curr, 1);
};

const power = function (x, y) {
  return Math.pow(x, y);
};

const factorial = function (n) {
  if (n === 1 || n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
