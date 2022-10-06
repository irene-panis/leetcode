/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let numPlusOne = BigInt(digits.toString().replace(/,/g, "")) + BigInt(1);
  let newDigits = numPlusOne.toString().split('');
  newDigits.forEach(str => parseInt(str));
  return newDigits;
};
