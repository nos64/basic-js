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
  let stringN = n.toString().split('');
	let result = [];

	for (let i = 0; i < stringN.length; i++) {
		let num = stringN.slice();
		num.splice(i, 1)
		result.push(num.join(''));
	}
  result.sort((a, b) => b - a);
	return +result[0];

  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  deleteDigit
};
