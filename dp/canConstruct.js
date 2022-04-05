// Given a string "target" and an array of strings "wordBank"
// Check if it is posssible to construct the target string using sub-strings 
// from wordBank array. Use subArray as many time as you need.

// For Example:- canConstruct("abcde", ["ab", "bc", "cde", "dce"]) --> true
// canConstruct("skateboard", ["skate", "sk", "boar", "ate"]) --> false

/**
* 1. Brute force O(n^m * m)
*/

function canConstruct(target, wordBank) {
  if (target === "") return true;
  
  for (let word of wordBank) {
    if (target.startsWith(word)) {
      const remainder = target.slice(word.length);
      if (canConstruct(remainder, wordBank) === true) return true;
    }
  }
  return false;
}

/**
* 2. DP O(n * m^2)
*/

function canConstruct(target, wordBank, memo={}) {
  if (target in memo) return memo[target];
  if (target === "") return true;
  
  for (let word of wordBank) {
    if (target.startsWith(word)) {
      const remainder = target.slice(word.length);
      if (canConstruct(remainder, wordBank, memo) === true) {
        memo[target] = true;
        return true
      };
    }
  }
  memo[target] = false;
  return false;
}
