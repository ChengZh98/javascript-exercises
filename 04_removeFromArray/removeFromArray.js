/**
 *
 * @param {array} array
 * @param  {...any} args
 * @returns
 */

const removeFromArray = function (array, ...args) {
  return array.filter((val) => {
    return args.findIndex((itemToRemove) => itemToRemove === val) === -1;
  });
};

// Do not edit below this line
module.exports = removeFromArray;
