// There is a robot on an m x n grid. 
// The robot is initially located at the top-left corner (i.e., grid[0][0]). 
// The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). 
// The robot can only move either down or right at any point in time.

// Given the two integers m and n, return the number of possible unique paths that 
// the robot can take to reach the bottom-right corner.

// Input: m = 2, n = 3
// Output: 3

/**
*1. Brute Force (2^m+n)
*/
function gridTraveller(m, n) {
  if (m == 1 && n == 1) return 1;
  if (m == 0 || n == 0) return 0;
  
  return gridTraveller(m-1, n) + gridTraveller(m, n-1);
}


/**
*2. DP O(m*n)
*/
function gridTraveller(m, n, memo={}) {
  const key = `${m},${n}`;
  
  if (key in memo) return memo[key];
  if (m == 0 || n == 0) return 0;
  if (m == 1 && n == 1) return 1;
  
  memo[key] = gridTraveller(m-1, n, memo) + gridTraveller(m, n-1, memo);
  return memo[key];
}

/**
* 3. DP using tabulation
*/

function gridTraveller(m, n) {
  const table = Array(m+1).fill().map(() => Array(n+1).fill(0));
  table[1][1] = 1;
  
  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      if (j+1 <= n) table[i][j+1] += table[i][j];
      if (i+1 <= m) table[i+1][j] += table[i][j];
    }
  }
  return table[m][n];
}
  
