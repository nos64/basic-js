const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(alphabet) {
    this.alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];;
    this.square = [];
  }

  generateSquare() {
    for (let i = 0; i < this.alphabet.length; i++) {
        let row = this.alphabet.slice(i);
        row += this.alphabet.slice(0, i);
        this.square.push(row);
    }
  }

  getSquare() {
    return this.square;
  }

  repeatString(firstString, secondString) {
    let resultString = "";
    // Длина финальной строки
    let firstStringLength = firstString.length;
    let it = 0;
    for (let i = 0; i < secondString.length; i++) {
        if (i % firstStringLength === 0) {
            it = 0;
        }
        resultString += firstString[it];
        it++;
    }
    return resultString;
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) throw new Error (`Incorrect arguments!`);
    let encryptMessage = "";
        // Дублируем ключ до длины сообщения
        let newKey = this.repeatString(key, message);
        // Генерируем квадрат Виженера
        this.generateSquare();
        for (let it = 0; it < message.length; it++) {
            // Индекс строки раный символу сообщения
            let i = this.alphabet.indexOf(message[it]);
            // Индекс колонки раный символу ключа
            let j = this.alphabet.indexOf(newKey[it]);
            // Зашифрованный символ равный пересечению индекса строки и колонки
            encryptMessage += this.square[i][j];
        }
        return encryptMessage;
  }

  decrypt(message, key) {
    if (message === undefined || key === undefined) throw new Error (`Incorrect arguments!`)    // throw new NotImplementedError('Not implemented');
 let decryptMessage = "";
        let newKey = this.repeatString(key, message);
        this.generateSquare();
        for (let it = 0; it < message.length; it++) {
            // Берем символ ключа и ищем индекс строки с данным символом
            let i = this.alphabet.indexOf(newKey[it]);
            let j = this.square[i].indexOf(message[it]);
            decryptMessage += this.alphabet[j];
        }
        return decryptMessage;
    }
}

module.exports = {
  VigenereCipheringMachine
};
