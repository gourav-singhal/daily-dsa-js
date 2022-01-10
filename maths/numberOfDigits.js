/* Count the number of digits in a long integer entered by a user. */

/**
* 1. Brute force method. (Iterative)
*/

function countDigits(n) {
  let numOfDigits = 0;
   while(n > 0) {
    n = Math.floor(n / 10);
    numOfDigits++;
  }

  return numOfDigits;
}

/**
* 1. Brute force method. (Recursive)
*/
function countDigits(n) {
const number = Math.floor(n / 10);
if (number == 0)
  return 1;
return 1 + countDigits(number);
}
