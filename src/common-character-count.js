const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let count = 0;
const s1Arr = s1.split('').sort((a, b) => a-b)
const s2Arr = s2.split('').sort((a, b) => a-b)
for (let i = 0; i < s1Arr.length; i++) {
  for (let j = 0; j < s2Arr.length; j++) {
    if (s2Arr.includes(s1Arr[i]))
    count++
    break

    i++
  }
}
return count
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  getCommonCharacterCount
};
