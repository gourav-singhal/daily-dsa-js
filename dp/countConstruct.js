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
   
   
   
   
   
      
