const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */


// function encodeLine(/* str */) {
//   throw new NotImplementedError('Not implemented');
//   // remove line with error and write your code here
// }

// module.exports = {
//   encodeLine
// };

function encodeLine(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    const regex = new RegExp(str[i] + '+', 'i');
    const length = str.match(regex)[0].length;
    if (length === 1) {
      result += str[i];
    } else {
      result += length + str[i];
    }
    i += length - 1;
  }
  return result;
}

module.exports = {
  encodeLine
};