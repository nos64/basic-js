const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const files = {};
	const result = [];
	names.forEach(item => {
		if (!(item in files)) {
      if (result.includes(item)) files[item] = 1;
      else files[item] = 0;
    } 
		else files[item]++;

    if (files[item] > 0) result.push(`${item}(${files[item]})`);
		else result.push(item);
	})
  
	return result;

  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  renameFiles
};
