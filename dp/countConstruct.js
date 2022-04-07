// Given a string "target" and an array of strings "wordBank"
// Check if it is posssible to construct the target string using sub-strings 
// from wordBank array. Use subArray as many time as you need.
// Return number of ways to construct the target.

// For Example:- canConstruct("abcde", ["ab", "bc", "cde", "dce"]) --> 1
// canConstruct("skateboard", ["skate", "sk", "boar", "ate"]) --> 0

/**
* 1. Brute force O(n^m * m)
*/

function countCostruct(target, wordBank) {
  if (target === "") return 1;
  
  let numWays = 0;
  for (let word of wordBank) {
    if (target.startsWith(word)) {
      const suffix = target.slice(word.length);
      const suffixWays = countCostruct(suffix, wordBank);
      numWays += suffixWays;
      }
    }
    return numWays;
   }
   
   /**
   * 2. DP 
   */

function countCostruct(target, wordBank, memo={}) {
  if (target in memo) return memo[target];
  if (target === "") return 1;
  
  let numWays = 0;
  for (let word of wordBank) {
    if (target.startsWith(word)) {
      const suffix = target.slice(word.length);
      const suffixWays = countCostruct(suffix, wordBank, memo);
      numWays += suffixWays;
      }
    }
    memo[target] = numWays;
    return numWays;
   }
   
   
   /**
   * 2. DP -- tabulation -- O (m^2 * n) 
   */

function countConstruct(target, wordBank) {
    const table = Array(target.length + 1).fill(0);
    table[0] = 1;
    
    for (let i = 0; i <= target.length; i++) {
        for (let word of wordBank) {
            if (target.slice(i, i + word.length) === word) 
            table[i + word.length] += table[i];
        }
    }
    return table[target.length];
}

  
      
