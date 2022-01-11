/**
* Count number of zeroes in factorial of a integer
*/


/**
* 1. Brute force (iterative method)
*/

function countZeroes(n) {
  // find factorial
  let fact = 1;
  
  for (let i = 2; i <= n; i++) {
    fact *= i;
  }
  
  // count zeroes
  let res = 0;
  while(fact % 10 == 0) {
    res++;
    fact = fact / 10;
  }
  
  return res;
}

