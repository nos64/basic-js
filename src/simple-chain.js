const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length;

    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  addLink(value) {
    if (value !== undefined) {
      this.arr.push(value);
      return this;
    } else {
      this.arr.push(`'(  )'`);
      return this;
    }

    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  removeLink(position) {
    let num = position - 1;
		if (num >= 0 && num < this.arr.length - 1 && Number.isInteger(num)) {
			this.arr.splice(num, 1);
			return this;
		} else {
			this.arr = [];
			throw new Error('You can\'t remove incorrect link!');
		}

    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  reverseChain() {
    this.arr.reverse();
    return this;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  finishChain() {
    const result = this.arr.map(item => `( ${item} )`);
		this.arr = [];
		return result.join('~~');

    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
};

module.exports = {
  chainMaker
};
