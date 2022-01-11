/* Factorial of a non-negative integer */

/**
* 1. Brute force (iterative solution)
*/

function factorial(n) {
  if (n < 0) return -1;
  let factorial = 1;
  for (let i=1; i<=n; i++) {
    factorial*=i;
  }
  return factorial;
}

/**
* 2. Brute force (Recursive solution)
*/

function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n-1);
}
