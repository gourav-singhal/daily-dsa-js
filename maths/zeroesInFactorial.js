/**
* Count number of zeroes in factorial of a integer
*/


/**
* 1. Brute force (iterative method)
* Problem with this solution is that we may get a stack overflow error
* for very small integer values computing factorials.
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


/**
* 2. Better approach
* Compute Number of 2's and 5's in prime factors of n
* Since number of 2's is always greater than number of 5's we will 
* only compute number of 5's and that will be our answer in O(log(n)) time 
* as compared to above O(n) solution
*/

function countZeroes(n) {
  let res = 0;
  for (let i = 5; i <= n; i = i * 5) {
    res = res + Math.floor(n/i);
  }
  return res;
}

