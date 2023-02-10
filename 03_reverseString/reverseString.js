/**
 *
 * @param {string} stringToReverse
 */

const reverseString = function (stringToReverse) {
  let retString = "";

  for (let i = stringToReverse.length - 1; i >= 0; i--) {
    retString += stringToReverse[i];
  }
  return retString;
};

// Do not edit below this line
module.exports = reverseString;
