// Given a string "target" and an array of strings "wordBank"
// Check if it is posssible to construct the target string using sub-strings 
// from wordBank array. Use subArray as many time as you need.
// Return 2D array of substrings containing sequences to get target.

// For Example:- canConstruct("abcde", ["ab", "bc", "cde", "dce"]) --> 1
// canConstruct("skateboard", ["skate", "sk", "boar", "ate"]) --> 0

/**
* 1. Brute force O(n^m * m)
*/


function constructWays(target, wordBank) {
  if (target === '') return [[]];
  
  let result = [];
  for (let word of wordBank) {
    if (target.startsWith(word) {
        const suffix = target.slice(word.length);
        const suffixWays = constructWays(suffix, wordBank);
        
        const finalSuffixWays = suffixWays.map(way => [word, ...way]);
        result.push(...finalSuffixWays);
  }
}
return result;
}

/**
* 2. DP
*/

function constructWays(target, wordBank, memo={}) {
  if (target in memo) return memo[target];
  if (target === '') return [[]];
  
  const result = [];
  for(let word of wordBank) {
    if (target.startsWith(word)) {
      const suffix = target.slice(word.length);
      const suffixWays = constructWays(suffix, wordBank, memo);
      
      const targetWays = suffixWays.map(way => [word, ...way]);
      result.push(...targetWays);
    }
  }
  memo[target] = result;
  return result;
}
  
  
