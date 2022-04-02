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

/**
2. Dynamic programming solution (Memoization)
*/

function fib(n, memo = {}) {
  if (n in memo) return memo[n];
  
  if(n <= 1) return 0;
  if(n == 2) return 1;
  
  memo[n] = fib(n-1, memo) + fib(n-2, memo);
  return memo[n];
}

