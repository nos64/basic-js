const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {

  let x = date.getMonth()
  
  if (x === 11 || x === 0 || x === 1) return 'winter'
  else if (x === 2 || x === 3 || x === 4) return 'spring'
  else if (x === 5 || x === 6 || x === 7) return 'summer'
  else if (x ===  8 || x === 9 || x === 10) return 'autumn'

  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  getSeason
};
