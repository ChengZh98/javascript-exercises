const repeatString = function (string, repeatTimes) {
  let finalString = "";
  if (repeatTimes < 0) {
    return "ERROR";
  }
  for (let index = 0; index < repeatTimes; index++) {
    finalString += string;
  }
  return finalString;
};

// Do not edit below this line
module.exports = repeatString;
