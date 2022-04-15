const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let res = email.split('')
  let rez = []
    for (let i = 0; i < res.length; i++) {
      if (res[i] === '@') {
        rez = res.slice(i+1, res.length)
      }
    }
  
 return rez.join('')
return email.match(/@\D*/g).join().slice(1)

  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  getEmailDomain
};
