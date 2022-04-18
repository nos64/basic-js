const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let result = Array.from(matrix).map(item => item.map(item => item === false ? +item : item))
  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result[i].length; j++) {
      if (result[i][j] === true  && i === 0) {
        if (j === 0) {
          result[i][j+1] +=1
          result[i+1][j] +=1
        } else if (j === result[i].length - 1) {
          result[i][j-1] +=1
          result[i+1][j] +=1
        } else {
          result[i][j-1] +=1
          result[i][j+1] +=1
          result[i+1][j] +=1
        }
      }
      else if (result[i][j] === true  && i === result.length - 1) {
        if (j === 0) {
          result[i][j+1] +=1
          result[i-1][j] +=1
        } else if (j === result[i].length - 1) {
          result[i][j-1] +=1
          result[i-1][j] +=1
        } else {
          result[i][j-1] +=1
          result[i][j+1] +=1
          result[i-1][j] +=1
        }
      } else if (result[i][j] === true && i !== 0 && i !== result.length - 1) {
          if (j === 0) {
            result[i][j+1] +=1
            result[i-1][j] +=1
            result[i+1][j] +=1
          } else if (j === result[i].length - 1) {
            result[i][j-1] +=1
            result[i+1][j] +=1
            result[i-1][j] +=1
          } else {
            // result[i-1][j-1] +=1
            result[i-1][j] +=1
            result[i-1][j+1] +=1
            result[i][j-1] +=1
            result[i][j+1] +=1
            result[i+1][j-1] +=1
            result[i+1][j] +=1
            result[i+1][j+1] +=1

          }
      }
  
    }
  }

    return result.map(item => item.map(item => item === true ? +item : item))
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  minesweeper
};
