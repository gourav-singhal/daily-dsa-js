// Calculate fibonacci of given number "n"
// 0, 1, 1, 2, 3, 5, 8, 13, 21, ......

/**
1. Recursive approach O(2^n)
*/

function fib(n) {
  if(n <= 1) return 0;
  if(n == 2) return 1;
  
  return fib(n-1) + fib(n-2);
}

