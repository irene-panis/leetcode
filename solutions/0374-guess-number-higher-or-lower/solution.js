/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
  let result;
  let min = 1;
  let max = n;
  let myGuess = Math.floor((Math.random() * n) + 1); // guess a random number between 1 and n
  do {
    result = guess(myGuess);
    if (result == -1) {
      max = myGuess; // guess is too high; make guess new max
      myGuess = Math.floor((Math.random() * (max - min + 1)) + min); // make a new guess between max and min
    } else if (result == 1) {
      min = myGuess; // guess is too low; make guess new min
      myGuess = Math.floor((Math.random() * (max - min + 1)) + min); // make a new guess between max and min
    }
  } while (result !== 0);
  return myGuess;
};
