const sumAll = function (n1, n2) {
  if (typeof n1 !== "number" || typeof n2 !== "number" || n1 < 0 || n2 < 0) {
    return "ERROR";
  }
  const n1IsBigger = n1 > n2;
  const start = n1IsBigger ? n2 : n1;
  const end = n1IsBigger ? n1 : n2;

  if (start === end) {
    return start;
  }
  return end + sumAll(start, end - 1);
};

// Do not edit below this line
module.exports = sumAll;
