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
  additionSeparator='|', //разделитель для adition
} = options;

  if (str === null && addition === null) {
    let newStr = '';
    let newAddit = '';
    newStr = 'null';
    newAddit = 'null';
    let addit = [];
    let resultAddition = '';
    if (additionRepeatTimes) {
      let vari=newAddit+additionSeparator;
      for (let i = 1; i<= additionRepeatTimes; i++) {
        addit.push(vari)

      }
      if (additionSeparator.length !== 0) {
        resultAddition = addit.join('').slice(0, - additionSeparator.length);
      } else {
        resultAddition = addit.join('');
      }
    } else {
      let vari = newAddit;
      addit.push(vari);
    }

    let result='';
    if (repeatTimes > 1) {
      result = newStr + resultAddition+separator;
      
    } else {
    result = newStr + addit.toString() + separator;
    }

    let resAr = [];
    if (repeatTimes) {
      for(let i = 1; i<= repeatTimes; i++) {
        resAr.push(result)
        }
    } else resAr.push(result)

    return resAr.join('').toString().slice(0, -separator.length);
    


  } else {
    let newStr = str + ''
    let newAddit = addition + '';
    let addit = [];
    let resultAddition = '';
    if (additionRepeatTimes) {
      let vari=newAddit+additionSeparator;
      for (let i = 1; i<= additionRepeatTimes; i++) {
        addit.push(vari)
      }
      if (additionSeparator.length !== 0) {
        resultAddition = addit.join('').slice(0, - additionSeparator.length);
        
      } else {
        resultAddition = addit.join('');
      }
    } else {
      let vari = newAddit.toString();
      addit.push(vari);
    }
    

    let result='';
    if (repeatTimes >= 1) {
      result = newStr + resultAddition+separator;
      
    } else {
    result = newStr + addit.toString() + separator;
    }
    let resAr = [];
    if (repeatTimes) {
      for(let i = 1; i<= repeatTimes; i++) {
        resAr.push(result)
        }
    } else resAr.push(result);
    
    return resAr.join('').toString().slice(0, -separator.length);
  }

}

module.exports = {
  repeater
};
