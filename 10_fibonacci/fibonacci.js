const fibonacci = function (n) {
  const parsedNumber = parseInt(n);

  if (n < 0) {
    return "OOPS";
  }
  if (parsedNumber === 0) {
    return 0;
  }
  if (parsedNumber === 1) {
    return 1;
  }
  return fibonacci(parsedNumber - 1) + fibonacci(parsedNumber - 2);
};

// Do not edit below this line
module.exports = fibonacci;
