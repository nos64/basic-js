const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(num) {
  let result = 0;
  let t = 0.693/HALF_LIFE_PERIOD;
  if (typeof num === 'string') {
    if (+num > MODERN_ACTIVITY || +num > 9000 || parseInt(num) <= 0 || isNaN(parseInt(num))) return false;
    else {
      result = Math.log(MODERN_ACTIVITY / num) / t;
      return Math.ceil(result, 1)
    }
  } 
  else return false

  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  dateSample
};
