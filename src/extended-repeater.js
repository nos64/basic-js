const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
  const {repeatTimes, //число повторений
  separator ='+', //разделитель
  addition = '', //доп. строка после каждого повторения
  additionRepeatTimes, //число повторений additions
  additionSeparator='', //разделитель для adition
} = options;
let addit = [];
if (additionRepeatTimes) {
  for (let i = 1; i<= additionRepeatTimes; i++) {
    let vari = addition.toString()+additionSeparator;
    addit.push(vari)
    console.log(addit)
  }
} else {
  let vari = addition.toString();
  
  addit.push(vari)
}

let result=''
// if (repeatTimes > 1) {
  result = str.toString()+addit.join('').slice(0, - additionSeparator.length)+separator;
// } else result = str.toString()+addit.join('')

// console.log('result:', result)
let resAr = [];
if (repeatTimes) {
  for(let i = 1; i<= repeatTimes; i++) {
    resAr.push(result)
    }
} else resAr.push(result)

return resAr.join('').toString().slice(0, -separator.length);

}

module.exports = {
  repeater
};
