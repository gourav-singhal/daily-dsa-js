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
* 2. Brute force method. (Recursive)
*/
function countDigits(n) {
const number = Math.floor(n / 10);
if (number == 0)
  return 1;
return 1 + countDigits(number);
}


/**
* 3. Log based solution
* Since for eg a 4 digit number (n):-
* 1000 <= n <10000 (taking log)
* 3 <= log10(n) < 4
* n -1 <= log10(n) < n 
* n <= log10(n)+ 1 < n + 1 (taking floor(truncating decimals) and considering left part of equation)
* n = Math.floor(log10(n)+ 1)
*/
function countDigits(n) {
  return Math.floor(Math.log10(n) + 1);
}

/**
* 4. Convert number to string and find length of string
*/
function countDigits(n) {
    return n.toString().length;
}


