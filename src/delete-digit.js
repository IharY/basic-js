const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  let newArray = [];
  let array = String(n).split("");
  for (let i = 0; i < array.length; i++) {
    let x = array.slice();
    x.splice(i, 1);
    newArray.push(Number(x.join("")));
  }
  return Math.max(...newArray);
}


module.exports = {
  deleteDigit
};
