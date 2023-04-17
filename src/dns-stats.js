const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
// function getDNSStats(/* domains */) {
//   throw new NotImplementedError('Not implemented');
//   // remove line with error and write your code here
// }

// module.exports = {
//   getDNSStats
// };

function getDNSStats(domains) {
    let res = {};
  
    domains.forEach(domain => {
      let arr = domain.split('.').reverse();
      let key = '';
  
      arr.forEach(item => {
        key = key + '.' + item;
        res.hasOwnProperty(key) ? res[key]++ : res[key] = 1;
      })
    })
    
    return res;
  }
  
  module.exports = {
    getDNSStats
  };
