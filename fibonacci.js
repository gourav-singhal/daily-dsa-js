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

/**
3. Dynamic programming solution (Tabulation)
*/

function fib(n) {
  const table = new Array(n+1).fill(0);
  table[1] = 1;
  
  for (let i = 0; i <= n; i++) {
    table[i+1] += table[i];
    table[i+2] += table[i];
  }
  return table[n];
}

