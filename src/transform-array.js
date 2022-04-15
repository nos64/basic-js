const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr1) {
  if (!Array.isArray(arr1) || arr1 === null) throw new Error("\'arr\' parameter must be an instance of the Array!");
  let arr = arr1.slice()
  let result = [];
  
  if (arr.length === 0) return result
  for (let i = 0; i < arr.length; i++) {
    
    if (typeof arr[i] === 'number') result.push(arr[i])
    if (arr[i] === '--double-next' && arr[0] !== '--double-next' && arr[arr.length-1] !== '--double-next') {
      result.push(arr[i+1])
    } else if (arr[i] === '--double-prev' && arr[0] !== '--double-prev' && arr[arr.length-1] !== '--double-prev') {
      result.push(arr[i-1])
    } else if (arr[i] === '--discard-prev' && arr[0] !== '--discard-prev' && arr[arr.length-1] !== '--discard-prev') {
      result.pop(arr[i-1])
    } else if (arr[i] === '--discard-next' && arr[0] !== '--discard-next' && arr[arr.length-1] !== '--discard-next') {
      arr.splice(arr[i], 2)
    }
  }
  
  return result
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  transform
};
