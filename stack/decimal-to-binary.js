import Stack from './stack.js';
/** 
* Converts a decimal number to binary.
* @summary Time complexity: O(log n) - where n is the decimal number.
* @param {number} decimal - The decimal number to be converted to binary.
* @return {string} The binary representation of the decimal number.
*/
const decimalToBinary = (decimal) => {
  const stack = new Stack();
  let result = decimal;
  let mod;
  let binary = '';
  while(result !== 0) {
    mod = Math.floor(result % 2);
    stack.push(mod);
    result = Math.floor(result / 2);
  }
  while(!stack.isEmpty()) {
    binary = `${binary}${stack.pop()}`;
  }
  return binary;
};

export default decimalToBinary;